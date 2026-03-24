import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import { About, Experience, Education, Skills, Awards } from '../components/Sections'
import YouTube from '../components/YouTube'
import Contact from '../components/Contact'

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Awards />
      <YouTube />
      <Contact />
    </motion.div>
  )
}
