import React, { useState } from 'react';

const ProductCarousel: React.FC = () => {
  const products = [
    // Aquí van los productos, como los que has mostrado
    {
      id: 1,
      name: 'Silla Ejecutiva Sillon Gerencial Ergonomica Usb Masajeador',
      price: '$10.000',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Silla Ejecutiva Sillon Gerencial Ergonomica Usb Masajeador',
      price: '$150.000',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: 'Silla Ejecutiva Sillon Gerencial Ergonomica Usb Masajeador',
      price: '$210.000',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      name: 'Silla Ejecutiva Sillon Gerencial Ergonomica Usb Masajeador',
      price: '$205.000',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 5,
      name: 'Silla Ejecutiva Sillon Gerencial Ergonomica Usb Masajeador',
      price: '$300.000',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 6,
      name: 'Silla Ejecutiva Sillon Gerencial Ergonomica Usb Masajeador',
      price: '$355.000',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 7,
      name: 'Silla Ejecutiva Sillon Gerencial Ergonomica Usb Masajeador',
      price: '$400.000',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 8,
      name: 'Silla Ejecutiva Sillon Gerencial Ergonomica Usb Masajeador',
      price: '$990.000',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 9,
      name: 'Silla Ejecutiva Sillon Gerencial Ergonomica Usb Masajeador',
      price: '$1.100.000',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 10,
      name: 'Silla Ejecutiva Sillon Gerencial Ergonomica Usb Masajeador',
      price: '$550.000',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 11,
      name: 'Silla Ejecutiva Sillon Gerencial Ergonomica Usb Masajeador',
      price: '$640.000',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 12,
      name: 'Silla Ejecutiva Sillon Gerencial Ergonomica Usb Masajeador',
      price: '$65.000',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 13,
      name: 'Silla Ejecutiva Sillon Gerencial Ergonomica Usb Masajeador',
      price: '$700.000',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 14,
      name: 'Silla Ejecutiva Sillon Gerencial Ergonomica Usb Masajeador',
      price: '$550.000',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 15,
      name: 'Silla Ejecutiva Sillon Gerencial Ergonomica Usb Masajeador',
      price: '$800.000',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 16,
      name: 'Silla Ejecutiva Sillon Gerencial Ergonomica Usb Masajeador',
      price: '$821.000',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 17,
      name: 'Silla Ejecutiva Sillon Gerencial Ergonomica Usb Masajeador',
      price: '$910.000',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 18,
      name: 'Silla Ejecutiva Sillon Gerencial Ergonomica Usb Masajeador',
      price: '$472.000',
      image: 'https://via.placeholder.com/150',
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
    <div className="bg-slate-200 w-[87.2%] h-auto border border-black rounded-lg shadow-lg relative">
      {/* Flecha anterior */}
      {currentIndex > 0 && (
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 text-white bg-indigo-500 rounded-full"
        >
          ←
        </button>
      )}

      {/* Productos */}
      <div className="flex justify-center space-x-1 p-0">
        {visibleProducts.map((product) => (
          <div key={product.id} className="w-1/4 bg-white p-1 shadow-md">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-56 object-cover mb-4"
            />
            <h3 className="text-sm font-semibold">{product.name}</h3>
            <p className="text-2xl">{product.price}</p>
          </div>
        ))}
      </div>

      {/* Flecha siguiente */}
      {currentIndex + itemsPerPage < products.length && (
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 text-white bg-indigo-500 rounded-full"
        >
          →
        </button>
      )}
    </div>
  );
};

export default ProductCarousel;
