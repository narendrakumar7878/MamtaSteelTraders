import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft, ArrowRight, CheckCircle, Shield, Zap, Info, TrendingUp, Award, Download, Box, Key } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Grade2HNutsDetail() {
  const mechanicalProperties = [
    { property: "Proof Load (Heavy Hex)", value: "175 ksi (1205 MPa)" },
    { property: "Hardness (Rockwell C)", value: "24 - 35 HRC" },
    { property: "Brinell Hardness", value: "248 - 327 HBW" },
    { property: "Heat Treatment", value: "Quenched & Tempered (nominal 1100°F)" },
    { property: "Thread Standard", value: "UNC Series / ASME B1.1" }
  ];

  const chemicalComposition = [
    { element: "Carbon (C)", value: "min 0.40%" },
    { element: "Manganese (Mn)", value: "max 1.00%" },
    { element: "Phosphorus (P)", value: "max 0.040%" },
    { element: "Sulfur (S)", value: "max 0.050%" },
    { element: "Silicon (Si)", value: "max 0.40%" }
  ];

  const equivalentGrades = [
    { standard: "ISO", grade: "Property Class 10 / 12 (Similar)" },
    { standard: "DIN", grade: "267 Part 4" },
    { standard: "EN", grade: "10269 (Bolting materials)" },
    { standard: "ASME", grade: "SA194 2H" }
  ];

  return (
    <>
      <ProductSEO
        title="ASTM A194 Grade 2H Heavy Hex Nuts | High Strength Fasteners"
        description="Specifications for ASTM A194 Grade 2H heavy hex nuts. High strength carbon steel, quenched and tempered. Ideal for high pressure and temperature bolting with B7 studs. Global supplier Mumbai, UAE, USA."
        keywords="ASTM A194 2H nuts, 2H heavy hex nuts, 2H nut specifications, 2H chemical composition, 2H mechanical properties, Grade 2H nuts Mumbai, high strength nuts B7, A194 2H proof load, heavy hex nuts price India"
        category="High Tensile Fasteners"
        productName="ASTM A194 Grade 2H Heavy Hex Nuts"
        specifications={["ASTM A194 Grade 2H", "Hardness: 24-35 HRC", "Quenched & Tempered", "Heavy Hex Pattern"]}
        canonicalUrl="/product/fasteners/high-tensile/2h-nuts"
      />

      <div className="min-h-screen bg-[#F8FAFC]">
        {/* Navigation & Hero Section */}
        <section className="relative bg-[#0F172A] py-20 overflow-hidden text-white font-sans">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gold-400 to-transparent scale-150"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10 font-sans">
            <Link href="/product/fasteners/high-tensile">
              <button className="flex items-center text-blue-200 hover:text-gold-primary transition-colors mb-8 group font-sans">
                <ArrowLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform font-sans" />
                Back to High Tensile Fasteners
              </button>
            </Link>
            <div className="max-w-4xl font-sans">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-block bg-gold-primary/20 text-gold-primary px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase mb-4 border border-gold-primary/30 font-sans">
                  High-Loading Structural Component
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight font-sans">
                  ASTM A194 <span className="text-gold-primary font-serif italic">Grade 2H</span> Heavy Hex Nuts
                </h1>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl font-sans">
                  The definitive high-strength nut specification for pressure vessel and piping service. Grade 2H nuts are quenched and tempered to ensure mandatory hardness for safety in high-stress industrial bolting.
                </p>
                <div className="flex flex-wrap gap-4 font-sans">
                  <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-8 py-4 rounded-lg font-bold transition-all transform hover:scale-105 shadow-xl flex items-center font-sans">
                    Request 2H Technical Quote <Zap className="ml-2 w-5 h-5 font-sans" />
                  </Link>
                  <button className="px-8 py-4 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-all backdrop-blur-sm flex items-center group font-sans">
                    Technical Specifications <Download className="ml-2 w-5 h-5 text-gold-primary font-sans" />
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
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 font-sans"
              >
                <div className="w-14 h-14 bg-gold-50 rounded-xl flex items-center justify-center mb-6 font-sans">
                  <Key className="w-7 h-7 text-gold-primary font-sans" />
                </div>
                <h3 className="text-xl font-bold text-navy-primary mb-4 font-sans uppercase text-sm tracking-widest font-sans">High Proof Loading</h3>
                <p className="text-slate-600 leading-relaxed mb-6 font-sans">
                  Designed to exceed the proof loads of Class 8.8 and B7 bolts, ensuring the nut remains the strongest point of the assembly during high-tension tightening.
                </p>
                <ul className="space-y-3 font-sans">
                  {["175 ksi Proof Load Rating", "Mandatory Hardness Testing", "Heavy Hex Optimized Design"].map((item, i) => (
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
                  <Shield className="w-7 h-7 text-navy-primary font-sans font-sans" />
                </div>
                <h3 className="text-xl font-bold text-navy-primary mb-4 font-sans uppercase text-sm tracking-widest font-sans">Universal Compatibility</h3>
                <p className="text-slate-600 leading-relaxed mb-6 font-sans">
                  The standard mating component for ASTM A193 Grade B7 stud bolts, providing consistent load distribution and high-temperature reliability.
                </p>
                <ul className="space-y-3 font-sans">
                  {["B7 / B16 / L7 Compatible", "UNC/UN Series Threading", "High-Carbon Integrity"].map((item, i) => (
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
                  <Award className="w-7 h-7 text-green-600 font-sans" />
                </div>
                <h3 className="text-xl font-bold text-navy-primary mb-4 font-sans uppercase text-sm tracking-widest font-sans">Certified Standards</h3>
                <p className="text-slate-600 leading-relaxed mb-6 font-sans">
                  Tested and certified per ASTM A194 requirements, including proof load tests and mandatory HRC hardness indentations per manufacturing lot.
                </p>
                <ul className="space-y-3 font-sans font-sans">
                  {["ASME SA194 Compliant", "TPI Inspection Ready", "Life-Cycle Traceable Codes"].map((item, i) => (
                    <li key={i} className="flex items-center text-sm font-medium text-slate-700 font-sans">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 font-sans" /> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* In-depth Tables Section */}
            <div className="grid lg:grid-cols-2 gap-12 font-sans">
              <div className="space-y-8 font-sans font-sans">
                <div>
                  <h2 className="text-3xl font-bold text-navy-primary mb-6 flex items-center font-sans tracking-tight">
                    <TrendingUp className="mr-3 text-gold-primary font-sans" /> Mechanical Integrity
                  </h2>
                  <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm font-sans">
                    <table className="w-full text-left font-sans font-sans">
                      <thead className="bg-slate-50 border-b border-slate-200 font-sans">
                        <tr>
                          <th className="px-6 py-4 font-bold text-navy-primary uppercase text-xs tracking-wider font-sans font-sans">Spec Property</th>
                          <th className="px-6 py-4 font-bold text-navy-primary uppercase text-xs tracking-wider font-sans font-sans">Value Requirement</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 font-sans">
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
                    <Info className="mr-3 text-gold-primary" /> Chemical Breakdown
                  </h2>
                  <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm font-sans">
                    <table className="w-full text-left font-sans font-sans font-sans">
                      <thead className="bg-slate-50 border-b border-slate-200 font-sans">
                        <tr>
                          <th className="px-6 py-4 font-bold text-navy-primary uppercase text-xs tracking-wider font-sans">Element</th>
                          <th className="px-6 py-4 font-bold text-navy-primary uppercase text-xs tracking-wider font-sans">Mass %</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 font-sans">
                        {chemicalComposition.map((row, i) => (
                          <tr key={i} className="hover:bg-slate-50/50 transition-colors font-sans">
                            <td className="px-6 py-4 font-semibold text-slate-700 font-sans">{row.element}</td>
                            <td className="px-6 py-4 text-slate-600 font-mono text-sm font-sans">{row.value}</td>
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
                    <Key className="w-32 h-32" />
                  </div>
                  <h3 className="text-2xl font-bold mb-6 font-sans">Critical Joint Use</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      "Petrochemical Flanges",
                      "Power Plant Boilers",
                      "Cryogenic Service L7",
                      "Subsea Wellhead Joints",
                      "Industrial Manifolds",
                      "Turbine Housing Bolting",
                      "Mining Structural Frames",
                      "Aerospace Fuel Piping"
                    ].map((app, i) => (
                      <div key={i} className="flex items-center space-x-3 bg-white/5 p-3 rounded-lg backdrop-blur-sm">
                        <Box className="w-4 h-4 text-gold-primary shrink-0" />
                        <span className="text-sm font-medium font-sans">{app}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-navy-primary mb-6">International Equivalents</h2>
                  <div className="grid grid-cols-2 gap-4 font-sans font-sans">
                    {equivalentGrades.map((eq, i) => (
                      <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
                        <div className="text-xs font-bold text-gold-primary uppercase tracking-widest mb-2 font-sans font-sans">{eq.standard}</div>
                        <div className="text-lg font-bold text-navy-primary font-sans font-sans font-sans">{eq.grade}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gold-50 border border-gold-primary/20 p-8 rounded-3xl font-sans">
                  <h3 className="text-xl font-bold text-navy-primary mb-4 flex items-center font-sans font-sans">
                    <Shield className="w-6 h-6 mr-2 text-gold-primary font-sans" /> Installation Insight
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed italic font-sans font-sans">
                    "ASTM A194 Grade 2H nuts must be installed with the lot identification markings facing outward. In high-vibration power generation service, they are often paired with Nord-Lock washers for maximum locking integrity."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global SEO Footer Section */}
        <section className="bg-white py-16 border-t border-slate-200 font-sans font-sans">
          <div className="container mx-auto px-4 text-center font-sans">
            <h2 className="text-2xl font-bold text-navy-primary mb-10 tracking-widest uppercase font-serif font-sans font-sans">Global High Strength Supply Integrity</h2>
            <div className="grid md:grid-cols-4 gap-8 text-left font-sans font-sans">
              <div className="bg-[#F1F5F9] p-6 rounded-xl border border-slate-200">
                <h4 className="font-bold text-navy-primary uppercase text-xs mb-2 tracking-widest font-sans font-sans">GCC Energy Hubs</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 font-medium font-sans">Strategic supplier to oil & gas projects in Iraq (Basra), UAE (Abu Dhabi), and petrochemical giants in Yanbu & Jubail (Saudi Arabia).</p>
              </div>
              <div className="bg-[#F1F5F9] p-6 rounded-xl border border-slate-200 font-sans">
                <h4 className="font-bold text-navy-primary uppercase text-xs mb-2 tracking-widest font-sans font-sans">European Industrial</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 font-medium font-sans font-sans font-sans">Meeting the stringent Pressure Equipment Directive (PED) requirements for specialized refineries in Spain, France, and Italy.</p>
              </div>
              <div className="bg-[#F1F5F9] p-6 rounded-xl border border-slate-200">
                <h4 className="font-bold text-navy-primary uppercase text-xs mb-2 tracking-widest">Pan-India Reach</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 font-medium font-sans leading-relaxed">Daily dispatches to major thermal power stations, fertilizers plants, and chemical clusters across Gujarat, Maharashtra, and Tamil Nadu.</p>
              </div>
              <div className="bg-[#F1F5F9] p-6 rounded-xl border border-slate-200 font-sans">
                <h4 className="font-bold text-navy-primary uppercase text-xs mb-2 tracking-widest font-sans font-sans">Global Export</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 font-medium font-sans font-sans font-sans">Supporting mining infrastructure in South Africa, Western Australia, and heavy industrial ports in the USA and Japan.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-navy-primary relative overflow-hidden font-sans font-sans">
          <div className="container mx-auto px-4 text-center relative z-10 font-sans">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 font-sans font-sans">Source Certified 2H Heavy Hex Nuts</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto font-sans font-sans">Ensure the safety of your high-pressure systems with fully traceable, impact-tested Grade 2H bolting solutions. Contact our sales desk now.</p>
            <Link href="/contact" className="inline-flex bg-gold-primary hover:bg-gold-secondary text-navy-primary px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-2xl items-center group font-sans">
              Request 2H Technical Quote <Zap className="ml-3 w-6 h-6 transform group-hover:scale-125 transition-transform font-sans" />
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
