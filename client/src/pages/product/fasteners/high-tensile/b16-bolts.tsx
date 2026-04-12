import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft, ArrowRight, CheckCircle, Shield, Zap, Info, TrendingUp, Award, Download, Thermometer, Box } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function B16BoltsDetail() {
  const chemicalComposition = [
    { element: "Carbon (C)", value: "0.36 - 0.47%" },
    { element: "Manganese (Mn)", value: "0.45 - 0.70%" },
    { element: "Phosphorus (P)", value: "max 0.035%" },
    { element: "Sulfur (S)", value: "max 0.040%" },
    { element: "Silicon (Si)", value: "0.15 - 0.35%" },
    { element: "Chromium (Cr)", value: "0.80 - 1.15%" },
    { element: "Molybdenum (Mo)", value: "0.50 - 0.65%" },
    { element: "Vanadium (V)", value: "0.25 - 0.35%" }
  ];

  const mechanicalProperties = [
    { property: "Tensile Strength (min)", value: "125 ksi (860 MPa)" },
    { property: "Yield Strength (min)", value: "105 ksi (720 MPa)" },
    { property: "Elongation in 2\"", value: "18% min" },
    { property: "Reduction of Area", value: "50% min" },
    { property: "Hardness (max)", value: "35 HRC / 321 HBW" }
  ];

  const equivalentGrades = [
    { standard: "AISI", grade: "601 (Similar)" },
    { standard: "DIN", grade: "1.7711 / 40CrMoV4-6" },
    { standard: "BS", grade: "1506-621-B16" },
    { standard: "EN", grade: "X40CrMoV5-1" }
  ];

  return (
    <>
      <ProductSEO
        title="ASTM A193 Grade B16 Bolts | Ultra-High Temp Fastener Specifications"
        description="Technical specifications for ASTM A193 Grade B16 bolts. Chromium-Molybdenum-Vanadium alloy for ultra-high temperature service up to 1000°F (538°C). Global exporter for steam turbines and boilers."
        keywords="ASTM A193 B16 bolts, B16 stud bolts, B16 chemical composition, B16 mechanical properties, vanadium alloy fasteners, steam turbine bolting, high temperature creep resistance, Mumbai B16 bolt supplier, B16 fasteners price, heat resistant bolting"
        category="High Tensile Fasteners"
        productName="ASTM A193 Grade B16 Bolts"
        specifications={["ASTM A193 Grade B16", "Vanadium Alloy", "Max Temp: 538°C", "Tensile: 860 MPa"]}
        canonicalUrl="/product/fasteners/high-tensile/b16-bolts"
      />

      <div className="min-h-screen bg-[#F8FAFC]">
        {/* Navigation & Hero Section */}
        <section className="relative bg-[#0F172A] py-20 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-orange-500 to-transparent scale-150"></div>
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
                <div className="inline-block bg-orange-600/20 text-orange-400 px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase mb-4 border border-orange-600/30">
                  Ultra-High Temperature Speciality
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  ASTM A193 <span className="text-orange-500 font-serif italic">Grade B16</span> Bolts
                </h1>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl">
                  Specifically engineered for power generation and steam service where temperatures exceed 450°C. The addition of Vanadium provides superior creep-rupture strength and thermal stability.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-8 py-4 rounded-lg font-bold transition-all transform hover:scale-105 shadow-xl flex items-center">
                    Request Technical Quote <Zap className="ml-2 w-5 h-5" />
                  </Link>
                  <button className="px-8 py-4 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-all backdrop-blur-sm flex items-center">
                    Technical Datasheet <Download className="ml-2 w-5 h-5 text-gold-primary" />
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
                <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6">
                  <Thermometer className="w-7 h-7 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-navy-primary mb-4">Creep Resistance</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Unlike standard B7, Grade B16 is alloyed with Vanadium to prevent thermal deformation and creep at temperatures up to 538°C (1000°F).
                </p>
                <ul className="space-y-3">
                  {["Vanadium Stabilized", "High Stress Relaxation Resistance", "Zero Creep Deformation"].map((item, i) => (
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
                <h3 className="text-xl font-bold text-navy-primary mb-4">Power Gen Specialist</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Primary choice for steam turbines, engine heads, and high-pressure boilers where cyclic thermal loading is common.
                </p>
                <ul className="space-y-3">
                  {["Steam Service Expert", "Cyclic Load Endurance", "High Ductility Range"].map((item, i) => (
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
                <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center mb-6">
                  <Shield className="w-7 h-7 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-navy-primary mb-4">Identification Marker</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  For safety on site, B16 stud bolts are often uniquely identified by their fluorescent green-painted tips to prevent accidental B7 substitution.
                </p>
                <ul className="space-y-3">
                  {["Visual Identification", "ASME SEC II Certified", "Zero Embrittlement"].map((item, i) => (
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
                    <Info className="mr-3 text-orange-500" /> Chemical Analysis
                  </h2>
                  <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                    <table className="w-full text-left">
                      <thead className="bg-slate-50 border-b border-slate-200">
                        <tr>
                          <th className="px-6 py-4 font-bold text-navy-primary uppercase text-xs tracking-wider">Element</th>
                          <th className="px-6 py-4 font-bold text-navy-primary uppercase text-xs tracking-wider">Mass Fraction (%)</th>
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
                    <TrendingUp className="mr-3 text-orange-500" /> Mechanical Metrics
                  </h2>
                  <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                    <table className="w-full text-left">
                      <thead className="bg-slate-50 border-b border-slate-200">
                        <tr>
                          <th className="px-6 py-4 font-bold text-navy-primary uppercase text-xs tracking-wider">Spec Property</th>
                          <th className="px-6 py-4 font-bold text-navy-primary uppercase text-xs tracking-wider">Min. Requirement</th>
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
                <div className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] p-8 rounded-3xl text-white shadow-2xl">
                  <h3 className="text-2xl font-bold mb-6">High-Temp Applications</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      "Steam Turbine Enclosures",
                      "Gas Turbine Manifolds",
                      "High Pressure Boilers",
                      "Nuclear Power Plants",
                      "Exhaust System Assemblies",
                      "Superheaters & Reheaters",
                      "Engine Cylinder Heads",
                      "Flare Systems"
                    ].map((app, i) => (
                      <div key={i} className="flex items-center space-x-3 bg-white/5 p-3 rounded-lg">
                        <Star className="w-4 h-4 text-orange-500 shrink-0" />
                        <span className="text-sm font-medium">{app}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-navy-primary mb-6">Global Equivalents</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {equivalentGrades.map((eq, i) => (
                      <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
                        <div className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-2">{eq.standard}</div>
                        <div className="text-lg font-bold text-navy-primary">{eq.grade}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-orange-50 border border-orange-200 p-8 rounded-3xl">
                  <h3 className="text-xl font-bold text-navy-primary mb-4 flex items-center">
                    <Award className="w-6 h-6 mr-2 text-orange-600" /> Procurement Note
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed italic">
                    "ASTM A193 B16 is specifically required when operating temperatures push into the 450°C - 538°C range where Grade B7 suffers from thermal degradation. Always verify the Green-Tip identification for B16 installation safety."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global SEO Footer Section */}
        <section className="bg-white py-16 border-t border-slate-200">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-navy-primary mb-10 uppercase tracking-widest font-serif">AEO Search Optimized Distribution</h2>
            <div className="grid md:grid-cols-4 gap-8 text-left">
              <div className="bg-[#F1F5F9] p-6 rounded-xl border border-slate-200">
                <h4 className="font-bold text-navy-primary uppercase text-xs mb-2 tracking-widest">Global Export</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 font-medium font-sans">Supplying critical energy infrastructure projects in Houston (USA), Yokohama (Japan), and industrial nodes across Hamburg (Germany).</p>
              </div>
              <div className="bg-[#F1F5F9] p-6 rounded-xl border border-slate-200">
                <h4 className="font-bold text-navy-primary uppercase text-xs mb-2 tracking-widest">GCC Projects</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 font-medium font-sans">Preferred high-temp bolting for Saudi Aramco, ADNOC, and KOC refinery shutdowns and turnarounds.</p>
              </div>
              <div className="bg-[#F1F5F9] p-6 rounded-xl border border-slate-200">
                <h4 className="font-bold text-navy-primary uppercase text-xs mb-2 tracking-widest">Pan-India Support</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 font-medium font-sans">Direct supply to power plants in Mundra, Talcher, Korba, and industrial hubs in Mumbai, Chennai, and Delhi.</p>
              </div>
              <div className="bg-[#F1F5F9] p-6 rounded-xl border border-slate-200">
                <h4 className="font-bold text-navy-primary uppercase text-xs mb-2 tracking-widest">Quality Standards</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 font-medium font-sans">Compliance with ASME BPVC SEC II, SA193, and international pressure vessel codes for maximum liability shield.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-[#0F172A] relative overflow-hidden">
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Secure Your High-Temp Operations</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">Contact our technical team for material comparisons between B7 and B16 and project-based pricing.</p>
            <Link href="/contact" className="inline-flex bg-orange-600 hover:bg-orange-700 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-2xl items-center group">
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
