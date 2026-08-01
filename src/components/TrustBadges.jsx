import { FlaskConical, Leaf, Truck, HeartHandshake } from 'lucide-react';

const items = [
  { icon: FlaskConical, label: 'ল্যাব টেস্টেড ফর্মুলা' },
  { icon: Leaf, label: 'সেন্টেলা অ্যাসিয়াটিকা বেজড' },
  { icon: Truck, label: 'ক্যাশ অন হোম ডেলিভারি' },
  { icon: HeartHandshake, label: '৮,০০০+ সন্তুষ্ট গ্রাহক' },
]

export default function TrustBadges() {
  return (
    <section className="border border-blush bg-gold py-8">
      <div className="container-page grid grid-cols-2 gap-6 sm:grid-cols-4">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex flex-col items-center gap-2 text-center">
            <div className="grid h-11 w-11 place-items-center rounded-full bg-ivory text-rose-800 shadow-card">
              <Icon size={20} />
            </div>
            <span className="text-xs text-ivory sm:text-sm">{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
