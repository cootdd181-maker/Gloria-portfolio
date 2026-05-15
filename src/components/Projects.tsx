import { useTranslation } from 'react-i18next'
import SectionWrapper from './SectionWrapper'
import { Lightbulb, Search, FileText, Sparkles } from 'lucide-react'

const sectionHeaders: Record<string, Record<string, string>> = {
  background: { en: 'Background', zh: '背景' },
  actions: { en: 'Actions', zh: '动作' },
  output: { en: 'Output', zh: '产出' },
}

export default function Projects() {
  const { t, i18n } = useTranslation()
  const items = t('projects.items', { returnObjects: true }) as Array<{
    name: string
    tags: string[]
    period: string
    role: string
    structuredContent?: {
      background: string
      actions: string
      insightTitle: string
      insights: string[]
      output: string
    }
    bullets?: string[]
  }>

  const lang = i18n.language.startsWith('zh') ? 'zh' : 'en'

  return (
    <SectionWrapper id="projects" bgWhite>
      <h2 className="text-3xl font-bold text-slate-900 lg:text-4xl">
        {t('projects.title')}
      </h2>
      <div className="mt-2 h-1 w-16 rounded-full bg-amber-500" />
      <div className="mt-10 space-y-8">
        {items.map((item, i) => {
          const isHighlight = !!item.structuredContent
          return (
            <div
              key={i}
              className={`group rounded-xl bg-slate-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                isHighlight ? 'ring-1 ring-amber-200' : ''
              }`}
            >
              <div className="mb-4 flex flex-wrap items-center gap-2">
                {item.tags.map((tag, j) => (
                  <span
                    key={j}
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      j === 0
                        ? 'bg-amber-100 text-amber-700'
                        : 'bg-rose-50 text-rose-600'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className={`font-bold text-slate-900 ${isHighlight ? 'text-xl lg:text-2xl' : 'text-lg'}`}>
                    {item.name}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    {item.role} · {item.period}
                  </p>
                </div>
                {isHighlight && (
                  <div className="rounded-lg bg-amber-50 p-3">
                    <img
                      src="/project-chowtaifook.jpg"
                      alt="Project"
                      className="h-20 w-28 rounded-lg object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                      }}
                    />
                  </div>
                )}
              </div>

              {item.structuredContent && (
                <div className="space-y-5">
                  <div className="flex gap-3">
                    <Search className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-500" />
                    <div>
                      <h4 className="mb-1 text-sm font-semibold text-slate-700">
                        {sectionHeaders.background[lang]}
                      </h4>
                      <p className="text-sm leading-relaxed text-slate-600">{item.structuredContent.background}</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Sparkles className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-500" />
                    <div>
                      <h4 className="mb-1 text-sm font-semibold text-slate-700">
                        {sectionHeaders.actions[lang]}
                      </h4>
                      <p className="text-sm leading-relaxed text-slate-600">{item.structuredContent.actions}</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Lightbulb className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-500" />
                    <div className="flex-1">
                      <h4 className="mb-2 text-sm font-semibold text-slate-700">
                        {item.structuredContent.insightTitle}
                      </h4>
                      <ul className="space-y-2 rounded-lg border border-amber-200 bg-amber-50/50 p-4">
                        {item.structuredContent.insights.map((insight, k) => (
                          <li key={k} className="flex gap-2 text-sm leading-relaxed text-slate-700">
                            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
                            {insight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <FileText className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-500" />
                    <div>
                      <h4 className="mb-1 text-sm font-semibold text-slate-700">
                        {sectionHeaders.output[lang]}
                      </h4>
                      <p className="text-sm leading-relaxed text-slate-600">{item.structuredContent.output}</p>
                    </div>
                  </div>
                </div>
              )}

              {item.bullets && (
                <ul className="space-y-2">
                  {item.bullets.map((bullet, j) => (
                    <li key={j} className="flex gap-2 text-sm leading-relaxed text-slate-600">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
