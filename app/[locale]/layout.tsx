import type { Metadata, Viewport } from "next";
import type { CSSProperties } from "react";
import {
  Inter,
  Bricolage_Grotesque,
  Noto_Sans_Arabic,
  Noto_Sans_Devanagari,
  Noto_Sans_JP,
  Noto_Sans_KR,
  Noto_Sans_SC,
  Noto_Sans_TC,
} from "next/font/google";
import "../globals.css";
import Script from "next/script";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import GoogleAnalytics from "../components/GoogleAnalytics";
import { routing } from "@/i18n/routing";
import { DirectionProvider } from "@/components/ui/direction";
import { SITE_URL } from "@/lib/site";

// Body text: Inter (Latin, Cyrillic, Vietnamese).
// Headings: Bricolage Grotesque (Latin only). Cyrillic and Vietnamese headings fall back to Inter.
// Other scripts use a Noto font per script as a fallback.
const inter = Inter({
  subsets: ["latin", "cyrillic", "vietnamese"],
  variable: "--font-inter",
});
const bricolage = Bricolage_Grotesque({
  subsets: ["latin", "latin-ext"],
  variable: "--font-bricolage",
});
const notoArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-arabic",
  preload: false,
});
const notoDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  variable: "--font-devanagari",
  preload: false,
});
// CJK fonts are split into unicode-range chunks automatically, so no subsets
const notoJapanese = Noto_Sans_JP({
  variable: "--font-japanese",
  preload: false,
});
const notoKorean = Noto_Sans_KR({
  variable: "--font-korean",
  preload: false,
});
const notoSimplified = Noto_Sans_SC({
  variable: "--font-chinese-simplified",
  preload: false,
});
const notoTraditional = Noto_Sans_TC({
  variable: "--font-chinese-traditional",
  preload: false,
});

const fontVariables = [
  inter,
  bricolage,
  notoArabic,
  notoDevanagari,
  notoJapanese,
  notoKorean,
  notoSimplified,
  notoTraditional,
]
  .map((font) => font.variable)
  .join(" ");

// Google Analytics Measurement ID - set NEXT_PUBLIC_GA_ID in .env.local
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX";

const RTL_LOCALES = ["ar"];

// Shared defaults. Each page sets its own title, description and Open Graph
// image through lib/seo.ts.
const baseMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "Doctor Food",
  authors: [{ name: "Doctor Food Team" }],
  creator: "Doctor Food",
  publisher: "Doctor Food",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: "V30zoj-sa9zNQlpAHpCI2OtktjT_ErRoF8HQrgQZHYc",
    other: {
      "google-site-verification": ["DNrQ_v4kgpbt6_fOT80KYgJmSgbenkR2fg3mT9tq5Vg"],
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/app_icon.png",
    shortcut: "/app_icon.png",
    apple: "/app_icon.png",
  },
  manifest: "/manifest.json",
  category: "health",
};

// Mobile browsers use this colour for the address bar (matches public/manifest.json)
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#059669",
};

// Title and description default to the home page copy; pages override them
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Meta" });

  return {
    ...baseMetadata,
    title: t("title"),
    description: t("description"),
  };
}

// Script-aware fonts. Bricolage Grotesque has no Cyrillic or Vietnamese glyphs, so those
// headings use Inter. Scripts that neither heading font nor Inter covers get their
// own Noto font first.
const primaryScriptFont: Record<string, string> = {
  ar: "var(--font-arabic)",
  hi: "var(--font-devanagari)",
  ja: "var(--font-japanese)",
  ko: "var(--font-korean)",
  "zh-CN": "var(--font-chinese-simplified)",
  "zh-TW": "var(--font-chinese-traditional)",
};
const headingWithoutBricolage = ["ru", "vi"];

function localeFontStyle(locale: string): CSSProperties {
  const script = primaryScriptFont[locale];
  const body = [script, "var(--font-inter)", "system-ui", "sans-serif"]
    .filter(Boolean)
    .join(", ");
  const display =
    script || headingWithoutBricolage.includes(locale)
      ? body
      : `var(--font-bricolage), ${body}`;

  return { "--font-body": body, "--font-display": display } as CSSProperties;
}

// Builds one static set of pages per locale at build time
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);
  const messages = await getMessages();
  const direction = RTL_LOCALES.includes(locale) ? "rtl" : "ltr";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Doctor Food",
    "applicationCategory": "HealthApplication",
    "operatingSystem": "iOS, Android",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "AI-powered diet and nutrition management app with personalized meal plans, smart allergy detection, and comprehensive health tracking.",
    "url": SITE_URL,
    "image": `${SITE_URL}/app_icon.png`,
    "downloadUrl": [
      "https://apps.apple.com/gb/app/doctor-food/id6766101323",
      "https://play.google.com/store/apps/details?id=com.neurobraintec.fooddoctor&hl=en"
    ],
    "softwareVersion": "1.0",
    "author": {
      "@type": "Organization",
      "name": "Doctor Food Team"
    },
    "featureList": [
      "AI-powered diet recommendations",
      "Personalized meal planning",
      "Smart allergy detection",
      "Calorie and macro tracking",
      "Health metrics monitoring",
      "Recipe suggestions",
      "Meal scheduling",
      "Nutrition coaching",
      "Food diary",
      "Weight management"
    ]
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Doctor Food",
    "url": SITE_URL,
    "inLanguage": locale
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Doctor Food",
    "url": SITE_URL,
    "logo": `${SITE_URL}/app_icon.png`,
    "description": "AI-powered health and nutrition management platform",
    "sameAs": [
      "https://apps.apple.com/gb/app/doctor-food/id6766101323",
      "https://play.google.com/store/apps/details?id=com.neurobraintec.fooddoctor&hl=en"
    ]
  };

  return (
    <html
      lang={locale}
      dir={direction}
      className={`scroll-smooth ${fontVariables}`}
      style={localeFontStyle(locale)}
    >
      <head>
        <Script
          id="schema-software"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          id="schema-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <Script
          id="schema-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <DirectionProvider direction={direction}>
            {GA_MEASUREMENT_ID && GA_MEASUREMENT_ID !== "G-XXXXXXXXXX" && (
              <GoogleAnalytics GA_MEASUREMENT_ID={GA_MEASUREMENT_ID} />
            )}
            {children}
          </DirectionProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
