"use client"
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer'; 
import ProductCard from '@/components/ProductCard';
import FilterUI from '@/components/FilterUI';
import Pagination from '@/components/Pagination';
import Spinner from '@/components/Spinner';
import Breadcrumbs from '@/components/Breadcrumbs';



import type { Product } from '@/types';
import ProductSkeleton from '@/components/Skeleton';
import Sort from '@/components/Sort';

const PRODUCTS_PER_PAGE = 12;

const App: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalProducts, setTotalProducts] = useState<number>(0);
    
    // El 'searchQuery' se mueve a un estado separado
    const [searchQuery, setSearchQuery] = useState('');
    
    const [filters, setFilters] = useState({
        category: null as string | null,
        sortBy: 'price' as 'price' | 'rating' | 'title',
        sortOrder: 'desc' as 'asc' | 'desc',
    });

    const totalPages = Math.ceil(totalProducts / PRODUCTS_PER_PAGE);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            
            let apiUrl = 'https://dummyjson.com/products';
            const params = new URLSearchParams();

            if (searchQuery) {
                apiUrl = `https://dummyjson.com/products/search`;
                params.set('q', searchQuery);
                params.set('limit', String(PRODUCTS_PER_PAGE));
                params.set('skip', String((currentPage - 1) * PRODUCTS_PER_PAGE));
            
            } else if (filters.category) {
                apiUrl = `https://dummyjson.com/products/category/${filters.category}`;
            
            } else {
                apiUrl = 'https://dummyjson.com/products';
                params.set('limit', String(PRODUCTS_PER_PAGE));
                params.set('skip', String((currentPage - 1) * PRODUCTS_PER_PAGE));
            }

            const finalUrl = `${apiUrl}?${params.toString()}`;

            try {
                const response = await fetch(finalUrl);
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                
                setProducts(data.products);
                setTotalProducts(data.total);

            } catch (err) {
                setError('Failed to fetch products.');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [currentPage, searchQuery, filters.category]); 

    useEffect(() => {
        setCurrentPage(1);
    }, [searchQuery, filters.category]);
    
    // Nueva función para manejar la búsqueda que viene del Header
    const handleSearch = (query: string) => {
        setSearchQuery(query);
    };

    const handleFilterChange = (filterName: string, value: any) => {
        setFilters(prev => ({ ...prev, [filterName]: value }));
    };
    
    const handlePageChange = (page: number) => {


    
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const sortedProducts = [...products].sort((a, b) => {
        const valueA = a[filters.sortBy];
        const valueB = b[filters.sortBy];
        return filters.sortOrder === 'asc' ? (valueA > valueB ? 1 : -1) : (valueA < valueB ? 1 : -1);
    });

    const productsToDisplay = filters.category 
        ? sortedProducts.slice(
            (currentPage - 1) * PRODUCTS_PER_PAGE, 
            currentPage * PRODUCTS_PER_PAGE
          )
        : sortedProducts;
console.log(productsToDisplay,"display")
    return (
      <div className="min-h-screen flex flex-col font-sans">
      
        <Header onSearch={handleSearch} />

        <main className="flex-grow item-center container mx-auto px-4 sm:px-6 lg:px-8 pb-3">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 py-2">
           

            <div className="lg:col-span-4">
           <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
  <Breadcrumbs category={filters.category} />
  <Sort
    setSortBy={(value) => handleFilterChange("sortBy", value)}
    setSortOrder={(value) => handleFilterChange("sortOrder", value)}
  />
</div>


              {loading ? (
                <ProductSkeleton />
              ) : error ? (
                <div>{error}</div>
              ) : productsToDisplay.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                    {productsToDisplay.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />
                </>
              ) : (
                <div>No Products Found</div>
              )}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
};

export default App;

