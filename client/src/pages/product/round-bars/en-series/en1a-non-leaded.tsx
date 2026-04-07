import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft, ArrowRight, Activity, Shield, Microscope, Zap, Settings } from "lucide-react";
import { Link } from "wouter";

export default function EN1ANonLeadedDetail() {
  const chemicalComposition = [
    { element: "Carbon (C)", value: "0.07 – 0.15%" },
    { element: "Silicon (Si)", value: "0.10% max" },
    { element: "Manganese (Mn)", value: "0.80 – 1.20%" },
    { element: "Phosphorus (P)", value: "0.07 – 0.12%" },
    { element: "Sulphur (S)", value: "0.20 – 0.30%" }
  ];

  const thermalSpecs = [
    { process: "Cold Drawing", temp: "Ambient", desc: "Improves dimensional accuracy and tensile strength via strain hardening." },
    { process: "Machinability", temp: "Very Good", desc: "Sulphur content aids in chip formation; excellent for high-volume parts." },
    { process: "Surface Finish", temp: "Smooth", desc: "Bright drawing ensures a scale-free, high-quality metallic finish." }
  ];

  return (
    <>
      <ProductSEO
        title="EN1A Non-Leaded Round Bars | Free Cutting Steel | 230M07 | Mumbai India"
        description="High-quality EN1A non-leaded (230M07) free machining steel round bars. Ideal for high-volume bright drawn production. Certified BS 970 standards."
        keywords="en1a non leaded round bars, 230m07 steel supplier, free cutting carbon steel, bright drawn mild steel, en series round bars"
        canonicalUrl="/product/round-bars/en-series/en1a-non-leaded"
      />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 font-bold tracking-tighter italic">
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
           <div className="container mx-auto px-4 py-4">
              <nav className="flex items-center space-x-2 text-sm flex-wrap">
                 <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary">Home</Link>
                 <ArrowRight className="w-4 h-4 text-gray-400" />
                 <Link href="/product/round-bars/en-series" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary uppercase">EN Series</Link>
                 <ArrowRight className="w-4 h-4 text-gray-400" />
                 <span className="text-navy-primary dark:text-gold-primary">EN1A Non-Leaded (230M07)</span>
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
              <span className="bg-gold-primary text-navy-primary px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-6 inline-block">Standard Free Machining</span>
              <h1 className="text-5xl md:text-7xl font-black mb-6 italic tracking-tighter uppercase leading-none">EN1A Non-Leaded (230M07)</h1>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl opacity-90 leading-relaxed italic uppercase">The backbone of automated bright drawn production, offering exceptional machinability without lead environmental concerns.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="bg-gold-primary hover:bg-white text-navy-primary px-10 py-4 rounded-2xl font-black transition-all shadow-xl italic tracking-tighter uppercase">Get Batch Estimate</Link>
                <a href="tel:+919819322576" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-10 py-4 rounded-2xl font-bold transition-all backdrop-blur-sm italic tracking-tighter uppercase">Technical Support</a>
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
                  <h2 className="text-3xl font-black text-navy-primary dark:text-white mb-8 italic tracking-tighter uppercase border-l-8 border-gold-primary pl-6">Technical Metallurgy</h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 italic font-semibold p-4 bg-gray-50 dark:bg-gray-700 rounded-2xl border-l-4 border-gold-primary uppercase tracking-tighter">EN1A (230M07) is a low carbon, free machining steel suitable for high-volume automated machining. The specific sulphur content ensures small, easy-to-break chips, while the absence of lead makes it ideal for projects with specific environmental compliance requirements.</p>
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
                         Performance Limits
                      </h2>
                      <div className="grid md:grid-cols-2 gap-6">
                          <div className="p-6 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                             <p className="text-gold-primary font-black uppercase text-[10px] tracking-widest mb-1 italic">Hardness</p>
                             <p className="text-xl font-black italic tracking-tighter text-white uppercase italic">130 – 180 HB (Bright Drawn)</p>
                          </div>
                          <div className="p-6 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                             <p className="text-gold-primary font-black uppercase text-[10px] tracking-widest mb-1 italic">Tensile Strength</p>
                             <p className="text-xl font-black italic tracking-tighter text-white uppercase italic">410 – 540 MPa</p>
                          </div>
                      </div>
                   </div>
                   <Microscope className="absolute right-[-5%] top-[-5%] w-64 h-64 text-white/5 pointer-events-none group-hover:scale-110 transition-transform" />
                </div>
              </div>
              <div className="space-y-8">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-700">
                  <h3 className="text-xl font-black text-navy-primary dark:text-white mb-6 italic tracking-tighter uppercase border-b border-gold-primary pb-2">Industrial Guide</h3>
                  <div className="space-y-6">
                    {thermalSpecs.map((eq, i) => (
                      <div key={i} className="space-y-1">
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-400 uppercase font-bold italic">{eq.process}</span>
                          <span className="font-black text-navy-primary dark:text-gold-primary italic text-sm tracking-tighter uppercase">{eq.temp}</span>
                        </div>
                        <p className="text-[10px] text-gray-400 font-medium italic lowercase">{eq.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-gradient-to-br from-gold-primary to-yellow-600 p-8 rounded-[2.5rem] shadow-2xl text-navy-primary group overflow-hidden">
                   <h3 className="text-2xl font-black mb-6 italic tracking-tighter uppercase">Typical Use Cases</h3>
                   <div className="space-y-4 font-black italic uppercase tracking-tighter">
                      {["Spindles", "Bushings", "Pistons", "Studs and Bolts", "Standard Connectors", "Valve Parts"].map((use, i) => (
                         <div key={i} className="flex items-center gap-3 text-sm group/item transition-all">
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
        <section className="py-20 bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700 text-center relative overflow-hidden">
           <div className="container mx-auto px-4 relative z-10">
              <h2 className="text-4xl font-black text-navy-primary dark:text-white mb-6 italic tracking-tighter uppercase">Certified EN1A Non-Leaded Stockist</h2>
              <p className="text-lg text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto font-medium italic tracking-tighter italic uppercase">We provide NABL certified EN1A Non-Leaded bright bars for the aerospace and defense sectors. Available in hex, round, and square profiles for immediate dispatch.</p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                 <Link href="/contact" className="bg-navy-primary text-white px-12 py-5 rounded-3xl font-black hover:bg-navy-secondary transition-all shadow-xl italic tracking-tighter uppercase">Request Batch Pricing</Link>
                 <a href="mailto:naren@mamtasteel.com" className="border-4 border-navy-primary text-navy-primary px-12 py-5 rounded-3xl font-black hover:bg-gray-50 transition-all italic tracking-tighter uppercase">Download Data Sheet</a>
              </div>
           </div>
           <Settings className="absolute left-[-5%] bottom-[-5%] w-64 h-64 text-gray-100 dark:text-gray-700/50 rotate-45 pointer-events-none" />
        </section>
      </div>
    </>
  );
}


