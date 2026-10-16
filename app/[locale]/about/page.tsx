import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeader from "@/components/SectionHeader";
import { pageMetadata, truncate } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "About" });

  return pageMetadata({
    locale,
    path: "/about",
    page: "about",
    title: t("title"),
    description: truncate(t("intro")),
  });
}

export default async function About({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("About");
  const values = t.raw("values") as { title: string; body: string }[];

  return (
    <main className="min-h-screen overflow-hidden">
      <Navbar />

      <section className="bg-linear-to-b from-emerald-50 via-background to-background pt-32 pb-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl leading-tight font-bold tracking-tight md:text-5xl">
            {t("title")}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {t("intro")}
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-4xl space-y-10 px-4 sm:px-6 lg:px-8">
          <Card>
            <CardContent className="space-y-3">
              <h2 className="text-2xl font-bold">{t("missionTitle")}</h2>
              <p className="leading-relaxed text-muted-foreground">{t("mission")}</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-3">
              <h2 className="text-2xl font-bold">{t("storyTitle")}</h2>
              <p className="leading-relaxed text-muted-foreground">{t("story")}</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-3">
              <h2 className="text-2xl font-bold">{t("whatTitle")}</h2>
              <p className="leading-relaxed text-muted-foreground">{t("what")}</p>
            </CardContent>
          </Card>

          <div className="space-y-5">
            <h2 className="text-2xl font-bold">{t("valuesTitle")}</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {values.map((value) => (
                <Card key={value.title} size="sm">
                  <CardContent className="space-y-2">
                    <h3 className="text-lg font-semibold">{value.title}</h3>
                    <p className="leading-relaxed text-muted-foreground">{value.body}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card>
            <CardContent className="space-y-3">
              <h2 className="text-2xl font-bold">{t("teamTitle")}</h2>
              <p className="leading-relaxed text-muted-foreground">{t("team")}</p>
            </CardContent>
          </Card>

          <Card size="sm" className="bg-primary text-primary-foreground">
            <CardContent className="space-y-2">
              <h2 className="text-2xl font-bold">{t("joinTitle")}</h2>
              <p className="opacity-90">{t("join")}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  );
}
