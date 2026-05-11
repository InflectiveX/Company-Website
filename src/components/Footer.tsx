import Image from "next/image";
import Link from "next/link";

const homeLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Pricings", href: "#pricing" },
  { label: "Tools", href: "#tools" },
  { label: "Works", href: "#work", badge: true },
];

const otherLinks = [
  { label: "Works", href: "/works" },
  { label: "Blogs", href: "/blogs" },
  { label: "Timeline", href: "/timeline" },
  { label: "Waitlist", href: "/waitlist" },
  { label: "Privacy policy", href: "/privacy-policy" },
];

const contactLinks = [
  { label: "Contact", href: "/contact" },
  { label: "FAQ's", href: "#faq" },
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://in.linkedin.com/",
    icon: "https://framerusercontent.com/images/EeUrJQfpXibXJa3MotZvgAm9tsY.svg",
  },
  {
    label: "X / Twitter",
    href: "https://x.com/Praha37v",
    icon: "https://framerusercontent.com/images/fUwXkleZJbkDUDDvw93zVo3gnls.svg",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    icon: "https://framerusercontent.com/images/iBEROwOJyQaiqZZ4k8N5Sj51w.svg",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#0e122e] bg-[#000319]">
      {/* CTA Row */}
      <div className="max-w-[1200px] mx-auto px-6 py-12 border-b border-[#0e122e]">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-[400px]">
            <h3
              className="text-[24px] md:text-[28px] font-bold mb-3"
              style={{ fontFamily: "var(--font-rethink-sans), sans-serif" }}
            >
              Book a Call For Free Consultation
            </h3>
            <p className="text-[#6d7792] text-[15px] leading-[1.6]">
              Experienced team delivering exceptional digital solutions tailored
              to your brand.
            </p>
          </div>
          <Link
            href="/contact"
            className="btn-primary inline-flex items-center gap-2 px-7 py-3 text-[15px]"
          >
            Contact Us
            <svg
              width="16"
              height="16"
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

      {/* Main Footer */}
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="block mb-4">
              <Image
                src="/logo_white.png"
                alt="InflectiveX Logo"
                width={80}
                height={28}
              />
            </Link>
            <p className="text-[#6d7792] text-[15px] leading-[1.6] mb-6 max-w-[280px]">
              Crafting exceptional web design solutions for businesses
              worldwide.
            </p>

            {/* Social Links */}
            <div>
              <p className="text-[#a7adbe] text-[13px] mb-3">
                Our Social Handels
              </p>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full border border-[#161c44] bg-[#0e122e] flex items-center justify-center hover:border-[#3362ff] transition-colors"
                    aria-label={s.label}
                  >
                    <Image src={s.icon} alt={s.label} width={16} height={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Home Links */}
          <div>
            <h4
              className="text-[15px] font-semibold mb-4 text-[#f0f1f4]"
              style={{ fontFamily: "var(--font-rethink-sans), sans-serif" }}
            >
              Home
            </h4>
            <ul className="space-y-3">
              {homeLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[#6d7792] text-[14px] hover:text-white transition-colors flex items-center gap-2"
                  >
                    {link.label}
                    {link.badge && (
                      <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#0e122e] border border-[#161c44] text-[11px] text-[#3362ff]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#3362ff] pulse-dot" />
                        New
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Other Links */}
          <div>
            <h4
              className="text-[15px] font-semibold mb-4 text-[#f0f1f4]"
              style={{ fontFamily: "var(--font-rethink-sans), sans-serif" }}
            >
              Other
            </h4>
            <ul className="space-y-3">
              {otherLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[#6d7792] text-[14px] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Links */}
          <div>
            <h4
              className="text-[15px] font-semibold mb-4 text-[#f0f1f4]"
              style={{ fontFamily: "var(--font-rethink-sans), sans-serif" }}
            >
              Contact
            </h4>
            <ul className="space-y-3">
              {contactLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[#6d7792] text-[14px] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[#0e122e] flex flex-col sm:flex-row items-center justify-between gap-4">
          <a
            href="https://x.com/Praha37v"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6d7792] text-[13px] hover:text-white transition-colors"
          >
            Template By Praha
          </a>
          <p className="text-[#6d7792] text-[13px]">
            © 2026, InflectiveX. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
