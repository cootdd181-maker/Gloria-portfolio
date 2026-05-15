import { useTranslation } from 'react-i18next'
import SectionWrapper from './SectionWrapper'
import { Mail, Phone } from 'lucide-react'

export default function Contact() {
  const { t } = useTranslation()

  return (
    <SectionWrapper id="contact" className="text-center">
      <h2 className="text-3xl font-bold text-slate-900 lg:text-4xl">
        {t('contact.title')}
      </h2>
      <div className="mx-auto mt-2 h-1 w-16 rounded-full bg-amber-500" />

      <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-slate-600">
        {t('contact.subtitle')}
      </p>

      <div className="mt-8 flex flex-col items-center gap-4">
        <a
          href={`mailto:${t('contact.email')}`}
          className="inline-flex items-center gap-2 text-slate-600 transition-colors hover:text-amber-500"
        >
          <Mail className="h-5 w-5" />
          {t('contact.email')}
        </a>

        <div className="flex items-center gap-2 text-slate-600">
          <Phone className="h-5 w-5" />
          {t('contact.phone')}
        </div>

        <a
          href={`mailto:${t('contact.email')}`}
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-amber-500 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-amber-500/25 transition-all hover:bg-amber-600 hover:shadow-xl hover:shadow-amber-500/30"
        >
          <Mail className="h-5 w-5" />
          {t('contact.sendEmail')}
        </a>
      </div>

      <div className="mt-16 border-t border-slate-200 pt-8">
        <p className="text-sm text-slate-400">{t('contact.copyright')}</p>
      </div>
    </SectionWrapper>
  )
}
