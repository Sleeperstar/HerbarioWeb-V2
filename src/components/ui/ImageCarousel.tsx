'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageCarouselProps {
  images: string[];
  interval?: number;
  className?: string;
  showDots?: boolean;
  currentIndex?: number;
  onSlideChange?: (index: number) => void;
}

export function ImageCarousel({ 
  images, 
  interval = 5000, 
  className = '', 
  showDots = true,
  currentIndex: externalCurrentIndex = 0,
  onSlideChange
}: ImageCarouselProps) {
  const [internalIndex, setInternalIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  // Use external index if provided, otherwise use internal state
  const currentIndex = onSlideChange ? externalCurrentIndex : internalIndex;
  const setCurrentIndex = onSlideChange ? onSlideChange : setInternalIndex;

  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = useCallback(() => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
  }, [currentIndex, images.length, setCurrentIndex]);

  const prevSlide = useCallback(() => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prevIndex);
  }, [currentIndex, images.length, setCurrentIndex]);

  // Auto-advance slides
  // Auto-advance slides
  useEffect(() => {
    if (isHovered) return;
    
    const timer = setInterval(() => {
      nextSlide();
    }, interval);

    return () => clearInterval(timer);
  }, [isHovered, interval, nextSlide, currentIndex]);

  return (
    <div 
      className={`relative w-full h-full ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >

      {/* Images */}
      <div className="relative w-full h-full overflow-hidden">
        {images.map((image, index) => {
          const isActive = index === currentIndex;
          const isPrev = index === (currentIndex - 1 + images.length) % images.length;
          const isNext = index === (currentIndex + 1) % images.length;
          
          let transform = '';
          if (isActive) {
            transform = 'translateX(0)';
          } else if (isPrev) {
            transform = 'translateX(-100%)';
          } else if (isNext) {
            transform = 'translateX(100%)';
          } else {
            transform = 'translateX(100%)';
          }
          
          return (
            <div
              key={image}
              className="absolute inset-0 transition-transform duration-1000 ease-in-out"
              style={{
                transform,
                zIndex: isActive ? 2 : isPrev || isNext ? 1 : 0,
              }}
            >
              <Image
                src={image}
                alt={`Plant specimen ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="100vw"
              />
            </div>
          );
        })}
      </div>

      {/* Enhanced Dot Navigation */}
      {showDots && (
        <div className="absolute bottom-6 left-0 right-0 z-20">
          <div className="flex justify-center space-x-3">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 w-3 rounded-full transition-all duration-300 relative ${
                  index === currentIndex 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Ir a la imagen ${index + 1}`}
                aria-current={index === currentIndex ? 'true' : 'false'}
              >
                <span className="sr-only">Ir a la imagen {index + 1}</span>
                {index === currentIndex && (
                  <span className="absolute inset-0 rounded-full bg-white/30 animate-ping"></span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
