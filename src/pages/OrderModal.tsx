import { X, ShoppingBag } from "lucide-react";
import { useState } from "react";
import type { UserDetails } from "../types/product";

interface ProceedOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: any; // single product
}

export default function OrderModal({ isOpen, onClose, product }: ProceedOrderModalProps) {
  const [showCheckout, setShowCheckout] = useState(false);

  const [userDetails, setUserDetails] = useState<UserDetails>({
    name: "",
    phone: "",
  });

  if (!isOpen) return null;

  // Continue to checkout
  const handleProceed = () => {
    setShowCheckout(true);
  };

  // Submit order
  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();

    const message =
      `*New Product Order*%0A%0A` +
      `*Product:* ${product.name}%0A` +
      `*Category:* ${product.category}%0A%0A` +
      `*Customer Details:*%0A` +
      `Name: ${userDetails.name}%0A` +
  /*     `Email: ${userDetails.email}%0A` + */
      `Phone: ${userDetails.phone}%0A` +
     /*  `Address: ${userDetails.address}%0A%0A` + */
      `*Thank you for your order!*`;

    const whatsappUrl = `https://wa.me/919490922228?text=${message}`;
    window.open(whatsappUrl, "_blank");

    // Close modal + reset
    setShowCheckout(false);
    setUserDetails({ name: "", phone: "" });
    onClose();
  };

  const handleInputChange = (e: any) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0 bg-black/10 backdrop-blur-sm bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-[#FAFDD6] rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col">

        {/* HEADER */}
        <div className="bg-[#249915] text-white p-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <ShoppingBag size={28} />
            <h2 className="text-2xl font-bold">
              {showCheckout ? "Checkout" : "Order Summary"}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="cursor-pointer hover:bg-white/20 p-2 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* CONTENT */}
        <div className="flex-1 overflow-y-auto p-6">
          {!showCheckout ? (
            <>
              {/* PRODUCT BLOCK */}
              <div className="bg-gray-50 p-4 rounded-lg flex items-center space-x-4">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />

                <div>
                  <h3 className="font-semibold text-gray-900">{product.name}</h3>
                  <p className="text-sm text-gray-600">{product.category}</p>
                </div>
              </div>
            </>
          ) : (
            <form onSubmit={handleSubmitOrder} className="space-y-4">
              {/* NAME */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={userDetails.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  placeholder="John Doe"
                />
              </div>

              {/* EMAIL */}
             {/*  <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={userDetails.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  placeholder="john@example.com"
                />
              </div> */}

              {/* PHONE */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={userDetails.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                  placeholder="9876543210"
                />
              </div>

              {/* ADDRESS */}
          {/*     <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Delivery Address *
                </label>
                <textarea
                  name="address"
                  value={userDetails.address}
                  onChange={handleInputChange}
                  required
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none"
                  placeholder="House No, Street, City, Pincode"
                />
              </div>
 */}
              {/* PRODUCT SUMMARY BLOCK */}
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-2">Order Summary:</p>
                <div className="flex justify-between text-sm mb-1">
                  <span>{product.name}</span>
                </div>
              </div>

              {/* BUTTONS */}
              <div className="flex space-x-3">
                <button
                  type="button"
                  onClick={() => setShowCheckout(false)}
                  className="cursor-pointer flex-1 bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300"
                >
                  Back
                </button>

                <button
                  type="submit"
                  className="cursor-pointer flex-1 bg-[#336021] text-white px-6 py-3 rounded-lg hover:shadow-xl"
                >
                  Send to WhatsApp
                </button>
              </div>
            </form>
          )}
        </div>

        {!showCheckout && (
          <div className="border-t border-gray-200 p-6 bg-gray-50">
            <button
              onClick={handleProceed}
              className="w-full bg-[#249915] cursor-pointer text-white px-6 py-4 rounded-lg font-semibold hover:shadow-xl"
            >
              Proceed Order
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
