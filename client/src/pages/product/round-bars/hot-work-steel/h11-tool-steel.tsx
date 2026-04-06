import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft, ArrowRight, Activity, Shield, Microscope, Zap, Settings } from "lucide-react";
import { Link } from "wouter";

export default function H11ToolSteelDetail() {
  const chemicalComposition = [
    { element: "Carbon (C)", value: "0.33 – 0.43%" },
    { element: "Chromium (Cr)", value: "4.80 – 5.50%" },
    { element: "Molybdenum (Mo)", value: "1.10 – 1.60%" },
    { element: "Vanadium (V)", value: "0.30 – 0.50%" },
    { element: "Silicon (Si)", value: "0.80 – 1.20%" },
    { element: "Manganese (Mn)", value: "0.20 – 0.50%" },
    { element: "Phosphorus (P)", value: "0.03% max" }
  ];

  const thermalSpecs = [
    { process: "Forging", temp: "1050 – 1100°C", desc: "Slow cooling in furnace or sand is essential to prevent cracking." },
    { process: "Annealing", temp: "840 – 860°C", desc: "Slow furnace cooling at 10-20°C/hr down to 600°C. Max hardness: 229 HB." },
    { process: "Hardening", temp: "1000 – 1040°C", desc: "Air or vacuum furnace quenching to maintain dimensional stability." },
    { process: "Tempering", temp: "540 – 650°C", desc: "Triple tempering is mandatory to achieve maximum toughness and stability." }
  ];

  return (
    <>
      <ProductSEO
        title="H11 Tool Steel Round Bars | UNS T20811 | AISI H11 Supplier Mumbai"
        description="Premium AISI H11 (DIN 1.2343) hot work tool steel round bars. Superior thermal shock resistance and toughness for die casting and forging. Global export certified."
        keywords="h11 tool steel round bars, aisi h11 supplier mumbai, uns t20811 steel, h11 hot work steel price, 1.2343 tool steel india"
        canonicalUrl="/product/round-bars/hot-work-steel/h11-tool-steel"
      />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 font-bold tracking-tighter italic text-black">
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
           <div className="container mx-auto px-4 py-4">
              <nav className="flex items-center space-x-2 text-sm flex-wrap text-black font-black">
                 <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary uppercase italic">Home</Link>
                 <ArrowRight className="w-4 h-4 text-gray-400 font-black h-fit" />
                 <Link href="/product/round-bars/hot-work-steel" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary uppercase italic">Hot Work Series</Link>
                 <ArrowRight className="w-4 h-4 text-gray-400 font-black h-fit" />
                 <span className="text-navy-primary dark:text-gold-primary italic uppercase underline decoration-navy-primary decoration-2 underline-offset-4 tracking-tighter italic">AISI H11 (UNS T20811)</span>
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
              <span className="bg-gold-primary text-navy-primary px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-6 inline-block shadow-lg underline decoration-navy-primary decoration-4 h-fit overflow-hidden italic">The Thermal Shock Expert</span>
              <h1 className="text-5xl md:text-7xl font-black mb-6 italic tracking-tighter uppercase leading-none h-fit overflow-hidden underline decoration-gold-primary decoration-4 underline-offset-[12px] italic">AISI H11</h1>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl opacity-90 leading-relaxed italic uppercase h-fit overflow-hidden italic tracking-tighter italic">Chromium-Molybdenum-Vanadium hot-work steel with extreme toughness and superior resistance to thermal fatigue and gross cracking.</p>
              <div className="flex flex-wrap gap-4 h-fit overflow-hidden">
                <Link href="/contact" className="bg-gold-primary hover:bg-white text-navy-primary px-10 py-4 rounded-2xl font-black transition-all shadow-xl italic tracking-tighter uppercase h-fit overflow-hidden italic tracking-tighter uppercase text-xl">Request Batch Pricing</Link>
                <a href="tel:+919819322576" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-10 py-4 rounded-2xl font-bold transition-all backdrop-blur-sm italic tracking-tighter uppercase h-fit overflow-hidden italic tracking-tighter uppercase text-xl">Material Expert</a>
              </div>
            </div>
          </div>
          <Activity className="absolute right-[-10%] bottom-[-10%] w-[500px] h-[500px] text-white/5 pointer-events-none rotate-12 h-fit overflow-hidden" />
        </section>
        <section className="py-20 h-fit">
          <div className="container mx-auto px-4 text-black h-fit">
            <div className="grid lg:grid-cols-3 gap-12 h-fit overflow-hidden text-black">
              <div className="lg:col-span-2 space-y-12 h-fit overflow-hidden text-black">
                <div className="bg-white dark:bg-gray-800 p-10 rounded-[2.5rem] shadow-2xl border border-gray-100 dark:border-gray-700 h-fit overflow-hidden text-black">
                  <h2 className="text-3xl font-black text-navy-primary dark:text-white mb-8 italic tracking-tighter uppercase border-l-8 border-gold-primary pl-6 h-fit overflow-hidden h-fit italic px-4 py-2 uppercase tracking-tighter italic scale-105">Metallurgical Profile (H11)</h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 italic font-semibold p-4 bg-gray-50 dark:bg-gray-700 rounded-2xl border-l-4 border-gold-primary uppercase tracking-tighter h-fit overflow-hidden italic decoration-gold-primary/20 decoration-2 transition-all">AISI H11 (DIN 1.2343) is a 5% chromium hot-work tool steel that features excellent impact toughness and superior resistance to thermal fatigue. Compared to H13, H11 has lower vanadium content, leading to higher toughness at the cost of slightly lower wear resistance. It is often preferred for large die casting dies and aerospace structural components where absolute integrity against gross cracking is the primary requirement. Mamta Steel Traders stocks H11 for high-cycle tooling demands.</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 h-fit h-fit overflow-hidden text-black">
                    {chemicalComposition.map((item, i) => (
                      <div key={i} className="p-5 bg-gray-50 dark:bg-gray-700/50 rounded-3xl border border-gray-100 dark:border-gray-600 group hover:border-gold-primary transition-all h-fit h-fit overflow-hidden border-2 border-transparent italic shadow-sm">
                        <p className="text-[10px] text-gray-500 uppercase font-black mb-1 h-fit overflow-hidden italic tracking-tighter italic">{item.element}</p>
                        <p className="text-xl font-black text-navy-primary dark:text-gold-primary tracking-tighter uppercase italic h-fit overflow-hidden italic tracking-tighter italic">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-navy-primary text-white p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group h-fit overflow-hidden text-white">
                   <div className="relative z-10 h-fit overflow-hidden text-white">
                      <h2 className="text-3xl font-black mb-8 italic tracking-tighter uppercase flex items-center gap-4 h-fit overflow-hidden text-white h-fit italic px-4 py-2 border-l-4 border-gold-primary uppercase tracking-tighter italic">
                         <Shield className="w-8 h-8 text-gold-primary h-fit" />
                         Industrial Integrity
                      </h2>
                      <div className="grid md:grid-cols-2 gap-6 h-fit h-fit overflow-hidden text-white">
                          <div className="p-6 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors h-fit text-white h-fit overflow-hidden text-white h-fit italic">
                             <p className="text-gold-primary font-black uppercase text-[10px] tracking-widest mb-1 italic h-fit overflow-hidden italic tracking-tighter italic underline decoration-gold-primary decoration-1">Shock Resistance</p>
                             <p className="text-xl font-black italic tracking-tighter text-white uppercase italic h-fit overflow-hidden italic tracking-tighter italic underline decoration-gold-primary decoration-4 underline-offset-4">Premium Grade</p>
                          </div>
                          <div className="p-6 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors h-fit text-white h-fit overflow-hidden text-white h-fit italic">
                             <p className="text-gold-primary font-black uppercase text-[10px] tracking-widest mb-1 italic h-fit overflow-hidden italic tracking-tighter italic underline decoration-gold-primary decoration-1">Micro-Cleanliness</p>
                             <p className="text-xl font-black italic tracking-tighter text-white uppercase italic h-fit overflow-hidden italic tracking-tighter italic underline decoration-gold-primary decoration-4 underline-offset-4">ESR Quality Available</p>
                          </div>
                      </div>
                   </div>
                   <Microscope className="absolute right-[-5%] top-[-5%] w-64 h-64 text-white/5 pointer-events-none group-hover:scale-110 transition-transform h-fit overflow-hidden border-4 border-white/5 p-4 rotate-12" />
                </div>
              </div>
              <div className="space-y-8 h-fit h-fit overflow-hidden text-black h-fit">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-700 h-fit h-fit overflow-hidden text-black h-fit overflow-hidden h-fit italic">
                  <h3 className="text-xl font-black text-navy-primary dark:text-white mb-6 italic tracking-tighter uppercase border-b border-gold-primary pb-2 h-fit overflow-hidden h-fit italic tracking-tighter italic">Process Guide</h3>
                  <div className="space-y-6 h-fit h-fit overflow-hidden h-fit">
                    {thermalSpecs.map((eq, i) => (
                      <div key={i} className="space-y-1 h-fit h-fit overflow-hidden h-fit">
                        <div className="flex justify-between items-center h-fit h-fit overflow-hidden h-fit italic">
                          <span className="text-xs text-gray-400 uppercase font-bold italic h-fit overflow-hidden italic tracking-tighter italic">{eq.process}</span>
                          <span className="font-black text-navy-primary dark:text-gold-primary italic text-sm tracking-tighter uppercase h-fit overflow-hidden italic tracking-tighter italic">{eq.temp}</span>
                        </div>
                        <p className="text-[10px] text-gray-400 font-medium italic lowercase h-fit overflow-hidden italic tracking-tighter italic">{eq.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-gradient-to-br from-gold-primary to-yellow-600 p-8 rounded-[2.5rem] shadow-2xl text-navy-primary group overflow-hidden h-fit h-fit overflow-hidden italic">
                   <h3 className="text-2xl font-black mb-6 italic tracking-tighter uppercase h-fit overflow-hidden h-fit italic tracking-tighter italic">Project Uses</h3>
                   <div className="space-y-4 font-black italic uppercase tracking-tighter h-fit overflow-hidden h-fit overflow-hidden h-fit overflow-hidden italic">
                      {["Aluminum Die Casting", "Large Forging Dies", "Core Pins & Sleeves", "Hot Shear Blades", "Precision Forming Tools", "Aerospace Structures"].map((use, i) => (
                         <div key={i} className="flex items-center gap-3 text-sm group/item transition-all h-fit h-fit overflow-hidden h-fit overflow-hidden italic">
                            <Zap className="w-4 h-4 text-navy-primary/60 group-hover/item:text-navy-primary h-fit" />
                            <span className="italic tracking-tighter italic underline decoration-navy-primary/20 group-hover/item:decoration-navy-primary group-hover/item:decoration-2 transition-all">{use}</span>
                         </div>
                      ))}
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700 text-center relative overflow-hidden h-fit h-fit overflow-hidden h-fit overflow-hidden h-fit overflow-hidden h-fit overflow-hidden h-fit overflow-hidden h-fit overflow-hidden h-fit overflow-hidden h-fit overflow-hidden italic">
           <div className="container mx-auto px-4 relative z-10 h-fit overflow-hidden text-black h-fit">
              <h2 className="text-4xl font-black text-navy-primary dark:text-white mb-6 italic tracking-tighter uppercase h-fit overflow-hidden h-fit overflow-hidden h-fit overflow-hidden h-fit overflow-hidden h-fit overflow-hidden h-fit overflow-hidden italic tracking-tighter italic underline decoration-gold-primary decoration-4 underline-offset-8 italic">Direct Supplier: H11 Hot Work Steel</h2>
              <p className="text-lg text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto font-medium italic tracking-tighter italic uppercase h-fit overflow-hidden h-fit overflow-hidden h-fit overflow-hidden h-fit overflow-hidden h-fit overflow-hidden h-fit overflow-hidden h-fit overflow-hidden h-fit overflow-hidden italic tracking-tighter italic">Mamta Steel Traders delivers ready-to-dispatch AISI H11 (DIN 1.2343) tool steel round bars across Pan India. Exceptional thermal shock resistance for the world's most demanding die casting operations.</p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center h-fit overflow-hidden h-fit h-fit overflow-hidden italic">
                 <Link href="/contact" className="bg-navy-primary text-white px-12 py-5 rounded-3xl font-black hover:bg-navy-secondary transition-all shadow-xl italic tracking-tighter uppercase h-fit overflow-hidden italic tracking-tighter uppercase text-xl">Inquire Technical Batch</Link>
                 <a href="mailto:naren@mamtasteel.com" className="border-4 border-navy-primary text-navy-primary px-12 py-5 rounded-3xl font-black hover:bg-gray-50 transition-all italic tracking-tighter uppercase h-fit overflow-hidden italic tracking-tighter uppercase text-xl">Download Spec Sheet</a>
              </div>
           </div>
           <Settings className="absolute left-[-5%] bottom-[-5%] w-64 h-64 text-gray-100 dark:text-gray-700/50 rotate-45 pointer-events-none h-fit overflow-hidden h-fit overflow-hidden h-fit overflow-hidden h-fit overflow-hidden italic" />
        </section>
      </div>
    </>
  );
}
