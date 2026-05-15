import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Campus from './components/Campus'
import Skills from './components/Skills'
import Contact from './components/Contact'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export default function App() {
  const { i18n } = useTranslation()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={i18n.language}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="min-h-screen bg-white font-sans text-slate-900 antialiased"
      >
        <Navbar />
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Campus />
        <Skills />
        <Contact />
      </motion.div>
    </AnimatePresence>
  )
}
