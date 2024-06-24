"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
}

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]); // State for products fetched from API
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]); // State for selected products in cart
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = async (product: Product) => {
    const updatedProducts = [...selectedProducts, { ...product, quantity: 1 }];
    setSelectedProducts(updatedProducts);

    try {
      const response = await fetch('/api/add-to-cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });

      if (response.ok) {
        console.log('Product added to cart');
      } else {
        console.error('Error adding product to cart');
      }
    } catch (error) {
      console.error('Error adding product to cart:', error);
    }
  };

  return (
    <div className="h-full flex justify-center items-center">
      {products.map((product: Product) => (
        <div key={product.id} className="flex flex-col items-center p-4 bg-white shadow-md rounded-md m-4">
          <div className="h-[200px] w-[200px] overflow-hidden">
            <img
              src={product.image}
              alt={product.title}
              className="h-full w-full object-contain"
            />
          </div>
          <div className="px-4 py-2 mt-2 text-gray-600 text-center">
            <p className="text-[16px] font-semibold">{product.title}</p>
            <p className="text-[18px] font-black text-black mt-1">${product.price}</p>
            <p className="text-[14px] font-semibold mt-1">{product.category}</p>
            <button
              className="border border-blue-500 h-[40px] w-[120px] mt-2 rounded-xl text-black font-semibold bg-blue-450 hover:bg-blue-500"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
