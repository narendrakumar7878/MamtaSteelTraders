import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft, ArrowRight, Activity, Shield, Microscope, Zap, Settings } from "lucide-react";
import { Link } from "wouter";

export default function S7ToolSteelDetail() {
  const chemicalComposition = [
    { element: "Carbon (C)", value: "0.45 – 0.55%" },
    { element: "Chromium (Cr)", value: "3.00 – 3.50%" },
    { element: "Molybdenum (Mo)", value: "1.30 – 1.80%" },
    { element: "Silicon (Si)", value: "0.20 – 1.00%" },
    { element: "Manganese (Mn)", value: "0.20 – 0.90%" },
    { element: "Vanadium (V)", value: "0.20 – 0.30%" },
    { element: "Phosphorus (P)", value: "0.03% max" },
    { element: "Sulfur (S)", value: "0.03% max" }
  ];

  const thermalSpecs = [
    { process: "Forging", temp: "1050 – 1100°C", desc: "Do not forge below 925°C. Slow cooling in furnace or sand is essential." },
    { process: "Annealing", temp: "815 – 845°C", desc: "Slow furnace cooling at 10°C/hr down to 540°C. Max hardness: 223 HB." },
    { process: "Hardening", temp: "925 – 955°C", desc: "Air cooling is typical (air-hardening); oil quench for large sections. Excellent dimensional stability." },
    { process: "Tempering", temp: "200 – 600°C", desc: "Double tempering is recommended. Tempering at 200°C yields ~57 HRC with extreme toughness." }
  ];

  return (
    <>
      <ProductSEO
        title="S7 Tool Steel Round Bars | Shock-Resistant Steel | AISI S7 Supplier Mumbai"
        description="Premium AISI S7 (DIN 1.2357) shock-resistant tool steel round bars. Exceptional impact toughness and high wear resistance for punches and hammers. Pan India Supply."
        keywords="s7 tool steel round bars, aisi s7 supplier mumbai, uns t41907 steel, shock resistant steel india, s7 tool steel price"
        canonicalUrl="/product/round-bars/hot-work-steel/s7-tool-steel"
      />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 font-bold tracking-tighter italic text-black">
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
           <div className="container mx-auto px-4 py-4">
              <nav className="flex items-center space-x-2 text-sm flex-wrap text-black font-black">
                 <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary uppercase italic">Home</Link>
                 <ArrowRight className="w-4 h-4 text-gray-400 font-black h-fit" />
                 <Link href="/product/round-bars/hot-work-steel" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary uppercase italic">Hot Work Series</Link>
                 <ArrowRight className="w-4 h-4 text-gray-400 font-black h-fit" />
                 <span className="text-navy-primary dark:text-gold-primary italic uppercase underline decoration-navy-primary decoration-2 underline-offset-4 tracking-tighter italic">AISI S7 (Shock-Resistant)</span>
              </nav>
           </div>
        </div>
        <div className="container mx-auto px-4 py-4">
           <Link href="/product/round-bars/hot-work-steel" className="inline-flex items-center text-navy-primary dark:text-gold-primary hover:underline font-black uppercase text-xs h-fit overflow-hidden">
              <ArrowLeft className="w-3 h-3 mr-2 h-fit overflow-hidden" /> Back to Hot Work Hub
           </Link>
        </div>
        <section className="bg-gradient-to-br from-navy-primary via-navy-secondary to-slate-800 text-white py-20 relative overflow-hidden h-fit">
          <div className="container mx-auto px-4 relative z-10 h-fit overflow-hidden text-white">
            <div className="max-w-4xl h-fit overflow-hidden text-white">
              <span className="bg-gold-primary text-navy-primary px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-6 inline-block shadow-lg underline decoration-navy-primary decoration-4 h-fit overflow-hidden italic uppercase">The Ultimate Impact Defender</span>
              <h1 className="text-5xl md:text-7xl font-black mb-6 italic tracking-tighter uppercase leading-none h-fit overflow-hidden underline decoration-gold-primary decoration-4 underline-offset-[12px] italic">AISI S7</h1>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl opacity-90 leading-relaxed italic uppercase h-fit overflow-hidden italic tracking-tighter italic scale-105">Shock-resistant tool steel engineered for unparalleled impact toughness, high wear resistance, and exceptional dimensional stability after heat treatment.</p>
              <div className="flex flex-wrap gap-4 h-fit overflow-hidden">
                <Link href="/contact" className="bg-gold-primary hover:bg-white text-navy-primary px-10 py-4 rounded-2xl font-black transition-all shadow-xl italic tracking-tighter uppercase h-fit overflow-hidden italic tracking-tighter uppercase text-xl">Request Batch Pricing</Link>
                <a href="tel:+919819322576" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-10 py-4 rounded-2xl font-bold transition-all backdrop-blur-sm italic tracking-tighter uppercase h-fit overflow-hidden italic tracking-tighter uppercase text-xl text-center shadow-lg">Material Expert</a>
              </div>
            </div>
          </div>
          <Activity className="absolute right-[-10%] bottom-[-10%] w-[500px] h-[500px] text-white/5 pointer-events-none rotate-12 h-fit overflow-hidden" />
        </section>
        <section className="py-20 h-fit">
          <div className="container mx-auto px-4 text-black h-fit">
            <div className="grid lg:grid-cols-3 gap-12 h-fit overflow-hidden text-black font-semibold">
              <div className="lg:col-span-2 space-y-12 h-fit overflow-hidden text-black font-semibold">
                <div className="bg-white dark:bg-gray-800 p-10 rounded-[2.5rem] shadow-2xl border border-gray-100 dark:border-gray-700 h-fit overflow-hidden text-black font-semibold">
                  <h2 className="text-3xl font-black text-navy-primary dark:text-white mb-8 italic tracking-tighter uppercase border-l-8 border-gold-primary pl-6 h-fit overflow-hidden h-fit italic px-4 py-2 uppercase tracking-tighter italic underline decoration-gold-primary/20">Metallurgical Profile (S7)</h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 italic font-semibold p-4 bg-gray-50 dark:bg-gray-700 rounded-2xl border-l-4 border-gold-primary uppercase tracking-tighter h-fit overflow-hidden italic">AISI S7 (DIN 1.2357) is a versatile shock-resistant tool steel that combines high impact toughness with very good hardenability. It is an air-hardening steel, ensuring excellent dimensional stability during heat treatment. S7 is uniquely capable of withstanding severe shock and impact while maintaining a sharp cutting edge. In the Indian manufacturing landscape, S7 is the preferred choice for punches, chisels, and plastic molds requiring high impact resistance. Mamta Steel Traders delivers S7 round bars with precision-hardened properties for industrial-grade tooling.</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 h-fit h-fit overflow-hidden text-black font-semibold">
                    {chemicalComposition.map((item, i) => (
                      <div key={i} className="p-5 bg-gray-50 dark:bg-gray-700/50 rounded-3xl border border-gray-100 dark:border-gray-600 group hover:border-gold-primary transition-all h-fit h-fit overflow-hidden border-2 border-transparent italic shadow-sm hover:shadow-md">
                        <p className="text-[10px] text-gray-500 uppercase font-black mb-1 h-fit overflow-hidden italic tracking-tighter italic">{item.element}</p>
                        <p className="text-xl font-black text-navy-primary dark:text-gold-primary tracking-tighter uppercase italic h-fit overflow-hidden italic tracking-tighter italic transform group-hover:scale-105 transition-transform">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-navy-primary text-white p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group h-fit overflow-hidden text-white">
                   <div className="relative z-10 h-fit overflow-hidden text-white">
                      <h2 className="text-3xl font-black mb-8 italic tracking-tighter uppercase flex items-center gap-4 h-fit overflow-hidden text-white h-fit italic px-4 py-2 border-l-4 border-gold-primary uppercase tracking-tighter italic font-semibold">
                         <Shield className="w-8 h-8 text-gold-primary h-fit shadow-lg" />
                         Industrial Integrity
                      </h2>
                      <div className="grid md:grid-cols-2 gap-6 h-fit h-fit overflow-hidden text-white font-semibold">
                          <div className="p-6 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors h-fit text-white h-fit overflow-hidden text-white h-fit italic">
                             <p className="text-gold-primary font-black uppercase text-[10px] tracking-widest mb-1 italic h-fit overflow-hidden italic tracking-tighter italic underline decoration-gold-primary decoration-1">Impact Toughness</p>
                             <p className="text-xl font-black italic tracking-tighter text-white uppercase italic h-fit overflow-hidden italic tracking-tighter italic underline decoration-gold-primary decoration-4 underline-offset-4 shadow-sm">Industrial Peak</p>
                          </div>
                          <div className="p-6 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors h-fit text-white h-fit overflow-hidden text-white h-fit italic">
                             <p className="text-gold-primary font-black uppercase text-[10px] tracking-widest mb-1 italic h-fit overflow-hidden italic tracking-tighter italic underline decoration-gold-primary decoration-1">Alloy Stability</p>
                             <p className="text-xl font-black italic tracking-tighter text-white uppercase italic h-fit overflow-hidden italic tracking-tighter italic underline decoration-gold-primary decoration-4 underline-offset-4 italic shadow-sm">Air Hardening</p>
                          </div>
                      </div>
                   </div>
                   <Microscope className="absolute right-[-5%] top-[-5%] w-64 h-64 text-white/5 pointer-events-none group-hover:scale-110 transition-transform h-fit overflow-hidden border-4 border-white/5 p-4 rotate-12" />
                </div>
              </div>
              <div className="space-y-8 h-fit h-fit overflow-hidden text-black h-fit">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-700 h-fit h-fit overflow-hidden text-black h-fit overflow-hidden h-fit italic">
                  <h3 className="text-xl font-black text-navy-primary dark:text-white mb-6 italic tracking-tighter uppercase border-b border-gold-primary pb-2 h-fit overflow-hidden h-fit italic tracking-tighter italic shadow-sm">Process Guide</h3>
                  <div className="space-y-6 h-fit h-fit overflow-hidden h-fit">
                    {thermalSpecs.map((eq, i) => (
                      <div key={i} className="space-y-1 h-fit h-fit overflow-hidden h-fit">
                        <div className="flex justify-between items-center h-fit h-fit overflow-hidden h-fit italic border-b border-navy-primary/5 pb-1">
                          <span className="text-xs text-gray-400 uppercase font-bold italic h-fit overflow-hidden italic tracking-tighter italic underline decoration-gold-primary/10">{eq.process}</span>
                          <span className="font-black text-navy-primary dark:text-gold-primary italic text-sm tracking-tighter uppercase h-fit overflow-hidden italic tracking-tighter italic decoration-gold-primary decoration-2 underline-offset-2">{eq.temp}</span>
                        </div>
                        <p className="text-[10px] text-gray-400 font-medium italic h-fit overflow-hidden italic tracking-tighter italic bg-gray-50 dark:bg-gray-700 p-2 rounded-lg">{eq.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-gradient-to-br from-gold-primary to-yellow-600 p-8 rounded-[2.5rem] shadow-2xl text-navy-primary group overflow-hidden h-fit h-fit overflow-hidden italic font-semibold">
                   <h3 className="text-2xl font-black mb-6 italic tracking-tighter uppercase h-fit overflow-hidden h-fit italic tracking-tighter italic underline decoration-navy-primary/20">Project Uses</h3>
                   <div className="space-y-4 font-black italic uppercase tracking-tighter h-fit overflow-hidden h-fit overflow-hidden h-fit overflow-hidden italic">
                      {["Heavy-Duty Punches", "Shock Chisels", "Impact Hammer Dies", "Riveting Tools", "Plastic Injection Molds", "Cold Forming Tools"].map((use, i) => (
                         <div key={i} className="flex items-center gap-3 text-sm group/item transition-all h-fit h-fit overflow-hidden h-fit overflow-hidden italic hover:bg-white/10 p-1 rounded-xl">
                            <Zap className="w-4 h-4 text-navy-primary/60 group-hover/item:text-navy-primary h-fit shadow-md" />
                            <span className="italic tracking-tighter italic underline decoration-navy-primary/20 group-hover/item:decoration-navy-primary group-hover/item:decoration-2 transition-all">{use}</span>
                         </div>
                      ))}
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700 text-center relative overflow-hidden h-fit h-fit overflow-hidden h-fit overflow-hidden h-fit overflow-hidden h-fit overflow-hidden h-fit overflow-hidden h-fit overflow-hidden h-fit overflow-hidden h-fit overflow-hidden italic shadow-2xl">
           <div className="container mx-auto px-4 relative z-10 h-fit overflow-hidden text-black h-fit">
              <h2 className="text-4xl font-black text-navy-primary dark:text-white mb-6 italic tracking-tighter uppercase h-fit overflow-hidden h-fit overflow-hidden h-fit overflow-hidden h-fit overflow-hidden h-fit overflow-hidden h-fit overflow-hidden italic tracking-tighter italic underline decoration-gold-primary decoration-4 underline-offset-8 italic scale-105">Direct Supplier: S7 Shock-Resistant Steel Bars</h2>
              <p className="text-lg text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto font-medium italic tracking-tighter italic uppercase h-fit overflow-hidden h-fit overflow-hidden h-fit overflow-hidden h-fit overflow-hidden h-fit overflow-hidden h-fit overflow-hidden h-fit overflow-hidden h-fit overflow-hidden italic tracking-tighter italic">Mamta Steel Traders delivers ready-to-dispatch AISI S7 (DIN 1.2357) shock-resistant tool steel round bars across Pan India. Ultimate impact defense for industrial hammers, punches, and precision molding. Global export certified.</p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center h-fit overflow-hidden h-fit h-fit overflow-hidden italic">
                 <Link href="/contact" className="bg-navy-primary text-white px-12 py-5 rounded-3xl font-black hover:bg-navy-secondary transition-all shadow-xl italic tracking-tighter uppercase h-fit overflow-hidden italic tracking-tighter uppercase text-xl transform hover:scale-105 duration-300">Inquire Technical Batch</Link>
                 <a href="mailto:naren@mamtasteel.com" className="border-4 border-navy-primary text-navy-primary px-12 py-5 rounded-3xl font-black hover:bg-gray-50 transition-all italic tracking-tighter uppercase h-fit overflow-hidden italic tracking-tighter uppercase text-xl transform hover:scale-105 duration-300 shadow-lg">Download Spec Sheet</a>
              </div>
           </div>
           <Settings className="absolute left-[-5%] bottom-[-5%] w-64 h-64 text-gray-100 dark:text-gray-700/50 rotate-45 pointer-events-none h-fit overflow-hidden h-fit overflow-hidden h-fit overflow-hidden h-fit overflow-hidden italic opacity-50" />
        </section>
      </div>
    </>
  );
}


