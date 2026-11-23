
"use client";

import Link from "next/link";
import Footer from "../components/Footer";

const services = [
  "E-Commerce Solutions",
  "Import Services",
  "Export Services",
  "Logistics & Shipping",
  "Buyer & Sourcing Support",
  "Web Development",
  "General Inquiry",
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F7F5F0] text-[#081426]">

      {/* HEADER */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-wrap items-center justify-between gap-5">
          <Link href="/">
            <img
              src="/logo.png"
              alt="Nivora Digital"
              className="w-16 h-14 object-contain"
            />
          </Link>

          <nav className="flex flex-wrap items-center gap-6 text-sm font-medium">
            <Link href="/" className="hover:text-[#B58A42]">Home</Link>
            <Link href="/about" className="hover:text-[#B58A42]">About Us</Link>
            <Link href="/services" className="hover:text-[#B58A42]">Services</Link>
            <Link href="/contact" className="text-[#B58A42]">Contact</Link>
          </nav>

          <Link
            href="#contact-form"
            className="bg-[#B58A42] text-white px-5 py-3 rounded-md text-sm font-semibold hover:bg-[#98702F]"
          >
            Send an Inquiry
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="relative bg-[#081426] text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 80% 20%, #D6B878 0, transparent 35%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
          <p className="text-[#D6B878] uppercase tracking-[4px] text-sm font-semibold mb-6">
            Contact Nivora Digital
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl mb-7">
            Let's Build Something{" "}
            <span className="text-[#D6B878]">Great Together.</span>
          </h1>

          <p className="text-gray-300 text-base md:text-lg leading-8 max-w-2xl mb-10">
            Have a business inquiry or looking for reliable business support
            and digital solutions? We're ready to hear from you.
          </p>

          <Link
            href="#contact-form"
            className="inline-block bg-[#B58A42] hover:bg-[#98702F] text-white font-semibold px-8 py-4 rounded-md transition"
          >
            Send an Inquiry
          </Link>

          <p className="mt-20 text-[#D6B878] text-sm tracking-[5px] font-semibold">
            YOUR BUSINESS. OUR COMMITMENT.
          </p>
        </div>
      </section>

      {/* GET IN TOUCH */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="max-w-3xl">
          <p className="text-[#B58A42] uppercase tracking-[3px] text-sm font-semibold mb-4">
            Get in Touch
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            How Can We Help You?
          </h2>

          <p className="text-gray-600 leading-8">
            Tell us what you're looking for, and let's explore how we can
            work together. Connect with our team for business inquiries,
            service information, and project discussions.
          </p>
        </div>
      </section>

      {/* CONTACT DETAILS + INQUIRY FORM */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid lg:grid-cols-2 gap-8 items-start">

          {/* LEFT SIDE - CONTACT DETAILS */}
          <div className="bg-[#081426] text-white p-7 md:p-10 rounded-xl border border-[#B58A42]/40 shadow-lg self-start">

            <p className="text-[#D6B878] uppercase tracking-[3px] text-sm font-semibold mb-4">
              Contact Details
            </p>

            <h2 className="text-3xl font-bold mb-4">
              Let's Start a Conversation.
            </h2>

            <p className="text-gray-300 leading-7 mb-8">
              Choose your preferred way to connect with Nivora Digital.
              We're ready to hear from you.
            </p>

            <div className="space-y-5">

              {/* WHATSAPP */}
              <a
                href="https://wa.me/923288699236"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 p-5 rounded-lg bg-white/5 border border-white/10 hover:border-[#D6B878] hover:bg-white/10 transition group"
              >
                <div className="w-14 h-14 shrink-0 rounded-full bg-[#B58A42] text-white flex items-center justify-center text-2xl">
                  ↗
                </div>

                <div>
                  <p className="text-gray-300 text-sm mb-1">WhatsApp</p>
                  <p className="font-bold text-lg group-hover:text-[#D6B878]">
                    03288699236
                  </p>
                </div>
              </a>

              {/* CALL */}
              <a
                href="tel:03288699236"
                className="flex items-center gap-5 p-5 rounded-lg bg-white/5 border border-white/10 hover:border-[#D6B878] hover:bg-white/10 transition group"
              >
                <div className="w-14 h-14 shrink-0 rounded-full bg-[#B58A42] text-white flex items-center justify-center text-2xl">
                  ☎
                </div>

                <div>
                  <p className="text-gray-300 text-sm mb-1">Call Us</p>
                  <p className="font-bold text-lg group-hover:text-[#D6B878]">
                    03288699236
                  </p>
                </div>
              </a>

              {/* EMAIL */}
              <a
                href="mailto:nivoradigital1029@gmail.com"
                className="flex items-center gap-5 p-5 rounded-lg bg-white/5 border border-white/10 hover:border-[#D6B878] hover:bg-white/10 transition group"
              >
                <div className="w-14 h-14 shrink-0 rounded-full bg-[#B58A42] text-white flex items-center justify-center text-2xl">
                  ✉
                </div>

                <div className="min-w-0">
                  <p className="text-gray-300 text-sm mb-1">Email Us</p>
                  <p className="font-bold text-base break-all group-hover:text-[#D6B878]">
                    nivoradigital1029@gmail.com
                  </p>
                </div>
              </a>

            </div>
          </div>

          {/* RIGHT SIDE - INQUIRY FORM */}
          <div
            id="contact-form"
            className="bg-white p-7 md:p-10 rounded-xl border border-gray-200 shadow-sm"
          >

            <div className="mb-8">
              <p className="text-[#B58A42] uppercase tracking-[3px] text-sm font-semibold mb-4">
                Send an Inquiry
              </p>

              <h2 className="text-3xl font-bold mb-4">
                Tell Us About Your Project
              </h2>

              <p className="text-gray-600 leading-7">
                Complete the form below to prepare your inquiry for WhatsApp.
              </p>
            </div>

            <form
              onSubmit={(event) => {
                event.preventDefault();

                const form = event.currentTarget;
                const data = new FormData(form);

                const name = data.get("name");
                const email = data.get("email");
                const phone = data.get("phone");
                const service = data.get("service");
                const message = data.get("message");

                const whatsappMessage =
                  `Hello Nivora Digital!\n\n` +
                  `I would like to make an inquiry.\n\n` +
                  `Full Name: ${name}\n` +
                  `Email Address: ${email}\n` +
                  `Phone Number: ${phone}\n` +
                  `Service Interested In: ${service}\n\n` +
                  `Message:\n${message}`;

                window.open(
                  `https://wa.me/923288699236?text=${encodeURIComponent(whatsappMessage)}`,
                  "_blank"
                );
              }}
              className="space-y-6"
            >

              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Full Name *
                </label>

                <input
                  id="name"
                  name="name"
                  required
                  placeholder="Enter your full name"
                  className="w-full bg-[#F7F5F0] border border-gray-300 rounded-md px-4 py-4 outline-none focus:border-[#B58A42]"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email Address *
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full bg-[#F7F5F0] border border-gray-300 rounded-md px-4 py-4 outline-none focus:border-[#B58A42]"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                  Phone Number *
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="Enter your phone number"
                  className="w-full bg-[#F7F5F0] border border-gray-300 rounded-md px-4 py-4 outline-none focus:border-[#B58A42]"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold mb-2">
                  Service Interested In *
                </label>

                <select
                  id="service"
                  name="service"
                  required
                  defaultValue=""
                  className="w-full bg-[#F7F5F0] border border-gray-300 rounded-md px-4 py-4 outline-none focus:border-[#B58A42]"
                >
                  <option value="" disabled>Select a service</option>

                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">
                  Your Message *
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us about your inquiry or project..."
                  className="w-full bg-[#F7F5F0] border border-gray-300 rounded-md px-4 py-4 outline-none focus:border-[#B58A42] resize-y"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#B58A42] hover:bg-[#98702F] text-white font-semibold py-4 rounded-md transition"
              >
                Continue to WhatsApp ↗
              </button>

              <p className="text-center text-gray-500 text-sm">
                WhatsApp will open with your inquiry ready to send. You'll need
                to press Send in WhatsApp.
              </p>

            </form>
          </div>

        </div>
      </section>

      {/* SHARED FOOTER */}
      <Footer />
    </main>
  );
}
