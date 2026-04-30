// components/sections/HeroSection.jsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, Leaf, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50"
    >
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5" />

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
              <span className="text-green-600">Advanced Bio Solutions</span>
            </h1>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Premium plant vitamins and pest control products engineered for
              maximum crop health and sustainable agriculture. Export-ready for
              global markets.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8"
              >
                Explore Products <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50 rounded-full px-8"
              >
                Watch Demo
              </Button>
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
