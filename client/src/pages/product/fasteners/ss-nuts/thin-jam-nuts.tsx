import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft, ArrowRight, CheckCircle, Shield, Info, TrendingUp, Award, Download, Box, Key, Settings, Anchor } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function ThinJamNutsDetail() {
  const dimensionalSpecs = [
    { label: "Standards", value: "DIN 439, DIN 936, ISO 4035, ASME B18.2.2" },
    { label: "Material Grades", value: "SS 304, 304L, 316, 316L, 321, 310" },
    { label: "Profile", value: "Reduced Height (Thin Profile)" },
    { label: "Size Range", value: "M2 to M100 | #2 to 4\"" }
  ];

  const profileData = [
    { size: "M6", standardHeight: "5.0mm", jamHeight: "3.2mm", reduction: "36%" },
    { size: "M10", standardHeight: "8.0mm", jamHeight: "5.0mm", reduction: "37.5%" },
    { size: "M16", standardHeight: "13.0mm", jamHeight: "8.0mm", reduction: "38%" },
    { size: "M20", standardHeight: "16.0mm", jamHeight: "10.0mm", reduction: "37.5%" }
  ];

  return (
    <>
      <ProductSEO
        title="Stainless Steel Thin Jam Nuts - SS 316L, 304 DIN 439 ISO 4035 | Mumbai Manufacturer"
        description="Premium Stainless Steel Thin Jam Nuts Manufacturer. Grades SS 304, 316L. DIN 439, ISO 4035 standards. Reduced profile design for space constraints and lock-nut applications globally."
        keywords="SS jam nuts, stainless steel thin nuts, DIN 439 SS nuts, ISO 4035 stainless, metric jam nuts SS, low profile lock nuts, SS 316 hex jam nuts, Mumbai nut manufacturer, aerospace SS nuts"
        category="Stainless Steel Fasteners"
        productName="Stainless Steel Thin Jam Nuts"
        specifications={["DIN 439 / ISO 4035", "Reduced Height Profile", "SS 304/316 Grades", "Jam/Lock Application"]}
        canonicalUrl="/product/fasteners/ss-nuts/thin-jam-nuts"
      />

      <div className="min-h-screen bg-[#FDFDFD]">
        {/* Navigation & Hero Section */}
        <section className="relative bg-navy-primary py-24 overflow-hidden border-b border-gold-primary/10">
          <div className="absolute inset-0 opacity-10">
             <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_#3b82f6_0%,_transparent_60%)]"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center font-sans">
            <Link href="/product/fasteners/ss-nuts">
              <button className="inline-flex items-center text-gold-primary hover:text-white transition-colors mb-12 group uppercase text-[10px] tracking-[0.3em] font-black font-sans">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Nuts Engineering Catalog
              </button>
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl md:text-4xl font-black text-white mb-8 tracking-tighter uppercase font-sans font-sans">
                Low-Profile <span className="text-gold-primary italic font-serif text-3xl font-bold">Jam</span> <br/>
                Locking Fasteners
              </h1>
              <p className="text-xl text-slate-400 mb-14 max-w-3xl mx-auto font-light leading-relaxed font-sans font-sans">
                Precision-engineered reduced height nuts for applications with severe space constraints. Primarily utilized as a secondary "jam" nut to lock high-load standard hex nuts in position and prevent vibrational displacement.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Technical Specification Grid */}
        <section className="py-24 bg-white font-sans font-sans">
          <div className="container mx-auto px-4 font-sans font-sans">
            <div className="grid lg:grid-cols-3 gap-10 mb-24 font-sans font-sans">
               <div className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 relative group font-sans font-sans">
                  <Box className="w-12 h-12 text-gold-primary mb-8 font-sans" />
                  <h3 className="text-2xl font-bold text-navy-primary mb-4 tracking-tight font-sans">Space Economy</h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-sans font-sans font-sans">Optimized for compact assemblies where a standard hex nut is too tall, allowing for secure fastening in limited-access environments.</p>
               </div>
               <div className="p-10 rounded-[2.5rem] bg-navy-primary text-white shadow-3xl relative group font-sans font-sans">
                  <Shield className="w-12 h-12 text-gold-primary mb-8 font-sans font-sans font-sans" />
                  <h3 className="text-2xl font-bold mb-4 tracking-tight font-sans font-sans font-sans">Locking Mechanism</h3>
                  <p className="text-blue-100/70 text-sm leading-relaxed font-sans font-sans font-sans font-sans">Used in pairs or against standard nuts to create internal friction that resists back-off under high-vibration and oscillating loads.</p>
               </div>
               <div className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 relative group font-sans font-sans font-sans">
                  <TrendingUp className="w-12 h-12 text-gold-primary mb-8 font-sans font-sans font-sans font-sans font-sans" />
                  <h3 className="text-2xl font-bold text-navy-primary mb-4 tracking-tight font-sans font-sans font-sans font-sans">High-Grade Stability</h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-sans font-sans font-sans font-sans font-sans font-sans">Available in SS 316Ti and Duplex grades for applications requiring both space efficiency and extreme corrosion resistance.</p>
               </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-20 items-start font-sans font-sans font-sans font-sans font-sans font-sans">
              <div>
                 <h2 className="text-3xl font-bold text-navy-primary mb-12 flex items-center tracking-tight font-sans font-sans font-sans">
                   <Settings className="w-10 h-10 mr-4 text-gold-primary font-sans font-sans font-sans" /> Dimensional Profile
                 </h2>
                 <div className="space-y-6 font-sans font-sans font-sans font-sans font-sans">
                   {dimensionalSpecs.map((spec, i) => (
                     <div key={i} className="flex justify-between items-center bg-slate-100/40 p-6 rounded-3xl border-l-4 border-gold-primary font-sans font-sans font-sans font-sans">
                       <span className="text-[10px] font-black uppercase tracking-widest text-navy-primary/60 font-sans font-sans font-sans font-sans">{spec.label}</span>
                       <span className="font-bold text-navy-primary text-right text-sm font-sans font-sans font-sans font-sans">{spec.value}</span>
                     </div>
                   ))}
                 </div>
              </div>

              <div>
                 <h2 className="text-3xl font-bold text-navy-primary mb-12 flex items-center tracking-tight font-sans font-sans">
                   <Info className="w-10 h-10 mr-4 text-gold-primary font-sans font-sans font-sans" /> Height Reduction Matrix
                 </h2>
                 <div className="overflow-hidden rounded-[2.5rem] border border-slate-200 font-sans font-sans">
                    <table className="w-full font-sans font-sans font-sans">
                       <thead className="bg-[#f8fafc] font-sans">
                          <tr className="border-b border-slate-200 font-sans">
                             <th className="px-6 py-5 text-left text-[10px] font-black text-navy-primary uppercase tracking-widest font-sans">Metric</th>
                             <th className="px-6 py-5 text-left text-[10px] font-black text-navy-primary uppercase tracking-widest font-sans font-sans font-sans">Jam Nut Height</th>
                          </tr>
                       </thead>
                       <tbody className="divide-y divide-slate-100 font-sans font-sans font-sans font-sans font-sans">
                          {profileData.map((row, i) => (
                             <tr key={i} className="hover:bg-slate-50 transition-colors font-sans">
                                <td className="px-6 py-5 font-bold text-navy-primary font-sans font-sans">{row.size}</td>
                                <td className="px-6 py-5 text-slate-500 font-bold text-sm font-sans font-sans font-sans">{row.jamHeight}</td>
                             </tr>
                          ))}
                       </tbody>
                    </table>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Market Intelligence */}
        <section className="py-24 bg-slate-50 border-y border-slate-200 font-sans font-sans">
          <div className="container mx-auto px-4 font-sans font-sans">
             <h2 className="text-3xl font-serif italic text-navy-primary mb-20 text-center tracking-tight font-sans uppercase font-sans">Market-Specific Supply Hub</h2>
             <div className="grid md:grid-cols-3 gap-12 font-sans font-sans">
                <div className="p-10 bg-white border border-slate-100 rounded-[3rem] font-sans font-sans">
                   <h5 className="font-extrabold text-navy-primary text-xs uppercase tracking-widest mb-6 font-sans">GCC OFFSHORE NETWORK</h5>
                   <p className="text-xs text-slate-500 leading-relaxed font-sans font-sans font-sans font-sans font-sans">Supply of duplex jam nuts for high-vibration subsea plumbing and offshore instrumentation panels in UAE and Oman.</p>
                </div>
                <div className="p-10 bg-white border border-slate-100 rounded-[3rem] font-sans font-sans font-sans">
                   <h5 className="font-extrabold text-navy-primary text-xs uppercase tracking-widest mb-6 font-sans font-sans">EU INSTRUMENTATION</h5>
                   <p className="text-xs text-slate-500 leading-relaxed font-sans font-sans font-sans font-sans font-sans font-sans">DIN 439 compliant low-profile nuts for European medical device manufacturers and laboratory equipment hubs.</p>
                </div>
                <div className="p-10 bg-white border border-slate-100 rounded-[3rem] font-sans font-sans font-sans font-sans">
                   <h5 className="font-extrabold text-navy-primary text-xs uppercase tracking-widest mb-6 font-sans font-sans font-sans">US DEFENSE & AEROSPACE</h5>
                   <p className="text-xs text-slate-500 leading-relaxed font-sans font-sans font-sans font-sans font-sans">Providing specialty alloy thin nuts for US aerospace compartment joining where weight and space reduction are critical.</p>
                </div>
             </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-24 bg-navy-primary text-white font-sans font-sans font-sans font-sans">
          <div className="container mx-auto px-4 text-center font-sans font-sans font-sans font-sans">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-10 tracking-widest uppercase font-sans font-sans font-sans">Precision Fastening</h2>
            <p className="text-xl text-blue-100/60 mb-14 max-w-2xl mx-auto font-light font-sans font-sans font-sans">Contact our Mumbai technical export desk for high-volume custom jam nut specifications and global logistics coordination.</p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-12 font-sans font-sans font-sans">
              <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-16 py-6 rounded-3xl font-black text-xl transition-all shadow-3xl flex items-center group font-sans">
                Get Industrial Quote <ArrowRight className="ml-4 w-7 h-7 transform group-hover:translate-x-3 transition-transform font-sans" />
              </Link>
              <div className="text-left font-sans whitespace-nowrap font-sans font-sans">
                <p className="text-[10px] font-black text-gold-primary uppercase tracking-[0.4em] mb-1 font-sans font-sans">Technical Fastening Line</p>
                <a href="tel:+919819322576" className="text-3xl font-bold text-white transition-colors hover:text-gold-primary font-sans font-sans font-sans">+91 9819322576</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
