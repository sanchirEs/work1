// app/api/products/route.js
import { NextResponse } from "next/server";
import prisma from "../../../prisma/client";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1', 10);
    const searchQuery = searchParams.get('search') || '';
    const pageSize = parseInt(searchParams.get('pageSize') || '10', 10);

    const whereCondition = searchQuery
      ? {
          OR: [
            { name: { contains: searchQuery, mode: 'insensitive' } },
            { description: { contains: searchQuery, mode: 'insensitive' } },
          ],
        }
      : {};

    const products = await prisma.product.findMany({
      skip: (page - 1) * pageSize,
      take: pageSize,
      where: whereCondition,
      orderBy: {
        id: 'desc',
      },
    });

    const totalProducts = await prisma.product.count({
      where: whereCondition,
    });

    return NextResponse.json({
      products,
      totalProducts,
      totalPages: Math.ceil(totalProducts / pageSize),
      currentPage: page,
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json(
      { error: 'Error fetching products' },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const { name, description, price, minBatchQty, images } = await req.json();

    // Validate the incoming data
    if (!name || !description || !price || !images || images.length === 0) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400 }
      );
    }

    // Save product to the database
    const product = await prisma.product.create({
      data: {
        name,
        description,
        price: parseFloat(price),
        minBatchQty: parseInt(minBatchQty, 10),
        images, // Assuming this is a string array field in your database
      },
    });

    return new Response(JSON.stringify(product), { status: 201 });
  } catch (error) {
    console.error("Add product error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to add product" }),
      { status: 500 }
    );
  }
}