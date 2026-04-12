import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft, ArrowRight, CheckCircle, Shield, Zap, Info, TrendingUp, Award, Download, Box, Key, Settings, Target, Anchor } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function ButtweldCapsDetail() {
  const technicalSpecs = [
    { property: "Standards", value: "ASME B16.9, MSS SP-75, DIN 2617, EN 10253" },
    { property: "Styles", value: "Dished Ends | Ellipsoidal Caps | Hemispherical Caps" },
    { property: "Size Range", value: "1/2\" to 72\" NB" },
    { property: "Wall Thickness", value: "SCH 10S, 40S, 80S, 160, XXS" },
    { property: "Material Grades", value: "Stainless, Carbon, alloy, Duplex Steel" },
    { property: "Standard Radius", value: "2:1 Ellipsoidal | ASME Dished" }
  ];

  const chemicalComp = [
    { element: "Silicon (Si)", ss304: "0.75% max", ss316l: "0.75% max", carbonWpb: "0.10% min" },
    { element: "Phosphorus (P)", ss304: "0.045% max", ss316l: "0.045% max", carbonWpb: "0.035% max" },
    { element: "Sulfur (S)", ss304: "0.03% max", ss316l: "0.03% max", carbonWpb: "0.035% max" },
    { element: "Tensile (ksi)", ss304: "75 min", ss316l: "70 min", carbonWpb: "60 - 85" },
    { element: "Elongation (%)", ss304: "40 min", ss316l: "40 min", carbonWpb: "22 min" }
  ];

  return (
    <>
      <ProductSEO
        title="Buttweld Caps Manufacturer - SS 304, 316, Carbon Steel A234 WPB End Caps & Dished Ends"
        description="Premium buttweld caps manufacturer. ASME B16.9 pipe end caps and dished ends in SS 304, 316, carbon steel, and alloy steel. High-pressure pipeline termination solutions in Mumbai."
        keywords="buttweld caps, pipe end caps, dished ends, SS 304 end caps, SS 316L caps, A234 WPB caps, pipe closure fittings, ASME B16.9 caps, ellipsoidal ends manufacturer, Mumbai steel supplier"
        category="Pipe Fittings"
        productName="Buttweld Caps"
        specifications={[
          "Standards: ASME B16.9, MSS SP-75",
          "Grades: 304, 316L, A234 WPB",
          "Sizes: 1/2\" to 72\"",
          "Styles: Dished, Ellipsoidal, Hemispherical"
        ]}
        canonicalUrl="/product/fittings/buttweld-fittings/buttweld-caps"
      />

      <div className="min-h-screen bg-white text-navy-primary">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 bg-navy-primary text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
             <div className="absolute top-0 left-0 w-96 h-96 bg-gold-primary rounded-full filter blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl">
              <nav className="flex items-center space-x-2 text-sm text-blue-100/60 mb-8 font-medium">
                <Link href="/" className="hover:text-gold-primary transition-colors">Home</Link>
                <ArrowRight className="w-3 h-3 text-blue-100/30" />
                <Link href="/product/fittings/buttweld-fittings" className="hover:text-gold-primary transition-colors">Buttweld Fittings</Link>
              </nav>

              <motion.h1 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold mb-6 tracking-tight"
              >
                Buttweld End Caps <br />
                <span className="text-gold-primary italic text-xl md:text-2xl font-serif">Premium ASME B16.9 Pipe Closures & Dished Ends</span>
              </motion.h1>

              <p className="text-lg text-blue-100/80 mb-8 leading-relaxed max-w-2xl font-light">
                Securely terminating high-pressure pipelines with precision-forged end caps. 
                Manufactured with uniform wall thickness and standard knuckle radii to ensure leak-proof performance 
                under extreme industrial stresses.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-10 py-4 rounded-lg font-black uppercase text-xs tracking-widest transition-all transform hover:scale-105 shadow-xl shadow-gold-primary/20">
                  Technical Spec Sheet <Download className="ml-3 w-4 h-4" />
                </button>
                <Link href="/contact" className="border-2 border-white/20 hover:border-white/60 text-white px-10 py-4 rounded-lg font-bold transition-all backdrop-blur-sm">
                  Bulk Quote Inquiry
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specification Grid */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Core Specifications */}
              <div className="lg:col-span-1 bg-white p-10 rounded-2xl shadow-xl border-b-4 border-gold-primary">
                <h2 className="text-2xl font-black text-navy-primary mb-10 flex items-center uppercase tracking-tighter">
                  <Settings className="mr-3 text-gold-primary w-6 h-6" /> Engineering Benchmarks
                </h2>
                <div className="space-y-6">
                  {technicalSpecs.map((spec, i) => (
                    <div key={i} className="group">
                      <span className="text-gray-400 text-xs font-bold uppercase tracking-widest block mb-1">{spec.property}</span>
                      <span className="text-navy-primary font-black text-sm tracking-tight group-hover:text-gold-primary transition-colors">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chemical Analysis */}
              <div className="lg:col-span-2 bg-white p-10 rounded-2xl shadow-xl overflow-hidden relative border-b-4 border-navy-primary">
                <h2 className="text-2xl font-black text-navy-primary mb-10 flex items-center uppercase tracking-tighter">
                  <Zap className="mr-3 text-gold-primary w-6 h-6" /> Grade Technical Matrix
                </h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="bg-navy-primary text-white text-[10px] uppercase tracking-[0.2em] font-black">
                          <th className="p-5 rounded-tl-xl border-r border-white/10">Element/Property</th>
                          <th className="p-5 border-r border-white/10 text-center">Stainless 304</th>
                          <th className="p-5 border-r border-white/10 text-center">Stainless 316L</th>
                          <th className="p-5 rounded-tr-xl text-center">Carbon A234 WPB</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 text-[13px] font-bold text-gray-600">
                        {chemicalComp.map((row, i) => (
                          <tr key={i} className="hover:bg-gray-50 transition-all group">
                            <td className="p-5 text-navy-primary border-r border-gray-50 bg-gray-50/30 font-black">{row.element}</td>
                            <td className="p-5 text-center border-r border-gray-50 group-hover:text-gold-primary">{row.ss304}</td>
                            <td className="p-5 text-center border-r border-gray-50 group-hover:text-gold-primary">{row.ss316l}</td>
                            <td className="p-5 text-center bg-gray-50/50 text-navy-secondary font-black italic">{row.carbonWpb}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section with Image */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="flex-1 order-2 md:order-1">
                <img 
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800" 
                  alt="Industrial End Caps" 
                  className="rounded-3xl shadow-2xl skew-y-2 hover:skew-y-0 transition-transform duration-700 w-full h-[400px] object-cover"
                />
              </div>
              <div className="flex-1 order-1 md:order-2">
                <h2 className="text-3xl font-black text-navy-primary mb-8 tracking-tighter uppercase">Ellipsoidal & Dished Ends</h2>
                <p className="text-gray-600 leading-relaxed mb-8 text-lg font-medium opacity-80">
                  Our cap manufacturing utilizes cold-forming and hot-forming techniques based on thickness and grade requirements. 
                  Every unit is heat-treated to restore structural properties at the knuckle and crown, ensuring maximum pressure rating integrity.
                </p>
                <div className="space-y-4">
                  {[
                    "Standard ASME Section VIII Knuckle Radius",
                    "Uniform Straight Flange for Easy Beveling",
                    "Precision-trimmed edge for direct buttwelding",
                    "Stress-relieved for high-temperature service"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center space-x-4">
                      <div className="w-2 h-2 bg-gold-primary rounded-full"></div>
                      <span className="text-navy-primary font-black text-sm uppercase tracking-wider">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Logistics Network */}
        <section className="py-24 bg-navy-primary text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
             <h2 className="text-2xl md:text-3xl font-black mb-10 text-gold-primary italic uppercase tracking-widest">Global Supply Intelligence</h2>
             <p className="text-xl max-w-4xl mx-auto mb-16 font-light text-blue-100/60 leading-relaxed">
               As premium manufacturers in **Mumbai**, we deliver ASME-stamped buttweld caps to major petrochemical 
               and refinery hubs in **GCC (Saudi Aramco, Qatar Energy)**, **Texas (USA)**, and **Aberdeen (UK)**. 
               Custom export packing for sea and air freight ensures zero damage upon arrival.
             </p>
             <div className="flex flex-wrap justify-center gap-16 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                <div className="flex flex-col items-center"><Award className="w-12 h-12 mb-4 text-gold-primary" /><span className="text-xs font-black tracking-widest">PED CERTIFIED</span></div>
                <div className="flex flex-col items-center"><Globe className="w-12 h-12 mb-4 text-gold-primary" /><span className="text-xs font-black tracking-widest">GLOBAL LOGISTICS</span></div>
                <div className="flex flex-col items-center"><Shield className="w-12 h-12 mb-4 text-gold-primary" /><span className="text-xs font-black tracking-widest">BUREAU VERITAS</span></div>
             </div>
          </div>
        </section>
      </div>
    </>
  );
}
