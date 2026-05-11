import Link from "next/link";

const checkItems = ["Customized design", "Ongoing support", "Fast delivery"];

export default function CTA() {
  return (
    <section id="cta" className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="relative rounded-2xl overflow-hidden border border-[#161c44] bg-gradient-to-b from-[#000a3a] to-[#000319] px-8 py-16 md:py-24 text-center">
          {/* Glow effects */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#003bff]/20 rounded-full blur-[100px]" />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#003bff]/10 rounded-full blur-[100px]" />

          <div className="relative z-10">
            <h2
              className="text-[28px] md:text-[36px] lg:text-[48px] font-bold leading-[1.2] mb-6"
              style={{ fontFamily: "var(--font-rethink-sans), sans-serif" }}
            >
              Start Your Project
            </h2>
            <p className="text-[#a7adbe] text-[17px] md:text-[20px] leading-[1.5] mb-8 max-w-[500px] mx-auto">
              Contact us today to start crafting your exceptional and customized
              website solution.
            </p>

            {/* Check items */}
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              {checkItems.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-[#ccd7ff] text-[15px]"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="2.5"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-[16px]"
            >
              Start a Project
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
