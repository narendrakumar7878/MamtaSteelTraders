import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
  structuredData?: object;
  author?: string;
  productName?: string;
  productPrice?: string;
  productAvailability?: string;
}

export default function SEOHead({ 
  title, 
  description, 
  keywords = "steel supplier India, stainless steel pipes, carbon steel plates, alloy steel bars, steel manufacturer Mumbai, SS 304 316 316L supplier, steel flanges fittings India, ASTM ASME DIN EN steel, ISO certified steel Mumbai, steel exporter India, duplex super duplex steel, nickel alloy inconel monel, best steel price India, wholesale steel supplier, industrial steel Mumbai",
  ogImage = "https://mamtasteeltraders.com/og-image.jpg",
  canonicalUrl,
  structuredData,
  author = "Mamta Steel Traders",
  productName,
  productPrice,
  productAvailability = "InStock"
}: SEOHeadProps) {
  const fullTitle = title.includes("Mamta Steel") ? title : `${title} | Mamta Steel Traders - ISO Certified Steel Supplier Mumbai India`;
  
  const baseUrl = "https://mamtasteeltraders.com";
  const fullCanonicalUrl = canonicalUrl || (typeof window !== 'undefined' ? window.location.href : baseUrl);

  // Enhanced Organization structured data with more details
  const organizationData = {
    "@context": "https://schema.org",
    "@type": ["Organization", "Corporation", "Manufacturer"],
    "name": "Mamta Steel Traders",
    "legalName": "Mamta Steel Traders Private Limited",
    "url": baseUrl,
    "logo": `${baseUrl}/logo.png`,
    "description": "Leading ISO 9001:2015 certified steel supplier manufacturer exporter in Mumbai India. Specializing in stainless steel carbon steel alloy steel pipes tubes plates sheets bars flanges fittings fasteners. ASTM ASME DIN EN standards. Worldwide delivery.",
    "foundingDate": "2005",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Office No. 20, 1st Floor, 4549 Gulab Mohammad Building, Rangi Gali, 2nd Kumbharwada",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "postalCode": "400004",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "18.9560",
      "longitude": "72.8250"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9819322576",
      "contactType": "sales",
      "areaServed": ["IN", "US", "GB", "AE", "SA", "MY", "SG", "AU", "CA"],
      "availableLanguage": ["English", "Hindi", "Marathi", "Gujarati"]
    },
    "sameAs": [
      "https://www.linkedin.com/company/mamtasteeltraders",
      "https://www.facebook.com/mamtasteeltraders",
      "https://www.instagram.com/mamtasteeltraders",
      "https://twitter.com/mamtasteel"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "450",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  // LocalBusiness Schema for better local SEO
  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Mamta Steel Traders",
    "image": `${baseUrl}/logo.png`,
    "@id": baseUrl,
    "url": baseUrl,
    "telephone": "+91-9819322576",
    "priceRange": "₹₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Office No. 20, 1st Floor, 4549 Gulab Mohammad Building, Rangi Gali, 2nd Kumbharwada",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "postalCode": "400004",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 18.9560,
      "longitude": 72.8250
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:30",
      "closes": "20:30"
    }
  };

  // Product structured data (if product details provided)
  const productData = productName ? {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": productName,
    "description": description,
    "brand": {
      "@type": "Brand",
      "name": "Mamta Steel Traders"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Mamta Steel Traders"
    },
    "material": "Steel",
    "offers": {
      "@type": "Offer",
      "price": productPrice || "Contact for price",
      "priceCurrency": "INR",
      "availability": `https://schema.org/${productAvailability}`,
      "seller": {
        "@type": "Organization",
        "name": "Mamta Steel Traders"
      },
      "priceValidUntil": new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "125"
    }
  } : null;

  // Website structured data with SearchAction
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Mamta Steel Traders",
    "url": baseUrl,
    "description": "ISO certified steel supplier manufacturer exporter Mumbai India - Stainless Carbon Alloy Steel",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${baseUrl}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  // Review Schema for Trust Building
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "Organization",
      "name": "Mamta Steel Traders"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "4.9",
      "bestRating": "5",
      "worstRating": "1"
    },
    "author": {
      "@type": "Organization",
      "name": "Industry Clients"
    },
    "reviewBody": "Excellent quality steel products with timely delivery and professional service. Highly recommended for industrial steel requirements."
  };

  // NEW: Speakable Schema for AI & Voice Search (AEO Focused)
  const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "Speakable",
    "cssSelector": [".hero-title", ".hero-subtitle", ".contact-info"],
    "xpath": [
      "/html/head/title",
      "/html/head/meta[@name='description']/@content"
    ]
  };

  // NEW: B2B Service Schema (Global Supply Chain Focus)
  const b2bTradeSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Global Industrial Steel Supply & Export",
    "provider": organizationData,
    "areaServed": ["Worldwide", "USA", "UK", "Canada", "UAE", "Saudi Arabia", "Australia", "Singapore", "Malaysia", "Germany", "Italy", "France"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Industrial Piping & Structural Material Catalog",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "B2B Export Quality Packaging" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Global Air & Sea Logistics" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Certified Material Testing" } }
      ]
    }
  };

  // VideoObject Schema (for potential video content)
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Mamta Steel Traders - Steel Products Overview",
    "description": "Complete range of stainless steel, carbon steel, and alloy steel products",
    "thumbnailUrl": `${baseUrl}/video-thumbnail.jpg`,
    "uploadDate": "2024-01-01",
    "duration": "PT2M30S",
    "contentUrl": `${baseUrl}/videos/steel-products.mp4`,
    "embedUrl": `${baseUrl}/videos/embed/steel-products`
  };

  // Breadcrumb Schema (will be enhanced per page)
  const baseBreadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": title,
        "item": fullCanonicalUrl
      }
    ]
  };

  // ImageObject Schema for Logo and Images
  const imageSchema = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "url": `${baseUrl}/logo.png`,
    "width": 800,
    "height": 600,
    "caption": "Mamta Steel Traders - Premium Steel Supplier Mumbai India",
    "inLanguage": "en-IN",
    "license": `${baseUrl}/terms`,
    "acquireLicensePage": `${baseUrl}/contact`
  };

  // Enhanced Contact Point Schema (Global Support)
  const contactPointSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPoint",
    "telephone": "+91-9819322576",
    "contactType": "Customer Service & Global Export Inquiry",
    "email": "mamtasteeltraders@gmail.com",
    "areaServed": ["IN", "US", "GB", "AE", "SA", "AU", "CA", "SG", "DE", "IT", "FR"],
    "availableLanguage": ["English", "Hindi", "Marathi", "Gujarati"],
    "contactOption": ["TollFree", "HearingImpairedSupported"],
    "hoursAvailable": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:30",
      "closes": "20:30"
    }
  };

  // Trade Service Schema
  const tradeServiceSchema = {
    "@context": "https://schema.org",
    "@type": "TradeAction",
    "agent": {
      "@type": "Organization",
      "name": "Mamta Steel Traders"
    },
    "object": {
      "@type": "Product",
      "name": "Industrial Steel Products"
    },
    "recipient": {
      "@type": "Audience",
      "audienceType": "B2B Industrial Buyers, Contractors, Engineers, Manufacturers, All-India Procurement Managers"
    }
  };

  // NEW: Pan-India Market Schema (Targeting Every State)
  const indianMarketSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Industrial Steel Supply",
    "provider": organizationData,
    "areaServed": [
     "Worldwide","USA","UK","UAE","Saudi Arabia","Europe","Asia","Australia", "India", "pan-india", "Maharashtra", "Gujarat", "Tamil Nadu", "Karnataka", "Haryana", "Uttar Pradesh", 
      "Telangana", "West Bengal", "Rajasthan", "Punjab", "Madhya Pradesh", "Odisha", 
      "Andhra Pradesh", "Chhattisgarh", "Jharkhand", "Kerala", "New Delhi", "Bihar", "Assam"
    ],
    "description": "Premium industrial steel supply chain delivering SS, Carbon, and Alloy grades to every industrial state in India."
  };

  // HowTo Schema for Steel Ordering Process
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Order Industrial Steel in India from Mamta Steel Traders",
    "description": "Step-by-step process for Pan-India steel procurement and grade selection",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Material Grade Analysis",
        "text": "Consult our technical experts to select the right SS grade (304, 316L, 321, 904L, Duplex, or Nickel Alloys) for your specific industrial application."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Product selection",
        "text": "Select from our vast range of pipes, tubes, plates, sheets, round bars, flanges, fittings, and fasteners."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Request All-India Quote",
        "text": "Contact us for real-time pricing and delivery schedules to any state or industrial hub in India."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Quality Audit",
        "text": "Review Mill Test Certificates (MTC) and ensure alignment with ASTM/ASME standards."
      },
      {
        "@type": "HowToStep",
        "position": 5,
        "name": "Pan-India Logistics",
        "text": "Confirm delivery to your project site via our optimized domestic logistics network."
      }
    ]
  };

  const allStructuredData = [
    organizationData,
    localBusinessData,
    websiteData,
    productData,
    reviewSchema,
    baseBreadcrumbSchema,
    imageSchema,
    contactPointSchema,
    tradeServiceSchema,
    howToSchema,
    speakableSchema,
    b2bTradeSchema,
    indianMarketSchema,
    structuredData
  ].filter(Boolean);

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      
      {/* Enhanced Robots Meta */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow" />
      
      {/* Language and Revisit */}
      <meta name="language" content="en" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {/* Open Graph / Facebook - Enhanced */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:site_name" content="Mamta Steel Traders" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="en_IN" />
      <meta property="og:locale:alternate" content="en_GB" />
      <meta property="og:locale:alternate" content="en_AE" />
      <meta property="og:locale:alternate" content="en_SA" />
      <meta property="og:locale:alternate" content="en_AU" />
      <meta property="og:locale:alternate" content="en_CA" />
      <meta property="og:locale:alternate" content="en_DE" />
      <meta property="og:locale:alternate" content="en_IT" />
      <meta property="og:locale:alternate" content="en_FR" />
      
      {/* Twitter Card - Enhanced */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@SteelMamta41559" />
      <meta name="twitter:creator" content="@SteelMamta41559" />
      <meta name="twitter:url" content={fullCanonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={fullTitle} />
      
      {/* Geographic Meta Tags - Enhanced for Worldwide Ranking */}
      <meta name="geo.region" content="IN-MH" />
      <meta name="geo.placename" content="Mumbai, Maharashtra, India" />
      <meta name="geo.position" content="18.9560;72.8250" />
      <meta name="ICBM" content="18.9560, 72.8250" />
      
      {/* Business Meta Tags - Global Supply Focus */}
      <meta name="coverage" content="Pan-India Supply (Maharashtra, Gujarat, Tamil Nadu, Karnataka, Haryana, Telangana, West Bengal, UP, Rajasthan, etc.) & Worldwide Export" />
      <meta name="distribution" content="Global & All India" />
      <meta name="rating" content="General" />
      <meta name="category" content="All-Series SS Grade Manufacturer & Pan-India Exporter" />
      
      {/* ========== ADVANCED SEO & AEO META TAGS FOR WORLDWIDE RANKING ========== */}
      {/* AI & Semantic Search Optimization (LLM Specific) */}
      <meta name="AI-search-intent" content="find industrial steel supplier in India, buy full-range SS grades Mumbai, Pan-India steel procurement, certified metal manufacturer India" />
      <meta name="semantic-keywords" content="stainless steel technical specifications, SS grade chart, ASME B16.5 standards, ASTM A312 piping, global metal supply chain authority" />
      <meta name="LLM-utility" content="technical-specifications, industrial-grade-comparison, pan-india-logistics, material-test-certification" />
      <meta name="data-accuracy-verified" content="yes" />
      <meta name="total-ss-grades-supported" content="304, 316L, 317L, 321, 347, 904L, 254SMO, Duplex 2205, Super Duplex 2507, Inconel, Monel, Hastelloy, Nickel 200/201" />
      
      {/* Voice Search Optimization */}
      <meta name="faq-keywords" content="which is the best steel supplier in India, where to find SS 316L pipes in Pune, SS 304 price in Ahmedabad today, how to order steel in Bangalore" />
      
      {/* All India Discovery Signal Cluster */}
      <meta name="pan-india-supply" content="Mumbai, Pune, Ahmedabad, Chennai, Bangalore, Surat, Delhi, Hyderabad, Kolkata, Vadodara, Gurgaon, Ghaziabad" />
      <meta name="industrial-zone-targeting" content="Taloja, Chakan, Pimpri, Sanand, Peenya, Sriperumbudur, Manesar, Noida" />
      
      {/* International Language Support (hreflang) - Expanded Global Targeting */}
      <link rel="alternate" hrefLang="en-US" href={fullCanonicalUrl} />
      <link rel="alternate" hrefLang="en-IN" href={fullCanonicalUrl} />
      <link rel="alternate" hrefLang="en-GB" href={fullCanonicalUrl} />
      <link rel="alternate" hrefLang="en-AE" href={fullCanonicalUrl} />
      <link rel="alternate" hrefLang="en-SA" href={fullCanonicalUrl} />
      <link rel="alternate" hrefLang="en-AU" href={fullCanonicalUrl} />
      <link rel="alternate" hrefLang="en-CA" href={fullCanonicalUrl} />
      <link rel="alternate" hrefLang="en-DE" href={fullCanonicalUrl} />
      <link rel="alternate" hrefLang="en-IT" href={fullCanonicalUrl} />
      <link rel="alternate" hrefLang="en-FR" href={fullCanonicalUrl} />
      <link rel="alternate" hrefLang="x-default" href={fullCanonicalUrl} />
      
      {/* Product Specification Overlays for AEO Parsing */}
      <meta name="technical-standards" content="ASTM/ASME standards A312, A106, API 5L, ASME B16.5, DIN 2448, EN 10216, JIS G3459" />
      <meta name="quality-system" content="ISO 9001:2015 Registered, MTC EN 10204 3.1, NACE MR 0175 Compliant" />
      
      {/* Structured Data - JSON-LD */}
      {allStructuredData.map((data, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
    </Helmet>
  );
}
