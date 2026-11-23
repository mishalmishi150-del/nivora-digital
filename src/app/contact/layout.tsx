
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Nivora Digital",
  description:
    "Get in touch with Nivora Digital for e-commerce solutions, import and export services, logistics, sourcing support and web development inquiries.",
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
