import { Helmet } from "react-helmet-async";

interface ProductSEOProps {
  title: string;
  description: string;
  keywords?: string;
  category?: string;
  productName?: string;
  specifications?: string[];
  canonicalUrl?: string;
}

export default function ProductSEO({
  title,
  description,
  keywords,
  category,
  productName,
  specifications = [],
  canonicalUrl
}: ProductSEOProps) {
  const fullTitle = `${title} | Mamta Steel Traders - Premium Steel Supplier in Mumbai`;
  const siteUrl = "https://mamtasteeltraders.com"; // DOMAIN FIXED
  const imageUrl = `${siteUrl}/images/products/steel-products-banner.jpg`;
  
  // ========== ADVANCED SEO SCHEMAS FOR PRODUCT PAGES ==========
  // Single Comprehensive Enhanced Product Schema (no duplicates)
  const enhancedProductSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": productName || title,
    "description": description,
    "image": imageUrl,
    "brand": {
      "@type": "Brand",
      "name": "Mamta Steel Traders",
      "logo": `${siteUrl}/logo.png`
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Mamta Steel Traders",
      "url": siteUrl
    },
    "offers": {
      "@type": "AggregateOffer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "INR",
      "seller": {
        "@type": "Organization",
        "name": "Mamta Steel Traders"
      },
      "priceValidUntil": new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      "url": `${siteUrl}${canonicalUrl || ''}`
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "125",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Industrial Buyer"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Excellent quality steel products with timely delivery and professional service."
      }
    ],
    "material": "Steel",
    "category": category || "Industrial Steel Products",
    "inProductGroupWithID": "Steel Products",
    "isRelatedTo": [
      {
        "@type": "Product",
        "name": "Steel Flanges"
      },
      {
        "@type": "Product",
        "name": "Steel Fittings"
      }
    ],
    "additionalProperty": specifications.map(spec => ({
      "@type": "PropertyValue",
      "name": "Specification",
      "value": spec
    }))
  };

  // NEW: Dataset Schema for Technical Tables (AEO Focused)
  const datasetSchema = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    "name": `${productName || title} Technical Specifications`,
    "description": `Technical specification table, dimensions, and chemical composition for ${productName || title}`,
    "license": `${siteUrl}/terms`,
    "creator": {
      "@type": "Organization",
      "name": "Mamta Steel Traders"
    },
    "variableMeasured": specifications,
    "isAccessibleForFree": true
  };

  // NEW: Speakable Schema for AI & Voice Search
  const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "Speakable",
    "cssSelector": [".hero-title", ".hero-subtitle", ".specifications-section"],
    "xpath": [
      "/html/head/title",
      "/html/head/meta[@name='description']/@content"
    ]
  };

  // BreadcrumbList Schema for Product Pages
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Products",
        "item": `${siteUrl}/products`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": category || "Steel Products",
        "item": `${siteUrl}${canonicalUrl || ''}`
      }
    ]
  };

  // FAQ Schema for Common Product Questions
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `What are the typical applications for ${productName || title}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Common applications for ${productName || title} include oil and gas, petrochemical, chemical processing, pharmaceutical, and marine industries where high corrosion resistance and performance are critical.`
        }
      },
      {
        "@type": "Question",
        "name": "Does Mamta Steel Traders provide worldwide delivery?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Mamta Steel Traders provides worldwide export and delivery services to markets in the UAE, Saudi Arabia, USA, UK, Europe, Australia, and Singapore with full technical certification."
        }
      },
      {
        "@type": "Question",
        "name": "What is the price of SS 304/316 pipes in Mumbai today?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Steel prices fluctuate daily. We provide competitive real-time quotations based on current market rates. Contact our sales team for an instant quote on SS 304, 316, and other specialty grades."
        }
      },
      {
        "@type": "Question",
        "name": "Are all products delivered with MTC?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, 100% of our supply is accompanied by Mill Test Certificates (MTC) as per EN 10204 3.1 standard, ensuring full material traceability."
        }
      }
    ]
  };

  return (
    <Helmet>
      {/* Page-specific Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={`${siteUrl}${canonicalUrl}`} />}
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="product" />
      <meta property="og:url" content={`${siteUrl}${canonicalUrl || ''}`} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={title} />
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
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@SteelMamta41559" />
      <meta name="twitter:creator" content="@SteelMamta41559" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      
      {/* ========== ADVANCED PRODUCT PAGE SEO & AEO ========== */}
      {/* AI & Voice Search Optimization (LLM Specific) */}
      <meta name="product-intent" content="buy, purchase, order, quote, inquiry, specification-check" />
      <meta name="AI-extractable-data" content="chemical-composition, mechanical-properties, weight-charts, dimensional-specs" />
      <meta name="technical-authority" content="Mamta Steel Traders - Technical Expert" />
      <meta name="data-source-reliability" content="ISO 9001:2015 Verified" />
      
      {/* International Product Visibility Meta */}
      <meta name="target-market" content="Global (India, Dubai, Riyadh, London, Houston, Singapore, Perth)" />
      <meta name="export-ready" content="yes" />
      <meta name="international-shipping" content="worldwide-air-sea-freight" />
      <meta name="distributor-area" content="Worldwide Bulk Supply" />
      
      {/* Technical Standards Overlay for AI Agents */}
      <meta name="product-spec-standard" content="ASME/ASTM/DIN/EN" />
      <meta name="material-group" content="Piping Material, Structural Steel, Flow Control" />
      
      {/* E-commerce & Logistics Info */}
      <meta name="availability" content="ready-stock" />
      <meta name="lead-time" content="Immediate (Ex-stock) or 1-2 weeks (Custom)" />
      
      {/* International Language Support (hreflang) */}
      <link rel="alternate" hrefLang="en-IN" href={`${siteUrl}${canonicalUrl || ''}`} />
      <link rel="alternate" hrefLang="en-US" href={`${siteUrl}${canonicalUrl || ''}`} />
      <link rel="alternate" hrefLang="en-GB" href={`${siteUrl}${canonicalUrl || ''}`} />
      <link rel="alternate" hrefLang="en-AE" href={`${siteUrl}${canonicalUrl || ''}`} />
      <link rel="alternate" hrefLang="en-SA" href={`${siteUrl}${canonicalUrl || ''}`} />
      <link rel="alternate" hrefLang="en-AU" href={`${siteUrl}${canonicalUrl || ''}`} />
      <link rel="alternate" hrefLang="x-default" href={`${siteUrl}${canonicalUrl || ''}`} />
      
      {/* ========== ADVANCED STRUCTURED DATA ========== */}
      {/* Enhanced Product Schema */}
      <script type="application/ld+json">
        {JSON.stringify(enhancedProductSchema)}
      </script>
      
      {/* Breadcrumb Schema */}
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
      
      {/* FAQ Schema */}
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>

      {/* Dataset Schema (AEO Data Extraction) */}
      <script type="application/ld+json">
        {JSON.stringify(datasetSchema)}
      </script>

      {/* Speakable Schema (AI/Voice Search) */}
      <script type="application/ld+json">
        {JSON.stringify(speakableSchema)}
      </script>
    </Helmet>
  );
}
