// app/page.jsx

import Footer from "./components/layout/Footer";
import BenefitsSection from "./components/sections/BenefitsSection";
import CTASection from "./components/sections/CTASection";
import FeaturesSection from "./components/sections/FeaturesSection";
import HeroSection from "./components/sections/HeroSection";
import ProductsSection from "./components/sections/ProductsSection";
import TestimonialsSection from "./components/sections/TestimonialsSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <FeaturesSection />
      <ProductsSection />
      <BenefitsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
