# 🎨 Customization Tips

## Quick Customization Guide

### Change Brand Colors

The app uses emerald/teal gradients. To change:

**Find and replace in all component files:**
```tsx
// Current colors
from-emerald-600 to-teal-600
from-emerald-500 to-teal-500
from-teal-500 to-cyan-500

// Replace with your brand colors
from-blue-600 to-purple-600
from-blue-500 to-purple-500
from-purple-500 to-pink-500
```

### Update App Name

**In components/Navbar.tsx:**
```tsx
<span className="text-xl font-bold text-gradient">Your App Name</span>
```

**In app/layout.tsx:**
```tsx
title: "Your App - Your Tagline"
```

### Modify Hero Section

**In components/Hero.tsx:**

1. **Change headline:**
```tsx
<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
  Your Custom
  <span className="text-gradient block">Headline Here</span>
</h1>
```

2. **Update stats:**
```tsx
<p className="text-3xl font-bold text-gradient">1M+</p>
<p className="text-gray-600 text-sm">Your Metric</p>
```

3. **Change CTA buttons:**
```tsx
<button>Your CTA Text</button>
```

### Add Real App Screenshots

**Replace phone mockup in Hero.tsx:**
```tsx
// Current placeholder
<div className="w-full h-full bg-gradient-to-br from-emerald-400 to-teal-500 rounded-[2.5rem]">
  {/* Replace this div with: */}
  <img src="/app-screenshot.png" alt="App" className="w-full h-full object-cover rounded-[2.5rem]" />
</div>
```

### Customize Features

**In components/Features.tsx:**

Add/remove/edit features in the array:
```tsx
const features = [
  {
    icon: YourIcon,
    title: "Your Feature",
    description: "Your description",
    color: "from-blue-500 to-purple-500",
  },
  // Add more...
];
```

### Update Testimonials

**In components/Testimonials.tsx:**
```tsx
const testimonials = [
  {
    name: "Real Customer Name",
    role: "Their Role",
    image: "RC", // Initials
    rating: 5,
    text: "Real testimonial text...",
  },
];
```

### Modify Footer Links

**In components/Footer.tsx:**

Update navigation links:
```tsx
<a href="/your-page">Your Link</a>
```

Add/remove sections as needed.

### Change Fonts

**In app/layout.tsx:**
```tsx
import { Poppins } from "next/font/google";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["400", "600", "700"]
});
```

### Adjust Animation Speed

**In component files:**
```tsx
// Slower animation
transition={{ duration: 1.5 }}

// Faster animation
transition={{ duration: 0.3 }}

// Add delay
transition={{ delay: 0.5 }}
```

### Add New Sections

1. Create new component in `/components`
2. Import in `app/page.tsx`
3. Add between existing sections

Example:
```tsx
// components/Pricing.tsx
export default function Pricing() {
  return (
    <section className="py-20 bg-white">
      {/* Your content */}
    </section>
  );
}

// app/page.tsx
import Pricing from "@/components/Pricing";

// Add in return:
<Pricing />
```

### Modify Responsive Breakpoints

Tailwind breakpoints:
- `sm:` - 640px and up
- `md:` - 768px and up
- `lg:` - 1024px and up
- `xl:` - 1280px and up

Example:
```tsx
<div className="text-2xl md:text-4xl lg:text-6xl">
  Responsive Text
</div>
```

### Add Contact Form

Create `components/ContactForm.tsx`:
```tsx
"use client";

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="email" placeholder="Email" className="w-full p-3 rounded-lg" />
      <button type="submit">Submit</button>
    </form>
  );
}
```

### Change Background Patterns

**In Hero.tsx, modify blob animation:**
```tsx
// Change colors
<div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full..."></div>

// Change size
<div className="...w-96 h-96..."></div>

// Change position
<div className="absolute top-40 right-20..."></div>
```

### Add Dark Mode

1. Install next-themes:
```bash
npm install next-themes
```

2. Wrap app with ThemeProvider
3. Add dark: variants to Tailwind classes

### Performance Tips

1. **Optimize images:**
```tsx
import Image from 'next/image';
<Image src="/image.jpg" alt="..." width={500} height={500} />
```

2. **Lazy load components:**
```tsx
import dynamic from 'next/dynamic';
const HeavyComponent = dynamic(() => import('./HeavyComponent'));
```

3. **Reduce animation complexity** on mobile

### SEO Improvements

**Add to each page:**
```tsx
export const metadata = {
  title: "Page Title",
  description: "Page description",
  openGraph: {
    title: "Page Title",
    description: "Page description",
    images: ['/og-image.jpg'],
  },
};
```

### Add Analytics

**Install Vercel Analytics:**
```bash
npm install @vercel/analytics
```

**In app/layout.tsx:**
```tsx
import { Analytics } from '@vercel/analytics/react';

// Add before </body>
<Analytics />
```

## Common Patterns

### Gradient Text
```tsx
<span className="text-gradient">Gradient Text</span>
```

### Glass Card
```tsx
<div className="glass p-8 rounded-2xl">Content</div>
```

### Hover Effect
```tsx
<motion.div whileHover={{ scale: 1.05 }}>
  Hover me
</motion.div>
```

### Fade In Animation
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>
  Content
</motion.div>
```

## Need More Help?

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)

---

Happy customizing! 🎨
