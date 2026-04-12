import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft, ArrowRight, CheckCircle, Shield, Zap, Info, TrendingUp, Award, Download, Box, Snowflake } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function L7BoltsDetail() {
  const chemicalComposition = [
    { element: "Carbon (C)", value: "0.38 - 0.48%" },
    { element: "Manganese (Mn)", value: "0.75 - 1.00%" },
    { element: "Phosphorus (P)", value: "max 0.035%" },
    { element: "Sulfur (S)", value: "max 0.040%" },
    { element: "Silicon (Si)", value: "0.15 - 0.35%" },
    { element: "Chromium (Cr)", value: "0.80 - 1.10%" },
    { element: "Molybdenum (Mo)", value: "0.15 - 0.25%" }
  ];

  const mechanicalProperties = [
    { property: "Tensile Strength (min)", value: "125 ksi (860 MPa)" },
    { property: "Yield Strength (min)", value: "105 ksi (725 MPa)" },
    { property: "Elongation in 2\"", value: "16% min" },
    { property: "Reduction of Area", value: "50% min" },
    { property: "Impact Test (Charpy V-Notch)", value: "20 ft-lb @ -150°F (-101°C)" }
  ];

  const equivalentGrades = [
    { standard: "AISI", grade: "4140" },
    { standard: "DIN", grade: "1.7225 / 42CrMo4" },
    { standard: "ASTM", grade: "A193 B7 (Similar but without Low-Temp Impact)" },
    { standard: "ISO", grade: "Class 10.9 (Similar Room Temp Properties)" }
  ];

  return (
    <>
      <ProductSEO
        title="ASTM A320 Grade L7 Bolts | Low Temperature & Cryogenic Fasteners"
        description="Specifications for ASTM A320 Grade L7 bolts. High strength alloy steel designed for low-temperature service down to -150°F (-101°C). Mandatory Charpy impact tested. Global supplier for Oil & Gas and Arctic projects."
        keywords="ASTM A320 L7 bolts, L7 stud bolts, cryogenic fasteners, low temperature bolting, L7 chemical composition, L7 mechanical properties, Charpy V-notch impact testing, Mumbai L7 bolt supplier, L7 fasteners price India, Arctic grade fasteners"
        category="High Tensile Fasteners"
        productName="ASTM A320 Grade L7 Bolts"
        specifications={["ASTM A320 Grade L7", "Impact Tested: -101°C", "Tensile: 125 ksi", "AISI 4140 Base"]}
        canonicalUrl="/product/fasteners/high-tensile/l7-bolts"
      />

      <div className="min-h-screen bg-[#F8FAFC]">
        {/* Navigation & Hero Section */}
        <section className="relative bg-[#1E293B] py-20 overflow-hidden text-white">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-300 to-transparent scale-150"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <Link href="/product/fasteners/high-tensile">
              <button className="flex items-center text-blue-200 hover:text-gold-primary transition-colors mb-8 group font-sans">
                <ArrowLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
                Back to High Tensile Fasteners
              </button>
            </Link>
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-block bg-blue-500/20 text-blue-300 px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase mb-4 border border-blue-500/30">
                  Cryogenic & Low Temperature Specialist
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  ASTM A320 <span className="text-blue-400 font-serif italic font-sans font-sans">Grade L7</span> Bolts
                </h1>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl font-sans font-sans font-sans">
                  Engineered to prevent brittle failure in sub-zero environments. ASTM A320 L7 is the mandatory requirement for North Sea offshore, Arctic exploration, and cryogenic tank assemblies.
                </p>
                <div className="flex flex-wrap gap-4 font-sans font-sans">
                  <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-8 py-4 rounded-lg font-bold transition-all transform hover:scale-105 shadow-xl flex items-center">
                    Request Impact-Tested Quote <Zap className="ml-2 w-5 h-5" />
                  </Link>
                  <button className="px-8 py-4 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-all backdrop-blur-sm flex items-center">
                    View Impact Data <Download className="ml-2 w-5 h-5 text-gold-primary font-sans font-sans font-sans font-sans" />
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Technical Specification Grid */}
        <section className="py-20 font-sans font-sans font-sans">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {/* Properties Card */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                  <Snowflake className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-navy-primary mb-4">Brittle Failure Prevention</h3>
                <p className="text-slate-600 leading-relaxed mb-6 font-sans">
                  The primary advantage of Grade L7 is its toughness. It remains ductile at temperatures where standard alloy steels become dangerously brittle and prone to sudden fracture.
                </p>
                <ul className="space-y-3">
                  {["Mandatory Charpy Testing", "Service down to -101°C", "High Fracture Toughness"].map((item, i) => (
                    <li key={i} className="flex items-center text-sm font-medium text-slate-700 font-sans font-sans font-sans font-sans">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" /> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Service Card */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200"
              >
                <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center mb-6">
                  <Shield className="w-7 h-7 text-navy-primary" />
                </div>
                <h3 className="text-xl font-bold text-navy-primary mb-4">Material Base</h3>
                <p className="text-slate-600 leading-relaxed mb-6 font-sans">
                  Derived from medium carbon alloy steel (AISI 4140), specially heat treated (Quenching & Tempering) to meet rigorous impact energy requirements.
                </p>
                <ul className="space-y-3">
                  {["AISI 4140 Pedigree", "Controlled Heat Treatment", "Superior Mechanical Reserve"].map((item, i) => (
                    <li key={i} className="flex items-center text-sm font-medium text-slate-700 font-sans font-sans font-sans font-sans">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" /> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Quality Card */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200"
              >
                <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center mb-6">
                  <Award className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-navy-primary mb-4 font-sans font-sans">Regulatory Compliance</h3>
                <p className="text-slate-600 leading-relaxed mb-6 font-sans font-sans">
                  A320 L7 is frequently specified by ASME B31.3 for piping and ASME SEC VIII for pressure vessels operating in cold climates or cryogenic service.
                </p>
                <ul className="space-y-3">
                  {["Full Material Traceability", "Compliant w/ Norsok M-630", "Project Specific Testing"].map((item, i) => (
                    <li key={i} className="flex items-center text-sm font-medium text-slate-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" /> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* In-depth Tables Section */}
            <div className="grid lg:grid-cols-2 gap-12 font-sans font-sans">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-navy-primary mb-6 flex items-center font-sans font-sans font-sans font-sans">
                    <Info className="mr-3 text-blue-500" /> Chemical Specification
                  </h2>
                  <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                    <table className="w-full text-left font-sans font-sans">
                      <thead className="bg-slate-50 border-b border-slate-200 font-sans font-sans">
                        <tr>
                          <th className="px-6 py-4 font-bold text-navy-primary uppercase text-xs tracking-wider">Element</th>
                          <th className="px-6 py-4 font-bold text-navy-primary uppercase text-xs tracking-wider">Permitted Range (%)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 font-sans font-sans font-sans">
                        {chemicalComposition.map((row, i) => (
                          <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                            <td className="px-6 py-4 font-semibold text-slate-700">{row.element}</td>
                            <td className="px-6 py-4 text-slate-600 font-mono text-sm">{row.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-navy-primary mb-6 flex items-center">
                    <TrendingUp className="mr-3 text-blue-500" /> Mechanical Performance
                  </h2>
                  <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                    <table className="w-full text-left">
                      <thead className="bg-slate-50 border-b border-slate-200">
                        <tr>
                          <th className="px-6 py-4 font-bold text-navy-primary uppercase text-xs tracking-wider">Property</th>
                          <th className="px-6 py-4 font-bold text-navy-primary uppercase text-xs tracking-wider">Requirement</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {mechanicalProperties.map((row, i) => (
                          <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                            <td className="px-6 py-4 font-semibold text-slate-700">{row.property}</td>
                            <td className="px-6 py-4 text-slate-600 font-mono text-sm">{row.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="space-y-8 font-sans font-sans">
                <div className="bg-gradient-to-br from-blue-900 to-navy-primary p-8 rounded-3xl text-white shadow-2xl relative overflow-hidden font-sans font-sans">
                  <div className="absolute top-0 right-0 p-8 opacity-10">
                    <Snowflake className="w-32 h-32" />
                  </div>
                  <h3 className="text-2xl font-bold mb-6 font-sans font-sans font-sans">Low-Temp Applications</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      "Cryogenic PNG/LNG Plants",
                      "North Sea Platforms",
                      "Subsea Valves & Heads",
                      "Arctic Structural Joints",
                      "Gas Compression Trains",
                      "Low-Temp Separators",
                      "Pipeline Filtration",
                      "Refrigeration Units"
                    ].map((app, i) => (
                      <div key={i} className="flex items-center space-x-3 bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                        <Box className="w-4 h-4 text-blue-400 shrink-0 font-sans font-sans font-sans" />
                        <span className="text-sm font-medium">{app}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-navy-primary mb-6">Comparison with B7</h2>
                  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm leading-relaxed text-slate-700 font-sans font-sans font-sans">
                    <p className="mb-4 font-sans font-sans">While B7 and L7 share similar chemical bases and tensile strengths, they differ significantly in testing requirements:</p>
                    <ul className="space-y-2 text-sm font-sans font-sans font-sans">
                      <li>• <strong>L7:</strong> Requires mandatory Charpy impact testing at low temperatures.</li>
                      <li>• <strong>B7:</strong> No mandatory impact testing, primarily for high-temp service.</li>
                      <li>• <strong>Interchangeability:</strong> L7 can often replace B7, but B7 CANNOT replace L7 in low-temp service.</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-100 p-8 rounded-3xl font-sans font-sans font-sans">
                  <h3 className="text-xl font-bold text-navy-primary mb-4 flex items-center font-sans font-sans">
                    <Info className="w-6 h-6 mr-2 text-blue-600 font-sans font-sans" /> Global Supply Hub
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed font-sans font-sans">
                    We supply ASTM A320 Grade L7 fasteners to cryogenic projects in Qatar, USA (Alaska), Norway (Stavanger), and cold-weather industrial hubs in India (North/High Altitude regions).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global SEO Footer Section */}
        <section className="bg-white py-16 border-t border-slate-200 font-sans font-sans">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-navy-primary mb-10 tracking-widest uppercase font-serif font-sans font-sans">Strategic Cold-Weather Logistics</h2>
            <div className="grid md:grid-cols-4 gap-8 text-left font-sans font-sans">
              <div className="bg-[#F1F5F9] p-6 rounded-xl border border-slate-200">
                <h4 className="font-bold text-navy-primary uppercase text-xs mb-2 tracking-widest font-sans font-sans">Arctic & N. Sea</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 font-medium font-sans font-sans">Direct logistical support for offshore drilling in Norway, UK, and Russia's Arctic exploration zones with fully certified L7 bolting.</p>
              </div>
              <div className="bg-[#F1F5F9] p-6 rounded-xl border border-slate-200 font-sans font-sans">
                <h4 className="font-bold text-navy-primary uppercase text-xs mb-2 tracking-widest">GCC Cryogenics</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 font-medium font-sans">Essential for LNG liquefaction terminals in Ras Laffan (Qatar) and Ruwais (UAE) where temperature stability is paramount.</p>
              </div>
              <div className="bg-[#F1F5F9] p-6 rounded-xl border border-slate-200 font-sans font-sans">
                <h4 className="font-bold text-navy-primary uppercase text-xs mb-2 tracking-widest">Indian Supply</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 font-medium font-sans">Trusted by Indian oil giants for refineries in cold regions and specialized air separation units across the country.</p>
              </div>
              <div className="bg-[#F1F5F9] p-6 rounded-xl border border-slate-200 font-sans font-sans font-sans">
                <h4 className="font-bold text-navy-primary uppercase text-xs mb-2 tracking-widest">Global Export</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 font-medium font-sans font-sans">Expedited air-freight available to USA, Japan, Korea, and Europe for critical plant shutdowns and emergency replacements.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-navy-primary relative overflow-hidden font-sans font-sans">
          <div className="container mx-auto px-4 text-center relative z-10 font-sans font-sans font-sans">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 font-sans font-sans">Order Impact-Tested L7 Bolts Today</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto font-sans font-sans font-sans">Our technical specialists are ready to guide you through the mandatory testing requirements for your low-temperature projects.</p>
            <Link href="/contact" className="inline-flex bg-gold-primary hover:bg-gold-secondary text-navy-primary px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-2xl items-center group font-sans font-sans font-sans">
              Request L7 Pricing <Zap className="ml-3 w-6 h-6 transform group-hover:scale-125 transition-transform font-sans font-sans font-sans font-sans" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
