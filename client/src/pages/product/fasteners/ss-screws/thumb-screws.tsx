import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft, ArrowRight, CheckCircle, Shield, Zap, Info, TrendingUp, Award, Box, Key, Settings, Target, Anchor } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function ThumbScrewsDetail() {
  const technicalSpecs = [
    { property: "Standards", value: "DIN 464, DIN 653, ASME B18.6.9" },
    { property: "Size Range", value: "M4 to M12 | #8 to 1/2\"" },
    { property: "Material Grades", value: "SS 304, SS 316L, SS 316Ti, Duplex" },
    { property: "Head Types", value: "Knurled, Winged, Spade, Tee" }
  ];

  const materialGrades = [
    { grade: "SS 304 (A2)", minTensile: "700 MPa", hardness: "85 HRB max", application: "General Access Panels" },
    { grade: "SS 316L (A4)", minTensile: "800 MPa", hardness: "90 HRB max", application: "Food Processing Washdown" },
    { grade: "Duplex 2205", minTensile: "850 MPa", hardness: "32 HRC max", application: "Chemical Control Valves" },
    { grade: "Hastelloy C276", minTensile: "790 MPa", hardness: "100 HRB max", application: "Extreme Acid environments" }
  ];

  return (
    <>
      <ProductSEO
        title="SS Thumb Screws Manufacturer - Stainless Steel Knurled & Wing Screws | Global Supplier"
        description="Premium Stainless Steel Thumb Screws Manufacturer. High-quality knurled head screws in SS 304, 316L. Tool-free fastening for laboratory and food processing sectors. Supplying to GCC, Europe, USA, and Global industries."
        keywords="thumb screws stainless, knurled head screws SS, SS 316 thumb screws, SS 304 wing screws, tool-free stainless fasteners, Mumbai thumb screw manufacturer, UAE lab equipment screws, Saudi food processing fasteners, USA precision screws"
        category="Stainless Steel Screws"
        productName="Stainless Steel Thumb Screws"
        specifications={["SS 304/316L", "M4 to M12", "A2 / A4", "Knurled/Winged Head"]}
        canonicalUrl="/product/fasteners/ss-screws/thumb-screws"
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
                Tool-Free <span className="text-gold-primary italic font-serif">Thumb & Knurled</span> <br/>
                Stainless Fasteners
              </h1>
              <p className="text-xl text-slate-400 mb-12 max-w-2xl font-light leading-relaxed">
                Ergonomically designed for rapid manual adjustment and tool-free operation. Engineered from high-purity stainless steel for sterile environments, laboratory instrumentation, and frequent-access assemblies.
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
                  <Settings className="mr-4 text-gold-primary w-8 h-8" /> Material Application Matrix
                </h2>
                <div className="overflow-hidden rounded-3xl border border-slate-100 shadow-sm">
                  <table className="w-full text-sm font-sans">
                    <thead className="bg-navy-primary text-white">
                      <tr>
                        <th className="px-6 py-5 text-left font-black uppercase tracking-widest text-[10px]">Alloy Grade</th>
                        <th className="px-6 py-5 text-left font-black uppercase tracking-widest text-[10px]">Material Type</th>
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
                  <h3 className="text-2xl font-bold mb-8 relative z-10 font-sans">Strategic Applications</h3>
                  <div className="grid grid-cols-2 gap-4 relative z-10">
                    {[
                      "Laboratory Equipment",
                      "Food Processing Line",
                      "Medical Casework",
                      "Adjustable Brackets",
                      "Stage Lighting",
                      "Electronics Chassis",
                      "Sterile Access Panels",
                      "Calibration Tools"
                    ].map((app, i) => (
                      <div key={i} className="flex items-center space-x-3 bg-white/5 p-4 rounded-2xl backdrop-blur-sm border border-white/5 hover:bg-white/10 transition-all font-sans">
                        <CheckCircle className="w-4 h-4 text-gold-primary" />
                        <span className="text-xs font-bold tracking-tight">{app}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-[#FDE047]/10 p-10 rounded-3xl border border-[#FDE047]/20 border-dashed">
                   <h4 className="text-navy-primary font-bold mb-4 flex items-center font-sans tracking-tight"><Award className="w-5 h-5 mr-2 text-gold-primary" /> Ergonomic Quality Control</h4>
                   <p className="text-sm text-slate-600 leading-relaxed font-sans">Our knurled head screws feature high-friction patterns for secure hand-tightening even in oily or sterile environments. Produced under <strong>DIN 464</strong> standards to ensure concentricity and smooth thread movement.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Market Analysis */}
        <section className="py-24 bg-slate-50 overflow-hidden relative font-sans">
           <div className="container mx-auto px-4 text-center">
             <h2 className="text-4xl font-bold text-navy-primary mb-16 tracking-tight">Global Logistics Supply Matrix</h2>
             <div className="grid md:grid-cols-4 gap-8 opacity-80">
               <div className="flex flex-col items-center">
                 <Anchor className="w-10 h-10 text-gold-primary mb-4" />
                 <h5 className="font-bold text-navy-primary uppercase text-[10px] tracking-widest mb-2">GCC HOSPITALS</h5>
                 <p className="text-[10px] text-slate-500 uppercase font-black">Contract supply to medical facilities in Riyadh & Dubai</p>
               </div>
               <div className="flex flex-col items-center">
                 <Shield className="w-10 h-10 text-gold-primary mb-4" />
                 <h5 className="font-bold text-navy-primary uppercase text-[10px] tracking-widest mb-2">EU PHARMA</h5>
                 <p className="text-[10px] text-slate-500 uppercase font-black">Supplying sterile-grade fasteners to Switzerland & Germany</p>
               </div>
               <div className="flex flex-col items-center">
                 <Box className="w-10 h-10 text-gold-primary mb-4" />
                 <h5 className="font-bold text-navy-primary uppercase text-[10px] tracking-widest mb-2">USA LABS</h5>
                 <p className="text-[10px] text-slate-500 uppercase font-black">Supplying precision engineering labs in Boston & San Diego</p>
               </div>
               <div className="flex flex-col items-center">
                 <TrendingUp className="w-10 h-10 text-gold-primary mb-4" />
                 <h5 className="font-bold text-navy-primary uppercase text-[10px] tracking-widest mb-2">INDIAN MED-TECH</h5>
                 <p className="text-[10px] text-slate-500 uppercase font-black">Direct supply to pharmaceutical hubs in Hyderabad & Mumbai</p>
               </div>
             </div>
           </div>
        </section>

        {/* Global CTA */}
        <section className="py-24 bg-navy-primary relative overflow-hidden font-sans">
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-10 tracking-tighter uppercase italic">Manual Precision Control</h2>
            <p className="text-xl text-blue-100/60 mb-14 max-w-2xl mx-auto font-light">The global standard for professional-grade thumb screws in high-purity industrial sectors.</p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-12">
               <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-16 py-6 rounded-3xl font-black text-xl transition-all shadow-3xl hover:scale-110 flex items-center tracking-widest uppercase">
                  Request Detail Quote <ArrowRight className="ml-4 w-7 h-7" />
               </Link>
               <div className="text-left border-l border-white/20 pl-12 font-sans">
                 <p className="text-[10px] font-black text-gold-primary uppercase tracking-[0.4em] mb-2 font-sans">Instrumentation Liaison</p>
                 <a href="tel:+919819322576" className="text-3xl font-bold text-white font-sans">+91 9819322576</a>
               </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
