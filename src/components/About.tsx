import { useTranslation } from 'react-i18next'
import SectionWrapper from './SectionWrapper'

export default function About() {
  const { t } = useTranslation()

  return (
    <SectionWrapper id="about" bgWhite>
      <h2 className="text-3xl font-bold text-slate-900 lg:text-4xl">
        {t('about.title')}
      </h2>
      <div className="mt-2 h-1 w-16 rounded-full bg-amber-500" />
      <p className="mt-8 max-w-3xl text-lg leading-relaxed text-slate-600">
        {t('about.content')}
      </p>
    </SectionWrapper>
  )
}
