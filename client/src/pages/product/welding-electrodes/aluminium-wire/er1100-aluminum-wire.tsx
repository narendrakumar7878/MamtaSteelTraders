import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft as ArrowLeftIcon, ArrowRight as ArrowRightIcon, CheckCircle as CheckCircleIcon, Shield as ShieldIcon, Zap as ZapIcon, Info as InfoIcon, TrendingUp as TrendingUpIcon, Award as AwardIcon, Download as DownloadIcon, Box as BoxIcon, Key as KeyIcon, Settings as SettingsIcon, Target as TargetIcon, Anchor as AnchorIcon, Globe as GlobeIcon, Gauge as GaugeIcon } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function ER1100AluminumWireDetail() {
  const technicalSpecs = [
    { property: "AWS Classification", value: "ER1100 (AWS A5.10/A5.10M)" },
    { property: "Alloy Type", value: "99.0% Pure Aluminum (Al99.0)" },
    { property: "Melting Range", value: "643 - 657°C" },
    { property: "Density", value: "2.71 g/cm³" },
    { property: "Electrical Conductivity", value: "59% IACS" },
    { property: "Compliance", value: "SFA A5.10, DIN 1732" }
  ];

  const chemicalComp = [
    { element: "Aluminum (Al)", er1100: "99.00% min" },
    { element: "Silicon + Iron (Si+Fe)", er1100: "0.95% max" },
    { element: "Copper (Cu)", er1100: "0.05 - 0.20%" },
    { element: "Manganese (Mn)", er1100: "0.05% max" },
    { element: "Zinc (Zn)", er1100: "0.10% max" },
    { element: "Magnesium (Mg)", er1100: "0.05% max" },
    { element: "Beryllium (Be)", er1100: "0.0003% max" }
  ];

  const features = [
    { title: "Ultra Purity", desc: "99%+ aluminum content ensuring maximum corrosion resistance in chemical lines." },
    { title: "Hygienic Surface", desc: "Perfect for food processing equipment and decorative architectural welds." },
    { title: "Thermal Duty", desc: "Exceptional thermal and electrical conductivity for heat exchanger apps." },
    { title: "Low Spatter", desc: "Stable arc characteristics for precise, aesthetic bead profiles." }
  ];

  return (
    <>
      <ProductSEO
        title="ER1100 Aluminum Welding Wire Manufacturer - Pure Aluminum TIG/MIG Filler Rods"
        description="Premium ER1100 (Al99.0) pure aluminum welding wire manufacturer. High-purity, easy-welding AWS A5.10 filler rods. Ideal for food processing, chemical equipment, and architectural aluminum welding."
        keywords="ER1100 aluminum wire, pure aluminum welding filler, Al99.0 wire, AWS A5.10 ER1100, food grade aluminum wire, TIG rods pure aluminum, MIG wire ER1100, Mumbai filler rod supplier"
        category="Welding Electrodes"
        productName="ER1100 Aluminum Wire"
        specifications={[
          "AWS Class: ER1100",
          "Purity: 99.0% Aluminum min",
          "Applications: Food Industry, Chemical, HVAC",
          "Process: TIG & MIG welding"
        ]}
        canonicalUrl="/product/welding-electrodes/aluminium-wire/er1100-aluminum-wire"
      />

      <div className="min-h-screen bg-white text-navy-primary font-sans">
        {/* Luxury Hero Section */}
        <section className="relative pt-24 pb-20 bg-navy-primary text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-gold-primary rounded-full filter blur-[150px] -translate-x-1/2 -translate-y-1/2"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl">
              <nav className="flex items-center space-x-2 text-sm text-blue-100/60 mb-8 font-bold uppercase tracking-widest">
                <Link href="/" className="hover:text-gold-primary transition-colors">Home</Link>
                <ArrowRightIcon className="w-3 h-3" />
                <Link href="/product/welding-electrodes/aluminiumwire" className="hover:text-gold-primary transition-colors">Aluminium Wire</Link>
              </nav>

              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-5xl font-black mb-6 tracking-tight uppercase leading-none"
              >
                ER1100 Pure <br />
                <span className="text-gold-primary text-2xl md:text-3xl font-serif italic lowercase font-light">AWS A5.10 High-Purity Aluminum Filler Metal</span>
              </motion.h1>

              <p className="text-xl text-blue-100/80 mb-10 leading-relaxed max-w-2xl font-light italic border-l-4 border-gold-primary pl-8">
                The ultimate solution for welding commercially pure aluminum. 
                Our ER1100 wire is engineered for applications where chemical resistance and thermal conductivity are the primary project drivers.
              </p>

              <div className="flex flex-wrap gap-6 mt-12">
                <button className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-10 py-4 rounded-md font-black uppercase text-xs tracking-widest transition-all flex items-center shadow-2xl shadow-gold-primary/30">
                  Technical Datasheet <DownloadIcon className="ml-3 w-4 h-4" />
                </button>
                <Link href="/contact" className="border-2 border-white/20 hover:border-white/50 text-white px-10 py-4 rounded-md font-bold transition-all backdrop-blur-md uppercase text-xs tracking-widest">
                  Bulk Inquiry
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specification Grid */}
        <section className="py-24 bg-gray-50 border-b border-gray-200">
           <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-16 items-start">
                 {/* Engineering Specs */}
                 <div className="bg-white p-12 rounded-3xl shadow-xl border-t-[12px] border-gold-primary">
                    <h2 className="text-2xl font-black mb-10 text-navy-primary uppercase tracking-tighter flex items-center">
                       <SettingsIcon className="mr-4 text-gold-primary w-8 h-8" /> PRECISION STANDARDS
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       {technicalSpecs.map((spec, i) => (
                         <div key={i} className="flex flex-col border-b border-gray-50 pb-4 last:border-0 group hover:border-gold-primary transition-colors">
                            <span className="text-gray-400 font-bold uppercase text-[9px] tracking-[0.2em] mb-1">{spec.property}</span>
                            <span className="text-navy-primary font-black text-sm tracking-tight">{spec.value}</span>
                         </div>
                       ))}
                    </div>
                 </div>

                 {/* Chemical Analysis Table */}
                 <div className="bg-white p-12 rounded-3xl shadow-xl border-t-[12px] border-navy-primary overflow-hidden relative">
                    <div className="absolute top-0 right-0 p-8 opacity-5">
                       <ZapIcon className="w-32 h-32" />
                    </div>
                    <h2 className="text-2xl font-black mb-10 text-navy-primary uppercase tracking-tighter flex items-center">
                       <ShieldIcon className="mr-4 text-gold-primary w-8 h-8" /> COMPOSITION MATRIX (wt%)
                    </h2>
                    <div className="overflow-x-auto mt-4">
                       <table className="w-full text-left bg-gray-50/50 rounded-xl">
                          <thead>
                             <tr className="bg-navy-primary text-white text-[10px] uppercase tracking-widest font-black">
                                <th className="p-5 border-r border-white/10">Element</th>
                                <th className="p-5 text-center text-gold-primary">ER1100 AWS Criteria</th>
                             </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-100 text-[13px] font-bold text-gray-700">
                             {chemicalComp.map((row, i) => (
                               <tr key={i} className="hover:bg-white transition-all group">
                                  <td className="p-5 text-navy-primary font-black uppercase italic">{row.element}</td>
                                  <td className="p-5 text-center border-l border-gray-50 group-hover:text-gold-primary">{row.er1100}</td>
                               </tr>
                             ))}
                          </tbody>
                       </table>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Technical Features Section */}
        <section className="py-24 bg-white overflow-hidden">
           <div className="container mx-auto px-4 max-w-6xl">
              <div className="flex flex-col md:flex-row items-center gap-20">
                 <div className="flex-1 space-y-12">
                    <h2 className="text-4xl font-black leading-none text-navy-primary tracking-tighter uppercase">High-Purity Material Analytics</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                       {features.map((feature, i) => (
                         <div key={i} className="group p-6 bg-gray-50 rounded-2xl border-l-[6px] border-navy-primary hover:border-gold-primary transition-all">
                            <div className="flex items-center space-x-3 mb-3">
                               <CheckCircleIcon className="w-5 h-5 text-gold-primary" />
                               <h3 className="text-[11px] font-black text-navy-primary uppercase tracking-widest">{feature.title}</h3>
                            </div>
                            <p className="text-gray-500 text-[10px] uppercase font-bold leading-relaxed">{feature.desc}</p>
                         </div>
                       ))}
                    </div>
                    <div className="p-8 bg-blue-50/50 rounded-2xl border-b-[6px] border-gold-primary italic text-navy-primary font-serif font-light text-lg">
                       "ER1100 is engineered using 99% pure commercial-grade ingot, ensuring maximum chemical compatibility with 1050, 1070, and 1100 series aluminum grades while maintaining zero contamination in sensitive food-grade pipelines."
                    </div>
                 </div>
                 <div className="flex-1 space-y-8">
                    <h2 className="text-4xl font-black leading-none text-navy-primary tracking-tighter uppercase">Operational Advantages</h2>
                    <p className="text-gray-600 font-light leading-relaxed italic border-l-8 border-gold-primary pl-10 text-xl">
                       "The low melting range and high thermal conductivity of ER1100 make it the technical benchmark for precision welding in heat exchangers and cryogenic chemical storage systems."
                    </p>
                    <div className="space-y-4">
                       {[
                         "Thermal expansion matching 1xxx series",
                         "Superior color match for decorative anodizing",
                         "Excellent electrical conductivity (59% IACS)",
                         "High resistance to common chemical reagents"
                       ].map((item, i) => (
                         <div key={i} className="flex items-center space-x-4">
                            <ZapIcon className="w-5 h-5 text-gold-primary" />
                            <span className="text-navy-primary font-black uppercase text-[10px] tracking-widest">{item}</span>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Global Logistics Section */}
        <section className="py-24 bg-navy-primary text-white relative">
           <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-black text-gold-primary uppercase tracking-[0.5em] mb-12 italic">B2B GLOBAL SUPPLY REACH</h2>
              <p className="max-w-4xl mx-auto text-blue-100/60 font-light text-xl leading-relaxed mb-16 italic font-serif opacity-80">
                Operating high-capacity manufacturing ex-Mumbai, India. Servicing critical food processing and pharma sectors in **Germany**, 
                **Japan**, **United States**, and **South East Asia**. 
                Available in vacuum-sealed export spools (15kg/25kg) with full EN 10204 3.1 certification.
              </p>
              <div className="flex flex-wrap justify-center gap-16 opacity-30">
                 <div className="flex flex-col items-center"><AwardIcon className="w-14 h-14 mb-4" /><span className="text-[10px] font-black uppercase tracking-widest">ISO 9001:2015</span></div>
                 <div className="flex flex-col items-center"><GlobeIcon className="w-14 h-14 mb-4" /><span className="text-[10px] font-black uppercase tracking-widest">GLOBAL LOGISTICS</span></div>
                 <div className="flex flex-col items-center"><BoxIcon className="w-14 h-14 mb-4" /><span className="text-[10px] font-black uppercase tracking-widest">EXPORT PACKED</span></div>
              </div>
           </div>
        </section>
      </div>
    </>
  );
}
