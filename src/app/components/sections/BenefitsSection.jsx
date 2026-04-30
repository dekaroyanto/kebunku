// components/sections/BenefitsSection.jsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Shield, Leaf, Sprout, Globe, Award } from "lucide-react";

const benefits = [
  {
    icon: Leaf,
    title: "100% Organic",
    description:
      "Eco-friendly formulas safe for soil, water, and beneficial insects.",
    stat: "Organic",
    gradient: "from-lime-500 to-green-500",
  },

  {
    icon: Globe,
    title: "Global Standard",
    description:
      "Export-ready products compliant with international regulations.",
    stat: "50+ Countries",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Award,
    title: "Lab Certified",
    description: "Every batch rigorously tested for quality and effectiveness.",
    stat: "100%",
    gradient: "from-emerald-500 to-green-500",
  },
];

export default function BenefitsSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  return (
    <section
      id="benefits"
      ref={ref}
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Background subtle pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,255,0,0.02)_50%,transparent_75%)] bg-[length:20px_20px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div style={{ opacity }} className="text-center mb-16">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full mb-4"
          >
            <span className="w-2 h-2 bg-green-500 rounded-full" />
            <span className="text-green-700 font-semibold text-sm uppercase tracking-wide">
              The Advantage
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4 tracking-tight">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Kebunku
            </span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Scientifically proven solutions trusted by farmers across the globe
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 transition-all duration-300 border border-gray-100 hover:border-green-200 hover:shadow-xl">
                {/* Icon with gradient background */}
                <div
                  className={`bg-gradient-to-br ${benefit.gradient} w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <benefit.icon className="h-7 w-7 text-white" />
                </div>

                {/* Stat number */}
                <div className="mb-4">
                  <span
                    className={`text-3xl font-bold bg-gradient-to-r ${benefit.gradient} bg-clip-text text-transparent`}
                  >
                    {benefit.stat}
                  </span>
                </div>

                {/* Title and description */}
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Decorative line */}
                <div className="mt-6 h-0.5 w-12 bg-gradient-to-r from-green-400 to-transparent rounded-full group-hover:w-20 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Simple stat bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 flex flex-wrap justify-center gap-12 md:gap-20"
        >
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-gray-800">10k+</p>
            <p className="text-gray-400 text-sm mt-1">Happy Farmers</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-gray-800">98%</p>
            <p className="text-gray-400 text-sm mt-1">Satisfaction</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-gray-800">24/7</p>
            <p className="text-gray-400 text-sm mt-1">Expert Support</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
