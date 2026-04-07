import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, ShoppingCart, ArrowLeft, FileText, CheckCircle, Settings, Zap } from "lucide-react";
import alloys_steel_mamta_steel_traders_img from "@/assets/ALLOYS STEEL  MAMTA STEEL TRADERS.jpg";
import { Link } from "wouter";

export default function F12RoundBars() {
  const chemicalComposition = [
    { element: "Carbon (C)", min: "0.05", max: "0.15" },
    { element: "Manganese (Mn)", min: "0.30", max: "0.60" },
    { element: "Phosphorus (P)", min: "—", max: "0.045" },
    { element: "Sulfur (S)", min: "—", max: "0.045" },
    { element: "Silicon (Si)", min: "—", max: "0.50" },
    { element: "Chromium (Cr)", min: "0.80", max: "1.25" },
    { element: "Molybdenum (Mo)", min: "0.44", max: "0.65" }
  ];

  const equivalentGrades = [
    { country: "USA / ASTM", grade: "A182 F12" },
    { country: "Germany / DIN", grade: "13CrMo4-5 / 1.7335" },
    { country: "Japan / JIS", grade: "SFVAF12" },
    { element: "Common Name", grade: "1Cr-1/2Mo Steel" }
  ];

  const applications = [
    "High-temperature steam turbine components",
    "Heat exchanger and superheater tubes",
    "Pressure vessels in petrochemical industry",
    "Forged valves and boiler components",
    "Main steam and reheat piping systems",
    "Nuclear and thermal power components",
    "Flanges and fittings for refinery service",
    "Corrosive gas and liquid transportation",
    "Fossil-fuel power plants",
    "High-pressure plumbing and manifold parts"
  ];

  const specifications = [
    "ASTM A182 F12 - Standard Specification for Alloy Forged Steel",
    "Heat resistant properties with good weldability",
    "Resistance to high temperature creep and oxidation",
    "Good toughness and process performance at 450°C - 550°C",
    "Size Range: 50mm to 800mm diameter round bars",
    "Condition: Normalized and Tempered, Annealed",
    "Surface: Black, Bright, Machined"
  ];

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Steam Performance",
      description: "Optimized for high-pressure steam and turbine applications"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Weldability",
      description: "Excellent welding properties compared to higher Chromium grades"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Creep Strength",
      description: "High continuous strength at temperatures between 450-550°C"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "ASTM A182",
      description: "Manufactured to meet stringent international quality benchmarks"
    }
  ];

  return (
    <>
      <ProductSEO
        title="F12 Round Bars - ASTM A182 F12 Alloy Steel Forged Bars | Mamta Steel Traders"
        description="Premium ASTM A182 F12 (1Cr-0.5Mo) round bars for thermal power & petrochemical service. Superior creep strength forged bars. Leading global supplier from Mumbai."
        keywords="F12 round bars, ASTM A182 F12, 1.7335, alloy steel F12 grade, 1Cr-0.5Mo, high temperature boiler steel, F12 steel composition, F12 equivalent table"
        canonicalUrl="/product/round-bars/f12-round-bars"
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Breadcrumb */}
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex items-center space-x-2 text-sm">
              <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary dark:hover:text-gold-primary transition-colors">
                Home
              </Link>
              <ArrowRight className="w-4 h-4 text-gray-400" />
              <Link href="/products" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary dark:hover:text-gold-primary transition-colors">
                Products
              </Link>
              <ArrowRight className="w-4 h-4 text-gray-400" />
              <Link href="/product/round-bars/round-bars" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary dark:hover:text-gold-primary transition-colors">
                Round Bars
              </Link>
              <ArrowRight className="w-4 h-4 text-gray-400" />
              <Link href="/product/round-bars/alloy-steel-f-series" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary dark:hover:text-gold-primary transition-colors">
                F Series
              </Link>
              <ArrowRight className="w-4 h-4 text-gray-400" />
              <span className="text-navy-primary dark:text-gold-primary font-medium">F12 Round Bars</span>
            </nav>
          </div>
        </div>

        {/* Back Button */}
        <div className="container mx-auto px-4 py-6">
          <Link 
            href="/product/round-bars/alloy-steel-f-series" 
            className="inline-flex items-center text-navy-primary dark:text-gold-primary hover:text-navy-secondary dark:hover:text-gold-secondary transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to F Series
          </Link>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-br from-navy-primary via-navy-secondary to-slate-800 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h1 className="text-heading font-bold mb-6 tracking-tight">
                    F12 Round Bars
                    <span className="block text-2xl md:text-2xl text-gold-primary font-normal mt-2">
                       A182 Standard | 1Cr-0.5Mo Alloy Steel
                    </span>
                  </h1>
                  <p className="text-xl mb-8 text-gray-200">
                    High-temperature resistant forged bars optimized for steam and pressure equipment in energy and petrochemical sectors
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center">
                      <Mail className="w-5 h-5 mr-3" />
                      Get Technical Quote
                    </Link>
                    <a href="tel:+919819322576" className="border-2 border-white hover:bg-white hover:text-navy-primary px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center">
                      <Phone className="w-5 h-5 mr-3" />
                      Speak to Technical Expert
                    </a>
                  </div>
                </div>
                <div className="relative group">
                  <img
                    src={alloys_steel_mamta_steel_traders_img}
                    alt="F12 Round Bars ASTM A182"
                    className="w-full rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                  <div className="absolute -top-4 -right-4 bg-gold-primary text-navy-primary px-5 py-2 rounded-xl font-bold shadow-2xl">
                    ASTM A182 F12
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-7xl mx-auto">
            
            {/* Key Features */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {features.map((feature, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center border-b-4 border-gold-primary">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-navy-primary dark:bg-gold-primary text-white dark:text-navy-primary rounded-lg mb-4 shadow-lg">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-slate-800 dark:text-gray-100 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Product Description */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-10 mb-16 border border-gray-100 dark:border-gray-700">
              <h2 className="text-3xl font-bold text-slate-800 dark:text-gray-100 mb-8 border-l-4 border-gold-primary pl-6 font-serif">
                Understanding F12 Round Bars | ASTM A182 Forged Alloy
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
                <p className="mb-6 leading-relaxed">
                  <strong>ASTM A182 F12 Round Bars</strong> are low-alloy forged steels containing Chromium and Molybdenum, primarily used in steam services and elevated temperature applications. With a Chromium content between 0.8% and 1.25%, <strong>F12 forged bars</strong> strike a perfect balance between high strength, temperature endurance, and structural integrity.
                </p>
                <p className="mb-6 leading-relaxed">
                  Due to their excellent creep properties at temperatures up to 550°C, these bars are a staple in power generation for turbine components and boiler equipment. Mamta Steel Traders provides F12 grade in various dimensions, fully certified to meet the most demanding industrial inspections.
                </p>
                <div className="grid md:grid-cols-2 gap-8 mt-12">
                  <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-2xl">
                    <h4 className="font-bold mb-4 text-navy-primary dark:text-gold-primary flex items-center">
                      <FileText className="w-5 h-5 mr-3" />
                      Key Standards Covered:
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">• ASTM A182 F12 Class 1 & 2</li>
                      <li className="flex items-center">• ASME SA182 F12 (Boiler Code)</li>
                      <li className="flex items-center">• EN 10222-2 (13CrMo4-5)</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-2xl">
                    <h4 className="font-bold mb-4 text-navy-primary dark:text-gold-primary flex items-center">
                      <Settings className="w-5 h-5 mr-3" />
                      Technical Processing:
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">• Optimized Heat Treatment Cycles</li>
                      <li className="flex items-center">• Full UT (Ultrasonic) Testing</li>
                      <li className="flex items-center">• Precise Rough & Finish Machining</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Chemical Composition */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-16">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-8 flex items-center justify-center">
                 Chemical Composition of F12 Grade (Weight %)
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
                  <thead>
                    <tr className="bg-navy-primary text-white">
                      <th className="border border-gray-300 dark:border-gray-600 px-6 py-4 text-left">Elements</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-6 py-4 text-center">Min. %</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-6 py-4 text-center">Max. %</th>
                    </tr>
                  </thead>
                  <tbody>
                    {chemicalComposition.map((comp, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-gray-50 dark:bg-gray-700" : "bg-white dark:bg-gray-800"}>
                        <td className="border border-gray-300 dark:border-gray-600 px-6 py-4 font-semibold text-slate-700 dark:text-gray-300">
                          {comp.element}
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-6 py-4 text-center">
                          {comp.min}
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-6 py-4 text-center font-bold text-navy-primary dark:text-gold-primary">
                          {comp.max}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Equivalent Grades & Specifications */}
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {/* Equivalent Grades */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-100 dark:border-gray-700">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-8 border-b pb-4">
                  Global Equivalent Reference
                </h3>
                <div className="space-y-4">
                  {equivalentGrades.map((grade, index) => (
                    <div key={index} className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:shadow-md transition-shadow cursor-default group">
                      <span className="font-bold text-gray-500 group-hover:text-gold-primary transition-colors uppercase text-xs tracking-widest">
                        {grade.country || grade.element}
                      </span>
                      <span className="text-navy-primary dark:text-gold-primary font-black text-lg">
                        {grade.grade}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Size Range */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-100 dark:border-gray-700">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-8 border-b pb-4">
                  Technical Supply Profile
                </h3>
                <div className="space-y-6">
                  <div className="p-6 bg-navy-primary text-white rounded-2xl shadow-lg text-center relative overflow-hidden group">
                     <div className="absolute bottom-0 left-0 w-full h-1 bg-gold-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                      <h4 className="font-semibold text-sm opacity-80 uppercase tracking-widest mb-2">Round Bar Stock Range</h4>
                      <p className="text-4xl font-extrabold text-gold-primary">50mm - 800mm</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-bold text-navy-primary dark:text-gold-primary text-sm uppercase tracking-wider">Product Features:</h4>
                    <ul className="grid grid-cols-1 gap-2">
                       {specifications.slice(0, 4).map((spec, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                           <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                           {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Applications List */}
            <div className="bg-slate-900 rounded-[2.5rem] p-16 text-white mb-16 relative shadow-2xl">
               <div className="absolute top-10 right-10 opacity-10">
                  <Settings className="w-64 h-64 text-white animate-spin-slow" />
               </div>
              <div className="max-w-4xl mx-auto relative z-10 text-center">
                <h3 className="text-4xl font-bold mb-12 text-gold-primary">
                  Industrial Applications of F12 Alloy
                </h3>
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 text-left">
                  {applications.map((application, index) => (
                    <div key={index} className="flex items-center space-x-4 border-b border-white/10 pb-4 group">
                      <ArrowRight className="w-5 h-5 text-gold-primary group-hover:translate-x-2 transition-transform" />
                      <span className="text-gray-300 group-hover:text-white transition-colors">
                        {application}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* FAQ/AEO Section */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-10 mb-16">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-10 text-center uppercase tracking-widest">
                F12 Round Bars - Technical Insight FAQ
              </h3>
              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-2">
                  <h4 className="font-bold text-navy-primary dark:text-gold-primary text-lg">What makes F12 suitable for power plants?</h4>
                  <p className="text-gray-600 dark:text-gray-400">F12 provides stable mechanical properties at high temperatures (up to 550°C) and resists graphitization, which is critical for long-term health in thermal power generation.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-navy-primary dark:text-gold-primary text-lg">Is preheating required for F12 welding?</h4>
                  <p className="text-gray-600 dark:text-gray-400">Yes, as a low-alloy chromium steel, F12 requires controlled preheating and interpass temperatures (typically 150-250°C) to prevent cold cracking during fabrication.</p>
                </div>
                 <div className="space-y-2">
                  <h4 className="font-bold text-navy-primary dark:text-gold-primary text-lg">F12 Class 1 vs Class 2 difference?</h4>
                  <p className="text-gray-600 dark:text-gray-400">The primary difference lies in the minimum tensile strength and yield strength requirements, with Class 2 typically having higher strength values than Class 1.</p>
                </div>
                 <div className="space-y-2">
                  <h4 className="font-bold text-navy-primary dark:text-gold-primary text-lg">ASTM vs ASME F12 standards?</h4>
                  <p className="text-gray-600 dark:text-gray-400">ASTM A182 covers the material for general industrial piping, while ASME SA182 covers it for boiler and pressure vessel code (BPVC) compliance.</p>
                </div>
              </div>
            </div>

            {/* SEO Tagging Section */}
            <div className="bg-gray-100 dark:bg-gray-700/50 rounded-xl p-10 mb-16">
              <h3 className="text-xl font-bold text-slate-800 dark:text-gray-100 mb-8 border-l-4 border-navy-primary pl-4">
                Global Search Optimization Keywords
              </h3>
              <div className="flex flex-wrap gap-4">
                {[
                  "astm a182 f12 chemical composition",
                  "a182 f12 mechanical properties pdf", 
                  "f12 forged bar suppliers global",
                  "alloy steel f12 round bar cost",
                  "1.7335 steel material specification", 
                  "1cr-0.5mo forged round bars mumbai",
                  "high temperature forged steel exporters",
                  "f12 material equivalent din standard",
                  "f12 steel density and properties",
                   "difference between f11 and f12"
                ].map((keyword, index) => (
                  <span key={index} className="px-5 py-2.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-bold rounded-lg shadow-sm border border-gray-200 dark:border-gray-600 hover:border-gold-primary transition-all uppercase tracking-tighter">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-br from-navy-primary to-black text-white rounded-[3rem] p-16 text-center shadow-3xl border border-white/5 relative overflow-hidden">
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
              <h3 className="text-4xl font-extrabold mb-8 drop-shadow-lg relative z-10">
                Secure Premium F12 Round Bars Today
              </h3>
              <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto relative z-10 font-medium">
                "Bridging global engineering needs with precision-forged alloy steel solutions since 2005."
              </p>
              <div className="flex flex-col sm:flex-row gap-8 justify-center relative z-10">
                <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-12 py-5 rounded-2xl font-bold text-xl transition-all hover:scale-105 shadow-[0_20px_50px_rgba(243,156,18,0.3)] flex items-center justify-center">
                  <Mail className="w-6 h-6 mr-3" />
                  Get Immediate Quote
                </Link>
                <a href="tel:+919819322576" className="bg-white/5 hover:bg-white/10 border border-white/20 px-12 py-5 rounded-2xl font-bold text-xl transition-all hover:scale-105 backdrop-blur-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 mr-3" />
                   Metallurgy Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


