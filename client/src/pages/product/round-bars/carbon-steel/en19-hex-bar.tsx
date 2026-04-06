import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft, ArrowRight, Phone, Mail, CheckCircle, Shield, Award, Activity, Microscope, Hexagon } from "lucide-react";
import { Link } from "wouter";

export default function GradeEN19HexBar() {
  const chemicalComposition = [
    { element: "Carbon (C)", value: "0.35 – 0.45%" },
    { element: "Chromium (Cr)", value: "0.90 – 1.50%" },
    { element: "Molybdenum (Mo)", value: "0.20 – 0.40%" },
    { element: "Manganese (Mn)", value: "0.50 – 0.80%" },
    { element: "Silicon (Si)", value: "0.10 – 0.35%" },
    { element: "Sulphur (S)", value: "0.050% max" }
  ];

  const equivalentGrades = [
    { country: "British (BS)", grade: "708M40 | EN19" },
    { country: "USA (AISI/SAE)", grade: "4140" },
    { country: "European (EN)", grade: "1.7225 / 42CrMo4" },
    { country: "Japan (JIS)", grade: "SCM440" },
    { country: "German (DIN)", grade: "42CrMo4" }
  ];

  return (
    <>
      <ProductSEO
        title="EN19 Hex Bars | 708M40 | 4140 Alloy Steel Hex | Mamta Steel Traders"
        description="Premium EN19 Alloy Steel Hexagonal bars. High-strength chromoly steel with excellent fatigue and shock resistance. Equivalent to AISI 4140, 708M40. Ideal for industrial fasteners and shafts."
        keywords="EN19 hex bar, EN19 hexagonal steel, 4140 hex bar Mumbai, 708M40 steel hex, chromoly hex bar supplier"
        canonicalUrl="/product/round-bars/carbon-steel/en19-hex-bar"
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 font-bold tracking-tighter italic">
        {/* Breadcrumb Navigation */}
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 font-bold tracking-tighter italic">
           <div className="container mx-auto px-4 py-4 font-bold tracking-tighter italic font-bold tracking-tighter italic font-bold tracking-tighter italic">
              <nav className="flex items-center space-x-2 text-sm flex-wrap gap-y-1 font-bold tracking-tighter italic font-bold tracking-tighter italic font-bold tracking-tighter italic font-bold tracking-tighter italic">
                 <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary transition-all font-bold tracking-tighter italic">Home</Link>
                 <ArrowRight className="w-4 h-4 text-gray-400 font-bold tracking-tighter italic font-bold tracking-tighter italic font-bold tracking-tighter italic" />
                 <Link href="/product/round-bars/round-bars" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary transition-all font-bold tracking-tighter italic font-bold tracking-tighter italic">Round Bars</Link>
                 <ArrowRight className="w-4 h-4 text-gray-400 font-bold tracking-tighter italic font-bold tracking-tighter italic font-bold tracking-tighter italic" />
                 <Link href="/product/round-bars/carbon-steel" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary transition-all font-bold tracking-tighter italic font-bold tracking-tighter italic">Carbon Steel</Link>
                 <ArrowRight className="w-4 h-4 text-gray-400 font-bold tracking-tighter italic font-bold tracking-tighter italic font-bold tracking-tighter italic" />
                 <span className="text-navy-primary dark:text-gold-primary font-bold italic font-bold tracking-tighter italic font-bold tracking-tighter italic font-bold tracking-tighter italic">EN19 Hex Bar</span>
              </nav>
           </div>
        </div>

        {/* Back Link */}
        <div className="container mx-auto px-4 py-4 font-bold tracking-tighter italic">
           <Link href="/product/round-bars/carbon-steel" className="inline-flex items-center text-navy-primary dark:text-gold-primary hover:underline font-bold italic font-bold tracking-tighter italic">
              <ArrowLeft className="w-4 h-4 mr-2 italic font-bold tracking-tighter italic font-bold tracking-tighter italic" /> Back to Carbon Steel
           </Link>
        </div>

        <section className="bg-gradient-to-br from-navy-primary via-navy-secondary to-slate-800 text-white py-20 relative overflow-hidden font-bold tracking-tighter italic">
          <div className="container mx-auto px-4 relative z-10 font-bold tracking-tighter italic font-bold tracking-tighter italic font-bold tracking-tighter italic">
             <div className="max-w-4xl font-bold tracking-tighter italic font-bold tracking-tighter italic font-bold tracking-tighter italic font-bold tracking-tighter italic">
                <span className="bg-gold-primary text-navy-primary px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-6 inline-block font-bold tracking-tighter italic italic font-bold tracking-tighter italic">Precision Hexagonal Alloy Steel</span>
                <h1 className="text-5xl md:text-6xl font-extrabold mb-6 italic italic italic italic italic font-bold tracking-tighter italic font-bold tracking-tighter italic font-bold tracking-tighter italic">EN19 Hex Bars</h1>
                <p className="text-xl text-gray-200 mb-8 leading-relaxed italic italic font-bold tracking-tighter italic font-bold tracking-tighter italic">High-tensile hexagonal sections engineered for heavy-duty industrial fasteners, shafts, and mechanical components requiring superior shock resistance.</p>
                <div className="flex flex-wrap gap-4 font-bold tracking-tighter italic font-bold tracking-tighter italic font-bold tracking-tighter italic font-bold tracking-tighter italic">
                   <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-8 py-3 rounded-xl font-bold transition-all shadow-xl hover:scale-105 italic italic italic">Get Hex Bar Quote</Link>
                   <a href="tel:+919819322576" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3 rounded-xl font-bold transition-all backdrop-blur-sm italic italic italic italic font-bold tracking-tighter italic font-bold tracking-tighter italic"><Phone className="w-5 h-5 inline mr-2 italic font-bold tracking-tighter italic" /> Technical Expert</a>
                </div>
             </div>
          </div>
        </section>

        <section className="py-16 font-bold tracking-tighter italic font-bold tracking-tighter italic">
          <div className="container mx-auto px-4 font-bold tracking-tighter italic font-bold tracking-tighter italic">
             <div className="grid lg:grid-cols-2 gap-12 font-bold tracking-tighter italic font-bold tracking-tighter italic font-bold tracking-tighter italic">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-100 font-bold tracking-tighter italic">
                   <h2 className="text-3xl font-bold text-navy-primary dark:text-gray-100 mb-6 border-l-4 border-gold-primary pl-4 font-bold tracking-tighter italic italic font-bold tracking-tighter italic font-bold tracking-tighter italic font-bold tracking-tighter italic font-bold tracking-tighter italic">Hexagonal Geometry & Steel Data</h2>
                   <div className="grid grid-cols-2 gap-6 font-bold tracking-tighter italic font-bold tracking-tighter italic font-bold tracking-tighter italic font-bold tracking-tighter italic">
                      <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-2xl border border-gray-100 font-bold tracking-tighter italic font-bold tracking-tighter italic">
                         <Hexagon className="w-8 h-8 text-gold-primary mb-2 italic font-bold tracking-tighter italic" />
                         <p className="text-xs text-gray-500 uppercase italic font-bold tracking-tighter italic">Geometry</p>
                         <p className="text-lg font-black text-navy-primary dark:text-gold-primary italic italic font-bold tracking-tighter italic">6-Sided Precision Hex</p>
                      </div>
                      <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-2xl border border-gray-100 font-bold tracking-tighter italic font-bold tracking-tighter italic">
                         <Microscope className="w-8 h-8 text-gold-primary mb-2 italic font-bold tracking-tighter italic" />
                         <p className="text-xs text-gray-500 uppercase italic font-bold tracking-tighter italic">Material</p>
                         <p className="text-lg font-black text-navy-primary dark:text-gold-primary italic italic font-bold tracking-tighter italic">EN19 / 4140 Alloy</p>
                      </div>
                   </div>
                   <h3 className="text-xl font-bold mt-8 mb-4 italic font-bold tracking-tighter italic font-bold tracking-tighter italic font-bold tracking-tighter italic">Chemical Composition (%)</h3>
                   <div className="grid grid-cols-2 md:grid-cols-3 gap-4 font-bold tracking-tighter italic">
                      {chemicalComposition.slice(0, 3).map((item, i) => (
                         <div key={i} className="bg-gray-50 dark:bg-gray-700 p-3 rounded-xl font-bold tracking-tighter italic font-bold tracking-tighter italic font-bold tracking-tighter italic">
                            <span className="text-xs text-gray-400 block font-bold tracking-tighter italic">{item.element}</span>
                            <span className="font-bold text-navy-primary dark:text-gold-primary italic font-bold tracking-tighter italic">{item.value}</span>
                         </div>
                      ))}
                   </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-100 font-bold tracking-tighter italic font-bold tracking-tighter italic font-bold tracking-tighter italic">
                   <h2 className="text-3xl font-bold text-navy-primary dark:text-gray-100 mb-6 border-l-4 border-gold-primary pl-4 font-bold tracking-tighter italic italic font-bold tracking-tighter italic font-bold tracking-tighter italic">Mechanical Specifications</h2>
                   <div className="space-y-4 font-bold tracking-tighter italic font-bold tracking-tighter italic font-bold tracking-tighter italic">
                      {equivalentGrades.map((eq, i) => (
                         <div key={i} className="flex justify-between items-center p-3 border-b dark:border-gray-700 font-bold tracking-tighter italic font-bold tracking-tighter italic text-sm">
                            <span className="text-gray-500 italic font-bold tracking-tighter italic italic font-bold tracking-tighter italic font-bold tracking-tighter italic font-bold tracking-tighter italic">{eq.country}</span>
                            <span className="font-bold text-navy-primary dark:text-gold-primary italic italic font-bold tracking-tighter italic font-bold tracking-tighter italic">{eq.grade}</span>
                         </div>
                      ))}
                   </div>
                </div>
             </div>
          </div>
        </section>
      </div>
    </>
  );
}
