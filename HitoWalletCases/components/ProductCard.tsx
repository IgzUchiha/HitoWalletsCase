"use client";

import { useState } from "react";
import { ShoppingBag, Check } from "lucide-react";
import PaymentModal from "./PaymentModal";
import ImageCarousel from "./ImageCarousel";
import { formatPrice } from "@/lib/utils";
import { updateStock } from "@/lib/inventory";
import type { Product } from "@/lib/inventory";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentStock, setCurrentStock] = useState(product.stock);

  const handlePurchaseSuccess = () => {
    if (updateStock(1, product.id)) {
      setCurrentStock(prev => prev - 1);
    }
  };

  return (
    <>
      <div className="bg-gray-900 border border-green-900 rounded-xl shadow-lg overflow-hidden hover:border-green-600 transition-all">
        {/* Product Image Carousel */}
        <ImageCarousel images={product.images} alt={product.name} />

        {/* Product Details */}
        <div className="p-6 space-y-4">
          {/* Header */}
          <div>
            <h3 className="text-2xl font-bold text-white">{product.name}</h3>
            <p className="text-gray-300 mt-2 leading-relaxed">{product.description}</p>
          </div>

          {/* Features */}
          <div className="space-y-2">
            <h4 className="font-semibold text-green-500">Features:</h4>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Price */}
          <div className="pt-4 border-t border-green-900">
            <div className="mb-4">
              <div className="text-3xl font-bold text-white">
                {formatPrice(product.price)}
              </div>
              <div className="text-sm text-gray-400">or {product.priceEth} ETH</div>
            </div>

            {/* Buy Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full flex items-center justify-center space-x-2 py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl"
            >
              <ShoppingBag className="h-5 w-5" />
              <span>Buy Now</span>
            </button>
          </div>
        </div>
      </div>

      {/* Payment Modal */}
      <PaymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onPurchaseSuccess={handlePurchaseSuccess}
        product={{
          id: product.id,
          name: product.name,
          price: product.price,
          priceEth: product.priceEth,
        }}
      />
    </>
  );
}
