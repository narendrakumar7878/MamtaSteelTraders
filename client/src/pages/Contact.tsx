import SEOHead from "@/components/SEOHead";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, FileText, Send, Copy } from "lucide-react";
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
  const [, setCopySuccess] = useState<string | null>(null);
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
      toast({ title: "Error", description: "Name is required", variant: "destructive" });
      return false;
    }
    if (!formData.companyName.trim()) {
      toast({ title: "Error", description: "Client Company Name is required", variant: "destructive" });
      return false;
    }
    if (!formData.email.trim()) {
      toast({ title: "Error", description: "Email is required", variant: "destructive" });
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({ title: "Error", description: "Please enter a valid email address", variant: "destructive" });
      return false;
    }
    if (formData.phone && !/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/\s/g, ''))) {
      toast({ title: "Error", description: "Please enter a valid phone number", variant: "destructive" });
      return false;
    }
    if (!formData.message.trim()) {
      toast({ title: "Error", description: "Message is required", variant: "destructive" });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);

    try {
      const recipient = "info@mamtasteeltraders.com";
      const subject = encodeURIComponent(`Inquiry from ${formData.name} - ${formData.companyName}`);
      const body = encodeURIComponent(
        `New Contact Form Submission:\n\n` +
        `Name: ${formData.name}\n` +
        `Company: ${formData.companyName}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone || 'Not provided'}\n\n` +
        `Message:\n${formData.message}`
      );

      window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;

      toast({
        title: "Redirecting to Mail Client",
        description: "Your inquiry is being prepared in your email app. Please click 'Send' to finish.",
      });

      setFormData({ name: '', companyName: '', email: '', phone: '', message: '' });
    } catch (error) {
      toast({ title: "Error", description: "Failed to send message.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess(type);
      toast({ title: "Copied!", description: `${type} copied to clipboard` });
      setTimeout(() => setCopySuccess(null), 2000);
    } catch (err) {
      toast({ title: "Error", description: "Failed to copy to clipboard", variant: "destructive" });
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Mamta Steel Traders | CEO P. T. Parmar & Founder N. T. Parmar | Steel Experts</title>
        <meta name="description" content="Contact the leadership at Mamta Steel Traders. P. T. Parmar (CEO), N. T. Parmar (MD), and N. B. Parmar (CTO). WhatsApp: +91 9152958210, MD: +91 9867958210." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Mamta Steel Traders Leadership",
            "mainEntity": {
              "@type": "Organization",
              "name": "Mamta Steel Traders",
              "contactPoint": [
                { "@type": "ContactPoint", "telephone": "+91-9819322576", "contactType": "Chief Executive Officer", "name": "P. T. Parmar" },
                { "@type": "ContactPoint", "telephone": "+91-9867958210", "contactType": "Founder & Managing Director", "name": "N. T. Parmar" }
              ]
            }
          })}
        </script>
      </Helmet>

      <SEOHead
        title="Contact Mamta Steel Traders - Technical Leadership & Global Inquiries"
        description="Direct contact channels for P. T. Parmar (CEO) and N. T. Parmar (Founder). Get technical support for high-grade industrial steel."
        canonicalUrl="https://mamtasteeltraders.com/contact"
      />

      <main className="bg-gradient-to-br from-slate-50 via-white to-blue-50 min-h-screen">
        {/* Dynamic Hero Section */}
        <section className="relative py-8 sm:py-12 lg:py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d2b4e]/10 to-[#f39c12]/10"></div>
          <div className="container mx-auto px-4 relative">
            <motion.header 
              className="text-center mb-12"
              initial="hidden" animate="visible" variants={staggerContainer}
            >
              <motion.h1 
                className="text-3xl sm:text-heading lg:text-7xl font-bold bg-gradient-to-r from-[#0d2b4e] to-[#f39c12] bg-clip-text text-transparent mb-6"
                variants={fadeInUp}
              >
                Contact Us
              </motion.h1>
              <motion.div variants={fadeInUp} className="max-w-3xl mx-auto bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20">
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong className="text-[#0d2b4e]">Direct Communication Channels</strong><br />
                  If you cannot find specific metallurgical items on this hub, our executive team is available for direct consultation. 😊📞
                </p>
              </motion.div>
            </motion.header>
          </div>
        </section>

        {/* Technical Authority & Inquiry Section */}
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              
              {/* Technical Leadership & Infrastructure */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInLeft} className="space-y-10">
                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-[#0d2b4e] mb-8">Executive Leadership</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* CEO Card */}
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-gold-primary transition-all group">
                       <div className="flex items-center space-x-4 mb-5">
                          <div className="w-12 h-12 bg-navy-primary rounded-xl flex items-center justify-center text-white font-black text-lg group-hover:rotate-6 transition-transform">PT</div>
                          <div>
                             <h3 className="font-bold text-navy-primary uppercase text-md">P. T. Parmar</h3>
                             <p className="text-gold-primary font-black uppercase text-[10px] tracking-widest mt-0.5">CEO & Co-Founder</p>
                          </div>
                       </div>
                       <div className="space-y-3">
                          <div className="flex items-center justify-between border-b border-gray-50 pb-2">
                             <a href="tel:+919819322576" className="text-gray-600 font-bold text-sm hover:text-navy-primary">+91 9819322576</a>
                             <button onClick={() => copyToClipboard('+919819322576', 'Phone')} className="text-gray-300 hover:text-gold-primary"><Copy size={12} /></button>
                          </div>
                          <div className="flex items-center justify-between border-b border-gray-50 pb-2">
                             <a href="tel:02267521213" className="text-gray-600 font-bold text-sm hover:text-navy-primary">022-67521213</a>
                             <button onClick={() => copyToClipboard('02267521213', 'Landline')} className="text-gray-300 hover:text-gold-primary"><Copy size={12} /></button>
                          </div>
                          <div className="flex items-center justify-between">
                             <a href="mailto:prakash@mamtasteeltraders.com" className="text-gray-500 font-bold text-[11px] truncate pr-2 hover:text-navy-primary">prakash@mamtasteeltraders.com</a>
                             <button onClick={() => copyToClipboard('prakash@mamtasteeltraders.com', 'Email')} className="text-gray-300 hover:text-gold-primary"><Copy size={12} /></button>
                          </div>
                       </div>
                    </div>

                    {/* MD Card */}
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-gold-primary transition-all group">
                       <div className="flex items-center space-x-4 mb-5">
                          <div className="w-12 h-12 bg-navy-primary rounded-xl flex items-center justify-center text-white font-black text-lg group-hover:rotate-6 transition-transform">NT</div>
                          <div>
                             <h3 className="font-bold text-navy-primary uppercase text-md">N. T. Parmar</h3>
                             <p className="text-gold-primary font-black uppercase text-[10px] tracking-widest mt-0.5">Founder & MD</p>
                          </div>
                       </div>
                       <div className="space-y-3">
                          <div className="flex items-center justify-between border-b border-gray-50 pb-2">
                             <a href="tel:+919867958210" className="text-gray-600 font-bold text-sm hover:text-navy-primary">+91 9867958210</a>
                             <button onClick={() => copyToClipboard('+919867958210', 'Phone')} className="text-gray-300 hover:text-gold-primary"><Copy size={12} /></button>
                          </div>
                          <div className="flex items-center justify-between">
                             <div className="flex items-center space-x-2">
                                <span className="bg-green-100 text-green-700 px-1.5 py-0.5 rounded text-[8px] font-black uppercase">WhatsApp</span>
                                <a href="https://wa.me/919152958210" className="text-gray-600 font-bold text-sm hover:text-navy-primary">+91 9152958210</a>
                             </div>
                             <button onClick={() => copyToClipboard('+919152958210', 'WhatsApp')} className="text-gray-300 hover:text-gold-primary"><Copy size={12} /></button>
                          </div>
                       </div>
                    </div>

                    {/* CTO Card */}
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-gold-primary transition-all group md:col-span-2">
                       <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                          <div className="flex items-center space-x-4">
                             <div className="w-12 h-12 bg-navy-primary rounded-xl flex items-center justify-center text-white font-black text-lg group-hover:rotate-6 transition-transform">NB</div>
                             <div>
                                <h3 className="font-bold text-navy-primary uppercase text-md">N. B. Parmar</h3>
                                <p className="text-gold-primary font-black uppercase text-[10px] tracking-widest mt-0.5">CTO – Digital Operations</p>
                             </div>
                          </div>
                          <div className="flex flex-wrap gap-4 items-center">
                             <div className="space-y-0.5">
                                <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Connect Digital</span>
                                <div className="flex items-center space-x-2">
                                   <a href="tel:+917878568416" className="text-navy-primary font-bold text-sm hover:text-gold-primary transition-colors">+91 7878568416</a>
                                   <button onClick={() => copyToClipboard('+917878568416', 'Phone')} className="text-gray-300 hover:text-gold-primary"><Copy size={10} /></button>
                                </div>
                             </div>
                             <div className="h-8 w-px bg-gray-100 hidden md:block"></div>
                             <div className="space-y-0.5">
                                <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Corporate Mails</span>
                                <div className="flex gap-3">
                                   <a href="mailto:info@mamtasteeltraders.com" className="text-gray-500 font-bold text-[10px] hover:text-gold-primary italic">info@mamtasteeltraders.com</a>
                                   <a href="mailto:sales@mamtasteeltraders.com" className="text-gray-500 font-bold text-[10px] hover:text-gold-primary italic">sales@mamtasteeltraders.com</a>
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>
                  </div>
                </div>

                {/* Operations Base */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-inner">
                   <div className="space-y-2">
                      <h4 className="flex items-center space-x-2 text-navy-primary font-bold uppercase text-[10px] tracking-wider"><MapPin size={14} className="text-gold-primary" /> <span>HQ Address</span></h4>
                      <address className="not-italic text-[12px] font-medium text-gray-500 uppercase leading-tight">
                         Office No. 20, 1st Floor, 4549 Gulab Mohammad Bldg, Rangi Gali, Mumbai 400004
                      </address>
                   </div>
                   <div className="space-y-2">
                      <h4 className="flex items-center space-x-2 text-navy-primary font-bold uppercase text-[10px] tracking-wider"><Clock size={14} className="text-gold-primary" /> <span>Trade Hours</span></h4>
                      <p className="text-[12px] font-medium text-gray-500 uppercase">Mon-Sat: 09:30 - 20:30 <br /> Sun: Closed</p>
                   </div>
                   <div className="space-y-2">
                      <h4 className="flex items-center space-x-2 text-navy-primary font-bold uppercase text-[10px] tracking-wider"><FileText size={14} className="text-gold-primary" /> <span>GSTIN Status</span></h4>
                      <p className="text-[14px] font-black text-navy-primary tracking-tight">27DMIPR2047R1Z8</p>
                      <p className="text-[8px] font-bold text-gray-400 uppercase">Verified Business Entry</p>
                   </div>
                </div>
              </motion.div>

              {/* Inquiry Portal */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideInRight}>
                <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-50 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gold-primary/5 rounded-bl-full"></div>
                  <div className="relative z-10">
                    <h2 className="text-2xl font-bold text-navy-primary mb-8 text-center uppercase tracking-tight">Technical Inquiry Form</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-navy-primary uppercase tracking-widest">Full Name *</label>
                          <Input name="name" value={formData.name} onChange={handleInputChange} required className="rounded-xl border-slate-200" placeholder="e.g. narendra parmar" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-navy-primary uppercase tracking-widest">Enterprise Name *</label>
                          <Input name="companyName" value={formData.companyName} onChange={handleInputChange} required className="rounded-xl border-slate-200" placeholder="e.g. Steel Procure Ltd" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-navy-primary uppercase tracking-widest">Work Email *</label>
                          <Input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="rounded-xl border-slate-200" placeholder="corporate@mail.com" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-navy-primary uppercase tracking-widest">Voice Line</label>
                          <Input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="rounded-xl border-slate-200" placeholder="+91 98XXX XXX00" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-navy-primary uppercase tracking-widest">Project Requirements *</label>
                        <Textarea name="message" value={formData.message} onChange={handleInputChange} required rows={5} className="rounded-xl border-slate-200 resize-none" placeholder="Describe grade, quantity, or technical specs..." />
                      </div>
                      <Button type="submit" disabled={isSubmitting} className="w-full h-14 bg-navy-primary hover:bg-gold-primary text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-orange-200/50">
                        {isSubmitting ? "TRANSMITTING DATA..." : "INITIATE INQUIRY"}
                      </Button>
                    </form>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Brand Connectivity Divider */}
        <div className="py-12">
          <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} className="w-full h-0.5 bg-gradient-to-r from-transparent via-gold-primary/30 to-transparent max-w-5xl mx-auto"></motion.div>
        </div>
      </main>
    </>
  );
}
