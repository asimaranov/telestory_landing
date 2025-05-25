"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
  images: string[];
  autoPlayInterval?: number;
  className?: string;
}

export function Carousel({
  images,
  autoPlayInterval = 5000,
  className = "",
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (autoPlayInterval > 0) {
      const interval = setInterval(nextSlide, autoPlayInterval);
      return () => clearInterval(interval);
    }
  }, [autoPlayInterval]);

  return (
    <div className={`relative w-full max-w-sm mx-auto ${className}`}>
      {/* Main carousel container */}
      <div className="relative overflow-hidden rounded-xl shadow-2xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <Image
                src={image}
                alt={`Screenshot ${index + 1}`}
                width={300}
                height={225}
                className="w-full h-auto object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-1 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white/90 border-white/20 h-6 w-6"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-2.5 w-2.5" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white/90 border-white/20 h-6 w-6"
          onClick={nextSlide}
        >
          <ChevronRight className="h-2.5 w-2.5" />
        </Button>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center mt-2 space-x-1.5">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-1.5 h-1.5 rounded-full transition-colors ${
              index === currentIndex
                ? "bg-blue-600"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
