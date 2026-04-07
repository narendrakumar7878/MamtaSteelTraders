import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft, ArrowRight, CheckCircle, Mail, Phone, ShieldCheck } from "lucide-react";
import ss_round_bar_mamta_steel_traders_img from "@/assets/SS ROUND BAR  MAMTA STEEL TRADERS.jpg";
import { Link } from "wouter";

export default function Grade316HFlanges() {
  const chemicalComposition = [
    { element: "Carbon (C)", min: "0.04", max: "0.10" },
    { element: "Manganese (Mn)", min: "—", max: "2.00" },
    { element: "Silicon (Si)", min: "—", max: "0.75" },
    { element: "Chromium (Cr)", min: "16.00", max: "18.00" },
    { element: "Nickel (Ni)", min: "10.00", max: "14.00" },
    { element: "Molybdenum (Mo)", min: "2.00", max: "3.00" },
    { element: "Phosphorus (P)", min: "—", max: "0.045" },
    { element: "Sulfur (S)", min: "—", max: "0.030" },
  ];

  const equivalentGrades = [
    { country: "USA / AISI", grade: "316H / S31609" },
    { country: "Germany / DIN", grade: "1.4919" },
    { country: "Japan / JIS", grade: "SUS316H" },
  ];

  const applications = [
    "High Temperature Refineries",
    "Heat Exchangers (High Temp)",
    "Chemical Process Vessels",
    "Power Generation Systems",
    "Pressure Vessels (High Creep Strength)",
    "Furnace Parts",
    "Exhaust Manifolds",
    "Environmental Systems"
  ];

  return (
    <>
      <ProductSEO
        title="SS 316H Flanges Supplier Mumbai - High Creep Strength | Mamta Steel Traders"
        description="Superior high carbon SS 316H flanges for high temperature and elevated pressure service. Leading supplier in Mumbai. ASTM A182 F316H compliant. Excellent creep-rupture performance. Buy at competitive rates."
        keywords="SS 316H flanges, 316H stainless steel flange price, high temperature marine grade flanges Mumbai, ASTM A182 F316H flanges, 316H vs 316L flanges, high carbon SS 316 flanges India"
        canonicalUrl="/product/flanges/stainless-steel/316h-flanges"
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
              <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
              <ArrowRight className="w-4 h-4" />
              <Link href="/flanges" className="hover:text-blue-600 transition-colors">Flanges</Link>
              <ArrowRight className="w-4 h-4" />
              <Link href="/product/flanges/stainless-steel" className="hover:text-blue-600 transition-colors">Stainless Steel</Link>
              <ArrowRight className="w-4 h-4" />
              <span className="text-blue-600 dark:text-blue-400 font-medium">SS 316H</span>
            </nav>
          </div>
        </div>

        <div className="container mx-auto px-4 py-6">
          <Link href="/product/flanges/stainless-steel" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline font-semibold group">
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Hub
          </Link>
        </div>

        <div className="bg-gradient-to-br from-slate-900 via-red-900 to-black text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <div className="flex items-center mb-6">
                 <ShieldCheck className="w-8 h-8 text-orange-400 mr-3" />
                 <span className="text-orange-400 font-bold uppercase tracking-widest text-sm">Industrial High-Heat Performance</span>
              </div>
              <h1 className="text-5xl font-bold mb-4 uppercase italic">SS 316H Flanges</h1>
              <p className="text-xl text-blue-100 max-w-2xl mb-8 leading-relaxed">
                Specifically developed for elevated temperature service. SS 316H provides superior high-temperature tensile and creep-rupture strength.
              </p>
              <Link href="/contact" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-bold transition-shadow shadow-lg inline-block">Request Industrial Quote</Link>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
           <div className="grid lg:grid-cols-2 gap-12">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                 <h3 className="text-2xl font-bold text-blue-900 dark:text-white mb-6 uppercase italic border-b border-orange-500 pb-2 inline-block">Technical composition (%)</h3>
                 <div className="overflow-x-auto mt-4">
                    <table className="w-full text-left">
                       <thead className="bg-blue-600 text-white">
                          <tr>
                             <th className="px-4 py-3">Element</th>
                             <th className="px-4 py-3 text-center">Value</th>
                          </tr>
                       </thead>
                       <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                          {chemicalComposition.map((c, i) => (
                             <tr key={i}>
                                <td className="px-4 py-3 font-bold text-gray-700 dark:text-gray-300 uppercase text-xs">{c.element}</td>
                                <td className="px-4 py-3 text-center font-mono text-blue-600 dark:text-blue-400 font-bold">{c.max}</td>
                             </tr>
                          ))}
                       </tbody>
                    </table>
                 </div>
              </div>

              <div className="space-y-8">
                 <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                    <h3 className="text-2xl font-bold text-blue-900 dark:text-white mb-6 uppercase italic">Equivalent Designations</h3>
                    <div className="grid grid-cols-2 gap-4">
                       {equivalentGrades.map((g, i) => (
                          <div key={i} className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                             <p className="text-xs text-gray-400 font-bold uppercase mb-1">{g.country}</p>
                             <p className="font-bold text-blue-600 dark:text-blue-400 italic">{g.grade}</p>
                          </div>
                       ))}
                    </div>
                 </div>

                 <div className="bg-slate-900 p-8 rounded-2xl shadow-lg text-white">
                    <h3 className="text-xl font-bold mb-6 uppercase border-b border-orange-400 pb-2 inline-block italic">Typical Applications</h3>
                    <div className="grid grid-cols-2 gap-4 text-xs font-bold tracking-tighter italic">
                       {applications.map((app, i) => (
                          <div key={i} className="flex items-center">
                             <CheckCircle className="w-4 h-4 text-orange-400 mr-2 flex-shrink-0" />
                             {app}
                          </div>
                       ))}
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </>
  );
}


