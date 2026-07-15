import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_PORT === '465',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Alle Felder sind erforderlich' },
        { status: 400 }
      );
    }

    const notificationEmail = process.env.NOTIFICATION_EMAIL || 'mdoroshenko1@gmail.com';

    // Email для компанії
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: notificationEmail,
      replyTo: email,
      subject: `Neue Kontaktanfrage von ${name}`,
      html: `
        <h2>Neue Kontaktanfrage</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>E-Mail:</strong> ${email}</p>
        <p><strong>Nachricht:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    // Автоматичне підтвердження для користувача
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Ihre Anfrage wurde empfangen - Super Stern',
      html: `
        <h2>Vielen Dank für Ihre Anfrage!</h2>
        <p>Lieber ${name},</p>
        <p>wir haben Ihre Nachricht erhalten und werden uns schnellstmöglich mit Ihnen in Verbindung setzen.</p>
        <p>Ihre Kontaktdaten:</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>E-Mail:</strong> ${email}</p>
        <p><strong>Ihre Nachricht:</strong></p>
        <blockquote>${message.replace(/\n/g, '<br>')}</blockquote>
        <hr>
        <p>Mit freundlichen Grüßen,<br>Das Team von Super Stern</p>
        <p>
          <strong>Super Stern</strong><br>
          Wielandstraße 11a, 10629 Berlin<br>
          Telefon: +49 (0) 176 45365056<br>
          E-Mail: extra.stern@yahoo.com
        </p>
      `,
    });

    return NextResponse.json(
      { success: true, message: 'Nachricht erfolgreich versendet' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Fehler beim Versand der Nachricht:', error);
    return NextResponse.json(
      { error: 'Fehler beim Versand der Nachricht. Bitte versuchen Sie es später erneut.' },
      { status: 500 }
    );
  }
}
