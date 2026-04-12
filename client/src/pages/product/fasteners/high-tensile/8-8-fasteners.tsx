import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft, ArrowRight, CheckCircle, Shield, Zap, Info, TrendingUp, Award, Download, Settings, Box } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Grade88FastenersDetail() {
  const mechanicalProperties = [
    { property: "Tensile Strength (min)", value: "800 MPa (800 N/mm²)" },
    { property: "Yield Strength (0.2% offset)", value: "640 MPa (640 N/mm²)" },
    { property: "Ratio (Yield over Tensile)", value: "0.8" },
    { property: "Elongation (min)", value: "12%" },
    { property: "Hardness (Rockwell C)", value: "22 - 32 HRC" },
    { property: "Hardness (Vickers)", value: "250 - 320 HV" }
  ];

  const chemicalComposition = [
    { element: "Carbon (C)", value: "0.15 - 0.40%" },
    { element: "Manganese (Mn)", value: "max 0.70% (Carbon steel)" },
    { element: "Phosphorus (P)", value: "max 0.025%" },
    { element: "Sulfur (S)", value: "max 0.025%" },
    { element: "Boron (B)", value: "max 0.003% (For Boron steel)" }
  ];

  const equivalentGrades = [
    { standard: "ASTM", grade: "A325 / A449 (Similar)" },
    { standard: "DIN", grade: "DIN 267 Part 3" },
    { standard: "SAE", grade: "Grade 5" },
    { standard: "BS", grade: "Grade S" }
  ];

  return (
    <>
      <ProductSEO
        title="ISO 898-1 Property Class 8.8 Fasteners | High Tensile Bolt Specs"
        description="Technical specifications for Property Class 8.8 fasteners (High Tensile). 800 MPa tensile strength, medium carbon steel, quenched and tempered. Global supplier for construction and automotive industries."
        keywords="Property Class 8.8 bolts, 8.8 high tensile fasteners, 8.8 bolt specifications, 8.8 chemical composition, 8.8 mechanical properties, Grade 8.8 bolts Mumbai, structural 8.8 fasteners, automotive bolts 8.8, 8.8 carbon steel bolts price"
        category="High Tensile Fasteners"
        productName="ISO 898-1 Property Class 8.8 Fasteners"
        specifications={["ISO 898-1 Class 8.8", "Tensile: 800 MPa", "Yield: 640 MPa", "Quenched & Tempered"]}
        canonicalUrl="/product/fasteners/high-tensile/8-8-fasteners"
      />

      <div className="min-h-screen bg-[#F8FAFC]">
        {/* Navigation & Hero Section */}
        <section className="relative bg-[#1E293B] py-20 overflow-hidden text-white">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400 to-transparent scale-150"></div>
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
                <div className="inline-block bg-navy-primary/30 text-blue-300 px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase mb-4 border border-blue-500/30">
                  Universal High Tensile Grade
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  Property Class <span className="text-gold-primary font-serif italic">8.8</span> Fasteners
                </h1>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl font-sans">
                  The "Workhorse" of the high-tensile fastener world. Property Class 8.8 represents the most widely used high-strength carbon steel grade for structural, automotive, and general engineering.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-8 py-4 rounded-lg font-bold transition-all transform hover:scale-105 shadow-xl flex items-center">
                    Request 8.8 Tech Quote <Zap className="ml-2 w-5 h-5" />
                  </Link>
                  <button className="px-8 py-4 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-all backdrop-blur-sm flex items-center group font-sans">
                    Grade Specification <Download className="ml-2 w-5 h-5 text-gold-primary" />
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Technical Specification Grid */}
        <section className="py-20 font-sans">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {/* Properties Card */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200"
              >
                <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center mb-6">
                  <Settings className="w-7 h-7 text-navy-primary" />
                </div>
                <h3 className="text-xl font-bold text-navy-primary mb-4">Mechanical Balance</h3>
                <p className="text-slate-600 leading-relaxed mb-6 font-sans">
                  The "8.8" designation indicates a nominal tensile strength of 800 MPa and a yield-to-tensile ratio of 80%, offering ideal strength for non-critical structural joints.
                </p>
                <ul className="space-y-3 font-sans">
                  {["800 MPa Tensile Strength", "Quenched & Tempered", "Medium Carbon Steel Base"].map((item, i) => (
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
                  <Box className="w-7 h-7 text-navy-primary" />
                </div>
                <h3 className="text-xl font-bold text-navy-primary mb-4">Structural Versatility</h3>
                <p className="text-slate-600 leading-relaxed mb-6 font-sans">
                  A multi-industry standard used in construction, heavy goods vehicle (HGV) assembly, bridge building, and industrial machinery frameworks.
                </p>
                <ul className="space-y-3 font-sans">
                  {["Wide Grade Compatibility", "Reliable Ductility", "Consistent Proof Load"].map((item, i) => (
                    <li key={i} className="flex items-center text-sm font-medium text-slate-700">
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
                <h3 className="text-xl font-bold text-navy-primary mb-4 font-sans">Standard Compliance</h3>
                <p className="text-slate-600 leading-relaxed mb-6 font-sans">
                  Conforms strictly to ISO 898-1 dimensional and mechanical standards, ensuring perfect interoperability in global supply chains.
                </p>
                <ul className="space-y-3 font-sans">
                  {["ISO 898-1 Certified", "MTC 3.1 Traceability", "Batch Testing Guaranteed"].map((item, i) => (
                    <li key={i} className="flex items-center text-sm font-medium text-slate-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" /> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* In-depth Tables Section */}
            <div className="grid lg:grid-cols-2 gap-12 font-sans">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-navy-primary mb-6 flex items-center font-sans tracking-tight">
                    <TrendingUp className="mr-3 text-gold-primary font-sans" /> Mechanical Specifications
                  </h2>
                  <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm font-sans">
                    <table className="w-full text-left font-sans">
                      <thead className="bg-slate-50 border-b border-slate-200">
                        <tr>
                          <th className="px-6 py-4 font-bold text-navy-primary uppercase text-xs tracking-wider font-sans">Mechanical Property</th>
                          <th className="px-6 py-4 font-bold text-navy-primary uppercase text-xs tracking-wider font-sans">Minimum Value</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 font-sans">
                        {mechanicalProperties.map((row, i) => (
                          <tr key={i} className="hover:bg-slate-50/50 transition-colors font-sans">
                            <td className="px-6 py-4 font-semibold text-slate-700 font-sans">{row.property}</td>
                            <td className="px-6 py-4 text-slate-600 font-mono text-sm font-sans">{row.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-navy-primary mb-6 flex items-center font-sans">
                    <Info className="mr-3 text-gold-primary" /> Chemical Makeup
                  </h2>
                  <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                    <table className="w-full text-left">
                      <thead className="bg-slate-50 border-b border-slate-200">
                        <tr>
                          <th className="px-6 py-4 font-bold text-navy-primary uppercase text-xs tracking-wider">Element</th>
                          <th className="px-6 py-4 font-bold text-navy-primary uppercase text-xs tracking-wider">Tolerance Range (%)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
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
              </div>

              <div className="space-y-8 font-sans">
                <div className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] p-8 rounded-3xl text-white shadow-2xl relative overflow-hidden font-sans">
                  <div className="absolute top-0 right-0 p-8 opacity-10">
                    <Settings className="w-32 h-32" />
                  </div>
                  <h3 className="text-2xl font-bold mb-6 font-sans">Core Applications</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      "Standard Steel Framings",
                      "Automotive Assemblies",
                      "Industrial Shelving Units",
                      "Mechanical Fastenings",
                      "Lifting Equipment",
                      "Conveyor Systems",
                      "Building Cladding",
                      "General Manufacturing"
                    ].map((app, i) => (
                      <div key={i} className="flex items-center space-x-3 bg-white/5 p-3 rounded-lg backdrop-blur-sm">
                        <Star className="w-4 h-4 text-gold-primary shrink-0" />
                        <span className="text-sm font-medium">{app}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-navy-primary mb-6">Cross-Standard Equivalents</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {equivalentGrades.map((eq, i) => (
                      <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
                        <div className="text-xs font-bold text-gold-primary uppercase tracking-widest mb-2 font-sans">{eq.standard}</div>
                        <div className="text-lg font-bold text-navy-primary font-sans">{eq.grade}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white border-2 border-slate-100 p-8 rounded-3xl font-sans">
                  <h3 className="text-xl font-bold text-navy-primary mb-4 flex items-center font-sans">
                    <Shield className="w-6 h-6 mr-2 text-gold-primary" /> Technical Note
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed italic font-sans">
                    "Although Class 8.8 is the standard for high-strength bolting, it should not be substituted for Class 10.9 or 12.9 in critical joints where higher fatigue or tensile requirements are specified by the design engineer."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global SEO Footer Section */}
        <section className="bg-white py-16 border-t border-slate-200 font-sans">
          <div className="container mx-auto px-4 text-center font-sans">
            <h2 className="text-2xl font-bold text-navy-primary mb-10 tracking-widest uppercase font-serif font-sans">Global Industrial Support Network</h2>
            <div className="grid md:grid-cols-4 gap-8 text-left font-sans">
              <div className="bg-[#F1F5F9] p-6 rounded-xl border border-slate-200">
                <h4 className="font-bold text-navy-primary uppercase text-xs mb-2 tracking-widest">Asian Logistics</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 font-medium leading-relaxed font-sans">Dedicated supply chain supporting industrial growth in Mumbai, Gujarat, UAE (Sharjah/Dubai), Saudi Arabia, and Southeast Asian manufacturing hubs.</p>
              </div>
              <div className="bg-[#F1F5F9] p-6 rounded-xl border border-slate-200">
                <h4 className="font-bold text-navy-primary uppercase text-xs mb-2 tracking-widest">European Compliance</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 font-medium leading-relaxed font-sans font-sans">Fasteners conform to European CE marking requirements and EN 15048 structural bolting standards for the EU construction market.</p>
              </div>
              <div className="bg-[#F1F5F9] p-6 rounded-xl border border-slate-200 font-sans">
                <h4 className="font-bold text-navy-primary uppercase text-xs mb-2 tracking-widest">American Reach</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 font-medium leading-relaxed font-sans font-sans">Supporting heavy-duty vehicle manufacturers and agricultural machinery exporters across North America and Brazil.</p>
              </div>
              <div className="bg-[#F1F5F9] p-6 rounded-xl border border-slate-200 font-sans">
                <h4 className="font-bold text-navy-primary uppercase text-xs mb-2 tracking-widest font-sans">AEO Logistics</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 font-medium leading-relaxed font-sans font-sans">Priority shipping and logistical clearance available for high-volume 8.8 fastener orders worldwide via our Mumbai center.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-navy-primary relative overflow-hidden font-sans">
          <div className="container mx-auto px-4 text-center relative z-10 font-sans">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 font-sans">Source Reliable 8.8 Fasteners Today</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto font-sans">Bulk inventory ready for immediate shipment. Contact us for the latest price list and material certifications.</p>
            <Link href="/contact" className="inline-flex bg-gold-primary hover:bg-gold-secondary text-navy-primary px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-2xl items-center group font-sans">
              Request Price List <ArrowRight className="ml-3 w-6 h-6 transform group-hover:translate-x-2 transition-transform font-sans" />
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
