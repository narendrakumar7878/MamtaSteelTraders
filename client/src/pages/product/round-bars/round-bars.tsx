import ProductSEO from "@/components/ProductSEO";
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Star,
  CheckCircle,
  TrendingUp,
  Shield,
  Award,
} from "lucide-react";
import { Link, useLocation } from "wouter";
import GenericRoundBarListing from "./GenericRoundBarListing";
import { Helmet } from "react-helmet-async";

// Import round bar images from assets
import alloyRoundBar from "@/assets/alloy-steel-round-bars.jpg";
import ssRoundBar from "@/assets/SS  ROUND BAR  MAMTA STEEL TRADERS.jpg";
import ssRoundBar2 from "@/assets/SS ROUND BAR  MAMTA STEEL TRADERS.jpg";
import csRoundBar from "@/assets/CS  MAMTA STEEL TRADERS.jpg";
import steelBarsRods from "@/assets/steel-bars-rods.jpg";
import aluminiumBar from "@/assets/ALUMINIUM MAMTA STEEL TRADERS.jpg";
import copperBar from "@/assets/COPPER MAMTA STEEL TRADERS.jpg";
import alloySteel from "@/assets/ALLOYS STEEL  MAMTA STEEL TRADERS.jpg";
import alloySteel2 from "@/assets/ALLOYS STEEL  MAMTA STEEL TRADERS2.jpg";

export default function RoundBarsMain() {
  const [, navigate] = useLocation();

  // Define which pages exist vs need generic listing
  const existingPages = [
    "alloy-20",
    "alloy-steel-f-series",
    "alloy-steel-round",
    "aluminium",
    "aluminium-alloy",
    "aluminium-bronze",
    "boron-grades",
    "bronze",
    "carbon-steel",
    "cold-work-tool-steels",
    "cobalt",
    "copper-nickel",
    "duplex-super-duplex",
    "en-series",
    "hastelloy",
    "high-speed-steel",
    "hot-work-steel",
    "inconel",
    "manganese-bronze",
    "monel",
    "nickel-alloy",
    "precipitation-hardening-steel",
    "stainless-steel-round-bars",
    "titanium",
    "tool-steel",
  ];

  const handleCategoryClick = (category: any) => {
    const pageSlug = category.link.split("/").pop();

    if (existingPages.includes(pageSlug)) {
      // Navigate to existing page
      navigate(category.link);
    } else {
      // Navigate to generic listing with query params
      const params = new URLSearchParams({
        title: category.title,
        count: category.count,
        description: category.description,
        image: category.image,
      });
      navigate(`/product/round-bars/generic-listing?${params.toString()}`);
    }
  };

  const roundBarCategories = [
    {
      title: "Alloy 20",
      count: "1",
      image: alloySteel,
      link: "/product/round-bars/alloy-20",
      description:
        "High-performance alloy 20 round bars for corrosive environments",
    },
    {
      title: "Alloy Steel F Series",
      count: "6",
      image: alloyRoundBar,
      link: "/product/round-bars/alloy-steel-f-series",
      description: "F5, F9, F11, F12, F22, F91 alloy steel round bars",
    },
    {
      title: "Alloy Steel Round",
      count: "41",
      image: alloyRoundBar,
      link: "/product/round-bars/alloy-steel-round",
      description:
        "Premium quality alloy steel round bars for industrial applications",
    },
    {
      title: "Aluminium",
      count: "1",
      image: aluminiumBar,
      link: "/product/round-bars/aluminium",
      description:
        "Lightweight aluminium round bars for aerospace applications",
    },
    {
      title: "Aluminium Alloy",
      count: "6",
      image: aluminiumBar,
      link: "/product/round-bars/aluminium-alloy",
      description: "High-strength aluminium alloy round bars",
    },
    {
      title: "Aluminium Bronze",
      count: "2",
      image: copperBar,
      link: "/product/round-bars/aluminium-bronze",
      description: "Corrosion-resistant aluminium bronze round bars",
    },
    {
      title: "Boron Grades",
      count: "4",
      image: steelBarsRods,
      link: "/product/round-bars/boron-grades",
      description: "High-strength boron grade round bars",
    },
    {
      title: "Bronze",
      count: "4",
      image: copperBar,
      link: "/product/round-bars/bronze",
      description: "Traditional bronze round bars for marine applications",
    },

    {
      title: "Carbon Steel",
      count: "43",
      image: csRoundBar,
      link: "/product/round-bars/carbon-steel",
      description:
        "Durable carbon steel round bars for structural applications",
    },
    {
      title: "Cobalt",
      count: "1",
      image: alloySteel2,
      link: "/product/round-bars/cobalt",
      description: "High-temperature cobalt round bars",
    },
    {
      title: "Cold Work Steels",
      count: "4",
      image: steelBarsRods,
      link: "/product/cold-work-tool-steels",
      description: "Precision cold work steel round bars for tooling",
    },
    {
      title: "Copper Nickel",
      count: "9",
      image: copperBar,
      link: "/product/round-bars/copper-nickel",
      description: "Marine-grade copper nickel round bars",
    },
    {
      title: "Duplex & Super Duplex",
      count: "4",
      image: ssRoundBar,
      link: "/product/round-bars/duplex-super-duplex",
      description: "High-strength duplex and super duplex round bars",
    },
    {
      title: "EN Series",
      count: "28",
      image: steelBarsRods,
      link: "/product/round-bars/en-series",
      description: "EN8, EN9 and other EN series round bars",
    },
    {
      title: "Hastelloy",
      count: "3",
      image: alloySteel,
      link: "/product/round-bars/hastelloy",
      description: "Corrosion-resistant Hastelloy round bars",
    },
    {
      title: "High Speed Steel",
      count: "3",
      image: steelBarsRods,
      link: "/product/round-bars/high-speed-steel",
      description: "High-speed steel round bars for cutting tools",
    },
    {
      title: "Hot Work Steel",
      count: "6",
      image: steelBarsRods,
      link: "/product/round-bars/hot-work-steel",
      description:
        "Hot work steel round bars for high-temperature applications",
    },
    {
      title: "Inconel",
      count: "3",
      image: alloySteel2,
      link: "/product/round-bars/inconel",
      description: "High-temperature Inconel round bars",
    },
    {
      title: "Manganese Bronze",
      count: "2",
      image: copperBar,
      link: "/product/round-bars/manganese-bronze",
      description: "High-strength manganese bronze round bars",
    },
    {
      title: "Monel",
      count: "2",
      image: alloySteel,
      link: "/product/round-bars/monel",
      description: "Corrosion-resistant Monel round bars",
    },
    {
      title: "Nickel Alloy Round Bars",
      count: "5",
      image: alloySteel2,
      link: "/product/round-bars/nickel-alloy",
      description: "Premium nickel alloy round bars",
    },
    {
      title: "Precipitation Hardening Steel",
      count: "6",
      image: steelBarsRods,
      link: "/product/round-bars/precipitation-hardening-steel",
      description: "High-strength precipitation hardening steel round bars",
    },
    {
      title: "Stainless Steel Round Bars",
      count: "49",
      image: ssRoundBar,
      link: "/product/round-bars/stainless-steel-round-bars",
      description:
        "Premium stainless steel round bars for various applications",
    },
    {
      title: "Titanium",
      count: "1",
      image: steelBarsRods,
      link: "/product/round-bars/titanium",
      description: "Lightweight titanium round bars for aerospace",
    },
    {
      title: "Tool Steel",
      count: "10",
      image: steelBarsRods,
      link: "/product/round-bars/tool-steel",
      description: "High-performance tool steel round bars",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Round Bars Manufacturer & Supplier | Steel Round Bars | Mamta Steel Traders</title>
        <meta name="description" content="Leading manufacturer & supplier of round bars worldwide. Buy stainless steel round bars, carbon steel round bars, alloy steel round bars, titanium, hastelloy, inconel, monel, duplex steel, nickel alloy, tool steel round bars. ISO certified with global shipping. Get best price quotes." />
        <meta name="keywords" content="round bars, steel round bars, round bar manufacturer, round bar supplier, stainless steel round bars, SS round bars, carbon steel round bars, CS round bars, alloy steel round bars, buy round bars online, round bars price, round bar stockist, titanium round bars, hastelloy round bars, inconel round bars, monel round bars, duplex steel round bars, super duplex round bars, nickel alloy round bars, tool steel round bars, precipitation hardening steel, EN series round bars, round bars for sale, industrial round bars, metal round bars, round bar India, round bar Mumbai, round bar distributor, round bar wholesale, round bar specifications, ASTM round bars, round bar dimensions, round bar sizes, hot rolled round bars, cold drawn round bars, round bar stock, round bars manufacturer India, round bars supplier India, round bars exporter, global round bars, international round bars" />

        {/* Enhanced SEO Meta Tags */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="author" content="Mamta Steel Traders" />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Mumbai" />
        <meta name="geo.position" content="19.0760;72.8777" />
        <meta name="ICBM" content="19.0760, 72.8777" />

        {/* Open Graph Tags for Social Media */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Round Bars Manufacturer & Supplier | Steel Round Bars Worldwide" />
        <meta property="og:description" content="Premium quality round bars manufacturer & supplier. Stainless steel, carbon steel, alloy steel, titanium, hastelloy, inconel round bars. ISO certified. Global shipping available." />
        <meta property="og:url" content="https://mamtasteeltraders.com/product/round-bars/round-bars" />
        <meta property="og:site_name" content="Mamta Steel Traders" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_IN" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Round Bars Manufacturer & Supplier | Steel Round Bars" />
        <meta name="twitter:description" content="Leading manufacturer of round bars. Stainless steel, carbon steel, alloy steel, titanium round bars. ISO certified with worldwide shipping." />

        {/* Canonical URL */}
        <link rel="canonical" href="https://mamtasteeltraders.com/product/round-bars/round-bars" />

        {/* Alternate Language Tags */}
        <link rel="alternate" hrefLang="en" href="https://mamtasteeltraders.com/product/round-bars/round-bars" />
        <link rel="alternate" hrefLang="en-us" href="https://mamtasteeltraders.com/product/round-bars/round-bars" />
        <link rel="alternate" hrefLang="en-gb" href="https://mamtasteeltraders.com/product/round-bars/round-bars" />
        <link rel="alternate" hrefLang="en-in" href="https://mamtasteeltraders.com/product/round-bars/round-bars" />
        <link rel="alternate" hrefLang="x-default" href="https://mamtasteeltraders.com/product/round-bars/round-bars" />

        {/* Schema.org Structured Data - Product Category */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Round Bars - Steel Round Bars",
            "description": "Comprehensive collection of round bars including stainless steel, carbon steel, alloy steel, titanium, hastelloy, inconel, and duplex steel round bars for industrial applications.",
            "url": "https://mamtasteeltraders.com/product/round-bars/round-bars",
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://mamtasteeltraders.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Products",
                  "item": "https://mamtasteeltraders.com/products"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Round Bars",
                  "item": "https://mamtasteeltraders.com/product/round-bars/round-bars"
                }
              ]
            }
          })}
        </script>

        {/* Schema.org - Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Mamta Steel Traders",
            "url": "https://mamtasteeltraders.com",
            "logo": "https://mamtasteeltraders.com/logo.png",
            "description": "Leading manufacturer and supplier of round bars, steel bars, and metal products worldwide.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Mumbai",
              "addressRegion": "Maharashtra",
              "addressCountry": "IN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-98193-22576",
              "contactType": "sales",
              "availableLanguage": ["English", "Hindi"]
            },
            "sameAs": [
              "https://www.facebook.com/mamtatraders",
              "https://www.linkedin.com/company/mamtatraders"
            ]
          })}
        </script>

        {/* Schema.org - Product Catalog */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Round Bars Product Catalog",
            "description": "Complete range of round bars in various materials and grades",
            "numberOfItems": 25,
            "itemListElement": roundBarCategories.map((cat, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "name": cat.title,
              "description": cat.description,
              "url": `https://mamtasteeltraders.com${cat.link}`
            }))
          })}
        </script>

        {/* Schema.org - FAQPage for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What are round bars?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Round bars are cylindrical metal bars used in various industrial applications. They are available in different materials including stainless steel, carbon steel, alloy steel, titanium, hastelloy, inconel, duplex steel, and more. Round bars are used in construction, manufacturing, aerospace, automotive, and marine industries."
                }
              },
              {
                "@type": "Question",
                "name": "What types of round bars are available?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We offer 25+ types of round bars including Stainless Steel Round Bars (49 grades), Carbon Steel Round Bars (43 grades), Alloy Steel Round Bars (41 grades), EN Series Round Bars (28 grades), Titanium Round Bars, Hastelloy Round Bars, Inconel Round Bars, Monel Round Bars, Duplex & Super Duplex Round Bars, Nickel Alloy Round Bars, Tool Steel Round Bars, Precipitation Hardening Steel Round Bars, Copper Nickel Round Bars, Aluminium Round Bars, and more."
                }
              },
              {
                "@type": "Question",
                "name": "What are the applications of round bars?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Round bars are used in chemicals, fertilizers, sugar mills, distilleries, cement industries, ship building, paper industries, pumps, petrochemicals, oil & gas, power generation, aerospace, automotive, construction, manufacturing, marine, and various other industrial applications."
                }
              },
              {
                "@type": "Question",
                "name": "Are your round bars ASTM certified?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, our round bars are compliant with ASTM A276, A479, A564 and other international standards. We are ISO 9001:2015 certified and provide complete material test certificates and heat treatment reports with every order."
                }
              },
              {
                "@type": "Question",
                "name": "Do you ship round bars internationally?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we ship round bars worldwide. We are a leading exporter and supplier of round bars with global shipping capabilities. Contact us for international shipping quotes and delivery timelines."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <ProductSEO
        title="Round Bars - Premium Steel & Alloy Round Bars | Mamta Steel Traders"
        description="Comprehensive range of round bars including stainless steel, carbon steel, alloy steel, titanium, hastelloy, inconel, and duplex steel round bars. Premium quality round bars for industrial applications with complete specifications and technical data."
        keywords="round bars, stainless steel round bars, carbon steel round bars, alloy steel round bars, titanium round bars, hastelloy round bars, inconel round bars, duplex steel round bars, nickel alloy round bars, tool steel round bars, precipitation hardening steel, EN series round bars"
        canonicalUrl="/product/round-bars/round-bars"
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-navy-primary via-navy-secondary to-slate-800 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1
                className="text-heading font-bold mb-6"
                data-testid="text-round-bars-title"
              >
                Round Bars
              </h1>
              <p
                className="text-xl md:text-2xl mb-8 text-gray-200"
                data-testid="text-round-bars-subtitle"
              >
                Premium Quality Steel & Alloy Round Bars for Industrial
                Applications - Stainless Steel, Carbon Steel, Alloy Steel,
                Titanium, Hastelloy, Inconel, Duplex Steel, Nickel Alloy, Tool
                Steel, Precipitation Hardening Steel, EN Series
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                  data-testid="button-contact-round-bars"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get Quote
                </Link>
                <a
                  href="tel:+919819322576"
                  className="border-2 border-white hover:bg-white hover:text-navy-primary px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                  data-testid="button-call-round-bars"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex items-center space-x-2 text-sm">
              <Link
                href="/"
                className="text-gray-600 dark:text-gray-400 hover:text-navy-primary dark:hover:text-gold-primary transition-colors"
                data-testid="breadcrumb-home"
              >
                Home
              </Link>
              <ArrowRight className="w-4 h-4 text-gray-400" />
              <Link
                href="/products"
                className="text-gray-600 dark:text-gray-400 hover:text-navy-primary dark:hover:text-gold-primary transition-colors"
                data-testid="breadcrumb-products"
              >
                Products
              </Link>
              <ArrowRight className="w-4 h-4 text-gray-400" />
              <span
                className="text-navy-primary dark:text-gold-primary font-medium"
                data-testid="breadcrumb-current"
              >
                Round Bars
              </span>
            </nav>
          </div>
        </div>

        {/* Introduction Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2
                className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-6"
                data-testid="text-introduction-title"
              >
                Comprehensive Range of Round Bars
              </h2>
              <p
                className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto"
                data-testid="text-introduction-description"
              >
                We stock Bar, Hexagon, Square, Round products in various
                dimensions and grades. We stock Stainless Steel, Carbon and
                Alloy specialty steels supplied in the as rolled, annealed and
                normalized conditions. We offer cut to size and heat treatment
                through our service center.
              </p>
            </div>

            {/* Round Bar Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {roundBarCategories.map((category, index) => (
                <div
                  key={index}
                  onClick={() => handleCategoryClick(category)}
                  className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden cursor-pointer"
                  data-testid={`card-round-bar-category-${index}`}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={category.image}
                      alt={`${category.title} round bars`}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute top-4 right-4 bg-navy-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {category.count}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3
                      className="text-xl font-bold text-slate-800 dark:text-gray-100 mb-3 group-hover:text-navy-primary dark:group-hover:text-gold-primary transition-colors"
                      data-testid={`text-category-title-${index}`}
                    >
                      {category.title}
                    </h3>
                    <p
                      className="text-gray-600 dark:text-gray-300 text-sm mb-4"
                      data-testid={`text-category-description-${index}`}
                    >
                      {category.description}
                    </p>
                    <div className="flex items-center text-navy-primary dark:text-gold-primary font-semibold group-hover:text-gold-primary dark:group-hover:text-navy-primary transition-colors">
                      <span className="text-sm">View Details</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Industry Applications Section */}
        <div className="bg-white dark:bg-gray-800 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2
                  className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-6"
                  data-testid="text-applications-title"
                >
                  Industry Applications
                </h2>
                <p
                  className="text-lg text-gray-600 dark:text-gray-300"
                  data-testid="text-applications-description"
                >
                  Our round bars serve diverse industries with specific
                  material, technology, finance & personnel requirements
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {[
                  { name: "Chemicals", icon: "🧪" },
                  { name: "Fats & Fertilizers", icon: "🌾" },
                  { name: "Sugar Mills & Distilleries", icon: "🏭" },
                  { name: "Cement Industries", icon: "🏗️" },
                  { name: "Ship Builders", icon: "🚢" },
                  { name: "Paper Industries", icon: "📰" },
                  { name: "Pumps", icon: "⚙️" },
                  { name: "Petrochemicals", icon: "⛽" },
                  { name: "Oil & Natural Gas", icon: "🛢️" },
                  { name: "Power Generation", icon: "⚡" },
                  { name: "Aerospace", icon: "✈️" },
                  { name: "Automotive", icon: "🚗" },
                ].map((industry, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                    data-testid={`industry-${index}`}
                  >
                    <div className="text-2xl mb-2">{industry.icon}</div>
                    <h3 className="text-sm font-semibold text-slate-800 dark:text-gray-100">
                      {industry.name}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quality Certifications Section */}
        <div className="bg-gradient-to-r from-navy-primary to-navy-secondary py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h2
                className="text-2xl font-bold text-white mb-8"
                data-testid="text-quality-title"
              >
                Quality Certifications & Standards
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
                  data-testid="certification-astm"
                >
                  <Award className="w-12 h-12 text-gold-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">
                    ASTM Standards
                  </h3>
                  <p className="text-gray-200 text-sm">
                    Compliant with ASTM A276, A479, A564 and other international
                    standards
                  </p>
                </div>
                <div
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
                  data-testid="certification-iso"
                >
                  <Shield className="w-12 h-12 text-gold-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">
                    ISO Certified
                  </h3>
                  <p className="text-gray-200 text-sm">
                    ISO 9001:2015 certified quality management system
                  </p>
                </div>
                <div
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
                  data-testid="certification-testing"
                >
                  <CheckCircle className="w-12 h-12 text-gold-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">
                    Material Testing
                  </h3>
                  <p className="text-gray-200 text-sm">
                    Complete material test certificates and heat treatment
                    reports
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gray-100 dark:bg-gray-800 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2
                className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-6"
                data-testid="text-contact-title"
              >
                Need Custom Round Bar Solutions?
              </h2>
              <p
                className="text-lg text-gray-600 dark:text-gray-300 mb-8"
                data-testid="text-contact-description"
              >
                Contact our technical experts for custom specifications, sizes,
                and grades
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-navy-primary hover:bg-navy-secondary text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                  data-testid="button-get-quote"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get Custom Quote
                </Link>
                <a
                  href="tel:+919819322576"
                  className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                  data-testid="button-call-expert"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Technical Expert
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


