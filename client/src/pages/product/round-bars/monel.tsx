import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, ArrowLeft, Phone, Mail, CheckCircle, Shield, Award } from "lucide-react";
import { Link } from "wouter";

export default function MonelRoundBars() {
  const monelGrades = [
    { 
      name: "Monel 400 (UNS N04400)", 
      path: "/product/round-bars/monel/monel-400-round-bars",
      desc: "Standard marine grade with excellent seawater resistance."
    },
    { 
      name: "Monel K-500 (UNS N05500)", 
      path: "/product/round-bars/monel/monel-k500-round-bars",
      desc: "Age-hardened version with superior strength and non-magnetic properties."
    }
  ];

  const specifications = [
    "ASTM B164 - Standard Specification for Nickel-Copper Alloy Rod, Bar, and Wire",
    "Size Range: 6mm to 350mm diameter",
    "Length: Up to 6000mm",
    "Condition: Hot Finished, Cold Drawn"
  ];

  const applications = [
    "Marine Engineering",
    "Chemical Processing", 
    "Oil Refining Equipment",
    "Seawater Applications",
    "Pump Shafts",
    "Valve Trim",
    "Heat Exchangers",
    "Propeller Shafts"
  ];

  return (
    <>
      <ProductSEO
        title="Monel Round Bars - 400, K-500 | Pan India Supplier | Mamta Steel Traders"
        description="Premium Monel round bars for marine and chemical applications. Excellent corrosion resistance in seawater and acids. Monel 400, K-500 grades available. ISO certified Pan India supplier."
        keywords="monel round bars mumbai, monel 400 supplier india, monel k500 price pan india, marine grade nickel copper alloy, seawater resistant bars, ASTM B164 monel rods"
        canonicalUrl="/product/round-bars/monel"
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-navy-primary via-navy-secondary to-slate-800 text-white relative overflow-hidden">
          <div className="container mx-auto px-4 py-16 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-heading md:text-heading font-bold mb-6">Monel Round Bars</h1>
              <p className="text-xl mb-8 text-gray-200">Superior Nickel-Copper Alloy for Marine Applications</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center">
                  <Mail className="w-5 h-5 mr-2" />
                  Get Quote
                </Link>
                <a href="tel:+919819322576" className="border-2 border-white hover:bg-white hover:text-navy-primary px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Breadcrumb & Navigation */}
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4 py-4 font-black">
            <nav className="flex items-center space-x-2 text-sm flex-wrap text-black font-black uppercase italic font-black">
              <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary underline decoration-navy-primary/20 transition-colors italic tracking-tighter uppercase font-black italic">Home</Link>
              <ArrowRight className="w-4 h-4 text-gray-400 font-extrabold" />
              <Link href="/products" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary underline decoration-navy-primary/20 transition-colors italic tracking-tighter uppercase font-black italic font-black">Products</Link>
              <ArrowRight className="w-4 h-4 text-gray-400 font-extrabold" />
              <Link href="/product/round-bars/round-bars" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary underline decoration-navy-primary/20 transition-colors italic tracking-tighter uppercase font-black italic font-black">Round Bars</Link>
              <ArrowRight className="w-4 h-4 text-gray-400 font-extrabold" />
              <span className="text-navy-primary dark:text-gold-primary underline decoration-gold-primary decoration-2 underline-offset-4 italic tracking-tighter uppercase font-black italic">Monel</span>
            </nav>
          </div>
        </div>
        <div className="container mx-auto px-4 py-4">
           <Link href="/product/round-bars/round-bars" className="inline-flex items-center text-navy-primary dark:text-gold-primary hover:underline font-black uppercase text-xs italic tracking-tighter italic font-black">
              <ArrowLeft className="w-3 h-3 mr-2 font-black" /> Back to Round Bars
           </Link>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-6">Monel Round Bars Overview</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Monel is a nickel-copper alloy known for exceptional resistance to seawater corrosion. 
                  These round bars are ideal for marine engineering and chemical processing applications.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-slate-800 dark:text-gray-100">Seawater Resistance</h3>
                      <p className="text-gray-600 dark:text-gray-300">Outstanding resistance to seawater and marine environments</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Shield className="w-6 h-6 text-blue-500 mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-slate-800 dark:text-gray-100">Chemical Resistance</h3>
                      <p className="text-gray-600 dark:text-gray-300">Excellent resistance to acids and alkalis</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Award className="w-6 h-6 text-gold-primary mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-slate-800 dark:text-gray-100">High Strength</h3>
                      <p className="text-gray-600 dark:text-gray-300">Superior mechanical properties for demanding applications</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=600&h=400&fit=crop&crop=center"
                  alt="High-quality Monel round bars for marine applications"
                  className="w-full h-96 object-cover rounded-xl shadow-lg"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Available Grades Section */}
            <div className="mb-16">
              <h3 className="text-3xl font-black text-navy-primary dark:text-white mb-8 italic tracking-tighter uppercase text-center underline decoration-gold-primary decoration-4 underline-offset-8">Available Monel Grades</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {monelGrades.map((grade, index) => (
                  <Link 
                    key={index} 
                    href={grade.path}
                    className="group bg-white dark:bg-gray-800 rounded-[2rem] shadow-xl border border-gray-100 dark:border-gray-700 p-8 hover:shadow-gold-primary/20 transition-all transform hover:-translate-y-2 cursor-pointer border-b-4 border-b-gold-primary"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-2xl font-black text-navy-primary dark:text-white italic tracking-tighter uppercase group-hover:text-gold-primary transition-colors">{grade.name}</h4>
                      <div className="bg-navy-primary group-hover:bg-gold-primary text-white group-hover:text-navy-primary p-2 rounded-lg transition-all transform group-hover:rotate-12">
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 italic font-black uppercase text-xs tracking-tighter mb-4">{grade.desc}</p>
                    <div className="flex items-center text-navy-primary dark:text-gold-primary font-black uppercase text-[10px] tracking-widest italic group-hover:underline">
                      View Technical Specifications
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Specifications Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 h-fit">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-6 italic tracking-tighter uppercase border-b-2 border-gold-primary/20 pb-2">Technical Standards</h3>
                <div className="space-y-3">
                  {specifications.map((spec, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-navy-primary rounded-full mr-3 mt-2"></div>
                      <span className="text-gray-700 dark:text-gray-300">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-6">Key Applications</h3>
                <div className="space-y-3">
                  {applications.map((application, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-gold-primary rounded-full mr-3 mt-2"></div>
                      <span className="text-gray-700 dark:text-gray-300">{application}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-4">Need Monel Solutions?</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">Contact our marine alloy specialists</p>
              <Link href="/contact" className="bg-navy-primary hover:bg-navy-secondary text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center">
                <Mail className="w-5 h-5 mr-2" />
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}