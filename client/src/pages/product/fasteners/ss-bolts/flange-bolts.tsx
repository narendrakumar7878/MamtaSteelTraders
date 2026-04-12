import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft, ArrowRight, CheckCircle, Shield, Zap, Info, TrendingUp, Award, Download, Box, Key, Settings, Target } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function FlangeBoltsDetail() {
  const mechanicalData = [
    { spec: "Standards", value: "DIN 6921, ISO 4162, EN 1665, IFI 111" },
    { spec: "Prop. Class", value: "A2-70, A2-80, A4-70, A4-80" },
    { spec: "Size Range", value: "M5 to M20 | 3/16\" to 3/4\"" },
    { spec: "Thread Type", value: "Metric, BSW, UNC, UNF" }
  ];

  const gradeProfiles = [
    { grade: "SS 304", features: "Standard rust resistance, easy maintenance." },
    { grade: "SS 316", features: "Chloride resistance, industrial chemical service." },
    { grade: "SS 321", features: "Stabilized against intergranular corrosion." },
    { grade: "Duplex", features: "High mechanical load & extreme corrosion resistance." }
  ];

  return (
    <>
      <ProductSEO
        title="Stainless Steel Flange Bolts - SS 316, 304, Duplex DIN 6921 Bolts | Global Supplier"
        description="Premium Stainless Steel Flange Bolts Manufacturer. Grades SS 304, 316, 321, Duplex. DIN 6921 standards. Integrated washer design for UAE, Saudi, Europe, and Global Industry."
        keywords="SS flange bolts, stainless steel DIN 6921 bolts, SS 316 flange bolts, SS 304 fasteners, serrated flange bolts stainless, Mumbai flange bolt manufacturer, UAE automotive bolts, Saudi industrial fasteners, duplex flange bolts"
        category="Stainless Steel Bolts"
        productName="Stainless Steel Flange Bolts"
        specifications={["SS 304/316/321", "DIN 6921 / ISO 4162", "A2-70 / A4-80", "Integrated Washer Design"]}
        canonicalUrl="/product/fasteners/ss-bolts/flange-bolts"
      />

      <div className="min-h-screen bg-[#F9FAFB]">
        {/* Hero Section */}
        <section className="relative bg-[#0F172A] py-24 overflow-hidden font-sans border-b border-gold-primary/10">
          <div className="absolute inset-0 opacity-10">
             <div className="absolute top-0 right-0 w-full h-full bg-[conic-gradient(from_0deg_at_50%_50%,_#3b82f6_0%,_transparent_50%)]"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <Link href="/product/fasteners/ss-bolts">
              <button className="inline-flex items-center text-gold-primary hover:text-white transition-colors mb-10 group bg-gold-primary/5 px-6 py-2 rounded-full border border-gold-primary/20 backdrop-blur-sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to SS Fasteners
              </button>
            </Link>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-tighter leading-none font-sans">
                Integrated <span className="text-gold-primary font-serif italic">Flange</span> <br/>
                Industrial Bolting
              </h1>
              <p className="text-lg text-slate-400 mb-14 max-w-3xl mx-auto font-light leading-relaxed">
                Engineered with integrated washer faces to eliminate manual component failure. Optimized for automotive vibrations, electronics enclosures, and structural piping environments.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-10 mb-24">
               <div className="p-12 rounded-[3rem] bg-slate-50 border border-slate-100 relative overflow-hidden group">
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold-primary/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                  <Shield className="w-12 h-12 text-gold-primary mb-8" />
                  <h3 className="text-2xl font-bold text-navy-primary mb-4 tracking-tight">Load Distribution</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">The integrated flange increases the bearing surface area, distributing the clamping load more effectively to prevent surface damage.</p>
               </div>
               <div className="p-12 rounded-[3rem] bg-navy-primary text-white shadow-2xl relative overflow-hidden group">
                  <TrendingUp className="w-12 h-12 text-gold-primary mb-8" />
                  <h3 className="text-2xl font-bold mb-4 tracking-tight">Vibration Resistance</h3>
                  <p className="text-blue-100/70 text-sm leading-relaxed font-sans">Available in serrated and non-serrated formats. Serrated flanges provide specialized mechanical locking in high-vibration machinery.</p>
               </div>
               <div className="p-12 rounded-[3rem] bg-slate-50 border border-slate-100 relative overflow-hidden group font-sans">
                  <Award className="w-12 h-12 text-gold-primary mb-8 font-sans" />
                  <h3 className="text-2xl font-bold text-navy-primary mb-4 tracking-tight font-sans">Self-Aligning Efficiency</h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-sans">Designed for automated assembly lines where separate washers cause bottlenecks. Perfect for high-volume automotive production.</p>
               </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-20">
              <div>
                 <h2 className="text-4xl font-black text-navy-primary mb-12 tracking-tighter flex items-center font-sans tracking-tight">
                   <Settings className="w-10 h-10 mr-4 text-gold-primary font-sans" /> Engineering Standards
                 </h2>
                 <div className="space-y-6 font-sans">
                   {mechanicalData.map((data, i) => (
                     <div key={i} className="flex justify-between items-center bg-slate-50 p-6 rounded-2xl border-l-4 border-gold-primary font-sans">
                       <span className="text-xs font-black uppercase tracking-widest text-slate-400 font-sans">{data.spec}</span>
                       <span className="font-bold text-navy-primary font-sans">{data.value}</span>
                     </div>
                   ))}
                 </div>
              </div>

              <div>
                 <h2 className="text-4xl font-black text-navy-primary mb-12 tracking-tighter flex items-center font-sans tracking-tight font-sans">
                   <Info className="w-10 h-10 mr-4 text-gold-primary font-sans font-sans" /> Grade Performance Profile
                 </h2>
                 <div className="grid grid-cols-1 gap-6 font-sans font-sans">
                   {gradeProfiles.map((grade, i) => (
                     <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all font-sans font-sans">
                        <h4 className="text-xl font-bold text-navy-primary mb-2 font-sans font-sans">{grade.grade}</h4>
                        <p className="text-slate-500 text-sm font-sans font-sans">{grade.features}</p>
                     </div>
                   ))}
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Market Intelligence */}
        <section className="py-24 bg-[#0F172A] text-white overflow-hidden relative font-sans">
           <div className="container mx-auto px-4 relative z-10 font-sans">
              <div className="text-center mb-20 font-sans">
                <h2 className="text-4xl font-bold mb-4 font-sans tracking-tight">Global Export Excellence</h2>
                <p className="text-blue-300 opacity-80 font-sans">Supplying precision flange bolting to every major industrial cluster in the world.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-10 font-sans">
                <div className="p-10 bg-white/5 border border-white/10 rounded-[2.5rem] font-sans">
                   <h5 className="font-black text-gold-primary uppercase tracking-[0.2em] mb-4 text-[10px] font-sans">GCC HUB (UAE, SAUDI)</h5>
                   <p className="text-xs opacity-70 leading-relaxed font-sans">Specialized supply for Saudi industrial cities and UAE energy hubs. Conformance to ASME B18 standards is standard.</p>
                </div>
                <div className="p-10 bg-white/5 border border-white/10 rounded-[2.5rem] font-sans">
                   <h5 className="font-black text-gold-primary uppercase tracking-[0.2em] mb-4 text-[10px] font-sans font-sans">EUROPEAN AUTO CLUSTER</h5>
                   <p className="text-xs opacity-70 leading-relaxed font-sans font-sans">Supplying DIN 6921 grade fasteners to Germany, France, and Italy for high-performance automotive manufacturing.</p>
                </div>
                <div className="p-10 bg-white/5 border border-white/10 rounded-[2.5rem] font-sans">
                   <h5 className="font-black text-gold-primary uppercase tracking-[0.2em] mb-4 text-[10px] font-sans font-sans">SOUTH ASIAN MFG</h5>
                   <p className="text-xs opacity-70 leading-relaxed font-sans font-sans">Prime supplier to Mumbai, Chennai, and Vietnam electronics and appliances assembly hubs.</p>
                </div>
              </div>
           </div>
        </section>

        {/* Contact CTA */}
        <section className="py-24 bg-white relative font-sans">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-5xl font-black text-navy-primary mb-10 tracking-tighter uppercase font-sans tracking-tight">Request Engineering Quote</h2>
            <p className="text-slate-500 mb-16 text-xl max-w-2xl mx-auto font-sans font-sans">Get technical data sheets and global pricing for your mass-production or bespoke flange bolt requirements.</p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-12 font-sans font-sans">
               <Link href="/contact" className="bg-navy-primary hover:bg-gold-primary text-white hover:text-navy-primary px-16 py-6 rounded-3xl font-black text-xl transition-all shadow-2xl flex items-center group font-sans font-sans">
                  Get Technical Quote <ArrowRight className="ml-4 w-7 h-7 transform group-hover:translate-x-2 transition-transform" />
               </Link>
               <div className="text-left font-sans font-sans">
                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 font-sans">24/7 Global Desk</p>
                 <a href="tel:+919819322576" className="text-3xl font-bold text-navy-primary font-sans">+91 9819322576</a>
               </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
