import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const host = request.headers.get("host") || "";
  const pathname = url.pathname;
  const isLegacyAuthPath = new Set([
    "/login",
    "/signup",
    "/forgot_password",
    "/forgot-password",
  ]).has(pathname);
  const isNonCanonicalHost = host.startsWith("www.");
  const isDotPath = pathname === "/.";

  // Consolidate to a single-hop canonical redirect for legacy auth routes
  // and non-canonical host/path variants.
  if (isLegacyAuthPath || isNonCanonicalHost || isDotPath) {
    const redirectUrl = new URL("https://matchsphere.ai/");
    if (!isLegacyAuthPath) {
      redirectUrl.pathname = isDotPath ? "/" : pathname;
      redirectUrl.search = url.search;
    }

    const response = NextResponse.redirect(redirectUrl, 301);
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|images|icon.png|logo.png).*)",
  ],
};
