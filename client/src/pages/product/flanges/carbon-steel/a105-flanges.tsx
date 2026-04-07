import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft, ArrowRight, CheckCircle, Mail, Phone, ShieldCheck } from "lucide-react";
import { Link } from "wouter";

export default function GradeA105Flanges() {
  const chemicalComposition = [
    { element: "Carbon (C)", value: "0.35 max" },
    { element: "Manganese (Mn)", value: "0.60-1.05" },
    { element: "Phosphorus (P)", value: "0.035 max" },
    { element: "Sulfur (S)", value: "0.040 max" },
    { element: "Silicon (Si)", value: "0.10-0.35" },
    { element: "Copper (Cu)", value: "0.40 max" },
    { element: "Nickel (Ni)", value: "0.40 max" },
    { element: "Chromium (Cr)", value: "0.30 max" },
    { element: "Molybdenum (Mo)", value: "0.12 max" },
    { element: "Vanadium (V)", value: "0.08 max" },
  ];

  const equivalentGrades = [
    { country: "USA / ASTM", grade: "A105 / A105M" },
    { country: "Europe / EN", grade: "P245GH / P250GH" },
    { country: "Germany / DIN", grade: "C22.8 / 1.0460" },
    { country: "Japan / JIS", grade: "SF440A" },
    { country: "India / IS", grade: "IS 2062" },
  ];

  const applications = [
    "High Temperature Piping Systems",
    "Oil & Gas Pipeline Infrastructure",
    "Petrochemical Refineries",
    "Power Generation Plants",
    "Heat Exchanger Components",
    "Valve Body Manufacturing",
    "Steam & Water Distribution",
    "Marine Engineering Applications"
  ];

  return (
    <>
      <ProductSEO
        title="ASTM A105 Carbon Steel Flanges Supplier Mumbai | High-Temp Forged Flanges India"
        description="Premium ASTM A105 carbon steel forged flanges for ambient and high-temperature service. Best prices in Mumbai. Standard sizes available from 1/2 to 60 inches. MTC provided for all orders."
        keywords="ASTM A105 flanges, A105 carbon steel flange price Mumbai, forged A105 flanges India, A105 weld neck flange, A105 slip on flange, ambient temperature carbon steel flanges Mumbai, Mamta Steel Traders"
        canonicalUrl="/product/flanges/carbon-steel/a105-flanges"
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
              <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
              <ArrowRight className="w-4 h-4" />
              <Link href="/flanges" className="hover:text-blue-600 transition-colors">Flanges</Link>
              <ArrowRight className="w-4 h-4" />
              <Link href="/product/flanges/carbon-steel" className="hover:text-blue-600 transition-colors">Carbon Steel</Link>
              <ArrowRight className="w-4 h-4" />
              <span className="text-blue-600 dark:text-blue-400 font-medium">ASTM A105</span>
            </nav>
          </div>
        </div>

        <div className="container mx-auto px-4 py-6">
          <Link href="/product/flanges/carbon-steel" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline font-semibold group">
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Hub
          </Link>
        </div>

        <div className="bg-gradient-to-br from-slate-900 via-navy-primary to-slate-900 text-white py-20 relative overflow-hidden">
           <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl">
              <div className="flex items-center mb-6">
                 <ShieldCheck className="w-8 h-8 text-gold-primary mr-3" />
                 <span className="text-gold-primary font-bold uppercase tracking-widest text-sm italic">Standard Forging Grade</span>
              </div>
              <h1 className="text-5xl font-bold mb-4 uppercase italic tracking-tighter">ASTM A105 Flanges</h1>
              <p className="text-xl text-blue-100 max-w-2xl mb-8 leading-relaxed font-light">
                The most common carbon steel grade for forged piping components. Ideal for ambient and higher-temperature service in pressure systems.
              </p>
              <div className="flex gap-4">
                <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-10 py-3 rounded-xl font-bold transition-all shadow-xl">Request Price Quote</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
               <h3 className="text-2xl font-bold text-blue-900 dark:text-white mb-6 uppercase italic border-b border-gold-primary pb-2 inline-block">Chemical Composition (%)</h3>
               <div className="overflow-x-auto mt-4">
                 <table className="w-full text-left">
                   <thead className="bg-navy-primary text-white">
                     <tr>
                       <th className="px-4 py-3">Element</th>
                       <th className="px-4 py-3 text-center">Value</th>
                     </tr>
                   </thead>
                   <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                     {chemicalComposition.map((c, i) => (
                       <tr key={i}>
                         <td className="px-4 py-3 font-bold text-gray-700 dark:text-gray-300 uppercase text-xs">{c.element}</td>
                         <td className="px-4 py-3 text-center font-mono text-navy-primary dark:text-blue-400 font-bold text-lg">{c.value}</td>
                       </tr>
                     ))}
                   </tbody>
                 </table>
               </div>
            </div>

            <div className="space-y-8">
               <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                 <h3 className="text-2xl font-bold text-blue-900 dark:text-white mb-6 uppercase italic border-b border-navy-primary pb-2 inline-block">Equivalent Designations</h3>
                 <div className="grid grid-cols-2 gap-4">
                   {equivalentGrades.map((g, i) => (
                     <div key={i} className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg group hover:bg-gold-primary/10 transition-colors">
                       <p className="text-xs text-gray-400 font-bold uppercase mb-1">{g.country}</p>
                       <p className="font-bold text-navy-primary dark:text-blue-400 italic tracking-tighter italic">{g.grade}</p>
                     </div>
                   ))}
                 </div>
               </div>

               <div className="bg-slate-950 p-8 rounded-2xl shadow-lg text-white">
                  <h3 className="text-xl font-bold mb-6 uppercase border-b border-gold-primary pb-2 inline-block italic font-bold tracking-tighter italic">Key Industrial Segments</h3>
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
          <div className="bg-navy-primary rounded-3xl p-12 text-center shadow-2xl relative overflow-hidden border border-slate-800">
             <div className="absolute inset-0 bg-blue-900 opacity-20"></div>
             <h3 className="text-3xl font-bold text-white mb-6 uppercase italic relative z-10">Premium ASTM A105 Flange Inventory</h3>
             <p className="text-blue-100 mb-8 max-w-xl mx-auto italic relative z-10">Heavy stock of forged A105 flanges for mission-critical pressure applications. High precision, zero-leak testing, and immediate dispatch from Mumbai.</p>
             <div className="flex flex-wrap justify-center gap-6 relative z-10">
                <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-10 py-4 rounded-xl font-bold transition-all shadow-xl hover:scale-105">Request Price Quote</Link>
                <a href="tel:+919819322576" className="bg-white text-navy-primary px-10 py-4 rounded-xl font-bold transition-all shadow-xl hover:scale-105">+91 98193 22576</a>
             </div>
          </div>
        </div>
      </div>
    </>
  );
}
