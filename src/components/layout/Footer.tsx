import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const footerLinks = [
  { label: "About", href: "/#about" },
  { label: "Our Work", href: "/#our-work" },
  { label: "Impact", href: "/#impact" },
  { label: "Stories", href: "/stories" },
];

export default function Footer() {
  return (
    <footer className="bg-[#3A2E25] text-[#FFF9E8]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="text-xl font-extrabold tracking-[-0.04em]"
            >
              sewa<span className="text-[#F4D35E]">paws</span>
            </Link>

            <p className="mt-5 max-w-md text-sm leading-7 text-[#FFF9E8]/70">
              Building a better future for animal care through thoughtful
              solutions, responsible action, and community.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-sm font-semibold">Explore</h3>

            <div className="mt-5 flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="w-fit text-sm text-[#FFF9E8]/65 transition-colors hover:text-[#F4D35E]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold">Contact</h3>

            <div className="mt-5 space-y-4">
              {/* Email */}
              <a
                href="mailto:info@sewapaws.com"
                className="flex items-start gap-3 text-sm text-[#FFF9E8]/65 transition-colors hover:text-[#F4D35E]"
              >
                <Mail size={17} className="mt-0.5 shrink-0" />
                <span>info@sewapaws.com</span>
              </a>

              {/* Address */}
              <div className="flex items-start gap-3 text-sm text-[#FFF9E8]/65">
                <MapPin size={17} className="mt-0.5 shrink-0" />
                <span>New Baneshwor, Kathmandu</span>
              </div>

              {/* Phone */}
              <a
                href="tel:9863901839"
                className="flex items-start gap-3 text-sm text-[#FFF9E8]/65 transition-colors hover:text-[#F4D35E]"
              >
                <Phone size={17} className="mt-0.5 shrink-0" />
                <span>9863901839</span>
              </a>

              {/* Phone */}
              <a
                href="tel:9840993617"
                className="flex items-start gap-3 text-sm text-[#FFF9E8]/65 transition-colors hover:text-[#F4D35E]"
              >
                <Phone size={17} className="mt-0.5 shrink-0" />
                <span>9840993617</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col gap-4 border-t border-[#FFF9E8]/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-[#FFF9E8]/45">
            © {new Date().getFullYear()} Sewa Paws. All rights reserved.
          </p>

          <div className="flex gap-5">
            <Link
              href="/privacy"
              className="text-xs text-[#FFF9E8]/45 transition-colors hover:text-[#F4D35E]"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="text-xs text-[#FFF9E8]/45 transition-colors hover:text-[#F4D35E]"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}