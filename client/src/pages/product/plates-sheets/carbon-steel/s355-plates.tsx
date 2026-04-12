import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft, ArrowRight, CheckCircle, Mail, Phone, ShieldCheck, Factory, Beaker, Zap, Anchor } from "lucide-react";
import ss_plate_img from "@/assets/SS PLATE  MAMTA STEEL TRADERS.jpg";
import { Link } from "wouter";

export default function CarbonSteelS355PlatesDetail() {
  const chemicalComposition = [
    { element: "Carbon (C)", min: "—", max: "0.20 - 0.24" },
    { element: "Manganese (Mn)", min: "—", max: "1.60" },
    { element: "Silicon (Si)", min: "—", max: "0.55" },
    { element: "Phosphorus (P)", min: "—", max: "0.035" },
    { element: "Sulfur (S)", min: "—", max: "0.035" },
    { element: "Nitrogen (N)", min: "—", max: "0.012" },
    { element: "Copper (Cu)", min: "—", max: "0.55" },
  ];

  const mechanicalProperties = [
    { property: "Tensile Strength (MPa)", value: "470 - 630" },
    { property: "Yield Strength (MPa)", value: "355 (Min)" },
    { property: "Elongation (%)", value: "20% - 22%" },
    { property: "Impact Test (J)", value: "27J (Min at 20°C for JR)" },
    { property: "Weldability", value: "Excellent" },
  ];

  const equivalentGrades = [
    { country: "Europe / EN", grade: "S355JR / J2 / K2" },
    { country: "Germany / DIN", grade: "St52-3 / 1.0570" },
    { country: "USA / ASTM", grade: "ASTM A572 Gr 50" },
    { country: "India / IS", grade: "IS 2062 E350" },
    { country: "Japan / JIS", grade: "JIS G3106 SM490" },
  ];

  const applications = [
    "High-Stress Structural Frames",
    "Bridge & Highway Girders",
    "Transmission Towers",
    "Heavy Transport & Rail Wagons",
    "Material Handling Equipment",
    "Wind Turbine Towers",
    "Offshore Structural Platforms",
    "High-Rise PEB Construction"
  ];

  const specifications = [
    "EN 10025-2:2004 / S355JR",
    "EN 10025-2:2004 / S355J2+N",
    "Thickness: 6mm to 200mm",
    "Width: 1500mm to 3500mm",
    "Length: 3000mm to 12000mm",
    "Condition: Normalized, As Rolled",
    "Origin: ArcelorMittal, Dillinger, JSW, Tata Steel"
  ];

  return (
    <>
      <ProductSEO
        title="S355JR S355J2 Steel Plates Supplier | EN 10025 Structural Plates Mumbai"
        description="Premium S355JR and S355J2 Carbon Steel Plates. High-strength European structural standard for buildings, bridges, and offshore towers. Best wholesale prices for S355 plates. Global delivery from Mumbai to UAE, USA, and Europe."
        keywords="S355JR plates, S355J2+N steel supplier India, EN 10025 S355 plates Mumbai, S355 steel price, S355JR properties, S355 steel chemical composition table, structural steel S355 Mumbai, wholesale S355JR sheets India"
        category="Plates & Sheets"
        productName="S355JR / S355J2 Structural Steel Plates"
        specifications={specifications}
        canonicalUrl="/product/plates-sheets/carbon-steel/s355-plates"
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 font-sans">
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 font-sans">
          <div className="container mx-auto px-4 py-4 font-sans font-sans font-sans font-sans">
            <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 font-sans font-sans font-sans">
              <Link href="/" className="hover:text-sky-600 transition-colors font-sans">Home</Link>
              <ArrowRight className="w-4 h-4 font-sans font-sans" />
              <Link href="/product/plates-sheets" className="hover:text-sky-600 transition-colors font-sans font-sans">Plates & Sheets</Link>
              <ArrowRight className="w-4 h-4 font-sans font-sans font-sans" />
              <Link href="/product/plates-sheets/carbon-steel" className="hover:text-sky-600 transition-colors font-sans font-sans font-sans">Carbon Steel</Link>
              <ArrowRight className="w-4 h-4 font-sans font-sans font-sans font-sans" />
              <span className="text-sky-600 dark:text-sky-400 font-medium font-sans font-sans">S355JR / S355J2</span>
            </nav>
          </div>
        </div>

        <div className="container mx-auto px-4 py-6 font-sans">
          <Link href="/product/plates-sheets/carbon-steel" className="inline-flex items-center text-sky-700 dark:text-sky-400 hover:underline font-semibold group font-sans">
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform font-sans" />
            Back to Carbon Steel Plates & Sheets
          </Link>
        </div>

        <div className="bg-gradient-to-br from-slate-900 via-navy-primary to-slate-900 text-white relative overflow-hidden shadow-2xl font-sans font-sans font-sans">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] font-sans"></div>
          <div className="container mx-auto px-4 py-16 relative z-10 font-sans">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center font-sans font-sans font-sans">
              <div className="font-sans font-sans">
                <div className="flex items-center mb-6 font-sans font-sans font-sans">
                  <ShieldCheck className="w-10 h-10 text-gold-primary mr-4 animate-pulse font-sans font-sans font-sans" />
                  <span className="bg-gold-primary/20 text-gold-primary border border-gold-primary/30 px-4 py-1 text-xs uppercase tracking-widest rounded-full font-bold font-sans">European Structural Titan</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-4 uppercase tracking-tight leading-tight font-sans font-sans">
                  S355 <span className="text-gold-primary italic">JR / J2+N</span>
                  <span className="block text-2xl text-sky-200 font-normal mt-2 normal-case tracking-wide font-sans font-sans font-sans">High-Yield Structural Carbon Steel</span>
                </h1>
                <p className="text-xl mb-8 text-blue-100 leading-relaxed max-w-xl font-light font-sans font-sans font-sans">
                  The global benchmark for heavy engineering. S355 is the premier European structural grade, offering a superior 355 MPa minimum yield strength and exceptional toughness for offshore and large-scale industrial infrastructure.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 font-sans font-sans font-sans">
                  <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-8 py-4 rounded-xl font-bold transition-all hover:scale-105 shadow-xl inline-flex items-center justify-center group font-sans font-sans font-sans">
                    <Mail className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform font-sans font-sans font-sans" /> Request Expert Quote
                  </Link>
                  <a href="tel:+919819322576" className="border-2 border-white/30 hover:bg-white hover:text-navy-primary px-8 py-4 rounded-xl font-bold transition-all inline-flex items-center justify-center font-sans font-sans">
                    <Phone className="w-5 h-5 mr-3 font-sans font-sans font-sans" /> Technical Data
                  </a>
                </div>
              </div>
              <div className="relative group font-sans font-sans font-sans">
                <div className="absolute -inset-1 bg-gradient-to-r from-gold-primary to-sky-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 font-sans font-sans font-sans"></div>
                <img src={ss_plate_img} alt="S355 Structural Steel Plates" className="relative w-full rounded-2xl shadow-2xl border border-white/10 object-cover h-[400px] font-sans font-sans" />
                <div className="absolute -bottom-6 -right-6 bg-navy-secondary border-2 border-gold-primary p-6 rounded-xl shadow-2xl hidden md:block backdrop-blur-md font-sans">
                  <p className="text-gold-primary font-bold text-xs uppercase mb-1 tracking-widest font-sans font-sans font-sans font-sans">Prime Aggregator</p>
                  <p className="text-white font-black text-xl italic uppercase font-sans font-sans font-sans font-sans">EN 10025 • S355J2+N STOCK</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16 font-sans">
          <div className="max-w-7xl mx-auto font-sans font-sans font-sans">
            <div className="grid lg:grid-cols-3 gap-12 mb-16 font-sans font-sans font-sans">
              <div className="lg:col-span-2 space-y-12 font-sans font-sans">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-shadow duration-300 font-sans">
                  <h2 className="text-2xl font-bold text-navy-primary dark:text-white mb-6 border-b-2 border-gold-primary pb-2 inline-block uppercase tracking-tighter font-sans font-sans font-sans">
                    Grade Overview: S355JR / J2
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8 font-light font-sans font-sans">
                    S355 is a low-carbon, high-strength structural steel that conforms to the EN 10025-2 standard. It is a highly versatile grade used extensively in the construction and engineering sectors due to its exceptional weldability and ease of cold forming. Grade S355JR is specified for general construction at ambient temperatures, while S355J2 (often supplied in the normalized +N condition) is impact-tested for reliable performance in extreme cold environments. Its high yield strength of 355 MPa (minimum for thicknesses up to 16mm) makes it a preferred choice over mild carbon steels for wind turbine towers, bridge girders, and material handling systems where structural efficiency and safety are paramount. It represents the pinnacle of non-alloy structural engineering steel globally.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6 font-sans">
                    <div className="p-6 bg-sky-50 dark:bg-sky-900/20 rounded-xl border-t-4 border-sky-800 font-sans font-sans">
                      <Factory className="w-8 h-8 text-sky-800 mb-4 font-sans font-sans font-sans" />
                      <h4 className="font-bold text-navy-primary dark:text-sky-400 uppercase text-xs mb-2 tracking-widest font-sans font-sans font-sans font-sans">High Yield Load</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400 font-medium font-sans font-sans font-sans">355 MPa yield strength for optimized load-bearing infrastructure.</p>
                    </div>
                    <div className="p-6 bg-gold-50 dark:bg-gold-900/10 rounded-xl border-t-4 border-gold-primary font-sans font-sans font-sans">
                      <Beaker className="w-8 h-8 text-gold-primary mb-4 font-sans font-sans font-sans font-sans" />
                      <h4 className="font-bold text-navy-primary dark:text-gold-primary uppercase text-xs mb-2 tracking-widest font-sans font-sans font-sans font-sans">Impact Tough</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400 font-medium font-sans font-sans font-sans font-sans">Certified Charpy V-notch performance for low-temperature service.</p>
                    </div>
                    <div className="p-6 bg-slate-50 dark:bg-slate-700/30 rounded-xl border-t-4 border-slate-900 font-sans font-sans">
                      <Zap className="w-8 h-8 text-slate-900 dark:text-gray-300 mb-4 font-sans font-sans font-sans font-sans" />
                      <h4 className="font-bold text-navy-primary dark:text-white uppercase text-xs mb-2 tracking-widest font-sans font-sans font-sans">Euro Standard</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400 font-medium font-sans font-sans font-sans font-sans">Conforms to EN 10025 for international engineering compliance.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700 font-sans font-sans">
                  <h3 className="text-2xl font-bold text-navy-primary dark:text-white mb-8 uppercase text-center tracking-widest font-sans font-sans font-sans">Chemical Composition (%)</h3>
                  <div className="overflow-x-auto font-sans font-sans font-sans">
                    <table className="w-full border-collapse font-sans font-sans">
                      <thead>
                        <tr className="bg-navy-primary text-white font-sans font-sans font-sans font-sans">
                          <th className="px-6 py-4 text-left uppercase text-xs font-bold tracking-widest border-r border-white/10 font-sans font-sans">Element</th>
                          <th className="px-6 py-4 text-center uppercase text-xs font-bold tracking-widest border-r border-white/10 font-sans font-sans font-sans">Min %</th>
                          <th className="px-6 py-4 text-center uppercase text-xs font-bold tracking-widest font-sans font-sans font-sans font-sans">Max %</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 dark:divide-gray-700 font-sans font-sans">
                        {chemicalComposition.map((c, i) => (
                          <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors font-sans font-sans font-sans font-sans">
                            <td className="px-6 py-4 font-bold text-gray-700 dark:text-gray-300 uppercase text-xs tracking-tight border-r border-gray-50 dark:border-gray-600 font-sans font-sans font-sans font-sans font-sans">{c.element}</td>
                            <td className="px-6 py-4 text-center font-mono text-lg text-navy-primary dark:text-blue-400 font-bold border-r border-gray-50 dark:border-gray-600 font-sans font-sans font-sans font-sans font-sans">{c.min}</td>
                            <td className="px-6 py-4 text-center font-mono text-lg text-navy-primary dark:text-blue-400 font-bold font-sans font-sans font-sans font-sans font-sans font-sans">{c.max}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="space-y-8 font-sans font-sans font-sans font-sans font-sans">
                <div className="bg-navy-primary rounded-2xl shadow-xl p-8 text-white relative overflow-hidden group font-sans font-sans font-sans font-sans">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full group-hover:scale-110 transition-transform duration-700 font-sans font-sans font-sans font-sans"></div>
                  <h3 className="text-2xl font-bold mb-8 uppercase border-b-2 border-gold-primary pb-2 inline-block tracking-widest font-sans font-sans font-sans">Supply Scope</h3>
                  <div className="p-6 bg-white/10 rounded-xl mb-8 border border-white/20 text-center backdrop-blur-sm font-sans font-sans font-sans font-sans font-sans font-sans font-sans">
                    <p className="text-xs text-blue-300 uppercase tracking-widest mb-2 font-bold font-sans">Thickness range</p>
                    <p className="text-4xl font-black text-gold-primary italic font-sans font-sans font-sans">6.0 – 200mm</p>
                  </div>
                  <ul className="space-y-4 font-sans font-sans font-sans font-sans">
                    {specifications.map((spec, i) => (
                      <li key={i} className="flex items-center text-sm font-semibold tracking-tight font-sans font-sans font-sans font-sans font-sans font-sans">
                        <CheckCircle className="w-5 h-5 text-gold-primary mr-3 flex-shrink-0 font-sans font-sans font-sans font-sans font-sans font-sans" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700 font-sans font-sans font-sans">
                  <h3 className="text-xl font-bold text-navy-primary dark:text-white mb-6 uppercase border-b-2 border-navy-primary pb-2 inline-block tracking-widest font-sans font-sans font-sans font-sans">Equivalent Standards</h3>
                  <div className="space-y-3 font-sans font-sans font-sans font-sans">
                    {equivalentGrades.map((g, i) => (
                      <div key={i} className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gold-primary/10 transition-all group font-sans font-sans font-sans font-sans">
                        <span className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest font-sans font-sans font-sans font-sans font-sans">{g.country}</span>
                        <span className="text-navy-primary dark:text-blue-400 font-bold italic group-hover:text-gold-primary transition-colors font-sans font-sans font-sans font-sans font-sans font-sans">{g.grade}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700 font-sans font-sans">
                   <h3 className="text-xl font-bold text-navy-primary dark:text-white mb-6 uppercase border-b-2 border-sky-600 pb-2 inline-block tracking-widest font-sans font-sans font-sans font-sans font-sans font-sans">Mechanical Info</h3>
                   <div className="space-y-4 font-sans font-sans font-sans font-sans font-sans">
                    {mechanicalProperties.map((p, i) => (
                      <div key={i} className="border-b border-gray-100 dark:border-gray-700 pb-2 last:border-0 font-sans font-sans font-sans font-sans">
                        <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-1 font-sans font-sans font-sans font-sans font-sans font-sans">{p.property}</p>
                        <p className="text-lg font-bold text-navy-primary dark:text-blue-400 font-mono font-sans font-sans font-sans font-sans font-sans font-sans font-sans">{p.value}</p>
                      </div>
                    ))}
                   </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-10 mb-16 border border-gray-100 dark:border-gray-700 font-sans font-sans font-sans">
              <div className="flex items-center mb-10 font-sans font-sans">
                <Anchor className="w-10 h-10 text-gold-primary mr-4 font-sans font-sans font-sans font-sans" />
                <h3 className="text-3xl font-bold text-navy-primary dark:text-white uppercase border-l-8 border-gold-primary pl-4 tracking-tighter italic font-sans font-sans font-sans font-sans font-sans">Typical Applications</h3>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 font-sans font-sans font-sans font-sans font-sans">
                {applications.map((app, i) => (
                  <div key={i} className="group p-6 bg-gray-50 dark:bg-gray-700 rounded-xl flex flex-col border border-gray-100 dark:border-gray-600 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 font-sans font-sans font-sans font-sans font-sans font-sans font-sans font-sans">
                    <CheckCircle className="w-6 h-6 text-navy-primary dark:text-gold-primary mb-4 group-hover:scale-110 transition-transform font-sans font-sans font-sans font-sans font-sans font-sans font-sans font-sans font-sans" />
                    <span className="text-sm font-bold text-gray-700 dark:text-gray-200 uppercase leading-tight tracking-tight font-sans font-sans font-sans font-sans font-sans font-sans font-sans font-sans font-sans font-sans">{app}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center bg-navy-primary p-16 rounded-3xl shadow-2xl relative overflow-hidden group font-sans font-sans font-sans">
               <div className="absolute inset-0 bg-gradient-to-r from-sky-700/20 to-transparent group-hover:opacity-75 transition-opacity duration-1000 font-sans font-sans font-sans font-sans font-sans"></div>
               <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/5 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-1000 font-sans font-sans font-sans font-sans font-sans"></div>
              <h3 className="text-4xl font-black text-white mb-6 uppercase relative z-10 tracking-widest font-sans font-sans font-sans font-sans">Global Partner • High-Volume S355 Structural Specialist</h3>
              <p className="text-blue-100 mb-10 max-w-3xl mx-auto relative z-10 text-lg font-light font-sans font-sans font-sans font-sans">Mamta Steel Traders is a premier stockist for prime EN 10025 S355JR and S355J2+N plates. We maintain consistent inventories in Mumbai for heavy-duty structural hubs. Dedicated export logistics for Southeast Asia, Middle East (Qatar, UAE, Kuwait), USA and Europe. Full Mill certification to EN standards with ultrasonic and Charpy impact testing available for offshore and critical infrastructure applications.</p>
              <div className="flex flex-col sm:flex-row gap-8 justify-center relative z-10 font-sans font-sans font-sans font-sans font-sans">
                <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-12 py-5 rounded-2xl font-black transition-all shadow-2xl hover:scale-110 uppercase tracking-widest font-sans font-sans font-sans font-sans font-sans">
                  Inquire S355 Prices
                </Link>
                <a href="tel:+919819322576" className="bg-white hover:bg-slate-100 text-navy-primary px-12 py-5 rounded-2xl font-black transition-all shadow-2xl hover:scale-110 flex items-center justify-center uppercase tracking-widest font-sans font-sans font-sans font-sans">
                  <Phone className="w-5 h-5 mr-3 font-sans font-sans font-sans font-sans" /> Contact Specialist
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
