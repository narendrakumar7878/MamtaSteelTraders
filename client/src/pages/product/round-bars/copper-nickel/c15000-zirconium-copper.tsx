import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft, ArrowRight, Phone, Mail, CheckCircle, Shield, Award, Activity, Microscope, Zap, Thermometer, Settings } from "lucide-react";
import { Link } from "wouter";

export default function C15000ZirconiumCopper() {
  const chemicalComposition = [
    { element: "Copper (Cu)", value: "99.80% min" },
    { element: "Zirconium (Zr)", value: "0.10 – 0.20%" },
    { element: "Total Impurities", value: "0.10% max" }
  ];

  const mechanicalProperties = [
    { prop: "Tensile Strength", value: "340 – 450 MPa" },
    { prop: "Yield Strength", value: "280 – 380 MPa" },
    { prop: "Elongation (in 2\")", value: "10 – 15%" },
    { prop: "Hardness (Rockwell B)", value: "60 – 80 HRB" },
    { prop: "Electrical Conductivity", value: "90% IACS min" },
    { prop: "Thermal Conductivity", value: "320 W/m·K" }
  ];

  const thermalSpecs = [
    { process: "Solution Treatment", temp: "900 – 925°C", desc: "Heat and water quench for optimized zirconium dispersion." },
    { process: "Aging Treatment", temp: "450 – 500°C", desc: "Improves hardness and conductivity significantly." },
    { process: "Softening Temp", temp: "500 – 525°C", desc: "Retains high mechanical strength at elevated temperatures." },
    { process: "Machinability", temp: "20%", desc: "Standard for precipitation-hardened copper alloys." }
  ];

  return (
    <>
      <ProductSEO
        title="C15000 Zirconium Copper Round Bars | CuZr Alloy | Resistance Welding | Mumbai India"
        description="Premium C15000 Zirconium Copper supplier in Mumbai. High-strength CuZr alloy with excellent thermal stability for welding electrodes and circuit breakers. ASTM B124 certified."
        keywords="C15000 zirconium copper, CuZr alloy round bars, resistance welding electrodes, high conductivity copper zirconium, C15000 supplier Mumbai, industrial copper alloys"
        canonicalUrl="/product/round-bars/copper-nickel/c15000-zirconium-copper"
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
                 <Link href="/product/round-bars/copper-nickel" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary transition-all">Copper Nickel & Alloys</Link>
                 <ArrowRight className="w-4 h-4 text-gray-400" />
                 <span className="text-navy-primary dark:text-gold-primary font-bold italic tracking-wider">C15000 Zirconium Copper (CuZr)</span>
              </nav>
           </div>
        </div>

        {/* Back Link */}
        <div className="container mx-auto px-4 py-4">
           <Link href="/product/round-bars/copper-nickel" className="inline-flex items-center text-navy-primary dark:text-gold-primary hover:underline font-bold italic uppercase text-xs">
              <ArrowLeft className="w-3 h-3 mr-2" /> Back to Copper Nickel Hub
           </Link>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-navy-primary via-navy-secondary to-slate-800 text-white py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl">
              <span className="bg-gold-primary text-navy-primary px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-6 inline-block">High-Strength Thermal Stability</span>
              <h1 className="text-5xl md:text-7xl font-black mb-6 italic tracking-tighter uppercase leading-none">C15000 Zirconium Copper</h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl opacity-90 italic font-medium uppercase tracking-tight italic tracking-tighter italic">Superior CuZr alloy designed for extreme resistance welding and high-temperature electrical reliability.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="bg-gold-primary hover:bg-white text-navy-primary px-10 py-4 rounded-2xl font-black transition-all shadow-xl italic tracking-tighter uppercase">Request Batch Quote</Link>
                <a href="tel:+919819322576" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-10 py-4 rounded-2xl font-bold transition-all backdrop-blur-sm italic tracking-tighter">Talk to Metallurgist</a>
              </div>
            </div>
          </div>
          <Activity className="absolute right-[-10%] bottom-[-10%] w-[500px] h-[500px] text-white/5 pointer-events-none rotate-12" />
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-12">
                {/* Tech Profile Card */}
                <div className="bg-white dark:bg-gray-800 p-10 rounded-[2.5rem] shadow-2xl border border-gray-100 dark:border-gray-700">
                  <h2 className="text-3xl font-black text-navy-primary dark:text-white mb-8 italic tracking-tighter uppercase border-l-8 border-gold-primary pl-6">Industrial Standards</h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed italic font-medium italic mb-8 italic italic tracking-tighter shadow-sm p-4 bg-gray-50 dark:bg-gray-700 rounded-2xl italic tracking-tighter underline underline-offset-8 decoration-gold-primary decoration-4">C15000 (Zirconium Copper) is the premier choice for seam welding and spot welding electrodes. Unlike traditional copper, CuZr maintains high mechanical strength and hardness at operating temperatures exceeding 500°C without significant loss of electrical conductivity.</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {chemicalComposition.map((item, i) => (
                      <div key={i} className="p-5 bg-gray-50 dark:bg-gray-700/50 rounded-3xl border border-gray-100 dark:border-gray-600 group hover:border-gold-primary transition-all">
                        <p className="text-[10px] text-gray-500 uppercase font-black italic mb-1 tracking-widest">{item.element}</p>
                        <p className="text-xl font-black text-navy-primary dark:text-gold-primary italic tracking-tighter">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mechanical Properties Card */}
                <div className="bg-navy-primary text-white p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                   <div className="relative z-10">
                      <h2 className="text-3xl font-black mb-8 italic tracking-tighter uppercase flex items-center gap-4 h-fit">
                         <Microscope className="w-8 h-8 text-gold-primary" />
                         Performance Architecture (C15000)
                      </h2>
                      <div className="grid md:grid-cols-2 gap-6">
                         {mechanicalProperties.map((spec, i) => (
                            <div key={i} className="flex justify-between items-center p-6 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                               <div className="w-full">
                                  <p className="text-gold-primary font-black uppercase text-[10px] tracking-widest mb-1 italic tracking-tighter">{spec.prop}</p>
                                  <p className="text-xl font-black italic tracking-tighter">{spec.value}</p>
                               </div>
                            </div>
                         ))}
                      </div>
                   </div>
                   <Zap className="absolute right-[-5%] top-[-5%] w-64 h-64 text-white/5 pointer-events-none group-hover:scale-110 transition-transform" />
                </div>
              </div>

              <div className="space-y-8">
                {/* Heat Treatment Sidebar */}
                <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-700 h-fit">
                  <h3 className="text-xl font-black text-navy-primary dark:text-white mb-6 italic tracking-tighter uppercase border-b border-gold-primary pb-2 underline tracking-wider italic">Copper Thermal Cycle</h3>
                  <div className="space-y-6">
                    {thermalSpecs.map((eq, i) => (
                      <div key={i} className="space-y-1">
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-500 uppercase font-bold italic tracking-tighter italic">{eq.process}</span>
                          <span className="font-black text-navy-primary dark:text-gold-primary italic text-sm tracking-tighter italic">{eq.temp}</span>
                        </div>
                        <p className="text-[10px] text-gray-400 font-medium italic italic">{eq.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Use Cases Card */}
                <div className="bg-gradient-to-br from-gold-primary to-yellow-600 p-8 rounded-[2.5rem] shadow-2xl text-navy-primary h-fit group">
                   <h3 className="text-2xl font-black mb-6 italic tracking-tighter uppercase italic tracking-tighter italic">Precision Segments</h3>
                   <div className="space-y-4">
                      {["Resistant Welding Wheels", "Spot Welding Electrodes", "Switchgear Components", "Circuit Breaker Parts", "Continuous Casting Molds", "Heat Sinks for Electronics"].map((use, i) => (
                         <div key={i} className="flex items-center gap-3 text-sm font-black italic uppercase tracking-tighter group/item transition-all">
                            <Zap className="w-4 h-4 text-navy-primary/60 group-hover/item:text-navy-primary" />
                            <span>{use}</span>
                         </div>
                      ))}
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Action Section */}
        <section className="py-20 bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700 overflow-hidden relative">
           <div className="container mx-auto px-4 text-center relative z-10">
              <h2 className="text-4xl font-black text-navy-primary dark:text-white mb-6 italic tracking-tighter uppercase italic tracking-tighter italic">Scale Your Industrial Welding Production</h2>
              <p className="text-lg text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto font-medium italic italic tracking-tighter italic">Mamta Steel Traders stocks C15000 Zirconium Copper in precise dimensions for high-speed industrial lines. Every batch is certified for hardness and conductivity standards.</p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                 <Link href="/contact" className="bg-navy-primary text-white px-12 py-5 rounded-3xl font-black hover:bg-navy-secondary transition-all shadow-xl italic tracking-tighter uppercase italic tracking-tighter italic">Instant Pricing Estimate</Link>
                 <a href="mailto:naren@mamtasteel.com" className="border-4 border-navy-primary text-navy-primary px-12 py-5 rounded-3xl font-black hover:bg-gray-50 transition-all italic tracking-tighter uppercase italic tracking-tighter italic">Get Technical Sheet</a>
              </div>
           </div>
           <Settings className="absolute left-[-5%] bottom-[-5%] w-64 h-64 text-gray-100 dark:text-gray-700/50 rotate-45 pointer-events-none" />
        </section>
      </div>
    </>
  );
}


