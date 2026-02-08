import { useState } from 'react'
import SignUpModal from './SignUpModal'
import './Pricing.css'

function Pricing() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const plans = [
    {
      name: 'Weekly',
      price: '$45',
      period: 'week',
      savings: null,
      popular: false
    },
    {
      name: 'Monthly',
      price: '$99',
      period: 'month',
      savings: 'Save ~45%',
      popular: true
    },
    {
      name: 'Yearly',
      price: '$599',
      period: 'year',
      savings: 'Save ~75%',
      popular: false
    }
  ]

  return (
    <>
      <section id="pricing" className="pricing">
        <div className="container">
          <h2 className="section-title">Simple, Transparent Pricing</h2>
          <p className="pricing-subtitle">Choose the plan that works best for you</p>
          <div className="pricing-grid">
            {plans.map((plan, index) => (
              <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
                {plan.popular && <div className="popular-badge">Most Popular</div>}
                <h3 className="plan-name">{plan.name}</h3>
                <div className="plan-price">
                  <span className="price-amount">{plan.price}</span>
                  <span className="price-period">/ {plan.period}</span>
                </div>
                {plan.savings && <div className="plan-savings">{plan.savings}</div>}
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="btn btn-primary pricing-cta"
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SignUpModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        buttonText="Get Started"
      />
    </>
  )
}

export default Pricing
