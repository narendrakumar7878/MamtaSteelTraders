import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft, ArrowRight, CheckCircle, Mail, Phone, ShieldCheck, Factory, Beaker, Zap, Anchor } from "lucide-react";
import ss_plate_img from "@/assets/SS PLATE  MAMTA STEEL TRADERS.jpg";
import { Link } from "wouter";

export default function CarbonSteelST52PlatesDetail() {
  const chemicalComposition = [
    { element: "Carbon (C)", min: "—", max: "0.22" },
    { element: "Manganese (Mn)", min: "—", max: "1.60" },
    { element: "Silicon (Si)", min: "—", max: "0.55" },
    { element: "Phosphorus (P)", min: "—", max: "0.040" },
    { element: "Sulfur (S)", min: "—", max: "0.040" },
    { element: "Aluminium (Al)", min: "0.020", max: "—" },
    { element: "Iron (Fe)", min: "Remainder", max: "—" },
  ];

  const mechanicalProperties = [
    { property: "Tensile Strength (MPa)", value: "490 - 630" },
    { property: "Yield Strength (MPa)", value: "355 (Min)" },
    { property: "Elongation (%)", value: "22% (Min)" },
    { property: "Hardness (HB)", value: "150 - 180" },
    { property: "Bending properties", value: "Superior Formability" },
  ];

  const equivalentGrades = [
    { country: "Germany / DIN", grade: "St52-3 / 1.0570" },
    { country: "Europe / EN", grade: "S355JR / J2" },
    { country: "USA / ASTM", grade: "ASTM A572 Gr 50" },
    { country: "Japan / JIS", grade: "JIS G3101 SS490" },
    { country: "International", grade: "ISO 4950 E355" },
  ];

  const applications = [
    "High-Stress Structural Construction",
    "Bridge & Highway Sections",
    "Railway Wagon Components",
    "Excavator & Mining Arm Frames",
    "Transmission & Radio Towers",
    "Cranes & Lifting Equipment",
    "Hydraulic Cylinder Components",
    "Pressure Retaining Structural Parts"
  ];

  const specifications = [
    "DIN 17100 / St52-3",
    "W.Nr. 1.0570",
    "Condition: +N (Normalized)",
    "Thickness: 6mm to 200mm",
    "Width: 1500mm to 3000mm",
    "Length: 2000mm to 12000mm",
    "Origin: ThyssenKrupp, Dillinger, JSW, Tata Steel"
  ];

  return (
    <>
      <ProductSEO
        title="ST52-3 Steel Plates Supplier | DIN 17100 High Strength Sheets Mumbai"
        description="Premium ST52-3 / DIN 1.0570 Carbon Steel Plates. High yield structural steel for heavy machinery, bridges, and infrastructure. Best wholesale prices for ST52-3 plates. Global supplier from Mumbai to UAE, USA, Saudi Arabia, and Europe."
        keywords="ST52-3 plates, ST52 steel supplier India, DIN 17100 St52-3 Mumbai, ST52 steel price, ST52 properties Mumbai, 1.0570 steel plates Mumbai, ST52 chemical composition table, wholesale St52-3 sheets India"
        category="Plates & Sheets"
        productName="ST52-3 High Strength Structural Plates"
        specifications={specifications}
        canonicalUrl="/product/plates-sheets/carbon-steel/st52-plates"
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 font-sans">
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 font-sans">
          <div className="container mx-auto px-4 py-4 font-sans font-sans font-sans font-sans font-sans">
            <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 font-sans font-sans font-sans">
              <Link href="/" className="hover:text-amber-600 transition-colors font-sans">Home</Link>
              <ArrowRight className="w-4 h-4 font-sans font-sans font-sans" />
              <Link href="/product/plates-sheets" className="hover:text-amber-600 transition-colors font-sans font-sans">Plates & Sheets</Link>
              <ArrowRight className="w-4 h-4 font-sans font-sans font-sans" />
              <Link href="/product/plates-sheets/carbon-steel" className="hover:text-amber-600 transition-colors font-sans font-sans font-sans">Carbon Steel</Link>
              <ArrowRight className="w-4 h-4 font-sans font-sans font-sans font-sans font-sans" />
              <span className="text-amber-600 dark:text-amber-400 font-medium font-sans font-sans">ST52-3 Structural Steel</span>
            </nav>
          </div>
        </div>

        <div className="container mx-auto px-4 py-6 font-sans">
          <Link href="/product/plates-sheets/carbon-steel" className="inline-flex items-center text-amber-700 dark:text-amber-400 hover:underline font-semibold group font-sans">
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform font-sans" />
            Back to Carbon Steel Plates & Sheets
          </Link>
        </div>

        <div className="bg-gradient-to-br from-slate-900 via-navy-primary to-slate-900 text-white relative overflow-hidden shadow-2xl font-sans font-sans font-sans">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] font-sans"></div>
          <div className="container mx-auto px-4 py-16 relative z-10 font-sans">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center font-sans font-sans font-sans">
              <div className="font-sans font-sans font-sans">
                <div className="flex items-center mb-6 font-sans font-sans font-sans font-sans">
                  <ShieldCheck className="w-10 h-10 text-gold-primary mr-4 animate-pulse font-sans font-sans font-sans" />
                  <span className="bg-gold-primary/20 text-gold-primary border border-gold-primary/30 px-4 py-1 text-xs uppercase tracking-widest rounded-full font-bold font-sans">German High-Strength Standard</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-4 uppercase tracking-tight leading-tight font-sans font-sans font-sans">
                  ST52-3 / <span className="text-gold-primary italic">1.0570</span>
                  <span className="block text-2xl text-amber-200 font-normal mt-2 normal-case tracking-wide font-sans font-sans font-sans">Premium Structural High-Strength Steel</span>
                </h1>
                <p className="text-xl mb-8 text-blue-100 leading-relaxed max-w-xl font-light font-sans font-sans font-sans">
                  Engineering excellence for massive structures. ST52-3 is the definitive German high-strength steel, offering a robust 355 MPa yield strength and exceptional forming characteristics for the world's most demanding engineering projects.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 font-sans font-sans font-sans font-sans">
                  <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-8 py-4 rounded-xl font-bold transition-all hover:scale-105 shadow-xl inline-flex items-center justify-center group font-sans font-sans font-sans">
                    <Mail className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform font-sans font-sans font-sans" /> Get St52-3 Quote
                  </Link>
                  <a href="tel:+919819322576" className="border-2 border-white/30 hover:bg-white hover:text-navy-primary px-8 py-4 rounded-xl font-bold transition-all inline-flex items-center justify-center font-sans font-sans">
                    <Phone className="w-5 h-5 mr-3 font-sans font-sans font-sans" /> Technical Data
                  </a>
                </div>
              </div>
              <div className="relative group font-sans font-sans font-sans font-sans">
                <div className="absolute -inset-1 bg-gradient-to-r from-gold-primary to-amber-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 font-sans font-sans"></div>
                <img src={ss_plate_img} alt="ST52-3 Steel Plates" className="relative w-full rounded-2xl shadow-2xl border border-white/10 object-cover h-[400px] font-sans font-sans" />
                <div className="absolute -bottom-6 -right-6 bg-navy-secondary border-2 border-gold-primary p-6 rounded-xl shadow-2xl hidden md:block backdrop-blur-md font-sans">
                  <p className="text-gold-primary font-bold text-xs uppercase mb-1 tracking-widest font-sans font-sans font-sans font-sans font-sans">Tier-1 Specialist</p>
                  <p className="text-white font-black text-xl italic uppercase font-sans font-sans font-sans font-sans">DIN 17100 • NORMALIZED STOCK</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16 font-sans">
          <div className="max-w-7xl mx-auto font-sans font-sans">
            <div className="grid lg:grid-cols-3 gap-12 mb-16 font-sans font-sans">
              <div className="lg:col-span-2 space-y-12 font-sans font-sans">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-shadow duration-300 font-sans">
                  <h2 className="text-2xl font-bold text-navy-primary dark:text-white mb-6 border-b-2 border-gold-primary pb-2 inline-block uppercase tracking-tighter font-sans font-sans font-sans">
                    Grade Overview: ST52-3 / 1.0570
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8 font-light font-sans font-sans">
                    ST52-3 is a high-strength structural steel that follows the German DIN 17100 standard. Closely comparable to the modern European S355JR grade, ST52-3 is prized for its exceptional yield strength of 355 MPa and its superior weldability and cold-forming properties. This grade is a staple in heavy engineering, used extensively for the construction of machines that undergo high load cycles, such as excavators, cranes, and heavy-duty transport vehicles. The "-3" designation ensures that the material has been impact-tested to meet specific toughness requirements, making it reliable for architectural and industrial structural work in varied climatic conditions. While largely superseded by EN 10025 standards in new specifications, ST52-3 remains a critical legacy grade for maintenance, repair, and high-performance structural engineering across the globe.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6 font-sans font-sans">
                    <div className="p-6 bg-amber-50 dark:bg-amber-900/20 rounded-xl border-t-4 border-amber-800 font-sans font-sans">
                      <Factory className="w-8 h-8 text-amber-800 mb-4 font-sans font-sans font-sans font-sans" />
                      <h4 className="font-bold text-navy-primary dark:text-amber-400 uppercase text-xs mb-2 tracking-widest font-sans font-sans font-sans font-sans font-sans">Structural Titan</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400 font-medium font-sans font-sans font-sans">The legacy choice for German-engineered high-load buildings and bridges.</p>
                    </div>
                    <div className="p-6 bg-gold-50 dark:bg-gold-900/10 rounded-xl border-t-4 border-gold-primary font-sans font-sans font-sans font-sans font-sans">
                      <Beaker className="w-8 h-8 text-gold-primary mb-4 font-sans font-sans font-sans font-sans font-sans" />
                      <h4 className="font-bold text-navy-primary dark:text-gold-primary uppercase text-xs mb-2 tracking-widest font-sans font-sans font-sans font-sans font-sans font-sans">High Manganse</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400 font-medium font-sans font-sans font-sans font-sans font-sans">Controlled Mn content for superior strength and impact resilience.</p>
                    </div>
                    <div className="p-6 bg-slate-50 dark:bg-slate-700/30 rounded-xl border-t-4 border-slate-900 font-sans font-sans font-sans font-sans">
                      <Zap className="w-8 h-8 text-slate-900 dark:text-gray-300 mb-4 font-sans font-sans font-sans font-sans" />
                      <h4 className="font-bold text-navy-primary dark:text-white uppercase text-xs mb-2 tracking-widest font-sans font-sans font-sans font-sans">Ease of Fabrication</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400 font-medium font-sans font-sans font-sans font-sans font-sans">Balanced chemistry providing a lower carbon equivalent for rapid site welding.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700 font-sans font-sans font-sans">
                  <h3 className="text-2xl font-bold text-navy-primary dark:text-white mb-8 uppercase text-center tracking-widest font-sans font-sans font-sans font-sans">Chemical Composition (%)</h3>
                  <div className="overflow-x-auto font-sans font-sans font-sans">
                    <table className="w-full border-collapse font-sans font-sans font-sans">
                      <thead>
                        <tr className="bg-navy-primary text-white font-sans font-sans font-sans font-sans font-sans">
                          <th className="px-6 py-4 text-left uppercase text-xs font-bold tracking-widest border-r border-white/10 font-sans font-sans font-sans">Element</th>
                          <th className="px-6 py-4 text-center uppercase text-xs font-bold tracking-widest border-r border-white/10 font-sans font-sans font-sans font-sans">Min %</th>
                          <th className="px-6 py-4 text-center uppercase text-xs font-bold tracking-widest font-sans font-sans font-sans font-sans font-sans">Max %</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 dark:divide-gray-700 font-sans font-sans">
                        {chemicalComposition.map((c, i) => (
                          <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors font-sans font-sans font-sans font-sans font-sans">
                            <td className="px-6 py-4 font-bold text-gray-700 dark:text-gray-300 uppercase text-xs tracking-tight border-r border-gray-50 dark:border-gray-600 font-sans font-sans font-sans font-sans font-sans font-sans">{c.element}</td>
                            <td className="px-6 py-4 text-center font-mono text-lg text-navy-primary dark:text-blue-400 font-bold border-r border-gray-50 dark:border-gray-600 font-sans font-sans font-sans font-sans font-sans font-sans">{c.min}</td>
                            <td className="px-6 py-4 text-center font-mono text-lg text-navy-primary dark:text-blue-400 font-bold font-sans font-sans font-sans font-sans font-sans font-sans font-sans">{c.max}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="space-y-8 font-sans font-sans font-sans font-sans font-sans font-sans">
                <div className="bg-navy-primary rounded-2xl shadow-xl p-8 text-white relative overflow-hidden group font-sans font-sans font-sans font-sans font-sans">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full group-hover:scale-110 transition-transform duration-700 font-sans font-sans font-sans font-sans font-sans"></div>
                  <h3 className="text-2xl font-bold mb-8 uppercase border-b-2 border-gold-primary pb-2 inline-block tracking-widest font-sans font-sans font-sans font-sans">Structural Inventory</h3>
                  <div className="p-6 bg-white/10 rounded-xl mb-8 border border-white/20 text-center backdrop-blur-sm font-sans font-sans font-sans font-sans font-sans font-sans font-sans">
                    <p className="text-xs text-blue-300 uppercase tracking-widest mb-2 font-bold font-sans font-sans">Thickness range</p>
                    <p className="text-4xl font-black text-gold-primary italic font-sans font-sans font-sans font-sans">6.0 – 200mm</p>
                  </div>
                  <ul className="space-y-4 font-sans font-sans font-sans font-sans font-sans">
                    {specifications.map((spec, i) => (
                      <li key={i} className="flex items-center text-sm font-semibold tracking-tight font-sans font-sans font-sans font-sans font-sans font-sans font-sans">
                        <CheckCircle className="w-5 h-5 text-gold-primary mr-3 flex-shrink-0 font-sans font-sans font-sans font-sans font-sans font-sans font-sans font-sans" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700 font-sans font-sans font-sans font-sans">
                  <h3 className="text-xl font-bold text-navy-primary dark:text-white mb-6 uppercase border-b-2 border-navy-primary pb-2 inline-block tracking-widest font-sans font-sans font-sans font-sans font-sans">Equivalent Standards</h3>
                  <div className="space-y-3 font-sans font-sans font-sans font-sans font-sans">
                    {equivalentGrades.map((g, i) => (
                      <div key={i} className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gold-primary/10 transition-all group font-sans font-sans font-sans font-sans font-sans">
                        <span className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest font-sans font-sans font-sans font-sans font-sans font-sans">{g.country}</span>
                        <span className="text-navy-primary dark:text-blue-400 font-bold italic group-hover:text-gold-primary transition-colors font-sans font-sans font-sans font-sans font-sans font-sans font-sans">{g.grade}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700 font-sans font-sans font-sans font-sans">
                   <h3 className="text-xl font-bold text-navy-primary dark:text-white mb-6 uppercase border-b-2 border-amber-600 pb-2 inline-block tracking-widest font-sans font-sans font-sans font-sans font-sans font-sans font-sans">Mechanical Info</h3>
                   <div className="space-y-4 font-sans font-sans font-sans font-sans font-sans font-sans">
                    {mechanicalProperties.map((p, i) => (
                      <div key={i} className="border-b border-gray-100 dark:border-gray-700 pb-2 last:border-0 font-sans font-sans font-sans font-sans font-sans">
                        <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-1 font-sans font-sans font-sans font-sans font-sans font-sans font-sans">{p.property}</p>
                        <p className="text-lg font-bold text-navy-primary dark:text-blue-400 font-mono font-sans font-sans font-sans font-sans font-sans font-sans font-sans font-sans">{p.value}</p>
                      </div>
                    ))}
                   </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-10 mb-16 border border-gray-100 dark:border-gray-700 font-sans font-sans font-sans font-sans">
              <div className="flex items-center mb-10 font-sans font-sans font-sans font-sans">
                <Anchor className="w-10 h-10 text-gold-primary mr-4 font-sans font-sans font-sans font-sans font-sans" />
                <h3 className="text-3xl font-bold text-navy-primary dark:text-white uppercase border-l-8 border-gold-primary pl-4 tracking-tighter italic font-sans font-sans font-sans font-sans font-sans font-sans">Typical Applications</h3>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 font-sans font-sans font-sans font-sans font-sans font-sans">
                {applications.map((app, i) => (
                  <div key={i} className="group p-6 bg-gray-50 dark:bg-gray-700 rounded-xl flex flex-col border border-gray-100 dark:border-gray-600 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 font-sans font-sans font-sans font-sans font-sans font-sans font-sans">
                    <CheckCircle className="w-6 h-6 text-navy-primary dark:text-gold-primary mb-4 group-hover:scale-110 transition-transform font-sans font-sans font-sans font-sans font-sans font-sans font-sans font-sans" />
                    <span className="text-sm font-bold text-gray-700 dark:text-gray-200 uppercase leading-tight tracking-tight font-sans font-sans font-sans font-sans font-sans font-sans font-sans font-sans font-sans">{app}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center bg-navy-primary p-16 rounded-3xl shadow-2xl relative overflow-hidden group font-sans font-sans font-sans font-sans">
               <div className="absolute inset-0 bg-gradient-to-r from-amber-700/20 to-transparent group-hover:opacity-75 transition-opacity duration-1000 font-sans font-sans font-sans font-sans font-sans font-sans"></div>
               <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/5 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-1000 font-sans font-sans font-sans font-sans font-sans font-sans"></div>
              <h3 className="text-4xl font-black text-white mb-6 uppercase relative z-10 tracking-widest font-sans font-sans font-sans font-sans font-sans">Global Partner • High-Volume ST52-3 Structural Aggregator</h3>
              <p className="text-blue-100 mb-10 max-w-3xl mx-auto relative z-10 text-lg font-light font-sans font-sans font-sans font-sans font-sans">Mamta Steel Traders is a key stockist for prime DIN 17100 ST52-3 plates, maintaining one of India's most comprehensive inventories for immediate export. We serve global engineering hubs across the UAE, Qatar, Saudi Arabia, USA, and Europe. Full material traceability with Mill Test Certificates to DIN standards. Specialized ultrasonic and impact testing available for critical heavy-duty components.</p>
              <div className="flex flex-col sm:flex-row gap-8 justify-center relative z-10 font-sans font-sans font-sans font-sans font-sans font-sans">
                <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-12 py-5 rounded-2xl font-black transition-all shadow-2xl hover:scale-110 uppercase tracking-widest font-sans font-sans font-sans font-sans font-sans font-sans">
                  Inquire St52-3 Prices
                </Link>
                <a href="tel:+919819322576" className="bg-white hover:bg-slate-100 text-navy-primary px-12 py-5 rounded-2xl font-black transition-all shadow-2xl hover:scale-110 flex items-center justify-center uppercase tracking-widest font-sans font-sans font-sans font-sans font-sans">
                  <Phone className="w-5 h-5 mr-3 font-sans font-sans font-sans font-sans font-sans" /> Contact Specialist
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
