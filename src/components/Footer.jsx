import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-links">
            <a href="/terms" className="footer-link">Terms of Service</a>
            <span className="footer-separator">•</span>
            <a href="/privacy" className="footer-link">Privacy Policy</a>
            <span className="footer-separator">•</span>
            <a href="/contact" className="footer-link">Contact Us</a>
          </div>
          <div className="footer-copyright">
            © {currentYear} MySalesBot. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
