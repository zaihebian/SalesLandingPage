import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-headline">Automate Your Outreach. Multiply Your Leads.</h1>
          <p className="hero-subheadline">
            The only end-to-end AI sales agent that finds leads and books meetings on autopilot. 
            No manual searching, no LinkedIn logins, no account risk.
          </p>
          <a 
            href="https://lead-gen-demo-five.vercel.app" 
            className="btn btn-primary hero-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            Start Your 7-Day Free Trial
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
