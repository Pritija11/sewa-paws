import Image from "next/image";
import Link from "next/link";
import { stories } from "@/data/stories";

export const metadata = {
  title: "Stories",
  description:
    "Explore stories and perspectives from Sewa Paws on animal care, welfare, and community.",
};

export default function StoriesPage() {
  return (
    <main className="bg-[#FFF9E8]">
      {/* Header */}
      <section className="px-6 pb-16 pt-32 lg:px-10 lg:pb-20 lg:pt-40">
        <div className="mx-auto max-w-7xl">
          <span className="inline-flex rounded-full bg-[#E8895B] px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#3A2E25]">
            Stories
          </span>

          <h1 className="mt-6 max-w-3xl font-[family-name:var(--font-fraunces)] text-5xl leading-tight tracking-[-0.02em] text-[#3A2E25] sm:text-6xl lg:text-7xl">
            Ideas, perspectives, and stories around animal care.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-[#756B62] sm:text-lg">
            Explore the ideas and conversations that shape how we think about
            animal care, welfare, and stronger communities.
          </p>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="px-6 pb-24 lg:px-10 lg:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-x-6 gap-y-16 md:grid-cols-2">
            {stories.map((story) => (
              <Link
                key={story.slug}
                href={`/stories/${story.slug}`}
                className="group"
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

                    <h2 className="mt-3 max-w-xl font-[family-name:var(--font-fraunces)] text-2xl leading-snug text-[#3A2E25] sm:text-3xl">
                      {story.title}
                    </h2>

                    <p className="mt-3 max-w-xl text-sm leading-7 text-[#756B62]">
                      {story.excerpt}
                    </p>

                    <span className="mt-5 inline-block text-sm font-semibold text-[#3A2E25] transition-colors group-hover:text-[#E8895B]">
                      Read story →
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}