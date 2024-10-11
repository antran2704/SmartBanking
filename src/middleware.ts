import createMiddleware from "next-intl/middleware";
import { localePrefix } from "./navigation";
import { locales } from "./i18n";

export default createMiddleware({
  defaultLocale: "en",
  localePrefix,
  locales,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/((?!api|_next|_vercel|.*\\..*).*)"],
};
