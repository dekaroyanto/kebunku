// components/sections/FeaturesSection.jsx
"use client";

import { motion } from "framer-motion";
import {
  FlaskConical,
  Leaf,
  Sprout,
  ShieldCheck,
  Package,
  Headphones,
} from "lucide-react";

const features = [
  {
    icon: FlaskConical,
    title: "Lab-Tested Excellence",
    description:
      "Every batch undergoes rigorous quality control in certified laboratories.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Leaf,
    title: "100% Organic Formula",
    description:
      "Derived from natural sources, safe for soil, water, and ecosystems.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: Sprout,
    title: "Rapid Absorption",
    description:
      "Advanced纳米 technology for maximum nutrient uptake by plants.",
    gradient: "from-lime-500 to-green-500",
  },
  {
    icon: ShieldCheck,
    title: "Broad-Spectrum Defense",
    description: "Protection against 50+ common pests and fungal diseases.",
    gradient: "from-teal-500 to-cyan-500",
  },
  {
    icon: Package,
    title: "Export Ready",
    description:
      "Compliant with international shipping and customs regulations.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Headphones,
    title: "24/7 Agronomy Support",
    description: "Expert guidance from agricultural specialists worldwide.",
    gradient: "from-emerald-500 to-green-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full mb-4">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
            <span className="text-green-700 font-semibold text-sm uppercase tracking-wide">
              Core Features
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4 tracking-tight">
            What Makes Us{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Different
            </span>
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Innovative agricultural solutions backed by science and designed for
            results
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="group relative bg-white rounded-2xl p-8 transition-all duration-300 hover:shadow-xl border border-gray-100 hover:border-green-100"
            >
              {/* Icon with gradient */}
              <div
                className={`bg-gradient-to-br ${feature.gradient} w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="h-6 w-6 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {feature.description}
              </p>

              {/* Decorative line */}
              <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-green-400 via-transparent to-transparent rounded-full group-hover:from-green-400 group-hover:to-emerald-400 transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-6 px-6 py-3 bg-white/50 backdrop-blur-sm rounded-full border border-gray-100">
            <span className="text-sm text-gray-500">Trusted by</span>
            <div className="flex items-center gap-3">
              {["USDA", "EU Organic", "ISO 9001"].map((cert, idx) => (
                <span
                  key={idx}
                  className="text-xs font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
