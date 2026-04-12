import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft, ArrowRight, CheckCircle, Shield, Zap, Info, TrendingUp, Award, Box, Key, Settings, Target, Anchor } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function SelfTappingScrewsDetail() {
  const technicalSpecs = [
    { property: "Standards", value: "DIN 7981, DIN 7982, ISO 7049, ASME B18.6.4" },
    { property: "Size Range", value: "#2 to #14 | M2.2 to M6.3" },
    { property: "Material Grades", value: "SS 304, SS 316, A2-70, A4-80" },
    { property: "Point Types", value: "Type A, Type AB, Type B (Pointed/Blunt)" }
  ];

  const materialGrades = [
    { grade: "A2-70 (304)", minTensile: "700 MPa", hardness: "20-28 HRC", application: "Sheet Metal Enclosures" },
    { grade: "A4-80 (316)", minTensile: "800 MPa", hardness: "26-36 HRC", application: "Salt Spray Environments" },
    { grade: "Case Hardened", minTensile: "Varies", hardness: "HRC 45 min", application: "Hardened Sheet Penetration" },
    { grade: "316Ti", minTensile: "580 MPa", hardness: "95 HRB", application: "High-Temperature HVAC" }
  ];

  return (
    <>
      <ProductSEO
        title="SS Self-Tapping Screws Manufacturer - SS 304, 316 Sheet Metal Screws | Global Supplier"
        description="Premium Stainless Steel Self-Tapping Screws Manufacturer. High-performance SS 304, 316 sheet metal fasteners. DIN 7981, ISO 7049 Standards. Supplying to GCC, Europe, USA, and Global electronics/HVAC sectors."
        keywords="self-tapping screws, stainless sheet metal screws, SS 304 self tapping, SS 316 tapping screws, DIN 7981 stainless screws, ISO 7049 SS fasteners, Mumbai tapping screw manufacturer, UAE electronics fasteners, Saudi HVAC screws"
        category="Stainless Steel Screws"
        productName="Stainless Steel Self-Tapping Screws"
        specifications={["SS 304/316L", "M2.2 to M6.3", "A2 / A4", "Pointed/Blunt Point"]}
        canonicalUrl="/product/fasteners/ss-screws/self-tapping-screws"
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
                Precision <span className="text-gold-primary italic font-serif">Self-Tapping</span> <br/>
                Industrial Fasteners
              </h1>
              <p className="text-xl text-slate-400 mb-12 max-w-2xl font-light leading-relaxed">
                Advanced thread-forming geometry designed for reliable fastening in sheet metal, plastics, and non-ferrous materials without pre-tapped holes. Engineered for high vibration resistance and sterile environments.
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
                  <Settings className="mr-4 text-gold-primary w-8 h-8" /> Material Hardness Analysis
                </h2>
                <div className="overflow-hidden rounded-3xl border border-slate-100 shadow-sm">
                  <table className="w-full text-sm font-sans">
                    <thead className="bg-navy-primary text-white">
                      <tr>
                        <th className="px-6 py-5 text-left font-black uppercase tracking-widest text-[10px]">Material Class</th>
                        <th className="px-6 py-5 text-left font-black uppercase tracking-widest text-[10px]">Core Hardness</th>
                        <th className="px-6 py-5 text-left font-black uppercase tracking-widest text-[10px]">Optimized For</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50 italic">
                      {materialGrades.map((row, i) => (
                        <tr key={i} className="hover:bg-slate-50 transition-colors">
                          <td className="px-6 py-5 font-bold text-navy-primary">{row.grade}</td>
                          <td className="px-6 py-5 text-slate-600 font-mono">{row.hardness}</td>
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
                  <h3 className="text-2xl font-bold mb-8 relative z-10 font-sans">Target Industries</h3>
                  <div className="grid grid-cols-2 gap-4 relative z-10">
                    {[
                      "HVAC Ducts",
                      "Automotive Panels",
                      "Electronics Chassis",
                      "Electrical Switchgear",
                      "Appliances",
                      "Sterile partitions",
                      "Railway Interiors",
                      "Solar Panel Frames"
                    ].map((app, i) => (
                      <div key={i} className="flex items-center space-x-3 bg-white/5 p-4 rounded-2xl backdrop-blur-sm border border-white/5 hover:bg-white/10 transition-all font-sans">
                        <CheckCircle className="w-4 h-4 text-gold-primary" />
                        <span className="text-xs font-bold tracking-tight">{app}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-[#FDE047]/10 p-10 rounded-3xl border border-[#FDE047]/20 border-dashed">
                   <h4 className="text-navy-primary font-bold mb-4 flex items-center font-sans tracking-tight"><Award className="w-5 h-5 mr-2 text-gold-primary" /> Thread Formation Integrity</h4>
                   <p className="text-sm text-slate-600 leading-relaxed font-sans">Our self-tapping screws are cold-forged for enhanced structural density. Thread profiles are strictly checked against <strong>ISO 1478</strong> to ensure high torque-to-fail ratios in demanding assembly lines.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Market Reach */}
        <section className="py-24 bg-slate-50 overflow-hidden relative font-sans">
           <div className="container mx-auto px-4 text-center">
             <h2 className="text-4xl font-bold text-navy-primary mb-16 tracking-tight">Global Logistics Supply Hub</h2>
             <div className="grid md:grid-cols-4 gap-8 opacity-80">
               <div className="flex flex-col items-center">
                 <Anchor className="w-10 h-10 text-gold-primary mb-4" />
                 <h5 className="font-bold text-navy-primary uppercase text-[10px] tracking-widest mb-2">GCC REFINERIES</h5>
                 <p className="text-[10px] text-slate-500 uppercase font-black">High-volume supply to Kuwait & Qatar HVAC projects</p>
               </div>
               <div className="flex flex-col items-center">
                 <Shield className="w-10 h-10 text-gold-primary mb-4" />
                 <h5 className="font-bold text-navy-primary uppercase text-[10px] tracking-widest mb-2">GERMAN ENG</h5>
                 <p className="text-[10px] text-slate-500 uppercase font-black">Bulk exports to European appliance manufacturers</p>
               </div>
               <div className="flex flex-col items-center">
                 <Box className="w-10 h-10 text-gold-primary mb-4" />
                 <h5 className="font-bold text-navy-primary uppercase text-[10px] tracking-widest mb-2">US ELECTRONICS</h5>
                 <p className="text-[10px] text-slate-500 uppercase font-black">Supplying tech-corridors in Silicon Valley & Boston</p>
               </div>
               <div className="flex flex-col items-center">
                 <TrendingUp className="w-10 h-10 text-gold-primary mb-4" />
                 <h5 className="font-bold text-navy-primary uppercase text-[10px] tracking-widest mb-2">PAN-INDIA SUPPLY</h5>
                 <p className="text-[10px] text-slate-500 uppercase font-black">Domestic distribution to Ahmedabad & Chennai hubs</p>
               </div>
             </div>
           </div>
        </section>

        {/* Global CTA */}
        <section className="py-24 bg-navy-primary relative overflow-hidden font-sans">
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-10 tracking-tighter uppercase italic">Streamline Your Assembly</h2>
            <p className="text-xl text-blue-100/60 mb-14 max-w-2xl mx-auto font-light">Join global industrial leaders utilizing our precision-tapping stainless technology.</p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-12">
               <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-16 py-6 rounded-3xl font-black text-xl transition-all shadow-3xl hover:scale-110 flex items-center tracking-widest uppercase">
                  Request Volume Quote <ArrowRight className="ml-4 w-7 h-7" />
               </Link>
               <div className="text-left border-l border-white/20 pl-12 font-sans">
                 <p className="text-[10px] font-black text-gold-primary uppercase tracking-[0.4em] mb-2 font-sans">Global Sales Desk</p>
                 <a href="tel:+919819322576" className="text-3xl font-bold text-white font-sans">+91 9819322576</a>
               </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
