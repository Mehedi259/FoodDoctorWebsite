# Setup Guide for Food Doctor Website

এই guide তে তুমি Google Search Console, Bing Webmaster Tools, এবং Google Analytics setup করার complete instructions পাবে।

---

## 1️⃣ Google Analytics Setup

### Step 1: Google Analytics Account তৈরি করো
1. **যাও**: https://analytics.google.com/
2. তোমার Google account দিয়ে **Sign In** করো
3. **"Start measuring"** button এ click করো

### Step 2: Property তৈরি করো
1. **Account name**: `Food Doctor` লিখো
2. **Property name**: `Food Doctor Website` লিখো
3. **Reporting time zone**: `Bangladesh` select করো
4. **Currency**: `BDT - Bangladeshi Taka` select করো
5. **Next** এ click করো

### Step 3: Business Information
1. **Industry category**: `Health & Fitness` select করো
2. **Business size**: যেকোনো size select করো
3. **Continue** এ click করো

### Step 4: Web Stream Setup
1. **Platform**: **Web** select করো
2. **Website URL**: `https://food-doctor-website.vercel.app` লিখো
3. **Stream name**: `Food Doctor Website` লিখো
4. **Create stream** এ click করো

### Step 5: Measurement ID কপি করো
1. তুমি একটা **Measurement ID** দেখবে যেমন: `G-ABC123XYZ`
2. এই ID **copy** করো

### Step 6: Project এ Measurement ID যোগ করো
1. তোমার project folder এ একটা `.env.local` file তৈরি করো:
```bash
cd /Users/mehedihasanmridul/website/FoodDoctorWebsite
touch .env.local
```

2. এই file এ তোমার Measurement ID লিখো:
```env
NEXT_PUBLIC_GA_ID=G-ABC123XYZ
```
(G-ABC123XYZ এর জায়গায় তোমার actual ID দাও)

3. Vercel এ environment variable যোগ করো:
   - Vercel dashboard এ যাও
   - তোমার project select করো
   - **Settings** → **Environment Variables**
   - Add: `NEXT_PUBLIC_GA_ID` = `G-ABC123XYZ`
   - **Save** করো

4. Git push করো:
```bash
git add .
git commit -m "Add Google Analytics configuration"
git push origin main
```

✅ **Done!** এখন Google Analytics automatically data track করবে।

---

## 2️⃣ Google Search Console Setup

### Step 1: Google Search Console এ যাও
1. **যাও**: https://search.google.com/search-console/
2. তোমার Google account দিয়ে **Sign In** করো

### Step 2: Property যোগ করো
1. **"Add property"** এ click করো
2. **URL prefix** option select করো
3. URL লিখো: `https://food-doctor-website.vercel.app`
4. **Continue** এ click করো

### Step 3: Ownership Verify করো (Option 1 - HTML Tag)
1. **HTML tag** method select করো
2. তুমি একটা meta tag পাবে যেমন:
```html
<meta name="google-site-verification" content="ABC123XYZ..." />
```
3. এই tag copy করো

4. তোমার `app/layout.tsx` file এ `<head>` section এ এই meta tag যোগ করো (আমি নিচে code দিচ্ছি)

5. Git push করো এবং deploy হওয়ার জন্য wait করো

6. Google Search Console এ ফিরে গিয়ে **Verify** button এ click করো

### Step 3 Alternative: Ownership Verify (Option 2 - HTML File)
1. **HTML file upload** method select করো
2. File download করো (যেমন `googleXXXXXX.html`)
3. এই file তোমার `public/` folder এ রাখো
4. Git push করো
5. Verify করো

### Step 4: Sitemap Submit করো
1. Verify হওয়ার পর **Sitemaps** page এ যাও
2. Sitemap URL লিখো: `https://food-doctor-website.vercel.app/sitemap.xml`
3. **Submit** এ click করো

✅ **Done!** Google এখন তোমার website crawl করবে এবং search results এ show করবে।

---

## 3️⃣ Bing Webmaster Tools Setup

### Step 1: Bing Webmaster Tools এ যাও
1. **যাও**: https://www.bing.com/webmasters/
2. Microsoft account দিয়ে **Sign In** করো (নতুন account তৈরি করতে পারো)

### Step 2: Site যোগ করো
1. **"Add a site"** button এ click করো
2. URL লিখো: `https://food-doctor-website.vercel.app`
3. **Add** এ click করো

### Step 3: Ownership Verify করো (Option 1 - XML File)
1. Bing একটা XML file দেবে (যেমন `BingSiteAuth.xml`)
2. এই file download করো
3. তোমার `public/` folder এ রাখো
4. Git push করো
5. Bing এ ফিরে গিয়ে **Verify** button এ click করো

### Step 3 Alternative: Import from Google Search Console
1. **"Import from Google Search Console"** option select করো
2. তোমার Google account দিয়ে authorize করো
3. Automatically import হয়ে যাবে!

### Step 4: Sitemap Submit করো
1. **Sitemaps** page এ যাও
2. Sitemap URL লিখো: `https://food-doctor-website.vercel.app/sitemap.xml`
3. **Submit** এ click করো

✅ **Done!** Bing এখন তোমার website index করবে।

---

## 4️⃣ Social Media Sharing Test

### Facebook Debugger
1. **যাও**: https://developers.facebook.com/tools/debug/
2. তোমার URL paste করো: `https://food-doctor-website.vercel.app`
3. **Debug** button এ click করো
4. Preview দেখবে কেমন দেখাচ্ছে
5. যদি ঠিক না থাকে তাহলে **"Scrape Again"** button এ click করো

### Twitter Card Validator
1. **যাও**: https://cards-dev.twitter.com/validator
2. তোমার URL paste করো: `https://food-doctor-website.vercel.app`
3. **Preview card** button এ click করো
4. Twitter এ কেমন দেখাবে সেটা দেখবে

### LinkedIn Post Inspector
1. **যাও**: https://www.linkedin.com/post-inspector/
2. তোমার URL paste করো: `https://food-doctor-website.vercel.app`
3. **Inspect** button এ click করো
4. Preview check করো

---

## 5️⃣ Performance Monitoring

### PageSpeed Insights
1. **যাও**: https://pagespeed.web.dev/
2. তোমার URL test করো: `https://food-doctor-website.vercel.app`
3. Mobile এবং Desktop score দেখো
4. Suggestions follow করো

### GTmetrix
1. **যাও**: https://gtmetrix.com/
2. তোমার URL test করো
3. Performance report দেখো

---

## 📝 Quick Commands

### Local Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Deploy (Automatic via Git Push)
```bash
git add .
git commit -m "Your message"
git push origin main
```

### Check Deployment
```bash
vercel ls
```

---

## 🔒 Important Files

- `.env.local` - Local environment variables (Don't commit to Git!)
- `.env.local.example` - Example environment variables
- `public/robots.txt` - Search engine crawling rules
- `app/sitemap.ts` - Auto-generated sitemap
- `public/manifest.json` - PWA manifest

---

## 🎯 Next Steps After Setup

1. ✅ Wait 24-48 hours for Google/Bing to index your site
2. ✅ Monitor Google Analytics daily
3. ✅ Check Search Console for any errors
4. ✅ Share on social media to test Open Graph tags
5. ✅ Track user behavior and improve accordingly

---

**Need Help?** Contact your development team or refer to official documentation:
- Google Analytics: https://support.google.com/analytics
- Google Search Console: https://support.google.com/webmasters
- Bing Webmaster: https://www.bing.com/webmasters/help
