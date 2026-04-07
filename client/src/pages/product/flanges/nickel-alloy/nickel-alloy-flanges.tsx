import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, MapPin, Star, CheckCircle, TrendingUp, Shield, Award, Factory, Truck, Clock, Users, Building2, Download, FileText, Globe, ShieldCheck } from "lucide-react";
import { Link } from "wouter";

export default function NickelAlloyFlanges() {
  const specifications = [
    "ASTM B564 - Standard Specification for Nickel Alloy Flanges, Fittings, Valves, and Parts",
    "ASTM B462 - Standard Specification for Forged or Rolled UNS N08020, N08024, N08026, and N08367 Pipe Flanges",
    "ASME B16.5 - Pipe Flanges and Flanged Fittings NPS 1/2 through NPS 24",
    "ASME B16.47 - Large Diameter Steel Flanges NPS 26 through NPS 60",
    "ASME B16.48 - Steel Line Blanks",
    "API 6A - Specification for Wellhead and Christmas Tree Equipment",
    "MSS SP-44 - Steel Pipeline Flanges",
    "Size Range: 1/2\" to 60\" NB (DN 15 to DN 1500)",
    "Pressure Class: 150#, 300#, 600#, 900#, 1500#, 2500# (PN 10 to PN 420)",
    "Grades: 200, 201, 400, K500, 600, 601, 625, 718, 800, 825, 90/10, 70/30",
    "Testing: Hydrostatic Testing, Radiographic Testing, Magnetic Particle Testing",
    "Certification: EN 10204 3.1 & 3.2, NACE MR0175, API 6A, PED 2014/68/EU"
  ];

  const nickelGrades = [
    { grade: "Nickel 200", description: "Commercially pure nickel with excellent resistance to caustic alkalis.", path: "/product/flanges/nickel-alloy/nickel-200" },
    { grade: "Nickel 201", description: "Low-carbon version of Nickel 200 for high-temp service above 315°C.", path: "/product/flanges/nickel-alloy/nickel-201" },
    { grade: "Monel 400", description: "Nickel-copper alloy with elite resistance to seawater and steam.", path: "/product/flanges/nickel-alloy/monel-400" },
    { grade: "Monel K500", description: "Age-hardened nickel-copper alloy with double the tensile strength.", path: "/product/flanges/nickel-alloy/monel-k500" },
    { grade: "Inconel 600", description: "Standard engineering alloy for furnace and heat-treating applications.", path: "/product/flanges/nickel-alloy/inconel-600" },
    { grade: "Inconel 601", description: "High chromium content for superior resistance to oxidation at 2200°F.", path: "/product/flanges/nickel-alloy/inconel-601" },
    { grade: "Inconel 625", description: "Ultra-high fatigue strength and elite resistance to seawater pitting.", path: "/product/flanges/nickel-alloy/inconel-625" },
    { grade: "Inconel 718", description: "Aerospace-grade age-hardenable superalloy for extreme missions.", path: "/product/flanges/nickel-alloy/inconel-718" },
    { grade: "Incoloy 800", description: "Superior structural strength and resistance to carburization.", path: "/product/flanges/nickel-alloy/incoloy-800" },
    { grade: "Incoloy 825", description: "Exceptional resistance to both reducing and oxidizing acids.", path: "/product/flanges/nickel-alloy/incoloy-825" },
    { grade: "Cupro Nickel 90/10", description: "Industry standard for marine biofouling and seawater resistance.", path: "/product/flanges/nickel-alloy/cupro-nickel-90-10" },
    { grade: "Cupro Nickel 70/30", description: "Elite resilient alloy for high-pressure and high-velocity marine systems.", path: "/product/flanges/nickel-alloy/cupro-nickel-70-30" },
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
    { icon: Shield, title: "Corrosion Resistant", desc: "Exceptional resistance to corrosion in harsh environments" },
    { icon: TrendingUp, title: "High Temperature", desc: "Maintains strength and integrity at elevated temperatures" },
    { icon: Award, title: "ASTM Certified", desc: "ASTM B564 and ASME certified nickel alloy flanges" },
    { icon: CheckCircle, title: "Superior Alloys", desc: "Premium nickel alloy grades for specialized applications" }
  ];

  const supplierStats = [
    { icon: Factory, title: "Mumbai Manufacturing Hub", desc: "Specialized nickel alloy manufacturing with advanced melting facilities" },
    { icon: Globe, title: "Pan-India Supply Network", desc: "Direct supply of nickel alloy flanges to marine and chemical industries" },
    { icon: Users, title: "Industry Experience", desc: "25+ years expertise in nickel alloy products for critical applications" },
    { icon: Award, title: "Quality Certifications", desc: "ASTM B564, NACE MR0175, and marine certification compliance" }
  ];

  return (
    <>
      <ProductSEO
        title="India Best Nickel Alloy Flanges Suppliers Mumbai | ASTM B564 Nickel 200 400 625 825 | Mamta Steel Traders"
        description="Leading Mumbai-based supplier of ASTM B564 nickel alloy flanges in grades 200, 201, 400, 600, 625, 825, Cupro Nickel. Serving marine, chemical processing across India. Best prices, fastest delivery from Mumbai."
        keywords="India best nickel alloy flanges suppliers Mumbai, ASTM B564 nickel flanges manufacturer Mumbai, Nickel 625 400 flanges supplier India, Cupro Nickel flanges Mumbai stock, marine flanges Mumbai, chemical processing flanges supplier Mumbai, nickel alloy flanges Mumbai India"
        category="Flanges"
        productName="Nickel Alloy Flanges"
        specifications={specifications}
        canonicalUrl="/product/flanges/nickel-alloy"
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
              <span className="text-navy-primary font-medium" data-testid="breadcrumb-current">Nickel Alloy Flanges</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-navy-primary to-navy-secondary text-white py-16" data-testid="hero-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-heading md:text-heading font-bold mb-6" data-testid="hero-title">
                Nickel Alloy Flanges Suppliers Mumbai – ASTM B564 Pure Nickel & Super Alloys
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100" data-testid="hero-subtitle">
                India's leading Mumbai-based manufacturer and supplier of high-quality ASTM B564 nickel alloy flanges for marine, chemical, and aerospace industries.
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
            <h2 className="text-3xl font-bold text-center text-navy-primary mb-12">Nickel Alloy Flanges by Grade</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {nickelGrades.map((item, index) => (
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
                Mumbai's Most Trusted Nickel Alloy Flanges Supplier
              </h2>
              <p className="text-lg text-gray-700 mb-6" data-testid="mumbai-intro-description">
                Mamta Steel Traders specializes in high-performance ASTM B564 nickel alloy flanges, serving Mumbai's marine industry, 
                chemical processing plants, and aerospace manufacturers. With dedicated facilities for nickel alloy processing and 
                25+ years of expertise, we supply premium superalloys to customers across India.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-4 border border-gray-200 rounded-lg">
                  <MapPin className="w-8 h-8 text-gold-primary mx-auto mb-2" />
                  <h3 className="font-semibold text-navy-primary">Mumbai Headquarters</h3>
                  <p className="text-sm text-gray-600">Specialized nickel alloy processing facilities</p>
                </div>
                <div className="text-center p-4 border border-gray-200 rounded-lg">
                  <Truck className="w-8 h-8 text-gold-primary mx-auto mb-2" />
                  <h3 className="font-semibold text-navy-primary">Marine Industry Focus</h3>
                  <p className="text-sm text-gray-600">Direct supply to shipyards and offshore platforms</p>
                </div>
                <div className="text-center p-4 border border-gray-200 rounded-lg">
                  <Clock className="w-8 h-8 text-gold-primary mx-auto mb-2" />
                  <h3 className="font-semibold text-navy-primary">Express Delivery</h3>
                  <p className="text-sm text-gray-600">Fast delivery for critical marine applications</p>
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
                Ready to Order Nickel Alloy Flanges?
              </h2>
              <p className="text-xl mb-8 text-blue-100" data-testid="cta-subtitle">
                Get premium quality nickel alloy flanges with fast delivery across India
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
