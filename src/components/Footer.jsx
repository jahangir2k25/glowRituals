import { Phone, MapPin, Facebook, Instagram } from 'lucide-react'
import { brand } from '../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-blush bg-blush/30 py-12">
      <div className="container-page grid gap-8 sm:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-droplet bg-rose-800 text-ivory font-display">গ</span>
            <span className="font-display text-lg text-ink">{brand.name}</span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-ink">{brand.tagline}। আপনার ত্বকের যত্নে বিশ্বস্ত সঙ্গী।</p>
        </div>

        <div>
          <h4 className="font-display text-slate-950">যোগাযোগ</h4>
          <div className="mt-3 space-y-2 text-sm text-ink">
            <p className="flex items-center gap-2">
              <Phone size={14} /> {brand.phone}
            </p>
            <p className="flex items-center gap-2">
              <MapPin size={14} /> ঢাকা, বাংলাদেশ
            </p>
          </div>
        </div>

        <div>
          <h4 className="font-display text-ink">সোশ্যাল মিডিয়া</h4>
          <div className="mt-3 flex gap-3">
            <a href="#" aria-label="ফেসবুক" className="grid h-9 w-9 place-items-center rounded-full bg-ivory text-jade-dark shadow-card">
              <Facebook size={16} />
            </a>
            <a href="#" aria-label="ইনস্টাগ্রাম" className="grid h-9 w-9 place-items-center rounded-full bg-ivory text-jade-dark shadow-card">
              <Instagram size={16} />
            </a>
          </div>
        </div>
      </div>

      <div className="container-page mt-8 border-t border-ivory pt-6 text-center text-xs text-ink">
        RAJ DIVERSION © {new Date().getFullYear()} {brand.name}। সর্বস্বত্ব সংরক্ষিত।
      </div>
    </footer>
  )
}
