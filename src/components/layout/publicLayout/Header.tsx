import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 py-3">
        {/* Logo con imagen y nombre */}
        <div className="flex items-center space-x-2 flex-shrink-0">
          <img src="/logo.png" alt="TradeLand Logo" className="h-8" />
          <span className="text-lg font-semibold text-gray-800">TRADELAND</span>
        </div>

        {/* Barra de búsqueda */}
        <div className="flex-1 flex justify-center mx-4">
          <div className="flex w-full max-w-xl space-x-2">
            <input
              type="text"
              placeholder="Buscar productos..."
              className="w-full px-2 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-600 focus:outline-none"
            />
            <button
              className="px-3 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              aria-label="Buscar productos"
            >
              Buscar
            </button>
          </div>
        </div>

        {/* Botones de Ingresar y Registrarse */}
        <div className="flex space-x-3">
          <button
            className="px-3 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:ring-2 focus:ring-indigo-600 focus:outline-none"
            aria-label="Ingresar"
          >
            Ingresar
          </button>
          <button
            className="px-3 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            aria-label="Registrarse"
          >
            Registrarse
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
