// import Header from './components/layout/publicLayout/Header';
// import AdsSection from './components/ui/AdsSection/AdsSection';

// function App() {
//   return (
//     <div>
//       <Header />
//       <AdsSection />
//       <main>other sections</main>
//     </div>
//   );
// }

// export default App;
import Header from './components/layout/publicLayout/Header';
import AdsSection from './components/ui/AdsSection/AdsSection';

function App() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="flex-1">
        <AdsSection />

        {/* Secciones adicionales */}
        <main className="max-w-7xl mx-auto px-4 py-8">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Sección 1
            </h2>
            <p className="text-gray-600">
              Aquí va el contenido de la primera sección. Puedes agregar
              cualquier componente o texto que necesites.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Sección 2
            </h2>
            <p className="text-gray-600">
              Aquí va el contenido de la segunda sección. Más componentes o
              texto, según sea necesario.
            </p>
          </section>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-white shadow-inner py-4">
        <div className="max-w-7xl mx-auto px-4 text-gray-600 text-center">
          © 2024 TradeLand. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}

export default App;
