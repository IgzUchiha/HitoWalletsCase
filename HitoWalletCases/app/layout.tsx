import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Psichedelic Labs - Premium Tech & 3D Printed Products",
  description: "Shop premium tech products and 3D printed items. AI wearables, hardware wallets, and custom cases. Pay with crypto or credit card.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <footer className="bg-gray-900 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Psichedelic Labs. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
