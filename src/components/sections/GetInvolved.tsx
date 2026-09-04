import Link from "next/link";
import { ArrowUpRight, Heart, MessageCircle } from "lucide-react";

export default function GetInvolved() {
  return (
    <section
      id="get-involved"
      className="bg-[#FFF9E8] px-6 py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[#3A2E25] px-8 py-14 sm:px-12 lg:px-16 lg:py-20">
          {/* Decorative paw */}
          <div className="absolute -right-8 -top-8 flex h-32 w-32 items-center justify-center rounded-full bg-[#F4D35E]">
            <Heart
              size={42}
              strokeWidth={2}
              className="text-[#3A2E25]"
            />
          </div>

          <div className="relative z-10 max-w-2xl">
            <span className="inline-flex rounded-full bg-[#E8895B] px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#3A2E25]">
              Get Involved
            </span>

            <h2 className="mt-7 font-[family-name:var(--font-fraunces)] text-4xl leading-tight tracking-[-0.02em] text-[#FFF9E8] sm:text-5xl lg:text-6xl">
              Better animal care starts with people who care.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-[#FFF9E8]/65">
              Whether you have an idea, want to collaborate, or simply want to
              learn more about what we do, we'd love to hear from you.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/get-involved"
                className="inline-flex items-center rounded-full bg-[#F4D35E] px-6 py-3.5 text-sm font-semibold text-[#3A2E25] transition-transform hover:-translate-y-0.5"
              >
                <MessageCircle size={18} className="mr-2" />
                Get involved
              </Link>

              <Link
                href="#our-work"
                className="inline-flex items-center rounded-full border border-[#FFF9E8]/20 px-6 py-3.5 text-sm font-semibold text-[#FFF9E8] transition-colors hover:bg-[#FFF9E8]/10"
              >
                Explore our work
                <ArrowUpRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}