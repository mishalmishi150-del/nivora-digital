
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Nivora Digital",
  description:
    "Learn about Nivora Digital, our business support approach, professional commitment and process for delivering business and digital solutions.",
};

const reasons = [
  {
    number: "01",
    title: "Client-Focused Approach",
    description:
      "We take time to understand your requirements and focus on solutions that match your business needs.",
  },
  {
    number: "02",
    title: "Clear Communication",
    description:
      "We keep communication straightforward so you can understand the process and your next steps.",
  },
  {
    number: "03",
    title: "Multiple Solutions",
    description:
      "From sourcing and trade support to digital services, we bring related business solutions together.",
  },
  {
    number: "04",
    title: "Professional Commitment",
    description:
      "We follow an organised approach and work towards delivering the services agreed with you.",
  },
];

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We begin by understanding your business, goals and requirements.",
  },
  {
    number: "02",
    title: "Planning",
    description:
      "We discuss your needs and identify a suitable way to move forward.",
  },
  {
    number: "03",
    title: "Execution",
    description:
      "We work through the agreed activities with clear communication.",
  },
  {
    number: "04",
    title: "Delivery",
    description:
      "We complete the agreed work and discuss the next steps with you.",
  },
];

function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-wrap items-center justify-between gap-5">
        <Link href="/" aria-label="Nivora Digital Home">
          <img
            src="/logo.png"
            alt="Nivora Digital"
            className="w-16 h-14 object-contain"
          />
        </Link>

        <nav className="flex flex-wrap items-center gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-[#B58A42]">
            Home
          </Link>
          <Link href="/about" className="text-[#B58A42]">
            About Us
          </Link>
          <Link href="/services" className="hover:text-[#B58A42]">
            Services
          </Link>
          <Link href="/contact" className="hover:text-[#B58A42]">
            Contact Us
          </Link>
        </nav>

        <Link
          href="/contact"
          className="bg-[#B58A42] text-white px-5 py-3 rounded-md text-sm font-semibold hover:bg-[#98702F]"
        >
          Send an Inquiry
        </Link>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-[#081426] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:px-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/">
            <img
              src="/logo.png"
              alt="Nivora Digital"
              className="h-16 w-auto max-w-[200px] object-contain"
            />
          </Link>
          <p className="mt-6 max-w-xs text-sm leading-7 text-white/75">
            Business support and digital solutions to help you connect,
            develop and move forward.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Explore</h3>
          <div className="mt-4 h-0.5 w-10 bg-[#B58A42]" />
          <ul className="mt-5 space-y-3 text-sm text-white/75">
            <li>
              <Link href="/" className="hover:text-[#B58A42]">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#B58A42]">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-[#B58A42]">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#B58A42]">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Our Services</h3>
          <div className="mt-4 h-0.5 w-10 bg-[#B58A42]" />
          <ul className="mt-5 space-y-3 text-sm text-white/75">
            <li>
              <Link href="/services" className="hover:text-[#B58A42]">
                E-Commerce Solutions
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-[#B58A42]">
                Import Services
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-[#B58A42]">
                Export Services
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-[#B58A42]">
                Logistics &amp; Shipping
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-[#B58A42]">
                Buyer &amp; Sourcing Support
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-[#B58A42]">
                Web Development
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Let&apos;s Connect</h3>
          <div className="mt-4 h-0.5 w-10 bg-[#B58A42]" />
          <div className="mt-5 space-y-5 text-sm">
            <div>
              <p className="mb-2 text-xs uppercase tracking-widest text-white/60">
                Email
              </p>
              <a
                href="mailto:nivoradigital1029@gmail.com"
                className="break-all text-[#B58A42] hover:text-white"
              >
                nivoradigital1029@gmail.com
              </a>
            </div>

            <div>
              <p className="mb-2 text-xs uppercase tracking-widest text-white/60">
                Phone
              </p>
              <a
                href="tel:03288699236"
                className="text-[#B58A42] hover:text-white"
              >
                03288699236
              </a>
            </div>

            <div>
              <p className="mb-2 text-xs uppercase tracking-widest text-white/60">
                WhatsApp
              </p>
              <a
                href="https://wa.me/923288699236"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#B58A42] hover:text-white"
              >
                Chat with us ↗
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 px-6 py-6 text-center text-xs text-white/65">
        © 2026 Nivora Digital. All Rights Reserved.
      </div>
    </footer>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#081426]">
      <Header />

      <section className="bg-[#081426] px-6 py-20 text-center sm:py-28">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#D6B878]">
          Get to Know Us
        </p>
        <h1 className="mt-5 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
          About <span className="text-[#D6B878]">Nivora Digital</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/80">
          Business support and digital solutions focused on understanding your
          needs and helping you move forward.
        </p>
      </section>

      <section className="bg-white px-6 py-20 sm:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <div className="absolute -left-3 -top-3 h-24 w-24 border-l-2 border-t-2 border-[#B58A42]" />
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Professional team collaborating in a business meeting"
              loading="lazy"
              className="relative z-10 h-[330px] w-full object-cover shadow-xl sm:h-[430px]"
            />
            <div className="absolute -bottom-3 -right-3 h-24 w-24 border-b-2 border-r-2 border-[#B58A42]" />
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#B58A42]">
              About Nivora Digital
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
              A Practical Approach to{" "}
              <span className="text-[#B58A42]">Business Growth</span>
            </h2>
            <div className="mt-6 h-1 w-16 bg-[#B58A42]" />
            <p className="mt-6 leading-8 text-[#081426]/75">
              We aim to make business processes easier to understand and
              manage through a range of support services. Our approach starts
              with your needs and focuses on clear communication, suitable
              planning and organised execution.
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <span className="text-2xl font-semibold text-[#B58A42]">
                  01
                </span>
                <h3 className="mt-2 text-lg font-semibold">Understand</h3>
                <p className="mt-2 leading-7 text-[#081426]/75">
                  We listen to your requirements and understand what you want
                  to achieve.
                </p>
              </div>

              <div>
                <span className="text-2xl font-semibold text-[#B58A42]">
                  02
                </span>
                <h3 className="mt-2 text-lg font-semibold">Plan</h3>
                <p className="mt-2 leading-7 text-[#081426]/75">
                  We discuss the requirements and identify a suitable way
                  forward.
                </p>
              </div>

              <div>
                <span className="text-2xl font-semibold text-[#B58A42]">
                  03
                </span>
                <h3 className="mt-2 text-lg font-semibold">Support</h3>
                <p className="mt-2 leading-7 text-[#081426]/75">
                  We work through the agreed services with a focus on
                  communication and delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F5F0] px-6 py-20 sm:px-10 lg:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#B58A42]">
            Registrations &amp; Affiliations
          </p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Our Official <span className="text-[#B58A42]">Recognition</span>
          </h2>
          <div className="mx-auto mt-6 h-1 w-16 bg-[#B58A42]" />
          <p className="mx-auto mt-6 max-w-3xl leading-8 text-[#081426]/75">
            Official registration and affiliation details will be displayed
            here once Nivora Digital&apos;s verified documents and approvals
            are confirmed.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-20 sm:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#B58A42]">
              Why Nivora Digital
            </p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Why Work <span className="text-[#B58A42]">With Us?</span>
            </h2>
            <div className="mx-auto mt-6 h-1 w-16 bg-[#B58A42]" />
            <p className="mt-6 leading-8 text-[#081426]/75">
              We focus on understanding your needs and making the process
              straightforward through communication and organised support.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason) => (
              <div
                key={reason.number}
                className="border-t-2 border-[#B58A42] bg-[#F7F5F0] p-7"
              >
                <span className="text-sm font-bold tracking-widest text-[#B58A42]">
                  {reason.number}
                </span>
                <h3 className="mt-5 text-lg font-semibold">
                  {reason.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#081426]/75">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F7F5F0] px-6 py-20 sm:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#B58A42]">
              How We Work
            </p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Our Working <span className="text-[#B58A42]">Process</span>
            </h2>
            <div className="mx-auto mt-6 h-1 w-16 bg-[#B58A42]" />
            <p className="mt-6 leading-8 text-[#081426]/75">
              A clear and organised approach helps us understand your needs
              and work through the agreed requirements.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.number}>
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#B58A42] text-lg font-semibold text-[#B58A42]">
                  {step.number}
                </div>
                <h3 className="mt-6 text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#081426]/75">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-10 sm:px-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 rounded-xl bg-[#081426] px-7 py-9 sm:px-10 lg:flex-row">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#D6B878]">
              Let&apos;s Discuss Your Goals
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
              Ready to Start Your Project?
            </h2>
            <p className="mt-2 text-sm leading-6 text-white/80">
              Tell us about your business needs and let&apos;s discuss the next
              step.
            </p>
          </div>

          <Link
            href="/contact"
            className="shrink-0 bg-[#B58A42] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-[#081426]"
          >
            Get in Touch →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
