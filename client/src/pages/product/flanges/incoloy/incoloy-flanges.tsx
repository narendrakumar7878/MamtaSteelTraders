import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, MapPin, Star, CheckCircle, TrendingUp, Shield, Award, Factory, Truck, Clock, Users, Building2, Download, FileText, Globe, Flame, Zap, Wrench, Thermometer, Beaker, ShieldCheck } from "lucide-react";
import { Link } from "wouter";

export default function IncoloyFlanges() {
  const specifications = [
    "ASTM B564 - Standard Specification for Nickel Alloy Flanges, Fittings, Valves, and Parts",
    "ASTM B366 - Standard Specification for Factory-Made Wrought Nickel and Nickel Alloy Fittings",
    "ASME B16.5 - Pipe Flanges and Flanged Fittings NPS 1/2 through NPS 24",
    "ASME B16.47 - Large Diameter Steel Flanges NPS 26 through NPS 60",
    "ASME B16.48 - Steel Line Blanks",
    "API 6A - Specification for Wellhead and Christmas Tree Equipment",
    "NACE MR0175 - Metallic Materials for Use in H2S-Containing Environments",
    "Size Range: 1/2\" to 60\" NB (DN 15 to DN 1500)",
    "Pressure Class: 150# to 2500# (PN 10 to PN 420)",
    "Grades: 800, 800H, 800HT, 825, 925, 926, 800AT, DS, 25-6MO",
    "Testing: Hydrostatic Testing, Radiographic Testing, IGC Testing",
    "Certification: EN 10204 3.1 & 3.2, NACE MR0175, API 6A, PED 2014/68/EU"
  ];

  const incoloyGrades = [
    { grade: "Incoloy 800", description: "General high-temp performance up to 850°C for heat exchangers.", path: "/product/flanges/incoloy/800" },
    { grade: "Incoloy 800H", description: "Controlled carbon version for enhanced creep resistance up to 1000°C.", path: "/product/flanges/incoloy/800h" },
    { grade: "Incoloy 800HT", description: "Maximum strength at ultra-high temperatures up to 1100°C.", path: "/product/flanges/incoloy/800ht" },
    { grade: "Incoloy 825", description: "Elite resistance to sulfuric and phosphoric acids in chemical plants.", path: "/product/flanges/incoloy/825" },
    { grade: "Incoloy 925", description: "Age-hardenable high-strength grade for offshore and oil & gas.", path: "/product/flanges/incoloy/925" },
    { grade: "Incoloy 926", description: "Super-austenitic 6% Mo grade for seawater and aggressive halides.", path: "/product/flanges/incoloy/926" },
    { grade: "Incoloy 800AT", description: "High-strength thermal grade for petrochemical and furnace service.", path: "/product/flanges/incoloy/800at" },
    { grade: "Incoloy DS", description: "High-silicon alloy for heavy carburization and thermal cycling.", path: "/product/flanges/incoloy/ds" },
    { grade: "Incoloy 25-6MO", description: "Premium super-austenitic protection for specialized chemical vessels.", path: "/product/flanges/incoloy/25-6mo" },
  ];

  const flangeTypes = [
    "Slip-On Flanges",
    "Weld Neck Flanges", 
    "Blind Flanges",
    "Socket Weld Flanges",
    "Threaded Flanges",
    "Lap Joint Flanges",
    "Orifice Flanges",
    "Long Weld Neck Flanges"
  ];

  const features = [
    { icon: Shield, title: "Corrosion Resistant", desc: "Elite resistance to oxidizing and reducing acids" },
    { icon: TrendingUp, title: "Thermal Stability", desc: "Maintains structural integrity up to 1100°C" },
    { icon: Award, title: "ASTM Certified", desc: "ASTM B564 and ASME certified Incoloy flanges" },
    { icon: CheckCircle, title: "Chemical Grade", desc: "Specially engineered for aggressive process industries" }
  ];

  const supplierStats = [
    { icon: Thermometer, title: "Thermal Processing", desc: "Specialized Incoloy flanges for steam generation and furnace applications" },
    { icon: Beaker, title: "Chemical Hub Mumbai", desc: "Advanced alloy processing serving India's chemical and nuclear industries" },
    { icon: Zap, title: "Critical Missions", desc: "Supply to petrochemical, energy, and subsea sectors across India" },
    { icon: Award, title: "Industrial Certs", desc: "ASTM B564, NACE MR0175, and nuclear-grade certifications" }
  ];

  return (
    <>
      <ProductSEO
        title="India Best Incoloy Flanges Suppliers Mumbai | ASTM B564 Incoloy 800 825 925 926 | Mamta Steel Traders"
        description="Leading Mumbai-based supplier of ASTM B564 Incoloy flanges in grades 800, 800H, 800HT, 825, 925, 926, 800AT, DS, 25-6MO. Serving chemical processing, power generation, and nuclear industries across India. Best prices from Mumbai."
        keywords="India best Incoloy flanges suppliers Mumbai, ASTM B564 Incoloy flanges manufacturer Mumbai, Incoloy 825 800 925 926 flanges supplier India, chemical processing flanges Mumbai, steam generation flanges supplier Mumbai, high temperature flanges Mumbai India, Mumbai steel traders Incoloy flanges"
        category="Flanges"
        productName="Incoloy Flanges"
        specifications={specifications}
        canonicalUrl="/product/flanges/incoloy"
      />

      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb Navigation */}
        <nav className="bg-white py-4 border-b border-gray-200" data-testid="breadcrumb-nav">
          <div className="container mx-auto px-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-navy-primary transition-colors" data-testid="breadcrumb-home">Home</Link>
              <ArrowRight className="w-4 h-4" />
              <Link href="/products" className="hover:text-blue-600 transition-colors">Products</Link>
              <ArrowRight className="w-4 h-4" />
              <Link href="/flanges" className="hover:text-blue-600 transition-colors">Flanges</Link>
              <ArrowRight className="w-4 h-4" />
              <span className="text-navy-primary font-medium" data-testid="breadcrumb-current">Incoloy Flanges</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-navy-primary to-navy-secondary text-white py-16" data-testid="hero-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <ShieldCheck className="w-12 h-12 text-gold-primary" />
              </div>
              <h1 className="text-heading md:text-heading font-bold mb-6" data-testid="hero-title">
                Incoloy Flanges Suppliers Mumbai – ASTM B564 Chemical Grade Superalloys
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100" data-testid="hero-subtitle">
                India's leading Mumbai-based manufacturer and supplier of ASTM B564 Incoloy flanges for chemical processing, power generation, and nuclear industries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary font-semibold py-3 px-8 rounded-xl transition-colors duration-300" data-testid="cta-get-quote">
                  Get Quote Now
                </Link>
                <a href="tel:+919819322576" className="border-2 border-white text-white hover:bg-white hover:text-navy-primary font-semibold py-3 px-8 rounded-xl transition-colors duration-300" data-testid="cta-call-now">
                  Call Now: +91 98193 22576
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Grade Cards Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-navy-primary mb-12 uppercase italic tracking-tighter">ASTM B564 Incoloy Flanges - Chemical Processing Grade Product Gallery</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {incoloyGrades.map((item, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gold-primary opacity-5 rounded-bl-full group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="flex items-center mb-4">
                    <Beaker className="w-8 h-8 text-gold-primary mr-3" />
                    <h3 className="text-xl font-bold text-navy-primary">{item.grade}</h3>
                  </div>
                  <p className="text-gray-600 mb-6 line-clamp-3 italic text-sm">{item.description}</p>
                  <Link href={item.path} className="inline-flex items-center bg-navy-primary text-white px-6 py-2.5 rounded-xl font-bold hover:bg-gold-primary hover:text-navy-primary transition-all shadow-md group">
                    View Details
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mumbai Service Coverage Introduction */}
        <section className="py-16 bg-gray-50" data-testid="mumbai-intro-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-navy-primary mb-8" data-testid="mumbai-intro-title">
                Mumbai's Premier Incoloy Flanges Supplier for Chemical Processing
              </h2>
              <p className="text-lg text-gray-700 mb-6" data-testid="mumbai-intro-description">
                Mamta Steel Traders specializes in high-performance ASTM B564 Incoloy iron-nickel-chromium flanges, serving Mumbai's 
                chemical processing corridors and thermal power stations. With 25+ years of strategic supply, we provide 
                premium 800, 825, 925, and super-austenitic 926 grades for critical national energy and chemical infrastructure.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-4 border border-gray-200 rounded-lg">
                  <Thermometer className="w-8 h-8 text-gold-primary mx-auto mb-2" />
                  <h3 className="font-semibold text-navy-primary">Thermal Excellence</h3>
                  <p className="text-sm text-gray-600">Reliable performance up to 1100°C for furnaces</p>
                </div>
                <div className="text-center p-4 border border-gray-200 rounded-lg">
                  <Beaker className="w-8 h-8 text-gold-primary mx-auto mb-2" />
                  <h3 className="font-semibold text-navy-primary">Acid Mastery</h3>
                  <p className="text-sm text-gray-600">Direct supply to acid production and process plants</p>
                </div>
                <div className="text-center p-4 border border-gray-200 rounded-lg">
                  <Zap className="w-8 h-8 text-gold-primary mx-auto mb-2" />
                  <h3 className="font-semibold text-navy-primary">High-Strength Grades</h3>
                  <p className="text-sm text-gray-600">Strategic age-hardened alloys for subsea energy</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Flange Types */}
        <section className="py-16 bg-white" data-testid="flange-types-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-center text-navy-primary mb-12" data-testid="flange-types-title">
                Available Flange Types
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {flangeTypes.map((type, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200 text-center hover:shadow-lg transition-shadow duration-300" data-testid={`flange-type-${index}`}>
                    <h3 className="text-lg font-semibold text-navy-primary mb-2">{type}</h3>
                    <div className="w-12 h-12 bg-gold-primary rounded-full mx-auto flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-16 bg-gray-50" data-testid="specifications-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-center text-navy-primary mb-12" data-testid="specifications-title">
                Technical Specifications
              </h2>
              <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
                <div className="bg-navy-primary text-white px-6 py-4">
                  <h3 className="text-xl font-semibold">Specification Standards</h3>
                </div>
                <div className="p-6">
                  <div className="grid md:grid-cols-1 gap-4">
                    {specifications.map((spec, index) => (
                      <div key={index} className="flex items-start" data-testid={`specification-${index}`}>
                        <CheckCircle className="w-5 h-5 text-gold-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-navy-primary to-navy-secondary text-white" data-testid="cta-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-6" data-testid="cta-title">
                Ready to Order Incoloy Flanges?
              </h2>
              <p className="text-xl mb-8 text-blue-100" data-testid="cta-subtitle">
                Get premium quality chemical-grade superalloy flanges with express delivery across India
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary font-semibold py-3 px-8 rounded-xl transition-colors duration-300" data-testid="cta-contact">
                  Enquire Now
                </Link>
                <div className="flex items-center justify-center space-x-4 text-sm mt-4 sm:mt-0">
                  <div className="flex items-center" data-testid="contact-phone">
                    <Phone className="w-4 h-4 mr-2" />
                    <a href="tel:+919819322576" className="hover:text-gold-primary transition-colors">+91 98193 22576</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
