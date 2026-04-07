import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft, ArrowRight, CheckCircle, Mail, Phone, ShieldCheck } from "lucide-react";
import ss_round_bar_mamta_steel_traders_img from "@/assets/SS ROUND BAR  MAMTA STEEL TRADERS.jpg";
import { Link } from "wouter";

export default function Grade304HFlanges() {
  const chemicalComposition = [
    { element: "Carbon (C)", min: "0.04", max: "0.10" },
    { element: "Manganese (Mn)", min: "—", max: "2.00" },
    { element: "Silicon (Si)", min: "—", max: "0.75" },
    { element: "Chromium (Cr)", min: "18.00", max: "20.00" },
    { element: "Nickel (Ni)", min: "8.00", max: "10.50" },
    { element: "Phosphorus (P)", min: "—", max: "0.045" },
    { element: "Sulfur (S)", min: "—", max: "0.030" },
  ];

  const applications = [
    "High Temperature Oil Refineries",
    "Furnace Components",
    "Heat Treatment Equipment",
    "Petrochemical Plants",
    "Steam & Gas Power Generation",
    "Pressure Vessels (High Temp)",
    "Chemical Processors",
    "Industrial Boiler Systems"
  ];

  return (
    <>
      <ProductSEO
        title="SS 304H Flanges Supplier Mumbai - High Carbon / High Temp | Mamta Steel Traders"
        description="Premium high carbon 304H stainless steel flanges for elevated temperature service. Excellent creep resistance and durability. ASTM A182 F304H compliant. Buy at best prices in Mumbai. Ready stock available."
        keywords="SS 304H flanges, 304H stainless steel flange price, high temperature steel flanges Mumbai, ASTM A182 F304H flanges, 304H vs 304 flanges, high carbon SS flanges India"
        canonicalUrl="/product/flanges/stainless-steel/304h-flanges"
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
              <span className="text-blue-600 dark:text-blue-400 font-medium">SS 304H</span>
            </nav>
          </div>
        </div>

        <div className="container mx-auto px-4 py-6">
          <Link href="/product/flanges/stainless-steel" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline font-semibold group">
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Hub
          </Link>
        </div>

        <div className="bg-gradient-to-r from-orange-900 to-red-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h1 className="text-5xl font-bold mb-4 uppercase">SS 304H Flanges</h1>
              <p className="text-xl mb-8 leading-relaxed">
                The high carbon variant for superior strength at extreme temperatures. Engineered for creep resistance in high-temperature industrial deployments.
              </p>
               <div className="flex gap-4">
                <Link href="/contact" className="bg-white text-orange-900 px-8 py-3 rounded-xl font-bold transition-all shadow-xl hover:scale-105">Get Pricing</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
           <div className="grid lg:grid-cols-2 gap-12">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                 <h3 className="text-2xl font-bold text-blue-900 dark:text-white mb-6 uppercase italic">High Carbon Profile (%)</h3>
                 <div className="overflow-x-auto">
                    <table className="w-full text-left">
                       <thead className="bg-orange-600 text-white">
                          <tr>
                             <th className="px-4 py-3">Element</th>
                             <th className="px-4 py-3 text-center">Value</th>
                          </tr>
                       </thead>
                       <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                          {chemicalComposition.map((c, i) => (
                             <tr key={i}>
                                <td className="px-4 py-3 font-bold text-gray-700 dark:text-gray-300">{c.element}</td>
                                <td className="px-4 py-3 text-center font-mono text-orange-600 dark:text-orange-400 font-bold">{c.max}</td>
                             </tr>
                          ))}
                       </tbody>
                    </table>
                 </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                 <h3 className="text-2xl font-bold text-blue-900 dark:text-white mb-6 uppercase italic border-l-4 border-orange-500 pl-4">Industrial Applications</h3>
                 <div className="grid md:grid-cols-2 gap-4">
                    {applications.map((app, i) => (
                       <div key={i} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                          {app}
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </div>
    </>
  );
}


