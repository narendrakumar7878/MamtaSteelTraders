import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft, ArrowRight, CheckCircle, Mail, Phone, ShieldCheck } from "lucide-react";
import ss_round_bar_mamta_steel_traders_img from "@/assets/SS ROUND BAR  MAMTA STEEL TRADERS.jpg";
import { Link } from "wouter";

export default function Grade321Flanges() {
  const chemicalComposition = [
    { element: "Carbon (C)", min: "—", max: "0.08" },
    { element: "Manganese (Mn)", min: "—", max: "2.00" },
    { element: "Silicon (Si)", min: "—", max: "0.75" },
    { element: "Chromium (Cr)", min: "17.00", max: "19.00" },
    { element: "Nickel (Ni)", min: "9.00", max: "12.00" },
    { element: "Titanium (Ti)", min: "5x(C+N)", max: "0.70" },
    { element: "Phosphorus (P)", min: "—", max: "0.045" },
    { element: "Sulfur (S)", min: "—", max: "0.030" },
  ];

  const equivalentGrades = [
    { country: "USA / AISI", grade: "321 / S32100" },
    { country: "Germany / DIN", grade: "1.4541" },
    { country: "Japan / JIS", grade: "SUS321" },
    { country: "France / AFNOR", grade: "Z6CNT18-10" },
    { country: "India / IS", grade: "06Cr18Ni9Ti" },
  ];

  const applications = [
    "Aircraft Exhaust Manifolds",
    "Pressure Vessels (High Temp)",
    "Chemical Processing Equipment",
    "Heat Exchangers",
    "Engine Parts",
    "Nuclear Power Systems",
    "Gas Turbines",
    "Piping Systems (425-900°C Range)"
  ];

  return (
    <>
      <ProductSEO
        title="SS 321 Flanges Supplier Mumbai - Titanium Stabilized | Mamta Steel Traders"
        description="Best prices on Titanium stabilized SS 321 (1.4541) flanges in Mumbai. Excellent resistance to intergranular corrosion after welding. ASTM A182 F321 compliant. Ideal for high temperature service. Ready stock, best rates."
        keywords="SS 321 flanges, 321 stainless steel flange price India, titanium stabilized SS flanges Mumbai, ASTM A182 F321 flanges, weld neck 321 flange, SUS321 flanges, high temperature stainless steel flanges Mumbai"
        canonicalUrl="/product/flanges/stainless-steel/321-flanges"
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
              <span className="text-blue-600 dark:text-blue-400 font-medium">SS 321</span>
            </nav>
          </div>
        </div>

        <div className="container mx-auto px-4 py-6">
          <Link href="/product/flanges/stainless-steel" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline font-semibold group">
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Stainless Steel Flanges Hub
          </Link>
        </div>

        <div className="bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 text-white py-20 relative overflow-hidden">
           <div className="absolute inset-x-0 top-0 h-1 bg-gold-primary"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl">
              <div className="flex items-center mb-6">
                 <ShieldCheck className="w-8 h-8 text-gold-primary mr-3" />
                 <span className="text-gold-primary font-bold uppercase tracking-widest text-sm italic">Titanium Stabilized Grade</span>
              </div>
              <h1 className="text-5xl font-bold mb-4 uppercase italic">SS 321 Flanges</h1>
              <p className="text-xl text-blue-100 max-w-2xl mb-8 leading-relaxed font-light">
                Titanium-stabilized austenitic stainless steel. SS 321 offers excellent resistance to intergranular corrosion after exposure to temperatures in the chromium carbide precipitation range.
              </p>
              <div className="flex gap-4">
                <Link href="/contact" className="bg-gold-primary hover:bg-yellow-600 text-blue-900 px-10 py-3 rounded-xl font-bold transition-all shadow-xl">Get Best Pricing</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
               <h3 className="text-2xl font-bold text-blue-900 dark:text-white mb-6 uppercase italic border-b border-gold-primary pb-2 inline-block">Chemical Standards (%)</h3>
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
                         <td className="px-4 py-3 text-center font-mono text-blue-600 dark:text-blue-400 font-bold text-lg">{c.max}</td>
                       </tr>
                     ))}
                   </tbody>
                 </table>
               </div>
            </div>

            <div className="space-y-8">
               <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                 <h3 className="text-2xl font-bold text-blue-900 dark:text-white mb-6 uppercase italic border-b border-blue-600 pb-2 inline-block">Equivalent Grades</h3>
                 <div className="grid grid-cols-2 gap-4">
                   {equivalentGrades.map((g, i) => (
                     <div key={i} className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg group hover:bg-gold-primary/10 transition-colors">
                       <p className="text-xs text-gray-400 font-bold uppercase mb-1">{g.country}</p>
                       <p className="font-bold text-blue-600 dark:text-blue-400 italic font-bold tracking-tighter italic">{g.grade}</p>
                     </div>
                   ))}
                 </div>
               </div>

               <div className="bg-slate-900 p-8 rounded-2xl shadow-lg text-white">
                  <h3 className="text-xl font-bold mb-6 uppercase border-b border-gold-primary pb-2 inline-block italic font-bold tracking-tighter italic">High Temperature Service</h3>
                  <div className="grid grid-cols-2 gap-y-4 gap-x-6 text-xs uppercase font-bold tracking-tighter italic">
                    {applications.map((app, i) => (
                      <div key={i} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-gold-primary mr-2 flex-shrink-0" />
                        {app}
                      </div>
                    ))}
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="container mx-auto px-4 pb-20">
          <div className="bg-blue-900 rounded-3xl p-12 text-center shadow-2xl">
             <h3 className="text-3xl font-bold text-white mb-6 uppercase italic">Need SS 321 Stabilized Flanges?</h3>
             <p className="text-blue-100 mb-8 max-w-xl mx-auto italic">Mamta Steel Traders supplies precision-forged 321 flanges for high-heat environments. Get your ASME B16.5 certified material today.</p>
             <div className="flex flex-wrap justify-center gap-6">
                <Link href="/contact" className="bg-gold-primary text-blue-900 px-10 py-4 rounded-xl font-bold transition-all shadow-xl hover:scale-105">Get Best Quote</Link>
                <a href="tel:+919819322576" className="bg-white text-blue-900 px-10 py-4 rounded-xl font-bold transition-all shadow-xl hover:scale-105">+91 98193 22576</a>
             </div>
          </div>
        </div>
      </div>
    </>
  );
}


