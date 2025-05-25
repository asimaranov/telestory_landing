import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "ru"],

  // Used when no locale matches
  defaultLocale: "en",

  // Always use the default locale as a fallback
  localePrefix: "as-needed",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(ru|en)/:path*", "/((?!api|_next|_vercel|.*\\..*).*)"],
};
