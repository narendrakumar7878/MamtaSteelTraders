import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft, ArrowRight, CheckCircle, Shield, Zap, Info, TrendingUp, Award, Download, Thermometer, Box } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function B7BoltsDetail() {
  const chemicalComposition = [
    { element: "Carbon (C)", value: "0.37 - 0.49%" },
    { element: "Manganese (Mn)", value: "0.65 - 1.10%" },
    { element: "Phosphorus (P)", value: "max 0.035%" },
    { element: "Sulfur (S)", value: "max 0.040%" },
    { element: "Silicon (Si)", value: "0.15 - 0.35%" },
    { element: "Chromium (Cr)", value: "0.75 - 1.20%" },
    { element: "Molybdenum (Mo)", value: "0.15 - 0.25%" }
  ];

  const mechanicalProperties = [
    { property: "Tensile Strength (min)", value: "125 ksi (860 MPa)" },
    { property: "Yield Strength (min)", value: "105 ksi (720 MPa)" },
    { property: "Elongation in 2\"", value: "16% min" },
    { property: "Reduction of Area", value: "50% min" },
    { property: "Hardness (HRC)", value: "26 - 36" }
  ];

  const equivalentGrades = [
    { standard: "AISI", grade: "4140 / 4142" },
    { standard: "DIN", grade: "1.7225 / 42CrMo4" },
    { standard: "ISO", grade: "Class 10.9 (Similar)" },
    { standard: "JIS", grade: "SCM 440" }
  ];

  return (
    <>
      <ProductSEO
        title="ASTM A193 Grade B7 Bolts | High Tensile Fastener Specifications"
        description="Premium ASTM A193 Grade B7 bolts for high pressure and temperature service. Technical specs: 125 ksi tensile strength, quenched & tempered chromium-molybdenum steel. Global supplier in India, UAE, USA, Japan."
        keywords="ASTM A193 B7 bolts, B7 stud bolts, high tensile B7 fasteners, B7 bolt chemical composition, B7 bolt mechanical properties, chromium-molybdenum fasteners, high pressure service bolting, Mumbai B7 bolt supplier, B7 fasteners price India, ASTM A193 B7 specifications"
        category="High Tensile Fasteners"
        productName="ASTM A193 Grade B7 Bolts"
        specifications={["ASTM A193 Grade B7", "AISI 4140/4142", "Tensile: 860 MPa", "Hardness: 36 HRC Max"]}
        canonicalUrl="/product/fasteners/high-tensile/b7-bolts"
      />

      <div className="min-h-screen bg-[#F8FAFC]">
        {/* Navigation & Hero Section */}
        <section className="relative bg-navy-primary py-20 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-400 to-transparent scale-150"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <Link href="/product/fasteners/high-tensile">
              <button className="flex items-center text-blue-100 hover:text-gold-primary transition-colors mb-8 group">
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
                <div className="inline-block bg-gold-primary/20 text-gold-primary px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase mb-4 border border-gold-primary/30">
                  Industrial Grade Bolting
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  ASTM A193 <span className="text-gold-primary font-serif italic">Grade B7</span> Bolts
                </h1>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl">
                  The industry standard for high-strength, high-pressure industrial bolting. Engineered from quenched and tempered Chromium-Molybdenum alloy steel for critical structural integrity.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-8 py-4 rounded-lg font-bold transition-all transform hover:scale-105 shadow-xl flex items-center">
                    Request Technical Quote <Zap className="ml-2 w-5 h-5" />
                  </Link>
                  <button className="px-8 py-4 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-all backdrop-blur-sm flex items-center">
                    Download Specs <Download className="ml-2 w-5 h-5 text-gold-primary" />
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Technical Specification Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {/* Properties Card */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                  <Shield className="w-7 h-7 text-navy-primary" />
                </div>
                <h3 className="text-xl font-bold text-navy-primary mb-4">Structural Integrity</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  ASTM A193 B7 is primarily used for high-temperature and high-pressure service in pressure vessels, valves, flanges, and fittings.
                </p>
                <ul className="space-y-3">
                  {["Quenched & Tempered", "Minimum 125 ksi Tensile", "Superior Creep Resistance"].map((item, i) => (
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
                <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center mb-6">
                  <Thermometer className="w-7 h-7 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-navy-primary mb-4">Temp Resilience</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Operational temperatures range up to 450°C (840°F) for Grade B7, making it ideal for standard industrial steam and gas applications.
                </p>
                <ul className="space-y-3">
                  {["Max Temp: 840°F", "High-Carbon Efficiency", "Consistent Thermal Expansion"].map((item, i) => (
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
                <h3 className="text-xl font-bold text-navy-primary mb-4">Certified Quality</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Every batch of B7 fasteners is accompanied by a EN 10204 3.1 Mill Test Certificate ensuring full material traceability.
                </p>
                <ul className="space-y-3">
                  {["Full Traceability", "NACE MR0175 Compliant", "TPI Inspection Ready"].map((item, i) => (
                    <li key={i} className="flex items-center text-sm font-medium text-slate-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" /> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* In-depth Tables Section */}
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-navy-primary mb-6 flex items-center">
                    <Info className="mr-3 text-gold-primary" /> Chemical Composition
                  </h2>
                  <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                    <table className="w-full text-left">
                      <thead className="bg-slate-50 border-b border-slate-200">
                        <tr>
                          <th className="px-6 py-4 font-bold text-navy-primary uppercase text-xs tracking-wider">Element</th>
                          <th className="px-6 py-4 font-bold text-navy-primary uppercase text-xs tracking-wider">Content Range (%)</th>
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

                <div>
                  <h2 className="text-3xl font-bold text-navy-primary mb-6 flex items-center">
                    <TrendingUp className="mr-3 text-gold-primary" /> Mechanical Properties
                  </h2>
                  <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                    <table className="w-full text-left">
                      <thead className="bg-slate-50 border-b border-slate-200">
                        <tr>
                          <th className="px-6 py-4 font-bold text-navy-primary uppercase text-xs tracking-wider">Spec Property</th>
                          <th className="px-6 py-4 font-bold text-navy-primary uppercase text-xs tracking-wider">Minimum Value</th>
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

              <div className="space-y-8">
                <div className="bg-gradient-to-br from-navy-primary to-navy-secondary p-8 rounded-3xl text-white shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-10">
                    <Box className="w-32 h-32" />
                  </div>
                  <h3 className="text-2xl font-bold mb-6">Common Applications</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      "Petrochemical Processing",
                      "Pressure Vessel Service",
                      "Gas & Steam Turbines",
                      "Pipeline Flange Joints",
                      "Boiler and Fuel Piping",
                      "Wellhead Components",
                      "Aerospace Structures",
                      "Subsea Assemblies"
                    ].map((app, i) => (
                      <div key={i} className="flex items-center space-x-3 bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                        <Star className="w-4 h-4 text-gold-primary shrink-0" />
                        <span className="text-sm font-medium">{app}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-navy-primary mb-6">Equivalent Standards</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {equivalentGrades.map((eq, i) => (
                      <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
                        <div className="text-xs font-bold text-gold-primary uppercase tracking-widest mb-2">{eq.standard}</div>
                        <div className="text-lg font-bold text-navy-primary">{eq.grade}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gold-primary/5 border border-gold-primary/20 p-8 rounded-3xl">
                  <h3 className="text-xl font-bold text-navy-primary mb-4">Procurement Note</h3>
                  <p className="text-sm text-slate-700 leading-relaxed italic">
                    "ASTM A193 B7 is frequently paired with ASTM A194 Grade 2H heavy hex nuts for optimal mechanical compatibility and load distribution in pressure-retaining assemblies."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global SEO Footer Section */}
        <section className="bg-white py-16 border-t border-slate-200">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-navy-primary mb-10 text-center uppercase tracking-widest font-serif">Global Supply Excellence</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="bg-[#F1F5F9] p-6 rounded-xl border border-slate-200">
                <h4 className="font-bold text-navy-primary uppercase text-xs mb-2 tracking-widest">Asian Markets</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 font-medium leading-relaxed">Prime supplier to industrial hubs in Mumbai, Gujarat, UAE (Dubai/Abu Dhabi), Saudi Arabia (Jubail/Yanbu), and technological sectors in Japan and Korea.</p>
              </div>
              <div className="bg-[#F1F5F9] p-6 rounded-xl border border-slate-200">
                <h4 className="font-bold text-navy-primary uppercase text-xs mb-2 tracking-widest">European Markets</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 font-medium leading-relaxed">Conforms to EN 10269 specifications for pressure service. Direct export to UK, Germany, Italy, and Norway offshore sectors.</p>
              </div>
              <div className="bg-[#F1F5F9] p-6 rounded-xl border border-slate-200">
                <h4 className="font-bold text-navy-primary uppercase text-xs mb-2 tracking-widest">GCC Nations</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 font-medium leading-relaxed">Preferred grade for oil-field services across Kuwait, Qatar, Oman, and Bahrain. High resistance to H2S environments available.</p>
              </div>
              <div className="bg-[#F1F5F9] p-6 rounded-xl border border-slate-200">
                <h4 className="font-bold text-navy-primary uppercase text-xs mb-2 tracking-widest">America & Oceania</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 font-medium leading-relaxed">Supporting energy giants in USA (Houston/Gulf Coast), Canada, and Western Australian mining projects with ASME certified bolting.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-navy-primary relative overflow-hidden">
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Ready to Order ASTM A193 B7 Bolts?</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">Get expert technical consultation and instant pricing for your mission-critical fastener requirements.</p>
            <Link href="/contact" className="inline-flex bg-gold-primary hover:bg-gold-secondary text-navy-primary px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-2xl items-center group">
              Get Technical Quote <ArrowRight className="ml-3 w-6 h-6 transform group-hover:translate-x-2 transition-transform" />
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
