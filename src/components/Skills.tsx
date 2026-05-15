import { useTranslation } from 'react-i18next'
import SectionWrapper from './SectionWrapper'

export default function Skills() {
  const { t } = useTranslation()
  const categories = t('skills.categories', { returnObjects: true }) as Array<{
    name: string
    items: string[]
  }>

  return (
    <SectionWrapper id="skills" bgWhite>
      <h2 className="text-3xl font-bold text-slate-900 lg:text-4xl">
        {t('skills.title')}
      </h2>
      <div className="mt-2 h-1 w-16 rounded-full bg-amber-500" />
      <div className="mt-10 grid gap-8 md:grid-cols-2">
        {categories.map((cat, i) => (
          <div key={i}>
            <h3 className="mb-4 text-lg font-semibold text-slate-800">{cat.name}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item, j) => (
                <span
                  key={j}
                  className={`cursor-default rounded-full px-3 py-1.5 text-sm font-medium transition-all duration-200 hover:scale-110 ${
                    i === 0
                      ? 'bg-amber-50 text-amber-700'
                      : i === 1
                        ? 'bg-blue-50 text-blue-700'
                        : i === 2
                          ? 'bg-emerald-50 text-emerald-700'
                          : 'bg-rose-50 text-rose-600'
                  }`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
