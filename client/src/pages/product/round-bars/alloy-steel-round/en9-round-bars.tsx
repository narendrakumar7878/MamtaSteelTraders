import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, ArrowLeft, CheckCircle } from "lucide-react";
import alloys_steel_mamta_steel_traders_img from "@/assets/ALLOYS STEEL  MAMTA STEEL TRADERS.jpg";
import { Link } from "wouter";

export default function GradeEN9RoundBars() {
    const chemicalComposition = [
        { element: "Carbon (C)", min: "0.50", max: "0.60" },
        { element: "Silicon (Si)", min: "0.10", max: "0.40" },
        { element: "Manganese (Mn)", min: "0.50", max: "0.80" },
        { element: "Sulfur (S)", min: "—", max: "0.050" },
        { element: "Phosphorus (P)", min: "—", max: "0.050" },
    ];
    const equivalentGrades = [
        { country: "Germany / DIN", grade: "C55 / CK55 / 1.0535" },
        { country: "USA / AISI", grade: "1055" },
        { country: "Japan / JIS", grade: "S55C" },
        { country: "India / IS", grade: "C55Mn75" },
    ];
    const applications = [
        "Springs, spring washers and resilient components",
        "Chisels, hand tools and impact tools",
        "Agricultural tillage equipment and plough shares",
        "Crankshafts and flywheels",
        "High-wear parts and scrapers",
        "Railway wagon coupling components",
        "Saw blades and cutting edges",
        "Low-stress engineering components",
    ];
    return (
        <>
            <ProductSEO
                title="EN9 Round Bars (C55 / 1055 / CK55) – Medium-High Carbon Steel | Mamta Steel Traders"
                description="Buy EN9 / C55 / 1055 medium-high carbon steel round bars for springs, tools, agricultural equipment, and high-wear components. BS 970 070M55. 6mm–500mm dia. Mumbai supplier."
                keywords="EN9 round bar, C55 steel, 1055 steel, CK55 equivalent, BS 970 070M55, medium high carbon steel, EN9 supplier India, EN9 chemical composition, S55C equivalent, buy EN9 bar"
                canonicalUrl="/product/round-bars/alloy-steel-round/en9-round-bars"
            />
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
                <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                    <div className="container mx-auto px-4 py-4">
                        <nav className="flex items-center space-x-2 text-sm flex-wrap gap-y-1">
                            <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary transition-colors">Home</Link>
                            <ArrowRight className="w-4 h-4 text-gray-400" />
                            <Link href="/product/round-bars/alloy-steel-round" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary transition-colors">Alloy Steel Round</Link>
                            <ArrowRight className="w-4 h-4 text-gray-400" />
                            <span className="text-navy-primary dark:text-gold-primary font-medium">EN9 Round Bars</span>
                        </nav>
                    </div>
                </div>
                <div className="container mx-auto px-4 py-4">
                    <Link href="/product/round-bars/alloy-steel-round" className="inline-flex items-center text-navy-primary dark:text-gold-primary hover:underline font-medium">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Alloy Steel Round Bars
                    </Link>
                </div>
                <div className="bg-gradient-to-br from-navy-primary via-navy-secondary to-slate-800 text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="container mx-auto px-4 py-16 relative z-10">
                        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h1 className="text-4xl md:text-5xl font-bold mb-4">EN9 Round Bars
                                    <span className="block text-2xl text-gold-primary font-normal mt-2">070M55 / C55 / AISI 1055</span>
                                </h1>
                                <p className="text-xl mb-8 text-gray-200">Medium-high carbon steel for hard-wearing tools, springs, and agricultural applications.</p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"><Mail className="w-5 h-5 mr-2" /> Get Quote</Link>
                                    <a href="tel:+919819322576" className="border-2 border-white hover:bg-white hover:text-navy-primary px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"><Phone className="w-5 h-5 mr-2" /> Call Expert</a>
                                </div>
                            </div>
                            <div className="relative">
                                <img src={alloys_steel_mamta_steel_traders_img} alt="EN9 Round Bar C55 Carbon Steel" className="w-full rounded-xl shadow-2xl" loading="lazy" />
                                <div className="absolute -top-4 -right-4 bg-gold-primary text-navy-primary px-4 py-2 rounded-lg font-bold shadow-xl">BS 970</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto px-4 py-12">
                    <div className="max-w-7xl mx-auto">
                        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-12">
                            <h2 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-4">EN9 Round Bar Overview</h2>
                            <p className="text-gray-700 dark:text-gray-300 mb-4"><strong>EN9</strong> (BS 970: 070M55) is a medium-high carbon steel suitable for applications requiring higher hardness and wear resistance than EN8. Equivalent to <strong>C55</strong> (DIN), <strong>AISI 1055</strong>, and <strong>S55C</strong> (JIS).</p>
                            <p className="text-gray-700 dark:text-gray-300">After hardening and tempering, EN9 can achieve tensile strengths up to 850 MPa. It is especially suitable for spring components, agricultural tools, and cutting blades.</p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-12">
                            <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-6">Chemical Composition of EN9</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
                                    <thead><tr className="bg-navy-primary text-white">
                                        <th className="border border-gray-300 px-4 py-3 text-left">Element</th>
                                        <th className="border border-gray-300 px-4 py-3 text-center">Min %</th>
                                        <th className="border border-gray-300 px-4 py-3 text-center">Max %</th>
                                    </tr></thead>
                                    <tbody>{chemicalComposition.map((c, i) => (
                                        <tr key={i} className={i % 2 === 0 ? "bg-gray-50 dark:bg-gray-700" : "bg-white dark:bg-gray-800"}>
                                            <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-medium">{c.element}</td>
                                            <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-center">{c.min}</td>
                                            <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-center">{c.max}</td>
                                        </tr>
                                    ))}</tbody>
                                </table>
                            </div>
                        </div>
                        <div className="grid lg:grid-cols-2 gap-8 mb-12">
                            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                                <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-6">EN9 Equivalent Grades</h3>
                                <div className="space-y-3">{equivalentGrades.map((g, i) => (
                                    <div key={i} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                        <span className="font-medium text-gray-700 dark:text-gray-300">{g.country}</span>
                                        <span className="text-navy-primary dark:text-gold-primary font-semibold">{g.grade}</span>
                                    </div>
                                ))}</div>
                            </div>
                            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                                <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-6">Applications</h3>
                                <div className="space-y-2">{applications.map((a, i) => (
                                    <div key={i} className="flex items-start">
                                        <CheckCircle className="w-4 h-4 text-navy-primary dark:text-gold-primary mr-2 mt-1 flex-shrink-0" />
                                        <span className="text-gray-700 dark:text-gray-300 text-sm">{a}</span>
                                    </div>
                                ))}</div>
                            </div>
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 mb-8">
                            <h3 className="text-lg font-bold text-slate-800 dark:text-gray-100 mb-3">People Also Search For</h3>
                            <div className="flex flex-wrap gap-2">{["EN9 round bar supplier", "070M55 steel", "C55 steel bar India", "1055 round bar", "EN9 vs EN8", "EN9 hardness", "buy EN9 bar Mumbai", "EN9 spring steel", "S55C India", "EN9 price per kg"].map((kw, i) => (
                                <span key={i} className="px-3 py-1 bg-navy-primary text-white text-xs rounded-full">{kw}</span>
                            ))}</div>
                        </div>
                        <div className="text-center">
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/contact" className="bg-navy-primary hover:bg-navy-secondary text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"><Mail className="w-5 h-5 mr-2" /> Get Quote</Link>
                                <a href="tel:+919819322576" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"><Phone className="w-5 h-5 mr-2" /> +91 98193 22576</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
