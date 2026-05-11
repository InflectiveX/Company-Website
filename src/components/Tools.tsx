import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import HeaderParticles from "./HeaderParticles";

const tools = [
  {
    name: "Figurative",
    real: "Figma",
    description: "Collaborative design and prototyping tool online.",
    link: "https://figma.com",
    color: "#f24e1e",
  },
  {
    name: "FrameX",
    real: "Framer",
    description: "Interactive prototypes for advanced animations website.",
    link: "https://framer.com",
    color: "#0055ff",
  },
  {
    name: "Shopty",
    real: "Shopify",
    description: "E-commerce platform for online shopping websites.",
    link: "https://shopify.com",
    color: "#96bf48",
  },
  {
    name: "Idease",
    real: "Notion",
    description: "All-in-one workspace for notes and project tasks.",
    link: "https://notion.so",
    color: "#ffffff",
  },
  {
    name: "Webflew",
    real: "Webflow",
    description: "Design and develop websites visually with ease.",
    link: "https://webflow.com",
    color: "#4353ff",
  },
  {
    name: "Payflow",
    real: "Stripe",
    description: "Online payment processing platform for business.",
    link: "https://stripe.com",
    color: "#635bff",
  },
];

export default function Tools() {
  return (
    <section id="tools" className="py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="relative text-center mb-14">
          <HeaderParticles />
          <span className="relative z-10 section-tag mb-4 inline-flex">
            Tools
          </span>
          <h2
            className="text-[28px] md:text-[32px] lg:text-[42px] font-bold leading-[1.2] mt-4 mb-4"
            style={{ fontFamily: "var(--font-rethink-sans), sans-serif" }}
          >
            Tools We Utilize for Excellence
          </h2>
          <p className="text-[#6d7792] text-[17px] max-w-[600px] mx-auto leading-[1.5]">
            Discover the advanced tools and technologies we leverage to create
            cutting-edge websites.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, i) => (
            <ScrollReveal key={i} delay={i * 90}>
              <a
                href={tool.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-[#0e122e] bg-[#000529]/50 p-8 card-hover block h-full"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-[16px]"
                    style={{
                      fontFamily: "var(--font-rethink-sans), sans-serif",
                      background: `${tool.color}20`,
                      border: `1px solid ${tool.color}40`,
                    }}
                  >
                    {tool.name[0]}
                  </div>
                  <div>
                    <h3
                      className="text-[17px] font-semibold"
                      style={{
                        fontFamily: "var(--font-rethink-sans), sans-serif",
                      }}
                    >
                      {tool.name}
                    </h3>
                  </div>
                </div>
                <p className="text-[#6d7792] text-[15px] leading-[1.6]">
                  {tool.description}
                </p>
                <div className="mt-4 flex items-center gap-2 text-[#3362ff] text-[14px] opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>{tool.link.replace("https://", "")}</span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
