import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft as ArrowLeftIcon, ArrowRight as ArrowRightIcon, CheckCircle as CheckCircleIcon, Shield as ShieldIcon, Zap as ZapIcon, Info as InfoIcon, TrendingUp as TrendingUpIcon, Award as AwardIcon, Download as DownloadIcon, Box as BoxIcon, Key as KeyIcon, Settings as SettingsIcon, Target as TargetIcon, Anchor as AnchorIcon, Globe as GlobeIcon, Gauge as GaugeIcon } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function ERCuAlA3AluminumBronzeDetail() {
  const technicalSpecs = [
    { property: "AWS Classification", value: "ERCuAl-A3 (AWS A5.7)" },
    { property: "UNS Number", value: "C62400" },
    { property: "Solidus Temperature", value: "1015°C" },
    { property: "Liquidus Temperature", value: "1035°C" },
    { property: "Density", value: "7.7 g/cm³" },
    { property: "Brinell Hardness", value: "180 - 200 HB" }
  ];

  const chemicalComp = [
    { element: "Aluminum (Al)", ercual: "10.0 - 11.5%" },
    { element: "Iron (Fe)", ercual: "3.5 - 4.5%" },
    { element: "Copper (Cu)", ercual: "Remainder" },
    { element: "Manganese (Mn)", ercual: "1.50% max" },
    { element: "Zinc (Zn)", ercual: "0.02% max" },
    { element: "Silicon (Si)", ercual: "0.10% max" }
  ];

  const mechProperties = [
    { property: "Tensile Strength", value: "620 - 720 MPa" },
    { property: "Yield Strength (0.2%)", value: "340 - 410 MPa" },
    { property: "Elongation (4d)", value: "15 - 25%" },
    { property: "Fatigue Resistance", value: "Exceptional (High Stress cycles)" }
  ];

  return (
    <>
      <ProductSEO
        title="ERCuAl-A3 Aluminum Bronze Wire Manufacturer - Premium C62400 Aerospace & Marine Rods"
        description="Leading ERCuAl-A3 aluminum bronze welding wire manufacturer. Maximum strength C62400 filler metal with superior fatigue resistance. Built for aerospace components, high-stress maritime equipment, and critical machinery."
        keywords="ERCuAl-A3 aluminum bronze wire, C62400 welding filler, aerospace bronze wire, high stress welding filler, premium aluminum bronze, AWS A5.7 ERCuAl-A3, Mumbai master supplier"
        category="Welding Electrodes"
        productName="ERCuAl-A3 Aluminum Bronze Wire"
        specifications={[
          "AWS Class: ERCuAl-A3",
          "Alloy Type: C62400 High-Aluminum Bronze",
          "Applications: Aerospace, High-Stress Marine, Critical Machinery",
          "Process: TIG & MIG welding"
        ]}
        canonicalUrl="/product/welding-electrodes/aluminium-wire/ercual-a3-aluminum-bronze"
      />

      <div className="min-h-screen bg-white text-navy-primary font-sans">
        {/* Luxury Hero Section */}
        <section className="relative pt-24 pb-20 bg-navy-primary text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold-primary filter blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl">
              <nav className="flex items-center space-x-2 text-sm text-blue-100/40 mb-10 font-black uppercase tracking-[0.3em]">
                <Link href="/" className="hover:text-gold-primary transition-colors">Home</Link>
                <ArrowRightIcon className="w-3 h-3 text-blue-100/20" />
                <Link href="/product/welding-electrodes/aluminiumwire" className="hover:text-gold-primary transition-colors">Aluminium Wire</Link>
              </nav>

              <motion.h1 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-4xl md:text-6xl font-black mb-8 leading-none tracking-tighter uppercase"
              >
                ERCuAl-A3 <br />
                <span className="text-gold-primary text-2xl md:text-4xl font-serif italic lowercase font-light tracking-wide uppercase">Elite C62400 High-Impact bronze filler</span>
              </motion.h1>

              <p className="text-xl text-blue-100/70 mb-10 leading-relaxed max-w-2xl font-light italic border-l-4 border-gold-primary pl-8">
                The pinnacle of aluminum bronze performance. Engineered with over 10% aluminum content, our A3 grade 
                provides the maximum tensile strength and fatigue resistance required for mission-critical aerospace and offshore components.
              </p>

              <div className="flex flex-wrap gap-6 mt-12">
                <button className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-10 py-5 rounded-lg font-black uppercase text-[12px] tracking-[0.25em] transition-all flex items-center shadow-2xl shadow-gold-primary/40 transform hover:-translate-y-1">
                  Technical Spec Manual <DownloadIcon className="ml-3 w-4 h-4" />
                </button>
                <Link href="/contact" className="border-2 border-white/20 hover:border-white/50 text-white px-10 py-5 rounded-lg font-bold transition-all backdrop-blur-md uppercase text-[12px] tracking-[0.25em]">
                  Consult an Engineer
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Data Section */}
        <section className="py-24 bg-gray-50 border-b border-gray-200">
          <div className="container mx-auto px-4">
             <div className="grid lg:grid-cols-2 gap-16 items-start">
                <div className="bg-white p-12 rounded-[3.5rem] shadow-2xl border-t-[15px] border-gold-primary">
                   <h2 className="text-3xl font-black text-navy-primary mb-12 flex items-center uppercase tracking-tighter leading-none">
                      <SettingsIcon className="mr-5 text-gold-primary w-10 h-10" /> Engineering bench
                   </h2>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      {technicalSpecs.map((spec, i) => (
                        <div key={i} className="group border-b border-gray-100 pb-5 last:border-0 hover:border-gold-primary transition-colors">
                           <span className="text-gray-400 font-bold uppercase text-[9px] tracking-[0.4em] block mb-2">{spec.property}</span>
                           <span className="text-navy-primary font-black text-sm tracking-tight">{spec.value}</span>
                        </div>
                      ))}
                   </div>
                </div>

                <div className="bg-white p-12 rounded-[3.5rem] shadow-2xl border-t-[15px] border-navy-primary overflow-hidden relative">
                    <div className="absolute top-0 right-0 p-10 transform rotate-45 opacity-5">
                       <ZapIcon className="w-48 h-48 text-navy-primary" />
                    </div>
                    <h2 className="text-3xl font-black text-navy-primary mb-12 flex items-center uppercase tracking-tighter leading-none">
                       <ShieldIcon className="mr-5 text-gold-primary w-10 h-10" /> Alloy Purity Matrix
                    </h2>
                    <div className="overflow-x-auto relative z-10">
                       <table className="w-full text-left font-sans">
                          <thead>
                             <tr className="bg-navy-primary text-white text-[10px] uppercase tracking-[0.3em] font-black">
                                <th className="p-6 border-r border-white/10">Element</th>
                                <th className="p-6 text-center text-gold-primary">ERCuAl-A3 기준</th>
                             </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-100 text-[14px] font-bold text-gray-700">
                             {chemicalComp.map((row, i) => (
                               <tr key={i} className="hover:bg-blue-50/50 transition-all group">
                                  <td className="p-6 text-navy-primary bg-gray-50/50 uppercase italic font-black">{row.element}</td>
                                  <td className="p-6 text-center border-l border-gray-50 group-hover:text-gold-primary">{row.ercual}</td>
                               </tr>
                             ))}
                          </tbody>
                       </table>
                    </div>
                </div>
             </div>
          </div>
        </section>

        {/* Technical Data Section */}
        <section className="py-24 bg-white overflow-hidden text-navy-primary">
           <div className="container mx-auto px-4 max-w-6xl relative z-10">
              <div className="flex flex-col md:flex-row items-center gap-24">
                 <div className="flex-1 space-y-12">
                    <h2 className="text-5xl font-black text-navy-primary uppercase leading-[0.85] tracking-tighter italic">Mission-Critical <br />Fatigue Resistance. <br /><span className="text-gold-primary not-italic">720+ MPa Peak Strength.</span></h2>
                    <p className="text-gray-600 text-2xl font-light leading-relaxed border-l-[10px] border-navy-primary pl-12 italic">
                       "ERCuAl-A3 (C62400) represents the upper echelon of aluminum bronze technology. Formulated with a specialized iron-nickel-aluminum matrix, it provides the maximum fatigue resistance and hardness required for high-stress aerospace landing gear and offshore propulsion liners."
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                       {[
                         { title: "Aerospace Spec", desc: "Meets critical structural criteria for aerospace bushings and gears." },
                         { title: "Fatigue Life", desc: "Designed to endure millions of high-stress mechanical cycles." },
                         { title: "Impact Toughness", desc: "Exceptional energy absorption for high-collision industrial apps." },
                         { title: "Extreme Hardness", desc: "Maintains 200 HB (Brinell) for superior wear protection." }
                       ].map((item, i) => (
                         <div key={i} className="flex flex-col border-b border-gray-100 pb-3 hover:border-gold-primary transition-colors">
                            <span className="text-gold-primary font-black uppercase text-[9px] tracking-[0.2em] mb-1">{item.title}</span>
                            <span className="text-navy-primary font-bold text-[11px] leading-tight uppercase">{item.desc}</span>
                         </div>
                       ))}
                    </div>
                 </div>
                 <div className="flex-1 space-y-12">
                    <h2 className="text-4xl font-black text-navy-primary tracking-tighter uppercase leading-none italic text-gold-primary">Mechanical Benchmarks</h2>
                    <div className="space-y-6">
                       {mechProperties.map((prop, i) => (
                         <div key={i} className="flex flex-col border-b border-gray-100 pb-3 hover:border-navy-primary transition-colors group">
                            <span className="text-gray-400 font-black uppercase text-[9px] tracking-[0.2em] group-hover:text-gold-primary">{prop.property}</span>
                            <span className="text-navy-primary font-black text-2xl tracking-tighter uppercase leading-none mt-1">{prop.value}</span>
                         </div>
                       ))}
                    </div>
                    <div className="p-8 bg-blue-50/30 rounded-[2.5rem] border-r-[12px] border-gold-primary italic text-navy-primary font-light text-xl font-serif">
                       "As a master supplier, Mamta Steel Traders provides ERCuAl-A3 with full heat-specific material traceability, supporting global defense and aerospace sectors with 100% metallurgical integrity."
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Global Hub Section */}
        <section className="py-24 bg-navy-primary text-white relative">
           <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-5xl font-black text-gold-primary font-serif italic mb-12 tracking-widest uppercase">Global Engineering Partner</h2>
              <p className="max-w-4xl mx-auto text-blue-100/60 font-light text-xl leading-relaxed mb-16 italic font-sans uppercase tracking-[0.2em] opacity-90 underline decoration-gold-primary/30 underline-offset-[12px]">
                Providing elite technical filler metals ex-Mumbai, India. Strategic supply for aerospace manufacturing in **France / Germany**, 
                **Houston (NASA Hub)**, and **Global Defense Shipbuilding**. 
                Precision vacuum export packing with 100% material traceability (TPI/PMI ready).
              </p>
              <div className="flex flex-wrap justify-center gap-20 opacity-30 hover:opacity-100 transition-opacity duration-700">
                 <div className="flex flex-col items-center"><ShieldIcon className="w-16 h-16 mb-4 text-gold-primary" /><span className="text-[11px] font-black uppercase tracking-widest">AEROSPACE READY</span></div>
                 <div className="flex flex-col items-center"><GlobeIcon className="w-16 h-16 mb-4 text-gold-primary" /><span className="text-[11px] font-black uppercase tracking-widest">B2B EXPORT COMMAND</span></div>
                 <div className="flex flex-col items-center"><AwardIcon className="w-16 h-16 mb-4 text-gold-primary" /><span className="text-[11px] font-black uppercase tracking-widest">AWS A5.7 SUPREME</span></div>
              </div>
           </div>
        </section>
      </div>
    </>
  );
}
