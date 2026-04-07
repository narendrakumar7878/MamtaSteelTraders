import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft, ArrowRight, Activity, Shield, Microscope, Zap, Settings } from "lucide-react";
import { Link } from "wouter";

export default function Inconel600RoundBarsDetail() {
  const chemicalComposition = [
    { element: "Nickel (Ni)", value: "72.0% min" },
    { element: "Chromium (Cr)", value: "14.0 – 17.0%" },
    { element: "Iron (Fe)", value: "6.0 – 10.0%" },
    { element: "Manganese (Mn)", value: "1.0% max" },
    { element: "Silicon (Si)", value: "0.5% max" },
    { element: "Copper (Cu)", value: "0.5% max" },
    { element: "Carbon (C)", value: "0.15% max" }
  ];

  const physicalProperties = [
    { property: "Density", value: "8.47 g/cm³" },
    { property: "Melting Point", value: "1354 – 1413°C" },
    { property: "Tensile Strength (Annealed)", value: "550 MPa min" },
    { property: "Yield Strength (Annealed)", value: "240 MPa min" },
    { property: "Elongation", value: "30% min" }
  ];

  return (
    <>
      <ProductSEO
        title="Inconel 600 Round Bars | UNS N06600 | Alloy 600 Supplier Mumbai"
        description="Premium Inconel 600 (UNS N06600) round bars. Exceptional resistance to oxidation and corrosion at high temperatures. High-strength nickel alloy for nuclear and chemical processing."
        keywords="inconel 600 round bars, alloy 600 supplier mumbai, uns n06600 bars, nickel chromium alloy 600, high temperature inconel bars"
        canonicalUrl="/product/round-bars/inconel/inconel-600-round-bars"
      />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 font-bold tracking-tighter italic text-black">
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
           <div className="container mx-auto px-4 py-4">
              <nav className="flex items-center space-x-2 text-sm flex-wrap text-black font-black uppercase">
                 <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary underline decoration-navy-primary/20 transition-colors italic tracking-tighter uppercase">Home</Link>
                 <ArrowRight className="w-4 h-4 text-gray-400 font-extrabold" />
                 <Link href="/product/round-bars/inconel" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary underline decoration-navy-primary/20 transition-colors italic tracking-tighter uppercase">Inconel Series</Link>
                 <ArrowRight className="w-4 h-4 text-gray-400 font-extrabold" />
                 <span className="text-navy-primary dark:text-gold-primary underline decoration-gold-primary decoration-2 underline-offset-4 italic tracking-tighter uppercase">Inconel 600 (UNS N06600)</span>
              </nav>
           </div>
        </div>
        <div className="container mx-auto px-4 py-4">
           <Link href="/product/round-bars/inconel" className="inline-flex items-center text-navy-primary dark:text-gold-primary hover:underline font-black uppercase text-xs">
              <ArrowLeft className="w-3 h-3 mr-2" /> Back to Inconel Hub
           </Link>
        </div>
        <section className="bg-gradient-to-br from-navy-primary via-navy-secondary to-slate-800 text-white py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl">
              <span className="bg-gold-primary text-navy-primary px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-6 inline-block shadow-lg italic">Aerospace & Nuclear Grade</span>
              <h1 className="text-5xl md:text-7xl font-black mb-6 italic tracking-tighter uppercase leading-none underline decoration-gold-primary decoration-4 underline-offset-[12px]">Inconel 600</h1>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl opacity-90 leading-relaxed italic uppercase">Nickel-Chromium-Iron alloy offering a balanced combination of high strength and excellent corrosion resistance up to 1093°C.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="bg-gold-primary hover:bg-white text-navy-primary px-10 py-4 rounded-2xl font-black transition-all shadow-xl italic tracking-tighter uppercase text-xl">Request Technical Quote</Link>
                <a href="tel:+919819322576" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-10 py-4 rounded-2xl font-bold transition-all backdrop-blur-sm italic tracking-tighter uppercase text-xl text-center">Consult Material Expert</a>
              </div>
            </div>
          </div>
          <Activity className="absolute right-[-10%] bottom-[-10%] w-[500px] h-[500px] text-white/5 pointer-events-none rotate-12" />
        </section>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-12">
                <div className="bg-white dark:bg-gray-800 p-10 rounded-[2.5rem] shadow-2xl border border-gray-100 dark:border-gray-700">
                  <h2 className="text-3xl font-black text-navy-primary dark:text-white mb-8 italic tracking-tighter uppercase border-l-8 border-gold-primary pl-6">Metallurgical Profile</h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 italic font-semibold p-4 bg-gray-50 dark:bg-gray-700 rounded-2xl border-l-4 border-gold-primary uppercase tracking-tighter">Inconel 600 (UNS N06600) is a versatile nickel-chromium-iron alloy featuring exceptional resistance to high-temperature oxidation and chloride-ion stress-corrosion cracking. Its high nickel content enables the alloy to retain substantial resistance under reducing conditions, while the chromium chromium content provides resistance to weaker oxidizing environments. Mamta Steel Traders delivers Inconel 600 bars specifically for nuclear engineering and heat-treatment equipment.</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {chemicalComposition.map((item, i) => (
                      <div key={i} className="p-5 bg-gray-50 dark:bg-gray-700/50 rounded-3xl border border-gray-100 dark:border-gray-600 group hover:border-gold-primary transition-all border-2 border-transparent">
                        <p className="text-[10px] text-gray-500 uppercase font-black mb-1 italic tracking-tighter">{item.element}</p>
                        <p className="text-xl font-black text-navy-primary dark:text-gold-primary tracking-tighter uppercase italic">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-navy-primary text-white p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                   <div className="relative z-10">
                      <h2 className="text-3xl font-black mb-8 italic tracking-tighter uppercase flex items-center gap-4">
                         <Shield className="w-8 h-8 text-gold-primary" />
                         Industrial Integrity
                      </h2>
                      <div className="grid md:grid-cols-2 gap-6">
                          <div className="p-6 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                             <p className="text-gold-primary font-black uppercase text-[10px] tracking-widest mb-1 italic tracking-tighter underline">Service Temperature</p>
                             <p className="text-xl font-black italic tracking-tighter text-white uppercase underline decoration-gold-primary decoration-2 underline-offset-4">Up to 1093°C</p>
                          </div>
                          <div className="p-6 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                             <p className="text-gold-primary font-black uppercase text-[10px] tracking-widest mb-1 italic tracking-tighter underline">Magnetic Property</p>
                             <p className="text-xl font-black italic tracking-tighter text-white uppercase underline decoration-gold-primary decoration-2 underline-offset-4">Non-Magnetic</p>
                          </div>
                      </div>
                   </div>
                   <Microscope className="absolute right-[-5%] top-[-5%] w-64 h-64 text-white/5 pointer-events-none group-hover:scale-110 transition-transform p-4 rotate-12" />
                </div>
              </div>
              <div className="space-y-8">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-700">
                  <h3 className="text-xl font-black text-navy-primary dark:text-white mb-6 italic tracking-tighter uppercase border-b border-gold-primary pb-2 underline underline-offset-4">Physical Properties</h3>
                  <div className="space-y-6">
                    {physicalProperties.map((prop, i) => (
                      <div key={i} className="space-y-1">
                        <div className="flex justify-between items-center px-2 py-1 border-b border-navy-primary/5">
                          <span className="text-xs text-gray-400 uppercase font-bold italic tracking-tighter">{prop.property}</span>
                          <span className="font-black text-navy-primary dark:text-gold-primary italic text-sm tracking-tighter uppercase underline decoration-gold-primary/20">{prop.value}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-gradient-to-br from-gold-primary to-yellow-600 p-8 rounded-[2.5rem] shadow-2xl text-navy-primary group overflow-hidden">
                   <h3 className="text-2xl font-black mb-6 italic tracking-tighter uppercase">Industrial Uses</h3>
                   <div className="space-y-4 font-black italic uppercase tracking-tighter">
                      {["Nuclear Reactors", "Gas Turbine Components", "Jet Engine Parts", "Chemical Processing", "Heat Exchangers", "Furnace Components"].map((use, i) => (
                         <div key={i} className="flex items-center gap-3 text-sm group/item transition-all hover:bg-white/10 p-1 rounded-xl">
                            <Zap className="w-4 h-4 text-navy-primary/60 group-hover/item:text-navy-primary" />
                            <span className="italic tracking-tighter underline decoration-navy-primary/20 group-hover/item:decoration-navy-primary group-hover/item:decoration-2 transition-all">{use}</span>
                         </div>
                      ))}
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700 text-center relative overflow-hidden">
           <div className="container mx-auto px-4 relative z-10">
              <h2 className="text-4xl font-black text-navy-primary dark:text-white mb-6 italic tracking-tighter uppercase underline decoration-gold-primary decoration-4 underline-offset-8">Direct Supplier: Inconel 600 Bars</h2>
              <p className="text-lg text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto font-medium italic tracking-tighter uppercase border-b border-navy-primary/5 pb-4">Mamta Steel Traders delivers ready-to-dispatch Inconel 600 (UNS N06600) round bars for critical high-temperature engineering. Proven performance in aerospace and nuclear sectors. Global delivery support.</p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                 <Link href="/contact" className="bg-navy-primary text-white px-12 py-5 rounded-3xl font-black hover:bg-navy-secondary transition-all shadow-xl italic tracking-tighter uppercase text-xl transform hover:scale-105 duration-300">Inquire Technical Batch</Link>
                 <a href="mailto:naren@mamtasteel.com" className="border-4 border-navy-primary text-navy-primary px-12 py-5 rounded-3xl font-black hover:bg-gray-50 transition-all italic tracking-tighter uppercase text-xl transform hover:scale-105 duration-300 shadow-lg">Download Spec Sheet</a>
              </div>
           </div>
           <Settings className="absolute left-[-5%] bottom-[-5%] w-64 h-64 text-gray-100 dark:text-gray-700/50 rotate-45 pointer-events-none opacity-50" />
        </section>
      </div>
    </>
  );
}


