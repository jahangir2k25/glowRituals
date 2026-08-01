import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '../data/content';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="py-16">
      <div className="container-page max-w-2xl">
        <h2 className="text-center font-display text-3xl text-slate-950">প্রায়শই জিজ্ঞাসিত প্রশ্ন</h2>

        <div className="mt-8 divide-y divide-blush rounded-2xl border border-blush">
          {faqs.map((f, i) => {
            const isOpen = openIndex === i
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-slate-950">{f.q}</span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-rose-800 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {isOpen && <p className="px-5 pb-4 text-sm text-ink">{f.a}</p>}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
