// app/layout.jsx
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kebunku - Premium Agricultural Solutions for Global Farmers",
  description:
    "Premium plant vitamins and pest control products for sustainable agriculture. Export-ready for global markets.",
  keywords:
    "plant vitamins, pest control, agricultural products, farming solutions, crop protection",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
