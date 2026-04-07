import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, CheckCircle, Shield, Award, Activity, Microscope, Zap, Thermometer } from "lucide-react";
import { Link, useLocation } from "wouter";

// Import images
import steelBarsRods from "@/assets/steel-bars-rods.jpg";

export default function ColdWorkToolSteelListing() {
  const [, navigate] = useLocation();

  const toolSteelGrades = [
    {
      id: "d2",
      title: "D2 Tool Steel",
      description: "High Carbon, High Chromium (HCHCR) Die Steel with superior wear resistance.",
      image: steelBarsRods,
      path: "/product/cold-work-tool-steels/d2-tool-steel",
      highlights: ["58-62 HRC", "High Wear Resistance", "DIN 1.2379"]
    },
    {
      id: "d3",
      title: "D3 Tool Steel",
      description: "HCHCR-D3 steel for excellent abrasion resistance in cold work applications.",
      image: steelBarsRods,
      path: "/product/cold-work-tool-steels/d3-tool-steel",
      highlights: ["60-64 HRC", "Excellent Abrasion", "DIN 1.2080"]
    },
    {
      id: "o1",
      title: "O1 Tool Steel",
      description: "Oil hardening tool steel with excellent dimensional stability during heat treatment.",
      image: steelBarsRods,
      path: "/product/cold-work-tool-steels/o1-tool-steel",
      highlights: ["57-62 HRC", "Low Distortion", "DIN 1.2510"]
    },
    {
      id: "a2",
      title: "A2 Tool Steel",
      description: "Air hardening steel with a balanced mix of toughness and wear resistance.",
      image: steelBarsRods,
      path: "/product/cold-work-tool-steels/a2-tool-steel",
      highlights: ["57-62 HRC", "High Toughness", "DIN 1.1363"]
    }
  ];

  return (
    <>
      <ProductSEO
        title="Cold Work Tool Steels - D2, D3, O1, A2 Grade Dealer Mumbai | Mamta Steel Traders"
        description="Premium Cold Work Tool Steels supplier in Mumbai. High-quality D2, D3, O1, and A2 grade round bars and flats. Superior wear resistance and dimensional stability for dies and tooling."
        keywords="cold work tool steel, D2 tool steel Mumbai, D3 die steel, O1 oil hardening steel, A2 air hardening tool steel, HCHCR D2 supplier, tool steel round bars Mumbai"
        canonicalUrl="/product/cold-work-tool-steels"
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
                 <span className="text-navy-primary dark:text-gold-primary font-bold italic uppercase tracking-widest">Cold Work Tool Steels</span>
              </nav>
           </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-navy-primary via-navy-secondary to-slate-800 text-white py-16 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10 text-center">
             <span className="bg-gold-primary text-navy-primary px-4 py-1 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-6 inline-block shadow-lg">Precision Tooling Solutions</span>
             <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter italic uppercase text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gold-primary">Cold Work Steels</h1>
             <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto font-medium italic opacity-90 leading-relaxed">High-performance tool steel grades engineered for maximum abrasion resistance, toughness, and dimensional stability in cold forming applications.</p>
             <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="bg-gold-primary hover:bg-white text-navy-primary px-10 py-4 rounded-2xl font-black transition-all shadow-[0_10px_30px_rgba(212,175,55,0.3)] hover:-translate-y-1 italic uppercase tracking-tighter">Get Technical Quote</Link>
                <a href="tel:+919819322576" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-10 py-4 rounded-2xl font-bold transition-all backdrop-blur-md italic tracking-tighter">Call Expert Support</a>
             </div>
          </div>
          <Zap className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] text-white/5 pointer-events-none" />
        </section>

        {/* Grade Cards Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {toolSteelGrades.map((grade) => (
                   <div 
                      key={grade.id}
                      onClick={() => navigate(grade.path)}
                      className="group relative bg-white dark:bg-gray-800 rounded-[2.5rem] overflow-hidden shadow-2xl hover:shadow-gold-primary/20 transition-all duration-500 cursor-pointer border border-transparent hover:border-gold-primary/30"
                   >
                      <div className="h-64 relative overflow-hidden">
                         <img 
                            src={grade.image} 
                            alt={grade.title} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                         />
                         <div className="absolute inset-0 bg-gradient-to-t from-navy-primary to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                         <div className="absolute bottom-6 left-6">
                            <span className="bg-gold-primary text-navy-primary px-3 py-1 rounded-lg text-xs font-black uppercase italic">{grade.id.toUpperCase()} Grade</span>
                         </div>
                      </div>
                      <div className="p-8">
                         <h3 className="text-2xl font-black text-navy-primary dark:text-white mb-3 italic tracking-tighter uppercase group-hover:text-gold-primary transition-colors">{grade.title}</h3>
                         <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 font-medium italic leading-relaxed">{grade.description}</p>
                         <div className="flex flex-wrap gap-2 mb-8">
                            {grade.highlights.map((tag, idx) => (
                               <span key={idx} className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">{tag}</span>
                            ))}
                         </div>
                         <div className="flex items-center justify-between group/btn">
                            <span className="text-navy-primary dark:text-gold-primary font-black uppercase text-xs tracking-widest italic group-hover:mr-2 transition-all">View Metallurgy</span>
                            <div className="w-10 h-10 bg-navy-primary dark:bg-gold-primary text-white dark:text-navy-primary rounded-xl flex items-center justify-center group-hover:bg-gold-primary dark:group-hover:bg-white transition-all">
                               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </div>
                         </div>
                      </div>
                   </div>
                ))}
             </div>
          </div>
        </section>

        {/* Technical Footer */}
        <section className="py-20 bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700">
           <div className="container mx-auto px-4 grid md:grid-cols-3 gap-12">
              <div className="flex gap-6 items-start">
                 <Shield className="w-12 h-12 text-gold-primary flex-shrink-0" />
                 <div>
                    <h4 className="text-xl font-black text-navy-primary dark:text-white mb-2 italic uppercase">Certified Quality</h4>
                    <p className="text-sm text-gray-500 font-medium italic">All tool steels are ultrasonic tested and supplied with 100% material traceability and lab reports.</p>
                 </div>
              </div>
              <div className="flex gap-6 items-start">
                 <Thermometer className="w-12 h-12 text-gold-primary flex-shrink-0" />
                 <div>
                    <h4 className="text-xl font-black text-navy-primary dark:text-white mb-2 italic uppercase">Heat Treatment</h4>
                    <p className="text-sm text-gray-500 font-medium italic">Precision annealing and vacuum hardening services available as per international grade standards.</p>
                 </div>
              </div>
              <div className="flex gap-6 items-start">
                 <Award className="w-12 h-12 text-gold-primary flex-shrink-0" />
                 <div>
                    <h4 className="text-xl font-black text-navy-primary dark:text-white mb-2 italic uppercase">Industrial Lead</h4>
                    <p className="text-sm text-gray-500 font-medium italic">Over 40 years of expertise in providing critical tooling steels to the Indian manufacturing sector.</p>
                 </div>
              </div>
           </div>
        </section>
      </div>
    </>
  );
}


