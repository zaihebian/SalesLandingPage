import { FaRobot, FaShieldAlt, FaBrain } from 'react-icons/fa'
import './WhyUs.css'

function WhyUs() {
  const benefits = [
    {
      icon: <FaRobot />,
      title: 'True Autopilot (End-to-End)',
      description: 'AI handles everything from discovery to outreach until you get positive replies. Set it once and watch the leads roll in.'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Zero Account Risk',
      description: 'No LinkedIn login or password required. Your accounts stay safe while we do all the heavy lifting externally.'
    },
    {
      icon: <FaBrain />,
      title: 'Hyper-Personalization',
      description: 'AI crafts unique messages based on real-time lead activity, ensuring every outreach feels personal and relevant.'
    }
  ]

  return (
    <section className="why-us">
      <div className="container">
        <h2 className="section-title">Why Choose MySalesBot?</h2>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className="benefit-icon">{benefit.icon}</div>
              <h3 className="benefit-title">{benefit.title}</h3>
              <p className="benefit-description">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyUs
