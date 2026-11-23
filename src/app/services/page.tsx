
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Nivora Digital",
  description:
    "Explore Nivora Digital's business and digital services, including e-commerce solutions, import and export services, logistics, buyer sourcing support and web development.",
};

const services = [
  {
    number: "01",
    id: "ecommerce",
    slug: "e-commerce-solutions",
    title: "E-Commerce Solutions",
    description:
      "Build, manage and grow your online business with reliable sourcing and end-to-end fulfilment support.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=85",
    details:
      "We support businesses looking to establish and develop their online selling operations. Our e-commerce support focuses on helping you organise your online business requirements and plan the next steps.",
  },
  {
    number: "02",
    id: "import",
    slug: "import-services",
    title: "Import Services",
    description:
      "Source products from international suppliers and navigate the import process with greater confidence.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=85",
    details:
      "Our import support helps businesses explore international product sourcing and understand the steps involved in bringing products into their target market.",
  },
  {
    number: "03",
    id: "export",
    slug: "export-services",
    title: "Export Services",
    description:
      "Take your products into new markets with export coordination and international trade support.",
    image:
      "https://images.unsplash.com/photo-1774929108070-b60d3879e071?auto=format&fit=crop&w=1200&q=85",
    details:
      "We provide export coordination and international trade support to help businesses plan their product movement into new markets.",
  },
  {
    number: "04",
    id: "logistics",
    slug: "logistics-shipping",
    title: "Logistics & Shipping",
    description:
      "Coordinate the movement of goods with practical shipping and supply-chain solutions.",
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1000&q=85",
    details:
      "Our logistics and shipping support focuses on coordinating the movement of goods and helping businesses consider practical supply-chain arrangements.",
  },
  {
    number: "05",
    id: "sourcing",
    slug: "buyer-sourcing-support",
    title: "Buyer & Sourcing Support",
    description:
      "Connect with suitable suppliers, evaluate sourcing options and simplify your purchasing process.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=85",
    details:
      "We help businesses explore suitable suppliers, compare sourcing options and organise their purchasing requirements.",
  },
  {
    number: "06",
    id: "web-development",
    slug: "web-development",
    title: "Web Development",
    description:
      "Modern, responsive websites and professional digital solutions designed to strengthen your brand and grow your business online.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1000&q=85",
    details:
      "We create modern, responsive websites and digital solutions designed to present your business professionally and support your online presence.",
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

          <Link href="/about" className="hover:text-[#B58A42]">
            About Us
          </Link>

          <Link href="/services" className="text-[#B58A42]">
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

function ContactBanner() {
  return (
    <section className="bg-white px-5 py-12 sm:px-8 lg:py-14">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-7 rounded-2xl bg-[#081426] px-7 py-9 shadow-xl sm:px-10 lg:flex-row lg:items-center lg:px-12 lg:py-10">
        <div className="max-w-3xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#B58A42]">
            Let&apos;s Discuss Your Goals
          </p>

          <h2 className="text-2xl font-semibold leading-tight text-white sm:text-3xl lg:text-4xl">
            Need Help Choosing a Service?
          </h2>

          <p className="mt-3 text-sm leading-7 text-white/85 sm:text-base">
            Tell us about your requirements and get in touch with Nivora Digital.
          </p>
        </div>

        <Link
          href="/contact"
          className="inline-flex shrink-0 items-center justify-center bg-[#B58A42] px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#081426]"
        >
          Contact Us <span className="ml-3 text-lg">→</span>
        </Link>
      </div>
    </section>
  );
}

function Footer() {
  const navClass = (path: string) =>
    `transition-colors ${
      path === "/services"
        ? "text-[#D6B878]"
        : "text-white/75 hover:text-[#D6B878]"
    }`;

  return (
    <footer className="bg-[#081426] text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 sm:px-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-10 lg:py-16">
        {/* BRAND */}
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

        {/* EXPLORE */}
        <div>
          <h3 className="text-base font-semibold text-white">Explore</h3>
          <div className="mt-5 h-0.5 w-10 bg-[#B58A42]" />

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <Link href="/" className={navClass("/")}>
                Home
              </Link>
            </li>

            <li>
              <Link href="/about" className={navClass("/about")}>
                About Us
              </Link>
            </li>

            <li>
              <Link href="/services" className={navClass("/services")}>
                Services
              </Link>
            </li>

            <li>
              <Link href="/contact" className={navClass("/contact")}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* OUR SERVICES */}
        <div>
          <h3 className="text-base font-semibold text-white">Our Services</h3>
          <div className="mt-5 h-0.5 w-10 bg-[#B58A42]" />

          <ul className="mt-6 space-y-4 text-sm text-white/75">
            {services.map((service) => (
              <li key={service.id}>
                <Link
                  href={`/services/${service.slug}`}
                  className="transition-colors hover:text-[#B58A42]"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-base font-semibold text-white">
            Let&apos;s Connect
          </h3>
          <div className="mt-5 h-0.5 w-10 bg-[#B58A42]" />

          <div className="mt-6 space-y-5 text-sm">
            <div>
              <p className="mb-2 text-xs uppercase tracking-widest text-white/60">
                Email
              </p>

              <a
                href="mailto:nivoradigital1029@gmail.com"
                className="break-all text-[#B58A42] transition-colors hover:text-white"
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
                className="text-[#B58A42] transition-colors hover:text-white"
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
                className="text-[#B58A42] transition-colors hover:text-white"
              >
                Chat with us ↗
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-white/20">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-center text-xs text-white/65 sm:px-10 md:flex-row">
          <p>
            © {new Date().getFullYear()} Nivora Digital. All Rights Reserved.
          </p>

          <Link
            href="/"
            className="font-semibold text-[#B58A42] hover:text-white"
          >
            Back to Home ↑
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-[#081426]">
      <Header />

      {/* SERVICES PAGE INTRO */}
      <section className="bg-[#081426] px-6 py-20 text-white sm:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-[#B58A42]">
            What We Offer
          </p>

          <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Our Business &amp;{" "}
            <span className="text-[#B58A42]">Digital Services</span>
          </h1>

          <div className="mt-7 h-1 w-16 bg-[#B58A42]" />

          <p className="mt-7 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
            Explore our services and discover practical business support,
            international trade solutions and professional digital services
            for your requirements.
          </p>

          <div className="mt-8">
            <Link
              href="/"
              className="text-sm font-semibold text-[#B58A42] hover:text-white"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* ALL SERVICES */}
      <section className="bg-white px-6 py-20 sm:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#B58A42]">
              Explore Our Expertise
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#081426] sm:text-4xl">
              Services We Provide
            </h2>

            <div className="mt-5 h-1 w-16 bg-[#B58A42]" />
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.id}
                id={service.id}
                className="group flex h-full scroll-mt-8 flex-col overflow-hidden border border-[#081426]/15 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative h-60 shrink-0 overflow-hidden bg-[#081426]">
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
                  <h2 className="text-xl font-semibold text-[#081426] transition-colors group-hover:text-[#B58A42]">
                    {service.title}
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-[#081426]/75">
                    {service.description}
                  </p>

                  <p className="mt-4 flex-1 border-t border-[#081426]/15 pt-4 text-sm leading-7 text-[#081426]/70">
                    {service.details}
                  </p>

                  <Link
                    href={`/services/${service.slug}`}
                    className="mt-6 inline-flex w-fit items-center border-b-2 border-[#B58A42] pb-2 text-sm font-bold text-[#081426] transition-colors hover:text-[#B58A42]"
                  >
                    View Service Details <span className="ml-2">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SEPARATE CTA BANNER */}
      <ContactBanner />

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
