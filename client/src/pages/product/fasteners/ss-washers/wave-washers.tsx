import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft, ArrowRight, CheckCircle, Shield, Zap, Info, TrendingUp, Award, Download, Box, Key, Settings, Target, Anchor } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function WaveWashersDetail() {
  const technicalSpecs = [
    { property: "Standards", value: "DIN 137, Custom Precision Specs" },
    { property: "Design Type", value: "Multi-Wave Spring Washer" },
    { property: "Size Range", value: "M3 to M50 | #4 to 2\"" },
    { property: "Material Grades", value: "SS 301, 304, 316, 17-7 PH" },
    { property: "Load Capacity", value: "Light to Medium Deflection" },
    { property: "Surface Treatment", value: "Plain, Passivated, Electropolished" }
  ];

  const chemicalComp = [
    { element: "Silicon (Si)", grade304: "1.00% max", gradeSpring: "High Elastic Yield Optimization" },
    { element: "Chromium (Cr)", grade304: "18.0 - 20.0%", gradeSpring: "Excellent Corrosion Resistance" },
    { element: "Nickel (Ni)", grade304: "8.0 - 10.5%", gradeSpring: "Superior Spring Retention" },
    { element: "Tensile Strength", grade304: "515 MPa min", gradeSpring: "High Fatigue Life" },
    { element: "Operation Cycle", grade304: "Standard", gradeSpring: "Extended Cycle Capability" }
  ];

  return (
    <>
      <ProductSEO
        title="Stainless Steel Wave Washers - SS 304, 316L Multi-Wave Spring Washers Manufacturer"
        description="Premium SS wave washers manufacturer. High precision multi-wave spring washers in SS 304, 316, 17-7 PH for aerospace and electronics. Optimal load dampening in compact assemblies."
        keywords="SS wave washers, multi-wave spring washers, wave spring washers, SS 304 wave washers, 17-7 PH wave springs, DIN 137 washers, precision damping washers, wave washer manufacturer Mumbai, aerospace fasteners"
        category="Fasteners"
        productName="SS Wave Washers"
        specifications={[
          "Standards: DIN 137, Custom",
          "Grades: 304, 316, 17-7 PH",
          "Sizes: M3 - M50",
          "Applications: Electronics, Bearings, Automotive, Precision Instruments"
        ]}
        canonicalUrl="/product/fasteners/ss-washers/wave-washers"
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
                Stainless Steel Wave Washers <br />
                <span className="text-gold-primary text-xl md:text-2xl font-medium tracking-wide">Multi-Wave Precision Damping & Loading (DIN 137)</span>
              </motion.h1>

              <p className="text-lg text-blue-100/80 mb-8 leading-relaxed max-w-2xl">
                Combining high axial flexibility with precision load engagement, our multi-wave washers provide consistent 
                bearing preload and dampening in restricted spaces. Engineered for high-frequency electronics, 
                high-speed bearings, and delicate precision instruments.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-8 py-3 rounded-md font-bold transition-all flex items-center shadow-lg shadow-gold-primary/20">
                  Engineering Datasheet <Download className="ml-2 w-4 h-4" />
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
                  <Settings className="mr-3 text-gold-primary" /> Core Technical Benchmarks
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
                  <Zap className="mr-3 text-gold-primary" /> Grade Spring Performance
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="bg-gray-50 font-bold">
                        <th className="p-4 rounded-tl-lg text-gray-700">Property</th>
                        <th className="p-4 text-gray-700">Standard Value</th>
                        <th className="p-4 rounded-tr-lg text-gray-700">Spring Optimized</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {chemicalComp.map((row, i) => (
                        <tr key={i} className="hover:bg-blue-50/30 transition-colors">
                          <td className="p-4 text-navy-primary font-semibold">{row.element}</td>
                          <td className="p-4 text-gray-600">{row.grade304}</td>
                          <td className="p-4 text-navy-secondary font-bold italic">{row.gradeSpring}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Deflection Control", desc: "Predictable spring rates even in extremely tight axial clearance environments." },
                { title: "Continuous Contact", desc: "Multi-wave design ensures 360-degree point engagement for better stability." },
                { title: "High Fatigue Life", desc: "Engineered to withstand millions of compression cycles without spring failure." }
              ].map((benefit, i) => (
                <div key={i} className="p-10 bg-white border border-gray-100 rounded-2xl shadow-sm hover:border-gold-primary hover:shadow-xl transition-all duration-500 group">
                  <h3 className="text-2xl font-bold text-navy-primary mb-4 group-hover:text-gold-primary transition-colors">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Logistics Excellence */}
        <section className="py-20 bg-navy-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gold-primary italic uppercase tracking-widest">Global Export Supply Chain</h2>
            <p className="max-w-3xl mx-auto text-blue-100/70 mb-12 text-lg">
              Manufactured with surgical precision in **Mumbai**, our wave washers are critical components for high-speed assemblies 
              in **Silicon Valley (USA)**, automotive centers in **Germany**, and offshore facilities in the **GCC**. 
              We offer rapid air-freight and bulk sea logistics for global B2B procurement.
            </p>
            <div className="flex flex-wrap justify-center gap-12 text-sm font-medium tracking-widest opacity-40">
              <span className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-gold-primary" /> ASTM F436</span>
              <span className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-gold-primary" /> RoHS Compliant</span>
              <span className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-gold-primary" /> ISO 9001:2015</span>
              <span className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-gold-primary" /> EN 10204 Certification</span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
