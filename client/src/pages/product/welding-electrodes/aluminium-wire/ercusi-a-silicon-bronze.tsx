import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft as ArrowLeftIcon, ArrowRight as ArrowRightIcon, CheckCircle as CheckCircleIcon, Shield as ShieldIcon, Zap as ZapIcon, Info as InfoIcon, TrendingUp as TrendingUpIcon, Award as AwardIcon, Download as DownloadIcon, Box as BoxIcon, Key as KeyIcon, Settings as SettingsIcon, Target as TargetIcon, Anchor as AnchorIcon, Globe as GlobeIcon, Gauge as GaugeIcon } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function ERCuSiASiliconBronzeDetail() {
  const technicalSpecs = [
    { property: "AWS Classification", value: "ERCuSi-A (AWS A5.7)" },
    { property: "Solidus Temperature", value: "910°C" },
    { property: "Liquidus Temperature", value: "1025°C" },
    { property: "Electrical Conductivity", value: "7% IACS" },
    { property: "Density", value: "8.5 g/cm³" },
    { property: "Brinell Hardness", value: "80 - 100 HB" }
  ];

  const chemicalComp = [
    { element: "Silicon (Si)", ercusi: "2.8 - 4.0%" },
    { element: "Manganese (Mn)", ercusi: "1.5% max" },
    { element: "Copper (Cu)", ercusi: "Remainder" },
    { element: "Zinc (Zn)", ercusi: "1.0% max" },
    { element: "Tin (Sn)", ercusi: "1.0% max" },
    { element: "Lead (Pb)", ercusi: "0.02% max" },
    { element: "Iron (Fe)", ercusi: "0.50% max" }
  ];

  const mechProperties = [
    { property: "Tensile Strength", value: "350 - 390 MPa" },
    { property: "Yield Strength (0.2%)", value: "140 - 160 MPa" },
    { property: "Elongation (4d)", value: "30 - 45%" },
    { property: "Weldability", value: "Excellent fluidity, Low fuming" }
  ];

  return (
    <>
      <ProductSEO
        title="ERCuSi-A Silicon Bronze Wire Manufacturer - High-Fluidity C65600 Brazing Rods"
        description="Premium ERCuSi-A silicon bronze welding wire manufacturer. High-fluidity AWS A5.7 filler metal for technical brazing and joining. Ideal for sheet metal work, HVAC, and artistic applications."
        keywords="ERCuSi-A silicon bronze wire, silicon bronze welding rod, C65600 filler metal, HVAC brazing wire, sheet metal welding wire, AWS A5.7 ERCuSi-A, Mumbai silicon bronze supplier"
        category="Welding Electrodes"
        productName="ERCuSi-A Silicon Bronze Wire"
        specifications={[
          "AWS Class: ERCuSi-A",
          "Alloy Type: Copper-Silicon",
          "Applications: HVAC, Sheet Metal, Artistic Fabrication",
          "Process: TIG & MIG welding"
        ]}
        canonicalUrl="/product/welding-electrodes/aluminium-wire/ercusi-a-silicon-bronze"
      />

      <div className="min-h-screen bg-white font-sans text-navy-primary">
        {/* Detail Hero Section */}
        <section className="relative pt-24 pb-20 bg-navy-primary text-white overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-primary filter blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2 opacity-15"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl">
              <nav className="flex items-center space-x-2 text-sm text-blue-100/40 mb-10 font-black uppercase tracking-[0.2em]">
                <Link href="/" className="hover:text-gold-primary transition-colors">Home</Link>
                <ArrowRightIcon className="w-3 h-3 text-blue-100/20" />
                <Link href="/product/welding-electrodes/aluminiumwire" className="hover:text-gold-primary transition-colors">Aluminium Wire</Link>
              </nav>

              <motion.h1 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-4xl md:text-5xl font-black mb-8 leading-none tracking-tighter uppercase"
              >
                ERCuSi-A <br />
                <span className="text-gold-primary text-2xl md:text-3xl font-serif italic lowercase font-light tracking-wide uppercase">Silicon Bronze Joining & Brazing specialist filler</span>
              </motion.h1>

              <p className="text-xl text-blue-100/70 mb-10 leading-relaxed max-w-2xl font-light italic border-l-4 border-gold-primary pl-10">
                The premier industrial filler for silicon-bronze joining. Engineered with 3% silicon, ERCuSi-A offers 
                unparalleled fluidity and a beautiful aesthetic finish for HVAC, sheet metal, and high-end architectural projects.
              </p>

              <div className="flex flex-wrap gap-6 mt-12">
                <button className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-10 py-5 rounded-md font-black uppercase text-[11px] tracking-[0.2em] transition-all flex items-center shadow-2xl shadow-gold-primary/30">
                  Engineering Manual <DownloadIcon className="ml-3 w-4 h-4" />
                </button>
                <Link href="/contact" className="border-2 border-white/10 hover:border-white/40 text-white px-10 py-5 rounded-md font-bold transition-all backdrop-blur-md uppercase text-[11px] tracking-[0.2em]">
                  Bulk Order Inquiry
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Data Section */}
        <section className="py-24 bg-gray-50 border-b border-gray-200">
          <div className="container mx-auto px-4">
             <div className="grid lg:grid-cols-2 gap-16 items-start">
                <div className="bg-white p-12 rounded-3xl shadow-xl border-t-[12px] border-gold-primary">
                   <h2 className="text-2xl font-black text-navy-primary mb-12 flex items-center uppercase tracking-tighter">
                      <SettingsIcon className="mr-4 text-gold-primary w-8 h-8" /> BRAZING STANDARDS
                   </h2>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      {technicalSpecs.map((spec, i) => (
                        <div key={i} className="group border-b border-gray-50 pb-5 last:border-0 hover:border-gold-primary transition-colors">
                           <span className="text-gray-400 font-bold uppercase text-[9px] tracking-[0.3em] block mb-2">{spec.property}</span>
                           <span className="text-navy-primary font-black text-sm tracking-tight">{spec.value}</span>
                        </div>
                      ))}
                   </div>
                </div>

                <div className="bg-white p-12 rounded-3xl shadow-xl border-t-[12px] border-navy-primary overflow-hidden relative">
                    <div className="absolute top-0 right-0 p-10 transform -rotate-12 opacity-5">
                       <ZapIcon className="w-40 h-40 text-navy-primary" />
                    </div>
                    <h2 className="text-2xl font-black text-navy-primary mb-12 flex items-center uppercase tracking-tighter">
                       <ShieldIcon className="mr-4 text-gold-primary w-8 h-8" /> Analysis Matrix
                    </h2>
                    <div className="overflow-x-auto relative z-10">
                       <table className="w-full text-left font-sans">
                          <thead>
                             <tr className="bg-navy-primary text-white text-[10px] uppercase tracking-widest font-black">
                                <th className="p-5 border-r border-white/10">Element</th>
                                <th className="p-5 text-center text-gold-primary">ERCuSi-A 기준</th>
                             </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-100 text-[13px] font-bold text-gray-700">
                             {chemicalComp.map((row, i) => (
                               <tr key={i} className="hover:bg-blue-50/40 transition-all group">
                                  <td className="p-5 text-navy-primary bg-gray-50/50 uppercase italic font-black">{row.element}</td>
                                  <td className="p-5 text-center border-l border-gray-50 group-hover:text-gold-primary">{row.ercusi}</td>
                               </tr>
                             ))}
                          </tbody>
                       </table>
                    </div>
                </div>
             </div>
          </div>
        </section>

        {/* Enhanced Technical Highlight Section */}
        <section className="py-24 bg-white overflow-hidden text-navy-primary">
           <div className="container mx-auto px-4 max-w-6xl">
              <div className="flex flex-col md:flex-row items-center gap-24">
                 <div className="flex-1 space-y-12">
                    <h2 className="text-4xl font-black text-navy-primary uppercase leading-tight tracking-tighter">Precision Fluidity & <br /><span className="text-gold-primary">Structural Brazing Analytics</span></h2>
                    <p className="text-gray-600 text-xl font-light leading-relaxed border-l-8 border-gold-primary pl-10 italic">
                       "ERCuSi-A (C65600) is the industry benchmark for high-performance joining. Formulated with 3% silicon, it provides unparalleled fluidity and low fuming characteristics, making it the preferred choice for technical sheet metal work, HVAC infrastructure, and high-end architectural bronze fabrication."
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 text-[10px] font-black uppercase tracking-widest">
                       {[
                         { title: "Low Fuming Technology", desc: "Optimised composition for safer, cleaner welding environments." },
                         { title: "Aesthetic Tie-ins", desc: "Superior bead appearance for visible architectural joining." },
                         { title: "Thermal Duty", desc: "Excellent performance in high-efficiency heat exchanger units." },
                         { title: "Galvanized Utility", desc: "Best-in-class performance for welding galvanized sheet steels." }
                       ].map((item, i) => (
                         <div key={i} className="flex items-start space-x-4 p-5 bg-gray-50 rounded-xl border-l-4 border-navy-primary hover:border-gold-primary transition-all">
                            <div>
                               <h3 className="text-navy-primary mb-1">{item.title}</h3>
                               <p className="text-gray-400 font-bold leading-tight">{item.desc}</p>
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>
                 <div className="flex-1 space-y-12">
                    <h2 className="text-4xl font-black text-navy-primary tracking-tighter uppercase leading-none italic text-gold-primary">Mechanical Benchmark</h2>
                    <div className="space-y-6">
                       {mechProperties.map((prop, i) => (
                         <div key={i} className="flex flex-col border-b border-gray-100 pb-3 hover:border-navy-primary transition-colors">
                            <span className="text-gray-400 font-black uppercase text-[9px] tracking-widest">{prop.property}</span>
                            <span className="text-navy-primary font-black text-2xl tracking-tighter uppercase mt-1">{prop.value}</span>
                         </div>
                       ))}
                    </div>
                    <div className="p-8 bg-blue-50/40 rounded-[2rem] border-r-[10px] border-gold-primary italic text-navy-primary font-light text-xl font-serif">
                       "Manufactured with precision-shaved surfaces, ERCuSi-A ensures reliable feeding in automated MIG processes and zero contamination in high-purity TIG joining applications."
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Global Hub Section */}
        <section className="py-24 bg-navy-primary text-white relative">
           <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-5xl font-black text-gold-primary uppercase italic mb-12 tracking-widest italic font-serif">Commanding Global Fabrication supply</h2>
              <p className="max-w-4xl mx-auto text-blue-100/60 font-light text-xl leading-relaxed mb-16 italic font-sans uppercase tracking-[0.2em] opacity-90 underline decoration-gold-primary/30 underline-offset-[12px]">
                Master manufacturer and technical exporter ex-Mumbai, India. Supplying premium silicon bronze filler metals to **European Architectural Firms**, 
                **Middle East HVAC Infrastructure**, and **American sheet metal sectors**. 
                AWS A5.7 precision certified with vacuum-grade export packing for moisture-zero arrivals.
              </p>
              <div className="flex flex-wrap justify-center gap-20 opacity-30 hover:opacity-100 transition-opacity duration-1000 grayscale group hover:grayscale-0">
                 <div className="flex flex-col items-center"><AwardIcon className="w-16 h-16 mb-4 text-gold-primary" /><span className="text-[11px] font-black uppercase tracking-widest">AWS A5.7 RATED</span></div>
                 <div className="flex flex-col items-center"><GlobeIcon className="w-16 h-16 mb-4 text-gold-primary" /><span className="text-[11px] font-black uppercase tracking-widest">WORLDWIDE EXPORT</span></div>
                 <div className="flex flex-col items-center"><ShieldIcon className="w-16 h-16 mb-4 text-gold-primary" /><span className="text-[11px] font-black uppercase tracking-widest">MTC EN 10204 3.1</span></div>
              </div>
           </div>
        </section>
      </div>
    </>
  );
}
