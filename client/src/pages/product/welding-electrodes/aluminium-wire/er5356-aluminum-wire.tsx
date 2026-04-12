import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft as ArrowLeftIcon, ArrowRight as ArrowRightIcon, CheckCircle as CheckCircleIcon, Shield as ShieldIcon, Zap as ZapIcon, Info as InfoIcon, TrendingUp as TrendingUpIcon, Award as AwardIcon, Download as DownloadIcon, Box as BoxIcon, Key as KeyIcon, Settings as SettingsIcon, Target as TargetIcon, Anchor as AnchorIcon, Globe as GlobeIcon, Gauge as GaugeIcon } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function ER5356AluminumWireDetail() {
  const technicalSpecs = [
    { property: "AWS Classification", value: "ER5356 (AWS A5.10/A5.10M)" },
    { property: "Alloy Type", value: "AlMg5 (5% Magnesium)" },
    { property: "Melting Range", value: "562 - 633°C" },
    { property: "Density", value: "2.64 g/cm³" },
    { property: "Thermal Conductivity", value: "110-120 W/m-K" },
    { property: "Shielding Gas", value: "100% Argon | Argon/Helium Mix" }
  ];

  const chemicalComp = [
    { element: "Magnesium (Mg)", er5356: "4.50 - 5.50%" },
    { element: "Manganese (Mn)", er5356: "0.05 - 0.20%" },
    { element: "Chromium (Cr)", er5356: "0.05 - 0.20%" },
    { element: "Silicon (Si)", er5356: "0.25% max" },
    { element: "Iron (Fe)", er5356: "0.40% max" },
    { element: "Titanium (Ti)", er5356: "0.06 - 0.20%" },
    { element: "Aluminum (Al)", er5356: "Remainder" }
  ];

  const mechProperties = [
    { property: "Tensile Strength", value: "290 - 310 MPa" },
    { property: "Yield Strength (0.2%)", value: "130 - 150 MPa" },
    { property: "Elongation (A5)", value: "17 - 25%" },
    { property: "Impact Strength", value: "27 J at -196°C" }
  ];

  return (
    <>
      <ProductSEO
        title="ER5356 Aluminum Welding Wire Manufacturer - Marine Grade 5% Mg TIG/MIG Rods"
        description="Premium ER5356 (AlMg5) aluminum welding wire manufacturer. High-strength, corrosion-resistant AWS A5.10 filler rods. Ideal for marine and structural 5000 series aluminum welding."
        keywords="ER5356 aluminum wire, AlMg5 welding filler, marine grade aluminum wire, 5% magnesium aluminum wire, AWS A5.10 ER5356, TIG welding rods aluminum, MIG wire ER5356, Mumbai welding wire supplier"
        category="Welding Electrodes"
        productName="ER5356 Aluminum Wire"
        specifications={[
          "AWS Class: ER5356",
          "Alloy Base: 5% Magnesium",
          "Applications: Marine, Structural, Automotive",
          "Process: TIG & MIG welding"
        ]}
        canonicalUrl="/product/welding-electrodes/aluminium-wire/er5356-aluminum-wire"
      />

      <div className="min-h-screen bg-white">
        {/* Detail Hero Section */}
        <section className="relative pt-24 pb-16 bg-navy-primary text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold-primary rounded-full filter blur-[120px] translate-x-1/2 -translate-y-1/2"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl">
              <nav className="flex items-center space-x-2 text-sm text-blue-100/60 mb-8 font-medium">
                <Link href="/" className="hover:text-gold-primary transition-colors">Home</Link>
                <ArrowRightIcon className="w-3 h-3" />
                <Link href="/product/welding-electrodes/aluminiumwire" className="hover:text-gold-primary transition-colors">Aluminium Wire</Link>
              </nav>

              <motion.h1 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-3xl md:text-5xl font-black mb-6 tracking-tighter"
              >
                ER5356 Aluminum Wire <br />
                <span className="text-gold-primary text-xl md:text-2xl font-serif italic lowercase font-light">High-Strength Marine Grade AlMg5 Filler Metal</span>
              </motion.h1>

              <p className="text-lg text-blue-100/80 mb-10 leading-relaxed max-w-2xl font-light">
                Industry-standard 5% Magnesium alloy filler designed for structural welding of 5000 series aluminum. 
                Optimized for exceptional corrosion resistance in saltwater and severe marine environments.
              </p>

              <div className="flex flex-wrap gap-5 mt-10">
                <button className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-10 py-4 rounded-lg font-black uppercase text-[11px] tracking-widest transition-all flex items-center shadow-2xl shadow-gold-primary/30">
                  Chemical Analysis <DownloadIcon className="ml-3 w-4 h-4" />
                </button>
                <Link href="/contact" className="border-2 border-white/10 hover:border-white/40 text-white px-10 py-4 rounded-lg font-bold transition-all backdrop-blur-md uppercase text-[11px] tracking-widest">
                  Bulk Procurement Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Data Grid */}
        <section className="py-24 bg-gray-50 border-b border-gray-100">
           <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-16 items-start text-navy-primary font-sans">
                 {/* Engineering Specs */}
                 <div className="bg-white p-12 rounded-[2.5rem] shadow-2xl border-t-[15px] border-gold-primary relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-10 opacity-5">
                       <SettingsIcon className="w-40 h-40" />
                    </div>
                    <h2 className="text-3xl font-black mb-12 uppercase tracking-tighter">TECHNICAL BENCHMARKS</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                       {technicalSpecs.map((spec, i) => (
                         <div key={i} className="group border-l-2 border-gray-100 pl-6 hover:border-gold-primary transition-colors">
                            <span className="text-gray-400 font-bold uppercase text-[9px] tracking-[0.2em] block mb-1">{spec.property}</span>
                            <span className="text-navy-primary font-black text-sm tracking-tight">{spec.value}</span>
                         </div>
                       ))}
                    </div>
                 </div>

                 {/* Chemical Matrix */}
                 <div className="bg-white p-12 rounded-[2.5rem] shadow-2xl border-t-[15px] border-navy-primary">
                    <h2 className="text-3xl font-black mb-10 uppercase tracking-tighter">Chemical Composition (wt%)</h2>
                    <div className="overflow-x-auto mt-4">
                       <table className="w-full text-left">
                          <thead>
                             <tr className="bg-navy-primary text-white text-[10px] uppercase tracking-widest font-black">
                                <th className="p-5 border-r border-white/10">Element</th>
                                <th className="p-5 text-center text-gold-primary">ER5356 Standards</th>
                             </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-100 text-[13px] font-bold text-gray-700">
                             {chemicalComp.map((row, i) => (
                               <tr key={i} className="hover:bg-blue-50/50 transition-colors group">
                                  <td className="p-5 text-navy-primary font-black uppercase italic bg-gray-50/50">{row.element}</td>
                                  <td className="p-5 text-center border-l border-gray-50 group-hover:text-gold-primary">{row.er5356}</td>
                               </tr>
                             ))}
                          </tbody>
                       </table>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Features & Technical Content */}
        <section className="py-24 bg-white overflow-hidden">
           <div className="container mx-auto px-4 max-w-6xl">
              <div className="flex flex-col md:flex-row items-center gap-20">
                 <div className="flex-1 space-y-10 group">
                    <h2 className="text-[2.5rem] font-black leading-[0.9] text-navy-primary tracking-tighter uppercase">High-Integrity 5000 Series Welding</h2>
                    <p className="text-gray-600 text-xl font-light italic leading-relaxed border-l-8 border-gold-primary pl-8">
                      "ER5356 (AlMg5) is specifically formulated to provide the high-shear strength required for offshore fabrication and heavy structural aluminum components. Its 5% Magnesium content ensures optimal crack resistance and long-term durability in corrosive environments."
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       {[
                         { title: "Saltwater Resilience", desc: "Premium corrosion resistance for marine hulls and offshore platforms." },
                         { title: "Crack Resistance", desc: "Optimised grain structure to prevent hot cracking in high-stress joints." },
                         { title: "Anodizing Quality", desc: "Maintains structural integrity and provides a clean finish after treatment." },
                         { title: "Process Stability", desc: "Designed for stable arc characteristics in both TIG and high-speed MIG automation." }
                       ].map((item, i) => (
                         <div key={i} className="bg-gray-50 p-6 rounded-2xl border-b-4 border-navy-primary group-hover:border-gold-primary transition-all">
                            <h3 className="text-navy-primary font-black text-xs uppercase tracking-widest mb-2">{item.title}</h3>
                            <p className="text-gray-500 text-[11px] font-bold leading-relaxed uppercase">{item.desc}</p>
                         </div>
                       ))}
                    </div>
                 </div>
                 <div className="flex-1 space-y-10 group">
                    <h2 className="text-[2.5rem] font-black leading-[0.9] text-navy-primary tracking-tighter uppercase">Mechanical Performance</h2>
                    <div className="space-y-4">
                       {mechProperties.map((prop, i) => (
                         <div key={i} className="flex justify-between items-center py-4 border-b border-gray-100 group-hover:border-gold-primary transition-colors">
                            <span className="text-navy-primary font-black uppercase text-xs tracking-widest">{prop.property}</span>
                            <span className="text-gold-secondary font-black text-xl italic">{prop.value}</span>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Global Logistics Section */}
        <section className="py-24 bg-navy-primary text-white relative">
           <div className="container mx-auto px-4 text-center relative z-10">
              <h2 className="text-3xl md:text-4xl font-black text-gold-primary uppercase tracking-[0.4em] mb-12 italic">Worldwide Welding Supply Intelligence</h2>
              <p className="max-w-4xl mx-auto text-blue-100/60 font-light text-xl leading-relaxed mb-16 italic font-serif">
                Direct manufacturing ex-Mumbai, India. Servicing global shipbuilding and aerospace sectors in **Norway**, 
                **Singapore**, **United Kingdom**, and the **GCC (UAE/Saudi)**. 
                All spools available with AWS A5.10 certification and vacuum export packaging.
              </p>
              <div className="flex flex-wrap justify-center gap-16 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-1000">
                 <div className="flex flex-col items-center"><AwardIcon className="w-16 h-16 mb-4 text-gold-primary" /><span className="text-xs font-black tracking-widest uppercase">AWS A5.10</span></div>
                 <div className="flex flex-col items-center"><ShieldIcon className="w-16 h-16 mb-4 text-gold-primary" /><span className="text-xs font-black tracking-widest uppercase">ABS Approved</span></div>
                 <div className="flex flex-col items-center"><GlobeIcon className="w-16 h-16 mb-4 text-gold-primary" /><span className="text-xs font-black tracking-widest uppercase">Global DDP</span></div>
              </div>
           </div>
        </section>
      </div>
    </>
  );
}
