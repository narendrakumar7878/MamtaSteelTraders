import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft, ArrowRight, CheckCircle, Shield, Zap, Info, TrendingUp, Award, Download, Settings, Box, Activity } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Grade129FastenersDetail() {
  const mechanicalProperties = [
    { property: "Tensile Strength (min)", value: "1200 MPa (1220 MPa for bolts < 16mm)" },
    { property: "Yield Strength (0.2% offset)", value: "1080 MPa (1100 MPa for bolts < 16mm)" },
    { property: "Ratio (Yield over Tensile)", value: "0.9" },
    { property: "Elongation (min)", value: "8%" },
    { property: "Hardness (Rockwell C)", value: "39 - 44 HRC" },
    { property: "Vickers Hardness", value: "385 - 435 HV" }
  ];

  const chemicalComposition = [
    { element: "Carbon (C)", value: "0.33 - 0.48%" },
    { element: "Manganese (Mn)", value: "min 0.40%" },
    { element: "Phosphorus (P)", value: "max 0.025%" },
    { element: "Sulfur (S)", value: "max 0.025%" },
    { element: "Chromium (Cr)", value: "min 0.40%" },
    { element: "Molybdenum (Mo)", value: "min 0.20% (Typical Alloy)" }
  ];

  const equivalentGrades = [
    { standard: "ASTM", grade: "F568M Class 12.9" },
    { standard: "DIN", grade: "912 (Frequently as Class 12.9)" },
    { standard: "SAE", grade: "Grade 9 (Similar Strength)" },
    { standard: "JIS", grade: "Class 12.9" }
  ];

  return (
    <>
      <ProductSEO
        title="ISO 898-1 Property Class 12.9 Fasteners | Ultra-High Strength Bolts"
        description="Specifications for Property Class 12.9 fasteners. 1200 MPa tensile strength, ultra-high performance alloy steel. Ideal for precision engineering, aerospace, and critical mechanical systems. Global supplier."
        keywords="Property Class 12.9 bolts, 12.9 high tensile fasteners, 12.9 specifications, 12.9 chemical composition, 12.9 mechanical properties, Grade 12.9 bolts Mumbai, ultra high strength bolts, aerospace fasteners 12.9, 12.9 alloy bolts price"
        category="High Tensile Fasteners"
        productName="ISO 898-1 Property Class 12.9 Fasteners"
        specifications={["ISO 898-1 Class 12.9", "Tensile: 1200 MPa", "Yield: 1080 MPa", "Ultra-High Performance"]}
        canonicalUrl="/product/fasteners/high-tensile/12-9-fasteners"
      />

      <div className="min-h-screen bg-[#F8FAFC]">
        {/* Navigation & Hero Section */}
        <section className="relative bg-[#020617] py-20 overflow-hidden text-white">
          <div className="absolute inset-0 opacity-10 font-sans">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-500 to-transparent scale-150"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10 font-sans">
            <Link href="/product/fasteners/high-tensile">
              <button className="flex items-center text-red-200 hover:text-gold-primary transition-colors mb-8 group font-sans">
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
                <div className="inline-block bg-red-600/20 text-red-400 px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase mb-4 border border-red-600/30 font-sans">
                  Ultra-High Performance Engineering
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight font-sans">
                  Property Class <span className="text-red-500 font-serif italic">12.9</span> Fasteners
                </h1>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl font-sans font-sans font-sans">
                  The peak of mechanical strength in the ISO 898-1 system. Class 12.9 fasteners represent the maximum strength available for standard fastener applications, engineered for the most critical load-bearing assemblies.
                </p>
                <div className="flex flex-wrap gap-4 font-sans font-sans">
                  <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-8 py-4 rounded-lg font-bold transition-all transform hover:scale-105 shadow-xl flex items-center font-sans font-sans">
                    Request 12.9 Specs & Quote <Zap className="ml-2 w-5 h-5 font-sans font-sans" />
                  </Link>
                  <button className="px-8 py-4 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-all backdrop-blur-sm flex items-center group font-sans font-sans">
                    Ultra-High Strength Data <Download className="ml-2 w-5 h-5 text-gold-primary font-sans font-sans" />
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Technical Specification Grid */}
        <section className="py-20 font-sans font-sans">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8 mb-16 font-sans">
              {/* Properties Card */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200"
              >
                <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6">
                  <Activity className="w-7 h-7 text-red-600 font-sans" />
                </div>
                <h3 className="text-xl font-bold text-navy-primary mb-4 font-sans uppercase text-sm tracking-widest">Maximum Loading</h3>
                <p className="text-slate-600 leading-relaxed mb-6 font-sans">
                  Capable of withstanding a nominal tensile load of 1200 MPa, this grade is selected for critical industrial applications where space and weight are at a premium.
                </p>
                <ul className="space-y-3 font-sans">
                  {["1200 MPa Tensile Strength", "Extreme Fatigue Resistance", "Highest Hardness Rating"].map((item, i) => (
                    <li key={i} className="flex items-center text-sm font-medium text-slate-700 font-sans">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 font-sans" /> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Service Card */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 font-sans"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 font-sans">
                  <Settings className="w-7 h-7 text-navy-primary font-sans" />
                </div>
                <h3 className="text-xl font-bold text-navy-primary mb-4 font-sans uppercase text-sm tracking-widest font-sans">Precision Engineering</h3>
                <p className="text-slate-600 leading-relaxed mb-6 font-sans">
                  The primary choice for socket head cap screws (DIN 912) and ultra-high strength automotive engine and drivetrain components.
                </p>
                <ul className="space-y-3 font-sans">
                  {["Precision-Threaded Performance", "Highest Proof Load Reserve", "Zero Relaxation Design"].map((item, i) => (
                    <li key={i} className="flex items-center text-sm font-medium text-slate-700 font-sans">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 font-sans" /> {item}
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
                  <Shield className="w-7 h-7 text-green-600 font-sans font-sans" />
                </div>
                <h3 className="text-xl font-bold text-navy-primary mb-4 font-sans uppercase text-sm tracking-widest font-sans">Critical Security</h3>
                <p className="text-slate-600 leading-relaxed mb-6 font-sans">
                  Class 12.9 represents the absolute top-tier standard. Due to high hardness, these fasteners require specialized hydrogen embrittlement relief during manufacturing.
                </p>
                <ul className="space-y-3 font-sans font-sans font-sans font-sans">
                  {["Hydrogen Embrittlement Relief", "Zero-Defect Quality Control", "Aerospace-Ready Certification"].map((item, i) => (
                    <li key={i} className="flex items-center text-sm font-medium text-slate-700 font-sans">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 font-sans" /> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* In-depth Tables Section */}
            <div className="grid lg:grid-cols-2 gap-12 font-sans font-sans">
              <div className="space-y-8 font-sans font-sans font-sans">
                <div>
                  <h2 className="text-3xl font-bold text-navy-primary mb-6 flex items-center font-sans tracking-tight">
                    <TrendingUp className="mr-3 text-red-500 font-sans" /> Mechanical High-Marks
                  </h2>
                  <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm font-sans font-sans">
                    <table className="w-full text-left font-sans">
                      <thead className="bg-slate-50 border-b border-slate-200 font-sans">
                        <tr>
                          <th className="px-6 py-4 font-bold text-navy-primary uppercase text-xs tracking-wider font-sans">Property</th>
                          <th className="px-6 py-4 font-bold text-navy-primary uppercase text-xs tracking-wider font-sans">Value Requirement</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 font-sans font-sans">
                        {mechanicalProperties.map((row, i) => (
                          <tr key={i} className="hover:bg-slate-50/50 transition-colors font-sans">
                            <td className="px-6 py-4 font-semibold text-slate-700 font-sans">{row.property}</td>
                            <td className="px-6 py-4 text-slate-600 font-mono text-sm font-sans font-sans">{row.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-navy-primary mb-6 flex items-center font-sans">
                    <Info className="mr-3 text-red-500 font-sans font-sans" /> Alloy Composition
                  </h2>
                  <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm font-sans">
                    <table className="w-full text-left font-sans font-sans">
                      <thead className="bg-slate-50 border-b border-slate-200 font-sans">
                        <tr>
                          <th className="px-6 py-4 font-bold text-navy-primary uppercase text-xs tracking-wider">Element</th>
                          <th className="px-6 py-4 font-bold text-navy-primary uppercase text-xs tracking-wider">Target Range (%)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 font-sans font-sans">
                        {chemicalComposition.map((row, i) => (
                          <tr key={i} className="hover:bg-slate-50/50 transition-colors font-sans font-sans">
                            <td className="px-6 py-4 font-semibold text-slate-700 font-sans">{row.element}</td>
                            <td className="px-6 py-4 text-slate-600 font-mono text-sm font-sans font-sans">{row.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="space-y-8 font-sans font-sans">
                <div className="bg-gradient-to-br from-red-900 to-[#020617] p-8 rounded-3xl text-white shadow-2xl relative overflow-hidden font-sans font-sans font-sans">
                  <div className="absolute top-0 right-0 p-8 opacity-10">
                    <Activity className="w-32 h-32" />
                  </div>
                  <h3 className="text-2xl font-bold mb-6 font-sans">Critical Applications</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      "High Performance Engines",
                      "Industrial Robotics & CNC",
                      "Precision Mold Components",
                      "Aerospace Drivetrains",
                      "Heavy Mining Drill Heads",
                      "Oil-field Drilling Subs",
                      "F1 & Motorsport Engineering",
                      "Extreme Load Assemblies"
                    ].map((app, i) => (
                      <div key={i} className="flex items-center space-x-3 bg-white/5 p-3 rounded-lg backdrop-blur-sm">
                        <Box className="w-4 h-4 text-gold-primary shrink-0 font-sans font-sans" />
                        <span className="text-sm font-medium font-sans">{app}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-navy-primary mb-6 font-sans">Global Equivalents</h2>
                  <div className="grid grid-cols-2 gap-4 font-sans font-sans font-sans">
                    {equivalentGrades.map((eq, i) => (
                      <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
                        <div className="text-xs font-bold text-red-600 uppercase tracking-widest mb-2 font-sans font-sans">{eq.standard}</div>
                        <div className="text-lg font-bold text-navy-primary font-sans font-sans">{eq.grade}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-red-50 border border-red-100 p-8 rounded-3xl font-sans font-sans font-sans">
                  <h3 className="text-xl font-bold text-navy-primary mb-4 flex items-center font-sans font-sans">
                    <Info className="w-6 h-6 mr-2 text-red-600" /> Maintenance Shield
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed italic font-sans font-sans font-sans font-sans">
                    "Due to the high hardness of 12.9 fasteners, surface coatings like Zinc Plating must be applied with extreme caution regarding hydrogen embrittlement. We recommend specialized finishes or mechanical plating for safety."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global SEO Footer Section */}
        <section className="bg-white py-16 border-t border-slate-200 font-sans font-sans">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-navy-primary mb-10 tracking-widest uppercase font-serif font-sans font-sans font-sans">Global Ultra-High Strength Hub</h2>
            <div className="grid md:grid-cols-4 gap-8 text-left font-sans font-sans font-sans">
              <div className="bg-[#F1F5F9] p-6 rounded-xl border border-slate-200">
                <h4 className="font-bold text-navy-primary uppercase text-xs mb-2 tracking-widest">Global Aerospace</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 font-medium font-sans font-sans font-sans font-sans">Exporting certified 12.9 bolting to technological centers in Japan, Korea, and Germany for precision robotics and air-frame components.</p>
              </div>
              <div className="bg-[#F1F5F9] p-6 rounded-xl border border-slate-200">
                <h4 className="font-bold text-navy-primary uppercase text-xs mb-2 tracking-widest font-sans">Middle East Energy</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 font-medium font-sans">Supplying the most demanding high-tensile requirements for deepest-level drilling equipment in UAE, Oman, and Saudi Arabia.</p>
              </div>
              <div className="bg-[#F1F5F9] p-6 rounded-xl border border-slate-200">
                <h4 className="font-bold text-navy-primary uppercase text-xs mb-2 tracking-widest font-sans font-sans">Indian High-Tech</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 font-medium font-sans font-sans">Critical component support for CNC machinery manufacturers in Mumbai, Bangalore, and Pune with zero-defect 12.9 inventory.</p>
              </div>
              <div className="bg-[#F1F5F9] p-6 rounded-xl border border-slate-200">
                <h4 className="font-bold text-navy-primary uppercase text-xs mb-2 tracking-widest font-sans">Traceable Supply</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 font-medium font-sans font-sans font-sans">Every single 12.9 fastener is batch-numbered and carries a lifetime material traceability shield per international engineering protocols.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-navy-primary relative overflow-hidden font-sans font-sans font-sans">
          <div className="container mx-auto px-4 text-center relative z-10 font-sans font-sans">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 font-sans font-sans">Demand the Absolute Peak Performance</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto font-sans font-sans font-sans font-sans">Secure your critical assemblies with the worlds strongest standard fasteners. Contact our engineering desk for 12.9 project support.</p>
            <Link href="/contact" className="inline-flex bg-gold-primary hover:bg-gold-secondary text-navy-primary px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-2xl items-center group font-sans">
              Request 12.9 Technical Quote <Zap className="ml-3 w-6 h-6 transform group-hover:scale-125 transition-transform font-sans" />
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
