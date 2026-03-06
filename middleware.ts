import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const host = request.headers.get("host") || "";

  // Redirect www to non-www
  if (host.startsWith("www.")) {
    const newHost = host.replace("www.", "");
    url.host = newHost;
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|images|icon.png|logo.png).*)",
  ],
};
