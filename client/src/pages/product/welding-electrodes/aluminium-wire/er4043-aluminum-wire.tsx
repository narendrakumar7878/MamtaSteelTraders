import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft as ArrowLeftIcon, ArrowRight as ArrowRightIcon, CheckCircle as CheckCircleIcon, Shield as ShieldIcon, Zap as ZapIcon, Info as InfoIcon, TrendingUp as TrendingUpIcon, Award as AwardIcon, Download as DownloadIcon, Box as BoxIcon, Key as KeyIcon, Settings as SettingsIcon, Target as TargetIcon, Anchor as AnchorIcon, Globe as GlobeIcon, Gauge as GaugeIcon } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function ER4043AluminumWireDetail() {
  const technicalSpecs = [
    { property: "AWS Classification", value: "ER4043 (AWS A5.10/A5.10M)" },
    { property: "Alloy Type", value: "AlSi5 (5% Silicon)" },
    { property: "Melting Range", value: "574 - 632°C" },
    { property: "Density", value: "2.68 g/cm³" },
    { property: "Thermal Conductivity", value: "150-160 W/m-K" },
    { property: "Shielding Gas", value: "100% Argon | Argon/Helium Mix" }
  ];

  const chemicalComp = [
    { element: "Silicon (Si)", er4043: "4.50 - 6.00%" },
    { element: "Iron (Fe)", er4043: "0.80% max" },
    { element: "Copper (Cu)", er4043: "0.30% max" },
    { element: "Manganese (Mn)", er4043: "0.05% max" },
    { element: "Magnesium (Mg)", er4043: "0.05% max" },
    { element: "Zinc (Zn)", er4043: "0.10% max" },
    { element: "Titanium (Ti)", er4043: "0.20% max" },
    { element: "Aluminum (Al)", er4043: "Remainder" }
  ];

  const mechProperties = [
    { property: "Tensile Strength", value: "160 - 180 MPa" },
    { property: "Yield Strength (0.2%)", value: "40 - 60 MPa" },
    { property: "Elongation (A5)", value: "5 - 15%" },
    { property: "Color Match", value: "Standard (Tends to turn gray after anodizing)" }
  ];

  return (
    <>
      <ProductSEO
        title="ER4043 Aluminum Welding Wire Manufacturer - Silicon Alloy AlSi5 TIG/MIG Rods"
        description="Premium ER4043 (AlSi5) aluminum welding wire manufacturer. High-fluidity, low-melting-point AWS A5.10 filler rods. Ideal for 6000 series aluminum, casting repair, and architectural fabrication."
        keywords="ER4043 aluminum wire, AlSi5 welding filler, silicon aluminum wire, 5% silicon aluminum wire, AWS A5.10 ER4043, TIG welding filler er4043, MIG wire ER4043, 6061 aluminum welding wire"
        category="Welding Electrodes"
        productName="ER4043 Aluminum Wire"
        specifications={[
          "AWS Class: ER4043",
          "Alloy Base: 5% Silicon",
          "Applications: 6061 Allied, Castings, General Fab",
          "Process: TIG & MIG welding"
        ]}
        canonicalUrl="/product/welding-electrodes/aluminium-wire/er4043-aluminum-wire"
      />

      <div className="min-h-screen bg-white font-sans text-navy-primary">
        {/* Luxury Hero Section */}
        <section className="relative pt-24 pb-20 bg-navy-primary text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-primary filter blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl">
              <nav className="flex items-center space-x-2 text-sm text-blue-100/60 mb-8 font-black uppercase tracking-widest">
                <Link href="/" className="hover:text-gold-primary transition-colors">Home</Link>
                <ArrowRightIcon className="w-3 h-3" />
                <Link href="/product/welding-electrodes/aluminiumwire" className="hover:text-gold-primary transition-colors">Aluminium Wire</Link>
              </nav>

              <motion.h1 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-5xl font-black mb-6 tracking-tighter uppercase leading-none"
              >
                ER4043 (AlSi5) <br />
                <span className="text-gold-primary text-2xl md:text-3xl font-serif italic lowercase font-light">High-Fluidity Silicon Alloy Aluminum Filler metal</span>
              </motion.h1>

              <p className="text-xl text-blue-100/80 mb-10 leading-relaxed max-w-2xl font-light italic">
                Our best-selling general-purpose filler wire. Engineered with 5% Silicon, ER4043 offers exceptional fluidity and low crack sensitivity, 
                making it the premier choice for 6000 series alloys and aluminum castings.
              </p>

              <div className="flex flex-wrap gap-6 mt-12">
                <button className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-10 py-5 rounded-md font-black uppercase text-[11px] tracking-[0.2em] transition-all flex items-center shadow-2xl shadow-gold-primary/30 transform hover:-translate-y-1">
                  Full Technical Catalog <DownloadIcon className="ml-3 w-4 h-4" />
                </button>
                <Link href="/contact" className="border-2 border-white/20 hover:border-white/50 text-white px-10 py-5 rounded-md font-bold transition-all backdrop-blur-md uppercase text-[11px] tracking-[0.2em]">
                  Bulk Export Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Data Section */}
        <section className="py-24 bg-gray-50 border-y border-gray-100">
           <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-16 items-start">
                 {/* Specifications Side */}
                 <div className="bg-white p-12 rounded-[2rem] shadow-2xl border-l-[15px] border-gold-primary relative overflow-hidden">
                    <div className="absolute bottom-0 right-0 p-10 opacity-5">
                       <SettingsIcon className="w-48 h-48" />
                    </div>
                    <h2 className="text-3xl font-black mb-12 text-navy-primary uppercase tracking-tighter">ENGINEERING BENCHMARKS</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                       {technicalSpecs.map((spec, i) => (
                         <div key={i} className="group pb-4 border-b border-gray-100 last:border-0 hover:border-gold-primary transition-colors">
                            <span className="text-gray-400 font-bold uppercase text-[9px] tracking-[0.3em] block mb-2">{spec.property}</span>
                            <span className="text-navy-primary font-black text-sm tracking-tight">{spec.value}</span>
                         </div>
                       ))}
                    </div>
                 </div>

                 {/* Chemical Side */}
                 <div className="bg-white p-12 rounded-[2rem] shadow-2xl border-r-[15px] border-navy-primary">
                    <h2 className="text-3xl font-black mb-10 text-navy-primary uppercase tracking-tighter">Analytical Matrix (wt%)</h2>
                    <div className="overflow-x-auto mt-6">
                       <table className="w-full text-left">
                          <thead>
                             <tr className="bg-navy-primary text-white text-[10px] uppercase tracking-[0.2em] font-black">
                                <th className="p-5 border-r border-white/10">Element</th>
                                <th className="p-5 text-center text-gold-primary">ER4043 Standards</th>
                             </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-100 text-[13px] font-bold text-gray-700">
                             {chemicalComp.map((row, i) => (
                               <tr key={i} className="hover:bg-blue-50/50 transition-all group">
                                  <td className="p-5 text-navy-primary font-black uppercase italic bg-gray-50/50">{row.element}</td>
                                  <td className="p-5 text-center group-hover:text-gold-primary">{row.er4043}</td>
                               </tr>
                             ))}
                          </tbody>
                       </table>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Advanced Technical Properties */}
        <section className="py-24 bg-white overflow-hidden text-navy-primary">
           <div className="container mx-auto px-4 max-w-6xl">
              <div className="flex flex-col md:flex-row items-center gap-24">
                 <div className="flex-1 space-y-12">
                    <h2 className="text-[2.5rem] font-black leading-none tracking-tighter uppercase">Fluid Excellence & Silicon Integration</h2>
                    <p className="text-gray-600 text-xl font-light leading-relaxed border-l-8 border-navy-primary pl-10 italic">
                       "ER4043 (AlSi5) is engineered with a high silicon content that strategically lowers the melting temperature of the weld puddle. This enhanced fluidity significantly minimizes the risk of hot cracking during the solidification of 6000 series aluminum alloys and complex castings."
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                       {[
                         { title: "Weld Bead Aesthetics", desc: "Clean transition and superior shine for architectural applications." },
                         { title: "Casting Compatibility", desc: "Highly effective for repairing 356.0 and 319.0 aluminum casting alloys." },
                         { title: "Filler Chemistry", desc: "Precisely controlled Silicon (5%) ensures stable arc and easy feeding." },
                         { title: "Reduced Cracking", desc: "Formulated to accommodate high stress during joint cooling phases." }
                       ].map((item, i) => (
                         <div key={i} className="bg-gray-50 p-6 rounded-2xl border-b-4 border-gold-primary hover:-translate-y-1 transition-transform">
                            <h3 className="text-navy-primary font-black text-xs uppercase tracking-widest mb-1">{item.title}</h3>
                            <p className="text-gray-500 text-[10px] uppercase font-bold leading-tight">{item.desc}</p>
                         </div>
                       ))}
                    </div>
                 </div>
                 <div className="flex-1 space-y-12">
                    <h2 className="text-[2.5rem] font-black leading-none tracking-tighter uppercase italic text-gold-primary">Mechanical Integrity</h2>
                    <div className="space-y-6">
                       {mechProperties.map((prop, i) => (
                         <div key={i} className="flex flex-col border-b border-gray-100 pb-2">
                            <span className="text-gray-400 font-black uppercase text-[9px] tracking-widest">{prop.property}</span>
                            <span className="text-navy-primary font-black text-2xl tracking-tighter uppercase">{prop.value}</span>
                         </div>
                       ))}
                    </div>
                    <div className="p-8 bg-blue-50/30 rounded-3xl border-r-8 border-gold-primary italic text-navy-primary font-light text-lg font-serif">
                       "As Mamta Steel Traders' primary multi-purpose aluminum filler, ER4043 maintains its engineering authority in aerospace components and structural frames where consistent fluidity is paramount."
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Global Trade & Logistics Section */}
        <section className="py-24 bg-navy-primary text-white relative">
           <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-5xl font-black text-gold-primary uppercase tracking-[0.4em] mb-12 italic opacity-90">GLOBAL FILLER METAL SUPPLY</h2>
              <p className="max-w-4xl mx-auto text-blue-100/60 font-light text-xl leading-relaxed mb-16 italic font-serif opacity-80 decoration-gold-primary/30 underline decoration-1 underline-offset-8">
                Leading manufacturer & exporter ex-Mumbai, India. Strategic supply chain support for architectural fabrication in **Dubai (UAE)**, 
                automotive sectors in **Germany**, and aerospace hubs in **Texas (USA)**. 
                Complete AWS A5.10 material traceability and ocean-grade export packaging.
              </p>
              <div className="flex flex-wrap justify-center gap-16 scale-110">
                 <div className="flex flex-col items-center"><AwardIcon className="w-12 h-12 mb-4 text-gold-primary" /><span className="text-[10px] font-black uppercase tracking-[0.2em]">AWS A5.10 Certified</span></div>
                 <div className="flex flex-col items-center"><GlobeIcon className="w-12 h-12 mb-4 text-gold-primary" /><span className="text-[10px] font-black uppercase tracking-[0.2em]">Worldwide DDP</span></div>
                 <div className="flex flex-col items-center"><ShieldIcon className="w-12 h-12 mb-4 text-gold-primary" /><span className="text-[10px] font-black uppercase tracking-[0.2em]">Premium Purity</span></div>
              </div>
           </div>
        </section>
      </div>
    </>
  );
}
