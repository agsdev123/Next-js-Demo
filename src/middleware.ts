import { NextRequest, NextResponse } from "next/server";

import { getAccessToken } from "./app/-utils/auth";

export function middleware(request: NextRequest) {
  const token = "";

  const isAuthenticated = token && verifyToken(token);

  if (!isAuthenticated) {
    return NextResponse.redirect(new URL("/not-found", request.url));
  }

  return NextResponse.next();
}

function verifyToken(token) {
  return Boolean(token);
}

export const config = {
  matcher: ["/contact", "/about", "/dashboard"],
};
