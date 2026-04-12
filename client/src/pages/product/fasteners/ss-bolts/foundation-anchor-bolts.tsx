
import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft, ArrowRight, CheckCircle, Shield, Zap, Info, TrendingUp, Award, Download, Box, Key, Settings, Target, MapPin } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function FoundationAnchorBoltsDetail() {
  const anchorageSpecs = [
    { property: "Standards", value: "ASTM F1554 (Similar), DIN 529, ISO 898-2" },
    { property: "Material Grades", value: "SS 304, 316L, Duplex 2205, Super Duplex" },
    { property: "Size Range", value: "M12 to M100 | 1/2\" to 4\" Diameter" },
    { property: "Bolt Types", value: "L-Type, J-Type, Plate Type, Epoxy Coated" }
  ];

  const structuralFeatures = [
    { feature: "Corrosion-Proof Anchoring", details: "Eliminates hydrogen embrittlement risks in wet concrete and coastal structural foundations." },
    { feature: "High-Load Integrity", details: "Quenched and tempered grades available for seismic and vibration-resistant bridge assemblies." },
    { feature: "Custom Fabrication", details: "Precision bending and plate welding to meet exact engineering foundation prints." }
  ];

  return (
    <>
      <ProductSEO
        title="Stainless Steel Foundation & Anchor Bolts - SS 316L, 304 Structural Anchors | Global Supplier"
        description="Premium Stainless Steel Foundation & Anchor Bolts Manufacturer. Grades SS 304, 316L, Duplex 2205. High-load structural anchoring for bridge, refinery, and building foundations globally."
        keywords="SS foundation bolts, stainless steel anchor bolts, SS 316L foundation bolts, structural SS anchors, L-type anchor bolts stainless, Mumbai anchor bolt manufacturer, UAE bridge fasteners, Saudi refinery foundation bolts, heavy duty SS anchors"
        category="Stainless Steel Bolts"
        productName="Stainless Steel Foundation & Anchor Bolts"
        specifications={["SS 304/316L/Duplex", "DIN 529", "M12 to M100", "Structural Anchoring"]}
        canonicalUrl="/product/fasteners/ss-bolts/foundation-anchor-bolts"
      />

      <div className="min-h-screen bg-[#FDFDFD]">
        {/* Navigation & Hero Section */}
        <section className="relative bg-[#0F172A] py-24 overflow-hidden font-sans border-b-2 border-gold-primary/20">
          <div className="absolute inset-0 opacity-10">
             <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_#3b82f6_0%,_transparent_50%)]"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <Link href="/product/fasteners/ss-bolts">
              <button className="flex items-center text-blue-100/60 hover:text-gold-primary transition-colors mb-12 group italic text-sm tracking-widest font-bold">
                <ArrowLeft className="w-5 h-5 mr-3 transform group-hover:-translate-x-2 transition-transform" />
                RETURN TO SS BOLT CATALOG
              </button>
            </Link>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-tighter leading-tight font-sans uppercase">
                Structural <br/>
                <span className="text-gold-primary">Foundation</span> <br/>
                Anchoring Systems
              </h1>
              <p className="text-xl text-slate-400 mb-14 max-w-3xl font-light leading-relaxed font-sans font-sans">
                Heavy-duty stainless steel anchoring solutions for critical structural foundations. Engineering reliability for bridges, industrial towers, and high-rise infrastructures in coastal and corrosive zones.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Technical Data Section */}
        <section className="py-24 bg-white font-sans font-sans text-navy-primary font-sans font-sans">
          <div className="container mx-auto px-4 font-sans font-sans">
             <div className="grid lg:grid-cols-4 gap-8 mb-24 font-sans font-sans">
                {anchorageSpecs.map((spec, i) => (
                  <div key={i} className="p-10 bg-slate-50 border border-slate-100 rounded-[3rem] hover:bg-white hover:shadow-2xl transition-all font-sans font-sans font-sans">
                     <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 font-sans font-sans font-sans">{spec.property}</div>
                     <h4 className="text-lg font-bold font-sans font-sans font-sans">{spec.value}</h4>
                  </div>
                ))}
             </div>

             <div className="grid lg:grid-cols-2 gap-20 font-sans font-sans">
                <div className="space-y-12 font-sans font-sans">
                   <h2 className="text-4xl font-black tracking-tight flex items-center font-sans font-sans font-sans">
                     <Shield className="w-12 h-12 mr-5 text-gold-primary font-sans font-sans font-sans" /> Structural Longevity Data
                   </h2>
                   <div className="space-y-10 font-sans font-sans font-sans">
                      {structuralFeatures.map((row, i) => (
                        <div key={i} className="group font-sans font-sans font-sans">
                           <h5 className="text-2xl font-bold mb-3 font-sans font-sans font-sans group-hover:text-gold-primary transition-colors">{row.feature}</h5>
                           <p className="text-slate-500 text-sm leading-relaxed font-sans font-sans">{row.details}</p>
                        </div>
                      ))}
                   </div>
                </div>

                <div className="p-12 bg-navy-primary rounded-[4rem] text-white shadow-3xl relative overflow-hidden group font-sans font-sans font-sans">
                   <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:rotate-12 transition-transform duration-1000 font-sans font-sans">
                      <Target className="w-80 h-80 font-sans font-sans font-sans" />
                   </div>
                   <h3 className="text-2xl font-bold mb-10 relative z-10 font-sans font-sans">Critical Infrastructure Applications</h3>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-5 relative z-10 font-sans font-sans font-sans">
                      {[
                        "Tower Foundation Grids",
                        "Refinery Vessel Support",
                        "Coastal Bridge Pylons",
                        "Seismic Dam Structures",
                        "Wind Turbine Concrete Bases",
                        "Port Crane Rail Anchorages",
                        "Desalination Tank Bases",
                        "Industrial Chimney Stacks"
                      ].map((app, i) => (
                        <div key={i} className="flex items-center space-x-4 bg-white/5 p-5 rounded-3xl border border-white/5 backdrop-blur-sm hover:bg-white/10 transition-all font-sans font-sans font-sans">
                           <CheckCircle className="w-5 h-5 text-gold-primary font-sans font-sans font-sans" />
                           <span className="text-xs font-bold leading-tight font-sans font-sans font-sans">{app}</span>
                        </div>
                      ))}
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* Global Distribution Map Section */}
        <section className="py-24 bg-slate-50 font-sans font-sans font-sans font-sans font-sans">
           <div className="container mx-auto px-4 font-sans font-sans font-sans">
              <div className="text-center mb-20 font-sans font-sans">
                <h2 className="text-4xl font-black text-navy-primary mb-5 uppercase tracking-tighter font-sans font-sans">Global Anchor Supply Integrity</h2>
                <p className="text-slate-500 text-lg max-w-2xl mx-auto font-sans font-sans font-sans">Trusted by international structural engineering firms for heavy-load foundation integrity.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-12 font-sans font-sans font-sans">
                 <div className="p-10 bg-white border border-slate-100 rounded-3xl font-sans font-sans">
                    <MapPin className="w-8 h-8 text-gold-primary mb-6 font-sans font-sans" />
                    <h5 className="font-bold text-navy-primary uppercase text-xs tracking-widest mb-4 font-sans font-sans">MIDDLE EAST (UAE/KSA)</h5>
                    <p className="text-sm text-slate-500 leading-relaxed font-sans font-sans font-sans">Approved supply for Saudi Vision 2030 megaprojects and UAE marine infrastructure extensions.</p>
                 </div>
                 <div className="p-10 bg-white border border-slate-100 rounded-3xl font-sans font-sans">
                    <MapPin className="w-8 h-8 text-gold-primary mb-6 font-sans font-sans font-sans" />
                    <h5 className="font-bold text-navy-primary uppercase text-xs tracking-widest mb-4 font-sans font-sans font-sans">EUROPEAN UNION SECTORS</h5>
                    <p className="text-sm text-slate-500 leading-relaxed font-sans font-sans font-sans">Conforming to exact EN standards for high-load anchorage in UK, German, and French civil engineering.</p>
                 </div>
                 <div className="p-10 bg-white border border-slate-100 rounded-3xl font-sans font-sans">
                    <MapPin className="w-8 h-8 text-gold-primary mb-6 font-sans font-sans font-sans">
                    </MapPin>
                    <h5 className="font-bold text-navy-primary uppercase text-xs tracking-widest mb-4 font-sans font-sans font-sans">PAN-INDIA MARKETS</h5>
                    <p className="text-sm text-slate-500 leading-relaxed font-sans font-sans font-sans">Supplying all major Metro rail projects, Smart City foundations, and coastal power plants across India.</p>
                 </div>
              </div>
           </div>
        </section>

        {/* Global CTA */}
        <section className="py-24 bg-[#0F172A] relative overflow-hidden font-sans font-sans">
          <div className="container mx-auto px-4 text-center relative z-10 font-sans font-sans">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-10 tracking-tighter uppercase font-sans font-sans">Secure Your <span className="text-gold-primary">Foundation</span></h2>
            <p className="text-slate-400 mb-16 text-xl max-w-2xl mx-auto font-sans font-sans">Immediate technical consultation and high-volume procurement logistics globally.</p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-10 font-sans font-sans">
               <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary font-black py-7 px-20 rounded-[2rem] text-xl shadow-3xl transition-all transform hover:scale-110 flex items-center group font-sans font-sans">
                  GET TECHNICAL QUOTE <ArrowRight className="ml-4 w-8 h-8 transform group-hover:translate-x-3 transition-transform font-sans font-sans" />
               </Link>
               <div className="text-left font-sans font-sans">
                 <p className="text-[10px] font-black text-gold-primary uppercase tracking-[0.4em] mb-2 font-sans font-sans">Global Engineering Line</p>
                 <a href="tel:+919819322576" className="text-4xl font-bold text-white font-sans font-sans tracking-tight font-sans font-sans">+91 9819322576</a>
               </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
