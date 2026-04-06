import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, CheckCircle, Shield, Award } from "lucide-react";
import copper_mamta_steel_traders_img from "@/assets/COPPER MAMTA STEEL TRADERS.jpg";
import { Link } from "wouter";

export default function AluminiumBronzeRoundBars() {
  const products = [
    {
      id: 1,
      title: "C63000 Nickel Aluminium Bronze",
      image: copper_mamta_steel_traders_img,
      link: "/product/round-bars/aluminium-bronze/c63000-nickel-aluminium-bronze",
      description: "High strength and excellent resistance to seawater corrosion. Ideal for marine and heavy-duty applications."
    },
    {
      id: 2,
      title: "C95400 Aluminium Bronze",
      image: copper_mamta_steel_traders_img,
      link: "/product/round-bars/aluminium-bronze/c95400-aluminium-bronze",
      description: "The most popular all-purpose aluminium bronze alloy. High strength with good ductility and weldability."
    }
  ];

  return (
    <>
      <ProductSEO
        title="Aluminium Bronze Round Bars - C63000, C95400 | Marine Grade | Mamta Steel Traders"
        description="Premium aluminium bronze round bars for marine and industrial use. High strength, corrosion resistant alloys including C63000 and C95400. Best pricing in Mumbai."
        keywords="aluminium bronze round bars, C63000 bronze, C95400 bronze, nickel aluminium bronze, marine bronze bars"
        canonicalUrl="/product/round-bars/aluminium-bronze"
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <nav className="bg-white dark:bg-gray-800 py-4 border-b border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
              <Link href="/" className="hover:text-navy-primary">Home</Link>
              <ArrowRight className="w-4 h-4" />
              <Link href="/product/round-bars/round-bars" className="hover:text-navy-primary">Round Bars</Link>
              <ArrowRight className="w-4 h-4" />
              <span className="text-navy-primary dark:text-gold-primary font-medium">Aluminium Bronze</span>
            </div>
          </div>
        </nav>

        <section className="bg-gradient-to-r from-navy-primary to-navy-secondary text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Aluminium Bronze Round Bars</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">High-performance corrosion-resistant alloys for extreme marine and industrial environments.</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {products.map((product) => (
                <div key={product.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all">
                  <div className="relative h-48 overflow-hidden">
                    <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    <div className="absolute top-4 left-4 bg-gold-primary text-navy-primary px-3 py-1 rounded-full text-xs font-bold">2 Grades Available</div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-navy-primary dark:text-gray-100 mb-3">{product.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">{product.description}</p>
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
