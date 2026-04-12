import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft, ArrowRight, CheckCircle, Shield, Zap, Info, TrendingUp, Award, Download, Box, Key, Settings, Target, Anchor } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function ButtweldElbowsDetail() {
  const technicalSpecs = [
    { property: "Standards", value: "ASME B16.9, MSS SP-43, DIN 2605, JIS B2313" },
    { property: "Size Range", value: "1/2\" to 72\" NB (Seamless & Welded)" },
    { property: "Wall Thickness", value: "SCH 5S, 10S, 40S, 80S, 160, XXS" },
    { property: "Bending Radius", value: "Long Radius (LR = 1.5D) | Short Radius (SR = 1.0D)" },
    { property: "Angles", value: "90°, 45°, 180° (Custom Angles Available)" },
    { property: "Ends", value: "Beveled Ends (BW), Plain Ends" }
  ];

  const chemicalComp = [
    { element: "Carbon (C)", ss304: "0.08% max", ss316l: "0.03% max", carbonWpb: "0.30% max" },
    { element: "Chromium (Cr)", ss304: "18.0 - 20.0%", ss316l: "16.0 - 18.0%", carbonWpb: "0.40% max" },
    { element: "Nickel (Ni)", ss304: "8.0 - 10.5%", ss316l: "10.0 - 14.0%", carbonWpb: "0.40% max" },
    { element: "Molybdenum (Mo)", ss304: "-", ss316l: "2.0 - 3.0%", carbonWpb: "0.15% max" },
    { element: "Manganese (Mn)", ss304: "2.0% max", ss316l: "2.0% max", carbonWpb: "0.29 - 1.06%" }
  ];

  return (
    <>
      <ProductSEO
        title="Buttweld Elbows Manufacturer - SS 304, 316L, Carbon Steel A234 WPB 90/45 LR & SR Elbows"
        description="Premium buttweld elbows manufacturer. ASME B16.9 90 & 45 degree long radius and short radius elbows. Stainless steel 304, 316, duplex, and carbon steel pipe fittings in Mumbai."
        keywords="buttweld elbows, 90 degree elbow, 45 degree elbow, long radius elbow, short radius elbow, SS 304 elbow, SS 316L fitting, A234 WPB elbow, pipe elbow manufacturer, ASME B16.9 elbows, stainless steel buttweld fittings"
        category="Pipe Fittings"
        productName="Buttweld Elbows"
        specifications={[
          "Standards: ASME B16.9, MSS SP-43",
          "Grades: 304, 316L, A234 WPB, Duplex 2205",
          "Sizes: 1/2\" to 72\"",
          "Applications: Oil & Gas, Power, Chemical, Water Supply"
        ]}
        canonicalUrl="/product/fittings/buttweld-fittings/buttweld-elbows"
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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-4xl font-bold text-white mb-6"
              >
                Buttweld Elbows <br />
                <span className="text-gold-primary text-xl md:text-2xl font-medium tracking-wide">ASME B16.9 Standard 90°, 45°, & 180° Directional Fittings</span>
              </motion.h1>

              <p className="text-lg text-blue-100/80 mb-8 leading-relaxed max-w-2xl">
                Precision-engineered buttweld elbows for seamless flow redirection in high-pressure piping systems. 
                Manufactured to international standards with exact beveled ends for perfect welding integrity.
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
                  <Zap className="mr-3 text-gold-primary" /> Grade Chemical Composition
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="p-4 rounded-tl-lg text-gray-700">Element</th>
                        <th className="p-4 text-gray-700">SS 304</th>
                        <th className="p-4 text-gray-700">SS 316L</th>
                        <th className="p-4 rounded-tr-lg text-gray-700">A234 WPB</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-sm">
                      {chemicalComp.map((row, i) => (
                        <tr key={i} className="hover:bg-blue-50/30 transition-colors font-medium">
                          <td className="p-4 text-navy-primary">{row.element}</td>
                          <td className="p-4 text-gray-600">{row.ss304}</td>
                          <td className="p-4 text-gray-600">{row.ss316l}</td>
                          <td className="p-4 text-navy-secondary font-bold">{row.carbonWpb}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic Image & Value Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
               <div className="flex-1">
                  <h2 className="text-3xl font-bold text-navy-primary mb-6">LR vs SR Elbows: Optimal Design</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    We specialize in both Long Radius (LR) elbows for low-pressure drops and Short Radius (SR) elbows for compact piping configurations. 
                    Standard 90° and 45° bends are available ex-stock in all schedules, ensuring minimal downtime for your project.
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Uniform Wall Thickness",
                      "Smooth Internal Surface",
                      "Precise Beveling",
                      "Full Material Traceability"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center text-navy-primary font-semibold">
                        <CheckCircle className="w-5 h-4 text-gold-primary mr-2" /> {item}
                      </li>
                    ))}
                  </ul>
               </div>
               <div className="flex-1 relative">
                  <div className="bg-gradient-to-br from-gold-primary to-gold-secondary p-1 rounded-2xl shadow-2xl overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800" 
                      alt="Industrial Buttweld Elbows" 
                      className="rounded-2xl w-full h-80 object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-navy-primary text-white p-6 rounded-lg shadow-xl hidden lg:block border-l-4 border-gold-primary">
                    <p className="text-2xl font-bold">1/2" to 72"</p>
                    <p className="text-gold-primary">Size Range Available</p>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* Global Logistics Section */}
        <section className="py-20 bg-navy-primary text-white relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 italic text-gold-primary tracking-tighter">Strategic Global Fastenings & Fittings Export</h2>
              <p className="text-lg text-blue-100/80 mb-12">
                As leading exporters and manufacturers based in **Mumbai, India**, we provide seamless logistics to the **GCC (Dubai, Saudi Arabia, Kuwait)**, 
                **USA (Houston, Texas)**, and **Europe**. Every fitting is shipped with comprehensive mill test certificates (EN 10204 3.1) and IBR certification.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60 hover:opacity-100 transition-opacity">
                 <div className="flex flex-col items-center"><Award className="w-10 h-10 mb-2 text-gold-primary" /><span>ISO 9001</span></div>
                 <div className="flex flex-col items-center"><Box className="w-10 h-10 mb-2 text-gold-primary" /><span>Secure Pack</span></div>
                 <div className="flex flex-col items-center"><Shield className="w-10 h-10 mb-2 text-gold-primary" /><span>Third Party</span></div>
                 <div className="flex flex-col items-center"><Globe className="w-10 h-10 mb-2 text-gold-primary" /><span>Global Hub</span></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
