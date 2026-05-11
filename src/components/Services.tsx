import Link from "next/link";
import HeaderParticles from "./HeaderParticles";

const webDesignFeatures = [
  "Customized visual aesthetics",
  "User-centric design approach",
  "Responsive and mobile-friendly",
  "Intuitive user interface (UI)",
  "Interactive and engaging layouts",
];

const webDevFeatures = [
  "Custom backend development",
  "Ongoing maintenance and support",
  "Security and data protection",
  "Content management systems (CMS)",
  "API integration and development",
];

const otherServices = [
  {
    name: "Logo Design",
    icon: "https://framerusercontent.com/images/PV214Eg5kQBlxA4OdYCqYYKq9s.svg",
  },
  {
    name: "Social Post Design",
    icon: "https://framerusercontent.com/images/eEyGO0E5p329x3skPa4SJd3Sljc.svg",
  },
  {
    name: "Branding",
    icon: "https://framerusercontent.com/images/KAnKldKdyTdqxnqkkB9vAlYQEE.svg",
  },
  {
    name: "Packaging Design",
    icon: "https://framerusercontent.com/images/9W41EHECfANea3t1fLy6515uTE.svg",
  },
  {
    name: "SEO",
    icon: "https://framerusercontent.com/images/3OKHRpNShTPkyBmpb2eEdKirNa0.svg",
  },
  {
    name: "Content Writing",
    icon: "https://framerusercontent.com/images/bBqwjpNcto0zIWrxwad7eovJJEk.svg",
  },
];

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#3362ff"
      strokeWidth="2.5"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="relative text-center mb-14">
          <HeaderParticles />
          <span className="relative z-10 section-tag mb-4 inline-flex">
            Services
          </span>
          <h2
            className="text-[28px] md:text-[32px] lg:text-[42px] font-bold leading-[1.2] mt-4 mb-4"
            style={{ fontFamily: "var(--font-rethink-sans), sans-serif" }}
          >
            Explore Our Core Services
          </h2>
          <p className="text-[#6d7792] text-[17px] max-w-[600px] mx-auto leading-[1.5]">
            Discover our comprehensive range of services tailored to enhance
            your digital presence.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* Web Design */}
          <div className="rounded-2xl border border-[#0e122e] bg-[#000529]/50 p-8">
            <h3
              className="text-[24px] font-bold mb-3"
              style={{ fontFamily: "var(--font-rethink-sans), sans-serif" }}
            >
              Web Design
            </h3>
            <p className="text-[#6d7792] text-[15px] leading-[1.6] mb-6">
              Crafting visually captivating websites that resonate with your
              audience and elevate your brand identity.
            </p>
            <div className="space-y-3 mb-8">
              {webDesignFeatures.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckIcon />
                  <span className="text-[#ccd7ff] text-[15px]">{feature}</span>
                </div>
              ))}
            </div>
            <Link
              href="/contact"
              className="btn-primary inline-flex px-7 py-3 text-[15px]"
            >
              Book a Call
            </Link>
          </div>

          {/* Web Development */}
          <div className="rounded-2xl border border-[#0e122e] bg-[#000529]/50 p-8">
            <h3
              className="text-[24px] font-bold mb-3"
              style={{ fontFamily: "var(--font-rethink-sans), sans-serif" }}
            >
              Web Development
            </h3>
            <p className="text-[#6d7792] text-[15px] leading-[1.6] mb-6">
              Building robust websites with advanced functionality and seamless
              performance, tailored to your business needs.
            </p>
            <div className="space-y-3 mb-8">
              {webDevFeatures.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckIcon />
                  <span className="text-[#ccd7ff] text-[15px]">{feature}</span>
                </div>
              ))}
            </div>
            <Link
              href="/contact"
              className="btn-primary inline-flex px-7 py-3 text-[15px]"
            >
              Book a Call
            </Link>
          </div>
        </div>

        {/* Other Services Marquee */}
        <div className="relative overflow-hidden py-6 border-t border-b border-[#0e122e]">
          <div className="flex animate-marquee">
            {[...otherServices, ...otherServices, ...otherServices].map(
              (service, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 mx-8 flex items-center gap-3"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={service.icon}
                    alt={service.name}
                    width={20}
                    height={20}
                  />
                  <span className="text-[#a7adbe] text-[15px] whitespace-nowrap">
                    {service.name}
                  </span>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
