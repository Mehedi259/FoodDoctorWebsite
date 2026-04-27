# 🚀 Deploy to Vercel - Step by Step

## Method 1: Vercel Dashboard (Easiest - Recommended)

### Step 1: Go to Vercel
Visit: https://vercel.com/new

### Step 2: Import GitHub Repository
1. Click "Import Git Repository"
2. Select your GitHub account
3. Find "FoodDoctorWebsite" repository
4. Click "Import"

### Step 3: Configure Project
Vercel will auto-detect Next.js settings:
- Framework Preset: Next.js
- Root Directory: ./
- Build Command: `npm run build`
- Output Directory: `.next`

### Step 4: Deploy
Click "Deploy" button and wait 2-3 minutes!

Your site will be live at: `https://food-doctor-website-[random].vercel.app`

---

## Method 2: Vercel CLI (Alternative)

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

Or use npx (no installation needed):
```bash
npx vercel
```

### Step 2: Login to Vercel
```bash
npx vercel login
```

Enter your email and verify.

### Step 3: Deploy
```bash
cd food-doctor-landing
npx vercel
```

Follow the prompts:
- Set up and deploy? **Y**
- Which scope? Select your account
- Link to existing project? **N**
- What's your project's name? **food-doctor-landing**
- In which directory is your code located? **./**
- Want to override settings? **N**

### Step 4: Deploy to Production
```bash
npx vercel --prod
```

---

## After Deployment

### Your Live URLs:
- Preview: `https://food-doctor-landing-[hash].vercel.app`
- Production: `https://food-doctor-landing.vercel.app`

### Custom Domain (Optional)
1. Go to Vercel Dashboard
2. Select your project
3. Go to Settings → Domains
4. Add your custom domain
5. Update DNS records as instructed

---

## Automatic Deployments

Once connected to GitHub:
- Every push to `main` branch = automatic production deployment
- Every pull request = automatic preview deployment

---

## Environment Variables (If Needed)

1. Go to Vercel Dashboard
2. Select your project
3. Settings → Environment Variables
4. Add variables as needed

---

## Troubleshooting

### Build Fails?
- Check Node.js version (use 18+)
- Verify all dependencies in package.json
- Check build logs in Vercel dashboard

### Styling Issues?
- Ensure Tailwind CSS is properly configured
- Check globals.css is imported in layout.tsx
- Verify tailwind.config.ts paths

### 404 Errors?
- Check file names and paths
- Ensure all pages are in app/ directory
- Verify routing structure

---

## Quick Deploy Command

```bash
# One command to deploy
cd food-doctor-landing && npx vercel --prod
```

---

## Support

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- GitHub Repo: https://github.com/Mehedi259/FoodDoctorWebsite

---

**Ready to deploy? Go to https://vercel.com/new and import your GitHub repo!** 🚀
