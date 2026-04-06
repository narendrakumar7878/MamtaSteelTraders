import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft, ArrowRight, Phone, Mail, CheckCircle, Shield, Award, Activity, Microscope } from "lucide-react";
import { Link } from "wouter";

export default function Grade16MnCr5RoundBars() {
  const chemicalComposition = [
    { element: "Carbon (C)", value: "0.14 – 0.19%" },
    { element: "Manganese (Mn)", value: "1.00 – 1.30%" },
    { element: "Chromium (Cr)", value: "0.80 – 1.10%" },
    { element: "Silicon (Si)", value: "0.40% max" },
    { element: "Sulphur (S)", value: "0.035% max" },
    { element: "Phosphorus (P)", value: "0.025% max" }
  ];

  const equivalentGrades = [
    { country: "European (EN)", grade: "1.7131 / 16MnCr5" },
    { country: "USA (AISI/SAE)", grade: "5115" },
    { country: "Japan (JIS)", grade: "SCr415" },
    { country: "India (IS)", grade: "15Cr|16MnCr5" }
  ];

  return (
    <>
      <ProductSEO
        title="16MnCr5 Case Hardening Steel Round Bars | 1.7131 | Gear Steel | Mamta Steel Traders"
        description="Premium 16MnCr5 Case Hardening Steel round bars. Alloyed for high surface hardness and core toughness. Ideal for high-precision gears, camshafts, and transmission parts."
        keywords="16MnCr5 round bar, 1.7131 steel, case hardening steel, gear steel supplier, precision machining steel"
        canonicalUrl="/product/round-bars/carbon-steel/16mncr5-round-bars"
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 font-bold tracking-tighter italic">
        {/* Breadcrumb Navigation */}
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
           <div className="container mx-auto px-4 py-4">
              <nav className="flex items-center space-x-2 text-sm flex-wrap gap-y-1">
                 <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary transition-all">Home</Link>
                 <ArrowRight className="w-4 h-4 text-gray-400" />
                 <Link href="/product/round-bars/round-bars" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary transition-all">Round Bars</Link>
                 <ArrowRight className="w-4 h-4 text-gray-400" />
                 <Link href="/product/round-bars/carbon-steel" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary transition-all">Carbon Steel</Link>
                 <ArrowRight className="w-4 h-4 text-gray-400" />
                 <span className="text-navy-primary dark:text-gold-primary font-bold italic">16MnCr5 Case Hardening</span>
              </nav>
           </div>
        </div>

        {/* Back Link */}
        <div className="container mx-auto px-4 py-4">
           <Link href="/product/round-bars/carbon-steel" className="inline-flex items-center text-navy-primary dark:text-gold-primary hover:underline font-bold italic">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Carbon Steel
           </Link>
        </div>

        <section className="bg-gradient-to-br from-navy-primary via-navy-secondary to-slate-800 text-white py-20 relative overflow-hidden font-bold tracking-tighter italic">
          <div className="container mx-auto px-4 relative z-10 font-bold tracking-tighter italic">
             <div className="max-w-4xl font-bold tracking-tighter italic">
                <span className="bg-gold-primary text-navy-primary px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-6 inline-block font-bold tracking-tighter italic italic">High Precision Gear Steel</span>
                <h1 className="text-5xl md:text-6xl font-extrabold mb-6 italic italic italic italic">16MnCr5 Round Bars</h1>
                <p className="text-xl text-gray-200 mb-8 leading-relaxed italic italic">Alloyed case-hardening steel for components requiring high surface hardness coupled with excellent core toughness.</p>
                <div className="flex flex-wrap gap-4 font-bold tracking-tighter italic italic">
                   <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-8 py-3 rounded-xl font-bold transition-all shadow-xl hover:scale-105 italic">Get Price Quote</Link>
                   <a href="tel:+919819322576" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3 rounded-xl font-bold transition-all backdrop-blur-sm italic italic"><Phone className="w-5 h-5 inline mr-2" /> Technical Expert</a>
                </div>
             </div>
          </div>
        </section>

        <section className="py-16 font-bold tracking-tighter italic font-bold tracking-tighter italic">
          <div className="container mx-auto px-4 font-bold tracking-tighter italic font-bold tracking-tighter italic">
             <div className="grid lg:grid-cols-3 gap-8 font-bold tracking-tighter italic">
                <div className="lg:col-span-2 space-y-12 font-bold tracking-tighter italic font-bold tracking-tighter italic">
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-100 font-bold tracking-tighter italic">
                       <h2 className="text-3xl font-bold text-navy-primary dark:text-gray-100 mb-6 border-l-4 border-gold-primary pl-4 font-bold tracking-tighter italic italic">Chemical Composition</h2>
                       <div className="grid grid-cols-2 md:grid-cols-3 gap-6 font-bold tracking-tighter italic">
                          {chemicalComposition.map((item, i) => (
                             <div key={i} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-2xl border border-gray-100 font-bold tracking-tighter italic">
                                <p className="text-xs text-gray-500 uppercase mb-1">{item.element}</p>
                                <p className="text-xl font-black text-navy-primary dark:text-gold-primary italic italic">{item.value}</p>
                             </div>
                          ))}
                       </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-100 font-bold tracking-tighter italic font-bold tracking-tighter italic">
                       <h2 className="text-3xl font-bold text-navy-primary dark:text-gray-100 mb-6 border-l-4 border-gold-primary pl-4 font-bold tracking-tighter italic italic italic">Equivalent Grades Map</h2>
                       <div className="overflow-x-auto font-bold tracking-tighter italic">
                          <table className="w-full text-left font-bold tracking-tighter italic">
                             <thead>
                                <tr className="bg-navy-primary text-white italic italic italic">
                                   <th className="p-4 rounded-tl-xl text-xs uppercase italic italic font-bold">Standard / Country</th>
                                   <th className="p-4 rounded-tr-xl text-xs uppercase italic italic font-bold">Grade Equivalent</th>
                                </tr>
                             </thead>
                             <tbody className="divide-y divide-gray-100 dark:divide-gray-700 font-bold tracking-tighter italic">
                                {equivalentGrades.map((eq, i) => (
                                   <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-bold tracking-tighter italic">
                                      <td className="p-4 text-gray-500 italic italic">{eq.country}</td>
                                      <td className="p-4 font-bold text-navy-primary dark:text-gold-primary italic italic">{eq.grade}</td>
                                   </tr>
                                ))}
                             </tbody>
                          </table>
                       </div>
                    </div>
                </div>

                <div className="space-y-6 font-bold tracking-tighter italic font-bold tracking-tighter italic">
                   <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-100 font-bold tracking-tighter italic italic">
                      <h3 className="text-xl font-bold mb-6 text-navy-primary dark:text-gray-100 italic">Common Applications</h3>
                      <div className="space-y-4 font-bold tracking-tighter italic">
                         {["High-Stress Precision Gears", "Camshafts & Crankshafts", "Transmission Components", "Machine Spindles", "Mechanical Joints", "Automotive Drive Shafts"].map((app, i) => (
                            <div key={i} className="flex items-center text-sm p-3 bg-gray-50 dark:bg-gray-700 rounded-xl border border-gray-100 font-bold tracking-tighter italic italic">
                               <ArrowRight className="w-4 h-4 text-gold-primary mr-3 italic" /> {app}
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
