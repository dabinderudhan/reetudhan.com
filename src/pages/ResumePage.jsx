import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function ResumePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="resume-page">
        <div className="resume-actions">
          <Link to="/">← Back to Home</Link>
          <button className="print-btn" onClick={() => window.print()}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 9V2h12v7"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
            Print / Save PDF
          </button>
        </div>

        <div className="resume">
          <div className="resume-header">
            <h1>Reet Kaur Udhan</h1>
            <div className="resume-header-sub">Special Education Leader • Autism Specialist • IEP Compliance Expert</div>
            <div className="resume-header-contact">
              <span>
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                Phoenix, AZ
              </span>
              <span>
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                <a href="mailto:reetkaur02@gmail.com">reetkaur02@gmail.com</a>
              </span>
            </div>
          </div>

          <div className="resume-body">
            <div className="resume-summary">
              Highly experienced Special Education professional with 25+ years in education and current Arizona-based autism program leadership experience. Proven track record of managing full IEP caseloads, ensuring 100% compliance, leading multidisciplinary teams, and improving student goal attainment through data-driven interventions. Recognized instructional leader with extensive training experience and a Doctorate in Education in progress.
            </div>

            <div className="resume-section">
              <div className="resume-section-title">Certifications & Credentials</div>
              <div className="cert-grid">
                <div className="cert-item highlight"><span className="cert-dot amber" />Arizona Special Education Certification (2024)</div>
                <div className="cert-item highlight"><span className="cert-dot amber" />SPED Endorsement – Autism Focus</div>
                <div className="cert-item"><span className="cert-dot navy" />IEP Case Management & Compliance Specialist</div>
                <div className="cert-item green"><span className="cert-dot green" />EdD in Progress – American College of Education</div>
              </div>
            </div>

            <div className="resume-section">
              <div className="resume-section-title">Core Expertise</div>
              <div className="expertise-grid">
                {['IEP Development, Monitoring & Legal Compliance','Autism Spectrum Instruction & Behavioral Supports','Behavior Intervention Plans (BIP)','MTSS & Inclusion Models','Special Education Law & Documentation','Data-Driven Instruction & Progress Monitoring','Parent Advocacy & Family Engagement','Multidisciplinary Team Leadership','Crisis & De-escalation Strategies','Curriculum Adaptation & Differentiation'].map((s,i) => (
                  <div className="expertise-item" key={i}>{s}</div>
                ))}
              </div>
            </div>

            <div className="resume-section">
              <div className="resume-section-title">Professional Experience</div>
              <div className="exp-entry">
                <div className="exp-header">
                  <div className="exp-role">Special Education Teacher & Case Manager</div>
                  <div className="exp-date">2022 – Present</div>
                </div>
                <div className="exp-place">Arizona Autism Charter School — Phoenix, AZ</div>
                <ul className="exp-list">
                  <li>Manage full IEP caseload with strict adherence to Arizona and federal compliance requirements</li>
                  <li>Maintain 100% on-time IEP reviews and documentation accuracy</li>
                  <li>Lead IEP meetings with parents, therapists, and service providers</li>
                  <li>Develop individualized academic and behavioral programming aligned to Arizona standards</li>
                  <li>Implement targeted interventions resulting in measurable student progress toward IEP goals</li>
                </ul>
                <div className="exp-impact">
                  <div className="exp-impact-title">LEADERSHIP IMPACT</div>
                  <ul className="exp-list">
                    <li>Recognized as a reliable compliance resource within the organization</li>
                    <li>Strengthened family-school partnerships through structured communication</li>
                    <li>Contributed to improved academic performance and behavioral stability</li>
                  </ul>
                </div>
              </div>
              <div className="exp-entry">
                <div className="exp-header">
                  <div className="exp-role">Senior Assistant Teacher</div>
                  <div className="exp-date">1999 – 2022</div>
                </div>
                <div className="exp-place">The New Sarvajanik Education Society's School — Mumbai, India</div>
                <ul className="exp-list">
                  <li>Delivered instruction across Grades 5–10 with differentiated strategies for diverse learners</li>
                  <li>Designed curriculum plans and assessment models aligned with academic standards</li>
                  <li>Led district-level training seminars serving over 1,800 education professionals</li>
                  <li>Served as District-Level Resource Person across multiple educational zones</li>
                  <li>Conducted instructional strategy workshops to improve faculty performance</li>
                </ul>
              </div>
              <div className="exp-entry">
                <div className="exp-header">
                  <div className="exp-role">Assistant Teacher (Primary Section)</div>
                  <div className="exp-date">1998 – 1999</div>
                </div>
                <div className="exp-place">National Education Society's High School — Mumbai, India</div>
                <ul className="exp-list">
                  <li>Taught Grades 1–4 across multiple subjects</li>
                  <li>Focused on foundational literacy and classroom management strategies</li>
                  <li>Headed English Department curriculum planning initiatives</li>
                </ul>
              </div>
            </div>

            <div className="resume-section">
              <div className="resume-section-title">Education</div>
              {[
                { degree: 'Doctor of Education (EdD)', school: 'American College of Education', status: 'In Progress', active: true },
                { degree: 'SPED Certification', school: 'Special Education — Arizona', status: 'Completed 2024' },
                { degree: 'Bachelor of Education (B.Ed.) — English & History', school: 'University of Mumbai' },
                { degree: 'Master of Arts — Sociology & History', school: 'University of Mumbai' },
                { degree: 'Bachelor of Arts — British & American Literature', school: 'University of Mumbai' },
                { degree: 'Post Graduate Diploma in Management of Education', school: 'University of Mumbai' },
                { degree: 'Diploma in Education (D.Ed.)', school: 'University of Mumbai' },
              ].map((edu, i) => (
                <div className="edu-entry" key={i}>
                  <div>
                    <div className="edu-entry-degree">{edu.degree}</div>
                    <div className="edu-entry-school">{edu.school}</div>
                  </div>
                  {edu.status && <div className={`edu-entry-status ${edu.active ? 'active' : 'done'}`}>{edu.status}</div>}
                </div>
              ))}
            </div>

            <div className="resume-section">
              <div className="resume-section-title">Professional Distinctions</div>
              <ul className="distinction-list">
                <li>Guru Dhronacharya Award — 2018</li>
                <li>Best Teacher Award — Lions Club of Ghatkopar — 2017</li>
                <li>District-Level Resource Person — Training 1,800+ principals</li>
                <li>International English Educators Conference Participant</li>
                <li>Leadership Training — Tata Institute of Social Sciences</li>
                <li>Online Learning & Digital Platform Trainer (COVID Transition Support)</li>
              </ul>
            </div>

            <div className="resume-section">
              <div className="resume-section-title">Technology & Documentation Systems</div>
              <div className="tech-pills">
                {['IEP Documentation Platforms','Microsoft 365','Google Classroom','Virtual IEP & Compliance Meeting Systems','Digital Assessment Tools','Online Learning Platforms'].map((t,i) => (
                  <span className="tech-pill" key={i}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
