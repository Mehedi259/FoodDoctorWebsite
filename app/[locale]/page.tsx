import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import UseCases from "@/components/UseCases";
import AskAI from "@/components/AskAI";
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

  return (
    <main className="min-h-screen overflow-hidden">
      <Navbar />
      <Hero />
      <PainPoints />
      <HowItWorks />
      <Features />
      <UseCases />
      <AskAI />
      <Pricing />
      <Faq />
      <CTA />
      <Footer />
      <AIDemoChat />
    </main>
  );
}
