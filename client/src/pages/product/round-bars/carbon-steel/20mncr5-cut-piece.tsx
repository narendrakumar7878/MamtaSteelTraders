import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft, ArrowRight, Phone, Mail, CheckCircle, Shield, Award, Activity, Microscope, Scissors } from "lucide-react";
import { Link } from "wouter";

export default function Grade20MnCr5CutPiece() {
  const chemicalComposition = [
    { element: "Carbon (C)", value: "0.17 – 0.22%" },
    { element: "Manganese (Mn)", value: "1.10 – 1.40%" },
    { element: "Chromium (Cr)", value: "1.00 – 1.30%" },
    { element: "Silicon (Si)", value: "0.40% max" },
    { element: "Sulphur (S)", value: "0.035% max" },
    { element: "Phosphorus (P)", value: "0.025% max" }
  ];

  return (
    <>
      <ProductSEO
        title="20MnCr5 Round Bar Cut Pieces | Precision Cutting | Immediate Dispatch | Mamta Steel Traders"
        description="High-quality 20MnCr5 round bar cut pieces and flats. Customized cutting service for immediate industrial machining. ISO certified case hardening steel. Shop pre-cut 20MnCr5 in Mumbai."
        keywords="20MnCr5 cut piece, 20MnCr5 flat cut, precision steel cutting, 20MnCr5 fragments, customized steel lengths Mumbai"
        canonicalUrl="/product/round-bars/carbon-steel/20mncr5-cut-piece"
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 font-bold tracking-tighter italic">
        {/* Breadcrumb Navigation */}
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 font-bold tracking-tighter italic">
           <div className="container mx-auto px-4 py-4 font-bold tracking-tighter italic">
              <nav className="flex items-center space-x-2 text-sm flex-wrap gap-y-1 font-bold tracking-tighter italic">
                 <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary transition-all font-bold tracking-tighter italic">Home</Link>
                 <ArrowRight className="w-4 h-4 text-gray-400 font-bold tracking-tighter italic" />
                 <Link href="/product/round-bars/round-bars" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary transition-all font-bold tracking-tighter italic">Round Bars</Link>
                 <ArrowRight className="w-4 h-4 text-gray-400 font-bold tracking-tighter italic" />
                 <Link href="/product/round-bars/carbon-steel" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary transition-all font-bold tracking-tighter italic">Carbon Steel</Link>
                 <ArrowRight className="w-4 h-4 text-gray-400 font-bold tracking-tighter italic" />
                 <span className="text-navy-primary dark:text-gold-primary font-bold italic font-bold tracking-tighter italic">20MnCr5 Cut Piece</span>
              </nav>
           </div>
        </div>

        {/* Back Link */}
        <div className="container mx-auto px-4 py-4 font-bold tracking-tighter italic">
           <Link href="/product/round-bars/carbon-steel" className="inline-flex items-center text-navy-primary dark:text-gold-primary hover:underline font-bold italic font-bold tracking-tighter italic">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Carbon Steel
           </Link>
        </div>

        <section className="bg-gradient-to-br from-navy-primary via-navy-secondary to-slate-800 text-white py-20 relative overflow-hidden font-bold tracking-tighter italic">
          <div className="container mx-auto px-4 relative z-10 font-bold tracking-tighter italic">
             <div className="max-w-4xl font-bold tracking-tighter italic">
                <span className="bg-gold-primary text-navy-primary px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-6 inline-block font-bold tracking-tighter italic italic">Customized Cutting Service</span>
                <h1 className="text-5xl md:text-6xl font-extrabold mb-6 italic italic italic italic">20MnCr5 Cut Pieces</h1>
                <p className="text-xl text-gray-200 mb-8 leading-relaxed italic italic italic">Precision pre-cut 20MnCr5 sections for immediate manufacturing, reducing your processing time and material waste.</p>
                <div className="flex flex-wrap gap-4 font-bold tracking-tighter italic">
                   <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-8 py-3 rounded-xl font-bold transition-all shadow-xl hover:scale-105 italic italic">Order Custom Lengths</Link>
                   <a href="tel:+919819322576" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3 rounded-xl font-bold transition-all backdrop-blur-sm italic italic italic"><Phone className="w-5 h-5 inline mr-2" /> Get Instant Quote</a>
                </div>
             </div>
          </div>
        </section>

        <section className="py-16 font-bold tracking-tighter italic font-bold tracking-tighter italic">
          <div className="container mx-auto px-4 font-bold tracking-tighter italic font-bold tracking-tighter italic">
             <div className="grid lg:grid-cols-2 gap-12 font-bold tracking-tighter italic">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-100 font-bold tracking-tighter italic">
                   <h2 className="text-3xl font-bold text-navy-primary dark:text-gray-100 mb-6 border-l-4 border-gold-primary pl-4 font-bold tracking-tighter italic italic">Service Capabilities</h2>
                   <div className="space-y-6 font-bold tracking-tighter italic font-bold tracking-tighter italic">
                      <div className="flex gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl font-bold tracking-tighter italic">
                         <Scissors className="w-10 h-10 text-gold-primary shrink-0 italic" />
                         <div>
                            <p className="font-bold font-bold tracking-tighter italic">Precision Band-Saw Cutting</p>
                            <p className="text-sm text-gray-500 italic">Tight tolerance cutting to your exact specifications (up to 500mm diameter).</p>
                         </div>
                      </div>
                      <div className="flex gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl font-bold tracking-tighter italic">
                         <Activity className="w-10 h-10 text-gold-primary shrink-0 italic font-bold tracking-tighter italic" />
                         <div>
                            <p className="font-bold font-bold tracking-tighter italic">Zero Material Waste</p>
                            <p className="text-sm text-gray-500 italic">Pay only for the length you need with our ready-to-use cut pieces.</p>
                         </div>
                      </div>
                   </div>
                </div>

                <div className="bg-navy-primary text-white p-8 rounded-3xl shadow-2xl font-bold tracking-tighter italic font-bold tracking-tighter italic">
                   <h3 className="text-2xl font-bold mb-6 italic italic font-bold tracking-tighter italic">20MnCr5 Technical Data</h3>
                   <div className="grid grid-cols-2 gap-4 font-bold tracking-tighter italic">
                      {chemicalComposition.slice(0, 4).map((item, i) => (
                         <div key={i} className="bg-white/5 p-4 rounded-xl border border-white/10 font-bold tracking-tighter italic font-bold tracking-tighter italic">
                            <p className="text-xs text-gray-400 uppercase font-bold tracking-tighter italic italic">{item.element}</p>
                            <p className="text-lg font-bold italic font-bold tracking-tighter italic">{item.value}</p>
                         </div>
                      ))}
                   </div>
                </div>
             </div>
          </div>
        </section>
      </div>
    </>
  );
}
