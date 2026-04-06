import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, ShoppingCart, ArrowLeft, FileText, CheckCircle, Settings, Zap } from "lucide-react";
import alloys_steel_mamta_steel_traders_img from "@/assets/ALLOYS STEEL  MAMTA STEEL TRADERS.jpg";
import { Link } from "wouter";

export default function F5RoundBars() {
  const chemicalComposition = [
    { element: "Carbon (C)", min: "—", max: "0.15" },
    { element: "Manganese (Mn)", min: "0.30", max: "0.60" },
    { element: "Phosphorus (P)", min: "—", max: "0.030" },
    { element: "Sulfur (S)", min: "—", max: "0.030" },
    { element: "Silicon (Si)", min: "—", max: "0.50" },
    { element: "Chromium (Cr)", min: "4.00", max: "6.00" },
    { element: "Molybdenum (Mo)", min: "0.44", max: "0.65" }
  ];

  const equivalentGrades = [
    { country: "Germany / DIN", grade: "12CrMo19-5 / 1.7362" },
    { country: "USA / ASTM", grade: "A182 F5" },
    { country: "Japan / JIS", grade: "SFVAF5" },
    { element: "Common Name", grade: "5Cr-1/2Mo" }
  ];

  const applications = [
    "High-temperature refinery services",
    "Chemical processing equipment",
    "Heat exchangers and condensers",
    "Pressure vessel components",
    "Valves and fittings for oil gas",
    "Steam generation systems",
    "Corrosive fluid handling",
    "Furnace hardware and components",
    "Hydro-cracking units",
    "Power plant engineering"
  ];

  const specifications = [
    "ASTM A182 F5 - Specification for Forged or Rolled Alloy Steel",
    "High resistance to hydrogen attack at elevated temperatures",
    "Excellent creep strength and thermal stability",
    "Good resistance to carbonization and oxidation",
    "Size Range: 20mm to 600mm diameter round bars",
    "Condition: Normalized and Tempered, Annealed",
    "Surface: Black, Bright, Machined to requirements"
  ];

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Heat Stability",
      description: "Maintains mechanical properties at high continuous temperatures"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Corrosion Resistance",
      description: "High resistance to sulfuric acid and hydrogen-induced corrosion"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Creep Resistance",
      description: "Outstanding long-term strength at elevated temperatures"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Industry Standard",
      description: "Fully compliant with ASTM A182 F5 specifications"
    }
  ];

  return (
    <>
      <ProductSEO
        title="F5 Round Bars - ASTM A182 F5 Alloy Steel Forged Bars | High Temp | Mamta Steel Traders"
        description="Premium ASTM A182 F5 round bars (5Cr-0.5Mo) for oil refinery & petrochemical service. High temperature stable forged bars. Worldwide export from Mumbai, India."
        keywords="F5 round bars, ASTM A182 F5, 1.7362, alloy steel F5, high temperature forged bars, refinery steel, chemical plant steel, F5 steel composition, F5 equivalent grade"
        canonicalUrl="/product/round-bars/f5-round-bars"
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
              <span className="text-navy-primary dark:text-gold-primary font-medium">F5 Round Bars</span>
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
                  <h1 className="text-heading font-bold mb-6">
                    F5 Round Bars
                    <span className="block text-2xl md:text-2xl text-gold-primary font-normal mt-2">
                      ASTM A182 F5 Alloy Steel Forged Bars
                    </span>
                  </h1>
                  <p className="text-xl mb-8 text-gray-200">
                    High-performance 5Cr-0.5Mo alloy steel engineered for extreme refinery and chemical processing environments
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center">
                      <Mail className="w-5 h-5 mr-2" />
                      Get Technical Quote
                    </Link>
                    <a href="tel:+919819322576" className="border-2 border-white hover:bg-white hover:text-navy-primary px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center">
                      <Phone className="w-5 h-5 mr-2" />
                      Call Metallurgy Expert
                    </a>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src={alloys_steel_mamta_steel_traders_img}
                    alt="F5 Round Bars ASTM A182 F5"
                    className="w-full rounded-xl shadow-2xl"
                    loading="lazy"
                  />
                  <div className="absolute -top-4 -right-4 bg-gold-primary text-navy-primary px-4 py-2 rounded-lg font-bold shadow-xl">
                    ASTM A182 F5
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
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-navy-primary dark:bg-gold-primary text-white dark:text-navy-primary rounded-lg mb-4">
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
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-16 border-l-4 border-gold-primary">
              <h2 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-6">
                What is F5 Round Bar? | ASTM A182 F5 Properties
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
                <p className="mb-4">
                  <strong>ASTM A182 F5 Round Bars</strong> are specifically designed for high-temperature and corrosive services, particularly in oil refineries and chemical plants. Containing 5% Chromium and 0.5% Molybdenum, this grade offers excellent resistance to sulfuric acid and high-temperature hydrogen attack.
                </p>
                <p className="mb-4">
                  The Molybdenum content provides additional strength at elevated temperatures, making <strong>F5 forged bars</strong> an ideal choice for high-pressure valves, flanges, and piping components. 
                  Mamta Steel Traders stocks and supplies premium F5 bars that meet rigorous international quality standards.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <h4 className="font-bold mb-3 text-navy-primary dark:text-gold-primary uppercase tracking-wider">Manufacturing Standards:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• ASTM A182 / ASME SA182</li>
                      <li>• EN 10222-2 (Equivalent)</li>
                      <li>• NACE MR0175 / ISO 15156</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <h4 className="font-bold mb-3 text-navy-primary dark:text-gold-primary uppercase tracking-wider">Supply Capabilities:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Forged & Rolled Rounds</li>
                      <li>• Custom Cut-to-length service</li>
                      <li>• Ultrasonic & Magnetic Particle Tested</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Chemical Composition */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-16">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-6 flex items-center">
                <Settings className="w-6 h-6 mr-3 text-gold-primary" />
                Chemical Composition of ASTM A182 F5 Alloy Steel
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
                  <thead>
                    <tr className="bg-navy-primary text-white">
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left">Elements</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-center">Min. %</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-center">Max. %</th>
                    </tr>
                  </thead>
                  <tbody>
                    {chemicalComposition.map((comp, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-gray-50 dark:bg-gray-700" : "bg-white dark:bg-gray-800"}>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-medium">
                          {comp.element}
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-center">
                          {comp.min}
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-center font-bold">
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
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-6">
                  F5 Steel Global Equivalents
                </h3>
                <div className="space-y-4">
                  {equivalentGrades.map((grade, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg border border-transparent hover:border-gold-primary transition-colors">
                      <span className="font-medium text-gray-700 dark:text-gray-300">
                        {grade.country || grade.element}
                      </span>
                      <span className="text-navy-primary dark:text-gold-primary font-bold">
                        {grade.grade}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Size Range */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-6 font-serif">
                  Technical Specifications
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-navy-primary text-white rounded-lg shadow-inner">
                    <div className="text-center">
                      <h4 className="font-bold text-lg mb-2 uppercase opacity-80">Diameter Range</h4>
                      <p className="text-3xl font-bold text-gold-primary">20mm - 600mm</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-navy-primary dark:text-gold-primary">Quality Standards:</h4>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      {specifications.slice(0, 4).map((spec, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Applications */}
            <div className="bg-slate-900 rounded-3xl p-12 text-white mb-16 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-gold-primary/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
              <div className="max-w-4xl mx-auto relative z-10">
                <h3 className="text-3xl font-bold mb-12 text-center text-gold-primary">
                  Industrial Applications of F5 Round Bars
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {applications.map((application, index) => (
                    <div key={index} className="flex items-center space-x-4 group">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-gold-primary transition-colors">
                        <ArrowRight className="w-5 h-5 text-gold-primary group-hover:text-navy-primary" />
                      </div>
                      <span className="text-lg text-gray-300 group-hover:text-white transition-colors">
                        {application}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* FAQ/AEO Section */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-16">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-8">
                ASTM A182 F5 Round Bars - Professional FAQ
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-navy-primary dark:text-gold-primary mb-2">Q1: What prevents hydrogen attack in F5 grade?</h4>
                  <p className="text-gray-600 dark:text-gray-400">The 5% Chromium content significantly enhances the steel's resistance to decarburization and internal fissuring caused by high-temperature hydrogen service.</p>
                </div>
                <div>
                  <h4 className="font-bold text-navy-primary dark:text-gold-primary mb-2">Q2: Can F5 steel be welded?</h4>
                  <p className="text-gray-600 dark:text-gray-400">Yes, F5 is weldable, but due to its air-hardening characteristics, pre-heating and post-weld heat treatment (PWHT) are usually mandatory to prevent cracking.</p>
                </div>
                <div>
                  <h4 className="font-bold text-navy-primary dark:text-gold-primary mb-2">Q3: What are the main differences between F5 and F11?</h4>
                  <p className="text-gray-600 dark:text-gray-400">F5 contains higher Chromium (5%) compared to F11 (1.25%), providing superior corrosion and oxidation resistance in sulfur-containing environments common in refineries.</p>
                </div>
              </div>
            </div>

            {/* SEO Keywords Section */}
            <div className="bg-gray-100 dark:bg-gray-700/50 rounded-xl p-8 mb-16">
              <h3 className="text-xl font-bold text-slate-800 dark:text-gray-100 mb-6">
                People Also Search For
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "astm a182 f5 mechanical properties",
                  "a182 grade f5 chemical composition", 
                  "f5 steel equivalent materials",
                  "alloy steel f5 forged bars price",
                  "f5 round bar suppliers in india", 
                  "1.7362 steel properties",
                  "5cr-0.5mo forged bars",
                  "high temperature alloy steel suppliers",
                  "f5 material equivalent din",
                  "astm a182 f5 density"
                ].map((keyword, index) => (
                  <span key={index} className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-sm rounded-full shadow-sm border border-gray-200 dark:border-gray-600 hover:text-navy-primary transition-colors">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-navy-primary text-white rounded-3xl p-12 text-center shadow-2xl">
              <h3 className="text-3xl font-bold mb-6">
                Ready to Order ASTM A182 F5 Round Bars?
              </h3>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Mamta Steel Traders is a leading supplier of F5 forged bars. We offer worldwide shipping and competitive prices.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-10 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-xl flex items-center justify-center">
                  <Mail className="w-5 h-5 mr-3" />
                  Inquiry Now
                </Link>
                <a href="tel:+919819322576" className="bg-white/10 hover:bg-white/20 border border-white/20 px-10 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 backdrop-blur-sm flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-3" />
                  Chat with Expert
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
