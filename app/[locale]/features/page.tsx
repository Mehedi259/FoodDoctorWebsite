import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { IconBrain, IconCalendarEvent, IconChartLine, IconCheck } from "@tabler/icons-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import Crumbs from "@/components/blog/Crumbs";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { pageMetadata, truncate } from "@/lib/seo";

// Each pillar groups the app's capabilities; the icon and tint mark the pillar
const pillarStyle = [
  { icon: IconCalendarEvent, tint: "from-emerald-50 to-teal-50" },
  { icon: IconChartLine, tint: "from-cyan-50 to-sky-50" },
  { icon: IconBrain, tint: "from-teal-50 to-emerald-50" },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "FeaturesPage" });

  return pageMetadata({
    locale,
    path: "/features",
    page: "features",
    title: `${t("title")} | Doctor Food`,
    description: truncate(t("body")),
  });
}

export default async function Features({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("FeaturesPage");
  const common = await getTranslations("Common");
  const nav = await getTranslations("Navbar");
  const pillars = t.raw("pillars") as {
    title: string;
    body: string;
    items: { title: string; body: string }[];
  }[];

  return (
    <main className="min-h-screen overflow-hidden">
      <Navbar />

      <section className="relative isolate overflow-hidden bg-linear-to-b from-emerald-50 via-background to-background pt-32 pb-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <Crumbs items={[{ label: common("home"), href: "/" }, { label: nav("features") }]} />
            <Badge variant="secondary" className="mt-6 mb-4">
              {t("eyebrow")}
            </Badge>
            <h1 className="text-4xl leading-tight font-bold tracking-tight md:text-5xl">
              {t("title")}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">{t("body")}</p>
          </div>
          <Image
            src="/illustrations/eating-healthy-food.svg"
            alt=""
            width={1000}
            height={1000}
            priority
            sizes="(min-width: 1024px) 50vw, 90vw"
            className="mx-auto h-auto w-full max-w-md drop-shadow-xl"
          />
        </div>
      </section>

      {pillars.map((pillar, index) => {
        const { icon: Icon, tint } = pillarStyle[index];
        return (
          <section key={pillar.title} className="py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mb-10 flex max-w-2xl flex-col gap-4">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                  <Icon className="size-7" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{pillar.title}</h2>
                <p className="text-lg leading-relaxed text-muted-foreground">{pillar.body}</p>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {pillar.items.map((item) => (
                  <Card key={item.title} className={`h-full bg-linear-to-br ${tint}`}>
                    <CardHeader>
                      <IconCheck className="size-5 text-primary" />
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">{item.body}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <CTA />
      <Footer />
    </main>
  );
}
