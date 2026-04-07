import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft, ArrowRight, Phone, Mail, CheckCircle, Shield, Award, Activity, Microscope } from "lucide-react";
import { Link } from "wouter";

export default function GradeEN8RoundBars() {
  const chemicalComposition = [
    { element: "Carbon (C)", value: "0.36 – 0.44%" },
    { element: "Manganese (Mn)", value: "0.60 – 1.00%" },
    { element: "Silicon (Si)", value: "0.10 – 0.40%" },
    { element: "Sulphur (S)", value: "0.050% max" },
    { element: "Phosphorus (P)", value: "0.050% max" }
  ];

  const mechanicalProperties = [
    { property: "Tensile Strength", value: "550 – 700 MPa" },
    { property: "Yield Strength", value: "280 MPa min" },
    { property: "Elongation", value: "16% min" },
    { property: "Hardness (HB)", value: "201 – 255" }
  ];

  const equivalentGrades = [
    { country: "British (BS)", grade: "080M40 | EN8" },
    { country: "USA (AISI/SAE)", grade: "1040" },
    { country: "European (EN)", grade: "1.1186 / C40E" },
    { country: "Japan (JIS)", grade: "S40C" },
    { country: "German (DIN)", grade: "CK40" }
  ];

  return (
    <>
      <ProductSEO
        title="EN8 Round Bars | 080M40 | Medium Carbon Steel | Mamta Steel Traders"
        description="High-quality EN8 Medium Carbon Steel round bars. Excellent machinability and reasonable tensile strength. Equivalent to 080M40, AISI 1040. Stockist and supplier in Mumbai."
        keywords="EN8 round bar, 080M40 steel, EN8 steel properties, medium carbon steel Mumbai, EN8 bright bars price"
        canonicalUrl="/product/round-bars/carbon-steel/en8-round-bars"
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 font-bold tracking-tighter italic">
        {/* Breadcrumb Navigation */}
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 font-bold tracking-tighter italic">
           <div className="container mx-auto px-4 py-4 font-bold tracking-tighter italic">
              <nav className="flex items-center space-x-2 text-sm flex-wrap gap-y-1 font-bold tracking-tighter italic">
                 <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary transition-all font-bold tracking-tighter italic">Home</Link>
                 <ArrowRight className="w-4 h-4 text-gray-400 font-bold tracking-tighter italic font-bold tracking-tighter italic font-bold tracking-tighter italic" />
                 <Link href="/product/round-bars/round-bars" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary transition-all font-bold tracking-tighter italic">Round Bars</Link>
                 <ArrowRight className="w-4 h-4 text-gray-400 font-bold tracking-tighter italic font-bold tracking-tighter italic font-bold tracking-tighter italic" />
                 <Link href="/product/round-bars/carbon-steel" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary transition-all font-bold tracking-tighter italic">Carbon Steel</Link>
                 <ArrowRight className="w-4 h-4 text-gray-400 font-bold tracking-tighter italic font-bold tracking-tighter italic font-bold tracking-tighter italic" />
                 <span className="text-navy-primary dark:text-gold-primary font-bold italic font-bold tracking-tighter italic">EN8 Grade Steel</span>
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
          <div className="container mx-auto px-4 relative z-10 font-bold tracking-tighter italic italic font-bold tracking-tighter italic">
             <div className="max-w-4xl font-bold tracking-tighter italic italic font-bold tracking-tighter italic font-bold tracking-tighter italic">
                <span className="bg-gold-primary text-navy-primary px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-6 inline-block font-bold tracking-tighter italic italic font-bold tracking-tighter italic">Standard Engineering Carbon Steel</span>
                <h1 className="text-5xl md:text-6xl font-extrabold mb-6 italic italic italic italic italic font-bold tracking-tighter italic font-bold tracking-tighter italic font-bold tracking-tighter italic">EN8 Round Bars</h1>
                <p className="text-xl text-gray-200 mb-8 leading-relaxed italic italic font-bold tracking-tighter italic font-bold tracking-tighter italic">An unalloyed medium carbon steel grade with good tensile strength, commonly used for axles, shafts, and other general engineering applications.</p>
                <div className="flex flex-wrap gap-4 font-bold tracking-tighter italic font-bold tracking-tighter italic">
                   <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-8 py-3 rounded-xl font-bold transition-all shadow-xl hover:scale-105 italic italic italic">Request Quote</Link>
                   <a href="tel:+919819322576" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3 rounded-xl font-bold transition-all backdrop-blur-sm italic italic italic italic font-bold tracking-tighter italic"><Phone className="w-5 h-5 inline mr-2" /> Technical Expert</a>
                </div>
             </div>
          </div>
        </section>

        <section className="py-16 font-bold tracking-tighter italic font-bold tracking-tighter italic">
          <div className="container mx-auto px-4 font-bold tracking-tighter italic font-bold tracking-tighter italic">
             <div className="grid lg:grid-cols-2 gap-12 font-bold tracking-tighter italic font-bold tracking-tighter italic">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-100 font-bold tracking-tighter italic">
                   <h2 className="text-3xl font-bold text-navy-primary dark:text-gray-100 mb-6 border-l-4 border-gold-primary pl-4 font-bold tracking-tighter italic italic font-bold tracking-tighter italic font-bold tracking-tighter italic font-bold tracking-tighter italic">Chemical Composition</h2>
                   <div className="grid grid-cols-2 md:grid-cols-3 gap-6 font-bold tracking-tighter italic">
                      {chemicalComposition.map((item, i) => (
                         <div key={i} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-2xl border border-gray-100 font-bold tracking-tighter italic font-bold tracking-tighter italic">
                            <p className="text-xs text-gray-500 uppercase font-bold tracking-tighter italic italic font-bold tracking-tighter italic font-bold tracking-tighter italic font-bold tracking-tighter italic">{item.element}</p>
                            <p className="text-xl font-black text-navy-primary dark:text-gold-primary italic italic font-bold tracking-tighter italic font-bold tracking-tighter italic">{item.value}</p>
                         </div>
                      ))}
                   </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-100 font-bold tracking-tighter italic font-bold tracking-tighter italic">
                   <h2 className="text-3xl font-bold text-navy-primary dark:text-gray-100 mb-6 border-l-4 border-gold-primary pl-4 font-bold tracking-tighter italic italic font-bold tracking-tighter italic font-bold tracking-tighter italic font-bold tracking-tighter italic">Mechanical Specifications</h2>
                   <div className="space-y-4 font-bold tracking-tighter italic font-bold tracking-tighter italic">
                      {mechanicalProperties.map((prop, i) => (
                         <div key={i} className="flex justify-between items-center p-3 border-b dark:border-gray-700 font-bold tracking-tighter italic font-bold tracking-tighter italic text-sm">
                            <span className="text-gray-500 italic font-bold tracking-tighter italic italic font-bold tracking-tighter italic font-bold tracking-tighter italic">{prop.property}</span>
                            <span className="font-bold text-navy-primary dark:text-gold-primary italic italic font-bold tracking-tighter italic italic font-bold tracking-tighter italic">{prop.value}</span>
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


