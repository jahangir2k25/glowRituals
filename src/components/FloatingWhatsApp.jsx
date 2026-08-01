import { MessageCircle } from 'lucide-react';
import { brand } from '../data/content';

export default function FloatingWhatsApp() {
  return (
    <a
      href={brand.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="হোয়াটসঅ্যাপে যোগাযোগ করুন"
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-emerald-600 text-ivory shadow-soft transition hover:bg-emerald-800"
    >
      <MessageCircle size={26} />
    </a>
  )
}
