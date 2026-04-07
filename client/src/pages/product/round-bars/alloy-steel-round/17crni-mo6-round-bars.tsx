import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, ArrowLeft, CheckCircle } from "lucide-react";
import alloys_steel_mamta_steel_traders_img from "@/assets/ALLOYS STEEL  MAMTA STEEL TRADERS.jpg";
import { Link } from "wouter";

// Pages for 17CrNiMo6, 18CrNiMo7-6, 20MnCr5, 20NiCrMo2-2, 25CrMo4 combined for efficiency
export default function Grade17CrNiMo6RoundBars() {
    const comp = [
        { element: "Carbon (C)", min: "0.14", max: "0.20" },
        { element: "Silicon (Si)", min: "0.15", max: "0.40" },
        { element: "Manganese (Mn)", min: "0.40", max: "0.70" },
        { element: "Nickel (Ni)", min: "1.40", max: "1.70" },
        { element: "Chromium (Cr)", min: "1.60", max: "2.00" },
        { element: "Molybdenum (Mo)", min: "0.25", max: "0.35" },
    ];
    const equivGrades = [
        { country: "Germany / DIN / EN", grade: "17CrNiMo6 / 1.6587" },
        { country: "USA / AISI", grade: "4320 (nearest)" },
        { country: "Japan / JIS", grade: "SNCM420 (nearest)" },
        { country: "Sweden / SS", grade: "2512" },
    ];
    const apps = [
        "Large gear wheels, ring gears and pinions", "Helical and bevel gears for heavy machinery",
        "Heavy-duty gearbox shafts", "Mining and cement plant gear components",
        "Wind turbine gear drives", "Marine propulsion gearboxes",
        "High-load case-hardened shafts", "Sugar mill and industrial gearboxes",
    ];
    return (
        <>
            <ProductSEO
                title="17CrNiMo6 Round Bars (1.6587) – Case Hardening Ni-Cr-Mo Steel for Large Gears | Mamta Steel Traders"
                description="Buy 17CrNiMo6 / 1.6587 alloy steel round bars – Ni-Cr-Mo case hardening steel for large gear wheels, wind turbines, and heavy gearboxes. EN 10084. Mumbai supplier worldwide."
                keywords="17CrNiMo6 round bar, 1.6587 steel, 17CrNiMo6 chemical composition, Ni-Cr-Mo case hardening steel, large gear steel, wind turbine gear steel, 17CrNiMo6 supplier India, buy 17CrNiMo6 Mumbai"
                canonicalUrl="/product/round-bars/alloy-steel-round/17crni mo6-round-bars"
            />
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
                <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                    <div className="container mx-auto px-4 py-4">
                        <nav className="flex items-center space-x-2 text-sm flex-wrap gap-y-1">
                            <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary transition-colors">Home</Link>
                            <ArrowRight className="w-4 h-4 text-gray-400" />
                            <Link href="/product/round-bars/alloy-steel-round" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary transition-colors">Alloy Steel Round</Link>
                            <ArrowRight className="w-4 h-4 text-gray-400" />
                            <span className="text-navy-primary dark:text-gold-primary font-medium">17CrNiMo6 Round Bars</span>
                        </nav>
                    </div>
                </div>
                <div className="container mx-auto px-4 py-4">
                    <Link href="/product/round-bars/alloy-steel-round" className="inline-flex items-center text-navy-primary dark:text-gold-primary hover:underline font-medium"><ArrowLeft className="w-4 h-4 mr-2" /> Back</Link>
                </div>
                <div className="bg-gradient-to-br from-navy-primary via-navy-secondary to-slate-800 text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="container mx-auto px-4 py-16 relative z-10">
                        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h1 className="text-4xl md:text-5xl font-bold mb-4">17CrNiMo6 Round Bars
                                    <span className="block text-2xl text-gold-primary font-normal mt-2">1.6587 – Ni-Cr-Mo Case Hardening Steel for Large Gears</span>
                                </h1>
                                <p className="text-xl mb-8 text-gray-200">Premium nickel-chromium-molybdenum case hardening steel for large diameter gear wheels, wind turbine, and heavy gearbox applications.</p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"><Mail className="w-5 h-5 mr-2" /> Get Quote</Link>
                                    <a href="tel:+919819322576" className="border-2 border-white hover:bg-white hover:text-navy-primary px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"><Phone className="w-5 h-5 mr-2" /> Call Expert</a>
                                </div>
                            </div>
                            <div className="relative">
                                <img src={alloys_steel_mamta_steel_traders_img} alt="17CrNiMo6 Round Bar 1.6587 Case Hardening Gear Steel" className="w-full rounded-xl shadow-2xl" loading="lazy" />
                                <div className="absolute -top-4 -right-4 bg-gold-primary text-navy-primary px-4 py-2 rounded-lg font-bold shadow-xl">EN 10084</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto px-4 py-12">
                    <div className="max-w-7xl mx-auto">
                        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-12">
                            <h2 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-4">17CrNiMo6 / 1.6587 Round Bar – Overview</h2>
                            <p className="text-gray-700 dark:text-gray-300 mb-4"><strong>17CrNiMo6</strong> (1.6587) is a nickel-chromium-molybdenum case hardening steel designed for large gear wheels and heavy-duty gearboxes where deep case hardening and high core strength are essential. Its higher nickel content (1.4–1.7%) provides exceptional core toughness and impact resistance, particularly important for large cross-section components.</p>
                            <p className="text-gray-700 dark:text-gray-300">Used extensively in wind turbine gear drives, paper mill reductions, and heavy industrial gearboxes where reliability and long service life are critical.</p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-12">
                            <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-6">Chemical Composition of 17CrNiMo6</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
                                    <thead><tr className="bg-navy-primary text-white">
                                        <th className="border border-gray-300 px-4 py-3 text-left">Element</th>
                                        <th className="border border-gray-300 px-4 py-3 text-center">Min %</th>
                                        <th className="border border-gray-300 px-4 py-3 text-center">Max %</th>
                                    </tr></thead>
                                    <tbody>{comp.map((c, i) => (
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
                                <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-6">Equivalent Grades</h3>
                                <div className="space-y-3">{equivGrades.map((g, i) => (
                                    <div key={i} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                        <span className="font-medium text-gray-700 dark:text-gray-300">{g.country}</span>
                                        <span className="text-navy-primary dark:text-gold-primary font-semibold">{g.grade}</span>
                                    </div>
                                ))}</div>
                                <div className="mt-4 p-4 bg-gradient-to-r from-navy-primary to-navy-secondary text-white rounded-lg text-center">
                                    <p className="font-bold">Size: 25mm – 800mm dia</p>
                                    <p className="text-gold-primary">EN 10084 Standard</p>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                                <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-4">Applications</h3>
                                <div className="space-y-2">{apps.map((a, i) => (
                                    <div key={i} className="flex items-start">
                                        <CheckCircle className="w-4 h-4 text-navy-primary dark:text-gold-primary mr-2 mt-1 flex-shrink-0" />
                                        <span className="text-gray-700 dark:text-gray-300 text-sm">{a}</span>
                                    </div>
                                ))}</div>
                            </div>
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 mb-8">
                            <h3 className="text-lg font-bold text-slate-800 dark:text-gray-100 mb-3">People Also Search For</h3>
                            <div className="flex flex-wrap gap-2">{["17CrNiMo6 round bar", "1.6587 steel bar", "17CrNiMo6 chemical composition", "Ni-Cr-Mo gear steel", "17CrNiMo6 vs 18CrNiMo7-6", "wind turbine gear steel", "large gear steel India", "17CrNiMo6 supplier Mumbai", "buy 17CrNiMo6 bar", "1.6587 equivalent"].map((kw, i) => (
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


