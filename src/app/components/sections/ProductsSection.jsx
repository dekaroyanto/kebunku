// components/sections/ProductsSection.jsx
"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Check, ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  {
    id: 1,
    name: "BioGro Vitalizer",
    category: "Plant Vitamin",
    description:
      "Complete micronutrient complex for all crop types. Increases chlorophyll production.",
    volume: "1L Concentrate",
    image:
      "https://plus.unsplash.com/premium_photo-1664527305901-a3c8bec62850?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "PestDefender Pro",
    category: "Pest Control",
    description:
      "Broad-spectrum biological insecticide. Safe for beneficial insects.",
    volume: "500ml Concentrate",
    image:
      "https://plus.unsplash.com/premium_photo-1664527306363-7a5798f0621c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "RootMax Booster",
    category: "Soil Enhancer",
    description:
      "Mycorrhizal inoculant for enhanced root development and water absorption.",
    volume: "250g Powder",
    image:
      "https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "FungoShield EC",
    category: "Fungicide",
    description:
      "Systemic fungicide for powdery mildew, rust, and blight control.",
    volume: "1L Concentrate",
    image:
      "https://images.unsplash.com/photo-1590779032260-5623d6774f7a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "YieldMax Plus",
    category: "Plant Vitamin",
    description: "Advanced flowering and fruiting booster for maximum harvest.",
    volume: "1L Concentrate",
    image:
      "https://plus.unsplash.com/premium_photo-1680344513247-2dfbe6802e92?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    name: "BioInsect Control",
    category: "Pest Control",
    description: "Natural predator attractant for organic pest management.",
    volume: "500ml Spray",
    image:
      "https://plus.unsplash.com/premium_photo-1661833100239-de8f260b6f8c?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function ProductsSection() {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [addedId, setAddedId] = useState(null);
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

  // Add to cart handler
  const handleAddToCart = (id) => {
    setAddedId(id);
    setTimeout(() => setAddedId(null), 2000);
  };

  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <section
        id="products"
        className="py-24 bg-linear-to-b from-gray-50 to-white overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full mb-4">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
              <span className="text-green-700 font-semibold text-sm uppercase tracking-wide">
                Our Products
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4 tracking-tight">
              Premium Crop Care{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Solutions
              </span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Formulated for maximum efficacy and environmental safety
            </p>
          </div>
          <div className="flex gap-6 pb-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[280px] md:w-[320px] bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 animate-pulse"
              >
                <div className="h-48 bg-gray-200" />
                <div className="p-5">
                  <div className="h-6 bg-gray-200 rounded mb-2" />
                  <div className="h-4 bg-gray-200 rounded mb-3 w-2/3" />
                  <div className="h-4 bg-gray-200 rounded mb-4" />
                  <div className="h-10 bg-gray-200 rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="products"
      className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
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
              Our Products
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4 tracking-tight">
            Premium Crop Care{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Formulated for maximum efficacy and environmental safety
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

        {/* Horizontal Scroll Container - Pure drag scroll without snap */}
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
          {products.map((product, index) => (
            <div
              key={product.id}
              className="flex-shrink-0 w-[280px] md:w-[320px] bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 select-none"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-green-50 to-emerald-50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 pointer-events-none"
                  loading="lazy"
                  draggable={false}
                />

                {/* Category Tag */}
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm text-gray-700 text-xs px-2 py-1 rounded-full">
                  {product.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg text-gray-800 line-clamp-1">
                    {product.name}
                  </h3>
                </div>

                <p className="text-gray-500 text-sm mb-3 line-clamp-1">
                  {product.volume}
                </p>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>
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
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
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
