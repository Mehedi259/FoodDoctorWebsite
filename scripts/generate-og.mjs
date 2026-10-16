// Generates Open Graph images for every locale and page.
//
//   npm run build   # the OG template pages must exist in out/
//   npm run og      # writes public/og/<locale>/<page>.png
//
// Uses the Chrome installed on this machine (falls back to Playwright's Chromium
// if Chrome is missing: `npx playwright install chromium`).

import { chromium } from "playwright-core";
import { existsSync, statSync, mkdirSync, readdirSync, readFileSync } from "node:fs";
import { createServer } from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "out");
const publicOgDir = path.join(root, "public", "og");

// Keep in sync with lib/og.ts
const pages = ["home", "about", "privacy", "terms"];

const locales = readdirSync(path.join(root, "messages"))
  .filter((file) => file.endsWith(".json"))
  .map((file) => file.replace(/\.json$/, ""))
  .sort();

if (!existsSync(path.join(outDir, "en", "og", "home.html"))) {
  console.error("No OG template pages found in out/. Run `npm run build` first.");
  process.exit(1);
}

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

// Serves out/ the way a static host would: /en/og/home -> out/en/og/home.html
function resolveFile(urlPath) {
  const clean = decodeURIComponent(urlPath).replace(/\/+$/, "") || "/";
  const candidates = [clean, `${clean}.html`, path.join(clean, "index.html")];
  for (const candidate of candidates) {
    const file = path.join(outDir, candidate);
    if (file.startsWith(outDir) && existsSync(file) && statSync(file).isFile()) {
      return file;
    }
  }
  return null;
}

const server = createServer((req, res) => {
  const file = resolveFile(new URL(req.url, "http://localhost").pathname);
  if (!file) {
    res.writeHead(404);
    res.end("Not found");
    return;
  }
  res.writeHead(200, {
    "Content-Type": mimeTypes[path.extname(file)] ?? "application/octet-stream",
  });
  res.end(readFileSync(file));
});

await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
const base = `http://127.0.0.1:${server.address().port}`;

let browser;
try {
  browser = await chromium.launch({ channel: "chrome" });
} catch {
  console.warn("Chrome not found, using Playwright's Chromium instead.");
  browser = await chromium.launch();
}

const context = await browser.newContext({
  viewport: { width: 1200, height: 630 },
  deviceScaleFactor: 1,
});
const page = await context.newPage();

let count = 0;
try {
  for (const locale of locales) {
    mkdirSync(path.join(publicOgDir, locale), { recursive: true });

    for (const name of pages) {
      await page.goto(`${base}/${locale}/og/${name}`, { waitUntil: "load" });
      await page.evaluate(() => document.fonts.ready);

      const card = page.locator("#og-card");
      const file = path.join(publicOgDir, locale, `${name}.png`);
      await card.screenshot({ path: file, type: "png" });
      count += 1;
      console.log(`✓ og/${locale}/${name}.png`);
    }
  }
} finally {
  await browser.close();
  server.close();
}

console.log(`\nGenerated ${count} Open Graph images in public/og/.`);
