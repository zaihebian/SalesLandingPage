import { useState } from 'react'
import './SignUpModal.css'

function SignUpModal({ isOpen, onClose, buttonText = "Start Your 7-Day Free Trial" }) {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    company: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const newErrors = {}
    
    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    
    // Name validation (optional but recommended)
    if (!formData.name) {
      newErrors.name = 'Name is required'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error for this field when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // TODO: Send data to your backend or email service
      // For now, we'll just log it and redirect
      console.log('Lead captured:', formData)
      
      // You can integrate with services like:
      // - Mailchimp API
      // - ConvertKit API
      // - Your own backend
      // - Google Sheets via API
      // - Airtable
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Store in localStorage for demo purposes
      localStorage.setItem('mysalesbot_lead', JSON.stringify({
        ...formData,
        timestamp: new Date().toISOString()
      }))
      
      // Redirect to product page
      window.location.href = 'https://lead-gen-demo-five.vercel.app'
      
    } catch (error) {
      console.error('Error submitting form:', error)
      setErrors({ submit: 'Something went wrong. Please try again.' })
      setIsSubmitting(false)
    }
  }

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose} aria-label="Close">
          ×
        </button>
        
        <div className="modal-header">
          <h2 className="modal-title">Start Your Free Trial</h2>
          <p className="modal-subtitle">
            No credit card required. Get started in seconds.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Work Email <span className="required">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`form-input ${errors.email ? 'error' : ''}`}
              placeholder="you@company.com"
              required
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Full Name <span className="required">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`form-input ${errors.name ? 'error' : ''}`}
              placeholder="John Doe"
              required
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="company" className="form-label">
              Company Name <span className="optional">(optional)</span>
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="form-input"
              placeholder="Your Company"
            />
          </div>

          {errors.submit && (
            <div className="error-message submit-error">{errors.submit}</div>
          )}

          <button 
            type="submit" 
            className="btn btn-primary modal-submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Starting Trial...' : buttonText}
          </button>

          <p className="modal-footer-text">
            By signing up, you agree to our Terms of Service and Privacy Policy.
          </p>
        </form>
      </div>
    </div>
  )
}

export default SignUpModal
