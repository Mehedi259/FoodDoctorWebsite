# Doctor Food Landing Page

Doctor Food একটি school project landing page। এটি একটি AI-powered health ও nutrition mobile app-এর জন্য বানানো হয়েছে। সাইটটির লক্ষ্য হলো app-এর প্রধান সুবিধা, কাজ করার পদ্ধতি, user review এবং download call-to-action সুন্দরভাবে দেখানো।

## Project Overview

এই website-এ home page, about page, privacy policy এবং terms page আছে। Home page-টি কয়েকটি আলাদা section দিয়ে তৈরি, যাতে project structure পরিষ্কার থাকে এবং প্রয়োজন হলে সহজে content পরিবর্তন করা যায়।

Main sections:

- Navbar
- Hero section
- Features section
- How It Works section
- Benefits section
- Testimonials section
- Call-to-action section
- Footer

## Tech Stack

এই project-এ নিচের technologies ব্যবহার করা হয়েছে:

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React icons

## Pages

- `/` - Main landing page
- `/about` - Doctor Food সম্পর্কে information
- `/privacy` - Privacy policy
- `/terms` - Terms and conditions
- `/test` - Tailwind CSS test page

## Folder Structure

```text
FoodDoctorWebsite/
├── app/
│   ├── about/page.tsx
│   ├── privacy/page.tsx
│   ├── terms/page.tsx
│   ├── test/page.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Benefits.tsx
│   ├── CTA.tsx
│   ├── Features.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── HowItWorks.tsx
│   ├── Navbar.tsx
│   └── Testimonials.tsx
├── public/
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

## How to Run

প্রথমে dependencies install করতে হবে:

```bash
npm install
```

তারপর development server চালাতে হবে:

```bash
npm run dev
```

এরপর browser-এ এই address খুলুন:

```text
http://localhost:3000
```

## Available Commands

```bash
npm run dev
```

Development mode-এ project চালায়।

```bash
npm run build
```

Production build তৈরি করে।

```bash
npm start
```

Production server চালায়।

```bash
npm run lint
```

Code quality check করে।

## Customization Guide

Text পরিবর্তন করতে চাইলে `components/` folder-এর fileগুলো edit করতে হবে। যেমন:

- Hero section-এর headline বা button text: `components/Hero.tsx`
- Feature card-এর text: `components/Features.tsx`
- Review text: `components/Testimonials.tsx`
- Footer link ও contact text: `components/Footer.tsx`

Color theme মূলত emerald, teal এবং cyan gradient দিয়ে করা হয়েছে। এগুলো component file এবং `app/globals.css`-এ Tailwind class হিসেবে ব্যবহার করা হয়েছে।

## Project Notes

এই project একটি presentation/demo-ready landing page হিসেবে তৈরি। Real app store link, social media link, company address, testimonial এবং statistics production-এ ব্যবহার করার আগে real information দিয়ে update করা উচিত।

## Deployment

Vercel-এ deploy করার আগে production build check করা ভালো:

```bash
npm run build
```

Build successful হলে project GitHub-এ push করে Vercel থেকে import করে deploy করা যাবে।

## Post-Deployment Setup

Website deploy হওয়ার পর নিচের steps follow করো:

### 1. Google Analytics Setup
- `SETUP_GUIDE.md` file খুলে **Google Analytics** section follow করো
- Measurement ID পেলে Vercel এ environment variable যোগ করো

### 2. Google Search Console
- `SETUP_GUIDE.md` file এ **Google Search Console** section follow করো
- Website verify করো এবং sitemap submit করো

### 3. Bing Webmaster Tools
- `SETUP_GUIDE.md` file এ **Bing Webmaster Tools** section follow করো
- Website verify করো

### 4. Social Media Test
- Facebook Debugger, Twitter Card Validator দিয়ে test করো

**বিস্তারিত instructions**: `SETUP_GUIDE.md` file দেখো।

## Environment Variables

তোমার `.env.local` file তৈরি করো (example দেখো: `.env.local.example`):

```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

Vercel এ deploy করার সময় এই environment variable add করতে হবে।
