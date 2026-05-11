"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Works", href: "#work" },
  { label: "Blogs", href: "#blogs" },
  { label: "Timeline", href: "#process" },
  { label: "Waitlist", href: "#cta" },
];

const allPages = [
  { label: "Home", href: "#home" },
  { label: "Works", href: "#work" },
  { label: "Blogs", href: "#blogs" },
  { label: "Timeline", href: "#process" },
  { label: "Waitlist", href: "#cta" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [allPagesOpen, setAllPagesOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const contactBtnRef = useRef<HTMLAnchorElement>(null);
  const [btnOffset, setBtnOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-15% 0px -75% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    const sectionIds = ["home", "work", "blogs", "process", "cta"];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!contactBtnRef.current) return;
      const rect = contactBtnRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

      if (distance < 80) {
        setBtnOffset({ x: distanceX * 0.35, y: distanceY * 0.35 });
      } else {
        setBtnOffset({ x: 0, y: 0 });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

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
      <div className="relative flex items-center justify-between w-full max-w-[1094px] mx-auto px-6 h-[80px]">
        {/* Logo */}
        <Link
          href="/"
          className="flex-shrink-0 z-10 flex items-center justify-center p-0.5 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(76,117,255,0.3)]"
          style={{
            backgroundColor: "rgba(10, 13, 31, 0.8)",
            backdropFilter: "blur(10px)",
            borderRadius: "10px",
            border: "1px solid rgb(35, 45, 107)",
          }}
        >
          <Image
            src="/logo_white.png"
            alt="Logo"
            width={50}
            height={50}
          />
        </Link>

        {/* Center Pill — Desktop */}
        <div
          className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-1 px-2 py-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(76,117,255,0.2)]"
          style={{
            backgroundColor: "rgba(10, 13, 31, 0.8)",
            backdropFilter: "blur(10px)",
            borderRadius: "100px",
            border: "1px solid rgb(35, 45, 107)",
          }}
        >
          {navLinks.map((link) => {
            const isActive = link.href === `#${activeSection}`;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`px-[14px] py-[7px] text-[15px] font-medium transition-all rounded-full border ${isActive ? 'text-white bg-[#131839] border-[#1f275f]' : 'text-[#a7adbe] border-transparent hover:text-white hover:bg-[#13183980]'}`}
                style={{
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
              className="flex items-center gap-2 px-[14px] py-[7px] rounded-full transition-all text-[#a7adbe] hover:text-white hover:bg-[#13183980] border border-transparent"
              style={{
                fontFamily: "'Rethink Sans', sans-serif",
                fontWeight: 500,
                fontSize: "15px",
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
                  stroke="currentColor"
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
                    className={`px-4 py-2 text-[14px] font-medium transition-colors ${pathname === page.href ? 'text-white' : 'text-[#a7adbe] hover:text-white'}`}
                    style={{
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
          ref={contactBtnRef}
          href="/contact"
          className="hidden md:inline-flex items-center z-10 text-white text-[15px] font-medium transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(76,117,255,0.5)]"
          style={{
            background:
              "linear-gradient(rgb(76, 117, 255) 0%, rgb(26, 79, 255) 100%)",
            borderRadius: "100px",
            padding: "14px 20px",
            fontFamily: "'Rethink Sans', sans-serif",
            fontWeight: 500,
            fontSize: "15px",
            transform: `translate(${btnOffset.x}px, ${btnOffset.y}px)`,
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
                  activeSection === link.href.replace('#', '')
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
      {/* Scroll Progress Bar */}
      <div className="absolute bottom-0 left-0 h-[2px] w-full bg-[#131839]">
        <div 
          className="h-full bg-gradient-to-r from-[#4c75ff] to-[#194eff] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </header>
  );
}
