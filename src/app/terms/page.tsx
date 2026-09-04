import Link from "next/link";

export const metadata = {
  title: "Terms of Use",
  description:
    "Read the terms and conditions for using the Sewa Paws website.",
};

export default function TermsPage() {
  return (
    <main className="bg-[#FFF9E8]">
      {/* Header */}
      <section className="px-6 pb-16 pt-32 lg:px-10 lg:pb-20 lg:pt-40">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/"
            className="text-sm font-semibold text-[#756B62] transition-colors hover:text-[#E8895B]"
          >
            ← Back to home
          </Link>

          <div className="mt-10">
            <span className="inline-flex rounded-full bg-[#F4D35E] px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#3A2E25]">
              Legal
            </span>

            <h1 className="mt-6 font-[family-name:var(--font-fraunces)] text-5xl leading-tight tracking-[-0.02em] text-[#3A2E25] sm:text-6xl">
              Terms of Use
            </h1>

            <p className="mt-6 text-sm text-[#756B62]">
              Last updated: September 3, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 pb-24 lg:px-10 lg:pb-32">
        <div className="mx-auto max-w-3xl space-y-12">
          <section>
            <h2 className="font-[family-name:var(--font-fraunces)] text-2xl text-[#3A2E25]">
              1. Acceptance of Terms
            </h2>

            <p className="mt-4 text-base leading-8 text-[#756B62]">
              By accessing or using the Sewa Paws website, you agree to these
              Terms of Use. If you do not agree with these terms, please do not
              use the website.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-fraunces)] text-2xl text-[#3A2E25]">
              2. About Sewa Paws
            </h2>

            <p className="mt-4 text-base leading-8 text-[#756B62]">
              Sewa Paws is an emerging animal-focused startup working on
              thoughtful ideas and solutions related to animal care and
              welfare. The information presented on this website is provided
              for general informational purposes.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-fraunces)] text-2xl text-[#3A2E25]">
              3. Use of the Website
            </h2>

            <p className="mt-4 text-base leading-8 text-[#756B62]">
              You agree to use this website responsibly and only for lawful
              purposes. You must not attempt to interfere with the operation
              or security of the website, gain unauthorised access to its
              systems, or use the website in a way that could harm Sewa Paws or
              other users.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-fraunces)] text-2xl text-[#3A2E25]">
              4. Website Content
            </h2>

            <p className="mt-4 text-base leading-8 text-[#756B62]">
              We aim to keep the information on this website useful and
              accurate. However, content may change over time and we do not
              guarantee that every piece of information will always be
              complete, current, or error-free.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-fraunces)] text-2xl text-[#3A2E25]">
              5. Intellectual Property
            </h2>

            <p className="mt-4 text-base leading-8 text-[#756B62]">
              Unless otherwise stated, the content, branding, design, graphics,
              text, and other materials on this website belong to or are used
              by Sewa Paws with appropriate permission. You may not reproduce,
              modify, distribute, or commercially use our content without
              appropriate permission.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-fraunces)] text-2xl text-[#3A2E25]">
              6. Third-Party Links
            </h2>

            <p className="mt-4 text-base leading-8 text-[#756B62]">
              Our website may contain links to third-party websites or
              services. These links are provided for convenience or additional
              information. Sewa Paws does not control and is not responsible
              for the content, availability, or practices of third-party
              websites.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-fraunces)] text-2xl text-[#3A2E25]">
              7. No Professional Advice
            </h2>

            <p className="mt-4 text-base leading-8 text-[#756B62]">
              Information provided on this website should not be considered a
              substitute for professional veterinary, medical, legal, or other
              specialised advice. When professional assistance is required,
              users should consult an appropriately qualified professional.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-fraunces)] text-2xl text-[#3A2E25]">
              8. Limitation of Liability
            </h2>

            <p className="mt-4 text-base leading-8 text-[#756B62]">
              To the extent permitted by applicable law, Sewa Paws will not be
              responsible for losses or damages arising from the use of, or
              inability to use, this website or reliance on information
              provided through it.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-fraunces)] text-2xl text-[#3A2E25]">
              9. Changes to These Terms
            </h2>

            <p className="mt-4 text-base leading-8 text-[#756B62]">
              We may update these Terms of Use from time to time as the
              website or our services develop. Updated terms will be published
              on this page with a revised update date.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-fraunces)] text-2xl text-[#3A2E25]">
              10. Contact Us
            </h2>

            <p className="mt-4 text-base leading-8 text-[#756B62]">
              If you have questions about these Terms of Use, you can contact
              Sewa Paws at{" "}
              <a
                href="mailto:info@sewapaws.com"
                className="font-medium text-[#3A2E25] underline decoration-[#E8895B] underline-offset-4"
              >
                info@sewapaws.com
              </a>
              .
            </p>
          </section>

          <div className="border-t border-[#3A2E25]/10 pt-8">
            <Link
              href="/"
              className="text-sm font-semibold text-[#3A2E25] transition-colors hover:text-[#E8895B]"
            >
              ← Return to Sewa Paws
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}