import CardSection from './components/layout/publicLayout/components/CardSection';
import Header from './components/layout/publicLayout/Header';
import AdsSection from './components/ui/AdsSection/AdsSection';

function App() {
  return (
    <div className="bg-slate-200 min-h-screen flex flex-col relative">
      <Header />
      <main className="flex-1 relative h-screen bg-slate-200">
        <AdsSection />
        <CardSection />
      </main>
      <footer className="bg-slate-200 h-screen py-4">
        <div className="max-w-7xl mx-auto px-4 text-gray-600 text-center">
          © 2024 TradeLand. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}

export default App;
