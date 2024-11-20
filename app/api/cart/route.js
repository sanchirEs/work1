import { prisma } from "@/lib/prisma";

// Handle GET request to fetch all cart items
export async function GET(req) {
  try {
    const cartItems = await prisma.cart.findMany();
    return new Response(JSON.stringify(cartItems), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch cart items" }), { status: 500 });
  }
}

// Handle POST request to add a new item to the cart
export async function POST(req) {
  try {
    const { productId, quantity } = await req.json();
    const newCartItem = await prisma.cart.create({
      data: {
        productId,
        quantity,
      },
    });
    return new Response(JSON.stringify(newCartItem), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to add item to cart" }), { status: 500 });
  }
}

// Handle DELETE request to remove an item from the cart
export async function DELETE(req) {
  try {
    const { id } = await req.json(); // ID of the item to delete
    await prisma.cart.delete({ where: { id } });
    return new Response(null, { status: 204 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to delete cart item" }), { status: 500 });
  }
}
