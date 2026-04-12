import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft, ArrowRight, CheckCircle, Shield, Zap, Info, TrendingUp, Award, Download, Box, Key, Settings, Target, Anchor } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function ButtweldStubEndsDetail() {
  const technicalSpecs = [
    { property: "Standards", value: "ASME B16.9, MSS SP-43" },
    { property: "Types", value: "Type A | Type B | Type C (Lap Joint Pattern)" },
    { property: "Length Styles", value: "Short Pattern | Long Pattern" },
    { property: "Size Range", value: "1/2\" to 24\" NB (Larger on request)" },
    { property: "Wall Thickness", value: "SCH 5S to SCH 80S" },
    { property: "Face Finish", value: "Serrated | Smooth Finish (125-250 Ra)" }
  ];

  const chemicalComp = [
    { element: "Silicon (Si)", ss304: "0.75% max", duplex2205: "1.00% max", carbonWpb: "0.10% min" },
    { element: "Chromium (Cr)", ss304: "18.0 - 20.0%", duplex2205: "22.0 - 23.0%", carbonWpb: "0.40% max" },
    { element: "Nickel (Ni)", ss304: "8.0 - 10.5%", duplex2205: "4.5 - 6.5%", carbonWpb: "0.40% max" },
    { element: "Nitrogen (N)", ss304: "-", duplex2205: "0.14 - 0.20%", carbonWpb: "-" },
    { element: "Yield Strength", ss304: "205 MPa min", duplex2205: "450 MPa min", carbonWpb: "240 MPa min" }
  ];

  return (
    <>
      <ProductSEO
        title="Buttweld Stub Ends Manufacturer - SS 304, 316, Duplex 2205 Type A, B, C Lap Joint Stub Ends"
        description="Leading buttweld stub ends manufacturer. ASME B16.9 and MSS SP-43 Type A, B, C lap joint stub ends. High-quality stainless steel and duplex stub ends for flange connections in Mumbai."
        keywords="buttweld stub ends, lap joint stub ends, type A stub end, type B stub end, type C stub end, SS 304 stub end, SS 316L stub end, Duplex 2205 stub end, pipe fittings manufacturer Mumbai, MSS SP-43 stub ends"
        category="Pipe Fittings"
        productName="Buttweld Stub Ends"
        specifications={[
          "Standards: ASME B16.9, MSS SP-43",
          "Grades: 304, 316L, 2205 Duplex",
          "Sizes: 1/2\" to 24\"",
          "Types: Type A, B, C (Lap Joint)"
        ]}
        canonicalUrl="/product/fittings/buttweld-fittings/buttweld-stub-ends"
      />

      <div className="min-h-screen bg-white">
        {/* Detail Hero Section */}
        <section className="relative pt-24 pb-16 bg-navy-primary text-white">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gold-primary/5 -skew-x-12 transform translate-x-1/4"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl">
              <nav className="flex items-center space-x-2 text-sm text-blue-100/60 mb-6">
                <Link href="/" className="hover:text-gold-primary transition-colors">Home</Link>
                <ArrowRight className="w-3 h-3" />
                <Link href="/product/fittings/buttweld-fittings" className="hover:text-gold-primary transition-colors">Buttweld Fittings</Link>
              </nav>

              <motion.h1 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-3xl md:text-4xl font-bold mb-6"
              >
                Buttweld Stub Ends <br />
                <span className="text-gold-primary text-xl md:text-2xl font-medium tracking-widest uppercase">Precision Type A, B, & C Lap Joint Fittings</span>
              </motion.h1>

              <p className="text-lg text-blue-100/80 mb-10 leading-relaxed font-light">
                Essential for lap joint flange connections, our buttweld stub ends allow for easy flange alignment 
                and removal without cutting the pipe. Engineered to standard MSS SP-43 and ASME B16.9 and 
                available in short and long pattern configurations.
              </p>

              <div className="flex flex-wrap gap-5">
                <button className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-8 py-4 rounded-md font-black transition-all flex items-center shadow-lg shadow-gold-primary/30">
                  Engineering Datasheet <Download className="ml-3 w-4 h-4" />
                </button>
                <Link href="/contact" className="border border-white/40 hover:bg-white/10 text-white px-8 py-4 rounded-md font-bold transition-all backdrop-blur-md">
                  Request Bulk Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Data Section */}
        <section className="py-20 bg-gray-50 border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Specification List */}
              <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
                <h2 className="text-2xl font-bold text-navy-primary mb-10 flex items-center border-b-2 border-gold-primary pb-4 inline-block">
                  <Settings className="mr-3 text-gold-primary" /> Technical Standards
                </h2>
                <div className="grid grid-cols-1 gap-6">
                  {technicalSpecs.map((spec, i) => (
                    <div key={i} className="flex flex-col border-b border-gray-50 pb-4 last:border-0">
                      <span className="text-gray-400 text-[10px] uppercase font-bold tracking-widest mb-1">{spec.property}</span>
                      <span className="text-navy-primary font-bold">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Composition Matrix */}
              <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
                <h2 className="text-2xl font-bold text-navy-primary mb-10 flex items-center border-b-2 border-gold-primary pb-4 inline-block">
                  <Zap className="mr-3 text-gold-primary" /> Material Comparison Data
                </h2>
                <div className="overflow-x-auto mt-4">
                    <table className="w-full text-left text-sm">
                      <thead>
                        <tr className="bg-navy-primary text-white uppercase text-[10px] tracking-widest font-black">
                          <th className="p-4 border-r border-white/20">Element/Spec</th>
                          <th className="p-4 border-r border-white/20">SS 304</th>
                          <th className="p-4 border-r border-white/20">Duplex 2205</th>
                          <th className="p-4">Carbon WPB</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 text-gray-700 font-medium">
                        {chemicalComp.map((row, i) => (
                          <tr key={i} className="hover:bg-blue-50/50 transition-colors">
                            <td className="p-4 text-navy-primary font-bold bg-gray-50/50">{row.element}</td>
                            <td className="p-4 text-center">{row.ss304}</td>
                            <td className="p-4 text-center text-navy-secondary font-black">{row.duplex2205}</td>
                            <td className="p-4 text-center italic">{row.carbonWpb}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Knowledge Section */}
        <section className="py-24 bg-white">
           <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                 <h2 className="text-3xl font-bold text-navy-primary mb-12 text-center">Stub End Patterns & Types</h2>
                 <div className="grid md:grid-cols-3 gap-8">
                    {[
                      { type: "Type A", content: "Machined to fit standard lap joint flanges. The lap has a machined radius to fit the flange." },
                      { type: "Type B", content: "Machined to fit standard slip-on flanges. Similar to Type A but with a smaller radius." },
                      { type: "Type C", content: "Modified for use with either lap joint or slip-on flanges. Flare pattern design." }
                    ].map((item, i) => (
                      <div key={i} className="p-8 bg-gray-50 border border-gray-100 rounded-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-t-4 border-gold-primary">
                        <h3 className="text-xl font-black text-navy-primary mb-4 uppercase tracking-tighter">{item.type} Pattern</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.content}</p>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* Global Trade Intelligence */}
        <section className="py-20 bg-navy-primary text-white relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10 text-center">
             <h2 className="text-2xl md:text-3xl font-bold mb-10 text-gold-primary tracking-widest uppercase italic">Strategic Engineering Partners</h2>
             <p className="text-lg max-w-4xl mx-auto mb-12 font-light text-blue-100/60">
               Manufacturing from our specialized facility in **Mumbai**, we provide high-grade stub ends to 
               marine, chemical, and energy projects in the **United Kingdom**, **Saudi Arabia**, **UAE (Sharjah/Jebel Ali)**, 
               and **USA**. All components are available with 100% PMI testing and EN 10204 3.1 certification.
             </p>
             <div className="flex flex-wrap justify-center gap-16 opacity-30">
               <div className="flex flex-col items-center"><Shield className="w-12 h-12 mb-2" /><span>ISO 9001:2015</span></div>
               <div className="flex flex-col items-center"><Award className="w-12 h-12 mb-2" /><span>MSS SP-43</span></div>
               <div className="flex flex-col items-center"><Box className="w-12 h-12 mb-2" /><span>Marine Grade</span></div>
             </div>
          </div>
        </section>
      </div>
    </>
  );
}
