import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, ArrowLeft, CheckCircle, FileText, Settings, Zap } from "lucide-react";
import alloys_steel_mamta_steel_traders_img from "@/assets/ALLOYS STEEL  MAMTA STEEL TRADERS.jpg";
import { Link } from "wouter";

export default function Grade4140RoundBars() {
    const chemicalComposition = [
        { element: "Carbon (C)", min: "0.38", max: "0.43" },
        { element: "Silicon (Si)", min: "0.15", max: "0.35" },
        { element: "Manganese (Mn)", min: "0.75", max: "1.00" },
        { element: "Chromium (Cr)", min: "0.80", max: "1.10" },
        { element: "Molybdenum (Mo)", min: "0.15", max: "0.25" },
        { element: "Sulfur (S)", min: "—", max: "0.040" },
        { element: "Phosphorus (P)", min: "—", max: "0.035" },
    ];

    const equivalentGrades = [
        { country: "Germany / DIN / EN", grade: "42CrMo4 / 1.7225" },
        { country: "UK / BS", grade: "EN19 / 709M40" },
        { country: "France / AFNOR", grade: "42CD4" },
        { country: "Japan / JIS", grade: "SCM440" },
        { country: "China / GB", grade: "42CrMo" },
        { country: "India / IS", grade: "40Cr4Mo3" },
    ];

    const applications = [
        "Oil and gas drill collars, subs, and BHA components",
        "Automotive crankshafts, camshafts, and connecting rods",
        "Power transmission gears and pinions",
        "High-strength bolts and studs (ASTM A193 B7)",
        "Mining drilling and rock-breaking equipment",
        "Aerospace structural components",
        "Heavy-duty axles and drive shafts",
        "Industrial pressure vessel components",
    ];

    const specifications = [
        "ASTM A434 – Standard Specification for Steel Bars, Alloy, Hot-Wrought or Cold-Finished",
        "ASTM A193 – B7 Alloy Steel Stud Bolting for High-Temperature",
        "SAE J404 – Chemical Compositions of SAE Alloy Steels",
        "Size Range: 6mm to 500mm diameter",
        "Condition: Annealed, Normalised, Quenched & Tempered",
        "Surface: Black, Bright, Peeled, Polished, Chrome-plated",
    ];

    const features = [
        { icon: <Zap className="w-6 h-6" />, title: "World's Most Used Alloy Steel", description: "AISI 4140 is the most widely specified alloy steel globally" },
        { icon: <Settings className="w-6 h-6" />, title: "Excellent Hardenability", description: "Deep through-hardening capability for large diameter bars" },
        { icon: <CheckCircle className="w-6 h-6" />, title: "High Fatigue Resistance", description: "Superior fatigue life under dynamic and cyclic loading" },
        { icon: <FileText className="w-6 h-6" />, title: "ASTM & SAE Certified", description: "Complies with ASTM A434, A193 B7, SAE J404 standards" },
    ];

    return (
        <>
            <ProductSEO
                title="4140 Round Bars (42CrMo4 / EN19 / SCM440) – AISI 4140 Alloy Steel | Mamta Steel Traders"
                description="Buy AISI 4140 / SAE 4140 alloy steel round bars – equivalent to 42CrMo4, EN19, SCM440. High tensile chrome-moly steel for oil & gas, automotive, mining. 6mm–500mm dia. Mumbai supplier & worldwide exporter."
                keywords="4140 round bar, AISI 4140, SAE 4140, 42CrMo4 equivalent, EN19 steel, SCM440 equivalent, 4140 chemical composition, chrome moly steel bar, 4140 supplier India, 4140 round bar Mumbai, buy AISI 4140 bar"
                canonicalUrl="/product/round-bars/alloy-steel-round/4140-round-bars"
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
                            <span className="text-navy-primary dark:text-gold-primary font-medium">4140 Round Bars</span>
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
                                <h1 className="text-4xl md:text-5xl font-bold mb-4">4140 Round Bars
                                    <span className="block text-2xl text-gold-primary font-normal mt-2">AISI/SAE 4140 – Chrome Molybdenum Steel</span>
                                </h1>
                                <p className="text-xl mb-8 text-gray-200">The world's most versatile alloy steel – chosen by engineers globally for oil & gas, automotive, mining, and heavy machinery applications.</p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"><Mail className="w-5 h-5 mr-2" /> Get Quote</Link>
                                    <a href="tel:+919819322576" className="border-2 border-white hover:bg-white hover:text-navy-primary px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"><Phone className="w-5 h-5 mr-2" /> Call Expert</a>
                                </div>
                            </div>
                            <div className="relative">
                                <img src={alloys_steel_mamta_steel_traders_img} alt="4140 Round Bar AISI SAE 4140 Chrome Moly Steel" className="w-full rounded-xl shadow-2xl" loading="lazy" />
                                <div className="absolute -top-4 -right-4 bg-gold-primary text-navy-primary px-4 py-2 rounded-lg font-bold shadow-xl">ASTM A434</div>
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
                            <h2 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-4">AISI 4140 / SAE 4140 Round Bar – Overview</h2>
                            <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
                                <p className="mb-4"><strong>AISI 4140</strong> (SAE 4140) is a chromium-molybdenum alloy steel that is one of the most popular engineering steels in the world. Known globally as <strong>42CrMo4</strong> (EN standard), <strong>EN19</strong> (British), and <strong>SCM440</strong> (Japanese), it combines high tensile strength, deep hardenability, and good toughness.</p>
                                <p className="mb-4">In quenched and tempered condition, 4140 delivers tensile strengths from 655 MPa to over 1100 MPa depending on section size, making it ideal for highly stressed components in oil & gas drilling tools, automotive power trains, and mining equipment.</p>
                                <div className="grid md:grid-cols-2 gap-6 mt-6">
                                    <div><h4 className="font-bold mb-2 text-navy-primary dark:text-gold-primary">Supply Conditions:</h4>
                                        <ul className="space-y-1 text-sm"><li>• Annealed / Normalised</li><li>• Quenched & Tempered (Q+T)</li><li>• Pre-hardened (P20 style)</li></ul>
                                    </div>
                                    <div><h4 className="font-bold mb-2 text-navy-primary dark:text-gold-primary">Material Forms:</h4>
                                        <ul className="space-y-1 text-sm"><li>• Hot Rolled Round Bar</li><li>• Forged Round Bar</li><li>• Drill Collar Grade</li><li>• Hydraulic Piston Rod</li></ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-12">
                            <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-6">Chemical Composition of AISI 4140</h3>
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
                                <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-6">4140 Equivalent Grades Worldwide</h3>
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
                                    <p className="text-2xl font-bold text-gold-primary">6mm – 500mm</p>
                                </div>
                                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">{specifications.map((s, i) => (
                                    <li key={i} className="flex items-start"><div className="w-2 h-2 bg-navy-primary rounded-full mr-2 mt-2 flex-shrink-0"></div><span>{s}</span></li>
                                ))}</ul>
                            </div>
                        </div>
                        <div className="bg-gradient-to-r from-navy-primary to-navy-secondary rounded-xl p-8 text-white mb-12">
                            <h3 className="text-2xl font-bold mb-8 text-center">Applications of 4140 Round Bars</h3>
                            <div className="grid md:grid-cols-2 gap-4">{applications.map((a, i) => (
                                <div key={i} className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-gold-primary mr-3 mt-1 flex-shrink-0" />
                                    <span className="text-gray-200">{a}</span>
                                </div>
                            ))}</div>
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-8 mb-12">
                            <h3 className="text-xl font-bold text-slate-800 dark:text-gray-100 mb-4">People Also Search For</h3>
                            <div className="flex flex-wrap gap-2">{["AISI 4140 round bar", "4140 steel supplier India", "SAE 4140 price per kg", "4140 vs 4340 steel", "4140 tensile strength", "4140 hardness HRC", "4140 chemical composition", "4140 round bar Mumbai", "4140 drill collar", "4140 pre-hardened bar"].map((kw, i) => (
                                <span key={i} className="px-3 py-1 bg-navy-primary text-white text-xs rounded-full">{kw}</span>
                            ))}</div>
                        </div>
                        <div className="text-center">
                            <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-4">Get 4140 Round Bar Quote</h3>
                            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">Stock available in multiple sizes. Export worldwide from Mumbai.</p>
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
