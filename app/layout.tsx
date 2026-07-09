import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://food-doctor-website.vercel.app'),
  title: "Food Doctor - AI-Powered Diet & Nutrition Management App | Personalized Meal Plans",
  description: "Transform your health with Food Doctor - The ultimate AI-powered diet and nutrition app. Get personalized meal plans, smart allergy detection, calorie tracking, dietary management, and AI nutrition coach. Perfect for weight loss, healthy eating, diabetes management, and fitness goals. Download now on iOS & Android.",
  keywords: [
    "diet app", "nutrition app", "meal planning app", "AI diet coach", "personalized meal plans",
    "calorie tracker", "food tracker", "health app", "weight loss app", "fitness nutrition",
    "allergy detection", "dietary management", "nutrition tracking", "healthy eating app",
    "AI nutrition assistant", "diet planner", "food diary", "macro tracker", "meal prep app",
    "nutrition coach", "diabetes diet app", "keto diet app", "vegan meal planner",
    "food doctor", "smart nutrition", "AI health coach", "wellness app", "diet recommendations",
    "food allergy app", "nutritionist app", "meal scheduling", "recipe suggestions",
    "health tracking", "dietary restrictions", "nutrition goals", "food scanner",
    "diet consultation", "healthy lifestyle app", "nutrition management", "diet guide"
  ],
  authors: [{ name: "Food Doctor Team" }],
  creator: "Food Doctor",
  publisher: "Food Doctor",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://food-doctor-website.vercel.app",
    title: "Food Doctor - AI-Powered Diet & Nutrition Management App",
    description: "Get personalized meal plans, AI diet recommendations, allergy detection, and comprehensive nutrition tracking. Your personal AI health coach for better living.",
    siteName: "Food Doctor",
    images: [
      {
        url: "/app_icon.png",
        width: 1200,
        height: 1200,
        alt: "Food Doctor - AI Diet & Nutrition App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Food Doctor - AI-Powered Diet & Nutrition Management App",
    description: "Transform your health with personalized meal plans, AI diet recommendations, and smart allergy detection. Download now!",
    images: ["/app_icon.png"],
    creator: "@fooddoctor",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/app_icon.png",
    shortcut: "/app_icon.png",
    apple: "/app_icon.png",
  },
  manifest: "/manifest.json",
  category: "health",
  classification: "Health & Fitness",
  alternates: {
    canonical: "https://food-doctor-website.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Food Doctor",
    "applicationCategory": "HealthApplication",
    "operatingSystem": "iOS, Android",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "ratingCount": "1001",
      "bestRating": "5",
      "worstRating": "1"
    },
    "description": "AI-powered diet and nutrition management app with personalized meal plans, smart allergy detection, and comprehensive health tracking.",
    "url": "https://food-doctor-website.vercel.app",
    "image": "https://food-doctor-website.vercel.app/app_icon.png",
    "downloadUrl": [
      "https://apps.apple.com/gb/app/doctor-food/id6766101323",
      "https://play.google.com/store/apps/details?id=com.neurobraintec.fooddoctor&hl=en"
    ],
    "screenshot": "https://food-doctor-website.vercel.app/app_icon.png",
    "softwareVersion": "1.0",
    "author": {
      "@type": "Organization",
      "name": "Food Doctor Team"
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
    ],
    "keywords": "diet app, nutrition app, meal planning, AI diet coach, calorie tracker, health app, weight loss, fitness nutrition, allergy detection, dietary management"
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Food Doctor",
    "url": "https://food-doctor-website.vercel.app",
    "logo": "https://food-doctor-website.vercel.app/app_icon.png",
    "description": "AI-powered health and nutrition management platform",
    "sameAs": [
      "https://apps.apple.com/gb/app/doctor-food/id6766101323",
      "https://play.google.com/store/apps/details?id=com.neurobraintec.fooddoctor&hl=en"
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          id="schema-software"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          id="schema-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
