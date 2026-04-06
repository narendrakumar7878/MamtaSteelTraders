import { Link } from "wouter";
import ProductSEO from "@/components/ProductSEO";
import mamta_steel_traders000_img from "@/assets/MAMTA STEEL TRADERS000.jpg";
import { ArrowRight, ArrowLeft, Settings, Activity, Shield, Zap, Microscope, Award } from "lucide-react";

const enSeriesProducts = [
  {
    id: 1,
    name: "EN1A Leaded (EN1APb)",
    image: mamta_steel_traders000_img,
    description: "Free cutting steel with lead for superior high-speed precision machining.",
    path: "/product/round-bars/en-series/en1a-leaded",
    specs: ["EN1APb", "Free Cutting", "High Machinability"]
  },
  {
    id: 2,
    name: "EN1A Non-Leaded",
    image: mamta_steel_traders000_img,
    description: "Low carbon free cutting steel for high volume bright drawn production components.",
    path: "/product/round-bars/en-series/en1a-non-leaded",
    specs: ["EN1A Grade", "Standard Bright Drawn", "Sulphur Added"]
  },
  {
    id: 3,
    name: "EN3B (Mild Steel)",
    image: mamta_steel_traders000_img,
    description: "General purpose 0.15% carbon mild steel with good weldability and machinability.",
    path: "/product/round-bars/en-series/en3b-mild-steel",
    specs: ["EN3B", "General Engineering", "Mild Carbon Steel"]
  },
  {
    id: 4,
    name: "EN8 (080M40)",
    image: mamta_steel_traders000_img,
    description: "Unalloyed medium carbon steel for general mechanical engineering parts.",
    path: "/product/round-bars/en-series/en8-080m40",
    specs: ["EN8 Grade", "0.36-0.44% C", "BS 970 Standard"]
  },
  {
    id: 5,
    name: "EN8D (Higher Carbon)",
    image: mamta_steel_traders000_img,
    description: "Cold drawn/bright finished medium carbon steel with better surface finish.",
    path: "/product/round-bars/en-series/en8d-round-bars",
    specs: ["EN8D", "Higher Carbon Variant", "Precision Bright Drawn"]
  },
  {
    id: 6,
    name: "EN8M (Free Machining)",
    description: "Sulphur-enhanced EN8 for improved chip-breaking in automated machining production.",
    path: "/product/round-bars/en-series/en8m-free-machining",
    specs: ["EN8M", "Free Machining EN8", "Sulphur Enhanced"]
  },
  {
    id: 7,
    name: "EN9 (070M55)",
    description: "0.55% high carbon steel for components requiring higher wear resistance and strength.",
    path: "/product/round-bars/en-series/en9-070m55",
    specs: ["EN9 Grade", "High Carbon", "Wear Resistant"]
  },
  {
    id: 8,
    name: "EN14A (Manganese Steel)",
    description: "Carbon-manganese steel offering good toughness and surface hardenability.",
    path: "/product/round-bars/en-series/en14a-manganese-steel",
    specs: ["EN14A", "Manganese Rich", "Tough Engineering Grade"]
  },
  {
    id: 9,
    name: "EN15 (Carbon Manganese)",
    description: "Medium tensile carbon-manganese steel with improved hardness over mild steel.",
    path: "/product/round-bars/en-series/en15-round-bars",
    specs: ["EN15", "Medium Tensile", "Shaft Grade"]
  },
  {
    id: 10,
    name: "EN15B (Boron Steel)",
    description: "Through-hardening manganese-boron steel for bolts and fasteners.",
    path: "/product/round-bars/en-series/en15b-boron-steel",
    specs: ["EN15B", "Boron Alloyed", "Fastener Grade"]
  },
  {
    id: 11,
    name: "EN16 (605M36)",
    description: "Low alloy manganese-molybdenum steel with high tensile and impact properties.",
    path: "/product/round-bars/en-series/en16-605m36",
    specs: ["EN16", "Manganese-Molybdenum", "High Impact"]
  },
  {
    id: 12,
    name: "EN18 (530A40)",
    description: "1% Chromium through-hardening steel with good hardenability for shafts.",
    path: "/product/round-bars/en-series/en18-530a40",
    specs: ["EN18", "Chromium Steel", "Shafting Grade"]
  },
  {
    id: 13,
    name: "EN19 (708M40)",
    description: "1% Chromium-Molybdenum high-stress steel for gears, axles, and tool holders.",
    path: "/product/round-bars/en-series/en19-708m40",
    specs: ["EN19", "Chromium-Molybdenum", "High Stress"]
  },
  {
    id: 14,
    name: "EN19C",
    description: "Controlled hardening variant of EN19 for consistent induction hardening response.",
    path: "/product/round-bars/en-series/en19c-round-bars",
    specs: ["EN19C", "Induction Hardening", "Consistent Chemistry"]
  },
  {
    id: 15,
    name: "EN24 (817M40)",
    description: "Nickel-Chromium-Molybdenum high strength alloy steel for critical high-tensile parts.",
    path: "/product/round-bars/en-series/en24-817m40",
    specs: ["EN24", "Nickel-Chrome-Moly", "Record Strength"]
  },
  {
    id: 16,
    name: "EN24T (Quenched & Tempered)",
    description: "EN24 supplied in the T condition (850-1000 N/mm²) for direct use without heat treat.",
    path: "/product/round-bars/en-series/en24t-quenched-tempered",
    specs: ["EN24T", "Ready-to-Use", "Quenched & Tempered"]
  },
  {
    id: 17,
    name: "EN31 (535A99)",
    description: "1% High Carbon Chromium bearing steel for ball bearings and ball races.",
    path: "/product/round-bars/en-series/en31-535a99",
    specs: ["EN31", "Bearing Steel", "Highest Surface Hardness"]
  },
  {
    id: 18,
    name: "EN32B",
    description: "Mild steel case hardening grade for basic light industrial engineering components.",
    path: "/product/round-bars/en-series/en32b-round-bars",
    specs: ["EN32B", "Basic Case Hardening", "Mild Engineering"]
  },
  {
    id: 19,
    name: "EN36C (832M13)",
    description: "Nickel-Chrome alloy case hardening steel for absolute maximum core strength.",
    path: "/product/round-bars/en-series/en36c-832m13",
    specs: ["EN36C", "Maximum Core Strength", "High Alloy Case"]
  },
  {
    id: 20,
    name: "EN40B",
    description: "Chromium-Molybdenum nitriding steel offering extremely high surface hardness.",
    path: "/product/round-bars/en-series/en40b-nitriding-steel",
    specs: ["EN40B", "Nitriding Grade", "Extreme Wear Res"]
  },
  {
    id: 21,
    name: "EN41B",
    description: "Aluminum-enhanced nitriding steel for the most arduous wear-resistance demands.",
    path: "/product/round-bars/en-series/en41b-nitriding-steel",
    specs: ["EN41B", "Al-Cr-Mo Nitriding", "Arduous Wear"]
  },
  {
    id: 22,
    name: "EN42J",
    description: "High carbon spring steel for the production of springs and high-wear flat components.",
    path: "/product/round-bars/en-series/en42j-spring-steel",
    specs: ["EN42J", "Spring Steel", "High Carbon Flat"]
  },
  {
    id: 23,
    name: "EN43C (0.45% Carbon)",
    description: "0.45% carbon engineering steel for structural and general industrial applications.",
    path: "/product/round-bars/en-series/en43c-round-bars",
    specs: ["EN43C", "0.45% Carbon", "Structural Bar"]
  },
  {
    id: 24,
    name: "EN45 (Silicon Manganese)",
    description: "Silicon-Manganese spring steel with excellent resilience for leaf springs.",
    path: "/product/round-bars/en-series/en45-spring-steel",
    specs: ["EN45", "Si-Mn Steel", "Leaf Spring Grade"]
  },
  {
    id: 25,
    name: "EN47 (Chrome Vanadium)",
    description: "Chromium-Vanadium high alloy spring steel for high-load helical springs.",
    path: "/product/round-bars/en-series/en47-chrome-vanadium",
    specs: ["EN47", "Cr-V Spring Steel", "High Fatigue Res"]
  },
  {
    id: 26,
    name: "EN353",
    description: "Nickel-Chromium-Molybdenum case hardening steel for high efficiency gearing.",
    path: "/product/round-bars/en-series/en353-round-bars",
    specs: ["EN353", "Gear Grade", "Nickel-Chrome-Moly Alloy"]
  },
  {
    id: 27,
    name: "EN354",
    description: "High-nickel alloy case hardening steel for extra heavy duty industrial gearing.",
    path: "/product/round-bars/en-series/en354-round-bars",
    specs: ["EN354", "Heavy Duty Gearing", "High Nickel Content"]
  },
  {
    id: 28,
    name: "EN355",
    description: "Advanced Ni-Cr-Mo case hardening alloy for maximum impact and core strength.",
    path: "/product/round-bars/en-series/en355-round-bars",
    specs: ["EN355", "Impact Resistant", "Maximum Core Integrity"]
  }
];

const keywordSections = [
  {
    title: "EN Series Steel Applications",
    keywords: [
      "Automotive Components Manufacturing",
      "Machine Tool Applications",
      "Heavy Engineering Parts",
      "Gears and Shafts Production",
      "Case Hardening Applications",
      "High-Strength Fasteners",
      "Aerospace Components",
      "General Engineering Parts"
    ]
  },
  {
    title: "EN Series Grades & Standards",
    keywords: [
      "EN8 EN9 EN19 Steel",
      "EN24 SAE 4340 Steel",
      "832M13 EN36C Grade",
      "EN1A Mild Steel",
      "42CrMo4 Chrome Steel",
      "605M36 Case Hardening",
      "Premium EN Series India",
      "EN Steel Supplier Mumbai"
    ]
  }
];

export default function ENSeries() {
  return (
    <>
      <ProductSEO
        title="EN Series Round Bars - EN1A to EN355 | Engineering Steel Mumbai"
        description="Premier supplier of EN series round bars in Mumbai. Stocking 28 distinct grades including EN8, EN9, EN19, EN24, EN31, EN353, and EN47. Full technical sheets and MTC available."
        keywords="en series round bars mumbai, en8 en9 en19 en24 price, en31 bearing steel india, en353 gear steel exporter, free cutting en1a steel, en series technical data"
        canonicalUrl="/product/round-bars/en-series"
      />
      
      <div className="min-h-screen bg-[#fcfcfc] font-bold tracking-tighter italic">
        {/* Breadcrumb & Navigation */}
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
           <div className="container mx-auto px-4 py-4 font-black">
              <nav className="flex items-center space-x-2 text-sm flex-wrap text-black font-black uppercase italic font-black">
                 <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary underline decoration-navy-primary/20 transition-colors italic tracking-tighter uppercase font-black italic">Home</Link>
                 <ArrowRight className="w-4 h-4 text-gray-400 font-extrabold" />
                 <Link href="/product/round-bars/round-bars" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary underline decoration-navy-primary/20 transition-colors italic tracking-tighter uppercase font-black italic font-black">Round Bars</Link>
                 <ArrowRight className="w-4 h-4 text-gray-400 font-extrabold" />
                 <span className="text-navy-primary dark:text-gold-primary underline decoration-gold-primary decoration-2 underline-offset-4 italic tracking-tighter uppercase font-black italic">EN Series Hub</span>
              </nav>
           </div>
        </div>
        <div className="container mx-auto px-4 py-4">
           <Link href="/product/round-bars/round-bars" className="inline-flex items-center text-navy-primary dark:text-gold-primary hover:underline font-black uppercase text-xs italic tracking-tighter italic font-black">
              <ArrowLeft className="w-3 h-3 mr-2 font-black" /> Back to Round Bars
           </Link>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-br from-navy-primary via-navy-secondary to-slate-900 text-white py-24 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-6xl md:text-8xl font-black mb-8 italic tracking-tighter uppercase leading-none border-l-8 border-gold-primary pl-10 underline decoration-gold-primary decoration-4 underline-offset-[12px]">
              EN Series Round Bars
            </h1>
            <p className="text-2xl mb-12 text-gray-200 max-w-4xl opacity-90 leading-relaxed italic font-medium uppercase tracking-tight italic tracking-tighter italic">
              A comprehensive technical repository of 28 critical engineering grades. From free-cutting steels to high-tensile Ni-Cr-Mo alloys, Mamta Steel Traders delivers precision-certified metallurgy for the world's most demanding engineering sectors.
            </p>
            <div className="flex flex-wrap gap-8">
              <Link 
                href="/contact" 
                className="bg-gold-primary hover:bg-white text-navy-primary px-16 py-6 rounded-[2.5rem] font-black transition-all shadow-2xl italic tracking-tighter uppercase text-xl"
              >
                Inquire Technical Batch
              </Link>
              <a 
                href="tel:+919819322576" 
                className="bg-white/10 hover:bg-white/20 text-white border-2 border-white px-16 py-6 rounded-[2.5rem] font-black transition-all backdrop-blur-md italic tracking-tighter uppercase text-xl"
              >
                Call Material Expert
              </a>
            </div>
          </div>
          <Settings className="absolute right-[-5%] bottom-[-5%] w-[500px] h-[500px] text-white/5 pointer-events-none rotate-45" />
        </div>

        {/* Products Grid */}
        <section className="py-24">
          <div className="container mx-auto px-4">
             <div className="text-center mb-24">
                <h2 className="text-5xl font-black text-navy-primary mb-6 italic tracking-tighter uppercase underline decoration-gold-primary decoration-8 underline-offset-[12px]">The Technical Catalog (28 Grades)</h2>
                <p className="text-xl text-gray-500 max-w-3xl mx-auto italic font-medium italic tracking-tighter italic">Select an EN Grade below to access its full chemical composition, mechanical performance limits, and thermal treatment charts.</p>
             </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
              {enSeriesProducts.map((product) => (
                <Link key={product.id} href={product.path}>
                    <div 
                      className="group bg-white rounded-[2.5rem] shadow-xl overflow-hidden hover:shadow-2xl transition-all border border-gray-100 hover:border-gold-primary cursor-pointer flex flex-col h-full transform hover:scale-[1.03] duration-500"
                    >
                      <div className="p-10 bg-gray-50 group-hover:bg-navy-primary transition-colors duration-500 relative overflow-hidden">
                         <div className="relative z-10">
                            <span className="bg-gold-primary text-navy-primary px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 inline-block shadow-lg underline decoration-navy-primary decoration-2">Premium Grade</span>
                            <h3 className="text-3xl font-black text-navy-primary group-hover:text-white italic tracking-tighter uppercase leading-none transition-colors duration-500 h-16 flex items-center">
                              {product.name}
                            </h3>
                         </div>
                         <Activity className="absolute right-[-10%] top-[-10%] w-32 h-32 text-navy-primary/5 group-hover:text-white/5 transition-colors duration-500" />
                      </div>
                      <div className="p-10 flex-1 flex flex-col">
                        <p className="text-gray-500 text-sm leading-relaxed mb-8 italic font-medium h-12 overflow-hidden border-l-4 border-gold-primary pl-4 uppercase tracking-tighter">
                          {product.description}
                        </p>
                        <div className="mb-8">
                          <div className="flex flex-wrap gap-2">
                            {product.specs.map((spec, index) => (
                              <span 
                                key={index}
                                className="bg-navy-primary/5 text-navy-primary px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter italic"
                              >
                                {spec}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="mt-auto pt-8 border-t border-gray-100 flex items-center justify-between text-navy-primary font-black uppercase italic tracking-tighter group-hover:text-gold-primary transition-colors underline decoration-transparent group-hover:decoration-current decoration-4 underline-offset-8">
                           <span className="text-lg">View Metallurgy Profile</span>
                           <ArrowRight className="w-6 h-6 transform group-hover:translate-x-3 transition-transform" />
                        </div>
                      </div>
                    </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Existing Content Preservation Section */}
        <section className="py-24 bg-gray-50 border-y border-gray-100">
           <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-20 items-center">
                 <div>
                    <h2 className="text-5xl font-black text-navy-primary mb-10 italic tracking-tighter uppercase border-l-8 border-gold-primary pl-8">Established Metallurgy Excellence</h2>
                    <p className="text-xl text-gray-500 mb-10 leading-relaxed italic font-medium italic tracking-tighter italic">Mamta Steel Traders has been the gold standard for EN Series round bars for over two decades. Our supply chain is built on trust, precision, and absolute compliance with BS 970 standards. We guarantee consistent chemistry from batch to batch, vital for high-precision CNC manufacturing.</p>
                    <div className="grid grid-cols-2 gap-8">
                       <div className="p-8 bg-white rounded-3xl shadow-lg border-2 border-transparent hover:border-gold-primary transition-all">
                          <Shield className="w-12 h-12 text-navy-primary mb-4" />
                          <h4 className="font-black uppercase italic tracking-tighter text-xl mb-2">Source Certified</h4>
                          <p className="text-xs text-gray-400 font-medium italic">All bar stock is accompanied by NABL approved mill test certificates.</p>
                       </div>
                       <div className="p-8 bg-white rounded-3xl shadow-lg border-2 border-transparent hover:border-gold-primary transition-all">
                          <Award className="w-12 h-12 text-navy-primary mb-4" />
                          <h4 className="font-black uppercase italic tracking-tighter text-xl mb-2">Global Exporter</h4>
                          <p className="text-xs text-gray-400 font-medium italic">Serving energy, aerospace, and defense sectors from Dubai to Germany.</p>
                       </div>
                    </div>
                 </div>
                 <div className="relative">
                    <img src={mamta_steel_traders000_img} alt="Industrial Round Bars" className="rounded-[3rem] shadow-2xl relative z-10 w-full object-cover h-[500px]" />
                    <div className="absolute -top-10 -right-10 w-64 h-64 bg-gold-primary/30 rounded-full blur-3xl opacity-50" />
                    <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-navy-primary/30 rounded-full blur-3xl opacity-50" />
                 </div>
              </div>
           </div>
        </section>

        {/* Technical Specifications (Preserved & Enhanced) */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-black text-center mb-20 text-navy-primary italic tracking-tighter uppercase underline decoration-gold-primary decoration-8 underline-offset-[12px]">
              EN Series Technical Infrastructure
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-navy-primary text-white p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                <h3 className="text-3xl font-black mb-10 italic tracking-tighter uppercase border-b-4 border-gold-primary pb-4 h-fit">Global Steel Standards Integration</h3>
                <div className="space-y-10 relative z-10">
                  <div className="border-l-4 border-gold-primary pl-6 hover:bg-white/5 p-4 rounded-r-2xl transition-colors">
                    <h4 className="text-xl font-black text-gold-primary mb-2 uppercase italic tracking-tighter">BS 970 Standard Compliance</h4>
                    <p className="text-gray-300 text-sm italic font-medium italic tracking-tighter">British Standard for wrought steels for mechanical and allied engineering purposes. The backbone of industrial metallurgy.</p>
                  </div>
                  <div className="border-l-4 border-gold-primary pl-6 hover:bg-white/5 p-4 rounded-r-2xl transition-colors">
                    <h4 className="text-xl font-black text-gold-primary mb-2 uppercase italic tracking-tighter">SAE / AISI Cross-Referencing</h4>
                    <p className="text-gray-300 text-sm italic font-medium italic tracking-tighter">EN24 ≡ SAE 4340, EN19 ≡ SAE 4140 - Precise American equivalent grades maintained for international engineering procurement.</p>
                  </div>
                  <div className="border-l-4 border-gold-primary pl-6 hover:bg-white/5 p-4 rounded-r-2xl transition-colors">
                    <h4 className="text-xl font-black text-gold-primary mb-2 uppercase italic tracking-tighter">DIN / EN Global Identification</h4>
                    <p className="text-gray-300 text-sm italic font-medium italic tracking-tighter">EN19 ≡ 42CrMo4, EN24 ≡ 34CrNiMo6 - European standard equivalents for high-tensile structural integrity.</p>
                  </div>
                  <div className="border-l-4 border-gold-primary pl-6 hover:bg-white/5 p-4 rounded-r-2xl transition-colors">
                    <h4 className="text-xl font-black text-gold-primary mb-2 uppercase italic tracking-tighter">Key Mechanical Attributes</h4>
                    <ul className="text-gray-300 text-sm italic font-medium space-y-2 italic tracking-tighter">
                      <li className="flex items-center gap-2"><Zap className="w-3 h-3 text-gold-primary" /> RECORD HARDENABILITY (THROUGH & CASE)</li>
                      <li className="flex items-center gap-2"><Zap className="w-3 h-3 text-gold-primary" /> OPTIMIZED MACHINABILITY RATINGS</li>
                      <li className="flex items-center gap-2"><Zap className="w-3 h-3 text-gold-primary" /> HIGH FATIGUE & IMPACT ENDURANCE</li>
                    </ul>
                  </div>
                </div>
                <Microscope className="absolute right-[-10%] top-[20%] w-96 h-96 text-white/5 rotate-12 pointer-events-none" />
              </div>
              
              <div className="bg-gray-50 p-12 rounded-[2.5rem] shadow-xl border border-gray-100 flex flex-col justify-center">
                <h3 className="text-3xl font-black mb-10 text-navy-primary italic tracking-tighter uppercase border-b-4 border-gold-primary pb-4 h-fit">Cross-Sector Industrial Deployment</h3>
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="p-6 bg-white rounded-3xl shadow-md border-l-8 border-gold-primary">
                    <h4 className="font-black text-navy-primary mb-2 uppercase italic tracking-tighter">Automotive Powertrain</h4>
                    <p className="text-gray-500 text-xs font-medium italic tracking-tighter italic">Crankshafts, connecting rods, constant-load gears, and heavy duty axles.</p>
                  </div>
                  <div className="p-6 bg-white rounded-3xl shadow-md border-l-8 border-gold-primary">
                    <h4 className="font-black text-navy-primary mb-2 uppercase italic tracking-tighter">Aerospace Criticals</h4>
                    <p className="text-gray-500 text-xs font-medium italic tracking-tighter italic">Landing gear sub-assemblies, high-load fasteners, and precision shafts.</p>
                  </div>
                  <div className="p-6 bg-white rounded-3xl shadow-md border-l-8 border-gold-primary">
                    <h4 className="font-black text-navy-primary mb-2 uppercase italic tracking-tighter">Precision Tooling</h4>
                    <p className="text-gray-500 text-xs font-medium italic tracking-tighter italic">Machine tool holders, specialized spindles, and tool bit shanks.</p>
                  </div>
                  <div className="p-6 bg-white rounded-3xl shadow-md border-l-8 border-gold-primary">
                    <h4 className="font-black text-navy-primary mb-2 uppercase italic tracking-tighter">Energy Infrastructure</h4>
                    <p className="text-gray-500 text-xs font-medium italic tracking-tighter italic">Drilling collars, pump shafts, and offshore structural fasteners.</p>
                  </div>
                </div>
                <div className="mt-12 p-8 bg-navy-primary rounded-3xl text-white">
                   <p className="text-lg font-black uppercase italic tracking-tighter mb-4 italic tracking-tighter italic flex items-center gap-3">
                      <Zap className="w-6 h-6 text-gold-primary" /> 
                      Pro-Grade Availability
                   </p>
                   <p className="text-sm text-gray-300 font-medium italic tracking-tight italic tracking-tighter italic italic">Mamta Steel maintains a depth of stock in raw black finish, bright drawn, and quenched & tempered (T Condition) for immediate dispatch across India and global export markets.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table Section (Preserved) */}
        <section className="py-24 bg-gray-50">
           <div className="container mx-auto px-4">
              <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100">
                 <div className="p-12 bg-navy-primary text-white flex justify-between items-center sm:flex-row flex-col gap-6 text-center sm:text-left">
                    <div>
                       <h2 className="text-4xl font-black italic tracking-tighter uppercase mb-2">Prime Grade Comparison</h2>
                       <p className="text-gold-primary font-black uppercase italic text-sm tracking-widest">Global Metallurgy Equivalence Chart</p>
                    </div>
                    <Link href="/contact" className="bg-gold-primary text-navy-primary px-10 py-4 rounded-2xl font-black uppercase italic tracking-tighter hover:bg-white transition-all shadow-xl">Get Batch Pricing</Link>
                 </div>
                 <div className="overflow-x-auto">
                    <table className="w-full text-left">
                       <thead>
                          <tr className="bg-gray-50 border-b border-gray-100 italic tracking-tighter underline decoration-gold-primary decoration-4 underline-offset-4">
                             <th className="px-10 py-8 text-navy-primary font-black uppercase italic tracking-tighter text-xl h-fit">EN Grade (BS 970)</th>
                             <th className="px-10 py-8 text-navy-primary font-black uppercase italic tracking-tighter text-xl h-fit">USA Equivalent (SAE)</th>
                             <th className="px-10 py-8 text-navy-primary font-black uppercase italic tracking-tighter text-xl h-fit">Carbon % Range</th>
                             <th className="px-10 py-8 text-navy-primary font-black uppercase italic tracking-tighter text-xl h-fit">Primary Property</th>
                          </tr>
                       </thead>
                       <tbody className="divide-y divide-gray-100 h-fit">
                          {[
                             { en: "EN8", sae: "SAE 1040", carbon: "0.36-0.44%", prop: "Excellent Engineering Utility" },
                             { en: "EN9", sae: "SAE 1055", carbon: "0.50-0.60%", prop: "Extreme Surface Toughness" },
                             { en: "EN19", sae: "SAE 4140", carbon: "0.36-0.44%", prop: "High Yield Alloy Strength" },
                             { en: "EN24", sae: "SAE 4340", carbon: "0.36-0.44%", prop: "Ultra-High Tensile/Impact" },
                             { en: "EN31", sae: "SAE 52100", carbon: "0.95-1.10%", prop: "Maximum Wear Endurance" },
                             { en: "EN36C", sae: "832M13", carbon: "0.12-0.18%", prop: "Premium Case Hardening" }
                          ].map((row, i) => (
                             <tr key={i} className="hover:bg-gray-50 transition-colors h-fit">
                                <td className="px-10 py-8 font-black text-navy-primary text-2xl italic tracking-tighter italic h-fit uppercase">{row.en}</td>
                                <td className="px-10 py-8 font-black text-gray-400 text-xl italic tracking-tighter italic h-fit uppercase">{row.sae}</td>
                                <td className="px-10 py-8 font-black text-navy-primary text-xl italic tracking-tighter italic h-fit uppercase">{row.carbon}</td>
                                <td className="px-10 py-8 font-black text-gold-primary text-xl italic tracking-tighter italic h-fit uppercase text-right h-fit">{row.prop}</td>
                             </tr>
                          ))}
                       </tbody>
                    </table>
                 </div>
              </div>
           </div>
        </section>

        {/* Popular Keywords Sections (Preserved) */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 h-fit">
            <h2 className="text-5xl font-black text-center mb-20 text-navy-primary italic tracking-tighter uppercase italic tracking-tighter italic h-fit">
              Industrial Search Repository
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 h-fit">
              {keywordSections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="bg-gray-50 p-12 rounded-[2.5rem] shadow-xl h-fit">
                  <h3 className="text-2xl font-black mb-10 text-navy-primary italic tracking-tighter uppercase border-l-4 border-gold-primary pl-6 h-fit">{section.title}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-fit">
                    {section.keywords.map((keyword, index) => (
                      <div 
                        key={index}
                        className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover:border-gold-primary transition-all group h-fit"
                      >
                        <span className="text-xs font-black text-gray-400 group-hover:text-navy-primary uppercase italic tracking-tighter italic h-fit">{keyword}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final Global CTA */}
        <section className="py-24 bg-gradient-to-r from-navy-primary to-navy-secondary text-white relative overflow-hidden h-fit">
          <div className="container mx-auto px-4 text-center relative z-10 h-fit">
            <h2 className="text-5xl md:text-7xl font-black mb-8 italic tracking-tighter uppercase italic tracking-tighter italic h-fit underline decoration-gold-primary decoration-4 underline-offset-[12px]">
              Ready to Secure Premium EN Series Steel?
            </h2>
            <p className="text-2xl mb-12 text-gray-200 max-w-3xl mx-auto italic font-medium italic tracking-tighter italic h-fit">
              Get direct mill prices, NABL approved certificates, and global export priority for all 28 EN series engineering grades. 
            </p>
            <div className="flex flex-wrap gap-8 justify-center h-fit">
              <Link 
                href="/contact" 
                className="bg-gold-primary hover:bg-white text-navy-primary px-16 py-6 rounded-3xl font-black transition-all shadow-2xl italic tracking-tighter uppercase text-2xl h-fit overflow-hidden"
              >
                Inquire Batch Pricing
              </Link>
              <a 
                href="mailto:mamtasteeltraders@gmail.com" 
                className="border-4 border-white text-white px-16 py-6 rounded-3xl font-black hover:bg-white hover:text-navy-primary transition-all italic tracking-tighter uppercase text-2xl h-fit overflow-hidden"
              >
                Request Technical MTC
              </a>
            </div>
          </div>
          <Activity className="absolute left-[-5%] top-[-5%] w-96 h-96 text-white/5 pointer-events-none rotate-12 h-fit overflow-hidden" />
        </section>
      </div>
    </>
  );
}