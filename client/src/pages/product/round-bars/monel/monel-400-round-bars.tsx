import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft, ArrowRight, Activity, Shield, Microscope, Zap, Settings } from "lucide-react";
import { Link } from "wouter";

export default function Monel400RoundBarsDetail() {
  const chemicalComposition = [
    { element: "Nickel (Ni) + Cobalt (Co)", value: "63.0% min" },
    { element: "Copper (Cu)", value: "28.0 – 34.0%" },
    { element: "Iron (Fe)", value: "2.5% max" },
    { element: "Manganese (Mn)", value: "2.0% max" },
    { element: "Silicon (Si)", value: "0.5% max" },
    { element: "Carbon (C)", value: "0.3% max" },
    { element: "Sulfur (S)", value: "0.024% max" }
  ];

  const physicalProperties = [
    { property: "Density", value: "8.80 g/cm³" },
    { property: "Melting Range", value: "1300 – 1350°C" },
    { property: "Tensile Strength (Annealed)", value: "550 MPa min" },
    { property: "Yield Strength (Annealed)", value: "240 MPa min" },
    { property: "Elongation", value: "40% min" }
  ];

  return (
    <>
      <ProductSEO
        title="Monel 400 Round Bars | UNS N04400 | Alloy 400 Supplier Mumbai"
        description="Premium Monel 400 (UNS N04400) round bars. Exceptional resistance to seawater corrosion, hydrofluoric acid, and alkalis. High-performance nickel-copper alloy for marine and chemical engineering."
        keywords="monel 400 round bars, alloy 400 supplier mumbai, uns n04400 bars, nickel copper alloy 400, marine grade monel bars price"
        canonicalUrl="/product/round-bars/monel/monel-400-round-bars"
      />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 font-bold tracking-tighter italic text-black">
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
           <div className="container mx-auto px-4 py-4">
              <nav className="flex items-center space-x-2 text-sm flex-wrap text-black font-black uppercase">
                 <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary underline decoration-navy-primary/20 transition-colors italic tracking-tighter uppercase">Home</Link>
                 <ArrowRight className="w-4 h-4 text-gray-400 font-extrabold" />
                 <Link href="/product/round-bars/monel" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary underline decoration-navy-primary/20 transition-colors italic tracking-tighter uppercase">Monel Series</Link>
                 <ArrowRight className="w-4 h-4 text-gray-400 font-extrabold" />
                 <span className="text-navy-primary dark:text-gold-primary underline decoration-gold-primary decoration-2 underline-offset-4 italic tracking-tighter uppercase">Monel 400 (UNS N04400)</span>
              </nav>
           </div>
        </div>
        <div className="container mx-auto px-4 py-4 text-black">
           <Link href="/product/round-bars/monel" className="inline-flex items-center text-navy-primary dark:text-gold-primary hover:underline font-black uppercase text-xs">
              <ArrowLeft className="w-3 h-3 mr-2" /> Back to Monel Hub
           </Link>
        </div>
        <section className="bg-gradient-to-br from-navy-primary via-navy-secondary to-slate-800 text-white py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10 text-white">
            <div className="max-w-4xl">
              <span className="bg-gold-primary text-navy-primary px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-6 inline-block shadow-lg italic">The Marine Foundation Alloy</span>
              <h1 className="text-5xl md:text-7xl font-black mb-6 italic tracking-tighter uppercase leading-none underline decoration-gold-primary decoration-4 underline-offset-[12px]">Monel 400</h1>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl opacity-90 leading-relaxed italic uppercase tracking-tighter">Nickel-Copper alloy with high strength and excellent corrosion resistance in a wide range of acidic and alkaline environments, especially seawater.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="bg-gold-primary hover:bg-white text-navy-primary px-10 py-4 rounded-2xl font-black transition-all shadow-xl italic tracking-tighter uppercase text-xl text-center">Request Technical Quotation</Link>
                <a href="tel:+919819322576" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-10 py-4 rounded-2xl font-bold transition-all backdrop-blur-sm italic tracking-tighter uppercase text-xl text-center">Consult Tool Expert</a>
              </div>
            </div>
          </div>
          <Activity className="absolute right-[-10%] bottom-[-10%] w-[500px] h-[500px] text-white/5 pointer-events-none rotate-12" />
        </section>

        <section className="py-20 bg-gray-50 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 h-fit text-black font-black uppercase tracking-tighter italic">
          <div className="container mx-auto px-4 text-black">
            <div className="grid lg:grid-cols-3 gap-12 text-black">
              <div className="lg:col-span-2 space-y-12 text-black">
                <div className="bg-white dark:bg-gray-800 p-10 rounded-[2.5rem] shadow-2xl border border-gray-100 dark:border-gray-700 text-black">
                  <h2 className="text-3xl font-black text-navy-primary dark:text-white mb-8 italic tracking-tighter uppercase border-l-8 border-gold-primary pl-6 py-2 shadow-sm scale-110">Metallurgical Profile</h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 italic font-semibold p-4 bg-gray-50 dark:bg-gray-700 rounded-2xl border-l-4 border-gold-primary uppercase tracking-tighter decoration-gold-primary/20 transition-all shadow-md">Monel 400 (UNS N04400) is a solid-solution alloy that can be hardened only by cold working. It exhibits high strength and toughness over a wide temperature range and excellent resistance to many corrosive environments. Its resistance is outstanding in sea water as well as in hydrofluoric acid, sulfuric acid, and alkalis. Mamta Steel Traders delivers ready-to-dispatch Monel 400 bars specifically for marine shafting and chemical processing equipment. certified under ASTM B164 standards.</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 font-semibold uppercase tracking-tighter italic text-black">
                    {chemicalComposition.map((item, i) => (
                      <div key={i} className="p-5 bg-gray-50 dark:bg-gray-700/50 rounded-3xl border border-gray-100 dark:border-gray-600 group hover:border-gold-primary transition-all border-2 border-transparent shadow-sm hover:shadow-lg transform hover:-translate-y-1">
                        <p className="text-[10px] text-gray-500 uppercase font-black mb-1 italic tracking-tighter">{item.element}</p>
                        <p className="text-xl font-black text-navy-primary dark:text-gold-primary tracking-tighter uppercase italic py-1 underline decoration-gold-primary/10 transition-all">{item.value || '-'}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-navy-primary text-white p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group border-4 border-gold-primary/10">
                   <div className="relative z-10 font-bold uppercase tracking-tighter italic text-white font-black">
                      <h2 className="text-3xl font-black mb-8 italic tracking-tighter uppercase flex items-center gap-4 py-2 border-l-4 border-gold-primary px-4 bg-white/5 rounded-r-2xl transform group-hover:scale-105 transition-all italic">
                         <Shield className="w-8 h-8 text-gold-primary shadow-xl" />
                         Industrial Integrity
                      </h2>
                      <div className="grid md:grid-cols-2 gap-6 font-bold uppercase tracking-tighter italic text-white font-black text-white font-black uppercase">
                          <div className="p-6 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors shadow-sm transform hover:scale-105 transition-all text-white font-black uppercase">
                             <p className="text-gold-primary font-black uppercase text-[10px] tracking-widest mb-1 italic tracking-tighter underline">Tensile Strength</p>
                             <p className="text-xl font-black italic tracking-tighter text-white uppercase underline decoration-gold-primary decoration-4 underline-offset-4 italic">550 MPa (Annealed)</p>
                          </div>
                          <div className="p-6 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors shadow-sm transform hover:scale-105 transition-all text-white font-black uppercase">
                             <p className="text-gold-primary font-black uppercase text-[10px] tracking-widest mb-1 italic tracking-tighter underline">Service Profile</p>
                             <p className="text-xl font-black italic tracking-tighter text-white uppercase underline decoration-gold-primary decoration-4 underline-offset-4 italic font-black">Acid & Seawater Expert</p>
                          </div>
                      </div>
                   </div>
                   <Microscope className="absolute right-[-5%] top-[-5%] w-64 h-64 text-white/5 pointer-events-none group-hover:scale-110 transition-transform p-4 rotate-12 opacity-20 shadow-2xl p-8" />
                </div>
              </div>
              <div className="space-y-8 h-fit font-bold uppercase tracking-tighter italic text-black font-black">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-700 h-fit italic border-2 border-navy-primary/5 hover:border-gold-primary/20 transition-all font-black text-black">
                  <h3 className="text-xl font-black text-navy-primary dark:text-white mb-6 italic tracking-tighter uppercase border-b-2 border-gold-primary pb-2 underline decoration-gold-primary/10 transition-all transform hover:translate-x-2 font-black italic">Physical Properties</h3>
                  <div className="space-y-6 font-bold uppercase tracking-tighter italic text-black">
                    {physicalProperties.map((prop, i) => (
                      <div key={i} className="space-y-1">
                        <div className="flex justify-between items-center px-2 py-1 border-b border-navy-primary/10 hover:bg-gray-50 transition-colors rounded-lg">
                          <span className="text-xs text-gray-400 uppercase font-extrabold italic tracking-tighter">{prop.property}</span>
                          <span className="font-black text-navy-primary dark:text-gold-primary italic text-sm tracking-tighter uppercase decoration-gold-primary decoration-2 underline underline-offset-2 shadow-sm italic transform hover:scale-110 transition-transform">{prop.value}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-gradient-to-br from-gold-primary to-yellow-600 p-8 rounded-[2.5rem] shadow-2xl text-navy-primary group overflow-hidden h-fit border-4 border-white/5 hover:border-white/20 transition-all font-black">
                   <h3 className="text-2xl font-black mb-6 italic tracking-tighter uppercase underline decoration-navy-primary/10 transition-all transform hover:scale-105 font-black italic">Project Uses</h3>
                   <div className="space-y-4 font-black italic uppercase tracking-tighter h-fit underline">
                      {["Marine Heat Exchangers", "Propeller Shafts", "Chemical Reactors", "Boiler Feed Water Heaters", "Gasoline & Water Tanks", "Pump & Valve Trim"].map((use, i) => (
                         <div key={i} className="flex items-center gap-3 text-sm group/item transition-all hover:bg-white/20 p-2 rounded-2xl transform hover:translate-x-2 transition-all font-black uppercase tracking-tighter italic">
                            <Zap className="w-4 h-4 text-navy-primary/60 group-hover/item:text-navy-primary shadow-xl" />
                            <span className="italic tracking-tighter underline decoration-navy-primary/20 group-hover/item:decoration-navy-primary group-hover/item:decoration-2 transition-all py-1 font-black underline">{use}</span>
                         </div>
                      ))}
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700 text-center relative overflow-hidden shadow-2xl h-fit font-black italic">
           <div className="container mx-auto px-4 relative z-10 text-black">
              <h2 className="text-4xl font-black text-navy-primary dark:text-white mb-6 italic tracking-tighter uppercase underline decoration-gold-primary decoration-4 underline-offset-8 scale-110 transition-transform duration-700 italic">Direct Supplier: Monel 400 Bars</h2>
              <p className="text-lg text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto font-black italic tracking-tighter uppercase border-b border-navy-primary/5 pb-4 italic transform hover:scale-105 transition-all">Mamta Steel Traders delivers ready-to-dispatch Monel 400 (UNS N04400) round bars for the world's most aggressive marine and industrial environments. Zero-compromise quality for high-fatigue and stress-critical operations. Global export certifiable.</p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center overflow-hidden font-black">
                 <Link href="/contact" className="bg-navy-primary text-white px-12 py-5 rounded-3xl font-black hover:bg-navy-secondary transition-all shadow-xl italic tracking-tighter uppercase text-xl transform hover:scale-110 duration-300 italic border-b-4 border-gold-primary/20 text-center">Inquire Technical Batch</Link>
                 <a href="mailto:naren@mamtasteel.com" className="border-4 border-navy-primary text-navy-primary px-12 py-5 rounded-3xl font-black hover:bg-gray-100 transition-all italic tracking-tighter uppercase text-xl transform hover:scale-110 duration-300 shadow-lg italic bg-white inline-block h-fit uppercase text-center">Download Spec Sheet</a>
              </div>
           </div>
           <Settings className="absolute left-[-5%] bottom-[-5%] w-64 h-64 text-gray-100 dark:text-gray-700/50 rotate-45 pointer-events-none opacity-40 p-8 shadow-2xl transition-all duration-1000" />
        </section>
      </div>
    </>
  );
}
