import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft, ArrowRight, CheckCircle, Shield, Info, TrendingUp, Award, Download, Box, Key, Settings, Anchor } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function NylocNutsDetail() {
  const technicalSpecs = [
    { label: "Standards", value: "DIN 985, DIN 982, ISO 7040, ASME B18.16.6" },
    { label: "Material", value: "SS 304, 316L, 316Ti with Nylon 66 Insert" },
    { label: "Size Type", value: "Standard, Low Profile (Thin), Heavy" },
    { label: "Size Range", value: "M3 to M48 | #4 to 2\"" }
  ];

  const torqueData = [
    { grade: "A2-70 (304)", minTorque: "Prevailing torque per DIN 267-15", application: "Vibrating Machinery" },
    { grade: "A4-80 (316L)", minTorque: "High-corrosion self-locking", application: "Marine Decking" },
    { grade: "SS 316Ti", minTorque: "Titanium stabilized for temp", application: "Automotive Exhaust" }
  ];

  return (
    <>
      <ProductSEO
        title="Stainless Steel Nyloc Nuts - SS 316L, 304 Nylon Insert Lock Nuts DIN 985 | Global Manufacturer"
        description="Premium Stainless Steel Nyloc Lock Nuts Manufacturer. Grades SS 304, 316L. DIN 985, ISO 7040 standards. Prevailing torque self-locking nuts for high-vibration industrial sectors."
        keywords="SS nyloc nuts, stainless steel lock nuts, nylon insert nuts SS, DIN 985 stainless, prevailing torque nuts, SS 316 lock nuts, marine grade nyloc, Mumbai nyloc nut manufacturer, vibration resistant fasteners"
        category="Stainless Steel Fasteners"
        productName="Stainless Steel Nyloc Lock Nuts"
        specifications={["Nylon 66 Insert", "DIN 985 / ISO 7040", "A2-70 / A4-80", "Anti-Vibration Design"]}
        canonicalUrl="/product/fasteners/ss-nuts/nyloc-lock-nuts"
      />

      <div className="min-h-screen bg-[#FDFDFD]">
        {/* Navigation & Hero Section */}
        <section className="relative bg-navy-primary py-24 overflow-hidden border-b-2 border-gold-primary/10 font-sans">
          <div className="absolute inset-0 opacity-15">
             <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_#3b82f6_0%,_transparent_60%)]"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <Link href="/product/fasteners/ss-nuts">
              <button className="inline-flex items-center text-blue-100 hover:text-gold-primary transition-colors mb-12 group uppercase text-[10px] tracking-[0.3em] font-black">
                <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" />
                Nuts Technical Catalog
              </button>
            </Link>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl md:text-4xl font-black text-white mb-8 tracking-tighter uppercase font-sans">
                Self-Locking <span className="text-gold-primary italic font-serif">Nyloc</span> <br/>
                Industrial Fasteners
              </h1>
              <p className="text-xl text-slate-400 mb-14 max-w-3xl mx-auto font-light leading-relaxed">
                Advanced prevailing-torque lock nuts featuring high-integrity nylon inserts. Designed to maintain structural joint security under extreme mechanical vibration and oscillation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Technical Specification Grid */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-10 mb-24">
               <div className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 relative overflow-hidden group">
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold-primary/5 rounded-full group-hover:scale-150 transition-transform duration-1000"></div>
                  <Shield className="w-12 h-12 text-gold-primary mb-8" />
                  <h3 className="text-2xl font-bold text-navy-primary mb-4 tracking-tight">Prevailing Torque</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">The nylon collar creates a friction fit against the bolt threads, ensuring the nut remains in position even after multiple installation cycles.</p>
               </div>
               <div className="p-10 rounded-[3rem] bg-navy-primary text-white shadow-3xl relative overflow-hidden group">
                  <TrendingUp className="w-12 h-12 text-gold-primary mb-8" />
                  <h3 className="text-2xl font-bold mb-4 tracking-tight">Vibration Control</h3>
                  <p className="text-blue-100/70 text-sm leading-relaxed font-sans">Ideal for high-vibration applications in automotive, aerospace, and oscillating industrial machinery where standard nuts may loosen.</p>
               </div>
               <div className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 relative overflow-hidden group font-sans">
                  <Award className="w-12 h-12 text-gold-primary mb-8 font-sans" />
                  <h3 className="text-2xl font-bold text-navy-primary mb-4 tracking-tight font-sans">Corrosion Barrier</h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-sans font-sans">Utilizing SS 316L and SS 304 grades ensures that neither the nut body nor the internal locking mechanism succumbs to aggressive oxidation.</p>
               </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-20 items-start">
              <div>
                 <h2 className="text-3xl font-bold text-navy-primary mb-12 tracking-tighter flex items-center font-sans tracking-tight">
                   <Settings className="w-10 h-10 mr-4 text-gold-primary font-sans font-sans" /> Engineering Standards
                 </h2>
                 <div className="space-y-6 font-sans font-sans">
                   {technicalSpecs.map((spec, i) => (
                     <div key={i} className="flex justify-between items-center bg-slate-100/50 p-6 rounded-3xl border-l-8 border-gold-primary font-sans font-sans font-sans">
                       <span className="text-[10px] font-black uppercase tracking-widest text-navy-primary/50 font-sans font-sans font-sans">{spec.label}</span>
                       <span className="font-bold text-navy-primary text-right text-sm font-sans font-sans font-sans">{spec.value}</span>
                     </div>
                   ))}
                 </div>
              </div>

              <div>
                 <h2 className="text-3xl font-bold text-navy-primary mb-12 tracking-tighter flex items-center font-sans tracking-tight font-sans font-sans">
                   <Info className="w-10 h-10 mr-4 text-gold-primary font-sans font-sans font-sans font-sans" /> Grade-Specific Application
                 </h2>
                 <div className="overflow-hidden rounded-[2rem] border border-slate-200">
                    <table className="w-full font-sans font-sans font-sans">
                       <thead className="bg-navy-primary text-white font-sans font-sans">
                          <tr>
                             <th className="px-6 py-5 text-left text-[10px] font-black uppercase tracking-widest font-sans font-sans">SS Grade</th>
                             <th className="px-6 py-5 text-left text-[10px] font-black uppercase tracking-widest font-sans font-sans font-sans">Recommended Sector</th>
                          </tr>
                       </thead>
                       <tbody className="divide-y divide-slate-100 font-sans font-sans">
                          {torqueData.map((row, i) => (
                             <tr key={i} className="hover:bg-slate-50 transition-colors font-sans">
                                <td className="px-6 py-5 font-bold text-navy-primary font-sans">{row.grade}</td>
                                <td className="px-6 py-5 text-slate-600 text-xs font-sans font-sans">{row.application}</td>
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
        <section className="py-24 bg-slate-50 border-y border-slate-200 font-sans font-sans font-sans font-sans">
           <div className="container mx-auto px-4 font-sans font-sans font-sans">
              <h2 className="text-3xl font-serif italic text-navy-primary mb-20 text-center tracking-tight font-sans uppercase font-sans font-sans">International Supply Network</h2>
              <div className="grid md:grid-cols-3 gap-12 font-sans font-sans font-sans font-sans">
                 <div className="p-10 bg-white border border-slate-100 rounded-[2.5rem] font-sans font-sans font-sans">
                    <h5 className="font-black text-navy-primary uppercase tracking-[0.2em] mb-4 text-[10px] font-sans font-sans">GCC INDUSTRIAL ZONES</h5>
                    <p className="text-xs text-slate-500 leading-relaxed font-sans font-sans font-sans font-sans">Major supplier to Qatar gas projects and Saudi mechanical assemblies where vibration-resistant nuts are mandatory.</p>
                 </div>
                 <div className="p-10 bg-white border border-slate-100 rounded-[2.5rem] font-sans font-sans font-sans font-sans">
                    <h5 className="font-black text-navy-primary uppercase tracking-[0.2em] mb-4 text-[10px] font-sans font-sans font-sans">SEA-PORT INFRASTRUCTURE</h5>
                    <p className="text-xs text-slate-500 leading-relaxed font-sans font-sans font-sans font-sans font-sans">Supplying marine-grade lock nuts for harbor cranes and shipyard machinery across Europe (Rotterdam, Hamburg).</p>
                 </div>
                 <div className="p-10 bg-white border border-slate-100 rounded-[2.5rem] font-sans font-sans font-sans font-sans font-sans">
                    <h5 className="font-black text-navy-primary uppercase tracking-[0.2em] mb-4 text-[10px] font-sans font-sans font-sans font-sans">US AUTO SECTOR</h5>
                    <p className="text-xs text-slate-500 leading-relaxed font-sans font-sans font-sans font-sans font-sans font-sans font-sans">Providing DIN 985 compliant SS fasteners to North American automotive engine and assembly plants.</p>
                 </div>
              </div>
           </div>
        </section>

        {/* Contact CTA */}
        <section className="py-24 bg-navy-primary relative overflow-hidden font-sans font-sans font-sans font-sans">
          <div className="container mx-auto px-4 text-center relative z-10 font-sans font-sans font-sans font-sans">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-10 tracking-tighter uppercase italic font-sans font-sans font-sans font-sans">Secure Your Fastening</h2>
            <p className="text-xl text-blue-100/60 mb-14 max-w-2xl mx-auto font-light font-sans font-sans font-sans font-sans">Contact our technical department for custom nylon insert specifications and bulk pricing distribution.</p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-10 font-sans font-sans font-sans font-sans font-sans">
              <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-16 py-6 rounded-3xl font-black text-xl transition-all shadow-3xl flex items-center group font-sans font-sans font-sans">
                Order Technical Sample <ArrowRight className="ml-4 w-7 h-7 transform group-hover:translate-x-3 transition-transform font-sans font-sans font-sans" />
              </Link>
              <div className="text-left font-sans font-sans font-sans whitespace-nowrap">
                <p className="text-[10px] font-black text-gold-primary uppercase tracking-[0.4em] mb-1 font-sans">Direct Engineering Desk</p>
                <a href="tel:+919819322576" className="text-3xl font-bold text-white font-sans font-sans font-sans">+91 9819322576</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
