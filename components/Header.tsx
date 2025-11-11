"use client";
import React, { useState, useEffect } from 'react';
import { useDebounce } from '@/hooks/useDebounce'; // Asegúrate de que la ruta a tu hook sea correcta

interface HeaderProps {
  onSearch: (query: string) => void; // Callback para pasar la búsqueda al padre
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearchQuery = useDebounce(searchQuery, 500); // 500ms de retardo

  useEffect(() => {
   
    onSearch(debouncedSearchQuery);
  }, [debouncedSearchQuery, onSearch]);

  return (
    <header className="bg-zinc-700 shadow-md">
 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
  <div className="flex flex-col md:flex-row items-start md:items-center justify-between h-auto md:h-16  md:gap-0">
    
    {/* Heading */}
    <div className="flex items-center lg:py-0 md:py-0 pt-3">
      <h1 className="text-xl sm:text-2xl font-bold text-white">Product Showcase</h1>
    </div>

    {/* Search input */}



    <nav className="hidden md:flex items-center space-x-4">
      <a
        href="#"
        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
      >
        Home
      </a>
      <a
        href="#"
        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
      >
        Products
      </a>
      <a
        href="#"
        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
      >
        About
      </a>
      <a
        href="#"
        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
      >
        Help
      </a>

        <a
        href="#"
        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
      >
        
      </a>
    </nav>
    <div className="w-full md:max-w-sm lg:py-0 md:py-0 pb-4">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search for products..."
        className="w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
    </div>

    {/* Navbar */}
    
  </div>
</div>

    </header>
  );
};

export default Header;