import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft, ArrowRight, CheckCircle, Shield, Zap, Info, TrendingUp, Award, Download, Box, Key, Settings, Target, Anchor } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function PlainWashersDetail() {
  const technicalSpecs = [
    { property: "Standards", value: "DIN 125, ISO 7089, ASME B18.22.1, BS 4320" },
    { property: "Size Range", value: "M1.6 to M100 | #0 to 4\"" },
    { property: "Material Grades", value: "SS 304, 304L, 316, 316L, 316Ti, 321, 904L" },
    { property: "Thickness", value: "0.3mm to 12.0mm" },
    { property: "Hardness Range", value: "140 HV to 300 HV" },
    { property: "Finish", value: "Plain, Passivated, Electropolished" }
  ];

  const chemicalComp = [
    { element: "Carbon (C)", grade304: "0.08% max", grade316L: "0.03% max" },
    { element: "Chromium (Cr)", grade304: "18.0 - 20.0%", grade316L: "16.0 - 18.0%" },
    { element: "Nickel (Ni)", grade304: "8.0 - 10.5%", grade316L: "10.0 - 14.0%" },
    { element: "Molybdenum (Mo)", grade304: "-", grade316L: "2.0 - 3.0%" },
    { element: "Manganese (Mn)", grade304: "2.0% max", grade316L: "2.0% max" }
  ];

  return (
    <>
      <ProductSEO
        title="Stainless Steel Plain Washers - SS 304, 316L DIN 125 Flat Washers Manufacturer"
        description="Premium SS plain washers manufacturer. Standard DIN 125, ISO 7089 flat washers in SS 304, 316L, 904L. Corrosion resistant washers for industrial and marine applications."
        keywords="SS plain washers, SS 304 flat washers, SS 316L plain washers, DIN 125 washers, ISO 7089 washers, ASME B18.22.1 washers, stainless steel flat washers price, marine grade washers, industrial fasteners Mumbai"
        category="Fasteners"
        productName="SS Plain Washers"
        specifications={[
          "Standards: DIN 125, ISO 7089",
          "Grades: 304, 316L, 321, 904L",
          "Sizes: M1.6 - M100",
          "Applications: Structural, Marine, General Assembly"
        ]}
        canonicalUrl="/product/fasteners/ss-washers/plain-washers"
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 bg-navy-primary overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-gold-primary rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-4xl font-bold text-white mb-6"
              >
                Stainless Steel Plain Washers <br />
                <span className="text-gold-primary text-xl md:text-2xl font-medium tracking-wide">DIN 125 / ISO 7089 / ASME B18.22.1</span>
              </motion.h1>

              <p className="text-lg text-blue-100/80 mb-8 leading-relaxed max-w-2xl">
                High-precision flat washers designed for optimal load distribution and surface protection. 
                Manufactured from premium austenitic stainless steel for maximum corrosion resistance in industrial and marine environments.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-8 py-3 rounded-md font-bold transition-all flex items-center shadow-lg shadow-gold-primary/20">
                  Technical Datasheet <Download className="ml-2 w-4 h-4" />
                </button>
                <Link href="/contact" className="border border-white/30 hover:bg-white/10 text-white px-8 py-3 rounded-md font-bold transition-all">
                  Bulk Inquiry
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
                  <Settings className="mr-3 text-gold-primary" /> Technical Specifications
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

              {/* Chemical Composition */}
              <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100">
                <h2 className="text-2xl font-bold text-navy-primary mb-8 flex items-center">
                  <Zap className="mr-3 text-gold-primary" /> Material Grade Analysis
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="p-4 rounded-tl-lg text-gray-700">Element</th>
                        <th className="p-4 text-gray-700">Grade 304</th>
                        <th className="p-4 rounded-tr-lg text-gray-700">Grade 316L</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-sm">
                      {chemicalComp.map((row, i) => (
                        <tr key={i} className="hover:bg-blue-50/30 transition-colors font-medium">
                          <td className="p-4 text-navy-primary">{row.element}</td>
                          <td className="p-4 text-gray-600">{row.grade304}</td>
                          <td className="p-4 text-gray-600">{row.grade316L}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-navy-primary mb-4">Industrial Grade Quality</h2>
              <p className="text-gray-600">Our plain washers are engineered to meet the stringent requirements of global infrastructure projects.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Shield, title: "Anti-Corrosive", desc: "Passivated surface finish for enhanced oxidation resistance." },
                { icon: Target, title: "Precision Fit", desc: "Tight tolerances on ID/OD ensures concentric load distribution." },
                { icon: Award, title: "Certified Supply", desc: "Mill test reports (EN 10204 3.1) provided with every batch." }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-white border border-gray-200 rounded-xl hover:border-gold-primary transition-all group">
                  <item.icon className="w-12 h-12 text-gold-primary mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-navy-primary mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Supply Intelligence */}
        <section className="py-20 bg-navy-primary text-white relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 italic text-gold-primary">Global Export Network: Mumbai to the World</h2>
              <p className="text-lg text-blue-100/80 mb-12">
                We are strategic suppliers and exporters to industrial hubs in the **GCC (Dubai, Riyadh, Doha)**, 
                **European Union (Germany, Italy, Netherlands)**, and the **United States**. 
                Specialized logistics for bulk industrial fasteners across all major global sectors.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 opacity-60 grayscale hover:grayscale-0 transition-all">
                <div className="flex flex-col items-center"><Box className="w-8 h-8 mb-2" /><span>Stockist</span></div>
                <div className="flex flex-col items-center"><Anchor className="w-8 h-8 mb-2" /><span>Marine</span></div>
                <div className="flex flex-col items-center"><Target className="w-8 h-8 mb-2" /><span>Precision</span></div>
                <div className="flex flex-col items-center"><Key className="w-8 h-8 mb-2" /><span>Secure</span></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
