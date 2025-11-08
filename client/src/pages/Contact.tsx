import SEOHead from "@/components/SEOHead";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, User, FileText, Send, Copy, Check, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copySuccess, setCopySuccess] = useState<string | null>(null);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast({
        title: "Error",
        description: "Name is required",
        variant: "destructive"
      });
      return false;
    }

    if (!formData.companyName.trim()) {
      toast({
        title: "Error",
        description: "Client Company Name is required",
        variant: "destructive"
      });
      return false;
    }

    if (!formData.email.trim()) {
      toast({
        title: "Error", 
        description: "Email is required",
        variant: "destructive"
      });
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return false;
    }

    if (formData.phone && !/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/\s/g, ''))) {
      toast({
        title: "Error",
        description: "Please enter a valid phone number",
        variant: "destructive"
      });
      return false;
    }

    if (!formData.message.trim()) {
      toast({
        title: "Error",
        description: "Message is required",
        variant: "destructive"
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Form submission - In real app, integrate with EmailJS or backend API to send to your-email@example.com
      // Data being sent: Name, Client Company Name, Email, Phone, Message
      await new Promise(resolve => setTimeout(resolve, 2000));

      toast({
        title: "Success!",
        description: "Your message has been sent successfully. We'll get back to you soon!",
      });

      // Reset form
      setFormData({
        name: '',
        companyName: '',
        email: '',
        phone: '',
        message: ''
      });

    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess(type);
      toast({
        title: "Copied!",
        description: `${type} copied to clipboard`,
      });
      setTimeout(() => setCopySuccess(null), 2000);
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to copy to clipboard",
        variant: "destructive"
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Mamta Steel Traders | Steel Supplier & Manufacturer India | Get Quote</title>
        <meta name="description" content="Contact Mamta Steel Traders - Leading steel supplier & manufacturer in Mumbai, India. Get instant quotes for stainless steel, carbon steel, alloy steel. Office: 022-67521213, Prakash Parmar: +91 9819322575, Naresh Parmar: +91 9152958210. Email: mamtasteeltraders@gmail.com, info@mamtasteeltraders.com. ISO certified with pan India delivery." />
        <meta name="keywords" content="contact steel supplier India, steel manufacturer contact, Mamta Steel Traders contact, Mumbai steel supplier, steel quotes India, bulk steel order India, price list steel, technical support steel, steel inquiry Mumbai, buy steel India, industrial steel supplier contact, stainless steel supplier contact, carbon steel supplier contact, alloy steel supplier contact, steel trader Mumbai contact, steel exporter India contact, get steel quote, steel price inquiry, Prakash Parmar steel, Naresh Parmar steel, mamtasteeltraders email, mamtasteeltraders phone, steel supplier near me, best steel supplier India, ISO certified steel supplier, steel manufacturer Mumbai, wholesale steel supplier, steel distributor contact" />

        {/* Enhanced SEO Meta Tags */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <meta name="author" content="Mamta Steel Traders" />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Mumbai" />
        <meta name="geo.position" content="18.9558;72.8348" />
        <meta name="ICBM" content="18.9558, 72.8348" />

        {/* Open Graph Tags for Social Media */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact Mamta Steel Traders - Steel Supplier India" />
        <meta property="og:description" content="Get instant quotes for stainless steel, carbon steel & alloy steel. Contact Prakash Parmar: +91 9819322575, Naresh Parmar: +91 9152958210. ISO certified supplier with pan India delivery." />
        <meta property="og:url" content="https://mamtasteeltraders.com/contact" />
        <meta property="og:site_name" content="Mamta Steel Traders" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_IN" />
        <meta property="og:locale:alternate" content="en_GB" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Mamta Steel Traders - Steel Supplier India" />
        <meta name="twitter:description" content="Leading steel supplier in Mumbai. Contact for stainless steel, carbon steel quotes. Office: 022-67521213. ISO certified with nationwide delivery." />

        {/* Canonical URL */}
        <link rel="canonical" href="https://mamtasteeltraders.com/contact" />

        {/* Alternate Language Tags */}
        <link rel="alternate" hrefLang="en" href="https://mamtasteeltraders.com/contact" />
        <link rel="alternate" hrefLang="en-us" href="https://mamtasteeltraders.com/contact" />
        <link rel="alternate" hrefLang="en-gb" href="https://mamtasteeltraders.com/contact" />
        <link rel="alternate" hrefLang="en-in" href="https://mamtasteeltraders.com/contact" />
        <link rel="alternate" hrefLang="x-default" href="https://mamtasteeltraders.com/contact" />

        {/* Schema.org Structured Data - ContactPage */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Mamta Steel Traders",
            "description": "Contact page for Mamta Steel Traders - Leading steel supplier and manufacturer in Mumbai, India",
            "url": "https://mamtasteeltraders.com/contact",
            "mainEntity": {
              "@type": "LocalBusiness",
              "name": "Mamta Steel Traders",
              "image": "https://mamtasteeltraders.com/logo.png",
              "telephone": ["+91-22-67521213", "+91-9819322575", "+91-9152958210"],
              "email": ["mamtasteeltraders@gmail.com", "info@mamtasteeltraders.com"],
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
                "latitude": "18.9558",
                "longitude": "72.8348"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  "opens": "09:30",
                  "closes": "20:30"
                }
              ],
              "priceRange": "₹₹₹",
              "areaServed": {
                "@type": "Country",
                "name": "India"
              }
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
            "description": "Leading manufacturer and supplier of stainless steel, carbon steel, alloy steel products in India",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Office No. 20, 1st Floor, 4549 Gulab Mohammad Building, Rangi Gali, 2nd Kumbharwada",
              "addressLocality": "Mumbai",
              "addressRegion": "Maharashtra",
              "postalCode": "400004",
              "addressCountry": "IN"
            },
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+91-22-67521213",
                "contactType": "customer service",
                "email": "info@mamtasteeltraders.com",
                "areaServed": "IN",
                "availableLanguage": ["English", "Hindi"]
              },
              {
                "@type": "ContactPoint",
                "telephone": "+91-9819322575",
                "contactType": "sales",
                "name": "Prakash Parmar",
                "email": "prakash@mamtasteeltraders.com",
                "areaServed": "IN",
                "availableLanguage": ["English", "Hindi"]
              },
              {
                "@type": "ContactPoint",
                "telephone": "+91-9152958210",
                "contactType": "customer service",
                "name": "Naresh Parmar",
                "areaServed": "IN",
                "availableLanguage": ["English", "Hindi"]
              }
            ],
            "sameAs": [

              "https://www.linkedin.com/in/mamta-steel-traders-09520717a/"
            ]
          })}
        </script>

        {/* Schema.org - FAQPage for Contact */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How can I contact Mamta Steel Traders?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can contact us via phone at Office: 022-67521213, Prakash Parmar: +91 9819322575, Naresh Parmar: +91 9152958210, or email us at mamtasteeltraders@gmail.com or info@mamtasteeltraders.com. We are available Monday to Saturday from 9:30 AM to 8:30 PM."
                }
              },
              {
                "@type": "Question",
                "name": "What are Mamta Steel Traders business hours?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We are open Monday to Saturday from 9:30 AM to 8:30 PM (IST). We are closed on Sundays."
                }
              },
              {
                "@type": "Question",
                "name": "Where is Mamta Steel Traders located?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our office is located at Office No. 20, 1st Floor, 4549 Gulab Mohammad Building, Rangi Gali, 2nd Kumbharwada, Mumbai 400004, Maharashtra, India."
                }
              },
              {
                "@type": "Question",
                "name": "What is the GST number of Mamta Steel Traders?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our GST Number is 27DMIPR2047R1Z8."
                }
              },
              {
                "@type": "Question",
                "name": "How do I get a quote for steel products?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can get a quote by calling us at +91 9819322575 (Prakash Parmar) or +91 9152958210 (Naresh Parmar), emailing us at mamtasteeltraders@gmail.com, or filling out the contact form on this page with your requirements."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <SEOHead
        title="Contact Mamta Steel Traders - Steel Supplier India | Get Quote, Price List, Technical Support"
        description="Contact Mamta Steel Traders for bulk steel orders, price quotes, technical specifications. Call Prakash Parmar +91 9819322575, Naresh Parmar +91 9152958210. Email: mamtasteeltraders@gmail.com. Best steel supplier in India for SS pipes, MS plates, flanges, fittings. Quick response, competitive prices, pan India delivery."
        keywords="contact steel supplier India, steel quotes India, bulk steel order, price list steel, technical support steel, Mumbai steel trader contact, Mamta Steel contact, steel inquiry India, buy steel India, steel manufacturer contact, industrial steel supplier contact"
        canonicalUrl="https://mamtasteeltraders.com/contact"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact Mamta Steel Traders",
          "mainEntity": {
            "@type": "LocalBusiness",
            "name": "Mamta Steel Traders",
            "telephone": ["+91-9819322575", "+91-9152958210"],
            "email": "mamtasteeltraders@gmail.com",
            "openingHours": "Mo-Sa 09:30-20:30",
            "priceRange": "₹₹₹",
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+91-9819322575",
                "contactType": "sales",
                "name": "Prakash Parmar",
                "areaServed": "IN",
                "availableLanguage": ["English", "Hindi"]
              },
              {
                "@type": "ContactPoint",
                "telephone": "+91-9152958210",
                "contactType": "customer service",
                "name": "Naresh Parmar",
                "areaServed": "IN",
                "availableLanguage": ["English", "Hindi"]
              }
            ]
          }
        }}
      />

      <main className="bg-gradient-to-br from-slate-50 via-white to-blue-50 min-h-screen">
        {/* Hero Section */}
        <section className="relative py-8 sm:py-12 lg:py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d2b4e]/10 to-[#f39c12]/10"></div>
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle, #0d2b4e 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}></div>
          </div>

          <div className="container mx-auto px-3 sm:px-4 lg:px-6 relative">
            <motion.header 
              className="text-center mb-8 sm:mb-12 lg:mb-16"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.h1 
                className="text-2xl sm:text-heading md:text-heading lg:text-heading xl:text-7xl font-bold bg-gradient-to-r from-[#0d2b4e] to-[#f39c12] bg-clip-text text-transparent mb-4 sm:mb-6 lg:mb-8"
                variants={fadeInUp}
              >
                Contact Us
              </motion.h1>

              <motion.div 
                className="w-24 sm:w-32 h-1 bg-gradient-to-r from-[#0d2b4e] to-[#f39c12] mx-auto mb-4 sm:mb-6 lg:mb-8 rounded-full"
                variants={fadeInUp}
              ></motion.div>

              <motion.div 
                variants={fadeInUp}
                className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-white/20"
              >
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed mb-3 sm:mb-4">
                  <strong className="text-[#0d2b4e]">Contact Details</strong>
                </p>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600">
                  If you cannot find the items you need on this website, please feel free to contact us. 
                  We have all items available at our store. 😊📞
                </p>
              </motion.div>
            </motion.header>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-8 sm:py-12 lg:py-16">
          <div className="container mx-auto px-3 sm:px-4 lg:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-start">
              {/* Contact Information */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={slideInLeft}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-heading font-bold text-[#0d2b4e] mb-4 sm:mb-6 lg:mb-8">Get in Touch</h2>

                  <motion.div 
                    className="space-y-4 sm:space-y-6"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {/* Office Details */}
                    <motion.div variants={fadeInUp} className="group">
                      <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-[#f39c12]/30">
                        <div className="flex items-start">
                          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-lg sm:rounded-xl flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                            <Building2 className="w-6 h-6 sm:w-7 sm:h-7 text-[#0d2b4e]" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-base sm:text-lg font-bold text-gray-600 mb-3 sm:mb-4">Office Contact</h3>
                            <div className="space-y-2">
                              <div className="flex items-center justify-between gap-2">
                                <a 
                                  href="tel:02267521213" 
                                  className="text-gray-600 hover:text-[#f39c12] transition-colors duration-200 text-sm sm:text-base lg:text-lg font-medium truncate"
                                  data-testid="link-office-tel"
                                >
                                  Tel: 022-67521213
                                </a>
                                <button
                                  onClick={() => copyToClipboard('02267521213', 'Office Tel')}
                                  className="p-2 text-gray-600 hover:text-[#f39c12] transition-colors duration-200 flex-shrink-0 min-h-[44px] min-w-[44px] flex items-center justify-center"
                                  title="Copy office telephone"
                                  data-testid="button-copy-office-tel"
                                >
                                  {copySuccess === 'Office Tel' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                                </button>
                              </div>
                              <div className="flex items-center justify-between gap-2">
                                <a 
                                  href="tel:+919152958210" 
                                  className="text-gray-600 hover:text-[#f39c12] transition-colors duration-200 text-sm sm:text-base lg:text-lg font-medium truncate"
                                  data-testid="link-office-phone"
                                >
                                  Phone: +91 9152958210
                                </a>
                                <button
                                  onClick={() => copyToClipboard('+919152958210', 'Office Phone')}
                                  className="p-2 text-gray-600 hover:text-[#f39c12] transition-colors duration-200 flex-shrink-0 min-h-[44px] min-w-[44px] flex items-center justify-center"
                                  title="Copy office phone"
                                  data-testid="button-copy-office-phone"
                                >
                                  {copySuccess === 'Office Phone' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                                </button>
                              </div>
                              <div className="flex items-center justify-between gap-2">
                                <a 
                                  href="mailto:mamtasteeltraders@gmail.com" 
                                  className="text-gray-600 hover:text-[#f39c12] transition-colors duration-200 text-sm sm:text-base lg:text-base font-medium truncate"
                                  data-testid="link-office-email-primary"
                                >
                                  mamtasteeltraders@gmail.com
                                </a>
                                <button
                                  onClick={() => copyToClipboard('mamtasteeltraders@gmail.com', 'Office Email')}
                                  className="p-2 text-gray-600 hover:text-[#f39c12] transition-colors duration-200 flex-shrink-0 min-h-[44px] min-w-[44px] flex items-center justify-center"
                                  title="Copy office email"
                                  data-testid="button-copy-office-email-1"
                                >
                                  {copySuccess === 'Office Email' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                                </button>
                              </div>
                              <div className="flex items-center justify-between gap-2">
                                <a 
                                  href="mailto:info@mamtasteeltraders.com" 
                                  className="text-gray-600 hover:text-[#f39c12] transition-colors duration-200 text-sm sm:text-base lg:text-base font-medium truncate"
                                  data-testid="link-office-email-info"
                                >
                                  info@mamtasteeltraders.com
                                </a>
                                <button
                                  onClick={() => copyToClipboard('info@mamtasteeltraders.com', 'Office Email Info')}
                                  className="p-2 text-gray-600 hover:text-[#f39c12] transition-colors duration-200 flex-shrink-0 min-h-[44px] min-w-[44px] flex items-center justify-center"
                                  title="Copy office email"
                                  data-testid="button-copy-office-email-2"
                                >
                                  {copySuccess === 'Office Email Info' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Contact Person - Prakash Parmar */}
                    <motion.div variants={fadeInUp} className="group">
                      <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-[#f39c12]/30">
                        <div className="flex items-start">
                          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#0d2b4e] to-[#2563eb] rounded-lg sm:rounded-xl flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                            <User className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-base sm:text-lg font-semibold text-[#0d2b4e] mb-2 sm:mb-3">Prakash Parmar</h3>
                            <div className="space-y-2">
                              <div className="flex items-center justify-between gap-2">
                                <a 
                                  href="tel:+919819322575" 
                                  className="text-gray-600 hover:text-[#f39c12] transition-colors duration-200 text-sm sm:text-base lg:text-lg font-medium truncate"
                                  data-testid="link-prakash-phone"
                                >
                                  +91 9819322576
                                </a>
                                <button
                                  onClick={() => copyToClipboard('+919819322575', 'Phone')}
                                  className="p-2 text-gray-400 hover:text-[#f39c12] transition-colors duration-200 flex-shrink-0 min-h-[44px] min-w-[44px] flex items-center justify-center"
                                  title="Copy phone number"
                                  data-testid="button-copy-prakash-phone"
                                >
                                  {copySuccess === 'Phone' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                                </button>
                              </div>
                              <div className="flex items-center justify-between gap-2">
                                <a 
                                  href="mailto:prakash@mamtasteeltraders.com" 
                                  className="text-gray-600 hover:text-[#f39c12] transition-colors duration-200 text-sm sm:text-base lg:text-base font-medium truncate"
                                  data-testid="link-prakash-email"
                                >
                                  prakash@mamtasteeltraders.com
                                </a>
                                <button
                                  onClick={() => copyToClipboard('prakash@mamtasteeltraders.com', 'Prakash Email')}
                                  className="p-2 text-gray-400 hover:text-[#f39c12] transition-colors duration-200 flex-shrink-0 min-h-[44px] min-w-[44px] flex items-center justify-center"
                                  title="Copy email"
                                  data-testid="button-copy-prakash-email"
                                >
                                  {copySuccess === 'Prakash Email' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Contact Person - Naresh Parmar */}
                    <motion.div variants={fadeInUp} className="group">
                      <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-[#f39c12]/30">
                        <div className="flex items-start">
                          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#0d2b4e] to-[#2563eb] rounded-lg sm:rounded-xl flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                            <User className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-base sm:text-lg font-semibold text-[#0d2b4e] mb-2 sm:mb-3">Naresh Parmar</h3>
                            <div className="space-y-2">
                              <div className="flex items-center justify-between gap-2">
                                <a 
                                  href="tel:+919152958210" 
                                  className="text-gray-600 hover:text-[#f39c12] transition-colors duration-200 text-sm sm:text-base lg:text-lg font-medium truncate"
                                  data-testid="link-naresh-phone"
                                >
                                  +91 9867958210
                                </a>
                                <button
                                  onClick={() => copyToClipboard('+919152958210', 'Phone')}
                                  className="p-2 text-gray-400 hover:text-[#f39c12] transition-colors duration-200 flex-shrink-0 min-h-[44px] min-w-[44px] flex items-center justify-center"
                                  title="Copy phone number"
                                  data-testid="button-copy-naresh-phone"
                                >
                                  {copySuccess === 'Phone' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Email */}
                    {/* <motion.div variants={fadeInUp} className="group">
                      <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-[#f39c12]/30">
                        <div className="flex items-start">
                          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#0d2b4e] to-[#2563eb] rounded-lg sm:rounded-xl flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                            <Mail className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-base sm:text-lg font-semibold text-[#0d2b4e] mb-2 sm:mb-3">Email</h3>
                            <div className="flex items-center justify-between gap-2">
                              <a 
                                href="mailto:mamtasteeltraders@gmail.com" 
                                className="text-gray-600 hover:text-[#f39c12] transition-colors duration-200 text-sm sm:text-base lg:text-lg font-medium truncate"
                                data-testid="link-general-email"
                              >
                                mamtasteeltraders@gmail.com
                              </a>
                              <button
                                onClick={() => copyToClipboard('mamtasteeltraders@gmail.com', 'Email')}
                                className="p-2 text-gray-400 hover:text-[#f39c12] transition-colors duration-200 flex-shrink-0 min-h-[44px] min-w-[44px] flex items-center justify-center"
                                title="Copy email"
                                data-testid="button-copy-general-email"
                              >
                                {copySuccess === 'Email' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div> */}

                    {/* Address */}
                    <motion.div variants={fadeInUp} className="group">
                      <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-[#f39c12]/30">
                        <div className="flex items-start">
                          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#0d2b4e] to-[#2563eb] rounded-lg sm:rounded-xl flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                            <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                          </div>
                          <div>
                            <h3 className="text-base sm:text-lg font-semibold text-[#0d2b4e] mb-2 sm:mb-3">Address</h3>
                            <address className="not-italic text-sm sm:text-base text-gray-600 leading-relaxed">
                              <a
                                href="https://www.google.com/maps/search/?api=1&query=Office+No.+20,+1st+Floor,+4549+Gulab+Mohammad+Building,+Rangi+Gali,+2nd+Kumbharwada,+Mumbai+400004,+Maharashtra,+India"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#f39c12] transition-colors duration-200"
                                data-testid="link-office-address"
                              >
                                Office No. 20, 1st Floor<br />
                                4549 Gulab Mohammad Building<br />
                                Rangi Gali, 2nd Kumbharwada<br />
                                Mumbai 400004<br />
                                Maharashtra, India
                              </a>
                            </address>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Business Hours */}
                    <motion.div variants={fadeInUp} className="group">
                      <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-[#f39c12]/30">
                        <div className="flex items-start">
                          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#0d2b4e] to-[#2563eb] rounded-lg sm:rounded-xl flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                            <Clock className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                          </div>
                          <div>
                            <h3 className="text-base sm:text-lg font-semibold text-[#0d2b4e] mb-2 sm:mb-3">Business Hours</h3>
                            <div className="text-sm sm:text-base text-gray-600 space-y-1">
                              <p><span className="font-medium">Monday - Saturday:</span> 9:30 AM - 8:30 PM</p>
                              <p><span className="font-medium">Sunday:</span> Closed</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* GST Number */}
                    <motion.div variants={fadeInUp} className="group">
                      <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-[#f39c12]/30">
                        <div className="flex items-start">
                          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#0d2b4e] to-[#2563eb] rounded-lg sm:rounded-xl flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                            <FileText className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                          </div>
                          <div>
                            <h3 className="text-base sm:text-lg font-semibold text-[#0d2b4e] mb-2 sm:mb-3">GST Number</h3>
                            <p className="text-sm sm:text-base text-gray-600 font-mono">27DMIPR2047R1Z8</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={slideInRight}
              >
                <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-6 lg:p-8 xl:p-12 relative overflow-hidden border border-gray-100">
                  <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-[#f39c12]/10 to-transparent rounded-bl-full"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-tr from-[#0d2b4e]/10 to-transparent rounded-tr-full"></div>

                  <div className="relative z-10">
                    <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-heading font-bold text-[#0d2b4e] mb-4 sm:mb-6 lg:mb-8 text-center">
                      Send us a Message
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                      <div>
                        <label className="block text-sm font-semibold text-[#0d2b4e] mb-2">
                          Name *
                        </label>
                        <Input 
                          type="text" 
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required 
                          className="w-full h-12 border-2 border-gray-200 focus:border-[#f39c12] rounded-xl transition-colors duration-300"
                          placeholder="Your full name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-[#0d2b4e] mb-2">
                          Client Company Name *
                        </label>
                        <Input 
                          type="text" 
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleInputChange}
                          required 
                          className="w-full h-12 border-2 border-gray-200 focus:border-[#f39c12] rounded-xl transition-colors duration-300"
                          placeholder="Your company name"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-[#0d2b4e] mb-2">
                            Email *
                          </label>
                          <Input 
                            type="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required 
                            className="w-full h-12 border-2 border-gray-200 focus:border-[#f39c12] rounded-xl transition-colors duration-300"
                            placeholder="your.email@example.com"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-[#0d2b4e] mb-2">
                            Phone
                          </label>
                          <Input 
                            type="tel" 
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full h-12 border-2 border-gray-200 focus:border-[#f39c12] rounded-xl transition-colors duration-300"
                            placeholder="+91 9876543210"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-[#0d2b4e] mb-2">
                          Message *
                        </label>
                        <Textarea 
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required 
                          rows={6} 
                          className="w-full border-2 border-gray-200 focus:border-[#f39c12] rounded-xl transition-colors duration-300 resize-none"
                          placeholder="Tell us about your steel requirements, product specifications, or any questions you have..."
                        />
                      </div>

                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button 
                          type="submit" 
                          disabled={isSubmitting}
                          className="w-full h-14 bg-gradient-to-r from-[#0d2b4e] to-[#2563eb] hover:from-[#f39c12] hover:to-[#e97e07] text-white font-semibold rounded-xl text-lg transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? (
                            <div className="flex items-center justify-center">
                              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                              Sending...
                            </div>
                          ) : (
                            <div className="flex items-center justify-center">
                              <Send className="w-5 h-5 mr-2" />
                              Send Message
                            </div>
                          )}
                        </Button>
                      </motion.div>
                    </form>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Animated Divider */}
        <div className="py-8">
          <motion.div 
            className="w-full h-1 bg-gradient-to-r from-transparent via-[#f39c12] to-transparent max-w-4xl mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          ></motion.div>
        </div>
      </main>
    </>
  );
}
