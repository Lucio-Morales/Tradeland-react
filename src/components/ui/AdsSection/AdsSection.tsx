import React, { useState, useEffect, useCallback } from 'react';

const AdsSection: React.FC = () => {
  const ads = [
    { id: 1, image: 'img/img1.webp', alt: 'Oferta del mes 1' },
    { id: 2, image: 'img/img2.webp', alt: 'Oferta del mes 2' },
    { id: 3, image: 'img/img3.webp', alt: 'Oferta del mes 3' },
    { id: 4, image: 'img/img4.webp', alt: 'Oferta del mes 4' },
    { id: 5, image: 'img/img5.webp', alt: 'Oferta del mes 2' },
    { id: 6, image: 'img/img6.webp', alt: 'Oferta del mes 3' },
    { id: 7, image: 'img/img7.webp', alt: 'Oferta del mes 4' },
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
      className="relative w-full mx-auto mt-0 overflow-hidden"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {ads.map((ad) => (
          <div key={ad.id} className="relative w-full h-96 flex-shrink-0">
            {/* Imagen */}
            <img
              src={ad.image}
              alt={ad.alt}
              className="w-full h-[390px] object-cover"
            />
            {/* Efecto de degradado al fondo */}
            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-slate-200 to-transparent" />
          </div>
        ))}
      </div>

      <div className="absolute bottom-28 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {ads.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full ${
              currentIndex === index ? 'bg-indigo-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>

      {hovering && (
        <>
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-4 rounded-r-full shadow-lg hover:bg-gray-200 text-3xl"
          >
            &#8249;
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-4 rounded-l-full shadow-lg hover:bg-gray-200 text-3xl"
          >
            &#8250;
          </button>
        </>
      )}
    </div>
  );
};

export default AdsSection;
