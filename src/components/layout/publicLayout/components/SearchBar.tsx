import { FaSearch } from 'react-icons/fa';

const SearchBar: React.FC = () => {
  const handleSearch = () => {
    console.log('Buscando productos...');
  };

  return (
    <div className="flex-1 flex justify-center mx-4">
      <div className="flex w-full max-w-xl rounded-md overflow-hidden">
        <input
          type="text"
          placeholder="Buscar productos, marcas y mas..."
          className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-0 rounded-l-md"
        />

        <div
          onClick={handleSearch}
          className="flex items-center justify-center bg-gray-200 px-3 cursor-pointer border-t border-b border-r border-gray-300 hover:bg-gray-300  rounded-r-md"
        >
          <FaSearch className="text-gray-500 " />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
