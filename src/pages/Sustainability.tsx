import { motion } from "motion/react";
import SectionHeading from "@/components/SectionHeading";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Leaf, Zap, Droplets, Users } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export default function Sustainability() {
  const { t } = useLanguage();

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-emerald-950 py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://i.imgur.com/dHNBkQP.jpg" 
            alt="Agriculture and sustainability" 
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
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">{t("sustainability.heroTitle")}</h1>
            <p className="text-xl text-emerald-100/80 leading-relaxed">
              {t("sustainability.heroDesc")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Initiatives */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading subtitle={t("sustainability.commit.subtitle")} title={t("sustainability.commit.title")} centered />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-6 items-start"
            >
              <div className="bg-emerald-100 p-4 rounded-2xl shrink-0">
                <Zap className="w-8 h-8 text-emerald-700" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{t("sustainability.commit.i1Title")}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {t("sustainability.commit.i1Desc")}
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-6 items-start"
            >
              <div className="bg-blue-100 p-4 rounded-2xl shrink-0">
                <Droplets className="w-8 h-8 text-blue-700" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{t("sustainability.commit.i2Title")}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {t("sustainability.commit.i2Desc")}
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-6 items-start"
            >
              <div className="bg-amber-100 p-4 rounded-2xl shrink-0">
                <Leaf className="w-8 h-8 text-amber-700" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{t("sustainability.commit.i3Title")}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {t("sustainability.commit.i3Desc")}
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-6 items-start"
            >
              <div className="bg-purple-100 p-4 rounded-2xl shrink-0">
                <Users className="w-8 h-8 text-purple-700" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{t("sustainability.commit.i4Title")}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {t("sustainability.commit.i4Desc")}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Banner */}
      <section className="h-96 w-full relative">
        <img loading="lazy" decoding="async" 
          src="https://i.imgur.com/dHNBkQP.jpg" 
          alt="Sugarcane field" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-emerald-900/40" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white max-w-4xl leading-tight">
            {t("sustainability.quote")}
          </h2>
        </div>
      </section>
    </div>
  );
}
