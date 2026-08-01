import { steps } from '../data/content'

export default function HowToUse() {
  return (
    <section id="how-to-use" className="py-16">
      <div className="container-page">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-display text-3xl text-slate-950">ব্যবহারের পদ্ধতি</h2>
          <p className="mt-3 text-ink">প্রতিদিনের সহজ তিনটি ধাপ, মাত্র কয়েক মিনিটে</p>
        </div>

        <div className="relative mt-12 grid gap-8 sm:grid-cols-3">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-blush sm:block" aria-hidden />
          {steps.map((s) => (
            <div key={s.number} className="relative flex flex-col items-center text-center">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-rose-800 font-mono text-sm text-ivory shadow-card">
                {s.number}
              </div>
              <h3 className="mt-4 font-display text-lg text-slate-950">{s.title}</h3>
              <p className="mt-1.5 max-w-xs text-sm text-ink">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
