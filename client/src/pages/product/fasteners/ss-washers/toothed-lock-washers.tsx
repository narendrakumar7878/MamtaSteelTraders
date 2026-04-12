import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft, ArrowRight, CheckCircle, Shield, Zap, Info, TrendingUp, Award, Download, Box, Key, Settings, Target, Anchor } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function ToothedLockWashersDetail() {
  const technicalSpecs = [
    { property: "Standards", value: "DIN 6797, DIN 6798, ISO 6798, JIS B 1251" },
    { property: "Styles", value: "Internal Teeth (A), External Teeth (J)" },
    { property: "Size Range", value: "M2 to M30 | #2 to 1.25\"" },
    { property: "Material Grades", value: "SS 304, 316, 410, SS 321" },
    { property: "Locking Type", value: "Mechanical Tooth Engagement" },
    { property: "Thickness", value: "0.3mm to 3.0mm" }
  ];

  const chemicalComp = [
    { element: "Silicon (Si)", grade304: "1.00% max", grade316: "1.00% max" },
    { element: "Chromium (Cr)", grade304: "18.0 - 20.0%", grade316: "16.0 - 18.0%" },
    { element: "Nickel (Ni)", grade304: "8.0 - 10.5%", grade316: "10.0 - 14.0%" },
    { element: "Molybdenum (Mo)", grade304: "-", grade316: "2.0 - 3.0%" },
    { element: "Phosphorus (P)", grade304: "0.045% max", grade316: "0.045% max" }
  ];

  return (
    <>
      <ProductSEO
        title="Stainless Steel Toothed Lock Washers - SS 304, 316 DIN 6797 Internal/External Serrated Washers"
        description="Premium SS toothed lock washers manufacturer. DIN 6797 internal and external serrated lock washers in SS 304, 316. Superior locking for electronics and electrical applications."
        keywords="SS toothed washers, serrated lock washers, internal tooth washers, external tooth washers, DIN 6797 washers, SS 304 serrated washers, SS 316 lock washers, electronics fasteners India, star washers stainless steel"
        category="Fasteners"
        productName="SS Toothed Lock Washers"
        specifications={[
          "Standards: DIN 6797, DIN 6798",
          "Grades: 304, 316, 410",
          "Sizes: M2 - M30",
          "Applications: Electronics, Electrical Enclosures, Control Panels"
        ]}
        canonicalUrl="/product/fasteners/ss-washers/toothed-lock-washers"
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 bg-navy-primary overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-gold-primary rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl">
              <nav className="flex items-center space-x-2 text-sm text-blue-100/60 mb-8">
                <Link href="/" className="hover:text-gold-primary transition-colors">Home</Link>
                <ArrowRight className="w-3 h-3" />
                <Link href="/product/fasteners" className="hover:text-gold-primary transition-colors">Fasteners</Link>
                <ArrowRight className="w-3 h-3" />
                <Link href="/product/fasteners/ss-washers" className="hover:text-gold-primary transition-colors">SS Washers</Link>
              </nav>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-4xl font-bold text-white mb-6"
              >
                Stainless Steel Toothed Lock Washers <br />
                <span className="text-gold-primary text-xl md:text-2xl font-medium tracking-wide">Secure Star & Serrated DIN 6797 / 6798 Solutions</span>
              </motion.h1>

              <p className="text-lg text-blue-100/80 mb-8 leading-relaxed max-w-2xl">
                Providing ultimate anti-rotation and vibration security, our toothed lock washers feature precision-formed 
                internal or external serrations that bite into the surface for maximum torque retention. 
                Crucial for electronics, appliances, and high-stability electrical connections.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-8 py-3 rounded-md font-bold transition-all flex items-center shadow-lg shadow-gold-primary/20">
                  Engineering Datasheet <Download className="ml-2 w-4 h-4" />
                </button>
                <Link href="/contact" className="border border-white/30 hover:bg-white/10 text-white px-8 py-3 rounded-md font-bold transition-all">
                  Bulk Inquiry
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Specification Table */}
              <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100">
                <h2 className="text-2xl font-bold text-navy-primary mb-8 flex items-center">
                  <Settings className="mr-3 text-gold-primary" /> Technical Specifications
                </h2>
                <div className="space-y-4">
                  {technicalSpecs.map((spec, i) => (
                    <div key={i} className="flex justify-between py-3 border-b border-gray-100 last:border-0">
                      <span className="text-gray-500 font-medium">{spec.property}</span>
                      <span className="text-navy-primary font-bold text-right">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chemical Composition */}
              <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100">
                <h2 className="text-2xl font-bold text-navy-primary mb-8 flex items-center">
                  <Zap className="mr-3 text-gold-primary" /> Material Analysis
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="p-4 rounded-tl-lg text-gray-700">Element</th>
                        <th className="p-4 text-gray-700">Grade 304</th>
                        <th className="p-4 rounded-tr-lg text-gray-700">Grade 316</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-sm">
                      {chemicalComp.map((row, i) => (
                        <tr key={i} className="hover:bg-blue-50/30 transition-colors font-medium">
                          <td className="p-4 text-navy-primary">{row.element}</td>
                          <td className="p-4 text-gray-600">{row.grade304}</td>
                          <td className="p-4 text-gray-600">{row.grade316}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Features */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Shield, title: "Positive Locking", desc: "Teeth bite into mating surfaces preventing vibration-induced loosening." },
                { icon: Zap, title: "Electrical Conductivity", desc: "Penetrates surface coatings for superior ground connections." },
                { icon: Target, title: "High Stability", desc: "Internal/External styles optimized for different bolt/screw types." }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-white border border-gray-200 rounded-xl hover:border-gold-primary transition-all group">
                  <item.icon className="w-12 h-12 text-gold-primary mb-6 group-hover:rotate-12 transition-transform" />
                  <h3 className="text-xl font-bold text-navy-primary mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Manufacturing Standards */}
        <section className="py-20 bg-navy-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 italic text-gold-primary">B2B Manufacturing: Excellence in Every Tooth</h2>
            <p className="text-lg text-blue-100/80 mb-12 max-w-3xl mx-auto">
              Our toothed lock washers are preferred by global OEMs in **Germany, USA, and Japan**. 
              We utilize advanced punching and forming precision to ensure every tooth provides maximum mechanical engagement.
            </p>
            <div className="flex flex-wrap justify-center gap-10 opacity-60">
              <div className="flex items-center space-x-2"><CheckCircle className="text-gold-primary w-5 h-5" /><span>OEM Quality</span></div>
              <div className="flex items-center space-x-2"><CheckCircle className="text-gold-primary w-5 h-5" /><span>TÜV Certified</span></div>
              <div className="flex items-center space-x-2"><CheckCircle className="text-gold-primary w-5 h-5" /><span>Bulk Global Export</span></div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
