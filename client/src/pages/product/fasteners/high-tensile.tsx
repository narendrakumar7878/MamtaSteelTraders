import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, MapPin, Star, CheckCircle, TrendingUp, Shield, Award, Zap, Info, Box } from "lucide-react";
import ss_nots_bolts_mamta_steel_traders_img from "@/assets/SS NOTS BOLTS MAMTA STEEL TRADERS.jpg";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function HighTensileFasteners() {
  const specifications = [
    "ASTM A193 Grade B7, B16 - Alloy Steel and Stainless Steel Bolting Materials",
    "ASTM A320 Grade L7, L43 - Alloy Steel and Stainless Steel Bolting Materials for Low Temperature Service",
    "ASTM A325 - Structural Bolts, Steel, Heat Treated",
    "ASTM A490 - Heat Treated Steel Structural Bolts",
    "ISO 898-1 - Property Classes 8.8, 10.9, 12.9",
    "DIN Standards - DIN 912, DIN 933, DIN 931, DIN 6912",
    "Size Range: M3 to M100 | 1/8\" to 4\"",
    "Length: Up to 6000mm",
    "Thread Pitch: Coarse and Fine Thread Available",
    "Surface Finish: Plain, Zinc Plated, Hot Dip Galvanized"
  ];

  const technicalGrades = [
    {
      grade: "ASTM A193 B7",
      title: "High Temp Stud Bolts",
      desc: "The global standard for pressure vessels, valves, and flanges in oil & gas.",
      link: "/product/fasteners/high-tensile/b7-bolts",
      color: "border-blue-500"
    },
    {
      grade: "ASTM A193 B16",
      title: "Ultra-High Temp",
      desc: "Enhanced Chromium-Molybdenum-Vanadium steel for creep resistance up to 525°C.",
      link: "/product/fasteners/high-tensile/b16-bolts",
      color: "border-orange-500"
    },
    {
      grade: "ASTM A320 L7",
      title: "Low Temp Service",
      desc: "Quenched & tempered alloy steel with mandatory Charpy impact testing for sub-zero use.",
      link: "/product/fasteners/high-tensile/l7-bolts",
      color: "border-cyan-500"
    },
    {
      grade: "ISO 8.8",
      title: "Structural Standard",
      desc: "The 'High Tensile' baseline for structural steel and general engineering.",
      link: "/product/fasteners/high-tensile/8-8-fasteners",
      color: "border-green-500"
    },
    {
      grade: "ISO 10.9",
      title: "High-Load Fastening",
      desc: "Optimized for automotive, heavy machinery, and high-vibration structural joints.",
      link: "/product/fasteners/high-tensile/10-9-fasteners",
      color: "border-purple-500"
    },
    {
      grade: "ISO 12.9",
      title: "Highest Strength",
      desc: "1220 MPa tensile strength for precision engineering and engine components.",
      link: "/product/fasteners/high-tensile/12-9-fasteners",
      color: "border-red-500"
    },
    {
      grade: "Stainless A4-80",
      title: "Marine High Tensile",
      desc: "316L high-strength stainless for offshore and chemical processing environments.",
      link: "/product/fasteners/high-tensile/a4-80-fasteners",
      color: "border-teal-500"
    },
    {
      grade: "ASTM A194 2H",
      title: "High Strength Nuts",
      desc: "Heavy hex nuts quenched & tempered for high-pressure piping assemblies.",
      link: "/product/fasteners/high-tensile/2h-nuts",
      color: "border-gold-500"
    }
  ];

  const productCategories = [
    {
      name: "Hex Head Bolts",
      description: "High tensile hexagon head bolts in various grades",
      grades: ["8.8", "10.9", "12.9", "B7", "B16"],
      image: ss_nots_bolts_mamta_steel_traders_img,
      link: "/product/fasteners/high-tensile/8-8-fasteners"
    },
    {
      name: "Socket Head Cap Screws",
      description: "Allen key socket head cap screws for precision applications",
      grades: ["12.9", "A4-80", "A2-70"],
      image: ss_nots_bolts_mamta_steel_traders_img,
      link: "/product/fasteners/high-tensile/12-9-fasteners"
    },
    {
      name: "Stud Bolts",
      description: "Fully threaded stud bolts for flange applications",
      grades: ["B7", "B16", "L7", "316L"],
      image: ss_nots_bolts_mamta_steel_traders_img,
      link: "/product/fasteners/high-tensile/b7-bolts"
    },
    {
      name: "Hex Nuts",
      description: "High strength hex nuts matching bolt grades",
      grades: ["2H", "2HM", "A4-80", "A2-70"],
      image: ss_nots_bolts_mamta_steel_traders_img,
      link: "/product/fasteners/high-tensile/2h-nuts"
    },
    {
      name: "Washers",
      description: "Hardened washers for high tensile applications",
      grades: ["HV300", "A4", "A2", "Carbon Steel"],
      image: ss_nots_bolts_mamta_steel_traders_img,
      link: "/contact"
    },
    {
      name: "U-Bolts",
      description: "Heavy duty U-bolts for structural applications",
      grades: ["8.8", "10.9", "316L", "304L"],
      image: ss_nots_bolts_mamta_steel_traders_img,
      link: "/contact"
    }
  ];

  const applications = [
    "Structural Steel Construction",
    "Heavy Machinery Assembly",
    "Bridge Construction",
    "Power Plant Equipment",
    "Pressure Vessel Applications",
    "Wind Energy Projects",
    "Oil and Gas Equipment",
    "Marine and Offshore Structures"
  ];

  const features = [
    { icon: Shield, title: "High Strength", desc: "Superior tensile strength up to 1220 MPa" },
    { icon: TrendingUp, title: "Corrosion Resistant", desc: "Various coatings available for corrosion protection" },
    { icon: Award, title: "Quality Certified", desc: "Mill test certificates and third-party inspection" },
    { icon: CheckCircle, title: "Multiple Grades", desc: "Wide range of property classes and materials" }
  ];

  return (
    <>
      <ProductSEO
        title="High Tensile Fasteners - SS 316L, 304, ASTM A193 B7/B16 Bolts | Mumbai Supplier"
        description="Premium high tensile fasteners manufacturer. Specialist in ASTM A193 B7, B16, L7 bolts, ISO 8.8/10.9/12.9. High-performance bolting for UAE, Saudi, Europe, and Global Industry. Certified quality."
        keywords="high tensile fasteners, ASTM A193 B7 bolts, B16 bolts, A320 L7 bolts, ISO 8.8 fasteners, ISO 10.9 bolts, ISO 12.9 fasteners, A4-80 stainless bolts, 2H nuts manufacturer, Mumbai fastener supplier, high strength bolting India, UAE fastener exporter, Saudi oil gas fasteners"
        category="Fasteners"
        productName="High Tensile Fasteners"
        specifications={specifications}
        canonicalUrl="/product/fasteners/high-tensile"
      />

      <div className="min-h-screen bg-[#F8FAFC]">
        {/* Navigation */}
        <nav className="bg-white py-4 border-b border-gray-100 shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex items-center space-x-2 text-sm text-gray-500 font-sans">
              <Link href="/" className="hover:text-gold-primary transition-colors">Home</Link>
              <ArrowRight className="w-4 h-4" />
              <Link href="/products" className="hover:text-gold-primary transition-colors">Products</Link>
              <ArrowRight className="w-4 h-4" />
              <span className="text-navy-primary font-bold">High Tensile Fasteners</span>
            </div>
          </div>
        </nav>

        {/* Hero Section - Luxury Industrial Style */}
        <section className="relative bg-[#0F172A] py-20 overflow-hidden font-sans">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_#f39c12_0%,_transparent_50%)]"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
                High Performance <br/>
                <span className="text-gold-primary italic font-serif">Tensile Fastening</span> Solutions
              </h1>
              <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
                Global distribution systems for critical industrial grades. Engineering safety through high-load structural integrity and certified material excellence.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary font-bold py-4 px-10 rounded-xl transition-all transform hover:scale-105 shadow-2xl flex items-center">
                  Request Technical Quote <Zap className="ml-2 w-5 h-5" />
                </Link>
                <a href="tel:+919819322576" className="bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-10 rounded-xl transition-all backdrop-blur-md border border-white/20 flex items-center">
                  Consultation: +91 9819322576
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Technical Grade Gallery - THE CORE UPDATE */}
        <section className="py-24 bg-white font-sans">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-navy-primary mb-4 tracking-tight">Technical Grade Gallery</h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">Explore in-depth specifications, chemical compositions, and mechanical properties for our primary industrial fastener grades.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {technicalGrades.map((grade, index) => (
                <Link key={index} href={grade.link}>
                  <motion.div 
                    whileHover={{ y: -8 }}
                    className={`bg-white p-8 rounded-3xl border-l-4 ${grade.color} shadow-sm border-gray-100 hover:shadow-2xl transition-all cursor-pointer group flex flex-col h-full`}
                  >
                    <div className="mb-4 flex justify-between items-start">
                      <span className="text-2xl font-black text-navy-primary tracking-tighter group-hover:text-gold-primary transition-colors">{grade.grade}</span>
                      <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-gold-primary transition-colors transform group-hover:translate-x-1" />
                    </div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-3">{grade.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">{grade.desc}</p>
                    <div className="text-gold-primary font-bold text-xs uppercase tracking-widest flex items-center">
                      View Details & Specs <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Product Categories Section */}
        <section className="py-24 bg-[#F1F5F9] font-sans">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-navy-primary mb-4 uppercase tracking-widest text-sm">Industrial Catalog</h2>
              <h3 className="text-4xl md:text-5xl font-black text-navy-primary tracking-tight">Fastener Configurations</h3>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {productCategories.map((category, index) => (
                <div key={index} className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 font-sans">
                  <div className="relative h-64 overflow-hidden group">
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-primary/80 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <h4 className="text-2xl font-bold">{category.name}</h4>
                    </div>
                  </div>
                  <div className="p-8">
                    <p className="text-gray-600 mb-6 leading-relaxed text-sm">{category.description}</p>
                    <div className="mb-8 font-sans">
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-3">Key Specification Grades</span>
                      <div className="flex flex-wrap gap-2">
                        {category.grades.map((grade, i) => (
                          <span key={i} className="bg-slate-100 text-navy-primary px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter">
                            {grade}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Link href={category.link} className="w-full py-4 bg-navy-primary hover:bg-gold-primary text-white hover:text-navy-primary font-bold rounded-xl transition-all flex items-center justify-center group uppercase text-xs tracking-widest">
                      View Technical Specs <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Performance Grid / Features */}
        <section className="py-24 bg-white font-sans">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="p-10 rounded-[2.5rem] bg-[#F8FAFC] border border-gray-100 hover:border-gold-primary/30 transition-all">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6">
                    <feature.icon className="w-7 h-7 text-gold-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-primary mb-3 tracking-tight font-sans">{feature.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Global SEO Footer Highlights */}
        <section className="bg-navy-primary py-24 text-white font-sans overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gold-primary/5 -skew-x-12 transform translate-x-1/4"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 italic font-serif text-gold-primary">Global Industrial Supply Integrity</h2>
              <p className="text-blue-100 opacity-80 max-w-2xl mx-auto">Providing high-load fastening solutions across the world's most demanding sectors.</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8 text-sm opacity-90">
              <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm border border-white/5">
                <h4 className="font-bold text-gold-primary mb-4 flex items-center"><MapPin className="w-4 h-4 mr-2" /> PAN INDIA REACH</h4>
                <p className="leading-relaxed">Leading stockist in Mumbai, supplying industrial clusters in Pune, Gujarat, Chennai, Bangalore, and Delhi-NCR with daily logistics support.</p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm border border-white/5">
                <h4 className="font-bold text-gold-primary mb-4 flex items-center"><Box className="w-4 h-4 mr-2" /> GCC & MIDDLE EAST</h4>
                <p className="leading-relaxed">Approved exporter to UAE (Abu Dhabi, Dubai), Saudi Arabia (Jubail, Yanbu), Qatar, Kuwait, and Iraq for offshore gas & oil projects.</p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm border border-white/5">
                <h4 className="font-bold text-gold-primary mb-4 flex items-center"><Shield className="w-4 h-4 mr-2" /> WESTERN MARKETS</h4>
                <p className="leading-relaxed">Meeting exact EN and ASTM requirements for specialized refinery maintenance and renewable energy projects in France, Germany, and the USA.</p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm border border-white/5">
                <h4 className="font-bold text-gold-primary mb-4 flex items-center"><Award className="w-4 h-4 mr-2" /> ASIAN MANUFACTURING</h4>
                <p className="leading-relaxed">Supporting critical infrastructure development in Vietnam, Thailand, Singapore, and Japan with high-tensile precision components.</p>
              </div>
            </div>
            
            <div className="mt-20 pt-16 border-t border-white/10 text-center">
              <h3 className="text-2xl font-bold mb-10">Ready to consult on your Fastening requirements?</h3>
              <div className="flex flex-col md:flex-row justify-center items-center gap-10">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gold-primary rounded-full flex items-center justify-center text-navy-primary font-bold shadow-lg shadow-gold-primary/20">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] uppercase tracking-widest font-black text-blue-200">24/7 Technical Line</p>
                    <p className="text-xl font-bold">+91 9819322576</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-navy-primary font-bold shadow-lg shadow-white/20">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] uppercase tracking-widest font-black text-blue-200">Engineering Desk</p>
                    <p className="text-xl font-bold underline decoration-gold-primary decoration-2 underline-offset-4 tracking-tight">mamtasteeltraders@gmail.com</p>
                  </div>
                </div>
              </div>
              <Link href="/contact" className="mt-16 inline-flex bg-gold-primary hover:bg-gold-secondary text-navy-primary font-black py-6 px-16 rounded-3xl transition-all shadow-2xl items-center text-lg tracking-widest uppercase group">
                 Request Global Quote Request <ArrowRight className="ml-3 w-6 h-6 transform group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

