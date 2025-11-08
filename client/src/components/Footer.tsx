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
        
        {/* Main Footer Content - Centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-10 justify-items-center text-center lg:text-left lg:justify-items-start">
          {/* Company Info Section */}
          <div className="lg:col-span-1 group w-full sm:w-auto" itemProp="description">
            <h3 className="text-orange-400 text-base sm:text-lg font-semibold mb-3 sm:mb-4 transform transition-all duration-300 group-hover:translate-x-1">
              <span itemProp="name">MAMTA STEEL TRADERS</span>
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 transition-colors duration-300 group-hover:text-gray-200">
              Leading <strong>Stainless Steel Supplier</strong> and <strong>Exporter in Mumbai, India</strong>. 
              Specializing in <strong>SS 304, SS 316, Carbon Steel, Alloy Steel Pipes, Tubes, Plates, Sheets, Flanges, Fittings, Round Bars</strong>. 
              <span itemProp="award">ISO 9001:2015 Certified</span>. 
              Trusted by industries across India for premium quality steel products since 2019.
            </p>

            {/* Social Media Icons */}
            <div>
              <p className="text-gray-300 text-xs sm:text-sm mb-2 sm:mb-3 transition-colors duration-300 group-hover:text-gray-200">
                Follow us:
              </p>
              <div className="flex space-x-3 sm:space-x-4 justify-center lg:justify-start">
                {/* <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 hover:scale-110 transform transition-all duration-300 hover:rotate-3"
                  data-testid="social-facebook"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook size={18} className="sm:w-5 sm:h-5" />
                </a> */}
                <a
                  href="https://x.com/SteelMamta41559?t=Y_FKRApvGaL2j_H4OD6rug&s=08"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-sky-400 hover:scale-110 transform transition-all duration-300 hover:rotate-3"
                  data-testid="social-twitter"
                  aria-label="Follow us on Twitter"
                >
                  <Twitter size={18} className="sm:w-5 sm:h-5" />
                </a>
                <a
                  href="https://www.instagram.com/mamta_steel_traders/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-pink-400 hover:scale-110 transform transition-all duration-300 hover:rotate-3"
                  data-testid="social-instagram"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram size={18} className="sm:w-5 sm:h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/mamta-steel-traders-09520717a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-500 hover:scale-110 transform transition-all duration-300 hover:rotate-3"
                  data-testid="social-linkedin"
                  aria-label="Follow us on LinkedIn"
                >
                  <Linkedin size={18} className="sm:w-5 sm:h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Steel Products Section - SEO Optimized */}
          <div className="group w-full sm:w-auto">
            <h3 className="text-orange-400 text-base sm:text-lg font-semibold mb-3 sm:mb-4 transform transition-all duration-300 group-hover:translate-x-1">
              Our Steel Products
            </h3>
            <ul className="space-y-2 sm:space-y-3" itemScope itemType="https://schema.org/ItemList">
              <li className="transform transition-all duration-200 hover:translate-x-2" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link
                  href="/product/pipes-tubes/stainless-steel-pipes-tubes"
                  className="text-gray-300 text-xs sm:text-sm hover:text-white hover:text-orange-300 transition-colors duration-200 relative before:absolute before:left-0 before:bottom-0 before:h-0.5 before:w-0 before:bg-orange-400 before:transition-all before:duration-300 hover:before:w-full"
                  itemProp="url"
                >
                  <span itemProp="name">SS Pipes & Tubes</span>
                </Link>
              </li>
              <li className="transform transition-all duration-200 hover:translate-x-2" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link
                  href="/product/plates-sheets/stainless-steel-plates"
                  className="text-gray-300 text-xs sm:text-sm hover:text-white hover:text-orange-300 transition-colors duration-200 relative before:absolute before:left-0 before:bottom-0 before:h-0.5 before:w-0 before:bg-orange-400 before:transition-all before:duration-300 hover:before:w-full"
                  itemProp="url"
                >
                  <span itemProp="name">SS Plates & Sheets</span>
                </Link>
              </li>
              <li className="transform transition-all duration-200 hover:translate-x-2" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link
                  href="/product/round-bars/stainless-steel-round-bars"
                  className="text-gray-300 text-xs sm:text-sm hover:text-white hover:text-orange-300 transition-colors duration-200 relative before:absolute before:left-0 before:bottom-0 before:h-0.5 before:w-0 before:bg-orange-400 before:transition-all before:duration-300 hover:before:w-full"
                  itemProp="url"
                >
                  <span itemProp="name">SS Round Bars</span>
                </Link>
              </li>
              <li className="transform transition-all duration-200 hover:translate-x-2" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link
                  href="/product/flanges/stainless-steel"
                  className="text-gray-300 text-xs sm:text-sm hover:text-white hover:text-orange-300 transition-colors duration-200 relative before:absolute before:left-0 before:bottom-0 before:h-0.5 before:w-0 before:bg-orange-400 before:transition-all before:duration-300 hover:before:w-full"
                  itemProp="url"
                >
                  <span itemProp="name">SS Flanges ANSI</span>
                </Link>
              </li>
              <li className="transform transition-all duration-200 hover:translate-x-2" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link
                  href="/product/fittings/buttweld-fittings"
                  className="text-gray-300 text-xs sm:text-sm hover:text-white hover:text-orange-300 transition-colors duration-200 relative before:absolute before:left-0 before:bottom-0 before:h-0.5 before:w-0 before:bg-orange-400 before:transition-all before:duration-300 hover:before:w-full"
                  itemProp="url"
                >
                  <span itemProp="name">SS Fittings</span>
                </Link>
              </li>
              <li className="transform transition-all duration-200 hover:translate-x-2" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link
                  href="/product/pipes-tubes/carbon-steel"
                  className="text-gray-300 text-xs sm:text-sm hover:text-white hover:text-orange-300 transition-colors duration-200 relative before:absolute before:left-0 before:bottom-0 before:h-0.5 before:w-0 before:bg-orange-400 before:transition-all before:duration-300 hover:before:w-full"
                  itemProp="url"
                >
                  <span itemProp="name">Carbon Steel Pipes</span>
                </Link>
              </li>
              <li className="transform transition-all duration-200 hover:translate-x-2" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link
                  href="/product/pipes-tubes/alloy-steel-pipe"
                  className="text-gray-300 text-xs sm:text-sm hover:text-white hover:text-orange-300 transition-colors duration-200 relative before:absolute before:left-0 before:bottom-0 before:h-0.5 before:w-0 before:bg-orange-400 before:transition-all before:duration-300 hover:before:w-full"
                  itemProp="url"
                  data-testid="link-alloy-pipes"
                >
                  <span itemProp="name">Alloy Steel Pipes</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="group w-full sm:w-auto">
            <h3 className="text-orange-400 text-base sm:text-lg font-semibold mb-3 sm:mb-4 transform transition-all duration-300 group-hover:translate-x-1">
              Quick Links
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="transform transition-all duration-200 hover:translate-x-2">
                <Link
                  href="/"
                  className="text-gray-300 text-xs sm:text-sm hover:text-white hover:text-orange-300 transition-colors duration-200 relative before:absolute before:left-0 before:bottom-0 before:h-0.5 before:w-0 before:bg-orange-400 before:transition-all before:duration-300 hover:before:w-full"
                >
                  Home
                </Link>
              </li>
              <li className="transform transition-all duration-200 hover:translate-x-2">
                <Link
                  href="/about"
                  className="text-gray-300 text-xs sm:text-sm hover:text-white hover:text-orange-300 transition-colors duration-200 relative before:absolute before:left-0 before:bottom-0 before:h-0.5 before:w-0 before:bg-orange-400 before:transition-all before:duration-300 hover:before:w-full"
                >
                  About Us
                </Link>
              </li>
              <li className="transform transition-all duration-200 hover:translate-x-2">
                <Link
                  href="/products"
                  className="text-gray-300 text-xs sm:text-sm hover:text-white hover:text-orange-300 transition-colors duration-200 relative before:absolute before:left-0 before:bottom-0 before:h-0.5 before:w-0 before:bg-orange-400 before:transition-all before:duration-300 hover:before:w-full"
                >
                  All Products
                </Link>
              </li>
              <li className="transform transition-all duration-200 hover:translate-x-2">
                <Link
                  href="/technical-info"
                  className="text-gray-300 text-xs sm:text-sm hover:text-white hover:text-orange-300 transition-colors duration-200 relative before:absolute before:left-0 before:bottom-0 before:h-0.5 before:w-0 before:bg-orange-400 before:transition-all before:duration-300 hover:before:w-full"
                >
                  Technical Info
                </Link>
              </li>
              <li className="transform transition-all duration-200 hover:translate-x-2">
                <Link
                  href="/certificate"
                  className="text-gray-300 text-xs sm:text-sm hover:text-white hover:text-orange-300 transition-colors duration-200 relative before:absolute before:left-0 before:bottom-0 before:h-0.5 before:w-0 before:bg-orange-400 before:transition-all before:duration-300 hover:before:w-full"
                >
                  Certifications
                </Link>
              </li>
              <li className="transform transition-all duration-200 hover:translate-x-2">
                <Link
                  href="/contact"
                  className="text-gray-300 text-xs sm:text-sm hover:text-white hover:text-orange-300 transition-colors duration-200 relative before:absolute before:left-0 before:bottom-0 before:h-0.5 before:w-0 before:bg-orange-400 before:transition-all before:duration-300 hover:before:w-full"
                >
                  Contact Us
                </Link>
              </li>
              <li className="transform transition-all duration-200 hover:translate-x-2">
                <Link
                  href="/blog"
                  className="text-gray-300 text-xs sm:text-sm hover:text-white hover:text-orange-300 transition-colors duration-200 relative before:absolute before:left-0 before:bottom-0 before:h-0.5 before:w-0 before:bg-orange-400 before:transition-all before:duration-300 hover:before:w-full"
                  data-testid="link-blog"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info Section - SEO Optimized */}
          <div className="group w-full sm:w-auto" itemProp="contactPoint" itemScope itemType="https://schema.org/ContactPoint">
            <h3 className="text-orange-400 text-base sm:text-lg font-semibold mb-3 sm:mb-4 transform transition-all duration-300 group-hover:translate-x-1">
              Contact Info
            </h3>
            <div className="space-y-2 sm:space-y-3">
              <div className="transform transition-all duration-200 hover:translate-x-1">
                <p className="text-white text-xs sm:text-sm font-medium mb-1 transition-colors duration-300 hover:text-orange-300">
                  Prakash Pramar - <span className="text-gray-300">Sales Manager</span>
                </p>
                <a
                  href="tel:+919819322576"
                  className="text-blue-400 text-xs sm:text-sm hover:text-blue-300 hover:underline transition-all duration-200 transform hover:scale-105"
                  data-testid="contact-phone-1"
                  itemProp="telephone"
                >
                  <Phone className="w-3 h-3 inline mr-1" />
                  +91 9819322576
                </a>
              </div>
              <div className="transform transition-all duration-200 hover:translate-x-1">
                <a
                  href="tel:+919867958210"
                  className="text-blue-400 text-xs sm:text-sm hover:text-blue-300 hover:underline transition-all duration-200 transform hover:scale-105"
                  data-testid="contact-phone-2"
                  itemProp="telephone"
                >
                  <Phone className="w-3 h-3 inline mr-1" />
                  +91 9867958210
                </a>
              </div>
              <div className="transform transition-all duration-200 hover:translate-x-1">
                <a
                  href="mailto:mamtasteeltraders@gmail.com"
                  className="text-blue-400 text-xs sm:text-sm hover:text-blue-300 hover:underline transition-all duration-200 transform hover:scale-105 break-all"
                  data-testid="contact-email"
                  itemProp="email"
                >
                  <Mail className="w-3 h-3 inline mr-1" />
                  mamtasteeltraders@gmail.com
                </a> <br />
                <a
                  href="mailto:info@mamtasteeltraders.com"
                  className="text-blue-400 text-xs sm:text-sm hover:text-blue-300 hover:underline transition-all duration-200 transform hover:scale-105 break-all mt-1 inline-block"
                  data-testid="contact-email-2"
                  itemProp="email"
                >
                  <Mail className="w-3 h-3 inline mr-1" />
                  info@mamtasteeltraders.com
                </a>
              </div>
              <div className="pt-1 sm:pt-2 transform transition-all duration-200 hover:translate-x-1">
                <p className="text-gray-300 text-xs sm:text-sm transition-colors duration-300 hover:text-orange-300" itemProp="taxID">
                  <strong>GST:</strong> 27DMIPR2047R1Z8
                </p>
                <p className="text-gray-300 text-xs sm:text-sm transition-colors duration-300 hover:text-orange-300 mt-1">
                  <strong>MSME:</strong> MH-17-0092705
                </p>
              </div>
            </div>
            <meta itemProp="contactType" content="sales" />
            <meta itemProp="areaServed" content="IN" />
          </div>

          {/* Location Section - SEO Optimized */}
          <div className="group w-full sm:w-auto" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
            <h3 className="text-orange-400 text-base sm:text-lg font-semibold mb-3 sm:mb-4 transform transition-all duration-300 group-hover:translate-x-1">
              <MapPin className="w-4 h-4 inline mr-2" />
              Mumbai Location
            </h3>
            <address className="text-gray-300 text-xs sm:text-sm leading-relaxed not-italic transition-all duration-300 group-hover:text-gray-200 transform group-hover:translate-x-1">
              <span itemProp="streetAddress">
                Office No. 20, 1st Floor<br />
                4549 Gulab Mohammad Building<br />
                Rangi Gali, 2nd Kumbharwada
              </span><br />
              <span itemProp="addressLocality">Mumbai</span> <span itemProp="postalCode">400004</span><br />
              <span itemProp="addressRegion">Maharashtra</span>, <span itemProp="addressCountry">India</span>
            </address>
            <div className="mt-3" itemProp="geo" itemScope itemType="https://schema.org/GeoCoordinates">
              <meta itemProp="latitude" content="18.9496" />
              <meta itemProp="longitude" content="72.8320" />
              <p className="text-xs text-gray-400">Serving: Mumbai, Navi Mumbai, Thane, Pune, All India</p>
            </div>
          </div>
        </div>

        {/* Animated Divider Line */}
        <div className="pt-1 sm:pt-2">
          <div className="footer-divider"></div>
        </div>
        {/* SEO-Rich Bottom Section */}
        <div className="mt-6 sm:mt-8 text-center">
          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4">
            <strong>Leading Steel Supplier in India</strong> - Mamta Steel Traders specializes in 
            <strong> Stainless Steel 304, 316, 317L, 321, 310S, 904L</strong>, 
            <strong> Carbon Steel A106, A53, API 5L</strong>, and 
            <strong> Alloy Steel Pipes, Tubes, Plates, Sheets, Flanges, Fittings, Fasteners</strong>. 
            Certified supplier serving <strong>Mumbai, Maharashtra, Pune, Delhi, Bangalore, Chennai, Kolkata, Ahmedabad</strong> and all across India.
          </p>
        </div>

        {/* Bottom Footer - Centered Layout */}
        <div className="text-center space-y-4 sm:space-y-6">
          {/* Copyright Text - Centered */}
          <div className="text-gray-400 text-xs sm:text-sm transition-colors duration-300 hover:text-gray-300 px-2" itemProp="copyrightNotice">
            © 2019-2025 <span itemProp="copyrightHolder">Mamta Steel Traders</span>. All Rights Reserved. 
            ISO 9001:2015 Certified Steel Trader & Exporter | GST: 27DMIPR2047R1Z8 | 
            Developed by{" "}
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
