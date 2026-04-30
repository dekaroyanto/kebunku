// components/sections/CTASection.jsx
"use client";

import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full mb-4">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
              <span className="text-green-700 font-semibold text-sm uppercase tracking-wide">
                Get In Touch
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4 tracking-tight">
              Ready to Boost Your{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Farm's Productivity?
              </span>
            </h2>

            <p className="text-gray-500 mb-8 leading-relaxed text-lg">
              Our agricultural experts are ready to help you select the right
              products for your specific crops and growing conditions. Get a
              customized quote for bulk export orders.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 group">
                <div className="bg-green-100 rounded-full p-2 group-hover:bg-green-200 transition-colors">
                  <Mail className="h-5 w-5 text-green-600" />
                </div>
                <span className="text-gray-700">lihatkebunku@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="bg-green-100 rounded-full p-2 group-hover:bg-green-200 transition-colors">
                  <Phone className="h-5 w-5 text-green-600" />
                </div>
                <span className="text-gray-700">+62 696969</span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="bg-green-100 rounded-full p-2 group-hover:bg-green-200 transition-colors">
                  <MapPin className="h-5 w-5 text-green-600" />
                </div>
                <span className="text-gray-700">Indonesia</span>
              </div>
            </div>

            <div className="flex gap-3 items-center">
              <img
                src="https://flagcdn.com/w40/us.png"
                alt="USA"
                className="w-8 h-6 rounded shadow-sm"
              />
              <img
                src="https://flagcdn.com/w40/nl.png"
                alt="Netherlands"
                className="w-8 h-6 rounded shadow-sm"
              />
              <img
                src="https://flagcdn.com/w40/sg.png"
                alt="Singapore"
                className="w-8 h-6 rounded shadow-sm"
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
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Request a Quote
            </h3>
            <p className="text-gray-500 text-sm mb-6">
              Fill out the form and our team will respond within 24 hours
            </p>

            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-100 transition-all"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-100 transition-all"
                  required
                />
              </div>
              <div>
                <textarea
                  placeholder="Tell us about your farm size and requirements..."
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-100 transition-all resize-none"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-full py-3 shadow-md hover:shadow-lg transition-all duration-300"
              >
                Send Inquiry <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>

            <p className="text-xs text-gray-400 text-center mt-4">
              We respect your privacy. No spam, guaranteed.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
