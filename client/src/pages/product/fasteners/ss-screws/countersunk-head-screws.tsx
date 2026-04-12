import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft, ArrowRight, CheckCircle, Shield, Zap, Info, TrendingUp, Award, Box, Key, Settings, Target, Anchor } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function CountersunkHeadScrewsDetail() {
  const technicalSpecs = [
    { property: "Standards", value: "DIN 7991, ISO 10642, ASME B18.3.5M" },
    { property: "Size Range", value: "M3 to M20 | #6 to 1\"" },
    { property: "Material Grades", value: "SS 304, 306L, SS 321, SS 347, Duplex" },
    { property: "Drive Systems", value: "Hex Socket, Phillips, Torx, Slotted" }
  ];

  const materialGrades = [
    { grade: "SS 304 (A2)", minTensile: "700 MPa", hardness: "85 HRB max", application: "Internal Precision" },
    { grade: "SS 316L (A4)", minTensile: "800 MPa", hardness: "90 HRB max", application: "Chloridic Environments" },
    { grade: "SS 321", minTensile: "515 MPa", hardness: "95 HRB max", application: "High Temp Service" },
    { grade: "SS 904L", minTensile: "490 MPa", hardness: "90 HRB max", application: "Sulfuric Acid Resistance" }
  ];

  return (
    <>
      <ProductSEO
        title="SS Countersunk Head Screws - DIN 7991, ISO 10642 Flat Head | Global Supplier"
        description="Premium Stainless Steel Countersunk Head Screws Manufacturer. DIN 7991 / ISO 10642 Standards. Flush-fit flat head screws in SS 304, 316L, 321. Supplying to GCC, Europe, USA, and Global projects."
        keywords="countersunk head screws, DIN 7991 stainless screws, ISO 10642 SS screws, flat head socket screws, stainless flush mount screws, SS 316L countersunk supplier, Mumbai screw factory, UAE industrial fasteners, Saudi oil & gas screws"
        category="Stainless Steel Screws"
        productName="Stainless Steel Countersunk Head Screws"
        specifications={["SS 304/316L", "DIN 7991 / ISO 10642", "A2-70 / A4-80", "M3 to M20"]}
        canonicalUrl="/product/fasteners/ss-screws/countersunk-head-screws"
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
                Flush-Fit <span className="text-gold-primary italic font-serif">Countersunk</span> <br/>
                Precision Screws
              </h1>
              <p className="text-xl text-slate-400 mb-12 max-w-2xl font-light leading-relaxed">
                Engineered for applications requiring a perfectly flat surface profile. Our DIN 7991 compliant screws provide superior shear strength while maintaining aesthetic continuity across the assembly.
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
                  <Settings className="mr-4 text-gold-primary w-8 h-8" /> Material Performance Matrix
                </h2>
                <div className="overflow-hidden rounded-3xl border border-slate-100 shadow-sm">
                  <table className="w-full text-sm font-sans">
                    <thead className="bg-navy-primary text-white">
                      <tr>
                        <th className="px-6 py-5 text-left font-black uppercase tracking-widest text-[10px]">Grade Standard</th>
                        <th className="px-6 py-5 text-left font-black uppercase tracking-widest text-[10px]">Tensile Rating</th>
                        <th className="px-6 py-5 text-left font-black uppercase tracking-widest text-[10px]">Core Capability</th>
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
                  <h3 className="text-2xl font-bold mb-8 relative z-10 font-sans">Assembly Applications</h3>
                  <div className="grid grid-cols-2 gap-4 relative z-10">
                    {[
                      "Marine Decking",
                      "Architectural Glazing",
                      "PCB Enclosures",
                      "Automotive Body Panels",
                      "Commercial Kitchens",
                      "Luxury Elevator Interiors",
                      "Medical Scanners",
                      "Water Treatment Plants"
                    ].map((app, i) => (
                      <div key={i} className="flex items-center space-x-3 bg-white/5 p-4 rounded-2xl backdrop-blur-sm border border-white/5 hover:bg-white/10 transition-all font-sans">
                        <CheckCircle className="w-4 h-4 text-gold-primary" />
                        <span className="text-xs font-bold tracking-tight">{app}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-[#FDE047]/10 p-10 rounded-3xl border border-[#FDE047]/20 border-dashed">
                   <h4 className="text-navy-primary font-bold mb-4 flex items-center font-sans tracking-tight"><Award className="w-5 h-5 mr-2 text-gold-primary" /> Dimensional Precision Tracking</h4>
                   <p className="text-sm text-slate-600 leading-relaxed font-sans">Every batch of Countersunk Head screws undergoes rigorous head-angle verification to ensure perfect seating. Compliance with <strong>DIN 7991</strong> ensures no protrusions on critical surfaces.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Market Highlight */}
        <section className="py-24 bg-slate-50 overflow-hidden relative font-sans">
           <div className="container mx-auto px-4 text-center">
             <h2 className="text-4xl font-bold text-navy-primary mb-16 tracking-tight">Global Market Dominance</h2>
             <div className="grid md:grid-cols-4 gap-8 opacity-80">
               <div className="flex flex-col items-center">
                 <Anchor className="w-10 h-10 text-gold-primary mb-4" />
                 <h5 className="font-bold text-navy-primary uppercase text-[10px] tracking-widest mb-2">SAUDI & UAE</h5>
                 <p className="text-[10px] text-slate-500 uppercase font-black">Specified for coastal refinery infrastructures</p>
               </div>
               <div className="flex flex-col items-center">
                 <Shield className="w-10 h-10 text-gold-primary mb-4" />
                 <h5 className="font-bold text-navy-primary uppercase text-[10px] tracking-widest mb-2">EUROPEAN UNION</h5>
                 <p className="text-[10px] text-slate-500 uppercase font-black">Supplying EN-compliant fasteners to Germany</p>
               </div>
               <div className="flex flex-col items-center">
                 <Box className="w-10 h-10 text-gold-primary mb-4" />
                 <h5 className="font-bold text-navy-primary uppercase text-[10px] tracking-widest mb-2">UNITED STATES</h5>
                 <p className="text-[10px] text-slate-500 uppercase font-black">Asme-certified supply to Texas oil hubs</p>
               </div>
               <div className="flex flex-col items-center">
                 <TrendingUp className="w-10 h-10 text-gold-primary mb-4" />
                 <h5 className="font-bold text-navy-primary uppercase text-[10px] tracking-widest mb-2">INDIA & SINGAPORE</h5>
                 <p className="text-[10px] text-slate-500 uppercase font-black">Mainland distributor for electronic mfg</p>
               </div>
             </div>
           </div>
        </section>

        {/* Global CTA */}
        <section className="py-24 bg-navy-primary relative overflow-hidden font-sans">
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-10 tracking-tighter uppercase italic">Flush Perfection</h2>
            <p className="text-xl text-blue-100/60 mb-14 max-w-2xl mx-auto font-light">Global logistics and technical compliance for your most critical flush-mount requirements.</p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-12">
               <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-16 py-6 rounded-3xl font-black text-xl transition-all shadow-3xl hover:scale-110 flex items-center tracking-widest uppercase">
                  Request Technical Info <ArrowRight className="ml-4 w-7 h-7" />
               </Link>
               <div className="text-left border-l border-white/20 pl-12 font-sans">
                 <p className="text-[10px] font-black text-gold-primary uppercase tracking-[0.4em] mb-2 font-sans">Procurement Desk</p>
                 <a href="tel:+919819322576" className="text-3xl font-bold text-white font-sans">+91 9819322576</a>
               </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
