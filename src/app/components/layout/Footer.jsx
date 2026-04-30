// components/layout/Footer.jsx
import { Leaf } from "lucide-react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="h-6 w-6 text-green-400" />
              <span className="font-bold text-xl text-white">Kebunku</span>
            </div>
            <p className="text-sm text-gray-400">
              Premium agricultural solutions for global farmers. Sustainable,
              effective, and export-ready.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-green-400 transition">
                  Plant Vitamins
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition">
                  Pest Control
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition">
                  Fungicides
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition">
                  Soil Amendments
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-green-400 transition">
                  Export Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition">
                  Technical Data Sheets
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition">
                  Safety Information
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:text-green-400 transition">
                <AiFillFacebook size={20} />
              </a>
              <a href="#" className="hover:text-green-400 transition">
                <AiFillTwitterCircle size={20} />
              </a>
              <a href="#" className="hover:text-green-400 transition">
                <AiFillLinkedin size={20} />
              </a>
              <a href="#" className="hover:text-green-400 transition">
                <AiFillInstagram size={20} />
              </a>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              © 2026 Kebunku. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
