import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, ArrowLeft, Phone, Mail, CheckCircle, Shield, Award } from "lucide-react";
import { Link } from "wouter";

export default function NickelAlloyRoundBars() {
  const nickelGrades = [
    { name: "Nickel 200 (UNS N02200)", path: "/product/round-bars/nickel-alloy/nickel-200", desc: "Commercially pure nickel with excellent caustic resistance." },
    { name: "Nickel 201 (UNS N02201)", path: "/product/round-bars/nickel-alloy/nickel-201", desc: "Low carbon pure nickel for high-temperature service above 315°C." },
    { name: "Alloy 20 (UNS N08020)", path: "/product/round-bars/nickel-alloy/alloy-20", desc: "Maximum resistance to sulfuric acid and chloride stress corrosion." },
    { name: "Alloy 800 (UNS N08800)", path: "/product/round-bars/nickel-alloy/alloy-800", desc: "High-temperature strength and oxidation/carburization resistance." },
    { name: "Alloy 825 (UNS N08825)", path: "/product/round-bars/nickel-alloy/alloy-825", desc: "Exceptional resistance to reducing and oxidizing acids." }
  ];

  const specifications = [
    "ASTM B166 - Standard Specification for Nickel-Chromium-Iron Alloys",
    "ASTM B564 - Standard Specification for Nickel Alloy Forgings",
    "Size Range: 6mm to 350mm diameter", 
    "Length: Up to 6000mm",
    "Condition: Solution Annealed, Aged"
  ];

  const applications = [
    "Chemical Processing",
    "Aerospace Components", 
    "Nuclear Applications",
    "High-Temperature Service",
    "Corrosive Environments",
    "Electronic Components",
    "Medical Devices",
    "Power Generation"
  ];

  return (
    <>
      <ProductSEO
        title="Nickel Alloy Round Bars - High Performance Alloys | Pan India Supplier"
        description="Premium nickel alloy round bars including Nickel 200, 201, Alloy 20, 800, and 825. Excellent high-temperature strength and acid corrosion resistance. Pan India ISO certified supplier."
        keywords="nickel alloy round bars mumbai, nickel 200 supplier india, alloy 20 bars price pan india, high temperature industrial alloys, corrosion resistant nickel rods, ASTM B564 forgings"
        canonicalUrl="/product/round-bars/nickel-alloy"
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-navy-primary via-navy-secondary to-slate-800 text-white relative overflow-hidden">
          <div className="container mx-auto px-4 py-16 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-heading md:text-heading font-bold mb-6">Nickel Alloy Round Bars</h1>
              <p className="text-xl mb-8 text-gray-200">High-Performance Alloys for Demanding Applications</p>
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
              <span className="text-navy-primary dark:text-gold-primary underline decoration-gold-primary decoration-2 underline-offset-4 italic tracking-tighter uppercase font-black italic">Nickel Alloy</span>
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
                <h2 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-6">Nickel Alloy Round Bars Overview</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Nickel alloy round bars offer exceptional performance in high-temperature and corrosive environments. 
                  These premium alloys are essential for aerospace, chemical processing, and nuclear applications.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-slate-800 dark:text-gray-100">High Temperature Strength</h3>
                      <p className="text-gray-600 dark:text-gray-300">Maintains strength at elevated temperatures</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Shield className="w-6 h-6 text-blue-500 mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-slate-800 dark:text-gray-100">Corrosion Resistance</h3>
                      <p className="text-gray-600 dark:text-gray-300">Excellent resistance to various corrosive media</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Award className="w-6 h-6 text-gold-primary mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-slate-800 dark:text-gray-100">Aerospace Grade</h3>
                      <p className="text-gray-600 dark:text-gray-300">Certified for critical aerospace applications</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop&crop=center"
                  alt="High-performance nickel alloy round bars"
                  className="w-full h-96 object-cover rounded-xl shadow-lg"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Available Grades Section */}
            <div className="mb-16">
              <h3 className="text-3xl font-black text-navy-primary dark:text-white mb-8 italic tracking-tighter uppercase text-center underline decoration-gold-primary decoration-4 underline-offset-8">Available Nickel Alloy Grades</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {nickelGrades.map((grade, index) => (
                  <Link 
                    key={index} 
                    href={grade.path}
                    className="group bg-white dark:bg-gray-800 rounded-[2rem] shadow-xl border border-gray-100 dark:border-gray-700 p-8 hover:shadow-gold-primary/20 transition-all transform hover:-translate-y-2 cursor-pointer border-b-4 border-b-gold-primary"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-xl font-black text-navy-primary dark:text-white italic tracking-tighter uppercase group-hover:text-gold-primary transition-colors">{grade.name}</h4>
                      <div className="bg-navy-primary group-hover:bg-gold-primary text-white group-hover:text-navy-primary p-2 rounded-lg transition-all transform group-hover:rotate-12">
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 italic font-black uppercase text-[10px] tracking-tighter mb-4 h-12 overflow-hidden">{grade.desc}</p>
                    <div className="flex items-center text-navy-primary dark:text-gold-primary font-black uppercase text-[10px] tracking-widest italic group-hover:underline">
                      View Technical Specs
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
              <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-4">Need Nickel Alloy Solutions?</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">Contact our high-performance alloy specialists</p>
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