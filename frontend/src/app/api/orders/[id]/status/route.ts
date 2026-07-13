import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'super-stern-secret-key-12345';

export const dynamic = 'force-dynamic';

export async function PATCH(
  request: Request,
  segmentData: any
) {
  try {
    const params = await segmentData.params;
    const { id } = params;

    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ message: 'Nicht autorisiert' }, { status: 401 });
    }

    const token = authHeader.split(' ')[1];
    try {
      jwt.verify(token, JWT_SECRET);
    } catch (err) {
      return NextResponse.json({ message: 'Ungültiges Token' }, { status: 401 });
    }

    const body = await request.json();
    const { status } = body;

    if (!status) {
      return NextResponse.json({ message: 'Status fehlt' }, { status: 400 });
    }

    const updatedOrder = await prisma.order.update({
      where: { id },
      data: { status },
    });

    return NextResponse.json(updatedOrder);
  } catch (error: any) {
    console.error('Error updating status:', error);
    return NextResponse.json({ message: 'Fehler beim Aktualisieren des Status' }, { status: 500 });
  }
}
