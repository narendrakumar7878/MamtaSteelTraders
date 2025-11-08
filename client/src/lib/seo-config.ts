// Global SEO Configuration for Mamta Steel Traders
// Optimized for worldwide and India steel industry searches

export const siteConfig = {
  siteName: "Mamta Steel Traders",
  siteUrl: "https://mamtasteeltraders.com",
  defaultTitle: "Mamta Steel Traders | ISO Certified Steel Supplier Mumbai India | Stainless Steel Carbon Steel Alloy Steel Manufacturer Exporter",
  defaultDescription: "Leading ISO 9001:2015 certified steel supplier in Mumbai India. Manufacturer & exporter of stainless steel pipes tubes plates sheets bars flanges fittings fasteners. ASTM ASME DIN EN certified. SS 304 316L 321 310 904L duplex carbon alloy steel. Best price worldwide delivery.",
  keywords: [
    // Primary Keywords - Global
    "steel supplier", "steel manufacturer", "steel exporter", "steel trader", "steel stockist",
    "stainless steel supplier", "carbon steel supplier", "alloy steel supplier",
    
    // Location-based Keywords - India
    "steel supplier mumbai", "steel manufacturer mumbai", "steel supplier india",
    "stainless steel mumbai", "steel trader mumbai", "steel stockist mumbai",
    "steel supplier maharashtra", "steel exporter india", "mumbai steel company",
    
    // Product-specific Keywords
    "stainless steel pipes", "stainless steel tubes", "stainless steel plates", "stainless steel sheets",
    "stainless steel bars", "stainless steel flanges", "stainless steel fittings", "stainless steel fasteners",
    "carbon steel pipes", "carbon steel plates", "alloy steel pipes", "alloy steel plates",
    "seamless pipes", "welded pipes", "round bars", "flat bars", "hex bars",
    
    // Material Grades
    "SS 304", "SS 316", "SS 316L", "SS 321", "SS 310", "SS 347", "SS 904L",
    "duplex 2205", "super duplex 2507", "inconel", "monel", "hastelloy",
    "ASTM A312", "ASTM A106", "API 5L", "ASME B16.5", "ASME B16.9",
    
    // Standards & Certifications
    "ISO certified steel", "ASTM steel", "ASME steel", "DIN steel", "EN steel",
    "mill test certificate", "material test certificate",
    
    // Industry Applications
    "oil gas steel", "petrochemical steel", "chemical processing steel",
    "pharmaceutical steel", "food processing steel", "construction steel",
    
    // Long-tail Keywords
    "best steel supplier mumbai", "cheap steel supplier india", "wholesale steel mumbai",
    "stainless steel 304 price mumbai", "carbon steel pipes manufacturer india",
    "alloy steel plates exporter", "seamless pipes supplier mumbai",
    
    // ========== ADVANCED INTERNATIONAL & AI-FRIENDLY KEYWORDS ==========
    // Worldwide Market Keywords
    "steel supplier USA", "steel exporter UK", "steel manufacturer UAE", "steel trader Saudi Arabia",
    "steel supplier Australia", "steel exporter Canada", "steel supplier Singapore", "steel trader Malaysia",
    "international steel exporter India", "worldwide steel supplier", "global steel manufacturer",
    
    // AI Search & Voice Search Keywords (Question-based)
    "where to buy stainless steel pipes", "who sells steel flanges near me", "best steel supplier in my area",
    "how to order steel products online", "what is the price of SS 304 pipes", "which steel grade is best",
    "why choose Mamta Steel Traders", "when to use SS 316L vs 304", "compare steel grades",
    
    // Long-tail Commercial Keywords
    "buy stainless steel pipes online India", "order carbon steel plates Mumbai",
    "request steel quotation India", "get steel price quote Mumbai", "steel bulk order discount",
    "wholesale steel supplier near me", "industrial steel products Mumbai stockist",
    
    // Location-specific Worldwide Keywords
    "steel supplier Middle East", "steel exporter Gulf countries", "steel manufacturer Asia Pacific",
    "steel trader North America", "steel supplier Europe", "steel exporter Africa",
    "Mumbai steel supplier worldwide delivery", "India steel exporter international shipping",
    
    // Industry-specific Application Keywords
    "oil gas steel pipes supplier", "petrochemical steel products India", "chemical processing steel Mumbai",
    "marine grade steel supplier", "pharmaceutical steel manufacturer", "food grade stainless steel India",
    "construction steel supplier Mumbai", "power plant steel products", "refinery steel supplier",
    
    // Technical Specification Keywords
    "ASTM A312 pipes supplier India", "ASME B16.5 flanges Mumbai", "API 5L pipes manufacturer",
    "DIN 2448 tubes supplier", "EN 10216 pipes India", "JIS G3459 tubes Mumbai",
    "mill test certificate steel", "material test report India", "third party inspection steel",
    
    // Product Combination Keywords
    "pipes and flanges supplier", "tubes and fittings manufacturer", "plates and sheets stockist",
    "bars and fasteners supplier", "complete piping solution Mumbai", "turnkey steel supply India",
    
    // Comparative & Competitive Keywords
    "best quality steel India", "reliable steel supplier Mumbai", "trusted steel manufacturer",
    "ISO certified steel company India", "reputed steel trader Mumbai", "authorized steel dealer",
    "genuine steel products India", "original steel supplier Mumbai", "verified steel manufacturer",
    
    // E-commerce & Digital Keywords
    "buy steel online India", "steel products online Mumbai", "order steel products website",
    "steel supplier online quote", "instant steel quotation India", "digital steel catalog Mumbai",
    
    // Seasonal & Time-based Keywords
    "steel price today", "current steel rates Mumbai", "latest steel prices India",
    "steel market rates today", "updated steel quotation", "real time steel prices",
    
    // Business Size Keywords
    "small quantity steel supplier", "bulk steel order Mumbai", "wholesale steel rates India",
    "retail steel supplier Mumbai", "large order steel exporter", "custom steel requirements India",
    
    // Emergency & Urgent Keywords
    "urgent steel supply Mumbai", "emergency steel delivery India", "same day steel Mumbai",
    "express steel delivery India", "quick steel supply Mumbai", "fast delivery steel India",
    
    // Quality & Certification Keywords
    "certified steel products India", "quality steel supplier Mumbai", "ISO approved steel India",
    "NABL certified steel Mumbai", "BIS approved steel India", "government approved steel supplier",
    
    // Sustainability Keywords
    "eco friendly steel India", "sustainable steel products Mumbai", "green steel supplier India",
    "recycled steel Mumbai", "environmentally friendly steel products",
    
    // Technology Keywords
    "advanced steel manufacturing India", "modern steel facility Mumbai", "state of art steel plant",
    "precision steel cutting Mumbai", "CNC machined steel India", "laser cut steel Mumbai"
  ],
  author: "Mamta Steel Traders",
  language: "en-IN",
  locale: "en_IN",
  organization: {
    name: "Mamta Steel Traders",
    legalName: "Mamta Steel Traders Private Limited",
    foundingDate: "2005",
    address: {
      streetAddress: "Mumbai Industrial Area",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      postalCode: "400001",
      addressCountry: "India"
    },
    contactPoint: {
      telephone: "+91-XXXXXXXXXX",
      contactType: "Sales",
      areaServed: "Worldwide",
      availableLanguage: ["en", "hi", "mr"]
    },
    sameAs: [
      "https://www.linkedin.com/company/mamta-steel-traders",
      "https://www.facebook.com/mamtasteeltraders",
      "https://www.instagram.com/mamtasteeltraders",
      "https://twitter.com/mamtasteel"
    ]
  },
  social: {
    twitter: "@mamtasteel",
    facebook: "mamtasteeltraders",
    instagram: "mamtasteeltraders",
    linkedin: "mamta-steel-traders"
  }
};

// Generate comprehensive keywords string
export const getKeywordsString = () => siteConfig.keywords.join(", ");

// Generate Organization Schema
export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": ["Organization", "Corporation", "Manufacturer"],
  "name": siteConfig.organization.name,
  "legalName": siteConfig.organization.legalName,
  "url": siteConfig.siteUrl,
  "logo": `${siteConfig.siteUrl}/logo.png`,
  "foundingDate": siteConfig.organization.foundingDate,
  "description": siteConfig.defaultDescription,
  "address": {
    "@type": "PostalAddress",
    ...siteConfig.organization.address
  },
  "contactPoint": {
    "@type": "ContactPoint",
    ...siteConfig.organization.contactPoint
  },
  "sameAs": siteConfig.organization.sameAs,
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "450",
    "bestRating": "5",
    "worstRating": "1"
  }
});

// Generate LocalBusiness Schema
export const getLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": siteConfig.organization.name,
  "image": `${siteConfig.siteUrl}/logo.png`,
  "@id": siteConfig.siteUrl,
  "url": siteConfig.siteUrl,
  "telephone": siteConfig.organization.contactPoint.telephone,
  "priceRange": "₹₹₹",
  "address": {
    "@type": "PostalAddress",
    ...siteConfig.organization.address
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 19.0760,
    "longitude": 72.8777
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    "opens": "09:00",
    "closes": "18:00"
  },
  "sameAs": siteConfig.organization.sameAs
});

// Generate Website Schema
export const getWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": siteConfig.siteName,
  "url": siteConfig.siteUrl,
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${siteConfig.siteUrl}/search?q={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  }
});

// Generate Breadcrumb Schema
export const getBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

// Product categories for sitemap
export const productCategories = [
  "Stainless Steel Pipes & Tubes",
  "Carbon Steel Pipes & Tubes",
  "Alloy Steel Pipes & Tubes",
  "Stainless Steel Plates & Sheets",
  "Carbon Steel Plates & Sheets",
  "Alloy Steel Plates & Sheets",
  "Stainless Steel Round Bars",
  "Carbon Steel Round Bars",
  "Alloy Steel Round Bars",
  "Stainless Steel Flanges",
  "Carbon Steel Flanges",
  "Alloy Steel Flanges",
  "Buttweld Fittings",
  "Forged Fittings",
  "Socket Weld Fittings",
  "Stainless Steel Fasteners",
  "High Tensile Fasteners",
  "Duplex Steel Products",
  "Super Duplex Steel Products",
  "Nickel Alloy Products",
  "Inconel Products",
  "Monel Products",
  "Hastelloy Products"
];
