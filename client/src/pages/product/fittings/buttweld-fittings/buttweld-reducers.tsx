import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft, ArrowRight, CheckCircle, Shield, Zap, Info, TrendingUp, Award, Download, Box, Key, Settings, Target, Anchor } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function ButtweldReducersDetail() {
  const technicalSpecs = [
    { property: "Standards", value: "ASME B16.9, MSS SP-75, DIN 2616, EN 10253" },
    { property: "Styles", value: "Concentric Reducers | Eccentric Reducers" },
    { property: "Size Range", value: "1/2\" to 72\" NB" },
    { property: "Wall Thickness", value: "SCH 5S to SCH 160, XXS" },
    { property: "Material Compatibility", value: "Stainless, Carbon, Alloy, Duplex Steel" },
    { property: "Applications", value: "Velocity Control, Flow Path Reduction" }
  ];

  const chemicalComp = [
    { element: "Silicon (Si)", ss304: "0.75% max", ss316l: "0.75% max", carbonWpb: "0.10% min" },
    { element: "Chromium (Cr)", ss304: "18.0 - 20.0%", ss316l: "16.0 - 18.0%", carbonWpb: "0.40% max" },
    { element: "Nickel (Ni)", ss304: "8.0 - 10.5%", ss316l: "10.0 - 14.0%", carbonWpb: "0.40% max" },
    { element: "Hardness (Rockwell B)", ss304: "92 max", ss316l: "95 max", carbonWpb: "197 HRB max" },
    { element: "Tensile (ksi)", ss304: "75 min", ss316l: "70 min", carbonWpb: "60 - 85" }
  ];

  return (
    <>
      <ProductSEO
        title="Buttweld Reducers Manufacturer - Concentric & Eccentric Reducers SS 304, 316, A234 WPB"
        description="High quality buttweld reducers manufacturer. Concentric and eccentric reducers in SS 304, 316, carbon steel, and duplex. Optimized flow reduction solutions as per ASME B16.9."
        keywords="buttweld reducers, concentric reducer, eccentric reducer, SS 304 reducer, SS 316L reducer, A234 WPB reducer, pipe reducer manufacturer, ASME B16.9 reducers, Mumbai steel fittings"
        category="Pipe Fittings"
        productName="Buttweld Reducers"
        specifications={[
          "Standards: ASME B16.9, MSS SP-75",
          "Grades: 304, 316L, A234 WPB, Duplex 2205",
          "Sizes: 1/2\" to 72\"",
          "Styles: Concentric, Eccentric"
        ]}
        canonicalUrl="/product/fittings/buttweld-fittings/buttweld-reducers"
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
                <Link href="/product/fittings/buttweld-fittings" className="hover:text-gold-primary transition-colors">Buttweld Fittings</Link>
              </nav>

              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-4xl font-bold text-white mb-6"
              >
                Buttweld Reducers <br />
                <span className="text-gold-primary text-xl md:text-2xl font-medium tracking-wide">Precision Concentric & Eccentric Flow Control Solutions</span>
              </motion.h1>

              <p className="text-lg text-blue-100/80 mb-8 leading-relaxed max-w-2xl">
                Strategically engineered to bridge pipes of different diameters, our reducers provide controlled shifts in velocity and pressure. 
                Whether for vertical lines (concentric) or horizontal lines where moisture trapping must be avoided (eccentric), 
                we ensure technical perfection across all material grades.
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
                  <Settings className="mr-3 text-gold-primary" /> Technical Benchmarks
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
              <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100 border-t-4 border-gold-primary">
                <h2 className="text-2xl font-bold text-navy-primary mb-8 flex items-center">
                  <Zap className="mr-3 text-gold-primary" /> Material Properties Analytics
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm text-gray-700">
                    <thead>
                      <tr className="bg-gray-50 font-bold border-b-2 border-gray-200">
                        <th className="p-4 rounded-tl-lg">Property</th>
                        <th className="p-4">Stainless 304</th>
                        <th className="p-4">Stainless 316L</th>
                        <th className="p-4 rounded-tr-lg">Carbon WPB</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {chemicalComp.map((row, i) => (
                        <tr key={i} className="hover:bg-blue-50/40 transition-colors">
                          <td className="p-4 text-navy-primary font-bold">{row.element}</td>
                          <td className="p-4 font-medium">{row.ss304}</td>
                          <td className="p-4 font-medium">{row.ss316l}</td>
                          <td className="p-4 text-navy-secondary font-black italic">{row.carbonWpb}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specialized Logic Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-16">
               <div className="flex-1 space-y-8">
                  <div className="p-8 border-l-4 border-gold-primary bg-gray-50 rounded-r-xl">
                    <h3 className="text-2xl font-bold mb-4">Concentric Reducers</h3>
                    <p className="text-gray-600 italic">"Ideal for vertical pipelines to eliminate turbulence and cavitation through center-aligned flow."</p>
                  </div>
                  <div className="p-8 border-l-4 border-navy-primary bg-gray-50 rounded-r-xl">
                    <h3 className="text-2xl font-bold mb-4">Eccentric Reducers</h3>
                    <p className="text-gray-600 italic">"CRITICAL for horizontal pipelines to prevent air/gas pockets or fluid accumulation via flat-bottom design."</p>
                  </div>
               </div>
               <div className="flex-1 bg-navy-primary text-white p-12 rounded-3xl shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gold-primary opacity-10 rounded-bl-full group-hover:w-full group-hover:h-full transition-all duration-700"></div>
                  <h3 className="text-3xl font-bold mb-6 text-gold-primary relative z-10 font-serif lowercase italic">precision. forging. excellence.</h3>
                  <p className="text-blue-100/70 mb-8 relative z-10 leading-relaxed">
                    Every reducer undergoes rigorous ultrasonic testing to ensure uniform wall thicknesses and smooth internal geometry. 
                    This minimizes friction loss and prevents localized erosion in abrasive flow environments.
                  </p>
                  <Link href="/contact" className="inline-block bg-white text-navy-primary px-8 py-3 rounded-md font-bold hover:bg-gold-primary hover:text-white transition-all relative z-10">
                    Consult an Engineer
                  </Link>
               </div>
            </div>
          </div>
        </section>

        {/* Global Logistics Excellence */}
        <section className="py-20 bg-gray-50 border-y border-gray-200">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-navy-primary">Serving Global Infrastructure From Mumbai</h2>
            <div className="flex flex-wrap justify-center gap-10 text-gray-400 font-bold opacity-60">
              <span className="hover:text-gold-primary transition-colors cursor-default">GCC (Dubai/Riyadh)</span>
              <span className="hover:text-gold-primary transition-colors cursor-default">USA (Houston)</span>
              <span className="hover:text-gold-primary transition-colors cursor-default">European Union (Germany)</span>
              <span className="hover:text-gold-primary transition-colors cursor-default">South East Asia (Singapore)</span>
            </div>
            <p className="mt-12 text-gray-500 max-w-2xl mx-auto italic">
              "Providing seamless Door-to-Project logistics for bulk fitting orders. Complete export documentation and inspection clearance guaranteed."
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
