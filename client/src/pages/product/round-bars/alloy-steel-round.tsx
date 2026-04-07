import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, ShoppingCart, Filter, ChevronDown } from "lucide-react";
import { Link } from "wouter";
import alloys_steel_mamta_steel_traders_img from "@/assets/ALLOYS STEEL  MAMTA STEEL TRADERS.jpg";

export default function AlloySteelRoundBars() {
  const products = [
    {
      id: 1,
      title: "1.7711 Round Bar",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "1.7711 / 20MoCr4 Round Bars",
      link: "/product/round-bars/alloy-steel-round/1-7711-round-bar"
    },
    {
      id: 2,
      title: "100Cr6 Round Bar",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "100CR6 Bearing Steel Round bar 52100",
      link: "/product/round-bars/alloy-steel-round/100cr6-round-bar"
    },
    {
      id: 3,
      title: "15CDV6 Round Bars (1.7734)",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "15CDV6 Round Bars 1.7734 Aerospace Cr-Mo-V Steel",
      link: "/product/round-bars/alloy-steel-round/15cdv6-round-bars"
    },
    {
      id: 4,
      title: "16MnCr5 Round Bar",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "16MnCr5 Round Bar 1.7131 Case Hardening Steel",
      link: "/product/round-bars/alloy-steel-round/16mncr5-round-bar"
    },
    {
      id: 5,
      title: "17CrNiMo6 Round Bars",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "17CrNiMo6 Round bars Ni-Cr-Mo Gear Steel",
      link: "/product/round-bars/alloy-steel-round/17crni-mo6-round-bars"
    },
    {
      id: 6,
      title: "18CrNiMo7-6 Round Bars",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "18CrNiMo7-6 / 1.6587 Round bars Wind Turbine Gear Steel",
      link: "/product/round-bars/alloy-steel-round/18crni-mo7-6-round-bars"
    },
    {
      id: 7,
      title: "20MnCr5 Round Bars",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "20MnCr5 Round Bars 1.7147 Case Hardening Steel",
      link: "/product/round-bars/alloy-steel-round/20mncr5-round-bars"
    },
    {
      id: 8,
      title: "20NiCrMo2-2 Round Bars",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "20NiCrMo2-2 / SAE 8620 Round Bars Case Hardening",
      link: "/product/round-bars/alloy-steel-round/20nicrmo2-2-round-bars"
    },
    {
      id: 9,
      title: "25CrMo4 Round Bar",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "25CrMo4 / 1.7218 / AISI 4130 Round Bar",
      link: "/product/round-bars/alloy-steel-round/25crmo4-round-bar"
    },
    {
      id: 10,
      title: "30CrNiMo8 Round Bars",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "30CrNiMo8 / 1.6580 Ultra High Tensile Round Bars",
      link: "/product/round-bars/alloy-steel-round/30crni-mo8-round-bars"
    },
    {
      id: 11,
      title: "31CrMoV9 Round Bar",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "31CrMoV9 / 1.8519 Nitriding Steel Round Bar",
      link: "/product/round-bars/alloy-steel-round/31crmo-v9-round-bars"
    },
    {
      id: 12,
      title: "34CrNiMo6 Round Bar",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "34CrNiMo6 / 1.6582 High Strength Round Bar",
      link: "/product/round-bars/alloy-steel-round/34crni-mo6-round-bars"
    },
    {
      id: 13,
      title: "39NiCrMo3 Round Bars / 1.6510",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "39NiCrMo3 / 1.6510 / 40NCD3 Round Bars",
      link: "/product/round-bars/alloy-steel-round/39nicr-mo3-round-bars"
    },
    {
      id: 14,
      title: "40Cr7Al10Mo2 Round Bars",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "40Cr7Al10Mo2 / 41CrAlMo7 Nitriding Steel Round Bars",
      link: "/product/round-bars/alloy-steel-round/40cr7al10mo2-round-bars"
    },
    {
      id: 15,
      title: "40CrMoV4-6 Round Bar",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "40CrMoV4-6 Cr-Mo-V Alloy Steel Round Bar",
      link: "/product/round-bars/alloy-steel-round/40crmo-v4-6-round-bars"
    },
    {
      id: 16,
      title: "4140 Round Bars",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "SAE 4140 AISI 4140 Round Bars EN19 1.7225 42CrMo4",
      link: "/product/round-bars/alloy-steel-round/4140-round-bars"
    },
    {
      id: 17,
      title: "41Cr4 Round Bars",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "41Cr4 / 1.7035 / AISI 5140 Chrome Steel Round Bars",
      link: "/product/round-bars/alloy-steel-round/41cr4-round-bars"
    },
    {
      id: 18,
      title: "4340 Round Bars",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "AISI 4340 / EN24 High Strength Round Bars",
      link: "/product/round-bars/alloy-steel-round/4340-round-bars"
    },
    {
      id: 19,
      title: "8620 Bright Bars",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "AISI 8620 / 21NiCrMo2 Bright Round Bar",
      link: "/product/round-bars/alloy-steel-round/aisi-8620-round-bars"
    },
    {
      id: 20,
      title: "905M39 Round Bars",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "905M39 / EN30B Round Bars BS 970",
      link: "/product/round-bars/alloy-steel-round/905m39-round-bars"
    },
    {
      id: 21,
      title: "A193 Grade B7 Round Bar",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "ASTM A193 Grade B7 Round Bars",
      link: "/product/round-bars/alloy-steel-round/a193-grade-b7-round-bar"
    },
    {
      id: 22,
      title: "AISI 8620 Round Bars",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "SAE 8620 Round Bars, AISI 8620, 1.6523, 20NiCrMo2-2",
      link: "/product/round-bars/alloy-steel-round/aisi-8620-round-bars"
    },
    {
      id: 23,
      title: "42CrMo4 Round Bars",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "42CrMo4 Round Bars EN19 / 1.7225 / 4140",
      link: "/product/round-bars/alloy-steel-round/42crmo4-round-bars"
    },
    {
      id: 24,
      title: "EN8 Round Bars",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "EN8 / C45 / 1045 Carbon Steel Round Bars",
      link: "/product/round-bars/alloy-steel-round/en8-round-bars"
    },
    {
      id: 25,
      title: "EN9 Round Bars",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "EN9 / C55 / 1055 Carbon Steel Round Bars",
      link: "/product/round-bars/alloy-steel-round/en9-round-bars"
    },
    {
      id: 26,
      title: "EN19 Round Bars",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "EN19 / 42CrMo4 / 4140 Alloy Steel Round Bars",
      link: "/product/round-bars/alloy-steel-round/en19-round-bars"
    },
    {
      id: 27,
      title: "EN24 Round Bars",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "EN24 / 4340 / 817M40 Alloy Steel Round Bars",
      link: "/product/round-bars/alloy-steel-round/en24-round-bars"
    },
    {
      id: 28,
      title: "4130 Round Bars",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "AISI 4130 / 25CrMo4 Chromoly Steel Round Bars",
      link: "/product/round-bars/alloy-steel-round/4130-round-bars"
    },
    {
      id: 29,
      title: "4150 Round Bars",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "AISI 4150 / 50CrMo4 High Carbon Chrome Moly Round Bars",
      link: "/product/round-bars/alloy-steel-round/4150-round-bars"
    },
    {
      id: 30,
      title: "4340V Round Bars",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "4340V / AMS 6414 Vanadium Modified 4340 Steel Bars",
      link: "/product/round-bars/alloy-steel-round/4340v-round-bars"
    },
    {
      id: 31,
      title: "8740 Round Bars",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "AISI 8740 / AMS 6322 Aerospace Ni-Cr-Mo Round Bars",
      link: "/product/round-bars/alloy-steel-round/8740-round-bars"
    },
    {
      id: 32,
      title: "9310 Round Bars",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "SAE 9310 / AMS 6265 Aerospace Case Hardening Steel Bars",
      link: "/product/round-bars/alloy-steel-round/9310-round-bars"
    },
    {
      id: 33,
      title: "12L14 Round Bars",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "12L14 / 9SMnPb28 Free Machining Leaded Steel Bars",
      link: "/product/round-bars/alloy-steel-round/12l14-round-bars"
    },
    {
      id: 34,
      title: "1144 Round Bars",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "1144 / Stressproof AISI 1144 Free Machining Steel Bars",
      link: "/product/round-bars/alloy-steel-round/1144-round-bars"
    },
    {
      id: 35,
      title: "35CrMo Round Bars",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "35CrMo / 34CrMo4 / SCM435 Chrome Moly Round Bars",
      link: "/product/round-bars/alloy-steel-round/35crmo-round-bars"
    },
    {
      id: 36,
      title: "SCM440 Round Bars",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "JIS SCM440 / 42CrMo4 / 4140 Chrome Moly Steel Bars",
      link: "/product/round-bars/alloy-steel-round/scm440-round-bars"
    },
    {
      id: 37,
      title: "SNCM420 Round Bars",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "JIS SNCM420 / 8620 / 21NiCrMo2 Case Hardening Steel",
      link: "/product/round-bars/alloy-steel-round/sncm420-round-bars"
    },
    {
      id: 38,
      title: "50CrMo4 Round Bars",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "50CrMo4 / 1.7228 / AISI 4150 High Carbon Chrome Moly Bars",
      link: "/product/round-bars/alloy-steel-round/50crmo4-round-bars"
    },
    {
      id: 39,
      title: "36NiCrMo4 Round Bars",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "36NiCrMo4 / 1.6511 / 35NCD4 Ni-Cr-Mo Steel Bars",
      link: "/product/round-bars/alloy-steel-round/36nicrmo4-round-bars"
    },
    {
      id: 40,
      title: "38NiCrMo4 Round Bars",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "38NiCrMo4 / 1.6562 / 8740 High Strength Steel Bars",
      link: "/product/round-bars/alloy-steel-round/38nicrmo4-round-bars"
    },
    {
      id: 41,
      title: "1.7711 / 20MoCr4 Round Bar",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "1.7711 / 20MoCr4 Chromium Molybdenum Steel Bars",
      link: "/product/round-bars/alloy-steel-round/1-7711-round-bar"
    }
  ];

  const specifications = [
    "ASTM A193 - Standard Specification for Alloy-Steel and Stainless Steel Bolting Materials",
    "ASTM A479 - Standard Specification for Stainless Steel and Heat-Resisting Steel Bars",
    "ASTM A276 - Standard Specification for Stainless Steel Bars and Shapes",
    "DIN Standards - German Industrial Standards for Alloy Steel",
    "Size Range: 6mm to 500mm diameter",
    "Various Grades: 4140, 4340, 4130, 25CrMo4, 34CrNiMo6, etc."
  ];

  const applications = [
    "Automotive Components and Drive Shafts",
    "Aerospace and Defense Applications",
    "Oil and Gas Equipment Manufacturing",
    "Heavy Machinery and Industrial Equipment",
    "High-Strength Fasteners and Bolts",
    "Mining and Construction Equipment",
    "Power Generation Components",
    "Marine and Offshore Applications"
  ];

  return (
    <>
      <ProductSEO
        title="Alloy Steel Round Bars - 4140, 4340, 25CrMo4, 34CrNiMo6 | Premium Grade | Mamta Steel Traders"
        description="High-quality alloy steel round bars in various grades including 4140, 4340, 25CrMo4, 34CrNiMo6. ASTM A193, A479, DIN standards. Complete range for automotive, aerospace, and industrial applications."
        keywords="alloy steel round bars, 4140 round bars, 4340 round bars, 25CrMo4, 34CrNiMo6, ASTM A193, automotive steel, aerospace steel, industrial steel bars"
        canonicalUrl="/product/round-bars/alloy-steel-round"
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Breadcrumb */}
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex items-center space-x-2 text-sm">
              <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary dark:hover:text-gold-primary transition-colors" data-testid="breadcrumb-home">
                Home
              </Link>
              <ArrowRight className="w-4 h-4 text-gray-400" />
              <Link href="/products" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary dark:hover:text-gold-primary transition-colors" data-testid="breadcrumb-products">
                Products
              </Link>
              <ArrowRight className="w-4 h-4 text-gray-400" />
              <Link href="/product/round-bars/round-bars" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary dark:hover:text-gold-primary transition-colors" data-testid="breadcrumb-round-bars">
                Round Bars
              </Link>
              <ArrowRight className="w-4 h-4 text-gray-400" />
              <span className="text-navy-primary dark:text-gold-primary font-medium" data-testid="breadcrumb-current">Alloy Steel Round Bars</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-br from-navy-primary via-navy-secondary to-slate-800 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-heading font-bold mb-6" data-testid="text-alloy-steel-title">
                Alloy Steel Round Bars
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200" data-testid="text-alloy-steel-subtitle">
                Premium Quality for Demanding Applications
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center" data-testid="button-contact-alloy-steel">
                  <Mail className="w-5 h-5 mr-2" />
                  Get Quote
                </Link>
                <a href="tel:+919819322576" className="border-2 border-white hover:bg-white hover:text-navy-primary px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center" data-testid="button-call-alloy-steel">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-7xl mx-auto">
            {/* Results and Sorting Bar */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
              <div className="mb-4 md:mb-0">
                <p className="text-gray-600 dark:text-gray-300" data-testid="results-count">
                  Showing 1–41 of 41 results
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <select className="border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300" data-testid="sort-dropdown">
                  <option value="menu_order">Default sorting</option>
                  <option value="popularity">Sort by popularity</option>
                  <option value="date">Sort by latest</option>
                  <option value="price">Sort by price: low to high</option>
                  <option value="price-desc">Sort by price: high to low</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {products.map((product) => (
                <div key={product.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300" data-testid={`product-card-${product.id}`}>
                  <div className="relative group">
                    <img
                      src={product.image}
                      alt={product.alt}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Link
                        href={product.link}
                        className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-6 py-2 rounded-lg font-semibold transition-colors inline-flex items-center"
                        data-testid={`product-link-${product.id}`}
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        View Details
                      </Link>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-slate-800 dark:text-gray-100 mb-2" data-testid={`product-title-${product.id}`}>
                      <Link href={product.link} className="hover:text-navy-primary dark:hover:text-gold-primary transition-colors">
                        {product.title}
                      </Link>
                    </h3>
                    <Link
                      href={product.link}
                      className="text-navy-primary dark:text-gold-primary hover:underline font-medium"
                      data-testid={`product-details-${product.id}`}
                    >
                      View Specifications →
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Specifications Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* Technical Specifications */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-6" data-testid="text-specifications-title">
                  Technical Specifications
                </h3>
                <div className="space-y-3">
                  {specifications.map((spec, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-navy-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 dark:text-gray-300" data-testid={`spec-${index}`}>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-6" data-testid="text-applications-title">
                  Key Applications
                </h3>
                <div className="space-y-3">
                  {applications.map((application, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-gold-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 dark:text-gray-300" data-testid={`application-${index}`}>{application}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* All Items Displayed - No Pagination Needed */}
            <div className="text-center">
              <p className="text-gray-600 dark:text-gray-300">
                All 41 Alloy Steel Round Bar products are displayed above
              </p>
            </div>

            {/* Contact Section */}
            <div className="text-center mt-16">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-4" data-testid="text-contact-title">
                Need Custom Alloy Steel Solutions?
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Contact our technical experts for custom specifications and material selection
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-navy-primary hover:bg-navy-secondary text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center" data-testid="button-get-quote">
                  <Mail className="w-5 h-5 mr-2" />
                  Get Technical Quote
                </Link>
                <a href="tel:+919819322576" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center" data-testid="button-call-expert">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Steel Expert
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

