import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, ArrowLeft, CheckCircle, ShieldCheck } from "lucide-react";
import ss_round_bar_mamta_steel_traders_img from "@/assets/SS ROUND BAR  MAMTA STEEL TRADERS.jpg";
import { Link } from "wouter";

export default function Grade420RoundBars() {
  const chemicalComposition = [
    { element: "Carbon (C)", min: "0.15", max: "â€”" },
    { element: "Manganese (Mn)", min: "â€”", max: "1.00" },
    { element: "Silicon (Si)", min: "â€”", max: "1.00" },
    { element: "Chromium (Cr)", min: "12.00", max: "14.00" },
    { element: "Phosphorus (P)", min: "â€”", max: "0.040" },
    { element: "Sulfur (S)", min: "â€”", max: "0.030" },
  ];
  const equivalentGrades = [
    { country: "Germany / DIN", grade: "1.4021 / 1.4028" },
    { country: "USA / AISI", grade: "420 / S42000" },
    { country: "France / AFNOR", grade: "Z20C13" },
    { country: "Japan / JIS", grade: "SUS420J1 / SUS420J2" },
    { country: "India / IS", grade: "20Cr13 / 30Cr13" },
  ];
  const applications = [
    "Cutlery & Kitchen Knives",
    "Surgical & Biological Instruments",
    "Valve Parts & Pump Shafts",
    "Shear Blades & Industrial Tools",
    "Needle Valves & Bushings",
    "Ball Bearings & Races",
    "Fasteners (High Hardness)",
    "Steam & Gas Turbine Blades",
  ];

  return (
    <>
      <ProductSEO
        title="420 Stainless Steel Round Bars - High Hardness Martensitic | Mamta Steel Traders"
        description="Premium 420 (1.4021 / 1.4028) martensitic stainless steel round bars. High carbon content for extreme hardness and wear resistance. Ideal for cutlery and tools. Mumbai supplier."
        keywords="420 round bar, 420 stainless steel, 1.4021 steel, hardenable martensitic SS Mumbai, SUS420J2 round bar, cutlery steel Mumbai, buy 420 bar India, AEO optimized tool steel"
        canonicalUrl="/product/round-bars/stainless-steel/420-round-bars"
      />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 font-bold tracking-tighter italic">
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex items-center space-x-2 text-sm flex-wrap gap-y-1">
              <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary transition-colors">Home</Link>
              <ArrowRight className="w-4 h-4 text-gray-400" />
              <Link href="/product/round-bars/round-bars" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary transition-colors">Round Bars</Link>
              <ArrowRight className="w-4 h-4 text-gray-400" />
              <Link href="/product/round-bars/stainless-steel-round-bars" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary transition-colors">Stainless Steel</Link>
              <ArrowRight className="w-4 h-4 text-gray-400" />
              <span className="text-navy-primary dark:text-gold-primary font-medium uppercase">SS 420 Round</span>
            </nav>
          </div>
        </div>

        <div className="container mx-auto px-4 py-4">
          <Link href="/product/round-bars/stainless-steel-round-bars" className="inline-flex items-center text-navy-primary dark:text-gold-primary hover:underline font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Steel Portfolio
          </Link>
        </div>

        <div className="bg-gradient-to-br from-navy-primary via-navy-secondary to-slate-800 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 py-16 relative z-10">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <ShieldCheck className="w-10 h-10 text-gold-primary mr-4 animate-pulse" />
                  <span className="bg-gold-primary/20 text-gold-primary border border-gold-primary/30 px-4 py-1 text-xs uppercase tracking-widest rounded">Precision Industrial Grade</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-4 uppercase tracking-tight">SS 420 Round bars
                   <span className="block text-2xl text-gold-primary font-normal mt-2 normal-case">Material Certification Standards Compliance</span>
                </h1>
                <p className="text-xl mb-8 text-gray-200 leading-relaxed font-light">Engineered for reliability in extreme conditions. Our precision-engineered round bars offer high fatigue life and superior structural integrity.</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-8 py-3 rounded-lg font-bold transition-all hover:scale-105 shadow-xl inline-flex items-center justify-center"><Mail className="w-5 h-5 mr-3" /> Get Wholesale Quote</Link>
                  <a href="tel:+919819322576" className="border-2 border-white/30 hover:bg-white hover:text-navy-primary px-8 py-3 rounded-lg font-bold transition-all inline-flex items-center justify-center"><Phone className="w-5 h-5 mr-3" /> Technical Support</a>
                </div>
              </div>
              <div className="relative">
                <img src={ss_round_bar_mamta_steel_traders_img} alt="SS 420 Round Round Bars" className="w-full rounded-2xl shadow-2xl border-4 border-white/10" loading="lazy" />
                <div className="absolute -bottom-6 -left-6 bg-navy-primary border-2 border-gold-primary p-6 rounded-xl shadow-2xl hidden md:block animate-soft-bounce">
                    <p className="text-gold-primary font-bold text-xs uppercase mb-1">Inventory Status</p>
                    <p className="text-white font-black text-xl italic">READY STOCK</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-12 border border-gray-100">
              <h2 className="text-2xl font-bold text-navy-primary dark:text-gray-100 mb-6 border-b-2 border-gold-primary pb-2 inline-block uppercase font-bold tracking-tighter italic">Grade Analysis: SS 420 Round</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg leading-relaxed">This specialized grade is precisely engineered to balance high tensile strength with ductile performance, providing exceptional reliability in demanding mechanical environments.</p>
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-xl border-l-8 border-navy-primary shadow-sm hover:translate-x-2 transition-transform">
                  <h4 className="font-bold text-navy-primary dark:text-gold-primary uppercase text-sm mb-2 font-bold tracking-tighter italic font-bold">Standard Certification</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed font-bold tracking-tighter italic">Fully compliant with ASTM/ASME standards for structural integrity.</p>
                </div>
                <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-xl border-l-8 border-gold-primary shadow-sm hover:translate-x-2 transition-transform font-bold tracking-tighter italic">
                  <h4 className="font-bold text-navy-primary dark:text-gold-primary uppercase text-sm mb-2 font-bold tracking-tighter italic font-bold">Quality Verification</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed font-bold tracking-tighter italic">Third-party metallurgical audit available for critical deployments.</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-12 border border-gray-100">
              <h3 className="text-2xl font-bold text-navy-primary dark:text-gray-100 mb-8 uppercase tracking-wider text-center font-bold tracking-tighter italic">Chemical Composition Spectrum</h3>
              <div className="overflow-x-auto rounded-xl shadow-inner border border-gray-100">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-navy-primary text-white">
                      <th className="px-8 py-4 text-left uppercase text-sm tracking-wider">Element</th>
                      <th className="px-8 py-4 text-center uppercase text-sm tracking-wider">Min %</th>
                      <th className="px-8 py-4 text-center uppercase text-sm tracking-wider">Max %</th>
                    </tr>
                  </thead>
                  <tbody>
                    {chemicalComposition.map((c, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-gray-50 dark:bg-gray-700" : "bg-white dark:bg-gray-800"}>
                        <td className="px-8 py-4 font-bold text-gray-700 dark:text-gray-300 uppercase text-xs font-bold tracking-tighter italic">{c.element}</td>
                        <td className="px-8 py-4 text-center font-mono text-xl font-bold text-navy-primary dark:text-gold-primary font-bold tracking-tighter italic">{c.min}</td>
                        <td className="px-8 py-4 text-center font-mono text-xl font-bold text-navy-primary dark:text-gold-primary font-bold tracking-tighter italic">{c.max}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-navy-primary dark:text-gray-100 mb-6 uppercase border-b-2 border-navy-primary pb-2 inline-block font-bold tracking-tighter italic">Global Standards</h3>
                <div className="space-y-4">
                  {equivalentGrades.map((g, i) => (
                    <div key={i} className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gold-primary transition-all group group-hover:font-bold">
                      <span className="font-bold text-gray-500 dark:text-gray-400 uppercase text-xs group-hover:text-navy-primary font-bold tracking-tighter italic">{g.country}</span>
                      <span className="text-navy-primary dark:text-gold-primary font-bold text-lg italic group-hover:text-navy-primary uppercase font-bold tracking-tighter italic">{g.grade}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-navy-primary rounded-xl shadow-lg p-8 text-white relative overflow-hidden font-bold tracking-tighter italic">
                <h3 className="text-2xl font-bold mb-8 uppercase border-b-2 border-gold-primary pb-2 inline-block">Supply Capacity</h3>
                <div className="p-6 bg-white/5 rounded-xl text-center mb-8 border border-white/20 shadow-inner">
                  <p className="text-xs text-gray-400 uppercase font-bold tracking-widest mb-2 text-center">Master Stock Range</p>
                  <p className="text-5xl font-black text-gold-primary text-center">6mm – 500mm</p>
                </div>
                <ul className="space-y-4 text-sm font-bold tracking-tighter italic">
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-gold-primary mr-3 " /> Comprehensive Dimensional Coverage</li>
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-gold-primary mr-3 " /> Ultrasonic Tested & Mill Certified stock</li>
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-gold-primary mr-3 " /> Finish: Cold Drawn, Polished, Centerless Ground</li>
                </ul>
              </div>
            </div>

             <div className="bg-white dark:bg-gray-800 rounded-xl p-8 mb-12 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-navy-primary dark:text-gray-100 mb-6 uppercase border-l-4 border-gold-primary pl-4 font-bold tracking-tighter italic">Industrial Applications</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {applications.map((app, i) => (
                  <div key={i} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg flex items-center border border-gray-100 dark:border-gray-600">
                    <CheckCircle className="w-4 h-4 text-navy-primary dark:text-gold-primary mr-2 flex-shrink-0" />
                    <span className="text-xs uppercase font-bold tracking-tighter italic text-gray-600 dark:text-gray-300">{app}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center bg-white dark:bg-gray-800 p-12 rounded-3xl shadow-2xl border border-gray-100 font-bold tracking-tighter italic">
              <h3 className="text-3xl font-bold text-navy-primary dark:text-gray-100 mb-6 uppercase italic italic font-bold tracking-tighter italic"> Request Engineering Data & Quote</h3>
              <div className="flex flex-col sm:flex-row gap-6 justify-center font-bold tracking-tighter italic">
                <Link href="/contact" className="bg-navy-primary hover:bg-navy-secondary text-white px-10 py-4 rounded-xl font-bold transition-all shadow-xl inline-flex items-center justify-center hover:scale-105 font-bold tracking-tighter italic">Connect with Experts</Link>
                <a href="tel:+919819322576" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-10 py-4 rounded-xl font-bold transition-all shadow-xl inline-flex items-center justify-center hover:scale-105 font-bold tracking-tighter italic"><Phone className="w-5 h-5 mr-3" /> +91 98193 22576</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}