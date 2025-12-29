"use client";

import { X } from "lucide-react";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPurchaseSuccess: () => void;
  product: {
    id: string;
    name: string;
    price: number;
    priceEth: number;
  };
  customization?: {
    size?: string;
    addons?: Array<{ name: string; value: string }>;
  };
}

export default function PaymentModal({
  isOpen,
  onClose,
  onPurchaseSuccess,
  product,
  customization,
}: PaymentModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
      <div className="bg-gray-900 border border-green-900 rounded-xl max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-white">Checkout</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="space-y-4">
          <div className="text-white">
            <p className="font-semibold">{product.name}</p>
            <p className="text-gray-400">${product.price.toFixed(2)}</p>
            {customization?.size && (
              <p className="text-sm text-green-500">Size: {customization.size}</p>
            )}
            {customization?.addons && customization.addons.length > 0 && (
              <div className="text-sm text-green-500 mt-2">
                <p className="font-semibold">Add-ons:</p>
                {customization.addons.map((addon, idx) => (
                  <p key={idx}>
                    {addon.name}: {addon.value}
                  </p>
                ))}
              </div>
            )}
          </div>

          <div className="bg-green-900 border border-green-600 rounded-lg p-4 text-center">
            <p className="text-white text-sm">
              Payment processing is being set up. Please contact us to complete your order.
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
