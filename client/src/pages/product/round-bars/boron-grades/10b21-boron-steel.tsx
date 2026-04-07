import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, CheckCircle, Shield, Award, Activity, Microscope, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function Grade10B21RoundBars() {
  const chemicalComposition = [
    { element: "Carbon (C)", value: "0.18 – 0.23%" },
    { element: "Manganese (Mn)", value: "0.80 – 1.10%" },
    { element: "Boron (B)", value: "0.0005 – 0.003%" },
    { element: "Silicon (Si)", value: "0.15 – 0.35%" },
    { element: "Sulphur (S)", value: "0.035% max" },
    { element: "Phosphorus (P)", value: "0.030% max" }
  ];

  return (
    <>
      <ProductSEO
        title="10B21 Boron Steel Round Bars | Cold Heading Quality | Mamta Steel Traders"
        description="Premium 10B21 Boron Steel round bars. High formability and hardenability. Ideal for manufacturing Grade 8.8 bolts and fasteners. Stock available in various sizes."
        keywords="10B21 steel, boron steel round bars, cold heading quality, Grade 8.8 bolt material, fastener steel"
        canonicalUrl="/product/round-bars/boron-grades/10b21-boron-steel"
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
              <span className="text-navy-primary dark:text-gold-primary font-medium">10B21 Round Bars</span>
            </nav>
          </div>
        </div>

        {/* Back Link */}
        <div className="container mx-auto px-4 py-4">
          <Link href="/product/round-bars/boron-grades" className="inline-flex items-center text-navy-primary dark:text-gold-primary hover:underline font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Boron Grades
          </Link>
        </div>

        <section className="bg-gradient-to-br from-navy-primary via-navy-secondary to-slate-800 text-white py-20 relative overflow-hidden">

          <div className="container mx-auto px-4 relative z-10 font-bold tracking-tighter italic">
            <div className="max-w-4xl">
              <span className="bg-gold-primary text-navy-primary px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-6 inline-block">Cold Heading Quality Boron Steel</span>
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6 italic italic italic">10B21 Round Bars</h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed italic">Superior hardenability and cold formability for high-tensile fastener manufacturing.</p>
              <div className="flex flex-wrap gap-4 font-bold tracking-tighter italic italic">
                <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-8 py-3 rounded-xl font-bold transition-all shadow-xl hover:scale-105">Request Pricing</Link>
                <a href="tel:+919819322576" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3 rounded-xl font-bold transition-all backdrop-blur-sm"><Phone className="w-5 h-5 inline mr-2" /> Technical Support</a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-12">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-100">
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

                <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-100">
                  <h3 className="text-2xl font-bold text-navy-primary dark:text-gray-100 mb-6 font-bold tracking-tighter italic">Manufacturing Advantages</h3>
                  <div className="grid md:grid-cols-2 gap-6 font-bold tracking-tighter italic">
                    <div className="flex items-start bg-gray-50 dark:bg-gray-700 p-4 rounded-xl">
                      <CheckCircle className="w-6 h-6 text-gold-primary mr-3 shrink-0" />
                      <div>
                        <p className="font-bold">Exceptional Cold Formability</p>
                        <p className="text-sm text-gray-500">Perfect for multi-stage cold heading and extrusion.</p>
                      </div>
                    </div>
                    <div className="flex items-start bg-gray-50 dark:bg-gray-700 p-4 rounded-xl">
                      <CheckCircle className="w-6 h-6 text-gold-primary mr-3 shrink-0" />
                      <div>
                        <p className="font-bold">Increased Tool Life</p>
                        <p className="text-sm text-gray-500">Lower processing loads extend the life of forging dies and tools.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-navy-primary text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden font-bold tracking-tighter italic">
                  <h3 className="text-2xl font-bold mb-6 italic">Fastener Engineering</h3>
                  <p className="text-sm text-gray-300 mb-6">10B21 is the preferred material for Grade 8.8 and 10.9 fasteners because it achieves high tensile strength after heat treatment without the need for expensive high-alloy elements.</p>
                  <ul className="space-y-4">
                    <li className="flex items-center"><ArrowRight className="w-4 h-4 text-gold-primary mr-2" /> Grade 8.8 Bolts</li>
                    <li className="flex items-center"><ArrowRight className="w-4 h-4 text-gold-primary mr-2" /> Self-Tapping Screws</li>
                    <li className="flex items-center"><ArrowRight className="w-4 h-4 text-gold-primary mr-2" /> High-Tensile Nuts</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}


