import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import HeaderParticles from "./HeaderParticles";

const projects = [
  {
    title: "Clever — Saas Landing Page",
    tag: "Agency",
    description:
      "Clever is a modern SaaS landing page template designed to showcase your software features effortlessly. With clean design, responsive layout, and optimized performance.",
    link: "/works/clever-agency-website",
    image:
      "https://framerusercontent.com/images/R3a6qleEu0SSBPYhilnNMnz4n5k.jpg",
  },
  {
    title: "Genius — SaaS Landing Page",
    tag: "Saas",
    description:
      "Genius is a minimal SaaS landing page template, designed to be modern, simple, and easily adaptable to any brand.",
    link: "/works/genius-saas-landing-page",
    image: "https://framerusercontent.com/images/FeUox1vTy9XE506zYzzjGi3oc.jpg",
  },
  {
    title: "Sap - SaaS Website Template",
    tag: "Saas",
    description:
      "SAP is a landing page template designed to showcase SaaS and app information effectively.",
    link: "/works/sap-saas-website-template",
    image:
      "https://framerusercontent.com/images/WtqxqF0rU8Wuwz43erARYa8rL8.png",
  },
  {
    title: "Waitlisty — Waitlist Landing Page",
    tag: "Waitlist",
    description:
      "The ideal template for crafting a sleek and efficient waitlist landing page.",
    link: "/works/waitlisty-waitlist-landing-page",
    image:
      "https://framerusercontent.com/images/MIzYyZDtkQR2vF30r6pG3uFj8GM.png",
  },
];

export default function Works() {
  return (
    <section id="work" className="py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="relative text-center mb-14">
          <HeaderParticles />
          <span className="relative z-10 section-tag mb-4 inline-flex">
            Works
          </span>
          <h2
            className="text-[28px] md:text-[32px] lg:text-[42px] font-bold leading-[1.2] mt-4 mb-4"
            style={{ fontFamily: "var(--font-rethink-sans), sans-serif" }}
          >
            Explore Our Recent Projects
          </h2>
          <p className="text-[#6d7792] text-[17px] max-w-[600px] mx-auto leading-[1.5]">
            Browse through our portfolio showcasing diverse, innovative web
            design projects and client successes.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {projects.map((project, i) => (
            <ScrollReveal key={i} delay={i * 110}>
              <Link
                href={project.link}
                className="group rounded-2xl border border-[#0e122e] bg-[#000529]/50 overflow-hidden card-hover block h-full"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[13px] text-[#3362ff] px-3 py-1 rounded-full border border-[#161c44] bg-[#0e122e]">
                      {project.tag}
                    </span>
                  </div>
                  <h3
                    className="text-[20px] font-semibold mb-2"
                    style={{
                      fontFamily: "var(--font-rethink-sans), sans-serif",
                    }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-[#6d7792] text-[15px] leading-[1.6]">
                    {project.description}
                  </p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* View All */}
        <div className="text-center">
          <Link
            href="/works"
            className="btn-secondary inline-flex items-center gap-2 px-7 py-3 text-[15px]"
          >
            View All Works
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
