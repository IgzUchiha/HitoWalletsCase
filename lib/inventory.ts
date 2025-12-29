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
  hasVariants?: boolean;
  variants?: ProductVariant[];
  addons?: ProductAddon[];
}

export interface ProductVariant {
  id: string;
  name: string;
  options: string[];
}

export interface ProductAddon {
  id: string;
  name: string;
  description: string;
  price: number;
  priceEth: number;
  requiresInput?: boolean;
  inputLabel?: string;
  inputPlaceholder?: string;
}

// Stock tracking for each product
const stockInventory: { [key: string]: number } = {
  "rashguard-original": 100,
  "rashguard-bred": 100,
  "rashguard-joker": 100,
  "rashguard-gothboi": 100,
};

const sizeOptions = ["S", "M", "L", "XL", "XXL", "XXXL"];

const rashguardAddons: ProductAddon[] = [
  {
    id: "custom-flag",
    name: "Customized Flag",
    description: "Add your country's flag to the rash guard",
    price: 20.00,
    priceEth: 0.008,
    requiresInput: true,
    inputLabel: "Country",
    inputPlaceholder: "Enter your country name"
  },
  {
    id: "instagram-handle",
    name: "Instagram Handle",
    description: "Add your Instagram handle to the back",
    price: 15.00,
    priceEth: 0.006,
    requiresInput: true,
    inputLabel: "Instagram Handle",
    inputPlaceholder: "@yourhandle"
  }
];

export const products: Product[] = [
  {
    id: "rashguard-original",
    name: "PsichedelicLabs Original Rash Guard",
    description: "Premium performance rash guard featuring the iconic PsichedelicLabs rainbow design. Perfect for BJJ, MMA, surfing, or any water sport. Customize with your country flag or Instagram handle.",
    price: 59.99,
    priceEth: 0.024,
    stock: stockInventory["rashguard-original"],
    images: ["/rashguard-original.jpg"],
    hasVariants: true,
    variants: [
      {
        id: "size",
        name: "Size",
        options: sizeOptions
      }
    ],
    addons: rashguardAddons,
    features: [
      "Moisture-wicking fabric",
      "4-way stretch material",
      "Flatlock stitching",
      "UV protection",
      "Quick-dry technology",
      "Sublimation printed design",
      "Customizable with flag or IG handle"
    ]
  },
  {
    id: "rashguard-bred",
    name: "PsichedelicLabs Bred Colorway Rash Guard",
    description: "Sleek dark swirl design with red accents. Premium performance rash guard perfect for BJJ, MMA, surfing, or any water sport. Customize with your country flag or Instagram handle.",
    price: 59.99,
    priceEth: 0.024,
    stock: stockInventory["rashguard-bred"],
    images: ["/rashguard-bred.PNG"],
    hasVariants: true,
    variants: [
      {
        id: "size",
        name: "Size",
        options: sizeOptions
      }
    ],
    addons: rashguardAddons,
    features: [
      "Moisture-wicking fabric",
      "4-way stretch material",
      "Flatlock stitching",
      "UV protection",
      "Quick-dry technology",
      "Sublimation printed design",
      "Customizable with flag or IG handle"
    ]
  },
  {
    id: "rashguard-joker",
    name: "PsichedelicLabs Joker Colorway Rash Guard",
    description: "Bold purple and green psychedelic design with menacing aesthetic. Premium performance rash guard perfect for BJJ, MMA, surfing, or any water sport. Customize with your country flag or Instagram handle.",
    price: 59.99,
    priceEth: 0.024,
    stock: stockInventory["rashguard-joker"],
    images: ["/rashguard-joker.PNG"],
    hasVariants: true,
    variants: [
      {
        id: "size",
        name: "Size",
        options: sizeOptions
      }
    ],
    addons: rashguardAddons,
    features: [
      "Moisture-wicking fabric",
      "4-way stretch material",
      "Flatlock stitching",
      "UV protection",
      "Quick-dry technology",
      "Sublimation printed design",
      "Customizable with flag or IG handle"
    ]
  },
  {
    id: "rashguard-gothboi",
    name: "PsichedelicLabs GothBoi Colorway Rash Guard",
    description: "Minimalist all-black design with subtle branding. Premium performance rash guard perfect for BJJ, MMA, surfing, or any water sport. Customize with your country flag or Instagram handle.",
    price: 59.99,
    priceEth: 0.024,
    stock: stockInventory["rashguard-gothboi"],
    images: ["/rashguard-gothboi.PNG"],
    hasVariants: true,
    variants: [
      {
        id: "size",
        name: "Size",
        options: sizeOptions
      }
    ],
    addons: rashguardAddons,
    features: [
      "Moisture-wicking fabric",
      "4-way stretch material",
      "Flatlock stitching",
      "UV protection",
      "Quick-dry technology",
      "Sublimation printed design",
      "Customizable with flag or IG handle"
    ]
  }
];

// Backwards compatibility - default to first product (rashguard original)
export const product: Product = products[0];

export function getProducts(): Product[] {
  return products.map(p => ({ ...p, stock: stockInventory[p.id] }));
}

export function getProduct(id?: string): Product {
  if (!id) {
    return { ...product, stock: stockInventory[product.id] };
  }
  const foundProduct = products.find(p => p.id === id);
  if (!foundProduct) {
    return { ...product, stock: stockInventory[product.id] };
  }
  return { ...foundProduct, stock: stockInventory[foundProduct.id] };
}

export function updateStock(quantity: number, productId: string = "wallet-bundle-001"): boolean {
  if (stockInventory[productId] >= quantity) {
    stockInventory[productId] -= quantity;
    return true;
  }
  return false;
}

export function getStock(productId: string = "wallet-bundle-001"): number {
  return stockInventory[productId] || 0;
}
