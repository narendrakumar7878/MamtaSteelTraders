import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, CheckCircle, Shield, Award, Activity, Microscope, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function AB2RoundBars() {
  const chemicalComposition = [
    { element: "Copper (Cu)", value: "Remainder" },
    { element: "Aluminium (Al)", value: "8.5 – 11.0%" },
    { element: "Iron (Fe)", value: "3.5 – 5.5%" },
    { element: "Nickel (Ni)", value: "4.0 – 6.0%" },
    { element: "Manganese (Mn)", value: "1.5% max" }
  ];

  return (
    <>
      <ProductSEO
        title="AB2 Aluminium Bronze Round Bars | BS 1400 AB2 | Marine Propellers | Mamta Steel Traders"
        description="Premium AB2 Aluminium Bronze round bars. Exceptional resistance to seawater corrosion and cavitation. High strength and durability for marine engineering. BS 1400 AB2 certified."
        keywords="AB2 bronze, aluminium bronze round bars, BS 1400 AB2, marine propellers, cavitation resistant bronze"
        canonicalUrl="/product/round-bars/bronze/ab2-aluminium-bronze"
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Breadcrumb Navigation */}
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex items-center space-x-2 text-sm flex-wrap gap-y-1">
              <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary transition-colors">Home</Link>
              <ArrowRight className="w-4 h-4 text-gray-400" />
              <Link href="/product/round-bars/round-bars" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary transition-colors">All Round Bars</Link>
              <ArrowRight className="w-4 h-4 text-gray-400" />
              <Link href="/product/round-bars/bronze" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary transition-colors">Bronze</Link>
              <ArrowRight className="w-4 h-4 text-gray-400" />
              <span className="text-navy-primary dark:text-gold-primary font-medium">AB2 Round Bars</span>
            </nav>
          </div>
        </div>

        {/* Back Link */}
        <div className="container mx-auto px-4 py-4">
          <Link href="/product/round-bars/bronze" className="inline-flex items-center text-navy-primary dark:text-gold-primary hover:underline font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Bronze
          </Link>
        </div>

        <section className="bg-gradient-to-br from-navy-primary via-navy-secondary to-slate-800 text-white py-20 relative overflow-hidden font-bold tracking-tighter italic">

          <div className="container mx-auto px-4 relative z-10 font-bold tracking-tighter italic font-bold tracking-tighter italic">
            <div className="max-w-4xl font-bold tracking-tighter italic">
              <span className="bg-gold-primary text-navy-primary px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-6 inline-block font-bold tracking-tighter italic">Marine Engineering Bronze</span>
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6 font-bold tracking-tighter italic">AB2 Round Bars</h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed font-bold tracking-tighter italic">Top-tier aluminium bronze providing unparalleled resistance to seawater corrosion, cavitation, and erosion for the most demanding marine propulsion and pumping systems.</p>
              <div className="flex flex-wrap gap-4 font-bold tracking-tighter italic font-bold tracking-tighter italic">
                <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-8 py-3 rounded-xl font-bold transition-all shadow-xl hover:scale-105">Get Stock List</Link>
                <a href="tel:+919819322576" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3 rounded-xl font-bold transition-all backdrop-blur-sm"><Phone className="w-5 h-5 inline mr-2" /> Technical Expert</a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 font-bold tracking-tighter italic font-bold tracking-tighter italic">
          <div className="container mx-auto px-4 font-bold tracking-tighter italic">
            <div className="grid lg:grid-cols-2 gap-12 mb-16 font-bold tracking-tighter italic">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-100 font-bold tracking-tighter italic">
                 <h2 className="text-3xl font-bold text-navy-primary dark:text-gray-100 mb-6 border-l-4 border-gold-primary pl-4 font-bold tracking-tighter italic">Chemical Composition (BS 1400 AB2)</h2>
                 <div className="grid grid-cols-2 md:grid-cols-3 gap-6 font-bold tracking-tighter italic">
                    {chemicalComposition.map((item, i) => (
                      <div key={i} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-2xl border border-gray-100">
                        <p className="text-xs text-gray-500 uppercase mb-1">{item.element}</p>
                        <p className="text-xl font-black text-navy-primary dark:text-gold-primary">{item.value}</p>
                      </div>
                    ))}
                  </div>
              </div>

               <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-100 font-bold tracking-tighter italic">
                <h3 className="text-2xl font-bold text-navy-primary dark:text-gray-100 mb-6 font-bold tracking-tighter italic font-bold tracking-tighter italic">Critical Advantages</h3>
                <ul className="space-y-4 font-bold tracking-tighter italic">
                  <li className="flex items-start font-bold tracking-tighter italic"><CheckCircle className="w-5 h-5 text-gold-primary mr-3 shrink-0" /> Superior resistance to cavitation and erosion-corrosion.</li>
                  <li className="flex items-start font-bold tracking-tighter italic"><CheckCircle className="w-5 h-5 text-gold-primary mr-3 shrink-0" /> High strength-to-weight ratio for rotating components.</li>
                  <li className="flex items-start font-bold tracking-tighter italic"><CheckCircle className="w-5 h-5 text-gold-primary mr-3 shrink-0" /> Consistent mechanical performance in deep-sea environments.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}


