"use client";

import { useEffect } from "react";
import { routing } from "@/i18n/routing";

// Picks the best supported locale from the browser's language list
function pickLocale(): string {
  const candidates = navigator.languages?.length ? navigator.languages : [navigator.language];

  for (const language of candidates) {
    const lower = language.toLowerCase();

    const exact = routing.locales.find((locale) => locale.toLowerCase() === lower);
    if (exact) return exact;

    if (lower.startsWith("zh")) {
      return /(tw|hk|mo|hant)/.test(lower) ? "zh-TW" : "zh-CN";
    }
    if (lower.startsWith("pt")) return "pt-BR";

    const base = lower.split("-")[0];
    const match = routing.locales.find((locale) => locale === base);
    if (match) return match;
  }

  return routing.defaultLocale;
}

export default function RootRedirect() {
  useEffect(() => {
    window.location.replace(`/${pickLocale()}`);
  }, []);

  return <p className="text-muted-foreground">Loading…</p>;
}
