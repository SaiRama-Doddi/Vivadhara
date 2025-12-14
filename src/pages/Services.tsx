
import { products } from '../data/products';
import { useState } from 'react';
import OrderModal from './OrderModal';
import {

  Wheat,
  Shield,
  TrendingUp,
} from "lucide-react";

interface ServicesProps {
  onNavigate: (page: string, productId?: string) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
 const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [showOrderModal, setShowOrderModal] = useState(false);

  const handlePlaceOrder = (product: any) => {
    setSelectedProduct(product);
    setShowOrderModal(true);
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="py-5 bg-[#FAFDD6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-4 italic">
              Our
              <span className="bg-[#249915] bg-clip-text text-transparent"> Products</span>
            </h1>
            <p className="text-md md:text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8 place-items-center">
            {products.map((product) => (
             <div
  key={product.id}
  className="bg-white w-[300px] rounded-2xl shadow-md overflow-hidden 
             hover:shadow-xl transition-all duration-300"
>
  {/* IMAGE + BADGE */}
  <div className="relative h-[200px] overflow-hidden rounded-t-2xl">
    <img
      src={product.images[0]}
      alt={product.name}
      className="w-full h-full object-cover"
    />

    {/* Fresh Badge */}
   {/*  <span className="absolute top-3 right-3 bg-[#336021] text-white text-xs font-semibold px-3 py-1 rounded-full">
      Fresh
    </span> */}
  </div>

  {/* CONTENT */}
  <div className="p-5">
    <h3 className="text-lg font-semibold text-gray-900">
      {product.name}
    </h3>

    <p className="text-gray-500 text-sm mt-1">
      {product.shortDescription}
    </p>

  
    {/* BUTTONS */}
    <div className="flex items-center justify-between mt-4 gap-3">
      
      {/* View Button */}
      <button
        onClick={() => onNavigate("product-detail", product.id)}
        className="w-full border border-[#4cb20d] text-gray-700 py-2 rounded-lg 
                   hover:bg-gray-100 transition font-medium cursor-pointer"
      >
        View
      </button>

      {/* Add Button */}
      <button
        onClick={() => handlePlaceOrder(product)}
        className="w-full bg-[#249915] text-white py-2 rounded-lg font-medium 
                   hover:bg-[#4caf19] transition cursor-pointer"
      >
        Place Order
      </button>
    </div>
  </div>
</div>

            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We can create a tailored package specifically for your business needs
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-[#249915] cursor-pointer text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Contact Us
          </button>
        </div>
      </section>
 {/* ---------------- ORDER MODAL ---------------- */}
      {showOrderModal && selectedProduct && (
        <OrderModal
          isOpen={showOrderModal}
          onClose={() => setShowOrderModal(false)}
          product={selectedProduct}
        />
      )}


      
    

      {/* ---------------- CTA SECTION ---------------- */}
    <section
  className="py-20 bg-cover bg-center bg-no-repeat relative"
  style={{
    backgroundImage:
      "url('https://i.pinimg.com/1200x/0c/7f/31/0c7f31aacac02d554c9594e1c4163579.jpg')",
  }}
>
  {/* Dark overlay for readability */}
  <div className="absolute inset-0 bg-black/50"></div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
    <h2 className="text-4xl font-bold mb-6">
      Need Premium-Quality Feed Ingredients?
    </h2>

    <p className="text-xl mb-8 text-gray-200">
      We supply to Dairy Farms, Poultry Units & Aquaculture Industries.
    </p>

    <button
      onClick={() => onNavigate('contact')}
      className="bg-white text-green-700   cursor-pointer px-8 py-4 rounded-lg font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300"
    >
      Contact Us Today
    </button>
  </div>
</section>


    </div>
  );
}
