
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "../../components/Footer";

const services = [
  {
    slug: "e-commerce-solutions",
    title: "E-Commerce Solutions",
    number: "01",
    description:
      "Build, manage and grow your online business with reliable sourcing and end-to-end fulfilment support.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=85",
    highlights: ["Online Business Support", "Product Sourcing"],
    overview:
      "Develop your online business with practical support for planning, product sourcing and e-commerce operations. We help you organise your requirements and explore suitable ways to strengthen your online presence.",
    points: [
      ["Online Business Planning", "Organise your business requirements and explore practical ways to develop your online operations."],
      ["Product Sourcing", "Explore suitable products and sourcing options according to your business requirements."],
      ["E-Commerce Operations", "Get support with organising the different requirements involved in running an online business."],
      ["Order Coordination", "Keep product and order requirements organised throughout the process."],
      ["Business Development Support", "Discuss practical ways to improve and develop your online business."],
      ["E-Commerce Guidance", "Understand the steps involved in planning and managing your online selling operations."],
    ],
    faqs: [
      ["What e-commerce services do you offer?", "We offer support with online business planning, product sourcing, order coordination and e-commerce requirements."],
      ["Can you help with product sourcing?", "Yes. We can discuss your product requirements and explore suitable sourcing options."],
      ["Can I discuss a new online business idea?", "Yes. Contact us to discuss your idea and the support you may need."],
      ["How can I get started?", "Share your business requirements with us through our contact page or WhatsApp."],
    ],
  },
  {
    slug: "import-services",
    title: "Import Services",
    number: "02",
    description:
      "Source products from international suppliers and navigate the import process with greater confidence.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=85",
    highlights: ["Product Sourcing", "Cargo Coordination"],
    overview:
      "Explore practical support for international purchasing and import requirements. From supplier discovery to shipment planning, we help you organise the different steps involved in your import journey.",
    points: [
      ["Supplier Sourcing", "Explore suitable international suppliers and product options that match your business requirements."],
      ["Product & Order Coordination", "Organise product specifications, order details and supplier communication."],
      ["International Shipping", "Discuss shipping requirements and practical transportation options for your imported goods."],
      ["Import Documentation Guidance", "Understand the documentation and compliance requirements that may apply to your shipment."],
      ["Delivery Coordination", "Plan the movement of goods towards your required delivery destination."],
      ["Import Process Guidance", "Discuss import planning, supplier coordination and the steps involved in international trade."],
    ],
    faqs: [
      ["Can you help me find international suppliers?", "We can discuss your product requirements and help you explore suitable supplier options."],
      ["Can I discuss shipping requirements?", "Yes. Share your shipment details so we can discuss suitable shipping requirements."],
      ["Do import shipments require documentation?", "Documentation requirements can vary depending on the products and destination. We can discuss the requirements relevant to your enquiry."],
      ["How can I request an import quotation?", "Contact our team with your product, quantity and sourcing requirements to discuss the next steps."],
    ],
  },
  {
    slug: "export-services",
    title: "Export Services",
    number: "03",
    description:
      "Take your products into new markets with export coordination and international trade support.",
    image:
      "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1400&q=85",
    highlights: ["Export Planning", "Trade Coordination"],
    overview:
      "Plan your international product movement with practical export support. We help you organise export requirements, consider shipment arrangements and understand the steps involved in reaching your target markets.",
    points: [
      ["Export Requirements Planning", "Discuss your products, target destinations and export requirements."],
      ["International Trade Coordination", "Organise the key details involved in your international trade requirements."],
      ["Shipment Planning", "Explore practical shipment and transportation arrangements for your goods."],
      ["Export Documentation Guidance", "Understand the documentation requirements that may apply to your export shipment."],
      ["Supplier & Buyer Coordination", "Organise relevant communication and requirements between the parties involved."],
      ["Export Process Guidance", "Discuss the steps involved in planning and coordinating an export journey."],
    ],
    faqs: [
      ["Can you help me plan an export shipment?", "Yes. Share your product and destination details so we can discuss the relevant requirements."],
      ["Which countries can I export to?", "Export possibilities and requirements depend on the product and destination. Contact us to discuss your target market."],
      ["Can you guide me about export documentation?", "We can discuss the documentation requirements that may apply to your export enquiry."],
      ["How do I get started?", "Contact our team with your product details, quantity and intended destination."],
    ],
  },
  {
    slug: "logistics-shipping",
    title: "Logistics & Shipping",
    number: "04",
    description:
      "Coordinate the movement of goods with practical shipping and supply-chain solutions.",
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1400&q=85",
    highlights: ["Shipping Coordination", "Supply-Chain Support"],
    overview:
      "Organise the movement of goods with practical logistics and shipping support. We help businesses discuss transportation requirements, shipment planning and the different arrangements involved in moving products.",
    points: [
      ["Shipping Requirements", "Discuss shipment details, transportation needs and delivery requirements."],
      ["Goods Movement Planning", "Organise the movement of products according to your business requirements."],
      ["Transportation Options", "Explore suitable transportation arrangements for your shipment."],
      ["Supply-Chain Coordination", "Discuss the different activities involved in organising your supply chain."],
      ["Shipment Planning Support", "Keep shipment details and related requirements organised."],
      ["Delivery Arrangements", "Discuss delivery requirements and possible arrangements for your goods."],
    ],
    faqs: [
      ["What logistics support can I discuss?", "You can discuss shipping, transportation, goods movement and delivery requirements with our team."],
      ["Can you help plan international shipments?", "Share your shipment details and destination so we can discuss the relevant arrangements."],
      ["What information is needed for a shipping enquiry?", "Product details, approximate quantity, origin and destination are useful starting points."],
      ["How can I discuss my logistics requirements?", "Contact us through WhatsApp or our contact page with your shipment details."],
    ],
  },
  {
    slug: "buyer-sourcing-support",
    title: "Buyer & Sourcing Support",
    number: "05",
    description:
      "Connect with suitable suppliers, evaluate sourcing options and simplify your purchasing process.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85",
    highlights: ["Supplier Discovery", "Purchasing Support"],
    overview:
      "Explore suitable suppliers and organise your purchasing requirements with practical sourcing support. We help you discuss product specifications, compare sourcing options and coordinate relevant supplier communication.",
    points: [
      ["Supplier Discovery", "Explore potential suppliers according to your product and business requirements."],
      ["Product Sourcing", "Discuss product options and sourcing requirements for your purchasing needs."],
      ["Sourcing Options Comparison", "Review available options according to your product specifications and requirements."],
      ["Purchasing Requirements", "Organise product details, quantities and purchasing priorities."],
      ["Supplier Communication", "Coordinate relevant product and purchasing discussions with suppliers."],
      ["Buyer Support", "Discuss your buying requirements and explore practical next steps."],
    ],
    faqs: [
      ["Can you help me find suitable suppliers?", "We can discuss your product requirements and explore suitable sourcing options."],
      ["What product details should I provide?", "Product name, specifications, quantity and preferred sourcing location are helpful."],
      ["Can you help compare sourcing options?", "We can discuss different sourcing options according to your stated requirements."],
      ["How can I submit a sourcing enquiry?", "Contact us with your product details and purchasing requirements."],
    ],
  },
  {
    slug: "web-development",
    title: "Web Development",
    number: "06",
    description:
      "Modern, responsive websites and professional digital solutions designed to strengthen your brand and grow your business online.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1400&q=85",
    highlights: ["Modern Websites", "Responsive Design"],
    overview:
      "Build a professional online presence with modern website development and digital solutions. We focus on creating organised, responsive website experiences that present your business and its services clearly.",
    points: [
      ["Business Website Development", "Create a professional website to introduce your business, products and services."],
      ["Responsive Website Layouts", "Develop layouts designed to work across desktop, tablet and mobile screens."],
      ["Website Design", "Organise page layouts and visual elements to present your business professionally."],
      ["Business Website Pages", "Structure important pages such as Home, About, Services and Contact."],
      ["Website Content Organisation", "Present your business information and services in a clear and organised way."],
      ["Digital Solutions", "Discuss digital requirements that support your business's online presence."],
    ],
    faqs: [
      ["What types of websites can you develop?", "We can discuss business websites and other website requirements according to your project."],
      ["Will my website work on mobile devices?", "Responsive layouts are part of our website development approach."],
      ["Can I request a website for my business?", "Yes. Share your business type, goals and required website features with us."],
      ["How can I discuss my website project?", "Contact our team with your project details to discuss the next steps."],
    ],
  },
];

function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 px-6 py-5">
        <Link href="/" aria-label="Nivora Digital Home">
          <img
            src="/logo.png"
            alt="Nivora Digital"
            className="h-14 w-16 object-contain"
          />
        </Link>

        <nav className="flex flex-wrap items-center gap-6 text-sm font-medium">
          <Link href="/" className="transition-colors hover:text-[#B58A42]">
            Home
          </Link>
          <Link href="/about" className="transition-colors hover:text-[#B58A42]">
            About Us
          </Link>
          <Link href="/services" className="text-[#B58A42]">
            Services
          </Link>
          <Link href="/contact" className="transition-colors hover:text-[#B58A42]">
            Contact
          </Link>
        </nav>

        <Link
          href="/contact"
          className="rounded-md bg-[#B58A42] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#98702F]"
        >
          Send an Inquiry
        </Link>
      </div>
    </header>
  );
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) notFound();

  const message = encodeURIComponent(
    `Hello Nivora Digital, I am interested in your ${service.title}. Please guide me about the process and requirements.`
  );
  const whatsappLink = `https://wa.me/923288699236?text=${message}`;

  return (
    <main className="min-h-screen bg-white text-[#081426]">
      <Header />

      {/* HERO */}
      <section className="bg-[#081426] text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 sm:px-10 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-[#D6B878]">
              Nivora Digital / Our Services / {service.title}
            </p>
            <span className="inline-flex h-11 w-11 items-center justify-center bg-[#B58A42] text-sm font-bold">
              {service.number}
            </span>
            <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              {service.title}
            </h1>
            <div className="mt-6 h-1 w-16 bg-[#B58A42]" />
            <p className="mt-7 max-w-xl text-base leading-8 text-white/80 sm:text-lg">
              {service.description}
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#B58A42] px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#081426]"
              >
                Discuss Your Requirements →
              </a>
              <Link
                href="/services"
                className="border border-white/50 px-6 py-4 text-sm font-semibold text-white transition-colors hover:border-[#B58A42] hover:bg-[#B58A42]"
              >
                Explore Services
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {service.highlights.map((highlight) => (
                <span key={highlight} className="border border-white/20 px-4 py-2 text-xs text-white/80">
                  {highlight}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -bottom-4 -left-4 h-24 w-24 border-b-2 border-l-2 border-[#B58A42]" />
            <img
              src={service.image}
              alt={`${service.title} – Nivora Digital`}
              className="relative z-10 h-[320px] w-full object-cover shadow-2xl sm:h-[430px]"
            />
            <div className="absolute -right-4 -top-4 h-24 w-24 border-r-2 border-t-2 border-[#B58A42]" />
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="px-6 py-20 sm:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#B58A42]">
              Service Overview
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
              Practical Support for Your Business
            </h2>
            <div className="mt-6 h-1 w-16 bg-[#B58A42]" />
            <p className="mt-7 leading-8 text-[#081426]/75">
              {service.overview}
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {service.highlights.map((highlight, index) => (
              <div key={highlight} className="border border-[#081426]/10 bg-[#F7F5F0] p-7">
                <span className="text-3xl font-semibold text-[#B58A42]">
                  0{index + 1}
                </span>
                <h3 className="mt-4 text-lg font-semibold">{highlight}</h3>
                <p className="mt-2 text-sm leading-7 text-[#081426]/70">
                  Discuss your requirements with our team.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="bg-[#F7F5F0] px-6 py-20 sm:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#B58A42]">
              What We Offer
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
              {service.title} Support for Your Business
            </h2>
            <div className="mt-6 h-1 w-16 bg-[#B58A42]" />
            <p className="mt-6 leading-8 text-[#081426]/75">
              Explore the areas where we can discuss support for your business requirements.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {service.points.map(([title, description], index) => (
              <article key={title} className="flex flex-col border border-[#081426]/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <span className="text-sm font-bold tracking-widest text-[#B58A42]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-xl font-semibold">{title}</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-[#081426]/70">
                  {description}
                </p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-fit border-b-2 border-[#B58A42] pb-2 text-sm font-bold text-[#081426] transition-colors hover:text-[#B58A42]"
                >
                  Enquire Now →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-6 py-20 sm:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#B58A42]">
              How It Works
            </p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              A Clearer Path to Getting Started
            </h2>
            <div className="mx-auto mt-6 h-1 w-16 bg-[#B58A42]" />
            <p className="mt-6 leading-8 text-[#081426]/70">
              Start with your requirements and discuss the next steps with our team.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["01", "Share Your Requirements", "Tell us about your business needs, goals and expectations."],
              ["02", "Discuss Your Options", "We discuss your requirements and explore suitable ways forward."],
              ["03", "Plan the Next Steps", "Organise the relevant details and agree on the next steps."],
              ["04", "Move Forward", "Proceed with the agreed work and stay in communication."],
            ].map(([number, title, description]) => (
              <div key={number} className="border-t-2 border-[#B58A42] bg-[#F7F5F0] p-7">
                <span className="text-3xl font-semibold text-[#B58A42]">{number}</span>
                <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#081426]/70">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-[#F7F5F0] px-6 py-20 sm:px-10 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#B58A42]">
              FAQs
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
              Questions About {service.title}?
            </h2>
            <div className="mt-6 h-1 w-16 bg-[#B58A42]" />
            <p className="mt-6 leading-8 text-[#081426]/70">
              Every business requirement is different. Contact our team to discuss your needs and explore the next steps.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex bg-[#B58A42] px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#081426]"
            >
              Ask Us on WhatsApp →
            </a>
          </div>

          <div className="space-y-4">
            {service.faqs.map(([question, answer]) => (
              <details key={question} className="group border border-[#081426]/10 bg-white p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left font-semibold">
                  {question}
                  <span className="text-2xl text-[#B58A42] transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 border-t border-[#081426]/10 pt-4 text-sm leading-7 text-[#081426]/70">
                  {answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-white px-6 py-16 sm:px-10">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-7 rounded-xl bg-[#081426] px-7 py-10 sm:px-10 lg:flex-row lg:items-center lg:px-14 lg:py-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#D6B878]">
              Let&apos;s Discuss Your Requirements
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
              Planning Your Next Business Step?
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/75">
              Share your requirements with Nivora Digital and discuss the options available for your business.
            </p>
          </div>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-[#B58A42] px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#081426]"
          >
            Contact Our Team →
          </a>
        </div>

        <div className="mx-auto mt-8 max-w-6xl">
          <Link
            href="/services"
            className="text-sm font-semibold text-[#081426] transition-colors hover:text-[#B58A42]"
          >
            ← Back to All Services
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
