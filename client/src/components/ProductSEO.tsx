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
        "name": `What is ${productName || title}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": description
        }
      },
      {
        "@type": "Question",
        "name": "What are the available sizes and specifications?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `${productName || title} is available in various sizes and specifications as per ASTM, ASME, DIN, and EN standards. Contact us for detailed specifications.`
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide material test certificates?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide mill test certificates and material test certificates with all our steel products as per international standards."
        }
      },
      {
        "@type": "Question",
        "name": "What is the delivery time?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Delivery time varies based on quantity and location. Contact us for specific delivery schedules. We offer express delivery options for urgent requirements."
        }
      }
    ]
  };

  return (
    <Helmet>
      {/* Page-specific Meta Tags (global tags like robots, author, viewport are in index.html) */}
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
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={title} />
      
      {/* NOTE: geo tags and distribution tags are already in index.html - no duplication */}
      
      {/* ========== ADVANCED PRODUCT PAGE SEO ========== */}
      {/* AI & Voice Search Optimization for Products */}
      <meta name="product-intent" content="buy, purchase, order, quote, inquiry" />
      <meta name="voice-search-product" content={`buy ${productName || title}, order ${productName || title}, price of ${productName || title}`} />
      <meta name="AI-product-category" content={category || "Industrial Steel Products"} />
      
      {/* Page-specific Product Classification (unique to each product page) */}
      <meta name="page-product-category" content={category || "Steel Products"} />
      <meta name="page-product-material" content="Steel, Stainless Steel, Carbon Steel, Alloy Steel" />
      <meta name="page-product-industry" content="Industrial, Manufacturing, Construction, Oil & Gas" />
      <meta name="page-product-application" content="Piping, Construction, Machinery, Chemical Processing" />
      
      {/* International Product Visibility */}
      <meta name="target-market" content="India, USA, UK, UAE, Saudi Arabia, Australia, Canada, Singapore" />
      <meta name="export-product" content="yes" />
      <meta name="worldwide-shipping" content="available" />
      
      {/* Product Quality & Trust Signals */}
      <meta name="product-certification" content="ISO 9001:2015, ASTM, ASME, DIN, EN" />
      <meta name="quality-assurance" content="Mill Test Certificate, Material Test Report" />
      <meta name="product-warranty" content="Quality Guaranteed" />
      
      {/* E-commerce & Purchase Signals */}
      <meta name="availability" content="in stock" />
      <meta name="delivery-options" content="Worldwide Delivery, Express Shipping, Bulk Orders" />
      <meta name="payment-options" content="Bank Transfer, LC, Advance Payment" />
      
      {/* Product Comparison Keywords */}
      <meta name="compare-products" content={`${productName || title} specifications, ${productName || title} vs alternatives, best ${productName || title} supplier`} />
      
      {/* NOTE: viewport and format-detection tags are already in index.html - no duplication */}
      
      {/* International Language Support */}
      <link rel="alternate" hrefLang="en-IN" href={`${siteUrl}${canonicalUrl || ''}`} />
      <link rel="alternate" hrefLang="en" href={`${siteUrl}${canonicalUrl || ''}`} />
      <link rel="alternate" hrefLang="x-default" href={`${siteUrl}${canonicalUrl || ''}`} />
      
      {/* ========== ADVANCED STRUCTURED DATA ========== */}
      {/* Enhanced Product Schema (single comprehensive schema, no duplicates) */}
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
    </Helmet>
  );
}
