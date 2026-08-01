import { useState } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { brand } from '../data/content';

const links = [
  { label: 'প্রোডাক্ট', href: '#product' },
  { label: 'উপকারিতা', href: '#benefits' },
  { label: 'ব্যবহারবিধি', href: '#how-to-use' },
  { label: 'রিভিউ', href: '#reviews' },
  { label: 'প্রশ্নোত্তর', href: '#faq' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 backdrop-blur">
      <div className="container-page flex items-center justify-between py-4">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-droplet bg-rose-800 text-ivory font-display text-lg">গ</span>
          <span className="font-display text-xl">{brand.name}</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-lg text-slate-950 transition hover:text-rose-600">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#order"
            className="hidden items-center gap-2 rounded-droplet-r bg-rose-800 px-5 py-2.5 text-sm font-medium text-ivory shadow-card transition hover:bg-rose-600 md:inline-flex"
          >
            <ShoppingBag size={16} />
            অর্ডার করুন
          </a>
          <button
            aria-label="মেনু খুলুন"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full text-ink md:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-blush bg-ivory md:hidden">
          <div className="container-page flex flex-col gap-1 py-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-ink hover:bg-blush"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#order"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-droplet-r bg-rose-800 px-4 py-3 text-center font-medium text-ivory"
            >
              অর্ডার করুন
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
