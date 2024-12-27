import React, { useState } from 'react';
import ProductCard from './ProductCard';

const ProductCarousel: React.FC = () => {
  const products = [
    {
      id: 1,
      name: 'Silla Ejecutiva Sillon Gerencial Ergonomica Usb Masajeador',
      prevPrice: '$8.500',
      price: '$10.000',
      image: '/img/products/product1.webp',
    },
    {
      id: 2,
      name: 'Silla Ejecutiva Sillon Gerencial Ergonomica Usb Masajeador',
      prevPrice: '$200.500',
      price: '$150.000',
      image: '/img/products/product2.webp',
    },
    {
      id: 3,
      name: 'Silla Ejecutiva Sillon Gerencial Ergonomica Usb Masajeador',
      prevPrice: '$190.000',
      price: '$210.000',
      image: '/img/products/product3.webp',
    },
    {
      id: 4,
      name: 'Silla Ejecutiva Sillon Gerencial Ergonomica Usb Masajeador',
      prevPrice: '$250.500',
      price: '$205.000',
      image: '/img/products/product4.webp',
    },
    {
      id: 5,
      name: 'Silla Ejecutiva Sillon Gerencial Ergonomica Usb Masajeador',
      prevPrice: '$320.500',
      price: '$300.000',
      image: '/img/products/product5.webp',
    },
    {
      id: 6,
      name: 'Silla Ejecutiva Sillon Gerencial Ergonomica Usb Masajeador',
      prevPrice: '$400.500',
      price: '$355.000',
      image: '/img/products/product6.webp',
    },
    {
      id: 7,
      name: 'Silla Ejecutiva Sillon Gerencial Ergonomica Usb Masajeador',
      prevPrice: '$450.500',
      price: '$400.000',
      image: '/img/products/product7.webp',
    },
    {
      id: 8,
      name: 'Silla Ejecutiva Sillon Gerencial Ergonomica Usb Masajeador',
      prevPrice: '$1.200.500',
      price: '$990.000',
      image: '/img/products/product8.webp',
    },
    {
      id: 9,
      name: 'Silla Ejecutiva Sillon Gerencial Ergonomica Usb Masajeador',
      prevPrice: '$1.500.300',
      price: '$1.100.000',
      image: '/img/products/product9.webp',
    },
    {
      id: 10,
      name: 'Silla Ejecutiva Sillon Gerencial Ergonomica Usb Masajeador',
      prevPrice: '$600.500',
      price: '$550.000',
      image: '/img/products/product10.webp',
    },
    {
      id: 11,
      name: 'Silla Ejecutiva Sillon Gerencial Ergonomica Usb Masajeador',
      prevPrice: '$800.500',
      price: '$640.000',
      image: '/img/products/product11.webp',
    },
    {
      id: 12,
      name: 'Silla Ejecutiva Sillon Gerencial Ergonomica Usb Masajeador',
      prevPrice: '$78.500',
      price: '$65.000',
      image: '/img/products/product12.webp',
    },
    {
      id: 13,
      name: 'Silla Ejecutiva Sillon Gerencial Ergonomica Usb Masajeador',
      prevPrice: '$780.500',
      price: '$700.000',
      image: '/img/products/product13.webp',
    },
    {
      id: 14,
      name: 'Silla Ejecutiva Sillon Gerencial Ergonomica Usb Masajeador',
      prevPrice: '$620.500',
      price: '$550.000',
      image: '/img/products/product14.webp',
    },
    {
      id: 15,
      name: 'Silla Ejecutiva Sillon Gerencial Ergonomica Usb Masajeador',
      prevPrice: '$840.500',
      price: '$800.000',
      image: '/img/products/product15.webp',
    },
    {
      id: 16,
      name: 'Silla Ejecutiva Sillon Gerencial Ergonomica Usb Masajeador',
      prevPrice: '$890.500',
      price: '$821.000',
      image: '/img/products/product16.webp',
    },
    {
      id: 17,
      name: 'Silla Ejecutiva Sillon Gerencial Ergonomica Usb Masajeador',
      prevPrice: '$990.500',
      price: '$910.000',
      image: '/img/products/product17.webp',
    },
    {
      id: 18,
      name: 'Silla Ejecutiva Sillon Gerencial Ergonomica Usb Masajeador',
      prevPrice: '$520.500',
      price: '$472.000',
      image: '/img/products/product18.webp',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 6;

  const handleNext = () => {
    if (currentIndex + itemsPerPage < products.length) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (currentIndex - itemsPerPage >= 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  const visibleProducts = products.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  return (
    <div className="w-[87.2%] bg-white h-auto rounded-lg shadow-lg relative">
      {/* Título en la parte superior izquierda */}
      <h2 className="absolute top-4 left-4 text-xl font-semibold text-gray-700">
        Productos rebajados
      </h2>

      {/* Flecha anterior */}
      {currentIndex > 0 && (
        <button
          onClick={handlePrev}
          className="absolute left-[-30px] top-1/2 transform -translate-y-1/2 p-2 text-white bg-indigo-500 rounded-full shadow-lg"
        >
          ←
        </button>
      )}

      {/* Contenedor de las cards con más padding en la parte superior */}
      <div className="flex justify-center p-0 gap-4 pt-10">
        {visibleProducts.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            prevPrice={product.prevPrice}
          />
        ))}
      </div>

      {/* Flecha siguiente */}
      {currentIndex + itemsPerPage < products.length && (
        <button
          onClick={handleNext}
          className="absolute right-[-30px] top-1/2 transform -translate-y-1/2 p-2 text-white bg-indigo-500 rounded-full shadow-lg"
        >
          →
        </button>
      )}
    </div>
  );
};

export default ProductCarousel;
