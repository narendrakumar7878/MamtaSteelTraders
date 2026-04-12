import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft, ArrowRight, CheckCircle, Shield, Info, TrendingUp, Award, Download, Box, Key, Settings, Anchor } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function SquareNutsDetail() {
  const dimensionalSpecs = [
    { property: "Standards", value: "DIN 557, DIN 562, ISO 4036, ASME B18.2.2" },
    { property: "Grades", value: "SS 304 (A2), SS 316 (A4), SS 316L, SS 321" },
    { property: "Threading", value: "Metric (M3-M30), Imperial (1/8\"-1.25\")" },
    { property: "Surface Finish", value: "Passivated, Plain, Electropolished" }
  ];

  const thermalProperties = [
    { grade: "304 / 304L", maxTemp: "425°C", useCase: "General structural" },
    { grade: "316 / 316L", maxTemp: "450°C", useCase: "Marine / Chemical" },
    { grade: "310 / 321", maxTemp: "800°C+", useCase: "High Temperature Exhaust" }
  ];

  return (
    <>
      <ProductSEO
        title="Stainless Steel Square Nuts - SS 316, 304 DIN 557, DIN 562 | Global Manufacturer"
        description="Premium Stainless Steel Square Nuts Manufacturer. Grades SS 304, 316. DIN 557, DIN 562 standards. Optimized for non-rotation in square slots and wood construction globally."
        keywords="SS square nuts, stainless steel DIN 557, square nut 316L, metric square nuts SS, four sided nuts, furniture SS fasteners, construction SS hardware, Mumbai square nut supplier"
        category="Stainless Steel Fasteners"
        productName="Stainless Steel Square Nuts"
        specifications={["DIN 557 / DIN 562", "Four-Sided Non-Rotation", "Large Bearing Surface", "SS 304/316 Grades"]}
        canonicalUrl="/product/fasteners/ss-nuts/square-nuts"
      />

      <div className="min-h-screen bg-[#F8FAFC]">
        {/* Navigation & Hero Section */}
        <section className="relative bg-navy-primary py-24 overflow-hidden border-b border-gold-primary/20">
          <div className="absolute inset-0 opacity-10">
             <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_#3b82f6_0%,_transparent_70%)]"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <Link href="/product/fasteners/ss-nuts">
              <button className="inline-flex items-center text-blue-200 hover:text-gold-primary transition-colors mb-12 group uppercase text-xs tracking-[0.2em] font-bold">
                <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" />
                Go Back to SS Nutshub
              </button>
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 uppercase tracking-tight font-sans">
                Precision <span className="text-gold-primary italic font-serif">Square</span> <br/>
                Engineering Nuts
              </h1>
              <p className="text-xl text-blue-100/70 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                Four-sided structural nuts designed for specialized fitment in square holes and slots. Engineered to prevent rotation during tightening, providing exceptional stability in high-load assemblies.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Technical Specification Grid */}
        <section className="py-24">
          <div className="container mx-auto px-4 font-sans">
            <div className="grid lg:grid-cols-3 gap-8 mb-20 font-sans">
              <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                  <Box className="w-7 h-7 text-navy-primary" />
                </div>
                <h3 className="text-2xl font-bold text-navy-primary mb-4 font-sans uppercase tracking-tight">Non-Rotation Fit</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-sans font-sans">Specifically designed to lock within square channels and holes, preventing the nut from spinning when torque is applied to the bolt.</p>
              </div>

              <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all font-sans font-sans">
                <div className="w-14 h-14 bg-gold-primary/10 rounded-2xl flex items-center justify-center mb-6 font-sans">
                  <Shield className="w-7 h-7 text-gold-primary font-sans" />
                </div>
                <h3 className="text-2xl font-bold text-navy-primary mb-4 font-sans uppercase tracking-tight font-sans">Broad Bearing Area</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-sans font-sans font-sans">The 4-sided geometry provides a larger contact surface compared to standard hex nuts, ideal for distribution of pressure on softer materials.</p>
              </div>

              <div className="bg-navy-primary p-10 rounded-3xl shadow-xl text-white font-sans font-sans font-sans">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 font-sans font-sans">
                  <Settings className="w-7 h-7 text-gold-primary font-sans" />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-sans uppercase tracking-tight font-sans font-sans">Industrial Utility</h3>
                <p className="text-blue-100/80 mb-6 font-sans font-sans font-sans">Extensively used in furniture assembly, electronic hardware cabinets, and heavy-duty wood-to-metal structural joinery.</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 font-sans font-sans font-sans font-sans">
              <div>
                <h2 className="text-3xl font-bold text-navy-primary mb-12 flex items-center tracking-tight font-sans uppercase font-sans font-sans">
                  <Info className="mr-3 text-gold-primary font-sans font-sans" /> Material Integrity Data
                </h2>
                <div className="overflow-hidden rounded-2xl border border-slate-200">
                  <table className="w-full font-sans font-sans font-sans">
                    <thead className="bg-[#f8fafc] border-b border-slate-200 font-sans font-sans">
                      <tr>
                        <th className="px-6 py-4 text-left text-xs font-bold text-navy-primary uppercase tracking-wider font-sans">Material Grade</th>
                        <th className="px-6 py-4 text-left text-xs font-bold text-navy-primary uppercase tracking-wider font-sans font-sans">Thermostability</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-sans font-sans font-sans font-sans">
                      {thermalProperties.map((row, i) => (
                        <tr key={i} className="hover:bg-slate-50 transition-colors font-sans">
                          <td className="px-6 py-4 font-bold text-navy-primary italic font-sans font-sans">{row.grade}</td>
                          <td className="px-6 py-4 text-slate-600 text-sm font-sans font-sans font-sans">{row.maxTemp}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-navy-primary mb-12 flex items-center tracking-tight font-sans uppercase font-sans font-sans font-sans">
                  <Settings className="mr-3 text-gold-primary font-sans font-sans font-sans font-sans" /> Engineering Standards
                </h2>
                <div className="space-y-4 font-sans font-sans font-sans font-sans">
                  {dimensionalSpecs.map((row, i) => (
                    <div key={i} className="flex justify-between items-center p-5 bg-white border border-slate-200 rounded-xl hover:border-gold-primary/30 transition-all font-sans">
                      <span className="font-bold text-navy-primary text-xs uppercase tracking-widest font-sans font-sans font-sans">{row.property}</span>
                      <span className="text-slate-600 font-bold text-sm text-right font-sans font-sans font-sans font-sans">{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Market Expansion */}
        <section className="py-24 bg-slate-50 border-t border-slate-200 font-sans font-sans font-sans">
          <div className="container mx-auto px-4 font-sans font-sans font-sans">
            <h2 className="text-3xl font-serif italic text-navy-primary mb-16 text-center tracking-tight font-sans uppercase">Cross-Continental Distribution</h2>
            <div className="grid md:grid-cols-4 gap-8 font-sans font-sans font-sans">
              <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-200 font-sans font-sans">
                <h4 className="font-black text-navy-primary uppercase text-[10px] tracking-[0.2em] mb-4 font-sans font-sans">MUMBAI LOGISTICS</h4>
                <p className="text-xs text-slate-500 leading-relaxed font-sans font-sans font-sans">Rapid fulfillment of SS 304 and 316L square nuts across India's furniture and electronics manufacturing hubs.</p>
              </div>
              <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-200 font-sans font-sans font-sans font-sans">
                <h4 className="font-black text-navy-primary uppercase text-[10px] tracking-[0.2em] mb-4 font-sans font-sans font-sans font-sans">GULF INFRASTRUCTURE</h4>
                <p className="text-xs text-slate-500 leading-relaxed font-sans font-sans font-sans font-sans font-sans font-sans">Supplying heavy-duty square fasteners for construction projects in Dubai, Doha, and Riyadh.</p>
              </div>
              <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-200 font-sans font-sans font-sans font-sans font-sans font-sans">
                <h4 className="font-black text-navy-primary uppercase text-[10px] tracking-[0.2em] mb-4 font-sans font-sans font-sans font-sans font-sans font-sans font-sans">EUROPEAN REACH</h4>
                <p className="text-xs text-slate-500 leading-relaxed font-sans font-sans font-sans font-sans font-sans font-sans">Compliance with DIN 557 standards for major industrial distributors in the UK, Germany, and France.</p>
              </div>
              <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-200 font-sans font-sans font-sans font-sans font-sans font-sans font-sans font-sans font-sans">
                <h4 className="font-black text-navy-primary uppercase text-[10px] tracking-[0.2em] mb-4 font-sans font-sans font-sans font-sans font-sans font-sans font-sans font-sans font-sans">AMERICAS SUPPLY</h4>
                <p className="text-xs text-slate-500 leading-relaxed font-sans font-sans font-sans font-sans font-sans font-sans font-sans font-sans">Direct shipping of ASME B18.2.2 square nuts to the US mechanical and civil engineering sectors.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-24 bg-navy-primary text-white font-sans font-sans font-sans font-sans">
          <div className="container mx-auto px-4 text-center font-sans font-sans font-sans font-sans">
            <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter uppercase font-sans font-sans font-sans font-sans">Request Technical Specifications</h2>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto font-light font-sans font-sans font-sans font-sans">Inquire about custom sizes, grades, and surface finishes for your industrial square nut requirements.</p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-12 font-sans font-sans font-sans font-sans font-sans font-sans font-sans">
              <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-16 py-6 rounded-3xl font-black text-xl transition-all shadow-3xl hover:scale-105 flex items-center group font-sans font-sans font-sans font-sans font-sans font-sans">
                Get Industrial Quote <ArrowRight className="ml-4 w-7 h-7 transform group-hover:translate-x-3 transition-transform font-sans" />
              </Link>
              <div className="text-left font-sans font-sans font-sans whitespace-nowrap">
                <p className="text-[10px] font-black text-gold-primary uppercase tracking-[0.4em] mb-1 font-sans">Engineering Support Line</p>
                <a href="tel:+919819322576" className="text-3xl font-bold text-white transition-colors hover:text-gold-primary font-sans font-sans font-sans font-sans font-sans font-sans">+91 9819322576</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
