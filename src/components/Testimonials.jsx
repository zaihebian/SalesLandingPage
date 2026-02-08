import { FaStar } from 'react-icons/fa'
import './Testimonials.css'

function Testimonials() {
  const testimonials = [
    {
      text: "I used to spend 10 hours a week on outreach. Now I just check my inbox for 'Yes' replies. It's like having a full-time SDR for the price of a coffee.",
      author: "Sarah Chen",
      role: "Founder",
      company: "TechFlow",
      rating: 5
    },
    {
      text: "MySalesBot completely transformed our lead generation. We went from 5 meetings a month to 25+ without lifting a finger. The ROI is insane.",
      author: "Michael Torres",
      role: "VP of Sales",
      company: "CloudScale",
      rating: 5
    },
    {
      text: "Finally, a tool that actually delivers on its promise. No more manual prospecting, no LinkedIn bans, just qualified leads in my inbox every morning.",
      author: "Emily Rodriguez",
      role: "CEO",
      company: "GrowthLabs",
      rating: 5
    },
    {
      text: "We tried every automation tool out there. MySalesBot is the only one that feels like having a real sales team working 24/7. Game changer.",
      author: "David Park",
      role: "Co-Founder",
      company: "StartupHub",
      rating: 5
    }
  ]

  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title">What Our Users Say</h2>
        <p className="testimonials-subtitle">Join thousands of founders who've automated their outreach</p>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-stars">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="star-icon" />
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  {testimonial.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="author-info">
                  <div className="author-name">{testimonial.author}</div>
                  <div className="author-role">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
