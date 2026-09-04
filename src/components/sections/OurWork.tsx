import { Heart, Lightbulb, Users } from "lucide-react";

const workItems = [
  {
    number: "01",
    icon: Heart,
    title: "Better Animal Care",
    description:
      "Creating thoughtful approaches that put animal wellbeing at the centre of care.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Practical Solutions",
    description:
      "Exploring useful ideas and solutions for real challenges in animal care and welfare.",
  },
  {
    number: "03",
    icon: Users,
    title: "Community Connection",
    description:
      "Bringing people, communities, and animal-focused initiatives closer together.",
  },
];

export default function OurWork() {
  return (
    <section
      id="our-work"
      className="bg-[#FFF9E8] px-6 py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="max-w-2xl">
          <span className="inline-flex rounded-full bg-[#F4D35E] px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#3A2E25]">
            Our Work
          </span>

          <h2 className="mt-6 font-[family-name:var(--font-fraunces)] text-4xl leading-tight tracking-[-0.02em] text-[#3A2E25] sm:text-5xl lg:text-6xl">
            Turning care into meaningful action.
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-[#756B62]">
            We focus on ideas and initiatives that can make animal care more
            thoughtful, accessible, and impactful.
          </p>
        </div>

        {/* Work cards */}
        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {workItems.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.number}
                className="group rounded-[2rem] border border-[#3A2E25]/10 bg-white p-8 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F4D35E]">
                    <Icon
                      size={26}
                      strokeWidth={2}
                      className="text-[#3A2E25]"
                    />
                  </div>

                  <span className="font-[family-name:var(--font-fraunces)] text-2xl text-[#3A2E25]/25">
                    {item.number}
                  </span>
                </div>

                <h3 className="mt-10 font-[family-name:var(--font-fraunces)] text-2xl text-[#3A2E25]">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#756B62]">
                  {item.description}
                </p>

                <div className="mt-8 h-1 w-10 rounded-full bg-[#E8895B] transition-all duration-300 group-hover:w-16" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}