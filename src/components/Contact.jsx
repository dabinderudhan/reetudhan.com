import { useState } from 'react'
import { motion } from 'framer-motion'

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.6 }
}

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => { setSent(false); e.target.reset() }, 2500)
  }

  return (
    <section className="section contact-section" id="contact">
      <div className="section-inner">
        <div className="contact-grid">
          <motion.div className="contact-left" {...fadeUp}>
            <div className="section-tag">Get in Touch</div>
            <h2 className="section-title">Let's connect</h2>
            <p>I'd love to connect with fellow educators, families, and organizations dedicated to making a difference in students' lives.</p>
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-item-icon">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <div>
                  <div className="contact-item-label">Email</div>
                  <div className="contact-item-value"><a href="mailto:reetkaur02@gmail.com">reetkaur02@gmail.com</a></div>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-item-icon">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <div className="contact-item-label">Location</div>
                  <div className="contact-item-value">Phoenix, Arizona, USA</div>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-item-icon">
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.13C5.12 19.56 12 19.56 12 19.56s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z"/>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
                  </svg>
                </div>
                <div>
                  <div className="contact-item-label">YouTube</div>
                  <div className="contact-item-value">
                    <a href="https://www.youtube.com/@LearningWithFunbyReetUdhan" target="_blank" rel="noopener noreferrer">Learning With Fun</a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div className="contact-form-wrap" {...fadeUp} transition={{ duration: 0.6, delay: 0.15 }}>
            <h3>Send a message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Your Name</label>
                <input type="text" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label>Your Email</label>
                <input type="email" placeholder="john@example.com" required />
              </div>
              <div className="form-group">
                <label>Subject</label>
                <input type="text" placeholder="How can I help?" />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea placeholder="Write your message here..." />
              </div>
              <button
                type="submit"
                className="form-submit"
                style={sent ? { background: '#059669' } : {}}
              >
                {sent ? 'Message Sent!' : 'Send Message →'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
