// "use client"
// import React, { useState, useEffect } from 'react';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer'; 
// import ProductCard from '@/components/ProductCard';
// import FilterUI from '@/components/FilterUI';
// import Pagination from '@/components/Pagination';
// import Spinner from '@/components/Spinner';
// import Breadcrumbs from '@/components/Breadcrumbs';
// import { useDebounce } from '@/hooks/useDebounce';
// import type { Product, ApiResponse } from '@/types';
// import ProductSkeleton from '@/components/Skeleton';



// const PRODUCTS_PER_PAGE = 12;

// const App: React.FC = () => {
//     const [products, setProducts] = useState<Product[]>([]);
//     const [loading, setLoading] = useState<boolean>(true);
//     const [error, setError] = useState<string | null>(null);
//     const [currentPage, setCurrentPage] = useState<number>(1);
//     const [totalProducts, setTotalProducts] = useState<number>(0);
    
//     const [filters, setFilters] = useState({
//         searchQuery: '',
//         category: null as string | null,
//         sortBy: 'rating' as 'price' | 'rating' | 'title',
//         sortOrder: 'desc' as 'asc' | 'desc',
//     });

//     const debouncedSearchQuery = useDebounce(filters.searchQuery, 500);
//     const totalPages = Math.ceil(totalProducts / PRODUCTS_PER_PAGE);
// // --- API से प्रोडक्ट्स लाने का लॉजिक ---
// console.log(debouncedSearchQuery,)

// useEffect(() => {
//     const fetchData = async () => {
//         setLoading(true);
//         setError(null);
        
//         let apiUrl = 'https://dummyjson.com/products';
//         const params = new URLSearchParams();
//         let reasonForApiCall = ''; // यह बताएगा कि API क्यों कॉल हुई

//         // केस 1: अगर यूजर कुछ सर्च कर रहा है
//         if (debouncedSearchQuery) {
//             apiUrl = `https://dummyjson.com/products/search`;
//             params.set('q', debouncedSearchQuery);
//             // सर्च API पेजिनेशन सपोर्ट करती है
//             params.set('limit', String(PRODUCTS_PER_PAGE));
//             params.set('skip', String((currentPage - 1) * PRODUCTS_PER_PAGE));
//             reasonForApiCall = `Searching for "${debouncedSearchQuery}" on page ${currentPage}`;
        
//         // केस 2: अगर यूजर ने कोई कैटेगरी चुनी है
//         } else if (filters.category) {
//             apiUrl = `https://dummyjson.com/products/category/${filters.category}`;
//             // कैटेगरी API पेजिनेशन सपोर्ट नहीं करती, इसलिए सारे प्रोडक्ट एक साथ मंगा रहे हैं
//             reasonForApiCall = `Filtering by category "${filters.category}" (fetching all items)`;
        
//         // केस 3: अगर न सर्च हो रहा है, न कैटेगरी चुनी गई है (सिर्फ पेज बदल रहा है)
//         } else {
//             apiUrl = 'https://dummyjson.com/products';
//             params.set('limit', String(PRODUCTS_PER_PAGE));
//             params.set('skip', String((currentPage - 1) * PRODUCTS_PER_PAGE));
//             reasonForApiCall = `Fetching general products for page ${currentPage}`;
//         }

//         const finalUrl = `${apiUrl}?${params.toString()}`;
        
//         // --- CONSOLE LOGS ---
//         console.log(`%c[API Call Triggered]`, 'color: purple; font-size: 14px; font-weight: bold;');
//         console.log(`Reason: ${reasonForApiCall}`);
//         console.log(`Calling URL: ${finalUrl}`);
//         // --------------------

//         try {
//             const response = await fetch(finalUrl);
//             if (!response.ok) throw new Error('Network response was not ok');
//             const data = await response.json();
            
//             console.log('%c[API Success]', 'color: green; font-weight: bold;', 'Data received:', data);

//             setProducts(data.products);
//             setTotalProducts(data.total);

//         } catch (err) {
//             setError('Failed to fetch products.');
//             console.error('%c[API Error]', 'color: red; font-weight: bold;', 'Request failed:', err);
//         } finally {
//             setLoading(false);
//         }
//     };

//     fetchData();
// }, [currentPage, debouncedSearchQuery, filters.category]); // इन चीज़ों के बदलने पर useEffect दोबारा चलेगा

//     useEffect(() => {
//         setCurrentPage(1);
//     }, [debouncedSearchQuery, filters.category]);

//     const handleFilterChange = (filterName: string, value: any) => {
//         setFilters(prev => ({ ...prev, [filterName]: value }));

//         console.log(filters,"kkk")
//     };
    
//     const handlePageChange = (page: number) => {
//         if (page > 0 && page <= totalPages) {
//             setCurrentPage(page);
//         }
//     };
    
//     // --- यहाँ मुख्य बदलाव है ---

//     // 1. पहले सभी प्रोडक्ट्स को सॉर्ट करें
//     const sortedProducts = [...products].sort((a, b) => {
//         const valueA = a[filters.sortBy];
//         const valueB = b[filters.sortBy];
//         return filters.sortOrder === 'asc' ? (valueA > valueB ? 1 : -1) : (valueA < valueB ? 1 : -1);
//     });

//     // 2. अब यह तय करें कि कौन से प्रोडक्ट्स इस पेज पर दिखाने हैं
//     const productsToDisplay = filters.category 
//         ? sortedProducts.slice(
//             (currentPage - 1) * PRODUCTS_PER_PAGE, 
//             currentPage * PRODUCTS_PER_PAGE
//           )
//         : sortedProducts; // अगर कैटेगरी नहीं है, तो सभी दिखाएँ क्योंकि सर्वर ने पहले ही पेज दे दिया है




//     // --- JSX (Return Statement) ---
//     return (
//         <div className="min-h-screen flex flex-col font-sans">
        
//             <main className="flex-grow item-center container mx-auto px-4 sm:px-6 lg:px-8 py-8">
//                 <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
//                     <aside className="lg:col-span-4">
//                         <FilterUI
//                              searchQuery={filters.searchQuery}
//                             setSearchQuery={(value) => handleFilterChange('searchQuery', value)}
//                             selectedCategory={filters.category}
//                             setSelectedCategory={(value) => handleFilterChange('category', value)}
//                             setSortBy={(value) => handleFilterChange('sortBy', value)}
//                             setSortOrder={(value) => handleFilterChange('sortOrder', value)}
//                         />
//                     </aside>

//                     <div className="lg:col-span-4">
//                         <Breadcrumbs category={filters.category} />
                        
//                         {loading ? <ProductSkeleton /> : error ? <div>{error}</div> : (
//                             productsToDisplay.length > 0 ? (
//                                 <>
//                                     <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
//                                         {/* अब हम `productsToDisplay` का इस्तेमाल करेंगे */}
//                                         {productsToDisplay.map((product) => (
//                                             <ProductCard key={product.id} product={product} />
//                                         ))}
//                                     </div>
//                                     <Pagination
//                                         currentPage={currentPage}
//                                         totalPages={totalPages}
//                                         onPageChange={handlePageChange}
//                                     />
//                                 </>
//                             ) : (
//                                 <div>No Products Found</div>
//                             )
//                         )}
//                     </div>
//                 </div>
//             </main>
       
//         </div>
//     );
// };

// export default App;

// "use client";
// import React, { useState, useEffect } from 'react';
// import { fetchProducts } from '@/service';
// import { useDebounce } from '@/hooks/useDebounce';
// import ProductCard from '@/components/ProductCard';
// import FilterUI from '@/components/FilterUI';
// import Pagination from '@/components/Pagination';
// import ProductSkeleton from '@/components/Skeleton';
// import Breadcrumbs from '@/components/Breadcrumbs';
// import type { Product } from '@/types';

// const PRODUCTS_PER_PAGE = 12;

// const ProductsPage: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalProducts, setTotalProducts] = useState(0);

//   const [filters, setFilters] = useState({
//     searchQuery: '',
//     category: null as string | null,
//     sortBy: 'rating' as 'price' | 'rating' | 'title',
//     sortOrder: 'desc' as 'asc' | 'desc',
//   });

//   const debouncedSearchQuery = useDebounce(filters.searchQuery, 500);
//   const totalPages = Math.ceil(totalProducts / PRODUCTS_PER_PAGE);

//   // Fetch data from API helper
//   useEffect(() => {
//     const loadProducts = async () => {
//       setLoading(true);
//       setError(null);

//       try {
//         const data = await fetchProducts(
//           { ...filters, searchQuery: debouncedSearchQuery },
//           currentPage,
//           PRODUCTS_PER_PAGE
//         );

//         setProducts(data.products);
//         setTotalProducts(data.total || data.products?.length || 0);
//       } catch (err) {
//         setError('Failed to fetch products');
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadProducts();
//   }, [debouncedSearchQuery, filters.category, currentPage]);

//   // Reset to page 1 on filter change
//   useEffect(() => {
//     setCurrentPage(1);
//   }, [debouncedSearchQuery, filters.category]);

//   const handleFilterChange = (filterName: string, value: any) => {
//     setFilters(prev => ({ ...prev, [filterName]: value }));
//   };

//   const handlePageChange = (page: number) => {
//     if (page > 0 && page <= totalPages) setCurrentPage(page);
//   };

//   // Sort (client-side)
//   const sortedProducts = [...products].sort((a, b) => {
//     const valueA = a[filters.sortBy];
//     const valueB = b[filters.sortBy];
//     return filters.sortOrder === 'asc'
//       ? valueA > valueB ? 1 : -1
//       : valueA < valueB ? 1 : -1;
//   });

//   const productsToDisplay = filters.category
//     ? sortedProducts.slice(
//         (currentPage - 1) * PRODUCTS_PER_PAGE,
//         currentPage * PRODUCTS_PER_PAGE
//       )
//     : sortedProducts;

//   return (
//     <div className="min-h-screen flex flex-col font-sans">
//       <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
//           {/* Sidebar Filter */}
//           <aside className="lg:col-span-4">
//             <FilterUI
//               searchQuery={filters.searchQuery}
//               setSearchQuery={value => handleFilterChange('searchQuery', value)}
//               selectedCategory={filters.category}
//               setSelectedCategory={value => handleFilterChange('category', value)}
//               setSortBy={value => handleFilterChange('sortBy', value)}
//               setSortOrder={value => handleFilterChange('sortOrder', value)}
//             />
//           </aside>

//           {/* Main Product Grid */}
//           <section className="lg:col-span-4">
//             <Breadcrumbs category={filters.category} />
            
//             {loading ? (
//               <ProductSkeleton />
//             ) : error ? (
//               <div className="text-red-600">{error}</div>
//             ) : productsToDisplay.length > 0 ? (
//               <>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
//                   {productsToDisplay.map(product => (
//                     <ProductCard key={product.id} product={product} />
//                   ))}
//                 </div>

//                 <Pagination
//                   currentPage={currentPage}
//                   totalPages={totalPages}
//                   onPageChange={handlePageChange}
//                 />
//               </>
//             ) : (
//               <div>No Products Found</div>
//             )}
//           </section>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default ProductsPage;
