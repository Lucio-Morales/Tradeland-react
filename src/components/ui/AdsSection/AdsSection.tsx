import React, { useState, useEffect, useCallback } from 'react';

const AdsSection: React.FC = () => {
  const ads = [
    { id: 1, image: '/ad1.webp', alt: 'Oferta del mes 1' },
    { id: 2, image: '/ad2.webp', alt: 'Oferta del mes 2' },
    { id: 3, image: '/ad3.webp', alt: 'Oferta del mes 3' },
    { id: 4, image: '/ad4.webp', alt: 'Oferta del mes 4' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [hovering, setHovering] = useState(false);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % ads.length);
  }, [ads.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + ads.length) % ads.length);
  };

  useEffect(() => {
    if (!hovering) {
      const interval = setInterval(handleNext, 3000);
      return () => clearInterval(interval);
    }
  }, [hovering, handleNext]);

  return (
    <div
      className="relative max-w-7xl mx-auto mt-6 overflow-hidden"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {/* Contenedor de las imágenes */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {ads.map((ad) => (
          <img
            key={ad.id}
            src={ad.image}
            alt={ad.alt}
            className="w-full h-80 object-cover flex-shrink-0"
          />
        ))}
      </div>

      {/* Botones de navegación */}
      {hovering && (
        <>
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-2 rounded-r-full shadow-lg hover:bg-gray-200"
          >
            &#8249;
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 rounded-l-full shadow-lg hover:bg-gray-200"
          >
            &#8250;
          </button>
        </>
      )}

      {/* Indicadores */}
      <div className="flex justify-center space-x-2 mt-4">
        {ads.map((ad, index) => (
          <button
            key={ad.id}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full ${
              currentIndex === index ? 'bg-indigo-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default AdsSection;

// import React, { useState, useEffect, useCallback } from 'react';

// const AdsSection: React.FC = () => {
//   const ads = [
//     { id: 1, image: '/ad1.webp', alt: 'Oferta del mes 1' },
//     { id: 2, image: '/ad2.webp', alt: 'Oferta del mes 2' },
//     { id: 3, image: '/ad3.webp', alt: 'Oferta del mes 3' },
//     { id: 4, image: '/ad4.webp', alt: 'Oferta del mes 4' },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [hovering, setHovering] = useState(false);

//   const handleNext = useCallback(() => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % ads.length);
//   }, [ads.length]);

//   useEffect(() => {
//     if (!hovering) {
//       const interval = setInterval(handleNext, 3000);
//       return () => clearInterval(interval);
//     }
//   }, [hovering, handleNext]);

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + ads.length) % ads.length);
//   };

//   return (
//     <div
//       className="relative max-w-7xl mx-auto mt-6"
//       onMouseEnter={() => setHovering(true)}
//       onMouseLeave={() => setHovering(false)}
//     >
//       <div className="overflow-hidden rounded-lg shadow-md">
//         <img
//           src={ads[currentIndex].image}
//           alt={ads[currentIndex].alt}
//           className="w-full h-80 object-cover transition-transform duration-700"
//         />
//       </div>
//       {hovering && (
//         <>
//           <button
//             onClick={handlePrev}
//             className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-2 rounded-r-full shadow-lg hover:bg-gray-200"
//           >
//             &#8249;
//           </button>
//           <button
//             onClick={handleNext}
//             className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 rounded-l-full shadow-lg hover:bg-gray-200"
//           >
//             &#8250;
//           </button>
//         </>
//       )}
//       <div className="flex justify-center space-x-2 mt-4">
//         {ads.map((ad, index) => (
//           <button
//             key={ad.id}
//             onClick={() => setCurrentIndex(index)}
//             className={`w-3 h-3 rounded-full ${
//               currentIndex === index ? 'bg-indigo-600' : 'bg-gray-300'
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AdsSection;
