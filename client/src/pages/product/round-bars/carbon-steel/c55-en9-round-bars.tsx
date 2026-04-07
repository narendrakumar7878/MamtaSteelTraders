import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft, ArrowRight, Phone, Mail, CheckCircle, Shield, Award, Activity, Microscope } from "lucide-react";
import { Link } from "wouter";

export default function GradeC55RoundBars() {
  const chemicalComposition = [
    { element: "Carbon (C)", value: "0.50 – 0.60%" },
    { element: "Manganese (Mn)", value: "0.50 – 0.90%" },
    { element: "Silicon (Si)", value: "0.05 – 0.35%" },
    { element: "Sulphur (S)", value: "0.045% max" },
    { element: "Phosphorus (P)", value: "0.040% max" }
  ];

  const mechanicalProperties = [
    { property: "Tensile Strength", value: "700 – 850 MPa" },
    { property: "Yield Strength", value: "355 MPa min" },
    { property: "Hardness (HB)", value: "201 – 255" },
    { property: "Impact Strength", value: "20 J min" }
  ];

  const equivalentGrades = [
    { country: "India (IS)", grade: "C55 | EN9" },
    { country: "European (EN)", grade: "1.0535 / C55" },
    { country: "USA (AISI/SAE)", grade: "1055" },
    { country: "Japan (JIS)", grade: "S55C" },
    { country: "British (BS)", grade: "070M55" }
  ];

  return (
    <>
      <ProductSEO
        title="C55 Round Bars | EN9 | 1055 Steel | High Carbon | Mamta Steel Traders"
        description="Premium C55 Carbon Steel round bars. High hardness and tensile strength. Equivalent to EN9, AISI 1055. Ideal for sprocket wheels, cylinders, and machine tools. Mumbai Stockist."
        keywords="C55 round bar, EN9 steel, 1055 carbon steel, 070M55 steel, high carbon steel Mumbai, engineering tool steel"
        canonicalUrl="/product/round-bars/carbon-steel/c55-en9-round-bars"
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 font-bold tracking-tighter italic">
        {/* Breadcrumb Navigation */}
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 font-bold tracking-tighter italic">
           <div className="container mx-auto px-4 py-4 font-bold tracking-tighter italic">
              <nav className="flex items-center space-x-2 text-sm flex-wrap gap-y-1 font-bold tracking-tighter italic">
                 <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary transition-all font-bold tracking-tighter italic">Home</Link>
                 <ArrowRight className="w-4 h-4 text-gray-400 font-bold tracking-tighter italic font-bold tracking-tighter italic" />
                 <Link href="/product/round-bars/round-bars" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary transition-all font-bold tracking-tighter italic">Round Bars</Link>
                 <ArrowRight className="w-4 h-4 text-gray-400 font-bold tracking-tighter italic font-bold tracking-tighter italic" />
                 <Link href="/product/round-bars/carbon-steel" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary transition-all font-bold tracking-tighter italic">Carbon Steel</Link>
                 <ArrowRight className="w-4 h-4 text-gray-400 font-bold tracking-tighter italic font-bold tracking-tighter italic" />
                 <span className="text-navy-primary dark:text-gold-primary font-bold italic font-bold tracking-tighter italic">C55 / EN9 Grade</span>
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
          <div className="container mx-auto px-4 relative z-10 font-bold tracking-tighter italic italic">
             <div className="max-w-4xl font-bold tracking-tighter italic italic font-bold tracking-tighter italic">
                <span className="bg-gold-primary text-navy-primary px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-6 inline-block font-bold tracking-tighter italic italic font-bold tracking-tighter italic">High Strength Tooling Steel</span>
                <h1 className="text-5xl md:text-6xl font-extrabold mb-6 italic italic italic italic italic font-bold tracking-tighter italic font-bold tracking-tighter italic">C55 / EN9 Round Bars</h1>
                <p className="text-xl text-gray-200 mb-8 leading-relaxed italic italic font-bold tracking-tighter italic font-bold tracking-tighter italic">Engineered for components requiring high surface hardness and tensile strength, delivering exceptional wear resistance in high-stress environments.</p>
                <div className="flex flex-wrap gap-4 font-bold tracking-tighter italic font-bold tracking-tighter italic">
                   <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-8 py-3 rounded-xl font-bold transition-all shadow-xl hover:scale-105 italic italic italic">Check Today's Prices</Link>
                   <a href="tel:+919819322576" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3 rounded-xl font-bold transition-all backdrop-blur-sm italic italic italic italic font-bold tracking-tighter italic"><Phone className="w-5 h-5 inline mr-2" /> Technical Support</a>
                </div>
             </div>
          </div>
        </section>

        <section className="py-16 font-bold tracking-tighter italic font-bold tracking-tighter italic">
          <div className="container mx-auto px-4 font-bold tracking-tighter italic font-bold tracking-tighter italic">
             <div className="grid lg:grid-cols-3 gap-8 font-bold tracking-tighter italic">
                <div className="lg:col-span-2 space-y-12 font-bold tracking-tighter italic font-bold tracking-tighter italic font-bold tracking-tighter italic">
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-100 font-bold tracking-tighter italic">
                       <h2 className="text-3xl font-bold text-navy-primary dark:text-gray-100 mb-6 border-l-4 border-gold-primary pl-4 font-bold tracking-tighter italic italic font-bold tracking-tighter italic">Chemical Composition</h2>
                       <div className="grid grid-cols-2 md:grid-cols-3 gap-6 font-bold tracking-tighter italic">
                          {chemicalComposition.map((item, i) => (
                             <div key={i} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-2xl border border-gray-100 font-bold tracking-tighter italic font-bold tracking-tighter italic">
                                <p className="text-xs text-gray-500 uppercase font-bold tracking-tighter italic italic font-bold tracking-tighter italic font-bold tracking-tighter italic">{item.element}</p>
                                <p className="text-xl font-black text-navy-primary dark:text-gold-primary italic italic font-bold tracking-tighter italic">{item.value}</p>
                             </div>
                          ))}
                       </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-100 font-bold tracking-tighter italic font-bold tracking-tighter italic">
                       <h2 className="text-3xl font-bold text-navy-primary dark:text-gray-100 mb-6 border-l-4 border-gold-primary pl-4 font-bold tracking-tighter italic italic font-bold tracking-tighter italic font-bold tracking-tighter italic">Equivalent Standards Map</h2>
                       <div className="overflow-x-auto font-bold tracking-tighter italic">
                          <table className="w-full text-left font-bold tracking-tighter italic font-bold tracking-tighter italic">
                             <thead>
                                <tr className="bg-navy-primary text-white italic italic font-bold tracking-tighter italic italic">
                                   <th className="p-4 rounded-tl-xl text-xs uppercase italic italic font-bold font-bold tracking-tighter italic">Region / Standard</th>
                                   <th className="p-4 rounded-tr-xl text-xs uppercase italic italic font-bold font-bold tracking-tighter italic">Grade Equivalent</th>
                                </tr>
                             </thead>
                             <tbody className="divide-y divide-gray-100 dark:divide-gray-700 font-bold tracking-tighter italic">
                                {equivalentGrades.map((eq, i) => (
                                   <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-bold tracking-tighter italic">
                                      <td className="p-4 text-gray-500 italic italic font-bold tracking-tighter italic">{eq.country}</td>
                                      <td className="p-4 font-bold text-navy-primary dark:text-gold-primary italic italic font-bold tracking-tighter italic">{eq.grade}</td>
                                   </tr>
                                ))}
                             </tbody>
                          </table>
                       </div>
                    </div>
                </div>

                <div className="space-y-6 font-bold tracking-tighter italic font-bold tracking-tighter italic">
                   <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-100 font-bold tracking-tighter italic">
                      <h3 className="text-xl font-bold mb-6 text-navy-primary dark:text-gray-100 italic italic font-bold tracking-tighter italic">Key Applications</h3>
                      <div className="space-y-4 font-bold tracking-tighter italic">
                         {["Sprocket Wheels", "Hydraulic Cylinders", "Machine Tool Parts", "Pulleys & Castors", "Large Axles", "General Forgings"].map((app, i) => (
                            <div key={i} className="flex items-center text-sm p-3 bg-gray-50 dark:bg-gray-700 rounded-xl border border-gray-100 font-bold tracking-tighter italic">
                               <ArrowRight className="w-4 h-4 text-gold-primary mr-3 italic italic font-bold tracking-tighter italic" /> {app}
                            </div>
                         ))}
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </section>
      </div>
    </>
  );
}


