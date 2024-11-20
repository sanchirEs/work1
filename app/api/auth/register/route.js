import bcrypt from 'bcrypt';
import { prisma } from '@/lib/prisma';

export async function POST(req) {
  try {
    const { username, email, password } = await req.json();

    // Check if the user already exists
    const existingUser = await prisma.customer.findUnique({
      where: { email },
    });
    if (existingUser) {
      return new Response(JSON.stringify({ message: 'User already exists' }), {
        status: 400,
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the new user
    const user = await prisma.customer.create({
      data: {
        email,
        name: username,
        password: hashedPassword,
      },
    });

    return new Response(JSON.stringify({ message: 'User registered successfully' }), {
      status: 201,
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: 'Error registering user' }), {
      status: 500,
    });
  }
}
