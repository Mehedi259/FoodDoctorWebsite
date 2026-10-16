import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import Crumbs from "@/components/blog/Crumbs";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { pageMetadata, truncate } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "FaqPage" });

  return pageMetadata({
    locale,
    path: "/faq",
    page: "faq",
    title: `${t("title")} | Doctor Food`,
    description: truncate(t("body")),
  });
}

export default async function FaqPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("FaqPage");
  const faq = await getTranslations("Faq");
  const common = await getTranslations("Common");
  const items = faq.raw("items") as { q: string; a: string }[];

  // FAQPage structured data for this page's questions
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map((item) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": { "@type": "Answer", "text": item.a },
    })),
  };

  return (
    <main className="min-h-screen overflow-hidden">
      <script
        id="schema-faq-page"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <section className="bg-linear-to-b from-emerald-50 via-background to-background pt-32 pb-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Crumbs items={[{ label: common("home"), href: "/" }, { label: faq("eyebrow") }]} />
          <Badge variant="secondary" className="mt-6 mb-4">
            {faq("eyebrow")}
          </Badge>
          <h1 className="text-4xl leading-tight font-bold tracking-tight md:text-5xl">
            {t("title")}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{t("body")}</p>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Accordion className="w-full">
            {items.map((item, index) => (
              <AccordionItem key={item.q} value={`faq-${index}`}>
                <AccordionTrigger className="text-base font-semibold">{item.q}</AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
