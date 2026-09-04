import Link from "next/link";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Sewa Paws collects, uses, and protects information when you use our website.",
};

export default function PrivacyPolicyPage() {
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
              Privacy Policy
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
              1. Introduction
            </h2>

            <p className="mt-4 text-base leading-8 text-[#756B62]">
              Sewa Paws is an emerging animal-focused startup working to
              create thoughtful solutions around animal care and welfare. This
              Privacy Policy explains how information may be collected, used,
              and protected when you visit or interact with our website.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-fraunces)] text-2xl text-[#3A2E25]">
              2. Information We Collect
            </h2>

            <p className="mt-4 text-base leading-8 text-[#756B62]">
              We may collect information that you voluntarily provide when you
              contact us, such as your name, email address, and the content of
              your message.
            </p>

            <p className="mt-4 text-base leading-8 text-[#756B62]">
              We may also collect limited technical information, such as
              browser type, device information, or general website usage data,
              when necessary to operate, maintain, and improve the website.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-fraunces)] text-2xl text-[#3A2E25]">
              3. How We Use Information
            </h2>

            <p className="mt-4 text-base leading-8 text-[#756B62]">
              Information provided to us may be used to respond to enquiries,
              communicate with you, provide requested information, improve our
              website, and understand how our website is being used.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-fraunces)] text-2xl text-[#3A2E25]">
              4. Sharing of Information
            </h2>

            <p className="mt-4 text-base leading-8 text-[#756B62]">
              We do not sell personal information. Information may be shared
              with trusted service providers when necessary to operate the
              website or provide services, or when required by applicable law.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-fraunces)] text-2xl text-[#3A2E25]">
              5. Cookies and Analytics
            </h2>

            <p className="mt-4 text-base leading-8 text-[#756B62]">
              The website may use cookies or similar technologies to support
              essential functionality and, if enabled, understand website
              usage. Any analytics or third-party services used on the website
              may have their own privacy policies.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-fraunces)] text-2xl text-[#3A2E25]">
              6. Data Security
            </h2>

            <p className="mt-4 text-base leading-8 text-[#756B62]">
              We take reasonable steps to protect information provided through
              our website. However, no method of transmitting or storing
              information online can be guaranteed to be completely secure.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-fraunces)] text-2xl text-[#3A2E25]">
              7. Your Choices
            </h2>

            <p className="mt-4 text-base leading-8 text-[#756B62]">
              You may choose not to provide personal information. However,
              some website features, such as contacting us, may require
              certain information to respond to your request.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-fraunces)] text-2xl text-[#3A2E25]">
              8. Third-Party Links
            </h2>

            <p className="mt-4 text-base leading-8 text-[#756B62]">
              Our website may contain links to third-party websites or
              services. Sewa Paws is not responsible for the privacy practices
              or content of those external websites.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-fraunces)] text-2xl text-[#3A2E25]">
              9. Changes to This Policy
            </h2>

            <p className="mt-4 text-base leading-8 text-[#756B62]">
              We may update this Privacy Policy as our website, services, or
              practices change. Any updated version will be published on this
              page with a revised update date.
            </p>
          </section>

          <section>
            <h2 className="font-[family-name:var(--font-fraunces)] text-2xl text-[#3A2E25]">
              10. Contact Us
            </h2>

            <p className="mt-4 text-base leading-8 text-[#756B62]">
              If you have questions about this Privacy Policy or how
              information is handled, you can contact the Sewa Paws team
              through the contact information provided on our website.
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