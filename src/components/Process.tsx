import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import HeaderParticles from "./HeaderParticles";

const steps = [
  {
    step: "Step 01",
    title: "Discovery Phase",
    description:
      "Understanding your brand, objectives, and target audience to define project goals.",
    icon: "https://framerusercontent.com/images/jJ6toYSKz9DtEMWJDpteC9pF1HM.svg",
  },
  {
    step: "Step 02",
    title: "Design Concept",
    description:
      "Creating initial design concepts based on insights gathered during the discovery phase.",
    icon: "https://framerusercontent.com/images/AXgyjaoddAArynSnELMK0OyXdTc.svg",
  },
  {
    step: "Step 03",
    title: "Development & Testing",
    description:
      "Building and refining the website, ensuring functionality and compatibility across devices.",
    icon: "https://framerusercontent.com/images/7YvpqdgJKVCiaafRYxXpuUlwE.svg",
  },
  {
    step: "Step 04",
    title: "Launch & Support",
    description:
      "Deploying the finalized website and providing ongoing support to ensure long-term success.",
    icon: "https://framerusercontent.com/images/JQVOSvT8HSfik1as2hcjm0MO3I.svg",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="relative text-center mb-14">
          <HeaderParticles />
          <span className="relative z-10 section-tag mb-4 inline-flex">
            Process
          </span>
          <h2
            className="text-[28px] md:text-[32px] lg:text-[42px] font-bold leading-[1.2] mt-4 mb-4"
            style={{ fontFamily: "var(--font-rethink-sans), sans-serif" }}
          >
            Our Design Process
          </h2>
          <p className="text-[#6d7792] text-[17px] max-w-[600px] mx-auto leading-[1.5]">
            Explore our streamlined approach to creating bespoke websites that
            align with your goals.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, i) => (
            <ScrollReveal key={i} delay={i * 120}>
              <div className="relative rounded-2xl border border-[#0e122e] bg-[#000529]/50 p-8 card-hover h-full">
                <div className="text-[#3362ff] text-[13px] font-medium mb-4 uppercase tracking-wider">
                  {item.step}
                </div>
                <div className="w-12 h-12 rounded-xl bg-[#0e122e] flex items-center justify-center mb-5">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={24}
                    height={24}
                  />
                </div>
                <h3
                  className="text-[18px] font-semibold mb-3"
                  style={{ fontFamily: "var(--font-rethink-sans), sans-serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-[#6d7792] text-[15px] leading-[1.6]">
                  {item.description}
                </p>

                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-[1px] bg-[#0e122e]" />
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
