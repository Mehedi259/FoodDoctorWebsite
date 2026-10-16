import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import { routing } from "@/i18n/routing";

// Posts live in content/blog/<locale>/<slug>.md. A locale with no folder has no posts.
const CONTENT_DIR = path.join(process.cwd(), "content", "blog");

export type PostMeta = {
  slug: string;
  locale: string;
  title: string;
  description: string;
  date: string; // YYYY-MM-DD, first published
  updated?: string; // YYYY-MM-DD, last edited
  author: string;
  authorRole?: string;
  cover?: string; // path under public/, e.g. /blog/allergy-week.jpg
  readingMinutes: number;
};

export type Post = PostMeta & { html: string };

// Frontmatter dates arrive as Date objects when unquoted in YAML
function isoDate(value: unknown): string | undefined {
  if (value === undefined || value === null || value === "") return undefined;
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return String(value).slice(0, 10);
}

function readingMinutes(body: string) {
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

function localeDir(locale: string) {
  return path.join(CONTENT_DIR, locale);
}

function readPost(locale: string, file: string): { meta: PostMeta; body: string } {
  const source = fs.readFileSync(path.join(localeDir(locale), file), "utf8");
  const { data, content } = matter(source);
  const slug = file.replace(/\.md$/, "");

  if (!data.title || !data.description || !data.date || !data.author) {
    throw new Error(`${locale}/${slug}.md needs title, description, date and author`);
  }

  const meta: PostMeta = {
    slug,
    locale,
    title: String(data.title),
    description: String(data.description),
    date: isoDate(data.date)!,
    updated: isoDate(data.updated),
    author: String(data.author),
    authorRole: data.authorRole ? String(data.authorRole) : undefined,
    cover: data.cover ? String(data.cover) : undefined,
    readingMinutes: readingMinutes(content),
  };
  return { meta, body: content };
}

function markdownFiles(locale: string) {
  const dir = localeDir(locale);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((file) => file.endsWith(".md"));
}

// Newest first, by the first publish date
export function getPosts(locale: string): PostMeta[] {
  return markdownFiles(locale)
    .map((file) => readPost(locale, file).meta)
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
}

export async function getPost(locale: string, slug: string): Promise<Post | undefined> {
  const file = `${slug}.md`;
  if (!markdownFiles(locale).includes(file)) return undefined;

  const { meta, body } = readPost(locale, file);
  const processed = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    // Raw HTML in the Markdown is not passed through, so the output is safe to inject
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeStringify)
    .process(body);

  return { ...meta, html: String(processed) };
}

// Every locale/slug pair that has a post, for generateStaticParams
export function getAllPostParams() {
  return routing.locales.flatMap((locale) =>
    getPosts(locale).map((post) => ({ locale, slug: post.slug }))
  );
}
