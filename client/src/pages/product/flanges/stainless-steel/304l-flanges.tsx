import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft, ArrowRight, CheckCircle, Mail, Phone, ShieldCheck } from "lucide-react";
import ss_round_bar_mamta_steel_traders_img from "@/assets/SS ROUND BAR  MAMTA STEEL TRADERS.jpg";
import { Link } from "wouter";

export default function Grade304LFlanges() {
  const chemicalComposition = [
    { element: "Carbon (C)", min: "—", max: "0.03" },
    { element: "Manganese (Mn)", min: "—", max: "2.00" },
    { element: "Silicon (Si)", min: "—", max: "0.75" },
    { element: "Chromium (Cr)", min: "18.00", max: "20.00" },
    { element: "Nickel (Ni)", min: "8.00", max: "12.00" },
    { element: "Phosphorus (P)", min: "—", max: "0.045" },
    { element: "Sulfur (S)", min: "—", max: "0.030" },
  ];

  const equivalentGrades = [
    { country: "USA / AISI", grade: "304L / S30403" },
    { country: "Germany / DIN", grade: "1.4307" },
    { country: "Japan / JIS", grade: "SUS304L" },
    { country: "France / AFNOR", grade: "Z3CN18-10" },
    { country: "India / IS", grade: "03Cr18Ni11" },
  ];

  const applications = [
    "Welded Structures",
    "Chemical Storage Tanks",
    "Heat Exchangers",
    "Pressure Vessels",
    "Food Processing Machinery",
    "Brewery & Winemaking Equipment",
    "Cryogenic Components",
    "Mining Equipment"
  ];

  return (
    <>
      <ProductSEO
        title="304L Stainless Steel Flanges Supplier Mumbai - Low Carbon | Mamta Steel Traders"
        description="Premium low carbon SS 304L flanges. Prevents carbide precipitation during welding. Excellent corrosion resistance. All ASME B16.5 sizes 1/2 inch to 60 inch. Buy at best prices from Mumbai's leading stockist."
        keywords="SS 304L flanges, 304L stainless steel flange price, low carbon SS flanges Mumbai, ASTM A182 F304L flanges, weld neck 304L flange, 304L flange weight chart, SUS304L flanges, best quality stainless steel flanges India"
        canonicalUrl="/product/flanges/stainless-steel/304l-flanges"
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
              <span className="text-blue-600 dark:text-blue-400 font-medium">SS 304L</span>
            </nav>
          </div>
        </div>

        <div className="container mx-auto px-4 py-6">
          <Link href="/product/flanges/stainless-steel" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline font-semibold group">
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Stainless Steel Flanges
          </Link>
        </div>

        <div className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <div className="flex items-center mb-6">
                 <ShieldCheck className="w-8 h-8 text-orange-400 mr-3" />
                 <span className="text-orange-400 font-bold uppercase tracking-widest text-sm">Low Carbon Superior Weldability</span>
              </div>
              <h1 className="text-5xl font-bold mb-4 uppercase">SS 304L Flanges</h1>
              <p className="text-xl text-blue-100 max-w-2xl mb-8 leading-relaxed">
                Optimized for welded applications. SS 304L eliminates carbide precipitation during welding, maintaining maximum corrosion resistance in the heat-affected zone.
              </p>
              <div className="flex gap-4">
                <Link href="/contact" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-bold transition-shadow shadow-lg">Get Best Quote</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
               <h3 className="text-2xl font-bold text-blue-900 dark:text-white mb-6 uppercase italic">Chemical Composition (%)</h3>
               <div className="overflow-x-auto">
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
                         <td className="px-4 py-3 font-bold text-gray-700 dark:text-gray-300">{c.element}</td>
                         <td className="px-4 py-3 text-center font-mono text-blue-600 dark:text-blue-400 font-bold">{c.max}</td>
                       </tr>
                     ))}
                   </tbody>
                 </table>
               </div>
            </div>

            <div className="space-y-8">
               <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                 <h3 className="text-2xl font-bold text-blue-900 dark:text-white mb-6 uppercase italic">Grade Equivalents</h3>
                 <div className="grid grid-cols-2 gap-4">
                   {equivalentGrades.map((g, i) => (
                     <div key={i} className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                       <p className="text-xs text-gray-400 font-bold uppercase mb-1">{g.country}</p>
                       <p className="font-bold text-blue-600 dark:text-blue-400 italic">{g.grade}</p>
                     </div>
                   ))}
                 </div>
               </div>

               <div className="bg-blue-900 p-8 rounded-2xl shadow-lg text-white">
                  <h3 className="text-xl font-bold mb-6 uppercase border-b border-orange-400 pb-2 inline-block">Industrial Uses</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
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


