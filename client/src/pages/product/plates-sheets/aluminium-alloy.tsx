import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft, ArrowRight, CheckCircle, Mail, Phone, ShieldCheck, Factory, Beaker, Zap, Anchor, Star, MapPin, Globe, TrendingUp, Award, Settings, Users } from "lucide-react";
import ss_plate_img from "@/assets/SS PLATE  MAMTA STEEL TRADERS.jpg";
import { Link } from "wouter";

export default function AluminiumAlloyPlates() {
  const catalogGrades = [
    {
      grade: "1100",
      link: "/product/plates-sheets/aluminium-alloy/1100-plates",
      desc: "Pure commercial grade with excellent corrosion resistance and formability.",
      features: ["99.0% Pure Al", "Food & Chemical Ready", "Excellent Finish"]
    },
    {
      grade: "2014",
      link: "/product/plates-sheets/aluminium-alloy/2014-plates",
      desc: "High-strength aerospace grade commonly used for heavy-duty structural parts.",
      features: ["Aerospace Grade", "High Strength", "Toughness"]
    },
    {
      grade: "2024",
      link: "/product/plates-sheets/aluminium-alloy/2024-plates",
      desc: "Standard aerospace fuselage grade with superior fatigue crack resistance.",
      features: ["Fuselage Standard", "Structural Grade", "High Fatigue Resistance"]
    },
    {
      grade: "3003",
      link: "/product/plates-sheets/aluminium-alloy/3003-plates",
      desc: "Common industrial alloy with manganese for improved strength and formability.",
      features: ["Industrial Standard", "Excellent Corrosive Resistance", "Highly Formable"]
    },
    {
      grade: "5052",
      link: "/product/plates-sheets/aluminium-alloy/5052-plates",
      desc: "Marine grade alloy with excellent resistance to saltwater and industrial environments.",
      features: ["Saltwater Ready", "Formable & Strong", "Best Finish"]
    },
    {
      grade: "5083",
      link: "/product/plates-sheets/aluminium-alloy/5083-plates",
      desc: "Ultra-high strength marine grade for cryogenic vessels and naval structures.",
      features: ["Marine Structural", "Cryogenic Specs", "High Strength"]
    },
    {
      grade: "5086",
      link: "/product/plates-sheets/aluminium-alloy/5086-plates",
      desc: "Specialized marine alloy for high-strength hull structures and defense.",
      features: ["Hull & Naval Grade", "Superior Weldability", "Defense Choice"]
    },
    {
      grade: "6061",
      link: "/product/plates-sheets/aluminium-alloy/6061-plates",
      desc: "Most versatile structural alloy used in automotive, structural and marine frameworks.",
      features: ["All-Purpose Structural", "Highly Machinable", "Excellent Welding"]
    },
    {
      grade: "6063",
      link: "/product/plates-sheets/aluminium-alloy/6063-plates",
      desc: "Architectural grade known for its excellent surface finish and complex profiles.",
      features: ["Architectural Spec", "Best Finish Quality", "Curtain Walling Ready"]
    },
    {
      grade: "6082",
      link: "/product/plates-sheets/aluminium-alloy/6082-plates",
      desc: "European structural standard with superior strength to its 6061 counterpart.",
      features: ["High-Stress Structures", "Transport Grade", "Maximum 6xxx Strength"]
    },
    {
      grade: "7050",
      link: "/product/plates-sheets/aluminium-alloy/7050-plates",
      desc: "Advanced aerospace grade for thick-section structural parts and defense hulls.",
      features: ["Thick Section Pro", "High Fracture Toughness", "Defense Specialist"]
    },
    {
      grade: "7075",
      link: "/product/plates-sheets/aluminium-alloy/7075-plates",
      desc: "Ultra-high strength aerospace titan, comparable to structural steels in strength.",
      features: ["Highest Yield Strength", "Steel-Like Durability", "Aircraft Titan"]
    }
  ];

  const coreFeatures = [
    { icon: ShieldCheck, title: "Corrosion Protection", desc: "Natural oxide layers developed for extreme marine and chemical resistance." },
    { icon: TrendingUp, title: "Lightweight Strength", desc: "Premium density-to-strength ratios reducing structural weight by up to 60%." },
    { icon: Award, title: "Certified Grading", desc: "Mill-certified to ASTM B209, AMS, and Defense standards (DFARS)." },
    { icon: Globe, title: "Global Export", desc: "Dedicated shipping infrastructure for UAE, USA, Europe and GCC nations." }
  ];

  const specificationsList = [
    "ASTM B209 - Prime Aluminum Standard",
    "AMS-QQ-A-250 Aerospace Specifications",
    "EN 485 European Engineering Standards",
    "Thickness Range: 0.5mm to 300mm",
    "Temper: O, T3, T4, T6, T651, T73, T74",
    "Certification: Mill Test Reports (3.1/3.2)"
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 font-sans">
      <ProductSEO
        title="Aluminium Alloy Plates & Sheets Global Supplier | 2024, 5052, 6061, 7075"
        description="Premium Aluminium Alloy Plates Supplier in Mumbai. Exporting 1100, 2024 T3, 5052 H32, 5083, 6061 T6, 7075 T651 plates globally. ASTM B209 & AMS certified aerospace grades. Best wholesale prices for UAE, USA, Europe, and Middle East."
        keywords="Aluminium alloy plates supplier India, 2024 aluminum plates price UAE, 6061 T6 aluminum sheet manufacturer Mumbai, 7075 T651 aerospace plates USA, 5083 marine grade aluminum, ASTM B209 aluminum distributor, wholesale aluminum alloy plates, aluminum sheets exporter India"
        category="Plates & Sheets"
        productName="Aluminium Alloy Plates & Sheets"
        specifications={specificationsList}
        canonicalUrl="/product/plates-sheets/aluminium-alloy"
      />

      {/* Header / Nav */}
      <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 py-4 shadow-sm relative z-20 font-sans">
        <div className="container mx-auto px-4 flex items-center justify-between font-sans">
          <div className="flex items-center space-x-3 font-sans">
            <Link href="/" className="text-gray-500 hover:text-navy-primary font-bold text-xs uppercase tracking-widest font-sans">Home</Link>
            <ArrowRight className="w-3 h-3 text-gold-primary font-sans" />
            <Link href="/product/plates-sheets" className="text-gray-500 hover:text-navy-primary font-bold text-xs uppercase tracking-widest font-sans">Plates & Sheets</Link>
            <ArrowRight className="w-3 h-3 text-gold-primary font-sans" />
            <span className="text-navy-primary dark:text-gold-primary font-bold text-xs uppercase tracking-widest font-sans">Aluminium Alloy</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative bg-navy-primary py-24 overflow-hidden font-sans">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 font-sans"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gold-primary/10 to-transparent font-sans"></div>
        <div className="container mx-auto px-4 relative z-10 font-sans">
          <div className="max-w-4xl font-sans">
            <div className="inline-flex items-center space-x-2 bg-gold-primary/20 text-gold-primary px-4 py-1 rounded-full border border-gold-primary/30 mb-6 font-sans">
              <Star className="w-4 h-4 fill-gold-primary font-sans" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] font-sans">Global Tier-1 Vendor</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter leading-none font-sans">
              High-Strength <br />
              <span className="text-gold-primary">Aluminium Alloys</span>
            </h1>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl font-light leading-relaxed font-sans">
              India's leading specialized stockist of Aerospace, Marine, and Structural aluminium. Delivering precision-graded plates to defense, aviation, and heavy engineering hubs across the UAE, USA, Europe and GCC regions.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 font-sans">
              <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-10 py-5 rounded-2xl font-black transition-all hover:scale-105 shadow-2xl flex items-center justify-center uppercase tracking-widest font-sans">
                Request Export Quote
              </Link>
              <a href="tel:+919819322576" className="border-2 border-white/20 hover:bg-white hover:text-navy-primary text-white px-10 py-5 rounded-2xl font-black transition-all flex items-center justify-center uppercase tracking-widest font-sans">
                <Phone className="w-5 h-5 mr-3 font-sans" /> Contact Specialist
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50 font-sans">
        <div className="container mx-auto px-4 font-sans">
          <div className="grid md:grid-cols-4 gap-8 font-sans">
            {coreFeatures.map((f, i) => (
              <div key={i} className="group bg-white dark:bg-gray-800 p-8 rounded-3xl border border-gray-100 dark:border-gray-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 font-sans">
                <div className="w-16 h-16 bg-navy-primary rounded-2xl flex items-center justify-center text-gold-primary mb-6 group-hover:rotate-12 transition-transform font-sans">
                  <f.icon className="w-8 h-8 font-sans" />
                </div>
                <h3 className="text-xl font-bold text-navy-primary dark:text-white mb-3 uppercase tracking-tighter font-sans">{f.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-sans">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog Grid */}
      <section className="py-24 font-sans">
        <div className="container mx-auto px-4 font-sans">
          <div className="text-center mb-20 font-sans">
            <h2 className="text-4xl md:text-5xl font-black text-navy-primary dark:text-white mb-6 uppercase tracking-tighter italic font-sans">Aluminium Grade Catalog</h2>
            <div className="w-24 h-2 bg-gold-primary mx-auto rounded-full font-sans"></div>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 font-sans">
            {catalogGrades.map((item, i) => (
              <div key={i} className="group relative bg-white dark:bg-gray-800 rounded-[2.5rem] p-8 shadow-xl border border-gray-100 dark:border-gray-700 hover:bg-navy-primary transition-all duration-500 font-sans">
                <div className="mb-6 font-sans">
                  <h3 className="text-5xl font-black text-gold-primary italic group-hover:text-gold-secondary transition-colors font-sans">AL {item.grade}</h3>
                  <div className="w-12 h-1 bg-gray-200 mt-2 group-hover:bg-gold-primary/30 font-sans"></div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 group-hover:text-blue-100 mb-8 font-medium leading-tight font-sans">
                  {item.desc}
                </p>
                <div className="space-y-3 mb-10 font-sans">
                  {item.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center text-[10px] font-black uppercase tracking-widest text-navy-primary dark:text-gray-400 group-hover:text-gold-primary font-sans">
                      <div className="w-1.5 h-1.5 bg-gold-primary rounded-full mr-3 font-sans"></div>
                      {feat}
                    </div>
                  ))}
                </div>
                <Link href={item.link} className="w-full bg-gray-100 dark:bg-gray-700 text-navy-primary dark:text-white group-hover:bg-gold-primary group-hover:text-navy-primary py-4 rounded-2xl font-black flex items-center justify-center transition-all uppercase tracking-widest text-xs font-sans">
                  View Detail Specs <ArrowRight className="w-4 h-4 ml-3 font-sans" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison & Standards Section */}
      <section className="py-24 bg-navy-primary text-white font-sans">
        <div className="container mx-auto px-4 font-sans">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center font-sans">
            <div className="font-sans">
              <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase tracking-tighter leading-tight font-sans">Global Engineering <br /><span className="text-gold-primary">Compliance & Quality</span></h2>
              <div className="space-y-8 font-sans font-sans">
                {specificationsList.map((spec, i) => (
                  <div key={i} className="flex items-start font-sans">
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-gold-primary mr-5 flex-shrink-0 font-sans">
                      <CheckCircle className="w-6 h-6 font-sans" />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-white uppercase tracking-tight font-sans">{spec}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12 p-8 bg-white/5 rounded-3xl border border-white/10 font-sans">
                <p className="text-blue-100 font-light italic text-lg leading-relaxed font-sans">
                  "Our advanced quality control lab ensures that every plate, from pure 1100 to aerospace-grade 7075, undergoes rigorous verification for chemical composition and mechanical integrity before global dispatch."
                </p>
              </div>
            </div>
            
            <div className="relative font-sans">
              <div className="absolute -inset-10 bg-gold-primary/20 blur-[100px] rounded-full font-sans"></div>
              <div className="bg-white/10 backdrop-blur-xl p-10 rounded-[3rem] border border-white/20 relative z-10 font-sans">
                <div className="flex items-center space-x-4 mb-8 font-sans">
                  <Factory className="w-10 h-10 text-gold-primary font-sans" />
                  <h3 className="text-2xl font-bold uppercase tracking-widest font-sans">Mumbai Hub Inventory</h3>
                </div>
                <div className="grid grid-cols-2 gap-6 font-sans">
                  <div className="p-6 bg-white/10 rounded-2xl border border-white/10 text-center font-sans">
                    <p className="text-4xl font-black text-gold-primary font-sans">15k+</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-blue-200 mt-2 font-sans">Tons Stocked</p>
                  </div>
                  <div className="p-6 bg-white/10 rounded-2xl border border-white/10 text-center font-sans">
                    <p className="text-4xl font-black text-gold-primary font-sans">40+</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-blue-200 mt-2 font-sans">Countries served</p>
                  </div>
                </div>
                <div className="mt-10 font-sans">
                  <h4 className="text-xs font-black uppercase tracking-[0.2em] text-gold-primary mb-6 text-center font-sans">Primary Export Sectors</h4>
                  <div className="flex flex-wrap justify-center gap-3 font-sans">
                    {["Aerospace", "Marine", "Defense", "Automotive", "Nuclear", "Oil & Gas"].map((tag, i) => (
                      <span key={i} className="px-4 py-2 bg-white/10 rounded-lg text-[10px] font-black uppercase tracking-widest border border-white/10 font-sans">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Supply CTA */}
      <section className="py-24 font-sans">
        <div className="container mx-auto px-4 font-sans font-sans">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-navy-primary to-navy-secondary rounded-[3.5rem] p-16 relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] font-sans">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 font-sans"></div>
            <div className="relative z-10 text-center font-sans">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 uppercase tracking-tighter leading-none font-sans">
                Direct Global <br />
                <span className="text-gold-primary italic">Mill Support & Export</span>
              </h2>
              <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto font-light leading-relaxed font-sans">
                Dedicated export desk for Middle East, Europe, and Asia. Wholesale pricing for high-volume engineering projects. Full certification and logistic support to any global port.
              </p>
              <div className="grid md:grid-cols-3 gap-8 justify-center font-sans">
                <div className="p-8 bg-white/5 rounded-[2rem] border border-white/10 hover:bg-white/10 transition-colors font-sans">
                  <Mail className="w-8 h-8 text-gold-primary mx-auto mb-4 font-sans" />
                  <p className="text-[10px] font-black uppercase tracking-widest text-blue-200 mb-1 font-sans">Official Inquiries</p>
                  <p className="text-sm font-bold text-white font-sans">mamtasteeltraders@gmail.com</p>
                </div>
                <div className="p-8 bg-white/5 rounded-[2rem] border border-white/10 hover:bg-white/10 transition-colors font-sans">
                  <Phone className="w-8 h-8 text-gold-primary mx-auto mb-4 font-sans" />
                  <p className="text-[10px] font-black uppercase tracking-widest text-blue-200 mb-1 font-sans">Direct Specialist</p>
                  <p className="text-sm font-bold text-white font-sans">+91 9819322576</p>
                </div>
                <div className="p-8 bg-white/5 rounded-[2rem] border border-white/10 hover:bg-white/10 transition-colors font-sans">
                  <MapPin className="w-8 h-8 text-gold-primary mx-auto mb-4 font-sans" />
                  <p className="text-[10px] font-black uppercase tracking-widest text-blue-200 mb-1 font-sans">Mumbai Hub</p>
                  <p className="text-sm font-bold text-white font-sans">Maharashtra, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
