import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft, ArrowRight, CheckCircle, Shield, Zap, Info, TrendingUp, Award, Download, Box, Key, Settings, Target, MapPin } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function JBoltDetail() {
  const anchorageSpecs = [
    { property: "Standards", value: "DIN 3570 (Hook Type), Custom Bends" },
    { property: "Material Grades", value: "SS 304, 316L, 321, Duplex 2205" },
    { property: "Size Range", value: "M8 to M64 | 5/16\" to 2.5\"" },
    { property: "Bend Radius", value: "Customizable per engineering prints" }
  ];

  const structuralFeatures = [
    { feature: "Hook Stability", details: "Precision-bent hook design for maximum pull-out resistance in reinforced concrete." },
    { feature: "Stabilized Integrity", details: "Available in SS 321 for high-temperature foundation environments (ovens, furnaces)." },
    { feature: "Thread Precision", details: "Roll-threaded for enhanced fatigue resistance and superior clamping load." }
  ];

  return (
    <>
      <ProductSEO
        title="Stainless Steel J-Bolts - SS 304, 316L, 321 Hook Bolts | Global Supplier"
        description="Premium Stainless Steel J-Bolts Manufacturer. Grades SS 304, 316L, 321, Duplex. Hook-style structural anchoring for industrial equipment and concrete securing globally."
        keywords="SS J-bolts, stainless steel hook bolts, SS 316L J-bolts, SS 321 bolts manufacturers, Mumbai J-bolt supplier, UAE structural hooks, Saudi anchor J-bolts, custom SS hook bolts"
        category="Stainless Steel Bolts"
        productName="Stainless Steel J-Bolts"
        specifications={["SS 304/316L/321", "Hook-Drive Design", "M8 to M64", "Precision Bending"]}
        canonicalUrl="/product/fasteners/ss-bolts/j-bolts"
      />

      <div className="min-h-screen bg-[#FDFDFD]">
        {/* Navigation & Hero Section */}
        <section className="relative bg-[#0F172A] py-24 overflow-hidden font-sans border-b-2 border-gold-primary/20">
          <div className="absolute inset-0 opacity-10">
             <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,_#fde047_0%,_transparent_60%)]"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <Link href="/product/fasteners/ss-bolts">
              <button className="flex items-center text-blue-100/60 hover:text-gold-primary transition-colors mb-12 group italic text-sm tracking-widest font-bold">
                <ArrowLeft className="w-5 h-5 mr-3 transform group-hover:-translate-x-2 transition-transform" />
                RETURN TO SS BOLT CATALOG
              </button>
            </Link>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-tighter leading-tight font-sans uppercase">
                Hook-Style <br/>
                <span className="text-gold-primary italic font-serif">J-Bolt</span> <br/>
                Engineering
              </h1>
              <p className="text-xl text-slate-400 mb-14 max-w-3xl font-light leading-relaxed font-sans font-sans">
                Precision-bent stainless steel hook bolts for structural securing and component anchoring. Optimized for concrete embedment and equipment mounting in corrosive industrial environments.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Technical Data Section */}
        <section className="py-24 bg-white font-sans font-sans">
          <div className="container mx-auto px-4 font-sans font-sans font-sans">
             <div className="grid lg:grid-cols-4 gap-8 mb-24 font-sans font-sans font-sans font-sans">
                {anchorageSpecs.map((spec, i) => (
                  <div key={i} className="p-10 bg-slate-50 border border-slate-100 rounded-[2.5rem] hover:bg-white hover:shadow-2xl transition-all font-sans font-sans font-sans font-sans">
                     <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 font-sans font-sans font-sans font-sans">{spec.property}</div>
                     <h4 className="text-lg font-bold font-sans font-sans font-sans font-sans">{spec.value}</h4>
                  </div>
                ))}
             </div>

             <div className="grid lg:grid-cols-2 gap-20 font-sans font-sans font-sans font-sans">
                <div className="space-y-12 font-sans font-sans font-sans font-sans">
                   <h2 className="text-4xl font-black tracking-tight flex items-center font-sans font-sans font-sans font-sans">
                     <Shield className="w-12 h-12 mr-5 text-gold-primary font-sans font-sans font-sans font-sans" /> Structural Integrity Metrics
                   </h2>
                   <div className="space-y-10 font-sans font-sans font-sans font-sans">
                      {structuralFeatures.map((row, i) => (
                        <div key={i} className="group font-sans font-sans font-sans font-sans">
                           <h5 className="text-2xl font-bold mb-3 font-sans font-sans font-sans font-sans group-hover:text-gold-primary transition-colors">{row.feature}</h5>
                           <p className="text-slate-500 text-sm leading-relaxed font-sans font-sans font-sans">{row.details}</p>
                        </div>
                      ))}
                   </div>
                </div>

                <div className="p-12 bg-navy-primary rounded-[4rem] text-white shadow-3xl relative overflow-hidden group font-sans font-sans font-sans font-sans font-sans">
                   <div className="absolute bottom-0 right-0 p-12 opacity-5 font-sans font-sans font-sans font-sans">
                      <Settings className="w-96 h-96 font-sans font-sans font-sans font-sans font-sans" />
                   </div>
                   <h3 className="text-2xl font-bold mb-10 relative z-10 font-sans font-sans font-sans font-sans">Industrial Mounting Use-Cases</h3>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-5 relative z-10 font-sans font-sans font-sans font-sans">
                      {[
                        "Heater Component Hanging",
                        "Equipment Anchoring",
                        "Structural Support Ties",
                        "Concrete Deck Rigging",
                        "HVAC Support Systems",
                        "Industrial Oven Bracing",
                        "Piping Hanger Systems",
                        "Masonry Anchoring"
                      ].map((app, i) => (
                        <div key={i} className="flex items-center space-x-4 bg-white/5 p-5 rounded-3xl border border-white/5 backdrop-blur-sm hover:bg-white/10 transition-all font-sans font-sans font-sans font-sans">
                           <CheckCircle className="w-5 h-5 text-gold-primary font-sans font-sans font-sans font-sans font-sans" />
                           <span className="text-xs font-bold leading-tight font-sans font-sans font-sans font-sans font-sans">{app}</span>
                        </div>
                      ))}
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* Global Distribution Map Section */}
        <section className="py-24 bg-slate-50 font-sans font-sans font-sans font-sans font-sans font-sans">
           <div className="container mx-auto px-4 font-sans font-sans font-sans font-sans font-sans">
              <div className="text-center mb-20 font-sans font-sans font-sans font-sans">
                <h2 className="text-4xl font-black text-navy-primary mb-5 uppercase tracking-tighter font-sans font-sans font-sans font-sans">Precision Hub Logistics</h2>
                <p className="text-slate-500 text-lg max-w-2xl mx-auto font-sans font-sans font-sans font-sans font-sans">Efficient distribution of stabilized and high-load J-bolts to the world's most aggressive industrial sectors.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-12 font-sans font-sans font-sans font-sans font-sans">
                 <div className="p-10 bg-white border border-slate-100 rounded-3xl font-sans font-sans font-sans font-sans">
                    <MapPin className="w-8 h-8 text-gold-primary mb-6 font-sans font-sans font-sans font-sans" />
                    <h5 className="font-bold text-navy-primary uppercase text-xs tracking-widest mb-4 font-sans font-sans font-sans font-sans">GCC OIL & POWER</h5>
                    <p className="text-sm text-slate-500 leading-relaxed font-sans font-sans font-sans font-sans font-sans">Direct supply to UAE seawater cooling systems and Saudi power generation stations.</p>
                 </div>
                 <div className="p-10 bg-white border border-slate-100 rounded-3xl font-sans font-sans font-sans font-sans font-sans">
                    <MapPin className="w-8 h-8 text-gold-primary mb-6 font-sans font-sans font-sans font-sans font-sans font-sans" />
                    <h5 className="font-bold text-navy-primary uppercase text-xs tracking-widest mb-4 font-sans font-sans font-sans font-sans font-sans font-sans">EUROPEAN MFG SECTOR</h5>
                    <p className="text-sm text-slate-500 leading-relaxed font-sans font-sans font-sans font-sans font-sans font-sans font-sans">Supplying custom-bent stabilizes SS 321 J-bolts for high-temp industrial ovens in Germany and Italy.</p>
                 </div>
                 <div className="p-10 bg-white border border-slate-100 rounded-3xl font-sans font-sans font-sans font-sans font-sans font-sans">
                    <MapPin className="w-8 h-8 text-gold-primary mb-6 font-sans font-sans font-sans font-sans font-sans font-sans">
                    </MapPin>
                    <h5 className="font-bold text-navy-primary uppercase text-xs tracking-widest mb-4 font-sans font-sans font-sans font-sans font-sans font-sans font-sans">ASIA-PACIFIC INFRA</h5>
                    <p className="text-sm text-slate-500 leading-relaxed font-sans font-sans font-sans font-sans font-sans font-sans font-sans">Leading J-bolt supplier for massive Smart City development and Metro foundation projects across India and SE Asia.</p>
                 </div>
              </div>
           </div>
        </section>

        {/* Global CTA */}
        <section className="py-24 bg-[#0F172A] relative overflow-hidden font-sans font-sans font-sans font-sans">
          <div className="container mx-auto px-4 text-center relative z-10 font-sans font-sans font-sans font-sans font-sans">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-10 tracking-tighter uppercase font-sans font-sans font-sans font-sans">Secure Your <span className="text-gold-primary">Equipment</span></h2>
            <p className="text-slate-400 mb-16 text-xl max-w-2xl mx-auto font-sans font-sans font-sans font-sans font-sans">Get technical data and pricing for mass-volume Hook-style anchor bolts. Global logistics supported.</p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-10 font-sans font-sans font-sans font-sans font-sans">
               <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary font-black py-7 px-20 rounded-[2rem] text-xl shadow-3xl transition-all flex items-center group font-sans font-sans font-sans font-sans font-sans font-sans">
                  REQUEST TECH QUOTE <ArrowRight className="ml-4 w-8 h-8 transform group-hover:translate-x-3 transition-transform font-sans font-sans font-sans font-sans font-sans font-sans" />
               </Link>
               <div className="text-left font-sans font-sans font-sans font-sans font-sans">
                 <p className="text-[10px] font-black text-gold-primary uppercase tracking-[0.4em] mb-2 font-sans font-sans font-sans font-sans font-sans">Global Engineering Line</p>
                 <a href="tel:+919819322576" className="text-4xl font-bold text-white font-sans font-sans font-sans font-sans tracking-tight font-sans font-sans font-sans">+91 9819322576</a>
               </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
