// import Carousel from './components/layout/publicLayout/components/Carrousel';
import Header from './components/layout/publicLayout/Header';
import AdsSection from './components/ui/AdsSection/AdsSection';

function App() {
  // const carouselData = [
  //   {
  //     title: 'Medios de pago',
  //     imageSrc: '/card1.webp', // Cambia esta ruta por una real
  //     buttonText: 'Conocer medios de pago',
  //   },
  //   {
  //     title: 'Los más vendidos',
  //     imageSrc: '/card2.webp', // Cambia esta ruta por una real
  //     buttonText: 'Ver productos',
  //   },
  //   {
  //     title: 'Ofertas especiales',
  //     imageSrc: '/card3.webp', // Cambia esta ruta por una real
  //     buttonText: 'Ver ofertas',
  //   },
  //   {
  //     title: '20% de descuento',
  //     imageSrc: '/card4.webp', // Cambia esta ruta por una real
  //     buttonText: 'Ver descuentos',
  //   },
  //   {
  //     title: 'Lo ultimo que viste',
  //     imageSrc: '/card4.webp', // Cambia esta ruta por una real
  //     buttonText: 'Ver productos',
  //   },
  //   {
  //     title: 'Medios de pago',
  //     imageSrc: '/card1.webp', // Cambia esta ruta por una real
  //     buttonText: 'Conocer medios de pago',
  //   },
  //   {
  //     title: 'Los más vendidos',
  //     imageSrc: '/card2.webp', // Cambia esta ruta por una real
  //     buttonText: 'Ver productos',
  //   },
  //   {
  //     title: 'Ofertas especiales',
  //     imageSrc: '/card3.webp', // Cambia esta ruta por una real
  //     buttonText: 'Ver ofertas',
  //   },
  //   {
  //     title: '20% de descuento',
  //     imageSrc: '/card4.webp', // Cambia esta ruta por una real
  //     buttonText: 'Ver descuentos',
  //   },
  //   {
  //     title: 'Lo ultimo que viste',
  //     imageSrc: '/card4.webp', // Cambia esta ruta por una real
  //     buttonText: 'Ver productos',
  //   },
  // ];
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Header />

      <div className="flex-1">
        <AdsSection />
        {/* <Carousel cards={carouselData} /> */}
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
