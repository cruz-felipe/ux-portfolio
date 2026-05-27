import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isCms = pathname.startsWith("/keystatic") || pathname.startsWith("/api/keystatic");

  if (isCms) {
    const response = NextResponse.next();
    response.headers.set("x-is-cms", "1");
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
