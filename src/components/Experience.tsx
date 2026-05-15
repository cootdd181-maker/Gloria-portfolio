import { useTranslation } from 'react-i18next'
import SectionWrapper from './SectionWrapper'
import { MapPin, Building2 } from 'lucide-react'

export default function Experience() {
  const { t } = useTranslation()
  const items = t('experience.items', { returnObjects: true }) as Array<{
    company: string
    department: string
    role: string
    period: string
    location: string
    bullets: string[]
  }>

  return (
    <SectionWrapper id="experience" bgWhite>
      <h2 className="text-3xl font-bold text-slate-900 lg:text-4xl">
        {t('experience.title')}
      </h2>
      <div className="mt-2 h-1 w-16 rounded-full bg-amber-500" />
      <div className="mt-10 space-y-6">
        {items.map((item, i) => (
          <div
            key={i}
            className="group relative rounded-xl bg-slate-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:pl-8"
          >
            <div className="absolute left-0 top-0 hidden h-full w-1 rounded-full bg-amber-500 md:block" />
            <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-amber-50">
                  <Building2 className="h-5 w-5 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{item.company}</h3>
                  <p className="text-sm text-slate-500">
                    {item.department}
                    {item.role && ` · ${item.role}`}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-500">
                <span className="font-medium text-slate-600">{item.period}</span>
                <span className="inline-flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5" />
                  {item.location}
                </span>
              </div>
            </div>
            <ul className="space-y-2">
              {item.bullets.map((bullet, j) => (
                <li key={j} className="flex gap-2 text-sm leading-relaxed text-slate-600">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
