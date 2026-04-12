import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft, ArrowRight, CheckCircle, Shield, Zap, Info, TrendingUp, Award, Download, Box, Key, Settings, Target, Anchor } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function FenderWashersDetail() {
  const technicalSpecs = [
    { property: "Standards", value: "ASME B18.22.1, DIN 9021, ISO 7093" },
    { property: "OD to ID Ratio", value: "3:1 Standard (Oversized)" },
    { property: "Size Range", value: "M3 to M36 | #6 to 1-1/2\"" },
    { property: "Material Grades", value: "SS 304, 316, 316L, SS 321" },
    { property: "Load Distribution", value: "Maximum Surface Area Coverage" },
    { property: "Finish", value: "Plain, Passivated, Polished" }
  ];

  const chemicalComp = [
    { element: "Chromium (Cr)", grade304: "18.0 - 20.0%", grade316: "16.0 - 18.0%" },
    { element: "Nickel (Ni)", grade304: "8.0 - 10.5%", grade316: "10.0 - 14.0%" },
    { element: "Molybdenum (Mo)", grade304: "-", grade316: "2.0 - 3.0%" },
    { element: "Yield Strength", grade304: "205 MPa min", grade316: "205 MPa min" },
    { element: "Hardness (Brinell)", grade304: "201 max", grade316: "217 max" }
  ];

  return (
    <>
      <ProductSEO
        title="Stainless Steel Fender Washers - SS 304, 316 Large Diameter Flat Washers Manufacturer"
        description="Premium SS fender washers manufacturer. Large outer diameter washers for heavy load distribution in SS 304, 316 grade. Ideal for roofing, auto body, and marine sheet metal applications."
        keywords="SS fender washers, large diameter washers, oversized washers, SS 304 fender washers, SS 316 large washers, DIN 9021 washers, ISO 7093 washers, sheet metal washers, industrial fasteners Mumbai"
        category="Fasteners"
        productName="SS Fender Washers"
        specifications={[
          "Standards: DIN 9021, ISO 7093",
          "Grades: 304, 316, 316L",
          "Sizes: M3 - M36",
          "Applications: Roofing, Signage, Auto Body, Thin Materials"
        ]}
        canonicalUrl="/product/fasteners/ss-washers/fender-washers"
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 bg-navy-primary overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-primary rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2"></div>
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
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-3xl md:text-4xl font-bold text-white mb-6"
              >
                Stainless Steel Fender Washers <br />
                <span className="text-gold-primary text-xl md:text-2xl font-medium tracking-wide">Heavy-Duty Large OD Load Distribution Solutions</span>
              </motion.h1>

              <p className="text-lg text-blue-100/80 mb-8 leading-relaxed max-w-2xl">
                Designed with an oversized outer diameter to provide a massive bearing surface, our fender washers 
                are crucial for assembling thin sheet metals and materials that require maximum load distribution. 
                Perfect for automotive, roofing, and marine structural applications.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-8 py-3 rounded-md font-bold transition-all flex items-center shadow-lg shadow-gold-primary/20">
                  Technical Data <Download className="ml-2 w-4 h-4" />
                </button>
                <Link href="/contact" className="border border-white/30 hover:bg-white/10 text-white px-8 py-3 rounded-md font-bold transition-all">
                  Request Bulk Quote
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
                  <Settings className="mr-3 text-gold-primary" /> Dimension Benchmarks
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

              {/* Composition Matrix */}
              <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100">
                <h2 className="text-2xl font-bold text-navy-primary mb-8 flex items-center">
                  <Zap className="mr-3 text-gold-primary" /> Grade Integrity
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="p-4 rounded-tl-lg text-gray-700">Property</th>
                        <th className="p-4 text-gray-700">Stainless 304</th>
                        <th className="p-4 rounded-tr-lg text-gray-700">Stainless 316</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-sm">
                      {chemicalComp.map((row, i) => (
                        <tr key={i} className="hover:bg-blue-50/30 transition-colors font-medium">
                          <td className="p-4 text-navy-primary">{row.element}</td>
                          <td className="p-4 text-gray-600">{row.grade304}</td>
                          <td className="p-4 text-gray-600">{row.grade316}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Highlights */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                { title: "Wide Bearing Surface", desc: "Spreads pressure across a larger area to prevent pulling through thin materials." },
                { title: "Thin Metal Specialist", desc: "Designed for auto-body and appliance assemblies where surface area is critical." },
                { title: "Marine Resistance", desc: "316 grade options for severe saltwater and coastal environments." }
              ].map((feature, i) => (
                <div key={i} className="p-10 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300">
                  <h3 className="text-2xl font-bold text-navy-primary mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Logistics */}
        <section className="py-20 bg-navy-primary text-white overflow-hidden">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gold-primary">Premium Exporter to Global Markets</h2>
            <p className="max-w-3xl mx-auto text-blue-100/70 mb-12 text-lg">
              Our high-volume manufacturing facility in Mumbai exports precision fender washers to the **GCC, Europe, and the USA**. 
              Meeting critical assembly standards for the world's most demanding infrastructure and automotive OEMs.
            </p>
            <div className="flex flex-wrap justify-center gap-12 text-sm font-medium tracking-widest opacity-50 uppercase">
              <span>ASME B18.22.1</span>
              <span>ISO 9001 Compliance</span>
              <span>EN 10204 Certification</span>
              <span>Global Logistics Ready</span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
