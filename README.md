# Higgs Hauling - Roll-Off Dumpster Rentals

A modern, conversion-focused website for Higgs Hauling, a veteran-owned roll-off dumpster rental company serving Augusta, GA and surrounding areas.

## 🎨 Design Theme

**Military-class professionalism meets luxury**
- Colors: Matte black (#0a0a0a), White (#ffffff), Gold (#D4AF37)
- Typography: Bold sans-serif with military-inspired aesthetics
- Animations: Smooth fade-ins, slide-ups, and hover effects
- Layout: Clean, minimal, centered on trust and simplicity

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form
- **Email**: Nodemailer
- **Deployment**: Vercel
- **Language**: TypeScript

## 📦 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/HiggsHauling.git
cd HiggsHauling
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory:
```bash
cp .env.local.example .env.local
```

4. Configure your environment variables in `.env.local`:
```env
# Email Configuration
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password
EMAIL_TO=info@higgshauling.com

# SMTP Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
```

### Setting Up Email (Gmail Example)

1. Go to your [Google Account](https://myaccount.google.com/)
2. Navigate to Security → 2-Step Verification
3. Scroll down to "App passwords"
4. Generate a new app password for "Mail"
5. Use this password in your `.env.local` file

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
HiggsHauling/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts      # Contact form API endpoint
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout with SEO
│   └── page.tsx              # Homepage
├── components/
│   ├── Hero.tsx              # Hero section
│   ├── Services.tsx          # Services grid
│   ├── About.tsx             # About section
│   ├── ContactForm.tsx       # Contact form
│   └── Footer.tsx            # Footer
├── public/
│   ├── logo.png              # Company logo
│   └── favicon.ico           # Favicon
├── next.config.js            # Next.js configuration
├── tailwind.config.js        # Tailwind customization
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies
```

## 🌐 Deployment to Vercel

### Initial Setup

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/HiggsHauling.git
git push -u origin main
```

2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "Add New Project"
4. Import your GitHub repository
5. Configure environment variables:
   - `EMAIL_USER`
   - `EMAIL_PASSWORD`
   - `EMAIL_TO`
   - `SMTP_HOST`
   - `SMTP_PORT`

### Connect Your Domain

1. In Vercel project settings, go to "Domains"
2. Add `higgshauling.com`
3. Follow the DNS configuration instructions
4. Wait for SSL certificate provisioning (automatic)

### Automatic Deployments

- Every push to `main` branch triggers automatic deployment
- Preview deployments created for pull requests
- Rollback available from deployment history

## 🎯 Features

### Hero Section
- Full-width background with logo
- Smooth fade-in animations
- Call-to-action button with smooth scroll
- Scroll indicator

### Services Section
- Four dumpster size options (10, 20, 30, 40 yard)
- Detailed specifications for each size
- Feature highlights (speed, reliability, pricing)
- Responsive grid layout

### About Section
- Veteran-owned business story
- Company values and mission
- Eye-catching quote callout
- Statistics display

### Contact Form
- Comprehensive quote request form
- Client-side validation with React Hook Form
- Email notifications via Nodemailer
- Success/error feedback
- Direct contact information

### Footer
- Social media links (Facebook, Instagram, Email)
- Quick navigation links
- Contact information
- Copyright and branding

## 🔧 Customization

### Update Contact Information

Edit in multiple locations:
- `components/ContactForm.tsx` (phone, email)
- `components/Footer.tsx` (all contact info)
- `app/api/contact/route.ts` (default email recipient)

### Update Service Area

Edit in:
- `components/Services.tsx` (service area text)
- `app/layout.tsx` (SEO keywords and description)

### Update Dumpster Sizes/Pricing

Edit `components/Services.tsx`:
```typescript
const dumpsterSizes = [
  // Modify size, dimensions, capacity, ideal use cases
]
```

### Change Colors

Edit `tailwind.config.js`:
```javascript
colors: {
  'matte-black': '#0a0a0a',
  'dark-gray': '#1a1a1a',
  'gold': '#D4AF37',
  'gold-dark': '#B8960F',
}
```

## 📱 Mobile Optimization

- Fully responsive design
- Mobile-first approach
- Touch-friendly buttons (min 44px)
- Optimized images for different screen sizes
- Hamburger menu ready (if needed)

## 🔍 SEO Features

- Comprehensive meta tags
- Open Graph tags for social sharing
- Structured data (JSON-LD) for local business
- Optimized keywords for dumpster rental industry
- Fast page load times
- Mobile-friendly design

## 🧪 Testing Checklist

- [ ] Test contact form submission
- [ ] Verify email delivery
- [ ] Test responsive design on mobile/tablet/desktop
- [ ] Check all navigation links
- [ ] Verify smooth scroll behavior
- [ ] Test form validation
- [ ] Check social media links
- [ ] Verify SEO meta tags
- [ ] Test build process (`npm run build`)
- [ ] Check console for errors

## 📄 License

© 2025 Higgs Hauling. All Rights Reserved.

## 🤝 Support

For questions or support:
- Email: info@higgshauling.com
- Phone: (555) 555-1234

---

**Mission-driven service. On time. Every time.** 🎖️

