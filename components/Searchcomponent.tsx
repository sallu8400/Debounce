// src/components/SearchComponent.tsx

import React from 'react';

// --- Helper Icon ---
const SearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    </svg>
);

// --- Component Props ---
interface SearchComponentProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchComponent: React.FC<SearchComponentProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="relative w-full max-w-xs">
      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
        <SearchIcon />
      </span>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search for products..."
        className="w-full pl-10 pr-4 py-2 border border-gray-500 rounded-lg text-white bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-colors"
      />
    </div>
  );
};

export default SearchComponent;