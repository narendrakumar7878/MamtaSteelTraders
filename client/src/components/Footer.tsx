import { Facebook, Twitter, Instagram, Linkedin, Github, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";

export default function Footer() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Mamta Steel Traders",
    "alternateName": "MST Steel India",
    "url": "https://mamtasteeltraders.com",
    "logo": "https://mamtasteeltraders.com/logo.png",
    "description": "Leading supplier and exporter of Stainless Steel Pipes, Tubes, Plates, Sheets, Flanges, Fittings, Round Bars, Fasteners in Mumbai, India. ISO 9001:2015 certified. Specializing in SS 304, 316, Carbon Steel, Alloy Steel products.",
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
      "latitude": "18.9496",
      "longitude": "72.8320"
    },
    "contactPoint": [{
      "@type": "ContactPoint",
      "telephone": "+91-9819322576",
      "contactType": "sales",
      "areaServed": "IN",
      "availableLanguage": ["en", "hi"]
    }],
    "email": "mamtasteeltraders@gmail.com",
    "telephone": "+91-9819322576",
    "priceRange": "$$",
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "18.9496",
        "longitude": "72.8320"
      },
      "geoRadius": "5000000"
    },
    "sameAs": [
      "https://x.com/SteelMamta41559",
      "https://www.instagram.com/mamta_steel_traders/",
      "https://www.linkedin.com/in/mamta-steel-traders-09520717a/"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Steel Products",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Stainless Steel Products",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Stainless Steel Pipes & Tubes SS 304 316" }},
            { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Stainless Steel Plates & Sheets" }},
            { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Stainless Steel Round Bars" }},
            { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Stainless Steel Flanges ANSI B16.5" }},
            { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Stainless Steel Fittings Buttweld Forged" }}
          ]
        }
      ]
    }
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <footer 
        className="bg-slate-700 text-white" 
        data-testid="footer"
        itemScope 
        itemType="https://schema.org/Organization"
      >
        <div className="w-full max-w-7xl mx-auto px-2 sm:px-3 lg:px-4 xl:px-6 py-8 sm:py-10 lg:py-12">
          <meta itemProp="name" content="Mamta Steel Traders" />
          <meta itemProp="url" content="https://mamtasteeltraders.com" />
          <meta itemProp="logo" content="https://mamtasteeltraders.com/logo.png" />
          <meta itemProp="description" content="Leading stainless steel pipes, tubes, plates, sheets, flanges, fittings supplier in Mumbai, India. ISO 9001:2015 certified steel trader." />
        {/* SEO Keywords Section - Hidden but helps search engines */}
        <div className="sr-only" itemProp="keywords">
          Stainless Steel Supplier Mumbai, SS 304 Pipes Mumbai, SS 316 Tubes India, 
          Carbon Steel Plates Mumbai, Alloy Steel Flanges India, Steel Fittings Mumbai, 
          Industrial Steel Supplier Maharashtra, Steel Trader Mumbai, Steel Exporter India,
          ANSI Flanges Mumbai, Buttweld Fittings India, Forged Fittings Mumbai,
          Round Bars Mumbai, Fasteners Mumbai, Tool Steel India
        </div>
        
        {/* Main Footer Content - Adaptive Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 justify-items-center text-center lg:text-left lg:justify-items-start px-4 sm:px-0">
          
          {/* Company Info Section - Centered on Mobile */}
          <div className="group w-full flex flex-col items-center lg:items-start sm:col-span-2 lg:col-span-1" itemProp="description">
            <h3 className="text-orange-400 text-base sm:text-lg font-semibold mb-4 transform transition-all duration-300 group-hover:translate-x-1">
              <span itemProp="name">MAMTA STEEL TRADERS</span>
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6 transition-colors duration-300 group-hover:text-gray-200 max-w-sm">
              Experience and knowledge of International industrial systems,
              dedicated to provide the best economical solutions to our valued
              customers. We Won Many Factory Awards and Certified.
            </p>

            {/* Social Media Icons - Centered on Mobile */}
            <div className="flex flex-col items-center lg:items-start w-full">
              <p className="text-gray-300 text-[10px] uppercase font-bold tracking-widest mb-3 transition-colors duration-300 group-hover:text-gray-200 opacity-60">
                Follow us
              </p>
              <div className="flex space-x-4 justify-center lg:justify-start">
                <a
                  href="https://x.com/SteelMamta41559?t=Y_FKRApvGaL2j_H4OD6rug&s=08"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-sky-400 hover:scale-110 transform transition-all duration-300"
                  aria-label="Follow us on Twitter"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="https://www.instagram.com/mamta_steel_traders/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-pink-400 hover:scale-110 transform transition-all duration-300"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/mamta-steel-traders-09520717a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-500 hover:scale-110 transform transition-all duration-300"
                  aria-label="Follow us on LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Combined Links & Contact Area - Side-by-side on Mobile with custom widths */}
          <div className="grid grid-cols-[1.5fr_2.5fr] gap-4 w-full sm:col-span-2 lg:col-span-2 lg:grid-cols-2 text-left">
            
            {/* Quick Links Section */}
            <div className="group">
              <h3 className="text-orange-400 text-sm sm:text-base font-bold mb-4 border-b border-white/5 pb-2">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {[
                  { name: "Home", href: "/" },
                  { name: "Products", href: "/products" },
                  { name: "About", href: "/about" },
                  { name: "Quality", href: "/technical-info" },
                  { name: "Content", href: "/solutions" },
                  { name: "Contact", href: "/contact" },
                  { name: "Blog", href: "/blog" }
                ].map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      className="text-gray-400 text-[11px] sm:text-xs lg:text-sm hover:text-orange-300 transition-colors duration-200 block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info Section */}
            <div className="group" itemProp="contactPoint" itemScope itemType="https://schema.org/ContactPoint">
              <h3 className="text-orange-400 text-sm sm:text-base font-bold mb-4 border-b border-white/5 pb-2">
                Contact Info
              </h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  {[
                    "+91 9819322576",
                    "+91 9152958210",
                    "+91 7878568416"
                  ].map((phone, idx) => (
                    <a
                      key={idx}
                      href={`tel:${phone.replace(/\s/g, '')}`}
                      className="text-blue-400 text-[11px] sm:text-xs lg:text-sm hover:text-blue-300 hover:underline transition-all duration-200 block font-medium"
                      itemProp="telephone"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
                <div className="space-y-2 border-t border-white/5 pt-4">
                  {[
                    "info@mamtasteeltraders.com",
                    "sales@mamtasteeltraders.com",
                    "mamtasteeltraders@gmail.com"
                  ].map((email, idx) => (
                    <a
                      key={idx}
                      href={`mailto:${email}`}
                      className="text-blue-400 text-[10px] sm:text-xs lg:text-sm hover:text-blue-300 hover:underline transition-all duration-200 block break-all leading-tight italic"
                      itemProp="email"
                    >
                      {email}
                    </a>
                  ))}
                </div>
                <div className="pt-2 border-t border-white/5">
                  <p className="text-gray-400 text-[9px] sm:text-[10px] font-black uppercase tracking-tighter" itemProp="taxID">
                    GST: 27DMIPR2047R1Z8
                  </p>
                </div>
              </div>
              <meta itemProp="contactType" content="sales" />
              <meta itemProp="areaServed" content="IN" />
            </div>
          </div>

          {/* Location Section - Centered on Mobile */}
          <div className="group w-full flex flex-col items-center lg:items-start sm:col-span-2 lg:col-span-1" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
            <h3 className="text-orange-400 text-base sm:text-lg font-semibold mb-4 transform transition-all duration-300 group-hover:translate-x-1">
              Our Location
            </h3>
            <address className="text-gray-300 text-xs sm:text-sm leading-relaxed not-italic transition-all duration-300 group-hover:text-gray-200 text-center lg:text-left max-w-xs">
              <span itemProp="streetAddress">Office No. 20, 1st Floor<br />
              4549 Gulab Mohammad Building<br />
              Rangi Gali, 2nd Kumbharwada</span><br />
              <span itemProp="addressLocality">Mumbai</span> <span itemProp="postalCode">400004</span><br />
              <span itemProp="addressRegion">Maharashtra</span>, <span itemProp="addressCountry">India</span>
            </address>
          </div>
        </div>

        {/* Animated Divider Line */}
        <div className="pt-1 sm:pt-2">
          <div className="footer-divider"></div>
        </div>
        {/* Bottom Footer - Centered Layout */}
        <div className="text-center space-y-4 sm:space-y-6">
          {/* Copyright Text - Centered */}
          <div className="text-gray-400 text-xs sm:text-sm transition-colors duration-300 hover:text-gray-300 px-2" itemProp="copyrightNotice">
            © 2017-{new Date().getFullYear()} <span itemProp="copyrightHolder">Mamta Steel Traders</span>. All rights Reserved. Developed by{" "}
            <span className="text-white font-medium hover:text-orange-300 transition-colors duration-300 cursor-pointer">
              Narendra Kumar
            </span>
          </div>

          {/* Bottom Social Icons - Below divider, Centered */}
          <div className="flex justify-center space-x-4 sm:space-x-6 lg:space-x-8">
            <a
              href="https://www.linkedin.com/in/narendrakumar7878/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 social-bounce transform transition-all duration-300 hover:shadow-lg rounded-full p-1.5 sm:p-2 hover:bg-blue-500/10"
              data-testid="bottom-social-linkedin"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://www.instagram.com/n_b_parmar_6677/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-400 social-bounce transform transition-all duration-300 hover:shadow-lg rounded-full p-1.5 sm:p-2 hover:bg-pink-400/10"
              data-testid="bottom-social-instagram"
              aria-label="Instagram"
            >
              <Instagram size={20} className="sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://github.com/narendrakumar7878"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white social-bounce transform transition-all duration-300 hover:shadow-lg rounded-full p-1.5 sm:p-2 hover:bg-white/10"
              data-testid="bottom-social-github"
              aria-label="GitHub"
            >
              <Github size={20} className="sm:w-6 sm:h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}
