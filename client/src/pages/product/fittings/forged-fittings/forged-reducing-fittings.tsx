import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft as ArrowLeftIcon, ArrowRight as ArrowRightIcon, CheckCircle as CheckCircleIcon, Shield as ShieldIcon, Zap as ZapIcon, Info as InfoIcon, TrendingUp as TrendingUpIcon, Award as AwardIcon, Download as DownloadIcon, Box as BoxIcon, Key as KeyIcon, Settings as SettingsIcon, Target as TargetIcon, Anchor as AnchorIcon, Gauge as GaugeIcon, Cog as CogIcon } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function ForgedReducingFittingsDetail() {
  const technicalSpecs = [
    { property: "Standards", value: "ASME B16.11, MSS SP-79, MSS SP-95" },
    { property: "Styles", value: "Concentric & Eccentric Swage Nipples | Reducer Inserts" },
    { property: "Size Range", value: "1/8\"-4\" (Inlet) x 1/8\"-3\" (Outlet)" },
    { property: "Pressure Class", value: "3000#, 6000#, 9000#" },
    { property: "End Types", value: "Plain Ends, Beveled Ends, Threaded (NPT)" },
    { property: "Standard Dimensions", value: "MSS SP-95 (Swage) | MSS SP-79 (Inserts)" }
  ];

  const chemicalComp = [
    { element: "Carbon (C)", a105: "0.35% max", ss316l: "0.030% max", a350_lf2: "0.30% max" },
    { element: "Manganese (Mn)", a105: "0.60 - 1.05%", ss316l: "2.00% max", a350_lf2: "0.60 - 1.35%" },
    { element: "Silicon (Si)", a105: "0.10 - 0.35%", ss316l: "0.75% max", a350_lf2: "0.15 - 0.30%" },
    { element: "Yield Strength", a105: "36 ksi min", ss316l: "25 ksi min", a350_lf2: "36 ksi min" },
    { element: "Tensile Strength", a105: "70 ksi min", ss316l: "70 ksi min", a350_lf2: "70 ksi min" }
  ];

  return (
    <>
      <ProductSEO
        title="Forged Reducing Fittings Manufacturer - Swage Nipples & Reducer Inserts SS 316, A105"
        description="Premium manufacturer of forged reducing fittings. ASME B16.11 and MSS SP-95 swage nipples, reducer inserts, and reducing couplings in SS 304, 316, ASTM A105 carbon steel in Mumbai."
        keywords="forged reducing fittings, swage nipple manufacturer, concentric swage nipple, eccentric swage, reducer insert MSS SP-79, reducing coupling forged, A105 swage nipple, SS 316L reducer insert, pipe fittings Mumbai"
        category="Pipe Fittings"
        productName="Forged Reducing Fittings"
        specifications={[
          "Standards: MSS SP-95, MSS SP-79, ASME B16.11",
          "Types: Swage Nipples, Reducer Inserts",
          "Pressure: 3000#, 6000#",
          "Grades: A105, A350 LF2, SS 304/316"
        ]}
        canonicalUrl="/product/fittings/forged-fittings/forged-reducing-fittings"
      />

      <div className="min-h-screen bg-white">
        {/* Luxury Hero Section */}
        <section className="relative pt-24 pb-16 bg-navy-primary text-white overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gold-primary/5 via-transparent to-transparent"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <nav className="flex justify-center items-center space-x-2 text-sm text-blue-100/40 mb-10 uppercase tracking-[0.2em] font-black">
                <Link href="/" className="hover:text-gold-primary transition-colors">Home</Link>
                <ArrowRightIcon className="w-3 h-3" />
                <Link href="/product/fittings/forged-fittings" className="hover:text-gold-primary transition-colors">Forged Fittings</Link>
              </nav>

              <motion.h1 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-4xl md:text-5xl font-black mb-8 leading-none tracking-tighter"
              >
                Forged Reducing Fittings <br />
                <span className="text-gold-primary italic text-2xl md:text-3xl font-serif">High-Spec Swage Nipples & Reducer Inserts</span>
              </motion.h1>

              <p className="text-xl text-blue-100/80 mb-10 leading-relaxed font-light italic">
                Strategically engineered for directional flow reduction and size transition in high-integrity piping systems. 
                Our forged reducing components are precision-formed from solid bar stock to withstand extreme mechanical stresses.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-10 py-4 rounded-full font-black uppercase text-[10px] tracking-[0.2em] transition-all flex items-center justify-center shadow-2xl shadow-gold-primary/40">
                  Engineering Datasheet <DownloadIcon className="ml-3 w-4 h-4" />
                </button>
                <Link href="/contact" className="border border-white/20 hover:bg-white/10 text-white px-10 py-4 rounded-full font-bold transition-all backdrop-blur-md uppercase text-[10px] tracking-[0.2em] flex items-center justify-center">
                  Bulk Order Inquiry
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specification Grid */}
        <section className="py-24 bg-gray-50 border-b border-gray-200">
          <div className="container mx-auto px-4">
             <div className="grid lg:grid-cols-2 gap-16 items-start">
                <div className="bg-white p-12 rounded-3xl shadow-2xl border-t-[12px] border-gold-primary relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-8 transform rotate-12 opacity-5">
                      <SettingsIcon className="w-32 h-32 text-navy-primary" />
                   </div>
                   <h2 className="text-3xl font-black text-navy-primary mb-10 flex items-center uppercase tracking-tighter">
                      <SettingsIcon className="mr-4 text-gold-primary w-8 h-8" /> Engineering Benchmarks
                   </h2>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      {technicalSpecs.map((spec, i) => (
                        <div key={i} className="group border-l-2 border-gray-100 pl-6 hover:border-gold-primary transition-colors">
                           <span className="text-gray-400 font-bold uppercase text-[9px] tracking-widest block mb-1">{spec.property}</span>
                           <span className="text-navy-primary font-black text-sm tracking-tight leading-tight">{spec.value}</span>
                        </div>
                      ))}
                   </div>
                </div>

                <div className="bg-white p-12 rounded-3xl shadow-2xl border-t-[12px] border-navy-primary">
                    <h2 className="text-3xl font-black text-navy-primary mb-10 flex items-center uppercase tracking-tighter">
                      <ZapIcon className="mr-4 text-gold-primary w-8 h-8" /> Material Analytics Matrix
                    </h2>
                    <div className="overflow-x-auto mt-6">
                       <table className="w-full text-left border-collapse">
                          <thead>
                             <tr className="bg-navy-primary text-white uppercase text-[10px] font-black tracking-[0.2em]">
                                <th className="p-5 border-r border-white/10">Grade/Property</th>
                                <th className="p-5 border-r border-white/10 text-center">ASTM A105</th>
                                <th className="p-5 border-r border-white/10 text-center text-gold-primary font-black">SS 316L</th>
                                <th className="p-5 text-center">A350 LF2</th>
                             </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-100 text-[13px] font-bold">
                             {chemicalComp.map((row, i) => (
                               <tr key={i} className="hover:bg-blue-50/50 transition-all group">
                                  <td className="p-5 text-navy-primary bg-gray-50/50 uppercase italic font-black">{row.element}</td>
                                  <td className="p-5 text-center border-r border-gray-50 group-hover:text-gold-primary">{row.a105}</td>
                                  <td className="p-5 text-center border-r border-gray-50 text-navy-secondary font-black">{row.ss316l}</td>
                                  <td className="p-5 text-center text-gray-500 font-medium italic">{row.a350_lf2}</td>
                               </tr>
                             ))}
                          </tbody>
                       </table>
                    </div>
                </div>
             </div>
          </div>
        </section>

        {/* Feature Layout */}
        <section className="py-24 bg-white relative overflow-hidden">
           <div className="container mx-auto px-4 max-w-6xl relative z-10">
              <div className="flex flex-col md:flex-row gap-20 items-center">
                 <div className="flex-1 space-y-10 order-2 md:order-1">
                    <h2 className="text-4xl font-black text-navy-primary tracking-tighter uppercase leading-none">Advanced Size Transition Engineering</h2>
                    <p className="text-gray-500 text-xl font-light leading-relaxed italic border-l-8 border-gold-primary pl-10">
                      "Our concentric and eccentric swage nipples are forged to ensure smooth flow dynamics, 
                      minimizing turbulence and localized internal corrosion in high-velocity pipelines."
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       {[
                         { title: "FORGED STRENGTH", desc: "Forged from solid bar stock for maximum integrity." },
                         { title: "SMOOTH BORE", desc: "Internal finish designed to minimize pressure drop." },
                         { title: "NACE COMPLIANCE", desc: "Sour service grades available ex-stock." },
                         { title: "PRECISION BEVELS", desc: "Exact end prep for automated welding." }
                       ].map((item, i) => (
                         <div key={i} className="bg-gray-50 p-6 rounded-2xl border-b-4 border-gold-primary hover:-translate-y-2 transition-transform shadow-sm">
                            <span className="text-gold-primary font-black text-[10px] uppercase tracking-widest block mb-2">{item.title}</span>
                            <p className="text-navy-primary font-bold text-xs">{item.desc}</p>
                         </div>
                       ))}
                    </div>
                 </div>
                 <div className="flex-1 order-1 md:order-2 group">
                    <div className="relative">
                       <div className="absolute inset-0 bg-gold-primary/20 rounded-[4rem] group-hover:-rotate-3 transition-transform duration-700"></div>
                       <img 
                          src="https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&q=80&w=800" 
                          alt="Specialized Forged Nipples" 
                          className="rounded-[4rem] w-full h-[500px] object-cover relative z-10 group-hover:rotate-3 transition-transform duration-700 shadow-2xl"
                       />
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Global Logistics Power */}
        <section className="py-24 bg-navy-primary text-white relative">
           <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-black text-gold-primary uppercase tracking-[0.4em] mb-12">Global Supply Chain Intelligence</h2>
              <p className="max-w-4xl mx-auto text-blue-100/60 font-light text-xl leading-relaxed mb-16 italic font-serif">
                Seamless manufacturer-to-client delivery ex-Mumbai. Supporting large-scale petroleum infra projects in **Saudi Arabia (NEOM)**, 
                **Qatar (North Field)**, **Australia (LNG)**, and **Brazil (Offshore)**. 100% material traceability and TPI clearance guaranteed.
              </p>
              <div className="flex flex-wrap justify-center gap-16 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-1000">
                 <div className="flex flex-col items-center"><AwardIcon className="w-16 h-16 mb-4 text-gold-primary" /><span className="text-xs font-black uppercase tracking-widest">PED / CE CERTIFIED</span></div>
                 <div className="flex flex-col items-center"><ShieldIcon className="w-16 h-16 mb-4 text-gold-primary" /><span className="text-xs font-black uppercase tracking-widest">ABS / BV APPROVED</span></div>
                 <div className="flex flex-col items-center"><BoxIcon className="w-16 h-16 mb-4 text-gold-primary" /><span className="text-xs font-black uppercase tracking-widest">SEAWORTHY PACK</span></div>
              </div>
           </div>
        </section>
      </div>
    </>
  );
}
