import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

const JWT_SECRET = process.env.JWT_SECRET || "itechmm_super_secret_jwt_key_change_in_production_32chars!";
const secretKey = new TextEncoder().encode(JWT_SECRET);
const COOKIE_NAME = "itechmm_admin_token";

export async function proxy(request) {
  const { pathname } = request.nextUrl;

  // Only intercept /admin routes
  if (!pathname.startsWith("/admin")) {
    return NextResponse.next();
  }

  const token = request.cookies.get(COOKIE_NAME)?.value;
  let isAuthenticated = false;

  if (token) {
    try {
      await jwtVerify(token, secretKey);
      isAuthenticated = true;
    } catch (e) {
      isAuthenticated = false;
    }
  }

  // If visiting login page while already authenticated, redirect to /admin
  if (pathname === "/admin/login") {
    if (isAuthenticated) {
      return NextResponse.redirect(new URL("/admin", request.url));
    }
    return NextResponse.next();
  }

  // If visiting protected admin route without session, redirect to /admin/login
  if (!isAuthenticated) {
    const loginUrl = new URL("/admin/login", request.url);
    loginUrl.searchParams.set("from", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
