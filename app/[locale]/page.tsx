import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import PainPoints from "@/components/PainPoints";
import HowItWorks from "@/components/HowItWorks";
import LivePlan from "@/components/LivePlan";
import Features from "@/components/Features";
import UseCases from "@/components/UseCases";
import AllergyScanner from "@/components/AllergyScanner";
import AskAI from "@/components/AskAI";
import Trust from "@/components/Trust";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import AIDemoChat from "@/components/AIDemoChat";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Meta" });

  return pageMetadata({
    locale,
    path: "",
    page: "home",
    title: t("title"),
    description: t("description"),
  });
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  // FAQPage structured data: the same questions shown in the FAQ section
  const faq = await getTranslations("Faq");
  const faqItems = faq.raw("items") as { q: string; a: string }[];
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map((item) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": { "@type": "Answer", "text": item.a },
    })),
  };

  return (
    <main className="min-h-screen overflow-hidden">
      <script
        id="schema-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navbar />
      <Hero />
      <Marquee />
      <PainPoints />
      <HowItWorks />
      <LivePlan />
      <Features />
      <UseCases />
      <AllergyScanner />
      <AskAI />
      <Trust />
      <Pricing />
      <Faq />
      <CTA />
      <Footer />
      <AIDemoChat />
    </main>
  );
}
