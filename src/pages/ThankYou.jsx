import { Link, useLocation, Navigate } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';

export default function ThankYou() {
  const { state } = useLocation()

  if (!state) return <Navigate to="/" replace />

  return (
    <section className="container-page flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
      <div className="grid h-16 w-16 place-items-center rounded-full bg-jade-light/30 text-jade-dark">
        <CheckCircle2 size={32} />
      </div>
      <h1 className="mt-6 font-display text-3xl text-ink">ধন্যবাদ, {state.name}!</h1>
      <p className="mt-3 max-w-md text-green-600 text-lg">
        আপনার অর্ডারটি সফলভাবে গ্রহণ করা হয়েছে। মোট মূল্য ৳{state.total} — আমাদের টিম শীঘ্রই আপনার সাথে যোগাযোগ করবে।
      </p>
      <Link
        to="/"
        className="mt-8 rounded-droplet bg-rose-800 px-6 py-3 font-medium text-ivory shadow-card transition hover:bg-rose-600"
      >
        হোমপেজে ফিরে যান
      </Link>
    </section>
  )
}
