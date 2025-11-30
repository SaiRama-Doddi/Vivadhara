import { useState } from "react";
import { ArrowLeft, ShoppingCart, Trash2, Check } from "lucide-react";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

interface ProductDetailProps {
  productId: string;
  onNavigate: (page: string) => void;
}

export default function ProductDetail({ productId, onNavigate }: ProductDetailProps) {
  const product = products.find((p) => p.id === productId);
  const [selectedImage, setSelectedImage] = useState(0);
  const { cart, addToCart, removeFromCart } = useCart();
  const [showAdded, setShowAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h2>
          <button
            onClick={() => onNavigate("services")}
            className="text-blue-600 hover:text-blue-700 font-semibold"
          >
            Back to Services
          </button>
        </div>
      </div>
    );
  }

  const isInCart = cart.some(
    (item: { product: { id: string } }) => item.product.id === product.id
  );

  const handleAddToCart = () => {
    addToCart(product);
    setShowAdded(true);
    setTimeout(() => setShowAdded(false), 2000);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(product.id);
  };

  return (
    <div className="min-h-screen pt-20 bg-[#faf0e0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">

        {/* BACK BUTTON */}
        <button
          onClick={() => onNavigate("services")}
          className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 mb-6 transition-colors"
        >
          <ArrowLeft size={20} />
          <span className="cursor-pointer font-medium">Back to Services</span>
        </button>

        {/* CARD */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">

          {/* RESPONSIVE GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-6 sm:p-8">

            {/* ================= LEFT COLUMN ================= */}
            <div className="space-y-8">

              {/* MAIN IMAGE */}
              <div className="rounded-xl overflow-hidden shadow-sm">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-80 sm:h-96 object-cover rounded-xl"
                />
              </div>

              {/* HORIZONTAL GALLERY */}
              <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-300">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`min-w-[90px] sm:min-w-[120px] h-20 sm:h-24 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index
                        ? "border-green-600 scale-105"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* SPECIFICATIONS */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Specifications</h2>

                <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 sm:p-5 shadow-sm">
                  <ul className="divide-y">
                    {Object.entries(product.specs).map(([key, value]) => (
                      <li key={key} className="py-3 flex flex-col sm:flex-row sm:justify-between">
                        <span className="text-gray-900 font-semibold capitalize">
                          {key.replace(/([A-Z])/g, " $1")}
                        </span>
                        <span className="text-gray-600">{value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* ================= RIGHT COLUMN ================= */}
            <div className="flex flex-col space-y-6">

              {/* CATEGORY */}
              <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-2 rounded-full w-max">
                {product.category}
              </span>

              {/* TITLE */}
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">{product.name}</h1>

              {/* DESCRIPTION */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Description</h2>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {product.description}
                </p>
              </div>

              {/* USES */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Suitable For</h2>
                <div className="flex flex-wrap gap-3">
                  {product.uses.map((use, i) => (
                    <span
                      key={i}
                      className="bg-green-50 border border-green-200 text-green-700 px-4 py-2 rounded-full text-xs sm:text-sm font-medium"
                    >
                      {use}
                    </span>
                  ))}
                </div>
              </div>

              {/* FEATURES */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Key Features</h2>
                <div className="space-y-3">
                  {product.features.map((feature, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <Check className="text-green-600" size={20} />
                      <span className="text-gray-700 text-sm sm:text-base font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ACTION BUTTONS */}
              <div className="pt-4 space-y-3">

                {!isInCart ? (
                  <button
                    onClick={handleAddToCart}
                    className="cursor-pointer w-full bg-gradient-to-r from-yellow-600 to-green-600 text-white px-6 py-4 rounded-lg font-semibold hover:opacity-90 transition flex items-center justify-center space-x-2 shadow-md"
                  >
                    <ShoppingCart size={24} />
                    <span>Add to Cart</span>
                  </button>
                ) : (
                  <button
                    onClick={handleRemoveFromCart}
                    className="cursor-pointer w-full bg-red-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-red-700 transition flex items-center justify-center space-x-2 shadow-md"
                  >
                    <Trash2 size={24} />
                    <span>Remove from Cart</span>
                  </button>
                )}

                <button
                  onClick={() => onNavigate("services")}
                  className="w-full border-2 border-gray-300 text-gray-700 px-6 py-4 rounded-lg font-semibold hover:bg-gray-50 transition"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ADDED TO CART TOAST */}
        {showAdded && (
          <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-xl flex items-center space-x-2 animate-bounce z-50">
            <Check size={20} />
            <span className="font-semibold text-sm">Added to cart successfully!</span>
          </div>
        )}
      </div>
    </div>
  );
}
