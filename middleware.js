import { NextResponse } from "next/server";

export function middleware(request) {
  // Keep these pages available during local development.
  if (process.env.NODE_ENV !== "production") {
    return NextResponse.next();
  }

  // Redirect visitors away from unfinished pages on Vercel.
  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/about/:path*", "/contact/:path*"],
};
