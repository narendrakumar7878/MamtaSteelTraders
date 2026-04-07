import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft, ArrowRight, Activity, Shield, Microscope, Zap, Settings } from "lucide-react";
import { Link } from "wouter";

export default function EN14AManganeseSteelDetail() {
  const chemicalComposition = [
    { element: "Carbon (C)", value: "0.20 – 0.30%" },
    { element: "Silicon (Si)", value: "0.05 – 0.35%" },
    { element: "Manganese (Mn)", value: "1.30 – 1.70%" },
    { element: "Sulphur (S)", value: "0.05% max" },
    { element: "Phosphorus (P)", value: "0.05% max" }
  ];

  const thermalSpecs = [
    { process: "Forgeability", temp: "1150 – 1000°C", desc: "Good forgeability; air cool slowly to avoid stress." },
    { process: "Weldability", temp: "Good", desc: "Easily welded with standard methods; pre-heat may be needed for thick sections." },
    { process: "Machinability", temp: "Very Good", desc: "Manganese content provides excellent surface finish and chip control." }
  ];

  return (
    <>
      <ProductSEO
        title="EN14A Manganese Steel Round Bars | Medium Tensile | BS 970 | Mumbai"
        description="Premium EN14A carbon-manganese steel round bars. Medium tensile strength and high impact properties for general engineering. Certified BS 970 standards."
        keywords="en14a manganese steel, en14a round bars mumbai, medium tensile steel, carbon manganese steel, en series round bars"
        canonicalUrl="/product/round-bars/en-series/en14a-manganese-steel"
      />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 font-bold tracking-tighter italic">
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
           <div className="container mx-auto px-4 py-4">
              <nav className="flex items-center space-x-2 text-sm flex-wrap">
                 <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary uppercase">Home</Link>
                 <ArrowRight className="w-4 h-4 text-gray-400" />
                 <Link href="/product/round-bars/en-series" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary uppercase">EN Series</Link>
                 <ArrowRight className="w-4 h-4 text-gray-400" />
                 <span className="text-navy-primary dark:text-gold-primary">EN14A Manganese Steel</span>
              </nav>
           </div>
        </div>
        <div className="container mx-auto px-4 py-4">
           <Link href="/product/round-bars/en-series" className="inline-flex items-center text-navy-primary dark:text-gold-primary hover:underline font-black uppercase text-xs">
              <ArrowLeft className="w-3 h-3 mr-2" /> Back to EN Series Hub
           </Link>
        </div>
        <section className="bg-gradient-to-br from-navy-primary via-navy-secondary to-slate-800 text-white py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl">
              <span className="bg-gold-primary text-navy-primary px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-6 inline-block shadow-lg underline decoration-navy-primary decoration-4">The Tough Connector</span>
              <h1 className="text-5xl md:text-7xl font-black mb-6 italic tracking-tighter uppercase leading-none">EN14A Carbon Manganese</h1>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl opacity-90 leading-relaxed italic uppercase">Balanced medium-tensile steel offering superior impact strength and consistent machinability for industrial couplings.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="bg-gold-primary hover:bg-white text-navy-primary px-10 py-4 rounded-2xl font-black transition-all shadow-xl italic tracking-tighter uppercase">Inquire Batch Stock</Link>
                <a href="tel:+919819322576" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-10 py-4 rounded-2xl font-bold transition-all backdrop-blur-sm italic tracking-tighter uppercase">Talk to Specialist</a>
              </div>
            </div>
          </div>
          <Activity className="absolute right-[-10%] bottom-[-10%] w-[500px] h-[500px] text-white/5 pointer-events-none rotate-12 h-fit" />
        </section>
        <section className="py-20 h-fit">
          <div className="container mx-auto px-4 text-black h-fit overflow-hidden">
            <div className="grid lg:grid-cols-3 gap-12 h-fit overflow-hidden">
              <div className="lg:col-span-2 space-y-12 h-fit overflow-hidden">
                <div className="bg-white dark:bg-gray-800 p-10 rounded-[2.5rem] shadow-2xl border border-gray-100 dark:border-gray-700 h-fit">
                  <h2 className="text-3xl font-black text-navy-primary dark:text-white mb-8 italic tracking-tighter uppercase border-l-8 border-gold-primary pl-6 h-fit">Metallurgical Framework (EN14A)</h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 italic font-semibold p-4 bg-gray-50 dark:bg-gray-700 rounded-2xl border-l-4 border-gold-primary uppercase tracking-tighter h-fit">EN14A (150M28) is a carbon-manganese steel grade typically supplied in the as-rolled condition. It is known for its excellent weldability and higher tensile strength compared to mild steel (EN3B), making it a premium choice for general engineering components requiring additional toughness without the complexity of high alloy heat treatments.</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 h-fit h-fit overflow-hidden">
                    {chemicalComposition.map((item, i) => (
                      <div key={i} className="p-5 bg-gray-50 dark:bg-gray-700/50 rounded-3xl border border-gray-100 dark:border-gray-600 group hover:border-gold-primary transition-all h-fit h-fit overflow-hidden">
                        <p className="text-[10px] text-gray-500 uppercase font-black mb-1 h-fit overflow-hidden">{item.element}</p>
                        <p className="text-xl font-black text-navy-primary dark:text-gold-primary tracking-tighter uppercase italic h-fit overflow-hidden">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-navy-primary text-white p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group h-fit">
                   <div className="relative z-10 h-fit">
                      <h2 className="text-3xl font-black mb-8 italic tracking-tighter uppercase flex items-center gap-4 h-fit">
                         <Shield className="w-8 h-8 text-gold-primary" />
                         Industrial Performance
                      </h2>
                      <div className="grid md:grid-cols-2 gap-6 h-fit">
                          <div className="p-6 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors h-fit text-white h-fit overflow-hidden">
                             <p className="text-gold-primary font-black uppercase text-[10px] tracking-widest mb-1 italic h-fit overflow-hidden">Yield Strength</p>
                             <p className="text-xl font-black italic tracking-tighter text-white uppercase italic h-fit overflow-hidden">280 – 350 MPa</p>
                          </div>
                          <div className="p-6 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors h-fit text-white h-fit overflow-hidden">
                             <p className="text-gold-primary font-black uppercase text-[10px] tracking-widest mb-1 italic h-fit overflow-hidden">Standard Condition</p>
                             <p className="text-xl font-black italic tracking-tighter text-white uppercase italic h-fit overflow-hidden">As-Rolled / Bright Drawn</p>
                          </div>
                      </div>
                   </div>
                   <Microscope className="absolute right-[-5%] top-[-5%] w-64 h-64 text-white/5 pointer-events-none group-hover:scale-110 transition-transform h-fit" />
                </div>
              </div>
              <div className="space-y-8 h-fit h-fit overflow-hidden">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-700 h-fit overflow-hidden">
                  <h3 className="text-xl font-black text-navy-primary dark:text-white mb-6 italic tracking-tighter uppercase border-b border-gold-primary pb-2 h-fit overflow-hidden">Processing Protocol</h3>
                  <div className="space-y-6 h-fit overflow-hidden h-fit">
                    {thermalSpecs.map((eq, i) => (
                      <div key={i} className="space-y-1 h-fit h-fit overflow-hidden">
                        <div className="flex justify-between items-center h-fit h-fit overflow-hidden">
                          <span className="text-xs text-gray-400 uppercase font-bold italic h-fit overflow-hidden">{eq.process}</span>
                          <span className="font-black text-navy-primary dark:text-gold-primary italic text-sm tracking-tighter uppercase h-fit overflow-hidden">{eq.temp}</span>
                        </div>
                        <p className="text-[10px] text-gray-400 font-medium italic lowercase h-fit overflow-hidden">{eq.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-gradient-to-br from-gold-primary to-yellow-600 p-8 rounded-[2.5rem] shadow-2xl text-navy-primary group overflow-hidden h-fit overflow-hidden">
                   <h3 className="text-2xl font-black mb-6 italic tracking-tighter uppercase h-fit overflow-hidden">Key Applications</h3>
                   <div className="space-y-4 font-black italic uppercase tracking-tighter h-fit overflow-hidden">
                      {["Shafting and Couplings", "Hydraulic Rams", "Axles and Spindles", "Structural Connectors", "Lifting Hooks", "Agricultural Machinery"].map((use, i) => (
                         <div key={i} className="flex items-center gap-3 text-sm group/item transition-all h-fit h-fit overflow-hidden">
                            <Zap className="w-4 h-4 text-navy-primary/60 group-hover/item:text-navy-primary h-fit" />
                            <span>{use}</span>
                         </div>
                      ))}
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700 text-center relative overflow-hidden h-fit h-fit">
           <div className="container mx-auto px-4 relative z-10 h-fit overflow-hidden">
              <h2 className="text-4xl font-black text-navy-primary dark:text-white mb-6 italic tracking-tighter uppercase h-fit overflow-hidden">Direct Supplier: EN14A Manganese Steel</h2>
              <p className="text-lg text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto font-medium italic tracking-tighter italic uppercase h-fit overflow-hidden">Mamta Steel Traders stocks certified EN14A round bars with full NABL approved mill test certificates. We serve the heavy engineering hubs across India with ready-to-dispatch inventory.</p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center h-fit overflow-hidden">
                 <Link href="/contact" className="bg-navy-primary text-white px-12 py-5 rounded-3xl font-black hover:bg-navy-secondary transition-all shadow-xl italic tracking-tighter uppercase h-fit overflow-hidden">Request Batch Pricing</Link>
                 <a href="mailto:naren@mamtasteel.com" className="border-4 border-navy-primary text-navy-primary px-12 py-5 rounded-3xl font-black hover:bg-gray-50 transition-all italic tracking-tighter uppercase h-fit overflow-hidden">Download Data Sheet</a>
              </div>
           </div>
           <Settings className="absolute left-[-5%] bottom-[-5%] w-64 h-64 text-gray-100 dark:text-gray-700/50 rotate-45 pointer-events-none h-fit overflow-hidden" />
        </section>
      </div>
    </>
  );
}


