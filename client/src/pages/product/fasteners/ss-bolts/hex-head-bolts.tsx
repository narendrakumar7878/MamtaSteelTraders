import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft, ArrowRight, CheckCircle, Shield, Info, TrendingUp, Award, Box, Key, Settings, Anchor } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function HexHeadBoltsDetail() {
  const materialSpecifications = [
    { grade: "SS 304", composition: "18% Cr, 8% Ni", properties: "Standard austenitic grade, excellent formability." },
    { grade: "SS 316L", composition: "18% Cr, 10% Ni, 2% Mo", properties: "Superior corrosion resistance, marine grade." },
    { grade: "Duplex 2205", composition: "22% Cr, 5% Ni, 3% Mo", properties: "High strength, chloride pitting resistance." },
    { grade: "SS 321", composition: "Stabilized with Ti", properties: "High temperature service up to 800°C." }
  ];

  const dimensionalSpecs = [
    { spec: "Standards", value: "DIN 933 (Full), DIN 931 (Partial), ISO 4017, ASME B18.2.1" },
    { spec: "Size Range", value: "M3 to M100 | 1/4\" to 4\"" },
    { spec: "Thread Pitch", value: "Metric Coarse, Fine, UNC, UNF, BSW" },
    { spec: "Surface Finish", value: "Passivated, Mirror Polish, PTFE, Hot Dip Galvanized" }
  ];

  return (
    <>
      <ProductSEO
        title="Stainless Steel Hex Head Bolts - SS 304, 316L, Duplex 2205 | global Supplier"
        description="Premium SS Hex Head Bolts Manufacturer. Grades SS 304, 316L, 321, Duplex 2205. DIN 933/931 Standards. Supplying to UAE, Saudi, Europe, USA, and Global Industrial projects."
        keywords="SS 304 hex bolts, SS 316L hex head bolts, stainless steel DIN 933 bolts, A2-70 hex bolts, A4-80 stainless bolts, duplex head bolts, Mumbai SS bolt manufacturer, UAE fastener supplier, Saudi oil gas fasteners, chemical resistant hex bolts"
        category="Stainless Steel Bolts"
        productName="Stainless Steel Hex Head Bolts"
        specifications={["SS 304/316L/321", "DIN 933/931", "A2-70 / A4-80", "M3 to M100"]}
        canonicalUrl="/product/fasteners/ss-bolts/hex-head-bolts"
      />

      <div className="min-h-screen bg-[#F8FAFC]">
        {/* Hero Section */}
        <section className="relative bg-navy-primary py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_#3b82f6_0%,_transparent_70%)]"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <Link href="/product/fasteners/ss-bolts">
              <button className="flex items-center text-blue-100 hover:text-gold-primary transition-colors mb-8 group">
                <ArrowLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
                Back to SS Bolts Hub
              </button>
            </Link>
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-block bg-gold-primary/20 text-gold-primary px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase mb-4 border border-gold-primary/30">
                  Industrial Fastening Excellence
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                  Stainless Steel <span className="text-gold-primary italic font-serif">Hex Head</span> Bolts
                </h1>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl">
                  Precision-engineered hexagon head bolts in high-performance austenitic and duplex stainless steel grades. Optimized for extreme corrosion resistance and structural longevity.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Technical Specification Grid */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8 mb-20">
              <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                  <Shield className="w-7 h-7 text-navy-primary" />
                </div>
                <h3 className="text-2xl font-bold text-navy-primary mb-4">Grade Versatility</h3>
                <ul className="space-y-4">
                  {["A2-70 (SS 304)", "A4-80 (SS 316L)", "A4-100 High-Strength", "B8 & B8M Class 2"].map((item, i) => (
                    <li key={i} className="flex items-center text-slate-700 font-medium">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-gold-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Settings className="w-7 h-7 text-gold-primary" />
                </div>
                <h3 className="text-2xl font-bold text-navy-primary mb-4">Precision Manufacturing</h3>
                <ul className="space-y-4">
                  {["Cold Forged M3-M24", "Hot Forged M27-M100", "Full & Partial Threads", "CNC Precision Finishing"].map((item, i) => (
                    <li key={i} className="flex items-center text-slate-700 font-medium">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-navy-primary p-10 rounded-3xl shadow-xl text-white">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 font-sans font-sans">
                  <Award className="w-7 h-7 text-gold-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-sans font-sans">Quality Assurance</h3>
                <p className="text-blue-100/80 mb-6 font-sans">100% material traceability with full certification.</p>
                <ul className="space-y-4">
                  {["EN 10204 3.1 MTC", "PMI Testing", "IGC Testing", "TPI Inspection Accepted"].map((item, i) => (
                    <li key={i} className="flex items-center text-sm font-bold font-sans">
                      <Zap className="w-4 h-4 text-gold-primary mr-3" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl font-bold text-navy-primary mb-8 flex items-center">
                  <Info className="mr-3 text-gold-primary" /> Material Comparison
                </h2>
                <div className="overflow-hidden rounded-2xl border border-slate-200">
                  <table className="w-full">
                    <thead className="bg-slate-50 border-b border-slate-200">
                      <tr>
                        <th className="px-6 py-4 text-left text-xs font-bold text-navy-primary uppercase tracking-wider">Grade</th>
                        <th className="px-6 py-4 text-left text-xs font-bold text-navy-primary uppercase tracking-wider">Properties</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {materialSpecifications.map((row, i) => (
                        <tr key={i} className="hover:bg-slate-50 transition-colors">
                          <td className="px-6 py-4 font-bold text-navy-primary">{row.grade}</td>
                          <td className="px-6 py-4 text-slate-600 text-sm">{row.properties}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-navy-primary mb-8 flex items-center">
                  <Settings className="mr-3 text-gold-primary" /> Dimensional Standards
                </h2>
                <div className="space-y-4">
                  {dimensionalSpecs.map((row, i) => (
                    <div key={i} className="flex justify-between items-center p-5 bg-white border border-slate-200 rounded-xl">
                      <span className="font-bold text-navy-primary">{row.spec}</span>
                      <span className="text-slate-600 font-medium text-sm text-right">{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Markets Section */}
        <section className="py-24 bg-slate-50 border-t border-slate-200">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif italic text-navy-primary mb-16 text-center">Global Supply Intelligence</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-200">
                <h4 className="font-black text-navy-primary uppercase text-[10px] tracking-[0.2em] mb-4">Middle East Clusters</h4>
                <p className="text-xs text-slate-500 leading-relaxed">Top-tier exports to Saudi (Jubail, Yanbu), UAE (Abu Dhabi), and Kuwait oil-gas infrastructures.</p>
              </div>
              <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-200">
                <h4 className="font-black text-navy-primary uppercase text-[10px] tracking-[0.2em] mb-4">European Reach</h4>
                <p className="text-xs text-slate-500 leading-relaxed">Conforming to EN standards for marine sectors in UK, Germany, and the Mediterranean.</p>
              </div>
              <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-200">
                <h4 className="font-black text-navy-primary uppercase text-[10px] tracking-[0.2em] mb-4">Pan-India Support</h4>
                <p className="text-xs text-slate-500 leading-relaxed">Serving Mumbai, Pune, Ahmedabad, and Chennai industrial zones with same-day logistics.</p>
              </div>
              <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-200">
                <h4 className="font-black text-navy-primary uppercase text-[10px] tracking-[0.2em] mb-4">Western Markets</h4>
                <p className="text-xs text-slate-500 leading-relaxed">Supplying ASME certified fasteners to Houston, TX, and Western Australian mining projects.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Technical CTA */}
        <section className="py-24 bg-navy-primary relative overflow-hidden">
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">Optimize Your Structural Stability</h2>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">Immediate technical support and price distribution for global projects.</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
              <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-12 py-5 rounded-2xl font-bold text-lg transition-all shadow-2xl flex items-center group">
                Request Global Quote <ArrowRight className="ml-3 w-6 h-6 transform group-hover:translate-x-2 transition-transform" />
              </Link>
              <div className="flex flex-col items-start">
                <span className="text-blue-300 text-[10px] font-black uppercase tracking-[0.3em] mb-1">Direct Engineering Support</span>
                <a href="tel:+919819322576" className="text-2xl font-bold text-white transition-colors hover:text-gold-primary">+91 9819322576</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
