// Checks the built HTML in out/ for SEO metadata on every locale and page,
// plus every blog post in content/blog/<locale>/.
//
//   npm run build
//   npm run seo:check
//
// Exits with status 1 if anything is missing.

import { readFileSync, existsSync, readdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "out");

const pages = [
  { path: "", file: (l) => `${l}.html`, faq: false },
  { path: "/features", file: (l) => `${l}/features.html` },
  { path: "/blog", file: (l) => `${l}/blog.html` },
  { path: "/faq", file: (l) => `${l}/faq.html`, faq: true },
  { path: "/about", file: (l) => `${l}/about.html` },
  { path: "/privacy", file: (l) => `${l}/privacy.html` },
  { path: "/terms", file: (l) => `${l}/terms.html` },
];

const locales = readdirSync(path.join(root, "messages"))
  .filter((f) => f.endsWith(".json"))
  .map((f) => f.replace(/\.json$/, ""))
  .sort();

// Posts exist only in the locale whose folder holds them
const posts = locales.flatMap((locale) => {
  const dir = path.join(root, "content", "blog", locale);
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => ({ locale, slug: f.replace(/\.md$/, "") }));
});

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "").replace(/\/+$/, "");
const failures = [];
let checked = 0;

const fail = (where, message) => failures.push(`${where}: ${message}`);
const match = (html, pattern) => (html.match(pattern) || [])[1];

// `alternates` is false for posts: they exist in one language only, so no hreflang
function checkHtml({ where, file, locale, expectFaq = false, alternates = true }) {
  if (!existsSync(file)) {
    fail(where, "HTML file missing in out/ (run npm run build)");
    return;
  }
  checked += 1;
  const html = readFileSync(file, "utf8");

  if (match(html, /<html[^>]*\slang="([^"]+)"/) !== locale)
    fail(where, `<html lang> is not "${locale}"`);

  const h1Count = (html.match(/<h1[\s>]/g) || []).length;
  if (h1Count !== 1) fail(where, `expected 1 <h1>, found ${h1Count}`);

  // JSON-LD must be in the static HTML itself, not added by JavaScript
  const jsonLdCount = (html.match(/<script[^>]*type="application\/ld\+json"/g) || []).length;
  if (jsonLdCount === 0) fail(where, "no JSON-LD structured data in the static HTML");
  if (expectFaq && !html.includes('"@type":"FAQPage"')) fail(where, "FAQPage structured data missing");

  const title = match(html, /<title>([^<]+)<\/title>/);
  if (!title) fail(where, "missing <title>");

  const description = match(html, /<meta name="description" content="([^"]*)"/);
  if (!description) fail(where, "missing meta description");
  else if (description.length > 170) fail(where, `meta description is ${description.length} characters (max 170)`);

  const canonical = match(html, /<link rel="canonical" href="([^"]+)"/);
  if (!canonical) fail(where, "missing canonical link");
  else if (siteUrl && !canonical.startsWith(`${siteUrl}/${locale}`))
    fail(where, `canonical ${canonical} does not start with ${siteUrl}/${locale}`);

  if (alternates) {
    const hreflangs = [...html.matchAll(/hrefLang="([^"]+)"/g)].map((m) => m[1]);
    for (const code of [...locales, "x-default"]) {
      if (!hreflangs.includes(code)) fail(where, `missing hreflang "${code}"`);
    }
  }

  for (const tag of ["og:title", "og:description", "og:url", "og:image", "og:image:alt", "og:locale", "twitter:card", "twitter:image"]) {
    const pattern = new RegExp(`<meta (?:property|name)="${tag}" content="([^"]*)"`);
    if (!pattern.test(html)) fail(where, `missing ${tag}`);
  }

  const image = match(html, /<meta property="og:image" content="([^"]+)"/);
  if (image) {
    const imagePath = path.join(outDir, new URL(image).pathname);
    if (!existsSync(imagePath)) fail(where, `og:image file not found in out/: ${new URL(image).pathname} (run npm run og, then npm run build)`);
  }
}

for (const locale of locales) {
  for (const page of pages) {
    checkHtml({
      where: `${locale}${page.path || "/"}`,
      file: path.join(outDir, page.file(locale)),
      locale,
      expectFaq: page.faq,
    });
  }
}

for (const { locale, slug } of posts) {
  const where = `${locale}/blog/${slug}`;
  const file = path.join(outDir, locale, "blog", `${slug}.html`);
  checkHtml({ where, file, locale, alternates: false });

  if (existsSync(file)) {
    const html = readFileSync(file, "utf8");
    if (!html.includes('"@type":"BlogPosting"')) fail(where, "BlogPosting structured data missing");
    if (!html.includes('<meta property="article:published_time"')) fail(where, "article:published_time missing");
  }
}

const sitemapFile = path.join(outDir, "sitemap.xml");
if (!existsSync(sitemapFile)) {
  fail("sitemap.xml", "missing from out/");
} else {
  const sitemap = readFileSync(sitemapFile, "utf8");
  const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const expected = locales.length * pages.length + posts.length;
  if (urls.length !== expected) fail("sitemap.xml", `${urls.length} URLs, expected ${expected}`);
}

const robotsFile = path.join(outDir, "robots.txt");
if (!existsSync(robotsFile)) {
  fail("robots.txt", "missing from out/");
} else if (!/^Sitemap: .+sitemap\.xml$/m.test(readFileSync(robotsFile, "utf8"))) {
  fail("robots.txt", "no Sitemap line");
}

console.log(`Checked ${checked} HTML pages across ${locales.length} locales (${posts.length} blog posts).`);
if (failures.length) {
  console.error(`\n${failures.length} problem(s):`);
  for (const f of failures) console.error(`  - ${f}`);
  process.exit(1);
}
console.log("All SEO checks passed.");
