import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, CheckCircle, Shield, Award, Activity, Microscope, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function C95400RoundBars() {
  const chemicalComposition = [
    { element: "Copper (Cu)", value: "85.0% min" },
    { element: "Aluminium (Al)", value: "10.0 – 11.5%" },
    { element: "Iron (Fe)", value: "3.0 – 5.0%" },
    { element: "Manganese (Mn)", value: "0.5% max" },
    { element: "Nickel (Ni)", value: "1.5% max (incl Co)" }
  ];

  const mechanicalProperties = [
    { property: "Tensile Strength", value: "75 ksi (517 MPa) - 95 ksi (655 MPa)" },
    { property: "Yield Strength", value: "30 ksi (207 MPa) - 45 ksi (310 MPa)" },
    { property: "Elongation (in 2 inch)", value: "12 - 20%" },
    { property: "Hardness (Brinell)", value: "170 - 190 HB" }
  ];

  return (
    <>
      <ProductSEO
        title="C95400 Aluminium Bronze Round Bars | 9C | Wear Resistant | Mamta Steel Traders"
        description="High-strength C95400 Aluminium Bronze round bars. ASTM B505, B271 certified. Excellent wear resistance and bearing properties. Stock available in various diameters."
        keywords="C95400 bronze, aluminium bronze, ASTM B505 bronze, wear resistant bronze, 9C bronze rods"
        canonicalUrl="/product/round-bars/aluminium-bronze/c95400-aluminium-bronze"
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
              <Link href="/product/round-bars/aluminium-bronze" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary transition-colors">Aluminium Bronze</Link>
              <ArrowRight className="w-4 h-4 text-gray-400" />
              <span className="text-navy-primary dark:text-gold-primary font-medium">C95400 Round Bars</span>
            </nav>
          </div>
        </div>

        {/* Back Link */}
        <div className="container mx-auto px-4 py-4">
          <Link href="/product/round-bars/aluminium-bronze" className="inline-flex items-center text-navy-primary dark:text-gold-primary hover:underline font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Aluminium Bronze
          </Link>
        </div>

        <section className="bg-gradient-to-br from-navy-primary via-navy-secondary to-slate-800 text-white py-20 relative overflow-hidden">

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl">
              <span className="bg-gold-primary text-navy-primary px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-6 inline-block">General Purpose Aluminium Bronze</span>
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6 font-bold tracking-tighter italic">C95400 Round Bars</h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed font-bold tracking-tighter italic">The industry-standard all-purpose aluminium bronze known for high strength and superior wear resistance.</p>
              <div className="flex flex-wrap gap-4 font-bold tracking-tighter italic">
                <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-8 py-3 rounded-xl font-bold transition-all shadow-xl hover:scale-105">Check Stock & Price</Link>
                <a href="mailto:mamtasteeltraders@gmail.com" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3 rounded-xl font-bold transition-all backdrop-blur-sm"><Mail className="w-5 h-5 inline mr-2" /> Email RFQ</a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
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
                <h2 className="text-3xl font-bold text-navy-primary dark:text-gray-100 mb-6 border-l-4 border-gold-primary pl-4 font-bold tracking-tighter italic">Mechanical Properties</h2>
                <div className="space-y-4 font-bold tracking-tighter italic">
                  {mechanicalProperties.map((prop, i) => (
                    <div key={i} className="flex justify-between items-center p-3 border-b dark:border-gray-700">
                      <span className="text-gray-500">{prop.property}</span>
                      <span className="font-bold text-navy-primary dark:text-gold-primary">{prop.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 bg-navy-primary text-white rounded-3xl font-bold tracking-tighter italic">
                <Shield className="w-10 h-10 text-gold-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">High Strength</h3>
                <p className="text-sm text-gray-300">Comparable to low-alloy steels in tensile and yield strength.</p>
              </div>
              <div className="p-8 bg-white dark:bg-gray-800 border border-gray-100 rounded-3xl font-bold tracking-tighter italic">
                <Activity className="w-10 h-10 text-navy-primary dark:text-gold-primary mb-4 font-bold tracking-tighter italic" />
                <h3 className="text-xl font-bold mb-2 text-navy-primary dark:text-gray-100 italic">Wear Resistant</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-bold tracking-tighter italic">Exceptional anti-friction and low-wear properties under heavy loads.</p>
              </div>
               <div className="p-8 bg-white dark:bg-gray-800 border border-gray-100 rounded-3xl font-bold tracking-tighter italic">
                <Microscope className="w-10 h-10 text-navy-primary dark:text-gold-primary mb-4 font-bold tracking-tighter italic" />
                <h3 className="text-xl font-bold mb-2 text-navy-primary dark:text-gray-100 italic">Common Uses</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-bold tracking-tighter italic">Bearings, bushings, gears, valve components, and wear plates.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
