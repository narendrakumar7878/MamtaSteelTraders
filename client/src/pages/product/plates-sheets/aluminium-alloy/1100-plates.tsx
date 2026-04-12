import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft, ArrowRight, CheckCircle, Mail, Phone, ShieldCheck, Factory, Beaker, Zap, Anchor } from "lucide-react";
import ss_plate_img from "@/assets/SS PLATE  MAMTA STEEL TRADERS.jpg";
import { Link } from "wouter";

export default function Aluminium1100PlatesDetail() {
  const chemicalComposition = [
    { element: "Aluminium (Al)", min: "99.00", max: "—" },
    { element: "Copper (Cu)", min: "0.05", max: "0.20" },
    { element: "Iron (Fe)", min: "—", max: "0.95" },
    { element: "Silicon (Si)", min: "—", max: "0.95" },
    { element: "Manganese (Mn)", min: "—", max: "0.05" },
    { element: "Zinc (Zn)", min: "—", max: "0.10" },
    { element: "Others (Total)", min: "—", max: "0.15" },
  ];

  const mechanicalProperties = [
    { property: "Tensile Strength (MPa)", value: "75 - 165" },
    { property: "Yield Strength (MPa)", value: "35 - 145" },
    { property: "Elongation (%)", value: "5 - 35" },
    { property: "Hardness (Brinell)", value: "23 - 44" },
    { property: "Modulus of Elasticity (GPa)", value: "69" },
  ];

  const equivalentGrades = [
    { country: "USA / ASTM", grade: "1100" },
    { country: "Germany / DIN", grade: "Al99.0 / 3.0255" },
    { country: "UK / BS", grade: "1050 / 1200" },
    { country: "Japan / JIS", grade: "A1100" },
    { country: "India / IS", grade: "19000 / 19500" },
  ];

  const applications = [
    "Chemical Storage & Processing Equipment",
    "Food & Pharmaceutical Industry Containers",
    "Heat Exchangers & Fin Stock",
    "Lighting Reflectors & Decorative Parts",
    "Nameplates & Dial Plates",
    "Spinning & Deep Drawn Components",
    "Cooking Utensils & Kitchenware",
    "Precision Machined Parts"
  ];

  const specifications = [
    "ASTM B209 / ASME SB209",
    "Thickness: 0.5mm to 150mm",
    "Width: 1000mm, 1250mm, 1500mm",
    "Length: 2000mm, 2500mm, 3000mm, 6000mm",
    "Temper: O, H12, H14, H16, H18",
    "Finish: Mill Finish, Bright, Brushed"
  ];

  return (
    <>
      <ProductSEO
        title="Aluminium 1100 Plates & Sheets Supplier | Pure Aluminium 1100 Price India"
        description="Premium Aluminium 1100 Plates and Sheets supplier in Mumbai. High purity (99.0%) aluminium with excellent corrosion resistance and formability. Best wholesale prices for ASTM B209 1100 plates. Exporting to UAE, USA, Saudi Arabia, and Gulf countries."
        keywords="Aluminium 1100 plates, 1100 aluminium sheet supplier, pure aluminium 1100 price, ASTM B209 1100 properties, 1100 aluminium chemical composition, aluminium alloy 1100 h14, Mumbai aluminium market, wholesale aluminium plates"
        category="Plates & Sheets"
        productName="Aluminium 1100 Plates & Sheets"
        specifications={specifications}
        canonicalUrl="/product/plates-sheets/aluminium-alloy/1100-plates"
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
              <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
              <ArrowRight className="w-4 h-4" />
              <Link href="/product/plates-sheets" className="hover:text-blue-600 transition-colors">Plates & Sheets</Link>
              <ArrowRight className="w-4 h-4" />
              <Link href="/product/plates-sheets/aluminium-alloy" className="hover:text-blue-600 transition-colors">Aluminium Alloy</Link>
              <ArrowRight className="w-4 h-4" />
              <span className="text-blue-600 dark:text-blue-400 font-medium">Aluminium 1100</span>
            </nav>
          </div>
        </div>

        <div className="container mx-auto px-4 py-6">
          <Link href="/product/plates-sheets/aluminium-alloy" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline font-semibold group">
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Aluminium Alloy Plates & Sheets
          </Link>
        </div>

        <div className="bg-gradient-to-br from-slate-900 via-navy-primary to-slate-900 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          <div className="container mx-auto px-4 py-16 relative z-10">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <ShieldCheck className="w-10 h-10 text-gold-primary mr-4 animate-pulse" />
                  <span className="bg-gold-primary/20 text-gold-primary border border-gold-primary/30 px-4 py-1 text-xs uppercase tracking-widest rounded-full font-bold font-sans">99% Pure Aluminium</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-4 uppercase tracking-tight leading-tight font-sans">
                  Aluminium 1100
                  <span className="block text-2xl text-gold-primary font-normal mt-2 normal-case tracking-wide">ASTM B209 / ASME SB209 Plates & Sheets</span>
                </h1>
                <p className="text-xl mb-8 text-blue-100 leading-relaxed max-w-xl font-light">
                  Commercially pure aluminium with excellent corrosion resistance and superior formability. Ideal for chemical processing, food industry, and decorative applications where high ductility is required.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-8 py-4 rounded-xl font-bold transition-all hover:scale-105 shadow-xl inline-flex items-center justify-center group">
                    <Mail className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform" /> Get Best Export Quote
                  </Link>
                  <a href="tel:+919819322576" className="border-2 border-white/30 hover:bg-white hover:text-navy-primary px-8 py-4 rounded-xl font-bold transition-all inline-flex items-center justify-center">
                    <Phone className="w-5 h-5 mr-3" /> Technical Expert
                  </a>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-gold-primary to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <img src={ss_plate_img} alt="Aluminium 1100 Plates" className="relative w-full rounded-2xl shadow-2xl border border-white/10 object-cover h-[400px]" />
                <div className="absolute -bottom-6 -right-6 bg-navy-secondary border-2 border-gold-primary p-6 rounded-xl shadow-2xl hidden md:block backdrop-blur-md">
                  <p className="text-gold-primary font-bold text-xs uppercase mb-1 tracking-widest">Global Export</p>
                  <p className="text-white font-black text-xl italic uppercase font-sans">UAE • USA • EUROPE</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12 mb-16">
              <div className="lg:col-span-2 space-y-12">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-shadow duration-300">
                  <h2 className="text-2xl font-bold text-navy-primary dark:text-white mb-6 border-b-2 border-gold-primary pb-2 inline-block uppercase tracking-tighter font-sans">
                    Grade Overview: Aluminium 1100
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8 font-light">
                    Aluminium 1100 is a commercially pure aluminium (99.00% minimum). It is the most non-alloyed aluminium in the 1000 series. Known for its excellent corrosion resistance in a wide variety of environments, it offers superior formability and high thermal and electrical conductivity. While it has relatively low mechanical strength, it can be hardened by cold working.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border-t-4 border-navy-primary">
                      <Factory className="w-8 h-8 text-navy-primary mb-4" />
                      <h4 className="font-bold text-navy-primary dark:text-blue-400 uppercase text-xs mb-2 tracking-widest">Corrosion Resistance</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">Excellent resistance to atmospheric and chemical corrosion.</p>
                    </div>
                    <div className="p-6 bg-gold-50 dark:bg-gold-900/10 rounded-xl border-t-4 border-gold-primary">
                      <Beaker className="w-8 h-8 text-gold-primary mb-4" />
                      <h4 className="font-bold text-navy-primary dark:text-gold-primary uppercase text-xs mb-2 tracking-widest">High Ductility</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">Perfect for spinning, deep drawing, and complex forming.</p>
                    </div>
                    <div className="p-6 bg-slate-50 dark:bg-slate-700/30 rounded-xl border-t-4 border-slate-900">
                      <Zap className="w-8 h-8 text-slate-900 dark:text-gray-300 mb-4" />
                      <h4 className="font-bold text-navy-primary dark:text-white uppercase text-xs mb-2 tracking-widest">Conductivity</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">High electrical and thermal conductivity for industrial use.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700 font-sans">
                  <h3 className="text-2xl font-bold text-navy-primary dark:text-white mb-8 uppercase text-center tracking-widest">Chemical Composition (%)</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-navy-primary text-white">
                          <th className="px-6 py-4 text-left uppercase text-xs font-bold tracking-widest border-r border-white/10">Element</th>
                          <th className="px-6 py-4 text-center uppercase text-xs font-bold tracking-widest border-r border-white/10">Min %</th>
                          <th className="px-6 py-4 text-center uppercase text-xs font-bold tracking-widest">Max %</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 dark:divide-gray-700 font-sans">
                        {chemicalComposition.map((c, i) => (
                          <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                            <td className="px-6 py-4 font-bold text-gray-700 dark:text-gray-300 uppercase text-xs tracking-tight border-r border-gray-50 dark:border-gray-600">{c.element}</td>
                            <td className="px-6 py-4 text-center font-mono text-lg text-navy-primary dark:text-blue-400 font-bold border-r border-gray-50 dark:border-gray-600">{c.min}</td>
                            <td className="px-6 py-4 text-center font-mono text-lg text-navy-primary dark:text-blue-400 font-bold">{c.max}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-navy-primary rounded-2xl shadow-xl p-8 text-white relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full group-hover:scale-110 transition-transform duration-700"></div>
                  <h3 className="text-2xl font-bold mb-8 uppercase border-b-2 border-gold-primary pb-2 inline-block tracking-widest font-sans">Product Scope</h3>
                  <div className="p-6 bg-white/10 rounded-xl mb-8 border border-white/20 text-center backdrop-blur-sm">
                    <p className="text-xs text-blue-300 uppercase tracking-widest mb-2 font-bold">Standard Thickness</p>
                    <p className="text-4xl font-black text-gold-primary italic font-sans">0.5 – 150mm</p>
                  </div>
                  <ul className="space-y-4">
                    {specifications.map((spec, i) => (
                      <li key={i} className="flex items-center text-sm font-semibold tracking-tight font-sans">
                        <CheckCircle className="w-5 h-5 text-gold-primary mr-3 flex-shrink-0" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
                  <h3 className="text-xl font-bold text-navy-primary dark:text-white mb-6 uppercase border-b-2 border-navy-primary pb-2 inline-block tracking-widest font-sans">Global Equivalents</h3>
                  <div className="space-y-3">
                    {equivalentGrades.map((g, i) => (
                      <div key={i} className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gold-primary/10 transition-all group">
                        <span className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest font-sans">{g.country}</span>
                        <span className="text-navy-primary dark:text-blue-400 font-bold italic group-hover:text-gold-primary transition-colors font-sans">{g.grade}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
                   <h3 className="text-xl font-bold text-navy-primary dark:text-white mb-6 uppercase border-b-2 border-green-600 pb-2 inline-block tracking-widest font-sans">Mechanical Properties</h3>
                   <div className="space-y-4">
                    {mechanicalProperties.map((p, i) => (
                      <div key={i} className="border-b border-gray-100 dark:border-gray-700 pb-2 last:border-0 font-sans">
                        <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-1">{p.property}</p>
                        <p className="text-lg font-bold text-navy-primary dark:text-blue-400 font-mono">{p.value}</p>
                      </div>
                    ))}
                   </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-10 mb-16 border border-gray-100 dark:border-gray-700 font-sans">
              <div className="flex items-center mb-10">
                <Anchor className="w-10 h-10 text-gold-primary mr-4" />
                <h3 className="text-3xl font-bold text-navy-primary dark:text-white uppercase border-l-8 border-gold-primary pl-4 tracking-tighter">Sector Utilization</h3>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {applications.map((app, i) => (
                  <div key={i} className="group p-6 bg-gray-50 dark:bg-gray-700 rounded-xl flex flex-col border border-gray-100 dark:border-gray-600 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                    <CheckCircle className="w-6 h-6 text-navy-primary dark:text-gold-primary mb-4 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-bold text-gray-700 dark:text-gray-200 uppercase leading-tight tracking-tight font-sans">{app}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center bg-navy-primary p-16 rounded-3xl shadow-2xl relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent group-hover:opacity-75 transition-opacity duration-1000"></div>
               <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/5 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-1000"></div>
              <h3 className="text-4xl font-black text-white mb-6 uppercase relative z-10 tracking-widest font-sans">Ready Stock • Global Shipping</h3>
              <p className="text-blue-100 mb-10 max-w-3xl mx-auto relative z-10 text-lg font-light font-sans">Mamta Steel Traders is a leading supplier of Aluminium 1100 Plates & Sheets. We offer mill-certified products with fast delivery to Dubai, Saudi Arabia, Qatar, USA, and Southeast Asia. Competitive wholesale pricing for large industrial projects.</p>
              <div className="flex flex-col sm:flex-row gap-8 justify-center relative z-10">
                <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-12 py-5 rounded-2xl font-black transition-all shadow-2xl hover:scale-110 uppercase tracking-widest font-sans">
                  Inquire Now
                </Link>
                <a href="tel:+919819322576" className="bg-white hover:bg-slate-100 text-navy-primary px-12 py-5 rounded-2xl font-black transition-all shadow-2xl hover:scale-110 flex items-center justify-center uppercase tracking-widest font-sans">
                  <Phone className="w-5 h-5 mr-3" /> Call Specialist
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
