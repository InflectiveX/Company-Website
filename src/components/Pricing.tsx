import Image from "next/image";
import Link from "next/link";
import HeaderParticles from "./HeaderParticles";

const features = [
  "Enjoy limitless design requests",
  "One request at a time",
  "Average 48 hours delivery",
  "Unlimited brands",
  "Easy credit-card payments",
  "Pause or cancel anytime",
];

const plans = [
  {
    name: "Basic",
    price: "$1,995",
    period: "/m",
    badge: "15% Off",
    subtitle: "Pause or cancel anytime.",
    icon: "https://framerusercontent.com/images/q8PCK0iIVKHMPnxvnPcndYxbRHo.svg",
    included: [true, true, false, false, false, false],
    popular: false,
  },
  {
    name: "Standard",
    price: "$3,995",
    period: "/m",
    badge: "15% Off",
    subtitle: "Pause or cancel anytime.",
    icon: "https://framerusercontent.com/images/TeFFctk0IZbLbLfEaDK7CzFyrUc.svg",
    included: [true, true, true, true, false, false],
    popular: true,
  },
  {
    name: "Pro",
    price: "$5,995",
    period: "/m",
    badge: "15% Off",
    subtitle: "Pause or cancel anytime.",
    icon: "https://framerusercontent.com/images/Pl7lVMFgE2fw0SJ7QVYa9taxO8g.svg",
    included: [true, true, true, true, true, true],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="relative text-center mb-14">
          <HeaderParticles />
          <span className="relative z-10 section-tag mb-4 inline-flex">
            Pricing
          </span>
          <h2
            className="text-[28px] md:text-[32px] lg:text-[42px] font-bold leading-[1.2] mt-4 mb-4"
            style={{ fontFamily: "var(--font-rethink-sans), sans-serif" }}
          >
            Transparent Pricing Options
          </h2>
          <p className="text-[#6d7792] text-[17px] max-w-[600px] mx-auto leading-[1.5]">
            Explore our competitive pricing plans designed to meet diverse
            business needs and budgets.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-2xl border p-8 ${
                plan.popular
                  ? "border-[#3362ff]/50 bg-gradient-to-b from-[#000a3a] to-[#000529]"
                  : "border-[#0e122e] bg-[#000529]/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#3362ff] rounded-full text-[12px] font-medium">
                  Most Popular
                </div>
              )}

              <div className="flex items-center gap-3 mb-4">
                <Image src={plan.icon} alt={plan.name} width={40} height={40} />
                <div>
                  <h3
                    className="text-[18px] font-semibold"
                    style={{
                      fontFamily: "var(--font-rethink-sans), sans-serif",
                    }}
                  >
                    {plan.name}
                  </h3>
                </div>
              </div>

              <div className="flex items-baseline gap-1 mb-1">
                <span
                  className="text-[36px] font-bold"
                  style={{
                    fontFamily: "var(--font-rethink-sans), sans-serif",
                  }}
                >
                  {plan.price}
                </span>
                <span className="text-[#6d7792] text-[16px]">
                  {plan.period}
                </span>
                <span className="ml-2 px-2 py-0.5 bg-[#0e122e] rounded-full text-[12px] text-[#3362ff]">
                  {plan.badge}
                </span>
              </div>
              <p className="text-[#6d7792] text-[14px] mb-6">{plan.subtitle}</p>

              <div className="space-y-3 mb-8">
                {features.map((feature, j) => (
                  <div key={j} className="flex items-center gap-3">
                    {plan.included[j] ? (
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
                    ) : (
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#6d7792"
                        strokeWidth="2"
                      >
                        <path d="M18 6L6 18M6 6l12 12" />
                      </svg>
                    )}
                    <span
                      className={`text-[14px] ${
                        plan.included[j] ? "text-[#ccd7ff]" : "text-[#6d7792]"
                      }`}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <Link
                  href="/contact"
                  className="btn-primary block text-center px-6 py-3 text-[15px]"
                >
                  Get Started
                </Link>
                <a
                  href="https://cal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary block text-center px-6 py-3 text-[15px]"
                >
                  Book a Call
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
