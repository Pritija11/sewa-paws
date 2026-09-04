import Image from "next/image";
import Link from "next/link";
import { PawPrint } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-[#FFF9E8] px-6 pb-16 pt-28 lg:px-10 lg:pb-24 lg:pt-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
        {/* Content */}
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#F4D35E]/40 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-[#E8895B]" />
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#3A2E25]">
              Animal care, reimagined
            </span>
          </div>

          <h1 className="max-w-2xl font-[family-name:var(--font-fraunces)] text-5xl leading-[1.05] tracking-[-0.02em] text-[#3A2E25] sm:text-6xl lg:text-7xl">
            A better future for{" "}
            <span className="relative inline-block">
              animal care.
              <span className="absolute -bottom-1 left-0 -z-0 h-3 w-full bg-[#F4D35E]" />
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-[#756B62] sm:text-lg">
            Sewa Paws is building thoughtful solutions that make animal care
            more accessible, responsible, and connected.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="#our-work"
              className="rounded-full bg-[#3A2E25] px-6 py-3.5 text-sm font-semibold text-[#FFF9E8] transition-transform hover:-translate-y-0.5"
            >
              Explore our work
              <span className="ml-2">→</span>
            </Link>

            <Link
              href="#about"
              className="px-4 py-3.5 text-sm font-semibold text-[#3A2E25] transition-colors hover:text-[#E8895B]"
            >
              Learn about us
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#F4D35E]">
            <Image
              src="/images/hero.jpg"
              alt="Animal receiving care"
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Decorative element */}
          <div className="absolute -bottom-5 -left-5 flex h-24 w-24 items-center justify-center rounded-2xl bg-[#E8895B]">
            <PawPrint size={42} strokeWidth={2.5} className="text-[#3A2E25]" />
          </div>

          <div className="absolute -right-4 -top-4 flex h-20 w-20 items-center justify-center rounded-full bg-[#F4D35E] lg:h-24 lg:w-24">
            <span className="text-center text-xs font-bold uppercase leading-tight text-[#3A2E25]">
              Care
              <br />
              matters
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
