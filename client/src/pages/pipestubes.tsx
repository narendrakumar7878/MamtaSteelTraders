import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { 
  Home, 
  ChevronRight, 
  Layers, 
  Settings, 
  Zap, 
  ShieldCheck, 
  Factory, 
  Hammer, 
  RectangleHorizontal, 
  Maximize,
  Shield,
  Globe,
  Award,
  CheckCircle,
  Truck,
  Phone,
  Mail,
  Cylinder
} from "lucide-react";
import ProductSEO from "@/components/ProductSEO";

export default function Pipestubes() {
  const pipeCategories = [
    {
      title: "Stainless Steel Pipes & Tubes",
      icon: <Layers className="w-12 h-12 text-gold-primary" />,
      description: "Superior corrosion resistance for chemical, food, and pharmaceutical industries.",
      keywords: [
        "ASTM / ASME SA 312 GR. TP 304, 304L, 304H, 309S, 309H, 310S, 310H",
        "316, 316TI, 316H, 316 LN, 317, 317L, 321, 321H, 347, 347H, 904L",
        "Seamless / ERW / Welded in Round & Square",
        "15 NB UP TO 1200 NB SCH 5S, 10S, 10, 20, 40S, 40, STD, 60, 80S, 80, XS",
        "Duplex Steel: S 31803, S 32205, S 32550, S 32750, S 32760"
      ]
    },
    {
      title: "Carbon Steel Pipes & Tubes",
      icon: <Settings className="w-12 h-12 text-gold-primary" />,
      description: "High-strength solutions for oil gas, water transmission, and structural use.",
      keywords: [
        "ASTM / ASME A 53 GR. A, B",
        "ASTM / ASME 106 GR. A, B, C",
        "API 5L GR. B, API 5L X 42, X 46, X 52, X 60, X 70",
        "ASTM / ASME A 691 GR A, B, C",
        "Seamless / ERW / Welded in Round & Square"
      ]
    },
    {
      title: "Alloy Steel Pipes",
      icon: <Zap className="w-12 h-12 text-gold-primary" />,
      description: "Chrome-moly steel designed for high-temperature and high-pressure service.",
      keywords: [
        "ASTM / ASME A 335 GR P1, P5, P9, P11, P12, P22, P23, P91",
        "ASTM / ASME A 691 GR P1 CR, 1 1/4 CR, 2 1/4 CR, 5 CR, 9CR, 91",
        "High Temperature Applications",
        "Seamless / ERW / Welded",
        "15 NB UP TO 1200 NB"
      ]
    },
    {
      title: "Duplex & Super Duplex Pipes",
      icon: <ShieldCheck className="w-12 h-12 text-gold-primary" />,
      description: "High resistance to pitting and stress corrosion cracking.",
      keywords: [
        "ASTM / ASME SA 790 UNS NO S 31803",
        "S 32205, S 32550, S 32750, S 32760",
        "Corrosion Resistant Applications",
        "Seamless / ERW / Welded",
        "Round & Square Forms"
      ]
    },
    {
      title: "EFSW / SAW / HSAW / LSAW Pipes",
      icon: <Factory className="w-12 h-12 text-gold-primary" />,
      description: "Large diameter welded pipes for heavy industrial and infrastructure projects.",
      keywords: [
        "Electric Fusion Submerged Arc Welded",
        "Submerged Arc Welded (SAW)",
        "Helical Submerged Arc Welded (HSAW)",
        "Longitudinal Submerged Arc Welded (LSAW)",
        "Large Diameter Applications"
      ]
    },
    {
      title: "Welded Wear Resistant Pipes",
      icon: <Hammer className="w-12 h-12 text-gold-primary" />,
      description: "Engineered for maximum durability in high-abrasion environments.",
      keywords: [
        "AR400 Wear Resistant Steel",
        "Abrasion Resistant Applications",
        "Mining Industry Applications",
        "Heavy Duty Construction",
        "High Durability"
      ]
    },
    {
      title: "Plate Welded Pipes",
      icon: <RectangleHorizontal className="w-12 h-12 text-gold-primary" />,
      description: "Custom fabricated large-bore pipes from high-quality steel plates.",
      keywords: [
        "Custom Fabricated Pipes",
        "Large Diameter Welded Pipes",
        "Heavy Wall Thickness",
        "Structural Applications",
        "API 5L Compliance"
      ]
    },
    {
      title: "Large OD Seamless Pipes",
      icon: <Maximize className="w-12 h-12 text-gold-primary" />,
      description: "Heavy-wall seamless pipes for extreme pressure and offshore applications.",
      keywords: [
        "Large Outside Diameter Seamless",
        "High Pressure Applications",
        "Oil & Gas Industry",
        "Petrochemical Applications",
        "ASTM / ASME Standards"
      ]
    }
  ];

  const specifications = [
    "Standards: ASTM A312, A213, A269, A335, A106, A53, API 5L",
    "Material: Stainless, Carbon, Alloy, Duplex, Super Duplex, Nickel Alloy",
    "Sizes: 1/8\" NB to 48\" NB / 15 NB to 1200 NB",
    "Types: Seamless, Welded, ERW, EFSW, SAW, LSAW",
    "Schedules: SCH 5 to SCH XXS",
    "Length: Single Random, Double Random & Cut Length"
  ];

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Pipes & Tubes Manufacturers, Stockists & Suppliers from Mumbai India | ASTM A312, A335, A106 Pipes</title>
        <meta name="description" content="Leading stockist & supplier of premium stainless steel pipes, carbon steel pipes, and alloy steel pipes in Mumbai, India. We supply ASTM A312 TP304/316L, A335 P11/P22/P91, API 5L Grade B pipes worldwide. Seamless, welded, and ERW pipes with Mill Test Certificates." />
        <meta name="keywords" content="pipes tubes, stainless steel pipes Mumbai, carbon steel pipes India, alloy steel pipes supplier, seamless pipes manufacturer, welded pipes exporter, ERW pipes stockist, ASTM A312 TP304, ASTM A335 P91, API 5L pipes, duplex steel pipes, Mumbai steel market, industrial piping solutions, steel pipe inventory Mumbai, Tata pipes stockist, MSL pipes India" />
        
        {/* Advanced SEO & AEO Meta Tags */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="Mamta Steel Traders" />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Mumbai" />
        <meta name="geo.position" content="18.9220;72.8347" />
        <meta name="ICBM" content="18.9220, 72.8347" />

        {/* AI & Voice Search Optimization (AEO) */}
        <meta name="page-intent" content="commercial, transaction, order, inquiry" />
        <meta name="voice-search-product" content="buy pipes and tubes in Mumbai, order stainless steel pipes India, price of ASTM A312 pipes" />
        <meta name="AI-product-classification" content="Industrial Steel Piping, Seamless and Welded Steel Pipes" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Pipes & Tubes Manufacturers & Suppliers in Mumbai India" />
        <meta property="og:description" content="Best quality stainless steel, carbon steel, and alloy steel pipes and tubes. Exporting to UAE, USA, Saudi Arabia." />
        <meta property="og:url" content="https://mamtasteeltraders.com/pipes-tubes" />
        <meta property="og:site_name" content="Mamta Steel Traders" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pipes & Tubes Manufacturers & Suppliers in Mumbai" />
        <meta name="twitter:description" content="Premium Industrial Pipes & Tubes. Seamless & Welded." />

        {/* Structured Data (Schema.org) */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "Pipes & Tubes",
              "description": "Premium industrial pipes and tubes including Stainless Steel, Carbon Steel, and Alloy Steel grades like ASTM A312, A335, and A106.",
              "brand": {
                "@type": "Brand",
                "name": "Mamta Steel Traders"
              },
              "offers": {
                "@type": "Offer",
                "availability": "https://schema.org/InStock",
                "priceCurrency": "INR"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "156"
              }
            }
          `}
        </script>

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Which are the best pipes and tubes for high-pressure service?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Seamless pipes manufactured as per ASTM A106 and ASTM A335 standards are ideal for high-pressure and high-temperature services in power plants and refineries."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you export pipes and tubes globally?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Mamta Steel Traders exports premium pipes and tubes to over 30 countries including UAE, Saudi Arabia, USA, and UK from our Mumbai hub."
                  }
                }
              ]
            }
          `}
        </script>
      </Helmet>

      <main className="min-h-screen bg-white">
        {/* Breadcrumb Navigation */}
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex items-center space-x-2 text-sm">
              <Link href="/" className="flex items-center text-gray-600 hover:text-navy-primary transition-colors">
                <Home className="w-4 h-4 mr-1" />
                Home
              </Link>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <Link href="/products" className="text-gray-600 hover:text-navy-primary transition-colors">
                Products
              </Link>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="text-navy-primary font-medium tracking-tight">Pipes & Tubes</span>
            </nav>
          </div>
        </div>

        {/* Hero Section - Text Content Driven */}
        <section className="bg-navy-primary text-white py-16 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-8 uppercase tracking-tighter leading-tight italic">
                Pipes & Tubes Center
                <span className="block text-xl md:text-2xl text-gold-primary font-normal mt-4 normal-case tracking-widest italic">India's Premier Stockist & Supplier of Industrial Piping Solutions</span>
              </h1>
              
              <p className="text-lg md:text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed font-light mb-12">
                At Mamta Steel Traders, we take pride in being a top-tier provider of <strong>high-performance pipes & tubes</strong> for the global energy, chemical, and construction sectors. From <strong>ASTM A312 stainless steel</strong> to <strong>API 5L high-pressure line pipes</strong>, our inventory is curated to meet the world’s most demanding engineering specifications.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary font-bold py-4 px-10 rounded-xl transition-all hover:scale-105 shadow-2xl">
                  Get Technical Quote
                </Link>
                <a href="tel:+919819322576" className="border-2 border-white/30 hover:bg-white hover:text-navy-primary text-white font-bold py-4 px-10 rounded-xl transition-all flex items-center">
                  <Phone className="w-5 h-5 mr-3" /> Call Specialist
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Products Grid - Icon Based */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-primary mb-4 italic uppercase tracking-tighter">
                Our Comprehensive Pipe Inventory
              </h2>
              <div className="w-24 h-1 bg-gold-primary mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto italic">
                Precisely engineered products compliant with international standards like ASTM, ASME, API, and DIN.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {pipeCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 p-8 rounded-2xl border border-gray-100 dark:border-gray-800 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
                >
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-500">
                    {category.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-navy-primary mb-4 italic uppercase tracking-tight leading-6">
                    {category.title}
                  </h3>
                  
                  <p className="text-sm text-gray-500 mb-6 font-light italic">
                    {category.description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-gold-primary uppercase tracking-widest border-b border-gold-primary/20 pb-1">Technical Grades</h4>
                    <ul className="space-y-1">
                      {category.keywords.slice(0, 3).map((keyword, keyIndex) => (
                        <li key={keyIndex} className="text-[11px] text-gray-700 font-medium leading-tight italic">
                          • {keyword}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Specification Matrix - DATA DENSE SEO SECTION */}
        <section className="py-16 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy-primary italic uppercase tracking-tighter">
                Pipe & Tube <span className="text-gold-primary italic">Technical Specification Matrix</span>
              </h2>
              <div className="w-20 h-1 bg-gold-primary mx-auto mt-4"></div>
            </div>

            <div className="overflow-x-auto rounded-2xl shadow-2xl border border-gray-100">
              <table className="w-full text-sm text-left text-gray-700">
                <thead className="bg-navy-primary text-gold-primary uppercase text-xs tracking-widest italic">
                  <tr>
                    <th className="px-6 py-4 border-b border-white/10">Material Category</th>
                    <th className="px-6 py-4 border-b border-white/10">ASTM / ASME Standards</th>
                    <th className="px-6 py-4 border-b border-white/10">Available Grades</th>
                    <th className="px-6 py-4 border-b border-white/10">Wall Thickness (SCH)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 italic">
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-bold text-navy-primary">Stainless Steel Pipes</td>
                    <td className="px-6 py-4 text-[11px]">ASTM A312, A213, A269</td>
                    <td className="px-6 py-4 text-[11px]">304, 304L, 316, 316L, 317L, 321, 347, 904L</td>
                    <td className="px-6 py-4 text-[11px]">SCH 5, 10, 40, 80, 160, XXS</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-bold text-navy-primary">Carbon Steel Pipes</td>
                    <td className="px-6 py-4 text-[11px]">ASTM A106, A53, API 5L</td>
                    <td className="px-6 py-4 text-[11px]">Grade B, X42, X52, X60, X65, X70</td>
                    <td className="px-6 py-4 text-[11px]">SCH 10 TO SCH 160, STD, XS, XXS</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-bold text-navy-primary">Alloy Steel Pipes</td>
                    <td className="px-6 py-4 text-[11px]">ASTM A335, A691</td>
                    <td className="px-6 py-4 text-[11px]">P5, P9, P11, P12, P22, P91, P92</td>
                    <td className="px-6 py-4 text-[11px]">SCH 40 TO SCH XXS</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-bold text-navy-primary">Nickel Alloy Pipes</td>
                    <td className="px-6 py-4 text-[11px]">ASTM B161, B165, B167, B407</td>
                    <td className="px-6 py-4 text-[11px]">Monel, Inconel, Hastelloy, Nickel 200/201</td>
                    <td className="px-6 py-4 text-[11px]">Custom Schedules Available</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* SEO Technical Article Section */}
        <section className="py-20 bg-gray-50 border-t border-b border-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto space-y-16">
              
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-navy-primary italic uppercase tracking-tighter">
                    Mumbai's Trusted <span className="text-gold-primary italic">Steel Pipe Suppliers</span>
                  </h2>
                  <p className="text-gray-700 leading-relaxed font-light italic">
                    As a leading <strong>Pipes and Tubes manufacturer in India</strong>, Mamta Steel Traders offers an extensive inventory of piping solutions designed for critical infrastructure. Our <strong>Stainless Steel Seamless Pipes</strong> are compliant with EN 10204 3.1 certification, ensuring 100% traceability for industrial projects in Mumbai, Pune, and globally.
                  </p>
                  <p className="text-gray-700 leading-relaxed font-light italic">
                    Whether you require <strong>Schedule 40 Carbon Steel Pipes</strong> for oil transmission or <strong>ASTM A335 P91 Alloy Steel Pipes</strong> for high-temperature power plant applications, our stockyard in Mumbai is equipped to handle bulk orders with rapid turnaround times. We are the preferred <strong>Jindal Pipe Stockists in Mumbai</strong>, offering competitive pricing for Tata, MSL, and ISMT manufactured products.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Shield className="w-6 h-6 text-gold-primary mr-4 mt-1" />
                      <div>
                        <h4 className="font-bold text-navy-primary text-sm uppercase italic">Third Party Inspection (TPI)</h4>
                        <p className="text-xs text-gray-600 italic">We welcome inspections from SGS, TUV, BV, and Lloyd's for all your high-value orders.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Globe className="w-6 h-6 text-gold-primary mr-4 mt-1" />
                      <div>
                        <h4 className="font-bold text-navy-primary text-sm uppercase italic">Global Export Hub</h4>
                        <p className="text-xs text-gray-600 italic">Weekly shipments to Dubai, Qatar, Oman, Singapore, and Australia via Mumbai Port.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 italic">
                  <h3 className="text-xl font-bold text-navy-primary mb-6 text-center uppercase tracking-widest">Piping Dimensional Data</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-gray-50">
                      <span className="text-sm font-semibold text-gray-700">Standards Compliance</span>
                      <span className="text-sm font-bold text-navy-primary">API, ASTM, ASME, DIN, EN, JIS</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-50">
                      <span className="text-sm font-semibold text-gray-700">Manufacturing Types</span>
                      <span className="text-sm font-bold text-navy-primary">Seamless, Welded, ERW, LSAW</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-50">
                      <span className="text-sm font-semibold text-gray-700">End Connections</span>
                      <span className="text-sm font-bold text-navy-primary">Bevelled, Plain, Screwed, Threaded</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-50">
                      <span className="text-sm font-semibold text-gray-700">Surface Finish</span>
                      <span className="text-sm font-bold text-navy-primary">Pickled, Polished, Galvanized, PE</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quality & Industrial Serving Grid */}
              <div className="bg-navy-secondary rounded-3xl p-12 text-white relative overflow-hidden italic">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gold-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                <div className="grid md:grid-cols-2 gap-12 relative z-10">
                  <div>
                    <h3 className="text-2xl font-bold mb-6 uppercase tracking-tight text-white flex items-center">
                      <CheckCircle className="w-8 h-8 text-gold-primary mr-4" />
                      Technical Compliance
                    </h3>
                    <ul className="space-y-3">
                      <li className="text-sm text-blue-100 font-light">• 100% NDT Testing: Ultrasonic & Radiography</li>
                      <li className="text-sm text-blue-100 font-light">• Chemical & Mechanical Test Reports Included</li>
                      <li className="text-sm text-blue-100 font-light">• PMI (Positive Material Identification) Verified</li>
                      <li className="text-sm text-blue-100 font-light">• IBR Approved Supplies for Boilers & Pressure Vessels</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-6 uppercase tracking-tight text-white flex items-center">
                      <Truck className="w-8 h-8 text-gold-primary mr-4" />
                      Sectors Served
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {["Oil & Gas", "Refineries", "Petrochemicals", "Pharmaceuticals", "Power Plants", "Heat Exchangers", "Construction", "Water Transmission"].map((industry, i) => (
                        <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-blue-100 font-medium tracking-tight">
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section - CRITICAL FOR AEO/SEO */}
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-navy-primary italic uppercase tracking-tighter">
                    Frequently Asked <span className="text-gold-primary italic">Piping Questions</span>
                  </h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      q: "What is the difference between Seamless and Welded pipes?",
                      a: "Seamless pipes are manufactured from a solid round steel 'billet' which is heated and pushed or pulled over a form until the steel is shaped into a hollow tube. Welded pipes are manufactured from a plate or continuous coil that is rolled and then welded along its length."
                    },
                    {
                      q: "How do I choose the right pipe schedule (SCH)?",
                      a: "Pipe schedule (SCH) refers to the wall thickness. Higher schedules mean thicker walls, capable of withholding higher pressure. Choosing the right schedule depends on the operating pressure, temperature, and fluid type in your application."
                    },
                    {
                      q: "Do you provide Material Test Certificates (MTC)?",
                      a: "Yes, Mamta Steel Traders provides original Mill Test Certificates (MTC) as per EN 10204 3.1 standard for all stainless, carbon, and alloy steel pipes in our inventory."
                    },
                    {
                      q: "Can you supply custom length pipes?",
                      a: "While we stock standard single random and double random lengths (6m and 12m), we offer professional in-house cutting services for custom pieces to meet your project's exact dimensions."
                    }
                  ].map((faq, index) => (
                    <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <h4 className="text-navy-primary font-bold mb-3 italic">Q: {faq.q}</h4>
                      <p className="text-gray-600 text-sm italic leading-relaxed">A: {faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Global Supply & Footer CTA */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h3 className="text-3xl font-bold text-navy-primary mb-6 italic uppercase tracking-tighter">
                Leading Steel <span className="text-gold-primary italic">Distribution Network</span>
              </h3>
              <p className="text-gray-600 mb-12 italic leading-relaxed">
                Headquartered in the <strong>Mumbai Steel Market</strong>, Mamta Steel Traders provides rapid dispatch for bulk <strong>pipes and tubes</strong> across India and international industrial zones. Our logistics partnership ensures that your <strong>industrial piping orders</strong> reach sites in Dubai, Singapore, and Europe without delays.
              </p>
              
              <div className="bg-gradient-to-br from-navy-primary to-navy-secondary p-12 rounded-[2rem] shadow-2xl space-y-8 relative group overflow-hidden">
                <div className="absolute inset-0 bg-gold-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                <h4 className="text-3xl font-black text-white italic uppercase tracking-widest">Get Your Technical Quotation Today</h4>
                <p className="text-blue-100 text-lg font-light italic opacity-90">
                  Specializing in <strong>ASTM A335 High-Pressure Alloy Pipes</strong> and <strong>API 5L Grade B Seamless Line Pipes</strong>.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6 pt-4">
                  <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-12 py-5 rounded-2xl font-black transition-all hover:scale-105 shadow-2xl uppercase tracking-widest">
                    Request Quote
                  </Link>
                  <a href="mailto:narendrakumar7878@gmail.com" className="bg-white hover:bg-slate-100 text-navy-primary px-12 py-5 rounded-2xl font-black transition-all hover:scale-105 shadow-2xl flex items-center justify-center uppercase tracking-widest">
                    <Mail className="w-5 h-5 mr-3" /> Technical Inquiry
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
