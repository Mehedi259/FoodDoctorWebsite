import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { getFormatter, getTranslations, setRequestLocale } from "next-intl/server";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Item, ItemContent, ItemDescription, ItemTitle } from "@/components/ui/item";
import { Progress } from "@/components/ui/progress";
import { OG_PAGES, type OgPage } from "@/lib/og";
import { truncate } from "@/lib/seo";

// Template for the Open Graph images. `npm run og` screenshots each page here
// and saves the PNG to public/og/<locale>/<page>.png. Not indexed.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export function generateStaticParams() {
  return OG_PAGES.map((page) => ({ page }));
}

export default async function OgCard({
  params,
}: {
  params: Promise<{ locale: string; page: string }>;
}) {
  const { locale, page } = await params;
  if (!OG_PAGES.includes(page as OgPage)) notFound();
  setRequestLocale(locale);

  const meta = await getTranslations("Meta");
  const footer = await getTranslations("Footer");
  const about = await getTranslations("About");
  const hero = await getTranslations("Hero");
  const phone = await getTranslations("Phone");
  const format = await getFormatter();

  const cards: Record<OgPage, { title: string; body: string }> = {
    home: { title: meta("title"), body: meta("description") },
    about: { title: about("title"), body: truncate(about("intro"), 200) },
    privacy: { title: footer("privacy"), body: meta("description") },
    terms: { title: footer("terms"), body: meta("description") },
  };
  const card = cards[page as OgPage];

  return (
    <div
      id="og-card"
      className="relative flex h-[630px] w-[1200px] overflow-hidden bg-linear-to-br from-emerald-700 via-emerald-600 to-teal-700 text-white"
    >
      {/* Soft light shapes for depth */}
      <div className="pointer-events-none absolute -top-48 -end-24 size-[30rem] rounded-full bg-white/10" />
      <div className="pointer-events-none absolute -bottom-56 start-[40%] size-[24rem] rounded-full bg-teal-300/20" />

      {/* Copy */}
      <div className="relative flex w-[700px] flex-col justify-between p-16">
        <div className="flex items-center gap-4">
          <Image
            src="/app_icon.png"
            alt=""
            width={64}
            height={64}
            className="rounded-2xl bg-white p-1 shadow-xl ring-2 ring-white/40"
          />
          <span className="font-heading text-3xl font-bold tracking-tight">
            Doctor <span className="text-emerald-200">Food</span>
          </span>
        </div>

        <div>
          <h1 className="line-clamp-3 text-6xl leading-[1.05] font-bold tracking-tight">
            {card.title}
          </h1>
          <p className="mt-6 line-clamp-2 text-2xl leading-relaxed text-emerald-50/90">
            {card.body}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="secondary" className="h-auto px-4 py-1.5 text-base font-semibold">
            {hero("badge")}
          </Badge>
          <Button
            size="lg"
            variant="secondary"
            render={<span />}
          >
            <Image src="/logos/app-store.svg" alt="" width={20} height={20} />
            {hero("appStore")}
          </Button>
          <Button
            size="lg"
            variant="secondary"
            render={<span />}
          >
            <Image src="/logos/google-play.svg" alt="" width={20} height={20} />
            {hero("googlePlay")}
          </Button>
        </div>
      </div>

      {/* App preview */}
      <div className="relative flex flex-1 items-center justify-center">
        <Card className="w-[380px] rotate-3 gap-4 py-6 text-foreground shadow-2xl">
          <CardHeader className="gap-1">
            <p className="text-sm text-muted-foreground">{phone("greeting")}</p>
            <CardTitle className="font-heading text-2xl">{phone("todaysPlan")}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm font-medium">
                {phone("progress", {
                  eaten: format.number(1640),
                  goal: format.number(1900),
                })}
              </p>
              <Progress value={(1640 / 1900) * 100} />
            </div>
            <Item variant="muted" size="sm">
              <ItemContent>
                <ItemTitle>{phone("breakfast")}</ItemTitle>
                <ItemDescription>{phone("breakfastMeal")}</ItemDescription>
              </ItemContent>
            </Item>
            <Item variant="muted" size="sm">
              <ItemContent>
                <ItemTitle>{phone("lunch")}</ItemTitle>
                <ItemDescription>{phone("lunchMeal")}</ItemDescription>
              </ItemContent>
            </Item>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
