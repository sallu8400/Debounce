
import React from 'react';
import type { Product } from '../types';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
}

const StarIcon: React.FC<{ filled: boolean }> = ({ filled }) => (
    <svg className={`w-4 h-4 ${filled ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.446a1 1 0 00-.364 1.118l1.287 3.955c.3.921-.755 1.688-1.54 1.118l-3.368-2.446a1 1 0 00-1.175 0l-3.368 2.446c-.784.57-1.838-.197-1.539-1.118l1.287-3.955a1 1 0 00-.364-1.118L2.07 9.382c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
    </svg>
);


const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const renderStars = () => {
        const stars = [];
        const rating = Math.round(product.rating);
        for (let i = 1; i <= 5; i++) {
            stars.push(<StarIcon key={i} filled={i <= rating} />);
        }
        return stars;   
    };

 return (
        <Link href={`/product-details/${product.id}`} legacyBehavior={false}> {/* Use the Link as the main wrapper */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden transform transition duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer">
                <div className="w-full h-48 overflow-hidden">
                    <img className="w-full h-full object-cover" src={product.thumbnail} alt={product.title} />
                </div>
                <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-lg font-semibold text-dark truncate">{product.title}</h3>
                    <p className="text-sm text-gray-600 mt-1 h-10 overflow-hidden">{product.description}</p>
                    <div className="flex items-center mt-2">
                        {renderStars()}
                        <span className="text-xs text-gray-500 ml-2">({product.rating.toFixed(1)})</span>
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                        <p className="text-xl font-bold text-primary">${product.price.toFixed(2)}</p>
                        {/* You can style this as a button, but it's not a separate link anymore */}
                        <div className="bg-primary text-black text-sm font-medium py-2 px-4 rounded-lg hover:bg-opacity-90 transition-colors">
                            View
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
