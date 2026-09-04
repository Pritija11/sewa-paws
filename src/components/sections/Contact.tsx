"use client";

import { FormEvent, useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "info@sewapaws.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "9863901839 / 9840993617",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "New Baneshwor, Kathmandu",
  },
];

export default function Contact() {
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
    <section id="contact" className="bg-white px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          {/* Intro + contact details */}
          <div>
            <span className="inline-flex rounded-full bg-[#F4D35E] px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#3A2E25]">
              Contact
            </span>

            <h2 className="mt-6 max-w-md font-[family-name:var(--font-fraunces)] text-4xl leading-tight tracking-[-0.02em] text-[#3A2E25] sm:text-5xl">
              Let's start a conversation.
            </h2>

            <p className="mt-6 max-w-md text-base leading-7 text-[#756B62]">
              Have a question, an idea, or want to explore working together?
              Get in touch with the Sewa Paws team.
            </p>

            <div className="mt-10 divide-y divide-[#3A2E25]/10 border-y border-[#3A2E25]/10">
              {contactItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-5 py-6"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#FFF9E8]">
                      <Icon
                        size={20}
                        strokeWidth={2}
                        className="text-[#3A2E25]"
                      />
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#E8895B]">
                        {item.label}
                      </p>

                      <p className="mt-1 text-sm font-medium text-[#3A2E25]">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact form */}
          <div className="rounded-[2rem] bg-[#FFF9E8] p-7 sm:p-10">
            <h3 className="font-[family-name:var(--font-fraunces)] text-3xl text-[#3A2E25]">
              Send us a message
            </h3>

            <p className="mt-3 text-sm leading-6 text-[#756B62]">
              We'd love to hear from you. Fill out the form and we'll get back
              to you.
            </p>

            {submitted && (
              <div className="mt-6 rounded-2xl bg-[#F4D35E]/40 px-5 py-4 text-sm font-medium text-[#3A2E25]">
                Thanks! Your message has been received.
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
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
                  placeholder="Your name"
                  className="w-full rounded-xl border border-[#3A2E25]/10 bg-white px-4 py-3 text-sm text-[#3A2E25] outline-none transition focus:border-[#E8895B]"
                />
              </div>

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
                  className="w-full rounded-xl border border-[#3A2E25]/10 bg-white px-4 py-3 text-sm text-[#3A2E25] outline-none transition focus:border-[#E8895B]"
                />
              </div>

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
                  rows={5}
                  placeholder="How can we help?"
                  className="w-full resize-none rounded-xl border border-[#3A2E25]/10 bg-white px-4 py-3 text-sm text-[#3A2E25] outline-none transition focus:border-[#E8895B]"
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
  );
}