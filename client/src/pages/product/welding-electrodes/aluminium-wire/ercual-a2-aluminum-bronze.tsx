import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft as ArrowLeftIcon, ArrowRight as ArrowRightIcon, CheckCircle as CheckCircleIcon, Shield as ShieldIcon, Zap as ZapIcon, Info as InfoIcon, TrendingUp as TrendingUpIcon, Award as AwardIcon, Download as DownloadIcon, Box as BoxIcon, Key as KeyIcon, Settings as SettingsIcon, Target as TargetIcon, Anchor as AnchorIcon, Globe as GlobeIcon, Gauge as GaugeIcon } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function ERCuAlA2AluminumBronzeDetail() {
  const technicalSpecs = [
    { property: "AWS Classification", value: "ERCuAl-A2 (AWS A5.7)" },
    { property: "UNS Number", value: "C61800" },
    { property: "Solidus Temperature", value: "1025°C" },
    { property: "Liquidus Temperature", value: "1040°C" },
    { property: "Electrical Conductivity", value: "12% IACS" },
    { property: "Brinell Hardness", value: "140 - 150 HB" }
  ];

  const chemicalComp = [
    { element: "Aluminum (Al)", ercual: "8.5 - 11.0%" },
    { element: "Iron (Fe)", ercual: "0.50 - 1.50%" },
    { element: "Copper (Cu)", ercual: "Remainder" },
    { element: "Silicon (Si)", ercual: "0.10% max" },
    { element: "Zinc (Zn)", ercual: "0.02% max" },
    { element: "Lead (Pb)", ercual: "0.02% max" }
  ];

  const mechProperties = [
    { property: "Tensile Strength", value: "540 - 640 MPa" },
    { property: "Yield Strength (0.2%)", value: "280 - 350 MPa" },
    { property: "Elongation (4d)", value: "25 - 35%" },
    { property: "Impact Strength", value: "20 - 30 J (Charpy V-Notch)" }
  ];

  return (
    <>
      <ProductSEO
        title="ERCuAl-A2 Aluminum Bronze Wire Manufacturer - High-Strength Anti-Galling C61800 Rods"
        description="Premium ERCuAl-A2 aluminum bronze welding wire manufacturer. High-strength C61800 filler metal with superior anti-galling and wear resistance. Ideal for industrial machinery, bearings, and heavy marine hardware."
        keywords="ERCuAl-A2 aluminum bronze wire, C61800 welding filler, anti-galling bronze wire, high strength aluminum bronze, wear resistant filler rod, AWS A5.7 ERCuAl-A2, Mumbai bronze wire supplier"
        category="Welding Electrodes"
        productName="ERCuAl-A2 Aluminum Bronze Wire"
        specifications={[
          "AWS Class: ERCuAl-A2",
          "Alloy Type: C61800 Copper-Aluminum",
          "Applications: Mining Equipment, Wear Plates, Heavy Industrial",
          "Process: TIG & MIG welding"
        ]}
        canonicalUrl="/product/welding-electrodes/aluminium-wire/ercual-a2-aluminum-bronze"
      />

      <div className="min-h-screen bg-white font-sans text-navy-primary">
        {/* Luxury Hero Section */}
        <section className="relative pt-24 pb-20 bg-navy-primary text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-primary filter blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl">
              <nav className="flex items-center space-x-2 text-sm text-blue-100/40 mb-10 font-bold uppercase tracking-[0.2em]">
                <Link href="/" className="hover:text-gold-primary transition-colors">Home</Link>
                <ArrowRightIcon className="w-3 h-3 text-blue-100/20" />
                <Link href="/product/welding-electrodes/aluminiumwire" className="hover:text-gold-primary transition-colors">Aluminium Wire</Link>
              </nav>

              <motion.h1 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-3xl md:text-5xl font-black mb-8 leading-none tracking-tighter uppercase"
              >
                ERCuAl-A2 <br />
                <span className="text-gold-primary text-2xl md:text-3xl font-serif italic lowercase font-light tracking-wide uppercase">Anti-Galling C61800 High-load bronze filler</span>
              </motion.h1>

              <p className="text-xl text-blue-100/70 mb-10 leading-relaxed max-w-2xl font-light italic border-l-4 border-gold-primary pl-8">
                Designed for extreme pressure and high-wear scenarios. Our A2 grade aluminum bronze wire offers 
                superior structural integrity and anti-galling properties required for bearings and heavy industrial wear plates.
              </p>

              <div className="flex flex-wrap gap-6 mt-12">
                <button className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-10 py-5 rounded-lg font-black uppercase text-[11px] tracking-widest transition-all flex items-center shadow-2xl shadow-gold-primary/30">
                  Technical Data Sheet <DownloadIcon className="ml-3 w-4 h-4" />
                </button>
                <Link href="/contact" className="border-2 border-white/20 hover:border-white/50 text-white px-10 py-5 rounded-lg font-bold transition-all backdrop-blur-md uppercase text-[11px] tracking-widest">
                  Bulk Inquiry
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
                      <SettingsIcon className="mr-4 text-gold-primary w-8 h-8" /> PRECISION BENCHMARKS
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

                <div className="bg-white p-12 rounded-3xl shadow-xl border-t-[12px] border-navy-primary overflow-hidden relative">
                    <div className="absolute top-0 right-0 p-8 transform rotate-12 opacity-5">
                       <ZapIcon className="w-40 h-40" />
                    </div>
                    <h2 className="text-2xl font-black text-navy-primary mb-12 flex items-center uppercase tracking-tighter">
                       <ShieldIcon className="mr-4 text-gold-primary w-8 h-8" /> Composition matrix
                    </h2>
                    <div className="overflow-x-auto relative z-10">
                       <table className="w-full text-left font-sans">
                          <thead>
                             <tr className="bg-navy-primary text-white text-[10px] uppercase tracking-widest font-black">
                                <th className="p-5 border-r border-white/10">Element</th>
                                <th className="p-5 text-center text-gold-primary">ERCuAl-A2 Standards</th>
                             </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-100 text-[13px] font-bold text-gray-700">
                             {chemicalComp.map((row, i) => (
                               <tr key={i} className="hover:bg-blue-50/40 transition-all group">
                                  <td className="p-5 text-navy-primary bg-gray-50/50 uppercase italic font-black">{row.element}</td>
                                  <td className="p-5 text-center border-l border-gray-50 group-hover:text-gold-primary">{row.ercual}</td>
                               </tr>
                             ))}
                          </tbody>
                       </table>
                    </div>
                </div>
             </div>
          </div>
        </section>

        {/* Technical Feature Section */}
        <section className="py-24 bg-white overflow-hidden text-navy-primary">
           <div className="container mx-auto px-4 max-w-6xl">
              <div className="flex flex-col md:flex-row items-center gap-24">
                 <div className="flex-1 space-y-12 group">
                    <h2 className="text-4xl font-black leading-tight tracking-tighter uppercase">High-Impact Engineering & Structural Loads</h2>
                    <p className="text-gray-600 text-xl font-light leading-relaxed border-l-8 border-gold-primary pl-10 italic">
                       "ERCuAl-A2 (C61800) is strategically formulated for extreme pressure environments. With its superior anti-galling properties, it serves as the critical defense layer for bearings and industrial wear plates subjected to heavy friction and high-stress cycles."
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                       {[
                         { title: "Anti-Galling Specs", desc: "Prevents surface adhesion and cold-welding in high-load sliding contacts." },
                         { title: "Impact Strength", desc: "Absorbs seismic vibration and sudden mechanical shocks in mining gear." },
                         { title: "Turbine Durability", desc: "Standard grade for resurfacing hydro-turbine components and blades." },
                         { title: "Thermal Stability", desc: "Maintains mechanical hardness (up to 150 HB) at elevated temperatures." }
                       ].map((item, i) => (
                         <div key={i} className="bg-gray-50 p-6 rounded-2xl border-b-4 border-navy-primary group-hover:border-gold-primary transition-all">
                            <h3 className="text-navy-primary font-black text-[10px] uppercase tracking-widest mb-1">{item.title}</h3>
                            <p className="text-gray-500 text-[10px] uppercase font-bold leading-tight">{item.desc}</p>
                         </div>
                       ))}
                    </div>
                 </div>
                 <div className="flex-1 space-y-10">
                    <h2 className="text-4xl font-black text-navy-primary uppercase tracking-tighter italic text-gold-primary">Load Analytics</h2>
                    <div className="space-y-6">
                       {mechProperties.map((prop, i) => (
                         <div key={i} className="flex flex-col border-b border-gray-100 pb-2 hover:border-gold-primary transition-colors group">
                            <span className="text-gray-400 font-black uppercase text-[9px] tracking-widest group-hover:text-navy-primary">{prop.property}</span>
                            <span className="text-navy-primary font-black text-2xl tracking-tight leading-none uppercase italic group-hover:text-gold-secondary">{prop.value}</span>
                         </div>
                       ))}
                    </div>
                    <div className="p-8 bg-blue-50/50 rounded-3xl border-r-8 border-gold-primary italic text-navy-primary font-light text-lg font-serif">
                       "Manufactured to exceed C61800 technical criteria, ERCuAl-A2 remains Mamta Steel Traders' benchmark for industrial durability in high-capacity mining and offshore platforms."
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Global Hub Section */}
        <section className="py-24 bg-navy-primary text-white relative">
           <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-5xl font-black text-gold-primary font-serif italic mb-12 opacity-90">Worldwide Industrial Supply Power</h2>
              <p className="max-w-4xl mx-auto text-blue-100/60 font-light text-xl leading-relaxed mb-16 italic font-sans uppercase tracking-[0.2em] opacity-80">
                Strategic manufacturer and master exporter ex-Mumbai. Supplying technical C61800 bronze wire to the **Mining Sectors (Australia/Canada)**, 
                **Global Aerospace Platforms**, and **Offshore Oil Infrastructure**. 
                EN 10204 3.1 precision certified with marine-grade export packaging.
              </p>
              <div className="flex flex-wrap justify-center gap-16 scale-125 opacity-40 grayscale group hover:grayscale-0 hover:opacity-100 transition-all duration-1000">
                 <div className="flex flex-col items-center"><AwardIcon className="w-12 h-12 mb-2 text-gold-primary" /><span className="text-[10px] font-black uppercase tracking-widest">AWS A5.7 LEVEL</span></div>
                 <div className="flex flex-col items-center"><GaugeIcon className="w-12 h-12 mb-2 text-gold-primary" /><span className="text-[10px] font-black uppercase tracking-widest">HIGH LOAD RATED</span></div>
                 <div className="flex flex-col items-center"><GlobeIcon className="w-12 h-12 mb-2 text-gold-primary" /><span className="text-[10px] font-black uppercase tracking-widest">WORLDWIDE DDP</span></div>
              </div>
           </div>
        </section>
      </div>
    </>
  );
}
