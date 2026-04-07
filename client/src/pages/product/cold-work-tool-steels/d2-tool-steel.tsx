import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft, ArrowRight, Phone, Mail, CheckCircle, Shield, Award, Activity, Microscope, Zap, Thermometer, Settings } from "lucide-react";
import { Link } from "wouter";

export default function D2ToolSteel() {
  const chemicalComposition = [
    { element: "Carbon (C)", value: "1.40 – 1.60%" },
    { element: "Chromium (Cr)", value: "11.0 – 13.0%" },
    { element: "Molybdenum (Mo)", value: "0.70 – 1.20%" },
    { element: "Vanadium (V)", value: "0.15 – 0.35%" },
    { element: "Manganese (Mn)", value: "0.20 – 0.60%" },
    { element: "Silicon (Si)", value: "0.10 – 0.60%" }
  ];

  const equivalentGrades = [
    { country: "USA (AISI)", grade: "D2" },
    { country: "Germany (DIN)", grade: "1.2379 / X153CrMoV12" },
    { country: "Japan (JIS)", grade: "SKD11" },
    { country: "France (AFNOR)", grade: "Z160CDV12" }
  ];

  const thermalSpecs = [
    { process: "Forging", temp: "1050 – 850°C", desc: "Heat slowly and uniformly. Do not forge below 850°C." },
    { process: "Annealing", temp: "800 – 850°C", desc: "Slow furnace cooling. Max hardness 255 HB." },
    { process: "Hardening", temp: "1000 – 1040°C", desc: "Air or oil quench. Preheat in two stages." },
    { process: "Tempering", temp: "150 – 520°C", desc: "Double tempering is mandatory for stability." }
  ];

  return (
    <>
      <ProductSEO
        title="D2 Tool Steel (HCHCR) Round Bars & Flats | DIN 1.2379 | SKD11 | Mumbai India"
        description="Premium HCHCR-D2 tool steel supplier in Mumbai. High carbon high chromium die steel with superior wear resistance. AISI D2, DIN 1.2379 certified. Stockist of D2 round bars and flats for stamping dies."
        keywords="D2 tool steel, HCHCR round bars, DIN 1.2379 steel, SKD11 equivalent Mumbai, high carbon high chrome steel, stamping die steel, tool steel supplier India"
        canonicalUrl="/product/cold-work-tool-steels/d2-tool-steel"
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
                 <Link href="/product/cold-work-tool-steels" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary transition-all">Cold Work Tool Steels</Link>
                 <ArrowRight className="w-4 h-4 text-gray-400" />
                 <span className="text-navy-primary dark:text-gold-primary font-bold italic tracking-wider">AISI D2 / DIN 1.2379</span>
              </nav>
           </div>
        </div>

        {/* Back Link */}
        <div className="container mx-auto px-4 py-4">
           <Link href="/product/cold-work-tool-steels" className="inline-flex items-center text-navy-primary dark:text-gold-primary hover:underline font-bold italic uppercase text-xs">
              <ArrowLeft className="w-3 h-3 mr-2" /> Back to Cold Work Steels
           </Link>
        </div>

        <section className="bg-gradient-to-br from-navy-primary via-navy-secondary to-slate-800 text-white py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl">
              <span className="bg-gold-primary text-navy-primary px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-6 inline-block">High-Performance Die Steel</span>
              <h1 className="text-5xl md:text-7xl font-black mb-6 italic tracking-tighter uppercase leading-none">D2 Tool Steel</h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl opacity-90 italic font-medium uppercase tracking-tight italic">Ultimate wear resistance and dimensional stability for high-volume cold work tooling.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="bg-gold-primary hover:bg-white text-navy-primary px-10 py-4 rounded-2xl font-black transition-all shadow-xl italic tracking-tighter uppercase">Request Batch Quote</Link>
                <a href="tel:+919819322576" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-10 py-4 rounded-2xl font-bold transition-all backdrop-blur-sm italic tracking-tighter">Talk to Metallurgist</a>
              </div>
            </div>
          </div>
          <Settings className="absolute right-[-10%] bottom-[-10%] w-[500px] h-[500px] text-white/5 pointer-events-none rotate-12" />
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-12">
                {/* Intro Card */}
                <div className="bg-white dark:bg-gray-800 p-10 rounded-[2.5rem] shadow-2xl border border-gray-100 dark:border-gray-700">
                  <h2 className="text-3xl font-black text-navy-primary dark:text-white mb-8 italic tracking-tighter uppercase border-l-8 border-gold-primary pl-6">Technical Profile</h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed italic font-medium italic mb-8 italic">AISI D2 (HCHCR) is a high-carbon, high-chromium tool steel known for its exceptional through-hardening capability and abrasion resistance. Its unique balanced chemistry allows for minimal distortion during heat treatment, making it the industry standard for precision dies and cutting tools.</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {chemicalComposition.map((item, i) => (
                      <div key={i} className="p-5 bg-gray-50 dark:bg-gray-700/50 rounded-3xl border border-gray-100 dark:border-gray-600 group hover:border-gold-primary transition-all">
                        <p className="text-[10px] text-gray-500 uppercase font-black italic mb-1 tracking-widest">{item.element}</p>
                        <p className="text-xl font-black text-navy-primary dark:text-gold-primary italic tracking-tighter">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Heat Treatment Card */}
                <div className="bg-navy-primary text-white p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                   <div className="relative z-10">
                      <h2 className="text-3xl font-black mb-8 italic tracking-tighter uppercase flex items-center gap-4 h-fit">
                         <Thermometer className="w-8 h-8 text-gold-primary" />
                         Heat Treatment Specs (HCHCR-D2)
                      </h2>
                      <div className="space-y-6">
                         {thermalSpecs.map((spec, i) => (
                            <div key={i} className="flex flex-col md:flex-row gap-4 p-6 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                               <div className="md:w-1/4">
                                  <p className="text-gold-primary font-black uppercase text-xs tracking-widest mb-1 italic">{spec.process}</p>
                                  <p className="text-xl font-black italic tracking-tighter">{spec.temp}</p>
                               </div>
                               <p className="md:w-3/4 text-sm text-gray-300 font-medium italic leading-relaxed">{spec.desc}</p>
                            </div>
                         ))}
                      </div>
                   </div>
                   <Activity className="absolute right-[-5%] top-[-5%] w-64 h-64 text-white/5 pointer-events-none group-hover:scale-110 transition-transform" />
                </div>
              </div>

              <div className="space-y-8">
                {/* Equivalent Table */}
                <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-700 h-fit">
                  <h3 className="text-xl font-black text-navy-primary dark:text-white mb-6 italic tracking-tighter uppercase border-b border-gold-primary pb-2">Global Standards</h3>
                  <div className="space-y-4">
                    {equivalentGrades.map((eq, i) => (
                      <div key={i} className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-2xl border border-transparent hover:border-gold-primary/20 transition-all">
                        <span className="text-xs text-gray-500 uppercase font-bold italic">{eq.country}</span>
                        <span className="font-black text-navy-primary dark:text-gold-primary italic text-sm">{eq.grade}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Industrial Use-Cases */}
                <div className="bg-gradient-to-br from-gold-primary to-yellow-600 p-8 rounded-[2.5rem] shadow-2xl text-navy-primary h-fit group">
                   <h3 className="text-2xl font-black mb-6 italic tracking-tighter uppercase italic">Precision Use Cases</h3>
                   <div className="space-y-4">
                      {["Stamping & Blanking Dies", "Thread Rolling Dies", "Slitting Knives", "Punches & Gauge Blocks", "Master Hobs", "Erosion Testing Tools"].map((use, i) => (
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

        {/* CTA Footer */}
        <section className="py-20 bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700">
           <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-black text-navy-primary dark:text-white mb-6 italic tracking-tighter uppercase italic">Optimize Your Tooling Lifecycle</h2>
              <p className="text-lg text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto font-medium italic italic">Mamta Steel Traders provides precision annealing, grinding, and vacuum hardening support for high-end HCHCR materials. Technical data sheets available on request.</p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                 <Link href="/contact" className="bg-navy-primary text-white px-12 py-5 rounded-3xl font-black hover:bg-navy-secondary transition-all shadow-xl italic tracking-tighter uppercase italic tracking-tighter">Instant Batch Pricing</Link>
                 <a href="mailto:naren@mamtasteel.com" className="border-4 border-navy-primary text-navy-primary px-12 py-5 rounded-3xl font-black hover:bg-gray-50 transition-all italic tracking-tighter uppercase italic tracking-tighter">Export Inquiry</a>
              </div>
           </div>
        </section>
      </div>
    </>
  );
}

