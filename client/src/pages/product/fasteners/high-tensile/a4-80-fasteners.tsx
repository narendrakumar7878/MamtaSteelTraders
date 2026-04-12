import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft, ArrowRight, CheckCircle, Shield, Zap, Info, TrendingUp, Award, Download, Anchor, Box } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function GradeA480FastenersDetail() {
  const mechanicalProperties = [
    { property: "Tensile Strength (min)", value: "800 MPa (800 N/mm²)" },
    { property: "Yield Strength (0.2% offset)", value: "600 MPa (600 N/mm²)" },
    { property: "Elongation (min)", value: "0.3d (approx 12-15%)" },
    { property: "Designation", value: "A4-80 (Austenitic-316L, Cold Worked)" },
    { property: "PREN (Pitting Resistance)", value: "24.0 - 26.0" }
  ];

  const chemicalComposition = [
    { element: "Carbon (C)", value: "max 0.03% (Low Carbon)" },
    { element: "Manganese (Mn)", value: "max 2.0%" },
    { element: "Phosphorus (P)", value: "max 0.045%" },
    { element: "Sulfur (S)", value: "max 0.030%" },
    { element: "Silicon (Si)", value: "max 1.0%" },
    { element: "Chromium (Cr)", value: "16.0 - 18.0%" },
    { element: "Nickel (Ni)", value: "10.0 - 14.0%" },
    { element: "Molybdenum (Mo)", value: "2.0 - 3.0%" }
  ];

  const equivalentGrades = [
    { standard: "AISI", grade: "316L (High Tensile)" },
    { standard: "DIN", grade: "1.4404" },
    { standard: "ISO", grade: "3506-1 A4-80" },
    { standard: "AFNOR", grade: "Z3 CND 17-11-02" }
  ];

  return (
    <>
      <ProductSEO
        title="Stainless Steel A4-80 Fasteners | High Tensile 316L Bolts Specs"
        description="Technical specifications for A4-80 stainless steel fasteners. 800 MPa tensile strength, SS 316L base, superior marine corrosion resistance. Global supplier for offshore, chemical and food industries."
        keywords="A4-80 stainless steel bolts, A4-80 316L fasteners, high tensile stainless bolts, A4-80 specifications, A4-80 chemical composition, A4-80 mechanical properties, SS 316L bolts 800 MPa, marine grade high tensile fasteners, Mumbai A4-80 supplier"
        category="High Tensile Fasteners"
        productName="Stainless Steel A4-80 Fasteners"
        specifications={["ISO 3506 A4-80", "Tensile: 800 MPa", "Material: SS 316L", "Marine Grade"]}
        canonicalUrl="/product/fasteners/high-tensile/a4-80-fasteners"
      />

      <div className="min-h-screen bg-[#F8FAFC]">
        {/* Navigation & Hero Section */}
        <section className="relative bg-[#0F172A] py-20 overflow-hidden text-white font-sans font-sans">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-teal-400 to-transparent scale-150"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10 font-sans font-sans">
            <Link href="/product/fasteners/high-tensile">
              <button className="flex items-center text-teal-200 hover:text-gold-primary transition-colors mb-8 group font-sans">
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
                <div className="inline-block bg-teal-500/20 text-teal-300 px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase mb-4 border border-teal-500/30 font-sans">
                  Marine & Chemical Corrosion Specialist
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight font-sans">
                  Stainless Steel <span className="text-teal-400 font-serif italic">A4-80</span> Fasteners
                </h1>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl font-sans font-sans">
                  The ultimate combination of marine-grade corrosion resistance and high-tensile strength. Engineered from austenitic SS 316L and cold-worked to achieve 800 MPa tensile strength.
                </p>
                <div className="flex flex-wrap gap-4 font-sans font-sans">
                  <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-8 py-4 rounded-lg font-bold transition-all transform hover:scale-105 shadow-xl flex items-center font-sans">
                    Request Marine Grade Quote <Zap className="ml-2 w-5 h-5 font-sans font-sans" />
                  </Link>
                  <button className="px-8 py-4 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-all backdrop-blur-sm flex items-center group font-sans">
                    Material Data Sheet <Download className="ml-2 w-5 h-5 text-gold-primary font-sans" />
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
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 font-sans"
              >
                <div className="w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center mb-6 font-sans">
                  <Anchor className="w-7 h-7 text-teal-600 font-sans" />
                </div>
                <h3 className="text-xl font-bold text-navy-primary mb-4 font-sans uppercase text-sm tracking-widest font-sans font-sans">Saltwater Defense</h3>
                <p className="text-slate-600 leading-relaxed mb-6 font-sans">
                  Contains 2.0-3.0% Molybdenum, providing essential resistance to chloride-induced pitting and crevice corrosion in marine and costal environments.
                </p>
                <ul className="space-y-3 font-sans">
                  {["SS 316L Molybdenum Alloyed", "Excellent Pitting Resistance", "Non-Magnetic Performance"].map((item, i) => (
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
                  <TrendingUp className="w-7 h-7 text-navy-primary font-sans font-sans" />
                </div>
                <h3 className="text-xl font-bold text-navy-primary mb-4 font-sans uppercase text-sm tracking-widest font-sans">High Tensile Class</h3>
                <p className="text-slate-600 leading-relaxed mb-6 font-sans">
                  The "-80" designation signifies an 800 MPa tensile strength—twice that of standard A4-50—achieved through specialized cold-working processes.
                </p>
                <ul className="space-y-3 font-sans font-sans">
                  {["800 MPa Tensile Rating", "High Yield to Weight Ratio", "Cold-Worked Durability"].map((item, i) => (
                    <li key={i} className="flex items-center text-sm font-medium text-slate-700 font-sans">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 font-sans" /> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Quality Card */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200"
              >
                <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center mb-6 font-sans">
                  <Award className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-navy-primary mb-4 font-sans uppercase text-sm tracking-widest font-sans">Industrial Hygiene</h3>
                <p className="text-slate-600 leading-relaxed mb-6 font-sans">
                  Universally approved for food processing, pharmaceuticals, and surgical environments due to its easy-clean surface and inert nature.
                </p>
                <ul className="space-y-3 font-sans font-sans">
                  {["FDA Approved Grade", "Zero Contamination Risk", "Mirror-Finish Capable"].map((item, i) => (
                    <li key={i} className="flex items-center text-sm font-medium text-slate-700 font-sans font-sans">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" /> {item}
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
                    <TrendingUp className="mr-3 text-gold-primary font-sans font-sans" /> Mechanical Benchmarks
                  </h2>
                  <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm font-sans font-sans">
                    <table className="w-full text-left font-sans font-sans">
                      <thead className="bg-slate-50 border-b border-slate-200 font-sans">
                        <tr>
                          <th className="px-6 py-4 font-bold text-navy-primary uppercase text-xs tracking-wider font-sans font-sans font-sans">Property</th>
                          <th className="px-6 py-4 font-bold text-navy-primary uppercase text-xs tracking-wider font-sans font-sans font-sans">Min Value</th>
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
                  <h2 className="text-3xl font-bold text-navy-primary mb-6 flex items-center">
                    <Info className="mr-3 text-gold-primary" /> Chemical Analysis (316L)
                  </h2>
                  <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm font-sans">
                    <table className="w-full text-left font-sans font-sans">
                      <thead className="bg-slate-50 border-b border-slate-200 font-sans">
                        <tr>
                          <th className="px-6 py-4 font-bold text-navy-primary uppercase text-xs tracking-wider">Element</th>
                          <th className="px-6 py-4 font-bold text-navy-primary uppercase text-xs tracking-wider">Weight %</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 font-sans">
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
                <div className="bg-gradient-to-br from-teal-900 to-[#0F172A] p-8 rounded-3xl text-white shadow-2xl relative overflow-hidden font-sans">
                  <div className="absolute top-0 right-0 p-8 opacity-10">
                    <Anchor className="w-32 h-32" />
                  </div>
                  <h3 className="text-2xl font-bold mb-6 font-sans">Marine & Offshore Use</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      "Desalination Plants",
                      "Offshore Oil Rigs",
                      "Chemical Storage Tanks",
                      "Coastal Building Facades",
                      "Shipboard Equipment",
                      "Pharmaceutical Mixers",
                      "Food Processing Tools",
                      "Waste Water Facilities"
                    ].map((app, i) => (
                      <div key={i} className="flex items-center space-x-3 bg-white/5 p-3 rounded-lg backdrop-blur-sm">
                        <Box className="w-4 h-4 text-gold-primary shrink-0" />
                        <span className="text-sm font-medium">{app}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-navy-primary mb-6 font-sans">Standard Cross-References</h2>
                  <div className="grid grid-cols-2 gap-4 font-sans font-sans font-sans">
                    {equivalentGrades.map((eq, i) => (
                      <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
                        <div className="text-xs font-bold text-teal-600 uppercase tracking-widest mb-2 font-sans">{eq.standard}</div>
                        <div className="text-lg font-bold text-navy-primary font-sans">{eq.grade}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-teal-50 border border-teal-100 p-8 rounded-3xl font-sans">
                  <h3 className="text-xl font-bold text-navy-primary mb-4 flex items-center font-sans">
                    <Shield className="w-6 h-6 mr-2 text-teal-600" /> A2 vs A4 Insight
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed italic font-sans font-sans">
                    "A2-70 (304) is excellent for non-corrosive industrial use, but in any environment with saltwater exposure or chemical cleaners, A4-80 (316L) is the technical necessity to prevent catastrophic crevice failure."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global SEO Footer Section */}
        <section className="bg-white py-16 border-t border-slate-200 font-sans font-sans">
          <div className="container mx-auto px-4 text-center font-sans">
            <h2 className="text-2xl font-bold text-navy-primary mb-10 tracking-widest uppercase font-serif font-sans font-sans">Strategic Marine Supply Distribution</h2>
            <div className="grid md:grid-cols-4 gap-8 text-left font-sans font-sans">
              <div className="bg-[#F1F5F9] p-6 rounded-xl border border-slate-200">
                <h4 className="font-bold text-navy-primary uppercase text-xs mb-2 tracking-widest font-sans">Global Desalination</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 font-medium font-sans">Primary supplier for desalination bolting in Saudi Arabia, UAE (Jebel Ali), and major coastal infrastructure in India and Australia.</p>
              </div>
              <div className="bg-[#F1F5F9] p-6 rounded-xl border border-slate-200">
                <h4 className="font-bold text-navy-primary uppercase text-xs mb-2 tracking-widest font-sans">European Offshore</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 font-medium font-sans font-sans">Supplying certified A4-80 fasteners to wind-farms in the North Sea and naval shipyards in the UK and Germany.</p>
              </div>
              <div className="bg-[#F1F5F9] p-6 rounded-xl border border-slate-200">
                <h4 className="font-bold text-navy-primary uppercase text-xs mb-2 tracking-widest font-sans">Asian Industrial</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 font-medium leading-relaxed font-sans font-sans">Supporting the pharmaceutical hubs of Mumbai, Gujarat, and South Korea with food-grade high-tensile stainless steel.</p>
              </div>
              <div className="bg-[#F1F5F9] p-6 rounded-xl border border-slate-200 font-sans">
                <h4 className="font-bold text-navy-primary uppercase text-xs mb-2 tracking-widest font-sans">AEO Logistics</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 font-medium leading-relaxed font-sans font-sans">Same-day dispatch available for A4-80 stock lengths and standard diameters via our Mumbai international logistics center.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-[#0F172A] relative overflow-hidden font-sans">
          <div className="container mx-auto px-4 text-center relative z-10 font-sans">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 font-sans">Secure Your Marine Infrastructure</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto font-sans">Don't compromise on corrosion. Get the technical specs and instant quote for A4-80 high-tensile stainless bolting.</p>
            <Link href="/contact" className="inline-flex bg-gold-primary hover:bg-gold-secondary text-navy-primary px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-2xl items-center group font-sans">
              Request A4-80 Project Pricing <ArrowRight className="ml-3 w-6 h-6 transform group-hover:translate-x-2 transition-transform font-sans" />
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
