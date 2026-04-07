import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft, ArrowRight, Phone, Mail, CheckCircle, Shield, Award, Activity, Microscope, Zap, Thermometer, Settings } from "lucide-react";
import { Link } from "wouter";

export default function CuNi9010Industrial() {
  const chemicalComposition = [
    { element: "Copper (Cu)", value: "86.50% min" },
    { element: "Nickel (Ni)", value: "9.00 – 11.00%" },
    { element: "Iron (Fe)", value: "1.00 – 1.80%" },
    { element: "Manganese (Mn)", value: "1.00% max" },
    { element: "Zinc (Zn)", value: "0.50% max" },
    { element: "Lead (Pb)", value: "0.05% max" }
  ];

  const mechanicalProperties = [
    { prop: "Tensile Strength", value: "275 – 415 MPa" },
    { prop: "Yield Strength (0.5%)", value: "105 – 300 MPa" },
    { prop: "Elongation (in 2\")", value: "30 – 40%" },
    { prop: "Hardness (Rockwell B)", value: "35 – 75 HRB" },
    { prop: "Density", value: "8.94 g/cm³" },
    { prop: "Thermal Conductivity", value: "45 W/m·K" }
  ];

  const thermalSpecs = [
    { process: "Hot Working", temp: "815 – 955°C", desc: "Optimized for large-scale industrial tube sheet forging." },
    { process: "Annealing", temp: "590 – 815°C", desc: "Achieves maximum ductility for heat exchanger plate bending." },
    { process: "Stress Relieving", temp: "260 – 370°C", desc: "Reduces susceptibility to ammonia stress-corrosion cracking." },
    { process: "Machinability", temp: "20%", desc: "Standard for copper-nickel alloys in CNC drilling." }
  ];

  return (
    <>
      <ProductSEO
        title="Cu-Ni 90/10 Copper Nickel Round Bars | Industrial Grade | Heat Exchanger Alloy | Mumbai"
        description="Premium Cu-Ni 90/10 Copper Nickel supplier in Mumbai India. High-thermal conductivity alloy for industrial condensers and desalination plants. ISO 9001:2015 certified."
        keywords="90/10 cu-ni round bars, industrial copper nickel, heat exchanger copper alloy, desalination plant materials Mumbai, Cu-Ni 90/10 ASTM B151, copper alloy supplier India"
        canonicalUrl="/product/round-bars/copper-nickel/cu-ni-90-10"
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
                 <span className="text-navy-primary dark:text-gold-primary font-bold italic tracking-wider">Cu-Ni 90/10 Industrial Grade</span>
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
              <span className="bg-gold-primary text-navy-primary px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-6 inline-block shadow-lg">High-Thermal Efficiency</span>
              <h1 className="text-5xl md:text-7xl font-black mb-6 italic tracking-tighter uppercase leading-none">Cu-Ni 90/10 Industrial</h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl opacity-90 italic font-medium uppercase tracking-tight italic tracking-tighter italic">Optimized 90/10 Copper Nickel engineered for high-performance condensers and global desalination infrastructure.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="bg-gold-primary hover:bg-white text-navy-primary px-10 py-4 rounded-2xl font-black transition-all shadow-xl italic tracking-tighter uppercase">Get Technical Quote</Link>
                <a href="tel:+919819322576" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-10 py-4 rounded-2xl font-bold transition-all backdrop-blur-sm italic tracking-tighter">Talk to Expert</a>
              </div>
            </div>
          </div>
          <Zap className="absolute right-[-10%] bottom-[-10%] w-[500px] h-[500px] text-white/5 pointer-events-none rotate-12" />
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12 text-black">
              <div className="lg:col-span-2 space-y-12">
                {/* Tech Profile Card */}
                <div className="bg-white dark:bg-gray-800 p-10 rounded-[2.5rem] shadow-2xl border border-gray-100 dark:border-gray-700 h-fit overflow-hidden">
                  <h2 className="text-3xl font-black text-navy-primary dark:text-white mb-8 italic tracking-tighter uppercase border-l-8 border-gold-primary pl-6">Industrial Metallurgy</h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed italic font-medium italic mb-8 italic italic tracking-tighter shadow-sm p-4 bg-gray-50 dark:bg-gray-700 rounded-2xl italic tracking-tighter underline underline-offset-8 decoration-gold-primary decoration-4">The Industrial grade 90/10 Copper Nickel (C70600) is the cornerstone of modern desalination and power generation technology. Its precise stoichiometry ensures maximum thermal transfer efficiency while maintaining a robust protective film that resists bio-fouling and chemical erosion even in stagnant seawater conditions.</p>
                  
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
                   <div className="relative z-10 h-fit">
                      <h2 className="text-3xl font-black mb-8 italic tracking-tighter uppercase flex items-center gap-4 h-fit">
                         <Activity className="w-8 h-8 text-gold-primary" />
                         Engineered Specs (90/10)
                      </h2>
                      <div className="grid md:grid-cols-2 gap-6 h-fit">
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
                   <Shield className="absolute right-[-5%] top-[-5%] w-64 h-64 text-white/5 pointer-events-none group-hover:scale-110 transition-transform h-fit" />
                </div>
              </div>

              <div className="space-y-8 h-fit overflow-hidden">
                {/* Thermal Specs Sidebar */}
                <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-700 h-fit overflow-hidden">
                  <h3 className="text-xl font-black text-navy-primary dark:text-white mb-6 italic tracking-tighter uppercase border-b border-gold-primary pb-2 underline tracking-wider italic">Thermal Cycle Guide</h3>
                  <div className="space-y-6 h-fit">
                    {thermalSpecs.map((eq, i) => (
                      <div key={i} className="space-y-1">
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
                <div className="bg-gradient-to-br from-gold-primary to-yellow-600 p-8 rounded-[2.5rem] shadow-2xl text-navy-primary h-fit group overflow-hidden">
                   <h3 className="text-2xl font-black mb-6 italic tracking-tighter uppercase italic tracking-tighter italic h-fit">Critical Segments</h3>
                   <div className="space-y-4 h-fit">
                      {["Desalination Plant Boilers", "Industrial Heat Exchangers", "Steam Condenser Tubes", "Offshore Oil & Gas Rigs", "Cryogenic Components", "Marine Cooling Manifolds"].map((use, i) => (
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

        {/* Global Action Footer */}
        <section className="py-20 bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700 overflow-hidden relative h-fit">
           <div className="container mx-auto px-4 text-center relative z-10 h-fit">
              <h2 className="text-4xl font-black text-navy-primary dark:text-white mb-6 italic tracking-tighter uppercase italic tracking-tighter italic h-fit">Deploy Certified 90/10 Alloys Globally</h2>
              <p className="text-lg text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto font-medium italic italic tracking-tighter italic h-fit">Mamta Steel Traders delivers ISO-certified Cu-Ni 90/10 (C70600) with unmatched chemical precision and thermal testing. Supply chain reliability from Mumbai to global energy hubs.</p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center h-fit">
                 <Link href="/contact" className="bg-navy-primary text-white px-12 py-5 rounded-3xl font-black hover:bg-navy-secondary transition-all shadow-xl italic tracking-tighter uppercase italic tracking-tighter italic">Request Batch Estimate</Link>
                 <a href="mailto:naren@mamtasteel.com" className="border-4 border-navy-primary text-navy-primary px-12 py-5 rounded-3xl font-black hover:bg-gray-50 transition-all italic tracking-tighter uppercase italic tracking-tighter italic">Download Technical Sheet</a>
              </div>
           </div>
           <Settings className="absolute left-[-5%] bottom-[-5%] w-64 h-64 text-gray-100 dark:text-gray-700/50 rotate-45 pointer-events-none h-fit" />
        </section>
      </div>
    </>
  );
}


