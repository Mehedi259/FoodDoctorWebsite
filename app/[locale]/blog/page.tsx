import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Crumbs from "@/components/blog/Crumbs";
import PostCard from "@/components/blog/PostCard";
import { getPosts } from "@/lib/blog";
import { pageMetadata, truncate } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Blog" });

  return pageMetadata({
    locale,
    path: "/blog",
    page: "blog",
    title: `${t("title")} | Doctor Food`,
    description: truncate(t("body")),
  });
}

export default async function BlogIndex({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Blog");
  const common = await getTranslations("Common");
  const posts = getPosts(locale);

  return (
    <main className="min-h-screen overflow-hidden">
      <Navbar />

      <section className="bg-linear-to-b from-emerald-50 via-background to-background pt-32 pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Crumbs items={[{ label: common("home"), href: "/" }, { label: t("eyebrow") }]} />
          <h1 className="mt-6 text-4xl leading-tight font-bold tracking-tight md:text-5xl">
            {t("title")}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {t("body")}
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <p className="rounded-2xl border border-dashed p-10 text-center text-muted-foreground">
              {t("empty")}
            </p>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
