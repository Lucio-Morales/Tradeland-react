import React from 'react';

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  prevPrice: string; // Campo para el precio anterior
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  name,
  price,
  prevPrice,
}) => {
  return (
    <div className="w-1/4 p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img
        src={image}
        alt={name}
        className="max-w-[180px] max-h-[200px] mx-auto mb-4 object-contain transition-transform duration-300 hover:scale-105"
      />
      <h3 className="text-xs font-semibold text-center text-gray-700">
        {name}
      </h3>

      {/* Precio anterior con estilo de tachado */}
      <p className="text-lg text-center text-gray-500 line-through">
        {prevPrice}
      </p>

      {/* Precio actual */}
      <p className="text-2xl font-bold text-center text-indigo-600">{price}</p>

      {/* Descuento en verde */}
      <p className="text-center text-green-500 font-semibold mt-2">25% OFF</p>
    </div>
  );
};

export default ProductCard;
