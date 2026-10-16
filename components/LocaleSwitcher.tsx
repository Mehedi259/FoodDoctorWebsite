"use client";

import { useLocale, useTranslations } from "next-intl";
import { IconCheck, IconLanguage } from "@tabler/icons-react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Native names are shown in their own language, so they are not translated
const localeNames: Record<string, string> = {
  en: "English",
  es: "Español",
  "pt-BR": "Português (Brasil)",
  de: "Deutsch",
  ja: "日本語",
  ar: "العربية",
  fr: "Français",
  id: "Bahasa Indonesia",
  ko: "한국어",
  hi: "हिन्दी",
  tr: "Türkçe",
  vi: "Tiếng Việt",
  "zh-CN": "简体中文",
  "zh-TW": "繁體中文",
  ru: "Русский",
};

export default function LocaleSwitcher() {
  const t = useTranslations("Navbar");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={<Button variant="ghost" size="icon" aria-label={t("language")} />}
      >
        <IconLanguage />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {routing.locales.map((code) => (
          <DropdownMenuItem
            key={code}
            onClick={() => router.replace(pathname, { locale: code })}
          >
            <span lang={code}>{localeNames[code]}</span>
            {code === locale && <IconCheck className="ms-auto" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
