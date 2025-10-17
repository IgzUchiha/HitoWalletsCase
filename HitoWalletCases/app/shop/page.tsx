import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/lib/inventory";
import { ShoppingBag } from "lucide-react";

export default function ShopPage() {
  const products = getProducts();

  return (
    <div className="min-h-screen bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-900 rounded-full mb-4">
            <ShoppingBag className="h-8 w-8 text-green-500" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Shop Our Products</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Premium 3D printed products. Pay with crypto or credit card.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Payment Info */}
        <div className="mt-12 bg-gray-900 border border-green-900 rounded-xl shadow-md p-8 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-4">Payment Options</h2>
          <div className="space-y-4 text-gray-300">
            <div>
              <h3 className="font-semibold text-lg text-green-500">💳 Credit Card (Stripe)</h3>
              <p className="text-gray-400">
                Secure payment processing with Stripe. All major credit and debit cards accepted.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-green-500">🦊 Cryptocurrency (MetaMask)</h3>
              <p className="text-gray-400">
                Pay with Ethereum directly from your MetaMask wallet. Fast and secure blockchain transactions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
