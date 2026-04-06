import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft, ArrowRight, Phone, Mail, CheckCircle, Shield, Award, Activity, Microscope, Zap, Thermometer } from "lucide-react";
import { Link } from "wouter";

export default function CobaltRoundBars() {
  const chemicalComposition = [
    { element: "Cobalt (Co)", value: "Balance" },
    { element: "Chromium (Cr)", value: "27.0 – 30.0%" },
    { element: "Molybdenum (Mo)", value: "5.0 – 7.0%" },
    { element: "Nickel (Ni)", value: "0.50% max" },
    { element: "Iron (Fe)", value: "0.75% max" },
    { element: "Carbon (C)", value: "0.35% max" }
  ];

  const mechanicalProperties = [
    { property: "Tensile Strength (min)", value: "655 MPa" },
    { property: "Yield Strength (min)", value: "450 MPa" },
    { property: "Elongation (min)", value: "8%" },
    { property: "Hardness (max)", value: "35 HRC" },
    { property: "Density", value: "8.3 g/cm³" },
    { property: "Magnetic Permeability", value: "< 1.01 (Non-Magnetic)" }
  ];

  const industrialBenefits = [
    { icon: Activity, title: "Biocompatible", desc: "Certified for surgical implants and orthopedic hardware." },
    { icon: Thermometer, title: "Thermal Stability", desc: "Maintains structural integrity at temperatures up to 2100°F (1150°C)." },
    { icon: Shield, title: "Erosion Resistant", desc: "Superior resistance to metal-to-metal wear and cavitation." },
    { icon: Microscope, title: "Corrosion Proof", desc: "Inert to body fluids, saline, and oxidative industrial environments." }
  ];

  return (
    <>
      <ProductSEO
        title="Cobalt Round Bars - CoCrMo & Stellite Equivalent | Medical & Aerospace Grade | Mumbai India"
        description="Premium Cobalt round bars (CoCrMo, ASTM F75/F1537). Exceptional wear resistance, biocompatibility, and high-temperature strength. Expert supplier in Mumbai. Get a quote for medical and aerospace applications."
        keywords="cobalt round bars, CoCrMo alloys, Stellite equivalent bars, medical grade cobalt chrome, biocompatible alloys Mumbai, aerospace cobalt bars, wear resistant round bars, ASTM F75 bars"
        canonicalUrl="/product/round-bars/cobalt"
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
                 <span className="text-navy-primary dark:text-gold-primary font-bold italic">Cobalt Alloy Round Bars</span>
              </nav>
           </div>
        </div>

        {/* Back Link */}
        <div className="container mx-auto px-4 py-4">
           <Link href="/product/round-bars/round-bars" className="inline-flex items-center text-navy-primary dark:text-gold-primary hover:underline font-bold italic">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Round Bars
           </Link>
        </div>

        <section className="bg-gradient-to-br from-navy-primary via-navy-secondary to-slate-800 text-white py-20 relative overflow-hidden font-bold tracking-tighter italic">
          <div className="container mx-auto px-4 relative z-10 font-bold tracking-tighter italic">
            <div className="max-w-4xl font-bold tracking-tighter italic">
              <span className="bg-gold-primary text-navy-primary px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-6 inline-block font-bold tracking-tighter italic whitespace-nowrap">Medical & Aerospace Certified</span>
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6 italic italic italic">Cobalt Round Bars</h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed italic italic">The pinnacle of biocompatibility and high-temperature wear resistance for surgical and aerospace engineering.</p>
              <div className="flex flex-wrap gap-4 font-bold tracking-tighter italic font-bold tracking-tighter italic">
                <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-8 py-3 rounded-xl font-bold transition-all shadow-xl hover:scale-105 italic">Optimize Your Metallurgy</Link>
                <a href="tel:+919819322576" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3 rounded-xl font-bold transition-all backdrop-blur-sm italic"><Phone className="w-5 h-5 inline mr-2" /> Technical Expert</a>
              </div>
            </div>
          </div>
          <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4 pointer-events-none">
             <Zap className="w-96 h-96" />
          </div>
        </section>

        <section className="py-16 font-bold tracking-tighter italic font-bold tracking-tighter italic">
          <div className="container mx-auto px-4 font-bold tracking-tighter italic font-bold tracking-tighter italic">
            <div className="grid lg:grid-cols-3 gap-8 font-bold tracking-tighter italic font-bold tracking-tighter italic">
              <div className="lg:col-span-2 space-y-12 font-bold tracking-tighter italic">
                {/* Chemical Composition */}
                <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-100 font-bold tracking-tighter italic">
                  <h2 className="text-3xl font-bold text-navy-primary dark:text-gray-100 mb-6 border-l-4 border-gold-primary pl-4 font-bold tracking-tighter italic italic uppercase">Chemical Profile (CoCrMo)</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 font-bold tracking-tighter italic">
                    {chemicalComposition.map((item, i) => (
                      <div key={i} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-2xl border border-gray-100 font-bold tracking-tighter italic hover:border-gold-primary transition-colors">
                        <p className="text-xs text-gray-500 uppercase mb-1 font-bold tracking-tighter italic">{item.element}</p>
                        <p className="text-xl font-black text-navy-primary dark:text-gold-primary font-bold tracking-tighter italic">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mechanical Properties */}
                <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-100 font-bold tracking-tighter italic">
                  <h2 className="text-3xl font-bold text-navy-primary dark:text-gray-100 mb-6 border-l-4 border-gold-primary pl-4 font-bold tracking-tighter italic italic uppercase">Mechanical Performance</h2>
                  <div className="overflow-x-auto font-bold tracking-tighter italic">
                    <table className="w-full text-left font-bold tracking-tighter italic italic">
                      <thead>
                        <tr className="bg-navy-primary text-white font-bold tracking-tighter italic">
                          <th className="p-4 rounded-tl-xl text-xs uppercase italic">Critical Property</th>
                          <th className="p-4 rounded-tr-xl text-xs uppercase italic">Standard Value</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 dark:divide-gray-700 font-bold tracking-tighter italic">
                        {mechanicalProperties.map((prop, i) => (
                          <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-bold tracking-tighter italic">
                            <td className="p-4 text-gray-500 italic uppercase">{prop.property}</td>
                            <td className="p-4 font-bold text-navy-primary dark:text-gold-primary italic">{prop.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Benefits Grid */}
                <div className="grid md:grid-cols-2 gap-6 font-bold tracking-tighter italic font-bold tracking-tighter italic">
                   {industrialBenefits.map((benefit, i) => (
                      <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-3xl border border-gray-100 font-bold tracking-tighter italic flex gap-4 hover:shadow-md transition-shadow">
                         <div className="bg-gold-primary/10 p-3 rounded-2xl h-fit">
                            <benefit.icon className="w-6 h-6 text-navy-primary" />
                         </div>
                         <div>
                            <h4 className="text-lg font-bold text-navy-primary dark:text-gray-100 mb-1 italic">{benefit.title}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400 font-bold tracking-tighter italic">{benefit.desc}</p>
                         </div>
                      </div>
                   ))}
                </div>
              </div>

              {/* Sidebar Info */}
              <div className="space-y-6 font-bold tracking-tighter italic font-bold tracking-tighter italic">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-100 font-bold tracking-tighter italic">
                  <h3 className="text-xl font-bold mb-6 text-navy-primary dark:text-gray-100 italic border-b pb-2 border-gold-primary">Key Industry Applications</h3>
                  <div className="space-y-4 font-bold tracking-tighter italic">
                    {[
                      "Orthopedic Joint Replacements",
                      "Dental Bridges & Partials",
                      "Aero-Engine Turbine Blades",
                      "High-Speed Cutting Tools",
                      "Chemical Processing Equipment",
                      "Erosion-Shield Valve Seats"
                    ].map((app, i) => (
                      <div key={i} className="flex items-center text-sm p-3 bg-gray-50 dark:bg-gray-700 rounded-xl border border-gray-100 font-bold tracking-tighter italic group hover:bg-navy-primary transition-all">
                        <ArrowRight className="w-4 h-4 text-gold-primary mr-3 italic transition-transform group-hover:translate-x-1" /> 
                        <span className="group-hover:text-white">{app}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gold-primary to-yellow-600 p-8 rounded-3xl shadow-xl font-bold tracking-tighter italic text-navy-primary overflow-hidden relative group">
                   <div className="relative z-10 font-bold tracking-tighter italic">
                      <h3 className="text-2xl font-black mb-4 italic uppercase">Bulk Supply Expert</h3>
                      <p className="text-sm mb-6 font-bold tracking-tighter italic">Maintaining Ready Stock of Cobalt-Chrome and Stellite Equivalent round bars in Mumbai. Global export available.</p>
                      <button className="w-full bg-navy-primary text-white py-3 rounded-xl font-bold hover:scale-105 transition-all italic">Instant Industrial Quote</button>
                   </div>
                   <Shield className="absolute -right-10 -bottom-10 w-48 h-48 opacity-10 group-hover:scale-110 transition-all pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white dark:bg-gray-800 font-bold tracking-tighter italic font-bold tracking-tighter italic border-t border-gray-100">
           <div className="container mx-auto px-4 text-center font-bold tracking-tighter italic">
              <h2 className="text-4xl font-extrabold text-navy-primary dark:text-white mb-6 italic italic">Need Cobalt Alloy Specialist?</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto font-bold tracking-tighter italic">Mamta Steel Traders provides precision-cut Cobalt round bars for critical surgical and aerospace applications. Technical sheets available on request.</p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center font-bold tracking-tighter italic">
                 <Link href="/contact" className="flex items-center justify-center bg-navy-primary text-white px-10 py-4 rounded-2xl font-bold hover:bg-navy-secondary transition-all shadow-lg italic"><Mail className="w-5 h-5 mr-3" /> Technical Inquiry</Link>
                 <a href="mailto:naren@mamtasteel.com" className="flex items-center justify-center border-2 border-navy-primary text-navy-primary px-10 py-4 rounded-2xl font-bold hover:bg-gray-50 transition-all italic tracking-tighter">Email Specifications</a>
              </div>
           </div>
        </section>
      </div>
    </>
  );
}