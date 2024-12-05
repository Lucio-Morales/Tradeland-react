import React from 'react';

const AuthButtons: React.FC = () => {
  return (
    <div className="flex space-x-3">
      <button
        className="px-3 py-2 bg-gray-200 text-gray-500 rounded-md hover:bg-gray-300 hover:text-gray-700 focus:outline-none focus:ring-0"
        aria-label="Ingresar"
      >
        Ingresar
      </button>
      <button
        className="px-3 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-0"
        aria-label="Registrarse"
      >
        Registrarse
      </button>
    </div>
  );
};

export default AuthButtons;
