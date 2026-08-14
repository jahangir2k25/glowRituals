import React from "react";
import videoFile from "../assets/video.mp4";

export default function VideoPlay({
  videoSrc = videoFile,
  label = "মাত্র ৪ সপ্তাহে ভিজিবল রেজাল্ট && ছেলে-মেয়ে সবাই ব্যবহার করতে পারবে, কোনো প্রকার সাইড ইফেক্ট নেই।",
  poster,
}) {
  return (
    <section id="video" className="py-16">
      <div className="w-full">
        <label className="block text-2xl text-center text-[#ac0d02] mb-1.5">{label}</label>
        <video
          src={videoSrc}
          controls
          autoPlay
          loop
          playsInline
          poster={poster}
          className="w-full lg:w-96 lg:mx-auto rounded-lg border border-white/10 lg:max-h-96 max-h-96 object-cover"
        />
      </div>
      <div className="text-center">
        <a
          href="#order"
          className="mt-6 inline-flex rounded-droplet-r bg-rose-800 px-7 py-3.5 text-2xl font-medium text-ivory shadow-card transition hover:bg-rose-600"
        >
          এখনই অর্ডার করুন
        </a>
      </div>

    </section>
  );
}
