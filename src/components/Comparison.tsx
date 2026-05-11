import Image from "next/image";
import HeaderParticles from "./HeaderParticles";

const rows: { other: string; arise: string }[] = [
  {
    other: "Experienced team delivering standard solutions.",
    arise: "Highly skilled specialists delivering customized solutions.",
  },
  {
    other: "Offers standard, template-based designs.",
    arise: "Offers innovative, bespoke website designs.",
  },
  {
    other: "Limited post-launch support and updates.",
    arise: "Comprehensive post-launch support and updates.",
  },
  {
    other: "Basic performance with average loading times.",
    arise: "Optimal performance with fast loading times.",
  },
  {
    other: "Basic SEO practices implemented.",
    arise: "Advanced SEO tactics for enhanced online visibility.",
  },
];

// X icon (red) from Framer
const XIcon = () => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src="https://framerusercontent.com/images/jdzexwVUUG0v9Tn88L57oI3V28w.svg"
    alt="Icon"
    width={24}
    height={24}
    style={{ display: "block", flexShrink: 0 }}
  />
);

// Check icon (blue) from Framer
const CheckIcon = () => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src="https://framerusercontent.com/images/dGO7W1b7kAcYFMMZtWk6Qz0N4Zw.svg"
    alt="Icon"
    width={24}
    height={24}
    style={{ display: "block", flexShrink: 0 }}
  />
);

export default function Comparison() {
  return (
    <section id="comparison" className="py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* ── Header ── */}
        <div className="relative flex flex-col items-center text-center mb-14">
          {/* SVG heading background glow */}
          <div
            className="absolute inset-0 pointer-events-none overflow-hidden"
            style={{ borderRadius: 200 }}
          >
            <HeaderParticles />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://framerusercontent.com/images/IJB1pgcBugatOTAc7yAHhqLQu0.svg"
              alt=""
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
                pointerEvents: "none",
              }}
            />
          </div>

          {/* Pill */}
          <div
            className="relative z-10 inline-flex items-center px-4 py-1.5 mb-5 text-[14px] font-medium"
            style={{
              color: "rgb(204,215,255)",
              border: "1px solid rgba(204,215,255,0.15)",
              borderRadius: 100,
              backgroundColor: "rgba(204,215,255,0.05)",
            }}
          >
            Comparison
          </div>

          <h2
            className="relative z-10 text-white font-bold leading-[1.2] mb-4"
            style={{
              fontFamily: "'Rethink Sans', sans-serif",
              fontSize: "clamp(28px, 4vw, 48px)",
            }}
          >
            Choosing InflectiveX Over Others
          </h2>
          <p
            className="relative z-10 max-w-[560px] leading-[1.6]"
            style={{
              color: "rgb(167,173,190)",
              fontSize: 17,
              textAlign: "center",
            }}
          >
            See why InflectiveX stands out with superior service, innovation,
            and client satisfaction benchmarks.
          </p>
        </div>

        {/* ── Comparison Table ── */}
        <div
          className="relative rounded-2xl overflow-hidden"
          style={{
            border: "1px solid rgba(255,255,255,0.06)",
            backgroundColor: "rgba(255,255,255,0.02)",
          }}
        >
          {/* Column headers */}
          <div className="grid grid-cols-2 relative">
            {/* Other Agencies header */}
            <div
              className="flex items-center gap-4 px-6 py-5"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
            >
              <h3
                style={{
                  fontFamily: "'Rethink Sans', sans-serif",
                  fontSize: 30,
                  fontWeight: 700,
                  lineHeight: "120%",
                  color: "rgb(255,255,255)",
                }}
              >
                Other Agencies
              </h3>
            </div>

            {/* Arise header */}
            <div
              className="flex items-center px-6 py-5"
              style={{
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                borderLeft: "1px solid rgba(255,255,255,0.06)",
                background:
                  "linear-gradient(135deg, rgba(76,117,255,0.08) 0%, rgba(26,79,255,0.04) 100%)",
              }}
            >
              <div className="ml-10">
                <Image
                  src="/logo_white.png"
                  alt="InflectiveX Logo"
                  width={80}
                  height={80}
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>

            {/* VS badge — centered between the two header columns */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 20,
                width: 71,
                height: 70,
                pointerEvents: "none",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://framerusercontent.com/images/UaNueSPHaU4uAnBboSMnR7WEc8.svg"
                alt="VS"
                style={{ width: "100%", height: "100%", display: "block" }}
              />
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-2 relative"
              style={{
                borderBottom:
                  i < rows.length - 1
                    ? "1px solid rgba(255,255,255,0.06)"
                    : "none",
              }}
            >
              {/* Background lines */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://framerusercontent.com/images/AdPfwI4laWSMfyInnvNTBjrcR0.svg"
                alt=""
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  opacity: 0.15,
                  pointerEvents: "none",
                }}
              />

              {/* Other agencies cell */}
              <div
                className="flex items-center gap-3 px-6 py-5 relative z-10"
                style={{ minHeight: 72 }}
              >
                <XIcon />
                <p
                  style={{
                    color: "rgb(167,173,190)",
                    fontSize: 15,
                    lineHeight: 1.6,
                  }}
                >
                  {row.other}
                </p>
              </div>

              {/* Arise cell */}
              <div
                className="flex items-center gap-3 px-6 py-5 relative z-10"
                style={{
                  borderLeft: "1px solid rgba(255,255,255,0.06)",
                  minHeight: 72,
                  background:
                    "linear-gradient(90deg, rgba(76,117,255,0.10) 0%, rgba(26,79,255,0.04) 100%)",
                }}
              >
                {/* Gradient shine line */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 1,
                    background:
                      "linear-gradient(90deg, rgba(76,117,255,0.5) 0%, rgba(26,79,255,0.1) 100%)",
                  }}
                />
                <CheckIcon />
                <p
                  style={{
                    color: "rgb(196,200,212)",
                    fontSize: 15,
                    lineHeight: 1.6,
                  }}
                >
                  {row.arise}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
