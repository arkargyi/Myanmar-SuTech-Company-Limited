import { motion } from "motion/react";
import { ArrowRight, Factory, Leaf, ShieldCheck, TrendingUp, Globe, Users, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedCounter from "@/components/AnimatedCounter";
import SectionHeading from "@/components/SectionHeading";
import ImageGallery from "@/components/ImageGallery";
import { useLanguage } from "@/lib/i18n";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=75&w=1200&auto=format,compress&fit=crop" 
            alt="Modern advanced sugar manufacturing facility" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-emerald-900/80 to-transparent mix-blend-multiply" />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-amber-500/20 border border-amber-500/50 text-amber-400 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
                {t("home.heroTag")}
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
                {t("home.heroTitle1")} <span className="text-amber-400">{t("home.heroTitle2")}</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl leading-relaxed">
                {t("home.heroDesc")}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/operations" 
                  className="bg-amber-500 hover:bg-amber-400 text-emerald-950 px-8 py-4 rounded-md font-bold transition-colors flex items-center justify-center group"
                >
                  {t("home.exploreOps")}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/contact" 
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-md font-bold transition-colors flex items-center justify-center"
                >
                  {t("nav.partner")}
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/50"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span className="text-xs uppercase tracking-widest mb-2 font-medium">{t("home.scroll")}</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-slate-100 relative z-20 -mt-8 mx-4 md:mx-8 rounded-xl shadow-xl shadow-slate-200/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-100">
            <div className="text-center px-4">
              <div className="text-4xl md:text-5xl font-bold text-emerald-800 mb-2 font-mono">
                <AnimatedCounter value={6000} />
              </div>
              <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">{t("home.stats.capacity")}</p>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl md:text-5xl font-bold text-emerald-800 mb-2 font-mono">
                <AnimatedCounter value={1997} />
              </div>
              <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">{t("home.stats.established")}</p>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl md:text-5xl font-bold text-emerald-800 mb-2 font-mono">
                <AnimatedCounter value={100} suffix="%" />
              </div>
              <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">{t("home.stats.quality")}</p>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl md:text-5xl font-bold text-emerald-800 mb-2 font-mono flex items-center justify-center">
                <Globe className="w-8 h-8 mr-2 text-amber-500" />
                <span>{t("home.stats.global")}</span>
              </div>
              <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">{t("home.stats.export")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading subtitle={t("home.intro.subtitle")} title={t("home.intro.title")} />
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                {t("home.intro.p1")}
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                {t("home.intro.p2")}
              </p>
              <Link 
                to="/about" 
                className="inline-flex items-center font-bold text-emerald-700 hover:text-emerald-800 transition-colors group"
              >
                {t("home.intro.readMore")}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img loading="lazy" decoding="async" 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=75&w=1200&auto=format,compress&fit=crop" 
                  alt="Modern factory interior" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-xl shadow-xl max-w-xs hidden md:block border-t-4 border-amber-500">
                <ShieldCheck className="w-10 h-10 text-emerald-600 mb-4" />
                <h4 className="font-bold text-slate-900 mb-2">{t("home.intro.badgeTitle")}</h4>
                <p className="text-sm text-slate-600">{t("home.intro.badgeDesc")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading subtitle={t("home.pillars.subtitle")} title={t("home.pillars.title")} centered />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              {
                icon: Factory,
                title: t("home.pillars.p1Title"),
                desc: t("home.pillars.p1Desc"),
                link: "/operations",
                image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=75&w=1200&auto=format,compress&fit=crop"
              },
              {
                icon: TrendingUp,
                title: t("home.pillars.p2Title"),
                desc: t("home.pillars.p2Desc"),
                link: "/operations",
                image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=75&w=1200&auto=format,compress&fit=crop"
              },
              {
                icon: Leaf,
                title: t("home.pillars.p3Title"),
                desc: t("home.pillars.p3Desc"),
                link: "/sustainability",
                image: "https://i.imgur.com/dHNBkQP.jpg"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 bg-white flex flex-col"
              >
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-emerald-900/20 group-hover:bg-transparent transition-colors z-10" />
                  <img loading="lazy" decoding="async" 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 z-20 bg-white p-3 rounded-lg shadow-md">
                    <item.icon className="w-6 h-6 text-emerald-700" />
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 mb-6 flex-grow">{item.desc}</p>
                  <Link 
                    to={item.link} 
                    className="inline-flex items-center text-sm font-bold text-emerald-700 hover:text-amber-500 transition-colors uppercase tracking-wider"
                  >
                    {t("home.pillars.learnMore")} <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <ImageGallery />

      {/* Latest News Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-end mb-12">
            <SectionHeading subtitle={t("news.heroTitle")} title={t("news.categories.all")} />
            <Link to="/news" className="hidden md:flex items-center text-emerald-700 font-bold hover:text-amber-500 transition-colors">
              {t("news.readMore")} <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                title: t("news.articles.a1.title"),
                excerpt: t("news.articles.a1.excerpt"),
                date: t("news.articles.a1.date"),
                category: t("news.articles.a1.category"),
                image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop"
              },
              {
                id: 2,
                title: t("news.articles.a2.title"),
                excerpt: t("news.articles.a2.excerpt"),
                date: t("news.articles.a2.date"),
                category: t("news.articles.a2.category"),
                image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop"
              },
              {
                id: 3,
                title: t("news.articles.a3.title"),
                excerpt: t("news.articles.a3.excerpt"),
                date: t("news.articles.a3.date"),
                category: t("news.articles.a3.category"),
                image: "https://images.unsplash.com/photo-1622484211148-7182928d11ce?q=80&w=800&auto=format&fit=crop"
              }
            ].map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-slate-50 rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl hover:border-emerald-100 transition-all duration-300 group flex flex-col h-full"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-emerald-800 shadow-sm">
                    {article.category}
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center text-slate-500 text-xs mb-4 font-medium">
                    <span className="w-4 h-4 mr-2 text-emerald-600">📅</span>
                    {article.date}
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                    {article.excerpt}
                  </p>
                  
                  <Link to="/news" state={{ articleId: article.id }} className="flex items-center text-emerald-700 font-semibold text-sm hover:text-emerald-800 transition-colors mt-auto group/btn">
                    {t("news.readMore")}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link to="/news" className="inline-flex items-center text-emerald-700 font-bold hover:text-amber-500 transition-colors">
              {t("news.readMore")} <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-emerald-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-400 via-transparent to-transparent" />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">{t("home.cta.title")}</h2>
          <p className="text-emerald-100 text-lg max-w-2xl mx-auto mb-10">
            {t("home.cta.desc")}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-amber-500 hover:bg-amber-400 text-emerald-950 px-8 py-4 rounded-md font-bold transition-colors"
            >
              {t("home.cta.contactBtn")}
            </Link>
            <a 
              href="#" 
              className="bg-emerald-800 hover:bg-emerald-700 text-white border border-emerald-700 px-8 py-4 rounded-md font-bold transition-colors"
            >
              {t("home.cta.downloadBtn")}
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading subtitle={t("home.testimonials.subtitle")} title={t("home.testimonials.title")} centered />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                quote: t("home.testimonials.t1.quote"),
                name: t("home.testimonials.t1.name"),
                role: t("home.testimonials.t1.role")
              },
              {
                quote: t("home.testimonials.t2.quote"),
                name: t("home.testimonials.t2.name"),
                role: t("home.testimonials.t2.role")
              },
              {
                quote: t("home.testimonials.t3.quote"),
                name: t("home.testimonials.t3.name"),
                role: t("home.testimonials.t3.role")
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative flex flex-col"
              >
                <Quote className="w-10 h-10 text-emerald-100 absolute top-6 left-6" />
                <p className="text-slate-600 italic relative z-10 mt-6 mb-8 flex-grow">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center mt-auto">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-800 font-bold text-lg mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">{testimonial.name}</h4>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
