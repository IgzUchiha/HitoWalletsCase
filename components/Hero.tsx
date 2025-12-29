"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, Lock, Send, Wallet, TrendingUp, ChevronRight } from "lucide-react";

export default function Hero() {
  const appScreenshots = [
    { src: "/app-home.png", alt: "PSI Wallet Home Screen", label: "Home" },
    { src: "/app-send.png", alt: "Send Payment Screen", label: "Send" },
    { src: "/app-send-keyboard.png", alt: "Send Payment with Address", label: "Pay" },
    { src: "/app-activity.png", alt: "Activity Screen", label: "Activity" },
  ];

  return (
    <div className="relative bg-black overflow-hidden">
      {/* Gradient background effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#7CB518]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#7CB518]/10 rounded-full blur-3xl" />
      
      {/* Hero Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-3 py-1.5 bg-[#7CB518]/10 border border-[#7CB518]/30 rounded-full text-[#7CB518] text-sm font-medium backdrop-blur-sm">
              <span className="w-1.5 h-1.5 bg-[#7CB518] rounded-full mr-2 animate-pulse"></span>
              TestFlight Beta Available
            </div>
            
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
                PSI
                <span className="block bg-gradient-to-r from-[#7CB518] to-[#8FD119] bg-clip-text text-transparent">
                  Wallet
                </span>
              </h1>
              <p className="text-lg text-gray-400 leading-relaxed max-w-lg">
                Zero-knowledge privacy meets simplicity. A non-custodial wallet for storing, sending, and earning on crypto — as easy as Cash App.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://testflight.apple.com/join/a1MvTB4a"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-6 py-3.5 bg-[#7CB518] text-black font-semibold rounded-xl hover:bg-[#8FD119] transition-all shadow-lg shadow-[#7CB518]/25 hover:shadow-[#7CB518]/40"
              >
                <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Download Beta
                <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <Link
                href="/shop"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-white/5 text-white font-semibold rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-sm"
              >
                <ShoppingBag className="mr-2 h-5 w-5" />
                Shop Merch
              </Link>
            </div>

            {/* Quick stats */}
            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-2xl font-bold text-white">ZK</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Privacy</div>
              </div>
              <div className="w-px bg-gray-800" />
              <div>
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Non-Custodial</div>
              </div>
              <div className="w-px bg-gray-800" />
              <div>
                <div className="text-2xl font-bold text-white">iOS</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Native</div>
              </div>
            </div>
          </div>

          {/* Right - Single Phone Preview */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-64 md:w-72">
              <div className="relative aspect-[9/19] rounded-[2.5rem] overflow-hidden border border-gray-700 shadow-2xl shadow-black/50 bg-black">
                <Image
                  src={appScreenshots[0].src}
                  alt={appScreenshots[0].alt}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 right-4 z-30 px-3 py-1.5 bg-[#7CB518] rounded-lg text-black text-xs font-bold shadow-lg shadow-[#7CB518]/30">
                +$0.00 (0%)
              </div>
              <div className="absolute bottom-20 -left-8 z-30 px-3 py-2 bg-gray-900 border border-gray-700 rounded-xl text-white text-sm font-medium shadow-xl">
                <span className="text-[#7CB518]">●</span> ZK Protected
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Screenshots Gallery Section */}
      <div className="relative border-t border-gray-800/50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              See It In Action
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              A beautiful, intuitive interface designed for everyday crypto use
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {appScreenshots.map((screenshot, index) => (
              <div key={index} className="group relative">
                <div className="relative aspect-[9/19] rounded-2xl md:rounded-3xl overflow-hidden border border-gray-800 bg-black shadow-xl group-hover:border-[#7CB518]/50 transition-all duration-300 group-hover:shadow-[#7CB518]/10 group-hover:shadow-2xl">
                  <Image
                    src={screenshot.src}
                    alt={screenshot.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-3 text-center">
                  <span className="text-sm font-medium text-gray-400 group-hover:text-[#7CB518] transition-colors">
                    {screenshot.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Built Different
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              The privacy of a hardware wallet with the UX of your favorite payment app
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Lock, title: "ZK Privacy", desc: "Transactions protected by zero-knowledge proofs" },
              { icon: Wallet, title: "Self-Custody", desc: "Your keys, your crypto. Always." },
              { icon: Send, title: "Instant Send", desc: "Pay anyone with just their address" },
              { icon: TrendingUp, title: "Earn Yield", desc: "Put your stablecoins to work" },
            ].map((feature, i) => (
              <div key={i} className="group p-6 rounded-2xl bg-gradient-to-b from-gray-900/80 to-gray-900/40 border border-gray-800 hover:border-[#7CB518]/50 transition-all duration-300">
                <div className="w-12 h-12 mb-4 rounded-xl bg-[#7CB518]/10 flex items-center justify-center group-hover:bg-[#7CB518]/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-[#7CB518]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-500">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Assets bar */}
      <div className="border-t border-gray-800/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-4">
            <span className="text-gray-600 text-sm mr-4">Supported:</span>
            {[
              { symbol: "$", name: "USDC", color: "bg-[#7CB518]" },
              { symbol: "₿", name: "BTC", color: "bg-orange-500" },
              { symbol: "Ξ", name: "ETH", color: "bg-blue-500" },
              { symbol: "Ψ", name: "PSI", color: "bg-gradient-to-r from-[#7CB518] to-[#8FD119]" },
            ].map((asset, i) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2 bg-gray-900/50 border border-gray-800 rounded-full hover:border-gray-700 transition-colors">
                <div className={`w-6 h-6 ${asset.color} rounded-full flex items-center justify-center text-white text-xs font-bold`}>
                  {asset.symbol}
                </div>
                <span className="text-gray-300 text-sm font-medium">{asset.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
