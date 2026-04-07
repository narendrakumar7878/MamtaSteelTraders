import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, ArrowLeft, CheckCircle, FileText, Settings, Zap, Shield, Award, Star } from "lucide-react";
import { Link } from "wouter";

export default function Alu6061RoundBars() {
  const chemicalComposition = [
    { element: "Aluminium (Al)", min: "Remainder", max: "Remainder" },
    { element: "Magnesium (Mg)", min: "0.80", max: "1.20" },
    { element: "Silicon (Si)", min: "0.40", max: "0.80" },
    { element: "Iron (Fe)", min: "—", max: "0.70" },
    { element: "Copper (Cu)", min: "0.15", max: "0.40" },
    { element: "Chromium (Cr)", min: "0.04", max: "0.35" },
    { element: "Zinc (Zn)", min: "—", max: "0.25" },
    { element: "Manganese (Mn)", min: "—", max: "0.15" }
  ];

  const equivalentGrades = [
    { country: "W.Nr. / DIN", grade: "3.3211 / AlMgSi1Cu" },
    { country: "USA / AISI / AA", grade: "6061 / A96061" },
    { country: "ISO", grade: "Al Mg1SiCu" },
    { country: "Japan / JIS", grade: "A6061" },
    { country: "France / AFNOR", grade: "A-GS" }
  ];

  const applications = [
    "Structural components (Bridges & Buildings)",
    "Marine fittings and equipment",
    "Automotive parts and engine components",
    "Pressure vessels and piping systems",
    "Electrical fittings and connectors",
    "Bicycle frames and sporting equipment",
    "Precision machinery and automation parts",
    "General engineering structural members"
  ];

  return (
    <>
      <ProductSEO
        title="6061 T6 Aluminium Round Bars - Most Versatile Alloy | Mumbai Supplier | Mamta Steel Traders"
        description="Premium 6061 T6 aluminium round bars. The most versatile aluminum alloy with excellent weldability and corrosion resistance. ASTM B211 certified. Reliable Mumbai supplier and exporter."
        keywords="6061 t6 aluminium round bars, aluminum 6061 t6 rods price, general purpose aluminum bars, 6061 t6 mechanical properties, aluminum stockist Mumbai, ASTM B221 6061, buy 6061 aluminum bars India"
        canonicalUrl="/product/round-bars/aluminium-alloy/6061-t6-round-bars"
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Breadcrumb Navigation */}
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex items-center space-x-2 text-sm flex-wrap gap-y-1">
              <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary transition-colors">Home</Link>
              <ArrowRight className="w-4 h-4 text-gray-400" />
              <Link href="/product/round-bars/round-bars" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary transition-colors">All Round Bars</Link>
              <ArrowRight className="w-4 h-4 text-gray-400" />
              <Link href="/product/round-bars/aluminium-alloy" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary transition-colors">Aluminium Alloy</Link>
              <ArrowRight className="w-4 h-4 text-gray-400" />
              <span className="text-navy-primary dark:text-gold-primary font-medium">6061 T6 Round Bars</span>
            </nav>
          </div>
        </div>

        {/* Back Link */}
        <div className="container mx-auto px-4 py-4">
          <Link href="/product/round-bars/aluminium-alloy" className="inline-flex items-center text-navy-primary dark:text-gold-primary hover:underline font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Aluminium Alloy
          </Link>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-br from-navy-primary via-navy-secondary to-slate-800 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="container mx-auto px-4 py-16 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Aluminium 6061 T6 Round Bars
                <span className="block text-2xl text-gold-primary font-normal mt-2">The Ultimate General-Purpose Structural Alloy</span>
              </h1>
              <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">Combining excellent weldability, corrosion resistance, and good strength, 6061 T6 is the industry's most versatile choice for all structural applications.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"><Mail className="w-5 h-5 mr-2" /> Get Quote</Link>
                <a href="tel:+919819322576" className="border-2 border-white hover:bg-white hover:text-navy-primary px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"><Phone className="w-5 h-5 mr-2" /> Call Expert</a>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-7xl mx-auto">
            {/* Overview */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-12">
              <h2 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-4">Grade 6061 T6 – Material Overview</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                <strong>Aluminium 6061</strong> is a precipitation-hardened aluminium alloy, containing magnesium and silicon as its major alloying elements. It is one of the most common alloys of aluminium for general-purpose use. The <strong>T6 temper</strong> indicates it has been solution heat-treated and artificially aged. It is noted for its high toughness, excellent corrosion resistance, and fair-to-good machinability.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mt-6">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-gold-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Excellent weldability and brazing characteristics</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-gold-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">High corrosion resistance toward seawater</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-gold-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">High tensile strength (~310 MPa)</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-gold-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Ideal for anodizing and surface finishing</span>
                </div>
              </div>
            </div>

            {/* Chemical Composition */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-12">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-6 flex items-center">
                <FileText className="w-6 h-6 mr-3 text-gold-primary" />
                Chemical Analysis of Alu 6061 (%)
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
                  <thead>
                    <tr className="bg-navy-primary text-white">
                      <th className="border border-gray-300 px-4 py-3 text-left">Element</th>
                      <th className="border border-gray-300 px-4 py-3 text-center">Min %</th>
                      <th className="border border-gray-300 px-4 py-3 text-center">Max %</th>
                    </tr>
                  </thead>
                  <tbody>
                    {chemicalComposition.map((c, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-gray-50 dark:bg-gray-700" : "bg-white dark:bg-gray-800"}>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-medium">{c.element}</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-center">{c.min}</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-center">{c.max}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Equivalents & Size Range */}
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-6 flex items-center">
                  <Award className="w-6 h-6 mr-3 text-gold-primary" />
                  International Standards
                </h3>
                <div className="space-y-3">
                  {equivalentGrades.map((g, i) => (
                    <div key={i} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-sm border border-gray-100 dark:border-gray-600">
                      <span className="font-medium text-gray-700 dark:text-gray-300">{g.country}</span>
                      <span className="text-navy-primary dark:text-gold-primary font-semibold">{g.grade}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-6 flex items-center">
                  <Settings className="w-6 h-6 mr-3 text-gold-primary" />
                  Supply Characteristics
                </h3>
                <div className="p-4 bg-gradient-to-r from-navy-primary to-navy-secondary text-white rounded-lg mb-6 text-center shadow-md">
                  <h4 className="font-bold text-lg mb-1">Standard Diameter Range</h4>
                  <p className="text-3xl font-bold text-gold-primary">6mm – 450mm</p>
                </div>
                <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-start text-base"><Shield className="w-5 h-5 text-navy-primary mr-2 flex-shrink-0" /><span>Certification: ASTM B211, ASTM B221, AMS 4117</span></li>
                  <li className="flex items-start text-base"><Shield className="w-5 h-5 text-navy-primary mr-2 flex-shrink-0" /><span>Tempers: T6, T651, T4, O (Annealed)</span></li>
                  <li className="flex items-start text-base"><Shield className="w-5 h-5 text-navy-primary mr-2 flex-shrink-0" /><span>Testing: Positive Material Identification (PMI) Certified</span></li>
                </ul>
              </div>
            </div>

            {/* Applications */}
            <div className="bg-gradient-to-r from-navy-primary via-navy-secondary to-slate-800 rounded-xl p-8 text-white mb-12 shadow-xl">
              <h3 className="text-2xl font-bold mb-8 text-center flex items-center justify-center">
                <Zap className="w-6 h-6 mr-3 text-gold-primary" />
                Industry Applications: Alu 6061
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {applications.map((a, i) => (
                  <div key={i} className="flex items-start bg-white/5 p-4 rounded-lg backdrop-blur-sm border border-white/10">
                    <CheckCircle className="w-5 h-5 text-gold-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-100">{a}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags for SEO/AEO */}
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-8 mb-12">
              <h3 className="text-xl font-bold text-slate-800 dark:text-gray-100 mb-6">People Also Search For</h3>
              <div className="flex flex-wrap gap-2 text-xs">
                {["6061 t6 aluminum round bar supplier", "versatile aluminum alloy 6061", "6061 t6 mechanical properties data", "aluminum 6061 rods price Mumbai", "6xxx series aluminum bars", "ASTM B211 6061 certified", "buy 6061 bars Mumbai", "6061 vs 6082 aluminum"].map((kw, i) => (
                  <span key={i} className="px-4 py-2 bg-white dark:bg-gray-700 text-navy-primary dark:text-gray-200 rounded-full border border-gray-200 dark:border-gray-600 shadow-sm">{kw}</span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700">
              <h3 className="text-3xl font-bold text-slate-800 dark:text-gray-100 mb-2">Request 6061 T6 Technical Quote</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">Stocking genuine Jindal & Hindalco 6061 bars. Export-ready packaging and worldwide logistics support.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-navy-primary hover:bg-navy-secondary text-white px-10 py-4 rounded-xl font-bold transition-all transform hover:scale-105 shadow-xl flex items-center justify-center">
                  <Mail className="w-5 h-5 mr-3" /> Get Detailed Pricing
                </Link>
                <a href="tel:+919819322576" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-10 py-4 rounded-xl font-bold transition-all transform hover:scale-105 shadow-xl flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-3" /> +91 98193 22576
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


