"use client";

import { useState } from "react";
import { ShoppingBag, Check, Plus } from "lucide-react";
import PaymentModal from "./PaymentModal";
import ImageCarousel from "./ImageCarousel";
import { formatPrice } from "@/lib/utils";
import { updateStock } from "@/lib/inventory";
import type { Product, ProductAddon } from "@/lib/inventory";

interface ProductCardProps {
  product: Product;
}

interface SelectedAddon {
  addon: ProductAddon;
  inputValue?: string;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentStock, setCurrentStock] = useState(product.stock);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedAddons, setSelectedAddons] = useState<SelectedAddon[]>([]);
  const [addonInputs, setAddonInputs] = useState<{ [key: string]: string }>({});

  const handlePurchaseSuccess = () => {
    if (updateStock(1, product.id)) {
      setCurrentStock(prev => prev - 1);
    }
  };

  const toggleAddon = (addon: ProductAddon) => {
    const isSelected = selectedAddons.some(sa => sa.addon.id === addon.id);
    if (isSelected) {
      setSelectedAddons(selectedAddons.filter(sa => sa.addon.id !== addon.id));
      // Clear input value
      const newInputs = { ...addonInputs };
      delete newInputs[addon.id];
      setAddonInputs(newInputs);
    } else {
      setSelectedAddons([...selectedAddons, { addon, inputValue: addonInputs[addon.id] || "" }]);
    }
  };

  const updateAddonInput = (addonId: string, value: string) => {
    setAddonInputs({ ...addonInputs, [addonId]: value });
    // Update the selected addon's input value
    setSelectedAddons(selectedAddons.map(sa => 
      sa.addon.id === addonId ? { ...sa, inputValue: value } : sa
    ));
  };

  const calculateTotalPrice = () => {
    let total = product.price;
    selectedAddons.forEach(sa => {
      total += sa.addon.price;
    });
    return total;
  };

  const calculateTotalPriceEth = () => {
    let total = product.priceEth;
    selectedAddons.forEach(sa => {
      total += sa.addon.priceEth;
    });
    return total.toFixed(4);
  };

  const canAddToCart = () => {
    if (product.hasVariants && !selectedSize) return false;
    // Check if all selected addons with required inputs have values
    for (const sa of selectedAddons) {
      if (sa.addon.requiresInput && !sa.inputValue) {
        return false;
      }
    }
    return true;
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

          {/* Size Selection */}
          {product.hasVariants && product.variants && product.variants.length > 0 && (
            <div className="space-y-2">
              <h4 className="font-semibold text-green-500">Select Size:</h4>
              <div className="grid grid-cols-3 gap-2">
                {product.variants[0].options.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-2 px-4 rounded-lg border-2 transition-all ${
                      selectedSize === size
                        ? "bg-green-600 border-green-600 text-white"
                        : "bg-black border-green-900 text-gray-300 hover:border-green-600"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Add-ons */}
          {product.addons && product.addons.length > 0 && (
            <div className="space-y-3">
              <h4 className="font-semibold text-green-500">Customize Your Order:</h4>
              {product.addons.map((addon) => {
                const isSelected = selectedAddons.some(sa => sa.addon.id === addon.id);
                return (
                  <div key={addon.id} className="space-y-2">
                    <div 
                      className={`border-2 rounded-lg p-3 cursor-pointer transition-all ${
                        isSelected
                          ? "bg-green-900 border-green-600"
                          : "bg-black border-green-900 hover:border-green-700"
                      }`}
                      onClick={() => toggleAddon(addon)}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-2">
                          <div className={`w-5 h-5 rounded border-2 flex items-center justify-center mt-0.5 ${
                            isSelected ? "bg-green-600 border-green-600" : "border-gray-600"
                          }`}>
                            {isSelected && <Check className="h-3 w-3 text-white" />}
                          </div>
                          <div>
                            <div className="font-semibold text-white">{addon.name}</div>
                            <div className="text-sm text-gray-400">{addon.description}</div>
                          </div>
                        </div>
                        <div className="text-green-500 font-semibold whitespace-nowrap ml-2">
                          +${addon.price.toFixed(2)}
                        </div>
                      </div>
                    </div>
                    
                    {/* Input field for addon */}
                    {isSelected && addon.requiresInput && (
                      <input
                        type="text"
                        value={addonInputs[addon.id] || ""}
                        onChange={(e) => updateAddonInput(addon.id, e.target.value)}
                        placeholder={addon.inputPlaceholder}
                        className="w-full px-4 py-2 bg-black border border-green-900 text-white rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        onClick={(e) => e.stopPropagation()}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          )}

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
                {formatPrice(calculateTotalPrice())}
              </div>
              <div className="text-sm text-gray-400">or {calculateTotalPriceEth()} ETH</div>
              {selectedAddons.length > 0 && (
                <div className="text-xs text-green-500 mt-1">
                  Base: ${product.price.toFixed(2)} + Add-ons: ${(calculateTotalPrice() - product.price).toFixed(2)}
                </div>
              )}
            </div>

            {/* Buy Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              disabled={!canAddToCart()}
              className={`w-full flex items-center justify-center space-x-2 py-4 font-semibold rounded-lg transition-colors shadow-lg ${
                canAddToCart()
                  ? "bg-green-600 text-white hover:bg-green-700 hover:shadow-xl"
                  : "bg-gray-700 text-gray-400 cursor-not-allowed"
              }`}
            >
              <ShoppingBag className="h-5 w-5" />
              <span>{canAddToCart() ? "Buy Now" : product.hasVariants ? "Select Size" : "Complete Selection"}</span>
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
          price: calculateTotalPrice(),
          priceEth: parseFloat(calculateTotalPriceEth()),
        }}
        customization={{
          size: selectedSize,
          addons: selectedAddons.map(sa => ({
            name: sa.addon.name,
            value: sa.inputValue || ""
          }))
        }}
      />
    </>
  );
}
