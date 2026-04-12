import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft, ArrowRight, CheckCircle, Shield, Zap, Info, TrendingUp, Award, Download, Box, Key, Settings, Target, Anchor } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function SpringWashersDetail() {
  const technicalSpecs = [
    { property: "Standards", value: "DIN 127B, ISO 7980, ASME B18.21.1, JIS B1251" },
    { property: "Size Range", value: "M2 to M52 | #2 to 2\"" },
    { property: "Material Grades", value: "SS 304, 316, 316L, SS 321, 17-7 PH" },
    { property: "Hardness Range", value: "35 HRC to 45 HRC (Spring Tempered)" },
    { property: "Vibration Resistance", value: "High (Split Ring Tension)" },
    { property: "Design Style", value: "Helical Spring / Split Type" }
  ];

  const chemicalComp = [
    { element: "Silicon (Si)", grade304: "1.00% max", gradeSpring: "High Elasticity Optimization" },
    { element: "Chromium (Cr)", grade304: "18.0 - 20.0%", gradeSpring: "Excellent Corrosion Resistance" },
    { element: "Nickel (Ni)", grade304: "8.0 - 10.5%", gradeSpring: "Superior Finish & Durability" },
    { element: "Tensile Strength", grade304: "515 MPa min", gradeSpring: "High Tension Capacity" },
    { element: "Elongation", grade304: "40% min", gradeSpring: "Optimized for Flex" }
  ];

  return (
    <>
      <ProductSEO
        title="Stainless Steel Spring Washers - SS 304, 316 Split Lock Washers Manufacturer"
        description="High quality SS spring washers manufacturer. DIN 127 helical split lock washers in SS 304, 316 grade. Optimal vibration resistance for industrial machinery and automotive sectors."
        keywords="SS spring washers, SS 304 lock washers, SS 316 spring washers, DIN 127 washers, split lock washers, helical spring washers, vibration resistant washers, industrial lock washers manufacturer, Mumbai fastener exporter"
        category="Fasteners"
        productName="SS Spring Washers"
        specifications={[
          "Standards: DIN 127, ISO 7980",
          "Grades: 304, 316, 321",
          "Sizes: M2 - M52",
          "Applications: Automotive, Vibrating Machinery, Railway"
        ]}
        canonicalUrl="/product/fasteners/ss-washers/spring-washers"
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 bg-navy-primary overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold-primary rounded-full filter blur-3xl translate-x-1/2 -translate-y-1/2"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl">
              <nav className="flex items-center space-x-2 text-sm text-blue-100/60 mb-8">
                <Link href="/" className="hover:text-gold-primary transition-colors">Home</Link>
                <ArrowRight className="w-3 h-3" />
                <Link href="/product/fasteners" className="hover:text-gold-primary transition-colors">Fasteners</Link>
                <ArrowRight className="w-3 h-3" />
                <Link href="/product/fasteners/ss-washers" className="hover:text-gold-primary transition-colors">SS Washers</Link>
              </nav>

              <motion.h1 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-3xl md:text-4xl font-bold text-white mb-6"
              >
                Stainless Steel Spring Washers <br />
                <span className="text-gold-primary text-xl md:text-2xl font-medium tracking-wide">Vibration-Proof DIN 127B Locking Technology</span>
              </motion.h1>

              <p className="text-lg text-blue-100/80 mb-8 leading-relaxed max-w-2xl">
                Engineered for critical high-vibration environments, our spring washers provide constant axial tension 
                to prevent loosening of threaded fasteners. Essential for automotive, aerospace, and heavy industrial machinery.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-8 py-3 rounded-md font-bold transition-all flex items-center shadow-lg shadow-gold-primary/20">
                  Engineering Data <Download className="ml-2 w-4 h-4" />
                </button>
                <Link href="/contact" className="border border-white/30 hover:bg-white/10 text-white px-8 py-3 rounded-md font-bold transition-all">
                  Request Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Specification Table */}
              <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100">
                <h2 className="text-2xl font-bold text-navy-primary mb-8 flex items-center">
                  <Settings className="mr-3 text-gold-primary" /> Core Specifications
                </h2>
                <div className="space-y-4">
                  {technicalSpecs.map((spec, i) => (
                    <div key={i} className="flex justify-between py-3 border-b border-gray-100 last:border-0">
                      <span className="text-gray-500 font-medium">{spec.property}</span>
                      <span className="text-navy-primary font-bold text-right">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Functional Properties */}
              <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100">
                <h2 className="text-2xl font-bold text-navy-primary mb-8 flex items-center">
                  <TrendingUp className="mr-3 text-gold-primary" /> Performance Dynamics
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="p-4 rounded-tl-lg text-gray-700">Property</th>
                        <th className="p-4 text-gray-700">Standard Value</th>
                        <th className="p-4 rounded-tr-lg text-gray-700">Mecpower Advantage</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-sm">
                      {chemicalComp.map((row, i) => (
                        <tr key={i} className="hover:bg-blue-50/30 transition-colors font-medium">
                          <td className="p-4 text-navy-primary">{row.element}</td>
                          <td className="p-4 text-gray-600">{row.grade304}</td>
                          <td className="p-4 text-gray-600">{row.gradeSpring}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                { title: "High Elasticity", desc: "Special heat treatment ensures long-lasting spring memory." },
                { title: "Locking Integrity", desc: "Sharpened split edges bite into nuts for maximum grip." },
                { title: "Material Purity", desc: "No recycled scrap; 100% prime virgin stainless steel billets." }
              ].map((benefit, i) => (
                <div key={i} className="p-10 bg-navy-primary text-white rounded-2xl shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-2 h-full bg-gold-primary group-hover:w-full transition-all duration-500 opacity-10"></div>
                  <h3 className="text-2xl font-bold mb-4 relative z-10">{benefit.title}</h3>
                  <p className="text-blue-100/70 relative z-10">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Supply Network */}
        <section className="py-20 bg-gray-50 border-y border-gray-200">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-navy-primary mb-12">Export Compliance & Logistics</h2>
            <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
              <div className="flex items-center space-x-2"><CheckCircle className="text-gold-primary" /><span>ASTM F436</span></div>
              <div className="flex items-center space-x-2"><CheckCircle className="text-gold-primary" /><span>ISO 9001:2015</span></div>
              <div className="flex items-center space-x-2"><CheckCircle className="text-gold-primary" /><span>REACH Compliant</span></div>
              <div className="flex items-center space-x-2"><CheckCircle className="text-gold-primary" /><span>ASME B18.21.1</span></div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
