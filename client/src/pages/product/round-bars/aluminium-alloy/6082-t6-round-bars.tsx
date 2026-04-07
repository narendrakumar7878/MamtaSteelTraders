import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, ArrowLeft, CheckCircle, FileText, Settings, Zap, Shield, Award, Star } from "lucide-react";
import { Link } from "wouter";

export default function Alu6082RoundBars() {
  const chemicalComposition = [
    { element: "Aluminium (Al)", min: "Remainder", max: "Remainder" },
    { element: "Silicon (Si)", min: "0.70", max: "1.30" },
    { element: "Magnesium (Mg)", min: "0.60", max: "1.20" },
    { element: "Manganese (Mn)", min: "0.40", max: "1.00" },
    { element: "Iron (Fe)", min: "—", max: "0.50" },
    { element: "Chromium (Cr)", min: "—", max: "0.25" },
    { element: "Zinc (Zn)", min: "—", max: "0.20" },
    { element: "Copper (Cu)", min: "—", max: "0.10" }
  ];

  const equivalentGrades = [
    { country: "W.Nr. / DIN", grade: "3.2315 / AlSi1MgMn" },
    { country: "USA / AISI / AA", grade: "6082 / A96082" },
    { country: "ISO", grade: "Al Si1MgMn" },
    { country: "Japan / JIS", grade: "A6082" },
    { country: "France / AFNOR", grade: "A-SGM0.7" }
  ];

  const applications = [
    "High-stress structural applications",
    "Transport industry frameworks",
    "Trusses, bridges, and cranes",
    "Ore skips and mining equipment",
    "Milk crates and beer barrels",
    "Military bridges and scaffolds",
    "Staircases and platform railings",
    "Machine components for heavy engineering"
  ];

  return (
    <>
      <ProductSEO
        title="6082 T6 Aluminium Round Bars - High Strength Structural | Mumbai Supplier | Mamta Steel Traders"
        description="Premium 6082 T6 aluminium round bars. The highest strength of the 6000 series with exceptional structural integrity. ASTM B211 certified. Expert industrial aluminum stockist in Mumbai."
        keywords="6082 t6 aluminium round bars, aluminum 6082 t6 rods price, structural aluminum 6082, 6082 t6 mechanical properties, 6000 series high strength aluminum, ASTM B221 6082, buy 6082 aluminum bars India"
        canonicalUrl="/product/round-bars/aluminium-alloy/6082-t6-round-bars"
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
              <span className="text-navy-primary dark:text-gold-primary font-medium">6082 T6 Round Bars</span>
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Aluminium 6082 T6 Round Bars
                <span className="block text-2xl text-gold-primary font-normal mt-2">Peak Strength for Structural Integrity</span>
              </h1>
              <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">As the highest strength alloy of the 6000 series, 6082 T6 is the primary choice for highly stressed structural applications in the transport and mining sectors.</p>
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
              <h2 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-4">Grade 6082 T6 – Material Overview</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                <strong>Aluminium 6082</strong> is a high-strength structural alloy. Often referred to as a "structural alloy," 6082 is typically used in highly stressed applications such as trusses, cranes, and bridges. The <strong>T6 temper</strong> indicates it has been solution heat-treated and artificially aged. It has replaced 6061 in many applications due to its higher strength (~310 MPa tensile) and superior corrosion resistance.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mt-6">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-gold-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Highest strength of the 6xxx series alloys</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-gold-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Excellent corrosion resistance to atmospheric attack</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-gold-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Outstanding weldability and brazing characteristics</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-gold-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Superior surface finish for structural aesthetic</span>
                </div>
              </div>
            </div>

            {/* Chemical Composition */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-12">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-6 flex items-center">
                <FileText className="w-6 h-6 mr-3 text-gold-primary" />
                Chemical Composition of Alu 6082 (%)
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
                  <p className="text-3xl font-bold text-gold-primary">6mm – 400mm</p>
                </div>
                <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-start text-base"><Shield className="w-5 h-5 text-navy-primary mr-2 flex-shrink-0" /><span>Certification: BS EN 755, ASTM B221, ISO 6361</span></li>
                  <li className="flex items-start text-base"><Shield className="w-5 h-5 text-navy-primary mr-2 flex-shrink-0" /><span>Conditions: T6, T651, T4, O (Annealed)</span></li>
                  <li className="flex items-start text-base"><Shield className="w-5 h-5 text-navy-primary mr-2 flex-shrink-0" /><span>Testing: Tensile Tested & PMI Certified for Structural Safety</span></li>
                </ul>
              </div>
            </div>

            {/* Applications */}
            <div className="bg-gradient-to-r from-navy-primary via-navy-secondary to-slate-800 rounded-xl p-8 text-white mb-12 shadow-xl">
              <h3 className="text-2xl font-bold mb-8 text-center flex items-center justify-center">
                <Zap className="w-6 h-6 mr-3 text-gold-primary" />
                Industry Applications: Alu 6082
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
                {["6082 t6 aluminum round bar supplier", "structural aluminum 6082 properties", "6082 vs 2014 aluminum", "aluminum 6082 rods price Mumbai", "DIN 3.2315 aluminum equivalent", "EN 755 aluminum specification", "buy 6082 bars Mumbai", "high strength 6xxx series aluminum"].map((kw, i) => (
                  <span key={i} className="px-4 py-2 bg-white dark:bg-gray-700 text-navy-primary dark:text-gray-200 rounded-full border border-gray-200 dark:border-gray-600 shadow-sm">{kw}</span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700">
              <h3 className="text-3xl font-bold text-slate-800 dark:text-gray-100 mb-2">Order Structural Grade Alu 6082</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">Specializing in structural aluminum solutions for construction and transport sectors. Dispatch ready for bulk orders.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-navy-primary hover:bg-navy-secondary text-white px-10 py-4 rounded-xl font-bold transition-all transform hover:scale-105 shadow-xl flex items-center justify-center">
                  <Mail className="w-5 h-5 mr-3" /> Get Detailed Quote
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


