import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft, ArrowRight, CheckCircle, Shield, Info, TrendingUp, Award, Download, Box, Key, Settings, Anchor } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function WeldNutsDetail() {
  const weldingSpecs = [
    { type: "Hex Weld Nuts", standard: "DIN 929", features: "Three precision welding projections" },
    { type: "Square Weld Nuts", standard: "DIN 928", features: "Four symmetrical welding points" },
    { type: "Round Weld Nuts", standard: "Custom", features: "Optimized for automated welding lines" }
  ];

  const thermalData = [
    { property: "Standards", value: "DIN 929, ISO 21670, AWS D1.3" },
    { property: "Material Grades", value: "SS 304, 304L, 316, 316L (Low Carbon Preferred)" },
    { property: "Size Range", value: "M4 to M16 | #6 to 5/8\"" },
    { property: "Finish", value: "Plain / Natural (for optimal conductivity)" }
  ];

  return (
    <>
      <ProductSEO
        title="Stainless Steel Weld Nuts - SS 316L, 304 Hex & Square DIN 929 | Mumbai Manufacturer"
        description="Premium Stainless Steel Weld Nuts Manufacturer. Grades SS 304, 316L. DIN 929 standards. Engineered for permanent projection welding in automotive and appliance manufacturing globally."
        keywords="SS weld nuts, stainless steel DIN 929, hex weld nuts SS, square weld nuts SS, projection welding nuts, 316L weld fasteners, automotive SS weld nuts, appliance SS hardware"
        category="Stainless Steel Fasteners"
        productName="Stainless Steel Weld Nuts"
        specifications={["DIN 929 / ISO 21670", "Projection Welding Points", "SS 304L/316L Grades", "Flush Mounting Design"]}
        canonicalUrl="/product/fasteners/ss-nuts/weld-nuts"
      />

      <div className="min-h-screen bg-[#FDFDFD]">
        {/* Navigation & Hero Section */}
        <section className="relative bg-navy-primary py-24 overflow-hidden border-b border-gold-primary/10">
          <div className="absolute inset-0 opacity-15">
             <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_#3b82f6_0%,_transparent_60%)]"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center font-sans font-sans">
            <Link href="/product/fasteners/ss-nuts">
              <button className="inline-flex items-center text-gold-primary hover:text-white transition-colors mb-12 group uppercase text-[10px] tracking-[0.3em] font-black font-sans font-sans font-sans">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Technical Nut Catalog
              </button>
            </Link>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl md:text-4xl font-black text-white mb-8 tracking-tighter uppercase font-sans font-sans font-sans">
                Precision <span className="text-gold-primary italic font-serif">Weld</span> <br/>
                Structural Fasteners
              </h1>
              <p className="text-xl text-slate-400 mb-14 max-w-3xl mx-auto font-light leading-relaxed font-sans font-sans font-sans font-sans">
                Specialized projection nuts designed for permanent fusion via welding. Engineered primarily in low-carbon stainless steel grades (304L/316L) to ensure optimal conductivity and metallurgical integrity.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Technical Specification Grid */}
        <section className="py-24 bg-white font-sans font-sans font-sans">
          <div className="container mx-auto px-4 font-sans font-sans font-sans">
            <div className="grid lg:grid-cols-3 gap-10 mb-24 font-sans font-sans">
               <div className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 relative group font-sans font-sans">
                  <TrendingUp className="w-12 h-12 text-gold-primary mb-8 font-sans font-sans" />
                  <h3 className="text-2xl font-bold text-navy-primary mb-4 tracking-tight font-sans font-sans">Projection Welding</h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-sans font-sans font-sans">Integrated precision projections concentrate welding current for a high-strength, localized fusion without damaging the host material's aesthetics.</p>
               </div>
               <div className="p-10 rounded-[3rem] bg-navy-primary text-white shadow-3xl relative group font-sans font-sans font-sans">
                  <Shield className="w-12 h-12 text-gold-primary mb-8 font-sans font-sans font-sans" />
                  <h3 className="text-2xl font-bold mb-4 tracking-tight font-sans font-sans font-sans font-sans">Low-Carbon Integrity</h3>
                  <p className="text-blue-100/70 text-sm leading-relaxed font-sans font-sans font-sans font-sans font-sans">Manufactured using L-series grades (304L, 316L) to prevent chromium carbide precipitation during the welding heat cycle.</p>
               </div>
               <div className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 relative group font-sans font-sans font-sans font-sans">
                  <Box className="w-12 h-12 text-gold-primary mb-8 font-sans font-sans font-sans font-sans font-sans" />
                  <h3 className="text-2xl font-bold text-navy-primary mb-4 tracking-tight font-sans font-sans font-sans font-sans font-sans">Sheet Metal Fusion</h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-sans font-sans font-sans font-sans font-sans font-sans font-sans">The primary choice for appliance, automotive, and enclosure manufacturing where a threaded hole is required in thin gauge materials.</p>
               </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-20 items-start font-sans font-sans font-sans font-sans font-sans font-sans">
              <div>
                 <h2 className="text-3xl font-bold text-navy-primary mb-12 flex items-center tracking-tight font-sans font-sans font-sans">
                   <Settings className="w-10 h-10 mr-4 text-gold-primary font-sans font-sans font-sans font-sans" /> Engineering Attributes
                 </h2>
                 <div className="space-y-6 font-sans font-sans font-sans font-sans font-sans">
                   {thermalData.map((spec, i) => (
                     <div key={i} className="flex justify-between items-center bg-slate-100/30 p-6 rounded-3xl border-l-4 border-gold-primary font-sans font-sans font-sans font-sans">
                       <span className="text-[10px] font-black uppercase tracking-widest text-navy-primary/60 font-sans font-sans font-sans">{spec.property}</span>
                       <span className="font-bold text-navy-primary text-right text-sm font-sans font-sans font-sans font-sans font-sans">{spec.value}</span>
                     </div>
                   ))}
                 </div>
              </div>

              <div>
                 <h2 className="text-3xl font-bold text-navy-primary mb-12 flex items-center tracking-tight font-sans font-sans font-sans font-sans font-sans font-sans">
                   <Info className="w-10 h-10 mr-4 text-gold-primary font-sans font-sans font-sans font-sans font-sans font-sans font-sans" /> Welding Standard Matrix
                 </h2>
                 <div className="overflow-hidden rounded-[2.5rem] border border-slate-200 font-sans font-sans font-sans font-sans font-sans font-sans font-sans">
                    <table className="w-full font-sans font-sans font-sans font-sans font-sans font-sans">
                       <thead className="bg-[#f8fafc] font-sans font-sans font-sans font-sans">
                          <tr className="border-b border-slate-200">
                             <th className="px-6 py-5 text-left text-[10px] font-black uppercase tracking-widest font-sans font-sans">Configuration</th>
                             <th className="px-6 py-5 text-left text-[10px] font-black uppercase tracking-widest font-sans font-sans font-sans">Standard Ref</th>
                          </tr>
                       </thead>
                       <tbody className="divide-y divide-slate-100 font-sans font-sans font-sans font-sans font-sans font-sans font-sans font-sans">
                          {weldingSpecs.map((row, i) => (
                             <tr key={i} className="hover:bg-slate-50 transition-colors font-sans font-sans font-sans">
                                <td className="px-6 py-5 font-bold text-navy-primary font-sans font-sans font-sans">{row.type}</td>
                                <td className="px-6 py-5 text-slate-500 font-bold text-sm font-sans font-sans font-sans font-sans">{row.standard}</td>
                             </tr>
                          ))}
                       </tbody>
                    </table>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Market Expansion */}
        <section className="py-24 bg-slate-50 border-y border-slate-200 font-sans font-sans font-sans">
          <div className="container mx-auto px-4 font-sans font-sans font-sans">
             <h2 className="text-2xl font-black text-navy-primary mb-16 text-center tracking-widest uppercase font-sans font-sans">Supply Chain Connectivity</h2>
             <div className="grid md:grid-cols-4 gap-8 font-sans font-sans font-sans font-sans font-sans">
                <div className="p-8 bg-white rounded-3xl border border-slate-100 font-sans font-sans font-sans font-sans">
                   <h5 className="font-extrabold text-navy-primary text-xs uppercase tracking-widest mb-4 font-sans font-sans">MUMBAI MANUFACTURING</h5>
                   <p className="text-xs text-slate-500 leading-relaxed font-sans font-sans font-sans font-sans font-sans font-sans font-sans">Primary manufacturer of custom DIN 929 weld nuts for India's domestic automotive OEM sector.</p>
                </div>
                <div className="p-8 bg-white rounded-3xl border border-slate-100 font-sans font-sans font-sans font-sans font-sans font-sans font-sans">
                   <h5 className="font-extrabold text-navy-primary text-xs uppercase tracking-widest mb-4 font-sans font-sans font-sans font-sans font-sans font-sans">GCC APPLIANCE HUB</h5>
                   <p className="text-xs text-slate-500 leading-relaxed font-sans font-sans font-sans font-sans font-sans font-sans font-sans font-sans font-sans">Distributing high-purity SS 304L weld nuts to white-goods manufacturing plants in UAE and Saudi Arabia.</p>
                </div>
                <div className="p-8 bg-white rounded-3xl border border-slate-100 font-sans font-sans font-sans font-sans font-sans font-sans font-sans font-sans font-sans font-sans">
                   <h5 className="font-extrabold text-navy-primary text-xs uppercase tracking-widest mb-4 font-sans font-sans font-sans font-sans font-sans font-sans font-sans font-sans font-sans font-sans font-sans font-sans">EU AUTO COMPLIANCE</h5>
                   <p className="text-xs text-slate-500 leading-relaxed font-sans font-sans font-sans font-sans font-sans font-sans font-sans font-sans font-sans font-sans font-sans font-sans font-sans">Standardized DIN 929 supply for European automotive chassis and compartment manufacturers.</p>
                </div>
                <div className="p-8 bg-white rounded-3xl border border-slate-100 font-sans font-sans font-sans font-sans font-sans font-sans font-sans font-sans font-sans font-sans font-sans font-sans font-sans font-sans">
                   <h5 className="font-extrabold text-navy-primary text-xs uppercase tracking-widest mb-4 font-sans font-sans font-sans font-sans font-sans font-sans font-sans font-sans font-sans font-sans font-sans font-sans font-sans font-sans">US AEROSPACE FEED</h5>
                   <p className="text-xs text-slate-500 leading-relaxed font-sans font-sans font-sans font-sans font-sans font-sans font-sans font-sans font-sans font-sans font-sans font-sans font-sans font-sans font-sans font-sans">ASME and projection weld certified nuts for specialty aerospace compartment joining in North America.</p>
                </div>
             </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-24 bg-navy-primary text-white font-sans font-sans font-sans font-sans font-sans">
          <div className="container mx-auto px-4 text-center font-sans font-sans font-sans font-sans font-sans">
            <h2 className="text-4xl md:text-5xl font-black mb-10 tracking-widest uppercase font-sans font-sans font-sans font-sans font-sans font-sans font-sans">Engineered Fusion</h2>
            <p className="text-xl text-blue-100/60 mb-14 max-w-2xl mx-auto font-light font-sans font-sans font-sans font-sans font-sans font-sans">Inquire with our technical desk for weld-cycle certifications and high-purity alloy projection nut volume distribution.</p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-12 font-sans font-sans font-sans font-sans font-sans">
              <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-16 py-6 rounded-3xl font-black text-xl transition-all shadow-3xl flex items-center group font-sans font-sans font-sans font-sans">
                Get Industrial Quote <ArrowRight className="ml-4 w-7 h-7 transform group-hover:translate-x-3 transition-transform font-sans" />
              </Link>
              <div className="text-left font-sans font-sans font-sans font-sans whitespace-nowrap font-sans font-sans font-sans">
                <p className="text-[10px] font-black text-gold-primary uppercase tracking-[0.4em] mb-1 font-sans font-sans">Technical Welding Line</p>
                <a href="tel:+919819322576" className="text-3xl font-bold text-white transition-colors hover:text-gold-primary font-sans font-sans font-sans">+91 9819322576</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
