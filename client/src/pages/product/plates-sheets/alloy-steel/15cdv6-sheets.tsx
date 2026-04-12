import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft, ArrowRight, CheckCircle, Mail, Phone, ShieldCheck, Factory, Beaker, Zap, Anchor } from "lucide-react";
import ss_plate_img from "@/assets/SS 304 PLATE  MAMTA STEEL TRADERS.jpg";
import { Link } from "wouter";

export default function Grade15CDV6PlatesDetail() {
  const chemicalComposition = [
    { element: "Carbon (C)", min: "0.12", max: "0.18" },
    { element: "Chromium (Cr)", min: "1.25", max: "1.50" },
    { element: "Molybdenum (Mo)", min: "0.80", max: "1.00" },
    { element: "Vanadium (V)", min: "0.20", max: "0.30" },
    { element: "Manganese (Mn)", min: "0.80", max: "1.10" },
    { element: "Silicon (Si)", min: "—", max: "0.20" },
    { element: "Phosphorus (P)", min: "—", max: "0.020" },
    { element: "Sulfur (S)", min: "—", max: "0.015" },
  ];

  const mechanicalProperties = [
    { property: "Tensile Strength (Rm) MPa", value: "980 – 1180" },
    { property: "Yield Point (Re) MPa min", value: "790" },
    { property: "Elongation (A5) % min", value: "10" },
    { property: "Impact Strength (ISO-V) J min", value: "40" },
  ];

  const equivalentGrades = [
    { country: "DIN / EN", grade: "1.7734 / SCV" },
    { country: "USA / AMS", grade: "AMS 6497" },
    { country: "France / AFNOR", grade: "15CDV6" },
    { country: "Germany / W.Nr.", grade: "1.7734.4" },
  ];

  const applications = [
    "Aerospace Structural Components",
    "Defense & Military Vehicle Parts",
    "High-Performance Motorsport Roll Cages",
    "Rocket Motor Casings",
    "Pressure Vessels & Bomb Bodies",
    "Suspension Components",
    "Oil & Gas Drilling Tools",
    "Critical Nuclear Engineering Parts"
  ];

  const specifications = [
    "DIN 1.7734 / WL 1.7734",
    "Thickness: 0.5mm to 50mm",
    "Width: 1000mm, 1250mm, 1500mm",
    "Finish: Hot Rolled, Cold Rolled",
    "Heat Treatment: Normalized, Quenched & Tempered",
    "Testing: Ultrasonic Tested, Magnetic Particle Inspection"
  ];

  return (
    <>
      <ProductSEO
        title="15CDV6 Sheets (1.7734) Supplier & Stockist | High Strength Aerospace Steel India"
        description="Leading stockist of 15CDV6 / 1.7734 Alloy Steel Sheets in Mumbai, India. Specialized aerospace-grade steel with high yield strength & weldability. Global delivery of DIN 1.7734 plates for defense, aerospace & motorsports. Best price guaranteed at Mamta Steel."
        keywords="15CDV6 sheets, 1.7734 steel plates, aerospace steel supplier India, 15CDV6 yield strength, DIN 1.7734 chemical composition, 15CDV6 price per kg, motorsport roll cage steel, defense grade alloy steel Mumbai"
        category="Plates & Sheets"
        productName="15CDV6 (1.7734) Alloy Steel Sheets"
        specifications={specifications}
        canonicalUrl="/product/plates-sheets/alloy-steel/15cdv6-sheets"
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Breadcrumbs */}
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
              <Link href="/" className="hover:text-blue-600 transition-colors tracking-tight">Home</Link>
              <ArrowRight className="w-4 h-4" />
              <Link href="/product/plates-sheets" className="hover:text-blue-600 transition-colors tracking-tight">Plates & Sheets</Link>
              <ArrowRight className="w-4 h-4" />
              <Link href="/product/plates-sheets/alloy-steel-plates" className="hover:text-blue-600 transition-colors tracking-tight">Alloy Steel</Link>
              <ArrowRight className="w-4 h-4" />
              <span className="text-blue-600 dark:text-blue-400 font-medium tracking-tight">15CDV6 Sheets</span>
            </nav>
          </div>
        </div>

        {/* Back Button Section */}
        <div className="container mx-auto px-4 py-6">
          <Link href="/product/plates-sheets/alloy-steel-plates" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline font-semibold group" data-testid="back-button">
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Alloy Steel Plates & Sheets
          </Link>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-br from-slate-900 via-navy-primary to-slate-900 text-white relative overflow-hidden shadow-2xl italic">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          <div className="container mx-auto px-4 py-16 relative z-10">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <ShieldCheck className="w-10 h-10 text-gold-primary mr-4 animate-pulse" />
                  <span className="bg-gold-primary/20 text-gold-primary border border-gold-primary/30 px-4 py-1 text-xs uppercase tracking-widest rounded-full font-bold">Aerospace Grade - Ready Stock</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-4 uppercase tracking-tight leading-tight">
                  15CDV6 Sheets & Plates
                  <span className="block text-2xl text-gold-primary font-normal mt-2 normal-case tracking-wide">DIN 1.7734 / High-Yield Special Alloy</span>
                </h1>
                <p className="text-xl mb-8 text-blue-100 leading-relaxed max-w-xl font-light">
                  A high-strength chromium-molybdenum-vanadium alloy steel offering exceptional yield strength and toughness combined with excellent weldability for critical defense and aerospace missions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-8 py-4 rounded-xl font-bold transition-all hover:scale-105 shadow-xl inline-flex items-center justify-center group">
                    <Mail className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform" /> Request Aerospace Catalog
                  </Link>
                  <a href="tel:+919819322576" className="border-2 border-white/30 hover:bg-white hover:text-navy-primary px-8 py-4 rounded-xl font-bold transition-all inline-flex items-center justify-center">
                    <Phone className="w-5 h-5 mr-3" /> Technical Expert
                  </a>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-gold-primary to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <img src={ss_plate_img} alt="15CDV6 Steel Sheets" className="relative w-full rounded-2xl shadow-2xl border border-white/10 object-cover h-[400px]" />
                <div className="absolute -bottom-6 -right-6 bg-navy-secondary border-2 border-gold-primary p-6 rounded-xl shadow-2xl hidden md:block backdrop-blur-md">
                  <p className="text-gold-primary font-bold text-xs uppercase mb-1 tracking-widest">Strength Profile</p>
                  <p className="text-white font-black text-xl italic uppercase">Ultra-High Yield</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Data Section */}
        <div className="container mx-auto px-4 py-16 italic">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12 mb-16">
              {/* Analysis */}
              <div className="lg:col-span-2 space-y-12">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-shadow duration-300">
                  <h2 className="text-2xl font-bold text-navy-primary dark:text-white mb-6 border-b-2 border-gold-primary pb-2 inline-block uppercase italic tracking-tighter">
                    Material Profile: 15CDV6 (1.7734)
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8 font-light">
                    15CDV6 is a low carbon, high-strength alloy steel that provides a unique combination of high yield strength, excellent toughness, and superior weldability. Unlike many other high-strength steels, it does not require complex post-weld heat treatment to maintain its properties, making it a preferred choice for motorsport roll cages and aerospace structures.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border-t-4 border-navy-primary">
                      <Factory className="w-8 h-8 text-navy-primary mb-4" />
                      <h4 className="font-bold text-navy-primary dark:text-blue-400 uppercase text-sm mb-2 italic tracking-widest">Weldability</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">Excellent welding characteristics even in the heat-treated condition.</p>
                    </div>
                    <div className="p-6 bg-gold-50 dark:bg-gold-900/10 rounded-xl border-t-4 border-gold-primary">
                      <Beaker className="w-8 h-8 text-gold-primary mb-4" />
                      <h4 className="font-bold text-navy-primary dark:text-gold-primary uppercase text-sm mb-2 italic tracking-widest">Toughness</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">Outstanding impact resistance at extremely low temperatures.</p>
                    </div>
                    <div className="p-6 bg-slate-50 dark:bg-slate-700/30 rounded-xl border-t-4 border-slate-900">
                      <Zap className="w-8 h-8 text-slate-900 dark:text-gray-300 mb-4" />
                      <h4 className="font-bold text-navy-primary dark:text-white uppercase text-sm mb-2 italic tracking-widest">Yield Ratio</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">Exceptional yield-to-tensile ratio for lightweight structural designs.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
                  <h3 className="text-2xl font-bold text-navy-primary dark:text-white mb-8 uppercase text-center italic tracking-widest">Chemical Composition (%)</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-navy-primary text-white">
                          <th className="px-6 py-4 text-left uppercase text-xs font-bold tracking-widest">Element</th>
                          <th className="px-6 py-4 text-center uppercase text-xs font-bold tracking-widest">Min %</th>
                          <th className="px-6 py-4 text-center uppercase text-xs font-bold tracking-widest">Max %</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                        {chemicalComposition.map((c, i) => (
                          <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                            <td className="px-6 py-4 font-bold text-gray-700 dark:text-gray-300 uppercase text-xs italic tracking-tight">{c.element}</td>
                            <td className="px-6 py-4 text-center font-mono text-lg text-navy-primary dark:text-blue-400 font-bold">{c.min}</td>
                            <td className="px-6 py-4 text-center font-mono text-lg text-navy-primary dark:text-blue-400 font-bold">{c.max}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Sidebar/Quick Info */}
              <div className="space-y-8">
                <div className="bg-navy-primary rounded-2xl shadow-xl p-8 text-white relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full group-hover:scale-110 transition-transform duration-700"></div>
                  <h3 className="text-2xl font-bold mb-8 uppercase border-b-2 border-gold-primary pb-2 inline-block italic tracking-widest">Inventory Range</h3>
                  <div className="p-6 bg-white/10 rounded-xl mb-8 border border-white/20 text-center backdrop-blur-sm">
                    <p className="text-xs text-blue-300 uppercase tracking-widest mb-2 font-bold">Standard Thickness</p>
                    <p className="text-4xl font-black text-gold-primary italic">0.5 – 50.0mm</p>
                  </div>
                  <ul className="space-y-4">
                    {specifications.map((spec, i) => (
                      <li key={i} className="flex items-center text-sm font-semibold tracking-tight">
                        <CheckCircle className="w-5 h-5 text-gold-primary mr-3 flex-shrink-0" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
                  <h3 className="text-xl font-bold text-navy-primary dark:text-white mb-6 uppercase border-b-2 border-navy-primary pb-2 inline-block italic tracking-widest">Aerospace Equivalents</h3>
                  <div className="space-y-3">
                    {equivalentGrades.map((g, i) => (
                      <div key={i} className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gold-primary/10 transition-all group">
                        <span className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase italic tracking-widest">{g.country}</span>
                        <span className="text-navy-primary dark:text-blue-400 font-bold italic group-hover:text-gold-primary transition-colors">{g.grade}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
                   <h3 className="text-xl font-bold text-navy-primary dark:text-white mb-6 uppercase border-b-2 border-green-600 pb-2 inline-block italic tracking-widest">Mechanical Properties</h3>
                   <div className="space-y-4">
                    {mechanicalProperties.map((p, i) => (
                      <div key={i} className="border-b border-gray-100 dark:border-gray-700 pb-2 last:border-0">
                        <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-1">{p.property}</p>
                        <p className="text-lg font-bold text-navy-primary dark:text-blue-400 italic font-mono">{p.value}</p>
                      </div>
                    ))}
                   </div>
                </div>
              </div>
            </div>

            {/* Applications */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-10 mb-16 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-10">
                <Anchor className="w-10 h-10 text-gold-primary mr-4" />
                <h3 className="text-3xl font-bold text-navy-primary dark:text-white uppercase border-l-8 border-gold-primary pl-4 italic tracking-tighter">Strategic Applications</h3>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {applications.map((app, i) => (
                  <div key={i} className="group p-6 bg-gray-50 dark:bg-gray-700 rounded-xl flex flex-col border border-gray-100 dark:border-gray-600 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                    <CheckCircle className="w-6 h-6 text-navy-primary dark:text-gold-primary mb-4 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-bold text-gray-700 dark:text-gray-200 uppercase italic leading-tight tracking-tight">{app}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Final CTA */}
            <div className="text-center bg-navy-primary p-16 rounded-3xl shadow-2xl relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent group-hover:opacity-75 transition-opacity duration-1000"></div>
               <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/5 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-1000"></div>
              <h3 className="text-4xl font-black text-white mb-6 uppercase italic relative z-10 tracking-widest">Certified Defense & Aerospace Supplier</h3>
              <p className="text-blue-100 mb-10 max-w-3xl mx-auto relative z-10 text-lg font-light">Mamta Steel provides fully certified 15CDV6 sheets with complete mill test reports (MTR) and ultrasonic testing. Our Mumbai facility specializes in high-yield alloy distribution for the world's most demanding engineering projects.</p>
              <div className="flex flex-col sm:flex-row gap-8 justify-center relative z-10">
                <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-12 py-5 rounded-2xl font-black transition-all shadow-2xl hover:scale-110 uppercase tracking-widest">
                  Bulk Defense Inquiry
                </Link>
                <a href="tel:+919819322576" className="bg-white hover:bg-slate-100 text-navy-primary px-12 py-5 rounded-2xl font-black transition-all shadow-2xl hover:scale-110 flex items-center justify-center uppercase tracking-widest">
                  <Phone className="w-5 h-5 mr-3" /> Technical Assistance
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
