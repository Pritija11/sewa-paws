import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { stories } from "@/data/stories";

type StoryPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return stories.map((story) => ({
    slug: story.slug,
  }));
}

export async function generateMetadata({ params }: StoryPageProps) {
  const { slug } = await params;

  const story = stories.find((story) => story.slug === slug);

  if (!story) {
    return {
      title: "Story Not Found",
    };
  }

  return {
    title: story.title,
    description: story.excerpt,
  };
}

export default async function StoryPage({ params }: StoryPageProps) {
  const { slug } = await params;

  const story = stories.find((story) => story.slug === slug);

  if (!story) {
    notFound();
  }

  return (
    <main className="bg-[#FFF9E8]">
      {/* Header */}
      <section className="px-6 pb-16 pt-32 lg:px-10 lg:pb-20 lg:pt-40">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/stories"
            className="text-sm font-semibold text-[#756B62] transition-colors hover:text-[#E8895B]"
          >
            ← Back to stories
          </Link>

          <div className="mt-10">
            <span className="inline-flex rounded-full bg-[#E8895B] px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#3A2E25]">
              {story.category}
            </span>

            <h1 className="mt-6 font-[family-name:var(--font-fraunces)] text-5xl leading-[1.05] tracking-[-0.02em] text-[#3A2E25] sm:text-6xl lg:text-7xl">
              {story.title}
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#756B62]">
              {story.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-6 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <div className="relative aspect-[16/9] overflow-hidden rounded-[2rem] bg-[#F4D35E]">
            <Image
              src={story.image}
              alt={story.title}
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Story Content */}
      <section className="px-6 py-20 lg:px-10 lg:py-28">
        <article className="mx-auto max-w-3xl">
          {story.content.map((paragraph, index) => (
            <p
              key={index}
              className="mb-7 text-base leading-8 text-[#756B62] last:mb-0 sm:text-lg"
            >
              {paragraph}
            </p>
          ))}
        </article>
      </section>

      {/* Back / More Stories */}
      <section className="px-6 pb-24 lg:px-10 lg:pb-32">
        <div className="mx-auto max-w-3xl border-t border-[#3A2E25]/10 pt-8">
          <Link
            href="/stories"
            className="text-sm font-semibold text-[#3A2E25] transition-colors hover:text-[#E8895B]"
          >
            Explore more stories →
          </Link>
        </div>
      </section>
    </main>
  );
}