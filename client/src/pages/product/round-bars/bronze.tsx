import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, CheckCircle, Shield, Award } from "lucide-react";
import copper_mamta_steel_traders_img from "@/assets/COPPER MAMTA STEEL TRADERS.jpg";
import { Link } from "wouter";

export default function BronzeRoundBars() {
  const products = [
    {
      id: 1,
      title: "PB1 Phosphor Bronze",
      image: copper_mamta_steel_traders_img,
      link: "/product/round-bars/bronze/pb1-phosphor-bronze",
      description: "High performance phosphor bronze with excellent fatigue resistance and corrosion resistance."
    },
    {
      id: 2,
      title: "SAE 660 Bearing Bronze",
      image: copper_mamta_steel_traders_img,
      link: "/product/round-bars/bronze/sae-660-bearing-bronze",
      description: "The industry standard for plain bearings. Excellent anti-friction properties and high strength."
    },
    {
      id: 3,
      title: "LG2 Gunmetal Bronze",
      image: copper_mamta_steel_traders_img,
      link: "/product/round-bars/bronze/lg2-gunmetal-bronze",
      description: "Excellent casting and machining properties. Widely used for valves, pumps and marine fittings."
    },
    {
      id: 4,
      title: "AB2 Aluminium Bronze",
      image: copper_mamta_steel_traders_img,
      link: "/product/round-bars/bronze/ab2-aluminium-bronze",
      description: "Exceptional resistance to seawater corrosion. High strength and durability for marine propellers."
    }
  ];

  return (
    <>
      <ProductSEO
        title="Bronze Round Bars - PB1, SAE 660, LG2, AB2 | Industrial & Marine | Mamta Steel Traders"
        description="Premium bronze round bars including Phosphor Bronze (PB1), Bearing Bronze (SAE 660), and Gunmetal (LG2). ISO certified bronze supplier in Mumbai."
        keywords="bronze round bars, PB1 bronze, SAE 660 bronze, LG2 gunmetal, bronze supplier Mumbai"
        canonicalUrl="/product/round-bars/bronze"
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <nav className="bg-white dark:bg-gray-800 py-4 border-b border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
              <Link href="/" className="hover:text-navy-primary">Home</Link>
              <ArrowRight className="w-4 h-4" />
              <Link href="/product/round-bars/round-bars" className="hover:text-navy-primary">Round Bars</Link>
              <ArrowRight className="w-4 h-4" />
              <span className="text-navy-primary dark:text-gold-primary font-medium">Bronze</span>
            </div>
          </div>
        </nav>

        <section className="bg-gradient-to-r from-navy-primary to-navy-secondary text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Bronze Round Bars</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">High-performance bronze alloys for bearings, hardware, and seawater-facing applications.</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {products.map((product) => (
                <div key={product.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all">
                  <div className="relative h-48 overflow-hidden">
                    <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    <div className="absolute top-4 left-4 bg-gold-primary text-navy-primary px-3 py-1 rounded-full text-xs font-bold">Premium Alloy</div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-navy-primary dark:text-gray-100 mb-3">{product.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 h-12 overflow-hidden">{product.description}</p>
                    <Link href={product.link} className="bg-navy-primary hover:bg-navy-secondary text-white px-6 py-2 rounded-lg font-bold flex items-center justify-center transition-colors">
                      View Grade Details <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}