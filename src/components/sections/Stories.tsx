import Image from "next/image";
import Link from "next/link";
import { stories } from "@/data/stories";

export default function Stories() {
  // Only show the first 2 stories on the homepage
  const featuredStories = stories.slice(0, 2);

  return (
    <section
      id="stories"
      className="bg-[#FFF9E8] px-6 py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full bg-[#E8895B] px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#3A2E25]">
              Stories
            </span>

            <h2 className="mt-6 font-[family-name:var(--font-fraunces)] text-4xl leading-tight tracking-[-0.02em] text-[#3A2E25] sm:text-5xl">
              The animals behind the work.
            </h2>
          </div>

          <Link
            href="/stories"
            className="w-fit text-sm font-semibold text-[#3A2E25] transition-colors hover:text-[#E8895B]"
          >
            More stories →
          </Link>
        </div>

        {/* Stories */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {featuredStories.map((story) => (
            <Link
              key={story.slug}
              href={`/stories/${story.slug}`}
              className="group block"
            >
              <article>
                <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-[#F4D35E]">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="mt-6">
                  <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#E8895B]">
                    {story.category}
                  </span>

                  <h3 className="mt-3 max-w-lg font-[family-name:var(--font-fraunces)] text-2xl leading-snug text-[#3A2E25] sm:text-3xl">
                    {story.title}
                  </h3>

                  <p className="mt-3 max-w-lg text-sm leading-7 text-[#756B62]">
                    {story.excerpt}
                  </p>

                  <span className="mt-4 inline-block text-sm font-semibold text-[#3A2E25] transition-colors group-hover:text-[#E8895B]">
                    Read story →
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}