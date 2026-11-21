import { Download, FileJson, Pin, Search, ShieldCheck, Tag, Timer, Upload } from 'lucide-react'
import { SiteHeader } from './components/SiteHeader'
import { SiteFooter } from './components/SiteFooter'
import { NotesWorkspace } from './components/NotesWorkspace'
import { useLang } from './lib/lang'
import { localize } from './lib/locale'
import type { Localized } from './lib/types'

const hero = {
  kicker: { uz: 'Shaxsiy qaydlar', en: 'Personal notes', ru: 'Личные заметки' },
  title: { uz: 'Eslatmalar', en: 'Eslatmalar Notes', ru: 'Eslatmalar' },
  subtitle: {
    uz: 'Avtomatik saqlanadigan eslatmalar: teglar, qidiruv, mahsiylash va JSON eksport/import.',
    en: 'Autosaving notes with tags, search, pinning and JSON export/import.',
    ru: 'Заметки с автосохранением: теги, поиск, закрепление и экспорт/импорт JSON.',
  },
} satisfies Record<string, Localized>

const features: { icon: typeof Pin; title: Localized; text: Localized }[] = [
  {
    icon: Timer,
    title: { uz: 'Avtomatik saqlash', en: 'Autosave', ru: 'Автосохранение' },
    text: {
      uz: 'Yozayotgan matningiz avtomatik saqlanadi — hech narsa yo‘qolmaydi.',
      en: 'What you type is saved automatically — nothing gets lost.',
      ru: 'Написанное сохраняется автоматически — ничего не теряется.',
    },
  },
  {
    icon: Search,
    title: { uz: 'Teglar va qidiruv', en: 'Tags and search', ru: 'Теги и поиск' },
    text: {
      uz: 'Teglar bilan tartibga soling va qidiruv orqali kerakli yozuvni tez toping.',
      en: 'Organise with tags and find the right note quickly with search.',
      ru: 'Организуйте с помощью тегов и быстро находите заметки поиском.',
    },
  },
  {
    icon: Pin,
    title: { uz: 'Mahsiylash', en: 'Pinning', ru: 'Закрепление' },
    text: {
      uz: 'Muhim eslatmalarni yuqoriga mahsiylab qo‘ying.',
      en: 'Pin important notes to the top of the list.',
      ru: 'Закрепляйте важные заметки вверху списка.',
    },
  },
  {
    icon: FileJson,
    title: { uz: 'Eksport / import', en: 'Export / import', ru: 'Экспорт / импорт' },
    text: {
      uz: 'Butun daftarni JSON fayl sifatida yuklab oling yoki boshqa qurilmaga ko‘chiring.',
      en: 'Download the whole notebook as JSON or move it to another device.',
      ru: 'Скачайте весь блокнот в JSON или перенесите на другое устройство.',
    },
  },
]

const stats: { icon: typeof ShieldCheck; label: Localized; value: Localized }[] = [
  {
    icon: ShieldCheck,
    label: { uz: 'Saqlash', en: 'Storage', ru: 'Хранение' },
    value: { uz: 'localStorage', en: 'localStorage', ru: 'localStorage' },
  },
  {
    icon: FileJson,
    label: { uz: 'Format', en: 'Format', ru: 'Формат' },
    value: { uz: 'JSON', en: 'JSON', ru: 'JSON' },
  },
  {
    icon: Timer,
    label: { uz: 'Avtomatik saqlash', en: 'Autosave', ru: 'Автосохранение' },
    value: { uz: '800 ms', en: '800 ms', ru: '800 ms' },
  },
]

function NoteGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-6">
      <path d="M5 4h9l5 5v11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z" strokeLinejoin="round" />
      <path d="M14 4v5h5M8 13h8M8 17h5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function App() {
  const { lang } = useLang()

  return (
    <div id="top" className="min-h-screen">
      <SiteHeader
        brand="Eslatmalar"
        tagline={hero.kicker}
        accent="from-fuchsia-500 to-purple-400"
        icon={<NoteGlyph />}
      />

      <main>
        <section className="relative overflow-hidden pt-16 pb-14 sm:pt-20 sm:pb-16">
          <div
            className="pointer-events-none absolute -top-32 right-1/4 size-[28rem] rounded-full bg-fuchsia-500/15 blur-3xl dark:bg-fuchsia-500/10"
            aria-hidden="true"
          />
          <div className="pointer-events-none absolute inset-0 grid-bg opacity-70" aria-hidden="true" />
          <div className="container-page relative">
            <div className="max-w-3xl page-enter">
              <span className="inline-flex items-center gap-2 rounded-full border border-fuchsia-500/25 bg-fuchsia-500/10 px-3.5 py-1 text-xs font-semibold tracking-wider text-fuchsia-600 uppercase dark:border-fuchsia-400/20 dark:text-fuchsia-300">
                <span className="size-1.5 rounded-full bg-fuchsia-500" />
                {localize(hero.kicker, lang)}
              </span>
              <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-6xl">
                {localize(hero.title, lang)}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400">
                {localize(hero.subtitle, lang)}
              </p>

              <div className="mt-8 flex flex-wrap gap-2.5">
                {[
                  { uz: 'Avtomatik saqlash', en: 'Autosave', ru: 'Автосохранение' },
                  { uz: 'Teglar va qidiruv', en: 'Tags and search', ru: 'Теги и поиск' },
                  { uz: 'Mahsiylash', en: 'Pinning', ru: 'Закрепление' },
                  { uz: 'Eksport / import', en: 'Export / import', ru: 'Экспорт / импорт' },
                ].map((item) => (
                  <span
                    key={item.en}
                    className="chip bg-white/70 text-slate-600 ring-slate-200 dark:bg-white/5 dark:text-slate-300 dark:ring-white/10"
                  >
                    <Tag className="size-3 text-fuchsia-500" />
                    {localize(item, lang)}
                  </span>
                ))}
              </div>

              <div className="mt-10 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3">
                {stats.map((item) => (
                  <div key={item.label.en} className="card-surface px-4 py-3">
                    <p className="flex items-center gap-1.5 text-[10px] font-semibold tracking-wider text-slate-400 uppercase">
                      <item.icon className="size-3" />
                      {localize(item.label, lang)}
                    </p>
                    <p className="mt-1 font-mono text-sm font-bold text-slate-800 dark:text-slate-100">
                      {localize(item.value, lang)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-3 text-xs text-slate-400">
                <span className="inline-flex items-center gap-1.5">
                  <Download className="size-3.5" /> JSON
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Upload className="size-3.5" /> import
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="size-3.5" /> offline
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="container-page">
            <NotesWorkspace />
          </div>
        </section>

        <section className="section-alt py-16 sm:py-20">
          <div className="container-page">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => (
                <div key={feature.title.en} className="card-surface card-hover p-6">
                  <span className="grid size-11 place-items-center rounded-xl bg-gradient-to-br from-fuchsia-500 to-purple-400 text-white shadow-md">
                    <feature.icon className="size-5" />
                  </span>
                  <h3 className="mt-4 text-base font-bold">{localize(feature.title, lang)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                    {localize(feature.text, lang)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter
        brand="Eslatmalar"
        note={{
          uz: 'Brauzerda ishlaydigan, avtomatik saqlanadigan shaxsiy eslatmalar.',
          en: 'Personal notes that autosave and live entirely in your browser.',
          ru: 'Личные заметки с автосохранением, работающие прямо в браузере.',
        }}
        tech={['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'localStorage', 'JSON']}
        repoUrl="https://github.com/akramovahror722-coder/eslatmalar"
        accentText="text-fuchsia-600 dark:text-fuchsia-300"
      />
    </div>
  )
}
