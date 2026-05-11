"use client";

import { useState } from "react";
import Link from "next/link";
import HeaderParticles from "./HeaderParticles";

const faqs = [
  {
    q: "What services does InflectiveX offer?",
    a: "InflectiveX offers comprehensive software development services, including custom web and mobile app development, cloud solutions, branding, SEO, and ongoing support to help businesses establish a strong digital presence.",
  },
  {
    q: "How long does a typical project take?",
    a: "Project timelines vary based on scope and complexity. A typical website design and development project takes 4-8 weeks from discovery to launch, ensuring thorough quality checks at each stage.",
  },
  {
    q: "Do you offer ongoing support after the website launch?",
    a: "Yes, we offer comprehensive post-launch support packages to ensure your website remains up-to-date, secure, and performing optimally. Our team is available for maintenance, updates, and technical assistance.",
  },
  {
    q: "Can I see examples of your previous work?",
    a: "Absolutely! You can explore our portfolio on the Works page, which showcases a diverse range of projects across various industries and design styles.",
  },
  {
    q: "What is your pricing structure like?",
    a: "We offer transparent, tiered pricing plans starting at $1,995/month. Each plan includes different levels of service, and all plans can be paused or cancelled at any time.",
  },
  {
    q: "Do you provide hosting services?",
    a: "While we don't provide hosting directly, we can recommend and help set up reliable hosting solutions that best match your project's needs and budget.",
  },
  {
    q: "How do you handle revisions during the process?",
    a: "We include revision rounds at each phase of the project. Our collaborative approach ensures you're involved throughout the process, minimizing the need for major revisions at the end.",
  },
  {
    q: "Can you help with content creation for my website?",
    a: "Yes, we offer content creation services including copywriting, photography direction, and content strategy to ensure your website communicates effectively with your target audience.",
  },
  {
    q: "Is SEO included in your web design packages?",
    a: "All our web designs are built with SEO best practices in mind, including proper heading structure, meta tags, and performance optimization. Advanced SEO services are available in our higher-tier packages.",
  },
  {
    q: "What makes InflectiveX different from other agencies?",
    a: "InflectiveX stands out through our client-centric approach, expert engineering team, transparent communication, and commitment to delivering innovative, bespoke solutions. We prioritize long-term relationships and measurable results.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const col1 = faqs.slice(0, 5);
  const col2 = faqs.slice(5, 10);

  const toggle = (idx: number) => setOpenIndex(openIndex === idx ? null : idx);

  const FaqItem = ({ item, idx }: { item: (typeof faqs)[0]; idx: number }) => (
    <div className="border-b border-[#0e122e]">
      <button
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
        onClick={() => toggle(idx)}
      >
        <span
          className="text-[16px] font-medium text-white"
          style={{ fontFamily: "var(--font-rethink-sans), sans-serif" }}
        >
          {item.q}
        </span>
        <span
          className={`flex-shrink-0 w-7 h-7 rounded-full border border-[#161c44] flex items-center justify-center transition-transform ${
            openIndex === idx ? "rotate-45" : ""
          }`}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#a7adbe"
            strokeWidth="2.5"
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>
      {openIndex === idx && (
        <div className="pb-5">
          <p className="text-[#6d7792] text-[15px] leading-[1.6]">{item.a}</p>
        </div>
      )}
    </div>
  );

  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="relative text-center mb-14">
          <HeaderParticles />
          <span className="section-tag mb-4 inline-flex">FAQ&apos;s</span>
          <h2
            className="text-[28px] md:text-[32px] lg:text-[42px] font-bold leading-[1.2] mt-4 mb-4"
            style={{ fontFamily: "var(--font-rethink-sans), sans-serif" }}
          >
            Frequently Asked Questions
          </h2>
          <p className="text-[#6d7792] text-[17px] max-w-[600px] mx-auto leading-[1.5]">
            Answers to common questions about our services, processes, and what
            sets us apart.
          </p>
        </div>

        {/* FAQ Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-16 mb-12">
          <div>
            {col1.map((item, i) => (
              <FaqItem key={i} item={item} idx={i} />
            ))}
          </div>
          <div>
            {col2.map((item, i) => (
              <FaqItem key={i} item={item} idx={i + 5} />
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl border border-[#0e122e] bg-[#000529]/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#0e122e] flex items-center justify-center">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#3362ff"
                strokeWidth="2"
              >
                <path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span
              className="text-[16px] font-medium"
              style={{ fontFamily: "var(--font-rethink-sans), sans-serif" }}
            >
              Still Have a Question
            </span>
          </div>
          <Link href="/contact" className="btn-primary px-6 py-2.5 text-[15px]">
            Ask Question
          </Link>
        </div>
      </div>
    </section>
  );
}
