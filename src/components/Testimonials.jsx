import { Star } from 'lucide-react'
import { testimonials, product } from '../data/content'

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-blush/30 py-16">
      <div className="container-page">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-display text-3xl text-ink">কাস্টমার রিভিউ</h2>
          <p className="mt-2 text-clay">
            {product.rating}/৫.০ — {product.reviewCount.toLocaleString('bn-BD')}+ গ্রাহকের অভিজ্ঞতা
          </p>
        </div>

        <div className="mt-10 flex gap-5 overflow-x-auto pb-4 sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-4">
          {testimonials.map((t) => (
            <div key={t.name} className="min-w-[260px] shrink-0 rounded-2xl bg-ivory p-6 shadow-card sm:min-w-0">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className={i < t.rating ? 'fill-gold text-gold' : 'text-blush'} />
                ))}
              </div>
              <p className="mt-3 text-sm text-clay">"{t.text}"</p>
              <p className="mt-4 text-sm font-medium text-ink">{t.name}</p>
              <p className="text-xs text-clay">{t.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
