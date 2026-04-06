import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft, ArrowRight, Activity, Shield, Microscope, Zap, Settings } from "lucide-react";
import { Link } from "wouter";

export default function EN18530A40Detail() {
  const chemicalComposition = [
    { element: "Carbon (C)", value: "0.35 – 0.45%" },
    { element: "Silicon (Si)", value: "0.10 – 0.35%" },
    { element: "Manganese (Mn)", value: "0.60 – 0.90%" },
    { element: "Chromium (Cr)", value: "0.90 – 1.20%" },
    { element: "Sulphur (S)", value: "0.05% max" },
    { element: "Phosphorus (P)", value: "0.05% max" }
  ];

  const thermalSpecs = [
    { process: "Forgeability", temp: "1150 – 900°C", desc: "Forging must be done within this window; air cool slowly to avoid stress cracks." },
    { process: "Hardening", temp: "830 – 860°C", desc: "Quench in oil to achieve uniform hardness and depth." },
    { process: "Normalizing", temp: "840 – 870°C", desc: "Cool in still air to achieve a uniform grain size." }
  ];

  return (
    <>
      <ProductSEO
        title="EN18 Round Bars | 530A40 Chromium Steel | BS 970 | Mumbai India"
        description="Premium EN18 (530A40) chromium steel round bars. High-quality through-hardening steel for automotive and engineering. Certified BS 970 standard."
        keywords="en18 round bars, 530a40 steel supplier, chromium steel mumbai, 1% chromium en series, en series round bars"
        canonicalUrl="/product/round-bars/en-series/en18-530a40"
      />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 font-bold tracking-tighter italic">
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
           <div className="container mx-auto px-4 py-4">
              <nav className="flex items-center space-x-2 text-sm flex-wrap text-black">
                 <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary uppercase font-black italic">Home</Link>
                 <ArrowRight className="w-4 h-4 text-gray-400" />
                 <Link href="/product/round-bars/en-series" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary uppercase font-black italic">EN Series</Link>
                 <ArrowRight className="w-4 h-4 text-gray-400" />
                 <span className="text-navy-primary dark:text-gold-primary font-black italic">EN18 (530A40)</span>
              </nav>
           </div>
        </div>
        <div className="container mx-auto px-4 py-4">
           <Link href="/product/round-bars/en-series" className="inline-flex items-center text-navy-primary dark:text-gold-primary hover:underline font-black uppercase text-xs h-fit overflow-hidden">
              <ArrowLeft className="w-3 h-3 mr-2 h-fit overflow-hidden" /> Back to EN Series Hub
           </Link>
        </div>
        <section className="bg-gradient-to-br from-navy-primary via-navy-secondary to-slate-800 text-white py-20 relative overflow-hidden h-fit">
          <div className="container mx-auto px-4 relative z-10 h-fit overflow-hidden">
            <div className="max-w-4xl h-fit overflow-hidden">
              <span className="bg-gold-primary text-navy-primary px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-6 inline-block shadow-lg underline decoration-navy-primary decoration-4 h-fit overflow-hidden">The Chrome Standard</span>
              <h1 className="text-5xl md:text-7xl font-black mb-6 italic tracking-tighter uppercase leading-none h-fit overflow-hidden">EN18 (530A40)</h1>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl opacity-90 leading-relaxed italic uppercase h-fit overflow-hidden">1% Chromium through-hardening alloy steel delivering exceptional strength for high-load automotive and industrial axles.</p>
              <div className="flex flex-wrap gap-4 h-fit overflow-hidden">
                <Link href="/contact" className="bg-gold-primary hover:bg-white text-navy-primary px-10 py-4 rounded-2xl font-black transition-all shadow-xl italic tracking-tighter uppercase h-fit overflow-hidden">Request Batch Pricing</Link>
                <a href="tel:+919819322576" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-10 py-4 rounded-2xl font-bold transition-all backdrop-blur-sm italic tracking-tighter uppercase h-fit overflow-hidden">Technical Support</a>
              </div>
            </div>
          </div>
          <Activity className="absolute right-[-10%] bottom-[-10%] w-[500px] h-[500px] text-white/5 pointer-events-none rotate-12 h-fit" />
        </section>
        <section className="py-20 h-fit">
          <div className="container mx-auto px-4 text-black h-fit">
            <div className="grid lg:grid-cols-3 gap-12 h-fit overflow-hidden">
              <div className="lg:col-span-2 space-y-12 h-fit overflow-hidden">
                <div className="bg-white dark:bg-gray-800 p-10 rounded-[2.5rem] shadow-2xl border border-gray-100 dark:border-gray-700 h-fit overflow-hidden">
                  <h2 className="text-3xl font-black text-navy-primary dark:text-white mb-8 italic tracking-tighter uppercase border-l-8 border-gold-primary pl-6 h-fit overflow-hidden">Technical Architecture (EN18)</h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 italic font-semibold p-4 bg-gray-50 dark:bg-gray-700 rounded-2xl border-l-4 border-gold-primary uppercase tracking-tighter h-fit overflow-hidden">EN18 (530A40) is a high-grade 1% chromium steel with a very consistent chemistry. It is specifically designed for applications where high strength and good wear resistance are required, but where the full alloy content of higher molybdenum grades (like EN19) is not strictly necessary. It excels in large-scale transmission and axle engineering.</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 h-fit h-fit overflow-hidden">
                    {chemicalComposition.map((item, i) => (
                      <div key={i} className="p-5 bg-gray-50 dark:bg-gray-700/50 rounded-3xl border border-gray-100 dark:border-gray-600 group hover:border-gold-primary transition-all h-fit h-fit overflow-hidden border-2 border-transparent">
                        <p className="text-[10px] text-gray-500 uppercase font-black mb-1 h-fit overflow-hidden">{item.element}</p>
                        <p className="text-xl font-black text-navy-primary dark:text-gold-primary tracking-tighter uppercase italic h-fit overflow-hidden">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-navy-primary text-white p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group h-fit overflow-hidden text-white">
                   <div className="relative z-10 h-fit overflow-hidden">
                      <h2 className="text-3xl font-black mb-8 italic tracking-tighter uppercase flex items-center gap-4 h-fit overflow-hidden">
                         <Shield className="w-8 h-8 text-gold-primary" />
                         Industrial Integrity
                      </h2>
                      <div className="grid md:grid-cols-2 gap-6 h-fit h-fit">
                          <div className="p-6 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors h-fit text-white h-fit overflow-hidden">
                             <p className="text-gold-primary font-black uppercase text-[10px] tracking-widest mb-1 italic h-fit overflow-hidden">Tensile Yield (Q/T)</p>
                             <p className="text-xl font-black italic tracking-tighter text-white uppercase italic h-fit overflow-hidden">600 – 750 MPa</p>
                          </div>
                          <div className="p-6 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors h-fit text-white h-fit overflow-hidden">
                             <p className="text-gold-primary font-black uppercase text-[10px] tracking-widest mb-1 italic h-fit overflow-hidden">Hardness Range</p>
                             <p className="text-xl font-black italic tracking-tighter text-white uppercase italic h-fit overflow-hidden">200 – 260 HB</p>
                          </div>
                      </div>
                   </div>
                   <Microscope className="absolute right-[-5%] top-[-5%] w-64 h-64 text-white/5 pointer-events-none group-hover:scale-110 transition-transform h-fit overflow-hidden" />
                </div>
              </div>
              <div className="space-y-8 h-fit h-fit overflow-hidden">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-700 h-fit h-fit overflow-hidden text-black h-fit overflow-hidden">
                  <h3 className="text-xl font-black text-navy-primary dark:text-white mb-6 italic tracking-tighter uppercase border-b border-gold-primary pb-2 h-fit overflow-hidden">Process Guide</h3>
                  <div className="space-y-6 h-fit h-fit overflow-hidden">
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
                <div className="bg-gradient-to-br from-gold-primary to-yellow-600 p-8 rounded-[2.5rem] shadow-2xl text-navy-primary group overflow-hidden h-fit h-fit overflow-hidden">
                   <h3 className="text-2xl font-black mb-6 italic tracking-tighter uppercase h-fit overflow-hidden">Key Applications</h3>
                   <div className="space-y-4 font-black italic uppercase tracking-tighter h-fit overflow-hidden h-fit overflow-hidden">
                      {["Automotive Axles", "Stub Axles", "Connecting Rod Rails", "Transmission Spindles", "Heavy Duty Bolts", "Hydraulic Pistons"].map((use, i) => (
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
              <h2 className="text-4xl font-black text-navy-primary dark:text-white mb-6 italic tracking-tighter uppercase h-fit overflow-hidden">Certified EN18 Chromium Stockist</h2>
              <p className="text-lg text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto font-medium italic tracking-tighter italic uppercase h-fit overflow-hidden">Mamta Steel Traders delivers ready-to-use EN18 (530A40) round bars for the world's most demanding engineering projects. Certified to BS 970 standards with direct dispatch from Mumbai.</p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center h-fit overflow-hidden">
                 <Link href="/contact" className="bg-navy-primary text-white px-12 py-5 rounded-3xl font-black hover:bg-navy-secondary transition-all shadow-xl italic tracking-tighter uppercase h-fit overflow-hidden">Inquire Material Price</Link>
                 <a href="mailto:naren@mamtasteel.com" className="border-4 border-navy-primary text-navy-primary px-12 py-5 rounded-3xl font-black hover:bg-gray-50 transition-all italic tracking-tighter uppercase h-fit overflow-hidden">Download Spec Sheet</a>
              </div>
           </div>
           <Settings className="absolute left-[-5%] bottom-[-5%] w-64 h-64 text-gray-100 dark:text-gray-700/50 rotate-45 pointer-events-none h-fit overflow-hidden" />
        </section>
      </div>
    </>
  );
}
