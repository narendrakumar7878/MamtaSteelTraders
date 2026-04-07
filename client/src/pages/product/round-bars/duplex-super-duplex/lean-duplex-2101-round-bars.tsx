import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft, ArrowRight, Phone, Mail, CheckCircle, Shield, Award, Activity, Microscope, Zap, Thermometer, Settings } from "lucide-react";
import { Link } from "wouter";

export default function LeanDuplex2101Detail() {
  const chemicalComposition = [
    { element: "Chromium (Cr)", value: "21.0 – 22.0%" },
    { element: "Manganese (Mn)", value: "4.0 – 6.0%" },
    { element: "Nickel (Ni)", value: "1.35 – 1.70%" },
    { element: "Nitrogen (N)", value: "0.20 – 0.25%" },
    { element: "Copper (Cu)", value: "0.10 – 0.80%" },
    { element: "Molybdenum (Mo)", value: "0.10 – 0.80%" }
  ];

  const mechanicalProperties = [
    { prop: "Tensile Strength", value: "650 MPa min" },
    { prop: "Yield Strength (0.2%)", value: "450 MPa min" },
    { prop: "Elongation (in 2\")", value: "30% min" },
    { prop: "Hardness (Brinell)", value: "290 HB max" },
    { prop: "PREN (Pitting Resistance)", value: "26.0 (approx)" },
    { prop: "Density", value: "7.70 g/cm³" }
  ];

  const thermalSpecs = [
    { process: "Solution Annealing", temp: "1020 – 1100°C", desc: "Rapid cooling is essential to maintain the ferrite/austenite phase balance." },
    { process: "Hot Working", temp: "1150 – 950°C", desc: "Wide forging window; do not work below 950°C." },
    { process: "Machinability", temp: "Good", desc: "Better machinability than standard 2205 due to controlled sulfur/manganese." },
    { process: "Corrosion Res", temp: "Moderate", desc: "Excellent resistance to chloride SCC; superior to 304L/316L grades." }
  ];

  return (
    <>
      <ProductSEO
        title="Lean Duplex 2101 Round Bars | UNS S32101 | Cost-Effective High Strength Steel | Mumbai"
        description="Premium Lean Duplex 2101 (UNS S32101) Round Bar supplier in Mumbai India. High strength and moderate corrosion resistance for structural and storage applications. ASTM A276."
        keywords="lean duplex 2101 round bars, uns s32101 round bar price, ldx 2101 supplier mumbai, cost effective duplex steel, structural stainless steel bars, storage tank metallurgy"
        canonicalUrl="/product/round-bars/duplex-super-duplex/lean-duplex-2101"
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
                 <span className="text-navy-primary dark:text-gold-primary font-bold italic tracking-wider">Lean Duplex 2101 (UNS S32101)</span>
              </nav>
           </div>
        </div>

        {/* Back Link */}
        <div className="container mx-auto px-4 py-4">
           <Link href="/product/round-bars/duplex-super-duplex" className="inline-flex items-center text-navy-primary dark:text-gold-primary hover:underline font-bold italic uppercase text-xs h-fit overflow-hidden">
              <ArrowLeft className="w-3 h-3 mr-2 h-fit overflow-hidden" /> Back to Duplex Hub
           </Link>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-navy-primary via-navy-secondary to-slate-800 text-white py-20 relative overflow-hidden h-fit overflow-hidden">
          <div className="container mx-auto px-4 relative z-10 h-fit overflow-hidden">
            <div className="max-w-4xl h-fit overflow-hidden">
              <span className="bg-gold-primary text-navy-primary px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-6 inline-block shadow-lg underline decoration-navy-primary decoration-4 h-fit overflow-hidden">Cost-Efficient High Strength</span>
              <h1 className="text-5xl md:text-7xl font-black mb-6 italic tracking-tighter uppercase leading-none h-fit overflow-hidden">Lean Duplex 2101</h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl opacity-90 italic font-medium uppercase tracking-tight italic tracking-tighter italic h-fit overflow-hidden">The ideal economical alternative to 300-series stainless steels, offering superior strength and chloride resistance.</p>
              <div className="flex flex-wrap gap-4 h-fit overflow-hidden">
                <Link href="/contact" className="bg-gold-primary hover:bg-white text-navy-primary px-10 py-4 rounded-2xl font-black transition-all shadow-xl italic tracking-tighter uppercase h-fit overflow-hidden">Request Batch Pricing</Link>
                <a href="tel:+919819322576" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-10 py-4 rounded-2xl font-bold transition-all backdrop-blur-sm italic tracking-tighter h-fit overflow-hidden">Talk to Specialist</a>
              </div>
            </div>
          </div>
          <Activity className="absolute right-[-10%] bottom-[-10%] w-[500px] h-[500px] text-white/5 pointer-events-none rotate-12 h-fit" />
        </section>

        <section className="py-20 h-fit overflow-hidden">
          <div className="container mx-auto px-4 text-black h-fit overflow-hidden">
            <div className="grid lg:grid-cols-3 gap-12 h-fit overflow-hidden">
              <div className="lg:col-span-2 space-y-12 h-fit overflow-hidden">
                {/* Tech Profile Card */}
                <div className="bg-white dark:bg-gray-800 p-10 rounded-[2.5rem] shadow-2xl border border-gray-100 dark:border-gray-700 h-fit overflow-hidden h-fit overflow-hidden">
                  <h2 className="text-3xl font-black text-navy-primary dark:text-white mb-8 italic tracking-tighter uppercase border-l-8 border-gold-primary pl-6 h-fit overflow-hidden">Technical Profile</h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed italic font-medium italic mb-8 italic italic tracking-tighter shadow-sm p-4 bg-gray-50 dark:bg-gray-700 rounded-2xl italic tracking-tighter underline underline-offset-8 decoration-gold-primary decoration-4 h-fit overflow-hidden">Lean Duplex 2101 (UNS S32101) is a low-nickel, nitrogen-enhanced duplex stainless steel. It bridges the gap between the 300 series austenitics and the higher alloyed duplex grades like 2205. With a high yield strength (twice that of 304L/316L) and good resistance to chloride stress corrosion cracking, it is the preferred choice for structural and large volume storage applications.</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 h-fit overflow-hidden h-fit overflow-hidden">
                    {chemicalComposition.map((item, i) => (
                      <div key={i} className="p-5 bg-gray-50 dark:bg-gray-700/50 rounded-3xl border border-gray-100 dark:border-gray-600 group hover:border-gold-primary transition-all h-fit overflow-hidden h-fit overflow-hidden">
                        <p className="text-[10px] text-gray-500 uppercase font-black italic mb-1 tracking-widest h-fit overflow-hidden">{item.element}</p>
                        <p className="text-xl font-black text-navy-primary dark:text-gold-primary italic tracking-tighter uppercase h-fit overflow-hidden">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mechanical Properties Card */}
                <div className="bg-navy-primary text-white p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group h-fit overflow-hidden">
                   <div className="relative z-10 h-fit overflow-hidden">
                      <h2 className="text-3xl font-black mb-8 italic tracking-tighter uppercase flex items-center gap-4 h-fit">
                         <Shield className="w-8 h-8 text-gold-primary" />
                         Engineered Integrity (LDX 2101)
                      </h2>
                      <div className="grid md:grid-cols-2 gap-6 h-fit overflow-hidden h-fit overflow-hidden">
                         {mechanicalProperties.map((spec, i) => (
                            <div key={i} className="flex justify-between items-center p-6 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors h-fit text-white h-fit overflow-hidden">
                               <div className="w-full text-white h-fit overflow-hidden h-fit overflow-hidden">
                                  <p className="text-gold-primary font-black uppercase text-[10px] tracking-widest mb-1 italic tracking-tighter h-fit overflow-hidden">{spec.prop}</p>
                                  <p className="text-xl font-black italic tracking-tighter text-white h-fit overflow-hidden">{spec.value}</p>
                               </div>
                            </div>
                         ))}
                      </div>
                   </div>
                   <Microscope className="absolute right-[-5%] top-[-5%] w-64 h-64 text-white/5 pointer-events-none group-hover:scale-110 transition-transform h-fit overflow-hidden" />
                </div>
              </div>

              <div className="space-y-8 h-fit overflow-hidden text-black h-fit overflow-hidden">
                {/* Thermal Specs Sidebar */}
                <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-700 h-fit overflow-hidden">
                  <h3 className="text-xl font-black text-navy-primary dark:text-white mb-6 italic tracking-tighter uppercase border-b border-gold-primary pb-2 underline tracking-wider italic h-fit overflow-hidden">Processing Guide</h3>
                  <div className="space-y-6 h-fit">
                    {thermalSpecs.map((eq, i) => (
                      <div key={i} className="space-y-1 h-fit">
                        <div className="flex justify-between items-center h-fit">
                          <span className="text-xs text-gray-400 uppercase font-bold italic tracking-tighter italic h-fit">{eq.process}</span>
                          <span className="font-black text-navy-primary dark:text-gold-primary italic text-sm tracking-tighter italic h-fit">{eq.temp}</span>
                        </div>
                        <p className="text-[10px] text-gray-400 font-medium italic italic h-fit">{eq.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Applications Card */}
                <div className="bg-gradient-to-br from-gold-primary to-yellow-600 p-8 rounded-[2.5rem] shadow-2xl text-navy-primary h-fit group overflow-hidden">
                   <h3 className="text-2xl font-black mb-6 italic tracking-tighter uppercase italic tracking-tighter italic h-fit">Key Segments</h3>
                   <div className="space-y-4 h-fit">
                      {["Large Volume Water Storage", "Waste Water Treatment Plants", "Structural Bridge Beams", "Pulp and Paper Systems", "Food and Beverage Vats", "Palm Oil Multi-Phase Tanks"].map((use, i) => (
                         <div key={i} className="flex items-center gap-3 text-sm font-black italic uppercase tracking-tighter group/item transition-all h-fit h-fit overflow-hidden">
                            <Zap className="w-4 h-4 text-navy-primary/60 group-hover/item:text-navy-primary h-fit overflow-hidden" />
                            <span>{use}</span>
                         </div>
                      ))}
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Action Footer */}
        <section className="py-20 bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700 overflow-hidden relative h-fit overflow-hidden">
           <div className="container mx-auto px-4 text-center relative z-10 h-fit overflow-hidden">
              <h2 className="text-4xl font-black text-navy-primary dark:text-white mb-6 italic tracking-tighter uppercase italic tracking-tighter italic h-fit overflow-hidden">Optimize Your Project Costs with Lean Duplex</h2>
              <p className="text-lg text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto font-medium italic italic tracking-tighter italic h-fit overflow-hidden">Mamta Steel Traders is a premier stockist of LDX 2101 (UNS S32101) round bars, serving industrial infrastructure projects from Mumbai to global markets. Every batch is certified for structural integrity.</p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center h-fit overflow-hidden">
                 <Link href="/contact" className="bg-navy-primary text-white px-12 py-5 rounded-3xl font-black hover:bg-navy-secondary transition-all shadow-xl italic tracking-tighter uppercase italic tracking-tighter italic h-fit overflow-hidden">Get Material Estimate</Link>
                 <a href="mailto:naren@mamtasteel.com" className="border-4 border-navy-primary text-navy-primary px-12 py-5 rounded-3xl font-black hover:bg-gray-50 transition-all italic tracking-tighter uppercase italic tracking-tighter italic h-fit overflow-hidden">Download Catalog</a>
              </div>
           </div>
           <Settings className="absolute left-[-5%] bottom-[-5%] w-64 h-64 text-gray-100 dark:text-gray-700/50 rotate-45 pointer-events-none h-fit overflow-hidden" />
        </section>
      </div>
    </>
  );
}


