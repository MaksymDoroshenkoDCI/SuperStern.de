"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  stars: number;
  comment: string;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [autoPlay, testimonials.length]);

  const goToPrevious = () => {
    setAutoPlay(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setAutoPlay(true), 8000);
  };

  const goToNext = () => {
    setAutoPlay(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setAutoPlay(true), 8000);
  };

  const visibleTestimonials = [
    testimonials[(currentIndex - 1 + testimonials.length) % testimonials.length],
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
  ];

  return (
    <div className="relative w-full">
      <div className="flex items-center justify-center gap-4">
        {/* Previous Button */}
        <button
          onClick={goToPrevious}
          className="absolute left-0 z-10 p-2 text-emerald-600 hover:bg-emerald-50 rounded-full transition-colors"
          aria-label="Vorheriger Testimonial"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        {/* Testimonials Grid */}
        <div className="w-full px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visibleTestimonials.map((testimonial, idx) => {
              const isCenter = idx === 1;
              return (
                <div
                  key={`${testimonial.name}-${idx}`}
                  className={`transition-all duration-500 ${
                    isCenter
                      ? "scale-100 opacity-100 md:scale-105"
                      : "scale-95 opacity-60 hidden md:block"
                  }`}
                >
                  <div className={`rounded-2xl p-6 border-2 transition-all duration-300 ${
                    isCenter
                      ? "bg-emerald-50 border-emerald-200 shadow-lg"
                      : "bg-white border-slate-150 hover:border-emerald-200"
                  }`}>
                    {/* Stars */}
                    <div className="flex gap-1 mb-3">
                      {[...Array(testimonial.stars)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>

                    {/* Comment */}
                    <p className="text-slate-700 font-medium mb-4 text-sm leading-relaxed">
                      "{testimonial.comment}"
                    </p>

                    {/* Name and Role */}
                    <div className="border-t border-slate-200 pt-4">
                      <p className="font-bold text-slate-900">{testimonial.name}</p>
                      <p className="text-xs text-slate-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={goToNext}
          className="absolute right-0 z-10 p-2 text-emerald-600 hover:bg-emerald-50 rounded-full transition-colors"
          aria-label="Nächster Testimonial"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setAutoPlay(false);
              setCurrentIndex(idx);
              setTimeout(() => setAutoPlay(true), 8000);
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex
                ? "bg-emerald-600 w-8"
                : "bg-slate-300 w-2 hover:bg-slate-400"
            }`}
            aria-label={`Gehe zu Testimonial ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
