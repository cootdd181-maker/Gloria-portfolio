import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Menu, X, Download, Globe } from 'lucide-react'

const sections = [
  { key: 'about', id: 'about' },
  { key: 'education', id: 'education' },
  { key: 'experience', id: 'experience' },
  { key: 'projects', id: 'projects' },
  { key: 'campus', id: 'campus' },
  { key: 'skills', id: 'skills' },
  { key: 'contact', id: 'contact' },
]

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'zh' : 'en')
  }

  const scrollTo = (id: string) => {
    setMobileOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 ${
          scrolled ? 'bg-white/80 shadow-lg backdrop-blur-lg' : 'bg-white/30 backdrop-blur-sm'
        }`}
      >
        <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between px-6 lg:px-8">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-xl font-bold text-slate-900">
            Gloria Wang<span className="text-amber-500">.</span>
          </button>

          <div className="hidden items-center gap-1 lg:flex">
            {sections.map((s) => (
              <button
                key={s.key}
                onClick={() => scrollTo(s.id)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
              >
                {t(`nav.${s.key}`)}
              </button>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100"
            >
              <Globe className="h-4 w-4" />
              {i18n.language === 'en' ? '中' : 'EN'}
            </button>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-amber-600"
            >
              <Download className="h-4 w-4" />
              {t('nav.downloadCV')}
            </a>
          </div>

          <button
            className="lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6 text-slate-900" /> : <Menu className="h-6 w-6 text-slate-900" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-6 bg-white/95 backdrop-blur-lg lg:hidden">
          {sections.map((s) => (
            <button
              key={s.key}
              onClick={() => scrollTo(s.id)}
              className="text-2xl font-semibold text-slate-800 transition-colors hover:text-amber-500"
            >
              {t(`nav.${s.key}`)}
            </button>
          ))}
          <div className="mt-4 flex flex-col items-center gap-4">
            <button
              onClick={() => { toggleLanguage(); setMobileOpen(false) }}
              className="flex items-center gap-2 text-lg text-slate-600 hover:text-slate-900"
            >
              <Globe className="h-5 w-5" />
              {i18n.language === 'en' ? '切换到中文' : 'Switch to English'}
            </button>
            <a
              href="/resume.pdf"
              download
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-6 py-3 text-base font-semibold text-white transition-all hover:bg-amber-600"
            >
              <Download className="h-5 w-5" />
              {t('nav.downloadCV')}
            </a>
          </div>
        </div>
      )}
    </>
  )
}
