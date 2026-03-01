# 🚀 Deployment Guide for S.M.V Enterprises Website

This guide will help you deploy your website to **free hosting** and connect your domain **www.smventerprise.com**.

---

## 📋 Table of Contents
1. [GitHub Pages (Recommended)](#option-1-github-pages-recommended)
2. [Netlify](#option-2-netlify)
3. [Vercel](#option-3-vercel)
4. [Firebase Hosting (Google)](#option-4-firebase-hosting-google)

---

## Option 1: GitHub Pages (Recommended) ⭐

**Why GitHub Pages?**
- ✅ 100% Free forever
- ✅ Automatic HTTPS
- ✅ Easy custom domain setup
- ✅ No credit card required
- ✅ Reliable (hosted by Microsoft)

### Step-by-Step Instructions:

#### 1. Create GitHub Account (if you don't have one)
- Go to [github.com](https://github.com)
- Click "Sign up" and create a free account

#### 2. Create New Repository
1. Click the **+** icon in top-right corner
2. Select **"New repository"**
3. Repository name: `smventerprises` (or any name)
4. Make it **Public** (required for free GitHub Pages)
5. Click **"Create repository"**

#### 3. Upload Your Website

**Option A: Using GitHub Web Interface (Easy)**
1. In your new repository, click **"uploading an existing file"**
2. Drag and drop ALL files from your `smventerprises` folder
3. Write commit message: "Initial website upload"
4. Click **"Commit changes"**

**Option B: Using Git Command Line**
```bash
# Navigate to your project folder
cd /Users/deepakkumar/smventerprises

# Add all files
git add .

# Commit files
git commit -m "Initial commit - S.M.V Enterprises website"

# Add remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/smventerprises.git

# Push to GitHub
git branch -M main
git push -u origin main
```

#### 4. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down and click **Pages** in left sidebar
4. Under **Source**, select **"main"** branch
5. Click **Save**
6. Your site will be live at: `https://YOUR_USERNAME.github.io/smventerprises`

#### 5. Connect Your Custom Domain (www.smventerprise.com)

**Step 5.1: Update DNS Settings at Your Domain Registrar**

Go to your domain registrar (where you bought smventerprise.com) and add these DNS records:

**For www subdomain:**
```
Type: CNAME
Name: www
Value: YOUR_USERNAME.github.io
TTL: 3600 (or Auto)
```

**For root domain (smventerprise.com):**
```
Type: A
Name: @ (or leave blank)
Value: 185.199.108.153
TTL: 3600

Type: A
Name: @ (or leave blank)
Value: 185.199.109.153
TTL: 3600

Type: A
Name: @ (or leave blank)
Value: 185.199.110.153
TTL: 3600

Type: A
Name: @ (or leave blank)
Value: 185.199.111.153
TTL: 3600
```

**Step 5.2: Add Custom Domain in GitHub**
1. Go to repository **Settings** → **Pages**
2. Under **Custom domain**, enter: `www.smventerprise.com`
3. Click **Save**
4. Wait 5-10 minutes for DNS to propagate
5. Check **"Enforce HTTPS"** (wait 24hrs if not available immediately)

✅ **Done!** Your website will be live at www.smventerprise.com

---

## Option 2: Netlify

**Why Netlify?**
- ✅ Super easy drag-and-drop deployment
- ✅ Automatic deployments
- ✅ Free SSL certificate
- ✅ Fast CDN

### Step-by-Step:

1. **Sign Up**
   - Go to [netlify.com](https://www.netlify.com)
   - Sign up with GitHub (or email)

2. **Deploy Site**
   - Click **"Add new site"** → **"Deploy manually"**
   - Drag and drop your entire `smventerprises` folder
   - Wait 30 seconds - your site is live!

3. **Connect Custom Domain**
   - Click **"Domain settings"**
   - Click **"Add custom domain"**
   - Enter: `www.smventerprise.com`
   - Follow DNS instructions provided by Netlify

**DNS Settings (at your domain registrar):**
```
Type: CNAME
Name: www
Value: YOUR_SITE_NAME.netlify.app
TTL: 3600
```

✅ **Done!** Netlify provides automatic HTTPS.

---

## Option 3: Vercel

**Why Vercel?**
- ✅ Lightning-fast deployments
- ✅ Automatic HTTPS
- ✅ Great performance
- ✅ Easy CLI

### Step-by-Step:

1. **Sign Up**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub

2. **Deploy**
   - Click **"Add New"** → **"Project"**
   - Import your GitHub repository
   - Click **"Deploy"**

3. **Add Custom Domain**
   - Go to **"Settings"** → **"Domains"**
   - Add: `www.smventerprise.com`
   - Follow DNS instructions

**DNS Settings:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

✅ **Done!**

---

## Option 4: Firebase Hosting (Google)

**Why Firebase?**
- ✅ Google's infrastructure
- ✅ Free tier: 10GB storage, 360MB/day bandwidth
- ✅ Automatic SSL
- ✅ Fast CDN

### Step-by-Step:

1. **Install Firebase CLI**
```bash
npm install -g firebase-tools
```

2. **Login to Firebase**
```bash
firebase login
```

3. **Initialize Firebase**
```bash
cd /Users/deepakkumar/smventerprises
firebase init hosting
```

Select:
- Choose **"Create a new project"** or use existing
- Public directory: **. (current directory)**
- Configure as single-page app: **No**
- Set up automatic builds: **No**

4. **Deploy**
```bash
firebase deploy
```

5. **Add Custom Domain**
- Go to [Firebase Console](https://console.firebase.google.com)
- Select your project → **Hosting**
- Click **"Add custom domain"**
- Enter: `www.smventerprise.com`
- Follow DNS verification steps

✅ **Done!**

---

## 🎯 Recommended Hosting Choice

**For Beginners:** Use **GitHub Pages** or **Netlify**
- Easiest setup
- No command line needed (for Netlify)
- Most reliable free tier

**For Advanced Users:** Use **Vercel** or **Firebase**
- Better performance
- More features
- Professional infrastructure

---

## 📞 Need Help?

If you face any issues during deployment:

1. **DNS Issues:** DNS changes can take 24-48 hours to propagate globally
2. **HTTPS Certificate:** May take 24 hours to activate after DNS setup
3. **404 Errors:** Make sure `index.html` is in the root folder

---

## ✅ Checklist After Deployment

- [ ] Website loads at www.smventerprise.com
- [ ] HTTPS is enabled (green padlock)
- [ ] All images load correctly
- [ ] All links work
- [ ] WhatsApp buttons work
- [ ] Contact forms redirect to WhatsApp
- [ ] Website is mobile-responsive
- [ ] Google Maps loads correctly

---

## 🔄 How to Update Website

### GitHub Pages:
```bash
# Make changes to your files
git add .
git commit -m "Updated website"
git push origin main
# Changes will be live in 1-2 minutes
```

### Netlify:
- **Method 1:** Drag & drop new files in Netlify dashboard
- **Method 2:** Connect GitHub repo for automatic deployments

### Vercel:
- Push to GitHub - automatically deploys

### Firebase:
```bash
firebase deploy
```

---

## 🎉 You're All Set!

Your premium S.M.V Enterprises website is now live on the internet!

**Share your website:**
- WhatsApp: Share www.smventerprise.com
- Google My Business: Add website URL
- Social Media: Post your website link
- Business Cards: Print www.smventerprise.com

---

**© 2025 S.M.V Enterprises** | Deployed with ❤️
