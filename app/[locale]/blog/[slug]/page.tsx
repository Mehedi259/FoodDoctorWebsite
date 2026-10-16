import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getFormatter, getTranslations, setRequestLocale } from "next-intl/server";
import { IconArrowLeft } from "@tabler/icons-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Illustration from "@/components/Illustration";
import Crumbs from "@/components/blog/Crumbs";
import PostCard from "@/components/blog/PostCard";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@/i18n/navigation";
import { getAllPostParams, getPost, getPosts } from "@/lib/blog";
import { OG_LOCALES, truncate } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  return getAllPostParams();
}

// Two-letter initials for the avatar fallback, e.g. "Doctor Food Team" -> "DF"
function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join("");
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = await getPost(locale, slug);
  if (!post) notFound();

  const url = `${SITE_URL}/${locale}/blog/${slug}`;
  const title = `${post.title} | Doctor Food`;
  const description = truncate(post.description);

  return {
    title,
    description,
    // Each post exists in one language only, so no hreflang alternates
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      siteName: "Doctor Food",
      title,
      description,
      locale: OG_LOCALES[locale],
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const post = await getPost(locale, slug);
  if (!post) notFound();

  setRequestLocale(locale);
  const t = await getTranslations("Blog");
  const common = await getTranslations("Common");
  const pricing = await getTranslations("Pricing");
  const format = await getFormatter();
  const dateOf = (iso: string) => format.dateTime(new Date(iso), { dateStyle: "long", timeZone: "UTC" });
  const related = getPosts(locale)
    .filter((item) => item.slug !== slug)
    .slice(0, 2);

  const url = `${SITE_URL}/${locale}/blog/${slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": truncate(post.description),
    "url": url,
    "mainEntityOfPage": { "@type": "WebPage", "@id": url },
    "datePublished": post.date,
    "dateModified": post.updated ?? post.date,
    "inLanguage": locale,
    "author": { "@type": "Person", "name": post.author, ...(post.authorRole ? { "jobTitle": post.authorRole } : {}) },
    "publisher": {
      "@type": "Organization",
      "name": "Doctor Food",
      "logo": { "@type": "ImageObject", "url": `${SITE_URL}/app_icon.png` },
    },
  };

  return (
    <main className="min-h-screen overflow-hidden">
      <script
        id="schema-blog"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <article>
        <header className="bg-linear-to-b from-emerald-50 via-background to-background pt-32 pb-12">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <Crumbs
              items={[
                { label: common("home"), href: "/" },
                { label: t("eyebrow"), href: "/blog" },
                { label: post.title },
              ]}
            />
            <h1 className="mt-6 text-4xl leading-tight font-bold tracking-tight md:text-5xl">
              {post.title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{post.description}</p>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback>{initials(post.author)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-foreground">{t("by", { name: post.author })}</p>
                  {post.authorRole && <p>{post.authorRole}</p>}
                </div>
              </div>
              <span>{t("published", { date: dateOf(post.date) })}</span>
              {post.updated && <span>{t("updated", { date: dateOf(post.updated) })}</span>}
              <span>{t("minutes", { count: post.readingMinutes })}</span>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-3xl px-4 pb-16 sm:px-6 lg:px-8">
          {post.cover && (
            <div className="mb-12 rounded-3xl bg-linear-to-br from-emerald-50 via-cyan-50 to-teal-50 p-8">
              <Illustration src={post.cover} className="max-w-sm" tone="cyan" />
            </div>
          )}

          <div
            className="prose prose-neutral prose-lg max-w-none prose-headings:font-heading prose-headings:font-bold prose-headings:tracking-tight prose-a:font-medium prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-blockquote:border-primary prose-blockquote:bg-primary/5 prose-blockquote:rounded-r-2xl prose-blockquote:py-1 prose-img:rounded-2xl prose-table:text-base"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />

          <Card className="mt-16">
            <CardContent className="flex items-center gap-4">
              <Avatar size="lg">
                <AvatarFallback>{initials(post.author)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">{post.author}</p>
                {post.authorRole && <p className="text-sm text-muted-foreground">{post.authorRole}</p>}
              </div>
            </CardContent>
          </Card>

          <Card className="mt-8 bg-primary text-primary-foreground">
            <CardContent className="space-y-4">
              <h2 className="text-2xl font-bold">{t("ctaTitle")}</h2>
              <p>{t("ctaBody")}</p>
              <Button
                variant="secondary"
                size="lg"
                className="rounded-full"
                nativeButton={false}
                render={<Link href="/#get-app" />}
              >
                {pricing("getApp")}
              </Button>
            </CardContent>
          </Card>

          <div className="mt-12">
            <Button
              variant="ghost"
              className="rounded-full"
              nativeButton={false}
              render={<Link href="/blog" />}
            >
              <IconArrowLeft className="size-4" />
              {t("backToBlog")}
            </Button>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="border-t bg-muted/40 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-10 text-3xl font-bold tracking-tight">{t("relatedTitle")}</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {related.map((item) => (
                <PostCard key={item.slug} post={item} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
