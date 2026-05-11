"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Works", href: "/works" },
  { label: "Blogs", href: "/blogs" },
  { label: "Timeline", href: "/timeline" },
  { label: "Waitlist", href: "/waitlist" },
];

const allPages = [
  { label: "Home", href: "/" },
  { label: "Works", href: "/works" },
  { label: "Blogs", href: "/blogs" },
  { label: "Timeline", href: "/timeline" },
  { label: "Waitlist", href: "/waitlist" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [allPagesOpen, setAllPagesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setAllPagesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      <div className="relative flex items-center justify-evenly w-full px-8 h-[80px]">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0 z-10">
          <Image
            src="/logonewtansoaent.png"
            alt="Logo"
            width={95}
            height={32}
            className=" bg-white rounded-sm "
          />
        </Link>

        {/* Center Pill — Desktop */}
        <div
          className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-1 px-2 py-2"
          style={{
            backgroundColor: "rgba(10, 13, 31, 0.8)",
            backdropFilter: "blur(10px)",
            borderRadius: "100px",
            border: "1px solid rgb(35, 45, 107)",
          }}
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className="px-[14px] py-[7px] text-[15px] font-medium transition-colors rounded-full"
                style={{
                  backgroundColor: isActive ? "rgb(19, 24, 57)" : "transparent",
                  border: `1px solid ${isActive ? "rgb(31, 39, 95)" : "transparent"}`,
                  color: isActive ? "rgb(255, 255, 255)" : "rgb(167, 173, 190)",
                  fontFamily: "'Rethink Sans', sans-serif",
                  fontWeight: 500,
                  fontSize: "15px",
                }}
              >
                {link.label}
              </Link>
            );
          })}

          {/* All Pages Dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setAllPagesOpen((v) => !v)}
              className="flex items-center gap-2 px-[14px] py-[7px] rounded-full transition-colors hover:bg-[#13183980]"
              style={{
                color: "rgb(167, 173, 190)",
                fontFamily: "'Rethink Sans', sans-serif",
                fontWeight: 500,
                fontSize: "15px",
                border: "1px solid transparent",
              }}
            >
              All Pages
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                style={{
                  transition: "transform 0.2s",
                  transform: allPagesOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
              >
                <path
                  d="M2 4L6 8L10 4"
                  stroke="rgb(167, 173, 190)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {allPagesOpen && (
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 mt-2 py-2 min-w-[160px] flex flex-col z-50"
                style={{
                  backgroundColor: "rgba(10, 13, 31, 0.95)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgb(35, 45, 107)",
                  borderRadius: "16px",
                }}
              >
                {allPages.map((page) => (
                  <Link
                    key={page.label}
                    href={page.href}
                    onClick={() => setAllPagesOpen(false)}
                    className="px-4 py-2 text-[14px] font-medium transition-colors hover:text-white"
                    style={{
                      color:
                        pathname === page.href
                          ? "rgb(255,255,255)"
                          : "rgb(167, 173, 190)",
                      fontFamily: "'Rethink Sans', sans-serif",
                    }}
                  >
                    {page.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Contact Us CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center z-10 text-white text-[15px] font-medium transition-opacity hover:opacity-90"
          style={{
            background:
              "linear-gradient(rgb(76, 117, 255) 0%, rgb(26, 79, 255) 100%)",
            borderRadius: "100px",
            padding: "14px 20px",
            fontFamily: "'Rethink Sans', sans-serif",
            fontWeight: 500,
            fontSize: "15px",
          }}
        >
          Contact Us
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white p-2 z-10"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {mobileOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav
          className="md:hidden px-6 py-4 flex flex-col gap-2"
          style={{
            backgroundColor: "rgba(10, 13, 31, 0.95)",
            backdropFilter: "blur(12px)",
            borderTop: "1px solid rgb(35, 45, 107)",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="py-2 text-[15px] font-medium transition-colors"
              style={{
                color:
                  pathname === link.href
                    ? "rgb(255,255,255)"
                    : "rgb(167, 173, 190)",
                fontFamily: "'Rethink Sans', sans-serif",
              }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-2 text-center text-white text-[15px] font-medium py-3 rounded-full"
            style={{
              background:
                "linear-gradient(rgb(76, 117, 255) 0%, rgb(26, 79, 255) 100%)",
              fontFamily: "'Rethink Sans', sans-serif",
            }}
            onClick={() => setMobileOpen(false)}
          >
            Contact Us
          </Link>
        </nav>
      )}
    </header>
  );
}
