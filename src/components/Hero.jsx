import { Star, ShieldCheck } from 'lucide-react';
import { product } from '../data/content';
import HeroImage from '../assets/img1.webp';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-orange-100 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 top-40 h-72 w-72 rounded-full bg-jade-light/30 blur-3xl" />

      <div className="container-page relative grid gap-12 py-16 md:grid-cols-2 md:items-center md:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-blush px-4 py-1.5 text-sm font-medium text-rose-800">
            কোরিয়ান ডার্মাটোলজি-ইন্সপায়ার্ড ফর্মুলা
          </span>

          <h1 className="mt-5 font-display text-4xl leading-tight text-slate-950 sm:text-5xl">
            মেস্তা, দাগ আর অসম রঙ —<br />
            <span className="text-rose-800">গ্লাস স্কিন</span> রিচুয়ালে হোক বিদায়
          </h1>

          <p className="mt-5 max-w-md text-amber-950">{product.subtitle}। প্রতিদিনের যত্নে তৈরি সহজ ২ ধাপের রুটিন — কোনো সাইড ইফেক্ট ছাড়াই।</p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#order"
              className="rounded-droplet bg-rose-800 px-7 py-3.5 font-medium text-ivory shadow-soft transition hover:bg-rose-600"
            >
              অফার প্রাইসে অর্ডার করুন
            </a>
            <div className="flex items-center gap-1.5 text-sm text-ink">
              <Star size={16} className="fill-yellow-300 text-yellow-300" />
              <span className="font-medium text-ink">{product.rating}/৫</span>
              <span>({product.reviewCount.toLocaleString('bn-BD')}+ ক্রেতা)</span>
            </div>
          </div>

          <div className="mt-8 flex items-center gap-2 text-sm text-slate-950">
            <ShieldCheck size={18} />
            <span>ল্যাব টেস্টেড ও ডার্মাটোলজিস্ট সাজেস্টেড</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <img src={HeroImage} alt="" className="w-full object-cover rounded-lg" />
          {/* <div className="aspect-[4/5] w-full animate-float rounded-droplet bg-gradient-to-br from-rose-light via-blush to-jade-light/60 shadow-soft" /> */}
          <div className="absolute -bottom-6 -left-6 rounded-2xl bg-ivory p-4 shadow-card">
            <p className="text-xs text-clay">আজকের অফার</p>
            <p className="font-display text-2xl text-rose-800">৳{product.price}</p>
            <p className="text-xs text-clay line-through">৳{product.compareAtPrice}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
