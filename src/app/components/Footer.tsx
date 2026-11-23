
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  const navClass = (path: string) =>
    `transition-colors ${
      pathname === path
        ? "text-[#D6B878] font-semibold"
        : "text-white/75 hover:text-[#D6B878]"
    }`;

  return (
    <footer className="bg-[#081426] text-white px-6 py-14">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

        {/* BRAND */}
        <div>
          <Link href="/">
            <img
              src="/logo.png"
              alt="Nivora Digital"
              className="w-16 h-16 object-contain mb-5"
            />
          </Link>

          <p className="text-gray-300 leading-7">
            Connecting businesses with practical support and digital
            solutions to help them move forward.
          </p>
        </div>

        {/* EXPLORE */}
        <div>
          <h3 className="text-[#D6B878] font-bold mb-5">Explore</h3>

          <div className="flex flex-col gap-3">
            <Link href="/" className={navClass("/")}>
              Home
            </Link>

            <Link href="/about" className={navClass("/about")}>
              About Us
            </Link>

            <Link href="/services" className={navClass("/services")}>
              Services
            </Link>

            <Link href="/contact" className={navClass("/contact")}>
              Contact Us
            </Link>
          </div>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-[#D6B878] font-bold mb-5">Contact</h3>

          <a
            href="mailto:nivoradigital1029@gmail.com"
            className="block text-gray-300 mb-3 hover:text-[#D6B878] transition-colors"
          >
            nivoradigital1029@gmail.com
          </a>

          <a
            href="tel:03288699236"
            className="block text-gray-300 mb-3 hover:text-[#D6B878] transition-colors"
          >
            03288699236
          </a>

          <a
            href="https://wa.me/923288699236"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D6B878] hover:underline"
          >
            Chat with us ↗
          </a>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="max-w-7xl mx-auto border-t border-gray-700 mt-12 pt-6 text-center text-gray-400 text-sm">
        © 2026 Nivora Digital. All rights reserved.
      </div>
    </footer>
  );
}
