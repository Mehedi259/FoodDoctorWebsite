# Doctor Food: Landing Page Marketing Plan

This plan covers who the landing page is for, the pain it addresses, the search terms it should rank for, and how each section is laid out. The copy in `messages/en.json` and the sections in `components/` follow it.

---

## 1. Positioning

**One line:** Doctor Food is an AI meal planner that builds meal plans you will actually stick to, flags allergens, and answers nutrition questions from your own profile.

**What makes it different from calorie counters and recipe apps:**
- It plans the week, not just counts what you ate.
- It builds around allergies and dietary limits from the start.
- It answers from your profile, not from random forum posts.
- It is built for families, not just one person.

---

## 2. Audience and pain points

| Segment | What they feel | What they search |
|---|---|---|
| People trying to lose weight | Diets fall apart after two weeks | "meal plan for weight loss", "what to eat to lose weight", "calorie tracker app" |
| People with food allergies | Eating out means guessing | "allergy friendly meal plan", "food allergy recipes", "allergen free meal planner" |
| Busy professionals | No time to plan or cook | "meal prep app", "quick healthy meal ideas", "healthy meals for busy weeks" |
| Parents and families | Different needs, one table | "family meal planner", "meal plan for picky eaters", "weekly family meal plan" |
| People overwhelmed by advice | Too many conflicting tips online | "nutrition advice app", "AI nutritionist", "personalized diet plan" |

**Primary pain (the hook):** Most people do not lack nutrition knowledge. They lack a plan that fits their real week.

---

## 3. Keyword strategy

Search volumes are not verified here. The third-party data we found showed that exact-match allergy phrases are small, while generic meal-planner terms are much larger (for example, "meal planner free" was about 2,400 a month in one tool). Confirm all volumes in Google Keyword Planner before you commit to a term.

### Primary keywords (home page)
- AI meal planner
- meal plan app
- allergy friendly meal plan
- calorie tracker app
- what to eat for weight loss

### Secondary keywords (by section)

| Section | Target terms | Reason |
|---|---|---|
| Hero (H1) | AI meal planner, meal plans you'll actually stick to | Main intent, plus the emotional promise |
| Pain points | allergy friendly meal plan, calorie counting app, what to eat for dinner, nutrition advice online | Each card answers one search intent |
| How it works | how to start a meal plan, how a meal planner works | Explains the product to people still comparing |
| Use cases | weight loss meal plan, allergy friendly recipes, meal prep app, family meal planner | One page section per segment |
| Features | calorie and macro tracking, recipe suggestions, meal scheduling | Feature-level searches |
| AI assistant | AI nutrition assistant, ask nutrition questions | Newer intent, low competition |
| Pricing | meal plan app price, free AI meal planner | Comparison shoppers |
| FAQ | Is a meal plan app a replacement for a doctor, can I cancel meal plan app | Long-tail question searches; eligible for FAQ rich results |

### Rules
- One H1 per page, containing the main keyword.
- Keywords appear in headings and the first sentence of each section, not repeated in every line.
- Use the words people search for. "Meal plan" beats "nutrition programme" even when the second is more precise.
- Each locale gets its own keyword research (see `I18N_CONTENT_GUIDE.md`). Do not translate the English keywords word for word.

---

## 4. Messaging

**Promise:** Food that fits your life, not the other way around.

**Pillars (one per section, no more):**
1. Plans you'll actually follow (hero, how it works)
2. Safe with your allergies (pain point, use case)
3. Logging in seconds (features)
4. Answers from your profile (AI assistant)
5. Built for the whole family (use case)
6. Clear pricing, cancel any time (pricing, FAQ)

**Tone:** Calm, specific, practical. Speak to "you". Show a moment from the user's day, not a list of features.

**Proof:** Use only what you can verify: the app's real features, pricing, free trial terms, store availability, and privacy practices. Do not invent reviews, ratings, or user counts. Add real reviews to this page as soon as you have them. Until then, the page relies on specifics (the three free AI questions, cancel any time, data encrypted in transit and at rest).

---

## 5. Page structure

| # | Section | Job | Illustration |
|---|---|---|---|
| 1 | Hero | Name the pain and make the promise. Two store buttons and one secondary action (ask a question first). | Hero illustration |
| 2 | Pain points | Make the visitor say "that's me". Six short cards. | Pain illustration |
| 3 | How it works | Show the four steps. Remove the fear of starting. | Steps illustration |
| 4 | Use cases | One tab per segment, each with its own picture. | One per tab (weight, allergy, busy, family) |
| 5 | Features | Confirm the product does what the pain points promised. | None (icons) |
| 6 | AI assistant | Let the visitor try it. Shows a real question and answer. | AI illustration |
| 7 | Pricing | Show the plans, with the free start first. | None |
| 8 | FAQ | Answer the objections (doctor, privacy, cancelling). | None |
| 9 | Final call to action | Repeat the store buttons. | None |

**Conversion rules:**
- Trim copy. Long fitness and nutrition pages convert worse as they get longer (see the Unbounce data referenced in the research notes). Each card gets one sentence of body text.
- Repeat the store buttons after the hero, after the pricing section, and in the final call to action. Do not add more than these.
- Keep one primary action (download) and one secondary action (ask a question).
- Make the free start visible: "3 free AI questions", "free to download".

---

## 6. Illustrations

Illustrations come from Storyset (Freepik License, free with attribution). Sources are in `assets/illustrations/storyset/`, with credits in `CREDITS.md`. `npm run illustrations` converts them to WebP in `public/illustrations/`.

| File | Used in | Scene |
|---|---|---|
| `hero-eating-healthy-food.webp` | Hero | Woman enjoying a salad in a kitchen |
| `pain-mobile-note-list.webp` | Pain points | Woman with a phone showing a list |
| `how-order-food.webp` | How it works | Person ordering food on a phone |
| `use-weight.webp` | Use cases: weight goals | Progress arrow with gears |
| `use-allergy.webp` | Use cases: food allergies | Phone list for setting allergies |
| `use-busy.webp` | Use cases: busy weeks | Cook in a kitchen |
| `use-family.webp` | Use cases: family meals | Parent holding a child (weakest fit; replace when a better meal scene is found) |
| `ai-order-food.webp` | AI assistant | Person ordering food on a phone |

Illustrations are decorative (`alt=""`), since each heading already states the point. The footer credits Storyset.

## 7. Measurement

Set these up in Google Analytics (or your analytics tool) before the next campaign:

| Event | When it fires | Why |
|---|---|---|
| `store_click` (with `store` = app_store or google_play) | A store button is clicked | Main conversion |
| `ask_assistant` | The "ask a question" button or the AI section button is clicked | Engagement with the free trial |
| `pricing_view` | The pricing section scrolls into view | Purchase intent |
| `faq_open` | A FAQ item is opened | Objections |

In Google Search Console, track:
- Queries for the primary keywords (impressions and click-through rate)
- Pages with impressions but low clicks: rewrite the title and description
- Indexing status for `/en`, `/es`, and the other locale home pages

Review the numbers after four weeks. Change one thing at a time.

---

## 8. Checklist before publishing

- [ ] Each locale's keywords were checked in that market (not translated)
- [ ] H1 contains the primary keyword in each locale
- [ ] Title is 50–60 characters, description about 155
- [ ] Every image has translated alt text
- [ ] FAQ answers match what the app actually does
- [ ] No invented reviews, ratings, or user counts
- [ ] Health claims avoid "cure", "treat", "diagnose"
- [ ] Store links open the right app pages
- [ ] `npm run seo:check` passes after `npm run build`
