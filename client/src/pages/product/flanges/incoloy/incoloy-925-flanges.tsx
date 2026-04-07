import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft, ArrowRight, CheckCircle, ShieldCheck } from "lucide-react";
import { Link } from "wouter";

export default function Incoloy925Flanges() {
  const chemicalComposition = [
    { element: "Nickel (Ni)", value: "42.0–46.0" },
    { element: "Chromium (Cr)", value: "19.5–22.5" },
    { element: "Iron (Fe)", value: "22.0 min" },
    { element: "Molybdenum (Mo)", value: "2.5–3.5" },
    { element: "Copper (Cu)", value: "1.5–3.0" },
    { element: "Titanium (Ti)", value: "1.9–2.4" },
    { element: "Aluminum (Al)", value: "0.1–0.5" },
    { element: "Carbon (C)", value: "0.03 max" },
  ];

  const applications = [
    "Downhole Oil & Gas Components",
    "High-Strength Marine Hardware",
    "Surface Shafting & Fasteners",
    "Subsea Completion Equipment",
    "Valve Internals & Pumps",
    "Offshore Service Components",
    "Aerospace Structural Parts",
    "Sour Gas Service Tubing"
  ];

  return (
    <>
      <ProductSEO
        title="Incoloy 925 Flanges Manufacturer Mumbai | ASTM B564 Nickel-Iron-Chromium 925 Forged Flanges"
        description="Premium ASTM B564 Incoloy 925 forged flanges manufacturer in Mumbai. Age-hardenable high-strength alloy with elite corrosion resistance for oil & gas. Best prices."
        keywords="Incoloy 925 flanges, Alloy 925 flange price Mumbai, ASTM B564 Incoloy 925 forged flanges, Incoloy 925 slip on flange, Incoloy 925 weld neck flange, high strength superalloys Mumbai, Mamta Steel Traders"
        canonicalUrl="/product/flanges/incoloy/925"
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
              <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
              <ArrowRight className="w-4 h-4" />
              <Link href="/flanges" className="hover:text-blue-600 transition-colors">Flanges</Link>
              <ArrowRight className="w-4 h-4" />
              <Link href="/product/flanges/incoloy" className="hover:text-blue-600 transition-colors">Incoloy</Link>
              <ArrowRight className="w-4 h-4" />
              <span className="text-blue-600 dark:text-blue-400 font-medium">Incoloy 925</span>
            </nav>
          </div>
        </div>

        <div className="container mx-auto px-4 py-6">
          <Link href="/product/flanges/incoloy" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline font-semibold group">
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
                 <span className="text-gold-primary font-bold uppercase tracking-widest text-sm italic">High-Strength Oil & Gas Grade</span>
              </div>
              <h1 className="text-5xl font-bold mb-4 uppercase italic tracking-tighter">Incoloy 925 Flanges</h1>
              <p className="text-xl text-blue-100 max-w-2xl mb-8 leading-relaxed font-light">
                Engineering for the pressure. Incoloy 925 (UNS N09925) is an age-hardenable nickel-iron-chromium-molybdenum superalloy, providing double the strength of Incoloy 825 with elite resilience in sour gas and high-pressure oil environments.
              </p>
              <div className="flex gap-4">
                <Link href="/contact" className="bg-ゴールド-primary hover:bg-gold-secondary text-navy-primary px-10 py-3 rounded-xl font-bold transition-all shadow-xl">Contact Oil & Gas Hub</Link>
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
                  <h3 className="text-xl font-bold mb-6 uppercase border-b border-gold-primary pb-2 inline-block italic font-bold tracking-tighter italic">Deep Sea Strategic Shield</h3>
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
                  <h3 className="text-lg font-bold text-navy-primary mb-4 uppercase">Elite Fatigue & Stress Resistance</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    Designed for high-performance subsea oil and gas extraction, Incoloy 925 offers exceptional resistance to sulfide stress cracking and corrosion in sour gas service. Its unique age-hardened chemistry provides massive strength increases while remaining completely resistant to seawater degradation and chloride-induced pitting in the most aggressive offshore zones.
                  </p>
               </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="container mx-auto px-4 pb-20">
          <div className="bg-navy-primary rounded-3xl p-12 text-center shadow-2xl relative overflow-hidden border border-slate-800">
             <div className="absolute inset-0 bg-blue-900 opacity-20"></div>
             <h3 className="text-3xl font-bold text-white mb-6 uppercase italic relative z-10">Premium Incoloy 925 Forged Flanges</h3>
             <p className="text-blue-100 mb-8 max-w-xl mx-auto italic relative z-10">Mumbai's leading supplier of high-strength 925 superalloy forged flanges. Expert technical support and all-India logistics for offshore energy infrastructure.</p>
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
