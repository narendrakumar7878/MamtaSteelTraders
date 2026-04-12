import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft as ArrowLeftIcon, ArrowRight as ArrowRightIcon, CheckCircle as CheckCircleIcon, Shield as ShieldIcon, Zap as ZapIcon, Info as InfoIcon, TrendingUp as TrendingUpIcon, Award as AwardIcon, Download as DownloadIcon, Box as BoxIcon, Key as KeyIcon, Settings as SettingsIcon, Target as TargetIcon, Anchor as AnchorIcon, Globe as GlobeIcon, Gauge as GaugeIcon } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function ERCuAlA1AluminumBronzeDetail() {
  const technicalSpecs = [
    { property: "AWS Classification", value: "ERCuAl-A1 (AWS A5.7)" },
    { property: "UNS Number", value: "C61000" },
    { property: "Solidus Temperature", value: "1040°C" },
    { property: "Liquidus Temperature", value: "1050°C" },
    { property: "Electrical Conductivity", value: "15% IACS" },
    { property: "Brinell Hardness", value: "100 HB (as welded)" }
  ];

  const chemicalComp = [
    { element: "Aluminum (Al)", ercual: "6.0 - 8.5%" },
    { element: "Iron (Fe)", ercual: "1.5% max" },
    { element: "Copper (Cu)", ercual: "Remainder" },
    { element: "Silicon (Si)", ercual: "0.10% max" },
    { element: "Phosphorus (P)", ercual: "0.01% max" },
    { element: "Zinc (Zn)", ercual: "0.10% max" }
  ];

  const mechProperties = [
    { property: "Tensile Strength", value: "480 - 550 MPa" },
    { property: "Yield Strength (0.2%)", value: "240 - 280 MPa" },
    { property: "Elongation (4d)", value: "35 - 45%" },
    { property: "Corrosion Resistance", value: "Excellent (Saltwater/Marine)" }
  ];

  return (
    <>
      <ProductSEO
        title="ERCuAl-A1 Aluminum Bronze Wire Manufacturer - High-Strength Marine C61000 Filler Rods"
        description="Premium ERCuAl-A1 aluminum bronze welding wire manufacturer. High-strength, corrosion-resistant AWS A5.7 filler rods (C61000). Ideal for marine hardware, propeller shafts, and saltwater exposure."
        keywords="ERCuAl-A1 aluminum bronze wire, C61000 welding filler, aluminum bronze tig rod, marine hardware welding wire, propeller shaft repair wire, AWS A5.7 ERCuAl-A1, Mumbai bronze wire supplier"
        category="Welding Electrodes"
        productName="ERCuAl-A1 Aluminum Bronze Wire"
        specifications={[
          "AWS Class: ERCuAl-A1",
          "Alloy Type: C61000 Copper-Aluminum",
          "Applications: Marine Hardware, Pump Parts, Valve Components",
          "Process: TIG & MIG welding"
        ]}
        canonicalUrl="/product/welding-electrodes/aluminium-wire/ercual-a1-aluminum-bronze"
      />

      <div className="min-h-screen bg-white font-sans text-navy-primary">
        {/* Detail Hero Section */}
        <section className="relative pt-24 pb-20 bg-navy-primary text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl">
              <nav className="flex items-center space-x-2 text-sm text-blue-100/40 mb-10 font-black uppercase tracking-[0.25em]">
                <Link href="/" className="hover:text-gold-primary transition-colors">Home</Link>
                <ArrowRightIcon className="w-3 h-3 text-blue-100/20" />
                <Link href="/product/welding-electrodes/aluminiumwire" className="hover:text-gold-primary transition-colors">Aluminium Wire</Link>
              </nav>

              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-5xl font-black mb-8 leading-[0.9] tracking-tighter uppercase"
              >
                ERCuAl-A1 <br />
                <span className="text-gold-primary text-2xl md:text-3xl font-serif italic lowercase font-light tracking-normal">Technical C61000 Aluminum Bronze Filler metal</span>
              </motion.h1>

              <p className="text-xl text-blue-100/70 mb-10 leading-relaxed max-w-2xl font-light italic">
                Strategically engineered for high-integrity marine and sea-water hardware. 
                Our A1 grade aluminum bronze wire provides an exceptional balance of mechanical strength and electrolytic corrosion resistance.
              </p>

              <div className="flex flex-wrap gap-6 mt-12">
                <button className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-10 py-5 rounded-md font-black uppercase text-[11px] tracking-widest transition-all flex items-center shadow-2xl shadow-gold-primary/30">
                  Engineering Data Sheet <DownloadIcon className="ml-3 w-4 h-4" />
                </button>
                <Link href="/contact" className="border-2 border-white/10 hover:border-white/40 text-white px-10 py-5 rounded-md font-bold transition-all backdrop-blur-md uppercase text-[11px] tracking-widest">
                  Bulk Inquiry
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specification Grid */}
        <section className="py-24 bg-gray-50 border-b border-gray-200">
          <div className="container mx-auto px-4">
             <div className="grid lg:grid-cols-2 gap-16 items-start">
                <div className="bg-white p-12 rounded-3xl shadow-xl border-t-[10px] border-gold-primary">
                   <h2 className="text-2xl font-black text-navy-primary mb-12 flex items-center uppercase tracking-tighter">
                      <SettingsIcon className="mr-4 text-gold-primary w-8 h-8" /> MATERIAL STANDARDS
                   </h2>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      {technicalSpecs.map((spec, i) => (
                        <div key={i} className="group border-b border-gray-50 pb-4 last:border-0 hover:border-gold-primary transition-colors">
                           <span className="text-gray-400 font-bold uppercase text-[9px] tracking-[0.2em] block mb-2">{spec.property}</span>
                           <span className="text-navy-primary font-black text-sm tracking-tight">{spec.value}</span>
                        </div>
                      ))}
                   </div>
                </div>

                <div className="bg-white p-12 rounded-3xl shadow-xl border-t-[10px] border-navy-primary relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 transform rotate-12 opacity-5">
                       <ZapIcon className="w-32 h-32" />
                    </div>
                    <h2 className="text-2xl font-black text-navy-primary mb-12 flex items-center uppercase tracking-tighter">
                       <ShieldIcon className="mr-4 text-gold-primary w-8 h-8" /> Chemical Matrix Analysis
                    </h2>
                    <div className="overflow-x-auto">
                       <table className="w-full text-left">
                          <thead>
                             <tr className="bg-navy-primary text-white text-[10px] uppercase tracking-[0.25em] font-black">
                                <th className="p-5 border-r border-white/10">Element</th>
                                <th className="p-5 text-center text-gold-primary">ERCuAl-A1 Standards</th>
                             </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-100 text-[13px] font-bold text-gray-700">
                             {chemicalComp.map((row, i) => (
                               <tr key={i} className="hover:bg-blue-50/30 transition-all group">
                                  <td className="p-5 text-navy-primary font-black uppercase italic bg-gray-50/50">{row.element}</td>
                                  <td className="p-5 text-center group-hover:text-gold-primary">{row.ercual}</td>
                               </tr>
                             ))}
                          </tbody>
                       </table>
                    </div>
                </div>
             </div>
          </div>
        </section>

        {/* Technical Showcase Section */}
        <section className="py-24 bg-white overflow-hidden text-navy-primary">
           <div className="container mx-auto px-4 max-w-6xl">
              <div className="flex flex-col md:flex-row items-center gap-24">
                 <div className="flex-1 space-y-12">
                    <h2 className="text-4xl font-black tracking-tighter uppercase leading-[0.85]">Marine Material Science & <br /><span className="text-gold-primary">Electrolytic Resistance</span></h2>
                    <p className="text-gray-600 text-xl font-light leading-relaxed border-l-8 border-gold-primary pl-10 italic">
                       "Manufactured for specialized C61000 grade applications, ERCuAl-A1 is the technical benchmark for resurfacing components subjected to intense cavitation and electrolytic seawater corrosion. Its high aluminum content provides a protective oxide layer that regenerates instantly."
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                       {[
                         { title: "Cavitation Shield", desc: "Deflects energetic bubble collapse in high-velocity pump impellers." },
                         { title: "Erosion Control", desc: "Exceptional resistance to sand and silt erosion in coastal waters." },
                         { title: "Hardness Profile", desc: "Maintains 100 HB (as welded) for superior mechanical support." },
                         { title: "MTC Traceability", desc: "Full chemical and mechanical heat tracking available for every spool." }
                       ].map((item, i) => (
                         <div key={i} className="bg-gray-50 p-6 rounded-2xl border-b-4 border-navy-primary hover:border-gold-primary transition-all">
                            <h3 className="text-navy-primary font-black text-xs uppercase tracking-widest mb-1">{item.title}</h3>
                            <p className="text-gray-500 text-[10px] uppercase font-bold leading-tight">{item.desc}</p>
                         </div>
                       ))}
                    </div>
                 </div>
                 <div className="flex-1 space-y-12">
                    <h2 className="text-4xl font-black text-navy-primary tracking-tighter uppercase leading-none italic text-gold-primary">Structural Analytics</h2>
                    <div className="space-y-6">
                       {mechProperties.map((prop, i) => (
                         <div key={i} className="flex flex-col border-b border-gray-100 pb-2">
                            <span className="text-gray-400 font-black uppercase text-[9px] tracking-widest">{prop.property}</span>
                            <span className="text-navy-primary font-black text-2xl tracking-tighter uppercase">{prop.value}</span>
                         </div>
                       ))}
                    </div>
                    <div className="p-8 bg-blue-50/30 rounded-3xl border-r-8 border-gold-primary italic text-navy-primary font-light text-lg font-serif">
                       "ERCuAl-A1 remains the premier choice for offshore infrastructure and maritime technical maintenance, providing the critical metallurgical bond required for safe salt-water operation."
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Global Logistics Section */}
        <section className="py-24 bg-navy-primary text-white relative">
           <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-5xl font-black text-gold-primary font-serif italic mb-12 opacity-90">B2B Global Supply Command</h2>
              <p className="max-w-4xl mx-auto text-blue-100/60 font-light text-xl leading-relaxed mb-16 italic font-sans uppercase tracking-widest opacity-80">
                Direct export ex-Mumbai facility. Supplying critical marine-grade bronze filler metals to the **Dover Shipyards (UK)**, 
                **Middle East Maritime Hubs (Jebel Ali/Dammam)**, and **US Gulf Coast Infrastructure**. 
                100% PMI tested with vacuum-grade export packing for zero-oxidation arrivals.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12 opacity-40 hover:opacity-100 transition-opacity duration-1000">
                 <div className="flex flex-col items-center"><AwardIcon className="w-14 h-14 mb-4 text-gold-primary" /><span className="text-[10px] font-black uppercase tracking-widest">AWS A5.7 COMPLIANT</span></div>
                 <div className="flex flex-col items-center"><GlobeIcon className="w-14 h-14 mb-4 text-gold-primary" /><span className="text-[10px] font-black uppercase tracking-widest">GLOBAL EXPORT</span></div>
                 <div className="flex flex-col items-center"><ShieldIcon className="w-14 h-14 mb-4 text-gold-primary" /><span className="text-[10px] font-black uppercase tracking-widest">LOYDS REGISTERED</span></div>
                 <div className="flex flex-col items-center"><BoxIcon className="w-14 h-14 mb-4 text-gold-primary" /><span className="text-[10px] font-black uppercase tracking-widest">SEAWORTHY PACK</span></div>
              </div>
           </div>
        </section>
      </div>
    </>
  );
}
