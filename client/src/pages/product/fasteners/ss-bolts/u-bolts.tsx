import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft, ArrowRight, CheckCircle, Shield, Zap, Info, TrendingUp, Award, Download, Box, Key, Settings, Target, MapPin } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function UBoltDetail() {
  const technicalData = [
    { property: "Standards", value: "DIN 3570, ASME B18.31, Custom Drawings" },
    { property: "Material Grades", value: "SS 304, 316L, 317L, Duplex 2205, Super Duplex" },
    { property: "Size Range", value: "M6 to M64 | 1/4\" to 12\" Pipe Size" },
    { property: "Thread Length", value: "Standard Type A/B or Full Thread" }
  ];

  const materialFeatures = [
    { grade: "Marine Grade 316L", details: "Extra low carbon for maximum integrity in saltwater and coastal environments." },
    { grade: "Structural Duplex", details: "Double the strength of standard SS, perfect for high-load pipeline support." },
    { grade: "Acid Resistant 904L", details: "Designed for severe chemical processing and sulfuric acid handling systems." }
  ];

  return (
    <>
      <ProductSEO
        title="Stainless Steel U-Bolts - SS 316L, 304 Pipe Clamping Bolts | Global Supplier"
        description="Premium Stainless Steel U-Bolts Manufacturer. Grades SS 304, 316L, Duplex 2205, 2507. DIN 3570 standards. High-performance pipe supports for UAE, Saudi, Europe, and Global Industry."
        keywords="SS U-bolts, stainless steel pipe bolts, SS 316 u-bolt manufacturer, 316L marine U-bolts, duplex steel u-bolts, Mumbai U-bolt supplier, UAE pipeline fasteners, Saudi oil gas clamping, industrial pipe support bolts"
        category="Stainless Steel Bolts"
        productName="Stainless Steel U-Bolts"
        specifications={["SS 304/316L/Duplex", "DIN 3570", "M6 to M64", "Pipe Support System"]}
        canonicalUrl="/product/fasteners/ss-bolts/u-bolts"
      />

      <div className="min-h-screen bg-[#F8FAFC]">
        {/* Hero Section */}
        <section className="relative bg-[#0F172A] py-24 overflow-hidden font-sans">
          <div className="absolute inset-0 opacity-10">
             <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-gold-primary/20 to-transparent"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <Link href="/product/fasteners/ss-bolts">
              <button className="flex items-center text-blue-100 hover:text-gold-primary transition-colors mb-10 group bg-white/5 py-2 px-6 rounded-full border border-white/10 backdrop-blur-sm">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to SS Bolt Index
              </button>
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tighter leading-tight font-sans uppercase italic">
                Precision <span className="text-gold-primary">U-Bolt</span> <br/>
                Support Systems
              </h1>
              <p className="text-xl text-blue-100/70 mb-12 max-w-3xl font-light leading-relaxed">
                Global distribution of high-performance clamping solutions for mission-critical pipelines and structural rigging. Engineered in Mumbai, distributed to the world's leading energy and marine hubs.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Specifications Grid */}
        <section className="py-24 bg-white font-sans">
          <div className="container mx-auto px-4">
             <div className="grid lg:grid-cols-4 gap-6 mb-24">
                {technicalData.map((spec, i) => (
                  <div key={i} className="p-10 bg-slate-50 border border-slate-100 rounded-[2.5rem] hover:shadow-xl transition-all">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1 font-sans font-sans">Property</span>
                    <h4 className="text-navy-primary font-bold tracking-tight font-sans font-sans">{spec.property}</h4>
                    <p className="mt-4 text-slate-600 text-sm font-semibold font-sans font-sans">{spec.value}</p>
                  </div>
                ))}
             </div>

             <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div className="space-y-12">
                   <h2 className="text-4xl font-bold text-navy-primary tracking-tighter flex items-center font-sans tracking-tight">
                     <Shield className="w-10 h-10 mr-4 text-gold-primary font-sans" /> Material Integrity
                   </h2>
                   <div className="space-y-8 font-sans">
                      {materialFeatures.map((row, i) => (
                        <div key={i} className="flex space-x-6 group">
                           <div className="w-12 h-12 bg-white border border-slate-200 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-gold-primary/10 transition-colors">
                              <Star className="w-6 h-6 text-gold-primary font-sans" />
                           </div>
                           <div>
                              <h5 className="text-xl font-bold text-navy-primary font-sans">{row.grade}</h5>
                              <p className="text-slate-500 text-sm leading-relaxed font-sans">{row.details}</p>
                           </div>
                        </div>
                      ))}
                   </div>
                </div>

                <div className="p-12 bg-navy-primary rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
                   <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:scale-125 transition-transform duration-700 font-sans">
                      <Target className="w-64 h-64 font-sans font-sans" />
                   </div>
                   <h3 className="text-2xl font-bold mb-10 font-sans tracking-tight font-sans font-sans">Pipeline Clamping Applications</h3>
                   <div className="grid grid-cols-2 gap-4 relative z-10 font-sans font-sans">
                      {[
                        "Marine Exhaust Supports",
                        "Subsea Pipeline Rigging",
                        "Chemical Reactor Piping",
                        "Offshore Platform Handrails",
                        "Water Treatment Infrastructure",
                        "Desalination Plant Systems",
                        "Bridge Cable Management",
                        "Structural Roof Bracing"
                      ].map((app, i) => (
                        <div key={i} className="flex items-center space-x-3 bg-white/5 p-4 rounded-2xl border border-white/5 backdrop-blur-sm font-sans font-sans">
                           <CheckCircle className="w-4 h-4 text-gold-primary font-sans font-sans" />
                           <span className="text-[11px] font-black uppercase tracking-tight font-sans font-sans font-sans">{app}</span>
                        </div>
                      ))}
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* Market Intelligence */}
        <section className="py-24 bg-slate-50 font-sans">
           <div className="container mx-auto px-4 font-sans">
              <h2 className="text-4xl font-black text-navy-primary mb-16 text-center tracking-tighter font-sans uppercase">Global Pipeline Supply Chain</h2>
              <div className="grid md:grid-cols-4 gap-8 font-sans">
                 <div className="p-8 bg-white border border-slate-200 rounded-3xl font-sans" data-testid="market-gcc">
                    <MapPin className="w-6 h-6 text-gold-primary mb-4 font-sans" />
                    <h5 className="font-bold text-navy-primary text-xs tracking-widest uppercase mb-2 font-sans font-sans font-sans">GCC OIL & GAS</h5>
                    <p className="text-xs text-slate-500 font-sans font-sans">Supplying heavy-duty U-bolts for massive refinery projects in UAE and Saudi Arabia.</p>
                 </div>
                 <div className="p-8 bg-white border border-slate-200 rounded-3xl font-sans" data-testid="market-europe">
                    <MapPin className="w-6 h-6 text-gold-primary mb-4 font-sans" />
                    <h5 className="font-bold text-navy-primary text-xs tracking-widest uppercase mb-2 font-sans font-sans font-sans">EUROPEAN MARINE</h5>
                    <p className="text-xs text-slate-500 font-sans font-sans font-sans">Providing 316L polished U-bolts for Norway and UK cruise vessel and vessel deck rigging.</p>
                 </div>
                 <div className="p-8 bg-white border border-slate-200 rounded-3xl font-sans" data-testid="market-india">
                    <MapPin className="w-6 h-6 text-gold-primary mb-4 font-sans" />
                    <h5 className="font-bold text-navy-primary text-xs tracking-widest uppercase mb-2 font-sans font-sans font-sans">PAN-INDIA PROJECTS</h5>
                    <p className="text-xs text-slate-500 font-sans font-sans font-sans">Leading manufacturer for urban infrastructure and smart city water management projects in India.</p>
                 </div>
                 <div className="p-8 bg-white border border-slate-200 rounded-3xl font-sans" data-testid="market-usa">
                    <MapPin className="w-6 h-6 text-gold-primary mb-4 font-sans" />
                    <h5 className="font-bold text-navy-primary text-xs tracking-widest uppercase mb-2 font-sans font-sans font-sans">NORTH AMERICA</h5>
                    <p className="text-xs text-slate-500 font-sans font-sans font-sans">Supplying ASME certified SS fasteners for coastal energy and chemical cluster projects in the USA.</p>
                 </div>
              </div>
           </div>
        </section>

        {/* Global CTA */}
        <section className="py-24 bg-navy-primary relative overflow-hidden font-sans">
          <div className="container mx-auto px-4 text-center relative z-10 font-sans">
            <h2 className="text-5xl font-black text-white mb-8 tracking-tighter italic uppercase font-sans">Secure Your Supply Chain</h2>
            <p className="text-xl text-blue-100/60 mb-14 max-w-2xl mx-auto font-sans font-sans">Global standard technical support and immediate price distribution available now.</p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-10 font-sans">
               <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary font-black py-6 px-16 rounded-3xl text-xl shadow-2xl transition-all flex items-center group font-sans font-sans font-sans">
                  Get Technical Quote <ArrowRight className="ml-4 w-7 h-7 transform group-hover:translate-x-2 transition-transform" />
               </Link>
               <div className="text-left font-sans font-sans font-sans whitespace-nowrap">
                 <p className="text-[10px] font-black text-gold-primary uppercase tracking-[0.4em] mb-1 font-sans">Expert Engineering Line</p>
                 <a href="tel:+919819322576" className="text-3xl font-bold text-white font-sans font-sans">+91 9819322576</a>
               </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

const Star = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);
