import Header from './components/layout/publicLayout/Header';
import AdsSection from './components/ui/AdsSection/AdsSection';

function App() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Header />

      <div className="flex-1">
        <AdsSection />

        <main className="max-w-7xl mx-auto px-4 py-8"></main>
      </div>

      <footer className="bg-white shadow-inner py-4">
        <div className="max-w-7xl mx-auto px-4 text-gray-600 text-center">
          © 2024 TradeLand. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}

export default App;
