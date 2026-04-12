import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft as ArrowLeftIcon, ArrowRight as ArrowRightIcon, CheckCircle as CheckCircleIcon, Shield as ShieldIcon, Zap as ZapIcon, Info as InfoIcon, TrendingUp as TrendingUpIcon, Award as AwardIcon, Download as DownloadIcon, Box as BoxIcon, Key as KeyIcon, Settings as SettingsIcon, Target as TargetIcon, Anchor as AnchorIcon, Gauge as GaugeIcon, Cog as CogIcon } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function SpecialForgedFittingsDetail() {
  const technicalSpecs = [
    { property: "Standards", value: "ASME B16.11, MSS SP-97, ASME B31.3" },
    { property: "Branch Outlets", value: "Weldolet, Sockolet, Thredolet, Elbolet, Latrolet" },
    { property: "Size range", value: "1/4\" to 36\" Outlet size (Customizable)" },
    { property: "Schedule/Class", value: "SCH 40/STD, 80/XS, 160, XXS | 3000#, 6000#" },
    { property: "Connections", value: "Butt-weld, Socket Weld, Threaded" },
    { property: "Certifications", value: "EN 10204 3.1, IBR, NACE MR 0175" }
  ];

  const chemicalComp = [
    { element: "Carbon (C)", a105: "0.35% max", ss316l: "0.030% max", duplex2205: "0.030% max" },
    { element: "Chromium (Cr)", a105: "0.30% max", ss316l: "16.0 - 18.0%", duplex2205: "22.0 - 23.0%" },
    { element: "Nickel (Ni)", a105: "0.40% max", ss316l: "10.0 - 14.0%", duplex2205: "4.5 - 6.5%" },
    { element: "Molybdenum (Mo)", a105: "0.12% max", ss316l: "2.0 - 3.0%", duplex2205: "3.0 - 3.5%" },
    { element: "Hardness (HBW)", a105: "187 max", ss316l: "217 max", duplex2205: "293 max" }
  ];

  return (
    <>
      <ProductSEO
        title="Special Forged Fittings Manufacturer - Weldolet, Sockolet, Thredolet SS 316L, A105 Forged Laterals"
        description="Premium manufacturer of special forged fittings. Advanced branch outlets including Weldolets, Sockolets, Thredolets, and laterals in SS 304, 316, carbon steel, and duplex steel in Mumbai."
        keywords="weldolet manufacturer, sockolet fittings, thredolet supplier, branch outlet fittings, forged laterals, forged olets Mumbai, ASME B31.3 fittings, MSS SP-97 olets, A105 weldolet, SS 316L sockolet"
        category="Pipe Fittings"
        productName="Special Forged Fittings"
        specifications={[
          "Standards: MSS SP-97, ASME B16.11",
          "Types: Weldolets, Sockolets, Thredolets",
          "Pressure: 3000#, 6000#",
          "Grades: A105, SS 316L, Duplex F51"
        ]}
        canonicalUrl="/product/fittings/forged-fittings/special-forged-fittings"
      />

      <div className="min-h-screen bg-white">
        {/* Detail Hero Section */}
        <section className="relative pt-24 pb-16 bg-navy-primary text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-primary filter blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10 font-sans">
            <div className="max-w-4xl mx-auto">
              <nav className="flex items-center space-x-2 text-sm text-blue-100/40 mb-10 font-black uppercase tracking-[0.2em]">
                <Link href="/" className="hover:text-gold-primary transition-colors">Home</Link>
                <ArrowRightIcon className="w-3 h-3" />
                <Link href="/product/fittings/forged-fittings" className="hover:text-gold-primary transition-colors">Forged Fittings</Link>
              </nav>

              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-black mb-8 leading-none tracking-tighter"
              >
                Special Forged Fittings <br />
                <span className="text-gold-primary text-2xl md:text-3xl font-serif italic lowercase font-light">Advanced Branch Outlets & Olet Technology</span>
              </motion.h1>

              <p className="text-xl text-blue-100/70 mb-10 leading-relaxed font-light italic">
                Engineering high-pressure branch connections with zero reinforcement stress. 
                Our specialized olets—Weldolets, Sockolets, and Thredolets—are designed for structural integrity and 
                leak-proof branching in complex piping systems.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-start mt-12">
                <button className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-10 py-4 rounded-lg font-black uppercase text-[11px] tracking-widest transition-all flex items-center shadow-2xl shadow-gold-primary/30 transform hover:-translate-y-1">
                  Full Technical Catalog <DownloadIcon className="ml-3 w-4 h-4" />
                </button>
                <Link href="/contact" className="border-2 border-white/10 hover:border-white/40 text-white px-10 py-4 rounded-lg font-bold transition-all backdrop-blur-md uppercase text-[11px] tracking-widest text-center">
                  Consultation Request
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specification Grid */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid lg:grid-cols-3 gap-12 items-start text-navy-primary">
              {/* Vertical Detailed list */}
              <div className="lg:col-span-1 border-4 border-navy-primary p-12 rounded-[3rem] bg-gray-50/50">
                 <h2 className="text-3xl font-black mb-12 uppercase tracking-tighter leading-none">Engineering Standards</h2>
                 <div className="space-y-8">
                    {technicalSpecs.map((spec, i) => (
                      <div key={i} className="group">
                         <span className="text-gray-400 font-bold uppercase text-[9px] tracking-widest block mb-1">{spec.property}</span>
                         <span className="text-navy-primary font-black text-sm tracking-tight leading-tight group-hover:text-gold-primary transition-colors">{spec.value}</span>
                      </div>
                    ))}
                 </div>
              </div>

              {/* Data Table */}
              <div className="lg:col-span-2 p-12 bg-white rounded-[3rem] shadow-2xl border-b-[20px] border-gold-primary relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-10 opacity-5">
                     <TargetIcon className="w-40 h-40 text-navy-primary" />
                  </div>
                  <h2 className="text-3xl font-black mb-12 uppercase tracking-tighter leading-none relative z-10">Performance Matrix</h2>
                  <div className="overflow-x-auto relative z-10">
                     <table className="w-full text-left font-sans">
                        <thead>
                           <tr className="bg-navy-primary text-white text-[10px] uppercase font-black tracking-widest">
                              <th className="p-5 border-r border-white/10">Grade/Property</th>
                              <th className="p-5 border-r border-white/10 text-center">ASTM A105</th>
                              <th className="p-5 border-r border-white/10 text-center text-gold-primary">Duplex F51</th>
                              <th className="p-5 text-center">SS 316L</th>
                           </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 text-[13px] font-bold">
                           {chemicalComp.map((row, i) => (
                             <tr key={i} className="hover:bg-blue-50/40 transition-all group">
                                <td className="p-5 text-navy-primary bg-gray-50 uppercase italic font-black">{row.element}</td>
                                <td className="p-5 text-center border-r border-gray-50 group-hover:text-gold-primary">{row.a105}</td>
                                <td className="p-5 text-center border-r border-gray-50 text-navy-secondary font-black">{row.duplex2205}</td>
                                <td className="p-5 text-center font-medium opacity-60 italic">{row.ss316l}</td>
                             </tr>
                           ))}
                        </tbody>
                     </table>
                  </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Info Section */}
        <section className="py-24 bg-gray-50">
           <div className="container mx-auto px-4 max-w-6xl">
              <div className="flex flex-col md:flex-row items-center gap-20">
                 <div className="flex-1 space-y-8">
                    <h2 className="text-4xl font-black text-navy-primary uppercase tracking-tighter">Olet Design Integrity</h2>
                    <p className="text-gray-600 text-lg font-light leading-relaxed">
                       Operating under the **MSS SP-97** standard, our forged branch outlets are designed to be self-reinforcing. 
                       This eliminates the structural weaknesses often found in standard pipe-to-pipe welded junctions, making them 
                       ideal for high-vibration power plant and refinery applications.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                       {[
                         "Sockolets", "Weldolets", "Thredolets", "Elbolets", "Latrolets", "Flexolets"
                       ].map((item, i) => (
                         <div key={i} className="flex items-center space-x-3 p-4 bg-white border border-gray-100 rounded-xl hover:border-gold-primary hover:shadow-lg transition-all cursor-default">
                            <span className="w-2 h-2 bg-gold-primary rounded-full"></span>
                            <span className="text-navy-primary font-black text-[10px] uppercase tracking-widest">{item}</span>
                         </div>
                       ))}
                    </div>
                 </div>
                 <div className="flex-1">
                    <div className="relative group">
                       <div className="absolute top-0 right-0 w-full h-full border-t-8 border-r-8 border-gold-primary translate-x-10 -translate-y-10 rounded-3xl opacity-20 group-hover:translate-x-0 group-hover:-translate-y-0 transition-all duration-700"></div>
                       <img 
                          src="https://images.unsplash.com/photo-1541888941259-773471786094?auto=format&fit=crop&q=80&w=800" 
                          alt="Special Forged Olets" 
                          className="rounded-3xl shadow-2xl skew-x-1 group-hover:skew-x-0 transition-all duration-700 w-full h-[500px] object-cover"
                       />
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Global Hub Section */}
        <section className="py-24 bg-navy-primary text-white relative">
           <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-black text-gold-primary uppercase tracking-[0.4em] mb-12 italic">Worldwide Engineering Support</h2>
              <p className="max-w-4xl mx-auto text-blue-100/60 font-light text-xl leading-relaxed mb-16 italic font-serif">
                Direct manufacturing ex-Mumbai, India. Supplying elite special forged fittings to **Riyadh (Saudi Arabia)**, 
                **Houston (Texas)**, **Rotterdam (Netherlands)**, and **Singapore**. 
                Available with comprehensive ASME B31.3 stress-analysis data and 100% PMI testing.
              </p>
              <div className="flex flex-wrap justify-center gap-16 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-1000">
                 <div className="flex flex-col items-center"><ShieldIcon className="w-16 h-16 mb-2 text-gold-primary" /><span className="text-xs font-black uppercase tracking-widest">IBR APPROVED</span></div>
                 <div className="flex flex-col items-center"><AwardIcon className="w-16 h-16 mb-2 text-gold-primary" /><span className="text-xs font-black uppercase tracking-widest">MSS SP-97</span></div>
                 <div className="flex flex-col items-center"><GaugeIcon className="w-16 h-16 mb-2 text-gold-primary" /><span className="text-xs font-black uppercase tracking-widest">NUCLEAR CLASS</span></div>
              </div>
           </div>
        </section>
      </div>
    </>
  );
}
