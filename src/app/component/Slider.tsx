"use client"; // Ensure this component is treated as a client component
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const SliderComponent = () => {
  // Define array of image URLs
  const images = [
    "https://img.freepik.com/free-vector/flat-horizontal-sale-banner-template-with-photo_23-2149000923.jpg?w=1380&t=st=1718957246~exp=1718957846~hmac=ecb70e8b733e7cd5eb420ff65975a9fe3ee53cb28b48f903eb25ded76b49ebc9",
    "https://img.freepik.com/free-vector/gradient-shopping-discount-horizontal-sale-banner_23-2150322012.jpg?w=1060&t=st=1718957428~exp=1718958028~hmac=9f288bc3be3e020d23fabc2976db0d0864ec1a90da63f7a09ef9579b3e6d3237",
    "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/77e402bbfdae0e68.jpg?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/f21c8c88a0bb63e0.png?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/78e89d02375d5222.jpg?q=20",
  ];

  const settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    autoPlay: 3000,
    infinite: true,
    nextArrow: <CarouselNext />,
    prevArrow: <CarouselPrevious />,
  };

  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center items-center h-[300px] w-[1600px] bg-white">
        <Carousel className="w-full" {...settings}>
          <CarouselContent className="h-full flex justify-center items-center">
            {images.map((imageUrl, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="flex items-center justify-center">
                    <CardContent className="flex h-64 w-full object-cover items-center justify-center p-6">
                      <img
                        src={imageUrl}
                        className="max-h-64 w-full object-cover"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default SliderComponent;
