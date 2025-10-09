"use client";

import { useState } from "react";
import { X, CreditCard, Wallet, Loader2, CheckCircle, XCircle } from "lucide-react";
import { loadStripe } from "@stripe/stripe-js";
import { ethers } from "ethers";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPurchaseSuccess: () => void;
  product: {
    name: string;
    price: number;
    priceEth: number;
  };
}

interface ShippingInfo {
  name: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

type PaymentStatus = "idle" | "shipping-form" | "processing" | "success" | "error";

export default function PaymentModal({ isOpen, onClose, onPurchaseSuccess, product }: PaymentModalProps) {
  const [paymentMethod, setPaymentMethod] = useState<"stripe" | "metamask" | null>(null);
  const [status, setStatus] = useState<PaymentStatus>("idle");
  const [message, setMessage] = useState("");
  const [shippingInfo, setShippingInfo] = useState<ShippingInfo>({
    name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "United States",
  });

  if (!isOpen) return null;

  const handleStripePayment = async () => {
    setStatus("processing");
    setMessage("Redirecting to Stripe checkout...");

    try {
      const stripePublishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
      
      if (!stripePublishableKey) {
        throw new Error("Stripe key not configured. Please add NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY to your .env file.");
      }

      const stripe = await loadStripe(stripePublishableKey);
      
      if (!stripe) {
        throw new Error("Failed to load Stripe");
      }

      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productName: product.name,
          price: product.price,
        }),
      });

      const { sessionId } = await response.json();
      
      const { error } = await stripe.redirectToCheckout({ sessionId });
      
      if (error) {
        throw error;
      }
    } catch (error: any) {
      setStatus("error");
      setMessage(error.message || "Payment failed. Please try again.");
    }
  };

  const handleMetaMaskPayment = async () => {
    setStatus("processing");
    setMessage("Connecting to MetaMask...");

    try {
      // Check if MetaMask is installed
      if (typeof window.ethereum === "undefined") {
        throw new Error("MetaMask is not installed. Please install MetaMask to use crypto payments.");
      }

      const walletAddress = process.env.NEXT_PUBLIC_WALLET_ADDRESS;
      
      if (!walletAddress) {
        throw new Error("Wallet address not configured. Please add NEXT_PUBLIC_WALLET_ADDRESS to your .env file.");
      }

      // Request account access
      const provider = new ethers.BrowserProvider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = await provider.getSigner();
      const customerAddress = await signer.getAddress();

      setMessage("Processing payment...");

      // Send transaction
      const tx = await signer.sendTransaction({
        to: walletAddress,
        value: ethers.parseEther(product.priceEth.toString()),
      });

      setMessage("Waiting for confirmation...");
      await tx.wait();

      // Save order information
      const orderData = {
        transactionHash: tx.hash,
        customerWallet: customerAddress,
        product: product.name,
        price: product.priceEth,
        priceUSD: product.price,
        shipping: shippingInfo,
        timestamp: new Date().toISOString(),
      };

      console.log("=== NEW ORDER ===");
      console.log(JSON.stringify(orderData, null, 2));
      console.log("=================");

      // Send order notification
      try {
        await fetch("/api/send-order", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(orderData),
        });
      } catch (emailError) {
        console.error("Failed to send email notification:", emailError);
        // Don't fail the order if email fails
      }

      // Update stock
      onPurchaseSuccess();

      setStatus("success");
      setMessage(`Payment successful! We'll ship your order to: ${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.state} ${shippingInfo.zip}`);
    } catch (error: any) {
      setStatus("error");
      if (error.code === 4001) {
        setMessage("Payment cancelled by user.");
      } else {
        setMessage(error.message || "Payment failed. Please try again.");
      }
    }
  };

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleMetaMaskPayment();
  };

  const resetModal = () => {
    setPaymentMethod(null);
    setStatus("idle");
    setMessage("");
    setShippingInfo({
      name: "",
      email: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      country: "United States",
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900">
            {status === "shipping-form" ? "Shipping Information" : status === "processing" ? "Processing..." : status === "success" ? "Order Complete" : status === "error" ? "Payment Error" : "Choose Payment Method"}
          </h2>
          <button
            onClick={resetModal}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Product Info */}
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="text-sm text-gray-600">You are purchasing:</div>
            <div className="text-lg font-semibold text-gray-900 mt-1">{product.name}</div>
          </div>

          {status === "idle" && (
            <>
              {/* Stripe Payment */}
              <button
                onClick={() => {
                  setPaymentMethod("stripe");
                  handleStripePayment();
                }}
                disabled={paymentMethod !== null}
                className="w-full flex items-center justify-between p-6 border-2 border-gray-200 rounded-lg hover:border-indigo-500 hover:bg-indigo-50 transition-all group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-indigo-100 p-3 rounded-full group-hover:bg-indigo-200 transition-colors">
                    <CreditCard className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-gray-900">Credit Card</div>
                    <div className="text-sm text-gray-600">Pay with Stripe</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-gray-900">${product.price}</div>
                  <div className="text-xs text-gray-500">USD</div>
                </div>
              </button>

              {/* MetaMask Payment */}
              <button
                onClick={() => {
                  setPaymentMethod("metamask");
                  setStatus("shipping-form");
                }}
                disabled={paymentMethod !== null}
                className="w-full flex items-center justify-between p-6 border-2 border-gray-200 rounded-lg hover:border-orange-500 hover:bg-orange-50 transition-all group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-orange-100 p-3 rounded-full group-hover:bg-orange-200 transition-colors">
                    <Wallet className="h-6 w-6 text-orange-600" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-gray-900">MetaMask</div>
                    <div className="text-sm text-gray-600">Pay with ETH</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-gray-900">{product.priceEth} ETH</div>
                  <div className="text-xs text-gray-500">~${product.price}</div>
                </div>
              </button>
            </>
          )}

          {status === "shipping-form" && (
            <form onSubmit={handleShippingSubmit} className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Shipping Information</h3>
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={shippingInfo.name}
                  onChange={(e) => setShippingInfo({ ...shippingInfo, name: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={shippingInfo.email}
                  onChange={(e) => setShippingInfo({ ...shippingInfo, email: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                  Street Address *
                </label>
                <input
                  type="text"
                  id="address"
                  required
                  value={shippingInfo.address}
                  onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="123 Main St"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                    City *
                  </label>
                  <input
                    type="text"
                    id="city"
                    required
                    value={shippingInfo.city}
                    onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="San Francisco"
                  />
                </div>

                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                    State *
                  </label>
                  <input
                    type="text"
                    id="state"
                    required
                    value={shippingInfo.state}
                    onChange={(e) => setShippingInfo({ ...shippingInfo, state: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="CA"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-1">
                    ZIP Code *
                  </label>
                  <input
                    type="text"
                    id="zip"
                    required
                    value={shippingInfo.zip}
                    onChange={(e) => setShippingInfo({ ...shippingInfo, zip: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="94102"
                  />
                </div>

                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                    Country *
                  </label>
                  <input
                    type="text"
                    id="country"
                    required
                    value={shippingInfo.country}
                    onChange={(e) => setShippingInfo({ ...shippingInfo, country: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="United States"
                  />
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setStatus("idle");
                    setPaymentMethod(null);
                  }}
                  className="flex-1 px-4 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Continue to Payment
                </button>
              </div>
            </form>
          )}

          {status === "processing" && (
            <div className="text-center py-8 space-y-4">
              <Loader2 className="h-16 w-16 text-indigo-600 animate-spin mx-auto" />
              <p className="text-gray-700 font-medium">{message}</p>
            </div>
          )}

          {status === "success" && (
            <div className="text-center py-8 space-y-4">
              <CheckCircle className="h-16 w-16 text-green-600 mx-auto" />
              <p className="text-gray-900 font-semibold text-lg">Payment Successful!</p>
              <p className="text-gray-600">{message}</p>
              <button
                onClick={resetModal}
                className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Close
              </button>
            </div>
          )}

          {status === "error" && (
            <div className="text-center py-8 space-y-4">
              <XCircle className="h-16 w-16 text-red-600 mx-auto" />
              <p className="text-gray-900 font-semibold text-lg">Payment Failed</p>
              <p className="text-gray-600">{message}</p>
              <button
                onClick={() => {
                  setPaymentMethod(null);
                  setStatus("idle");
                  setMessage("");
                }}
                className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Try Again
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
