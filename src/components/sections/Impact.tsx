const impactPoints = [
  {
    number: "01",
    title: "Better awareness",
    text: "Encouraging more thoughtful and responsible approaches to animal care.",
  },
  {
    number: "02",
    title: "Accessible care",
    text: "Working toward solutions that can make animal-focused care easier to understand and access.",
  },
  {
    number: "03",
    title: "Stronger communities",
    text: "Connecting people who want to contribute to better outcomes for animals.",
  },
];

export default function Impact() {
  return (
    <section id="impact" className="bg-white px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid overflow-hidden rounded-[2.5rem] bg-[#F4D35E] lg:grid-cols-[0.8fr_1.2fr]">
          {/* Intro */}
          <div className="flex flex-col justify-between p-8 sm:p-12 lg:p-16">
            <div>
              <span className="inline-flex rounded-full bg-[#3A2E25] px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#FFF9E8]">
                Our Impact
              </span>

              <h2 className="mt-8 max-w-md font-[family-name:var(--font-fraunces)] text-4xl leading-tight tracking-[-0.02em] text-[#3A2E25] sm:text-5xl">
                Small actions can create meaningful change.
              </h2>
            </div>

            <p className="mt-12 max-w-sm text-sm leading-7 text-[#3A2E25]/70 lg:mt-20">
              We measure progress through the people we reach, the ideas we
              develop, and the positive changes we help create.
            </p>
          </div>

          {/* Points */}
          <div className="bg-[#3A2E25] p-8 text-[#FFF9E8] sm:p-12 lg:p-16">
            <div className="divide-y divide-[#FFF9E8]/15">
              {impactPoints.map((point) => (
                <div
                  key={point.number}
                  className="grid gap-5 py-8 first:pt-0 last:pb-0 sm:grid-cols-[60px_1fr]"
                >
                  <span className="font-[family-name:var(--font-fraunces)] text-xl text-[#F4D35E]">
                    {point.number}
                  </span>

                  <div>
                    <h3 className="font-[family-name:var(--font-fraunces)] text-2xl">
                      {point.title}
                    </h3>

                    <p className="mt-3 max-w-lg text-sm leading-7 text-[#FFF9E8]/65">
                      {point.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}