"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const SliderComponent = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Carousel className="w-full">
      <CarouselContent className="h-full">
        {products.slice(0, 5).map((product) => (
          <CarouselItem key={product.id}>
            <div className="p-1">
              <Card>
                <CardContent className="flex h-64 w-full object-cover items-center justify-center p-6">
                  <img src={product.image} alt={product.title} className="max-h-64 w-900 object-cover" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default SliderComponent;
