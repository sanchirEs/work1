import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.JWT_SECRET });
  const url = req.nextUrl.pathname;

  // Prevent authenticated users from accessing the /login page
  if (url.startsWith("/login") && token) {
    return NextResponse.redirect(new URL("/", req.url)); // Redirect to home or another page
  }

  // Protect the /admin route for only ADMIN users
  if (url.startsWith("/admin")) {
    if (!token || token.role !== "ADMIN") {
      return NextResponse.redirect(new URL("/unauthorized", req.url));
    }
  }

  // Require any authenticated user for /dashboard
  if (url.startsWith("/dashboard") && !token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/dashboard/:path*", "/login"], // Add /login to the matcher
};
