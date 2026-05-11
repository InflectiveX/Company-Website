"use client";

import { useState } from "react";
import HeaderParticles from "./HeaderParticles";

const LIGHT_BG =
  "https://framerusercontent.com/images/lVMga4rUZKgcCmuJunHZSHKYU.svg";

interface FeatureCard {
  title: string;
  description: string;
  bg: string;
  mark: string;
  markW: number;
  markH: number;
  markPos: React.CSSProperties;
  markDefault: string;
  markHover: string;
  markOrigin: string;
  markObjPos?: string;
}

const cards: FeatureCard[] = [
  {
    title: "Fuel Your Growth",
    description:
      "Empower your business to thrive with our tailored web design solutions.",
    bg: "https://framerusercontent.com/images/IwZBGlxLvoD3uZk4I3zvODaDwBg.svg",
    mark: "https://framerusercontent.com/images/DIfMs4ogKUexdFKUoMgBqQXh3w.svg",
    markW: 24,
    markH: 149,
    markPos: {
      position: "absolute",
      top: 16,
      left: "50%",
      width: 24,
      height: 149,
    },
    markDefault: "translateX(-50%)",
    markHover: "translateX(-50%)",
    markOrigin: "50% 50%",
    markObjPos: "center center",
  },
  {
    title: "98% Client Success Rate",
    description:
      "Join a community of satisfied clients benefiting from our proven excellence.",
    bg: "https://framerusercontent.com/images/dqjPcqbhPWlbjWbQAWRi6RAvA4.svg",
    mark: "https://framerusercontent.com/images/1uqaJBEirOXDXIXzH2B1pb1aq0.svg",
    markW: 48,
    markH: 98,
    markPos: {
      position: "absolute",
      top: 24,
      left: "50%",
      width: 48,
      height: 98,
    },
    markDefault: "translateX(-50%) rotate(-68deg)",
    markHover: "translateX(-50%) rotate(68deg)",
    markOrigin: "61% 80%",
    markObjPos: "center center",
  },
  {
    title: "Lead the Way",
    description:
      "Stay ahead with innovative software solutions crafted by InflectiveX.",
    bg: "https://framerusercontent.com/images/JwTVkwIqGrG75nHNKN2cohkA5I.svg",
    mark: "https://framerusercontent.com/images/OKdsEbEFlzi5exmB1V8dM6Q9TPs.svg",
    markW: 262,
    markH: 231,
    markPos: {
      position: "absolute",
      top: 0,
      left: "50%",
      width: 262,
      height: 231,
    },
    markDefault: "translateX(0%)",
    markHover: "translateX(-50%)",
    markOrigin: "50% 50%",
    markObjPos: "center top",
  },
];

export default function Features() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="features" style={{ padding: "80px 0", overflow: "hidden" }}>
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* â”€â”€ Header text container with glow bg behind it â”€â”€ */}
        <div
          style={{
            position: "relative",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: 40,
          }}
        >
          {/* Glow background SVG â€” absolutely behind the text */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 883,
              height: 320,
              maxWidth: "100%",
              pointerEvents: "none",
              zIndex: 0,
              overflow: "hidden",
              borderRadius: 200,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              decoding="async"
              loading="lazy"
              src="https://framerusercontent.com/images/fXXrEnWUYP7siQQR1XB0guYmQ.svg"
              alt=""
              style={{
                display: "block",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center center",
              }}
            />
            <HeaderParticles />
          </div>

          {/* Pill */}
          <div
            style={{
              position: "relative",
              zIndex: 10,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "6px 16px",
              borderRadius: 999,
              border: "1px solid rgba(204,215,255,0.2)",
              background: "rgba(204,215,255,0.06)",
              marginBottom: 16,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-rethink-sans), sans-serif",
                fontSize: 14,
                fontWeight: 500,
                color: "rgb(204, 215, 255)",
                lineHeight: 1.5,
              }}
            >
              Feature
            </span>
          </div>

          {/* Heading */}
          <h2
            style={{
              position: "relative",
              zIndex: 10,
              fontFamily: "var(--font-rethink-sans), sans-serif",
              fontSize: "clamp(28px, 5vw, 42px)",
              fontWeight: 700,
              lineHeight: "120%",
              color: "#ffffff",
              margin: "0 0 12px 0",
              textAlign: "center",
            }}
          >
            Key Features Overview
          </h2>

          {/* Subtitle */}
          <p
            style={{
              position: "relative",
              zIndex: 10,
              fontFamily: "var(--font-rethink-sans), sans-serif",
              fontSize: 16,
              fontWeight: 400,
              lineHeight: "150%",
              color: "rgb(109, 119, 146)",
              textAlign: "center",
              maxWidth: 560,
              margin: 0,
            }}
          >
            Explore the comprehensive features that set InflectiveX apart in
            software development excellence.
          </p>
        </div>

        {/* â”€â”€ Feature Cards â”€â”€ */}
        <div
          style={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 16,
          }}
          className="features-grid"
        >
          {cards.map((card, i) => {
            const isHov = hovered === i;
            return (
              <div
                key={i}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  position: "relative",
                  borderRadius: 20,
                  overflow: "hidden",
                  minHeight: 367,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  cursor: "default",
                  border: "1px solid rgb(14, 18, 46)",
                  background:
                    "linear-gradient(rgb(0, 4, 31) 0%, rgba(0, 4, 31, 0) 100%)",
                }}
              >
                {/* Background layer + mark */}
                <div
                  style={{ position: "absolute", inset: 0, borderRadius: 20 }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    decoding="async"
                    loading="lazy"
                    src={card.bg}
                    alt="Feature Card Background"
                    style={{
                      display: "block",
                      width: "100%",
                      height: "100%",
                      borderRadius: "inherit",
                      objectPosition: "center center",
                      objectFit: "cover",
                    }}
                  />
                  {/* Animated mark */}
                  <div
                    style={{
                      ...card.markPos,
                      transform: isHov ? card.markHover : card.markDefault,
                      transformOrigin: card.markOrigin,
                      transition: "transform 0.55s cubic-bezier(0.44,0,0.56,1)",
                      willChange: "transform",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        borderRadius: "inherit",
                      }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        decoding="async"
                        loading="lazy"
                        src={card.mark}
                        alt=""
                        style={{
                          display: "block",
                          width: "100%",
                          height: "100%",
                          borderRadius: "inherit",
                          objectPosition: card.markObjPos ?? "center center",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Light Bg 1 â€” always opacity 1 */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: 20,
                    opacity: 1,
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    decoding="async"
                    loading="lazy"
                    src={LIGHT_BG}
                    alt=""
                    style={{
                      display: "block",
                      width: "100%",
                      height: "100%",
                      borderRadius: "inherit",
                      objectFit: "cover",
                    }}
                  />
                </div>

                {/* Light Bg 2 â€” fades in on hover */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: 20,
                    opacity: isHov ? 1 : 0,
                    transition: "opacity 0.4s ease",
                    willChange: "opacity",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    decoding="async"
                    loading="lazy"
                    src={LIGHT_BG}
                    alt=""
                    style={{
                      display: "block",
                      width: "100%",
                      height: "100%",
                      borderRadius: "inherit",
                      objectFit: "cover",
                    }}
                  />
                </div>

                {/* Text */}
                <div
                  style={{
                    position: "relative",
                    zIndex: 10,
                    padding: "32px 24px",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-rethink-sans), sans-serif",
                      fontSize: 20,
                      fontWeight: 700,
                      lineHeight: "150%",
                      color: "rgb(255,255,255)",
                      margin: 0,
                    }}
                  >
                    {card.title}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-rethink-sans), sans-serif",
                      fontSize: 15,
                      fontWeight: 500,
                      lineHeight: "150%",
                      color: "rgb(109, 119, 146)",
                      margin: 0,
                    }}
                  >
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .features-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
