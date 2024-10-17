import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "./util/auth/session";

export const middleware = async (req: NextRequest) => {
  const cookie = req.cookies.get("session");
  const session = cookie?.value;
  const payload = await decrypt(session);

  // check if session has been established or not,
  // if not, direct user back to login page
  if (!session || !payload) {
    return NextResponse.redirect(new URL("/", req.url));
  }
};

// Do not run middleware function on this path
export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|auth|favicon.ico|robots.txt|images|$).*)",
  ],
};
