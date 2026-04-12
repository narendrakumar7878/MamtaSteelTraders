import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, MapPin, Star, CheckCircle, TrendingUp, Shield, Award, Factory, Truck, Clock, Users, Building2, Download, FileText, Globe, ShieldCheck } from "lucide-react";
import { Link } from "wouter";

export default function AlloySteelFlanges() {
  const specifications = [
    "ASTM A182/A182M - Standard Specification for Forged or Rolled Alloy and Stainless Steel Pipe Flanges",
    "ASTM A350/A350M - Standard Specification for Carbon and Low-Alloy Steel Forgings",
    "ASME B16.5 - Pipe Flanges and Flanged Fittings NPS 1/2 through NPS 24",
    "ASME B16.47 - Large Diameter Steel Flanges NPS 26 through NPS 60",
    "ASME B16.48 - Steel Line Blanks",
    "API 6A - Specification for Wellhead and Christmas Tree Equipment",
    "MSS SP-44 - Steel Pipeline Flanges",
    "Size Range: 1/2\" to 60\" NB (DN 15 to DN 1500)",
    "Pressure Class: 150#, 300#, 600#, 900#, 1500#, 2500# (PN 10 to PN 420)",
    "Grades: F1, F2, F5, F7, F9, F11, F12, F21, F22, F91, F92, F911",
    "Testing: Hydrostatic Testing, Radiographic Testing, Magnetic Particle Testing",
    "Certification: EN 10204 3.1 & 3.2, NACE MR0175, API 6A, PED 2014/68/EU"
  ];

  const alloySteelGrades = [
    { grade: "ASTM A182 F1", description: "Carbon-molybdenum alloy steel for moderate temperature pressure service.", path: "/product/flanges/alloy-steel/f1-flanges" },
    { grade: "ASTM A182 F2", description: "Intermediate chromium alloy for high pressure gas and steam systems.", path: "/product/flanges/alloy-steel/f2-flanges" },
    { grade: "ASTM A182 F5", description: "5% Chromium alloy for enhanced high temperature oxidation resistance.", path: "/product/flanges/alloy-steel/f5-flanges" },
    { grade: "ASTM A182 F7", description: "7% Chromium alloy for severe corrosive and thermal environments.", path: "/product/flanges/alloy-steel/f7-flanges" },
    { grade: "ASTM A182 F9", description: "9% Chromium-1% Molybdenum alloy for extreme performance service.", path: "/product/flanges/alloy-steel/f9-flanges" },
    { grade: "ASTM A182 F11", description: "The industry standard for boiler and pressure vessel components.", path: "/product/flanges/alloy-steel/f11-flanges" },
    { grade: "ASTM A182 F12", description: "Commonly used for high-temperature power and chemical piping.", path: "/product/flanges/alloy-steel/f12-flanges" },
    { grade: "ASTM A182 F21", description: "Advanced alloy for high-stress refinery and thermal processing.", path: "/product/flanges/alloy-steel/f21-flanges" },
    { grade: "ASTM A182 F22", description: "Global benchmark for high-pressure and high-temperature service.", path: "/product/flanges/alloy-steel/f22-flanges" },
    { grade: "ASTM A182 F91", description: "Supercritical grade for high-efficiency thermal power systems.", path: "/product/flanges/alloy-steel/f91-flanges" },
    { grade: "ASTM A182 F92", description: "Ultra-supercritical grade for maximum generation efficiency.", path: "/product/flanges/alloy-steel/f92-flanges" },
    { grade: "ASTM A182 F911", description: "Top-tier alloy for extreme pressure and thermal load service.", path: "/product/flanges/alloy-steel/f911-flanges" },
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

  const applications = [
    "Power Generation Plants",
    "Petrochemical Refineries",
    "High-Temperature Steam Lines",
    "Chemical Processing Equipment",
    "Oil and Gas Industry",
    "Pressure Vessel Applications",
    "Heat Exchanger Systems",
    "Boiler Components"
  ];

  const features = [
    { icon: Shield, title: "High Temperature Resistant", desc: "Designed for elevated temperature service applications" },
    { icon: TrendingUp, title: "Superior Strength", desc: "Enhanced mechanical properties at high temperatures" },
    { icon: Award, title: "ASME Certified", desc: "ASME B16.5 and ASTM certified alloy steel flanges" },
    { icon: CheckCircle, title: "Multiple Grades", desc: "Wide range of alloy steel grades for specific applications" }
  ];

  const supplierStats = [
    { icon: Factory, title: "Mumbai Manufacturing Hub", desc: "4 manufacturing facilities in Mumbai with 2000+ MT monthly capacity" },
    { icon: Globe, title: "Pan-India Supply Network", desc: "Direct supply to 28 states with same-day dispatch from Mumbai" },
    { icon: Users, title: "Industry Experience", desc: "25+ years serving power plants, refineries, and chemical industries" },
    { icon: Award, title: "Quality Certifications", desc: "ISO 9001:2015, PED 2014/68/EU, NACE MR0175 certified supplier" }
  ];

  return (
    <>
      <ProductSEO
        title="India Best Alloy Steel Flanges Suppliers Mumbai | ASTM A182 F1 F5 F9 F11 F12 F22 F91 F92 | Mamta Steel Traders"
        description="Leading Mumbai-based supplier of ASTM A182 alloy steel flanges in grades F1, F5, F9, F11, F22, F91, F92, F911. Serving power plants, refineries across India with 10+ years experience. Best prices, fastest delivery from Mumbai warehouses."
        keywords="India best alloy steel flanges suppliers Mumbai, ASTM A182 flanges manufacturer Mumbai, F91 F22 F11 F5 flanges supplier India, alloy steel flanges Mumbai stock, power plant flanges Mumbai, refinery flanges supplier Mumbai, high temperature flanges Mumbai, flanges manufacturer Mumbai India, Mumbai steel traders alloy flanges"
        category="Flanges"
        productName="Alloy Steel Flanges"
        specifications={specifications}
        canonicalUrl="/product/flanges/alloy-steel"
      />

      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb Navigation */}
        <nav className="bg-white py-4 border-b border-gray-200" data-testid="breadcrumb-nav">
          <div className="container mx-auto px-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-navy-primary transition-colors" data-testid="breadcrumb-home">Home</Link>
              <ArrowRight className="w-4 h-4" />
              <Link href="/products" className="hover:text-navy-primary transition-colors" data-testid="breadcrumb-products">Products</Link>
              <ArrowRight className="w-4 h-4" />
              <Link href="/flanges" className="hover:text-navy-primary transition-colors" data-testid="breadcrumb-flanges">Flanges</Link>
              <ArrowRight className="w-4 h-4" />
              <span className="text-navy-primary font-medium" data-testid="breadcrumb-current">Alloy Steel Flanges</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-navy-primary to-navy-secondary text-white py-16" data-testid="hero-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-heading md:text-heading font-bold mb-6" data-testid="hero-title">
                Alloy Steel Flanges Suppliers Mumbai – ASTM A182 F1 to F911
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100" data-testid="hero-subtitle">
                India's leading Mumbai-based manufacturer and supplier of high-quality ASTM A182 alloy steel flanges for power plants, refineries, and petrochemical industries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary font-semibold py-3 px-8 rounded-lg transition-colors duration-300" data-testid="cta-get-quote">
                  Get Quote Now
                </Link>
                <a href="tel:+919819322576" className="border-2 border-white text-white hover:bg-white hover:text-navy-primary font-semibold py-3 px-8 rounded-lg transition-colors duration-300" data-testid="cta-call-now">
                  Call Now: +91 98193 22576
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Grade Cards Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-navy-primary mb-12">Alloy Steel Flanges by Grade</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {alloySteelGrades.map((item, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gold-primary opacity-5 rounded-bl-full group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="flex items-center mb-4">
                    <ShieldCheck className="w-8 h-8 text-gold-primary mr-3" />
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
                Mumbai's Most Trusted Alloy Steel Flanges Supplier
              </h2>
              <p className="text-lg text-gray-700 mb-6" data-testid="mumbai-intro-description">
                Mamta Steel Traders is Mumbai's premier supplier of ASTM A182 alloy steel flanges, 
                serving customers across India's major industrial hubs. 
                With over 25 years of expertise and 4 manufacturing units, we provide same-day dispatch 
                for standard sizes and customization for specialized refinery projects.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-4 border border-gray-200 rounded-lg">
                  <MapPin className="w-8 h-8 text-gold-primary mx-auto mb-2" />
                  <h3 className="font-semibold text-navy-primary">Mumbai HQ</h3>
                  <p className="text-sm text-gray-600">4 manufacturing facilities with 2000+ MT capacity</p>
                </div>
                <div className="text-center p-4 border border-gray-200 rounded-lg">
                  <Truck className="w-8 h-8 text-gold-primary mx-auto mb-2" />
                  <h3 className="font-semibold text-navy-primary">Pan-India Support</h3>
                  <p className="text-sm text-gray-600">Direct supply to all states with priority logistics</p>
                </div>
                <div className="text-center p-4 border border-gray-200 rounded-lg">
                  <Clock className="w-8 h-8 text-gold-primary mx-auto mb-2" />
                  <h3 className="font-semibold text-navy-primary">Fast Fulfillment</h3>
                  <p className="text-sm text-gray-600">Immediate dispatch for ex-stock sizes from Mumbai</p>
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
                Ready to Order Alloy Steel Flanges?
              </h2>
              <p className="text-xl mb-8 text-blue-100" data-testid="cta-subtitle">
                Get premium quality alloy steel flanges with fast delivery across India
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
