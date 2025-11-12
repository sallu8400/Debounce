// // src/api/products.ts
// import type { Product, ApiResponse } from '@/types';

// const BASE_URL = 'https://dummyjson.com/products';
// const PRODUCTS_PER_PAGE = 12;

// export interface ProductFilters {
//   searchQuery?: string;
//   category?: string | null;
//   sortBy?: 'price' | 'rating' | 'title';
//   sortOrder?: 'asc' | 'desc';
// }


// export async function fetchProducts(
//   filters: ProductFilters,
//   currentPage: number = 1,
//   limit: number = PRODUCTS_PER_PAGE
// ): Promise<ApiResponse<Product>> {
  
//   let apiUrl = BASE_URL;
//   const params = new URLSearchParams();

//   if (filters.searchQuery) {
//     apiUrl = `${BASE_URL}/search`;
//     params.set('q', filters.searchQuery);
//     params.set('limit', String(limit));
//     params.set('skip', String((currentPage - 1) * limit));
//   } 
//   else if (filters.category) {
//     apiUrl = `${BASE_URL}/category/${filters.category}`;
//     // category API does not support pagination — returns all items
//   } 
//   else {
//     params.set('limit', String(limit));
//     params.set('skip', String((currentPage - 1) * limit));
//   }

//   const finalUrl = `${apiUrl}?${params.toString()}`;
//   console.log('%c[API Fetch]', 'color: purple', finalUrl);

//   const response = await fetch(finalUrl);
//   if (!response.ok) throw new Error('Failed to fetch products');

//   const data = await response.json();
//   return data;
// }
