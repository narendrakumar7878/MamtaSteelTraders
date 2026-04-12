import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft, ArrowRight, CheckCircle, Shield, Zap, Info, TrendingUp, Award, Download, Settings, Box, Cpu } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Grade109FastenersDetail() {
  const mechanicalProperties = [
    { property: "Tensile Strength (min)", value: "1000 MPa (1040 MPa for bolts < 16mm)" },
    { property: "Yield Strength (0.2% offset)", value: "900 MPa (940 MPa for bolts < 16mm)" },
    { property: "Ratio (Yield over Tensile)", value: "0.9" },
    { property: "Elongation (min)", value: "9%" },
    { property: "Hardness (Rockwell C)", value: "32 - 39 HRC" },
    { property: "Impact Strength (-20°C)", value: "27 J min" }
  ];

  const chemicalComposition = [
    { element: "Carbon (C)", value: "0.20 - 0.55%" },
    { element: "Manganese (Mn)", value: "min 0.30%" },
    { element: "Phosphorus (P)", value: "max 0.025%" },
    { element: "Sulfur (S)", value: "max 0.025%" },
    { element: "Chromium (Cr)", value: "min 0.30% (Alloy Steel)" },
    { element: "Boron (B)", value: "max 0.003% (Optional)" }
  ];

  const equivalentGrades = [
    { standard: "ASTM", grade: "A490 / F1224 (Similar)" },
    { standard: "DIN", grade: "DIN 267 Part 3 - 10.9" },
    { standard: "SAE", grade: "Grade 8" },
    { standard: "BS", grade: "Grade T / V" }
  ];

  return (
    <>
      <ProductSEO
        title="ISO 898-1 Property Class 10.9 Fasteners | High Strength Alloy Bolts"
        description="Premium Property Class 10.9 fasteners for heavy machinery and automotive applications. 1000 MPa tensile strength, quenched & tempered alloy steel. Global supplier to UAE, Saudi, Europe, Japan, USA."
        keywords="Property Class 10.9 bolts, 10.9 high tensile fasteners, 10.9 bolt specifications, 10.9 chemical composition, 10.9 mechanical properties, Grade 10.9 bolts Mumbai, heavy machinery fasteners 10.9, automotive 10.9 bolts, high strength alloy bolts price"
        category="High Tensile Fasteners"
        productName="ISO 898-1 Property Class 10.9 Fasteners"
        specifications={["ISO 898-1 Class 10.9", "Tensile: 1000 MPa", "Yield: 900 MPa", "Alloy Steel Q&T"]}
        canonicalUrl="/product/fasteners/high-tensile/10-9-fasteners"
      />

      <div className="min-h-screen bg-[#F8FAFC]">
        {/* Navigation & Hero Section */}
        <section className="relative bg-[#0F172A] py-20 overflow-hidden text-white">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500 to-transparent scale-150"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <Link href="/product/fasteners/high-tensile">
              <button className="flex items-center text-blue-200 hover:text-gold-primary transition-colors mb-8 group">
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
                <div className="inline-block bg-indigo-500/20 text-indigo-300 px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase mb-4 border border-indigo-500/30">
                  Heavy Machinery & Automotive Standard
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  Property Class <span className="text-indigo-400 font-serif italic">10.9</span> Fasteners
                </h1>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl font-sans">
                  The precision standard for high-performance engineering. Property Class 10.9 fasteners offer a minimum tensile strength of 1000 MPa, designed for high-stress applications.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-8 py-4 rounded-lg font-bold transition-all transform hover:scale-105 shadow-xl flex items-center">
                    Request 10.9 Tech Quote <Zap className="ml-2 w-5 h-5" />
                  </Link>
                  <button className="px-8 py-4 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-all backdrop-blur-sm flex items-center group font-sans">
                    Grade Datasheet <Download className="ml-2 w-5 h-5 text-gold-primary" />
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Technical Specification Grid */}
        <section className="py-20 font-sans">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8 mb-16 font-sans">
              {/* Properties Card */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200"
              >
                <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center mb-6">
                  <Cpu className="w-7 h-7 text-indigo-600 font-sans" />
                </div>
                <h3 className="text-xl font-bold text-navy-primary mb-4 font-sans uppercase text-sm tracking-wider">High Strength Density</h3>
                <p className="text-slate-600 leading-relaxed mb-6 font-sans">
                  With a 1000 MPa tensile rating, Class 10.9 fasteners are used when weight reduction and high load capacity are required in automotive or structural assemblies.
                </p>
                <ul className="space-y-3 font-sans">
                  {["1000 MPa Minimum Tensile", "Superior Fatigue Resistance", "Precisely Hardened Alloy Steel"].map((item, i) => (
                    <li key={i} className="flex items-center text-sm font-medium text-slate-700">
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
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                  <Settings className="w-7 h-7 text-navy-primary" />
                </div>
                <h3 className="text-xl font-bold text-navy-primary mb-4 font-sans uppercase text-sm tracking-wider">Engineering Precision</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Specified for critical joints in heavy goods vehicles, earth-moving machinery, and structural bridge bolting under high-vibration conditions.
                </p>
                <ul className="space-y-3 font-sans">
                  {["Vibration Resistant", "Consistent Proof Load", "High Torque Performance"].map((item, i) => (
                    <li key={i} className="flex items-center text-sm font-medium text-slate-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" /> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Quality Card */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 font-sans"
              >
                <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center mb-6 font-sans">
                  <Shield className="w-7 h-7 text-green-600 font-sans" />
                </div>
                <h3 className="text-xl font-bold text-navy-primary mb-4 font-sans uppercase text-sm tracking-wider">Quality Assurance</h3>
                <p className="text-slate-600 leading-relaxed mb-6 font-sans">
                  Mandatory quenching and tempering process ensures the ideal balance of high strength and sufficient ductility for safety-critical applications.
                </p>
                <ul className="space-y-3 font-sans font-sans">
                  {["Fully Traceable Heat Codes", "Impact Tested options", "Mill Test Certified 3.1"].map((item, i) => (
                    <li key={i} className="flex items-center text-sm font-medium text-slate-700 font-sans">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" /> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* In-depth Tables Section */}
            <div className="grid lg:grid-cols-2 gap-12 font-sans font-sans">
              <div className="space-y-8 font-sans font-sans font-sans">
                <div>
                  <h2 className="text-3xl font-bold text-navy-primary mb-6 flex items-center font-sans">
                    <TrendingUp className="mr-3 text-gold-primary font-sans font-sans font-sans" /> Mechanical Benchmarks
                  </h2>
                  <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm font-sans font-sans">
                    <table className="w-full text-left font-sans font-sans font-sans">
                      <thead className="bg-slate-50 border-b border-slate-200 font-sans font-sans">
                        <tr>
                          <th className="px-6 py-4 font-bold text-navy-primary uppercase text-xs tracking-wider font-sans font-sans font-sans">Spec Property</th>
                          <th className="px-6 py-4 font-bold text-navy-primary uppercase text-xs tracking-wider font-sans font-sans font-sans">Minimum Standard</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 font-sans font-sans">
                        {mechanicalProperties.map((row, i) => (
                          <tr key={i} className="hover:bg-slate-50/50 transition-colors font-sans">
                            <td className="px-6 py-4 font-semibold text-slate-700 font-sans font-sans">{row.property}</td>
                            <td className="px-6 py-4 text-slate-600 font-mono text-sm font-sans font-sans">{row.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-navy-primary mb-6 flex items-center font-sans">
                    <Info className="mr-3 text-gold-primary" /> Chemical Constitution
                  </h2>
                  <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm font-sans">
                    <table className="w-full text-left font-sans font-sans">
                      <thead className="bg-slate-50 border-b border-slate-200 font-sans font-sans">
                        <tr>
                          <th className="px-6 py-4 font-bold text-navy-primary uppercase text-xs tracking-wider font-sans">Element</th>
                          <th className="px-6 py-4 font-bold text-navy-primary uppercase text-xs tracking-wider font-sans">Specification Range (%)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 font-sans">
                        {chemicalComposition.map((row, i) => (
                          <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                            <td className="px-6 py-4 font-semibold text-slate-700">{row.element}</td>
                            <td className="px-6 py-4 text-slate-600 font-mono text-sm font-sans font-sans">{row.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="space-y-8 font-sans font-sans">
                <div className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] p-8 rounded-3xl text-white shadow-2xl relative overflow-hidden font-sans">
                  <div className="absolute top-0 right-0 p-8 opacity-10">
                    <Cpu className="w-32 h-32" />
                  </div>
                  <h3 className="text-2xl font-bold mb-6 font-sans">Industrial Use Cases</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      "Engine & Transmission Bolts",
                      "Heavy Earthmoving Equipment",
                      "Agricultural Machinery",
                      "Bridge Structural Bolting",
                      "Railway Infrastructure",
                      "Wind Turbine Towers",
                      "Pulp and Paper Industry",
                      "Mining Conveyors"
                    ].map((app, i) => (
                      <div key={i} className="flex items-center space-x-3 bg-white/5 p-3 rounded-lg backdrop-blur-sm">
                        <Star className="w-4 h-4 text-gold-primary shrink-0" />
                        <span className="text-sm font-medium">{app}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-navy-primary mb-6">Standard Cross-References</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {equivalentGrades.map((eq, i) => (
                      <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center font-sans font-sans">
                        <div className="text-xs font-bold text-gold-primary uppercase tracking-widest mb-2 font-sans font-sans">{eq.standard}</div>
                        <div className="text-lg font-bold text-navy-primary font-sans font-sans">{eq.grade}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-indigo-50 border border-indigo-100 p-8 rounded-3xl font-sans font-sans">
                  <h3 className="text-xl font-bold text-navy-primary mb-4 flex items-center font-sans">
                    <Info className="w-6 h-6 mr-2 text-indigo-600 font-sans font-sans" /> Procurement Insight
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed italic font-sans font-sans">
                    "Consistent high strength and precision threading make Class 10.9 the preferred choice for automotive engine assemblies and dynamic load-bearing machinery frames. Always verify tightening torque values for 10.9 installation."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global SEO Footer Section */}
        <section className="bg-white py-16 border-t border-slate-200 font-sans font-sans">
          <div className="container mx-auto px-4 text-center font-sans">
            <h2 className="text-2xl font-bold text-navy-primary mb-10 tracking-widest uppercase font-serif font-sans font-sans">World Class Precision Engineering Supply</h2>
            <div className="grid md:grid-cols-4 gap-8 text-left font-sans">
              <div className="bg-[#F1F5F9] p-6 rounded-xl border border-slate-200 font-sans font-sans">
                <h4 className="font-bold text-navy-primary uppercase text-xs mb-2 tracking-widest font-sans font-sans font-sans">GCC Distribution</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 font-medium font-sans">Supplying heavy construction machinery sectors in Dubai (UAE), Riyadh (Saudi Arabia), and infrastructure plants in Qatar and Kuwait.</p>
              </div>
              <div className="bg-[#F1F5F9] p-6 rounded-xl border border-slate-200 font-sans">
                <h4 className="font-bold text-navy-primary uppercase text-xs mb-2 tracking-widest font-sans font-sans">Pan-India Support</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 font-medium font-sans font-sans">Direct logistical presence in Mumbai, Pune, Chennai, and Delhi industrial clusters for Tier 1 automotive suppliers.</p>
              </div>
              <div className="bg-[#F1F5F9] p-6 rounded-xl border border-slate-200 font-sans">
                <h4 className="font-bold text-navy-primary uppercase text-xs mb-2 tracking-widest font-sans">Technical Standards</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 font-medium font-sans font-sans">Compliance with ISO 898-1 and IATF 16949 quality management systems for global automotive engineering standards.</p>
              </div>
              <div className="bg-[#F1F5F9] p-6 rounded-xl border border-slate-200 font-sans font-sans">
                <h4 className="font-bold text-navy-primary uppercase text-xs mb-2 tracking-widest font-sans font-sans">Global Reach</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 font-medium font-sans font-sans">Exporting high-tensile 10.9 bolting to USA, Japan, and European manufacturing regions for critical engineering assemblies.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-navy-primary relative overflow-hidden font-sans font-sans">
          <div className="container mx-auto px-4 text-center relative z-10 font-sans font-sans">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 font-sans">Need High Performance 10.9 Fasteners?</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto font-sans">Our technical engineers provide torque consultation and material specification support for your most demanding projects.</p>
            <Link href="/contact" className="inline-flex bg-gold-primary hover:bg-gold-secondary text-navy-primary px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-2xl items-center group font-sans">
              Request 10.9 Project Pricing <ArrowRight className="ml-3 w-6 h-6 transform group-hover:translate-x-2 transition-transform font-sans" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

const Star = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);
