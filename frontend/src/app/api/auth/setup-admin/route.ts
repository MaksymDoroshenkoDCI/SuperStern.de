import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import bcrypt from 'bcryptjs';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json({ message: 'E-Mail und Passwort erforderlich' }, { status: 400 });
    }

    // Check if any admin already exists
    const adminCount = await prisma.user.count({
      where: { role: 'ADMIN' },
    });

    if (adminCount > 0) {
      return NextResponse.json({ message: 'Ein Admin-Konto existiert bereits.' }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        role: 'ADMIN',
      },
    });

    return NextResponse.json({ message: 'Admin-Konto erfolgreich erstellt.' }, { status: 201 });
  } catch (error: any) {
    console.error('Setup admin error:', error);
    return NextResponse.json({ message: 'Fehler beim Erstellen des Admin-Kontos' }, { status: 500 });
  }
}
