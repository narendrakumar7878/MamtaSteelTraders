import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, ShoppingCart, ArrowLeft, FileText, CheckCircle, Settings, Zap } from "lucide-react";
import alloys_steel_mamta_steel_traders_img from "@/assets/ALLOYS STEEL  MAMTA STEEL TRADERS.jpg";
import { Link } from "wouter";

export default function F9RoundBars() {
  const chemicalComposition = [
    { element: "Carbon (C)", min: "—", max: "0.15" },
    { element: "Manganese (Mn)", min: "0.30", max: "0.60" },
    { element: "Phosphorus (P)", min: "—", max: "0.030" },
    { element: "Sulfur (S)", min: "—", max: "0.030" },
    { element: "Silicon (Si)", min: "0.50", max: "1.00" },
    { element: "Chromium (Cr)", min: "8.00", max: "10.00" },
    { element: "Molybdenum (Mo)", min: "0.90", max: "1.10" }
  ];

  const equivalentGrades = [
    { country: "Germany / DIN", grade: "X11CrMo9-1 / 1.7386" },
    { country: "USA / ASTM", grade: "A182 F9" },
    { country: "Japan / JIS", grade: "SFVAF9" },
    { element: "Common Name", grade: "9Cr-1Mo Steel" }
  ];

  const applications = [
    "High-temperature refinery processing",
    "Heat exchangers for heavy oil gas",
    "Pressure vessel manufacturing",
    "Chemical and petrochemical plants",
    "Steam generation equipment",
    "Valve and pump components",
    "Oil patch wellhead applications",
    "Fittings and flanges for high pressure",
    "Hydrogen-rich service environments",
    "Energy and power generation"
  ];

  const specifications = [
    "ASTM A182 F9 - Forged or Rolled Alloy Steel Specification",
    "Excellent resistance to high-temperature oxidation",
    "Higher corrosion resistance than F5 grade",
    "Superior mechanical strength at elevated temperatures",
    "Size Range: 30mm to 750mm diameter round bars",
    "Condition: Normalized and Tempered",
    "Surface: Black, Proof Machined, Bright"
  ];

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Oxidation Resistance",
      description: "Exceptional durability in high-temperature oxidizing environments"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "High Alloy Content",
      description: "Higher Chromium and Molybdenum for superior corrosion protection"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Thermal Stability",
      description: "Excellent performance and structural integrity up to 650°C"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Global Standards",
      description: "Fully compliant with international ASTM A182 F9 benchmarks"
    }
  ];

  return (
    <>
      <ProductSEO
        title="F9 Round Bars - ASTM A182 F9 Alloy Steel Forged Bars | 9Cr-1Mo | Mamta Steel Traders"
        description="Premium ASTM A182 F9 (9Cr-1Mo) round bars for high corrosion & temperature refinery service. Forged bars 30mm to 750mm. Leading exporter from Mumbai, India."
        keywords="F9 round bars, ASTM A182 F9, 1.7386, alloy steel F9, 9Cr-1Mo steel, refinery forged bars, petrochemical steel F9, F9 steel composition, F9 vs F5"
        canonicalUrl="/product/round-bars/f9-round-bars"
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
              <span className="text-navy-primary dark:text-gold-primary font-medium">F9 Round Bars</span>
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
                    F9 Round Bars
                    <span className="block text-2xl md:text-2xl text-gold-primary font-normal mt-2">
                      ASTM A182 F9 (9Cr-1Mo) Alloy Steel Forged Bars
                    </span>
                  </h1>
                  <p className="text-xl mb-8 text-gray-200">
                    Superior 9% Chromium forged bars designed for maximum corrosion resistance in high-temperature petrochemical services
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
                    alt="F9 Round Bars ASTM A182 F9"
                    className="w-full rounded-xl shadow-2xl"
                    loading="lazy"
                  />
                  <div className="absolute -top-4 -right-4 bg-gold-primary text-navy-primary px-4 py-2 rounded-lg font-bold shadow-xl">
                    ASTM A182 F9
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
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
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
              <h2 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-6 font-serif">
                What is F9 (9Cr-1Mo) Round Bar? | ASTM A182 F9 Analysis
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
                <p className="mb-4">
                  <strong>ASTM A182 F9 Round Bar</strong>, also known as 9Cr-1Mo steel, is a high-performance alloy steel specifically formulated for severe high-temperature service. With twice the Chromium content of the F5 grade, <strong>F9 forged bars</strong> offer exceptional resistance to oxidation and corrosion in sulfur-containing environments.
                </p>
                <p className="mb-4">
                  The Molybdenum (1%) in F9 enhances elevated-temperature strength and provides superior resistance to pitting and crevice corrosion. It is widely used in the manufacturing of pressurized components like flanges, valves, and manifold parts for the oil and gas and power sectors.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <h4 className="font-bold mb-3 text-navy-primary dark:text-gold-primary uppercase tracking-wider">Certifications:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• ASTM A182 / ASME SA182 F9</li>
                      <li>• NACE MR0175 Compliant</li>
                      <li>• EN 10204 3.1 & 3.2 Certification</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <h4 className="font-bold mb-3 text-navy-primary dark:text-gold-primary uppercase tracking-wider">Supply & Machining:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Forged & Proof Machined Rounds</li>
                      <li>• Precision CNC Cutting</li>
                      <li>• Heat Treatment (N+T)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Chemical Composition */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-16">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-6 flex items-center">
                <Settings className="w-6 h-6 mr-3 text-gold-primary" />
                Chemical Analysis of ASTM A182 F9 Grade
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
                <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-6 font-serif">
                  F9 Steel Equivalent Grades
                </h3>
                <div className="space-y-4">
                  {equivalentGrades.map((grade, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gold-primary/10 transition-colors cursor-pointer border border-transparent hover:border-gold-primary">
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
                <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-6">
                  Dimension & Standard Data
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-gradient-to-r from-navy-primary to-navy-secondary text-white rounded-lg shadow-xl">
                    <div className="text-center font-serif">
                      <h4 className="font-semibold text-lg mb-2 uppercase opacity-80 letter-spacing-wide">Diameter Range</h4>
                      <p className="text-3xl font-bold text-gold-primary">30mm - 750mm</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-navy-primary dark:text-gold-primary">Supply Specifications:</h4>
                    <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                      {specifications.slice(0, 4).map((spec, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-navy-primary dark:text-gold-primary mr-2 mt-1 flex-shrink-0" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Applications */}
            <div className="bg-gradient-to-r from-navy-primary to-navy-secondary rounded-2xl p-10 text-white mb-16 relative overflow-hidden">
               <div className="absolute inset-0 bg-black/10"></div>
              <div className="max-w-4xl mx-auto relative z-10">
                <h3 className="text-3xl font-bold mb-10 text-center">
                  Key Industrial Use-Cases of F9 Grade
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {applications.map((application, index) => (
                    <div key={index} className="flex items-center space-x-3 bg-white/5 p-4 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-colors">
                      <div className="w-8 h-8 rounded-full bg-gold-primary flex items-center justify-center flex-shrink-0 shadow-lg">
                        <CheckCircle className="w-5 h-5 text-navy-primary" />
                      </div>
                      <span className="text-gray-200 group-hover:text-white transition-colors">
                        {application}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

             {/* SEO/AEO Section */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-16">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
                ASTM A182 F9 Round Bars - Expert In-Depth Guide
              </h3>
              <div className="space-y-6 text-gray-600 dark:text-gray-400">
                <div>
                  <h4 className="font-bold text-slate-800 dark:text-gold-primary mb-2">Q1: How does F9 compare to F91?</h4>
                  <p>While F9 (9Cr-1Mo) is an excellent high-temperature steel, F91 is a modified version with added Vanadium and Nitrogen (9Cr-1Mo-V-Nb), offering even higher creep strength at extreme temperatures.</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 dark:text-gold-primary mb-2">Q2: What is the typical heat treatment for A182 F9?</h4>
                  <p>ASTM A182 F9 is typically supplied in the Normalized and Tempered (N+T) condition to ensure optimal mechanical properties and microstructure for severe service applications.</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 dark:text-gold-primary mb-2">Q3: Why use F9 over Stainless Steel for refinery service?</h4>
                  <p>F9 offers a superior coefficient of thermal expansion and thermal conductivity compared to austenitic stainless steels, reducing thermal fatigue in cyclical process equipment while providing excellent resistance to sulfide stress cracking.</p>
                </div>
              </div>
            </div>

            {/* SEO Keywords Section */}
            <div className="bg-gray-100 dark:bg-gray-700/50 rounded-xl p-8 mb-16">
              <h3 className="text-xl font-bold text-slate-800 dark:text-gray-100 mb-6">
                Most Popular Search Terms
              </h3>
              <div className="flex flex-wrap gap-2 text-xs">
                {[
                  "astm a182 f9 chemical composition",
                  "astm a182 f9 mechanical properties", 
                  "f9 steel equivalent table",
                  "alloy steel f9 forged bars price",
                  "f9 round bar exporters mumbai", 
                  "1.7386 steel material properties",
                  "9cr-1mo steel pipe equivalent",
                  "high temperature forged round bars",
                  "f9 material standard pdf",
                  "difference between f9 and p9"
                ].map((keyword, index) => (
                  <span key={index} className="px-3 py-1.5 bg-navy-primary text-white rounded-md tracking-wider shadow-md hover:bg-gold-primary hover:text-navy-primary transition-colors uppercase">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-navy-primary text-white rounded-3xl p-12 text-center shadow-2xl space-y-8">
              <h3 className="text-3xl font-bold">
                Premium F9 Round Bars | Expert Stockist & Supplier
              </h3>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto italic">
                "Specialized in high-grade alloy steel components for the global energy sector."
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-10 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-xl flex items-center justify-center">
                  <Mail className="w-5 h-5 mr-3" />
                  Request Technical Quote
                </Link>
                <a href="tel:+919819322576" className="bg-white/10 hover:bg-white/20 border border-white/20 px-10 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 backdrop-blur-sm flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-3" />
                  Talk to a Metallurgist
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


