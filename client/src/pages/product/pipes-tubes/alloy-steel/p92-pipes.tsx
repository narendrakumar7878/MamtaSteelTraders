import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft, ArrowRight, CheckCircle, Mail, Phone, ShieldCheck, Factory, Beaker, Zap, Anchor } from "lucide-react";
import alloy_pipe_img from "@/assets/SS ROUND BAR  MAMTA STEEL TRADERS.jpg";
import { Link } from "wouter";

export default function P92AlloySteelPipesDetail() {
  const chemicalComposition = [
    { element: "Carbon (C)", min: "0.07", max: "0.13" },
    { element: "Manganese (Mn)", min: "0.30", max: "0.60" },
    { element: "Chromium (Cr)", min: "8.50", max: "9.50" },
    { element: "Tungsten (W)", min: "1.50", max: "2.00" },
    { element: "Molybdenum (Mo)", min: "0.30", max: "0.60" },
    { element: "Vanadium (V)", min: "0.15", max: "0.25" },
    { element: "Niobium (Nb)", min: "0.04", max: "0.09" },
    { element: "Boron (B)", min: "0.001", max: "0.006" },
  ];

  const mechanicalProperties = [
    { property: "Tensile Strength (MPa) min", value: "620" },
    { property: "Yield Strength 0.2% Proof (MPa) min", value: "440" },
    { property: "Elongation (%) min", value: "20" },
    { property: "Hardness (Brinell) max", value: "250" },
  ];

  const equivalentGrades = [
    { country: "USA / UNS", grade: "UNS K92460" },
    { country: "Germany / DIN", grade: "1.4901 / X10CrWMoVNb9-2" },
    { country: "Japan / JIS", grade: "STBA 28" },
    { country: "United Kingdom", grade: "BS EN 10216-2" },
    { country: "ASTM / ASME", grade: "A335 P92 / SA335 P92" },
  ];

  const applications = [
    "Ultra-High Temperature Superheaters",
    "Advanced Supercritical Power Units",
    "High-Pressure Reheater Conduits",
    "Next-Gen Thermal Power Plants",
    "Critical Steam Header Systems",
    "Advanced Petrochemical Reactors",
    "High-Efficiency Energy Grid Hubs",
    "Ultra-HP Piping Networks"
  ];

  const specifications = [
    "Standard: ASTM A335 / ASME SA335",
    "Size: 1/2\" NB to 24\" NB",
    "Schedules: Sch 40 to Sch XXS",
    "Type: Seamless (Tungsten Enhanced 9Cr)",
    "Condition: Normalized & Tempered (Precision Control)",
    "Special: 100% UT, Eddy Current & Creep Validated"
  ];

  return (
    <>
      <ProductSEO
        title="ASTM A335 P92 Alloy Steel Pipes Stockist Mumbai - Tungsten Enhanced"
        description="Premium ASTM A335 Grade P92 Seamless Alloy Steel Pipes supplier in Mumbai. Tungsten-enhanced 9Cr alloy for ultra-high temperature and extreme efficiency power generation."
        keywords="ASTM A335 P92 pipes, P92 alloy pipe Mumbai, A335 P92 seamless pipe price, Tungsten alloy pipes India, ultra-supercritical P92 pipes"
        category="Pipes & Tubes"
        productName="ASTM A335 Grade P92 Pipes"
        specifications={specifications}
        canonicalUrl="/product/pipes-tubes/alloy-steel/p92-pipes"
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Breadcrumbs */}
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
              <Link href="/" className="hover:text-blue-600 transition-colors tracking-tight">Home</Link>
              <ArrowRight className="w-4 h-4" />
              <Link href="/pipes-tubes" className="hover:text-blue-600 transition-colors tracking-tight">Pipes & Tubes</Link>
              <ArrowRight className="w-4 h-4" />
              <Link href="/product/pipes-tubes/alloy-steel-pipe" className="hover:text-blue-600 transition-colors tracking-tight">Alloy Steel</Link>
              <ArrowRight className="w-4 h-4" />
              <span className="text-blue-600 dark:text-blue-400 font-medium tracking-tight">ASTM A335 Grade P92</span>
            </nav>
          </div>
        </div>

        {/* Back Button Section */}
        <div className="container mx-auto px-4 py-6">
          <Link href="/product/pipes-tubes/alloy-steel-pipe" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline font-semibold group" data-testid="back-button">
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Alloy Steel Catalog
          </Link>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-br from-slate-900 via-navy-primary to-slate-900 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          <div className="container mx-auto px-4 py-16 relative z-10">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <ShieldCheck className="w-10 h-10 text-gold-primary mr-4 animate-pulse" />
                  <span className="bg-gold-primary/20 text-gold-primary border border-gold-primary/30 px-4 py-1 text-xs uppercase tracking-widest rounded-full font-bold">Ultra-HP Performance</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-4 uppercase tracking-tight leading-tight">
                  ASTM A335 P92 Pipes
                  <span className="block text-2xl text-gold-primary font-normal mt-2 normal-case tracking-wide">Tungsten-Enhanced 9Cr High-Efficiency Alloy</span>
                </h1>
                <p className="text-xl mb-8 text-blue-100 leading-relaxed max-w-xl font-light">
                   Redefining thermal efficiency. Infused with Tungsten for superior creep-rupture strength, enabling modern power plants to operate at extreme temperatures for maximum energy output.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-8 py-4 rounded-xl font-bold transition-all hover:scale-105 shadow-xl inline-flex items-center justify-center group">
                    <Mail className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform" /> Price Inquiry
                  </Link>
                  <a href="tel:+919819322576" className="border-2 border-white/30 hover:bg-white hover:text-navy-primary px-8 py-4 rounded-xl font-bold transition-all inline-flex items-center justify-center">
                    <Phone className="w-5 h-5 mr-3" /> Technical Expert
                  </a>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-gold-primary to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <img src={alloy_pipe_img} alt="ASTM A335 Grade P92 Alloy Steel Pipes" className="relative w-full rounded-2xl shadow-2xl border border-white/10 object-cover h-[400px]" />
                <div className="absolute -bottom-6 -right-6 bg-navy-secondary border-2 border-gold-primary p-6 rounded-xl shadow-2xl hidden md:block backdrop-blur-md">
                  <p className="text-gold-primary font-bold text-xs uppercase mb-1 tracking-widest">Inventory Status</p>
                  <p className="text-white font-black text-xl italic uppercase">Elite Tungsten Alloy</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Data Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12 mb-16">
              {/* Analysis */}
              <div className="lg:col-span-2 space-y-12">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-shadow duration-300">
                  <h2 className="text-2xl font-bold text-navy-primary dark:text-white mb-6 border-b-2 border-gold-primary pb-2 inline-block uppercase italic tracking-tighter">
                    Grade Assessment: ASTM A335 / SA335 P92
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8 font-light">
                    ASTM A335 Grade P92 is the next-generation evolution of the modified 9Cr-1Mo material. By incorporating 1.5% to 2.0% Tungsten (W) and reducing molybdenum, P92 achieves significantly higher allowable stress at elevated temperatures than P91. This tungsten-strengthening mechanism allows for even thinner walls in high-pressure superheater tubes, directly contributing to the thermal efficiency of ultra-supercritical power plants. At Mamta Steel Traders, we provide P92 pipes with rigorous quality controls, ensuring that the critical balance of Boron, Niobium, and Vanadium is maintained for maximum creep-rupture performance at temperatures exceeding 600°C.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border-t-4 border-navy-primary">
                      <Factory className="w-8 h-8 text-navy-primary mb-4" />
                      <h4 className="font-bold text-navy-primary dark:text-blue-400 uppercase text-sm mb-2 italic tracking-widest">Tungsten Fortified</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">Enhanced with 1.5-2.0% Tungsten for superior structural durability at peak heat.</p>
                    </div>
                    <div className="p-6 bg-gold-50 dark:bg-gold-900/10 rounded-xl border-t-4 border-gold-primary">
                      <Beaker className="w-8 h-8 text-gold-primary mb-4" />
                      <h4 className="font-bold text-navy-primary dark:text-gold-primary uppercase text-sm mb-2 italic tracking-widest">High Efficiency</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">Designed for ultra-supercritical plants requiring thinner, stronger high-pressure walls.</p>
                    </div>
                    <div className="p-6 bg-slate-50 dark:bg-slate-700/30 rounded-xl border-t-4 border-slate-900">
                      <Zap className="w-8 h-8 text-slate-900 dark:text-gray-300 mb-4" />
                      <h4 className="font-bold text-navy-primary dark:text-white uppercase text-sm mb-2 italic tracking-widest">Future Ready</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">The metallurgical gold standard for modern high-efficiency energy grid hubs.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
                  <h3 className="text-2xl font-bold text-navy-primary dark:text-white mb-8 uppercase text-center italic tracking-widest">Chemical Composition</h3>
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
                  <h3 className="text-2xl font-bold mb-8 uppercase border-b-2 border-gold-primary pb-2 inline-block italic tracking-widest">Supply Scope</h3>
                  <div className="p-6 bg-white/10 rounded-xl mb-8 border border-white/20 text-center backdrop-blur-sm">
                    <p className="text-xs text-blue-300 uppercase tracking-widest mb-2 font-bold">Standard sizes</p>
                    <p className="text-4xl font-black text-gold-primary italic">1/2" – 24"</p>
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
                  <h3 className="text-xl font-bold text-navy-primary dark:text-white mb-6 uppercase border-b-2 border-navy-primary pb-2 inline-block italic tracking-widest">Global Equivalents</h3>
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
                <h3 className="text-3xl font-bold text-navy-primary dark:text-white uppercase border-l-8 border-gold-primary pl-4 italic tracking-tighter">Industrial Significance</h3>
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
              <h3 className="text-4xl font-black text-white mb-6 uppercase italic relative z-10 tracking-widest">Global P92 Alloy Leader</h3>
              <p className="text-blue-100 mb-10 max-w-3xl mx-auto relative z-10 text-lg font-light">Mamta Steel Traders is one of the few stockists globally specializing in ASTM A335 Grade P92 pipes. We provide premium, tungsten-enhanced alloy solutions for the most efficient power plants in the world. Ready for immediate dispatch with comprehensive technical support.</p>
              <div className="flex flex-col sm:flex-row gap-8 justify-center relative z-10">
                <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-12 py-5 rounded-2xl font-black transition-all shadow-2xl hover:scale-110 uppercase tracking-widest">
                  Bulk Order Inquiry
                </Link>
                <a href="tel:+919819322576" className="bg-white hover:bg-slate-100 text-navy-primary px-12 py-5 rounded-2xl font-black transition-all shadow-2xl hover:scale-110 flex items-center justify-center uppercase tracking-widest">
                  <Phone className="w-5 h-5 mr-3" /> +91 98193 22576
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
