import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft, ArrowRight, CheckCircle, Shield, Zap, Info, TrendingUp, Award, Download, Box, Key, Settings, Target, Anchor, Gauge, Cog } from "lucide-center-icons"; // Replacing bad imports
import { ArrowLeft as ArrowLeftIcon, ArrowRight as ArrowRightIcon, CheckCircle as CheckCircleIcon, Shield as ShieldIcon, Zap as ZapIcon, Info as InfoIcon, TrendingUp as TrendingUpIcon, Award as AwardIcon, Download as DownloadIcon, Box as BoxIcon, Key as KeyIcon, Settings as SettingsIcon, Target as TargetIcon, Anchor as AnchorIcon, Gauge as GaugeIcon, Cog as CogIcon } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function SocketWeldFittingsDetail() {
  const technicalSpecs = [
    { property: "Standards", value: "ASME B16.11, BS 3799, MSS SP-79" },
    { property: "Pressure Classes", value: "2000#, 3000#, 6000#, 9000#" },
    { property: "Size Range", value: "1/8\" to 4\" NB" },
    { property: "Types", value: "Elbows, Tees, Couplings, Unions, Caps, Crosses" },
    { property: "End Construction", value: "Socket Welding (SW)" },
    { property: "Surface Finish", value: "Self-color, Galvanized, Pickled & Passivated" }
  ];

  const chemicalComp = [
    { element: "Carbon (C)", a105: "0.35% max", ss304: "0.08% max", a350_lf2: "0.30% max" },
    { element: "Manganese (Mn)", a105: "0.60 - 1.05%", ss304: "2.0% max", a350_lf2: "0.60 - 1.35%" },
    { element: "Chromium (Cr)", a105: "0.30% max", ss304: "18.0 - 20.0%", a350_lf2: "0.30% max" },
    { element: "Nickel (Ni)", a105: "0.40% max", ss304: "8.0 - 10.5%", a350_lf2: "0.40% max" },
    { element: "Silicon (Si)", a105: "0.10 - 0.35%", ss304: "0.75% max", a350_lf2: "0.15 - 0.30%" }
  ];

  return (
    <>
      <ProductSEO
        title="Forged Socket Weld Fittings Manufacturer - ASME B16.11 Class 3000, 6000, 9000 Fittings"
        description="Premium manufacturer of ASME B16.11 forged socket weld fittings. High pressure elbows, tees, unions, and couplings in SS 304, 316, ASTM A105 carbon steel, and duplex steel in Mumbai."
        keywords="socket weld fittings, ASME B16.11 forged fittings, SW elbow, SW tee, socket weld coupling, A105 forged fittings, SS 304 socket weld, 3000# socket weld fittings, 6000# forged fittings, pipe fittings manufacturer India"
        category="Pipe Fittings"
        productName="Socket Weld Forged Fittings"
        specifications={[
          "Standards: ASME B16.11, BS 3799",
          "Pressure: 3000#, 6000#, 9000#",
          "Grades: A105, A350 LF2, SS 304/316L",
          "Sizes: 1/8\" to 4\""
        ]}
        canonicalUrl="/product/fittings/forged-fittings/socket-weld-fittings"
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 bg-navy-primary overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-gold-primary rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl">
              <nav className="flex items-center space-x-2 text-sm text-blue-100/60 mb-8">
                <Link href="/" className="hover:text-gold-primary transition-colors">Home</Link>
                <ArrowRightIcon className="w-3 h-3" />
                <Link href="/product/fittings/forged-fittings" className="hover:text-gold-primary transition-colors">Forged Fittings</Link>
              </nav>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-4xl font-bold text-white mb-6"
              >
                Socket Weld Forged Fittings <br />
                <span className="text-gold-primary text-xl md:text-2xl font-medium tracking-wide">High-Pressure ASME B16.11 Precision Branch & Directional Connections</span>
              </motion.h1>

              <p className="text-lg text-blue-100/80 mb-8 leading-relaxed max-w-2xl">
                Engineered for critical high-pressure services where leakage prevention is paramount. 
                Our socket weld fittings provide maximum structural strength and fatigue resistance in small-bore piping and instrumentation systems.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-8 py-3 rounded-md font-bold transition-all flex items-center shadow-lg shadow-gold-primary/20">
                  Engineering Datasheet <DownloadIcon className="ml-2 w-4 h-4" />
                </button>
                <Link href="/contact" className="border border-white/30 hover:bg-white/10 text-white px-8 py-3 rounded-md font-bold transition-all">
                  Bulk Inquiry
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Specification Table */}
              <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100">
                <h2 className="text-2xl font-bold text-navy-primary mb-8 flex items-center">
                  <SettingsIcon className="mr-3 text-gold-primary" /> Technical Specifications
                </h2>
                <div className="space-y-4 text-sm md:text-base">
                  {technicalSpecs.map((spec, i) => (
                    <div key={i} className="flex justify-between py-3 border-b border-gray-100 last:border-0">
                      <span className="text-gray-500 font-medium">{spec.property}</span>
                      <span className="text-navy-primary font-bold text-right">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chemical Composition */}
              <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100">
                <h2 className="text-2xl font-bold text-navy-primary mb-8 flex items-center">
                  <ZapIcon className="mr-3 text-gold-primary" /> Material Grade Analysis
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="p-4 rounded-tl-lg text-gray-700">Element</th>
                        <th className="p-4 text-gray-700">ASTM A105</th>
                        <th className="p-4 text-gray-700">SS 304</th>
                        <th className="p-4 rounded-tr-lg text-gray-700">A350 LF2</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-sm">
                      {chemicalComp.map((row, i) => (
                        <tr key={i} className="hover:bg-blue-50/30 transition-colors font-medium">
                          <td className="p-4 text-navy-primary">{row.element}</td>
                          <td className="p-4 text-gray-600 italic font-black">{row.a105}</td>
                          <td className="p-4 text-gray-600">{row.ss304}</td>
                          <td className="p-4 text-navy-secondary font-bold">{row.a350_lf2}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
             <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
                <div className="flex-1">
                   <h2 className="text-3xl font-bold text-navy-primary mb-6">Small Bore Performance Excellence</h2>
                   <p className="text-gray-600 mb-8 leading-relaxed text-lg italic border-l-4 border-gold-primary pl-6">
                     Our socket weld fittings are forged to maintain superior mechanical properties under intense pressure. 
                     The design eliminates the need for expensive pipe preparation while ensuring a leak-proof termination.
                   </p>
                   <div className="grid grid-cols-2 gap-6">
                      {[
                        { title: "Zero Leakage", icon: ShieldIcon },
                        { title: "High Fatigue", icon: TrendingUpIcon },
                        { title: "Compact Fit", icon: CogIcon },
                        { title: "Self-Alignment", icon: TargetIcon }
                      ].map((item, i) => (
                        <div key={i} className="flex items-center space-x-3">
                           <item.icon className="w-5 h-5 text-gold-primary" />
                           <span className="font-bold text-navy-primary text-sm uppercase tracking-wide">{item.title}</span>
                        </div>
                      ))}
                   </div>
                </div>
                <div className="flex-1 relative group">
                   <div className="bg-navy-primary rounded-3xl overflow-hidden shadow-2xl skew-x-3 group-hover:skew-x-0 transition-transform duration-700">
                     <img 
                       src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800" 
                       alt="Forged Socket Weld Fittings" 
                       className="w-full h-[400px] object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                     />
                   </div>
                   <div className="absolute -top-10 -left-10 bg-gold-primary text-navy-primary p-8 rounded-full shadow-2xl hidden lg:block border-4 border-white animate-pulse">
                      <span className="text-4xl font-black italic">620</span>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-center">BAR RATING</p>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* Global Hub Section */}
        <section className="py-20 bg-navy-primary text-white relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-2xl md:text-3xl font-black mb-12 uppercase italic tracking-widest text-gold-primary">B2B Worldwide Manufacturing & Logistics Hub</h2>
            <div className="max-w-4xl mx-auto space-y-8">
               <p className="text-lg text-blue-100/70 leading-relaxed font-light">
                 Operating from **Mumbai, India**, we are elite exporters of forged fittings to **GCC (Riyadh, Doha, Abu Dhabi)**, 
                 **USA (Houston, Chicago)**, and **Europe (Germany, UK)**. Every shipment is backed by 100% PMI testing, 
                 dimension reports, and IBR certification to meet global safety mandates.
               </p>
               <div className="flex flex-wrap justify-center gap-12 text-blue-100/40 font-black tracking-tighter uppercase text-xs">
                  <span className="flex items-center"><AwardIcon className="w-4 h-4 mr-2" /> ISO 9001:2015</span>
                  <span className="flex items-center"><GaugeIcon className="w-4 h-4 mr-2" /> Class 9000# Supply</span>
                  <span className="flex items-center"><BoxIcon className="w-4 h-4 mr-2" /> Export Packing</span>
               </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
