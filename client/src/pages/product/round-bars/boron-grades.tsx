import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, CheckCircle, Shield, Award } from "lucide-react";
import steel_bars_rods_img from "@/assets/steel-bars-rods.jpg";
import { Link } from "wouter";

export default function BoronGradesRoundBars() {
  const products = [
    {
      id: 1,
      title: "10B21 Boron Steel",
      image: steel_bars_rods_img,
      link: "/product/round-bars/boron-grades/10b21-boron-steel",
      description: "Low carbon boron steel with excellent formability and hardenability. Ideal for cold heading applications."
    },
    {
      id: 2,
      title: "15B25 Boron Steel",
      image: steel_bars_rods_img,
      link: "/product/round-bars/boron-grades/15b25-boron-steel",
      description: "Medium carbon boron steel used for high strength fasteners and structural components."
    },
    {
      id: 3,
      title: "10B33 Boron Steel",
      image: steel_bars_rods_img,
      link: "/product/round-bars/boron-grades/10b33-boron-steel",
      description: "Optimized boron grade for superior through-hardenability and wear resistance after heat treatment."
    },
    {
      id: 4,
      title: "15B41 Boron Steel",
      image: steel_bars_rods_img,
      link: "/product/round-bars/boron-grades/15b41-boron-steel",
      description: "High hardenability boron steel for heavy-duty agricultural and industrial equipment components."
    }
  ];

  return (
    <>
      <ProductSEO
        title="Boron Grade Round Bars - 10B21, 15B25, 10B33, 15B41 | High Strength | Mamta Steel Traders"
        description="Premium boron grade round bars for industrial applications. High hardenability and formability. 10B21, 15B25, 10B33, 15B41 available with mill certificates."
        keywords="boron steel round bars, 10B21 steel, 15B25 boron, 10B33 steel, 15B41 boron bars, high strength boron steel"
        canonicalUrl="/product/round-bars/boron-grades"
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <nav className="bg-white dark:bg-gray-800 py-4 border-b border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
              <Link href="/" className="hover:text-navy-primary">Home</Link>
              <ArrowRight className="w-4 h-4" />
              <Link href="/product/round-bars/round-bars" className="hover:text-navy-primary">Round Bars</Link>
              <ArrowRight className="w-4 h-4" />
              <span className="text-navy-primary dark:text-gold-primary font-medium">Boron Grades</span>
            </div>
          </div>
        </nav>

        <section className="bg-gradient-to-r from-navy-primary to-navy-secondary text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Boron Grade Round Bars</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">High-hardenability alloy steels for advanced fastener and heavy equipment manufacturing.</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {products.map((product) => (
                <div key={product.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden group hover:shadow-2xl transition-all">
                  <div className="relative h-48 overflow-hidden">
                    <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    <div className="absolute top-4 left-4 bg-navy-primary text-white px-3 py-1 rounded-full text-xs font-bold">Industrial Grade</div>
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


