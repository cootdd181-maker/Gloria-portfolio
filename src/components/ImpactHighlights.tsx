import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

export default function ImpactHighlights() {
  const { t } = useTranslation()
  const highlights = t('impactHighlights', { returnObjects: true }) as Array<{ number: string; label: string }>

  return (
    <motion.div
      className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8, ease: 'easeOut' }}
    >
      {highlights.map((item, i) => (
        <div
          key={i}
          className="rounded-xl bg-white p-6 text-center shadow-sm transition-shadow duration-300 hover:shadow-md"
        >
          <div className="text-3xl font-bold text-slate-900">{item.number}</div>
          <div className="mt-1 text-sm text-slate-500">{item.label}</div>
        </div>
      ))}
    </motion.div>
  )
}
