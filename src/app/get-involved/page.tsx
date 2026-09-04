"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

export default function GetInvolvedPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSubmitted(true);
    event.currentTarget.reset();

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <main className="bg-[#FFF9E8]">
      <section className="px-6 pb-24 pt-32 lg:px-10 lg:pb-32 lg:pt-40">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/"
            className="text-sm font-semibold text-[#756B62] transition-colors hover:text-[#E8895B]"
          >
            ← Back to home
          </Link>

          <div className="mt-10 grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            {/* Intro */}
            <div>
              <span className="inline-flex rounded-full bg-[#E8895B] px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#3A2E25]">
                Get Involved
              </span>

              <h1 className="mt-6 font-[family-name:var(--font-fraunces)] text-5xl leading-tight tracking-[-0.02em] text-[#3A2E25] sm:text-6xl">
                Be part of what we're building.
              </h1>

              <p className="mt-6 max-w-md text-base leading-7 text-[#756B62]">
                Have an idea, want to collaborate, or interested in being part
                of Sewa Paws? Tell us a little about yourself.
              </p>
            </div>

            {/* Form */}
            <div className="rounded-[2rem] bg-white p-7 shadow-sm sm:p-10">
              <h2 className="font-[family-name:var(--font-fraunces)] text-3xl text-[#3A2E25]">
                Let's connect
              </h2>

              <p className="mt-3 text-sm leading-6 text-[#756B62]">
                Choose how you'd like to get involved and send us a message.
              </p>

              {submitted && (
                <div
                  role="status"
                  className="mt-6 rounded-2xl bg-[#F4D35E]/40 px-5 py-4 text-sm font-medium text-[#3A2E25]"
                >
                  Thanks! We've received your message.
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-[#3A2E25]"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    minLength={2}
                    placeholder="Your name"
                    className="w-full rounded-xl border border-[#3A2E25]/10 bg-[#FFF9E8] px-4 py-3 text-sm text-[#3A2E25] outline-none transition placeholder:text-[#756B62]/60 focus:border-[#E8895B]"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-[#3A2E25]"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-[#3A2E25]/10 bg-[#FFF9E8] px-4 py-3 text-sm text-[#3A2E25] outline-none transition placeholder:text-[#756B62]/60 focus:border-[#E8895B]"
                  />
                </div>

                {/* Involvement */}
                <div>
                  <label
                    htmlFor="involvement"
                    className="mb-2 block text-sm font-semibold text-[#3A2E25]"
                  >
                    How would you like to get involved?
                  </label>

                  <select
                    id="involvement"
                    name="involvement"
                    required
                    defaultValue=""
                    className="w-full rounded-xl border border-[#3A2E25]/10 bg-[#FFF9E8] px-4 py-3 text-sm text-[#3A2E25] outline-none transition focus:border-[#E8895B]"
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option value="collaboration">Collaboration</option>
                    <option value="partnership">Partnership</option>
                    <option value="volunteering">Volunteering</option>
                    <option value="careers">Careers</option>
                    <option value="supporting">
                      Supporting Sewa Paws
                    </option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-[#3A2E25]"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    minLength={10}
                    rows={5}
                    placeholder="Tell us a little about your idea..."
                    className="w-full resize-none rounded-xl border border-[#3A2E25]/10 bg-[#FFF9E8] px-4 py-3 text-sm text-[#3A2E25] outline-none transition placeholder:text-[#756B62]/60 focus:border-[#E8895B]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-[#3A2E25] px-6 py-3.5 text-sm font-semibold text-[#FFF9E8] transition hover:-translate-y-0.5 hover:bg-[#E8895B]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}