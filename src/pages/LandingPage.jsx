import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import ProductDemo from '../components/ProductDemo'
import Stats from '../components/Stats'
import Testimonials from '../components/Testimonials'
import WhyUs from '../components/WhyUs'
import Pricing from '../components/Pricing'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import FloatingLogo from '../components/FloatingLogo'

function LandingPage() {
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "MySalesBot",
    "applicationCategory": "BusinessApplication",
    "description": "End-to-end AI sales agent that finds leads and books meetings on autopilot",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "99",
      "priceCurrency": "USD",
      "priceValidUntil": "2027-12-31"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "4100"
    }
  }

  return (
    <>
      <Helmet>
        <title>MySalesBot - Automate Your B2B Outreach | AI Sales Agent</title>
        <meta 
          name="description" 
          content="The only end-to-end AI sales agent that finds leads and books meetings on autopilot. No manual searching, no LinkedIn logins, no account risk. Start your free trial today." 
        />
        <meta name="keywords" content="AI sales agent, B2B outreach, lead generation, sales automation, LinkedIn automation" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="MySalesBot - Automate Your B2B Outreach" />
        <meta property="og:description" content="AI-powered lead generation that works on autopilot. Find leads and book meetings without manual work." />
        <meta property="og:url" content="https://mysalesbot.com" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MySalesBot - Automate Your B2B Outreach" />
        <meta name="twitter:description" content="AI-powered lead generation that works on autopilot. Find leads and book meetings without manual work." />
        
        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify(jsonLdSchema)}
        </script>
      </Helmet>

      <Navigation />
      <main>
        <Hero />
        <ProductDemo />
        <Stats />
        <Testimonials />
        <WhyUs />
        <Pricing />
        <FAQ />
        <Footer />
        <FloatingLogo />
      </main>
    </>
  )
}

export default LandingPage
