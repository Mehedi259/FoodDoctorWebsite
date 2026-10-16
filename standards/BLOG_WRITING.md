# Blog Writing Standard

How to write a Doctor Food blog post: where it lives, what the frontmatter must contain, how the body is structured, and what to check before publishing.

Posts are Markdown files in `content/blog/<locale>/<slug>.md`. The build turns them into static pages, so every post must pass the build and the SEO check before it ships.

---

## 1. Where a post goes

- One file per post, in the folder for its language: `content/blog/en/<slug>.md` for English.
- A locale with no folder has no posts. Its blog page shows an empty state and it gets no post pages.
- Keep drafts outside `content/blog/`. There is no draft flag, so any `.md` file in that folder is published on the next build.
- The slug is the file name without `.md`. Use lowercase words joined by hyphens, such as `allergy-safe-meal-plan`.
- Once a post is live, do not rename its slug. The URL changes and existing links and search results break. If you must change it, keep the old page working with a redirect first.

## 2. Frontmatter

Every post starts with a YAML block. Required fields missing from the block stop the build with an error.

```yaml
---
title: "How to plan a week of allergy-safe meals"
description: "A practical way to build a week of meals around a food allergy, from listing triggers to planning swaps before you shop."
date: 2026-10-02
updated: 2026-10-10
author: "Doctor Food Team"
authorRole: "Editorial team"
cover: "/illustrations/eating-vegan.svg"
---
```

| Field | Required | Rules |
|---|---|---|
| `title` | Yes | Plain language, sentence case. Aim for 50 characters or fewer. The page title adds " \| Doctor Food", so a longer title is cut off in search results. |
| `description` | Yes | One or two sentences that tell the reader what they will get. 120 to 155 characters. Build limit is 170. |
| `date` | Yes | First publication date, `YYYY-MM-DD`. Unquoted is fine. |
| `updated` | No | Set it whenever you make a material change after publishing. Typo fixes do not need a new date. It shows as "Last updated" and goes into the sitemap. |
| `author` | Yes | The name shown on the post. Use `"Doctor Food Team"` unless a named author has agreed to be credited. |
| `authorRole` | No | Short role, such as "Editorial team" or "Registered dietitian" (only if that is true and verified, see section 5). |
| `cover` | No | Path under `public/`, starting with `/`. Prefer an illustration from `public/illustrations/`. |

Do not invent dates. Use the day the post is actually published, and `updated` only for real edits.

## 3. Body structure

- **Do not write a top-level heading (`#`) in the body.** The title from the frontmatter is the page's only `h1`. A second `h1` fails the SEO check.
- Start with a lead paragraph of two to three sentences. It answers the question the title asks, so readers and search engines get the point at once.
- Use `##` for main sections and `###` for sub-sections. Do not skip levels.
- Give each heading a clear, specific name. "Plan swaps before you shop" says more than "Tips".
- Length: 600 to 1,200 words for most posts. Reading time is calculated automatically.
- Use short paragraphs (two to four sentences), numbered steps for processes, bullet lists for options, and a table for comparisons.
- Use a blockquote for a single important warning, not for decoration.
- End with a short closing section and the disclaimer in section 5.

**Markdown that works:** headings, paragraphs, bold and italic, lists, tables (GitHub-flavoured), blockquotes, links, and images.

**Markdown that does not:** raw HTML. It is not rendered, so do not put `<div>`, `<script>` or `<iframe>` in a post.

## 4. Links and images

**Internal links must include the locale.** The site is a static export, so `/features` has no page, but `/en/features` does.

- Right: `[pricing](/en/#pricing)`, `[the FAQ](/en/faq)`, `[all posts](/en/blog)`
- Wrong: `[pricing](/#pricing)`, `[the FAQ](/faq)`

Use the locale of the post's folder in every internal link.

**External links** are fine for official sources, such as government or professional guidance. Open them in the same tab. Do not link to competitors or to pages that sell something.

**Images in the body**
- Put files in `public/blog/<slug>/`.
- Every image needs descriptive alt text. Describe what the image shows, or leave the alt text empty only for purely decorative images.
- Save images at 1,200 pixels wide or less, in WebP or PNG, and compress them. Large images slow the page and hurt the Core Web Vitals score.
- Do not use stock photos of people eating, cooking or exercising as a stand-in for real evidence. Use the illustrations or your own photos.

## 5. Claims and safety

Doctor Food is a health app, so the rules in `standards/I18N_CONTENT_GUIDE.md` (section 3) apply to every post.

- No medical claims: do not write "cure", "treat", "diagnose", "heal", or "lose X kg in Y days".
- No professional credentials ("dietitian", "doctor-approved") unless you can verify them and they are true for the author.
- Only use numbers you can verify, and cite a source for any statistic. Never invent a number, a study, or a quote.
- For allergies, say to read product labels and to follow an allergist's advice for severe reactions. Never say a food is "safe" for an allergy.
- For diets, calorie targets and weight, say that targets should be checked with a healthcare professional when someone is pregnant, managing a condition, or taking medication.
- Every post that gives nutrition or health guidance ends with this line, in italics:

  > *This article is general guidance and not medical advice. [Add any post-specific caution here.]*

- Do not use fake reviews, testimonials, or user quotes unless they are real and the user agreed to them.

## 6. Voice and writing

- Write for a busy reader on a phone. Keep sentences short and use plain words.
- Use "you" and write in the active voice.
- Explain any term the first time it appears, such as "macros (protein, carbs and fat)".
- Be specific. "Batch-cook three proteins on Sunday" is better than "plan ahead".
- Do not overpromise. Describe what the app and the advice can do, not guaranteed outcomes.
- Keep the English original clean. Translators work from it (see section 8).

## 7. SEO checklist

Before publishing, check each item:

- [ ] Title is unique across the blog and 50 characters or fewer.
- [ ] Description is 120 to 155 characters, unique, and says what the reader gets.
- [ ] The main topic appears in the title, the description, the first paragraph and at least one heading. Do not repeat it unnaturally.
- [ ] The slug is short, lowercase and hyphenated.
- [ ] There is exactly one `h1` (the title) and no `#` heading in the body.
- [ ] `date` is set and correct. `updated` is set if the post changed.
- [ ] Every internal link includes the locale.
- [ ] Every image has alt text.
- [ ] The cover, if set, exists under `public/`.
- [ ] The disclaimer is present for any health or nutrition content.

## 8. Other languages

- Write and publish the English version first.
- A translation goes in `content/blog/<locale>/` with the same frontmatter fields, translated.
- Do not translate word for word. Follow section 4 (keyword research) and section 3 (tone) of `standards/I18N_CONTENT_GUIDE.md`.
- Translations need a native speaker to review them before publishing.
- Translated posts do not yet link to each other with hreflang tags. Until that is built, do not rely on search engines to match a post to its translation.

## 9. Publishing workflow

1. Write the post in `content/blog/en/<slug>.md`.
2. Run `npm run build`. Fix any frontmatter error the build reports.
3. Run `npm run seo:check`. It must pass, and it checks the blog posts too.
4. Preview the post on `out/` at phone width and desktop width. Check the table, the links, and the images.
5. Check the post's OG image: `out/en/blog/<slug>/opengraph-image` should be a 1,200 × 630 PNG.
6. Commit the post. Do not commit drafts or generated `out/` files.
