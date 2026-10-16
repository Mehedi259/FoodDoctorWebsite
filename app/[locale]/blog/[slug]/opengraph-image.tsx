import fs from "node:fs";
import path from "node:path";
import { notFound } from "next/navigation";
import { ImageResponse } from "next/og";
import { getAllPostParams, getPost } from "@/lib/blog";
import { truncate } from "@/lib/seo";

// One 1200×630 card per post, built at build time from the post's title and description
export const alt = "Doctor Food blog";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return getAllPostParams();
}

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const post = await getPost(locale, slug);
  if (!post) notFound();

  const logo = `data:image/png;base64,${fs
    .readFileSync(path.join(process.cwd(), "public", "app_icon.png"))
    .toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: "72px",
          background: "linear-gradient(135deg, #047857 0%, #059669 55%, #0f766e 100%)",
          color: "white",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <img src={logo} alt="" width={56} height={56} style={{ borderRadius: "14px" }} />
          <div style={{ display: "flex", fontSize: "32px", fontWeight: 700 }}>
            Doctor Food
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div style={{ display: "flex", fontSize: "62px", fontWeight: 700, lineHeight: 1.1 }}>
            {post.title}
          </div>
          <div style={{ display: "flex", fontSize: "28px", lineHeight: 1.4, color: "#d1fae5" }}>
            {truncate(post.description, 150)}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "24px",
            color: "#d1fae5",
          }}
        >
          <div style={{ display: "flex" }}>By {post.author}</div>
          <div style={{ display: "flex" }}>{post.readingMinutes} min read</div>
        </div>
      </div>
    ),
    size
  );
}
