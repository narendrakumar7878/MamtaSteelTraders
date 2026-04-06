import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, ArrowLeft, Mail, Phone, Shield, Zap, Target, Award, CheckCircle } from "lucide-react";
import { Link } from "wouter";

export default function ToolSteelHub() {
  const toolSteelGrades = [
    { name: "AISI D2 (1.2379)", category: "Cold Work", path: "/product/round-bars/tool-steel/aisi-d2-round-bars", desc: "High Carbon, High Chromium. Premier wear resistance." },
    { name: "AISI D3 (1.2080)", category: "Cold Work", path: "/product/round-bars/tool-steel/aisi-d3-round-bars", desc: "Maximum abrasion resistance for long-run tooling." },
    { name: "AISI H13 (1.2344)", category: "Hot Work", path: "/product/round-bars/tool-steel/aisi-h13-round-bars", desc: "Versatile thermal fatigue resistance for die casting." },
    { name: "AISI H11 (1.2343)", category: "Hot Work", path: "/product/round-bars/tool-steel/aisi-h11-round-bars", desc: "High toughness for structural aerospace components." },
    { name: "AISI P20 (1.2311)", category: "Plastic Mold", path: "/product/round-bars/tool-steel/aisi-p20-round-bars", desc: "Pre-hardened specialty for precision plastic molds." },
    { name: "DIN 2714 (DB6)", category: "Die Block", path: "/product/round-bars/tool-steel/din-2714-round-bars", desc: "Heavy forging master for hammers and die blocks." },
    { name: "AISI M2 (1.3343)", category: "High Speed", path: "/product/round-bars/tool-steel/m2-high-speed-steel", desc: "Standard HSS for drills, taps, and cutting tools." },
    { name: "AISI M35 (Co5)", category: "High Speed", path: "/product/round-bars/tool-steel/m35-high-speed-steel", desc: "5% Cobalt HSS for high-heat cutting environments." },
    { name: "AISI O1 (1.2510)", category: "Oil Hardening", path: "/product/round-bars/tool-steel/aisi-o1-round-bars", desc: "Precision oil-hardening stability for gauges." },
    { name: "AISI S7", category: "Shock Resisting", path: "/product/round-bars/tool-steel/aisi-s7-round-bars", desc: "Extreme impact resistance for pneumatic tools." }
  ];

  return (
    <>
      <ProductSEO
        title="Tool Steel Round Bars Manufacturer & Supplier | D2, H13, M2, P20 Die Steel"
        description="Leading supplier of high-performance Tool Steel round bars. Comprehensive range including Cold Work (D2, D3), Hot Work (H13, H11), High Speed (M2, M35), and Plastic Mold (P20) steels. Premium technical profiles."
        keywords="tool steel round bars, d2 tool steel supplier, h13 die steel mumbai, m2 high speed steel price, tool steel grades price list, industrial die steel"
        canonicalUrl="/product/round-bars/tool-steel"
      />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 font-bold tracking-tighter italic text-black font-black uppercase">
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
           <div className="container mx-auto px-4 py-4">
              <nav className="flex items-center space-x-2 text-sm flex-wrap text-black font-black uppercase italic font-black">
                 <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary underline decoration-navy-primary/20 transition-colors italic tracking-tighter uppercase font-black italic">Home</Link>
                 <ArrowRight className="w-4 h-4 text-gray-400 font-extrabold" />
                 <Link href="/product/round-bars/round-bars" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary underline decoration-navy-primary/20 transition-colors italic tracking-tighter uppercase font-black italic font-black">Round Bars</Link>
                 <ArrowRight className="w-4 h-4 text-gray-400 font-extrabold" />
                 <span className="text-navy-primary dark:text-gold-primary underline decoration-gold-primary decoration-2 underline-offset-4 italic tracking-tighter uppercase font-black italic">Tool Steel Series</span>
              </nav>
           </div>
        </div>
        <div className="container mx-auto px-4 py-4">
           <Link href="/product/round-bars/round-bars" className="inline-flex items-center text-navy-primary dark:text-gold-primary hover:underline font-black uppercase text-xs italic tracking-tighter italic font-black">
              <ArrowLeft className="w-3 h-3 mr-2 font-black" /> Back to Round Bars
           </Link>
        </div>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-navy-primary via-navy-secondary to-slate-800 text-white py-24 relative overflow-hidden font-black italic uppercase">
          <div className="container mx-auto px-4 relative z-10 font-black italic">
            <div className="max-w-4xl mx-auto text-center font-black">
              <span className="bg-gold-primary text-navy-primary px-6 py-2 rounded-full text-sm font-black uppercase tracking-widest mb-8 inline-block shadow-2xl scale-110 font-black italic">Industrial Precision Tooling</span>
              <h1 className="text-6xl md:text-8xl font-black mb-8 italic tracking-tighter uppercase leading-[0.9] underline decoration-gold-primary decoration-[6px] underline-offset-[16px] font-black italic">TOOL STEELS</h1>
              <p className="text-2xl text-gray-200 mb-12 max-w-3xl mx-auto italic opacity-90 leading-relaxed font-black">Centralizing the most critical Cold Work, Hot Work, High Speed, and Specialty Tool Steel grades into a high-authority technical repository for global industrial engineering.</p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center font-black">
                <Link href="/contact" className="bg-gold-primary hover:bg-white text-navy-primary px-12 py-5 rounded-[2rem] font-black transition-all shadow-2xl italic tracking-tighter uppercase text-2xl transform hover:scale-110 font-black italic">Request Batch Quote</Link>
                <a href="tel:+919819322576" className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 px-12 py-5 rounded-[2rem] font-black transition-all backdrop-blur-md italic tracking-tighter uppercase text-2xl transform hover:scale-110 font-black">Talk to Technical Expert</a>
              </div>
            </div>
          </div>
          <Zap className="absolute right-[-5%] top-[-5%] w-[600px] h-[600px] text-white/5 pointer-events-none rotate-12 opacity-30 shadow-2xl font-black" />
        </section>

        {/* Grade Gallery */}
        <section className="py-24 bg-white dark:bg-gray-800 font-black uppercase tracking-tighter italic shadow-inner">
          <div className="container mx-auto px-4 font-black">
            <div className="text-center mb-20 font-black">
              <h2 className="text-5xl font-black text-navy-primary dark:text-white mb-6 italic tracking-tighter uppercase underline decoration-gold-primary decoration-4 underline-offset-8 font-black">Premier Grade Catalog</h2>
              <p className="text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto italic font-bold">Explore the metallurgical profiles of the industry's most in-demand tool steels. Optimized for high wear, thermal fatigue, and shock resistance.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 font-black">
              {toolSteelGrades.map((grade, index) => (
                <div 
                  key={index} 
                  className="group bg-gray-50 dark:bg-gray-700 border-4 border-transparent hover:border-gold-primary rounded-[2.5rem] p-8 shadow-xl hover:shadow-[0_20px_50px_rgba(184,146,55,0.2)] transition-all duration-500 transform hover:-translate-y-4 flex flex-col justify-between font-black italic uppercase"
                >
                  <div>
                    <div className="flex justify-between items-start mb-6 font-black italic uppercase">
                       <span className="bg-navy-primary text-gold-primary px-4 py-1 rounded-full text-[10px] font-black tracking-widest uppercase shadow-md font-black italic">{grade.category}</span>
                       <Award className="w-6 h-6 text-gold-primary/40 group-hover:text-gold-primary transition-colors font-black" />
                    </div>
                    <h3 className="text-3xl font-black text-navy-primary dark:text-gold-primary mb-4 italic tracking-tighter uppercase group-hover:scale-105 transition-transform font-black italic underline decoration-gold-primary/10">
                      {grade.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-8 italic font-semibold leading-relaxed font-black">
                      {grade.desc}
                    </p>
                  </div>
                  <Link 
                    href={grade.path}
                    className="w-full bg-navy-primary text-white py-4 rounded-2xl font-black hover:bg-navy-secondary transition-all text-center flex items-center justify-center gap-3 group-hover:shadow-lg font-black italic uppercase"
                  >
                    View Grade Profile
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform font-black" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Capability */}
        <section className="py-24 bg-navy-primary text-white font-black italic uppercase tracking-tighter">
           <div className="container mx-auto px-4 font-black">
              <div className="grid lg:grid-cols-3 gap-12 font-black italic">
                 <div className="p-10 bg-white/5 rounded-[3rem] border-2 border-white/10 hover:border-gold-primary transition-all group font-black">
                    <Shield className="w-16 h-16 text-gold-primary mb-8 shadow-2xl font-black" />
                    <h3 className="text-3xl font-black mb-6 italic tracking-tighter uppercase font-black">Certified Compliance</h3>
                    <p className="text-gray-300 italic font-semibold font-black underline decoration-gold-primary/20">All bars are supplied with MTC (Material Test Certificates), heat treatment reports, and ultrasonic testing compliance as per ASTM/DIN standards.</p>
                 </div>
                 <div className="p-10 bg-white/5 rounded-[3rem] border-2 border-white/10 hover:border-gold-primary transition-all group font-black">
                    <Target className="w-16 h-16 text-gold-primary mb-8 shadow-2xl font-black" />
                    <h3 className="text-3xl font-black mb-6 italic tracking-tighter uppercase font-black">Precision Center</h3>
                    <p className="text-gray-300 italic font-semibold font-black underline decoration-gold-primary/20">In-house vertical band saws and high-precision cutting centers ensuring dimensional accuracy for every customized tool steel order.</p>
                 </div>
                 <div className="p-10 bg-white/5 rounded-[3rem] border-2 border-white/10 hover:border-gold-primary transition-all group font-black">
                    <CheckCircle className="w-16 h-16 text-gold-primary mb-8 shadow-2xl font-black" />
                    <h3 className="text-3xl font-black mb-6 italic tracking-tighter uppercase font-black">Global Readiness</h3>
                    <p className="text-gray-300 italic font-semibold font-black underline decoration-gold-primary/20">Extensive stock of D2, H13, and M2 grades ready for immediate dispatch across Pan India and international industrial markets.</p>
                 </div>
              </div>
           </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-white dark:bg-gray-800 text-center relative overflow-hidden font-black">
           <div className="container mx-auto px-4 font-black">
              <h2 className="text-5xl font-black text-navy-primary dark:text-white mb-8 italic tracking-tighter uppercase font-black">Uncompromising Tooling Steel</h2>
              <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-12 italic font-bold font-black underline decoration-gold-primary/10">From cold work blanking to high-speed aerospace machining, we provide the metallurgical edge for your superior engineering projects.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-8 font-black font-black uppercase">
                 <Link href="/contact" className="bg-navy-primary text-white px-16 py-6 rounded-[2rem] font-black hover:bg-navy-secondary transition-all shadow-[0_20px_50px_rgba(0,0,0,0.2)] text-2xl font-black italic">Start Technical Order</Link>
                 <a href="mailto:naren@mamtasteel.com" className="border-4 border-navy-primary text-navy-primary px-16 py-6 rounded-[2rem] font-black hover:bg-gray-50 transition-all text-2xl font-black italic">Download Full Inventory</a>
              </div>
           </div>
        </section>
      </div>
    </>
  );
}
