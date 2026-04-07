import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft, ArrowRight, CheckCircle, Mail, Phone, ShieldCheck } from "lucide-react";
import ss_round_bar_mamta_steel_traders_img from "@/assets/SS ROUND BAR  MAMTA STEEL TRADERS.jpg";
import { Link } from "wouter";

export default function Grade316LFlanges() {
  const chemicalComposition = [
    { element: "Carbon (C)", min: "—", max: "0.03" },
    { element: "Manganese (Mn)", min: "—", max: "2.00" },
    { element: "Silicon (Si)", min: "—", max: "0.75" },
    { element: "Chromium (Cr)", min: "16.00", max: "18.00" },
    { element: "Nickel (Ni)", min: "10.00", max: "14.00" },
    { element: "Molybdenum (Mo)", min: "2.00", max: "3.00" },
    { element: "Phosphorus (P)", min: "—", max: "0.045" },
    { element: "Sulfur (S)", min: "—", max: "0.030" },
  ];

  const equivalentGrades = [
    { country: "USA / AISI", grade: "316L / S31603" },
    { country: "Germany / DIN", grade: "1.4404" },
    { country: "Japan / JIS", grade: "SUS316L" },
    { country: "France / AFNOR", grade: "Z3CND17-11-02" },
    { country: "India / IS", grade: "03Cr17Ni12Mo3" },
  ];

  const applications = [
    "High Chloride Environments",
    "Pharmaceutical Production",
    "Chemical & Petrochemical",
    "Nuclear Power Engineering",
    "Pulp & Paper Bleaching",
    "Semiconductor Processing",
    "Desalination Components",
    "Heat Exchangers (Acidic)"
  ];

  return (
    <>
      <ProductSEO
        title="SS 316L Flanges Supplier Mumbai - Low Carbon Marine Grade | Mamta Steel Traders"
        description="Best prices on SS 316L (1.4404) flanges in Mumbai. Superior corrosion resistance and weldability. ASTM A182 F316L compliant. Available in all types: WN, SO, BL, SW. Direct Supplier & Stockist."
        keywords="SS 316L flanges, 316L stainless steel flange price India, marine grade low carbon flange Mumbai, ASME B16.5 316L flange, weld neck 316L flange, 316L vs 316 flanges, SUS316L flanges, stainless steel flange stockist Mumbai"
        canonicalUrl="/product/flanges/stainless-steel/316l-flanges"
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
              <span className="text-blue-600 dark:text-blue-400 font-medium">SS 316L</span>
            </nav>
          </div>
        </div>

        <div className="container mx-auto px-4 py-6">
          <Link href="/product/flanges/stainless-steel" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline font-semibold group">
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Stainless Steel Flanges Hub
          </Link>
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20 relative overflow-hidden">
           <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl">
              <div className="flex items-center mb-6">
                 <ShieldCheck className="w-8 h-8 text-gold-primary mr-3" />
                 <span className="text-gold-primary font-bold uppercase tracking-widest text-sm">Superior Marine Performance</span>
              </div>
              <h1 className="text-5xl font-bold mb-4 uppercase tracking-tighter italic">SS 316L Flanges</h1>
              <p className="text-xl text-blue-100 max-w-2xl mb-8 leading-relaxed font-light">
                The low carbon version of 316 stainless steel. SS 316L offers the same marine-grade corrosion resistance while providing enhanced immunity to intergranular corrosion after welding.
              </p>
              <div className="flex gap-4">
                <Link href="/contact" className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-3 rounded-xl font-bold transition-all shadow-xl">Get Best Price Quote</Link>
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
                 <h3 className="text-2xl font-bold text-blue-900 dark:text-white mb-6 uppercase italic border-b border-blue-600 pb-2 inline-block">Equivalent Designations</h3>
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
                  <h3 className="text-xl font-bold mb-6 uppercase border-b border-gold-primary pb-2 inline-block italic">Critical Applications</h3>
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
             <h3 className="text-3xl font-bold text-white mb-6 uppercase italic">Ready to Order SS 316L Flanges?</h3>
             <p className="text-blue-100 mb-8 max-w-xl mx-auto">Mamta Steel Traders is India's most trusted source for SS 316L forged and plate flanges. Get in touch for technical assistance and industrial pricing.</p>
             <div className="flex flex-wrap justify-center gap-6">
                <Link href="/contact" className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-xl font-bold transition-all shadow-xl hover:scale-105">Request Price List</Link>
                <a href="tel:+919819322576" className="bg-white text-blue-900 px-10 py-4 rounded-xl font-bold transition-all shadow-xl hover:scale-105">+91 98193 22576</a>
             </div>
          </div>
        </div>
      </div>
    </>
  );
}


