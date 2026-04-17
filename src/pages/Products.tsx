import { motion } from "motion/react";
import SectionHeading from "@/components/SectionHeading";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Package, CheckCircle2, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { useState, useEffect } from "react";
import Skeleton from "@/components/Skeleton";

export default function Products() {
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-emerald-950 py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1622484211148-7182928d11ce?q=75&w=1200&auto=format,compress&fit=crop" 
            alt="Sugar crystals" 
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
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">{t("products.heroTitle")}</h1>
            <p className="text-xl text-emerald-100/80 leading-relaxed">
              {t("products.heroDesc")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Product */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {isLoading ? (
              <>
                <Skeleton className="w-full aspect-square rounded-2xl md:aspect-video lg:aspect-square" />
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Skeleton className="w-24 h-4" />
                    <Skeleton className="w-3/4 h-10" />
                  </div>
                  <div className="space-y-2">
                    <Skeleton className="w-full h-4" />
                    <Skeleton className="w-full h-4" />
                    <Skeleton className="w-2/3 h-4" />
                  </div>
                  <Skeleton className="w-full h-48 rounded-xl" />
                  <div className="grid grid-cols-2 gap-4">
                    <Skeleton className="h-12 rounded-lg" />
                    <Skeleton className="h-12 rounded-lg" />
                  </div>
                </div>
              </>
            ) : (
              <>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <img loading="lazy" decoding="async" 
                    src="https://i.imgur.com/O4wawVQ.jpg" 
                    alt="White Sugar" 
                    className="w-full h-auto rounded-2xl shadow-xl"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <SectionHeading subtitle={t("products.main.subtitle")} title={t("products.main.title")} />
                  <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                    {t("products.main.desc")}
                  </p>
                  
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 mb-8">
                    <h4 className="font-bold text-slate-900 text-lg mb-4 flex items-center">
                      <ShieldCheck className="w-5 h-5 text-emerald-600 mr-2" />
                      {t("products.main.specsTitle")}
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex justify-between border-b border-slate-200 pb-2">
                        <span className="text-slate-600">{t("products.main.s1")}</span>
                        <span className="font-bold text-slate-900">{t("products.main.s1v")}</span>
                      </li>
                      <li className="flex justify-between border-b border-slate-200 pb-2">
                        <span className="text-slate-600">{t("products.main.s2")}</span>
                        <span className="font-bold text-slate-900">{t("products.main.s2v")}</span>
                      </li>
                      <li className="flex justify-between border-b border-slate-200 pb-2">
                        <span className="text-slate-600">{t("products.main.s3")}</span>
                        <span className="font-bold text-slate-900">{t("products.main.s3v")}</span>
                      </li>
                      <li className="flex justify-between pb-2">
                        <span className="text-slate-600">{t("products.main.s4")}</span>
                        <span className="font-bold text-slate-900">{t("products.main.s4v")}</span>
                      </li>
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <Package className="w-5 h-5 text-amber-600 mr-3 shrink-0 mt-0.5" />
                      <div>
                        <h5 className="font-bold text-slate-900 text-sm">{t("products.pack.stdTitle")}</h5>
                        <p className="text-slate-600 text-sm">{t("products.pack.stdDesc")}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Package className="w-5 h-5 text-amber-600 mr-3 shrink-0 mt-0.5" />
                      <div>
                        <h5 className="font-bold text-slate-900 text-sm">{t("products.pack.bulkTitle")}</h5>
                        <p className="text-slate-600 text-sm">{t("products.pack.bulkDesc")}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Other Products */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading subtitle={t("products.otherSubtitle")} title={t("products.otherTitle")} centered />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {isLoading ? (
              Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="bg-white rounded-2xl border border-slate-100 p-8 space-y-4">
                  <Skeleton className="w-14 h-14 rounded-xl" />
                  <Skeleton className="w-24 h-3" />
                  <Skeleton className="w-3/4 h-8" />
                  <div className="space-y-2">
                    <Skeleton className="w-full h-4" />
                    <Skeleton className="w-full h-4" />
                    <Skeleton className="w-2/3 h-4" />
                  </div>
                </div>
              ))
            ) : (
              <>
                {/* Molasses */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 hover:shadow-md transition-shadow"
                >
                  <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                    <Package className="w-7 h-7 text-amber-600" />
                  </div>
                  <h3 className="text-sm font-bold text-emerald-600 tracking-wider uppercase mb-2">{t("products.molasses.subtitle")}</h3>
                  <h4 className="text-2xl font-bold text-slate-900 mb-4">{t("products.molasses.title")}</h4>
                  <p className="text-slate-600 leading-relaxed">
                    {t("products.molasses.desc")}
                  </p>
                </motion.div>

                {/* Bagasse */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 hover:shadow-md transition-shadow"
                >
                  <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                    <Package className="w-7 h-7 text-emerald-600" />
                  </div>
                  <h3 className="text-sm font-bold text-emerald-600 tracking-wider uppercase mb-2">{t("products.bagasse.subtitle")}</h3>
                  <h4 className="text-2xl font-bold text-slate-900 mb-4">{t("products.bagasse.title")}</h4>
                  <p className="text-slate-600 leading-relaxed">
                    {t("products.bagasse.desc")}
                  </p>
                </motion.div>

                {/* Bokashi */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 hover:shadow-md transition-shadow"
                >
                  <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                    <Package className="w-7 h-7 text-emerald-600" />
                  </div>
                  <h3 className="text-sm font-bold text-emerald-600 tracking-wider uppercase mb-2">{t("products.bokashi.subtitle")}</h3>
                  <h4 className="text-2xl font-bold text-slate-900 mb-4">{t("products.bokashi.title")}</h4>
                  <p className="text-slate-600 leading-relaxed">
                    {t("products.bokashi.desc")}
                  </p>
                </motion.div>
              </>
            )}
          </div>
        </div>
      </section>


      {/* Quality Assurance */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <SectionHeading subtitle={t("products.quality.subtitle")} title={t("products.quality.title")} centered />
          <p className="text-slate-600 max-w-2xl mx-auto mb-12 text-lg">
            {t("products.quality.desc")}
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-white px-8 py-4 rounded-full border border-slate-200 shadow-sm flex items-center font-bold text-slate-700">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-2" /> {t("products.quality.c1")}
            </div>
            <div className="bg-white px-8 py-4 rounded-full border border-slate-200 shadow-sm flex items-center font-bold text-slate-700">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-2" /> {t("products.quality.c2")}
            </div>
            <div className="bg-white px-8 py-4 rounded-full border border-slate-200 shadow-sm flex items-center font-bold text-slate-700">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-2" /> {t("products.quality.c3")}
            </div>
            <div className="bg-white px-8 py-4 rounded-full border border-slate-200 shadow-sm flex items-center font-bold text-slate-700">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-2" /> {t("products.quality.c4")}
            </div>
            <div className="bg-white px-8 py-4 rounded-full border border-slate-200 shadow-sm flex items-center font-bold text-slate-700">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-2" /> {t("products.quality.c5")}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
