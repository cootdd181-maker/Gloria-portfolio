import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { ArrowDown, Download } from 'lucide-react'
import ImpactHighlights from './ImpactHighlights'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: 'easeOut' as const },
})

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section className="relative min-h-screen bg-white pt-16">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-[1200px] flex-col items-center px-6 lg:flex-row lg:gap-16 lg:px-8">
        <motion.div className="flex-1 pt-12 text-center lg:pt-0 lg:text-left" {...fadeUp(0)}>
          <motion.span
            className="inline-block rounded-full border border-amber-500/40 bg-amber-50 px-4 py-1.5 text-sm font-medium text-amber-600"
            {...fadeUp(0.1)}
          >
            {t('hero.tag')}
          </motion.span>

          <motion.h1
            className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
            {...fadeUp(0.2)}
          >
            {t('hero.title')}
          </motion.h1>

          <motion.p
            className="mt-4 text-lg leading-relaxed text-slate-600 sm:text-xl"
            {...fadeUp(0.35)}
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.p
            className="mt-4 max-w-lg text-base leading-relaxed text-slate-500"
            {...fadeUp(0.5)}
          >
            {t('hero.intro')}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:items-start"
            {...fadeUp(0.65)}
          >
            <button
              onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-amber-500/25 transition-all hover:bg-amber-600 hover:shadow-xl hover:shadow-amber-500/30"
            >
              {t('hero.viewWork')}
              <ArrowDown className="h-4 w-4" />
            </button>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border-2 border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-700 transition-all hover:border-slate-400 hover:bg-slate-50"
            >
              <Download className="h-4 w-4" />
              {t('hero.downloadCV')}
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative mt-10 w-full max-w-sm flex-shrink-0 lg:mt-0 lg:w-80 xl:w-96"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
        >
          <div className="group relative mx-auto w-56 overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl lg:w-full">
            <div className="aspect-[3/4] w-full bg-slate-100">
              <img
                src="/profile.jpg"
                alt="Gloria Wang"
                className="h-full w-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                  if (target.parentElement) {
                    target.parentElement.classList.add('flex', 'items-center', 'justify-center')
                    const icon = document.createElement('div')
                    icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>'
                    icon.className = 'text-slate-400'
                    target.parentElement.appendChild(icon)
                  }
                }}
              />
            </div>
          </div>
          <div className="absolute -bottom-2 -right-2 rounded-full bg-amber-500 px-3 py-1.5 text-xs font-semibold text-white shadow-md">
            {t('hero.availableTag')}
          </div>
        </motion.div>
      </div>

      <div className="mx-auto max-w-[1200px] px-6 pb-12 lg:px-8">
        <ImpactHighlights />
      </div>
    </section>
  )
}
