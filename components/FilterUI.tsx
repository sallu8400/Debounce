import React, { useState, useEffect } from 'react';


interface Category {
  slug: string;
  name: string;
}

interface FilterUIProps {
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;

}


// --- Main Filter Component ---    
const FilterUI: React.FC<FilterUIProps> = ({
  selectedCategory,
  setSelectedCategory,

}) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loadingCategories, setLoadingCategories] = useState<boolean>(true);

  // Fetch categories only once
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products/categories');
        const data: Category[] = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Failed to fetch categories:', error);
      } finally {
        setLoadingCategories(false);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div className="flex gap-5 justify-around bg-white p-6 rounded-lg shadow-md border border-gray-200 space-y-6">
       {/* সার্চ ইনপুট এখান থেকে সরানো হয়েছে */}

      <div>
        <h3 className="text-lg font-semibold mb-2 text-gray-800">Filter by Category</h3>
        {loadingCategories ? (
          <div className="w-full h-10 bg-gray-200 rounded-lg animate-pulse"></div>
        ) : (
          <select
            value={selectedCategory || 'all'}
            onChange={(e) => setSelectedCategory(e.target.value === 'all' ? null : e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="all">All Categories</option>
            {categories.map((cat) => (
              <option key={cat.slug} value={cat.slug}>
                {cat.name}
              </option>
            ))}
          </select>
        )}
      </div>

      <div></div>
    </div>
  );
};

export default FilterUI;