import Image from "next/image";
import { getFormatter, getTranslations } from "next-intl/server";
import { IconArrowRight } from "@tabler/icons-react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "@/i18n/navigation";
import type { PostMeta } from "@/lib/blog";

// Summary card for a post in the blog list, the home page and "keep reading"
export default async function PostCard({ post }: { post: PostMeta }) {
  const t = await getTranslations("Blog");
  const format = await getFormatter();

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block h-full rounded-xl focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
    >
      <Card className="h-full overflow-hidden transition group-hover:-translate-y-1 group-hover:shadow-lg">
        {post.cover && (
          <div className="flex aspect-[4/3] items-center justify-center bg-linear-to-br from-emerald-50 via-cyan-50 to-teal-50 p-6">
            <Image
              src={post.cover}
              alt=""
              width={1000}
              height={1000}
              sizes="(min-width: 768px) 33vw, 100vw"
              className="h-full w-auto max-w-full"
            />
          </div>
        )}
        <CardHeader className="flex-1">
          <p className="text-sm text-muted-foreground">
            {format.dateTime(new Date(post.date), { dateStyle: "long", timeZone: "UTC" })}
            {" · "}
            {t("minutes", { count: post.readingMinutes })}
          </p>
          <CardTitle className="text-xl leading-snug">{post.title}</CardTitle>
          <CardDescription className="line-clamp-3 text-base leading-relaxed">
            {post.description}
          </CardDescription>
        </CardHeader>
        <div className="flex items-center gap-1 px-6 pb-6 text-sm font-medium text-primary">
          {t("readArticle")}
          <IconArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </div>
      </Card>
    </Link>
  );
}
