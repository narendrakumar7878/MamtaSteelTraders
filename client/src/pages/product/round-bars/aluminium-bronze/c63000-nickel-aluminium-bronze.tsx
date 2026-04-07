import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, CheckCircle, Shield, Award, Activity, Microscope, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function C63000RoundBars() {
  const chemicalComposition = [
    { element: "Copper (Cu)", value: "Remainder" },
    { element: "Aluminium (Al)", value: "9.0 – 11.0%" },
    { element: "Nickel (Ni)", value: "4.0 – 5.5%" },
    { element: "Iron (Fe)", value: "2.0 – 4.0%" },
    { element: "Manganese (Mn)", value: "1.5% max" },
    { element: "Zinc (Zn)", value: "0.3% max" }
  ];

  const equivalentGrades = [
    { country: "USA (ASTM)", grade: "C63000" },
    { country: "European (EN)", grade: "CW307G" },
    { country: "British (BS)", grade: "CA104" },
    { country: "JIS", grade: "AJB1 / AJB2" }
  ];

  const features = [
    { title: "Superior Strength", desc: "Highest strength of any standard copper alloy" },
    { title: "Seawater Resistance", desc: "Exceptional resistance to corrosion, cavitation and erosion in seawater" },
    { title: "Heat Resistance", desc: "Maintains mechanical properties at elevated temperatures" },
    { title: "Wear Resistance", desc: "Excellent anti-galling and low-friction characteristics" }
  ];

  return (
    <>
      <ProductSEO
        title="C63000 Nickel Aluminium Bronze Round Bars | CA104 | Marine Grade | Mamta Steel Traders"
        description="High-strength C63000 Nickel Aluminium Bronze round bars. ASTM C63000, AMS 4640 certified. Superior seawater corrosion resistance. Available in 6mm to 300mm."
        keywords="C63000 bronze, nickel aluminium bronze, CA104 bronze, AMS 4640 bars, marine bronze"
        canonicalUrl="/product/round-bars/aluminium-bronze/c63000-nickel-aluminium-bronze"
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
              <span className="text-navy-primary dark:text-gold-primary font-medium">C63000 Round Bars</span>
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
              <span className="bg-gold-primary text-navy-primary px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-6 inline-block">Nickel Aluminium Bronze</span>
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6 font-bold tracking-tighter italic">C63000 Round Bars</h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed font-bold tracking-tighter italic">Highest-strength copper alloy for aerospace, marine, and extreme industrial environments.</p>
              <div className="flex flex-wrap gap-4 font-bold tracking-tighter italic">
                <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-8 py-3 rounded-xl font-bold transition-all shadow-xl hover:scale-105">Request Quote</Link>
                <a href="tel:+919819322576" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3 rounded-xl font-bold transition-all backdrop-blur-sm"><Phone className="w-5 h-5 inline mr-2" /> Call Expert</a>
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
                  <h2 className="text-3xl font-bold text-navy-primary dark:text-gray-100 mb-6 border-l-4 border-gold-primary pl-4 font-bold tracking-tighter italic">Equivalent Grades</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left font-bold tracking-tighter italic">
                      <thead>
                        <tr className="bg-navy-primary text-white">
                          <th className="p-4 rounded-tl-xl text-xs uppercase">Standard / Country</th>
                          <th className="p-4 rounded-tr-xl text-xs uppercase">Grade Equivalent</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                        {equivalentGrades.map((eq, i) => (
                          <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                            <td className="p-4 text-gray-500">{eq.country}</td>
                            <td className="p-4 font-bold text-navy-primary dark:text-gold-primary">{eq.grade}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-navy-primary text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gold-primary/10 rounded-full -mr-16 -mt-16"></div>
                  <h3 className="text-2xl font-bold mb-6 font-bold tracking-tighter italic">Key Performance Features</h3>
                  <div className="space-y-6 font-bold tracking-tighter italic">
                    {features.map((f, i) => (
                      <div key={i} className="flex gap-4">
                        <CheckCircle className="w-6 h-6 text-gold-primary shrink-0" />
                        <div>
                          <p className="font-bold">{f.title}</p>
                          <p className="text-sm text-gray-300">{f.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold mb-6 text-navy-primary dark:text-gray-100 font-bold tracking-tighter italic font-bold tracking-tighter italic">Industrial Applications</h3>
                  <div className="grid grid-cols-2 gap-4 font-bold tracking-tighter italic">
                    {["Aerospace Gears", "Marine Fasteners", "Landing Gear Components", "Valve Stems", "Propeller Hubs", "Bearing Bushings"].map((app, i) => (
                      <div key={i} className="flex items-center text-sm p-3 bg-gray-50 dark:bg-gray-700 rounded-xl border border-gray-100">
                        <ArrowRight className="w-4 h-4 text-gold-primary mr-2" /> {app}
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


