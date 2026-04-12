import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft, ArrowRight, CheckCircle, Shield, Zap, Info, TrendingUp, Award, Download, Box, Key, Settings, Target, Anchor } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function BellevilleWashersDetail() {
  const technicalSpecs = [
    { property: "Standards", value: "DIN 2093, ISO 19690, ASME B18.21.2" },
    { property: "Design Type", value: "Conical Disc Spring (Belleville)" },
    { property: "Size Range", value: "M4 to M100 | #8 to 4\"" },
    { property: "Material Grades", value: "SS 301, 304, 316, 17-7 PH, Inconel" },
    { property: "Load Capacity", value: "High Concentration in Compact Space" },
    { property: "Application Type", value: "Preload, Dampening, Thermal Expansion" }
  ];

  const chemicalComp = [
    { element: "Chromium (Cr)", grade304: "18.0 - 20.0%", grade177PH: "16.0 - 18.0%" },
    { element: "Nickel (Ni)", grade304: "8.0 - 10.5%", grade177PH: "6.5 - 7.75%" },
    { element: "Aluminium (Al)", grade304: "-", grade177PH: "0.75 - 1.50%" },
    { element: "Tensile Strength", grade304: "515 MPa min", grade177PH: "1100 - 1400 MPa" },
    { element: "Yield Strength", grade304: "205 MPa min", grade177PH: "1000 - 1200 MPa" }
  ];

  return (
    <>
      <ProductSEO
        title="Stainless Steel Belleville Washers - SS 304, 316, 17-7 PH Conical Disc Springs Manufacturer"
        description="High performance SS belleville washers manufacturer. Conical disc springs in SS 304, 17-7 PH grade for thermal expansion and high-load preloading. DIN 2093 certified disc springs."
        keywords="SS belleville washers, conical disc springs, SS 17-7 PH springs, DIN 2093 washers, thermal expansion washers, high load washers, precision disc springs, disc spring manufacturer Mumbai, aerospace fasteners"
        category="Fasteners"
        productName="SS Belleville Washers"
        specifications={[
          "Standards: DIN 2093, ISO 19690",
          "Grades: 304, 316, 17-7 PH",
          "Sizes: M4 - M100",
          "Applications: Thermal Expansion, Valve Preloading, Heavy Machinery"
        ]}
        canonicalUrl="/product/fasteners/ss-washers/belleville-washers"
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 bg-navy-primary overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-primary rounded-full filter blur-[120px] translate-x-1/2 -translate-y-1/2"></div>
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
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-4xl font-bold text-white mb-6"
              >
                Stainless Steel Belleville Washers <br />
                <span className="text-gold-primary text-xl md:text-2xl font-medium tracking-wide">Superior High-Load Conical Disc Springs (DIN 2093)</span>
              </motion.h1>

              <p className="text-lg text-blue-100/80 mb-8 leading-relaxed max-w-2xl">
                Mastering extreme pressure and thermal fluctuations, our conical disc springs provide massive axial load in 
                ultra-compact spaces. Engineered using high-performance precipitation hardened alloys (17-7 PH) for 
                unrivaled durability in aerospace, maritime, and oil & gas valve assemblies.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-8 py-3 rounded-md font-bold transition-all flex items-center shadow-lg shadow-gold-primary/20">
                  Engineering Catalog <Download className="ml-2 w-4 h-4" />
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
                  <Settings className="mr-3 text-gold-primary" /> Precision Engineering Metrics
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
              <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 text-sm">
                <h2 className="text-2xl font-bold text-navy-primary mb-8 flex items-center">
                  <Zap className="mr-3 text-gold-primary" /> Grade Performance Matrix
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-gray-50 font-bold">
                        <th className="p-4 rounded-tl-lg text-gray-700">Property</th>
                        <th className="p-4 text-gray-700">Grade 304</th>
                        <th className="p-4 rounded-tr-lg text-gray-700">Grade 17-7 PH</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {chemicalComp.map((row, i) => (
                        <tr key={i} className="hover:bg-blue-50/30 transition-colors">
                          <td className="p-4 text-navy-primary font-semibold">{row.element}</td>
                          <td className="p-4 text-gray-600">{row.grade304}</td>
                          <td className="p-4 text-gray-600 font-bold text-navy-secondary">{row.grade177PH}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specialized Benefits */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Dynamic Load Bearing", desc: "Maintains high tension under constant vibration and load cycling." },
                { title: "Thermal Compensation", desc: "Expertly handles bolt expansion and contraction in extreme temperatures." },
                { title: "Ultra-Compact Footprint", desc: "Delivers mechanical energy in fractions of the space of helical springs." }
              ].map((feature, i) => (
                <div key={i} className="p-10 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-2xl hover:border-gold-primary transition-all duration-300 transform hover:-translate-y-2">
                  <h3 className="text-2xl font-bold text-navy-primary mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Logistics */}
        <section className="py-20 bg-navy-primary text-white relative overflow-hidden">
           <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-8 text-gold-primary tracking-tight italic">Worldwide High-Spec Fastener Logistics</h2>
            <p className="max-w-4xl mx-auto text-blue-100/70 mb-12 text-lg md:text-xl leading-relaxed">
              Supplying precision-engineered disc springs from **Mumbai** to the global industrial landscape. 
              Our exports serve high-pressure offshore platforms in the **GCC**, pharmaceutical cleanrooms in the **EU**, 
              and cutting-edge aerospace engineering hubs in the **USA**.
            </p>
            <div className="flex flex-wrap justify-center gap-12 text-sm font-bold tracking-widest opacity-40 uppercase">
              <span className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-gold-primary" /> Mill Test Certification</span>
              <span className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-gold-primary" /> EN 10204 3.1</span>
              <span className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-gold-primary" /> NACE MR0175 Compliance</span>
              <span className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-gold-primary" /> Bulk Global Air-Freight</span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
