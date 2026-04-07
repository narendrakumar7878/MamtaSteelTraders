import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft, ArrowRight, CheckCircle, ShieldCheck } from "lucide-react";
import { Link } from "wouter";

export default function Inconel718Flanges() {
  const chemicalComposition = [
    { element: "Nickel (Ni) + Cobalt (Co)", value: "50.0–55.0" },
    { element: "Chromium (Cr)", value: "17.0–21.0" },
    { element: "Iron (Fe)", value: "Balance" },
    { element: "Niobium (Nb) + Tantalum (Ta)", value: "4.75–5.50" },
    { element: "Molybdenum (Mo)", value: "2.8–3.3" },
    { element: "Titanium (Ti)", value: "0.65–1.15" },
    { element: "Aluminum (Al)", value: "0.20–0.80" },
    { element: "Carbon (C)", value: "0.08 max" },
  ];

  const applications = [
    "Aerospace Gas Turbine Engines",
    "Liquid Fuel Rocket Motors",
    "Cryogenic Storage Tanks",
    "High-Speed Airframe Parts",
    "Nuclear Fuel Element Spacers",
    "Oil Field Wellhead Parts",
    "High-Strength Fasteners & Bolts",
    "Submarine Internal Components"
  ];

  return (
    <>
      <ProductSEO
        title="Inconel 718 Flanges Manufacturer Mumbai | High-Strength Precipitation Hardened Flanges India"
        description="Premium ASTM B564 Inconel 718 forged flanges manufacturer in Mumbai. Elite yield and tensile strength for aerospace and high-pressure service. Best prices in India. MTC provided."
        keywords="Inconel 718 flanges, ASTM B564 Inconel 718 flange price Mumbai, age hardened nickel alloys India, Inconel 718 slip on flange, Inconel 718 weld neck flange, aerospace grade flanges Mumbai, Mamta Steel Traders"
        canonicalUrl="/product/flanges/nickel-alloy/inconel-718"
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
              <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
              <ArrowRight className="w-4 h-4" />
              <Link href="/flanges" className="hover:text-blue-600 transition-colors">Flanges</Link>
              <ArrowRight className="w-4 h-4" />
              <Link href="/product/flanges/nickel-alloy" className="hover:text-blue-600 transition-colors">Nickel Alloy</Link>
              <ArrowRight className="w-4 h-4" />
              <span className="text-blue-600 dark:text-blue-400 font-medium">Inconel 718</span>
            </nav>
          </div>
        </div>

        <div className="container mx-auto px-4 py-6">
          <Link href="/product/flanges/nickel-alloy" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline font-semibold group">
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
                 <span className="text-gold-primary font-bold uppercase tracking-widest text-sm italic">Age-Hardenable Aerospace Superalloy</span>
              </div>
              <h1 className="text-5xl font-bold mb-4 uppercase italic tracking-tighter">Inconel 718 Flanges</h1>
              <p className="text-xl text-blue-100 max-w-2xl mb-8 leading-relaxed font-light">
                Engineering for the limits of flight. Inconel 718 is a precipitation-hardenable nickel-chromium alloy that combines corrosion resistance with exceptionally high yield, tensile, and creep-rupture strength.
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
                  <h3 className="text-lg font-bold text-navy-primary mb-4 uppercase">Elite Aerospace Resilience</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    Designed for heavy-duty flight and space applications, Inconel 718 provides high weldability and resistance to post-weld cracking. It retains excellent strength at temperatures up to 1300°F and is widely utilized in high-performance turbine and rocket infrastructure globally.
                  </p>
               </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="container mx-auto px-4 pb-20">
          <div className="bg-navy-primary rounded-3xl p-12 text-center shadow-2xl relative overflow-hidden border border-slate-800">
             <div className="absolute inset-0 bg-blue-900 opacity-20"></div>
             <h3 className="text-3xl font-bold text-white mb-6 uppercase italic relative z-10">Premium Inconel 718 Flange Inventory</h3>
             <p className="text-blue-100 mb-8 max-w-xl mx-auto italic relative z-10">India's strategic supplier of certified age-hardened aerospace superalloy flanges. Technical documentation and trace records provided for all orders.</p>
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
