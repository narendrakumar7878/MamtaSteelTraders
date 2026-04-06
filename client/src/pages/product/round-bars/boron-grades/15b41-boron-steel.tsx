import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, CheckCircle, Shield, Award, Activity, Microscope, TrendingUp, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function Grade15B41RoundBars() {
  const chemicalComposition = [
    { element: "Carbon (C)", value: "0.38 – 0.45%" },
    { element: "Manganese (Mn)", value: "1.35 – 1.65%" },
    { element: "Boron (B)", value: "0.0005 – 0.003%" },
    { element: "Silicon (Si)", value: "0.15 – 0.35%" },
    { element: "Sulphur (S)", value: "0.035% max" },
    { element: "Phosphorus (P)", value: "0.030% max" }
  ];

  return (
    <>
      <ProductSEO
        title="15B41 Boron Steel Round Bars | High Hardenability | Mamta Steel Traders"
        description="Premium 15B41 Boron Steel round bars. High-manganese boron alloy for maximum hardenability and strength. Ideal for heavy-duty drive shafts and gears."
        keywords="15B41 steel, boron steel round bars, high manganese boron, drive shafts, high strength gears"
        canonicalUrl="/product/round-bars/boron-grades/15b41-boron-steel"
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
              <Link href="/product/round-bars/boron-grades" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary transition-colors">Boron Grades</Link>
              <ArrowRight className="w-4 h-4 text-gray-400" />
              <span className="text-navy-primary dark:text-gold-primary font-medium">15B41 Round Bars</span>
            </nav>
          </div>
        </div>

        {/* Back Link */}
        <div className="container mx-auto px-4 py-4">
          <Link href="/product/round-bars/boron-grades" className="inline-flex items-center text-navy-primary dark:text-gold-primary hover:underline font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Boron Grades
          </Link>
        </div>

        <section className="bg-gradient-to-br from-navy-primary via-navy-secondary to-slate-800 text-white py-20 relative overflow-hidden font-bold tracking-tighter italic">

          <div className="container mx-auto px-4 relative z-10 font-bold tracking-tighter italic">
            <div className="max-w-4xl font-bold tracking-tighter italic">
              <span className="bg-gold-primary text-navy-primary px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-6 inline-block font-bold tracking-tighter italic">High-Strength Boron Steel</span>
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6 font-bold tracking-tighter italic">15B41 Round Bars</h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed font-bold tracking-tighter italic">High-manganese boron alloy optimized for maximum through-hardenability and structural strength in heavy equipment.</p>
              <div className="flex flex-wrap gap-4 font-bold tracking-tighter italic">
                <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-8 py-3 rounded-xl font-bold transition-all shadow-xl hover:scale-105">Request Technical Data</Link>
                <a href="tel:+919819322576" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3 rounded-xl font-bold transition-all backdrop-blur-sm"><Phone className="w-5 h-5 inline mr-2" /> Expert Quote</a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 font-bold tracking-tighter italic">
            <div className="grid lg:grid-cols-2 gap-12 font-bold tracking-tighter italic">
               <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-100 font-bold tracking-tighter italic">
                  <h2 className="text-3xl font-bold text-navy-primary dark:text-gray-100 mb-6 border-l-4 border-gold-primary pl-4 font-bold tracking-tighter italic">Chemical Composition</h2>
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
                  <h3 className="text-2xl font-bold text-navy-primary dark:text-gray-100 mb-6 font-bold tracking-tighter italic">Mechanical Superiority</h3>
                  <div className="space-y-6 font-bold tracking-tighter italic">
                    <div className="flex gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                      <TrendingUp className="w-8 h-8 text-gold-primary shrink-0" />
                      <div>
                        <p className="font-bold">Extreme Hardenability</p>
                        <p className="text-sm text-gray-500">Achieves much greater through-hardness depth compared to 1045 or 1541 carbon steels.</p>
                      </div>
                    </div>
                    <div className="flex gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                      <Shield className="w-8 h-8 text-gold-primary shrink-0" />
                      <div>
                        <p className="font-bold">Fatigue Life</p>
                        <p className="text-sm text-gray-500">Superior resistance to cyclical stress in drive-line components.</p>
                      </div>
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
