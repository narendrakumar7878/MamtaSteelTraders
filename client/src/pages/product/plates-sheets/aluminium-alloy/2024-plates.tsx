import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft, ArrowRight, CheckCircle, Mail, Phone, ShieldCheck, Factory, Beaker, Zap, Anchor } from "lucide-react";
import ss_plate_img from "@/assets/SS PLATE  MAMTA STEEL TRADERS.jpg";
import { Link } from "wouter";

export default function Aluminium2024PlatesDetail() {
  const chemicalComposition = [
    { element: "Copper (Cu)", min: "3.80", max: "4.90" },
    { element: "Magnesium (Mg)", min: "1.20", max: "1.80" },
    { element: "Manganese (Mn)", min: "0.30", max: "0.90" },
    { element: "Silicon (Si)", min: "—", max: "0.50" },
    { element: "Iron (Fe)", min: "—", max: "0.50" },
    { element: "Zinc (Zn)", min: "—", max: "0.25" },
    { element: "Chromium (Cr)", min: "—", max: "0.10" },
    { element: "Titanium (Ti)", min: "—", max: "0.15" },
    { element: "Aluminium (Al)", min: "Remainder", max: "—" },
  ];

  const mechanicalProperties = [
    { property: "Tensile Strength (MPa)", value: "400 - 470" },
    { property: "Yield Strength (MPa)", value: "270 - 325" },
    { property: "Elongation (%)", value: "10 - 20" },
    { property: "Hardness (Brinell)", value: "105 - 120" },
    { property: "Modulus of Elasticity (GPa)", value: "73" },
  ];

  const equivalentGrades = [
    { country: "USA / ASTM", grade: "2024" },
    { country: "Germany / DIN", grade: "AlCuMg2 / 3.1355" },
    { country: "UK / BS", grade: "2024 / L97 / L98" },
    { country: "Japan / JIS", grade: "A2024" },
    { country: "France / AFNOR", grade: "AU4G1" },
  ];

  const applications = [
    "Aircraft Fuselage Skins",
    "Wing Tension Members & Structures",
    "Shear Webs & Ribs for Aerospace",
    "Truck Wheels & Fasteners",
    "High-Performance Engine Components",
    "Military & Defense Structural Parts",
    "Scientific Instruments & Rivets",
    "Computer & Electronic Hardware"
  ];

  const specifications = [
    "ASTM B209 / ASME SB209",
    "AMS-QQ-A-250/4",
    "AMS 4035 / 4037",
    "Thickness: 0.5mm to 150mm",
    "Temper: O, T3, T351, T4, T81",
    "Certifications: DFARS, EN 10204 3.1"
  ];

  return (
    <>
      <ProductSEO
        title="Aluminium 2024 T351 Plates & Sheets Supplier | Aerospace Fuselage Grade"
        description="Leading supplier of Aluminium 2024 Plates in Mumbai. High-strength 2024-T351 aerospace grade for aircraft fuselage and structural parts. AMS-QQ-A-250/4 compliant. Best prices for export to UAE, USA, and Saudi Arabia."
        keywords="Aluminium 2024 plates, 2024-T351 aluminium sheet, aircraft fuselage plates, AMS-QQ-A-250/4 aluminum, 2024 aluminium chemical composition, aerospace grade aluminium supplier Mumbai, wholesale aluminium 2024, wing tension member plates"
        category="Plates & Sheets"
        productName="Aluminium 2024 Plates & Sheets"
        specifications={specifications}
        canonicalUrl="/product/plates-sheets/aluminium-alloy/2024-plates"
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 font-sans">
              <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
              <ArrowRight className="w-4 h-4" />
              <Link href="/product/plates-sheets" className="hover:text-blue-600 transition-colors">Plates & Sheets</Link>
              <ArrowRight className="w-4 h-4" />
              <Link href="/product/plates-sheets/aluminium-alloy" className="hover:text-blue-600 transition-colors">Aluminium Alloy</Link>
              <ArrowRight className="w-4 h-4" />
              <span className="text-blue-600 dark:text-blue-400 font-medium">Aluminium 2024</span>
            </nav>
          </div>
        </div>

        <div className="container mx-auto px-4 py-6">
          <Link href="/product/plates-sheets/aluminium-alloy" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline font-semibold group font-sans">
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
                  <span className="bg-gold-primary/20 text-gold-primary border border-gold-primary/30 px-4 py-1 text-xs uppercase tracking-widest rounded-full font-bold font-sans">Aerospace Structural Legend</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-4 uppercase tracking-tight leading-tight font-sans">
                  Aluminium 2024
                  <span className="block text-2xl text-gold-primary font-normal mt-2 normal-case tracking-wide">AMS-QQ-A-250/4 • ASTM B209 T351</span>
                </h1>
                <p className="text-xl mb-8 text-blue-100 leading-relaxed max-w-xl font-light font-sans">
                  The standard for aerospace structural integrity. Aluminium 2024 T351 offers incredible fatigue resistance and strength, making it the primary choice for aircraft fuselage skins and critical wing components.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-8 py-4 rounded-xl font-bold transition-all hover:scale-105 shadow-xl inline-flex items-center justify-center group font-sans">
                    <Mail className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform" /> Request Aerospace Quote
                  </Link>
                  <a href="tel:+919819322576" className="border-2 border-white/30 hover:bg-white hover:text-navy-primary px-8 py-4 rounded-xl font-bold transition-all inline-flex items-center justify-center font-sans tracking-tight">
                    <Phone className="w-5 h-5 mr-3" /> Technical Assistance
                  </a>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-gold-primary to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <img src={ss_plate_img} alt="Aluminium 2024 Plates" className="relative w-full rounded-2xl shadow-2xl border border-white/10 object-cover h-[400px]" />
                <div className="absolute -bottom-6 -right-6 bg-navy-secondary border-2 border-gold-primary p-6 rounded-xl shadow-2xl hidden md:block backdrop-blur-md">
                  <p className="text-gold-primary font-bold text-xs uppercase mb-1 tracking-widest">Global Exporter</p>
                  <p className="text-white font-black text-xl italic uppercase font-sans">USA • GCC • SE ASIA</p>
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
                    Grade Overview: Aluminium 2024 T351
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8 font-light font-sans">
                    Aluminium alloy 2024 is the most prominent aerospace aluminium alloy. Known for its high strength-to-weight ratio and excellent fatigue resistance, it is indispensable in fuselage applications. In the T351 temper, it provides improved fracture toughness and fatigue crack growth resistance. While it has limited weldability and moderate corrosion resistance, it can be "Alclad" (clad with pure aluminium) to significantly enhance its durability in harsh environments.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border-t-4 border-navy-primary">
                      <Factory className="w-8 h-8 text-navy-primary mb-4" />
                      <h4 className="font-bold text-navy-primary dark:text-blue-400 uppercase text-xs mb-2 tracking-widest font-sans">Fatigue Resistance</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400 font-medium font-sans">Superior resistance to cyclic loading and stress cracks.</p>
                    </div>
                    <div className="p-6 bg-gold-50 dark:bg-gold-900/10 rounded-xl border-t-4 border-gold-primary">
                      <Beaker className="w-8 h-8 text-gold-primary mb-4" />
                      <h4 className="font-bold text-navy-primary dark:text-gold-primary uppercase text-xs mb-2 tracking-widest font-sans">Aerospace Standard</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400 font-medium font-sans">Compliant with AMS-QQ-A-250/4 for airframes.</p>
                    </div>
                    <div className="p-6 bg-slate-50 dark:bg-slate-700/30 rounded-xl border-t-4 border-slate-900">
                      <Zap className="w-8 h-8 text-slate-900 dark:text-gray-300 mb-4" />
                      <h4 className="font-bold text-navy-primary dark:text-white uppercase text-xs mb-2 tracking-widest font-sans">Machinable</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400 font-medium font-sans">Excellent machining characteristics to high finish.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
                  <h3 className="text-2xl font-bold text-navy-primary dark:text-white mb-8 uppercase text-center tracking-widest font-sans">Chemical Composition (%)</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-navy-primary text-white font-sans">
                          <th className="px-6 py-4 text-left uppercase text-xs font-bold tracking-widest border-r border-white/10 font-sans">Element</th>
                          <th className="px-6 py-4 text-center uppercase text-xs font-bold tracking-widest border-r border-white/10 font-sans">Min %</th>
                          <th className="px-6 py-4 text-center uppercase text-xs font-bold tracking-widest font-sans">Max %</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 dark:divide-gray-700 font-sans">
                        {chemicalComposition.map((c, i) => (
                          <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors font-sans">
                            <td className="px-6 py-4 font-bold text-gray-700 dark:text-gray-300 uppercase text-xs tracking-tight border-r border-gray-50 dark:border-gray-600 font-sans">{c.element}</td>
                            <td className="px-6 py-4 text-center font-mono text-lg text-navy-primary dark:text-blue-400 font-bold border-r border-gray-50 dark:border-gray-600 font-sans">{c.min}</td>
                            <td className="px-6 py-4 text-center font-mono text-lg text-navy-primary dark:text-blue-400 font-bold font-sans">{c.max}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="space-y-8 font-sans">
                <div className="bg-navy-primary rounded-2xl shadow-xl p-8 text-white relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full group-hover:scale-110 transition-transform duration-700"></div>
                  <h3 className="text-2xl font-bold mb-8 uppercase border-b-2 border-gold-primary pb-2 inline-block tracking-widest font-sans">Product Scope</h3>
                  <div className="p-6 bg-white/10 rounded-xl mb-8 border border-white/20 text-center backdrop-blur-sm font-sans">
                    <p className="text-xs text-blue-300 uppercase tracking-widest mb-2 font-bold font-sans">Stock Thickness</p>
                    <p className="text-4xl font-black text-gold-primary italic font-sans">0.5 – 150mm</p>
                  </div>
                  <ul className="space-y-4 font-sans">
                    {specifications.map((spec, i) => (
                      <li key={i} className="flex items-center text-sm font-semibold tracking-tight font-sans">
                        <CheckCircle className="w-5 h-5 text-gold-primary mr-3 flex-shrink-0" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700 font-sans">
                  <h3 className="text-xl font-bold text-navy-primary dark:text-white mb-6 uppercase border-b-2 border-navy-primary pb-2 inline-block tracking-widest font-sans">Global Equivalents</h3>
                  <div className="space-y-3 font-sans">
                    {equivalentGrades.map((g, i) => (
                      <div key={i} className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gold-primary/10 transition-all group font-sans">
                        <span className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest font-sans">{g.country}</span>
                        <span className="text-navy-primary dark:text-blue-400 font-bold italic group-hover:text-gold-primary transition-colors font-sans">{g.grade}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700 font-sans">
                   <h3 className="text-xl font-bold text-navy-primary dark:text-white mb-6 uppercase border-b-2 border-green-600 pb-2 inline-block tracking-widest font-sans">Mechanical Properties</h3>
                   <div className="space-y-4 font-sans">
                    {mechanicalProperties.map((p, i) => (
                      <div key={i} className="border-b border-gray-100 dark:border-gray-700 pb-2 last:border-0 font-sans">
                        <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-1 font-sans">{p.property}</p>
                        <p className="text-lg font-bold text-navy-primary dark:text-blue-400 font-mono font-sans">{p.value}</p>
                      </div>
                    ))}
                   </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-10 mb-16 border border-gray-100 dark:border-gray-700 font-sans">
              <div className="flex items-center mb-10 font-sans">
                <Anchor className="w-10 h-10 text-gold-primary mr-4" />
                <h3 className="text-3xl font-bold text-navy-primary dark:text-white uppercase border-l-8 border-gold-primary pl-4 tracking-tighter italic font-sans">Aerospace Scope</h3>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 font-sans">
                {applications.map((app, i) => (
                  <div key={i} className="group p-6 bg-gray-50 dark:bg-gray-700 rounded-xl flex flex-col border border-gray-100 dark:border-gray-600 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 font-sans">
                    <CheckCircle className="w-6 h-6 text-navy-primary dark:text-gold-primary mb-4 group-hover:scale-110 transition-transform font-sans" />
                    <span className="text-sm font-bold text-gray-700 dark:text-gray-200 uppercase leading-tight tracking-tight font-sans">{app}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center bg-navy-primary p-16 rounded-3xl shadow-2xl relative overflow-hidden group font-sans">
               <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent group-hover:opacity-75 transition-opacity duration-1000 font-sans"></div>
               <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/5 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-1000 font-sans"></div>
              <h3 className="text-4xl font-black text-white mb-6 uppercase relative z-10 tracking-widest font-sans">Global Aerospace Supply Chain</h3>
              <p className="text-blue-100 mb-10 max-w-3xl mx-auto relative z-10 text-lg font-light font-sans">Mamta Steel Traders is a trusted source for 2024 Aluminium T351 plates. We maintain ready stocks for quick turnaround to defense and aerospace projects in UAE, Saudi Arabia, USA, and across the globe. Mill certified with full traceability.</p>
              <div className="flex flex-col sm:flex-row gap-8 justify-center relative z-10 font-sans">
                <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-12 py-5 rounded-2xl font-black transition-all shadow-2xl hover:scale-110 uppercase tracking-widest font-sans">
                  Aerospace Inquiry
                </Link>
                <a href="tel:+919819322576" className="bg-white hover:bg-slate-100 text-navy-primary px-12 py-5 rounded-2xl font-black transition-all shadow-2xl hover:scale-110 flex items-center justify-center uppercase tracking-widest font-sans">
                  <Phone className="w-5 h-5 mr-3" /> Technical Consultant
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
