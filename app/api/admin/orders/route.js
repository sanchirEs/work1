import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';
import prisma from '../../../../prisma/client';

export async function GET(req) {
  const token = await getToken({ req, secret: process.env.JWT_SECRET });

  if (!token || token.role !== 'ADMIN') {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 403 });
  }

  const orders = await prisma.order.findMany();
  return NextResponse.json(orders);
}
