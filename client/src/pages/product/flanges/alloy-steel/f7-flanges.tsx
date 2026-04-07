import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft, ArrowRight, CheckCircle, ShieldCheck } from "lucide-react";
import { Link } from "wouter";

export default function GradeF7Flanges() {
  const chemicalComposition = [
    { element: "Carbon (C)", value: "0.15 max" },
    { element: "Manganese (Mn)", value: "0.30–0.60" },
    { element: "Phosphorus (P)", value: "0.030 max" },
    { element: "Sulfur (S)", value: "0.030 max" },
    { element: "Silicon (Si)", value: "0.50–1.00" },
    { element: "Chromium (Cr)", value: "6.0–8.0" },
    { element: "Molybdenum (Mo)", value: "0.44–0.65" },
  ];

  const applications = [
    "High Temperature Gas Processing",
    "Chemical Synthesis Reactors",
    "Oil Refinery Fractionating Columns",
    "Thermal Power Superheaters",
    "Acidic Liquid Distribution",
    "High Pressure Steam Generators",
    "Aerospace Industry Components",
    "Advanced Pharmaceutical Piping"
  ];

  return (
    <>
      <ProductSEO
        title="ASTM A182 F7 Alloy Steel Flanges Supplier Mumbai | 7Cr-0.5Mo Forged Flanges India"
        description="Premium ASTM A182 F7 alloy steel forged flanges for severe temperature and oxidation resistance. Best prices in Mumbai. Standard sizes available from 1/2 to 60 inches. MTC provided for all orders."
        keywords="ASTM A182 F7 flanges, A182 F7 alloy steel flange price Mumbai, forged F7 flanges India, A182 F7 weld neck flange, F7 slip on flange, chromium-molybdenum flanges Mumbai, Mamta Steel Traders"
        canonicalUrl="/product/flanges/alloy-steel/f7-flanges"
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
              <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
              <ArrowRight className="w-4 h-4" />
              <Link href="/flanges" className="hover:text-blue-600 transition-colors">Flanges</Link>
              <ArrowRight className="w-4 h-4" />
              <Link href="/product/flanges/alloy-steel" className="hover:text-blue-600 transition-colors">Alloy Steel</Link>
              <ArrowRight className="w-4 h-4" />
              <span className="text-blue-600 dark:text-blue-400 font-medium">ASTM A182 F7</span>
            </nav>
          </div>
        </div>

        <div className="container mx-auto px-4 py-6">
          <Link href="/product/flanges/alloy-steel" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline font-semibold group">
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Hub
          </Link>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-br from-slate-900 via-navy-primary to-slate-900 text-white py-20 relative overflow-hidden">
           <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl">
              <div className="flex items-center mb-6">
                 <ShieldCheck className="w-8 h-8 text-gold-primary mr-3" />
                 <span className="text-gold-primary font-bold uppercase tracking-widest text-sm italic">Ultra-High Temperature Grade</span>
              </div>
              <h1 className="text-5xl font-bold mb-4 uppercase italic tracking-tighter">ASTM A182 F7 Flanges</h1>
              <p className="text-xl text-blue-100 max-w-2xl mb-8 leading-relaxed font-light">
                Reinforced with 7% chromium, ASTM A182 F7 is engineered for environments that demand extreme resistance to hydrogen attack and high-temperature oxidation.
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

               <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                  <h3 className="text-lg font-bold text-navy-primary mb-4 uppercase">Advanced Oxidation Resistance</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    Designed for heavy-duty chemical and thermal processing, the A182 F7 grade (7-Cr alloy) bridges the gap between F5 and F9. It offers enhanced mechanical strength and exceptional durability against high-temperature scaling.
                  </p>
               </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="container mx-auto px-4 pb-20">
          <div className="bg-navy-primary rounded-3xl p-12 text-center shadow-2xl relative overflow-hidden border border-slate-800">
             <div className="absolute inset-0 bg-blue-900 opacity-20"></div>
             <h3 className="text-3xl font-bold text-white mb-6 uppercase italic relative z-10">Premium ASTM A182 F7 Flange Inventory</h3>
             <p className="text-blue-100 mb-8 max-w-xl mx-auto italic relative z-10">Trusted suppliers of specialized 7% chromium alloy flanges in Mumbai. We ensure all project-specific requirements are met with precision and quality.</p>
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
