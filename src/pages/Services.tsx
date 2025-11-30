import { Eye, ShoppingCart } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

interface ServicesProps {
  onNavigate: (page: string, productId?: string) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
  const { addToCart } = useCart();

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart(product);
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-[#faf0e0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-4 italic">
              Our
              <span className="bg-[#336021] bg-clip-text text-transparent"> Products</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-70 overflow-hidden">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  {/* <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-green-600 text-white px-4 py-2 rounded-full font-bold">
                    ${product.price}
                  </div> */}
                </div>

                <div className="p-6">
                  <div className="mb-2">
                    <span className="inline-block bg-[#faf0e0] text-[#336021] text-xs font-semibold px-3 py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{product.name}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {product.shortDescription}
                  </p>

                  <div className="flex space-x-3">
                    <button
                      onClick={() => onNavigate('product-detail', product.id)}
                      className="flex-1 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <Eye size={20} />
                      <span className="hidden md:inline">View More</span>
                    </button>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="flex-1 bg-[#336021] text-white px-6 py-3 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <ShoppingCart size={20} />
                      <span className="hidden md:inline">Add to Cart</span>
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
            className="bg-[#336021] cursor-pointer text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}
