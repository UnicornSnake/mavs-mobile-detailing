# Cloudflare Pages Deployment Guide

Deploy Mav's Mobile Detailing to Cloudflare Pages (like your FORS website).

## Option 1: Direct Upload (Fastest - 5 minutes)

### Step 1: Prepare Files
All files are ready in `/Users/cloudwalker/dev/mav/`:
- ✅ index.html
- ✅ 404.html
- ✅ css/styles.css
- ✅ js/main.js
- ✅ assets/logo.jpeg

### Step 2: Upload to Cloudflare
1. Go to https://dash.cloudflare.com
2. Click **Workers & Pages** in the left sidebar
3. Click **Create application** → **Pages** → **Upload assets**
4. **Project name:** `mavs-mobile-detailing` (or your preferred name)
5. **Production branch:** main
6. Drag and drop the entire `/Users/cloudwalker/dev/mav` folder (or select files)
7. Click **Save and Deploy**

### Step 3: Your Site is Live! 🚀
- Your site will be available at: `https://mavs-mobile-detailing.pages.dev`
- Custom domain setup (optional): Add your own domain in project settings

---

## Option 2: Git Integration (Best for Updates)

### Step 1: Push to GitHub
```bash
cd /Users/cloudwalker/dev/mav

# If you haven't set up GitHub remote yet:
gh repo create mavs-mobile-detailing --public --source=. --remote=origin --push

# Or if you prefer manual setup:
# Create repo at github.com/new
# Then run:
git remote add origin https://github.com/YOUR_USERNAME/mavs-mobile-detailing.git
git branch -M main
git add .
git commit -m "Initial commit: Mav's Mobile Detailing with glassmorphism design"
git push -u origin main
```

### Step 2: Connect to Cloudflare Pages
1. Go to https://dash.cloudflare.com
2. Click **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**
3. Select your GitHub repository: `mavs-mobile-detailing`
4. **Build settings:**
   - Framework preset: **None**
   - Build command: *(leave empty)*
   - Build output directory: `/`
5. Click **Save and Deploy**

### Step 3: Automatic Deployments 🎯
Now every time you push to GitHub, Cloudflare automatically deploys!

---

## Custom Domain Setup (Optional)

### Add Your Own Domain (e.g., mavsmobiledetailing.com)

1. In Cloudflare Pages project settings, click **Custom domains**
2. Click **Set up a custom domain**
3. Enter your domain: `mavsmobiledetailing.com`
4. Follow DNS instructions:
   - Add a CNAME record pointing to `mavs-mobile-detailing.pages.dev`
   - Or use Cloudflare's automatic setup if your domain is already on Cloudflare

### Free SSL Certificate
Cloudflare automatically provides a free SSL certificate for your custom domain.

---

## Post-Deployment Checklist

After your site is live:

### 1. Set Up Web3Forms
- [ ] Get access key from https://web3forms.com
- [ ] Update `index.html` with your access key (line 608)
- [ ] Test the contact form
- [ ] Verify you receive email notifications

### 2. Update Meta Tags
- [ ] Change all URLs from `https://unicornsnake.github.io/mav/` to your actual Cloudflare Pages URL
- [ ] Update Open Graph image URL
- [ ] Update canonical URL

### 3. Set Up Google Business Profile (Critical for SEO!)
- [ ] Create/claim Google Business Profile
- [ ] Add business name: "Mav's Mobile Detailing"
- [ ] Category: "Auto detailing service"
- [ ] Service area: Yorkville, IL + surrounding cities
- [ ] Add website URL (your Cloudflare Pages URL)
- [ ] Upload photos of your work
- [ ] Add business hours: Mon-Sat 8:00 AM - 6:00 PM

### 4. SEO Setup
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Analytics (optional)
- [ ] Register on Yelp, Nextdoor, Facebook Business

### 5. Test on Mobile Devices
- [ ] Test on iPhone (Safari)
- [ ] Test on Android (Chrome)
- [ ] Verify all glass effects render correctly
- [ ] Test contact form submission
- [ ] Check scroll animations

---

## Updating Your Site

### If using Git Integration:
```bash
# Make changes to files
# Then commit and push:
git add .
git commit -m "Update pricing"
git push

# Cloudflare automatically deploys in ~1 minute
```

### If using Direct Upload:
1. Make changes locally
2. Go to Cloudflare Pages project
3. Click **Create deployment**
4. Upload updated files
5. Deploy

---

## Performance & SEO

Your site is optimized for:
- ✅ **Mobile-first design** (critical for detailing business)
- ✅ **Fast loading** (~2-3 seconds)
- ✅ **SEO optimized** for Yorkville, IL
- ✅ **Local schema markup** for rich snippets
- ✅ **Responsive design** (320px - 1440px+)
- ✅ **Glassmorphism effects** (professional, modern look)

---

## Need Help?

**Cloudflare Pages Docs:** https://developers.cloudflare.com/pages/
**Support:** Check Cloudflare Community or Discord

---

**Estimated Total Setup Time:** 10-15 minutes
**Cost:** $0 (Cloudflare Pages is free for static sites)
