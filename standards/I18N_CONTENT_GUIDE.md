# Multilingual Content Guide

How to write, review, and ship translated content for Doctor Food so it reads naturally and ranks in each market.

Follow this guide for every string in `messages/*.json` and every localized page title, description, and heading.

---

## 1. Where things live

| What | Where |
|---|---|
| Locale list and routing | `i18n/routing.ts` |
| Message files (one per locale) | `messages/<locale>.json` |
| Component strings | `useTranslations("<Namespace>")` in the component |
| Route structure | `app/[locale]/...` (every page lives under this) |
| Request config (loads messages) | `i18n/request.ts` |

Keys are grouped by component namespace (`Hero`, later `Features`, `Footer`, ...). Keep keys in English and camelCase (`titleHighlight`, `stats.activeUsers`). Never put translated text in a key name.

---

## 2. Locales

| Code | Language | Market | Direction | Status |
|---|---|---|---|---|
| `en` | English | Default, global | LTR | Source of truth |
| `es` | Spanish | Spain, Mexico, LatAm | LTR | Draft, needs review |
| `pt-BR` | Portuguese (Brazil) | Brazil | LTR | Draft, needs review |
| `de` | German | Germany, Austria, Switzerland | LTR | Draft, needs review |
| `ja` | Japanese | Japan | LTR | Draft, needs review |
| `ar` | Arabic (MSA) | Gulf, Egypt, North Africa | **RTL** | Draft, needs review |
| `fr` | French | France, Belgium, Canada, francophone Africa | LTR | Draft, needs review |
| `id` | Indonesian | Indonesia | LTR | Draft, needs review |
| `ko` | Korean | South Korea | LTR | Draft, needs review |
| `hi` | Hindi | India | LTR | Draft, needs review |
| `tr` | Turkish | Turkey | LTR | Draft, needs review |
| `vi` | Vietnamese | Vietnam | LTR | Draft, needs review |
| `zh-CN` | Chinese (Simplified) | Mainland China | LTR | Draft, needs review (see note below) |
| `zh-TW` | Chinese (Traditional) | Taiwan, Hong Kong | LTR | Draft, needs review |
| `ru` | Russian | Russia, Central Asia | LTR | Draft, needs review (see note below) |

**Note for `ru`:** Card payments and app-store billing in Russia are limited by sanctions, so translating the site does not by itself make the market profitable. Check payment and app-store availability before running Russian-language ads or sales.

**Note for `zh-CN`:** Google services are blocked in mainland China. Search reach there depends on Baidu, and sharing depends on WeChat, so the SEO rules in section 4 need a separate plan for that market.

**English is the source.** Write or change English first, then translate. Never translate from another translation.

**Adding a locale:**
1. Add the code to `locales` in `i18n/routing.ts`.
2. Copy `messages/en.json` to `messages/<code>.json` and translate every value.
3. Add `dir="rtl"` handling if the language is right-to-left (currently `RTL_LOCALES` in `app/[locale]/layout.tsx`).
4. Get a native-speaker review (see section 7).
5. Run `npm run build` and check the page in that locale.

---

## 3. Rules for every locale

**Brand and store names**
- Keep **"Doctor Food"** and store names ("Google Play", "App Store") unchanged.
- Keep the app's own feature names consistent across pages (e.g. "Meal Plan" always means the same thing).

**Tone**
- Write as a native marketer would, not as a word-for-word translation. Rewrite idioms instead of translating them.
- Use the informal "you" in consumer-facing copy: `tú` (es), `você` (pt-BR), `du` (de). Use polite but friendly style in `ja`.
- Arabic: Modern Standard Arabic (فصحى), easy to read across countries.
- Keep sentences short. Most users read on phones.

**Claims (important for a health app)**
- Do not write medical claims: no "cure", "treat", "diagnose", "heal", or "lose X kg in Y days".
- Only use numbers you can verify. Right now the hero shows **"1,001+ active users"**, **"5.0★"**, and **"50M+ meals tracked"**. Confirm these before they appear in a new market, and never increase them in translation.
- Health and nutrition advertising is regulated differently in each market (for example EU nutrition and health claims rules, the FTC in the US, and ANVISA in Brazil). Keep wording general unless legal review approves it.
- Do not claim professional credentials ("dietitian", "nutritionist", "doctor-approved") unless you can verify them for that market. Japanese 管理栄養士 is a licensed title, so do not use it.

**Formatting**
- Numbers, dates, and currency: use `Intl` formatting for the locale, not hand-typed strings.
- Plurals: use ICU message syntax (`{count, plural, one {...} other {...}}`) in next-intl messages.
- Do not hard-code arrows or emoji direction. In Arabic, icons that point forward must flip.

**Length**
- Budget about **+30%** text length for German, Spanish, and Portuguese compared with English.
- Japanese and Arabic often need less width but more line height. Check on mobile.

---

## 4. SEO rules for each page

**Keywords come from research in each market, not from translation.**
- Research terms with Google Keyword Planner, Google Trends (set the region), and Search Console (once the locale is live).
- Users in each market search with different words. Starting points to validate (not verified yet):

| Locale | Starting terms to check |
|---|---|
| `es` | dieta, plan de alimentación, app de nutrición, contador de calorías |
| `pt-BR` | dieta, plano alimentar, contador de calorias, emagrecer |
| `de` | Ernährungsplan, Kalorienzähler, Ernährungs-App, Diät-App |
| `ja` | 食事管理アプリ, カロリー計算, ダイエットアプリ, 食事プラン |
| `ar` | تطبيق حمية, تطبيق تتبع السعرات الحرارية, خطة وجبات, تطبيق تغذية |

**Per page, per locale:**
- **Title:** about 50–60 characters, includes the main keyword, unique for each locale.
- **Meta description:** about 120–155 characters, a clear benefit plus a call to action, written in that language.
- **One H1 per page.** On the home page, the H1 is the hero title.
- **`<html lang>`** must match the locale (`es`, `pt-BR`, `de`, `ja`, `ar`). **`dir="rtl"`** for Arabic.
- **`og:locale`** should be set per locale (`en_US`, `es_ES`, `pt_BR`, `de_DE`, `ja_JP`, `ar_AR`). Check the exact values against the Open Graph locale list before publishing.
- **Images:** `alt` text in the page's language, describing what is shown.
- **Canonical and hreflang:** every locale page links to every other locale version, plus `x-default` pointing to English. (Not implemented yet. This is the next SEO step after the hero.)
- **Sitemap:** list every locale URL.

**Do not:**
- Machine-translate titles or descriptions and publish them without review.
- Stuff English keywords into non-English pages.
- Duplicate the English title in other locales (search engines treat these as duplicates).

---

## 5. Hero section: the reference pattern

The hero is the template for other sections. Each locale fills the same keys:

| Key | Purpose | Example (en) |
|---|---|---|
| `badge` | Short announcement pill | 🎉 Now Available on iOS & Android |
| `titleLine1` | First line of the H1 | Your Personal |
| `titleHighlight` | Highlighted second line of the H1 | AI Health Coach |
| `description` | One or two sentences of benefit | Transform your health journey with… |
| `availableOn` | Label above store buttons | Available on |
| `stats.*` | Labels under the stats (numbers stay in the code) | Active Users |
| `previewTitle` / `previewSubtitle` | Phone mockup text | Doctor Food App / UI Preview |
| `floatingMealPlan` / `floatingAi` | Floating card labels | 🥗 Meal Plan Ready |

The H1 is two lines: a plain line plus a highlighted line. Keep that split in translation, even if the highlight moves.

---

## 6. Writing workflow

1. **Write the English** copy in `messages/en.json`. Keep it short, accurate, and free of medical claims.
2. **Do the keyword research** for each target market (section 4).
3. **Draft each locale** from the English meaning, using the keywords from research. Do not translate word-for-word.
4. **Check the rules** in sections 3 and 4 against each draft.
5. **Send to a native reviewer** (section 7).
6. **Build and check** the page in each locale (`npm run build`, then open `/es`, `/pt-BR`, `/de`, `/ja`, `/ar`).

---

## 7. Native review checklist

A native speaker (ideally a marketer or someone from the target market) should confirm:

- [ ] Reads naturally, not like a translation
- [ ] Right tone for the market (informal "you" where specified)
- [ ] No medical or health claims beyond what the team has approved
- [ ] Numbers and store names are correct
- [ ] Keywords match how people search in that market
- [ ] Fits the layout on a phone (no clipped text, no overflow)
- [ ] Arabic: correct RTL layout, icons flipped where needed

---

## 8. Open items

- Sections other than the hero (Navbar, Features, HowItWorks, Benefits, Testimonials, CTA, Footer) are still English.
- Page titles, meta descriptions, Open Graph tags, and the sitemap are still English for all locales.
- Navigation links (e.g. `/about`) do not yet keep the current locale.
- The `Inter` font has no Arabic or Japanese glyphs, so those fall back to system fonts. Pick a font for each script.
- Arabic layout (mirrored floating cards and spacing) still needs a visual check.
