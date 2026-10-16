import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";
import en from "../messages/en.json";

type Messages = Record<string, unknown>;

const isObject = (value: unknown): value is Messages =>
  value !== null && typeof value === "object" && !Array.isArray(value);

// Fills keys a translation has not reached yet with the English text, so a
// missing key shows English instead of the raw key name. Arrays are merged
// item by item, so a translated list can be longer or shorter than the English one.
function withEnglishFallback(base: unknown, locale: unknown): unknown {
  if (locale === undefined) return base;
  if (Array.isArray(base) && Array.isArray(locale)) {
    return Array.from({ length: Math.max(base.length, locale.length) }, (_, index) =>
      withEnglishFallback(base[index], locale[index])
    );
  }
  if (isObject(base) && isObject(locale)) {
    const merged: Messages = { ...base };
    for (const key of Object.keys(locale)) {
      merged[key] = withEnglishFallback(base[key], locale[key]);
    }
    return merged;
  }
  return locale;
}

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const messages =
    locale === "en"
      ? en
      : (withEnglishFallback(en, (await import(`../messages/${locale}.json`)).default) as Messages);

  return { locale, messages };
});
