import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft, ArrowRight, CheckCircle, Mail, Phone, ShieldCheck } from "lucide-react";
import ss_round_bar_mamta_steel_traders_img from "@/assets/SS ROUND BAR  MAMTA STEEL TRADERS.jpg";
import { Link } from "wouter";

export default function Grade316Flanges() {
  const chemicalComposition = [
    { element: "Carbon (C)", min: "—", max: "0.08" },
    { element: "Manganese (Mn)", min: "—", max: "2.00" },
    { element: "Silicon (Si)", min: "—", max: "0.75" },
    { element: "Chromium (Cr)", min: "16.00", max: "18.00" },
    { element: "Nickel (Ni)", min: "10.00", max: "14.00" },
    { element: "Molybdenum (Mo)", min: "2.00", max: "3.00" },
    { element: "Phosphorus (P)", min: "—", max: "0.045" },
    { element: "Sulfur (S)", min: "—", max: "0.030" },
  ];

  const equivalentGrades = [
    { country: "USA / AISI", grade: "316 / S31600" },
    { country: "Germany / DIN", grade: "1.4401" },
    { country: "Japan / JIS", grade: "SUS316" },
    { country: "France / AFNOR", grade: "Z7CND17-11-02" },
    { country: "India / IS", grade: "04Cr17Ni12Mo2" },
  ];

  const applications = [
    "Marine Structural Components",
    "Chemical Processing Equipment",
    "Pharmaceutical Machinery",
    "Food Preparation (high chloride areas)",
    "Pulp & Paper Processing",
    "Oil Refining Pipelines",
    "Water Desalination Plants",
    "Medical Implants & Hardware"
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
        title="316 Stainless Steel Flanges Supplier Mumbai - Marine Grade | Mamta Steel Traders"
        description="Best prices on SS 316 (1.4401) flanges in Mumbai. Superior corrosion resistance for marine & chemical environments. All flange types available: WN, SO, BL, SW. ASTM A182 compliant. Stockist & Exporter."
        keywords="SS 316 flanges, 316 stainless steel flange price Mumbai, marine grade flanges India, ASME B16.5 316 flange, weld neck 316 flange, 316L vs 316 flanges, SUS316 flanges, stainless steel flange stockist Mumbai"
        canonicalUrl="/product/flanges/stainless-steel/316-flanges"
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
              <span className="text-blue-600 dark:text-blue-400 font-medium">SS 316</span>
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
        <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <ShieldCheck className="w-10 h-10 text-gold-primary mr-4 animate-pulse" />
                  <span className="bg-gold-primary/20 text-gold-primary border border-gold-primary/30 px-4 py-1 text-xs uppercase tracking-widest rounded-full font-bold">Marine Grade Certification</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-4 uppercase tracking-tight">
                  SS 316 Flanges
                  <span className="block text-2xl text-gold-primary font-normal mt-2 normal-case">Ultimate Corrosion Resistance</span>
                </h1>
                <p className="text-xl mb-8 text-blue-100 leading-relaxed max-w-xl">
                  Engineered with 2% Molybdenum for exceptional resistance to chlorides and acidic environments. Perfect for offshore, marine, and chemical processors.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-bold transition-all hover:scale-105 shadow-xl inline-flex items-center justify-center">
                    <Mail className="w-5 h-5 mr-3" /> Get Quote
                  </Link>
                  <a href="tel:+919819322576" className="border-2 border-white/30 hover:bg-white hover:text-blue-900 px-8 py-3 rounded-xl font-bold transition-all inline-flex items-center justify-center">
                    <Phone className="w-5 h-5 mr-3" /> Technical Support
                  </a>
                </div>
              </div>
              <div className="relative">
                <img src={ss_round_bar_mamta_steel_traders_img} alt="SS 316 Flanges" className="w-full rounded-2xl shadow-2xl border-4 border-white/10" />
                <div className="absolute -bottom-6 -left-6 bg-blue-900 border-2 border-gold-primary p-6 rounded-xl shadow-2xl hidden md:block">
                  <p className="text-gold-primary font-bold text-xs uppercase mb-1">Stock Readiness</p>
                  <p className="text-white font-black text-xl italic">AVAILABLE TO SHIP</p>
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
                  <h2 className="text-2xl font-bold text-blue-900 dark:text-white mb-6 border-b-2 border-blue-600 pb-2 inline-block uppercase italic">
                    Grade Analysis: SS 316 / F316
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                    Type 316 is the standard molybdenum-bearing grade, second in importance to 304 among the austenitic stainless steels. The molybdenum gives 316 better overall corrosion resistant properties than Grade 304, particularly higher resistance to pitting and crevice corrosion in chloride environments.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-5 bg-blue-50 dark:bg-blue-900/30 rounded-xl border-l-8 border-blue-600">
                      <h4 className="font-bold text-blue-900 dark:text-blue-400 uppercase text-sm mb-2 italic">Chloride Resistance</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Superior performance in saline and high-chloride industrial zones.</p>
                    </div>
                    <div className="p-5 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl border-l-8 border-indigo-500">
                      <h4 className="font-bold text-blue-900 dark:text-blue-400 uppercase text-sm mb-2 italic">Standard Spec</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">ASTM A182 F316 - Ideal for critical heat-resistant and chemical deployments.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
                  <h3 className="text-2xl font-bold text-blue-900 dark:text-white mb-8 uppercase text-center italic">Metallurgical Profile</h3>
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
                <div className="bg-slate-900 rounded-2xl shadow-xl p-8 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full"></div>
                  <h3 className="text-2xl font-bold mb-8 uppercase border-b-2 border-gold-primary pb-2 inline-block italic">Logistics Data</h3>
                  <div className="p-6 bg-white/10 rounded-xl mb-8 border border-white/20 text-center">
                    <p className="text-xs text-blue-300 uppercase tracking-widest mb-2 font-bold">Master Stock Range</p>
                    <p className="text-4xl font-black text-gold-primary">1/2" – 60"</p>
                  </div>
                  <ul className="space-y-4">
                    {dimensions.map((dim, i) => (
                      <li key={i} className="flex items-center text-sm font-semibold">
                        <CheckCircle className="w-5 h-5 text-gold-primary mr-3 flex-shrink-0" />
                        {dim}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
                  <h3 className="text-xl font-bold text-blue-900 dark:text-white mb-6 uppercase border-b-2 border-blue-600 pb-2 inline-block italic">Equivalent Standards</h3>
                  <div className="space-y-3">
                    {equivalentGrades.map((g, i) => (
                      <div key={i} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gold-primary/10 transition-colors group">
                        <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase italic">{g.country}</span>
                        <span className="text-blue-600 dark:text-blue-400 font-bold italic group-hover:text-blue-800">{g.grade}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Applications */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-10 mb-12 border border-gray-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-blue-900 dark:text-white mb-8 uppercase border-l-8 border-gold-primary pl-4 italic">Industrial Deployment</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {applications.map((app, i) => (
                  <div key={i} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-xl flex items-center border border-gray-100 dark:border-gray-600 hover:shadow-md transition-shadow">
                    <CheckCircle className="w-5 h-5 text-gold-primary mr-3 flex-shrink-0" />
                    <span className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase italic leading-tight">{app}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center bg-slate-900 p-12 rounded-3xl shadow-2xl relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent"></div>
              <h3 className="text-3xl font-bold text-white mb-6 uppercase italic relative z-10">Secure Your Quote Now</h3>
              <p className="text-blue-200 mb-8 max-w-2xl mx-auto relative z-10">Join our network of precision engineering partners. We provide certified material test reports and global shipping for all SS 316 flange configurations.</p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
                <Link href="/contact" className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-xl font-bold transition-all shadow-xl hover:scale-105">
                  Get Best Prices
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


