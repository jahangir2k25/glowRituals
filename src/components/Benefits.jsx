import { Sparkles } from 'lucide-react';
import { benefits } from '../data/content';

export default function Benefits() {
  return (
    <section id="benefits" className="bg-blush/30 py-16">
      <div className="container-page">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-display text-3xl text-slate-950">কেন এই কম্বো বেছে নেবেন</h2>
          <p className="mt-3 text-ink">প্রতিটি উপাদান বাছাই করা হয়েছে বাংলাদেশের আবহাওয়া ও ত্বকের ধরন মাথায় রেখে।</p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className={`rounded-2xl bg-ivory p-6 shadow-card ${i % 3 === 1 ? 'sm:translate-y-4' : ''}`}
            >
              <div className="grid h-10 w-10 place-items-center rounded-full bg-rose/10 text-rose-800">
                <Sparkles size={18} />
              </div>
              <h3 className="mt-4 font-display text-lg text-ink">{b.title}</h3>
              <p className="mt-1.5 text-sm text-clay">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
