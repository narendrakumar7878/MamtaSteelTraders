import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft, ArrowRight, Phone, Mail, CheckCircle, Shield, Award, Activity, Microscope, Zap, Thermometer, Settings } from "lucide-react";
import { Link } from "wouter";

export default function C93200BearingBronze() {
  const chemicalComposition = [
    { element: "Copper (Cu)", value: "81.00 – 85.00%" },
    { element: "Tin (Sn)", value: "6.30 – 7.50%" },
    { element: "Lead (Pb)", value: "6.00 – 8.00%" },
    { element: "Zinc (Zn)", value: "2.00 – 4.00%" },
    { element: "Nickel (Ni)", value: "1.00% max" },
    { element: "Iron (Fe)", value: "0.20% max" }
  ];

  const mechanicalProperties = [
    { prop: "Tensile Strength", value: "240 – 310 MPa" },
    { prop: "Yield Strength (0.5%)", value: "110 – 160 MPa" },
    { prop: "Hardness (Brinell)", value: "60 – 75 HB" },
    { prop: "Elongation", value: "8 – 15%" },
    { prop: "Density", value: "8.91 g/cm³" },
    { prop: "Machinability Rating", value: "70%" }
  ];

  const thermalSpecs = [
    { process: "Melting Point (Liquid)", temp: "954°C (1750°F)", desc: "Standard casting temperature for semi-finished bars." },
    { process: "Melting Point (Solid)", temp: "854°C (1570°F)", desc: "Solidus line for industrial bearing bronze." },
    { process: "Stress Relieving", temp: "260°C", desc: "Recommended for critical dimensional stability in bushings." },
    { process: "Coefficient of Friction", temp: "0.10 (Lubricated)", desc: "Excellent anti-friction properties for heavy-duty rotation." }
  ];

  return (
    <>
      <ProductSEO
        title="C93200 Bearing Bronze (SAE 660) Round Bars | High Load Bushings | Mumbai India"
        description="Premium C93200 SAE 660 Bearing Bronze supplier in Mumbai. High-strength red bronze alloy with superior wear resistance for industrial bearings and bushings. ISO certified."
        keywords="C93200 bearing bronze, SAE 660 bronze round bars, red bronze bushings, high load bearing bronze, ASTM B505 C93200, SAE660 bronze supplier Mumbai"
        canonicalUrl="/product/round-bars/copper-nickel/c93200-bearing-bronze"
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
                 <span className="text-navy-primary dark:text-gold-primary font-bold italic tracking-wider uppercase">C93200 SAE 660 Bearing Bronze</span>
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
              <span className="bg-gold-primary text-navy-primary px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-6 inline-block shadow-lg">Extreme Wear Anti-Friction</span>
              <h1 className="text-5xl md:text-7xl font-black mb-6 italic tracking-tighter uppercase leading-none">SAE 660 Bronze (C93200)</h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl opacity-90 italic font-medium uppercase tracking-tight italic tracking-tighter italic">The industry standard for high-performance bearings and bushings with exceptional lubricating properties.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="bg-gold-primary hover:bg-white text-navy-primary px-10 py-4 rounded-2xl font-black transition-all shadow-xl italic tracking-tighter uppercase">Request Industrial Quote</Link>
                <a href="tel:+919819322576" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-10 py-4 rounded-2xl font-bold transition-all backdrop-blur-sm italic tracking-tighter">Talk to Expert</a>
              </div>
            </div>
          </div>
          <Activity className="absolute right-[-10%] bottom-[-10%] w-[500px] h-[500px] text-white/5 pointer-events-none rotate-12 flex items-center justify-center h-fit w-fit" />
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12 text-black">
              <div className="lg:col-span-2 space-y-12">
                {/* Tech Profile Card */}
                <div className="bg-white dark:bg-gray-800 p-10 rounded-[2.5rem] shadow-2xl border border-gray-100 dark:border-gray-700">
                  <h2 className="text-3xl font-black text-navy-primary dark:text-white mb-8 italic tracking-tighter uppercase border-l-8 border-gold-primary pl-6">Technical Architecture</h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed italic font-medium italic mb-8 italic italic tracking-tighter shadow-sm p-4 bg-gray-50 dark:bg-gray-700 rounded-2xl italic tracking-tighter underline underline-offset-8 decoration-gold-primary decoration-4">C93200 (SAE 660) is a high-leaded tin bronze alloy that reigns supreme in the world of industrial bearings. Its unique lead content provides built-in lubricating properties, preventing shaft scoring during start-up and ensuring consistent anti-friction performance under high-load rotating conditions.</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {chemicalComposition.map((item, i) => (
                      <div key={i} className="p-5 bg-gray-50 dark:bg-gray-700/50 rounded-3xl border border-gray-100 dark:border-gray-600 group hover:border-gold-primary transition-all">
                        <p className="text-[10px] text-gray-500 uppercase font-black italic mb-1 tracking-widest">{item.element}</p>
                        <p className="text-xl font-black text-navy-primary dark:text-gold-primary italic tracking-tighter uppercase">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mechanical Properties Card */}
                <div className="bg-navy-primary text-white p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                   <div className="relative z-10 h-fit">
                      <h2 className="text-3xl font-black mb-8 italic tracking-tighter uppercase flex items-center gap-4 h-fit">
                         <Shield className="w-8 h-8 text-gold-primary h-fit" />
                         Anti-Friction Engineering (C93200)
                      </h2>
                      <div className="grid md:grid-cols-2 gap-6 h-fit">
                         {mechanicalProperties.map((spec, i) => (
                            <div key={i} className="flex justify-between items-center p-6 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors h-fit text-white">
                               <div className="w-full text-white">
                                  <p className="text-gold-primary font-black uppercase text-[10px] tracking-widest mb-1 italic tracking-tighter italic">{spec.prop}</p>
                                  <p className="text-xl font-black italic tracking-tighter italic text-white">{spec.value}</p>
                               </div>
                            </div>
                         ))}
                      </div>
                   </div>
                   <Microscope className="absolute right-[-5%] top-[-5%] w-64 h-64 text-white/5 pointer-events-none group-hover:scale-110 transition-transform h-fit" />
                </div>
              </div>

              <div className="space-y-8 h-fit">
                {/* Thermal Specs Sidebar */}
                <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-700 h-fit overflow-hidden">
                  <h3 className="text-xl font-black text-navy-primary dark:text-white mb-6 italic tracking-tighter uppercase border-b border-gold-primary pb-2 underline tracking-wider italic h-fit">Bronze Thermal Cycle</h3>
                  <div className="space-y-6 h-fit">
                    {thermalSpecs.map((eq, i) => (
                      <div key={i} className="space-y-1 h-fit">
                        <div className="flex justify-between items-center h-fit">
                          <span className="text-xs text-gray-500 uppercase font-bold italic tracking-tighter italic h-fit">{eq.process}</span>
                          <span className="font-black text-navy-primary dark:text-gold-primary italic text-sm tracking-tighter italic h-fit">{eq.temp}</span>
                        </div>
                        <p className="text-[10px] text-gray-400 font-medium italic italic h-fit">{eq.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Applications Card */}
                <div className="bg-gradient-to-br from-gold-primary to-yellow-600 p-8 rounded-[2.5rem] shadow-2xl text-navy-primary h-fit group">
                   <h3 className="text-2xl font-black mb-6 italic tracking-tighter uppercase italic tracking-tighter italic h-fit">Bearing Applications</h3>
                   <div className="space-y-4 h-fit">
                      {["Heavy-Duty Bearings", "Industrial Bushings", "Thrust Washers", "Wear Plates", "Pump Components", "Pinion Gears", "Main Shaft Bearings"].map((use, i) => (
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

        {/* Action Section */}
        <section className="py-20 bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700 overflow-hidden relative">
           <div className="container mx-auto px-4 text-center relative z-10">
              <h2 className="text-4xl font-black text-navy-primary dark:text-white mb-6 italic tracking-tighter uppercase italic tracking-tighter italic">Maximize Your Industrial Machine Life</h2>
              <p className="text-lg text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto font-medium italic italic tracking-tighter italic">Mamta Steel Traders stocks C93200 (SAE 660) red bronze round bars with certified anti-friction performance. Reduce downtime with our premium bearing alloys.</p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                 <Link href="/contact" className="bg-navy-primary text-white px-12 py-5 rounded-3xl font-black hover:bg-navy-secondary transition-all shadow-xl italic tracking-tighter uppercase italic tracking-tighter italic">Get Industrial Estimate</Link>
                 <a href="mailto:naren@mamtasteel.com" className="border-4 border-navy-primary text-navy-primary px-12 py-5 rounded-3xl font-black hover:bg-gray-50 transition-all italic tracking-tighter uppercase italic tracking-tighter italic">Download Metallurgy PDF</a>
              </div>
           </div>
           <Settings className="absolute left-[-5%] bottom-[-5%] w-64 h-64 text-gray-100 dark:text-gray-700/50 rotate-45 pointer-events-none" />
        </section>
      </div>
    </>
  );
}
