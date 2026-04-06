import { motion } from "motion/react";
import SectionHeading from "@/components/SectionHeading";
import Breadcrumbs from "@/components/Breadcrumbs";
import { MapPin, Phone, Mail, Send, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { useState } from "react";

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    company: "",
    email: "",
    type: t("contact.form.type1") || "Product Purchase / Export",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct the email body
    const subject = `Inquiry from ${formData.fname} ${formData.lname} - ${formData.type}`;
    const body = `Name: ${formData.fname} ${formData.lname}\nCompany: ${formData.company}\nEmail: ${formData.email}\nInquiry Type: ${formData.type}\n\nMessage:\n${formData.message}`;
    
    // Open default mail client
    window.location.href = `mailto:info@myanmarsutech.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Show success state
    setIsSubmitted(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fname: "",
        lname: "",
        company: "",
        email: "",
        type: t("contact.form.type1") || "Product Purchase / Export",
        message: ""
      });
    }, 5000);
  };

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-emerald-950 py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=75&w=1200&auto=format,compress&fit=crop" 
            alt="Office" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-emerald-950 mix-blend-multiply" />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <Breadcrumbs />
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">{t("contact.heroTitle")}</h1>
            <p className="text-xl text-emerald-100/80 leading-relaxed">
              {t("contact.heroDesc")}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div>
              <SectionHeading subtitle={t("Address to Contact")} title={t("Addresses")} />
              
              <div className="space-y-12">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                    <MapPin className="w-6 h-6 text-emerald-600 mr-3" />
                    {t("Contact Of Head Office,Yangon")}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    Room 207-208, Yadana Residance,<br />
                    9 Mile, Pyay Rd, Yangon, Myanmar.
                  </p>
                  <div className="space-y-3">
                    <a href="tel:+95 1 650 585" className="flex items-center text-slate-600 hover:text-emerald-700 transition-colors">
                      <Phone className="w-5 h-5 mr-3 text-amber-500" />
                      +95 1 650 585
                    </a>
                    <a href="mailto:info@myanmarsutech.com" className="flex items-center text-slate-600 hover:text-emerald-700 transition-colors">
                      <Mail className="w-5 h-5 mr-3 text-amber-500" />
                      info@myanmarsutech.com
                    </a>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                    <MapPin className="w-6 h-6 text-emerald-600 mr-3" />
                    {t("Contact of Factory,Pyay")}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Mya Ywar, Pyay Township,<br />
                    West Bago Division, Myanmar.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-slate-100 relative overflow-hidden">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 bg-white z-10 flex flex-col items-center justify-center text-center p-8"
                >
                  <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                  <p className="text-slate-600">Thank you for reaching out. Your email client has been opened to send the inquiry.</p>
                </motion.div>
              ) : null}

              <h3 className="text-2xl font-bold text-slate-900 mb-8">{t("contact.form.title")}</h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">{t("contact.form.fname")}</label>
                    <input required type="text" name="fname" value={formData.fname} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">{t("contact.form.lname")}</label>
                    <input required type="text" name="lname" value={formData.lname} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" placeholder="Doe" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">{t("contact.form.company")}</label>
                  <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" placeholder="Company Name" />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">{t("contact.form.email")}</label>
                  <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" placeholder="john@example.com" />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">{t("contact.form.type")}</label>
                  <select name="type" value={formData.type} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all bg-white">
                    <option value={t("contact.form.t1")}>{t("contact.form.t1")}</option>
                    <option value={t("contact.form.t2")}>{t("contact.form.t2")}</option>
                    <option value={t("contact.form.t3")}>{t("contact.form.t3")}</option>
                    <option value={t("contact.form.t4")}>{t("contact.form.t4")}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">{t("contact.form.msg")}</label>
                  <textarea required name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all resize-none" placeholder={t("contact.form.msgPlaceholder")}></textarea>
                </div>

                <button type="submit" className="w-full bg-emerald-800 hover:bg-emerald-700 text-white font-bold py-4 rounded-lg transition-colors flex items-center justify-center">
                  {t("contact.form.submit")}
                  <Send className="w-5 h-5 ml-2" />
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
