import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import './SimulatedLogin.css'

function SimulatedLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('This is a simulated login page. In production, this would connect to your authentication system.')
  }

  return (
    <>
      <Helmet>
        <title>Login - MySalesBot</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="login-page">
        <div className="login-container">
          <div className="login-header">
            <h1 className="login-title">Welcome to MySalesBot</h1>
            <p className="login-subtitle">Start your 7-day free trial</p>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input
                type="email"
                id="email"
                className="form-input"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                id="password"
                className="form-input"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary login-btn">
              Start Free Trial
            </button>
          </form>

          <div className="login-footer">
            <Link to="/" className="back-link">← Back to Home</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default SimulatedLogin
