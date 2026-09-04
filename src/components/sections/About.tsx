export default function About() {
  return (
    <section id="about" className="bg-white px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-24">
          {/* Section label */}
          <div>
            <span className="inline-flex rounded-full bg-[#F4D35E]/40 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#3A2E25]">
              About Sewa Paws
            </span>

            <p className="mt-6 max-w-sm font-[family-name:var(--font-fraunces)] text-2xl leading-snug text-[#3A2E25] sm:text-3xl">
              Building a more thoughtful relationship between people and
              animals.
            </p>
          </div>

          {/* Main content */}
          <div>
            <h2 className="max-w-3xl font-[family-name:var(--font-fraunces)] text-4xl leading-tight tracking-[-0.02em] text-[#3A2E25] sm:text-5xl">
              Animal care should be easier to access, understand, and act on.
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-[#756B62]">
              Sewa Paws is an emerging organization  working to
              create thoughtful solutions around animal care and welfare. We
              believe meaningful change can begin with better ideas,
              responsible action, and people who care.
            </p>

            <div className="mt-12 grid gap-8 border-t border-[#3A2E25]/10 pt-8 sm:grid-cols-3">
              <div>
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#F4D35E]">
                  <span className="text-lg">01</span>
                </div>

                <h3 className="font-semibold text-[#3A2E25]">
                  Care first
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#756B62]">
                  Animal wellbeing stays at the centre of what we build.
                </p>
              </div>

              <div>
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#E8895B]">
                  <span className="text-lg">02</span>
                </div>

                <h3 className="font-semibold text-[#3A2E25]">
                  Think differently
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#756B62]">
                  We look for practical and thoughtful ways to solve real
                  problems.
                </p>
              </div>

              <div>
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#F4D35E]">
                  <span className="text-lg">03</span>
                </div>

                <h3 className="font-semibold text-[#3A2E25]">
                  Grow together
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#756B62]">
                  Better outcomes happen when communities and ideas come
                  together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}