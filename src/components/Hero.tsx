"use client";

import Image from "next/image";
import Link from "next/link";
import HeroParticles from "./HeroParticles";

const brandLogos = [
  "https://framerusercontent.com/images/hnBCO2bZ10CDWY5mcJBePKlCk7w.svg",
  "https://framerusercontent.com/images/mnpJTX4E8HKwFUHjn0cRfR0goo.svg",
  "https://framerusercontent.com/images/yk02mAVgGG7PoKw69G5dPwSpY8.svg",
  "https://framerusercontent.com/images/RKGxbs412ctqXkgH5YRT8Fi1Us.svg",
  "https://framerusercontent.com/images/LS1qXydr5BtrR8sccRaDs4fzzr8.svg",
  "https://framerusercontent.com/images/FPp5U14aqmVZbD3wNdh0oNrSA.svg",
];

const portfolioCards = [
  {
    type: "Website Design -",
    name: "Wanderly",
    img: "https://framerusercontent.com/images/aU8d6vzx2lN8lFocdrZdSCia1EU.svg",
    w: 456,
    h: 307,
  },
  {
    type: "App Design -",
    name: "Waitlista",
    img: "https://framerusercontent.com/images/koSHXA0t0VVvZo8rgkVjMvqBWtU.svg",
    w: 162,
    h: 307,
  },
  {
    type: "Website Design -",
    name: "Regulate",
    img: "https://framerusercontent.com/images/b62Fj0SKmWls7OrlMSJevL1HVgc.svg",
    w: 456,
    h: 307,
  },
  {
    type: "App Design -",
    name: "Appit",
    img: "https://framerusercontent.com/images/N7MH6y4gWOReoIhaSdiMQDyiyw.svg",
    w: 162,
    h: 307,
  },
  {
    type: "Website Design -",
    name: "AIgnite",
    img: "https://framerusercontent.com/images/wAGWDvasRzHH2exDrqxypa9Yg.svg",
    w: 456,
    h: 307,
  },
  {
    type: "App Design -",
    name: "Pix",
    img: "https://framerusercontent.com/images/HF9X4msyQyjbrEA33cH9YWHDjY.svg",
    w: 162,
    h: 307,
  },
  {
    type: "Website Design -",
    name: "Maxer",
    img: "https://framerusercontent.com/images/7xu0IDDZ1nTVqHsgCxHGC96y2u8.png",
    w: 456,
    h: 307,
  },
  {
    type: "App Design -",
    name: "Zento",
    img: "https://framerusercontent.com/images/ubIFoFyzs8BMQWrkXspZ3NmHSs.svg",
    w: 162,
    h: 307,
  },
  {
    type: "Website Design -",
    name: "Tasklytic",
    img: "https://framerusercontent.com/images/u0ZgzjEe11PfzELumQZcOeBp7E.svg",
    w: 456,
    h: 307,
  },
];

function PortfolioCard({
  type,
  name,
  img,
  w,
  h,
}: {
  type: string;
  name: string;
  img: string;
  w: number;
  h: number;
}) {
  const isPortrait = w < h;
  return (
    <div
      className="flex-shrink-0 flex flex-col"
      style={{
        position: "relative",
        width: isPortrait ? 162 : 456,
        borderTop: "1px solid rgba(255,255,255,0.1)",
        backgroundColor: "rgba(255,255,255,0.05)",
        borderRadius: 16,
        overflow: "hidden",
        padding: "12px 12px 12px 12px",
        gap: 10,
      }}
    >
      {/* Glow */}
      <div
        style={{
          borderRadius: 12,
          background:
            "radial-gradient(50% 50% at 50% 50%, rgb(92,125,244) 0%, rgba(92,126,245,0) 100%)",
          filter: "blur(80px)",
          position: "absolute",
          width: "60%",
          height: "50%",
          top: "10%",
          left: "20%",
          pointerEvents: "none",
        }}
      />
      {/* Image */}
      <div
        style={{
          position: "relative",
          borderRadius: 12,
          overflow: "hidden",
          height: isPortrait ? 220 : 200,
          flexShrink: 0,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={img}
          alt={name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: 12,
            display: "block",
          }}
        />
      </div>
      {/* Labels */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          paddingTop: 4,
        }}
      >
        <span
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: 13,
            fontWeight: 500,
            color: "rgb(109,119,146)",
            lineHeight: 1.5,
          }}
        >
          {type}
        </span>
        <span
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: 13,
            fontWeight: 500,
            color: "rgb(109,119,146)",
            lineHeight: 1.5,
          }}
        >
          {name}
        </span>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative pt-[130px] pb-0 overflow-hidden">
      {/* ───────────── Background ───────────── */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        {/* Main mesh/grid SVG */}
        <div className="absolute inset-0 mt-[30px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://framerusercontent.com/images/xdaPXOEtPIASFiIeYk976HyJA.svg"
            alt=""
            style={{
              display: "block",
              width: "100%",
              height: "100%",
              objectFit: "contain",
              objectPosition: "center center",
            }}
          />
        </div>
        {/* Right glow */}
        <div
          className="absolute top-0 right-0"
          style={{ width: "46%", height: "66%" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://framerusercontent.com/images/NTKgB6h2Q6llqcAO5km5305uDk0.svg"
            alt=""
            style={{
              display: "block",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
        {/* Left glow */}
        <div
          className="absolute top-0 left-0"
          style={{ width: "46%", height: "55%" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://framerusercontent.com/images/UKLIsmbXPgsNWAAoMY12jQuP2ZI.svg"
            alt=""
            style={{
              display: "block",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
        {/* Top sparkle particles */}
        <div className="absolute top-0 left-0 right-0" style={{ height: 398 }}>
          <HeroParticles />
        </div>
      </div>

      {/* ───────────── Hero Content ───────────── */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Tag Pill */}
        <Link
          href="/works"
          className="animate-fade-in-up mb-6 inline-flex items-center gap-2 px-4 py-2 text-[#a7adbe] text-[15px] font-medium"
          style={{
            animationDelay: "0.1s",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 100,
            backgroundColor: "rgba(255,255,255,0.04)",
            backdropFilter: "blur(8px)",
            fontFamily: "'Inter Tight', sans-serif",
            fontWeight: 500,
            fontSize: 17,
          }}
        >
          <span>
            We Design websites that matter, user&apos;s can&apos;t resist
          </span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://framerusercontent.com/images/FJCBFtsTJoF0VTHJm6XkHTYK0Y.svg"
            alt=""
            width={19}
            height={18}
            style={{ display: "block", flexShrink: 0 }}
          />
        </Link>

        {/* H1 */}
        <h1
          className="animate-fade-in-up text-white font-bold leading-[1.15] mb-5"
          style={{
            animationDelay: "0.2s",
            fontFamily: "'Rethink Sans', sans-serif",
            fontSize: "clamp(36px, 5vw, 64px)",
            maxWidth: 800,
          }}
        >
          Design That Powers Real Business Growth
        </h1>

        {/* Subtitle */}
        <p
          className="animate-fade-in-up mb-8"
          style={{
            animationDelay: "0.35s",
            color: "rgb(167,173,190)",
            fontSize: 17,
            lineHeight: 1.5,
            maxWidth: 500,
            textAlign: "center",
          }}
        >
          Elevating brands through innovative and engaging web solutions.
        </p>

        {/* CTA + Availability row */}
        <div
          className="animate-fade-in-up flex flex-col sm:flex-row items-center gap-5 mb-8"
          style={{ animationDelay: "0.5s" }}
        >
          {/* Get Started */}
          <Link
            href="https://framerplate.lemonsqueezy.com/buy/621a9169-591c-408c-980a-2624ef8137fd"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center text-white text-[15px] font-medium transition-opacity hover:opacity-90"
            style={{
              background:
                "linear-gradient(rgb(76,117,255) 0%, rgb(26,79,255) 100%)",
              borderRadius: 100,
              padding: "14px 24px",
              fontFamily: "'Rethink Sans', sans-serif",
            }}
          >
            Get Started
          </Link>

          {/* Green dot + spots */}
          <div className="flex items-center gap-2">
            <span
              style={{
                display: "inline-block",
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: "rgb(13,222,51)",
                boxShadow: "0 0 6px 2px rgba(13,222,51,0.5)",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                color: "rgb(167,173,190)",
                fontSize: 14,
                fontFamily: "'Rethink Sans', sans-serif",
              }}
            >
              2 Spots Available
            </span>
          </div>
        </div>
      </div>

      {/* ───────────── Portfolio Cards Marquee ───────────── */}
      <div
        className="animate-fade-in-up relative z-10"
        style={{
          animationDelay: "0.65s",
          overflow: "hidden",
          maskImage:
            "linear-gradient(to right, rgba(0,0,0,0) 0%, rgb(0,0,0) 20%, rgb(0,0,0) 80%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, rgba(0,0,0,0) 0%, rgb(0,0,0) 20%, rgb(0,0,0) 80%, rgba(0,0,0,0) 100%)",
        }}
      >
        <div
          className="flex animate-marquee-slow"
          style={{ gap: 16, paddingBottom: 16 }}
        >
          {[...portfolioCards, ...portfolioCards].map((card, i) => (
            <PortfolioCard key={i} {...card} />
          ))}
        </div>
      </div>

      {/* ───────────── Stars + Brand Marquee ───────────── */}
      <div className="relative z-10 flex flex-col items-center gap-6 pt-10 pb-16 px-6">
        {/* Stars + rating */}
        <div
          className="animate-fade-in-up flex items-center gap-3"
          style={{ animationDelay: "0.8s" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://framerusercontent.com/images/pTj1hh791hCixy7zoKaWdVhM4.svg"
            alt="stars"
            width={96}
            height={16}
            style={{ display: "block" }}
          />
          <span
            style={{
              color: "rgb(167,173,190)",
              fontSize: 14,
              fontFamily: "'Rethink Sans', sans-serif",
            }}
          >
            4.9/5 From 3,602 Customers
          </span>
        </div>

        {/* Brand logo marquee */}
        <div
          className="animate-fade-in-up w-full max-w-[900px] overflow-hidden relative"
          style={{
            animationDelay: "0.9s",
            maskImage:
              "linear-gradient(to right, rgba(0,0,0,0) 0%, rgb(0,0,0) 12.5%, rgb(0,0,0) 87.5%, rgba(0,0,0,0) 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, rgba(0,0,0,0) 0%, rgb(0,0,0) 12.5%, rgb(0,0,0) 87.5%, rgba(0,0,0,0) 100%)",
          }}
        >
          <div className="flex animate-marquee" style={{ gap: 14 }}>
            {[...brandLogos, ...brandLogos, ...brandLogos].map((logo, i) => (
              <div
                key={i}
                className="flex-shrink-0"
                style={{ width: 126, height: 42, position: "relative" }}
              >
                <Image
                  src={logo}
                  alt="Brand"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
