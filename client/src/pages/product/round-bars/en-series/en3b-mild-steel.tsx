import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft, ArrowRight, Activity, Shield, Microscope, Zap, Settings } from "lucide-react";
import { Link } from "wouter";

export default function EN3BMildSteelDetail() {
  const chemicalComposition = [
    { element: "Carbon (C)", value: "0.15 – 0.25%" },
    { element: "Silicon (Si)", value: "0.05 – 0.35%" },
    { element: "Manganese (Mn)", value: "0.60 – 1.00%" },
    { element: "Phosphorus (P)", value: "0.05% max" },
    { element: "Sulphur (S)", value: "0.05% max" }
  ];

  const thermalSpecs = [
    { process: "Forgeability", temp: "1150 – 900°C", desc: "Excellent forgeability; should be air cooled after shaping." },
    { process: "Weldability", temp: "Superior", desc: "Excellent response to all standard arc and resistance welding methods." },
    { process: "Machinability", temp: "Good", desc: "Easily machined in both hot rolled and bright drawn conditions." }
  ];

  return (
    <>
      <ProductSEO
        title="EN3B Mild Steel Round Bars | General Purpose Steel | BS 970 | Mumbai"
        description="Premium EN3B mild steel round bars for general engineering. Excellent weldability and machinability. Certified BS 970 standards."
        keywords="en3b mild steel round bars, en3b steel supplier mumbai, general engineering steel bars, mild steel bright bars, 070M20 steel"
        canonicalUrl="/product/round-bars/en-series/en3b-mild-steel"
      />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 font-bold tracking-tighter italic text-black">
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
           <div className="container mx-auto px-4 py-4">
              <nav className="flex items-center space-x-2 text-sm flex-wrap">
                 <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary uppercase">Home</Link>
                 <ArrowRight className="w-4 h-4 text-gray-400" />
                 <Link href="/product/round-bars/en-series" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary uppercase">EN Series</Link>
                 <ArrowRight className="w-4 h-4 text-gray-400" />
                 <span className="text-navy-primary dark:text-gold-primary">EN3B Mild Steel</span>
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
              <span className="bg-gold-primary text-navy-primary px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-6 inline-block">The Engineering Workhorse</span>
              <h1 className="text-5xl md:text-7xl font-black mb-6 italic tracking-tighter uppercase leading-none">EN3B Mild Steel</h1>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl opacity-90 leading-relaxed italic uppercase">A reliably versatile low-carbon steel designed for general engineering, fabrication, and structural integrity.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="bg-gold-primary hover:bg-white text-navy-primary px-10 py-4 rounded-2xl font-black transition-all shadow-xl italic tracking-tighter uppercase">Request Batch Quote</Link>
                <a href="tel:+919819322576" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-10 py-4 rounded-2xl font-bold transition-all backdrop-blur-sm italic tracking-tighter uppercase">Consult Engineering</a>
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
                  <h2 className="text-3xl font-black text-navy-primary dark:text-white mb-8 italic tracking-tighter uppercase border-l-8 border-gold-primary pl-6">Technical Architecture</h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 italic font-semibold p-4 bg-gray-50 dark:bg-gray-700 rounded-2xl border-l-4 border-gold-primary uppercase tracking-tighter">EN3B is a versatile 0.20% carbon steel. While not suitable for heavy-duty heat treatment, its excellent welding characteristics and ease of machining make it the standard choice for general industrial fabrications, base plates, and machine frames.</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {chemicalComposition.map((item, i) => (
                      <div key={i} className="p-5 bg-gray-50 dark:bg-gray-700/50 rounded-3xl border border-gray-100 dark:border-gray-600 group hover:border-gold-primary transition-all">
                        <p className="text-[10px] text-gray-500 uppercase font-black mb-1">{item.element}</p>
                        <p className="text-xl font-black text-navy-primary dark:text-gold-primary tracking-tighter uppercase italic">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-navy-primary text-white p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                   <div className="relative z-10">
                      <h2 className="text-3xl font-black mb-8 italic tracking-tighter uppercase flex items-center gap-4">
                         <Shield className="w-8 h-8 text-gold-primary" />
                         Industrial Stability
                      </h2>
                      <div className="grid md:grid-cols-2 gap-6">
                          <div className="p-6 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                             <p className="text-gold-primary font-black uppercase text-[10px] tracking-widest mb-1 italic tracking-tighter">Impact Value</p>
                             <p className="text-xl font-black italic tracking-tighter text-white uppercase italic">27J @ 20°C (Min)</p>
                          </div>
                          <div className="p-6 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                             <p className="text-gold-primary font-black uppercase text-[10px] tracking-widest mb-1 italic tracking-tighter">Tensile Strength</p>
                             <p className="text-xl font-black italic tracking-tighter text-white uppercase italic">430 – 500 MPa</p>
                          </div>
                      </div>
                   </div>
                   <Microscope className="absolute right-[-5%] top-[-5%] w-64 h-64 text-white/5 pointer-events-none group-hover:scale-110 transition-transform" />
                </div>
              </div>
              <div className="space-y-8">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-700">
                  <h3 className="text-xl font-black text-navy-primary dark:text-white mb-6 italic tracking-tighter uppercase border-b border-gold-primary pb-2">Material Stewardship</h3>
                  <div className="space-y-6">
                    {thermalSpecs.map((eq, i) => (
                      <div key={i} className="space-y-1">
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-400 uppercase font-bold italic tracking-tighter">{eq.process}</span>
                          <span className="font-black text-navy-primary dark:text-gold-primary italic text-sm tracking-tighter uppercase">{eq.temp}</span>
                        </div>
                        <p className="text-[10px] text-gray-400 font-medium italic lowercase tracking-tight">{eq.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-gradient-to-br from-gold-primary to-yellow-600 p-8 rounded-[2.5rem] shadow-2xl text-navy-primary group overflow-hidden">
                   <h3 className="text-2xl font-black mb-6 italic tracking-tighter uppercase h-fit">Project Applications</h3>
                   <div className="space-y-4 font-black italic uppercase tracking-tighter h-fit">
                      {["Machine Base Plates", "Agricultural Implements", "General Fabrication", "Anchor Bolts", "Light Shafting", "Welded Structures"].map((use, i) => (
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
        <section className="py-20 bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700 text-center relative overflow-hidden">
           <div className="container mx-auto px-4 relative z-10">
              <h2 className="text-4xl font-black text-navy-primary dark:text-white mb-6 italic tracking-tighter uppercase">Direct Stockist: EN3B Round Bars</h2>
              <p className="text-lg text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto font-medium italic tracking-tighter italic uppercase">We provide NABL certified EN3B mild steel round bars with ready availability from 6mm to 500mm diameter. Optimized for India's high-speed fabrication sectors.</p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                 <Link href="/contact" className="bg-navy-primary text-white px-12 py-5 rounded-3xl font-black hover:bg-navy-secondary transition-all shadow-xl italic tracking-tighter uppercase">Get Batch Quote</Link>
                 <a href="mailto:naren@mamtasteel.com" className="border-4 border-navy-primary text-navy-primary px-12 py-5 rounded-3xl font-black hover:bg-gray-50 transition-all italic tracking-tighter uppercase">Technical Datasheet</a>
              </div>
           </div>
           <Settings className="absolute left-[-5%] bottom-[-5%] w-64 h-64 text-gray-100 dark:text-gray-700/50 rotate-45 pointer-events-none" />
        </section>
      </div>
    </>
  );
}
