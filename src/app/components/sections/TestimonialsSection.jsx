// components/sections/TestimonialsSection.jsx
"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "James Wilson",
    role: "Farm Operations Director",
    company: "Green Valley Farms, Kenya",
    content:
      "AgroBoost products have transformed our maize production. The vitamin supplements increased yield by 35% in just one season. The pest control solutions are remarkably effective.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    crop: "Maize",
    country: "Kenya",
  },
  {
    id: 2,
    name: "Dr. Maria Gonzalez",
    role: "Agricultural Consultant",
    company: "AgroConsult Spain",
    content:
      "The pest control solutions are highly effective yet environmentally responsible. I recommend them to all my clients. The export documentation process was seamless.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    crop: "Olives, Almonds",
    country: "Spain",
  },
  {
    id: 3,
    name: "Raj Patel",
    role: "Export Farm Owner",
    company: "Patel Agri Exports, India",
    content:
      "Export documentation was seamless. Products arrived perfectly packaged and results exceeded our expectations. The technical support team is very responsive.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    crop: "Spices, Tea",
    country: "India",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    role: "Organic Farm Manager",
    company: "Blueberry Organics, USA",
    content:
      "Finally found organic-certified products that actually work. RootMax booster saved our drought-stressed crops. Will definitely continue using AgroBoost.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    crop: "Vegetables, Berries",
    country: "USA",
  },
  {
    id: 5,
    name: "Hans Weber",
    role: "Head Agronomist",
    company: "Bavarian Crops, Germany",
    content:
      "Precision and quality are exceptional. Our wheat yields increased by 28%. The fungicide efficacy is outstanding even in challenging weather conditions.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
    crop: "Wheat, Barley",
    country: "Germany",
  },
  {
    id: 6,
    name: "Liu Wei",
    role: "Plantation Director",
    company: "Golden Harvest, China",
    content:
      "The vitamin formulations significantly improved our tea leaf quality. International buyers noticed the difference. Highly recommended for export crops.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    crop: "Tea, Rice",
    country: "China",
  },
];

export default function TestimonialsSection() {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Handle mounting to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Check scroll buttons position
  const checkScrollButtons = useCallback(() => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  }, []);

  // Initialize scroll buttons after mount
  useEffect(() => {
    if (mounted && scrollContainerRef.current) {
      checkScrollButtons();

      const handleResize = () => checkScrollButtons();
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, [mounted, checkScrollButtons]);

  // Mouse drag scroll handlers
  const handleMouseDown = (e) => {
    if (e.button !== 0) return;
    e.preventDefault();

    setIsDragging(true);
    const container = scrollContainerRef.current;
    const x = e.pageX - container.offsetLeft;
    setStartX(x);
    setScrollLeft(container.scrollLeft);

    container.style.cursor = "grabbing";
    container.style.userSelect = "none";
  };

  const handleMouseMove = useCallback(
    (e) => {
      if (!isDragging) return;
      e.preventDefault();

      const container = scrollContainerRef.current;
      const x = e.pageX - container.offsetLeft;
      const walk = x - startX;
      container.scrollLeft = scrollLeft - walk;

      checkScrollButtons();
    },
    [isDragging, startX, scrollLeft, checkScrollButtons],
  );

  const handleMouseUp = () => {
    setIsDragging(false);
    const container = scrollContainerRef.current;

    if (container) {
      container.style.cursor = "grab";
      container.style.userSelect = "auto";
    }
  };

  // Touch events for mobile
  const handleTouchStart = (e) => {
    setIsDragging(true);
    const container = scrollContainerRef.current;
    const x = e.touches[0].pageX - container.offsetLeft;
    setStartX(x);
    setScrollLeft(container.scrollLeft);
  };

  const handleTouchMove = useCallback(
    (e) => {
      if (!isDragging) return;

      const container = scrollContainerRef.current;
      const x = e.touches[0].pageX - container.offsetLeft;
      const walk = x - startX;
      container.scrollLeft = scrollLeft - walk;

      checkScrollButtons();
    },
    [isDragging, startX, scrollLeft, checkScrollButtons],
  );

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Scroll function for arrow buttons
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
      setTimeout(checkScrollButtons, 300);
    }
  };

  // Handle scroll event
  const handleScroll = () => {
    checkScrollButtons();
  };

  // Don't render until mounted
  if (!mounted) {
    return (
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full mb-4">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
              <span className="text-green-700 font-semibold text-sm uppercase tracking-wide">
                Testimonials
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4 tracking-tight">
              Trusted by{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Farmers Worldwide
              </span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Real results from agricultural professionals across the globe
            </p>
          </div>
          <div className="flex gap-6 pb-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[320px] md:w-[380px] bg-white rounded-2xl border border-gray-100 animate-pulse"
              >
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full" />
                    <div className="flex-1">
                      <div className="h-4 bg-gray-200 rounded mb-2 w-32" />
                      <div className="h-3 bg-gray-200 rounded w-24" />
                    </div>
                  </div>
                  <div className="h-20 bg-gray-200 rounded mb-4" />
                  <div className="h-4 bg-gray-200 rounded w-24" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="testimonials" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full mb-4">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
            <span className="text-green-700 font-semibold text-sm uppercase tracking-wide">
              Testimonials
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4 tracking-tight">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Farmers Worldwide
            </span>
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Real results from agricultural professionals across the globe
          </p>
        </motion.div>

        {/* Scroll Buttons - Desktop */}
        <div className="hidden md:flex justify-end gap-2 mb-6">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`p-2 rounded-full border transition-all ${
              canScrollLeft
                ? "border-gray-300 hover:border-green-500 hover:bg-green-50 cursor-pointer"
                : "border-gray-200 text-gray-300 cursor-not-allowed"
            }`}
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`p-2 rounded-full border transition-all ${
              canScrollRight
                ? "border-gray-300 hover:border-green-500 hover:bg-green-50 cursor-pointer"
                : "border-gray-200 text-gray-300 cursor-not-allowed"
            }`}
            aria-label="Scroll right"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Horizontal Scroll Container */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="flex overflow-x-auto gap-6 pb-8 hide-scrollbar cursor-grab active:cursor-grabbing"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="flex-shrink-0 w-[320px] md:w-[380px] bg-white rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 select-none hover:border-green-100"
            >
              <div className="p-6">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-green-200" />
                </div>

                {/* Content */}
                <p className="text-gray-600 text-sm leading-relaxed mb-5 line-clamp-4">
                  "{testimonial.content}"
                </p>

                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* User Info */}
                <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                    loading="lazy"
                    draggable={false}
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-800 text-sm truncate">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-gray-500 truncate">
                      {testimonial.role}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                      {testimonial.country}
                    </span>
                  </div>
                </div>

                {/* Crop Info */}
                <div className="mt-3 pt-2">
                  <p className="text-xs text-gray-400">
                    Crop:{" "}
                    <span className="text-gray-600">{testimonial.crop}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator for Mobile */}
        <div className="flex justify-center items-center gap-3 mt-6 md:hidden">
          <div className="flex gap-1">
            <span className="w-12 h-1 bg-gray-200 rounded-full overflow-hidden">
              <span className="block w-3 h-1 bg-green-600 rounded-full animate-scroll" />
            </span>
          </div>
          <p className="text-xs text-gray-400">Scroll or drag to see more →</p>
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        @keyframes scroll {
          0%,
          100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(100%);
          }
        }
        .animate-scroll {
          animation: scroll 1.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
