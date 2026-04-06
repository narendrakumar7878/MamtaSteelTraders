import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft, ArrowRight, Activity, Shield, Microscope, Zap, Settings } from "lucide-react";
import { Link } from "wouter";

export default function EN15BBoronSteelDetail() {
  const chemicalComposition = [
    { element: "Carbon (C)", value: "0.13 – 0.18%" },
    { element: "Manganese (Mn)", value: "1.20 – 1.50%" },
    { element: "Silicon (Si)", value: "0.10 – 0.35%" },
    { element: "Boron (B)", value: "0.0008 – 0.0050%" },
    { element: "Phosphorus (P)", value: "0.035% max" },
    { element: "Sulphur (S)", value: "0.040% max" }
  ];

  const thermalSpecs = [
    { process: "Forgeability", temp: "1100 – 850°C", desc: "Good forgeability; the boron content helps maintain grain structure during shaping." },
    { process: "Hardening", temp: "880 – 920°C", desc: "Water or oil quench. Boron significantly increases the through-hardening depth." },
    { process: "Tempering", temp: "400 – 600°C", desc: "Reduces hardness while drastically improving toughness in bolt applications." }
  ];

  return (
    <>
      <ProductSEO
        title="EN15B Boron Steel Round Bars | High Strength Fasteners | Mumbai India"
        description="Premium EN15B manganese-boron steel round bars. Exceptional through-hardenability for high-strength bolts and industrial pins. Certified BS 970 standards."
        keywords="en15b boron steel, en15b round bars mumbai, manganese boron steel supplier, fastener grade steel, 15b25 equivalent"
        canonicalUrl="/product/round-bars/en-series/en15b-boron-steel"
      />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 font-bold tracking-tighter italic text-black">
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
           <div className="container mx-auto px-4 py-4">
              <nav className="flex items-center space-x-2 text-sm flex-wrap">
                 <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary uppercase">Home</Link>
                 <ArrowRight className="w-4 h-4 text-gray-400" />
                 <Link href="/product/round-bars/en-series" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary uppercase">EN Series</Link>
                 <ArrowRight className="w-4 h-4 text-gray-400" />
                 <span className="text-navy-primary dark:text-gold-primary">EN15B Boron Steel</span>
              </nav>
           </div>
        </div>
        <div className="container mx-auto px-4 py-4">
           <Link href="/product/round-bars/en-series" className="inline-flex items-center text-navy-primary dark:text-gold-primary hover:underline font-black uppercase text-xs">
              <ArrowLeft className="w-3 h-3 mr-2" /> Back to EN Series Hub
           </Link>
        </div>
        <section className="bg-gradient-to-br from-navy-primary via-navy-secondary to-slate-800 text-white py-20 relative overflow-hidden h-fit">
          <div className="container mx-auto px-4 relative z-10 h-fit overflow-hidden">
            <div className="max-w-4xl h-fit overflow-hidden">
              <span className="bg-gold-primary text-navy-primary px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-6 inline-block shadow-lg underline decoration-navy-primary decoration-4">Fastener Performance Hero</span>
              <h1 className="text-5xl md:text-7xl font-black mb-6 italic tracking-tighter uppercase leading-none h-fit overflow-hidden">EN15B Boron Steel</h1>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl opacity-90 leading-relaxed italic uppercase h-fit overflow-hidden">Manganese-Boron alloyed steel delivering absolute through-hardenability and exceptional fatigue resistance for critical fasteners.</p>
              <div className="flex flex-wrap gap-4 h-fit overflow-hidden">
                <Link href="/contact" className="bg-gold-primary hover:bg-white text-navy-primary px-10 py-4 rounded-2xl font-black transition-all shadow-xl italic tracking-tighter uppercase h-fit overflow-hidden">Request Batch Pricing</Link>
                <a href="tel:+919819322576" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-10 py-4 rounded-2xl font-bold transition-all backdrop-blur-sm italic tracking-tighter uppercase h-fit overflow-hidden">Technical Support</a>
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
                  <h2 className="text-3xl font-black text-navy-primary dark:text-white mb-8 italic tracking-tighter uppercase border-l-8 border-gold-primary pl-6 h-fit overflow-hidden">Technical Metallurgy (EN15B)</h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 italic font-semibold p-4 bg-gray-50 dark:bg-gray-700 rounded-2xl border-l-4 border-gold-primary uppercase tracking-tighter h-fit overflow-hidden">EN15B is a manganese-boron through-hardening steel. The minute addition of Boron (even in ppm levels) dramatically improves the hardenability of the steel, allowing for deep, consistent hardness through the entire section of a bolt or pin. This makes it an ideal, cost-effective alternative to more expensive alloy steels for high-strength fastener manufacturing.</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 h-fit h-fit overflow-hidden">
                    {chemicalComposition.map((item, i) => (
                      <div key={i} className="p-5 bg-gray-50 dark:bg-gray-700/50 rounded-3xl border border-gray-100 dark:border-gray-600 group hover:border-gold-primary transition-all h-fit h-fit overflow-hidden">
                        <p className="text-[10px] text-gray-500 uppercase font-black mb-1 h-fit overflow-hidden">{item.element}</p>
                        <p className="text-xl font-black text-navy-primary dark:text-gold-primary tracking-tighter uppercase italic h-fit overflow-hidden">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-navy-primary text-white p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group h-fit overflow-hidden">
                   <div className="relative z-10 h-fit overflow-hidden">
                      <h2 className="text-3xl font-black mb-8 italic tracking-tighter uppercase flex items-center gap-4 h-fit overflow-hidden">
                         <Shield className="w-8 h-8 text-gold-primary" />
                         Performance Foundations
                      </h2>
                      <div className="grid md:grid-cols-2 gap-6 h-fit h-fit overflow-hidden text-white h-fit overflow-hidden">
                          <div className="p-6 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors h-fit text-white h-fit overflow-hidden">
                             <p className="text-gold-primary font-black uppercase text-[10px] tracking-widest mb-1 italic h-fit overflow-hidden">Impact Strength</p>
                             <p className="text-xl font-black italic tracking-tighter text-white uppercase italic h-fit overflow-hidden">45J @ Room Temp (Min)</p>
                          </div>
                          <div className="p-6 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors h-fit text-white h-fit overflow-hidden">
                             <p className="text-gold-primary font-black uppercase text-[10px] tracking-widest mb-1 italic h-fit overflow-hidden">Typical Hardness</p>
                             <p className="text-xl font-black italic tracking-tighter text-white uppercase italic h-fit overflow-hidden">28 – 35 HRC (Tempered)</p>
                          </div>
                      </div>
                   </div>
                   <Microscope className="absolute right-[-5%] top-[-5%] w-64 h-64 text-white/5 pointer-events-none group-hover:scale-110 transition-transform h-fit overflow-hidden" />
                </div>
              </div>
              <div className="space-y-8 h-fit h-fit h-fit overflow-hidden">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-700 h-fit h-fit overflow-hidden">
                  <h3 className="text-xl font-black text-navy-primary dark:text-white mb-6 italic tracking-tighter uppercase border-b border-gold-primary pb-2 h-fit overflow-hidden">Industrial Process</h3>
                  <div className="space-y-6 h-fit overflow-hidden h-fit">
                    {thermalSpecs.map((eq, i) => (
                      <div key={i} className="space-y-1 h-fit overflow-hidden">
                        <div className="flex justify-between items-center h-fit overflow-hidden">
                          <span className="text-xs text-gray-400 uppercase font-bold italic h-fit overflow-hidden">{eq.process}</span>
                          <span className="font-black text-navy-primary dark:text-gold-primary italic text-sm tracking-tighter uppercase h-fit overflow-hidden">{eq.temp}</span>
                        </div>
                        <p className="text-[10px] text-gray-400 font-medium italic lowercase h-fit overflow-hidden">{eq.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-gradient-to-br from-gold-primary to-yellow-600 p-8 rounded-[2.5rem] shadow-2xl text-navy-primary group overflow-hidden h-fit overflow-hidden">
                   <h3 className="text-2xl font-black mb-6 italic tracking-tighter uppercase h-fit overflow-hidden">High Load Sector Uses</h3>
                   <div className="space-y-4 font-black italic uppercase tracking-tighter h-fit overflow-hidden h-fit overflow-hidden">
                      {["High Strength Bolts", "Industrial Grade Pins", "Connecting Rod Rails", "Transmission Spindles", "Agricultural Teeth", "Fastener Blanks"].map((use, i) => (
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
        <section className="py-20 bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700 text-center relative overflow-hidden h-fit h-fit overflow-hidden">
           <div className="container mx-auto px-4 relative z-10 h-fit overflow-hidden">
              <h2 className="text-4xl font-black text-navy-primary dark:text-white mb-6 italic tracking-tighter uppercase h-fit overflow-hidden">Direct Supplier: EN15B Boron Steel</h2>
              <p className="text-lg text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto font-medium italic tracking-tighter italic uppercase h-fit overflow-hidden">Mamta Steel Traders stocks and delivers certified EN15B boron steel round bars for high-performance fastener manufacturing. Certified to BS 970 standards with ready-to-dispatch inventory in Mumbai.</p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center h-fit overflow-hidden">
                 <Link href="/contact" className="bg-navy-primary text-white px-12 py-5 rounded-3xl font-black hover:bg-navy-secondary transition-all shadow-xl italic tracking-tighter uppercase h-fit overflow-hidden">Get Material Estimate</Link>
                 <a href="mailto:naren@mamtasteel.com" className="border-4 border-navy-primary text-navy-primary px-12 py-5 rounded-3xl font-black hover:bg-gray-50 transition-all italic tracking-tighter uppercase h-fit overflow-hidden">Technical Specs Sheet</a>
              </div>
           </div>
           <Settings className="absolute left-[-5%] bottom-[-5%] w-64 h-64 text-gray-100 dark:text-gray-700/50 rotate-45 pointer-events-none h-fit overflow-hidden" />
        </section>
      </div>
    </>
  );
}
