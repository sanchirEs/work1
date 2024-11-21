// app/api/orders/route.js
import { NextResponse } from 'next/server';
import prisma from '../../../prisma/client';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1', 10);
    const searchQuery = searchParams.get('search') || '';
    const pageSize = 10;

    const whereCondition = searchQuery
      ? {
          OR: [
            { status: { contains: searchQuery, mode: 'insensitive' } },
            {
              product: {
                name: { contains: searchQuery, mode: 'insensitive' },
              },
            },
            {
              customer: {
                name: { contains: searchQuery, mode: 'insensitive' },
              },
            },
          ],
        }
      : {};

    const orders = await prisma.order.findMany({
      skip: (page - 1) * pageSize,
      take: pageSize,
      where: whereCondition,
      include: {
        customer: true,
        product: true,
        payment: true,
      },
    });

    const totalOrders = await prisma.order.count({
      where: whereCondition,
    });

    return NextResponse.json({
      orders,
      totalOrders,
      totalPages: Math.ceil(totalOrders / pageSize),
      currentPage: page,
    });
  } catch (error) {
    console.error('Error fetching orders:', error);
    return NextResponse.json(
      { error: 'Error fetching orders' },
      { status: 500 }
    );
  }
}
