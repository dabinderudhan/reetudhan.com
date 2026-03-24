import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-inner">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="hero-tag">Special Education Professional</div>
          <h1>Educator.<br /><em>Leader.</em><br />Specialist.</h1>
          <p className="hero-desc">
            Highly experienced special education professional with 25+ years in education.
            Proven track record managing IEP caseloads, ensuring 100% compliance, leading
            multidisciplinary teams, and improving student outcomes through data-driven interventions.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn-primary" onClick={(e) => {
              e.preventDefault()
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}>
              Get in Touch →
            </a>
            <Link to="/resume" className="btn-secondary">View Resume</Link>
          </div>
        </motion.div>
        <motion.div
          className="hero-card"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          <div className="avatar">RU</div>
          <h3>Reet Kaur Udhan</h3>
          <p>SPED Leader • Autism Specialist</p>
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-num">25+</div>
              <div className="hero-stat-label">Years</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-num">EdD</div>
              <div className="hero-stat-label">Doctorate</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-num">100%</div>
              <div className="hero-stat-label">IEP Compliance</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
