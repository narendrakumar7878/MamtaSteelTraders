import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft, ArrowRight, CheckCircle, Shield, Info, TrendingUp, Award, Download, Box, Key, Settings, Anchor } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function FlangeNutsDetail() {
  const dimensionalData = [
    { property: "Standards", value: "DIN 6923, ISO 4161, JIS B1190, EN 1661" },
    { property: "Available Grades", value: "SS 304 (A2), SS 316 (A4), Alloy 20" },
    { property: "Flange Type", value: "Serrated (Anti-vibration) or Plain" },
    { property: "Size Range", value: "M4 to M20 | #10 to 3/4\"" }
  ];

  const mechanicalProperties = [
    { grade: "A2-70 / 304", tensile: "700 MPa", proof: "450 MPa", usage: "General structural" },
    { grade: "A4-80 / 316", tensile: "800 MPa", proof: "600 MPa", usage: "Corrosive chemical" },
    { grade: "Duplex 2205", tensile: "900 MPa+", proof: "800 MPa", usage: "High-load offshore" }
  ];

  return (
    <>
      <ProductSEO
        title="Stainless Steel Flange Nuts - SS 316, 304 DIN 6923 Serrated & Plain | Mumbai Supplier"
        description="Premium Stainless Steel Flange Nuts Manufacturer. Integration of washer face for superior load distribution. Grades SS 304, 316. DIN 6923 standards. Supplying to global electronics and automotive hubs."
        keywords="SS flange nuts, stainless steel DIN 6923, serrated flange nuts SS, plain flange nuts 316L, integrated washer nuts, metric SS flange nuts, automotive SS fasteners, electronics enclosure nuts"
        category="Stainless Steel Fasteners"
        productName="Stainless Steel Flange Nuts"
        specifications={["DIN 6923 / ISO 4161", "Integrated Washer Base", "Serrated/Plain Options", "SS 304/316 Grades"]}
        canonicalUrl="/product/fasteners/ss-nuts/flange-nuts"
      />

      <div className="min-h-screen bg-[#FDFDFD]">
        {/* Navigation & Hero Section */}
        <section className="relative bg-navy-primary py-24 overflow-hidden border-b-2 border-gold-primary/10">
          <div className="absolute inset-0 opacity-20">
             <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_#1e3a8a_0%,_transparent_50%)]"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <Link href="/product/fasteners/ss-nuts">
              <button className="inline-flex items-center text-gold-primary hover:text-white transition-colors mb-12 group uppercase text-xs tracking-widest font-black">
                <ArrowLeft className="w-5 h-5 mr-3 transform group-hover:-translate-x-2 transition-transform" />
                Back to SS Nut Hub
              </button>
            </Link>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl md:text-4xl font-black text-white mb-6 uppercase tracking-tighter font-sans">
                Structural <span className="text-gold-primary italic font-serif">Flange</span> <br/>
                Engineering Solutions
              </h1>
              <p className="text-xl text-blue-100/70 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
                Optimized with a broad integrated base to distribute clamp loads across a wider surface area. Eliminates the need for separate washers while providing superior resistance to vibrational loosening.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Technical Specification Grid */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-10 mb-24">
               <div className="p-10 rounded-[2.5rem] bg-navy-primary text-white shadow-2xl relative overflow-hidden group">
                  <Box className="w-12 h-12 text-gold-primary mb-8" />
                  <h3 className="text-2xl font-bold mb-4 tracking-tight">Load Distribution</h3>
                  <p className="text-blue-100/70 text-sm leading-relaxed">The integrated flange base maximizes the bearing area, reducing the localized surface pressure on the connected assembly components.</p>
               </div>
               <div className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 group font-sans">
                  <Shield className="w-12 h-12 text-gold-primary mb-8 font-sans" />
                  <h3 className="text-2xl font-bold text-navy-primary mb-4 tracking-tight font-sans">Anti-Rotation Serrations</h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-sans font-sans">Available with specialized under-flange serrations that 'bite' into the mating surface to prevent loosening in high-vibration applications.</p>
               </div>
               <div className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 group font-sans">
                  <Settings className="w-12 h-12 text-gold-primary mb-8 font-sans" />
                  <h3 className="text-2xl font-bold text-navy-primary mb-4 tracking-tight font-sans font-sans">Assembly Efficiency</h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-sans font-sans font-sans">One-piece design accelerates production line assembly by eliminating manual washer handling and component count.</p>
               </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-20">
              <div>
                 <h2 className="text-3xl font-bold text-navy-primary mb-12 tracking-tighter flex items-center font-sans tracking-tight font-sans">
                   <Award className="w-10 h-10 mr-4 text-gold-primary font-sans font-sans" /> Dimensional Precision
                 </h2>
                 <div className="space-y-4 font-sans font-sans font-sans">
                   {dimensionalData.map((spec, i) => (
                     <div key={i} className="flex justify-between items-center p-6 border-b border-slate-200 hover:bg-slate-50 transition-colors font-sans">
                       <span className="font-extrabold text-navy-primary uppercase text-[10px] tracking-widest font-sans font-sans">{spec.property}</span>
                       <span className="text-slate-500 font-bold text-sm font-sans font-sans font-sans">{spec.value}</span>
                     </div>
                   ))}
                 </div>
              </div>

              <div>
                 <h2 className="text-3xl font-bold text-navy-primary mb-12 tracking-tighter flex items-center font-sans tracking-tight font-sans font-sans">
                   <TrendingUp className="w-10 h-10 mr-4 text-gold-primary font-sans font-sans font-sans" /> Mechanical Hierarchy
                 </h2>
                 <div className="overflow-hidden rounded-3xl border border-slate-200 font-sans font-sans font-sans font-sans">
                    <table className="w-full font-sans font-sans">
                       <thead className="bg-[#f8fafc] font-sans font-sans">
                          <tr className="border-b border-slate-200">
                             <th className="px-6 py-4 text-left text-xs font-black text-navy-primary uppercase tracking-widest font-sans">Ref Grade</th>
                             <th className="px-6 py-4 text-left text-xs font-black text-navy-primary uppercase tracking-widest font-sans">Proof Load</th>
                          </tr>
                       </thead>
                       <tbody className="divide-y divide-slate-100 font-sans font-sans font-sans">
                          {mechanicalProperties.map((row, i) => (
                             <tr key={i} className="hover:bg-slate-50 transition-colors font-sans">
                                <td className="px-6 py-4 font-black text-navy-primary italic font-sans">{row.grade}</td>
                                <td className="px-6 py-4 text-slate-500 font-bold text-sm font-sans font-sans">{row.proof}</td>
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
        <section className="py-24 bg-slate-50 border-y border-slate-200 font-sans">
           <div className="container mx-auto px-4 font-sans">
              <h2 className="text-3xl font-serif italic text-navy-primary mb-16 text-center tracking-tight font-sans uppercase">Cross-Contintental Logistics</h2>
              <div className="grid md:grid-cols-4 gap-8">
                 <div className="bg-white p-8 rounded-[2rem] border border-slate-100 font-sans">
                    <p className="text-xs font-black text-gold-primary mb-3">Sourcing Hub</p>
                    <h5 className="font-extrabold text-navy-primary text-sm mb-4">MUMBAI HQ</h5>
                    <p className="text-xs text-slate-500 leading-relaxed font-sans">Centralized distribution with 24-hour dispatch for standard SS grades and metric ranges.</p>
                 </div>
                 <div className="bg-white p-8 rounded-[2rem] border border-slate-100 font-sans">
                    <p className="text-xs font-black text-gold-primary mb-3">GCC Network</p>
                    <h5 className="font-extrabold text-navy-primary text-sm mb-4">GULF CORRIDOR</h5>
                    <p className="text-xs text-slate-500 leading-relaxed font-sans font-sans">Dedicated supply of serrated flange nuts for Saudi petroleum pipelines and UAE marine rigs.</p>
                 </div>
                 <div className="bg-white p-8 rounded-[2rem] border border-slate-100 font-sans">
                    <p className="text-xs font-black text-gold-primary mb-3">Western Access</p>
                    <h5 className="font-extrabold text-navy-primary text-sm mb-4">EURO & US</h5>
                    <p className="text-xs text-slate-500 leading-relaxed font-sans font-sans font-sans">Supply chain optimized for high-volume automotive assembly in Germany, Mexico, and USA.</p>
                 </div>
                 <div className="bg-white p-8 rounded-[2rem] border border-slate-100 font-sans">
                    <p className="text-xs font-black text-gold-primary mb-3">Quality Tier</p>
                    <h5 className="font-extrabold text-navy-primary text-sm mb-4">ISO CERTIFIED</h5>
                    <p className="text-xs text-slate-500 leading-relaxed font-sans font-sans font-sans font-sans">Fully compliant with ISO 4161 and BS EN 1661 standards with complete batch traceability.</p>
                 </div>
              </div>
           </div>
        </section>

        {/* Contact CTA */}
        <section className="py-24 bg-navy-primary text-white font-sans font-sans">
          <div className="container mx-auto px-4 text-center font-sans">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-10 tracking-tighter uppercase font-sans font-sans font-sans font-sans font-sans">Optimize Your Assembly</h2>
            <p className="text-xl text-blue-100/60 mb-14 max-w-2xl mx-auto font-light font-sans font-sans font-sans font-sans">Connect with our export desk for volume pricing on integrated structural flange solutions.</p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-12 font-sans font-sans font-sans">
              <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-16 py-6 rounded-3xl font-black text-xl transition-all shadow-3xl hover:shadow-gold-primary/20 flex items-center group font-sans font-sans">
                Get Industrial Quote <ArrowRight className="ml-4 w-7 h-7 transform group-hover:translate-x-3 transition-transform font-sans" />
              </Link>
              <div className="text-left font-sans font-sans whitespace-nowrap">
                <p className="text-[10px] font-black text-gold-primary uppercase tracking-[0.4em] mb-1 font-sans">Technical Support Line</p>
                <a href="tel:+919819322576" className="text-3xl font-bold text-white font-sans font-sans font-sans">+91 9819322576</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
