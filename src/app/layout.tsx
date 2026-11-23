
import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const headingFont = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bodyFont = Jost({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Nivora Digital | Professional Agency",
    template: "%s | Nivora Digital",
  },
  description:
    "Welcome to Nivora Digital. Explore our agency, services and professional approach.",
};

function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/923288699236"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Nivora Digital on WhatsApp"
      className="fixed bottom-6 right-5 z-[999] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform duration-300 hover:scale-110 sm:bottom-7 sm:right-7 sm:h-16 sm:w-16"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="currentColor"
        className="h-8 w-8"
        aria-hidden="true"
      >
        <path d="M16.01 3C8.84 3 3.01 8.83 3.01 16c0 2.29.6 4.52 1.74 6.49L3 29l6.67-1.7A12.94 12.94 0 0 0 16 29c7.17 0 13-5.83 13-13S23.18 3 16.01 3Zm0 23.8c-1.96 0-3.88-.53-5.55-1.54l-.4-.24-3.96 1.01 1.05-3.86-.26-.42A10.76 10.76 0 0 1 5.2 16c0-5.96 4.85-10.8 10.81-10.8S26.8 10.04 26.8 16s-4.84 10.8-10.79 10.8Zm5.93-8.09c-.32-.16-1.91-.94-2.21-1.05-.3-.11-.51-.16-.73.16-.21.32-.83 1.05-1.02 1.27-.19.22-.38.24-.7.08-.32-.16-1.36-.5-2.59-1.6-.96-.85-1.61-1.9-1.8-2.22-.19-.32-.02-.5.14-.66.14-.14.32-.38.48-.57.16-.19.21-.32.32-.54.11-.21.05-.4-.03-.56-.08-.16-.73-1.75-1-2.4-.26-.63-.53-.54-.73-.55h-.62c-.22 0-.57.08-.86.4-.3.32-1.13 1.1-1.13 2.7 0 1.59 1.16 3.13 1.32 3.35.16.22 2.28 3.48 5.52 4.88.77.33 1.37.53 2.02.13.62-.09 1.91-.78 2.18-1.54.27-.75.27-1.4.19-1.54-.08-.13-.3-.21-.62-.37Z" />
      </svg>
    </a>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
