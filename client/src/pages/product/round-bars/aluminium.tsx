import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, ArrowLeft, CheckCircle, FileText, Settings, Zap, Shield, Award, Star } from "lucide-react";
import { Link } from "wouter";

export default function AluminiumMain() {
  const chemicalComposition = [
    { element: "Aluminium (Al)", min: "99.00", max: "99.99" },
    { element: "Iron (Fe)", min: "—", max: "0.40" },
    { element: "Silicon (Si)", min: "—", max: "0.25" },
    { element: "Copper (Cu)", min: "—", max: "0.05" },
    { element: "Manganese (Mn)", min: "—", max: "0.05" },
    { element: "Magnesium (Mg)", min: "—", max: "0.05" },
    { element: "Zinc (Zn)", min: "—", max: "0.05" },
    { element: "Titanium (Ti)", min: "—", max: "0.03" }
  ];

  const equivalentGrades = [
    { country: "W.Nr. / DIN", grade: "3.0255 / Al99.5" },
    { country: "USA / AISI / AA", grade: "1050 / 1100 / 1200" },
    { country: "ISO", grade: "Al 99.5" },
    { country: "Japan / JIS", grade: "A1050 / A1100" },
    { country: "India / IS", grade: "19500 / 19000" }
  ];

  const applications = [
    "Chemical and food processing equipment",
    "Giftware and decorative applications",
    "Reflectors and lighting fixtures",
    "Electrical conductors and busbars",
    "Packaging and pharmaceutical containers",
    "Air conditioning and refrigeration fins",
    "Architecture and construction panels",
    "Heat exchangers and laboratory equipment"
  ];

  return (
    <>
      <ProductSEO
        title="Pure Aluminium Round Bars - 1100, 1050, 1200 Grades | Mumbai Supplier | Mamta Steel Traders"
        description="Premium pure aluminium round bars (99% purity). Excellent corrosion resistance and electrical conductivity. Commercial and high-purity grades. Best prices in Mumbai with worldwide export."
        keywords="pure aluminium round bars, 1050 aluminum price, 1100 aluminum rods, 1200 aluminum bars Mumbai, commercial purity aluminum, aluminum 99.5 bars, aluminum conductor bars Mumbai, buy pure aluminum India"
        canonicalUrl="/product/round-bars/aluminium"
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
              <span className="text-navy-primary dark:text-gold-primary font-medium">Pure Aluminium Round Bars</span>
            </nav>
          </div>
        </div>

        {/* Back Link */}
        <div className="container mx-auto px-4 py-4">
          <Link href="/product/round-bars/round-bars" className="inline-flex items-center text-navy-primary dark:text-gold-primary hover:underline font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Round Bars
          </Link>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-br from-navy-primary via-navy-secondary to-slate-800 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="container mx-auto px-4 py-16 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Pure Aluminium Round Bars
                <span className="block text-2xl text-gold-primary font-normal mt-2">Commercial & High Purity (99.0% - 99.9%)</span>
              </h1>
              <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">Known for exceptional corrosion resistance, high thermal and electrical conductivity, and superior formability for specialized industrial use.</p>
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
              <h2 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-4">Pure Aluminium – Material Overview</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                <strong>Pure Aluminium</strong> (typically grades 1050, 1100, or 1200) contains at least 99% aluminium. It is characterized by its excellent atmospheric corrosion resistance, high ductile nature, and superior electrical and thermal conductivity. While it has lower strength than alloyed aluminium series (like 6xxx or 7xxx), it is highly responsive to cold working and is widely used in chemical, food, and electrical industries.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mt-6">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-gold-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Highest electrical conductivity as per IACS</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-gold-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Unmatched corrosion resistance (Rating: Excellent)</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-gold-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Superior formability and cold working properties</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-gold-primary mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Non-toxic and highly reflective surface</span>
                </div>
              </div>
            </div>

            {/* Chemical Composition */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-12">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-6 flex items-center">
                <FileText className="w-6 h-6 mr-3 text-gold-primary" />
                Chemical Purity Standards (%)
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
                  International Equivalents
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
                  <h4 className="font-bold text-lg mb-1">Commercial Diameter Range</h4>
                  <p className="text-3xl font-bold text-gold-primary">6mm – 300mm</p>
                </div>
                <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-start text-base"><Shield className="w-5 h-5 text-navy-primary mr-2 flex-shrink-0" /><span>Certification: IS 737, ASTM B211, JIS H4040</span></li>
                  <li className="flex items-start text-base"><Shield className="w-5 h-5 text-navy-primary mr-2 flex-shrink-0" /><span>Conditions: Annealed (O), Half-Hard (H14), Full-Hard (H18)</span></li>
                  <li className="flex items-start text-base"><Shield className="w-5 h-5 text-navy-primary mr-2 flex-shrink-0" /><span>Testing: Chemical purity certificate as per Hindalco/Jindal standards</span></li>
                </ul>
              </div>
            </div>

            {/* Applications */}
            <div className="bg-gradient-to-r from-navy-primary via-navy-secondary to-slate-800 rounded-xl p-8 text-white mb-12 shadow-xl">
              <h3 className="text-2xl font-bold mb-8 text-center flex items-center justify-center">
                <Zap className="w-6 h-6 mr-3 text-gold-primary" />
                Common Uses of Pure Aluminium
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
                {["pure aluminum bar price today", "99% pure aluminum rod stock", "1050 aluminum conductor bars", "1100 aluminum bars Mumbai supplier", "high purity aluminum 99.9 bars", "aluminum IS 737 standards", "buy soft aluminum bars Mumbai", "chemical resistant aluminum rods"].map((kw, i) => (
                  <span key={i} className="px-4 py-2 bg-white dark:bg-gray-700 text-navy-primary dark:text-gray-200 rounded-full border border-gray-200 dark:border-gray-600 shadow-sm">{kw}</span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700">
              <h3 className="text-3xl font-bold text-slate-800 dark:text-gray-100 mb-2">Request Pure Aluminium Quote</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">Ready stock of Hindalco/Jindal 1000 series bars. Custom lengths and surface finishes available.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-navy-primary hover:bg-navy-secondary text-white px-10 py-4 rounded-xl font-bold transition-all transform hover:scale-105 shadow-xl flex items-center justify-center">
                  <Mail className="w-5 h-5 mr-3" /> Request Pricing
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
