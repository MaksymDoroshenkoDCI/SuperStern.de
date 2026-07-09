import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import * as nodemailer from 'nodemailer';

@Injectable()
export class OrdersService {
  private transporter: nodemailer.Transporter;

  constructor(private prisma: PrismaService) {
    // Setup generic mailer transport (use environmental variables or standard mock console)
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.mail.yahoo.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER || 'extra.stern@yahoo.com',
        pass: process.env.SMTP_PASS || '',
      },
    });
  }

  // Validate Berlin Postal Codes (PLZ range: 10000 - 14199)
  private validateBerlinPlz(address: string): boolean {
    const plzRegex = /\b\d{5}\b/g;
    const matches = address.match(plzRegex);
    if (!matches) return false;
    
    // Check if any matches are in Berlin PLZ range (starting with 10, 11, 12, 13, or 14)
    return matches.some(plz => {
      const code = parseInt(plz, 10);
      return code >= 10000 && code <= 14199;
    });
  }

  async createOrder(data: {
    clientName: string;
    clientEmail: string;
    clientPhone: string;
    address: string;
    serviceType: string;
    spaceSize: number;
    totalPrice: number;
    bookingDate: string;
  }) {
    if (!this.validateBerlinPlz(data.address)) {
      throw new BadRequestException(
        'We only serve Berlin (PLZ between 10000 and 14199). Please provide a valid Berlin address with postal code.'
      );
    }

    const order = await this.prisma.order.create({
      data: {
        clientName: data.clientName,
        clientEmail: data.clientEmail,
        clientPhone: data.clientPhone,
        address: data.address,
        serviceType: data.serviceType,
        spaceSize: parseFloat(data.spaceSize.toString()),
        totalPrice: parseFloat(data.totalPrice.toString()),
        bookingDate: new Date(data.bookingDate),
      },
    });

    // Send email notification asynchronously
    this.sendNotificationEmail(order).catch(err => {
      console.error('Failed to send email notification:', err.message);
    });

    return order;
  }

  async getOrders() {
    return this.prisma.order.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async updateOrderStatus(id: string, status: 'PENDING' | 'CONFIRMED' | 'COMPLETED' | 'CANCELLED') {
    return this.prisma.order.update({
      where: { id },
      data: { status },
    });
  }

  private async sendNotificationEmail(order: any) {
    const mailOptions = {
      from: `"Super Stern Booking" <${process.env.SMTP_USER || 'extra.stern@yahoo.com'}>`,
      to: 'extra.stern@yahoo.com',
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
      await this.transporter.sendMail(mailOptions);
      console.log(`Email successfully sent for order ${order.id}`);
    } else {
      console.log('--- MOCK EMAIL TRIGGERED ---');
      console.log(`To: ${mailOptions.to}`);
      console.log(`Subject: ${mailOptions.subject}`);
      console.log(`Body: ${mailOptions.html}`);
      console.log('-----------------------------');
    }
  }
}
