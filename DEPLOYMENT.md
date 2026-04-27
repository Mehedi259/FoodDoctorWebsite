# Deployment Guide

## Quick Deploy to Vercel

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js
   - Click "Deploy"

## Environment Variables

No environment variables required for basic deployment.

## Build Command

```bash
npm run build
```

## Performance Optimization

The site is already optimized with:
- Next.js App Router for fast navigation
- Image optimization (when images are added)
- Code splitting
- CSS optimization with Tailwind
- Framer Motion lazy loading

## Custom Domain

1. Go to your Vercel project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Update DNS records as instructed

## Analytics (Optional)

Add Vercel Analytics:
```bash
npm install @vercel/analytics
```

Then add to `app/layout.tsx`:
```tsx
import { Analytics } from '@vercel/analytics/react';

// Add <Analytics /> before </body>
```

## SEO Checklist

- ✅ Meta titles and descriptions added
- ✅ Semantic HTML structure
- ✅ Fast page loads
- ✅ Mobile responsive
- ✅ Proper heading hierarchy
- ⬜ Add sitemap.xml (optional)
- ⬜ Add robots.txt (optional)
- ⬜ Add Open Graph images (optional)

## Post-Deployment

1. Test on multiple devices
2. Check page load speed with Lighthouse
3. Verify all links work
4. Test form submissions (if added)
5. Monitor analytics

## Troubleshooting

**Build fails:**
- Check Node.js version (use 18+)
- Clear `.next` folder and rebuild
- Check for TypeScript errors

**Animations not working:**
- Ensure Framer Motion is installed
- Check browser compatibility

**Styling issues:**
- Clear browser cache
- Verify Tailwind config
- Check for CSS conflicts
