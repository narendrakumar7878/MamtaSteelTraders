import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft, ArrowRight, Phone, Mail, CheckCircle, Shield, Award, Activity, Microscope } from "lucide-react";
import { Link } from "wouter";

export default function GradeSAE8620RoundBars() {
  const chemicalComposition = [
    { element: "Carbon (C)", value: "0.18 – 0.23%" },
    { element: "Nickel (Ni)", value: "0.40 – 0.70%" },
    { element: "Chromium (Cr)", value: "0.40 – 0.60%" },
    { element: "Molybdenum (Mo)", value: "0.15 – 0.25%" },
    { element: "Manganese (Mn)", value: "0.70 – 0.90%" },
    { element: "Silicon (Si)", value: "0.15 – 0.35%" }
  ];

  const mechanicalProperties = [
    { property: "Tensile Strength", value: "530 MPa min" },
    { property: "Yield Strength", value: "385 MPa min" },
    { property: "Elongation", value: "15% min" },
    { property: "Hardness (HRC)", value: "60 – 64 (after case hardening)" }
  ];

  const equivalentGrades = [
    { country: "USA (AISI/SAE)", grade: "8620" },
    { country: "European (EN)", grade: "1.6523 / 20NiCrMo2-2" },
    { country: "British (BS)", grade: "805M20" },
    { country: "Japan (JIS)", grade: "SNCM220" },
    { country: "German (DIN)", grade: "21NiCrMo2" }
  ];

  return (
    <>
      <ProductSEO
        title="SAE 8620 Alloy Steel Round Bars | Case Hardening | Ni-Cr-Mo | Mamta Steel Traders"
        description="Premium SAE 8620 Alloy Steel round bars. Superior case hardening properties with high core toughness. Equivalent to AISI 8620, 20NiCrMo2. Ideal for gears, pinions, and crankshafts."
        keywords="SAE 8620 round bar, AISI 8620 steel, 8620 case hardening steel, 20NiCrMo2 steel Mumbai, Ni-Cr-Mo alloy"
        canonicalUrl="/product/round-bars/carbon-steel/sae-8620-round-bar"
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 font-bold tracking-tighter italic">
        {/* Breadcrumb Navigation */}
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 font-bold tracking-tighter italic">
           <div className="container mx-auto px-4 py-4 font-bold tracking-tighter italic">
              <nav className="flex items-center space-x-2 text-sm flex-wrap gap-y-1 font-bold tracking-tighter italic">
                 <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary transition-all font-bold tracking-tighter italic">Home</Link>
                 <ArrowRight className="w-4 h-4 text-gray-400" />
                 <Link href="/product/round-bars/round-bars" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary transition-all font-bold tracking-tighter italic">Round Bars</Link>
                 <ArrowRight className="w-4 h-4 text-gray-400" />
                 <Link href="/product/round-bars/carbon-steel" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary transition-all font-bold tracking-tighter italic">Carbon Steel</Link>
                 <ArrowRight className="w-4 h-4 text-gray-400" />
                 <span className="text-navy-primary dark:text-gold-primary font-bold italic font-bold tracking-tighter italic">SAE 8620 Case Hardening</span>
              </nav>
           </div>
        </div>

        {/* Back Link */}
        <div className="container mx-auto px-4 py-4 font-bold tracking-tighter italic">
           <Link href="/product/round-bars/carbon-steel" className="inline-flex items-center text-navy-primary dark:text-gold-primary hover:underline font-bold italic font-bold tracking-tighter italic">
              <ArrowLeft className="w-4 h-4 mr-2 italic font-bold tracking-tighter italic" /> Back to Carbon Steel
           </Link>
        </div>

        <section className="bg-gradient-to-br from-navy-primary via-navy-secondary to-slate-800 text-white py-20 relative overflow-hidden font-bold tracking-tighter italic">
          <div className="container mx-auto px-4 relative z-10 font-bold tracking-tighter italic font-bold tracking-tighter italic">
             <div className="max-w-4xl font-bold tracking-tighter italic">
                <span className="bg-gold-primary text-navy-primary px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-6 inline-block font-bold tracking-tighter italic italic">High-Performance Case Hardening Steel</span>
                <h1 className="text-5xl md:text-6xl font-extrabold mb-6 italic italic italic italic italic">SAE 8620 Round Bars</h1>
                <p className="text-xl text-gray-200 mb-8 leading-relaxed italic italic font-bold tracking-tighter italic">A versatile triple alloy (Nickel-Chromium-Molybdenum) steel offering excellent uniform hardenable properties and high core toughness for heavy-duty drive components.</p>
                <div className="flex flex-wrap gap-4 font-bold tracking-tighter italic font-bold tracking-tighter italic font-bold tracking-tighter italic">
                   <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-8 py-3 rounded-xl font-bold transition-all shadow-xl hover:scale-105 italic italic italic font-bold tracking-tighter italic">Get Factory Pricing</Link>
                   <a href="tel:+919819322576" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3 rounded-xl font-bold transition-all backdrop-blur-sm italic italic italic italic font-bold tracking-tighter italic font-bold tracking-tighter italic"><Phone className="w-5 h-5 inline mr-2 italic font-bold tracking-tighter italic font-bold tracking-tighter italic" /> Technical expert</a>
                </div>
             </div>
          </div>
        </section>

        <section className="py-16 font-bold tracking-tighter italic font-bold tracking-tighter italic">
          <div className="container mx-auto px-4 font-bold tracking-tighter italic font-bold tracking-tighter italic font-bold tracking-tighter italic">
             <div className="grid lg:grid-cols-2 gap-12 font-bold tracking-tighter italic font-bold tracking-tighter italic font-bold tracking-tighter italic font-bold tracking-tighter italic">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-100 font-bold tracking-tighter italic font-bold tracking-tighter italic">
                   <h2 className="text-3xl font-bold text-navy-primary dark:text-gray-100 mb-6 border-l-4 border-gold-primary pl-4 font-bold tracking-tighter italic italic font-bold tracking-tighter italic font-bold tracking-tighter italic font-bold tracking-tighter italic font-bold tracking-tighter italic">Chemical Composition (%)</h2>
                   <div className="grid grid-cols-2 md:grid-cols-3 gap-6 font-bold tracking-tighter italic font-bold tracking-tighter italic font-bold tracking-tighter italic font-bold tracking-tighter italic font-bold tracking-tighter italic">
                      {chemicalComposition.map((item, i) => (
                         <div key={i} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-2xl border border-gray-100 font-bold tracking-tighter italic font-bold tracking-tighter italic font-bold tracking-tighter italic">
                            <p className="text-xs text-gray-500 uppercase font-bold tracking-tighter italic italic font-bold tracking-tighter italic font-bold tracking-tighter italic">{item.element}</p>
                            <p className="text-xl font-black text-navy-primary dark:text-gold-primary italic italic font-bold tracking-tighter italic font-bold tracking-tighter italic">{item.value}</p>
                         </div>
                      ))}
                   </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-100 font-bold tracking-tighter italic font-bold tracking-tighter italic font-bold tracking-tighter italic font-bold tracking-tighter italic">
                   <h2 className="text-3xl font-bold text-navy-primary dark:text-gray-100 mb-6 border-l-4 border-gold-primary pl-4 font-bold tracking-tighter italic italic font-bold tracking-tighter italic font-bold tracking-tighter italic font-bold tracking-tighter italic">Mechanical Evolution</h2>
                   <div className="space-y-4 font-bold tracking-tighter italic font-bold tracking-tighter italic font-bold tracking-tighter italic text-sm">
                      {mechanicalProperties.map((prop, i) => (
                         <div key={i} className="flex justify-between items-center p-3 border-b dark:border-gray-700 font-bold tracking-tighter italic font-bold tracking-tighter italic font-bold tracking-tighter italic font-bold tracking-tighter italic font-bold tracking-tighter italic">
                            <span className="text-gray-500 italic font-bold tracking-tighter italic italic font-bold tracking-tighter italic font-bold tracking-tighter italic font-bold tracking-tighter italic">{prop.property}</span>
                            <span className="font-bold text-navy-primary dark:text-gold-primary italic italic font-bold tracking-tighter italic font-bold tracking-tighter italic">{prop.value}</span>
                         </div>
                      ))}
                   </div>
                </div>
             </div>
          </div>
        </section>

        <section className="py-16 bg-white dark:bg-gray-800 font-bold tracking-tighter italic font-bold tracking-tighter italic">
           <div className="container mx-auto px-4 font-bold tracking-tighter italic font-bold tracking-tighter italic font-bold tracking-tighter italic">
              <h2 className="text-3xl font-bold text-center text-navy-primary dark:text-gray-100 mb-12 italic font-bold tracking-tighter italic font-bold tracking-tighter italic font-bold tracking-tighter italic">Global Standards Map</h2>
              <div className="overflow-x-auto font-bold tracking-tighter italic font-bold tracking-tighter italic font-bold tracking-tighter italic font-bold tracking-tighter italic">
                 <table className="w-full text-left font-bold tracking-tighter italic font-bold tracking-tighter italic font-bold tracking-tighter italic font-bold tracking-tighter italic">
                    <thead>
                       <tr className="bg-navy-primary text-white italic font-bold tracking-tighter italic font-bold tracking-tighter italic font-bold tracking-tighter italic font-bold tracking-tighter italic">
                          <th className="p-4 rounded-tl-xl italic font-bold tracking-tighter italic font-bold tracking-tighter italic font-bold tracking-tighter italic font-bold tracking-tighter italic">Standard</th>
                          <th className="p-4 rounded-tr-xl italic font-bold tracking-tighter italic font-bold tracking-tighter italic font-bold tracking-tighter italic font-bold tracking-tighter italic">Designation</th>
                       </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-gray-700 font-bold tracking-tighter italic">
                       {equivalentGrades.map((eq, i) => (
                          <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-bold tracking-tighter italic">
                             <td className="p-4 text-gray-500 italic font-bold tracking-tighter italic font-bold tracking-tighter italic font-bold tracking-tighter italic font-bold tracking-tighter italic">{eq.country}</td>
                             <td className="p-4 font-extrabold text-navy-primary dark:text-gold-primary italic font-bold tracking-tighter italic font-bold tracking-tighter italic font-bold tracking-tighter italic font-bold tracking-tighter italic">{eq.grade}</td>
                          </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </div>
        </section>
      </div>
    </>
  );
}


