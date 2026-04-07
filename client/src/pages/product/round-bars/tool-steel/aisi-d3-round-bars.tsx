import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft, ArrowRight, Activity, Shield, Microscope, Zap, Settings } from "lucide-react";
import { Link } from "wouter";

export default function AISID3ToolSteelDetail() {
  const chemicalComposition = [
    { element: "Carbon (C)", value: "2.00 – 2.35%" },
    { element: "Chromium (Cr)", value: "11.00 – 13.50%" },
    { element: "Manganese (Mn)", value: "0.60% max" },
    { element: "Silicon (Si)", value: "0.60% max" },
    { element: "Phosphorus (P)", value: "0.03% max" },
    { element: "Sulfur (S)", value: "0.03% max" }
  ];

  const thermalProperties = [
    { property: "Density", value: "7.70 g/cm³" },
    { property: "Annealed Hardness", value: "250 HB max" },
    { property: "Tempered Hardness", value: "60 – 64 HRC" },
    { property: "Critical Temp (Ac1)", value: "810°C" },
    { property: "Forging Temp", value: "1050 – 850°C" }
  ];

  return (
    <>
      <ProductSEO
        title="AISI D3 Tool Steel Round Bars | UNS T30403 | High Wear Resistance Die Steel"
        description="Premium AISI D3 (UNS T30403 / DIN 1.2080) tool steel round bars. High carbon, high chromium cold work tool steel with maximum wear resistance and dimensional stability. Ideal for mass production tooling."
        keywords="aisi d3 tool steel round bars, uns t30403 supplier mumbai, d3 die steel price, d3 tool steel chemical composition, high wear die steel"
        canonicalUrl="/product/round-bars/tool-steel/aisi-d3-round-bars"
      />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 font-bold tracking-tighter italic text-black">
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
           <div className="container mx-auto px-4 py-4">
              <nav className="flex items-center space-x-2 text-sm flex-wrap text-black font-black uppercase tracking-tighter italic">
                 <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary underline decoration-navy-primary/20 transition-colors italic tracking-tighter uppercase font-black italic">Home</Link>
                 <ArrowRight className="w-4 h-4 text-gray-400 font-extrabold" />
                 <Link href="/product/round-bars/tool-steel" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary underline decoration-navy-primary/20 transition-colors italic tracking-tighter uppercase font-black italic">Tool Steel Series</Link>
                 <ArrowRight className="w-4 h-4 text-gray-400 font-extrabold" />
                 <span className="text-navy-primary dark:text-gold-primary underline decoration-gold-primary decoration-2 underline-offset-4 italic tracking-tighter uppercase font-black italic">AISI D3 Tool Steel</span>
              </nav>
           </div>
        </div>
        <div className="container mx-auto px-4 py-4">
           <Link href="/product/round-bars/tool-steel" className="inline-flex items-center text-navy-primary dark:text-gold-primary hover:underline font-black uppercase text-xs italic tracking-tighter italic">
              <ArrowLeft className="w-3 h-3 mr-2 font-black" /> Back to Tool Steel Hub
           </Link>
        </div>
        <section className="bg-gradient-to-br from-navy-primary via-navy-secondary to-slate-800 text-white py-20 relative overflow-hidden font-black italic text-white uppercase tracking-tighter italic">
          <div className="container mx-auto px-4 relative z-10 text-white font-black italic uppercase tracking-tighter italic font-black uppercase tracking-tighter italic">
            <div className="max-w-4xl text-white font-black italic uppercase italic">
              <span className="bg-gold-primary text-navy-primary px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-6 inline-block shadow-lg italic overflow-hidden scale-105 font-black italic">Maximum Abrasion Resistance</span>
              <h1 className="text-5xl md:text-7xl font-black mb-6 italic tracking-tighter uppercase leading-none underline decoration-gold-primary decoration-4 underline-offset-[12px] opacity-100 italic font-black">AISI D3 STEEL</h1>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl opacity-90 leading-relaxed italic uppercase tracking-tighter scale-105 italic font-black">Featuring higher carbon than D2, AISI D3 (DIN 1.2080) is an oil-hardening cold work tool steel offering extreme resistance to wear and abrasion, making it the premier choice for long-run mass production dies.</p>
              <div className="flex flex-wrap gap-4 overflow-hidden font-black">
                <Link href="/contact" className="bg-gold-primary hover:bg-white text-navy-primary px-10 py-4 rounded-2xl font-black transition-all shadow-xl italic tracking-tighter uppercase text-xl transform hover:scale-105 text-center italic font-black">Request Technical Quote</Link>
                <a href="tel:+919819322576" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-10 py-4 rounded-2xl font-bold transition-all backdrop-blur-sm italic tracking-tighter uppercase text-xl transform hover:scale-105 text-center shadow-lg italic font-black uppercase tracking-tighter italic">Consult Metallurgist</a>
              </div>
            </div>
          </div>
          <Activity className="absolute right-[-10%] bottom-[-10%] w-[500px] h-[500px] text-white/5 pointer-events-none rotate-12 opacity-30 shadow-2xl" />
        </section>

        <section className="py-20 bg-gray-50 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 h-fit text-black font-black uppercase tracking-tighter italic font-black uppercase tracking-tighter italic">
          <div className="container mx-auto px-4 text-black font-black uppercase tracking-tighter italic font-black uppercase tracking-tighter italic">
            <div className="grid lg:grid-cols-3 gap-12 text-black font-black uppercase tracking-tighter italic font-black uppercase tracking-tighter italic">
              <div className="lg:col-span-2 space-y-12 text-black font-black uppercase tracking-tighter italic font-black uppercase tracking-tighter italic">
                <div className="bg-white dark:bg-gray-800 p-10 rounded-[2.5rem] shadow-2xl border border-gray-100 dark:border-gray-700 text-black font-black uppercase tracking-tighter italic">
                  <h2 className="text-3xl font-black text-navy-primary dark:text-white mb-8 italic tracking-tighter uppercase border-l-8 border-gold-primary pl-6 py-2 shadow-sm scale-110 font-black italic">Metallurgical Profile</h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 italic font-semibold p-4 bg-gray-50 dark:bg-gray-700 rounded-2xl border-l-4 border-gold-primary uppercase tracking-tighter decoration-gold-primary/20 transition-all shadow-md italic font-black uppercase tracking-tighter italic">AISI D3 (UNS T30403 / DIN 1.2080) is a high-carbon, high-chromium tool steel categorized under the cold work category. It is an oil-hardening steel that exhibits high hardness and exceptional wear resistance. It contains a high volume of hard chromium carbides which provide excellent abrasion resistance against both sliding and impact wear. Mamta Steel Traders supplies D3 bars primarily for blanking and forming dies of thin material, brick and ceramic molds, and master taps.</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 font-semibold uppercase tracking-tighter italic font-black uppercase tracking-tighter italic">
                    {chemicalComposition.map((item, i) => (
                      <div key={i} className="p-5 bg-gray-50 dark:bg-gray-700/50 rounded-3xl border border-gray-100 dark:border-gray-600 group hover:border-gold-primary transition-all border-2 border-transparent shadow-sm hover:shadow-lg transform hover:-translate-y-1 font-black italic">
                        <p className="text-[10px] text-gray-500 uppercase font-black mb-1 italic tracking-tighter font-black italic">{item.element}</p>
                        <p className="text-xl font-black text-navy-primary dark:text-gold-primary tracking-tighter uppercase italic py-1 underline decoration-gold-primary/10 transition-all font-black italic">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-navy-primary text-white p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group border-4 border-gold-primary/10 font-black uppercase tracking-tighter italic font-black uppercase tracking-tighter italic">
                   <div className="relative z-10 font-bold uppercase tracking-tighter italic text-white font-black uppercase tracking-tighter italic font-black uppercase tracking-tighter italic text-white">
                      <h2 className="text-3xl font-black mb-8 italic tracking-tighter uppercase flex items-center gap-4 py-2 border-l-4 border-gold-primary px-4 bg-white/5 rounded-r-2xl transform group-hover:scale-105 transition-all text-white font-black italic font-black uppercase tracking-tighter italic">
                         <Shield className="w-8 h-8 text-gold-primary shadow-xl font-black italic" />
                         Industrial Integrity
                      </h2>
                      <div className="grid md:grid-cols-2 gap-6 font-bold uppercase tracking-tighter italic text-white font-black uppercase tracking-tighter italic font-black uppercase tracking-tighter italic font-black uppercase underline decoration-gold-primary decoration-4 underline-offset-4 italic text-white">
                          <div className="p-6 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors shadow-sm transform hover:scale-105 transition-all font-black uppercase tracking-tighter italic">
                             <p className="text-gold-primary font-black uppercase text-[10px] tracking-widest mb-1 italic tracking-tighter underline font-black uppercase tracking-tighter italic">Tempered Hardness</p>
                             <p className="text-xl font-black italic tracking-tighter text-white uppercase underline decoration-gold-primary decoration-4 underline-offset-4 italic font-black uppercase tracking-tighter italic">60 – 64 HRC</p>
                          </div>
                          <div className="p-6 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors shadow-sm transform hover:scale-105 transition-all font-black uppercase tracking-tighter italic font-black uppercase tracking-tighter italic font-black">
                             <p className="text-gold-primary font-black uppercase text-[10px] tracking-widest mb-1 italic tracking-tighter underline font-black uppercase tracking-tighter italic">Max Wear Grade</p>
                             <p className="text-xl font-black italic tracking-tighter text-white uppercase underline decoration-gold-primary decoration-4 underline-offset-4 italic font-black uppercase tracking-tighter italic font-black">2.1% Carbon Die Steel</p>
                          </div>
                      </div>
                   </div>
                   <Microscope className="absolute right-[-5%] top-[-5%] w-64 h-64 text-white/5 pointer-events-none group-hover:scale-110 transition-transform p-4 rotate-12 opacity-20 shadow-2xl p-8 font-black italic" />
                </div>
              </div>
              <div className="space-y-8 h-fit font-bold uppercase tracking-tighter italic text-black font-black uppercase tracking-tighter italic font-black uppercase tracking-tighter italic">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-700 h-fit italic border-2 border-navy-primary/5 hover:border-gold-primary/20 transition-all font-black uppercase tracking-tighter italic text-black">
                  <h3 className="text-xl font-black text-navy-primary dark:text-white mb-6 italic tracking-tighter uppercase border-b-2 border-gold-primary pb-2 underline decoration-gold-primary/10 transition-all transform hover:translate-x-2 font-black italic font-black uppercase tracking-tighter italic">Thermal Performance</h3>
                  <div className="space-y-6 font-bold uppercase tracking-tighter italic font-black uppercase tracking-tighter italic font-black uppercase tracking-tighter italic">
                    {thermalProperties.map((prop, i) => (
                      <div key={i} className="space-y-1 font-black uppercase tracking-tighter italic">
                        <div className="flex justify-between items-center px-2 py-1 border-b border-navy-primary/10 hover:bg-gray-50 transition-colors rounded-lg font-black uppercase tracking-tighter italic">
                          <span className="text-xs text-gray-400 uppercase font-extrabold italic tracking-tighter font-black uppercase tracking-tighter italic font-black italic">{prop.property}</span>
                          <span className="font-black text-navy-primary dark:text-gold-primary italic text-sm tracking-tighter uppercase decoration-gold-primary decoration-2 underline underline-offset-2 shadow-sm italic transform hover:scale-110 transition-transform font-black uppercase tracking-tighter italic font-black italic">{prop.value}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-gradient-to-br from-gold-primary to-yellow-600 p-8 rounded-[2.5rem] shadow-2xl text-navy-primary group overflow-hidden h-fit border-4 border-white/5 hover:border-white/20 transition-all font-black uppercase tracking-tighter italic font-black uppercase tracking-tighter italic">
                   <h3 className="text-2xl font-black mb-6 italic tracking-tighter uppercase underline decoration-navy-primary/10 transition-all transform hover:scale-105 font-black italic font-black uppercase tracking-tighter italic">Project Uses</h3>
                   <div className="space-y-4 font-black italic uppercase tracking-tighter h-fit underline font-black uppercase tracking-tighter italic font-black uppercase tracking-tighter italic">
                      {["Heavy Blanking Dies", "Brick & Tile Molds", "Forming Rolls", "Master Taps", "Gauges", "Precision Slitting Cutters"].map((use, i) => (
                         <div key={i} className="flex items-center gap-3 text-sm group/item transition-all hover:bg-white/20 p-2 rounded-2xl transform hover:translate-x-2 transition-all font-black uppercase tracking-tighter italic font-black uppercase tracking-tighter italic">
                            <Zap className="w-4 h-4 text-navy-primary/60 group-hover/item:text-navy-primary shadow-xl font-black italic" />
                            <span className="italic tracking-tighter underline decoration-navy-primary/20 group-hover/item:decoration-navy-primary group-hover/item:decoration-2 transition-all py-1 font-black underline font-black uppercase tracking-tighter italic">{use}</span>
                         </div>
                      ))}
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700 text-center relative overflow-hidden shadow-2xl h-fit font-black italic text-black font-black uppercase tracking-tighter italic font-black uppercase tracking-tighter italic">
           <div className="container mx-auto px-4 relative z-10 text-black font-black uppercase tracking-tighter italic font-black uppercase tracking-tighter italic">
              <h2 className="text-4xl font-black text-navy-primary dark:text-white mb-6 italic tracking-tighter uppercase underline decoration-gold-primary decoration-4 underline-offset-8 scale-110 transition-transform duration-700 italic font-black italic font-black uppercase tracking-tighter italic">Direct Supplier: AISI D3 Tool Steel</h2>
              <p className="text-lg text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto font-black italic tracking-tighter uppercase border-b border-navy-primary/5 pb-4 italic transform hover:scale-105 transition-all font-black uppercase tracking-tighter italic font-black uppercase tracking-tighter italic">Mamta Steel Traders delivers ready-to-dispatch AISI D3 (UNS T30403) tool steel round bars for high-abrasion industrial environments. Maximum carbide density and certified compliance for long-run mass production. Global export support.</p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center overflow-hidden font-black uppercase tracking-tighter italic font-black uppercase tracking-tighter italic">
                 <Link href="/contact" className="bg-navy-primary text-white px-12 py-5 rounded-3xl font-black hover:bg-navy-secondary transition-all shadow-xl italic tracking-tighter uppercase text-xl transform hover:scale-110 duration-300 italic border-b-4 border-gold-primary/20 text-center font-black uppercase tracking-tighter italic">Inquire Technical Batch</Link>
                 <a href="mailto:naren@mamtasteel.com" className="border-4 border-navy-primary text-navy-primary px-12 py-5 rounded-3xl font-black hover:bg-gray-100 transition-all italic tracking-tighter uppercase text-xl transform hover:scale-110 duration-300 shadow-lg italic bg-white inline-block h-fit uppercase text-center font-black uppercase tracking-tighter italic">Download Spec Sheet</a>
              </div>
           </div>
           <Settings className="absolute left-[-5%] bottom-[-5%] w-64 h-64 text-gray-100 dark:text-gray-700/50 rotate-45 pointer-events-none opacity-40 p-8 shadow-2xl transition-all duration-1000 font-black italic" />
        </section>
      </div>
    </>
  );
}


