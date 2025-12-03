import { useState } from "react";
import { ArrowLeft, ShoppingBag, Check } from "lucide-react";
import { products } from "../data/products";
import OrderModal from "./OrderModal";

interface ProductDetailProps {
  productId: string | number;
  onNavigate: (page: string) => void;
}

export default function ProductDetail({ productId, onNavigate }: ProductDetailProps) {
  const product = products.find((p) => p.id === productId);
  const [selectedImage, setSelectedImage] = useState(0);
  const [showOrderModal, setShowOrderModal] = useState(false);

  if (!product) return null;

  return (
    <div className="min-h-screen pt-20 bg-[#FAFDD6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">

        {/* Back Button */}
        <button
          onClick={() => onNavigate("products")}
          className="flex items-center text-gray-600 hover:text-blue-600 space-x-2 mb-4 sm:mb-6 cursor-pointer"
        >
          <ArrowLeft size={20} />
          <span className="text-sm sm:text-base">Back to Services</span>
        </button>

        {/* PRODUCT CARD */}
        <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

          {/* LEFT IMAGES */}
          <div className="space-y-4">
            {/* MAIN IMAGE */}
            <div className="w-full h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden shadow-sm">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* THUMBNAILS */}
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-300">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`min-w-[70px] sm:min-w-[90px] h-20 sm:h-24 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === idx
                      ? "border-green-600 scale-105"
                      : "border-gray-300 hover:border-gray-400"
                  }`}
                >
                  <img
                    src={img}
                    alt="thumbnail"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="space-y-6">
            {/* CATEGORY */}
            <span className="inline-block bg-green-100 text-green-800 text-xs sm:text-sm px-4 py-1 rounded-full font-semibold">
              {product.category}
            </span>

            {/* TITLE */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              {product.name}
            </h1>

            {/* DESCRIPTION */}
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {product.description}
            </p>

            {/* FEATURES */}
            <div>
              <h2 className="text-lg sm:text-xl font-semibold mb-3">
                Key Features
              </h2>

              <div className="space-y-2">
                {product.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center text-sm sm:text-base space-x-2"
                  >
                    <Check className="text-green-600 min-w-[20px]" size={20} />
                    <span className="text-gray-700 font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* BUTTONS */}
            <div className="space-y-3 pt-2">
              {/* PLACE ORDER */}
              <button
                onClick={() => setShowOrderModal(true)}
                className="w-full cursor-pointer bg-gradient-to-r from-yellow-600 to-green-600 text-white py-3 sm:py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 shadow-md hover:opacity-90 transition-all text-sm sm:text-base"
              >
                <ShoppingBag size={22} />
                <span>Place Order</span>
              </button>

              {/* Continue Shopping */}
              <button
                onClick={() => onNavigate("services")}
                className="w-full border border-gray-300 text-gray-700 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition text-sm sm:text-base cursor-pointer"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ORDER MODAL */}
      {showOrderModal && (
        <OrderModal
          isOpen={showOrderModal}
          onClose={() => setShowOrderModal(false)}
          product={product}
        />
      )}
    </div>
  );
}
