// Simple in-memory inventory management
// TODO: Replace with Rust backend and database

export interface CustomizationOption {
  id: string;
  name: string;
  description: string;
  price: number;
  priceEth: number;
  inputType: "text" | "checkbox";
  placeholder?: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  priceEth: number;
  stock: number;
  images: string[];
  features: string[];
  sizes?: string[]; // Optional: for products with size variants
  customizations?: CustomizationOption[]; // Optional: for products with add-ons
  category?: string; // Optional: product category
}

// Stock tracking for each product
const stockInventory: { [key: string]: number } = {
  "wallet-bundle-001": 30,
  "iphone-case-001": 50,
  "ai-necklace-001": 25,
  "rashguard-original-001": 50,
  "rashguard-bred-001": 50,
  "rashguard-joker-001": 50,
  "rashguard-gothboi-001": 50,
};

export const products: Product[] = [
  {
    id: "wallet-bundle-001",
    name: "Hardware Wallet + Premium Case Bundle",
    description: "Complete crypto security solution: Secure hardware wallet paired with a custom 3D printed protective case. Keep your crypto safe with RFID protection and minimalist design.",
    price: 200.00,
    priceEth: 0.08,
    stock: stockInventory["wallet-bundle-001"],
    images: ["/IMG_1878.jpg", "/IMG_1925.jpeg"],
    features: [
      "Secure hardware wallet included",
      "Custom 3D printed protective case",
      "RFID blocking technology",
      "Slim, minimalist design",
      "Complete crypto security solution",
      "Durable and long-lasting"
    ]
  },
  {
    id: "iphone-case-001",
    name: "Custom 3D Printed iPhone Case",
    description: "Premium 3D printed iPhone case with unique design. Lightweight, durable, and perfectly fitted for your iPhone. Available for multiple iPhone models.",
    price: 35.00,
    priceEth: 0.015,
    stock: stockInventory["iphone-case-001"],
    images: ["/wallet-case.jpg"], // TODO: Add iPhone case images
    features: [
      "Custom 3D printed design",
      "Pick your color - mix and match",
      "Lightweight and durable",
      "Perfect fit for your iPhone",
      "Shock-absorbent material",
      "Easy snap-on installation",
      "Unique aesthetic design"
    ]
  },
  {
    id: "ai-necklace-001",
    name: "AI ChatGPT Wearable Necklace",
    description: "Revolutionary AI-powered wearable necklace with ChatGPT integration. Voice-activated assistant you can wear anywhere. Stay connected to AI intelligence on the go.",
    price: 299.00,
    priceEth: 0.12,
    stock: stockInventory["ai-necklace-001"],
    images: ["/AINecklacke.jpeg"],
    features: [
      "ChatGPT AI integration",
      "Voice-activated assistance",
      "Hands-free operation",
      "Bluetooth connectivity",
      "Sleek, modern design",
      "Privacy-focused (on-device processing)"
    ],
    category: "wearable-tech"
  },
  {
    id: "rashguard-original-001",
    name: "PsichedelicLabs Rash Guard - Original",
    description: "Premium performance rash guard featuring our iconic original design. Made with high-quality, quick-drying fabric perfect for water sports, training, or casual wear. UV protection and anti-chafe construction.",
    price: 59.99,
    priceEth: 0.025,
    stock: stockInventory["rashguard-original-001"],
    images: ["/rashguard-original.jpg"],
    features: [
      "Premium quick-dry fabric",
      "UV protection (UPF 50+)",
      "Anti-chafe flatlock seams",
      "4-way stretch material",
      "Iconic PsichedelicLabs design",
      "Perfect for water sports & training",
      "Breathable and lightweight"
    ],
    sizes: ["S", "M", "L", "XL", "XXL", "XXXL"],
    customizations: [
      {
        id: "custom-flag",
        name: "Custom Country Flag",
        description: "Add your country's flag to your rash guard",
        price: 20.00,
        priceEth: 0.008,
        inputType: "text",
        placeholder: "Enter your country"
      },
      {
        id: "instagram-handle",
        name: "Instagram Handle",
        description: "Add your Instagram handle to your rash guard",
        price: 15.00,
        priceEth: 0.006,
        inputType: "text",
        placeholder: "@yourhandle"
      }
    ],
    category: "apparel"
  },
  {
    id: "rashguard-bred-001",
    name: "PsichedelicLabs Rash Guard - Bred",
    description: "Bold and fierce Bred colorway rash guard. Premium performance fabric with striking red and black design. Engineered for athletes who demand both style and function.",
    price: 59.99,
    priceEth: 0.025,
    stock: stockInventory["rashguard-bred-001"],
    images: ["/rashguard-bred.PNG"],
    features: [
      "Premium quick-dry fabric",
      "UV protection (UPF 50+)",
      "Anti-chafe flatlock seams",
      "4-way stretch material",
      "Bold Bred colorway design",
      "Perfect for water sports & training",
      "Breathable and lightweight"
    ],
    sizes: ["S", "M", "L", "XL", "XXL", "XXXL"],
    customizations: [
      {
        id: "custom-flag",
        name: "Custom Country Flag",
        description: "Add your country's flag to your rash guard",
        price: 20.00,
        priceEth: 0.008,
        inputType: "text",
        placeholder: "Enter your country"
      },
      {
        id: "instagram-handle",
        name: "Instagram Handle",
        description: "Add your Instagram handle to your rash guard",
        price: 15.00,
        priceEth: 0.006,
        inputType: "text",
        placeholder: "@yourhandle"
      }
    ],
    category: "apparel"
  },
  {
    id: "rashguard-joker-001",
    name: "PsichedelicLabs Rash Guard - Joker Colorway",
    description: "Stand out with the vibrant Joker colorway. This eye-catching rash guard combines purple and green tones with premium performance features. Make a statement while you train.",
    price: 59.99,
    priceEth: 0.025,
    stock: stockInventory["rashguard-joker-001"],
    images: ["/rashguard-joker.PNG"],
    features: [
      "Premium quick-dry fabric",
      "UV protection (UPF 50+)",
      "Anti-chafe flatlock seams",
      "4-way stretch material",
      "Vibrant Joker colorway",
      "Perfect for water sports & training",
      "Breathable and lightweight"
    ],
    sizes: ["S", "M", "L", "XL", "XXL", "XXXL"],
    customizations: [
      {
        id: "custom-flag",
        name: "Custom Country Flag",
        description: "Add your country's flag to your rash guard",
        price: 20.00,
        priceEth: 0.008,
        inputType: "text",
        placeholder: "Enter your country"
      },
      {
        id: "instagram-handle",
        name: "Instagram Handle",
        description: "Add your Instagram handle to your rash guard",
        price: 15.00,
        priceEth: 0.006,
        inputType: "text",
        placeholder: "@yourhandle"
      }
    ],
    category: "apparel"
  },
  {
    id: "rashguard-gothboi-001",
    name: "PsichedelicLabs Rash Guard - GothBoi Colorway",
    description: "Dark and mysterious GothBoi colorway for those who embrace the shadows. Premium performance fabric with edgy aesthetics. Train with attitude.",
    price: 59.99,
    priceEth: 0.025,
    stock: stockInventory["rashguard-gothboi-001"],
    images: ["/rashguard-gothboi.PNG"],
    features: [
      "Premium quick-dry fabric",
      "UV protection (UPF 50+)",
      "Anti-chafe flatlock seams",
      "4-way stretch material",
      "Dark GothBoi colorway",
      "Perfect for water sports & training",
      "Breathable and lightweight"
    ],
    sizes: ["S", "M", "L", "XL", "XXL", "XXXL"],
    customizations: [
      {
        id: "custom-flag",
        name: "Custom Country Flag",
        description: "Add your country's flag to your rash guard",
        price: 20.00,
        priceEth: 0.008,
        inputType: "text",
        placeholder: "Enter your country"
      },
      {
        id: "instagram-handle",
        name: "Instagram Handle",
        description: "Add your Instagram handle to your rash guard",
        price: 15.00,
        priceEth: 0.006,
        inputType: "text",
        placeholder: "@yourhandle"
      }
    ],
    category: "apparel"
  }
];

// Backwards compatibility - default to first product (wallet bundle)
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
