"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import SectionParticles from "./SectionParticles";

const cards = [
  {
    title: "Expert Team",
    description:
      "Dedicated professionals with expertise in cutting-edge web design + development.",
    icon: "https://framerusercontent.com/images/ugiZZHlwHStPJHKTJFZ1xmjyeU.svg",
  },
  {
    title: "Client-Centric Approach",
    description:
      "Tailoring solutions to meet your unique business needs and exceed expectations.",
    icon: "https://framerusercontent.com/images/YtzOAx01DcB3KHR9NTd80Vla5I.svg",
  },
  {
    title: "Proven Experience",
    description:
      "Years of successfully delivering impactful web solutions across diverse industries.",
    icon: "https://framerusercontent.com/images/FrIMZalbRWvH45ZcljefWOsq8U.svg",
  },
  {
    title: "Timely Delivery",
    description:
      "Meeting deadlines consistently without compromising on quality or precision.",
    icon: "https://framerusercontent.com/images/lnYaGJq9pRJD22YIDwI3qq3n2AQ.svg",
  },
  {
    title: "Responsive Solutions",
    description:
      "Ensuring seamless performance across all devices for optimal user experience.",
    icon: "https://framerusercontent.com/images/Z9vxEnjDAq1Z3O1e7JN5wKhIAQ.svg",
  },
  {
    title: "Transparent Communication",
    description:
      "Clear, open lines of communication throughout every stage of your project.",
    icon: "https://framerusercontent.com/images/cw61VFDI1uUPAc6lz9zGNvdlE.svg",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="relative py-16 md:py-24 overflow-hidden">
      {/* ══════════════ HEADING BLOCK (full-width so sticks can flank it) ══════════════ */}
      <div className="relative w-full flex flex-col items-center text-center mb-14">
        {/* Left stick — positioned at heading level */}
        <div
          className="pointer-events-none absolute"
          aria-hidden="true"
          style={{
            left: "calc(50% - 580px)",
            top: "50%",
            width: "clamp(180px, 28vw, 402px)",
            aspectRatio: "616 / 556",
            transform: "translateY(-50%) rotate(-38deg)",
            zIndex: 0,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://framerusercontent.com/images/Lg5icEwW7eRiMF3xSWlqodarI.svg"
            alt=""
            className="w-full h-full object-cover"
          />
          {/* Particles around left stick */}
          <SectionParticles />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, #000319 0%, transparent 60%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, #000319 0%, transparent 40%, #000319 100%)",
            }}
          />
        </div>
        {/* Right stick — positioned at heading level */}
        <div
          className="pointer-events-none absolute"
          aria-hidden="true"
          style={{
            right: "calc(50% - 580px)",
            top: "50%",
            width: "clamp(180px, 28vw, 402px)",
            aspectRatio: "616 / 556",
            transform: "translateY(-50%) rotate(38deg)",
            zIndex: 0,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://framerusercontent.com/images/s86pE6NdLKAVI3DiqWQs31H8Ufk.svg"
            alt=""
            className="w-full h-full object-cover"
          />
          {/* Particles around right stick */}
          <SectionParticles />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to left, #000319 0%, transparent 60%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, #000319 0%, transparent 40%, #000319 100%)",
            }}
          />
        </div>
        Glowing heading pill
        <div className="relative flex flex-col items-center justify-center z-10">
          {/* Background glow SVG */}
          {/* eslint-disable-next-line @next/next/no-img-element */}

          {/* Text */}
          <div className="relative z-10 flex flex-col items-center gap-3 px-6">
            <span className="section-tag inline-flex">Why Us</span>
            <h2
              className="text-[28px] md:text-[34px] lg:text-[44px] font-bold leading-[1.15]"
              style={{ fontFamily: "var(--font-rethink-sans), sans-serif" }}
            >
              Why InflectiveX Stands Out
            </h2>
          </div>
        </div>
        <p className="relative z-10 text-[#6d7792] text-[17px] max-w-[520px] leading-[1.5] mt-5 px-6">
          Discover why InflectiveX excels in delivering innovative,
          client-focused software development solutions.
        </p>
      </div>

      {/* ══════════════ CARDS ══════════════ */}
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[18px]">
          {cards.map((card, i) => (
            <ScrollReveal key={i} delay={i * 90}>
              <div
                className="rounded-2xl border border-[#0e122e] card-hover h-full"
                style={{
                  backgroundColor: "#00020f",
                  padding: "40px 30px 30px 30px",
                }}
              >
                <div className="inline-flex items-center justify-center mb-5">
                  <Image
                    src={card.icon}
                    alt={card.title}
                    width={32}
                    height={32}
                  />
                </div>
                <h3
                  className="text-[18px] font-semibold mb-3 text-white"
                  style={{ fontFamily: "var(--font-rethink-sans), sans-serif" }}
                >
                  {card.title}
                </h3>
                <p className="text-[15px] leading-[1.6] text-[#6d7792]">
                  {card.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
