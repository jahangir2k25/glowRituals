import { useState } from 'react';
import { product } from '../data/content';

export default function ProductGallery() {
  const [active, setActive] = useState(0)
  const current = product.images[active]

  return (
    <section id="product" className="py-16">
      <div className="container-page grid gap-10 md:grid-cols-2 md:items-start">
        <div>
          <div className={`aspect-square w-full overflow-hidden rounded-droplet bg-gradient-to-br ${current.color} shadow-soft`}>
            {current.src ? (
              <img
                src={current.src}
                alt={current.alt}
                className="h-full w-full object-cover"
              />
            ) : null}
          </div>
          <div className="mt-4 flex gap-3">
            {product.images.map((img, i) => (
              <button
                key={img.alt}
                onClick={() => setActive(i)}
                aria-label={img.alt}
                className={`h-16 w-20 overflow-hidden rounded-xl ring-2 transition ${i === active ? 'ring-rose-800' : 'ring-transparent'}`}
              >
                {img.src ? (
                  <img src={img.src} alt={img.alt} className="h-full w-full object-cover" />
                ) : null}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-medium uppercase tracking-wide text-rose-800">সেন্টেলা গ্লো কম্বো</p>
          <h2 className="mt-2 font-display text-2xl text-slate-950">{product.title}</h2>
          <p className="mt-4 text-sm text-ink">
            মেস্তা/পিগমেন্টেশন, ডার্ক স্পট, লালচে দাগ ও ব্রণের পরবর্তী দাগ হালকা করতে তৈরি এই দুই-ধাপের রিচুয়াল।
            সেন্টেলা অ্যাসিয়াটিকা সমৃদ্ধ ফর্মুলা ত্বককে করে তোলে উজ্জ্বল, মসৃণ ও প্রাণবন্ত — নারী-পুরুষ সবার জন্য উপযোগী।
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {product.badges.map((b) => (
              <span key={b} className="rounded-full bg-gray-200 px-3 py-1.5 text-xs font-medium text-rose-500">
                {b}
              </span>
            ))}
          </div>

          <div className="mt-8 flex items-end gap-3">
            <span className="font-display text-4xl text-rose-800">৳{product.price}</span>
            <span className="pb-1 text-ink line-through">৳{product.compareAtPrice}</span>
            <span className="pb-1 text-sm font-medium text-rose-800">
              {Math.round((1 - product.price / product.compareAtPrice) * 100)}% ছাড়
            </span>
          </div>

          <a
            href="#order"
            className="mt-6 inline-flex rounded-droplet-r bg-rose-800 px-7 py-3.5 font-medium text-ivory shadow-card transition hover:bg-rose-600"
          >
            এখনই অর্ডার করুন
          </a>
        </div>
      </div>
    </section>
  )
}
