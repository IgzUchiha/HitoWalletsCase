// Simple in-memory inventory management
// TODO: Replace with Rust backend and database

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  priceEth: number;
  stock: number;
  images: string[];
  features: string[];
}

let currentStock = 30;

export const product: Product = {
  id: "wallet-case-001",
  name: "Premium Hito Wallet Case",
  description: "3D printed wallet case with RFID protection and minimalist design. Perfect for everyday carry with space for cards, cash, and essentials.",
  price: 49.99,
  priceEth: 0.025,
  stock: currentStock,
  images: ["/IMG_1878.jpg", "/IMG_1881.jpeg", "/IMG_1879.jpeg"],
  features: [
    "3D printed with premium filament",
    "RFID blocking technology",
    "Slim, minimalist design",
    "Durable and long-lasting"
  ]
};

export function getProduct(): Product {
  return { ...product, stock: currentStock };
}

export function updateStock(quantity: number): boolean {
  if (currentStock >= quantity) {
    currentStock -= quantity;
    return true;
  }
  return false;
}

export function getStock(): number {
  return currentStock;
}
