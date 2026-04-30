// components/sections/CTASection.jsx
"use client";

import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wide">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Ready to Boost Your Farm's Productivity?
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our agricultural experts are ready to help you select the right
              products for your specific crops and growing conditions. Get a
              customized quote for bulk export orders.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 rounded-full p-2">
                  <Mail className="h-5 w-5 text-green-600" />
                </div>
                <span className="text-gray-700">lihatkebunku@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-green-100 rounded-full p-2">
                  <Phone className="h-5 w-5 text-green-600" />
                </div>
                <span className="text-gray-700">+62 696969</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-green-100 rounded-full p-2">
                  <MapPin className="h-5 w-5 text-green-600" />
                </div>
                <span className="text-gray-700">Indonesia</span>
              </div>
            </div>

            <div className="flex gap-3">
              <img
                src="https://flagcdn.com/w40/us.png"
                alt="USA"
                className="w-8 h-6 rounded"
              />
              <img
                src="https://flagcdn.com/w40/nl.png"
                alt="Netherlands"
                className="w-8 h-6 rounded"
              />
              <img
                src="https://flagcdn.com/w40/sg.png"
                alt="Singapore"
                className="w-8 h-6 rounded"
              />
              <span className="text-sm text-gray-500 ml-2">
                Global distribution hubs
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Request a Quote
            </h3>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-400 focus:outline-none"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-400 focus:outline-none"
                />
              </div>
              <div>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-400 focus:outline-none">
                  <option>Crop Type</option>
                  <option>Grains & Cereals</option>
                  <option>Fruits & Vegetables</option>
                  <option>Plantation Crops</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <textarea
                  placeholder="Tell us about your farm size and requirements..."
                  rows="3"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-400 focus:outline-none"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full py-3"
              >
                Send Inquiry <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
