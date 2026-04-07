import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft, ArrowRight, CheckCircle, ShieldCheck } from "lucide-react";
import { Link } from "wouter";

export default function Inconel686Flanges() {
  const chemicalComposition = [
    { element: "Nickel (Ni)", value: "Remainder" },
    { element: "Chromium (Cr)", value: "19.0–23.0" },
    { element: "Molybdenum (Mo)", value: "15.0–17.0" },
    { element: "Tungsten (W)", value: "3.0–4.4" },
    { element: "Iron (Fe)", value: "5.0 max" },
    { element: "Manganese (Mn)", value: "0.75 max" },
    { element: "Silicon (Si)", value: "0.08 max" },
    { element: "Carbon (C)", value: "0.01 max" },
  ];

  const applications = [
    "Flue Gas Desulfurization (FGD)",
    "Chemical Processing Units",
    "Hazardous Waste Incinerators",
    "Pulp and Paper Bleach Plants",
    "Offshore Oil & Gas Components",
    "Sulfuric Acid Production",
    "Marine Surface Hardware",
    "Pharmaceutical Reaction Vessels"
  ];

  return (
    <>
      <ProductSEO
        title="Inconel 686 Flanges Manufacturer Mumbai | ASTM B564 Nickel Alloy 686 Forged Flanges"
        description="Premium ASTM B564 Inconel 686 forged flanges manufacturer in Mumbai. Outstanding resistance to aggressive chemical environments and localized corrosion. Best prices in India."
        keywords="Inconel 686 flanges, Alloy 686 flange price Mumbai, ASTM B564 Inconel 686 forged flanges, Inconel 686 slip on flange, Inconel 686 weld neck flange, aggressive chemical alloys Mumbai, Mamta Steel Traders"
        canonicalUrl="/product/flanges/inconel/686"
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
              <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
              <ArrowRight className="w-4 h-4" />
              <Link href="/flanges" className="hover:text-blue-600 transition-colors">Flanges</Link>
              <ArrowRight className="w-4 h-4" />
              <Link href="/product/flanges/inconel" className="hover:text-blue-600 transition-colors">Inconel</Link>
              <ArrowRight className="w-4 h-4" />
              <span className="text-blue-600 dark:text-blue-400 font-medium">Inconel 686</span>
            </nav>
          </div>
        </div>

        <div className="container mx-auto px-4 py-6">
          <Link href="/product/flanges/inconel" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline font-semibold group">
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
                 <span className="text-gold-primary font-bold uppercase tracking-widest text-sm italic">Maximum Corrosion Resilience</span>
              </div>
              <h1 className="text-5xl font-bold mb-4 uppercase italic tracking-tighter">Inconel 686 Flanges</h1>
              <p className="text-xl text-blue-100 max-w-2xl mb-8 leading-relaxed font-light">
                Engineering for the reactive. Inconel 686 (UNS N06686) is a single-phase, nickel-chromium-molybdenum-tungsten superalloy providing an elite level of resistance to localized corrosion in the most aggressive chemical environments.
              </p>
              <div className="flex gap-4">
                <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-10 py-3 rounded-xl font-bold transition-all shadow-xl">Contact Corrosion Experts</Link>
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
                  <h3 className="text-xl font-bold mb-6 uppercase border-b border-gold-primary pb-2 inline-block italic font-bold tracking-tighter italic">Aggressive Media Shields</h3>
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
                  <h3 className="text-lg font-bold text-navy-primary mb-4 uppercase">Superior Acid & Pitting Protection</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    Designed for heavy-duty chemical processing and pollution control, Inconel 686 offers unmatched protection against pitting, crevice corrosion, and intergranular attack in both reducing and oxidizing fuels. Its high molybdenum and tungsten content makes it the premier choice for handling concentrated acids and wet chlorine environments.
                  </p>
               </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="container mx-auto px-4 pb-20">
          <div className="bg-navy-primary rounded-3xl p-12 text-center shadow-2xl relative overflow-hidden border border-slate-800">
             <div className="absolute inset-0 bg-blue-900 opacity-20"></div>
             <h3 className="text-3xl font-bold text-white mb-6 uppercase italic relative z-10">Premium Inconel 686 Forged Flanges</h3>
             <p className="text-blue-100 mb-8 max-w-xl mx-auto italic relative z-10">Mumbai's leading supplier of ASTM B564 superalloy 686 forged flanges. Strategic inventory available for sulfuric acid and pollution control projects across India.</p>
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
