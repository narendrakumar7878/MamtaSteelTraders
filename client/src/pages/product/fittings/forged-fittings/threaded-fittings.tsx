import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft as ArrowLeftIcon, ArrowRight as ArrowRightIcon, CheckCircle as CheckCircleIcon, Shield as ShieldIcon, Zap as ZapIcon, Info as InfoIcon, TrendingUp as TrendingUpIcon, Award as AwardIcon, Download as DownloadIcon, Box as BoxIcon, Key as KeyIcon, Settings as SettingsIcon, Target as TargetIcon, Anchor as AnchorIcon, Gauge as GaugeIcon, Cog as CogIcon } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function ThreadedFittingsDetail() {
  const technicalSpecs = [
    { property: "Standards", value: "ASME B16.11, BS 3799, DIN 2999" },
    { property: "Thread Types", value: "NPT (ANSI/ASME B1.20.1), BSPT, BSPP" },
    { property: "Classes", value: "2000#, 3000#, 6000#" },
    { property: "Size Range", value: "1/8\" to 4\"" },
    { property: "Material Compatibility", value: "Stainless, Carbon, Duplex, Alloy Steel" },
    { property: "Surface Treatment", value: "Anti-rust Oil, Zinc Plating, Hot Dip Galv" }
  ];

  const chemicalComp = [
    { element: "Phosphorus (P)", a105: "0.040% max", ss316l: "0.045% max", duplex2205: "0.030% max" },
    { element: "Sulfur (S)", a105: "0.050% max", ss316l: "0.030% max", duplex2205: "0.020% max" },
    { element: "Tensile (ksi)", a105: "70 min", ss316l: "70 min", duplex2205: "95 min" },
    { element: "Yield (ksi)", a105: "36 min", ss316l: "25 min", duplex2205: "65 min" },
    { element: "Hardness (HBW)", a105: "187 max", ss316l: "217 max", duplex2205: "293 max" }
  ];

  return (
    <>
      <ProductSEO
        title="Forged Threaded Fittings Manufacturer - NPT & BSP Class 3000, 6000 Forged Fittings"
        description="Premium manufacturer of ASME B16.11 forged threaded fittings. High-pressure NPT and BSP elbows, tees, plugs, and hex nipples in SS 304, 316L, ASTM A105, and Duplex steel in Mumbai."
        keywords="threaded forged fittings, NPT fittings, BSP threaded fittings, forged threaded elbow, hex nipple manufacturer, pipe plug supplier, A105 threaded fitting, SS 316L threaded tee, 3000# threaded fittings, Mumbai forged steel"
        category="Pipe Fittings"
        productName="Threaded Forged Fittings"
        specifications={[
          "Standards: ASME B16.11, BS 3799",
          "Threads: NPT, BSPT, BSPP",
          "Pressure: 2000#, 3000#, 6000#",
          "Grades: A105, SS 316L, F51 Duplex"
        ]}
        canonicalUrl="/product/fittings/forged-fittings/threaded-fittings"
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 bg-navy-primary overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-primary rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl">
              <nav className="flex items-center space-x-2 text-sm text-blue-100/60 mb-8 lowercase tracking-tighter font-bold">
                <Link href="/" className="hover:text-gold-primary transition-colors">Home</Link>
                <ArrowRightIcon className="w-3 h-3" />
                <Link href="/product/fittings/forged-fittings" className="hover:text-gold-primary transition-colors">Forged Fittings</Link>
              </nav>

              <motion.h1 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-3xl md:text-4xl font-bold text-white mb-6 uppercase tracking-tight"
              >
                Forged Threaded Fittings <br />
                <span className="text-gold-primary text-xl md:text-2xl font-light italic lowercase">Precision NPT, BSPT, & BSPP Screwed Connections</span>
              </motion.h1>

              <p className="text-lg text-blue-100/80 mb-8 leading-relaxed max-w-2xl font-light">
                Secure, weld-free connections for low to medium-high pressure industrial systems. 
                Our threaded forged fittings are machined with unmatched precision to ensure perfect pitch and depth, 
                guaranteeing leak-proof performance in petrochemical and gas maintenance applications.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-8 py-4 rounded-md font-black italic transition-all flex items-center shadow-xl shadow-gold-primary/30 uppercase text-xs tracking-widest">
                  Technical Manual <DownloadIcon className="ml-2 w-4 h-4 text-navy-primary" />
                </button>
                <Link href="/contact" className="border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-md font-bold transition-all backdrop-blur-sm">
                  Global Export Inquiry
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specification Table */}
        <section className="py-20 bg-gray-50 border-b border-gray-200">
          <div className="container mx-auto px-4">
             <div className="grid lg:grid-cols-2 gap-16 items-start">
                <div className="bg-white p-10 rounded-2xl shadow-xl border-l-[10px] border-gold-primary">
                   <h2 className="text-2xl font-black text-navy-primary mb-10 flex items-center uppercase tracking-tighter">
                      <SettingsIcon className="mr-3 text-gold-primary" /> DIMENSIONAL BENCHMARKS
                   </h2>
                   <div className="space-y-6">
                      {technicalSpecs.map((spec, i) => (
                        <div key={i} className="flex justify-between items-center py-4 border-b border-gray-50 last:border-0 border-dashed">
                           <span className="text-gray-400 font-bold uppercase text-[10px] tracking-widest">{spec.property}</span>
                           <span className="text-navy-primary font-black text-sm tracking-tight">{spec.value}</span>
                        </div>
                      ))}
                   </div>
                </div>

                <div className="bg-white p-10 rounded-2xl shadow-xl border-r-[10px] border-navy-primary">
                    <h2 className="text-2xl font-black text-navy-primary mb-10 flex items-center uppercase tracking-tighter">
                      <ZapIcon className="mr-3 text-gold-primary" /> PERFORMANCE CHARACTERISTICS
                    </h2>
                    <div className="overflow-x-auto mt-6">
                       <table className="w-full text-left">
                          <thead>
                             <tr className="bg-navy-primary text-white uppercase text-[9px] font-black tracking-[0.2em]">
                                <th className="p-4 border-r border-white/10">Element/Property</th>
                                <th className="p-4 border-r border-white/10">ASTM A105</th>
                                <th className="p-4 border-r border-white/10 text-gold-primary">Duplex 2205</th>
                                <th className="p-4">SS 316L</th>
                             </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-100 text-[12px] font-bold">
                             {chemicalComp.map((row, i) => (
                               <tr key={i} className="hover:bg-gold-primary/5 transition-all">
                                  <td className="p-4 text-navy-primary bg-gray-50/50 uppercase italic font-black">{row.element}</td>
                                  <td className="p-4 text-center">{row.a105}</td>
                                  <td className="p-4 text-center text-gold-secondary font-black">{row.duplex2205}</td>
                                  <td className="p-4 text-center">{row.ss316l}</td>
                               </tr>
                             ))}
                          </tbody>
                       </table>
                    </div>
                </div>
             </div>
          </div>
        </section>

        {/* Machinery Focus Section */}
        <section className="py-24 bg-white relative overflow-hidden">
           <div className="absolute top-0 right-0 w-96 h-96 bg-gray-50 rotate-45 transform translate-x-1/2 -translate-y-1/2 -z-0"></div>
           <div className="container mx-auto px-4 relative z-10">
              <div className="flex flex-col md:flex-row gap-16 items-center max-w-6xl mx-auto">
                 <div className="flex-1 order-2 md:order-1 relative">
                    <div className="bg-gradient-to-br from-gold-primary/20 to-navy-primary/20 p-4 rounded-3xl shadow- inner">
                       <img 
                          src="https://images.unsplash.com/photo-1534914149867-d867c2957777?auto=format&fit=crop&q=80&w=800" 
                          alt="Machined Threaded Fittings" 
                          className="rounded-2xl w-full h-[400px] object-cover shadow-2xl skew-y-3"
                       />
                    </div>
                    <div className="absolute bottom-10 left-10 bg-white p-6 rounded-lg shadow-2xl border-l-4 border-gold-primary rotate-3">
                       <p className="text-3xl font-black italic tracking-tighter">NPT/BSP</p>
                       <p className="text-[10px] font-black uppercase text-gold-primary tracking-widest">Universal Taper</p>
                    </div>
                 </div>
                 <div className="flex-1 order-1 md:order-2 space-y-8">
                    <h2 className="text-3xl font-black text-navy-primary leading-none uppercase tracking-tighter">Machined to Engineering Perfection</h2>
                    <p className="text-gray-500 text-lg leading-relaxed font-light">
                       Using high-speed CNC centers, we ensure every thread conforms to international gauging standards. 
                       This results in easier assembly and 100% seal integrity without the need for excessive structural welding.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                       {[
                         "High-Pressure Maintenance",
                         "Easy Field Repairability",
                         "Vibration Resistant Hex-Design",
                         "Corrosion Resistant Passivation"
                       ].map((item, i) => (
                         <div key={i} className="flex items-center space-x-3 group">
                            <CheckCircleIcon className="w-5 h-5 text-gold-primary group-hover:scale-125 transition-transform" />
                            <span className="text-navy-primary font-black uppercase text-[11px] tracking-wider">{item}</span>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Global Logistics Excellence */}
        <section className="py-24 bg-navy-primary text-white relative">
           <div className="container mx-auto px-4 text-center">
              <h2 className="text-2xl md:text-3xl font-black text-gold-primary uppercase italic tracking-[0.3em] mb-12">Global Supply Chain Intelligence</h2>
              <p className="max-w-4xl mx-auto text-blue-100/60 font-light text-xl leading-relaxed mb-16 italic">
                Strategic manufacturers ex-stock Mumbai. Delivering elite screwed forged fittings to the **Basra Oil Fields (Iraq)**, 
                **North Sea Platforms (Norway)**, **Delaware Basin (USA)**, and **industrial sectors in the UAE**. 
                Full export documentation with EN 10204 3.1 and TPI clearance.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                 <div className="flex flex-col items-center"><AwardIcon className="w-10 h-10 mb-2 text-gold-primary" /><span className="text-[10px] font-black uppercase tracking-widest">API CERTIFIED</span></div>
                 <div className="flex flex-col items-center"><ShieldIcon className="w-10 h-10 mb-2 text-gold-primary" /><span className="text-[10px] font-black uppercase tracking-widest">NACE MR0175</span></div>
                 <div className="flex flex-col items-center"><GaugeIcon className="w-10 h-10 mb-2 text-gold-primary" /><span className="text-[10px] font-black uppercase tracking-widest">HIGH TEST</span></div>
                 <div className="flex flex-col items-center"><BoxIcon className="w-10 h-10 mb-2 text-gold-primary" /><span className="text-[10px] font-black uppercase tracking-widest">GLOBAL DDP</span></div>
              </div>
           </div>
        </section>
      </div>
    </>
  );
}
