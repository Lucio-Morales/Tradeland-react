import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center space-x-2 flex-shrink-0">
          <img src="/logo.png" alt="TradeLand Logo" className="h-10" />
          <span className="text-xl font-semibold text-gray-800">TRADELAND</span>
        </div>
        <div className="flex-1 flex justify-center mx-4">
          <div className="flex w-full max-w-xl">
            <input
              type="text"
              placeholder="Buscar productos..."
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-0 focus:outline-none h-12"
            />
            <button className="p-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:ring-0 focus:outline-none ml-2 h-12">
              Buscar
            </button>
          </div>
        </div>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:ring-0 focus:outline-none h-12">
            Ingresar
          </button>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:ring-0 focus:outline-none h-12">
            Registrarse
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
