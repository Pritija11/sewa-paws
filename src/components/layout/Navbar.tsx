"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navigationLinks } from "@/data/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navigationLinks
        .filter((link) => link.href.startsWith("#"))
        .map((link) => link.href.substring(1));

      let currentSection = "";

      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);

        if (section) {
          const sectionTop = section.offsetTop - 120;

          if (window.scrollY >= sectionTop) {
            currentSection = sectionId;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMobileLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[#3A2E25]/10 bg-[#FFF9E8]/95 backdrop-blur-md"
          : "bg-[#FFF9E8]"
      }`}
    >
      <nav className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <Link
          href="/"
          onClick={handleMobileLinkClick}
          className="text-xl font-extrabold tracking-[-0.04em] text-[#3A2E25]"
        >
          sewa<span className="text-[#E8895B]">paws</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navigationLinks.map((link) => {
            const sectionId = link.href.startsWith("#")
              ? link.href.substring(1)
              : "";

            const isActive =
              link.href === "/stories"
                ? false
                : activeSection === sectionId;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium transition-colors ${
                  isActive
                    ? "text-[#E8895B]"
                    : "text-[#3A2E25] hover:text-[#E8895B]"
                }`}
              >
                {link.label}

                {isActive && (
                  <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-[#E8895B]" />
                )}
              </Link>
            );
          })}

          {/* Get Involved */}
          <Link
            href="/get-involved"
            className="rounded-full bg-[#F4D35E] px-5 py-2.5 text-sm font-semibold text-[#3A2E25] transition-transform hover:-translate-y-0.5"
          >
            Get Involved
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          className="flex h-10 w-10 items-center justify-center text-[#3A2E25] md:hidden"
        >
          <span className="text-2xl leading-none">
            {menuOpen ? "×" : "☰"}
          </span>
        </button>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-[#3A2E25]/10 bg-[#FFF9E8] px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            {navigationLinks.map((link) => {
              const sectionId = link.href.startsWith("#")
                ? link.href.substring(1)
                : "";

              const isActive =
                link.href !== "/stories" && activeSection === sectionId;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleMobileLinkClick}
                  className={`text-base font-medium transition-colors ${
                    isActive
                      ? "text-[#E8895B]"
                      : "text-[#3A2E25] hover:text-[#E8895B]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Mobile Get Involved */}
            <Link
              href="#get-involved"
              onClick={handleMobileLinkClick}
              className="mt-2 w-fit rounded-full bg-[#F4D35E] px-5 py-3 text-sm font-semibold text-[#3A2E25]"
            >
              Get Involved
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}