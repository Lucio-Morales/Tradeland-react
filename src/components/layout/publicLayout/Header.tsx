import { FiMapPin, FiShoppingCart, FiChevronDown } from 'react-icons/fi';
import { useState } from 'react';
import AuthButtons from './components/AuthButtons';
import Logo from './components/Logo';
import SearchBar from './components/SearchBar';

const Header: React.FC = () => {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsCategoriesOpen(true);
  };

  const handleMouseLeave = () => {
    setIsCategoriesOpen(false);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-16 py-2">
        <div className="flex items-center justify-between w-full mb-4">
          <Logo />
          <SearchBar />
          <AuthButtons />
        </div>

        <div className="flex items-center justify-between w-full space-x-8 text-sm text-gray-600">
          <div className="flex items-center">
            <FiMapPin className="w-4 h-4" />
            <p className="pl-1">Enviar a Entre Rios</p>
          </div>

          <div className="flex space-x-6">
            <div
              className="font-normal flex items-center relative cursor-pointer"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <p className="flex items-center cursor-pointer">
                Categorías <FiChevronDown className="ml-2" />
              </p>

              {isCategoriesOpen && (
                <div className="absolute top-full left-0 mt-0 w-64 bg-white shadow-lg rounded-lg p-4 z-20">
                  <ul className="space-y-4 text-gray-700 text-sm">
                    <li className="cursor-pointer hover:bg-gray-200 hover:text-indigo-500 px-2 py-1 rounded">
                      Categoría 1
                    </li>
                    <li className="cursor-pointer hover:bg-gray-200 hover:text-indigo-500 px-2 py-1 rounded">
                      Categoría 2
                    </li>
                    <li className="cursor-pointer hover:bg-gray-200 hover:text-indigo-500 px-2 py-1 rounded">
                      Categoría 3
                    </li>
                    <li className="cursor-pointer hover:bg-gray-200 hover:text-indigo-500 px-2 py-1 rounded">
                      Categoría 4
                    </li>
                    <li className="cursor-pointer hover:bg-gray-200 hover:text-indigo-500 px-2 py-1 rounded">
                      Categoría 5
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <p className="font-normal cursor-pointer">Ofertas</p>
            <p className="font-normal cursor-pointer">Cupones</p>
            <p className="font-normal cursor-pointer">Supermercado</p>
            <p className="font-normal cursor-pointer">Moda</p>
            <p className="font-normal cursor-pointer">Vender</p>
            <p className="font-normal cursor-pointer">Ayuda</p>
          </div>

          <div className="flex items-center">
            <FiShoppingCart className="w-4 h-4 mr-2" />
            <p className="text-sm text-gray-600 cursor-pointer">
              Carrito de compras
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
