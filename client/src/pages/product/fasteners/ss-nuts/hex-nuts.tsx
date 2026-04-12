import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft, ArrowRight, CheckCircle, Shield, Info, TrendingUp, Award, Download, Box, Key, Settings, Anchor } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function HexNutsDetail() {
  const materialSpecifications = [
    { grade: "SS 304", composition: "18% Cr, 8% Ni", properties: "General purpose, excellent rust resistance." },
    { grade: "SS 316L", composition: "18% Cr, 10% Ni, 2% Mo", properties: "Marine grade, superior chloride resistance." },
    { grade: "Duplex 2205", composition: "22% Cr, 5% Ni, 3% Mo", properties: "High mechanical strength, pitting resistant." },
    { grade: "SS 321", composition: "Ti Stabilized", properties: "Heat resistant up to 800°C." }
  ];

  const dimensionalSpecs = [
    { spec: "Standards", value: "DIN 934, ISO 4032, ASME B18.2.2, JIS B1181" },
    { spec: "Size Range", value: "M3 to M100 | 1/8\" to 4\"" },
    { spec: "Property Class", value: "A2-70, A4-80, A4-100" },
    { spec: "Thread Type", value: "Metric Coarse/Fine, UNC, UNF, BSW" }
  ];

  return (
    <>
      <ProductSEO
        title="Stainless Steel Hex Nuts - SS 316L, 304 DIN 934 ISO 4032 | Mumbai Manufacturer"
        description="Premium SS Hex Nuts Manufacturer. Grades SS 304, 316L, 321, Duplex 2205. DIN 934, ISO 4032 standards. Supplying to UAE, Saudi Arabia, Europe, and USA industrial sectors."
        keywords="SS 304 hex nuts, SS 316L nuts, stainless steel DIN 934 nuts, ISO 4032 SS nuts, A4-80 stainless nuts, marine grade hex nuts, Mumbai nuts supplier, UAE industrial fasteners, Saudi oil gas nuts"
        category="Stainless Steel Fasteners"
        productName="Stainless Steel Hex Nuts"
        specifications={["SS 304/316L/321", "DIN 934 / ISO 4032", "A2-70 / A4-80", "M3 to M100"]}
        canonicalUrl="/product/fasteners/ss-nuts/hex-nuts"
      />

      <div className="min-h-screen bg-[#F8FAFC]">
        {/* Navigation & Hero Section */}
        <section className="relative bg-navy-primary py-24 overflow-hidden border-b border-gold-primary/10">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_#3b82f6_0%,_transparent_70%)]"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <Link href="/product/fasteners/ss-nuts">
              <button className="inline-flex items-center text-gold-primary hover:text-white transition-colors mb-10 group bg-gold-primary/5 px-6 py-2 rounded-full border border-gold-primary/20 backdrop-blur-sm uppercase text-xs tracking-widest font-bold">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to SS Nuts Hub
              </button>
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 uppercase tracking-tight font-sans">
                Premium <span className="text-gold-primary italic font-serif">Hexagon</span> <br/>
                Engineering Nuts
              </h1>
              <p className="text-xl text-blue-100/70 mb-8 leading-relaxed max-w-2xl mx-auto font-light">
                High-precision metric and imperial hex nuts for mission-critical industrial assemblies. Optimized for chemical stability and structural load distribution in corrosive environments.
              </p>
            </motion.div>
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
                <h3 className="text-2xl font-bold text-navy-primary mb-4 font-sans">Grade Integrity</h3>
                <ul className="space-y-4">
                  {["A2-70 / 304 Standard", "A4-80 / 316L Marine", "A4-100 Extreme Strength", "Duplex & Super Duplex"].map((item, i) => (
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
                <h3 className="text-2xl font-bold text-navy-primary mb-4 font-sans">Metric & Imperial</h3>
                <ul className="space-y-4">
                  {["DIN 934 (Metric Coarse)", "DIN 936 (Metric Fine)", "UNC / UNF (American Fine)", "BSW (British Standard)"].map((item, i) => (
                    <li key={i} className="flex items-center text-slate-700 font-medium">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-navy-primary p-10 rounded-3xl shadow-xl text-white">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                  <Award className="w-7 h-7 text-gold-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-sans">Quality Assurance</h3>
                <p className="text-blue-100/80 mb-6 font-sans">Full material traceability with 3.1 Mill Test Certificates.</p>
                <ul className="space-y-4 font-sans">
                  {["PMI Testing Verified", "Hardness Testing", "Proof Load Verified", "TPI Witness Accepted"].map((item, i) => (
                    <li key={i} className="flex items-center text-sm font-bold">
                      <TrendingUp className="w-4 h-4 text-gold-primary mr-3" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl font-bold text-navy-primary mb-8 flex items-center tracking-tight font-sans">
                  <Info className="mr-3 text-gold-primary" /> Material Comparison
                </h2>
                <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
                  <table className="w-full font-sans">
                    <thead className="bg-slate-50 border-b border-slate-200">
                      <tr>
                        <th className="px-6 py-4 text-left text-xs font-bold text-navy-primary uppercase tracking-wider">Grade</th>
                        <th className="px-6 py-4 text-left text-xs font-bold text-navy-primary uppercase tracking-wider">Chemical/Props</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {materialSpecifications.map((row, i) => (
                        <tr key={i} className="hover:bg-slate-50 transition-colors">
                          <td className="px-6 py-4 font-bold text-navy-primary italic">{row.grade}</td>
                          <td className="px-6 py-4 text-slate-600 text-sm leading-snug">{row.properties}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-navy-primary mb-8 flex items-center tracking-tight font-sans">
                  <Settings className="mr-3 text-gold-primary" /> Technical Standards
                </h2>
                <div className="space-y-4 font-sans">
                  {dimensionalSpecs.map((row, i) => (
                    <div key={i} className="flex justify-between items-center p-5 bg-white border border-slate-200 rounded-xl hover:border-gold-primary/30 transition-colors">
                      <span className="font-bold text-navy-primary text-sm uppercase tracking-wide">{row.spec}</span>
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
          <div className="container mx-auto px-4 font-sans">
            <h2 className="text-3xl font-serif italic text-navy-primary mb-16 text-center tracking-tight font-sans uppercase">Global Procurement Channels</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-200">
                <h4 className="font-black text-navy-primary uppercase text-[10px] tracking-[0.2em] mb-4">Middle East Clusters</h4>
                <p className="text-xs text-slate-500 leading-relaxed">Serving oil refiners in Jubail High-Temp zones and gas infrastructure in Abu Dhabi with high-purity SS grades.</p>
              </div>
              <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-200">
                <h4 className="font-black text-navy-primary uppercase text-[10px] tracking-[0.2em] mb-4">European Reach</h4>
                <p className="text-xs text-slate-500 leading-relaxed">Full DIN standard compliance for European marine sectors, including Germany, Netherlands, and Mediterranean ports.</p>
              </div>
              <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-200">
                <h4 className="font-black text-navy-primary uppercase text-[10px] tracking-[0.2em] mb-4">Indian Markets</h4>
                <p className="text-xs text-slate-500 leading-relaxed">Prime supplier to Mumbai pharmaceutical hubs, Pune automotive clusters, and Smart City water infrastructures.</p>
              </div>
              <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-200">
                <h4 className="font-black text-navy-primary uppercase text-[10px] tracking-[0.2em] mb-4">Western Hemishphere</h4>
                <p className="text-xs text-slate-500 leading-relaxed">Supplying ASME certified stainless fasteners to Houston energy firms and Australian offshore mining operations.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-24 bg-navy-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tighter uppercase font-sans">Ready for Precision?</h2>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto font-light font-sans">Request an engineering data sheet or high-volume project quote from our technical desk.</p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-12 font-sans font-sans font-sans">
              <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-16 py-6 rounded-3xl font-black text-xl transition-all shadow-3xl hover:scale-105 flex items-center group font-sans font-sans">
                Get Global Quote <ArrowRight className="ml-4 w-7 h-7 transform group-hover:translate-x-3 transition-transform font-sans" />
              </Link>
              <div className="text-left font-sans font-sans font-sans whitespace-nowrap">
                <p className="text-[10px] font-black text-gold-primary uppercase tracking-[0.4em] mb-1 font-sans">Expert Engineering Line</p>
                <a href="tel:+919819322576" className="text-3xl font-bold text-white transition-colors hover:text-gold-primary font-sans font-sans">+91 9819322576</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
