# Frontend Standards

Rules for building UI in Doctor Food. Follow them for every new component, page, and string.

---

## 1. Components: shadcn/ui first

- Use shadcn/ui for **every** UI component. Do not hand-write a primitive that shadcn already has (Button, Card, Badge, Sheet, Dialog, Input, Carousel, and so on). Check the list at https://ui.shadcn.com/docs/components first.
- **Install new components with this command:**

  ```bash
  bunx --bun shadcn@latest add <component>
  # e.g.
  bunx --bun shadcn@latest add tooltip
  ```

- Do not edit `components/ui/*` by hand. Re-run the `add` command to update a component. Build your own compositions in `components/`.
- The project uses the `base-nova` style, which is built on **Base UI**, not Radix. Use the `render` prop for custom elements (for example `render={<Link href="/about" />}`). Do **not** use `asChild`.

## 2. Use variants, not custom sizes and styles

- Use the component's own `variant` and `size` props instead of custom classes.
  - Good: `<Button size="icon-lg" variant="ghost" />`
  - Bad: `<Button className="h-14 w-14 rounded-full bg-emerald-600" />`
- Use `className` only for layout (grid, flex, gap, positioning, responsive spacing). Do not restyle a component's colors or sizes with it.
- Use theme tokens (`bg-primary`, `text-muted-foreground`, `bg-card`, `border-border`). Do not use raw palette colors such as `bg-emerald-600`.
  - The one exception is the brand gradient utility `text-gradient` in `app/globals.css`.

## 3. Forms

- Labeled form inputs: use **`Field`**, `FieldGroup`, `FieldLabel`, `FieldDescription`, and `FieldError`.
- Inputs that have a button or text attached (send buttons, prefixes, suffixes): use **`InputGroup`**, `InputGroupInput`, `InputGroupAddon`, and `InputGroupButton`.

## 4. Icons and logos

- **Icons: Tabler first.** Use `@tabler/icons-react` (names start with `Icon`, for example `IconSparkles`). Check that the name exists before using it.
- `lucide-react` has been removed. Do not add it back.
- **Brand logos (App Store, Google Play, social networks): use svgl.app.** Download the SVG into `public/logos/` (for example `public/logos/google-play.svg`) and reference it with `next/image`.
  - Check the license of each brand logo before publishing.
  - Before launch, confirm that store badges follow the Apple and Google badge guidelines.

## 5. Layout and direction (RTL)

- Wrap the app in `DirectionProvider` (already done in `app/[locale]/layout.tsx`). Arabic renders with `dir="rtl"`.
- Use **logical** Tailwind properties so layouts mirror correctly:
  - `ms-*`, `me-*`, `ps-*`, `pe-*`, `start-*`, `end-*`, `text-start`, `text-end`
  - Avoid `ml-*`, `mr-*`, `pl-*`, `pr-*`, `left-*`, `right-*`, `text-left`, `text-right` in new code.
- Use the `rtl:` variant only when a logical property cannot express the rule.

## 6. Text and translation (English first)

- **No hard-coded user-visible text.** Every string goes through next-intl: `useTranslations("<Namespace>")` in client components, `getTranslations` in server components.
- **English is the source.** Add or change the English key in `messages/en.json` first.
- **Then translate into every other locale** (`messages/<locale>.json`). Do not translate word-for-word. Write each translation from the English meaning, using the words native users actually search for in that market. See `I18N_CONTENT_GUIDE.md` (section 4) for keyword research and the tone rules.
- Every key must exist in every locale file in the same change. A missing key breaks that locale.
- Keep these as they are in all locales:
  - The brand name "Doctor Food"
  - Store names ("Google Play", "App Store")
  - Native language names in the language switcher (for example "Deutsch", "日本語", "Русский")
- Health and nutrition claims: follow section 3 of `I18N_CONTENT_GUIDE.md`. No medical claims.

## 7. Fonts

- **Headings use Bricolage Grotesque.** `h1`–`h6` and the shadcn title slots (`card-title`, `item-title`, `sheet-title`) get `--font-heading` from `app/globals.css`. Use the `font-heading` class for any other heading-like text.
  - Bricolage Grotesque has no Cyrillic or Vietnamese glyphs, so headings in Russian and Vietnamese fall back to Inter.
- **Body text uses Inter.** Everything else inherits `--font-sans`. Do not set a font family on body text.
- Fonts are declared once in `app/[locale]/layout.tsx`. Each script has its own variable, and `app/globals.css` builds the `--font-sans` and `--font-heading` fallback stacks from them.
- Adding a new font: list the scripts it covers, set `preload: false` for non-Latin scripts, and add its variable to both fallback stacks where it applies.

## 8. Before opening a pull request

Run these and check the results:

- `npx tsc --noEmit` passes.
- `npm run build` passes and every locale route is generated.
- Check the page at 390px width in English, Arabic (RTL), and Russian (Cyrillic).
- No `lucide-react` imports, no `asChild`, no hard-coded user text outside `messages/`.
