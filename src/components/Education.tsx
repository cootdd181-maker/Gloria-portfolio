import { useTranslation } from 'react-i18next'
import SectionWrapper from './SectionWrapper'
import { GraduationCap, MapPin } from 'lucide-react'

export default function Education() {
  const { t } = useTranslation()
  const schools = t('education.schools', { returnObjects: true }) as Array<{
    name: string
    major: string
    degree: string
    period: string
    location: string
  }>

  return (
    <SectionWrapper id="education">
      <h2 className="text-3xl font-bold text-slate-900 lg:text-4xl">
        {t('education.title')}
      </h2>
      <div className="mt-2 h-1 w-16 rounded-full bg-amber-500" />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {schools.map((school, i) => (
          <div
            key={i}
            className="group rounded-xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="mb-4 flex items-start gap-3">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-amber-50">
                <GraduationCap className="h-5 w-5 text-amber-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">{school.name}</h3>
                <p className="text-sm text-slate-500">
                  {school.major} · {school.degree}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-slate-100 pt-4">
              <span className="text-sm font-medium text-slate-600">{school.period}</span>
              <span className="inline-flex items-center gap-1 text-sm text-slate-500">
                <MapPin className="h-3.5 w-3.5" />
                {school.location}
              </span>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
