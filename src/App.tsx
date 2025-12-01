import { useState } from 'react';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './pages/About';
import Services from './pages/Services';
import ProductDetail from './pages/ProductDetail';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProductId, setSelectedProductId] = useState<string>('');


  const handleNavigation = (page: string, productId?: string) => {
    setCurrentPage(page);
    if (productId) {
      setSelectedProductId(productId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigation} />;
      case 'about':
        return <About />;
      case 'products':
        return <Services onNavigate={handleNavigation} />;
      case 'product-detail':
        return <ProductDetail productId={selectedProductId} onNavigate={handleNavigation} />;
      case 'testimonials':
        return <Testimonials />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={handleNavigation} />;
    }
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-[#faf0e0]">
        <Navbar currentPage={currentPage} onNavigate={handleNavigation} />
     
  
        <main>{renderPage()}</main>
      {/* SHOW SERVICES ONLY ON HOME PAGE */}
        {currentPage === "home" && (
          <Services onNavigate={handleNavigation} />
        )}
        <Footer  />
  
      </div>
    </CartProvider>
  );
}

export default App;
