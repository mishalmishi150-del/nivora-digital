
import type { Metadata } from "next";
import Link from "next/link";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Nivora Digital | Business & Digital Solutions",
  description:
    "Discover Nivora Digital's professional services, including e-commerce solutions, import and export support, logistics, sourcing and web development.",
};

const services = [
  {
    number: "01",
    title: "E-Commerce Solutions",
    description:
      "Build, manage and grow your online business with reliable sourcing and end-to-end fulfilment support.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "02",
    title: "Import Services",
    description:
      "Source products from international suppliers and navigate the import process with greater confidence.",
    image:
      "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "03",
    title: "Export Services",
    description:
      "Take your products into new markets with export coordination and international trade support.",
    image:
      "https://images.unsplash.com/photo-1774929108070-b60d3879e071?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "04",
    title: "Logistics & Shipping",
    description:
      "Coordinate the movement of goods with practical shipping and supply-chain solutions.",
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "05",
    title: "Buyer & Sourcing Support",
    description:
      "Connect with suitable suppliers, evaluate sourcing options and simplify your purchasing process.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "06",
    title: "Web Development",
    description:
      "Modern, responsive websites and professional digital solutions designed to strengthen your brand and grow your business online.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=85",
  },
];

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
    <header className="relative z-20 bg-[#081426]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-4 sm:px-8 md:flex-row lg:px-10">
        <Link href="/" aria-label="Nivora Digital Home" className="shrink-0">
          <img
            src="/logo.png"
            alt="Nivora Digital"
            className="h-14 w-auto max-w-[190px] object-contain"
          />
        </Link>

        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-sm font-medium text-white sm:gap-x-7">
          <Link href="/" className="transition-colors hover:text-[#B58A42]">
            Home
          </Link>
          <Link href="/about" className="transition-colors hover:text-[#B58A42]">
            About Us
          </Link>
          <Link href="/services" className="transition-colors hover:text-[#B58A42]">
            Services
          </Link>
          <Link href="/contact" className="transition-colors hover:text-[#B58A42]">
            Contact Us
          </Link>
        </nav>

        <Link
          href="/contact"
          className="inline-flex shrink-0 items-center justify-center border border-[#B58A42] bg-[#B58A42] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#081426]"
        >
          Get a Quote <span className="ml-2">→</span>
        </Link>
      </div>
    </header>
  );
}

function ContactBanner() {
  return (
    <section className="bg-white px-5 py-9 sm:px-8 lg:py-12">
      <div
        className="relative mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 overflow-hidden rounded-xl bg-[#081426] px-7 py-7 shadow-md sm:px-10 lg:flex-row lg:px-12"
        style={{
          backgroundImage:
            "radial-gradient(circle at 85% 20%, rgba(181,138,66,0.18) 0, transparent 28%), radial-gradient(circle at 10% 100%, rgba(181,138,66,0.12) 0, transparent 30%)",
        }}
      >
        <div className="relative z-10 max-w-3xl">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.25em] text-[#D6B878]">
            Let&apos;s Discuss Your Goals
          </p>
          <h2 className="text-2xl font-semibold leading-tight text-white sm:text-3xl">
            Ready to Start Your Project?
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-white/80">
            Tell us about your business needs. Let&apos;s discuss how Nivora
            Digital can support your next step.
          </p>
        </div>

        <Link
          href="/contact"
          className="relative z-10 inline-flex shrink-0 items-center justify-center bg-[#B58A42] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#081426]"
        >
          Get in Touch <span className="ml-3 text-lg">→</span>
        </Link>
      </div>
    </section>
  );
}

function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/923288699236"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Nivora Digital on WhatsApp"
      className="fixed bottom-6 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform duration-300 hover:scale-110 sm:bottom-7 sm:right-7 sm:h-16 sm:w-16"
    >
      <svg
        viewBox="0 0 32 32"
        fill="currentColor"
        className="h-8 w-8 sm:h-9 sm:w-9"
        aria-hidden="true"
      >
        <path d="M16.01 3C8.84 3 3.01 8.83 3.01 16c0 2.29.6 4.52 1.74 6.49L3 29l6.67-1.7A12.94 12.94 0 0 0 16 29c7.17 0 13-5.83 13-13S23.18 3 16.01 3Zm0 23.8c-1.96 0-3.88-.53-5.55-1.54l-.4-.24-3.96 1.01 1.05-3.86-.26-.42A10.76 10.76 0 0 1 5.2 16c0-5.96 4.85-10.8 10.81-10.8S26.8 10.04 26.8 16s-4.84 10.8-10.79 10.8Zm5.93-8.09c-.32-.16-1.91-.94-2.21-1.05-.3-.11-.51-.16-.73.16-.21.32-.83 1.05-1.02 1.27-.19.22-.38.24-.7.08-.32-.16-1.36-.5-2.59-1.6-.96-.85-1.61-1.9-1.8-2.22-.19-.32-.02-.5.14-.66.14-.14.32-.38.48-.57.16-.19.21-.32.32-.54.11-.21.05-.4-.03-.56-.08-.16-.73-1.75-1-2.4-.26-.63-.53-.54-.73-.55h-.62c-.22 0-.57.08-.86.4-.3.32-1.13 1.1-1.13 2.7 0 1.59 1.16 3.13 1.32 3.35.16.22 2.28 3.48 5.52 4.88.77.33 1.37.53 2.02.13.62-.09 1.91-.78 2.18-1.54.27-.75.27-1.4.19-1.54-.08-.13-.3-.21-.62-.37Z" />
      </svg>
    </a>
  );
}

export default function HomePage() {
  return (
    <main id="top" className="min-h-screen overflow-hidden bg-white text-[#081426]">
      <Header />

      {/* HERO SECTION */}
      <section className="relative flex min-h-[650px] w-full items-center overflow-hidden bg-white lg:min-h-[720px]">
        <img
          src="/nivora-hero.png"
          alt="Nivora Digital professional business workspace"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-contain object-center"
        />

        <div className="absolute inset-0 bg-[#081426]/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#081426]/75 via-[#081426]/35 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 sm:px-10 lg:px-16">
          <div className="max-w-[650px]">
            <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-[#D6B878] sm:text-sm">
              <span className="h-px w-10 bg-[#B58A42]" />
              Welcome to Nivora Digital
            </p>

            <h1 className="text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Digital Solutions
              <span className="mt-2 block text-[#D6B878]">
                For Business Growth.
              </span>
            </h1>

            <p className="mt-7 max-w-[550px] text-sm leading-8 text-white/90 sm:text-base">
              Practical business support and professional digital solutions to help you connect, develop and move your business forward.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/services"
                className="inline-flex items-center justify-center bg-[#B58A42] px-7 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-white hover:text-[#081426]"
              >
                Explore Our Services <span className="ml-3 text-lg">→</span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center border border-white/70 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-[#B58A42] hover:bg-[#B58A42]"
              >
                Contact Us <span className="ml-3 text-lg">↗</span>
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-4 text-xs font-semibold text-white/90 sm:text-sm">
              <span><span className="mr-2 text-[#D6B878]">✦</span>Business Support</span>
              <span><span className="mr-2 text-[#D6B878]">✦</span>Global Trade Solutions</span>
              <span><span className="mr-2 text-[#D6B878]">✦</span>Digital Services</span>
            </div>
          </div>
        </div>
      </section>

      {/* AGENCY INTRODUCTION */}
      <section className="bg-white px-6 py-20 sm:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-28 w-28 border-l-2 border-t-2 border-[#B58A42]" />
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Professional team collaborating in a business meeting"
              loading="lazy"
              className="relative z-10 h-[350px] w-full object-cover shadow-xl sm:h-[440px]"
            />
            <div className="absolute -bottom-4 -right-4 h-28 w-28 border-b-2 border-r-2 border-[#B58A42]" />
          </div>

          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#B58A42]">
              Who We Are
            </p>
            <h2 className="text-3xl font-semibold leading-tight text-[#081426] sm:text-4xl lg:text-5xl">
              Supporting Your Business
              <span className="text-[#B58A42]"> Every Step of the Way</span>
            </h2>
            <div className="mt-6 h-1 w-16 bg-[#B58A42]" />
            <p className="mt-7 text-base leading-8 text-[#081426]/75">
              Nivora Digital brings together business support and digital
              solutions to help businesses move forward with greater clarity.
              We focus on understanding your requirements and providing
              practical services that support your goals.
            </p>
            <p className="mt-4 text-base leading-8 text-[#081426]/75">
              Whether you need support with sourcing, trade, logistics,
              e-commerce or web development, our aim is to make your next
              business step easier to plan.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center border-b-2 border-[#B58A42] pb-2 text-sm font-bold text-[#081426] hover:text-[#B58A42]"
            >
              More About Us <span className="ml-3 text-lg">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT NIVORA DIGITAL */}
      <section className="bg-[#F7F5F0] px-6 py-20 text-[#081426] sm:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#B58A42]">
              About Nivora Digital
            </p>
            <h2 className="text-3xl font-semibold leading-tight text-[#081426] sm:text-4xl lg:text-5xl">
              A Practical Approach to{" "}
              <span className="text-[#B58A42]">Business Growth</span>
            </h2>
            <div className="mx-auto mt-6 h-1 w-16 bg-[#B58A42]" />
            <p className="mt-7 text-base leading-8 text-[#081426]/80">
              We aim to make business processes easier to understand and
              manage through a range of support services. Our approach starts
              with your needs and focuses on clear communication, suitable
              planning and organised execution.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              ["01", "Understand", "We listen to your requirements and understand what you want to achieve."],
              ["02", "Plan", "We discuss the requirements and identify a suitable way forward."],
              ["03", "Support", "We work through the agreed services with a focus on communication and delivery."],
            ].map(([number, title, description]) => (
              <div
                key={number}
                className="border border-[#081426]/10 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="text-3xl text-[#B58A42]">{number}</span>
                <h3 className="mt-5 text-xl font-semibold text-[#081426]">{title}</h3>
                <p className="mt-3 leading-7 text-[#081426]/75">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-white px-6 py-20 sm:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#B58A42]">
                What We Offer
              </p>
              <h2 className="text-3xl font-semibold leading-tight text-[#081426] sm:text-4xl lg:text-5xl">
                Our <span className="text-[#B58A42]">Services</span>
              </h2>
              <div className="mt-6 h-1 w-16 bg-[#B58A42]" />
              <p className="mt-6 leading-8 text-[#081426]/75">
                Explore our range of business and digital services designed
                to support different business requirements.
              </p>
            </div>

            <Link
              href="/services"
              className="inline-flex w-fit items-center border-b-2 border-[#B58A42] pb-2 text-sm font-bold text-[#081426] hover:text-[#B58A42]"
            >
              View All Services <span className="ml-3 text-lg">→</span>
            </Link>
          </div>

          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.number}
                className="group flex h-full flex-col overflow-hidden border border-[#081426]/15 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative h-56 shrink-0 overflow-hidden bg-[#F7F5F0]">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center bg-[#B58A42] text-sm font-bold text-white">
                    {service.number}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <h3 className="text-xl font-semibold text-[#081426] transition-colors group-hover:text-[#B58A42]">
                    {service.title}
                  </h3>
                  <p className="mt-4 flex-1 text-sm leading-7 text-[#081426]/75">
                    {service.description}
                  </p>
                  <Link
                    href="/services"
                    className="mt-6 inline-flex items-center text-sm font-bold text-[#B58A42]"
                  >
                    Learn More <span className="ml-2">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* REGISTRATIONS AND AFFILIATIONS */}
      <section className="bg-[#F7F5F0] px-6 py-20 text-[#081426] sm:px-10 lg:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#B58A42]">
            Registrations &amp; Affiliations
          </p>
          <h2 className="text-3xl font-semibold leading-tight text-[#081426] sm:text-4xl">
            Our Official <span className="text-[#B58A42]">Recognition</span>
          </h2>
          <div className="mx-auto mt-6 h-1 w-16 bg-[#B58A42]" />
          <p className="mx-auto mt-7 max-w-3xl leading-8 text-[#081426]/75">
            Official registration and affiliation details will be displayed
            here once Nivora Digital&apos;s verified documents and approvals
            are confirmed.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white px-6 py-20 sm:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#B58A42]">
              Why Nivora Digital
            </p>
            <h2 className="text-3xl font-semibold leading-tight text-[#081426] sm:text-4xl lg:text-5xl">
              Why Work <span className="text-[#B58A42]">With Us?</span>
            </h2>
            <div className="mx-auto mt-6 h-1 w-16 bg-[#B58A42]" />
            <p className="mt-7 leading-8 text-[#081426]/75">
              We focus on understanding your needs and making the process
              straightforward through communication and organised support.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason) => (
              <div
                key={reason.number}
                className="border-t-2 border-[#B58A42] bg-[#F7F5F0] p-7 text-[#081426] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-sm font-bold tracking-widest text-[#B58A42]">
                  {reason.number}
                </span>
                <h3 className="mt-5 text-lg font-semibold">{reason.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#081426]/75">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="bg-[#F7F5F0] px-6 py-20 sm:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#B58A42]">
              How We Work
            </p>
            <h2 className="text-3xl font-semibold leading-tight text-[#081426] sm:text-4xl lg:text-5xl">
              Our Working <span className="text-[#B58A42]">Process</span>
            </h2>
            <div className="mx-auto mt-6 h-1 w-16 bg-[#B58A42]" />
            <p className="mt-7 leading-8 text-[#081426]/75">
              A clear and organised approach helps us understand your needs
              and work through the agreed requirements.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {index !== steps.length - 1 && (
                  <div className="absolute left-16 top-8 hidden h-px w-[calc(100%-35px)] bg-[#B58A42] lg:block" />
                )}
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-[#B58A42] bg-[#F7F5F0] text-lg font-semibold text-[#B58A42]">
                  {step.number}
                </div>
                <h3 className="mt-7 text-xl font-semibold text-[#081426]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#081426]/75">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - SEPARATE FROM FOOTER */}
      <ContactBanner />

      {/* FOOTER */}
      <Footer />

      {/* FIXED WHATSAPP BUTTON */}
      <WhatsAppFloat />
    </main>
  );
}
