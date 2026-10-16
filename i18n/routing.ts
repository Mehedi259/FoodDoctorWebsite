import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // Every locale gets its own HTML folder at build time (e.g. /en/, /es/about)
  locales: [
    "en",
    "es",
    "pt-BR",
    "de",
    "ja",
    "ar",
    "fr",
    "id",
    "ko",
    "hi",
    "tr",
    "vi",
    "zh-CN",
    "zh-TW",
    "ru",
  ],
  defaultLocale: "en",
  // Static export has no server-side middleware, so the locale is always in the URL
  localePrefix: "always",
});
