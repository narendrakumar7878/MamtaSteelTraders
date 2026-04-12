import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft as ArrowLeftIcon, ArrowRight as ArrowRightIcon, CheckCircle as CheckCircleIcon, Shield as ShieldIcon, Zap as ZapIcon, Info as InfoIcon, TrendingUp as TrendingUpIcon, Award as AwardIcon, Download as DownloadIcon, Box as BoxIcon, Key as KeyIcon, Settings as SettingsIcon, Target as TargetIcon, Anchor as AnchorIcon, Globe as GlobeIcon, Gauge as GaugeIcon } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function GeneralPurposeAluminumWireDetail() {
  const technicalSpecs = [
    { property: "Standards", value: "AWS A5.10 / ASME SFA 5.10" },
    { property: "Alloy Range", value: "1xxx, 4xxx, 5xxx series compatible" },
    { property: "Forms", value: "MIG Spools (0.5kg to 7kg), TIG Rods (1000mm)" },
    { property: "Diameter", value: "0.8mm to 4.0mm" },
    { property: "Finish", value: "Bright / Matte finish (Precision shaved)" },
    { property: "Packaging", value: "Moisture-proof plastic spools / fiber boxes" }
  ];

  const features = [
    { title: "Universal Utility", desc: "Designed for a broad spectrum of non-critical aluminum repair and fabrication tasks." },
    { title: "User Friendly", desc: "Excellent feeding characteristics and arc stability for beginners and trainees." },
    { title: "Cost Efficiency", desc: "Economical solution for maintenance shops and general architectural work." },
    { title: "Grade Versatility", desc: "Available in multiple alloy classifications to match common base metals." }
  ];

  return (
    <>
      <ProductSEO
        title="General Purpose Aluminum Welding Wire Manufacturer - Maintenance & Repair TIG/MIG Rods"
        description="Premium general-purpose aluminum welding wire manufacturer. Versatile AWS A5.10 compliant filler rods for general fabrication, repair work, and training. Best prices for multi-alloy aluminum filler in Mumbai."
        keywords="general purpose aluminum wire, aluminum repair welding wire, maintenance aluminum rods, training welding filler rods, versatile aluminum wire, AWS A5.10 aluminum, Mumbai aluminum wire exporter"
        category="Welding Electrodes"
        productName="General Purpose Aluminum Wire"
        specifications={[
          "Standards: AWS A5.10 Compliant",
          "Alloys: Multiple grades available",
          "Applications: Maintenance, Repair, Training",
          "Process: TIG & MIG welding"
        ]}
        canonicalUrl="/product/welding-electrodes/aluminium-wire/general-purpose-aluminum-wire"
      />

      <div className="min-h-screen bg-white font-sans text-navy-primary">
        {/* Detail Hero Section */}
        <section className="relative pt-24 pb-20 bg-navy-primary text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
             <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold-primary filter blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl text-center mx-auto">
              <nav className="flex justify-center items-center space-x-2 text-sm text-blue-100/40 mb-10 font-bold uppercase tracking-[0.2em]">
                <Link href="/" className="hover:text-gold-primary transition-colors">Home</Link>
                <ArrowRightIcon className="w-3 h-3" />
                <Link href="/product/welding-electrodes/aluminiumwire" className="hover:text-gold-primary transition-colors">Aluminium Wire</Link>
              </nav>

              <motion.h1 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-4xl md:text-5xl font-black mb-8 leading-none tracking-tighter uppercase italic"
              >
                Multi-Alloy <br />
                <span className="text-gold-primary text-2xl md:text-3xl font-serif italic lowercase font-light tracking-widest uppercase">General Purpose aluminum welding solution</span>
              </motion.h1>

              <p className="text-xl text-blue-100/70 mb-10 leading-relaxed max-w-3xl mx-auto font-light italic">
                A versatile, cost-effective industrial filler metal engineered for non-critical repairs, training, and maintenance. 
                Our general-purpose range offers the flexibility required for rapid workshop tasks and diverse aluminum fabrication needs.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
                <button className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-10 py-5 rounded-full font-black uppercase text-[11px] tracking-[0.25em] transition-all flex items-center shadow-xl shadow-gold-primary/30">
                  Workshop catalog <DownloadIcon className="ml-3 w-4 h-4" />
                </button>
                <Link href="/contact" className="border-2 border-white/20 hover:border-white/50 text-white px-10 py-5 rounded-full font-bold transition-all backdrop-blur-md uppercase text-[11px] tracking-[0.25em]">
                  Bulk Order Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Data Section */}
        <section className="py-24 bg-gray-50 border-b border-gray-200">
          <div className="container mx-auto px-4">
             <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
                <div className="bg-white p-12 rounded-3xl shadow-xl border-t-[10px] border-gold-primary">
                   <h2 className="text-2xl font-black text-navy-primary mb-12 flex items-center uppercase tracking-tighter">
                      <SettingsIcon className="mr-5 text-gold-primary w-8 h-8" /> WORKSHOP SPECIFICATIONS
                   </h2>
                   <div className="space-y-6">
                      {technicalSpecs.map((spec, i) => (
                        <div key={i} className="flex flex-col border-b border-gray-50 pb-4 last:border-0">
                           <span className="text-gray-400 font-bold uppercase text-[9px] tracking-[0.25em] block mb-1">{spec.property}</span>
                           <span className="text-navy-primary font-black text-sm tracking-tight">{spec.value}</span>
                        </div>
                      ))}
                   </div>
                </div>

                <div className="bg-white p-12 rounded-3xl shadow-xl border-t-[10px] border-navy-primary">
                    <h2 className="text-2xl font-black text-navy-primary mb-12 flex items-center uppercase tracking-tighter">
                       <ZapIcon className="mr-5 text-gold-primary w-8 h-8" /> Key utility benefits
                    </h2>
                    <div className="grid grid-cols-1 gap-8">
                       {features.map((feature, i) => (
                         <div key={i} className="flex items-start space-x-6">
                            <CheckCircleIcon className="w-8 h-8 text-gold-primary flex-shrink-0" />
                            <div>
                               <h3 className="text-lg font-black text-navy-primary uppercase leading-tight tracking-tight mb-2">{feature.title}</h3>
                               <p className="text-gray-500 text-sm leading-relaxed font-medium">{feature.desc}</p>
                            </div>
                         </div>
                       ))}
                    </div>
                </div>
             </div>
          </div>
        </section>

        {/* Global Hub Section */}
        <section className="py-24 bg-white overflow-hidden text-center">
           <div className="container mx-auto px-4 max-w-6xl">
              <h2 className="text-[3rem] font-black text-navy-primary tracking-tighter mb-12 uppercase leading-none italic">Reliable. <span className="text-gold-primary">Accessible.</span> Industrial Supply.</h2>
              
              <div className="grid lg:grid-cols-2 gap-16 text-left mb-20 bg-gray-50 p-12 rounded-[3.5rem] border-b-[10px] border-navy-primary">
                 <div className="space-y-8">
                    <h3 className="text-2xl font-black text-navy-primary tracking-tight uppercase">Technical Utility Matrix</h3>
                    <p className="text-gray-600 text-lg font-light leading-relaxed italic border-l-4 border-gold-primary pl-8">
                       "Designed for the diverse needs of general fabrication, Mamta Steel Traders' general-purpose range provides the critical link between cost-efficiency and technical reliability. This multi-alloy compatible filler rod is the workshop standard for rapid repairs and complex non-critical infrastructure."
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       {[
                         { title: "Versatile Grade", desc: "Compatible with 1xxx, 4xxx, and 5xxx series aluminum alloys." },
                         { title: "MIG/TIG Sync", desc: "Optimised for both manual TIG rods and automated MIG spools." },
                         { title: "Training Grade", desc: "High arc stability makes it ideal for educational and training centers." },
                         { title: "Repair Expert", desc: "Preferred choice for rapid shop repairs and maintenance tasks." }
                       ].map((item, i) => (
                         <div key={i} className="flex flex-col border-b border-gray-200 pb-2">
                            <span className="text-navy-primary font-black text-[10px] uppercase tracking-widest leading-none mb-1">{item.title}</span>
                            <span className="text-gray-400 font-bold text-[10px] uppercase leading-tight">{item.desc}</span>
                         </div>
                       ))}
                    </div>
                 </div>
                 <div className="space-y-8">
                    <h3 className="text-2xl font-black text-navy-primary tracking-tight uppercase">Supply Chain Analytics</h3>
                    <p className="text-gray-500 text-[13px] font-bold uppercase leading-relaxed">
                       Operating from the Mumbai industrial corridor, we supply consistent high-yield aluminum filler metals to maintenance hubs across Asia and the GCC. Our precision-shaved wire ensures zero-jamming performance in industrial feeding systems, while moisture-proof packaging guarantees 100% arc stability upon arrival.
                    </p>
                    <div className="p-8 bg-white rounded-3xl border-l-[12px] border-gold-primary shadow-sm space-y-4">
                       <h4 className="text-navy-primary font-black text-xs uppercase tracking-widest">Compliance & Quality Control</h4>
                       <ul className="space-y-2 text-[10px] font-black text-gray-400 uppercase tracking-wider">
                          <li className="flex items-center space-x-2"><CheckCircleIcon className="w-3 h-3 text-gold-primary" /> <span>AWS A5.10 Precision Compliant</span></li>
                          <li className="flex items-center space-x-2"><CheckCircleIcon className="w-3 h-3 text-gold-primary" /> <span>Surface Finish: Shaved & Bright</span></li>
                          <li className="flex items-center space-x-2"><CheckCircleIcon className="w-3 h-3 text-gold-primary" /> <span>Traceability: Full Heat Tracking</span></li>
                       </ul>
                    </div>
                 </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-16 mt-20 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-1000">
                 <div className="flex flex-col items-center"><AwardIcon className="w-14 h-14 mb-4 text-gold-primary" /><span className="text-xs font-black uppercase tracking-widest">AWS A5.10 READY</span></div>
                 <div className="flex flex-col items-center"><GlobeIcon className="w-14 h-14 mb-4 text-gold-primary" /><span className="text-xs font-black uppercase tracking-widest">B2B GLOBAL SHIP</span></div>
                 <div className="flex flex-col items-center"><ShieldIcon className="w-14 h-14 mb-4 text-gold-primary" /><span className="text-xs font-black uppercase tracking-widest">WORKSHOP GRADE</span></div>
              </div>
           </div>
        </section>
      </div>
    </>
  );
}
