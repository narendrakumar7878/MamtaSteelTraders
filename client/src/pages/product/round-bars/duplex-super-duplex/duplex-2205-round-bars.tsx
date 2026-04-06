import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft, ArrowRight, Phone, Mail, CheckCircle, Shield, Award, Activity, Microscope, Zap, Thermometer, Settings } from "lucide-react";
import { Link } from "wouter";

export default function Duplex2205Detail() {
  const chemicalComposition = [
    { element: "Chromium (Cr)", value: "22.0 – 23.0%" },
    { element: "Nickel (Ni)", value: "4.5 – 6.5%" },
    { element: "Molybdenum (Mo)", value: "3.0 – 3.5%" },
    { element: "Nitrogen (N)", value: "0.14 – 0.20%" },
    { element: "Manganese (Mn)", value: "2.00% max" },
    { element: "Silicon (Si)", value: "1.00% max" }
  ];

  const mechanicalProperties = [
    { prop: "Tensile Strength", value: "620 MPa (90 ksi) min" },
    { prop: "Yield Strength (0.2%)", value: "450 MPa (65 ksi) min" },
    { prop: "Elongation (in 2\")", value: "25% min" },
    { prop: "Hardness (Rockwell C)", value: "31 HRC max" },
    { prop: "PREN (Pitting Resistance)", value: "34 – 36" },
    { prop: "Density", value: "7.82 g/cm³" }
  ];

  const thermalSpecs = [
    { process: "Solution Annealing", temp: "1020 – 1100°C", desc: "Rapid water quench to avoid sigma phase formation." },
    { process: "Hot Working", temp: "1150 – 950°C", desc: "Forging must be finished above 950°C to maintain phase balance." },
    { process: "Stress Relieving", temp: "Not Recommended", desc: "May cause embrittlement; full anneal preferred." },
    { process: "Machinability", temp: "Fair", desc: "Higher strength requires rigid setup and high torque." }
  ];

  return (
    <>
      <ProductSEO
        title="Duplex 2205 Round Bars | UNS S31803 S32205 | High Strength Stainless Steel | Mumbai"
        description="Premium Duplex 2205 (UNS S31803 / S32205) Round Bar supplier in Mumbai India. Exceptional corrosion resistance and 2x yield strength of 300-series. ASTM A276 certified."
        keywords="duplex 2205 round bars, uns s31803 round bar price, s32205 duplex steel supplier mumbai, duplex stainless steel grade 2205, corrosion resistant round bars, industrial steel mumbai"
        canonicalUrl="/product/round-bars/duplex-super-duplex/duplex-2205"
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 font-bold tracking-tighter italic">
        {/* Breadcrumb Navigation */}
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
           <div className="container mx-auto px-4 py-4">
              <nav className="flex items-center space-x-2 text-sm flex-wrap gap-y-1">
                 <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary transition-all">Home</Link>
                 <ArrowRight className="w-4 h-4 text-gray-400" />
                 <Link href="/product/round-bars/round-bars" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary transition-all">Round Bars</Link>
                 <ArrowRight className="w-4 h-4 text-gray-400" />
                 <Link href="/product/round-bars/duplex-super-duplex" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary transition-all">Duplex Hub</Link>
                 <ArrowRight className="w-4 h-4 text-gray-400" />
                 <span className="text-navy-primary dark:text-gold-primary font-bold italic tracking-wider">Duplex 2205 (UNS S31803)</span>
              </nav>
           </div>
        </div>

        {/* Back Link */}
        <div className="container mx-auto px-4 py-4">
           <Link href="/product/round-bars/duplex-super-duplex" className="inline-flex items-center text-navy-primary dark:text-gold-primary hover:underline font-bold italic uppercase text-xs">
              <ArrowLeft className="w-3 h-3 mr-2" /> Back to Duplex Hub
           </Link>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-navy-primary via-navy-secondary to-slate-800 text-white py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl">
              <span className="bg-gold-primary text-navy-primary px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-6 inline-block shadow-lg underline decoration-navy-primary decoration-4">The Standard for High-Performance Steel</span>
              <h1 className="text-5xl md:text-7xl font-black mb-6 italic tracking-tighter uppercase leading-none">Duplex 2205</h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl opacity-90 italic font-medium uppercase tracking-tight italic tracking-tighter italic">Engineered for superior stress corrosion cracking resistance and double the yield strength of conventional austenitic steels.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="bg-gold-primary hover:bg-white text-navy-primary px-10 py-4 rounded-2xl font-black transition-all shadow-xl italic tracking-tighter uppercase">Request Technical Quote</Link>
                <a href="tel:+919819322576" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-10 py-4 rounded-2xl font-bold transition-all backdrop-blur-sm italic tracking-tighter">Talk to Metallurgist</a>
              </div>
            </div>
          </div>
          <Activity className="absolute right-[-10%] bottom-[-10%] w-[500px] h-[500px] text-white/5 pointer-events-none rotate-12" />
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 text-black">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-12">
                {/* Tech Profile Card */}
                <div className="bg-white dark:bg-gray-800 p-10 rounded-[2.5rem] shadow-2xl border border-gray-100 dark:border-gray-700 h-fit overflow-hidden">
                  <h2 className="text-3xl font-black text-navy-primary dark:text-white mb-8 italic tracking-tighter uppercase border-l-8 border-gold-primary pl-6">Grade Metallurgy</h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed italic font-medium italic mb-8 italic italic tracking-tighter shadow-sm p-4 bg-gray-50 dark:bg-gray-700 rounded-2xl italic tracking-tighter underline underline-offset-8 decoration-gold-primary decoration-4">Duplex 2205 (UNS S31803/S32205) is a nitrogen enhanced duplex stainless steel grade. The nitrogen serves to significantly improve the corrosion resistance of the alloy, especially in the welded condition. Its microstructure consists of a mixture of austenite and ferrite phases, providing it with the best of both worlds: high strength and excellent corrosion resistance.</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 h-fit overflow-hidden">
                    {chemicalComposition.map((item, i) => (
                      <div key={i} className="p-5 bg-gray-50 dark:bg-gray-700/50 rounded-3xl border border-gray-100 dark:border-gray-600 group hover:border-gold-primary transition-all">
                        <p className="text-[10px] text-gray-500 uppercase font-black italic mb-1 tracking-widest">{item.element}</p>
                        <p className="text-xl font-black text-navy-primary dark:text-gold-primary italic tracking-tighter uppercase">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mechanical Properties Card */}
                <div className="bg-navy-primary text-white p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group h-fit overflow-hidden">
                   <div className="relative z-10">
                      <h2 className="text-3xl font-black mb-8 italic tracking-tighter uppercase flex items-center gap-4 h-fit">
                         <Shield className="w-8 h-8 text-gold-primary" />
                         Performance Foundations (2205)
                      </h2>
                      <div className="grid md:grid-cols-2 gap-6 h-fit overflow-hidden">
                         {mechanicalProperties.map((spec, i) => (
                            <div key={i} className="flex justify-between items-center p-6 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors h-fit text-white">
                               <div className="w-full text-white">
                                  <p className="text-gold-primary font-black uppercase text-[10px] tracking-widest mb-1 italic tracking-tighter">{spec.prop}</p>
                                  <p className="text-xl font-black italic tracking-tighter text-white">{spec.value}</p>
                               </div>
                            </div>
                         ))}
                      </div>
                   </div>
                   <Microscope className="absolute right-[-5%] top-[-5%] w-64 h-64 text-white/5 pointer-events-none group-hover:scale-110 transition-transform h-fit" />
                </div>
              </div>

              <div className="space-y-8 h-fit overflow-hidden text-black">
                {/* Thermal Specs Sidebar */}
                <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-700 h-fit overflow-hidden">
                  <h3 className="text-xl font-black text-navy-primary dark:text-white mb-6 italic tracking-tighter uppercase border-b border-gold-primary pb-2 underline tracking-wider italic h-fit">Processing Guide</h3>
                  <div className="space-y-6 h-fit overflow-hidden">
                    {thermalSpecs.map((eq, i) => (
                      <div key={i} className="space-y-1 h-fit overflow-hidden">
                        <div className="flex justify-between items-center h-fit overflow-hidden">
                          <span className="text-xs text-gray-400 uppercase font-bold italic tracking-tighter italic h-fit overflow-hidden">{eq.process}</span>
                          <span className="font-black text-navy-primary dark:text-gold-primary italic text-sm tracking-tighter italic h-fit overflow-hidden">{eq.temp}</span>
                        </div>
                        <p className="text-[10px] text-gray-400 font-medium italic italic h-fit overflow-hidden">{eq.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Applications Card */}
                <div className="bg-gradient-to-br from-gold-primary to-yellow-600 p-8 rounded-[2.5rem] shadow-2xl text-navy-primary h-fit group overflow-hidden">
                   <h3 className="text-2xl font-black mb-6 italic tracking-tighter uppercase italic tracking-tighter italic">Critical Applications</h3>
                   <div className="space-y-4">
                      {["Oil & Gas Subsea Equipment", "Chemical Processing Tanks", "Marine Scrubbers", "Pulp & Paper Bleachers", "Desalination Evaporators", "Biofuel Reactors"].map((use, i) => (
                         <div key={i} className="flex items-center gap-3 text-sm font-black italic uppercase tracking-tighter group/item transition-all h-fit">
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

        {/* Global SEO Action Footer */}
        <section className="py-20 bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700 overflow-hidden relative">
           <div className="container mx-auto px-4 text-center relative z-10 h-fit">
              <h2 className="text-4xl font-black text-navy-primary dark:text-white mb-6 italic tracking-tighter uppercase italic tracking-tighter italic h-fit">Deploy Certified Duplex 2205 Solutions</h2>
              <p className="text-lg text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto font-medium italic italic tracking-tighter italic h-fit">Mamta Steel Traders provides source-verified UNS S31803 / S32205 round bars for global industrial projects. Full traceability and EN 10204 3.1 certification included.</p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center h-fit">
                 <Link href="/contact" className="bg-navy-primary text-white px-12 py-5 rounded-3xl font-black hover:bg-navy-secondary transition-all shadow-xl italic tracking-tighter uppercase italic tracking-tighter italic h-fit">Get Technical Estimate</Link>
                 <a href="mailto:naren@mamtasteel.com" className="border-4 border-navy-primary text-navy-primary px-12 py-5 rounded-3xl font-black hover:bg-gray-50 transition-all italic tracking-tighter uppercase italic tracking-tighter italic h-fit">Download Technical Sheet</a>
              </div>
           </div>
           <Settings className="absolute left-[-5%] bottom-[-5%] w-64 h-64 text-gray-100 dark:text-gray-700/50 rotate-45 pointer-events-none" />
        </section>
      </div>
    </>
  );
}
