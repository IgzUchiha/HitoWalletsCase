"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, Mail } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-black/90 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/logo.png"
              alt="PSI Logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <span className="text-xl font-bold text-white">PSI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-300 hover:text-[#7CB518] transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="flex items-center space-x-1 text-gray-300 hover:text-[#7CB518] transition-colors font-medium"
            >
              <ShoppingBag className="h-5 w-5" />
              <span>Shop</span>
            </Link>
            <Link
              href="/contact"
              className="flex items-center space-x-1 text-gray-300 hover:text-[#7CB518] transition-colors font-medium"
            >
              <Mail className="h-5 w-5" />
              <span>Contact</span>
            </Link>
            <a
              href="https://testflight.apple.com/join/a1MvTB4a"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#7CB518] text-black font-semibold rounded-lg hover:bg-[#8FD119] transition-colors"
            >
              Get Beta
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-white hover:bg-gray-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-white hover:bg-gray-800 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="block px-3 py-2 rounded-md text-white hover:bg-gray-800 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="flex items-center space-x-2">
                <ShoppingBag className="h-5 w-5" />
                <span>Shop</span>
              </div>
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 rounded-md text-white hover:bg-gray-800 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <span>Contact</span>
              </div>
            </Link>
            <a
              href="https://testflight.apple.com/join/a1MvTB4a"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 rounded-md bg-[#7CB518] text-black font-semibold text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Beta
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
