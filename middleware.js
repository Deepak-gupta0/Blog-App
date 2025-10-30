import { NextResponse } from "next/server"

export function middleware(request) {
  const cookie = request.cookies.get("sid")?.value
  const pathname = request.nextUrl.pathname

  // Not logged in → redirect to /login
  if (!cookie && pathname !== "/login" && pathname !== "/register") {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  // Logged in → block access to login/register
  if (cookie && (pathname === "/login" || pathname === "/register")) {
    return NextResponse.redirect(new URL("/", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/", "/login", "/register", "/contact", "/create-blog", "/profile/:path*"],
}
