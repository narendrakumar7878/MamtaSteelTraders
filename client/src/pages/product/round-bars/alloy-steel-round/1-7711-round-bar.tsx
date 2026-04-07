import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, ArrowLeft, CheckCircle, FileText, Settings, Zap } from "lucide-react";
import alloys_steel_mamta_steel_traders_img from "@/assets/ALLOYS STEEL  MAMTA STEEL TRADERS.jpg";
import { Link } from "wouter";

export default function Grade17711RoundBar() {
    const chemicalComposition = [
        { element: "Carbon (C)", min: "0.15", max: "0.21" },
        { element: "Silicon (Si)", min: "0.15", max: "0.35" },
        { element: "Manganese (Mn)", min: "0.60", max: "0.90" },
        { element: "Chromium (Cr)", min: "0.90", max: "1.20" },
        { element: "Molybdenum (Mo)", min: "0.15", max: "0.30" },
        { element: "Sulfur (S)", min: "—", max: "0.035" },
        { element: "Phosphorus (P)", min: "—", max: "0.035" },
    ];

    const equivalentGrades = [
        { country: "Germany / DIN / EN", grade: "1.7711 / 20MoCr4" },
        { country: "USA / AISI", grade: "4120" },
        { country: "UK / BS", grade: "—" },
        { country: "France / AFNOR", grade: "20MC5" },
        { country: "India / IS", grade: "20Cr1Mo28" },
    ];

    const applications = [
        "Gears and gear shafts in automotive transmissions",
        "Case-hardened components for differential assemblies",
        "Highly stressed axles and drive shafts",
        "Spline shafts and gear components",
        "Precision engineering components",
        "Machine tool spindles and arbors",
        "Agricultural machinery components",
        "General engineering case-hardened parts",
    ];

    const specifications = [
        "EN 10084 – Case Hardening Steels",
        "DIN 17210 – Case Hardening Steels Technical Conditions",
        "Size Range: 16mm to 500mm diameter",
        "Condition: As Rolled, Forged, Normalised, Annealed",
        "Surface: Black, Bright, Machined",
        "Test Certificates: Mill TC / EN 10204 3.1",
    ];

    const features = [
        {
            icon: <Zap className="w-6 h-6" />,
            title: "Case Hardening Steel",
            description: "Excellent surface hardness with tough core after case hardening treatment",
        },
        {
            icon: <Settings className="w-6 h-6" />,
            title: "Good Machinability",
            description: "Easily machinable in annealed or normalised condition",
        },
        {
            icon: <CheckCircle className="w-6 h-6" />,
            title: "High Fatigue Strength",
            description: "Superior fatigue resistance for rotating and dynamic-load components",
        },
        {
            icon: <FileText className="w-6 h-6" />,
            title: "EN 10084 Certified",
            description: "Compliant with European standard EN 10084 case hardening steels",
        },
    ];

    return (
        <>
            <ProductSEO
                title="1.7711 Round Bar (20MoCr4) – Case Hardening Alloy Steel | Mamta Steel Traders"
                description="Buy 1.7711 / 20MoCr4 alloy steel round bars – premium case hardening steel for automotive gears, shafts, and differential components. EN 10084 certified. 16mm–500mm dia. Mumbai supplier & worldwide exporter."
                keywords="1.7711 round bar, 20MoCr4 round bar, case hardening steel, EN 10084, 1.7711 steel equivalent, 20MoCr4 equivalent AISI 4120, alloy steel round bars, automotive gear steel, drive shaft steel, Mumbai steel supplier, India steel exporter"
                canonicalUrl="/product/round-bars/alloy-steel-round/1-7711-round-bar"
            />

            <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
                {/* Breadcrumb */}
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
                            <span className="text-navy-primary dark:text-gold-primary font-medium">1.7711 Round Bar</span>
                        </nav>
                    </div>
                </div>

                {/* Back Button */}
                <div className="container mx-auto px-4 py-4">
                    <Link href="/product/round-bars/alloy-steel-round" className="inline-flex items-center text-navy-primary dark:text-gold-primary hover:underline font-medium">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Alloy Steel Round Bars
                    </Link>
                </div>

                {/* Hero */}
                <div className="bg-gradient-to-br from-navy-primary via-navy-secondary to-slate-800 text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="container mx-auto px-4 py-16 relative z-10">
                        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                                    1.7711 Round Bar
                                    <span className="block text-2xl text-gold-primary font-normal mt-2">20MoCr4 – Case Hardening Alloy Steel</span>
                                </h1>
                                <p className="text-xl mb-8 text-gray-200">
                                    Premium EN 10084 case-hardening alloy steel for high-performance automotive and precision engineering components.
                                </p>
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
                                <img src={alloys_steel_mamta_steel_traders_img} alt="1.7711 Round Bar 20MoCr4 Case Hardening Steel" className="w-full rounded-xl shadow-2xl" loading="lazy" />
                                <div className="absolute -top-4 -right-4 bg-gold-primary text-navy-primary px-4 py-2 rounded-lg font-bold shadow-xl">EN 10084</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="container mx-auto px-4 py-12">
                    <div className="max-w-7xl mx-auto">

                        {/* Key Features */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                            {features.map((f, i) => (
                                <div key={i} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
                                    <div className="inline-flex items-center justify-center w-12 h-12 bg-navy-primary text-white rounded-lg mb-4">{f.icon}</div>
                                    <h3 className="font-bold text-slate-800 dark:text-gray-100 mb-2">{f.title}</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">{f.description}</p>
                                </div>
                            ))}
                        </div>

                        {/* Description */}
                        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-12">
                            <h2 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-4">1.7711 / 20MoCr4 Round Bar – Overview</h2>
                            <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
                                <p className="mb-4">
                                    <strong>1.7711 round bar</strong> (also known as <strong>20MoCr4</strong>) is a chromium-molybdenum case hardening alloy steel conforming to DIN EN 10084. It offers an ideal combination of a tough, ductile core with a hard, wear-resistant surface after case hardening, making it a preferred choice in the automotive and precision engineering sectors.
                                </p>
                                <p className="mb-4">
                                    The grade is widely used for manufacturing gears, pinions, shafts, spindles, and differential components that require high surface hardness while retaining core toughness to withstand dynamic and impact loads.
                                </p>
                                <div className="grid md:grid-cols-2 gap-6 mt-6">
                                    <div>
                                        <h4 className="font-bold mb-2 text-navy-primary dark:text-gold-primary">Supply Conditions:</h4>
                                        <ul className="space-y-1 text-sm">
                                            <li>• As Rolled / Forged</li>
                                            <li>• Normalised / Annealed</li>
                                            <li>• Black, Bright, Machined Surface</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-2 text-navy-primary dark:text-gold-primary">Material Forms:</h4>
                                        <ul className="space-y-1 text-sm">
                                            <li>• Rolled Round Bar</li>
                                            <li>• Forged Round Bar</li>
                                            <li>• Cut Pieces / Blanks</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Chemical Composition */}
                        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-12">
                            <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-6">Chemical Composition of 1.7711 (20MoCr4)</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
                                    <thead>
                                        <tr className="bg-navy-primary text-white">
                                            <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left">Element</th>
                                            <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-center">Min %</th>
                                            <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-center">Max %</th>
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

                        {/* Equivalent Grades & Specifications */}
                        <div className="grid lg:grid-cols-2 gap-8 mb-12">
                            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                                <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-6">1.7711 Equivalent Grades Worldwide</h3>
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
                                    <p className="text-2xl font-bold text-gold-primary">16mm – 500mm</p>
                                </div>
                                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                    {specifications.map((s, i) => (
                                        <li key={i} className="flex items-start">
                                            <div className="w-2 h-2 bg-navy-primary rounded-full mr-2 mt-2 flex-shrink-0"></div>
                                            <span>{s}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Applications */}
                        <div className="bg-gradient-to-r from-navy-primary to-navy-secondary rounded-xl p-8 text-white mb-12">
                            <h3 className="text-2xl font-bold mb-8 text-center">Applications of 1.7711 Round Bars</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                {applications.map((a, i) => (
                                    <div key={i} className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-gold-primary mr-3 mt-1 flex-shrink-0" />
                                        <span className="text-gray-200">{a}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* SEO Keywords */}
                        <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-8 mb-12">
                            <h3 className="text-xl font-bold text-slate-800 dark:text-gray-100 mb-4">People Also Search For</h3>
                            <div className="flex flex-wrap gap-2">
                                {["1.7711 round bar supplier", "20MoCr4 steel", "1.7711 equivalent AISI", "case hardening steel bar India", "20MoCr4 chemical composition", "1.7711 EN 10084", "case hardening alloy steel Mumbai", "1.7711 round bar price", "20MoCr4 gear steel", "buy 1.7711 steel bar"].map((kw, i) => (
                                    <span key={i} className="px-3 py-1 bg-navy-primary text-white text-xs rounded-full">{kw}</span>
                                ))}
                            </div>
                        </div>

                        {/* Contact CTA */}
                        <div className="text-center">
                            <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-4">Need 1.7711 Round Bars?</h3>
                            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">Get competitive pricing and fast delivery anywhere in India and worldwide.</p>
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


