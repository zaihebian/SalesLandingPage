# Quick Start Guide

Get your MySalesBot landing page running in 3 minutes!

## Step 1: Install Dependencies (if not already done)

```bash
npm install
```

## Step 2: Start Development Server

```bash
npm run dev
```

The site will open at `http://localhost:5173`

## Step 3: View Your Site

- **Landing Page**: http://localhost:5173/
- **Login Page**: http://localhost:5173/login

## What You'll See

✅ **Hero Section** - Main headline and CTA button  
✅ **Product Demo** - Video player (placeholder)  
✅ **Stats Section** - Three impressive metrics  
✅ **Why Us** - Three competitive advantages with icons  
✅ **Pricing** - Three pricing tiers  
✅ **FAQ** - Expandable accordion questions  
✅ **Footer** - Links and copyright  
✅ **Floating Logo** - Bottom-right corner (SVG placeholder)

## Add Your Content

### Priority 1: Essential Assets

```bash
# 1. Add your logo
# Replace: public/logo.svg
# Size: 60x60px recommended

# 2. Add product video
# Create: public/video/
# Add: public/video/product-demo.mp4
# Optional: public/video-placeholder.jpg (poster)
```

### Priority 2: Customize Brand Colors

Edit `src/styles/global.css`:

```css
:root {
  --color-primary: #2563eb;        /* Your brand color */
  --color-primary-hover: #1d4ed8;  /* Darker shade */
}
```

### Priority 3: Update Content

Files to edit:
- `src/components/Hero.jsx` - Headline and subheadline
- `src/components/Stats.jsx` - Your actual metrics
- `src/components/Pricing.jsx` - Your pricing plans
- `src/components/FAQ.jsx` - Your FAQs

## Build for Production

```bash
npm run build
```

Output goes to `dist/` folder - ready to deploy!

## Deploy

Choose your platform:
- **Vercel** (easiest): Connect GitHub repo
- **Netlify**: Drag & drop `dist/` folder
- **AWS/CDN**: Upload `dist/` to S3 + CloudFront

See `DEPLOYMENT.md` for detailed instructions.

## Testing Checklist

Before deploying:
- [ ] Test all buttons go to /login
- [ ] Check mobile responsive design
- [ ] Try FAQ accordion
- [ ] Verify video loads (if added)
- [ ] Test on different browsers

## Need Help?

- **Full documentation**: See `README.md`
- **Deployment guide**: See `DEPLOYMENT.md`
- **Implementation details**: See `IMPLEMENTATION_SUMMARY.md`

## Project Structure

```
LandingPage/
├── src/
│   ├── components/     → Edit content here
│   ├── pages/         → Main pages
│   └── styles/        → Design system
├── public/            → Static assets (logo, video)
└── dist/              → Built files (after npm run build)
```

## Common Commands

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
```

## Tips

💡 **Hot Reload**: Changes auto-refresh in dev mode  
💡 **CSS Variables**: Centralized in `global.css`  
💡 **Component Structure**: Each component has its own CSS file  
💡 **SEO**: Already configured in `LandingPage.jsx`

---

**You're all set!** Start customizing and deploy when ready. 🚀
