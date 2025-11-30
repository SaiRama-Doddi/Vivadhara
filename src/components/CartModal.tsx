import { X, Trash2, ShoppingBag } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import  type { UserDetails } from '../types/product';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartModal({ isOpen, onClose }: CartModalProps) {
  const { cart, removeFromCart,clearCart } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);
  const [userDetails, setUserDetails] = useState<UserDetails>({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  if (!isOpen) return null;

  const handleCheckout = () => {
    if (cart.length === 0) return;
    setShowCheckout(true);
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();

    const orderItems = cart
      .map((item) => `• ${item.product.name} x${item.quantity} - $${( item.quantity).toFixed(2)}`)
      .join('%0A');

   /*  const totalPrice = getTotalPrice().toFixed(2); */

    const message = `*New Order from ${userDetails.name}*%0A%0A` +
      `*Contact Details:*%0A` +
      `Name: ${userDetails.name}%0A` +
      `Email: ${userDetails.email}%0A` +
      `Phone: ${userDetails.phone}%0A` +
      `Address: ${userDetails.address}%0A%0A` +
      `*Order Items:*%0A${orderItems}%0A%0A` +
      `*Thank you for your order!*`;

    const whatsappUrl = `https://wa.me/919490922228?text=${message}`;

    window.open(whatsappUrl, '_blank');

    clearCart();
    setShowCheckout(false);
    setUserDetails({ name: '', email: '', phone: '', address: '' });
    onClose();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="fixed inset-0 bg-black/10 backdrop-blur-sm bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-[#faf0e0] rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        <div className="bg-[#336021] text-white p-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <ShoppingBag size={28} />
            <h2 className="text-2xl font-bold">
              {showCheckout ? 'Checkout' : 'Shopping Cart'}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="cursor-pointer hover:bg-white/20 p-2 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {!showCheckout ? (
            <>
              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingBag size={64} className="mx-auto text-gray-300 mb-4" />
                  <p className="text-xl text-gray-500">Your cart is empty</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div
                      key={item.product.id}
                      className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg"
                    >
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />

                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{item.product.name}</h3>
                        <p className="text-sm text-gray-600">{item.product.category}</p>
                       {/*  <p className="text-lg font-bold text-blue-600 mt-1">
                          ${item.product.price}
                        </p> */}
                      </div>

                    {/*   <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="bg-gray-200 hover:bg-gray-300 p-2 rounded-lg transition-colors"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="w-8 text-center font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="bg-gray-200 hover:bg-gray-300 p-2 rounded-lg transition-colors"
                        >
                          <Plus size={16} />
                        </button>
                      </div> */}

                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="cursor-pointer text-red-500 hover:text-red-700 p-2 transition-colors"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </>
          ) : (
            <form onSubmit={handleSubmitOrder} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={userDetails.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={userDetails.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={userDetails.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-2">
                  Delivery Address *
                </label>
                <textarea
                  id="address"
                  name="address"
                  value={userDetails.address}
                  onChange={handleInputChange}
                  required
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="123 Main St, Apt 4B, City, State 12345"
                />
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-2">Order Summary:</p>
                {cart.map((item) => (
                  <div key={item.product.id} className="flex justify-between text-sm mb-1">
                    <span>{item.product.name} </span>
                   {/*  <span className="font-semibold">${( item.quantity).toFixed(2)}</span> */}
                  </div>
                ))}
              </div>

              <div className="flex space-x-3">
                <button
                  type="button"
                  onClick={() => setShowCheckout(false)}
                  className=" cursor-pointer flex-1 bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                >
                  Back to Cart
                </button>
                <button
                  type="submit"
                  className="cursor-pointer flex-1 bg-[#336021] text-white px-6 py-3 rounded-lg font-semibold hover:shadow-xl transition-all duration-300"
                >
                  Send to WhatsApp
                </button>
              </div>
            </form>
          )}
        </div>

        {!showCheckout && cart.length > 0 && (
          <div className="border-t border-gray-200 p-6 bg-gray-50">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xl font-semibold text-gray-900">Total:</span>
             {/*  <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                ${getTotalPrice().toFixed(2)}
              </span> */}
            </div>
            <button
              onClick={handleCheckout}
              className="w-full bg-[#336021] cursor-pointer text-white px-6 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
