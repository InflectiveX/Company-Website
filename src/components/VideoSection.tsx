"use client";

import { useState } from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const features = [
  {
    title: "Custom Designs",
    description:
      "Tailored websites meticulously crafted to reflect your brand.",
    icon: "https://framerusercontent.com/images/9lDwe5RVWhcROsUnUSLQ5QiaaPk.svg",
  },
  {
    title: "Fast Performance",
    description:
      "Optimized for lightning-fast speed to enhance user experience.",
    icon: "https://framerusercontent.com/images/FhPczbEeg5bRtLspTbQHpRUUg.svg",
  },
  {
    title: "SEO Friendly",
    description:
      "Designed to improve SEO and increase visibility effortlessly.",
    icon: "https://framerusercontent.com/images/36QlWRG5xFqx3DaY9IWO4wgp98.svg",
  },
];

export default function VideoSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Label */}
        <p className="text-center text-[#a7adbe] text-[15px] mb-8">
          See How We Can Help Your Brand
        </p>

        {/* Video Container */}
        <div className="relative rounded-2xl overflow-hidden mb-16 aspect-video border border-[#0e122e]">
          {playing ? (
            <video
              autoPlay
              controls
              className="w-full h-full object-cover"
              src="https://framerusercontent.com/images/d82eWNiZC2bSWEtRNCK0OwUPE.mp4"
            />
          ) : (
            <div
              className="relative w-full h-full cursor-pointer group"
              onClick={() => setPlaying(true)}
            >
              <Image
                src="https://framerusercontent.com/images/uGpg3tPNL1E0kelWRxVrC056xQ.png"
                alt="Video Thumbnail"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                <div className="flex items-center gap-3 btn-primary px-6 py-3 text-[15px]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Play Video
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <ScrollReveal key={i} delay={i * 110}>
              <div className="rounded-2xl border border-[#0e122e] bg-[#000529]/50 p-8 card-hover h-full">
                <div className="w-12 h-12 rounded-xl bg-[#0e122e] flex items-center justify-center mb-5">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={24}
                    height={24}
                  />
                </div>
                <h3
                  className="text-[20px] font-semibold mb-3"
                  style={{ fontFamily: "var(--font-rethink-sans), sans-serif" }}
                >
                  {feature.title}
                </h3>
                <p className="text-[#6d7792] text-[15px] leading-[1.6]">
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
