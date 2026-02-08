# MySalesBot Landing Page

A high-converting, single-page marketing site for MySalesBot - an AI-powered lead generation SaaS platform.

## Features

- ✅ Modern React 18 + Vite setup
- ✅ Fully responsive design (desktop-first)
- ✅ SEO optimized with React Helmet and JSON-LD schema markup
- ✅ Professional blue and white color scheme
- ✅ All sections from specifications implemented:
  - Hero with CTA
  - Product Demo video section
  - Performance Stats
  - Testimonials (Wall of Love with 4 customer reviews)
  - Why Us (competitive advantages)
  - Pricing table
  - FAQ accordion
  - Footer with links
  - Floating logo
- ✅ Simulated login page
- ✅ React Router for navigation
- ✅ Smooth animations and transitions

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **React Helmet Async** - SEO meta tags management
- **React Icons** - Icon library
- **CSS Modules** - Component-scoped styling

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

Create an optimized production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```
LandingPage/
├── public/               # Static assets
│   ├── video/           # Product demo video (add your video here)
│   └── logo.png         # Company logo (add your logo here)
├── src/
│   ├── components/      # Reusable React components
│   │   ├── Hero.jsx
│   │   ├── ProductDemo.jsx
│   │   ├── Stats.jsx
│   │   ├── Testimonials.jsx
│   │   ├── WhyUs.jsx
│   │   ├── Pricing.jsx
│   │   ├── FAQ.jsx
│   │   ├── Footer.jsx
│   │   └── FloatingLogo.jsx
│   ├── pages/           # Page components
│   │   ├── LandingPage.jsx
│   │   └── SimulatedLogin.jsx
│   ├── styles/          # Global styles
│   │   └── global.css
│   ├── App.jsx          # Main app component with routing
│   └── main.jsx         # React entry point
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
└── package.json         # Dependencies and scripts
```

## Adding Your Content

### 1. Add Your Logo

Place your logo image at `public/logo.svg` or `public/logo.png` (60x60px recommended)
A placeholder SVG logo is already included.

### 2. Add Product Demo Video

1. Create a `public/video/` folder
2. Add your video as `public/video/product-demo.mp4`
3. Optionally add a poster image at `public/video-placeholder.jpg`

### 3. Customize Colors

Edit CSS variables in `src/styles/global.css`:

```css
:root {
  --color-primary: #2563eb;        /* Change to your brand color */
  --color-primary-hover: #1d4ed8;  /* Hover state */
}
```

### 4. Update Content

All text content is in the component files. Update as needed:
- Hero: `src/components/Hero.jsx`
- Stats: `src/components/Stats.jsx`
- Testimonials: `src/components/Testimonials.jsx`
- Pricing: `src/components/Pricing.jsx`
- FAQ: `src/components/FAQ.jsx`

## SEO Configuration

SEO meta tags and JSON-LD schema are configured in `src/pages/LandingPage.jsx`. Update:
- Title tags
- Meta descriptions
- Open Graph tags
- JSON-LD schema data

## Deployment

This site can be deployed to:
- Vercel
- Netlify
- AWS S3 + CloudFront
- Any static hosting service

Simply build the project and deploy the `dist/` folder.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Features

- Code splitting with React.lazy
- Optimized production builds
- Lazy loading for video content
- CSS minification
- Tree shaking

## License

Private - All rights reserved

## Notes

- The login page is simulated and non-functional
- Add your actual authentication system when ready
- Update footer links (Terms, Privacy, Contact) to point to actual pages
- Consider adding Google Analytics or other tracking as needed
