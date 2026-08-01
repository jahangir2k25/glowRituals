import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Minus, Plus, Truck } from 'lucide-react';
import { product, addOns } from '../data/content';
import OrderImage from '../assets/img1.webp';
import OrderImage2 from '../assets/image.png';

export default function OrderForm() {
  const navigate = useNavigate()
  const [qty, setQty] = useState(1)
  const [selectedAddOns, setSelectedAddOns] = useState({})
  const [form, setForm] = useState({ name: '', phone: '', address: '' })
  const [errors, setErrors] = useState({})

  const addOnTotal = useMemo(
    () => addOns.reduce((sum, a) => (selectedAddOns[a.id] ? sum + a.price : sum), 0),
    [selectedAddOns],
  )
  const total = product.price * qty + addOnTotal

  function toggleAddOn(id) {
    setSelectedAddOns((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  function validate() {
    const next = {}
    if (!form.name.trim()) next.name = 'নাম লিখুন'
    if (!/^01[3-9]\d{8}$/.test(form.phone.trim())) next.phone = 'সঠিক মোবাইল নম্বর দিন'
    if (!form.address.trim()) next.address = 'ঠিকানা লিখুন'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!validate()) return
    navigate('/thank-you', { state: { name: form.name, total } })
  }

  return (
    <section id="order" className="py-16">
      <div className="container-page">
        <div className="mx-auto max-w-sm lg:max-w-full text-center">
          <h2 className="font-display text-2xl text-slate-950">অর্ডার করতে ফর্মটি পূরণ করুন</h2>
          <p className="mt-2 text-ink lg:text-5xl">ক্যাশ অন ডেলিভারি — পণ্য হাতে পেয়ে টাকা দিন</p>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-8 lg:grid-cols-5">
          {/* Order summary */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl bg-blush/40 p-6">
              <div className="flex items-center gap-4">
                <img src={OrderImage} alt={product} className="h-32 w-32 shrink-0 rounded-lg shadow-soft" />
                {/* <div className="h-16 w-16 shrink-0 rounded-xl bg-gradient-to-br from-rose-light to-blush" /> */}
                <div className="flex-1">
                  <p className="text-sm font-medium text-ink">{product.title}</p>
                  <p className="text-sm text-clay">৳{product.price}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="grid h-8 w-8 place-items-center rounded-full bg-ivory shadow-card"
                    aria-label="কমান"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="w-5 text-center font-medium">{qty}</span>
                  <button
                    type="button"
                    onClick={() => setQty((q) => q + 1)}
                    className="grid h-8 w-8 place-items-center rounded-full bg-ivory shadow-card"
                    aria-label="বাড়ান"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              <div className="mt-5 border-t border-ivory pt-4">
                <p className="text-sm font-medium text-ink">কম্বোর সাথে নিতে পারেন</p>
                <img src={OrderImage2} alt="" className="mt-3 h-32 w-32 object-cover rounded-lg" />
                {addOns.map((a) => (
                  <label key={a.id} className="mt-3 flex cursor-pointer items-center gap-3">
                    <input
                      type="checkbox"
                      checked={!!selectedAddOns[a.id]}
                      onChange={() => toggleAddOn(a.id)}
                      className="h-4 w-4 accent-rose"
                    />
                    <span className="flex-1 text-sm text-clay">{a.title}</span>
                    <span className="text-sm font-medium text-ink">৳{a.price}</span>
                  </label>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-ivory pt-4">
                <span className="font-display text-lg text-ink">সর্বমোট</span>
                <span className="font-display text-2xl text-rose-800">৳{total}</span>
              </div>

              <div className="mt-4 flex items-center gap-2 text-xs text-jade-dark">
                <Truck size={14} />
                <span>ফ্রি হোম ডেলিভারি</span>
              </div>
            </div>
          </div>

          {/* Billing form */}
          <form onSubmit={handleSubmit} noValidate className="lg:col-span-3">
            <div className="rounded-2xl border border-blush p-6">
              <h3 className="font-display text-lg text-ink">বিলিং বিবরণ</h3>

              <div className="mt-4 space-y-4">
                <div>
                  <label htmlFor="name" className="text-sm text-clay">
                    আপনার সম্পূর্ণ নাম *
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-lg border border-blush bg-ivory px-4 py-2.5 outline-none focus:border-rose"
                  />
                  {errors.name && <p className="mt-1 text-xs text-rose-800">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="text-sm text-clay">
                    মোবাইল নম্বর *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    inputMode="numeric"
                    placeholder="01XXXXXXXXX"
                    value={form.phone}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-lg border border-blush bg-ivory px-4 py-2.5 outline-none focus:border-rose"
                  />
                  {errors.phone && <p className="mt-1 text-xs text-rose-800">{errors.phone}</p>}
                </div>

                <div>
                  <label htmlFor="address" className="text-sm text-clay">
                    আপনার সম্পূর্ণ ঠিকানা *
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    rows={3}
                    value={form.address}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-lg border border-blush bg-ivory px-4 py-2.5 outline-none focus:border-rose"
                  />
                  {errors.address && <p className="mt-1 text-xs text-rose-800">{errors.address}</p>}
                </div>

                <div className="flex items-center gap-3 rounded-lg bg-blush/40 px-4 py-3 text-sm text-ink">
                  <input type="radio" checked readOnly className="h-4 w-4 accent-rose" />
                  ক্যাশ অন হোম ডেলিভারি
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 w-full rounded-droplet bg-rose-800 py-3.5 font-medium text-ivory shadow-card transition hover:bg-rose-600"
              >
                অর্ডার কনফার্ম করুন ৳{total}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
