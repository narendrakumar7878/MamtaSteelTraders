import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft, ArrowRight, CheckCircle, Mail, Phone, ShieldCheck, Factory, Beaker, Zap, Anchor } from "lucide-react";
import ss_plate_img from "@/assets/SS PLATE  MAMTA STEEL TRADERS.jpg";
import { Link } from "wouter";

export default function Aluminium7050PlatesDetail() {
  const chemicalComposition = [
    { element: "Zinc (Zn)", min: "5.70", max: "6.70" },
    { element: "Magnesium (Mg)", min: "1.90", max: "2.60" },
    { element: "Copper (Cu)", min: "2.00", max: "2.60" },
    { element: "Zirconium (Zr)", min: "0.08", max: "0.15" },
    { element: "Iron (Fe)", min: "—", max: "0.15" },
    { element: "Silicon (Si)", min: "—", max: "0.12" },
    { element: "Manganese (Mn)", min: "—", max: "0.10" },
    { element: "Titanium (Ti)", min: "—", max: "0.06" },
    { element: "Aluminium (Al)", min: "Remainder", max: "—" },
  ];

  const mechanicalProperties = [
    { property: "Tensile Strength (MPa)", value: "490 - 550" },
    { property: "Yield Strength (MPa)", value: "430 - 490" },
    { property: "Elongation (%)", value: "8 - 14" },
    { property: "Hardness (Brinell)", value: "135 - 150" },
    { property: "Modulus of Elasticity (GPa)", value: "71" },
  ];

  const equivalentGrades = [
    { country: "USA / ASTM", grade: "7050" },
    { country: "Germany / DIN", grade: "AlZn6MgCuZr / 3.4144" },
    { country: "UK / BS", grade: "7050 / DTD 5024" },
    { country: "Japan / JIS", grade: "A7050" },
    { country: "France / AFNOR", grade: "7050" },
  ];

  const applications = [
    "Aircraft Fuselage & Wing Structures",
    "Military Aircraft Airframe Components",
    "Thick Structural Sections for Defense",
    "highly Stressed Aerospace Forgings",
    "Bulkheads & Wing Ribs",
    "Missile Components",
    "Heavy Duty Structural Fasteners",
    "Precision Aerospace Machined Parts"
  ];

  const specifications = [
    "ASTM B209 / ASME SB209",
    "AMS 4050 / 4107 / 4108 / 4201",
    "Thickness: 10mm to 300mm",
    "Width: up to 1500mm",
    "Length: up to 4000mm",
    "Temper: T74, T7451, T76, T7651",
    "Certifications: AMS, Military Standard"
  ];

  return (
    <>
      <ProductSEO
        title="Aluminium 7050 T7451 Plates & Sheets Supplier | Aerospace Structural Grade"
        description="Premier supplier of Aluminium 7050 Plates in Mumbai. High-strength aerospace alloy with superior toughness and corrosion resistance. Specially designed for thick structural sections in airframes. Best prices for AMS 4050 compliant 7050 plates. Global export to UAE, USA, and defense sectors."
        keywords="Aluminium 7050 plates, 7050-T7451 aluminium sheet, aerospace bulkhead plates, AMS 4050 aluminum, 7050 aluminium chemical composition, aerospace structural grade aluminium supplier Mumbai, wholesale 7050 aluminium, military airframe plates"
        category="Plates & Sheets"
        productName="Aluminium 7050 Plates & Sheets"
        specifications={specifications}
        canonicalUrl="/product/plates-sheets/aluminium-alloy/7050-plates"
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 font-sans">
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 font-sans">
          <div className="container mx-auto px-4 py-4 font-sans">
            <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 font-sans">
              <Link href="/" className="hover:text-blue-600 transition-colors font-sans font-sans">Home</Link>
              <ArrowRight className="w-4 h-4 font-sans font-sans" />
              <Link href="/product/plates-sheets" className="hover:text-blue-600 transition-colors font-sans font-sans">Plates & Sheets</Link>
              <ArrowRight className="w-4 h-4 font-sans font-sans" />
              <Link href="/product/plates-sheets/aluminium-alloy" className="hover:text-blue-600 transition-colors font-sans font-sans">Aluminium Alloy</Link>
              <ArrowRight className="w-4 h-4 font-sans font-sans" />
              <span className="text-blue-600 dark:text-blue-400 font-medium font-sans font-sans">Aluminium 7050</span>
            </nav>
          </div>
        </div>

        <div className="container mx-auto px-4 py-6 font-sans">
          <Link href="/product/plates-sheets/aluminium-alloy" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline font-semibold group font-sans font-sans">
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform font-sans font-sans font-sans" />
            Back to Aluminium Alloy Plates & Sheets
          </Link>
        </div>

        <div className="bg-gradient-to-br from-slate-900 via-navy-primary to-slate-900 text-white relative overflow-hidden shadow-2xl font-sans font-sans">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] font-sans font-sans"></div>
          <div className="container mx-auto px-4 py-16 relative z-10 font-sans font-sans">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center font-sans font-sans">
              <div className="font-sans font-sans font-sans">
                <div className="flex items-center mb-6 font-sans font-sans">
                  <ShieldCheck className="w-10 h-10 text-gold-primary mr-4 animate-pulse font-sans font-sans" />
                  <span className="bg-gold-primary/20 text-gold-primary border border-gold-primary/30 px-4 py-1 text-xs uppercase tracking-widest rounded-full font-bold font-sans font-sans">High-Toughness Aerospace Specialty</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-4 uppercase tracking-tight leading-tight font-sans font-sans font-sans">
                  Aluminium 7050
                  <span className="block text-2xl text-gold-primary font-normal mt-2 normal-case tracking-wide font-sans font-sans">AMS 4050 • Structural T7451 Plates</span>
                </h1>
                <p className="text-xl mb-8 text-blue-100 leading-relaxed max-w-xl font-light font-sans font-sans font-sans">
                  Engineered for excellence in thick-section airframe structures. Aluminium 7050 offers a superior combination of high strength, high fracture toughness, and outstanding resistance to stress-corrosion cracking.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 font-sans font-sans">
                  <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-8 py-4 rounded-xl font-bold transition-all hover:scale-105 shadow-xl inline-flex items-center justify-center group font-sans font-sans">
                    <Mail className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform font-sans font-sans" /> Request Specialty Quote
                  </Link>
                  <a href="tel:+919819322576" className="border-2 border-white/30 hover:bg-white hover:text-navy-primary px-8 py-4 rounded-xl font-bold transition-all inline-flex items-center justify-center font-sans font-sans font-sans">
                    <Phone className="w-5 h-5 mr-3 font-sans font-sans font-sans" /> Technical Assistance
                  </a>
                </div>
              </div>
              <div className="relative group font-sans font-sans">
                <div className="absolute -inset-1 bg-gradient-to-r from-gold-primary to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 font-sans font-sans"></div>
                <img src={ss_plate_img} alt="Aluminium 7050 Plates" className="relative w-full rounded-2xl shadow-2xl border border-white/10 object-cover h-[400px] font-sans font-sans font-sans" />
                <div className="absolute -bottom-6 -right-6 bg-navy-secondary border-2 border-gold-primary p-6 rounded-xl shadow-2xl hidden md:block backdrop-blur-md font-sans font-sans">
                  <p className="text-gold-primary font-bold text-xs uppercase mb-1 tracking-widest font-sans font-sans font-sans">Global Supplier</p>
                  <p className="text-white font-black text-xl italic uppercase font-sans font-sans font-sans font-sans">USA • EUROPE • GCC</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16 font-sans font-sans">
          <div className="max-w-7xl mx-auto font-sans font-sans font-sans">
            <div className="grid lg:grid-cols-3 gap-12 mb-16 font-sans font-sans">
              <div className="lg:col-span-2 space-y-12 font-sans font-sans font-sans">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-shadow duration-300 font-sans font-sans font-sans">
                  <h2 className="text-2xl font-bold text-navy-primary dark:text-white mb-6 border-b-2 border-gold-primary pb-2 inline-block uppercase tracking-tighter font-sans">
                    Grade Overview: Aluminium 7050
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8 font-light font-sans font-sans font-sans">
                    Aluminium alloy 7050 is an aerospace grade alloy that offers high strength, high toughness, and high corrosion resistance. It is often used in thick sections for high-stress airframe components due to its resistance to stress-corrosion cracking and its high fracture toughness. It has the ability to maintain its mechanical properties in thick sections more effectively than 7075. In the T7451 temper, it provides the optimum balance of properties for large aerospace forgings and plate components.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6 font-sans">
                    <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border-t-4 border-navy-primary font-sans">
                      <Factory className="w-8 h-8 text-navy-primary mb-4 font-sans font-sans" />
                      <h4 className="font-bold text-navy-primary dark:text-blue-400 uppercase text-xs mb-2 tracking-widest font-sans font-sans">Thick Section Expert</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400 font-medium font-sans">Superior property retention in thick aerospace plates.</p>
                    </div>
                    <div className="p-6 bg-gold-50 dark:bg-gold-900/10 rounded-xl border-t-4 border-gold-primary font-sans">
                      <Beaker className="w-8 h-8 text-gold-primary mb-4 font-sans font-sans" />
                      <h4 className="font-bold text-navy-primary dark:text-gold-primary uppercase text-xs mb-2 tracking-widest font-sans font-sans">High Toughness</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400 font-medium font-sans">Exceptional resistance to fracture and impact stress.</p>
                    </div>
                    <div className="p-6 bg-slate-50 dark:bg-slate-700/30 rounded-xl border-t-4 border-slate-900 font-sans font-sans">
                      <Zap className="w-8 h-8 text-slate-900 dark:text-gray-300 mb-4 font-sans font-sans" />
                      <h4 className="font-bold text-navy-primary dark:text-white uppercase text-xs mb-2 tracking-widest font-sans font-sans font-sans">SCC Resistant</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400 font-medium font-sans">Legendary resistance to stress-corrosion cracking.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700 font-sans font-sans">
                  <h3 className="text-2xl font-bold text-navy-primary dark:text-white mb-8 uppercase text-center tracking-widest font-sans font-sans font-sans font-sans">Chemical Composition (%)</h3>
                  <div className="overflow-x-auto font-sans font-sans">
                    <table className="w-full border-collapse font-sans">
                      <thead>
                        <tr className="bg-navy-primary text-white font-sans">
                          <th className="px-6 py-4 text-left uppercase text-xs font-bold tracking-widest border-r border-white/10 font-sans">Element</th>
                          <th className="px-6 py-4 text-center uppercase text-xs font-bold tracking-widest border-r border-white/10 font-sans">Min %</th>
                          <th className="px-6 py-4 text-center uppercase text-xs font-bold tracking-widest font-sans font-sans">Max %</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 dark:divide-gray-700 font-sans font-sans">
                        {chemicalComposition.map((c, i) => (
                          <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors font-sans">
                            <td className="px-6 py-4 font-bold text-gray-700 dark:text-gray-300 uppercase text-xs tracking-tight border-r border-gray-50 dark:border-gray-600 font-sans font-sans">{c.element}</td>
                            <td className="px-6 py-4 text-center font-mono text-lg text-navy-primary dark:text-blue-400 font-bold border-r border-gray-50 dark:border-gray-600 font-sans font-sans">{c.min}</td>
                            <td className="px-6 py-4 text-center font-mono text-lg text-navy-primary dark:text-blue-400 font-bold font-sans font-sans">{c.max}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="space-y-8 font-sans font-sans">
                <div className="bg-navy-primary rounded-2xl shadow-xl p-8 text-white relative overflow-hidden group font-sans">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full group-hover:scale-110 transition-transform duration-700 font-sans"></div>
                  <h3 className="text-2xl font-bold mb-8 uppercase border-b-2 border-gold-primary pb-2 inline-block tracking-widest font-sans font-sans">Product Scope</h3>
                  <div className="p-6 bg-white/10 rounded-xl mb-8 border border-white/20 text-center backdrop-blur-sm font-sans font-sans">
                    <p className="text-xs text-blue-300 uppercase tracking-widest mb-2 font-bold font-sans font-sans">Thickness Range</p>
                    <p className="text-4xl font-black text-gold-primary italic font-sans font-sans font-sans">10.0 – 300mm</p>
                  </div>
                  <ul className="space-y-4 font-sans font-sans">
                    {specifications.map((spec, i) => (
                      <li key={i} className="flex items-center text-sm font-semibold tracking-tight font-sans">
                        <CheckCircle className="w-5 h-5 text-gold-primary mr-3 flex-shrink-0 font-sans" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700 font-sans font-sans">
                  <h3 className="text-xl font-bold text-navy-primary dark:text-white mb-6 uppercase border-b-2 border-navy-primary pb-2 inline-block tracking-widest font-sans font-sans font-sans font-sans">Global Equivalents</h3>
                  <div className="space-y-3 font-sans font-sans font-sans">
                    {equivalentGrades.map((g, i) => (
                      <div key={i} className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gold-primary/10 transition-all group font-sans">
                        <span className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest font-sans font-sans font-sans">{g.country}</span>
                        <span className="text-navy-primary dark:text-blue-400 font-bold italic group-hover:text-gold-primary transition-colors font-sans font-sans font-sans">{g.grade}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700 font-sans font-sans">
                   <h3 className="text-xl font-bold text-navy-primary dark:text-white mb-6 uppercase border-b-2 border-green-600 pb-2 inline-block tracking-widest font-sans font-sans font-sans font-sans">Mechanical Properties</h3>
                   <div className="space-y-4 font-sans font-sans font-sans">
                    {mechanicalProperties.map((p, i) => (
                      <div key={i} className="border-b border-gray-100 dark:border-gray-700 pb-2 last:border-0 font-sans">
                        <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-1 font-sans font-sans font-sans">{p.property}</p>
                        <p className="text-lg font-bold text-navy-primary dark:text-blue-400 font-mono font-sans font-sans font-sans">{p.value}</p>
                      </div>
                    ))}
                   </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-10 mb-16 border border-gray-100 dark:border-gray-700 font-sans font-sans">
              <div className="flex items-center mb-10 font-sans font-sans font-sans font-sans">
                <Anchor className="w-10 h-10 text-gold-primary mr-4 font-sans font-sans font-sans" />
                <h3 className="text-3xl font-bold text-navy-primary dark:text-white uppercase border-l-8 border-gold-primary pl-4 tracking-tighter italic font-sans font-sans font-sans">Aerospace & Defense Scope</h3>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 font-sans font-sans font-sans">
                {applications.map((app, i) => (
                  <div key={i} className="group p-6 bg-gray-50 dark:bg-gray-700 rounded-xl flex flex-col border border-gray-100 dark:border-gray-600 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 font-sans font-sans">
                    <CheckCircle className="w-6 h-6 text-navy-primary dark:text-gold-primary mb-4 group-hover:scale-110 transition-transform font-sans font-sans" />
                    <span className="text-sm font-bold text-gray-700 dark:text-gray-200 uppercase leading-tight tracking-tight font-sans font-sans font-sans">{app}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center bg-navy-primary p-16 rounded-3xl shadow-2xl relative overflow-hidden group font-sans font-sans">
               <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent group-hover:opacity-75 transition-opacity duration-1000 font-sans font-sans font-sans"></div>
               <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/5 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-1000 font-sans font-sans font-sans"></div>
              <h3 className="text-4xl font-black text-white mb-6 uppercase relative z-10 tracking-widest font-sans font-sans font-sans">Global Aerospace Supply • Wholesale Exporter</h3>
              <p className="text-blue-100 mb-10 max-w-3xl mx-auto relative z-10 text-lg font-light font-sans font-sans">Mamta Steel Traders is a trusted premier stockist of 7050 Aluminium plates. We maintain mill-certified inventories for rapid global shipping. Fast export services to aerospace and defense sectors in USA, Europe, GCC, and Southeast Asia. Competitive wholesale pricing available for high-end aerospace structural projects.</p>
              <div className="flex flex-col sm:flex-row gap-8 justify-center relative z-10 font-sans font-sans">
                <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-12 py-5 rounded-2xl font-black transition-all shadow-2xl hover:scale-110 uppercase tracking-widest font-sans font-sans">
                  Inquire Now
                </Link>
                <a href="tel:+919819322576" className="bg-white hover:bg-slate-100 text-navy-primary px-12 py-5 rounded-2xl font-black transition-all shadow-2xl hover:scale-110 flex items-center justify-center uppercase tracking-widest font-sans font-sans">
                  <Phone className="w-5 h-5 mr-3 font-sans font-sans font-sans" /> Technical Assistance
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
