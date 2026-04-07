import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, ArrowLeft, CheckCircle, FileText, Settings, Zap } from "lucide-react";
import alloys_steel_mamta_steel_traders_img from "@/assets/ALLOYS STEEL  MAMTA STEEL TRADERS.jpg";
import { Link } from "wouter";

export default function Grade100Cr6RoundBar() {
    const chemicalComposition = [
        { element: "Carbon (C)", min: "0.93", max: "1.05" },
        { element: "Silicon (Si)", min: "0.15", max: "0.35" },
        { element: "Manganese (Mn)", min: "0.25", max: "0.45" },
        { element: "Chromium (Cr)", min: "1.35", max: "1.60" },
        { element: "Sulfur (S)", min: "—", max: "0.030" },
        { element: "Phosphorus (P)", min: "—", max: "0.030" },
        { element: "Molybdenum (Mo)", min: "—", max: "0.10" },
    ];

    const equivalentGrades = [
        { country: "Germany / DIN / EN", grade: "100Cr6 / 1.3505" },
        { country: "USA / AISI / SAE", grade: "52100" },
        { country: "UK / BS", grade: "535A99" },
        { country: "Sweden / SS", grade: "2258" },
        { country: "Japan / JIS", grade: "SUJ2" },
        { country: "India / IS", grade: "103Cr1" },
    ];

    const applications = [
        "Ball and roller bearings (primary application)",
        "Needle roller bearings and tapered roller bearings",
        "Anti-friction bearing rings and cages",
        "Precision ball bearing components",
        "High-speed spindle bearings",
        "Automotive wheel hub bearings",
        "Aerospace bearing components",
        "Industrial machine tool bearings",
    ];

    const specifications = [
        "ISO 683-17 – Heat Treatable Steels, Alloy Steels and Free-Cutting Steels",
        "DIN EN ISO 683-17 – Bearing steels",
        "ASTM A295 – High Carbon Anti-Friction Bearing Steel",
        "Size Range: 6mm to 500mm diameter",
        "Condition: Annealed, Hardened & Tempered",
        "Surface: Black, Bright, Ground",
    ];

    const features = [
        { icon: <Zap className="w-6 h-6" />, title: "Bearing Steel Grade", description: "Globally recognised as the premier high-carbon chrome bearing steel" },
        { icon: <Settings className="w-6 h-6" />, title: "High Hardness", description: "Achieves 60–64 HRC after hardening for exceptional wear resistance" },
        { icon: <CheckCircle className="w-6 h-6" />, title: "Long Fatigue Life", description: "Superior rolling contact fatigue life under cyclic loading" },
        { icon: <FileText className="w-6 h-6" />, title: "ISO 683-17 Certified", description: "Compliant with international bearing steel standards" },
    ];

    return (
        <>
            <ProductSEO
                title="100Cr6 Round Bar (52100 Bearing Steel) – DIN 1.3505 | Mamta Steel Traders"
                description="Buy 100Cr6 / 1.3505 bearing steel round bars – equivalent to AISI 52100 / SUJ2. Premium high-carbon chromium steel for ball bearings, roller bearings, and precision components. 6mm–500mm dia. Mumbai supplier & global exporter."
                keywords="100Cr6 round bar, 52100 bearing steel, 1.3505 steel, SUJ2 equivalent, bearing steel bar India, 100Cr6 chemical composition, high carbon chromium steel, anti-friction bearing steel, 100Cr6 supplier Mumbai, buy 52100 steel bar"
                canonicalUrl="/product/round-bars/alloy-steel-round/100cr6-round-bar"
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
                            <span className="text-navy-primary dark:text-gold-primary font-medium">100Cr6 Round Bar</span>
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
                                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                                    100Cr6 Round Bar
                                    <span className="block text-2xl text-gold-primary font-normal mt-2">AISI 52100 / 1.3505 Bearing Steel</span>
                                </h1>
                                <p className="text-xl mb-8 text-gray-200">High-carbon chromium bearing steel for ball bearings, roller bearings, and precision anti-friction components.</p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center">
                                        <Mail className="w-5 h-5 mr-2" /> Get Quote
                                    </Link>
                                    <a href="tel:+919819322576" className="border-2 border-white hover:bg-white hover:text-navy-primary px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center">
                                        <Phone className="w-5 h-5 mr-2" /> Call Expert
                                    </a>
                                </div>
                            </div>
                            <div className="relative">
                                <img src={alloys_steel_mamta_steel_traders_img} alt="100Cr6 Bearing Steel Round Bar 52100" className="w-full rounded-xl shadow-2xl" loading="lazy" />
                                <div className="absolute -top-4 -right-4 bg-gold-primary text-navy-primary px-4 py-2 rounded-lg font-bold shadow-xl">ISO 683-17</div>
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
                            <h2 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-4">100Cr6 / 52100 Bearing Steel Round Bar – Overview</h2>
                            <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
                                <p className="mb-4">
                                    <strong>100Cr6 (1.3505)</strong> is the world's most widely used bearing steel, equivalent to <strong>AISI 52100</strong> in the USA and <strong>SUJ2</strong> in Japan. Its high carbon and chromium content enables very high hardness after heat treatment (60–64 HRC), excellent wear resistance, and long rolling contact fatigue life.
                                </p>
                                <p className="mb-4">
                                    Mamta Steel Traders supplies 100Cr6 round bars in annealed condition (soft annealed to ~207 HB) for machining, and also in hardened and tempered condition per customer specifications.
                                </p>
                                <div className="grid md:grid-cols-2 gap-6 mt-6">
                                    <div><h4 className="font-bold mb-2 text-navy-primary dark:text-gold-primary">Supply Conditions:</h4>
                                        <ul className="space-y-1 text-sm"><li>• Soft Annealed</li><li>• Spheroidise Annealed</li><li>• Hardened & Tempered</li></ul>
                                    </div>
                                    <div><h4 className="font-bold mb-2 text-navy-primary dark:text-gold-primary">Material Forms:</h4>
                                        <ul className="space-y-1 text-sm"><li>• Rolled Round Bar</li><li>• Forged Round Bar</li><li>• Ground Bar</li><li>• Cut Rings / Blanks</li></ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-12">
                            <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-6">Chemical Composition of 100Cr6 / 1.3505</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
                                    <thead>
                                        <tr className="bg-navy-primary text-white">
                                            <th className="border border-gray-300 px-4 py-3 text-left">Element</th>
                                            <th className="border border-gray-300 px-4 py-3 text-center">Min %</th>
                                            <th className="border border-gray-300 px-4 py-3 text-center">Max %</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {chemicalComposition.map((c, i) => (
                                            <tr key={i} className={i % 2 === 0 ? "bg-gray-50 dark:bg-gray-700" : "bg-white dark:bg-gray-800"}>
                                                <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-medium">{c.element}</td>
                                                <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-center">{c.min}</td>
                                                <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-center">{c.max}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-8 mb-12">
                            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                                <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-6">100Cr6 Equivalent Grades Worldwide</h3>
                                <div className="space-y-3">
                                    {equivalentGrades.map((g, i) => (
                                        <div key={i} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                            <span className="font-medium text-gray-700 dark:text-gray-300">{g.country}</span>
                                            <span className="text-navy-primary dark:text-gold-primary font-semibold">{g.grade}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                                <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-6">Size Range & Standards</h3>
                                <div className="p-4 bg-gradient-to-r from-navy-primary to-navy-secondary text-white rounded-lg mb-4 text-center">
                                    <h4 className="font-bold text-lg mb-1">Round Bar Diameter</h4>
                                    <p className="text-2xl font-bold text-gold-primary">6mm – 500mm</p>
                                </div>
                                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                    {specifications.map((s, i) => (
                                        <li key={i} className="flex items-start"><div className="w-2 h-2 bg-navy-primary rounded-full mr-2 mt-2 flex-shrink-0"></div><span>{s}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-navy-primary to-navy-secondary rounded-xl p-8 text-white mb-12">
                            <h3 className="text-2xl font-bold mb-8 text-center">Applications of 100Cr6 Round Bars</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                {applications.map((a, i) => (
                                    <div key={i} className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-gold-primary mr-3 mt-1 flex-shrink-0" />
                                        <span className="text-gray-200">{a}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-8 mb-12">
                            <h3 className="text-xl font-bold text-slate-800 dark:text-gray-100 mb-4">People Also Search For</h3>
                            <div className="flex flex-wrap gap-2">
                                {["100Cr6 bearing steel", "52100 round bar", "1.3505 steel supplier", "100Cr6 chemical composition", "SUJ2 equivalent", "bearing steel bar Mumbai India", "100Cr6 hardness HRC", "100Cr6 vs 52100", "buy bearing steel bar", "100Cr6 annealed bar price"].map((kw, i) => (
                                    <span key={i} className="px-3 py-1 bg-navy-primary text-white text-xs rounded-full">{kw}</span>
                                ))}
                            </div>
                        </div>

                        <div className="text-center">
                            <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-4">Request 100Cr6 Round Bar Quote</h3>
                            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">India's trusted supplier of 100Cr6 / 52100 bearing steel with worldwide export capabilities.</p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/contact" className="bg-navy-primary hover:bg-navy-secondary text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center">
                                    <Mail className="w-5 h-5 mr-2" /> Get Technical Quote
                                </Link>
                                <a href="tel:+919819322576" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center">
                                    <Phone className="w-5 h-5 mr-2" /> +91 98193 22576
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


