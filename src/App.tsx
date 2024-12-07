import CardSection from './components/layout/publicLayout/components/CardSection';
import Header from './components/layout/publicLayout/Header';
import ProductCarousel from './components/product/ProductCarousel';
import AdsSection from './components/ui/AdsSection/AdsSection';

function App() {
  return (
    <div className="bg-slate-50 min-h-screen flex flex-col relative">
      <Header />
      <main className="flex-1 relative h-screen">
        <AdsSection />
        <CardSection />
        <div className="flex justify-center mt-64">
          <ProductCarousel />
        </div>
      </main>
      <footer className="bg-white shadow-inner py-4">
        <div className="max-w-7xl mx-auto px-4 text-gray-600 text-center">
          © 2024 TradeLand. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}

export default App;
