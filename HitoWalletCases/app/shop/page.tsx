import ProductCard from "@/components/ProductCard";
import { getProduct } from "@/lib/inventory";
import { ShoppingBag } from "lucide-react";

export default function ShopPage() {
  const product = getProduct();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
            <ShoppingBag className="h-8 w-8 text-indigo-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Shop Wallet Cases</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Premium 3D printed wallet cases. Limited stock available.
          </p>
        </div>

        {/* Product Grid */}
        <div className="max-w-2xl mx-auto">
          <ProductCard product={product} />
        </div>

        {/* Payment Info */}
        <div className="mt-12 bg-white rounded-xl shadow-md p-8 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Options</h2>
          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="font-semibold text-lg">💳 Credit Card (Stripe)</h3>
              <p className="text-gray-600">
                Secure payment processing with Stripe. All major credit and debit cards accepted.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">🦊 Cryptocurrency (MetaMask)</h3>
              <p className="text-gray-600">
                Pay with Ethereum directly from your MetaMask wallet. Fast and secure blockchain transactions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
