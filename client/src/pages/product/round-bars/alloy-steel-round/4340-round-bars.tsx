import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, ArrowLeft, CheckCircle, FileText, Settings, Zap } from "lucide-react";
import alloys_steel_mamta_steel_traders_img from "@/assets/ALLOYS STEEL  MAMTA STEEL TRADERS.jpg";
import { Link } from "wouter";

export default function Grade4340RoundBars() {
    const chemicalComposition = [
        { element: "Carbon (C)", min: "0.38", max: "0.43" },
        { element: "Silicon (Si)", min: "0.15", max: "0.35" },
        { element: "Manganese (Mn)", min: "0.60", max: "0.80" },
        { element: "Nickel (Ni)", min: "1.65", max: "2.00" },
        { element: "Chromium (Cr)", min: "0.70", max: "0.90" },
        { element: "Molybdenum (Mo)", min: "0.20", max: "0.30" },
        { element: "Sulfur (S)", min: "—", max: "0.040" },
        { element: "Phosphorus (P)", min: "—", max: "0.035" },
    ];

    const equivalentGrades = [
        { country: "Germany / DIN / EN", grade: "36CrNiMo4 / 1.6511 / 34CrNiMo6" },
        { country: "UK / BS", grade: "EN24 / 817M40" },
        { country: "France / AFNOR", grade: "40NiCrMo22" },
        { country: "Japan / JIS", grade: "SNCM439" },
        { country: "China / GB", grade: "40CrNiMoA" },
        { country: "India / IS", grade: "40NiCrMo2" },
    ];

    const applications = [
        "Aircraft structural components (landing gear, actuators)",
        "High-strength missile and rocket motor casings",
        "Heavy-duty automotive crankshafts and axles",
        "Rock drilling equipment and oil field components",
        "Power transmission shafts and couplings",
        "Marine and naval drive shafts",
        "High-strength bolting (ASTM A320 L7)",
        "Military armor and ordnance components",
    ];

    const specifications = [
        "ASTM A29 / A29M – Hot-Wrought Bar Steel",
        "AMS 6414 – Steel, Bars, Forgings, Tubing, 0.80Cr-1.8Ni-0.25Mo (0.38-0.43C)",
        "MIL-S-5000 – Military Specification for 4340 Steel",
        "Size Range: 12mm to 600mm diameter",
        "Condition: Annealed, Normalised, Q+T",
        "Surface: Black, Peeled, Turned & Polished",
    ];

    const features = [
        { icon: <Zap className="w-6 h-6" />, title: "Ultra High Strength", description: "Tensile strength up to 1900 MPa in aerospace grade applications" },
        { icon: <Settings className="w-6 h-6" />, title: "Ni-Cr-Mo Alloy", description: "Nickel-chromium-molybdenum combination for superior toughness" },
        { icon: <CheckCircle className="w-6 h-6" />, title: "Aerospace Approved", description: "AMS 6414 certified for critical aerospace structural components" },
        { icon: <FileText className="w-6 h-6" />, title: "MIL-Spec Compliant", description: "Meets MIL-S-5000 military specification requirements" },
    ];

    return (
        <>
            <ProductSEO
                title="4340 Round Bars (EN24 / 36CrNiMo4) – Ultra High Strength Alloy Steel | Mamta Steel Traders"
                description="Buy AISI 4340 / AMS 6414 alloy steel round bars – equivalent to EN24, 36CrNiMo4, SNCM439. Ultra high strength Ni-Cr-Mo steel for aerospace, defence, and high-performance engineering. 12mm–600mm dia. Mumbai supplier."
                keywords="4340 round bar, AISI 4340, AMS 6414, EN24 steel, 36CrNiMo4 equivalent, SNCM439 equivalent, 4340 aerospace steel, 4340 chemical composition, ultra high strength steel bar India, buy 4340 bar Mumbai"
                canonicalUrl="/product/round-bars/alloy-steel-round/4340-round-bars"
            />
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
                <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                    <div className="container mx-auto px-4 py-4">
                        <nav className="flex items-center space-x-2 text-sm flex-wrap gap-y-1">
                            <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary transition-colors">Home</Link>
                            <ArrowRight className="w-4 h-4 text-gray-400" />
                            <Link href="/products" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary transition-colors">Products</Link>
                            <ArrowRight className="w-4 h-4 text-gray-400" />
                            <Link href="/product/round-bars/round-bars" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary transition-colors">Round Bars</Link>
                            <ArrowRight className="w-4 h-4 text-gray-400" />
                            <Link href="/product/round-bars/alloy-steel-round" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary transition-colors">Alloy Steel Round</Link>
                            <ArrowRight className="w-4 h-4 text-gray-400" />
                            <span className="text-navy-primary dark:text-gold-primary font-medium">4340 Round Bars</span>
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
                                <h1 className="text-4xl md:text-5xl font-bold mb-4">4340 Round Bars
                                    <span className="block text-2xl text-gold-primary font-normal mt-2">AISI 4340 / AMS 6414 / EN24 – Ni-Cr-Mo Steel</span>
                                </h1>
                                <p className="text-xl mb-8 text-gray-200">Ultra-high strength nickel-chromium-molybdenum alloy steel for aerospace, defence, and mission-critical engineering applications.</p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"><Mail className="w-5 h-5 mr-2" /> Get Quote</Link>
                                    <a href="tel:+919819322576" className="border-2 border-white hover:bg-white hover:text-navy-primary px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"><Phone className="w-5 h-5 mr-2" /> Call Expert</a>
                                </div>
                            </div>
                            <div className="relative">
                                <img src={alloys_steel_mamta_steel_traders_img} alt="4340 Round Bar AISI AMS 6414 Aerospace Ni-Cr-Mo Steel" className="w-full rounded-xl shadow-2xl" loading="lazy" />
                                <div className="absolute -top-4 -right-4 bg-gold-primary text-navy-primary px-4 py-2 rounded-lg font-bold shadow-xl">AMS 6414</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto px-4 py-12">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                            {features.map((f, i) => (
                                <div key={i} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
                                    <div className="inline-flex items-center justify-center w-12 h-12 bg-navy-primary text-white rounded-lg mb-4">{f.icon}</div>
                                    <h3 className="font-bold text-slate-800 dark:text-gray-100 mb-2">{f.title}</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">{f.description}</p>
                                </div>
                            ))}
                        </div>
                        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-12">
                            <h2 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-4">AISI 4340 Round Bar – Overview</h2>
                            <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
                                <p className="mb-4"><strong>AISI 4340</strong> is a nickel-chromium-molybdenum low alloy steel known for its ultra-high strength, excellent toughness, and superior hardenability. Equivalent to <strong>EN24</strong> (Britain), <strong>36CrNiMo4</strong> (Germany), and <strong>SNCM439</strong> (Japan), it is the premier aerospace structural steel and a critical material for defence applications.</p>
                                <p className="mb-4">AISI 4340 can achieve tensile strengths exceeding 1900 MPa with corresponding hardness above 55 HRC, while still maintaining adequate ductility and impact toughness – a combination rarely achieved with other steels.</p>
                                <div className="grid md:grid-cols-2 gap-6 mt-6">
                                    <div><h4 className="font-bold mb-2 text-navy-primary dark:text-gold-primary">Supply Conditions:</h4>
                                        <ul className="space-y-1 text-sm"><li>• Annealed / Normalised</li><li>• Quenched & Tempered</li><li>• VAR (Vacuum Arc Re-melted) grade</li></ul>
                                    </div>
                                    <div><h4 className="font-bold mb-2 text-navy-primary dark:text-gold-primary">Material Forms:</h4>
                                        <ul className="space-y-1 text-sm"><li>• Hot Rolled / Forged Bar</li><li>• Aircraft Quality Bar</li><li>• Billet / Bloom</li><li>• Machined Blanks</li></ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-12">
                            <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-6">Chemical Composition of AISI 4340</h3>
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
                                <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-6">4340 Equivalent Grades Worldwide</h3>
                                <div className="space-y-3">{equivalentGrades.map((g, i) => (
                                    <div key={i} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                        <span className="font-medium text-gray-700 dark:text-gray-300">{g.country}</span>
                                        <span className="text-navy-primary dark:text-gold-primary font-semibold">{g.grade}</span>
                                    </div>
                                ))}</div>
                            </div>
                            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                                <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-6">Size Range & Standards</h3>
                                <div className="p-4 bg-gradient-to-r from-navy-primary to-navy-secondary text-white rounded-lg mb-4 text-center">
                                    <h4 className="font-bold text-lg mb-1">Round Bar Diameter</h4>
                                    <p className="text-2xl font-bold text-gold-primary">12mm – 600mm</p>
                                </div>
                                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">{specifications.map((s, i) => (
                                    <li key={i} className="flex items-start"><div className="w-2 h-2 bg-navy-primary rounded-full mr-2 mt-2 flex-shrink-0"></div><span>{s}</span></li>
                                ))}</ul>
                            </div>
                        </div>
                        <div className="bg-gradient-to-r from-navy-primary to-navy-secondary rounded-xl p-8 text-white mb-12">
                            <h3 className="text-2xl font-bold mb-8 text-center">Applications of 4340 Round Bars</h3>
                            <div className="grid md:grid-cols-2 gap-4">{applications.map((a, i) => (
                                <div key={i} className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-gold-primary mr-3 mt-1 flex-shrink-0" />
                                    <span className="text-gray-200">{a}</span>
                                </div>
                            ))}</div>
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-8 mb-12">
                            <h3 className="text-xl font-bold text-slate-800 dark:text-gray-100 mb-4">People Also Search For</h3>
                            <div className="flex flex-wrap gap-2">{["AISI 4340 round bar", "4340 vs 4140", "EN24 steel bar supplier", "4340 AMS 6414", "36CrNiMo4 equivalent", "SNCM439 steel", "4340 tensile strength", "aerospace steel bar India", "4340 round bar price", "buy EN24 bar Mumbai"].map((kw, i) => (
                                <span key={i} className="px-3 py-1 bg-navy-primary text-white text-xs rounded-full">{kw}</span>
                            ))}</div>
                        </div>
                        <div className="text-center">
                            <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-4">Request 4340 / EN24 Round Bar Quote</h3>
                            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">Stock in multiple sizes. Mill TC / EN 10204 3.1 certificates available.</p>
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


