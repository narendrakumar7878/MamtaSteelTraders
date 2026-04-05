import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, ArrowLeft, CheckCircle } from "lucide-react";
import alloys_steel_mamta_steel_traders_img from "@/assets/ALLOYS STEEL  MAMTA STEEL TRADERS.jpg";
import { Link } from "wouter";

export default function Grade4150RoundBars() {
    const chemicalComposition = [
        { element: "Carbon (C)", min: "0.48", max: "0.53" },
        { element: "Silicon (Si)", min: "0.15", max: "0.35" },
        { element: "Manganese (Mn)", min: "0.75", max: "1.00" },
        { element: "Chromium (Cr)", min: "0.80", max: "1.10" },
        { element: "Molybdenum (Mo)", min: "0.15", max: "0.25" },
        { element: "Sulfur (S)", min: "—", max: "0.040" },
        { element: "Phosphorus (P)", min: "—", max: "0.035" },
    ];
    const equivalentGrades = [
        { country: "Germany / DIN", grade: "50CrMo4 / 1.7228" },
        { country: "UK / BS", grade: "EN19C / 709M50" },
        { country: "France / AFNOR", grade: "50CD4" },
        { country: "Japan / JIS", grade: "SCM451" },
    ];
    const applications = [
        "Heavy-duty rock drilling bits", "Mining drill steels and bits",
        "Spring steel components", "High-strength axles and stub axles",
        "Oil country tubular goods (OCTG)", "Wear-resistant shafts",
        "Hydraulic pump components", "High-stress automotive components",
    ];
    return (
        <>
            <ProductSEO
                title="4150 Round Bars (50CrMo4 / 1.7228) – High Carbon Chrome Moly Steel | Mamta Steel Traders"
                description="Buy AISI 4150 / 50CrMo4 alloy steel round bars – higher carbon version of 4140. For mining drill bits, rock drilling, springs, and heavy-duty applications. Mumbai supplier and global exporter."
                keywords="4150 round bar, AISI 4150, 50CrMo4 equivalent, 1.7228, high carbon chrome moly steel, 4150 vs 4140, mining drill steel, rock drilling steel, buy 4150 bar India"
                canonicalUrl="/product/round-bars/alloy-steel-round/4150-round-bars"
            />
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
                <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                    <div className="container mx-auto px-4 py-4">
                        <nav className="flex items-center space-x-2 text-sm flex-wrap gap-y-1">
                            <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary transition-colors">Home</Link>
                            <ArrowRight className="w-4 h-4 text-gray-400" />
                            <Link href="/product/round-bars/alloy-steel-round" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary transition-colors">Alloy Steel Round</Link>
                            <ArrowRight className="w-4 h-4 text-gray-400" />
                            <span className="text-navy-primary dark:text-gold-primary font-medium">4150 Round Bars</span>
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
                                <h1 className="text-4xl md:text-5xl font-bold mb-4">4150 Round Bars
                                    <span className="block text-2xl text-gold-primary font-normal mt-2">AISI 4150 / 50CrMo4 – High Carbon Chrome Moly</span>
                                </h1>
                                <p className="text-xl mb-8 text-gray-200">Higher carbon version of 4140 offering superior hardness and wear resistance for drill bits, mining, and springs.</p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"><Mail className="w-5 h-5 mr-2" /> Get Quote</Link>
                                    <a href="tel:+919819322576" className="border-2 border-white hover:bg-white hover:text-navy-primary px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"><Phone className="w-5 h-5 mr-2" /> Call Expert</a>
                                </div>
                            </div>
                            <div className="relative">
                                <img src={alloys_steel_mamta_steel_traders_img} alt="4150 Round Bar 50CrMo4 Mining Steel" className="w-full rounded-xl shadow-2xl" loading="lazy" />
                                <div className="absolute -top-4 -right-4 bg-gold-primary text-navy-primary px-4 py-2 rounded-lg font-bold shadow-xl">ASTM A29</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto px-4 py-12">
                    <div className="max-w-7xl mx-auto">
                        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-12">
                            <h2 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-4">AISI 4150 Round Bar – Overview</h2>
                            <p className="text-gray-700 dark:text-gray-300 mb-4"><strong>AISI 4150</strong> is the higher-carbon version of 4140 chrome-moly steel, equivalent to <strong>50CrMo4 (DIN)</strong>. The additional carbon content delivers greater hardness and wear resistance at the expense of some ductility and weldability, making it ideal for mining drill components and high-wear applications.</p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-12">
                            <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-6">Chemical Composition of AISI 4150</h3>
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
                                <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-6">4150 Equivalent Grades</h3>
                                <div className="space-y-3">{equivalentGrades.map((g, i) => (
                                    <div key={i} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                        <span className="font-medium text-gray-700 dark:text-gray-300">{g.country}</span>
                                        <span className="text-navy-primary dark:text-gold-primary font-semibold">{g.grade}</span>
                                    </div>
                                ))}</div>
                            </div>
                            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                                <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-4">Applications</h3>
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
                            <div className="flex flex-wrap gap-2">{["4150 round bar", "AISI 4150", "50CrMo4 bar", "4150 vs 4140", "mining drill steel", "4150 hardness", "buy 4150 Mumbai", "4150 chemical composition", "rock drill steel bar India", "50CrMo4 supplier"].map((kw, i) => (
                                <span key={i} className="px-3 py-1 bg-navy-primary text-white text-xs rounded-full">{kw}</span>
                            ))}</div>
                        </div>
                        <div className="text-center">
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/contact" className="bg-navy-primary hover:bg-navy-secondary text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"><Mail className="w-5 h-5 mr-2" /> Get Technical Quote</Link>
                                <a href="tel:+919819322576" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"><Phone className="w-5 h-5 mr-2" /> +91 98193 22576</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
