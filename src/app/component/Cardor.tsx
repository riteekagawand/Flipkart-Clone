"use client";
import React, { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
}

const Cardor = () => {
  const [products, setProducts] = useState<Product[]>([]); // State for products fetched from API
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]); // State for selected products in cart
  const [showToast, setShowToast] = useState<boolean>(false); // State to control showing the toast

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
        setShowToast(true); // Show toast if product is added successfully
        console.log('Product added to cart');
      } else {
        console.error('Error adding product to cart');
      }
    } catch (error) {
      console.error('Error adding product to cart:', error);
    }
  };

  // Function to close the toast after a delay
  const closeToast = () => {
    setShowToast(false);
  };

  return (
    <div className="bg-white ml-[30px]">
      <Carousel className="w-full max-w-[1300px] ml-6 h-[600px]">
        <CarouselContent className="flex">
          {products.slice(0, 100).map((product: Product) => (
            <CarouselItem key={product.id} className="flex-none w-full md:w-1/3 p-2">
              <div className="h-[600px] flex justify-center rounded-xl overflow-hidden">
                <div className="flex flex-col w-full items-center">
                  <div className="h-[300px] w-[300px] mt-2 overflow-hidden">
                    <img src={product.image} alt={product.title} className="h-full w-full object-contain" />
                  </div>
                  <div className="px-4 py-2 mt-2 text-gray-600">
                    <p className="text-[18px] font-semibold flex justify-start">Title: {product.title}</p>
                    <p className="text-[18px] font-black text-black">Price: ${product.price}</p>
                    <p className="text-[18px] font-semibold">Category: {product.category}</p>
                    <button
                      className="border border-blue-500 h-[40px] w-[120px] mt-2 rounded-xl text-black font-semibold bg-blue-450 hover:bg-blue-500"
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-0 right-0 m-4 bg-green-500 text-white p-4 rounded-md shadow-md">
          Product added to cart successfully!
          <button className="ml-2 text-white" onClick={closeToast}>
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default Cardor;
