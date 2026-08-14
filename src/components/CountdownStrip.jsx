import { useEffect, useState } from 'react';

function getTimeLeft() {
  const now = new Date()
  const endOfDay = new Date(now)
  endOfDay.setHours(23, 59, 59, 999)
  const diff = Math.max(0, endOfDay - now)

  return {
    hours: Math.floor(diff / (1000 * 60 * 60)),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

function Digit({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="rounded-lg bg-ink/90 px-3 py-2 font-mono text-lg font-semibold text-gold-light sm:text-2xl">
        {String(value).padStart(2, '0')}
      </div>
      <span className="mt-1 text-[11px] text-clay">{label}</span>
    </div>
  )
}

export default function CountdownStrip() {
  const [time, setTime] = useState(getTimeLeft())

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="bg-slate-900 py-8 text-ivory">
      <div className="container-page flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="text-sm uppercase tracking-wide text-gold-light">আজকের বিশেষ অফার</p>
          <h3 className="mt-1 font-display text-2xl">৳২,৯৯০ টাকার কম্বো আজ মাত্র ৳১,৪৯০ টাকা</h3>
          <p className="mt-1 text-sm text-ivory/70">অফারটি চলবে আজ রাত ১২টা পর্যন্ত</p>
        </div>
        <div className="flex items-center gap-3">
          <Digit value={time.hours} label="ঘন্টা" />
          <span className="pb-4 text-xl text-gold-light">:</span>
          <Digit value={time.minutes} label="মিনিট" />
          <span className="pb-4 text-xl text-gold-light">:</span>
          <Digit value={time.seconds} label="সেকেন্ড" />
        </div>
        <a
          href="#order"
          className="rounded-droplet bg-rose-800 px-6 py-3 text-sm font-medium text-ivory shadow-card transition hover:bg-rose-600"
        >
          এখনই অর্ডার করুন
        </a>
      </div>
    </section>
  )
}
