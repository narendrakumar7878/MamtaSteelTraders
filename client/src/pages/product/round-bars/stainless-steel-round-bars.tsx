import { Link } from "wouter";
import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, ArrowLeft, ChevronRight, BarChart3, ShieldCheck, Zap, Settings } from "lucide-react";
import ss_round_bar_mamta_steel_traders_img from "@/assets/SS ROUND BAR  MAMTA STEEL TRADERS.jpg";

const stainlessSteelFamilies = [
  {
    family: "Austenitic Stainless Steel (300 Series)",
    description: "Most common type, known for high corrosion resistance and formability.",
    grades: [
      { id: "301", name: "301 Round Bar", slug: "301-round-bars", desc: "High-strength austenitic steel with good corrosion resistance." },
      { id: "302", name: "302 Round Bar", slug: "302-round-bars", desc: "General-purpose austenitic steel with excellent toughness." },
      { id: "303", name: "303 Round Bar", slug: "303-round-bars", desc: "Common free-machining austenitic stainless steel." },
      { id: "304", name: "304 / 304L Round Bar", slug: "304-304l-round-bars", desc: "Industry standard food-grade and chemical-grade stainless steel." },
      { id: "304h", name: "304H Round Bar", slug: "304h-round-bars", desc: "High-carbon version for enhanced strength at high temperatures." },
      { id: "309", name: "309 / 309S Round Bar", slug: "309-309s-round-bars", desc: "High heat-resistant grade for furnace parts and kilns." },
      { id: "310", name: "310 / 310S Round Bar", slug: "310-310s-round-bars", desc: "Excellent oxidation resistance at high temperatures up to 1100°C." },
      { id: "310h", name: "310H Round Bar", slug: "310h-round-bars", desc: "High-carbon version of 310 for extreme creep strength." },
      { id: "316", name: "316 / 316L Round Bar", slug: "316-316l-round-bars", desc: "Marine-grade stainless steel with superior chemical resistance." },
      { id: "316h", name: "316H Round Bar", slug: "316h-round-bars", desc: "High-carbon 316 for structural applications in high-heat settings." },
      { id: "316ti", name: "316Ti Round Bar", slug: "316ti-round-bars", desc: "Titanium-stabilized version for weld stability." },
      { id: "317", name: "317 / 317L Round Bar", slug: "317-317l-round-bars", desc: "Higher molybdenum content for superior pitting resistance." },
      { id: "321", name: "321 / 321H Round Bar", slug: "321-321h-round-bars", desc: "Stabilized with titanium to prevent carbide precipitation during welding." },
      { id: "347", name: "347 / 347H Round Bar", slug: "347-347h-round-bars", desc: "Columbium-stabilized austenitic steel for high-temperature service." },
      { id: "alloy20", name: "Alloy 20 (Carpenter 20)", slug: "alloy-20-round-bars", desc: "Super-austenitic alloy for exceptional sulfuric acid resistance." },
    ]
  },
  {
    family: "Martensitic & Ferritic (400 Series)",
    description: "Hardenable and magnetic grades for various industrial uses.",
    grades: [
      { id: "403", name: "403 Round Bar", slug: "403-round-bars", desc: "Standard martensitic steel for turbine blades and highly stressed parts." },
      { id: "405", name: "405 Round Bar", slug: "405-round-bars", desc: "12% chromium steel designed for use in the as-welded condition." },
      { id: "409", name: "409 Round Bar", slug: "409-round-bars", desc: "Ferritic grade commonly used in automotive exhaust systems." },
      { id: "410", name: "410 / 410S Round Bar", slug: "410-round-bars", desc: "General-purpose martensitic steel for valve parts and fasteners." },
      { id: "414", name: "414 Round Bar", slug: "414-round-bars", desc: "Nickel-added martensitic steel with improved corrosion resistance." },
      { id: "416", name: "416 Round Bar", slug: "416-round-bars", desc: "Highest machinability of all stainless steels (Martensitic)." },
      { id: "420", name: "420 Round Bar", slug: "420-round-bars", desc: "High-carbon martensitic steel for cutlery and industrial tools." },
      { id: "420f", name: "420F Round Bar", slug: "420f-round-bars", desc: "Free-machining version of 420 for automatic screw machines." },
      { id: "422", name: "422 Round Bar", slug: "422-round-bars", desc: "High-strength martensitic steel for high-temperature applications." },
      { id: "429", name: "429 Round Bar", slug: "429-round-bars", desc: "Ferritic steel offering better weldability than 430." },
      { id: "430", name: "430 Round Bar", slug: "430-round-bars", desc: "Non-hardenable ferritic grade with good corrosion resistance." },
      { id: "430f", name: "430F Round Bar", slug: "430f-round-bars", desc: "Free-machining version of 430 with high magnetic permeability." },
      { id: "431", name: "431 Round Bar", slug: "431-round-bars", desc: "High-chromium martensitic steel with excellent corrosion resistance." },
      { id: "434", name: "434 / 436 Round Bar", slug: "434-436-round-bars", desc: "Molybdenum-bearing ferritic steels for enhanced pitting resistance." },
      { id: "440abc", name: "440A / 440B / 440C Round Bar", slug: "440abc-round-bars", desc: "High-carbon hardenable steels for bearings and high-wear parts." },
      { id: "442", name: "442 Round Bar", slug: "442-round-bars", desc: "High-chromium ferritic steel for scale resistance in high-heat." },
      { id: "446", name: "446 Round Bar", slug: "446-round-bars", desc: "High-chromium ferritic steel for high-temperature oxidation resistance." },
    ]
  },
  {
    family: "Precipitation Hardening (PH) Stainless",
    description: "High-strength alloys that can be treated to achieve extreme hardness.",
    grades: [
      { id: "17-4ph", name: "17-4 PH (630)", slug: "17-4ph-round-bars", desc: "Most popular PH grade with high strength and good corrosion resistance." },
      { id: "15-5ph", name: "15-5 PH", slug: "15-5ph-round-bars", desc: "High toughness and transverse strength version of 17-4PH." },
      { id: "17-7ph", name: "17-7 PH (631)", slug: "17-7ph-round-bars", desc: "Excellent spring properties and fatigue resistance." },
      { id: "13-8ph", name: "13-8 Mo (S13800)", slug: "13-8mo-round-bars", desc: "Vacuum-melted PH grade with extreme toughness and stress resistance." },
    ]
  },
  {
    family: "Duplex & Super Duplex",
    description: "Mixed microstructure for double the strength and higher durability.",
    grades: [
      { id: "2205", name: "2205 Duplex (F51 / S31803)", slug: "2205-duplex-round-bars", desc: "Most widely used duplex grade with extreme durability." },
      { id: "2507", name: "2507 Super Duplex (F53 / S32750)", slug: "2507-duplex-round-bars", desc: "High-performance grade for chemical processing and oil/gas." },
      { id: "f55", name: "Zeron 100 / F55 (S32760)", slug: "zeron-100-round-bars", desc: "Maximum resistance to pitting and crevice corrosion." },
      { id: "2101", name: "LDX 2101 Round Bar", slug: "ldx-2101-round-bars", desc: "Lean duplex grade for cost-effective strength." },
      { id: "2304", name: "LDX 2304 Round Bar", slug: "ldx-2304-round-bars", desc: "High-strength alternative to 304L/316L." },
    ]
  },
  {
    family: "Specialized & High Performance",
    description: "Special alloys for extreme environments and critical conditions.",
    grades: [
      { id: "904l", name: "904L Round Bar (1.4539)", slug: "904l-round-bars", desc: "Super-austenitic steel used in chemical plants handling sulfuric acid." },
      { id: "254smo", name: "254SMO Round Bar", slug: "254smo-round-bars", desc: "6-moly stainless steel with exceptional chloride resistance." },
      { id: "nitro60", name: "Nitronic 60 (S21800)", slug: "nitronic-60-round-bars", desc: "Excellent galling and wear resistance alloy." },
      { id: "nitro50", name: "Nitronic 50 (XM-19)", slug: "nitronic-50-round-bars", desc: "Twice the yield strength of 316 with superior corrosion resistance." },
      { id: "alloy31", name: "Alloy 31 (1.4562)", slug: "alloy-31-round-bars", desc: "Iron-nickel-chromium-molybdenum alloy with nitrogen addition." },
      { id: "sanicro28", name: "Sanicro 28 (Alloy 28)", slug: "sanicro-28-round-bars", desc: "High-alloy multi-purpose austenitic steel for severe conditions." },
      { id: "al6xn", name: "AL-6XN (N08367)", slug: "al-6xn-round-bars", desc: "Super-austenitic alloy with high resistance to chloride pitting." },
      { id: "253ma", name: "253 MA (S30815)", slug: "253-ma-round-bars", desc: "High-temperature lean austenitic steel with cerium addition." },
    ]
  }
];

export default function StainlessSteelRoundBars() {
  return (
    <>
      <ProductSEO
        title="Stainless Steel Round Bars - 49+ Industrial Grades | Mamta Steel Traders"
        description="Premium supplier of 49+ Stainless Steel Round Bar grades including 304, 316L, 17-4PH, Duplex 2205, Super Duplex 2507, Nitronic, and 904L. Largest stock in Mumbai. Order custom sizes."
        keywords="stainless steel round bars, SS grades 304 316L, 17-4PH round bar, Duplex 2205 supplier, Super Duplex supplier India, SS 310 round bar, machine grade stainless steel Mumbai"
        canonicalUrl="/product/round-bars/stainless-steel-round-bars"
      />
      
      <div className="min-h-screen bg-white">
        {/* Breadcrumb & Navigation */}
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
           <div className="container mx-auto px-4 py-4 font-black">
              <nav className="flex items-center space-x-2 text-sm flex-wrap text-black font-black uppercase italic font-black">
                 <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary underline decoration-navy-primary/20 transition-colors italic tracking-tighter uppercase font-black italic">Home</Link>
                 <ArrowRight className="w-4 h-4 text-gray-400 font-extrabold" />
                 <Link href="/product/round-bars/round-bars" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary underline decoration-navy-primary/20 transition-colors italic tracking-tighter uppercase font-black italic font-black">Round Bars</Link>
                 <ArrowRight className="w-4 h-4 text-gray-400 font-extrabold" />
                 <span className="text-navy-primary dark:text-gold-primary underline decoration-gold-primary decoration-2 underline-offset-4 italic tracking-tighter uppercase font-black italic">Stainless Steel Series</span>
              </nav>
           </div>
        </div>
        <div className="container mx-auto px-4 py-4">
           <Link href="/product/round-bars/round-bars" className="inline-flex items-center text-navy-primary dark:text-gold-primary hover:underline font-black uppercase text-xs italic tracking-tighter italic font-black">
              <ArrowLeft className="w-3 h-3 mr-2 font-black" /> Back to Round Bars
           </Link>
        </div>

        {/* Dynamic Hero Section */}
        <div className="bg-gradient-to-br from-navy-primary to-slate-900 text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Premium <span className="text-gold-primary">Stainless Steel</span> Round Bars
              </h1>
              <p className="text-xl mb-10 text-gray-200 leading-relaxed">
                Empowering global industries with 49+ specialized stainless steel grades. 
                From standard food-grade 304 to extreme-performance Super Duplex and Nitronic alloys. 
                Certified, high-precision stock for immediate dispatch.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-8 py-4 rounded-lg font-bold transition-all shadow-lg text-lg flex items-center">
                  Request Technical Quote <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Families Selection */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {stainlessSteelFamilies.map((family, idx) => (
                <div key={idx} className="bg-white p-4 rounded-lg border hover:border-gold-primary transition-all shadow-sm">
                  <h3 className="font-bold text-navy-primary text-sm mb-1">{family.family}</h3>
                  <p className="text-xs text-gray-500">{family.grades.length} Specialized Grades</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categorized Products List */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {stainlessSteelFamilies.map((family, familyIdx) => (
              <div key={familyIdx} className="mb-20 last:mb-0">
                <div className="border-l-4 border-gold-primary pl-4 mb-8">
                  <h2 className="text-3xl font-bold text-navy-primary mb-2">{family.family}</h2>
                  <p className="text-gray-600">{family.description}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {family.grades.map((product) => (
                    <div 
                      key={product.id}
                      className="group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full overflow-hidden"
                    >
                      <div className="bg-gray-100 h-3 w-full group-hover:bg-gold-primary transition-colors"></div>
                      <div className="p-6 flex-grow flex flex-col">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-xl font-bold text-navy-primary group-hover:text-gold-secondary transition-colors">
                            {product.name}
                          </h3>
                        </div>
                        <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">
                          {product.desc}
                        </p>
                        <div className="space-y-3 mt-auto">
                          <Link 
                            href={`/product/round-bars/stainless-steel/${product.slug}`}
                            className="w-full bg-navy-primary text-white py-3 rounded-lg font-semibold hover:bg-navy-secondary transition-colors flex items-center justify-center group/btn"
                          >
                            Explore Grade Details <ChevronRight className="ml-1 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                          </Link>
                          <Link 
                            href="/contact"
                            className="w-full bg-gray-50 text-navy-primary py-2 rounded flex items-center justify-center text-xs font-bold hover:bg-gray-100 transition-colors"
                          >
                            Get Custom Quote
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Global standards Section */}
        <section className="py-16 bg-navy-primary text-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-12 text-center">
              <div>
                <ShieldCheck className="w-12 h-12 mx-auto mb-4 text-gold-primary" />
                <h4 className="text-xl font-bold mb-2">Quality Certified</h4>
                <p className="text-gray-400 text-sm">All grades supplied with 100% Mill Test Certificates (MTC) and Third Party Inspection (TPI) options.</p>
              </div>
              <div>
                <Zap className="w-12 h-12 mx-auto mb-4 text-gold-primary" />
                <h4 className="text-xl font-bold mb-2">Instant Dispatch</h4>
                <p className="text-gray-400 text-sm">Ready stock of standard sizes (6mm to 500mm) for immediate global delivery from Mumbai port.</p>
              </div>
              <div>
                <Settings className="w-12 h-12 mx-auto mb-4 text-gold-primary" />
                <h4 className="text-xl font-bold mb-2">Custom Processing</h4>
                <p className="text-gray-400 text-sm">Precision cutting, centerless grinding, and polishing services available for all stainless steel grades.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ - Search Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-navy-primary mb-12">Search by Industrial Performance</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Heat Resistant Grades", tags: ["SS 310", "SS 309", "SS 446", "321H", "347H"] },
                { title: "Acid & Chemical Resistant", tags: ["SS 316L", "904L", "Alloy 20", "SS 317L", "254SMO"] },
                { title: "Free Machining Grades", tags: ["SS 303", "SS 416", "SS 430F", "304Cu2"] },
                { title: "High Strength (PH)", tags: ["17-4PH", "15-5PH", "17-7PH", "Nitronic 50"] },
                { title: "Oil & Gas (Duplex)", tags: ["Duplex 2205", "Super Duplex 2507", "F55", "S32760"] },
                { title: "Valve & Hardware Steel", tags: ["SS 410", "SS 420", "SS 431", "SS 440C"] }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-navy-primary mb-4 flex items-center">
                    <BarChart3 className="w-4 h-4 mr-2 text-gold-primary" /> {item.title}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-gray-100 text-navy-primary text-xs rounded-full font-medium">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-navy-primary to-slate-900 text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Partner with India's Largest <br/> <span className="text-gold-primary">Stainless Steel Round Bar</span> Experts</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              Serving 200+ global clients with unmatched precision and metallurgy expertise. 
              Contact us for mill pricing, bulk orders, or technical grade selection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-10 py-4 rounded-lg font-bold text-lg transition-transform hover:scale-105 shadow-2xl">
                Get Your Professional Quote Today
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

