import { Phone, Mail, MapPin, User, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const directors = [
  {
    name: "P. T. Parmar",
    title: "CEO & Co-Founder",
    phone: "+91 9819322576",
    email: "prakash@mamtasteeltraders.com"
  },
  {
    name: "N. T. Parmar",
    title: "Founder & Managing Director",
    phone: "+91 9867958210",
    whatsapp: "+91 9152958210",
    email: "mamtasteeltraders@gmail.com"
  },
  {
    name: "N. B. Parmar",
    title: "CTO & Director – Digital Operations",
    phone: "+91 7878568416",
    whatsapp: "+91 7878568416",
    emails: [
      "Info@mamtasteeltraders.com",
      "Sales@mamtasteeltraders.com"
    ]
  }
];

const contactInfo = {
  mainEmail: "info@mamtasteeltraders.com",
  address: {
    line1: "Office No. 20, 1st Floor, 45/49 Gulab Mohammad Building",
    line2: "Rangi Gali, 2nd Kumbharwada", 
    line3: "Mumbai 400004, Maharashtra, India"
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function ContactSection() {
  return (
    <section 
      className="py-16 lg:py-24 bg-gradient-to-b from-white to-slate-50 px-6 lg:px-12" 
      data-testid="contact-section"
      aria-label="Contact Mamta Steel Traders"
    >
      <div className="w-full max-w-7xl mx-auto">
        
        {/* Animated Section Divider */}
        <div className="w-full h-[2px] bg-gradient-to-r from-[#1a3e72] via-[#f39c12] to-[#1a3e72] mb-12 opacity-30" />
        
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 
            className="text-3xl lg:text-heading font-bold mb-4 uppercase tracking-tight"
            style={{ color: '#1a3e72' }}
          >
            Executive Leadership & Enquiries
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Connect directly with our technical core for specialized steel requirements and global trade inquiries.
          </p>
          
          <div className="flex justify-center">
            <div className="w-24 h-1.5 bg-[#f39c12] rounded-full" />
          </div>
        </motion.div>

        {/* Executive Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {directors.map((director, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl p-4 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full relative group"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-slate-50 to-transparent rounded-tr-3xl -z-0 opacity-50"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-14 h-14 bg-[#1a3e72] rounded-2xl flex items-center justify-center rotate-3 group-hover:rotate-0 transition-transform duration-300">
                    <User className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1a3e72] leading-tight mb-1">{director.name}</h3>
                    <p className="text-[#f39c12] text-xs font-black uppercase tracking-widest">{director.title}</p>
                  </div>
                </div>

                <div className="space-y-4 flex-1">
                  {/* Phone */}
                  <div className="group/item">
                    <p className="text-[10px] font-bold text-gray-400 uppercase mb-1 tracking-tighter">Direct Line</p>
                    <a href={`tel:${director.phone}`} className="flex items-center space-x-3 text-gray-700 hover:text-[#1a3e72] transition-colors font-semibold">
                      <Phone className="w-4 h-4 text-[#f39c12]" />
                      <span>{director.phone}</span>
                    </a>
                  </div>

                  {/* WhatsApp */}
                  {director.whatsapp && (
                    <div className="group/item">
                      <p className="text-[10px] font-bold text-gray-400 uppercase mb-1 tracking-tighter">Instant Messaging</p>
                      <a href={`https://wa.me/${director.whatsapp.replace(/\D/g, '')}`} className="flex items-center space-x-3 text-gray-700 hover:text-green-600 transition-colors font-semibold">
                        <MessageCircle className="w-4 h-4 text-green-500" />
                        <span>WhatsApp Connect</span>
                      </a>
                    </div>
                  )}

                  {/* Single Email */}
                  {director.email && (
                    <div className="group/item">
                      <p className="text-[10px] font-bold text-gray-400 uppercase mb-1 tracking-tighter">Official Email</p>
                      <a href={`mailto:${director.email}`} className="flex items-center space-x-3 text-gray-700 hover:text-[#1a3e72] transition-colors text-sm break-all font-medium italic">
                        <Mail className="w-4 h-4 text-[#f39c12]" />
                        <span>{director.email}</span>
                      </a>
                    </div>
                  )}

                  {/* Multiple Emails */}
                  {director.emails && (
                    <div className="group/item">
                      <p className="text-[10px] font-bold text-gray-400 uppercase mb-1 tracking-tighter">Communications</p>
                      <div className="space-y-2">
                        {director.emails.map((e, idx) => (
                          <a key={idx} href={`mailto:${e}`} className="flex items-center space-x-3 text-gray-700 hover:text-[#1a3e72] transition-colors text-[13px] break-all font-medium italic">
                            <Mail className="w-3.5 h-3.5 text-[#f39c12]" />
                            <span>{e}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Details Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* Global Contact Hub */}
          <motion.div
            className="bg-[#1a3e72] text-white rounded-3xl p-4 lg:p-10 shadow-xl flex flex-col md:flex-row items-start gap-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
              <Phone className="w-8 h-8 text-[#f39c12]" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-6 uppercase tracking-tight">Global Contact Hub</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Phone Numbers */}
                <div className="space-y-3">
                  <p className="text-[#f39c12] text-[10px] font-black uppercase tracking-widest mb-2 italic">Direct Priority Lines</p>
                  {[
                    "+91 9819322576",
                    "+91 9867958210",
                    "+91 9152958210",
                    "+91 7878568416"
                  ].map((phone, idx) => (
                    <a key={idx} href={`tel:${phone.replace(/\s/g, '')}`} className="flex items-center space-x-3 hover:text-[#f39c12] transition-colors font-bold text-sm">
                      <Phone className="w-3.5 h-3.5 shrink-0" />
                      <span>{phone}</span>
                    </a>
                  ))}
                </div>

                {/* Emails */}
                <div className="space-y-3">
                  <p className="text-[#f39c12] text-[10px] font-black uppercase tracking-widest mb-2 italic">Official Correspondence</p>
                  {[
                    "info@mamtasteeltraders.com",
                    "sales@mamtasteeltraders.com",
                    "mamtasteeltraders@gmail.com"
                  ].map((email, idx) => (
                    <a key={idx} href={`mailto:${email}`} className="flex items-center space-x-3 hover:text-[#f39c12] transition-colors font-medium text-xs break-all">
                      <Mail className="w-3.5 h-3.5 shrink-0" />
                      <span>{email}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Location Details */}
          <motion.div
            className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 flex flex-col md:flex-row items-center gap-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center shrink-0">
              <MapPin className="w-10 h-10 text-[#1a3e72]" />
            </div>
            <div className="text-center md:text-left flex-1">
              <h3 className="text-2xl font-bold text-[#1a3e72] mb-4">Operations Base</h3>
              <address className="text-gray-600 not-italic leading-relaxed mb-6 font-medium">
                {contactInfo.address.line1}<br />
                {contactInfo.address.line2}<br />
                {contactInfo.address.line3}
              </address>
              <Button asChild className="bg-[#1a3e72] hover:bg-[#f39c12] rounded-xl px-8 h-12 transition-all duration-300">
                <a href="https://maps.google.com/?q=Mamta+Steel+Traders+Mumbai" target="_blank" rel="noopener noreferrer">
                  Navigate via Maps
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
