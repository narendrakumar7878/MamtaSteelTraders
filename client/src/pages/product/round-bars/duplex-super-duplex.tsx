import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, ArrowLeft, Phone, Mail, CheckCircle, Shield, Award, Activity, Microscope, Zap, Thermometer, Settings, ChevronRight } from "lucide-react";
import { Link } from "wouter";

export default function DuplexSuperDuplexRoundBars() {
  const duplexProducts = [
    {
      title: "Duplex 2205",
      subtitle: "UNS S31803 / S32205",
      description: "The most widely used duplex grade. Exceptional yield strength and SCC resistance.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop",
      path: "/product/round-bars/duplex-super-duplex/duplex-2205"
    },
    {
      title: "Super Duplex 2507",
      subtitle: "UNS S32750",
      description: "Extreme corrosion resistance for offshore and high-chloride environments. PREN > 40.",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5efa61df?q=80&w=800&auto=format&fit=crop",
      path: "/product/round-bars/duplex-super-duplex/super-duplex-2507"
    },
    {
      title: "Zeron 100",
      subtitle: "UNS S32760",
      description: "Super duplex alloy with added copper and tungsten for resistance in acidic fluids.",
      image: "https://images.unsplash.com/photo-1532187863486-abf9bdad1b69?q=80&w=800&auto=format&fit=crop",
      path: "/product/round-bars/duplex-super-duplex/zeron-100"
    },
    {
      title: "254 SMO",
      subtitle: "UNS S31254",
      description: "6% Moly alloy with high nitrogen. Superior resistance to pitting and crevice corrosion.",
      image: "https://images.unsplash.com/photo-1581093583449-80d009746377?q=80&w=800&auto=format&fit=crop",
      path: "/product/round-bars/duplex-super-duplex/254-smo"
    },
    {
      title: "Ferralium 255",
      subtitle: "UNS S32550",
      description: "Original super duplex. High strength and 25% Cr for excellent erosion-corrosion resistance.",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=800&auto=format&fit=crop",
      path: "/product/round-bars/duplex-super-duplex/ferralium-255"
    },
    {
      title: "Lean Duplex 2101",
      subtitle: "UNS S32101",
      description: "Cost-effective duplex with high strength and moderate corrosion resistance.",
      image: "https://images.unsplash.com/photo-1581094271901-803b50730191?q=80&w=800&auto=format&fit=crop",
      path: "/product/round-bars/duplex-super-duplex/lean-duplex-2101"
    }
  ];

  return (
    <>
      <ProductSEO
        title="Duplex & Super Duplex Round Bars | UNS S31803, S32750, Zeron 100 | Mumbai"
        description="Premium Duplex & Super Duplex Round Bar supplier in Mumbai India. Grades 2205, 2507, Zeron 100, 254 SMO. High strength and corrosion resistance for oil, gas and offshore."
        keywords="duplex round bars mumbai, super duplex UNS S32750 supplier, 2205 duplex steel price, Zeron 100 round bars india, 254 SMO alloy stockholder, lean duplex 2101 bars"
        canonicalUrl="/product/round-bars/duplex-super-duplex"
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 font-bold tracking-tighter italic">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-navy-primary via-navy-secondary to-slate-800 text-white py-24 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl">
              <span className="bg-gold-primary text-navy-primary px-6 py-2 rounded-full text-sm font-black uppercase tracking-widest mb-8 inline-block shadow-2xl underline decoration-navy-primary decoration-4">The Pinnacle of Steel Strength</span>
              <h1 className="text-6xl md:text-8xl font-black mb-8 italic tracking-tighter uppercase leading-none">Duplex & Super Duplex</h1>
              <p className="text-2xl text-gray-200 mb-10 leading-relaxed max-w-2xl opacity-90 italic font-medium uppercase tracking-tight italic tracking-tighter italic">Combined austenitic and ferritic microstructures for extreme performance in the world's most corrosive environments.</p>
              <div className="flex flex-wrap gap-6">
                <Link href="/contact" className="bg-gold-primary hover:bg-white text-navy-primary px-12 py-5 rounded-[2rem] font-black transition-all shadow-xl italic tracking-tighter uppercase text-lg">Inquire Technical Spec</Link>
                <a href="tel:+919819322576" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-12 py-5 rounded-[2rem] font-bold transition-all backdrop-blur-sm italic tracking-tighter text-lg">Call Metallurgy Desk</a>
              </div>
            </div>
          </div>
          <Activity className="absolute right-[-10%] bottom-[-10%] w-[600px] h-[600px] text-white/5 pointer-events-none rotate-12" />
        </section>

        {/* Global Breadcrumb & Navigation */}
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
           <div className="container mx-auto px-4 py-6 font-black">
              <nav className="flex items-center space-x-3 text-sm flex-wrap gap-y-2 text-black font-black uppercase italic font-black">
                 <Link href="/" className="text-gray-500 dark:text-gray-400 hover:text-navy-primary underline decoration-navy-primary/20 transition-all uppercase italic tracking-tighter uppercase font-black italic">Home</Link>
                 <ChevronRight className="w-4 h-4 text-gray-400 font-extrabold" />
                 <Link href="/product/round-bars/round-bars" className="text-gray-500 dark:text-gray-400 hover:text-navy-primary underline decoration-navy-primary/20 transition-all uppercase italic tracking-tighter uppercase font-black italic font-black">Round Bars</Link>
                 <ChevronRight className="w-4 h-4 text-gray-400 font-extrabold" />
                 <span className="text-navy-primary dark:text-gold-primary underline decoration-gold-primary decoration-2 underline-offset-4 italic tracking-tighter uppercase font-black italic font-black tracking-widest uppercase">Duplex & Super Duplex Hub</span>
              </nav>
           </div>
        </div>
        <div className="container mx-auto px-4 py-4">
           <Link href="/product/round-bars/round-bars" className="inline-flex items-center text-navy-primary dark:text-gold-primary hover:underline font-black uppercase text-xs italic tracking-tighter italic font-black">
              <ArrowLeft className="w-3 h-3 mr-2 font-black" /> Back to Round Bars
           </Link>
        </div>

        {/* Product Grid - Premium Luxury Layout */}
        <section className="py-24">
          <div className="container mx-auto px-4">
             <div className="text-center mb-20">
                <h2 className="text-5xl font-black text-navy-primary dark:text-white mb-6 italic tracking-tighter uppercase underline decoration-gold-primary decoration-8 underline-offset-[12px]">Engineered Grades</h2>
                <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto italic font-medium italic tracking-tighter italic">Select a specific grade to access full chemical analysis, mechanical property tables, and thermal processing charts.</p>
             </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {duplexProducts.map((product, i) => (
                <Link key={i} href={product.path}>
                  <div className="group bg-white dark:bg-gray-800 rounded-[2.5rem] shadow-2xl overflow-hidden border-2 border-gray-100 dark:border-gray-700 cursor-pointer hover:border-gold-primary transition-all hover:scale-[1.02] duration-500 relative flex flex-col h-full">
                    <div className="p-10 bg-gradient-to-br from-navy-primary to-navy-secondary relative overflow-hidden">
                       <div className="relative z-10">
                          <span className="bg-gold-primary text-navy-primary px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 inline-block shadow-lg underline decoration-navy-primary decoration-4 italic">{product.subtitle}</span>
                          <h3 className="text-4xl font-black text-white italic tracking-tighter uppercase leading-none">{product.title}</h3>
                       </div>
                       <Activity className="absolute right-[-10%] bottom-[-10%] w-32 h-32 text-white/10 rotate-12 pointer-events-none" />
                    </div>
                    <div className="p-10 flex-1 flex flex-col">
                      <p className="text-gray-500 dark:text-gray-300 text-sm leading-relaxed mb-8 italic font-semibold italic tracking-tighter uppercase border-l-4 border-gold-primary pl-4">{product.description}</p>
                      <div className="mt-auto flex items-center justify-between text-navy-primary dark:text-gold-primary font-black uppercase italic tracking-tighter border-t border-gray-100 dark:border-gray-700 pt-8 group-hover:text-gold-primary transition-all underline decoration-transparent group-hover:decoration-current decoration-4 underline-offset-8">
                        <span className="text-lg">View Metallurgy Profile</span>
                        <ArrowRight className="w-6 h-6 transform group-hover:translate-x-3 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Global Trust Section */}
        <section className="py-24 bg-navy-primary text-white overflow-hidden relative">
           <div className="container mx-auto px-4 relative z-10">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                 <div>
                    <h2 className="text-5xl font-black mb-8 italic tracking-tighter uppercase border-l-8 border-gold-primary pl-8 h-fit">Offshore & Marine Ready Metallurgy</h2>
                    <p className="text-lg text-gray-300 mb-10 leading-relaxed italic font-medium italic tracking-tighter italic">Our Duplex and Super Duplex round bars are source-certified to withstand extreme chloride stress corrosion cracking, pitting, and erosion. Used globally in desalination, deep-sea oil extraction, and high-pressure chemical reactors.</p>
                    <div className="grid grid-cols-2 gap-8 h-fit">
                       <div className="p-6 bg-white/5 rounded-3xl border border-white/10 h-fit">
                          <Microscope className="w-10 h-10 text-gold-primary mb-4" />
                          <h4 className="font-black uppercase italic tracking-tighter mb-2">Dual Phase Structure</h4>
                          <p className="text-xs text-gray-400 font-medium italic">50% Ferritic / 50% Austenitic balance for record performance.</p>
                       </div>
                       <div className="p-6 bg-white/5 rounded-3xl border border-white/10 h-fit">
                          <CheckCircle className="w-10 h-10 text-gold-primary mb-4" />
                          <h4 className="font-black uppercase italic tracking-tighter mb-2">Certified Batches</h4>
                          <p className="text-xs text-gray-400 font-medium italic">ASTM A276 / A479 and NORSOK M-650 compliant stock.</p>
                       </div>
                    </div>
                 </div>
                 <div className="relative h-fit group">
                    <img src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=800&auto=format&fit=crop" alt="Industrial Construction" className="rounded-[3rem] shadow-2xl relative z-10 grayscale group-hover:grayscale-0 transition-all duration-700" />
                    <div className="absolute -top-10 -right-10 w-64 h-64 bg-gold-primary/20 rounded-full blur-3xl" />
                    <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-navy-secondary/20 rounded-full blur-3xl" />
                 </div>
              </div>
           </div>
           <Settings className="absolute left-[-5%] bottom-[-5%] w-96 h-96 text-white/5 rotate-45 pointer-events-none" />
        </section>

        {/* Global Footer Action */}
        <section className="py-24 bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700 h-fit">
           <div className="container mx-auto px-4 text-center h-fit">
              <h2 className="text-5xl font-black text-navy-primary dark:text-white mb-8 italic tracking-tighter uppercase italic tracking-tighter italic h-fit">Request Global Export Pricing</h2>
              <p className="text-xl text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto font-medium italic italic tracking-tighter italic h-fit">Mamta Steel Traders is a key exporter of Super Duplex alloys, serving shipbuilding and energy industries from Dubai to Norway. Get a same-day technical estimate.</p>
              <div className="flex flex-col sm:flex-row gap-8 justify-center h-fit">
                 <Link href="/contact" className="bg-navy-primary text-white px-16 py-6 rounded-[2.5rem] font-black hover:bg-navy-secondary transition-all shadow-2xl italic tracking-tighter uppercase text-xl h-fit">Get Export Estimate</Link>
                 <a href="mailto:naren@mamtasteel.com" className="border-4 border-navy-primary text-navy-primary px-16 py-6 rounded-[2.5rem] font-black hover:bg-gray-50 transition-all italic tracking-tighter uppercase text-xl h-fit">Get Technical Sheet</a>
              </div>
           </div>
        </section>
      </div>
    </>
  );
}