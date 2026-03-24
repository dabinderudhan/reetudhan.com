import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'

// ─── BLOG POST DATA ───
// Edit this array to add new blog posts. Each post needs a unique slug.
const POSTS = [
  {
    slug: 'why-iep-compliance-matters',
    tag: 'SPECIAL EDUCATION',
    title: 'Why IEP Compliance Matters More Than Ever',
    date: 'March 15, 2026',
    readTime: '5 min read',
    excerpt: 'Understanding the critical importance of maintaining 100% IEP compliance and how it directly impacts student outcomes in special education programs.',
    content: `
      <p>In the world of special education, IEP (Individualized Education Program) compliance isn't just a bureaucratic requirement — it's the foundation upon which student success is built. After managing full IEP caseloads for several years, I've seen firsthand how rigorous compliance directly translates to better outcomes for students.</p>

      <h2>The stakes are real</h2>
      <p>Every IEP document represents a legal commitment to a student and their family. When we maintain 100% on-time reviews, accurate documentation, and properly aligned goals, we're ensuring that each student receives the education they're entitled to under federal and state law.</p>
      <p>But beyond the legal framework, compliance ensures consistency. Students with autism and other exceptionalities thrive on structure and predictability. When their educational plans are current, well-documented, and properly monitored, the entire support system works more effectively.</p>

      <h2>Building trust with families</h2>
      <p>One of the most rewarding aspects of maintaining strict compliance is the trust it builds with families. Parents of children with special needs often feel they must fight for their child's rights. When they see that their child's IEP is always current, goals are being tracked, and meetings happen on schedule, it transforms the relationship from adversarial to collaborative.</p>

      <h2>Practical strategies</h2>
      <p>Over the years, I've developed several strategies that help maintain compliance without burning out:</p>
      <ul>
        <li>Create a rolling calendar at the start of each school year with all IEP review dates</li>
        <li>Build documentation into your daily routine rather than catching up periodically</li>
        <li>Use digital tools to track progress toward IEP goals in real-time</li>
        <li>Schedule pre-meeting conversations with parents to make formal meetings more productive</li>
      </ul>

      <h2>Looking ahead</h2>
      <p>As I continue my EdD research, I'm exploring how data-driven approaches can make compliance not just manageable, but a genuine driver of student achievement. The future of special education lies in systems that make doing the right thing the easiest thing.</p>
    `
  },
  {
    slug: 'inclusive-education-autism',
    tag: 'AUTISM EDUCATION',
    title: 'Creating Truly Inclusive Classrooms for Students with Autism',
    date: 'February 28, 2026',
    readTime: '6 min read',
    excerpt: 'Practical approaches to building classroom environments where students on the autism spectrum can thrive alongside their peers.',
    content: `
      <p>Inclusion isn't just about placing students in the same classroom — it's about creating an environment where every learner can access the curriculum, engage meaningfully, and develop both academically and socially. In my years working at an autism-focused charter school, I've learned that true inclusion requires intentional design.</p>

      <h2>Understanding sensory needs</h2>
      <p>Many students with autism experience sensory processing differences that significantly impact their ability to learn. Simple environmental modifications — adjusting lighting, providing noise-reducing options, creating quiet spaces — can make the difference between a productive day and a challenging one.</p>

      <h2>Visual supports and structure</h2>
      <p>Visual schedules, clear routines, and predictable transitions are powerful tools. They reduce anxiety, support independence, and help students understand what's expected of them throughout the day.</p>

      <h2>Building social connections</h2>
      <p>Social skills development should be woven naturally into the school day, not isolated as a separate "therapy" session. Structured peer interactions, collaborative projects with clear roles, and social narratives all help build the connections that make school a positive experience.</p>

      <h3>What works in practice</h3>
      <p>Some of the most effective strategies I've seen include:</p>
      <ul>
        <li>Using interest-based learning to boost engagement</li>
        <li>Offering multiple ways to demonstrate understanding</li>
        <li>Training all staff — not just SPED teachers — in autism awareness</li>
        <li>Involving students in their own goal-setting when appropriate</li>
      </ul>

      <p>Every student deserves an education that recognizes their strengths and supports their growth areas. With thoughtful planning and genuine commitment, we can build classrooms where that's possible for everyone.</p>
    `
  },
  {
    slug: 'teaching-across-continents',
    tag: 'PERSONAL JOURNEY',
    title: 'From Mumbai to Phoenix: What Teaching Across Continents Taught Me',
    date: 'January 20, 2026',
    readTime: '4 min read',
    excerpt: 'Reflections on two decades of teaching in India and the transition to special education in the United States.',
    content: `
      <p>When I stepped into my first classroom in Mumbai in 1998, I couldn't have imagined that my teaching journey would eventually take me across the world to Phoenix, Arizona. That journey — spanning 25+ years, two continents, and a fundamental shift from general to special education — has shaped everything I believe about teaching.</p>

      <h2>Lessons from Mumbai</h2>
      <p>Teaching in Mumbai taught me resourcefulness, community, and the power of relationships. With class sizes that would seem impossible by American standards, I learned to reach every student through creative engagement, peer-based learning, and deep connections with families.</p>
      <p>Leading training for over 1,800 education professionals as a District-Level Resource Person gave me a broader perspective on systemic educational challenges — and the power of passionate teachers to overcome them.</p>

      <h2>A new chapter in Arizona</h2>
      <p>Moving to the United States and transitioning into special education was both humbling and energizing. The legal frameworks, the emphasis on individualized planning, the multidisciplinary team approach — everything was different. But the core remained the same: every child deserves an adult who believes in their potential.</p>

      <h2>What stays the same</h2>
      <p>Across cultures, continents, and educational systems, certain truths remain constant. Students respond to genuine care. Families want to be heard. Teachers need support and community. And education, at its best, is about helping every individual discover what they're capable of.</p>

      <p>As I pursue my EdD, I carry lessons from both worlds. The journey continues, and I'm grateful for every classroom that has shaped me.</p>
    `
  }
]

export default function BlogPage() {
  const { slug } = useParams()
  const post = slug ? POSTS.find(p => p.slug === slug) : null

  if (post) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <section className="section" style={{ paddingTop: 120, minHeight: '100vh' }}>
          <div className="section-inner blog-full">
            <Link to="/blog" className="blog-back">← Back to all articles</Link>
            <div className="blog-full-header">
              <div className="blog-full-tag">{post.tag}</div>
              <h1 className="blog-full-title">{post.title}</h1>
              <div className="blog-full-meta">{post.date} • {post.readTime}</div>
            </div>
            <div className="blog-full-body" dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </section>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <section className="section" style={{ paddingTop: 120, minHeight: '100vh' }}>
        <div className="section-inner">
          <div className="section-tag">Insights & Articles</div>
          <h2 className="section-title">Blog</h2>
          <p className="section-subtitle">Thoughts on special education, inclusive teaching, and the journey of lifelong learning.</p>

          <div className="blog-grid">
            {POSTS.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Link to={`/blog/${post.slug}`} className="blog-card">
                  <div className="blog-card-header">
                    <div className="blog-card-tag">{post.tag}</div>
                    <div className="blog-card-title">{post.title}</div>
                    <div className="blog-card-excerpt">{post.excerpt}</div>
                  </div>
                  <div className="blog-card-footer">
                    <span>{post.date} • {post.readTime}</span>
                    <span className="blog-read-more">Read →</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export { POSTS }
