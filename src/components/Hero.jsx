import { useState } from 'react'
import SignUpModal from './SignUpModal'
import './Hero.css'

function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-headline">Automate Your Outreach. Multiply Your Leads.</h1>
            <p className="hero-subheadline">
              The only end-to-end AI sales agent that finds leads and books meetings on autopilot. 
              No manual searching, no LinkedIn logins, no account risk.
            </p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="btn btn-primary hero-cta"
            >
              Start Your 7-Day Free Trial
            </button>
          </div>
        </div>
      </section>

      <SignUpModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}

export default Hero
