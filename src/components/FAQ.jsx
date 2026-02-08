import { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import './FAQ.css'

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'How is MySalesBot different from classic automation tools?',
      answer: 'Unlike traditional automation that only handles outreach, MySalesBot is a true end-to-end agent. We handle lead discovery, verification, personalized message crafting, and outreach - all automatically. You don\'t need to provide lists or write templates.'
    },
    {
      question: 'Who is MySalesBot designed for?',
      answer: 'MySalesBot is perfect for busy founders and small sales teams who want to scale their B2B outreach without hiring additional staff. If you\'re spending hours on manual prospecting and outreach, we can give you that time back.'
    },
    {
      question: 'Is it safe? Will my LinkedIn account get banned?',
      answer: 'Absolutely safe! Unlike other tools that require your LinkedIn credentials, MySalesBot operates externally without ever logging into your accounts. This means zero risk of account suspension or bans.'
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="faq">
      <div className="container">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                <span>{faq.question}</span>
                <FaChevronDown className="faq-icon" />
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
