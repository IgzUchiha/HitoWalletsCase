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
  name: "Hardware Wallet + Premium Case Bundle",
  description: "Complete crypto security solution: Secure hardware wallet paired with a custom 3D printed protective case. Keep your crypto safe with RFID protection and minimalist design.",
  price: 200.00,
  priceEth: 0.08,
  stock: currentStock,
  images: ["/IMG_1878.jpg", "/IMG_1881.jpeg", "/IMG_1925.jpeg"],
  features: [
    "Secure hardware wallet included",
    "Custom 3D printed protective case",
    "RFID blocking technology",
    "Slim, minimalist design",
    "Complete crypto security solution",
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
