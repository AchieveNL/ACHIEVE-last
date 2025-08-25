import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import type { NextRequest } from "next/server";

const middleware = createMiddleware(routing);

// Named function export to fix ESLint anonymous default export warning
function nextIntlMiddleware(request: NextRequest) {
  return middleware(request);
}

export default nextIntlMiddleware;

export const config = {
  matcher: [
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    "/((?!api|_next|_vercel|.*\\..*).*)",
  ],
};
