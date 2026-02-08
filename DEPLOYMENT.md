# Deployment Guide

This guide covers deployment options for the MySalesBot landing page.

## Build Summary

✅ **Production Build Complete**
- Build time: ~2.3 seconds
- React vendor bundle: 163 KB (53 KB gzipped)
- Total CSS: ~10 KB (3 KB gzipped)
- Code splitting: Optimized with separate chunks

## Quick Deploy Options

### 1. Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push your code to GitHub
2. Import project to Vercel
3. Vercel auto-detects Vite configuration
4. Deploy!

**Configuration:**
- Framework Preset: Vite
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

### 2. Netlify

1. Push code to GitHub
2. Connect repository to Netlify
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy

**netlify.toml** (optional):
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### 3. AWS S3 + CloudFront (Global CDN)

**Setup:**

1. Create S3 bucket
2. Enable static website hosting
3. Upload `dist/` contents
4. Create CloudFront distribution
5. Point to S3 bucket origin
6. Configure SSL certificate

**AWS CLI Deploy:**
```bash
# Build
npm run build

# Sync to S3
aws s3 sync dist/ s3://your-bucket-name --delete

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id YOUR_ID --paths "/*"
```

### 4. GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to package.json:
   ```json
   {
     "homepage": "https://yourusername.github.io/repo-name",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

### 5. Docker

**Dockerfile:**
```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

**nginx.conf:**
```nginx
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
}
```

**Build and run:**
```bash
docker build -t mysalesbot-landing .
docker run -p 80:80 mysalesbot-landing
```

## Pre-Deployment Checklist

### Content Updates

- [ ] Add your company logo to `public/logo.svg`
- [ ] Add product demo video to `public/video/product-demo.mp4`
- [ ] Update meta tags in `src/pages/LandingPage.jsx`
- [ ] Update site URL in Open Graph tags
- [ ] Review and customize all copy/content
- [ ] Update footer links (Terms, Privacy, Contact)

### Configuration

- [ ] Update brand colors in `src/styles/global.css`
- [ ] Add Google Analytics or tracking code
- [ ] Configure actual authentication for login page
- [ ] Set up contact form backend (if adding one)
- [ ] Configure environment variables if needed

### SEO & Performance

- [ ] Verify JSON-LD schema with [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Test with [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] Add robots.txt if needed
- [ ] Add sitemap.xml if needed
- [ ] Configure custom domain
- [ ] Set up SSL certificate

### Testing

- [ ] Test all CTA buttons redirect correctly
- [ ] Verify video plays on all browsers
- [ ] Test responsive design (desktop, tablet, mobile)
- [ ] Test FAQ accordion functionality
- [ ] Verify form validation on login page
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Check loading performance on slow connections

## Performance Optimizations Already Included

✅ Code splitting with React.lazy  
✅ Lazy loading for routes  
✅ Optimized Vite build configuration  
✅ CSS minification  
✅ Tree shaking  
✅ Gzip compression ready  
✅ Responsive images  
✅ Video lazy loading  
✅ Modern ES6+ code with fallbacks

## Environment Variables (Optional)

Create `.env` file for environment-specific settings:

```env
VITE_API_URL=https://api.mysalesbot.com
VITE_GA_TRACKING_ID=UA-XXXXX-Y
```

Access in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL
```

## Monitoring & Analytics

### Recommended Tools:
- **Google Analytics 4** - User behavior tracking
- **Hotjar** - Heatmaps and user recordings
- **Sentry** - Error tracking
- **Vercel Analytics** - Performance monitoring (if using Vercel)

### Add Google Analytics:

1. In `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## Custom Domain Setup

### Vercel:
1. Go to project settings
2. Add custom domain
3. Update DNS records as instructed
4. SSL auto-configured

### Netlify:
1. Domain settings → Add custom domain
2. Configure DNS
3. Enable HTTPS

### CloudFront:
1. Add alternate domain name (CNAME)
2. Request/import SSL certificate in ACM
3. Update DNS to point to CloudFront

## Troubleshooting

### Build Issues:
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear Vite cache
rm -rf node_modules/.vite
```

### Routing Issues on Production:
Ensure your hosting provider is configured for SPA routing (all routes → index.html)

## Support & Maintenance

- Keep dependencies updated: `npm outdated`
- Update packages: `npm update`
- Security audits: `npm audit`
- Monitor Core Web Vitals
- Regular content updates

## Cost Estimates

- **Vercel/Netlify Free Tier**: $0/month (perfect for landing pages)
- **AWS S3 + CloudFront**: ~$1-5/month (depending on traffic)
- **Docker + VPS**: ~$5-10/month (DigitalOcean, Linode)

---

**Ready to deploy!** Choose your preferred platform and follow the steps above.

For questions or issues, refer to the main README.md file.
