// components/sections/HeroSection.jsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, Leaf, Droplets } from "lucide-react";

export default function HeroSection() {
  const scrollToProducts = () => {
    const productsSection = document.querySelector("#products");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50"
    >
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-6"
            >
              <Shield size={16} />
              <span className="text-sm font-medium">
                Trusted by Farmers Worldwide
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Boost Your Crop Yield with{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Advanced Bio Solutions
              </span>
            </h1>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Premium plant vitamins and pest control products engineered for
              maximum crop health and sustainable agriculture. Export-ready for
              global markets.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToProducts}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-full px-8 py-4 text-base font-medium shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                Explore Products <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="flex items-center gap-8 mt-10 pt-6 border-t border-green-100">
              <div className="flex items-center gap-2">
                <Leaf className="h-5 w-5 text-green-500" />
                <span className="text-sm text-gray-600">Eco-Friendly</span>
              </div>
              <div className="flex items-center gap-2">
                <Droplets className="h-5 w-5 text-green-500" />
                <span className="text-sm text-gray-600">Organic Formula</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-500" />
                <span className="text-sm text-gray-600">ISO Certified</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=800&h=800&fit=crop"
                alt="Farmer holding healthy plants in a greenhouse"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-green-600/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
