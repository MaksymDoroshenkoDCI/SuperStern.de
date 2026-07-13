import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';

const JWT_SECRET = process.env.JWT_SECRET || 'super-stern-secret-key-12345';

export const dynamic = 'force-dynamic';

// Helper to validate PLZ
function validateBerlinPlz(address: string): boolean {
  const plzRegex = /\b\d{5}\b/g;
  const matches = address.match(plzRegex);
  if (!matches) return false;
  return matches.some(plz => {
    const code = parseInt(plz, 10);
    return code >= 10000 && code <= 14199;
  });
}

// GET /api/orders - Get all orders (Admin only)
export async function GET(request: Request) {
  try {
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ message: 'Nicht autorisiert' }, { status: 401 });
    }

    const token = authHeader.split(' ')[1];
    let decoded;
    try {
      decoded = jwt.verify(token, JWT_SECRET);
    } catch (err) {
      return NextResponse.json({ message: 'Ungültiges Token' }, { status: 401 });
    }

    const orders = await prisma.order.findMany({
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(orders);
  } catch (error: any) {
    console.error('Error fetching orders:', error);
    return NextResponse.json({ message: 'Fehler beim Abrufen der Bestellungen' }, { status: 500 });
  }
}

// POST /api/orders - Create a new order
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { clientName, clientEmail, clientPhone, address, serviceType, spaceSize, totalPrice, bookingDate } = body;

    if (!clientName || !clientEmail || !clientPhone || !address || !serviceType || !spaceSize || !totalPrice || !bookingDate) {
      return NextResponse.json({ message: 'Bitte füllen Sie alle Felder aus.' }, { status: 400 });
    }

    if (!validateBerlinPlz(address)) {
      return NextResponse.json({
        message: 'Wir bieten unseren Service aktuell nur in Berlin an (PLZ 10000 - 14199). Bitte geben Sie eine Adresse in Berlin an.'
      }, { status: 400 });
    }

    const order = await prisma.order.create({
      data: {
        clientName,
        clientEmail,
        clientPhone,
        address,
        serviceType,
        spaceSize: parseFloat(spaceSize.toString()),
        totalPrice: parseFloat(totalPrice.toString()),
        bookingDate: new Date(bookingDate),
      },
    });

    // Send email via Nodemailer
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: Number(process.env.SMTP_PORT) || 587,
        secure: false,
        auth: {
          user: process.env.SMTP_USER || 'mdoroshenko1@gmail.com',
          pass: process.env.SMTP_PASS || '',
        },
      });

      const mailOptions = {
        from: `"Super Stern Booking" <${process.env.SMTP_USER || 'mdoroshenko1@gmail.com'}>`,
        to: process.env.NOTIFICATION_EMAIL || 'mdoroshenko1@gmail.com',
        subject: `Neues Booking: ${order.serviceType} - ${order.clientName}`,
        html: `
          <h2>Neues Online-Booking erhalten</h2>
          <p><strong>Kunde:</strong> ${order.clientName}</p>
          <p><strong>E-Mail:</strong> ${order.clientEmail}</p>
          <p><strong>Telefon:</strong> ${order.clientPhone}</p>
          <p><strong>Adresse:</strong> ${order.address}</p>
          <p><strong>Dienstleistung:</strong> ${order.serviceType}</p>
          <p><strong>Größe (qm):</strong> ${order.spaceSize} m²</p>
          <p><strong>Preis:</strong> €${order.totalPrice.toFixed(2)}</p>
          <p><strong>Terminwunsch:</strong> ${new Date(order.bookingDate).toLocaleString('de-DE')}</p>
          <br/>
          <p>Dieses Booking wurde automatisch erfasst und in der Datenbank gespeichert.</p>
        `,
      };

      if (process.env.SMTP_PASS) {
        await transporter.sendMail(mailOptions);
        console.log(`Email successfully sent for order ${order.id}`);
      } else {
        console.log('--- MOCK EMAIL TRIGGERED (SMTP_PASS not set) ---');
        console.log(`To: ${mailOptions.to}`);
        console.log(`Subject: ${mailOptions.subject}`);
        console.log('-----------------------------');
      }
    } catch (emailErr) {
      console.error('Failed to send email notification:', emailErr);
    }

    return NextResponse.json(order, { status: 201 });
  } catch (error: any) {
    console.error('Order creation error:', error);
    return NextResponse.json({ message: 'Fehler beim Verarbeiten Ihrer Buchung.' }, { status: 500 });
  }
}
