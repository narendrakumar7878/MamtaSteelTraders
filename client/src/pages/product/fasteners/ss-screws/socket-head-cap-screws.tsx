import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft, ArrowRight, CheckCircle, Shield, Zap, Info, TrendingUp, Award, Download, Box, Key, Settings, Target, Anchor } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function SocketHeadCapScrewsDetail() {
  const technicalSpecs = [
    { property: "Standards", value: "DIN 912, ISO 4762, ASME B18.3, BS 2470" },
    { property: "Size Range", value: "M1.6 to M64 | #0 to 2\"" },
    { property: "Material Grades", value: "SS 304, 316L, 316Ti, 310S, 410" },
    { property: "Property Class", value: "A2-70, A4-70, A4-80, A4-100" }
  ];

  const materialGrades = [
    { grade: "A2-70", minTensile: "700 MPa", hardness: "20-28 HRC", application: "General Precision" },
    { grade: "A4-80", minTensile: "800 MPa", hardness: "26-36 HRC", application: "Marine/Chemical" },
    { grade: "SS 310S", minTensile: "520 MPa", hardness: "95 HRB", application: "Heat Resistance" },
    { grade: "SS 904L", minTensile: "490 MPa", hardness: "90 HRB", application: "Acid Resistance" }
  ];

  return (
    <>
      <ProductSEO
        title="Stainless Steel Socket Head Cap Screws - SS 316L, 304 Allen Bolts | Global Supplier"
        description="Premium SS Socket Head Cap Screws (Allen Bolts) Manufacturer. Grades SS 304, 316L, 316Ti, 410. DIN 912 Standards. Precision engineering fasteners for UAE, Saudi, Europe, USA, and Global Industry."
        keywords="SS 316L socket cap screws, SS 304 allen bolts, DIN 912 stainless screws, A4-80 socket screws, precision stainless fasteners, Mumbai allen bolt supplier, UAE industrial screws, Saudi refinery fasteners, USA engineering bolts, UK marine screws, Qatar oil and gas fasteners"
        category="Stainless Steel Screws"
        productName="Stainless Steel Socket Head Cap Screws"
        specifications={["SS 304/316L", "DIN 912 / ISO 4762", "A2-70 / A4-80", "M1.6 to M64"]}
        canonicalUrl="/product/fasteners/ss-screws/socket-head-cap-screws"
      />

      <div className="min-h-screen bg-[#FDFDFD]">
        {/* Hero Section */}
        <section className="relative bg-[#0F172A] py-24 overflow-hidden font-sans">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_#fde047_0%,_transparent_60%)]"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <Link href="/product/fasteners/ss-screws">
              <button className="flex items-center text-blue-100/70 hover:text-gold-primary transition-colors mb-10 group uppercase text-xs tracking-widest font-black">
                <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" />
                Return to SS Screws Hub
              </button>
            </Link>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-tighter leading-none font-sans">
                Precision <span className="text-gold-primary italic font-serif">Socket Head</span> <br/>
                Engineering Screws
              </h1>
              <p className="text-xl text-slate-400 mb-12 max-w-2xl font-light leading-relaxed">
                Advanced Allen-key internal drive systems for high-stress applications. Aerospace-grade tolerances and certified chemical resistance for sterile and offshore environments.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Technical Data Grid */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-4 gap-6 mb-24">
              {technicalSpecs.map((spec, i) => (
                <div key={i} className="p-8 bg-[#F8FAFC] rounded-3xl border border-slate-100 hover:border-gold-primary/30 transition-all flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2 block">{spec.property}</span>
                    <h4 className="text-lg font-bold text-navy-primary">{spec.value}</h4>
                  </div>
                  <Info className="w-5 h-5 text-gold-primary/20 self-end mt-4" />
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-3xl font-bold text-navy-primary mb-10 flex items-center tracking-tight font-sans">
                  <Settings className="mr-4 text-gold-primary w-8 h-8" /> Property Class Analysis
                </h2>
                <div className="overflow-hidden rounded-3xl border border-slate-100 shadow-sm">
                  <table className="w-full text-sm font-sans">
                    <thead className="bg-navy-primary text-white">
                      <tr>
                        <th className="px-6 py-5 text-left font-black uppercase tracking-widest text-[10px]">Material Grade</th>
                        <th className="px-6 py-5 text-left font-black uppercase tracking-widest text-[10px]">Tensile Strength</th>
                        <th className="px-6 py-5 text-left font-black uppercase tracking-widest text-[10px]">Optimized For</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50 italic">
                      {materialGrades.map((row, i) => (
                        <tr key={i} className="hover:bg-slate-50 transition-colors">
                          <td className="px-6 py-5 font-bold text-navy-primary">{row.grade}</td>
                          <td className="px-6 py-5 text-slate-600 font-mono">{row.minTensile}</td>
                          <td className="px-6 py-5 text-gold-primary font-bold">{row.application}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="space-y-10">
                <div className="p-10 rounded-[2.5rem] bg-navy-primary text-white shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:scale-125 transition-transform duration-700">
                    <Target className="w-48 h-48" />
                  </div>
                  <h3 className="text-2xl font-bold mb-8 relative z-10 font-sans">Precision Applications</h3>
                  <div className="grid grid-cols-2 gap-4 relative z-10">
                    {[
                      "Medical Equipment",
                      "Automotive Engines",
                      "Aerospace Avionics",
                      "Precision Tooling",
                      "Sterile Food Lines",
                      "Marine Electronics",
                      "Oil & Gas Instrumentation",
                      "Chemical Reactors"
                    ].map((app, i) => (
                      <div key={i} className="flex items-center space-x-3 bg-white/5 p-4 rounded-2xl backdrop-blur-sm border border-white/5 hover:bg-white/10 transition-all font-sans">
                        <CheckCircle className="w-4 h-4 text-gold-primary" />
                        <span className="text-xs font-bold tracking-tight">{app}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-[#FDE047]/10 p-10 rounded-3xl border border-[#FDE047]/20 border-dashed">
                   <h4 className="text-navy-primary font-bold mb-4 flex items-center font-sans tracking-tight"><Award className="w-5 h-5 mr-2 text-gold-primary" /> Global Certification Standard</h4>
                   <p className="text-sm text-slate-600 leading-relaxed font-sans">Every Socket Screw assembly is produced under ISO 9001:2015 conditions. Certification for <strong>ASME III Nuclear</strong> and <strong>AMS</strong> aerospace standards is available upon special procurement request.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Market Highlight */}
        <section className="py-24 bg-slate-50 overflow-hidden relative font-sans">
           <div className="container mx-auto px-4 text-center">
             <h2 className="text-4xl font-bold text-navy-primary mb-16 tracking-tight">Global Engineering Supply Network</h2>
             <div className="grid md:grid-cols-4 gap-8 opacity-80">
               <div className="flex flex-col items-center">
                 <Anchor className="w-10 h-10 text-gold-primary mb-4" />
                 <h5 className="font-bold text-navy-primary uppercase text-[10px] tracking-widest mb-2">GCC REFINERIES</h5>
                 <p className="text-[10px] text-slate-500 uppercase font-black">Major supplier to Saudi Aramco & ADNOC projects</p>
               </div>
               <div className="flex flex-col items-center">
                 <Shield className="w-10 h-10 text-gold-primary mb-4" />
                 <h5 className="font-bold text-navy-primary uppercase text-[10px] tracking-widest mb-2">EUROPEAN MED-TECH</h5>
                 <p className="text-[10px] text-slate-500 uppercase font-black">Supplying precision screws to Germany & UK labs</p>
               </div>
               <div className="flex flex-col items-center">
                 <Box className="w-10 h-10 text-gold-primary mb-4" />
                 <h5 className="font-bold text-navy-primary uppercase text-[10px] tracking-widest mb-2">US AEROSPACE</h5>
                 <p className="text-[10px] text-slate-500 uppercase font-black">Fast-track delivery to US (Houston/FL) space hubs</p>
               </div>
               <div className="flex flex-col items-center">
                 <TrendingUp className="w-10 h-10 text-gold-primary mb-4" />
                 <h5 className="font-bold text-navy-primary uppercase text-[10px] tracking-widest mb-2">PAN-ASIAN MFG</h5>
                 <p className="text-[10px] text-slate-500 uppercase font-black">Direct supply to Japan & Singapore electronics</p>
               </div>
             </div>
           </div>
        </section>

        {/* Global CTA */}
        <section className="py-24 bg-navy-primary relative overflow-hidden font-sans">
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-10 tracking-tighter uppercase italic">Secure Your Precision</h2>
            <p className="text-xl text-blue-100/60 mb-14 max-w-2xl mx-auto font-light">Join the top 1% of global engineering firms using our high-tolerance stainless fasteners.</p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-12">
               <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-16 py-6 rounded-3xl font-black text-xl transition-all shadow-3xl hover:scale-110 flex items-center tracking-widest uppercase">
                  Order Samples <ArrowRight className="ml-4 w-7 h-7" />
               </Link>
               <div className="text-left border-l border-white/20 pl-12 font-sans">
                 <p className="text-[10px] font-black text-gold-primary uppercase tracking-[0.4em] mb-2 font-sans">Technical Hotline</p>
                 <a href="tel:+919819322576" className="text-3xl font-bold text-white font-sans">+91 9819322576</a>
               </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
