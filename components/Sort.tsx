import React, { useState, useEffect } from 'react';



interface Sort  {

  setSortBy: (sortBy: 'price' | 'rating' | 'title') => void;
  setSortOrder: (order: 'asc' | 'desc') => void;
}


// --- Main Filter Component ---    
const Sort: React.FC<Sort> = ({

  setSortBy,
  setSortOrder,
}) => {



  return (
    <div className="flex      bg-white rounded-lg  ">



  <div className="flex items-center gap-3">
  <h3 className="text-lg font-semibold text-gray-800 whitespace-nowrap">
    Sort By:
  </h3>
  <select
    onChange={(e) => {
      const [by, order] = e.target.value.split("-");
      setSortBy(by as "price" | "rating" | "title");
      setSortOrder(order as "asc" | "desc");
    }}
    defaultValue="rating-desc"
    className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
  >
    <option value="rating-desc">Rating: High to Low</option>
    <option value="rating-asc">Rating: Low to High</option>
    <option value="price-asc">Price: Low to High</option>
    <option value="price-desc">Price: High to Low</option>
    <option value="title-asc">Name: A to Z</option>
    <option value="title-desc">Name: Z to A</option>
  </select>
</div>

    </div>
  );
};

export default Sort;