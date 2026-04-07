import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, CheckCircle, Shield, Award, Activity, Microscope, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function PB1RoundBars() {
  const chemicalComposition = [
    { element: "Copper (Cu)", value: "Remainder" },
    { element: "Tin (Sn)", value: "10.0 – 11.5%" },
    { element: "Phosphorus (P)", value: "0.50 – 1.0%" },
    { element: "Lead (Pb)", value: "0.25% max" },
    { element: "Zinc (Zn)", value: "0.05% max" }
  ];

  return (
    <>
      <ProductSEO
        title="PB1 Phosphor Bronze Round Bars | BS 1400 PB1 | Wear Resistant | Mamta Steel Traders"
        description="Premium PB1 Phosphor Bronze round bars. High tin content for superior wear resistance and fatigue life. Ideal for heavy-duty bearings and gears. BS 1400 PB1 certified."
        keywords="PB1 bronze, phosphor bronze round bars, BS 1400 PB1, wear resistant bronze, high tin bronze"
        canonicalUrl="/product/round-bars/bronze/pb1-phosphor-bronze"
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
              <span className="text-navy-primary dark:text-gold-primary font-medium">PB1 Round Bars</span>
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

          <div className="container mx-auto px-4 relative z-10 font-bold tracking-tighter italic">
            <div className="max-w-4xl font-bold tracking-tighter italic">
              <span className="bg-gold-primary text-navy-primary px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-6 inline-block font-bold tracking-tighter italic">High-Tin Phosphor Bronze</span>
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6 font-bold tracking-tighter italic">PB1 Round Bars</h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed font-bold tracking-tighter italic">Professional-grade phosphor bronze with exceptional fatigue resistance and high load-bearing capacity for critical engineering parts.</p>
              <div className="flex flex-wrap gap-4 font-bold tracking-tighter italic">
                <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-8 py-3 rounded-xl font-bold transition-all shadow-xl hover:scale-105">Get Price Quote</Link>
                <a href="tel:+919819322576" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3 rounded-xl font-bold transition-all backdrop-blur-sm"><Phone className="w-5 h-5 inline mr-2" /> Expert Support</a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 font-bold tracking-tighter italic">
            <div className="grid lg:grid-cols-2 gap-12 mb-16 font-bold tracking-tighter italic">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-100 font-bold tracking-tighter italic">
                <h2 className="text-3xl font-bold text-navy-primary dark:text-gray-100 mb-6 border-l-4 border-gold-primary pl-4 font-bold tracking-tighter italic">Chemical Composition (BS 1400)</h2>
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
                <h3 className="text-2xl font-bold text-navy-primary dark:text-gray-100 mb-6 font-bold tracking-tighter italic">Technical Excellence</h3>
                <ul className="space-y-4 font-bold tracking-tighter italic">
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-gold-primary mr-3 shrink-0" /> Exceptional fatigue resistance under heavy loads.</li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-gold-primary mr-3 shrink-0" /> Superior spring and bearing properties.</li>
                  <li className="flex items-start"><CheckCircle className="w-5 h-5 text-gold-primary mr-3 shrink-0" /> Outstanding resistance to corrosive environments.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}


