import Image from "next/image";
import HeaderParticles from "./HeaderParticles";

const stats = [
  { number: "100+", label: "Happy Customers" },
  { number: "30+", label: "Projects Completed" },
  { number: "0+", label: "Years of Experience" },
  { number: "36+", label: "Team Members" },
];

const logos = [
  "tX5t5zvtBHZvqfRjy8qFQVo3XrM.svg",
  "eMzGPVJMpdDgggvfg1Dlk0Cqw8.svg",
  "2IxQ8yBsSOmnAJkXm8PlYSuIA.svg",
  "6gn4mx43rDdkfL06zwMuuMxn04I.svg",
  "zX6uTbw5hlEkPCsvSrYbEkCnaF0.svg",
  "Sf2OtVBvA8GHEI8OJADHK5tTAw.svg",
  "44hqjxw022dRKGk9woaDqsq5YYE.svg",
  "eH1eLwU7Bo5VgQWXCjn8wOCu9NE.svg",
  "AVjWrX3JWvNDyyeoMiiET9amMjE.svg",
  "ebjcb9K2rNqqTN55ko4CJbLpfM.svg",
  "OHwvUQvHGCZshMblM9hINVvmbs.svg",
  "hG35hyKVsCUbLCg0Z7tGb5y6Lg.svg",
];

export default function Results() {
  return (
    <section id="result-analytics" className="py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="relative text-center mb-14">
          <HeaderParticles />
          <span className="relative z-10 section-tag mb-4 inline-flex">
            Results &amp; Analytics
          </span>
          <h2
            className="text-[28px] md:text-[32px] lg:text-[42px] font-bold leading-[1.2] mt-4 mb-4"
            style={{ fontFamily: "var(--font-rethink-sans), sans-serif" }}
          >
            Performance Insights and Analytics Overview
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="rounded-2xl border border-[#0e122e] bg-[#000529]/50 p-8 text-center"
            >
              <div
                className="text-[42px] font-bold mb-2 text-white"
                style={{ fontFamily: "var(--font-rethink-sans), sans-serif" }}
              >
                {stat.number}
              </div>
              <p className="text-[#6d7792] text-[14px]">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Trusted Brands */}
        <div className="text-center mb-8">
          <p className="text-[#a7adbe] text-[15px]">
            Trusted by Leading Brands
          </p>
        </div>

        {/* Logo Marquee */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#000319] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#000319] to-transparent z-10" />
          <div className="flex animate-marquee">
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="flex-shrink-0 mx-8 opacity-50 hover:opacity-100 transition-opacity"
              >
                <Image
                  src={`https://framerusercontent.com/images/${logo}`}
                  alt="Brand"
                  width={120}
                  height={40}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
