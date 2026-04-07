import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft, ArrowRight, CheckCircle, Mail, Phone, ShieldCheck } from "lucide-react";
import ss_round_bar_mamta_steel_traders_img from "@/assets/SS ROUND BAR  MAMTA STEEL TRADERS.jpg";
import { Link } from "wouter";

export default function Grade304Flanges() {
  const chemicalComposition = [
    { element: "Carbon (C)", min: "—", max: "0.08" },
    { element: "Manganese (Mn)", min: "—", max: "2.00" },
    { element: "Silicon (Si)", min: "—", max: "0.75" },
    { element: "Chromium (Cr)", min: "18.00", max: "20.00" },
    { element: "Nickel (Ni)", min: "8.00", max: "10.50" },
    { element: "Phosphorus (P)", min: "—", max: "0.045" },
    { element: "Sulfur (S)", min: "—", max: "0.030" },
  ];

  const equivalentGrades = [
    { country: "USA / AISI", grade: "304 / S30400" },
    { country: "Germany / DIN", grade: "1.4301" },
    { country: "Japan / JIS", grade: "SUS304" },
    { country: "France / AFNOR", grade: "Z7CN18-09" },
    { country: "India / IS", grade: "04Cr18Ni10" },
  ];

  const applications = [
    "Food Processing & Dairy Equipment",
    "Chemical & Petrochemical Industry",
    "Water Treatment & Desalination",
    "Pharmaceutical Production Lines",
    "Oil & Gas Pipelines",
    "Heat Exchangers & Condensers",
    "Architectural Fixtures",
    "Marine Hardware"
  ];

  const dimensions = [
    "ASME B16.5: 1/2\" to 24\"",
    "ASME B16.47: 26\" to 60\"",
    "Pressure Class: 150# to 2500#",
    "Face Type: RF, FF, RTJ",
    "Thickness: Sch 5S to XXS"
  ];

  return (
    <>
      <ProductSEO
        title="Premium SS 304 Flanges Supplier Mumbai - Best Quality ASME B16.5 | Mamta Steel Traders"
        description="Leading supplier of SS 304 Stainless Steel Flanges in Mumbai. High-quality ASTM A182 F304 flanges in all sizes and pressure classes. Best prices, ready stock, mill certified. Contact Mamta Steel Traders for a quote."
        keywords="SS 304 flanges, 304 stainless steel flanges price, best flange supplier Mumbai, ASME B16.5 304 flange, weld neck 304 flange, slip on 304 flange, SUS304 flanges, 304 flange dimensions, stainless steel flanges manufacturer India"
        canonicalUrl="/product/flanges/stainless-steel/304-flanges"
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Breadcrumbs */}
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
              <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
              <ArrowRight className="w-4 h-4" />
              <Link href="/flanges" className="hover:text-blue-600 transition-colors">Flanges</Link>
              <ArrowRight className="w-4 h-4" />
              <Link href="/product/flanges/stainless-steel" className="hover:text-blue-600 transition-colors">Stainless Steel</Link>
              <ArrowRight className="w-4 h-4" />
              <span className="text-blue-600 dark:text-blue-400 font-medium">SS 304</span>
            </nav>
          </div>
        </div>

        {/* Back Button Section */}
        <div className="container mx-auto px-4 py-6">
          <Link href="/product/flanges/stainless-steel" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline font-semibold group" data-testid="back-button">
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Stainless Steel Flanges
          </Link>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <ShieldCheck className="w-10 h-10 text-orange-400 mr-4 animate-pulse" />
                  <span className="bg-orange-500/20 text-orange-400 border border-orange-500/30 px-4 py-1 text-xs uppercase tracking-widest rounded-full font-bold">Standard Industrial Grade</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-4 uppercase tracking-tight">
                  SS 304 Flanges
                  <span className="block text-2xl text-orange-400 font-normal mt-2 normal-case">ASTM A182 F304 Compliant</span>
                </h1>
                <p className="text-xl mb-8 text-blue-100 leading-relaxed max-w-xl">
                  High-performance 304 stainless steel flanges engineered for superior corrosion resistance and structural integrity across all industrial piping systems.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-bold transition-all hover:scale-105 shadow-xl inline-flex items-center justify-center">
                    <Mail className="w-5 h-5 mr-3" /> Get Wholesale Quote
                  </Link>
                  <a href="tel:+919819322576" className="border-2 border-white/30 hover:bg-white hover:text-blue-900 px-8 py-3 rounded-xl font-bold transition-all inline-flex items-center justify-center">
                    <Phone className="w-5 h-5 mr-3" /> Technical Support
                  </a>
                </div>
              </div>
              <div className="relative">
                <img src={ss_round_bar_mamta_steel_traders_img} alt="SS 304 Flanges" className="w-full rounded-2xl shadow-2xl border-4 border-white/10" />
                <div className="absolute -bottom-6 -right-6 bg-blue-900 border-2 border-orange-400 p-6 rounded-xl shadow-2xl hidden md:block">
                  <p className="text-orange-400 font-bold text-xs uppercase mb-1">Inventory Status</p>
                  <p className="text-white font-black text-xl italic">IN STOCK</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Data Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              {/* Analysis */}
              <div className="lg:col-span-2 space-y-8">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
                  <h2 className="text-2xl font-bold text-blue-900 dark:text-white mb-6 border-b-2 border-orange-400 pb-2 inline-block uppercase italic">
                    Grade Assessment: SS 304 / F304
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                    Type 304 is the most versatile and widely used stainless steel. It is an austenitic chromium-nickel alloy that provides excellent corrosion resistance, formability, and weldability. In the form of flanges, it is the primary choice for food processing, chemical handling, and water systems.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-5 bg-blue-50 dark:bg-blue-900/30 rounded-xl border-l-8 border-blue-600">
                      <h4 className="font-bold text-blue-900 dark:text-blue-400 uppercase text-sm mb-2 italic">Standard Compliance</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">ASTM A182 for forged flanges and ASTM A240 for plate flanges.</p>
                    </div>
                    <div className="p-5 bg-orange-50 dark:bg-orange-900/30 rounded-xl border-l-8 border-orange-500">
                      <h4 className="font-bold text-blue-900 dark:text-blue-400 uppercase text-sm mb-2 italic">Corrosion Profile</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Excellent resistance to atmospheric corrosion and many organic/inorganic chemicals.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
                  <h3 className="text-2xl font-bold text-blue-900 dark:text-white mb-8 uppercase text-center italic">Chemical Structure</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-blue-600 text-white">
                          <th className="px-6 py-4 text-left uppercase text-sm font-bold">Element</th>
                          <th className="px-6 py-4 text-center uppercase text-sm font-bold">Min %</th>
                          <th className="px-6 py-4 text-center uppercase text-sm font-bold">Max %</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                        {chemicalComposition.map((c, i) => (
                          <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                            <td className="px-6 py-4 font-bold text-gray-700 dark:text-gray-300 uppercase text-xs italic">{c.element}</td>
                            <td className="px-6 py-4 text-center font-mono text-lg text-blue-600 dark:text-blue-400 font-bold">{c.min}</td>
                            <td className="px-6 py-4 text-center font-mono text-lg text-blue-600 dark:text-blue-400 font-bold">{c.max}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Sidebar/Quick Info */}
              <div className="space-y-8">
                <div className="bg-blue-900 rounded-2xl shadow-xl p-8 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full"></div>
                  <h3 className="text-2xl font-bold mb-8 uppercase border-b-2 border-orange-400 pb-2 inline-block italic">Supply Scope</h3>
                  <div className="p-6 bg-white/10 rounded-xl mb-8 border border-white/20 text-center">
                    <p className="text-xs text-blue-300 uppercase tracking-widest mb-2 font-bold">Dimensional Range</p>
                    <p className="text-4xl font-black text-orange-400">1/2" – 60"</p>
                  </div>
                  <ul className="space-y-4">
                    {dimensions.map((dim, i) => (
                      <li key={i} className="flex items-center text-sm font-semibold">
                        <CheckCircle className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0" />
                        {dim}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
                  <h3 className="text-xl font-bold text-blue-900 dark:text-white mb-6 uppercase border-b-2 border-blue-600 pb-2 inline-block italic">Global Equivalents</h3>
                  <div className="space-y-3">
                    {equivalentGrades.map((g, i) => (
                      <div key={i} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-orange-400/10 transition-colors group">
                        <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase italic">{g.country}</span>
                        <span className="text-blue-600 dark:text-blue-400 font-bold italic group-hover:text-orange-500">{g.grade}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Applications */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-10 mb-12 border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-blue-900 dark:text-white mb-8 uppercase border-l-8 border-orange-400 pl-4 italic">Industrial Applications</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {applications.map((app, i) => (
                  <div key={i} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-xl flex items-center border border-gray-100 dark:border-gray-600 hover:shadow-md transition-shadow">
                    <CheckCircle className="w-5 h-5 text-blue-600 dark:text-orange-400 mr-3 flex-shrink-0" />
                    <span className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase italic leading-tight">{app}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center bg-blue-900 p-12 rounded-3xl shadow-2xl relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent"></div>
              <h3 className="text-3xl font-bold text-white mb-6 uppercase italic relative z-10">Request Technical Quotation</h3>
              <p className="text-blue-200 mb-8 max-w-2xl mx-auto relative z-10">Our metallurgical experts are ready to assist with your material specifications and volume requirements. Contact us for best-in-market pricing.</p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
                <Link href="/contact" className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-xl font-bold transition-all shadow-xl hover:scale-105">
                  Get Wholesale Rates
                </Link>
                <a href="tel:+919819322576" className="bg-white hover:bg-gray-100 text-blue-900 px-10 py-4 rounded-xl font-bold transition-all shadow-xl hover:scale-105 flex items-center justify-center">
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


