import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, ArrowLeft, Phone, Mail, Award, Shield, CheckCircle, Zap, Activity, Thermometer, Microscope } from "lucide-react";
import { Link, useLocation } from "wouter";

// Import images
import copper_mamta_steel_traders_img from "@/assets/COPPER MAMTA STEEL TRADERS.jpg";

export default function CopperNickel() {
  const [, navigate] = useLocation();

  const copperNickelProducts = [
    {
      id: "c14500",
      name: "C14500 Tellurium Copper",
      path: "/product/round-bars/copper-nickel/c14500-tellurium-copper",
      description: "High-performance tellurium copper with excellent machinability and thermal conductivity for electrical and electronic applications.",
      specifications: ["C14500 Grade", "Tellurium Enhanced", "93% IACS Conductivity", "Excellent Thermal Properties"],
      highlights: ["85% Machinability", "Electrical Conductivity", "High Corrosion Resistance"],
    },
    {
      id: "c15000",
      name: "C15000 Zirconium Copper",
      path: "/product/round-bars/copper-nickel/c15000-zirconium-copper",
      description: "Premium CuZr zirconium copper round bars with superior strength and electrical conductivity for demanding industrial applications.",
      specifications: ["C15000 Grade", "Zirconium Copper", "Resistance Welding Grade", "High Strength Copper"],
      highlights: ["Thermal Stability", "Non-Stick Performance", "High Strength"],
    },
    {
      id: "c17510",
      name: "C17510 Beryllium Copper",
      path: "/product/round-bars/copper-nickel/c17510-beryllium-copper",
      description: "High-strength beryllium copper with exceptional spring properties and corrosion resistance for critical engineering applications.",
      specifications: ["C17510 Grade", "Beryllium Copper", "RWMA Class 3", "High Strength & Conductivity"],
      highlights: ["Spring Properties", "Hardness Retention", "Industrial Springs"],
    },
    {
      id: "c18150",
      name: "C18150 Chromium Zirconium Copper",
      path: "/product/round-bars/copper-nickel/c18150-chromium-zirconium-copper",
      description: "Premium chromium zirconium copper with excellent thermal and electrical properties for high-load industrial applications.",
      specifications: ["C18150 Grade", "Chromium Zirconium", "80% IACS Conductivity", "Resistance Welding Grade 2"],
      highlights: ["Spot Welding Tips", "Thermal Stability", "Extreme Reliability"],
    },
    {
      id: "c70600",
      name: "C70600 Copper Nickel (90/10)",
      path: "/product/round-bars/copper-nickel/c70600-copper-nickel-90-10",
      description: "C70600 copper nickel 90/10 round bars with superior seawater corrosion resistance and anti-fouling properties.",
      specifications: ["C70600 Grade", "Cu-Ni 90/10", "ASTM B151", "Marine Grade Alloy"],
      highlights: ["Seawater Resistance", "Anti-Fouling", "Ocean Piping"],
    },
    {
      id: "c93200",
      name: "C93200 Bearing Bronze (SAE660)",
      path: "/product/round-bars/copper-nickel/c93200-bearing-bronze",
      description: "High-strength C93200 red bronze round bars with excellent wear resistance and anti-friction bearing properties.",
      specifications: ["C93200 Grade", "SAE660 Standard", "Red Bronze Bearing", "Industry Leader Bronze"],
      highlights: ["High Load Bearing", "Anti-Friction", "Industrial Bushings"],
    },
    {
      id: "70-30",
      name: "Cu-Ni 70/30 (C71500)",
      path: "/product/round-bars/copper-nickel/cu-ni-70-30",
      description: "Premium copper nickel 70/30 round bars with superior erosion resistance for extreme marine and chemical environments.",
      specifications: ["Cu-Ni 70/30", "C71500 Standard", "High Flow Resistance", "Chemical Processing Grade"],
      highlights: ["Maximum Corrosion", "Erosion Resistance", "Critical Piping"],
    },
    {
      id: "90-10-iso",
      name: "Cu-Ni 90/10 Industrial",
      path: "/product/round-bars/copper-nickel/cu-ni-90-10",
      description: "High-quality copper nickel 90/10 round bars with optimized seawater cooling properties and ISO certified reliability.",
      specifications: ["90/10 Standard", "Heat Exchanger Tubes", "Thermal Stability", "Desalination Grade"],
      highlights: ["Thermal Efficiency", "Desalination Ready", "Certified Batch"],
    },
    {
      id: "sae660-hdt",
      name: "SAE 660 Bronze HDT",
      path: "/product/round-bars/copper-nickel/sae-660-bronze",
      description: "Premium heavy-duty SAE660 red bronze round bars with exceptional load capacity and industrial wear life.",
      specifications: ["SAE660 Standard", "High Load Capacity", "Heavy Duty Bushing", "ASTM B505"],
      highlights: ["Wear Resistance", "Extreme Load", "Precision Bushings"],
    }
  ];

  return (
    <>
      <ProductSEO
        title="Copper Nickel & Special Alloy Round Bars Supplier Mumbai | Cu-Ni 70/30, 90/10, Beryllium Copper"
        description="Leading supplier of premium Copper Nickel (70/30, 90/10), C17510 Beryllium Copper, C14500 Tellurium Copper & C18150 CuCrZr round bars. ISO certified, global shipping from Mumbai India."
        keywords="copper nickel round bars, cu-ni 90/10 supplier mumbai, beryllium copper c17510, zirconium copper c15000, tellurium copper c14500, sae 660 bronze, marine grade copper nickel"
        canonicalUrl="/product/round-bars/copper-nickel"
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 font-bold tracking-tighter italic">
        {/* Breadcrumb Navigation */}
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4 py-4 font-black">
            <nav className="flex items-center space-x-2 text-sm flex-wrap text-black font-black uppercase italic font-black">
              <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary underline decoration-navy-primary/20 transition-colors italic tracking-tighter uppercase font-black italic">Home</Link>
              <ArrowRight className="w-4 h-4 text-gray-400 font-extrabold" />
              <Link href="/product/round-bars/round-bars" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary underline decoration-navy-primary/20 transition-colors italic tracking-tighter uppercase font-black italic font-black">Round Bars</Link>
              <ArrowRight className="w-4 h-4 text-gray-400 font-extrabold" />
              <span className="text-navy-primary dark:text-gold-primary underline decoration-gold-primary decoration-2 underline-offset-4 italic tracking-tighter uppercase font-black italic">Copper Nickel & Alloys</span>
            </nav>
          </div>
        </div>
        <div className="container mx-auto px-4 py-4">
           <Link href="/product/round-bars/round-bars" className="inline-flex items-center text-navy-primary dark:text-gold-primary hover:underline font-black uppercase text-xs italic tracking-tighter italic font-black">
              <ArrowLeft className="w-3 h-3 mr-2 font-black" /> Back to Round Bars
           </Link>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-navy-primary via-navy-secondary to-slate-800 text-white py-16 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10 text-center">
             <span className="bg-gold-primary text-navy-primary px-4 py-1 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-6 inline-block shadow-lg underline decoration-navy-primary decoration-2 underline-offset-4">Advanced Alloy Engineering</span>
             <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter italic uppercase text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gold-primary">Copper Nickel Alloys</h1>
             <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto font-medium italic opacity-90 leading-relaxed">Superior corrosion resistance and high-conductivity solutions for marine, aerospace, and critical industrial applications.</p>
             <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="bg-gold-primary hover:bg-white text-navy-primary px-10 py-4 rounded-2xl font-black transition-all shadow-[0_10px_30px_rgba(212,175,55,0.3)] hover:-translate-y-1 italic uppercase tracking-tighter">Request Technical Quote</Link>
                <a href="tel:+919819322576" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-10 py-4 rounded-2xl font-bold transition-all backdrop-blur-md italic tracking-tighter">Talk to Specialist</a>
             </div>
          </div>
          <Microscope className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] text-white/5 pointer-events-none" />
        </section>

        {/* Product Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {copperNickelProducts.map((product) => (
                <div 
                  key={product.id}
                  onClick={() => navigate(product.path)}
                  className="group relative bg-white dark:bg-gray-800 rounded-[2.5rem] overflow-hidden shadow-2xl hover:shadow-gold-primary/20 transition-all duration-500 cursor-pointer border border-transparent hover:border-gold-primary/30"
                >
                  <div className="h-64 relative overflow-hidden">
                    <img 
                      src={copper_mamta_steel_traders_img} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-primary to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                    <div className="absolute bottom-6 left-6">
                       <span className="bg-gold-primary text-navy-primary px-3 py-1 rounded-lg text-[10px] font-black uppercase italic tracking-widest shadow-lg">Premium Grade</span>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-black text-navy-primary dark:text-white mb-3 italic tracking-tighter uppercase group-hover:text-gold-primary transition-colors">{product.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 font-medium italic leading-relaxed">{product.description}</p>
                    <div className="flex flex-wrap gap-2 mb-8">
                       {product.highlights.map((tag, idx) => (
                          <span key={idx} className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">{tag}</span>
                       ))}
                    </div>
                    <div className="flex items-center justify-between group/btn">
                       <span className="text-navy-primary dark:text-gold-primary font-black uppercase text-xs tracking-widest italic group-hover:mr-2 transition-all">View Metallurgy</span>
                       <div className="w-10 h-10 bg-navy-primary dark:bg-gold-primary text-white dark:text-navy-primary rounded-xl flex items-center justify-center group-hover:bg-gold-primary dark:group-hover:bg-white transition-all shadow-lg">
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
        <section className="py-20 bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700 overflow-hidden">
          <div className="container mx-auto px-4 relative">
             <div className="grid md:grid-cols-3 gap-12 relative z-10">
                <div className="flex gap-6 items-start">
                   <Shield className="w-12 h-12 text-gold-primary flex-shrink-0" />
                   <div>
                      <h4 className="text-xl font-black text-navy-primary dark:text-white mb-2 italic uppercase">Corrosion Defense</h4>
                      <p className="text-sm text-gray-500 font-medium italic">Our copper-nickel alloys are engineered for extreme seawater and chemical resistance, featuring superior bio-fouling protection.</p>
                   </div>
                </div>
                <div className="flex gap-6 items-start">
                   <Zap className="w-12 h-12 text-gold-primary flex-shrink-0" />
                   <div>
                      <h4 className="text-xl font-black text-navy-primary dark:text-white mb-2 italic uppercase">High Conductivity</h4>
                      <p className="text-sm text-gray-500 font-medium italic">Special grades like Tellurium and Beryllium Copper optimized for maximum electrical and thermal IACS efficiency.</p>
                   </div>
                </div>
                <div className="flex gap-6 items-start">
                   <Award className="w-12 h-12 text-gold-primary flex-shrink-0" />
                   <div>
                      <h4 className="text-xl font-black text-navy-primary dark:text-white mb-2 italic uppercase">Certified Supply</h4>
                      <p className="text-sm text-gray-500 font-medium italic">Full mill test certificates (MTC) provided with chemical analysis and mechanical testing reports for all batches.</p>
                   </div>
                </div>
             </div>
             <Activity className="absolute right-0 top-0 w-96 h-96 text-gray-100 dark:text-gray-700/50 -rotate-12 translate-x-1/2 pointer-events-none" />
          </div>
        </section>

        {/* Global SEO Footer Section */}
        <section className="py-20 bg-navy-primary text-white">
           <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl font-black mb-8 italic tracking-tighter uppercase italic">The World's Trusted Copper Alloy Partner</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 max-w-4xl mx-auto">
                 <div>
                    <h5 className="text-gold-primary text-3xl font-black italic">5000+</h5>
                    <p className="text-xs font-bold uppercase tracking-widest opacity-70">Metric Tons Shipped</p>
                 </div>
                 <div>
                    <h5 className="text-gold-primary text-3xl font-black italic">45+</h5>
                    <p className="text-xs font-bold uppercase tracking-widest opacity-70">Countries Served</p>
                 </div>
                 <div>
                    <h5 className="text-gold-primary text-3xl font-black italic">ISO 9001</h5>
                    <p className="text-xs font-bold uppercase tracking-widest opacity-70">Quality Certified</p>
                 </div>
                 <div>
                    <h5 className="text-gold-primary text-3xl font-black italic">24/7</h5>
                    <p className="text-xs font-bold uppercase tracking-widest opacity-70">Technical Support</p>
                 </div>
              </div>
              <p className="text-blue-100 max-w-2xl mx-auto mb-10 italic font-medium italic">From Mumbai to London, Dubai to Singapore, Mamta Steel Traders delivers precision-engineered copper alloys for critical infrastructure. Join our global network of engineering leaders.</p>
              <Link href="/contact" className="bg-gold-primary text-navy-primary px-12 py-5 rounded-[2rem] font-black italic uppercase tracking-tighter hover:bg-white transition-all shadow-2xl shadow-gold-primary/20">Expand Your Supply Chain</Link>
           </div>
        </section>
      </div>
    </>
  );
}