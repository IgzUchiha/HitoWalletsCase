"use client";

import Link from "next/link";
import { ShoppingBag, Shield, Award, Sparkles } from "lucide-react";
import ImageCarousel from "./ImageCarousel";
import { product } from "@/lib/inventory";

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Psichedelic Labs
                <span className="block text-indigo-600">Innovation Unlocked</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Building on-chain, 3D crafting the future, and pioneering AI wearable technology. Where blockchain meets physical innovation.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center px-8 py-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl"
              >
                <ShoppingBag className="mr-2 h-5 w-5" />
                Shop Now
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-indigo-600 font-semibold rounded-lg border-2 border-indigo-600 hover:bg-indigo-50 transition-colors"
              >
                Contact Us
              </Link>
            </div>

            {/* Stats */}
            <div className="pt-8 flex gap-12">
              <div>
                <div className="text-3xl font-bold text-indigo-600">100%</div>
                <div className="text-sm text-gray-600">Handcrafted</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-indigo-600">3D</div>
                <div className="text-sm text-gray-600">Printed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-indigo-600">RFID</div>
                <div className="text-sm text-gray-600">Protected</div>
              </div>
            </div>
          </div>

          {/* Right Column - Product Image Carousel */}
          <div className="relative">
            <div className="shadow-2xl">
              <ImageCarousel
                images={product.images}
                alt="Premium Web3 Wallet Case"
                priority
              />
            </div>
            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg">
              <Shield className="h-8 w-8 text-green-600" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-4 shadow-lg">
              <Award className="h-8 w-8 text-yellow-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Why Choose Psichedelic Labs?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full">
                <Shield className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">RFID Protection</h3>
              <p className="text-gray-600">
                Advanced RFID blocking technology keeps your cards safe from electronic theft.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full">
                <Sparkles className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Premium Materials</h3>
              <p className="text-gray-600">
                High-quality 3D printer filament crafted with precision for durability and modern style.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full">
                <Award className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Precision Crafted</h3>
              <p className="text-gray-600">
                Each case is precision 3D printed to ensure consistent quality and perfect fit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
