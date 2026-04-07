import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft, ArrowRight, Phone, Mail, CheckCircle, Shield, Award, Activity, Microscope, Zap, Thermometer, Settings } from "lucide-react";
import { Link } from "wouter";

export default function C17510BerylliumCopper() {
  const chemicalComposition = [
    { element: "Beryllium (Be)", value: "0.20 – 0.60%" },
    { element: "Nickel (Ni)", value: "1.40 – 2.20%" },
    { element: "Copper (Cu)", value: "Balance" },
    { element: "Iron (Fe)", value: "0.10% max" },
    { element: "Silicon (Si)", value: "0.20% max" }
  ];

  const mechanicalProperties = [
    { prop: "Tensile Strength", value: "690 – 960 MPa" },
    { prop: "Yield Strength", value: "550 – 830 MPa" },
    { prop: "Hardness (Rockwell C)", value: "20 – 30 HRC" },
    { prop: "Electrical Conductivity", value: "45 – 60% IACS" },
    { prop: "Thermal Conductivity", value: "240 W/m·K" },
    { prop: "Elongation", value: "10 – 20%" }
  ];

  const thermalSpecs = [
    { process: "Solution Annealing", temp: "900 – 950°C", desc: "Rapid water quench to maintain supersaturated solid solution." },
    { process: "Aging Treatment", temp: "450 – 480°C", desc: "Hold for 2-3 hours to achieve peak hardness and conductivity." },
    { process: "Stress Relieving", temp: "150 – 300°C", desc: "Reduces internal stresses after fabrication." },
    { process: "Melting Point", temp: "1030°C", desc: "High temperature stability for industrial tooling." }
  ];

  return (
    <>
      <ProductSEO
        title="C17510 Beryllium Copper Round Bars | Low Be Alloy | RWMA Class 3 | Mumbai India"
        description="Premium C17510 Beryllium Copper supplier in Mumbai. High-strength copper alloy with excellent electrical conductivity for springs and connectors. RWMA Class 3 certified."
        keywords="C17510 beryllium copper, low beryllium copper alloy, C17510 round bars, RWMA Class 3 copper, high strength conductivity copper, C17510 supplier Mumbai"
        canonicalUrl="/product/round-bars/copper-nickel/c17510-beryllium-copper"
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
                 <span className="text-navy-primary dark:text-gold-primary font-bold italic tracking-wider">C17510 Beryllium Copper (Low Be)</span>
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
              <span className="bg-gold-primary text-navy-primary px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-6 inline-block">High Strength & High Conductivity</span>
              <h1 className="text-5xl md:text-7xl font-black mb-6 italic tracking-tighter uppercase leading-none">C17510 Beryllium Copper</h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl opacity-90 italic font-medium uppercase tracking-tight italic tracking-tighter italic">Precision RWMA Class 3 alloy engineered for critical electrical connectors and high-performance springs.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="bg-gold-primary hover:bg-white text-navy-primary px-10 py-4 rounded-2xl font-black transition-all shadow-xl italic tracking-tighter uppercase">Request Batch Quote</Link>
                <a href="tel:+919819322576" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-10 py-4 rounded-2xl font-bold transition-all backdrop-blur-sm italic tracking-tighter">Talk to Specialist</a>
              </div>
            </div>
          </div>
          <Zap className="absolute right-[-10%] bottom-[-10%] w-[500px] h-[500px] text-white/5 pointer-events-none rotate-12" />
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-12">
                {/* Tech Profile Card */}
                <div className="bg-white dark:bg-gray-800 p-10 rounded-[2.5rem] shadow-2xl border border-gray-100 dark:border-gray-700">
                  <h2 className="text-3xl font-black text-navy-primary dark:text-white mb-8 italic tracking-tighter uppercase border-l-8 border-gold-primary pl-6">Technical Metallurgy</h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed italic font-medium italic mb-8 italic italic tracking-tighter shadow-sm p-4 bg-gray-50 dark:bg-gray-700 rounded-2xl italic tracking-tighter">C17510, also known as Low Beryllium Copper, is specifically formulated to bridge the gap between high-strength steel and high-conductivity copper. It achieves tensile strengths approaching 1000 MPa after age hardening while maintaining 45-60% IACS conductivity, making it the industry standard for high-performance switches and connectors.</p>
                  
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
                         <Activity className="w-8 h-8 text-gold-primary" />
                         Engineered Specs (C17510)
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
                   <Microscope className="absolute right-[-5%] top-[-5%] w-64 h-64 text-white/5 pointer-events-none group-hover:scale-110 transition-transform" />
                </div>
              </div>

              <div className="space-y-8">
                {/* Thermal Specs Sidebar */}
                <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-700 h-fit">
                  <h3 className="text-xl font-black text-navy-primary dark:text-white mb-6 italic tracking-tighter uppercase border-b border-gold-primary pb-2 underline tracking-wider italic">Alloy Processing</h3>
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

                {/* Applications Card */}
                <div className="bg-gradient-to-br from-gold-primary to-yellow-600 p-8 rounded-[2.5rem] shadow-2xl text-navy-primary h-fit group">
                   <h3 className="text-2xl font-black mb-6 italic tracking-tighter uppercase italic tracking-tighter italic">High-Performance Segments</h3>
                   <div className="space-y-4">
                      {["Electrical Switches & Connectors", "Precision Springs", "Plastic Mold Inserts", "Aerospace Bushings", "High-Stress Fuse Clips", "Resistance Welding Tips"].map((use, i) => (
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

        {/* CTA Section */}
        <section className="py-20 bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700 overflow-hidden relative">
           <div className="container mx-auto px-4 text-center relative z-10">
              <h2 className="text-4xl font-black text-navy-primary dark:text-white mb-6 italic tracking-tighter uppercase italic tracking-tighter italic">Elevate Your Engineering Precision</h2>
              <p className="text-lg text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto font-medium italic italic tracking-tighter italic">Mamta Steel Traders stocks C17510 Beryllium Copper with certified RWMA Class 3 compliance. Every shipment is quality-tested for peak strength and conductivity.</p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                 <Link href="/contact" className="bg-navy-primary text-white px-12 py-5 rounded-3xl font-black hover:bg-navy-secondary transition-all shadow-xl italic tracking-tighter uppercase italic tracking-tighter italic">Instant Pricing Estimate</Link>
                 <a href="mailto:naren@mamtasteel.com" className="border-4 border-navy-primary text-navy-primary px-12 py-5 rounded-3xl font-black hover:bg-gray-50 transition-all italic tracking-tighter uppercase italic tracking-tighter italic">Download Technical Sheet</a>
              </div>
           </div>
           <Settings className="absolute left-[-5%] bottom-[-5%] w-64 h-64 text-gray-100 dark:text-gray-700/50 rotate-45 pointer-events-none" />
        </section>
      </div>
    </>
  );
}


