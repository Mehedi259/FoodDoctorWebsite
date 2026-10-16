import { getTranslations } from "next-intl/server";
import { IconArrowRight } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import PostCard from "@/components/blog/PostCard";
import SectionHeader from "@/components/SectionHeader";
import { getPosts } from "@/lib/blog";

// Home page teaser: the three newest posts. Renders nothing for a locale with no posts.
export default async function LatestPosts({ locale }: { locale: string }) {
  const posts = getPosts(locale).slice(0, 3);
  if (posts.length === 0) return null;

  const t = await getTranslations("Blog");

  return (
    <section id="blog" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={t("eyebrow")}
          title={t("latestTitle")}
          description={t("latestBody")}
        />

        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button
            variant="outline"
            size="lg"
            className="rounded-full"
            nativeButton={false}
            render={<Link href="/blog" />}
          >
            {t("viewAll")}
            <IconArrowRight className="size-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
