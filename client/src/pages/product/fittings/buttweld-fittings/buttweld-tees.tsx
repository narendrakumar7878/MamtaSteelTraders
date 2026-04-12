import ProductSEO from "@/components/ProductSEO";
import { ArrowLeft, ArrowRight, CheckCircle, Shield, Zap, Info, TrendingUp, Award, Download, Box, Key, Settings, Target, Anchor } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function ButtweldTeesDetail() {
  const technicalSpecs = [
    { property: "Standards", value: "ASME B16.9, MSS SP-75, DIN 2615, ISO 15590" },
    { property: "Types", value: "Straight Tee (Equal) | Reducing Tee (Unequal)" },
    { property: "Size Range", value: "1/2\" to 72\" NB" },
    { property: "Wall Thickness", value: "SCH 10S, 40S, 80S, 160, XXS" },
    { property: "Connections", value: "Butt-welding Beveled Ends" },
    { property: "Special Designs", value: "Barred Tees for Pigging, Wye Tees" }
  ];

  const chemicalComp = [
    { element: "Silicon (Si)", ss304: "0.75% max", ss316l: "0.75% max", carbonWpb: "0.10% min" },
    { element: "Phosphorus (P)", ss304: "0.045% max", ss316l: "0.045% max", carbonWpb: "0.035% max" },
    { element: "Sulfur (S)", ss304: "0.03% max", ss316l: "0.03% max", carbonWpb: "0.035% max" },
    { element: "Tensile Strength", ss304: "515 MPa min", ss316l: "485 MPa min", carbonWpb: "415 - 585 MPa" },
    { element: "Yield Strength", ss304: "205 MPa min", ss316l: "170 MPa min", carbonWpb: "240 MPa min" }
  ];

  return (
    <>
      <ProductSEO
        title="Buttweld Tees Manufacturer - Equal & Reducing Tees SS 304, 316, Carbon Steel A234 WPB"
        description="Premium buttweld tees manufacturer. ASME B16.9 straight and reducing tees in SS 304, 316, carbon steel, and alloy steel. High-quality branching solutions for industrial piping systems."
        keywords="buttweld tees, equal tee, reducing tee, SS 304 tee, SS 316L tee, A234 WPB tee, straight tee, pipe tee manufacturer, ASME B16.9 tees, industrial pipe fittings Mumbai"
        category="Pipe Fittings"
        productName="Buttweld Tees"
        specifications={[
          "Standards: ASME B16.9, MSS SP-75",
          "Grades: 304, 316L, A234 WPB",
          "Sizes: 1/2\" to 72\"",
          "Applications: Flow Distribution, Pipeline Branching"
        ]}
        canonicalUrl="/product/fittings/buttweld-fittings/buttweld-tees"
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 bg-navy-primary overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold-primary rounded-full filter blur-3xl translate-x-1/2 -translate-y-1/2"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl">
              <nav className="flex items-center space-x-2 text-sm text-blue-100/60 mb-8">
                <Link href="/" className="hover:text-gold-primary transition-colors">Home</Link>
                <ArrowRight className="w-3 h-3" />
                <Link href="/product/fittings/buttweld-fittings" className="hover:text-gold-primary transition-colors">Buttweld Fittings</Link>
              </nav>

              <motion.h1 
                initial={{ opacity: 0, x: -25 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-3xl md:text-4xl font-bold text-white mb-6"
              >
                Buttweld Tees <br />
                <span className="text-gold-primary text-xl md:text-2xl font-medium tracking-wide">High-Pressure Straight & Reducing Flow Distribution Components</span>
              </motion.h1>

              <p className="text-lg text-blue-100/80 mb-8 leading-relaxed max-w-2xl">
                Critical branching solutions engineered for structural strength and seamless flow distribution. 
                Our buttweld tees are forged to withstand extreme pressure and temperature cycles in complex pipeline networks.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-8 py-3 rounded-md font-bold transition-all flex items-center shadow-lg shadow-gold-primary/20">
                  Engineering Data <Download className="ml-2 w-4 h-4" />
                </button>
                <Link href="/contact" className="border border-white/30 hover:bg-white/10 text-white px-8 py-3 rounded-md font-bold transition-all">
                  Request Bulk Quote
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
                  <Settings className="mr-3 text-gold-primary" /> Dimension & Class Standards
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

              {/* Performance Characteristics */}
              <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100">
                <h2 className="text-2xl font-bold text-navy-primary mb-8 flex items-center">
                  <TrendingUp className="mr-3 text-gold-primary" /> Grade Performance Data
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="bg-gray-50 font-bold">
                        <th className="p-4 rounded-tl-lg text-gray-700">Property</th>
                        <th className="p-4 text-gray-700">Stainless 304</th>
                        <th className="p-4 text-gray-700">Stainless 316L</th>
                        <th className="p-4 rounded-tr-lg text-gray-700">Carbon WPB</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {chemicalComp.map((row, i) => (
                        <tr key={i} className="hover:bg-blue-50/30 transition-colors">
                          <td className="p-4 text-navy-primary font-semibold">{row.element}</td>
                          <td className="p-4 text-gray-600 font-medium">{row.ss304}</td>
                          <td className="p-4 text-gray-600 font-medium">{row.ss316l}</td>
                          <td className="p-4 text-navy-secondary font-bold italic">{row.carbonWpb}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Highlights */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-navy-primary mb-12">Industrial Branching Excellence</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Reinforced Branch", desc: "Expert forging ensures the branch junction maintains parent-pipe pressure ratings." },
                { title: "Precision Reducing", desc: "Perfect concentricity in reducing tees for smooth flow transitions." },
                { title: "Hygienic Finishing", desc: "Ultra-smooth internal bores preventing material buildup in food/pharma lines." }
              ].map((item, i) => (
                <div key={i} className="p-10 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-2xl hover:border-gold-primary transition-all group">
                  <div className="w-16 h-16 bg-gold-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold-primary transition-colors">
                    <CheckCircle className="w-8 h-8 text-gold-primary group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-primary mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Hub Section */}
        <section className="py-20 bg-navy-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gold-primary">B2B Global Manufacturing & Supply Chain</h2>
            <p className="max-w-4xl mx-auto text-blue-100/70 mb-12 text-lg">
              Operating from our high-capacity facility in **Mumbai**, we supply premium buttweld tees to infrastructure 
              projects in the **United Kingdom**, **Saudi Arabia**, **UAE**, and the **United States (East Coast)**. 
              Equipped with hydro-testing and ASME certification, we are the preferred partner for global oil & gas giants.
            </p>
            <div className="flex flex-wrap justify-center gap-12 font-bold tracking-widest opacity-40 uppercase text-xs">
              <span>ASME B16.9 Compliant</span>
              <span>Mill Cert EN 10204 3.1</span>
              <span>Third Party Inspection</span>
              <span>Fast Global Shipping</span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
