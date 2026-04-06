import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, ArrowLeft, CheckCircle, FileText, Settings, Zap, Shield, Award, Star } from "lucide-react";
import { Link } from "wouter";

export default function Alu5083RoundBars() {
  const chemicalComposition = [
    { element: "Aluminium (Al)", min: "Remainder", max: "Remainder" },
    { element: "Magnesium (Mg)", min: "4.00", max: "4.90" },
    { element: "Manganese (Mn)", min: "0.40", max: "1.00" },
    { element: "Chromium (Cr)", min: "0.05", max: "0.25" },
    { element: "Iron (Fe)", min: "—", max: "0.40" },
    { element: "Silicon (Si)", min: "—", max: "0.40" },
    { element: "Zinc (Zn)", min: "—", max: "0.10" },
    { element: "Titanium (Ti)", min: "—", max: "0.15" }
  ];

  const equivalentGrades = [
    { country: "W.Nr. / DIN", grade: "3.3547 / AlMg4.5Mn" },
    { country: "USA / AISI / AA", grade: "5083 / A95083" },
    { country: "ISO", grade: "Al Mg4.5Mn0.7" },
    { country: "Japan / JIS", grade: "A5083" },
    { country: "France / AFNOR", grade: "A-G4.5MC" }
  ];

  const applications = [
    "Shipbuilding hulls and marine structures",
    "Pressure vessels and cryogenic equipment",
    "Storage tanks for LPG and LNG",
    "Drilling rigs and offshore platforms",
    "Large vehicle frames and trailers",
    "Missile components and armor plating",
    "TV and Telecommunication towers",
    "Chemical processing equipment"
  ];

  return (
    <>
      <ProductSEO
        title="5083 H111 Aluminium Round Bars - Marine Grade | Mumbai Supplier | Mamta Steel Traders"
        description="Premium 5083 H111 marine grade aluminium round bars. Outstanding corrosion resistance in seawater and extreme cold. ASTM B211 certified. Expert marine aluminum supplier in Mumbai."
        keywords="5083 h111 aluminium round bars, 5083 marine grade aluminum, aluminum 5083 rods price, seawater resistant aluminum, 5083 h111 properties, aluminum stockist Mumbai, ASTM B221 5083, buy 5083 aluminum bars India"
        canonicalUrl="/product/round-bars/aluminium-alloy/5083-h111-round-bars"
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
              <span className="text-navy-primary dark:text-gold-primary font-medium">5083 H111 Round Bars</span>
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Aluminium 5083 H111 Round Bars
                <span className="block text-2xl text-gold-primary font-normal mt-2">Certified Marine Grade for Extreme Environments</span>
              </h1>
              <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">Engineered for exceptional corrosion resistance in seawater and superior performance at cryogenic temperatures down to -196°C.</p>
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
              <h2 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-4">Grade 5083 H111 – Material Overview</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                <strong>Aluminium 5083</strong> is a high-magnesium alloy known for its exceptional performance in extreme environments. It offers the highest strength of the non-heat treatable alloys and maintains excellent weldability. The <strong>H111 temper</strong> provides good ductility and strength, making it ideal for marine and cryogenic applications where durability is paramount.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mt-6">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-gold-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Outstanding corrosion resistance in seawater</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-gold-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Excellent weldability (Rating: A)</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-gold-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">High toughness at cryogenic temperatures</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-gold-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Superior dimensional stability</span>
                </div>
              </div>
            </div>

            {/* Chemical Composition */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-12">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-6 flex items-center">
                <FileText className="w-6 h-6 mr-3 text-gold-primary" />
                Chemical Analysis of Alu 5083 (%)
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
                  <p className="text-3xl font-bold text-gold-primary">8.00mm – 380mm</p>
                </div>
                <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-start text-base"><Shield className="w-5 h-5 text-navy-primary mr-2 flex-shrink-0" /><span>Certification: ASTM B221, EN 755, ISO 6361</span></li>
                  <li className="flex items-start text-base"><Shield className="w-5 h-5 text-navy-primary mr-2 flex-shrink-0" /><span>Tempers: H111, H112, H116, O (Annealed)</span></li>
                  <li className="flex items-start text-base"><Shield className="w-5 h-5 text-navy-primary mr-2 flex-shrink-0" /><span>Testing: Macro/Micro structural analysis certified</span></li>
                </ul>
              </div>
            </div>

            {/* Applications */}
            <div className="bg-gradient-to-r from-navy-primary via-navy-secondary to-slate-800 rounded-xl p-8 text-white mb-12 shadow-xl">
              <h3 className="text-2xl font-bold mb-8 text-center flex items-center justify-center">
                <Zap className="w-6 h-6 mr-3 text-gold-primary" />
                Industry Applications: Alu 5083
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
                {["5083 h111 aluminum round bar", "seawater resistant aluminum rods", "marine grade aluminum alloy 5083", "cryogenic aluminum bars stockist India", "5083 aluminum vs 6061", "EN 755 aluminum 5083", "buy 5083 bars Mumbai", "5083 h111 mechanical properties"].map((kw, i) => (
                  <span key={i} className="px-4 py-2 bg-white dark:bg-gray-700 text-navy-primary dark:text-gray-200 rounded-full border border-gray-200 dark:border-gray-600 shadow-sm">{kw}</span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700">
              <h3 className="text-3xl font-bold text-slate-800 dark:text-gray-100 mb-2">Order Marine Grade Alu 5083</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">Stocking genuine Jindal & Hindalco 5083 bars. Worldwide export and marine certification support.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-navy-primary hover:bg-navy-secondary text-white px-10 py-4 rounded-xl font-bold transition-all transform hover:scale-105 shadow-xl flex items-center justify-center">
                  <Mail className="w-5 h-5 mr-3" /> Get Official Quote
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
