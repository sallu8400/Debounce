"use client";

import ProductSkeleton from '@/components/Skeleton';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

// Antarmuka untuk mendefinisikan tipe data produk
interface Product {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    dimensions: {
        width: number;
        height: number;
        depth: number;
    };
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: {
        rating: number;
        comment: string;
        date: string;
        reviewerName: string;
        reviewerEmail: string;
    }[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: {
        createdAt: string;
        updatedAt: string;
        barcode: string;
        qrCode: string;
    };
    images: string[];
    thumbnail: string;
}

const ProductClientPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (id) {
            const fetchProduct = async () => {
                try {
                    const response = await fetch(`https://dummyjson.com/products/${id}`);
                    if (!response.ok) {
                        throw new Error('Produk tidak ditemukan');
                    }
                    const data: Product = await response.json();
                    setProduct(data);
                } catch (error: any) {
                    setError(error.message);
                } finally {
                    setLoading(false);
                }
            };

            fetchProduct();
        }
    }, [id]);

    if (loading) {
        return <ProductSkeleton/>
    }

    if (error) {
        return <div className="text-center mt-10 text-red-500">Error: {error}</div>;
    }

    if (!product) {
        return <div className="text-center mt-10">Produk tidak ditemukan.</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div>
                        <img src={product.thumbnail} alt={product.title} className="w-full h-auto" />
                        <div className="grid grid-cols-3 gap-2 p-2">
                            {product.images.map((image, index) => (
                                <img key={index} src={image} alt={`${product.title} - gambar ${index + 1}`} className="w-full h-auto object-cover rounded" />
                            ))}
                        </div>
                    </div>
                    <div className="p-6">
                        <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
                        <p className="text-gray-600 mb-4">{product.brand}</p>
                        <p className="text-gray-800 mb-4">{product.description}</p>
                        <div className="flex items-center mb-4">
                            <span className="text-2xl font-bold text-gray-900">${(product.price * (1 - product.discountPercentage / 100)).toFixed(2)}</span>
                            {product.discountPercentage > 0 && (
                                <span className="text-lg text-gray-500 line-through ml-2">${product.price.toFixed(2)}</span>
                            )}
                            {product.discountPercentage > 0 && (
                                <span className="ml-2 text-sm font-semibold text-green-600 bg-green-100 px-2 py-1 rounded">{product.discountPercentage}% OFF</span>
                            )}
                        </div>
                        <div className="flex items-center mb-4">
                            <span className="text-yellow-500">{'★'.repeat(Math.round(product.rating))}{'☆'.repeat(5 - Math.round(product.rating))}</span>
                            <span className="ml-2 text-gray-600">({product.rating.toFixed(2)})</span>
                        </div>
                        <div className="mb-4">
                            <span className={`font-semibold ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                                {product.availabilityStatus} ({product.stock} tersisa)
                            </span>
                        </div>
                        <div className="mb-4">
                            <h3 className="font-semibold text-lg">Kategori:</h3>
                            <p className="text-gray-700">{product.category}</p>
                        </div>
                        <div className="mb-4">
                            <h3 className="font-semibold text-lg">Informasi Pengiriman:</h3>
                            <p className="text-gray-700">{product.shippingInformation}</p>
                        </div>
                        <div className="mb-4">
                            <h3 className="font-semibold text-lg">Kebijakan Pengembalian:</h3>
                            <p className="text-gray-700">{product.returnPolicy}</p>
                        </div>
                        <div className="mb-4">
                            <h3 className="font-semibold text-lg">Informasi Garansi:</h3>
                            <p className="text-gray-700">{product.warrantyInformation}</p>
                        </div>
                    </div>
                </div>
                <div className="p-6">
                    <h2 className="text-2xl font-bold mb-4">Ulasan</h2>
                    {product.reviews.length > 0 ? (
                        <div className="space-y-4">
                            {product.reviews.map((review, index) => (
                                <div key={index} className="border-t pt-4">
                                    <div className="flex items-center mb-2">
                                        <span className="font-semibold">{review.reviewerName}</span>
                                        <span className="text-yellow-500 ml-2">{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</span>
                                    </div>
                                    <p className="text-gray-700">{review.comment}</p>
                                    <p className="text-sm text-gray-500 mt-1">{new Date(review.date).toLocaleDateString()}</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>Belum ada ulasan untuk produk ini.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductClientPage;