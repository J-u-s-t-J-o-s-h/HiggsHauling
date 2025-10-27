# Higgs Hauling - Deployment Guide

## Quick Start Checklist

- [x] ✅ Next.js project initialized
- [x] ✅ All components created
- [x] ✅ Contact form with email API
- [x] ✅ Git repository initialized
- [x] ✅ Initial commit created
- [ ] 🔄 GitHub repository created
- [ ] 🔄 Environment variables configured
- [ ] 🔄 Deployed to Vercel
- [ ] 🔄 Domain connected

---

## Step 1: Create GitHub Repository

### Option A: Using GitHub CLI (Recommended)
```bash
gh repo create HiggsHauling --public --source=. --remote=origin --push
```

### Option B: Using GitHub Web Interface
1. Go to https://github.com/new
2. Repository name: `HiggsHauling`
3. Description: "Roll-off dumpster rental website for Higgs Hauling"
4. Public or Private: Choose based on preference
5. **Do NOT** initialize with README, .gitignore, or license (already exists)
6. Click "Create repository"

7. Then in your terminal:
```bash
git remote add origin https://github.com/YOUR_USERNAME/HiggsHauling.git
git branch -M main
git push -u origin main
```

---

## Step 2: Configure Environment Variables

### For Local Development

Create `.env.local` file in the project root:

```env
# Email Configuration (Gmail Example)
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-16-digit-app-password
EMAIL_TO=info@higgshauling.com

# SMTP Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
```

### Getting Gmail App Password

1. Go to https://myaccount.google.com/
2. Navigate to: Security → 2-Step Verification
3. Scroll to bottom: "App passwords"
4. Select app: "Mail"
5. Select device: "Other (Custom name)" → Type "Higgs Hauling"
6. Click "Generate"
7. Copy the 16-character password (no spaces)
8. Use this in your `.env.local` file

### Alternative Email Providers

#### SendGrid
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
EMAIL_USER=apikey
EMAIL_PASSWORD=your_sendgrid_api_key
```

#### AWS SES
```env
SMTP_HOST=email-smtp.us-east-1.amazonaws.com
SMTP_PORT=587
EMAIL_USER=your_aws_smtp_username
EMAIL_PASSWORD=your_aws_smtp_password
```

---

## Step 3: Test Locally

1. **Install dependencies** (if not already done):
```bash
npm install
```

2. **Create your `.env.local`** file with the variables above

3. **Run development server**:
```bash
npm run dev
```

4. **Open browser** to http://localhost:3000

5. **Test the website**:
   - [ ] Hero section loads with logo
   - [ ] Smooth scroll to contact form works
   - [ ] Services section displays all 4 dumpster sizes
   - [ ] About section displays properly
   - [ ] Contact form validation works
   - [ ] Submit a test form submission
   - [ ] Check console or email for form data

6. **Build for production**:
```bash
npm run build
npm start
```

7. **Verify build** completes without errors

---

## Step 4: Deploy to Vercel

### Initial Deployment

1. **Go to Vercel Dashboard**
   - Visit: https://vercel.com/
   - Sign in with your GitHub account

2. **Import Project**
   - Click "Add New..." → "Project"
   - Select your GitHub repository `HiggsHauling`
   - Click "Import"

3. **Configure Project**
   - Framework Preset: **Next.js** (auto-detected)
   - Root Directory: `./` (leave as default)
   - Build Command: `next build` (auto-detected)
   - Output Directory: `.next` (auto-detected)

4. **Add Environment Variables**
   Click "Environment Variables" and add:
   
   | Name | Value |
   |------|-------|
   | `EMAIL_USER` | your-email@gmail.com |
   | `EMAIL_PASSWORD` | your-app-password |
   | `EMAIL_TO` | info@higgshauling.com |
   | `SMTP_HOST` | smtp.gmail.com |
   | `SMTP_PORT` | 587 |

5. **Deploy**
   - Click "Deploy"
   - Wait for build to complete (~2-3 minutes)
   - Your site will be live at: `https://higgs-hauling-*.vercel.app`

---

## Step 5: Connect Custom Domain

Since you already own `HiggsHauling.com`:

1. **In Vercel Project Settings**
   - Go to: Settings → Domains
   - Enter: `higgshauling.com`
   - Click "Add"

2. **Also add www subdomain**
   - Enter: `www.higgshauling.com`
   - Click "Add"

3. **Configure DNS** (in your domain registrar)
   
   Vercel will show you the required DNS records. Typically:
   
   **For apex domain (higgshauling.com):**
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   ```
   
   **For www subdomain:**
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

4. **Wait for DNS Propagation**
   - Usually takes 5-60 minutes
   - Check status in Vercel dashboard
   - SSL certificate auto-generates after DNS is verified

5. **Set Primary Domain**
   - Choose which domain is primary (recommend `higgshauling.com`)
   - Other domain will redirect to primary

---

## Step 6: Post-Deployment Testing

### Test Contact Form in Production

1. Visit your live site
2. Fill out and submit the contact form
3. Verify email is received
4. Check all fields are included in email

### Test Responsive Design

Test on multiple devices:
- [ ] Mobile (375px - 428px)
- [ ] Tablet (768px - 1024px)
- [ ] Desktop (1280px+)

### Check SEO

1. **Google Search Console**
   - Add property: https://higgshauling.com
   - Submit sitemap (auto-generated by Next.js)

2. **Test SEO Tags**
   - Use https://www.opengraph.xyz/
   - Enter your domain
   - Verify Open Graph tags display correctly

3. **Test Speed**
   - Use https://pagespeed.web.dev/
   - Should score 90+ on performance

---

## Step 7: Ongoing Maintenance

### Automatic Deployments

- Every push to `main` branch → Auto-deploy to production
- Pull requests → Create preview deployments
- Easy rollbacks from Vercel dashboard

### Update Content

To update prices, services, or contact info:

1. Edit the relevant component files
2. Commit and push to GitHub
3. Vercel auto-deploys changes

### Monitor Form Submissions

Set up email notifications to ensure you receive all quotes.

Consider adding:
- Google Analytics for traffic tracking
- Facebook Pixel for ad tracking
- Call tracking number

---

## Troubleshooting

### Contact Form Not Sending Emails

1. **Check environment variables in Vercel**
   - Settings → Environment Variables
   - Verify all 5 variables are set correctly

2. **Check Gmail app password**
   - Must be 16 characters
   - No spaces
   - Must have 2-factor auth enabled

3. **Check Vercel logs**
   - Deployments → View Function Logs
   - Look for error messages from `/api/contact`

4. **Test email locally first**
   - Run `npm run dev` with `.env.local` configured
   - Submit test form
   - Check console output

### Build Errors

If deployment fails:
1. Check Vercel build logs for specific error
2. Test locally: `npm run build`
3. Ensure all dependencies are in `package.json`
4. Clear `.next` folder and rebuild

### DNS Not Propagating

- Wait up to 48 hours (usually 1-2 hours)
- Use https://dnschecker.org/ to check status
- Verify DNS records are correct in registrar
- Try clearing browser cache / incognito mode

### Performance Issues

- Optimize images (use WebP format)
- Enable Vercel Analytics
- Check bundle size: `npm run build`
- Consider lazy loading heavy components

---

## Security Best Practices

1. **Never commit `.env.local`** to Git (already in `.gitignore`)
2. **Use environment variables** for all sensitive data
3. **Rotate email passwords** periodically
4. **Monitor form submissions** for spam
5. **Add rate limiting** if needed (future enhancement)

---

## Support Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Vercel Support**: https://vercel.com/help
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion/

---

## Quick Reference Commands

```bash
# Development
npm run dev              # Start dev server (localhost:3000)
npm run build            # Build for production
npm start                # Run production build locally
npm run lint             # Check for linting errors

# Git
git status               # Check current status
git add .                # Stage all changes
git commit -m "message"  # Commit changes
git push                 # Push to GitHub

# Deployment
# (Automatic via Vercel when you push to GitHub)
```

---

## Next Steps After Launch

1. **Set up Google Business Profile** for local SEO
2. **Add structured data** for better search results
3. **Create social media pages** (Facebook, Instagram)
4. **Set up email marketing** (Mailchimp, ConvertKit)
5. **Add testimonials section** (future enhancement)
6. **Create blog** for content marketing (optional)
7. **Add live chat** (optional - Intercom, Crisp)

---

**Questions?** Refer to the main README.md or contact support.

**Mission-driven service. On time. Every time.** 🎖️

