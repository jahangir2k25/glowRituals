# গ্লো রিচুয়াল — Korean Beauty BD (Vite + React + Tailwind)

koreanbeautybangladesh.com এর ধাঁচে বানানো একটি single-product Bengali skincare landing/order funnel, প্রতিটি সেকশন আলাদা React component হিসেবে গঠিত।

## চালু করার নিয়ম

```bash
npm install
npm run dev
```

তারপর ব্রাউজারে `http://localhost:5173` খুলুন।

Production build:

```bash
npm run build
npm run preview
```

## প্রজেক্ট স্ট্রাকচার

```
src/
  data/
    content.js        # সব কপি/ডাটা এক জায়গায় — নাম, দাম, রিভিউ, প্রশ্নোত্তর
  components/
    AnnouncementBar.jsx
    Header.jsx
    Hero.jsx
    TrustBadges.jsx
    CountdownStrip.jsx  # আজকের অফারের রিয়েল-টাইম কাউন্টডাউন
    ProductGallery.jsx
    Benefits.jsx
    HowToUse.jsx
    Testimonials.jsx
    FAQ.jsx
    OrderForm.jsx        # কার্ট + বিলিং ফর্ম + ভ্যালিডেশন
    Footer.jsx
    FloatingWhatsApp.jsx
  pages/
    Home.jsx           # সব সেকশন একত্র করে
    ThankYou.jsx        # অর্ডার কনফার্মেশন পেজ ( /thank-you )
  App.jsx               # রাউটিং
  main.jsx
  index.css
```

## কাস্টমাইজ করবেন কীভাবে

- **টেক্সট/দাম/রিভিউ পরিবর্তন:** শুধু `src/data/content.js` ফাইলটি এডিট করুন — বাকি সব কম্পোনেন্ট অটোমেটিক আপডেট হয়ে যাবে।
- **রঙ/ফন্ট:** `tailwind.config.js` এর `theme.extend.colors` ও `fontFamily`।
- **হোয়াটসঅ্যাপ নম্বর:** `content.js` এর `brand.whatsapp`।
- **প্রোডাক্ট ছবি:** এখন gradient placeholder ব্যবহার করা হয়েছে; আসল প্রোডাক্ট ছবি ব্যবহার করতে `ProductGallery.jsx` ও `Hero.jsx` তে `<img>` ট্যাগ দিয়ে গ্রেডিয়েন্ট div প্রতিস্থাপন করুন এবং ছবি `src/assets/` এ রাখুন।
- **অর্ডার সাবমিশন:** বর্তমানে ফর্ম সাবমিট করলে সরাসরি `/thank-you` পেজে যায় (ডেমো)। সত্যিকারের অর্ডার সংরক্ষণের জন্য `OrderForm.jsx` এর `handleSubmit` ফাংশনে আপনার backend/API কল যোগ করুন।

## নোট

- ডিজাইন টোকেন: ivory ব্যাকগ্রাউন্ড + rose/jade/gold অ্যাকসেন্ট, "droplet-cut" কার্ড শেপ (সিরাম ড্রপের আদল) — সরাসরি টেমপ্লেট কপি না করে মূল সাইটের বিষয়বস্তু (কোরিয়ান স্কিনকেয়ার) অনুযায়ী বানানো হয়েছে।
- বাংলা টাইপোগ্রাফি: হেডলাইনে "Tiro Bangla" (সেরিফ) ও বডিতে "Hind Siliguri" — Google Fonts থেকে লোড হয়।
- কাউন্টডাউন টাইমার আসলে আজকের দিনের শেষ (রাত ১২টা) পর্যন্ত রিয়েল টাইম গণনা করে, রিফ্রেশে রিসেট হওয়া ভুয়া টাইমার নয়।
