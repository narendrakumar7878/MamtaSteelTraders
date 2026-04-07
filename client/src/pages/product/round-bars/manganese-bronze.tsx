import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft, ArrowRight, Shield, Award, CheckCircle, Zap } from "lucide-react";
import { Link } from "wouter";
import copperBar from "@/assets/COPPER MAMTA STEEL TRADERS.jpg";

export default function ManganeseBronzeHub() {
  const manganeseBronzeGrades = [
    {
      title: "Manganese Bronze C67500",
      grade: "UNS C67500",
      description: "Standard high-strength manganese bronze for shafting and pump rods. High corrosion resistance and good machinability.",
      link: "/product/round-bars/manganese-bronze/c67500-manganese-bronze",
      specs: "ASTM B138, SAE J461",
      image: copperBar
    },
    {
      title: "High-Strength Manganese Bronze C86300",
      grade: "UNS C86300",
      description: "Extra heavy-duty bronze with steel-like strength. Ideal for high-load bearings, bushings, and hydraulic systems.",
      link: "/product/round-bars/manganese-bronze/c86300-manganese-bronze",
      specs: "ASTM B505, SAE 430B",
      image: copperBar
    }
  ];

  const features = [
    { title: "Exceptional Strength", desc: "Tensile strength levels comparable to low-alloy steels." },
    { title: "Wear Resistance", desc: "Outstanding performance in high-friction, heavy-load environments." },
    { title: "Marine Ready", desc: "Inherent resistance to seawater corrosion and impingement." },
    { title: "Non-Magnetic", desc: "Safe for sensitive electronic and medical instrumentation." }
  ];

  return (
    <>
      <ProductSEO
        title="Manganese Bronze Round Bars - C67500, C86300 | Pan India Supplier | Mamta Steel Traders"
        description="Premium high-strength Manganese Bronze round bars. Manufacturer & supplier of C67500 (ASTM B138) and C86300 (SAE 430B). Zero-maintenance marine and load-bearing solutions."
        keywords="manganese bronze round bars mumbai, c67500 bronze supplier india, c86300 high strength bronze, manganese bronze price pan india, marine grade bronze bars"
        canonicalUrl="/product/round-bars/manganese-bronze"
      />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 font-bold tracking-tighter italic text-black">
        {/* Breadcrumb & Navigation */}
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4 py-4 font-black">
            <nav className="flex items-center space-x-2 text-sm flex-wrap text-black font-black uppercase italic font-black">
              <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary underline decoration-navy-primary/20 transition-colors italic tracking-tighter uppercase font-black italic">Home</Link>
              <ArrowRight className="w-4 h-4 text-gray-400 font-extrabold" />
              <Link href="/product/round-bars/round-bars" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary underline decoration-navy-primary/20 transition-colors italic tracking-tighter uppercase font-black italic font-black">Round Bars</Link>
              <ArrowRight className="w-4 h-4 text-gray-400 font-extrabold" />
              <span className="text-navy-primary dark:text-gold-primary underline decoration-gold-primary decoration-2 underline-offset-4 italic tracking-tighter uppercase font-black italic">Manganese Bronze Series</span>
            </nav>
          </div>
        </div>
        <div className="container mx-auto px-4 py-4">
           <Link href="/product/round-bars/round-bars" className="inline-flex items-center text-navy-primary dark:text-gold-primary hover:underline font-black uppercase text-xs italic tracking-tighter italic font-black">
              <ArrowLeft className="w-3 h-3 mr-2 font-black" /> Back to Round Bars
           </Link>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-br from-navy-primary via-navy-secondary to-slate-800 text-white py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <span className="bg-gold-primary text-navy-primary px-5 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-6 inline-block shadow-lg italic">The Steel-Strength Bronze</span>
              <h1 className="text-5xl md:text-7xl font-black mb-6 italic tracking-tighter uppercase leading-none underline decoration-gold-primary decoration-4 underline-offset-[12px]">Manganese Bronze</h1>
              <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto opacity-90 leading-relaxed italic uppercase tracking-tighter">Engineered for extreme loads and high-velocity friction. The perfect fusion of copper-base corrosion resistance and steel-like tensile strength.</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/contact" className="bg-gold-primary hover:bg-white text-navy-primary px-10 py-4 rounded-2xl font-black transition-all shadow-xl italic tracking-tighter uppercase text-xl">Get Technical Batch Quote</Link>
              </div>
            </div>
          </div>
          <Zap className="absolute right-[-10%] bottom-[-10%] w-[500px] h-[500px] text-white/5 pointer-events-none rotate-12" />
        </section>

        {/* Grade Selection */}
        <section className="py-20">
          <div className="container mx-auto px-4 font-black uppercase tracking-tighter italic text-black">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                 <h2 className="text-4xl font-black text-navy-primary dark:text-white mb-6 italic tracking-tighter uppercase underline decoration-gold-primary decoration-4 underline-offset-8">Available Manganese Bronze Grades</h2>
                 <p className="text-lg text-gray-500 dark:text-gray-400 font-medium italic tracking-tighter uppercase">Select a specific grade to view deep technical specifications, metallurgical profiles, and industrial compliance.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 text-black">
                {manganeseBronzeGrades.map((grade, index) => (
                  <Link 
                    key={index} 
                    href={grade.link}
                    className="group bg-white dark:bg-gray-800 rounded-[2.5rem] shadow-2xl hover:shadow-gold-primary/20 transition-all duration-500 border border-gray-100 dark:border-gray-700 overflow-hidden transform hover:-translate-y-4 cursor-pointer"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img src={grade.image} alt={grade.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                      <div className="absolute top-6 right-6 bg-navy-primary text-gold-primary px-6 py-2 rounded-2xl text-xs font-black shadow-2xl border border-gold-primary/20 italic tracking-tighter uppercase">
                        {grade.grade}
                      </div>
                    </div>
                    <div className="p-10">
                      <h3 className="text-3xl font-black text-navy-primary dark:text-white mb-4 italic tracking-tighter uppercase group-hover:text-gold-primary transition-colors py-1 underline decoration-gold-primary/20">{grade.title}</h3>
                      <p className="text-gray-500 dark:text-gray-400 mb-6 italic tracking-tighter uppercase leading-relaxed font-semibold h-20 overflow-hidden line-clamp-3">
                        {grade.description}
                      </p>
                      <div className="flex items-center justify-between pt-8 border-t border-gray-100 dark:border-gray-700">
                        <span className="text-navy-primary dark:text-gold-primary font-black uppercase text-xs italic tracking-tighter underline">Specs: {grade.specs}</span>
                        <div className="bg-navy-primary group-hover:bg-gold-primary text-white group-hover:text-navy-primary p-3 rounded-xl transition-all shadow-lg transform group-hover:rotate-12">
                          <ArrowRight className="w-6 h-6" />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Feature Highlights */}
        <section className="py-20 bg-navy-primary text-white overflow-hidden relative font-black uppercase tracking-tighter italic">
          <div className="container mx-auto px-4 relative z-10 text-white">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-white">
              {features.map((feature, i) => (
                <div key={i} className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-all group shadow-sm hover:shadow-gold-primary/10">
                   <CheckCircle className="w-10 h-10 text-gold-primary mb-4 group-hover:scale-110 transition-transform shadow-xl" />
                   <h4 className="text-xl font-black mb-2 italic tracking-tighter uppercase underline decoration-gold-primary/30 py-1 transition-all group-hover:decoration- gold-primary">{feature.title}</h4>
                   <p className="text-sm text-gray-400 italic tracking-tighter uppercase font-bold group-hover:text-white transition-colors">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <Shield className="absolute left-[-5%] top-[-5%] w-96 h-96 text-white/5 pointer-events-none rotate-45" />
        </section>

        {/* Footer CTA */}
        <section className="py-20 bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700 text-center relative overflow-hidden font-black uppercase tracking-tighter italic text-black">
           <div className="container mx-auto px-4 relative z-10 text-black">
              <h2 className="text-4xl font-black text-navy-primary dark:text-white mb-6 italic tracking-tighter uppercase underline decoration-gold-primary decoration-4 underline-offset-8">Manganese Bronze Stockist India</h2>
              <p className="text-lg text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto font-medium italic tracking-tighter uppercase">Mamta Steel Traders delivers ready-to-dispatch Manganese Bronze bars in Mumbai, Pune, Gujarat, and global industrial hubs. Precision cut-to-size and metallurgical certification included.</p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                 <Link href="/contact" className="bg-navy-primary text-white px-12 py-5 rounded-3xl font-black hover:bg-navy-secondary transition-all shadow-xl italic tracking-tighter uppercase text-xl">Consult Material Expert</Link>
              </div>
           </div>
           <Award className="absolute right-[-5%] bottom-[-5%] w-64 h-64 text-gray-100 dark:text-gray-700 rotate-12 pointer-events-none opacity-50" />
        </section>
      </div>
    </>
  );
}


