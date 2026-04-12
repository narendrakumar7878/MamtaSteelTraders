import ProductSEO from "@/components/ProductSEO";
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  TrendingUp,
  Shield,
  Award,
} from "lucide-react";
import { Link } from "wouter";
import ss_plate_mamta_steel_traders_img from "@/assets/SS PLATE  MAMTA STEEL TRADERS.jpg";

export default function CarbonSteelPlates() {
  const carbonSteelGrades = [
    {
      id: "a36",
      name: "ASTM A36 Structural Carbon Steel Plates",
      shortName: "ASTM A36",
      slug: "a36-plates",
      image: ss_plate_mamta_steel_traders_img,
      description: "Standard structural steel for construction and fabrication. Excellent weldability and formability.",
      chemicalComposition: "C: 0.25-0.29%, Mn: 0.80-1.20%, Si: 0.40%, P: 0.04%, S: 0.05%",
      applications: ["Buildings", "Bridges", "Towers", "Machinery"],
      specifications: "ASTM A36 / A36M",
      href: "/product/plates-sheets/carbon-steel/a36-plates"
    },
    {
      id: "a516",
      name: "ASTM A516 Grade 70 Pressure Vessel Plates",
      shortName: "A516 Gr 70",
      slug: "a516-plates",
      image: ss_plate_mamta_steel_traders_img,
      description: "Boiler quality plates for moderate to low-temperature pressure vessel service. NACE MR0175 compliant.",
      chemicalComposition: "C: 0.23-0.27%, Mn: 0.60-1.20%, Si: 0.15-0.40%, P: 0.035%, S: 0.035%",
      applications: ["Boilers", "Pressure Vessels", "Storage Tanks", "Refineries"],
      specifications: "ASTM A516 / ASME SA516",
      href: "/product/plates-sheets/carbon-steel/a516-plates"
    },
    {
      id: "a572",
      name: "ASTM A572 Grade 50 HSLA Plates",
      shortName: "A572 Gr 50",
      slug: "a572-plates",
      image: ss_plate_mamta_steel_traders_img,
      description: "High-strength low-alloy structural steel with enhanced atmospheric corrosion resistance.",
      chemicalComposition: "C: 0.23%, Mn: 1.35%, Si: 0.15-0.40%, V: 0.01-0.15%",
      applications: ["Heavy Duty Structures", "Crane Booms", "Construction Equipment"],
      specifications: "ASTM A572 / ASME SA572",
      href: "/product/plates-sheets/carbon-steel/a572-plates"
    },
    {
      id: "a283",
      name: "ASTM A283 Grade C Carbon Steel Plates",
      shortName: "A283 Gr C",
      slug: "a283-plates",
      image: ss_plate_mamta_steel_traders_img,
      description: "Low and intermediate tensile strength structural steel for general engineering applications.",
      chemicalComposition: "C: 0.24%, Mn: 0.90%, Si: 0.40%, P: 0.035%, S: 0.04%",
      applications: ["Storage Tanks", "General Fabrication", "Low Stress Structures"],
      specifications: "ASTM A283 / ASME SA283",
      href: "/product/plates-sheets/carbon-steel/a283-plates"
    },
    {
      id: "is2062",
      name: "IS 2062 E250 / E350 Structural Steel Plates",
      shortName: "IS 2062",
      slug: "is2062-plates",
      image: ss_plate_mamta_steel_traders_img,
      description: "Standard Indian structural steel for building construction, PEB, and industrial infrastructure.",
      chemicalComposition: "C: 0.22-0.23%, Mn: 1.50%, Si: 0.40%, P: 0.045%, S: 0.045%",
      applications: ["PEB Buildings", "Bridges", "Telecom Towers", "Chassis"],
      specifications: "IS 2062:2011 Grade E250/E350",
      href: "/product/plates-sheets/carbon-steel/is2062-plates"
    },
    {
      id: "c45",
      name: "C45 / AISI 1045 Medium Carbon Engineering Plates",
      shortName: "C45 / 1045",
      slug: "c45-plates",
      image: ss_plate_mamta_steel_traders_img,
      description: "Medium carbon steel characterized by good weldability, machinability, high strength and impact properties.",
      chemicalComposition: "C: 0.42-0.50%, Mn: 0.50-0.80%, Si: 0.40%, P: 0.045%, S: 0.045%",
      applications: ["Gears", "Shafts", "Axles", "Knives", "Hammers"],
      specifications: "EN 10083-2 / DIN 1.1191",
      href: "/product/plates-sheets/carbon-steel/c45-plates"
    },
    {
      id: "en19",
      name: "EN19 / AISI 4140 Alloy Steel Plates",
      shortName: "EN19 / 4140",
      slug: "en19-plates",
      image: ss_plate_mamta_steel_traders_img,
      description: "High-quality alloy steel with high tensile strength and good impact properties. Suitable for high-stress applications.",
      chemicalComposition: "C: 0.36-0.44%, Mn: 0.70-1.00%, Cr: 0.90-1.20%, Mo: 0.25-0.35%",
      applications: ["Engine Components", "Gears", "Connecting Rods", "Shafts"],
      specifications: "BS 970 / EN 10083-3",
      href: "/product/plates-sheets/carbon-steel/en19-plates"
    },
    {
      id: "50crv4",
      name: "50CrV4 / EN47 Chrome Vanadium Spring Steel",
      shortName: "50CrV4 / EN47",
      slug: "50crv4-plates",
      image: ss_plate_mamta_steel_traders_img,
      description: "Premium spring steel alloy with excellent hardenability and fatigue resistance for high-load springs.",
      chemicalComposition: "C: 0.47-0.55%, Mn: 0.70-1.10%, Cr: 0.90-1.20%, V: 0.10-0.25%",
      applications: ["Coil Springs", "Leaf Springs", "Anti-roll Bars", "Knives"],
      specifications: "EN 10089 / DIN 1.8159",
      href: "/product/plates-sheets/carbon-steel/50crv4-plates"
    },
    {
      id: "s355",
      name: "EN 10025 S355JR / S355J2 Structural Steel",
      shortName: "S355JR / J2",
      slug: "s355-plates",
      image: ss_plate_mamta_steel_traders_img,
      description: "High-yield non-alloy structural steel commonly used in heavy structural and offshore applications.",
      chemicalComposition: "C: 0.20-0.22%, Mn: 1.60%, Si: 0.55%, P: 0.025%, S: 0.025%",
      applications: ["Offshore Structures", "Heavy Machinery", "Bridges", "Shipbuilding"],
      specifications: "EN 10025-2",
      href: "/product/plates-sheets/carbon-steel/s355-plates"
    },
    {
      id: "st52",
      name: "DIN 17100 ST52-3 / 1.0570 Structural Plates",
      shortName: "ST52-3",
      slug: "st52-plates",
      image: ss_plate_mamta_steel_traders_img,
      description: "German standard low-carbon, high-strength structural steel with excellent weldability and toughness.",
      chemicalComposition: "C: 0.20%, Mn: 1.60%, Si: 0.55%, P: 0.040%, S: 0.040%",
      applications: ["Structural Fabrication", "Machinery Frames", "Mobile Equipment"],
      specifications: "DIN 17100 / EN 10025",
      href: "/product/plates-sheets/carbon-steel/st52-plates"
    },
    {
      id: "a588",
      name: "ASTM A588 Corten/Weathering Steel Plates",
      shortName: "ASTM A588",
      slug: "a588-plates",
      image: ss_plate_mamta_steel_traders_img,
      description: "Atmospheric corrosion-resistant steel that forms a protective patina, eliminating the need for painting.",
      chemicalComposition: "C: 0.19%, Mn: 0.80-1.25%, Cr: 0.40-0.65%, Cu: 0.25-0.40%",
      applications: ["Outdoor Sculptures", "Bridges", "Exposed Structures", "Facades"],
      specifications: "ASTM A588 Grade A/B",
      href: "/product/plates-sheets/carbon-steel/a588-plates"
    },
    {
      id: "irsm41",
      name: "IRS M41 Indian Railway Standard Steel Plates",
      shortName: "IRS M41",
      slug: "irsm41-plates",
      image: ss_plate_mamta_steel_traders_img,
      description: "High-tensile corrosion-resistant structural steel specifically developed for Indian Railway wagons.",
      chemicalComposition: "C: 0.16%, Mn: 0.50-1.00%, Cr: 0.35-0.60%, Cu: 0.30-0.50%",
      applications: ["Railway Wagons", "Chassis Components", "Rolling Stock"],
      specifications: "IRS M41 (RDSO)",
      href: "/product/plates-sheets/carbon-steel/irsm41-plates"
    }
  ];

  const specifications = [
    "ASTM A36, A516 Gr 70, A572 Gr 50, A283 Gr C",
    "EN 10025 S355JR / J2, DIN 17100 ST52-3",
    "IS 2062 E250 / E350, IRS M41",
    "AISI 1045 / C45, EN19 / 4140, 50CrV4 / EN47",
    "Thickness: 3mm to 300mm",
    "Width: Up to 3000mm | Length: Up to 12000mm",
    "Origin: JSW, SAIL, Evonith, Tata Steel, POSCO, European & Japanese Mills",
  ];

  const applications = [
    "Structural Construction & Buildings",
    "Boiler and Pressure Vessel Fabrication",
    "Bridges and Highway Engineering",
    "Heavy Equipment and Earthmoving Machinery",
    "Indian Railway Wagon & Coach Components",
    "Automotive and Gear Manufacturing",
    "Storage Tanks and Low-Pressure Containers",
    "Architectural Weathering Steel Facades",
  ];

  const features = [
    {
      icon: Shield,
      title: "Certified Quality",
      desc: "Mill Test Certificates (3.1/3.2) provided with all grades.",
    },
    {
      icon: TrendingUp,
      title: "Broad Range",
      desc: "Structural, Boiler, Spring, and Weathering grades in stock.",
    },
    {
      icon: Award,
      title: "Global Standards",
      desc: "Compliance with ASTM, EN, IS, DIN, and JIS standards.",
    },
    {
      icon: CheckCircle,
      title: "Custom Processing",
      desc: "CNC Plasma/Laser cutting and bending services available.",
    },
  ];

  return (
    <>
      <ProductSEO
        title="Carbon Steel Plates & Sheets - A36, A516, S355, IS 2062, Corten | MST"
        description="Premium Carbon Steel Plates & Sheets supplier in Mumbai. Stockist of ASTM A36, A516 Gr 70, S355JR, IS 2062, C45, EN19, and A588 Corten steel. High-quality structural and boiler steel for global export to UAE, USA, and Europe."
        keywords="carbon steel plates, carbon steel sheets, ASTM A36, A516 Grade 70, IS 2062 steel, S355JR plates, Corten steel Mumbai, high strength carbon steel price"
        category="Plates & Sheets"
        productName="Carbon Steel Plates & Sheets"
        specifications={specifications}
        canonicalUrl="/product/plates-sheets/carbon-steel"
      />

      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb Navigation */}
        <nav className="bg-white py-4 border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-navy-primary transition-colors">Home</Link>
              <ArrowRight className="w-4 h-4" />
              <Link href="/products" className="hover:text-navy-primary transition-colors">Products</Link>
              <ArrowRight className="w-4 h-4" />
              <Link href="/product/plates-sheets" className="hover:text-navy-primary transition-colors">Plates & Sheets</Link>
              <ArrowRight className="w-4 h-4" />
              <span className="text-navy-primary font-medium">Carbon Steel Plates & Sheets</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-navy-primary to-navy-secondary text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Premium Carbon Steel Plates & Sheets
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                The global benchmark for structural, boiler, and engineering carbon steel grades
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
                  Contact for Quote
                </Link>
                <a href="tel:+919819322576" className="border-2 border-white text-white hover:bg-white hover:text-navy-primary font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
                  Call: +91 9819322576
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Grade Gallery Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-navy-primary mb-6 uppercase tracking-tight">
                  Our Carbon Steel Grade Inventory
                </h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                  Explore our extensive inventory of high-performance carbon steel grades. From general structural plates to specialized boiler and high-tensile engineering alloys.
                </p>
              </div>

              {/* Grid with 12 New Cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {carbonSteelGrades.map((grade) => (
                  <div key={grade.id} className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group flex flex-col h-full">
                    {/* Image */}
                    <div className="relative overflow-hidden">
                      <img
                        src={grade.image}
                        alt={grade.name}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute top-4 right-4 bg-navy-primary text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                        {grade.shortName}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-grow flex-col">
                      <h3 className="text-xl font-bold text-navy-primary mb-3 line-clamp-2 uppercase tracking-tight italic">
                        {grade.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-tight flex-grow">
                        {grade.description}
                      </p>

                      <div className="mb-4">
                        <h4 className="text-[10px] font-black uppercase text-navy-primary mb-1 tracking-widest">Chemical Composition:</h4>
                        <p className="text-xs text-gray-600 line-clamp-2 italic">{grade.chemicalComposition}</p>
                      </div>

                      <div className="mb-4">
                        <h4 className="text-[10px] font-black uppercase text-navy-primary mb-1 tracking-widest">Key Applications:</h4>
                        <ul className="text-xs text-gray-600 space-y-1">
                          {grade.applications.map((app, idx) => (
                            <li key={idx} className="flex items-center">
                              <CheckCircle className="w-3 h-3 text-gold-primary mr-2 flex-shrink-0" />
                              {app}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4 border-t border-gray-100">
                        <Link
                          href={grade.href}
                          className="w-full bg-gold-primary hover:bg-gold-secondary text-navy-primary font-bold py-2 px-4 rounded-lg transition-all duration-300 text-center text-sm block border border-transparent hover:border-navy-primary"
                        >
                          View Details & Specs
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Product Features */}
        <section className="py-16 bg-white border-t border-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-navy-primary mb-12 uppercase tracking-tight italic">
              Why Choose MST Carbon Steel?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300 bg-gray-50/30">
                  <feature.icon className="w-12 h-12 text-gold-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-navy-primary mb-2 uppercase tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-medium">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Supply CTA */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto bg-gradient-to-br from-navy-primary to-navy-secondary rounded-[3.5rem] p-16 relative overflow-hidden shadow-2xl text-center">
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 uppercase tracking-tight">
                  Ready for <span className="text-gold-primary italic">Global Procurement?</span>
                </h2>
                <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                  We specialize in bulk exports of structural and engineering carbon steel to UAE, USA, Europe, and Asia. Get mill-certified quality at competitive wholesale rates.
                </p>
                <div className="grid md:grid-cols-3 gap-8 justify-center mb-12">
                  <div className="p-8 bg-white/5 rounded-[2rem] border border-white/10">
                    <Mail className="w-8 h-8 text-gold-primary mx-auto mb-4" />
                    <p className="text-[10px] font-black uppercase tracking-widest text-blue-200 mb-1">Email Inquiry</p>
                    <p className="text-sm font-bold text-white italic">mamtasteeltraders@gmail.com</p>
                  </div>
                  <div className="p-8 bg-white/5 rounded-[2rem] border border-white/10">
                    <Phone className="w-8 h-8 text-gold-primary mx-auto mb-4" />
                    <p className="text-[10px] font-black uppercase tracking-widest text-blue-200 mb-1">Direct Sales</p>
                    <p className="text-sm font-bold text-white italic">+91 9819322576</p>
                  </div>
                  <div className="p-8 bg-white/5 rounded-[2rem] border border-white/10">
                    <MapPin className="w-8 h-8 text-gold-primary mx-auto mb-4" />
                    <p className="text-[10px] font-black uppercase tracking-widest text-blue-200 mb-1">Global Hub</p>
                    <p className="text-sm font-bold text-white italic">Mumbai, Maharashtra</p>
                  </div>
                </div>
                <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary font-black py-4 px-12 rounded-xl text-lg transition-all shadow-2xl hover:scale-105 uppercase tracking-widest">
                  Request Detailed Quote
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
