import { motion } from 'framer-motion'

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.6 }
}

export function About() {
  return (
    <section className="section section-alt" id="about">
      <div className="section-inner">
        <div className="about-grid">
          <motion.div {...fadeUp}>
            <div className="section-tag">About Me</div>
            <h2 className="section-title">Passionate about shaping futures</h2>
            <div className="about-text">
              <p>Dedicated and results-driven Special Education Teacher and Case Manager with 25+ years of instructional experience across elementary, middle, and high school levels. Currently serving at an Arizona-based autism-focused charter school, managing IEP caseloads, leading compliance meetings, and delivering inclusive, differentiated instruction.</p>
              <p>Expert in autism spectrum education, behavior intervention, inclusion models, and regulatory compliance. Trusted by families and administration for maintaining high standards of accountability and student success.</p>
            </div>
          </motion.div>
          <motion.div className="about-highlights" {...fadeUp} transition={{ duration: 0.6, delay: 0.15 }}>
            {[
              { icon: 'book', color: 'amber', title: 'IEP Compliance Expert', desc: '100% on-time IEP reviews and documentation accuracy' },
              { icon: 'users', color: 'rose', title: 'Autism Specialist', desc: 'Individualized instruction in autism-focused settings' },
              { icon: 'globe', color: 'emerald', title: 'Global Perspective', desc: 'Teaching across India and the United States' },
              { icon: 'cap', color: 'navy', title: 'Pursuing EdD', desc: 'Doctorate in Education at American College of Education' },
            ].map((h, i) => (
              <div className="highlight-card" key={i}>
                <div className={`highlight-icon ${h.color}`}>
                  <HighlightSvg type={h.icon} />
                </div>
                <div>
                  <h4>{h.title}</h4>
                  <p>{h.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function HighlightSvg({ type }) {
  const props = { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', strokeWidth: 2, strokeLinecap: 'round' }
  const colors = { book: '#D97706', users: '#F43F5E', globe: '#059669', cap: '#475569' }
  return (
    <svg {...props} stroke={colors[type]}>
      {type === 'book' && <><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></>}
      {type === 'users' && <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>}
      {type === 'globe' && <><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></>}
      {type === 'cap' && <><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 6 3 6 3s3 0 6-3v-5"/></>}
    </svg>
  )
}

const experiences = [
  {
    date: '2022 – Present', role: 'Special Education Teacher & Case Manager',
    place: 'Arizona Autism Charter School, Phoenix, AZ',
    desc: 'Manage full IEP caseload with strict adherence to Arizona and federal compliance requirements. Lead IEP meetings with parents, therapists, and service providers. Develop individualized academic and behavioral programming aligned to Arizona standards.',
    impact: ['Maintained 100% on-time IEP compliance', 'Strengthened family-school partnerships', 'Improved academic performance and behavioral stability'],
    tags: ['IEP Management', 'Autism Spectrum', 'Case Management', 'BIP'],
    current: true
  },
  {
    date: '1999 – 2022', role: 'Senior Assistant Teacher',
    place: 'The New Sarvajanik Education Society\'s School, Mumbai, India',
    desc: 'Delivered instruction across Grades 5–10 with differentiated strategies for diverse learners. Designed curriculum plans and assessment models. Led district-level training seminars.',
    impact: ['Professional development to 1,800+ principals', 'District-Level Resource Person across multiple zones', 'Multiple teaching excellence awards'],
    tags: ['English', 'Social Studies', 'Curriculum Design', 'Staff Training']
  },
  {
    date: '1998 – 1999', role: 'Assistant Teacher (Primary Section)',
    place: 'National Education Society\'s High School, Mumbai, India',
    desc: 'Taught Grades 1–4 across multiple subjects. Focused on foundational literacy and classroom management. Headed English Department curriculum planning.',
    tags: ['Primary Education', 'Department Head']
  }
]

export function Experience() {
  return (
    <section className="section" id="experience">
      <div className="section-inner">
        <motion.div {...fadeUp}><div className="section-tag">Career Timeline</div></motion.div>
        <motion.h2 className="section-title" {...fadeUp}>Professional Experience</motion.h2>
        <motion.p className="section-subtitle" {...fadeUp}>25+ years dedicated to nurturing young minds and leading educational communities across two countries.</motion.p>
        <div className="timeline">
          {experiences.map((exp, i) => (
            <motion.div className="tl-item" key={i} {...fadeUp} transition={{ duration: 0.6, delay: i * 0.1 }}>
              <div className="tl-dot" />
              <div className="tl-date">{exp.date}</div>
              <div className="tl-role">{exp.role}</div>
              <div className="tl-place">{exp.place}</div>
              <div className="tl-desc">{exp.desc}</div>
              {exp.impact && (
                <div className="tl-highlights">
                  <div className="tl-highlights-title">Impact</div>
                  <ul>{exp.impact.map((item, j) => <li key={j}>{item}</li>)}</ul>
                </div>
              )}
              <div className="tl-tags">
                {exp.tags.map((tag, j) => <span className="tl-tag" key={j}>{tag}</span>)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const education = [
  { badge: 'doctorate', degree: 'Doctor of Education (EdD)', school: 'American College of Education', status: 'In Progress (EdS Completed)', active: true },
  { badge: 'cert', degree: 'Arizona SPED Certification', school: 'Autism Focus & IEP Compliance', status: 'Completed Sept 2024' },
  { badge: 'degree', degree: 'Bachelor of Education (B.Ed.)', school: 'English & History — University of Mumbai' },
  { badge: 'degree', degree: 'M.A. Sociology & History', school: 'University of Mumbai' },
  { badge: 'degree', degree: 'B.A. British & American Literature', school: 'University of Mumbai' },
  { badge: 'cert', degree: 'P.G. Diploma in Management of Education', school: 'University of Mumbai' },
  { badge: 'cert', degree: 'Diploma in Education (D.Ed.)', school: 'University of Mumbai' },
]

export function Education() {
  return (
    <section className="section section-alt" id="education">
      <div className="section-inner">
        <motion.div {...fadeUp}><div className="section-tag">Academic Credentials</div></motion.div>
        <motion.h2 className="section-title" {...fadeUp}>Education</motion.h2>
        <motion.p className="section-subtitle" {...fadeUp}>Advanced degrees and certifications across special education, literature, sociology, and management.</motion.p>
        <div className="edu-grid">
          {education.map((edu, i) => (
            <motion.div className="edu-card" key={i} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.05 }}>
              <div className={`edu-badge ${edu.badge}`}>{edu.badge === 'doctorate' ? 'DOCTORATE' : edu.badge === 'cert' ? 'DIPLOMA' : 'DEGREE'}</div>
              <div className="edu-degree">{edu.degree}</div>
              <div className="edu-school">{edu.school}</div>
              {edu.status && (
                <div className="edu-status">
                  {edu.active && <span className="pulse" />}
                  {edu.status}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const skillGroups = [
  { title: 'Special Education & Compliance', skills: [
    { label: 'IEP Development & Compliance', type: 'primary' },
    { label: 'Autism Spectrum Instruction', type: 'primary' },
    { label: 'Behavior Intervention Plans', type: 'primary' },
    { label: 'MTSS & Inclusion Models', type: 'secondary' },
    { label: 'SPED Law & Documentation', type: 'secondary' },
    { label: 'Crisis & De-escalation', type: 'secondary' },
  ]},
  { title: 'Leadership & Collaboration', skills: [
    { label: 'Multidisciplinary Team Leadership', type: 'accent' },
    { label: 'Parent Advocacy & Engagement', type: 'accent' },
    { label: 'Staff Training & Mentoring', type: 'accent' },
    { label: 'Data-Driven Instruction', type: 'secondary' },
    { label: 'Progress Monitoring', type: 'secondary' },
    { label: 'Curriculum Adaptation', type: 'secondary' },
  ]},
  { title: 'Technology & Tools', skills: [
    { label: 'IEP Documentation Platforms', type: 'secondary' },
    { label: 'Microsoft 365', type: 'secondary' },
    { label: 'Google Classroom', type: 'secondary' },
    { label: 'Virtual Meeting Systems', type: 'secondary' },
    { label: 'Digital Assessment Tools', type: 'secondary' },
  ]},
]

export function Skills() {
  return (
    <section className="section" id="skills">
      <div className="section-inner">
        <motion.div {...fadeUp}><div className="section-tag">Core Expertise</div></motion.div>
        <motion.h2 className="section-title" {...fadeUp}>Skills & Competencies</motion.h2>
        <motion.p className="section-subtitle" {...fadeUp}>Specialized capabilities built over 25+ years of teaching, leading, and innovating in education.</motion.p>
        <motion.div className="skills-grid" {...fadeUp}>
          {skillGroups.map((group, i) => (
            <div className="skill-group" key={i}>
              <h3>{group.title}</h3>
              <div className="skill-list">
                {group.skills.map((s, j) => <span className={`skill-pill ${s.type}`} key={j}>{s.label}</span>)}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

const awards = [
  { name: 'Guru Dhronacharya Award', by: 'Excellence in Teaching — 2018', icon: 'star' },
  { name: 'Best Teacher Award', by: 'Lions Club of Ghatkopar — 2017', icon: 'star' },
  { name: 'District-Level Resource Person', by: 'Training 1,800+ principals across multiple zones', icon: 'users' },
  { name: 'Leadership Training', by: 'Tata Institute of Social Sciences (TISS)', icon: 'cap' },
  { name: 'International Conference Participant', by: 'International English Educators Conference', icon: 'globe' },
]

export function Awards() {
  return (
    <section className="section section-alt" id="awards">
      <div className="section-inner">
        <motion.div {...fadeUp}><div className="section-tag">Recognition</div></motion.div>
        <motion.h2 className="section-title" {...fadeUp}>Awards & Distinctions</motion.h2>
        <motion.p className="section-subtitle" {...fadeUp}>Recognized for excellence in teaching, leadership, and community impact.</motion.p>
        <motion.div className="awards-grid" {...fadeUp}>
          {awards.map((award, i) => (
            <div className="award-card" key={i}>
              <div className="award-icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {award.icon === 'star' && <path d="M12 2l3 6 6.5 1-4.7 4.6L18 20l-6-3.2L6 20l1.2-6.4L2.5 9l6.5-1z"/>}
                  {award.icon === 'users' && <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>}
                  {award.icon === 'cap' && <><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 6 3 6 3s3 0 6-3v-5"/></>}
                  {award.icon === 'globe' && <><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></>}
                </svg>
              </div>
              <div>
                <div className="award-name">{award.name}</div>
                <div className="award-by">{award.by}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
