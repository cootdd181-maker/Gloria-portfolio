import { ReactNode, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface SectionWrapperProps {
  id?: string
  children: ReactNode
  className?: string
  bgWhite?: boolean
}

export default function SectionWrapper({ id, children, className = '', bgWhite = false }: SectionWrapperProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      id={id}
      className={`py-20 lg:py-24 ${bgWhite ? 'bg-white' : 'bg-slate-50'} ${className}`}
    >
      <motion.div
        className="mx-auto max-w-[1200px] px-6 lg:px-8"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </section>
  )
}
