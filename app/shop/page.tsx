import { getProducts } from "@/lib/inventory";
import ProductCard from "@/components/ProductCard";

export default function ShopPage() {
  const products = getProducts();

  return (
    <main className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-2">Shop</h1>
        <p className="text-gray-400 mb-8">Browse our collection of premium products</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}
