import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const password = process.env.SITE_PASSWORD;
  if (!password) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;

  // allow access to coming soon page, unlock API and next assets
  if (
    pathname.startsWith("/coming-soon") ||
    pathname.startsWith("/api/unlock") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const cookie = request.cookies.get("site-password");
  if (cookie?.value === "unlocked") {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = "/coming-soon";
  return NextResponse.redirect(url);
}

export const config = {
  matcher: "/:path*",
};
