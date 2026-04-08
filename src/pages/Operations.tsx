import { motion } from "motion/react";
import SectionHeading from "@/components/SectionHeading";
import Breadcrumbs from "@/components/Breadcrumbs";
import VirtualTour from "@/components/VirtualTour";
import { Settings, Cpu, Truck, ArrowRight, CheckCircle2, Globe } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export default function Operations() {
  const { t } = useLanguage();

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-emerald-950 py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=75&w=1200&auto=format,compress&fit=crop" 
            alt="Factory operations" 
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
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">{t("operations.heroTitle")}</h1>
            <p className="text-xl text-emerald-100/80 leading-relaxed">
              {t("operations.heroDesc")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Virtual Tour */}
      <section className="py-12 bg-slate-900">
        <div className="container mx-auto px-4 md:px-8">
          <VirtualTour />
        </div>
      </section>

      {/* Production Process */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading subtitle={t("operations.process.subtitle")} title={t("operations.process.title")} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { step: "01", title: t("operations.process.s1Title"), desc: t("operations.process.s1Desc") },
              { step: "02", title: t("operations.process.s2Title"), desc: t("operations.process.s2Desc") },
              { step: "03", title: t("operations.process.s3Title"), desc: t("operations.process.s3Desc") },
              { step: "04", title: t("operations.process.s4Title"), desc: t("operations.process.s4Desc") }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 border border-slate-100 p-8 rounded-2xl relative overflow-hidden group hover:border-emerald-200 transition-colors"
              >
                <div className="text-6xl font-black text-slate-100 absolute -top-4 -right-4 group-hover:text-emerald-50 transition-colors z-0">
                  {item.step}
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 mt-4">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology & Innovation */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
              <img loading="lazy" decoding="async" src="https://i.imgur.com/yi5WoHk.jpg" alt="Tech 1" className="rounded-xl h-48 md:h-64 w-full object-cover shadow-md" referrerPolicy="no-referrer" />
              <img loading="lazy" decoding="async" src="https://i.imgur.com/cZpaH1E.jpg" alt="Tech 2" className="rounded-xl h-48 md:h-64 w-full object-cover shadow-md mt-8" referrerPolicy="no-referrer" />
            </div>
            <div className="order-1 lg:order-2">
              <SectionHeading subtitle={t("operations.tech.subtitle")} title={t("operations.tech.title")} />
              <p className="text-slate-600 text-lg mb-8">
                {t("operations.tech.desc")}
              </p>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="bg-emerald-100 p-2 rounded-lg mr-4 shrink-0">
                    <Cpu className="w-6 h-6 text-emerald-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{t("operations.tech.f1Title")}</h4>
                    <p className="text-slate-600 text-sm">{t("operations.tech.f1Desc")}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-emerald-100 p-2 rounded-lg mr-4 shrink-0">
                    <Settings className="w-6 h-6 text-emerald-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{t("operations.tech.f2Title")}</h4>
                    <p className="text-slate-600 text-sm">{t("operations.tech.f2Desc")}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-emerald-100 p-2 rounded-lg mr-4 shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-emerald-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{t("operations.tech.f3Title")}</h4>
                    <p className="text-slate-600 text-sm">{t("operations.tech.f3Desc")}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Supply Chain */}
      <section className="py-24 bg-emerald-900 text-white">
        <div className="container mx-auto px-4 md:px-8">
          <SectionHeading subtitle={t("operations.supply.subtitle")} title={t("operations.supply.title")} light centered />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-emerald-800 rounded-full flex items-center justify-center mb-6 border-4 border-emerald-700">
                <Truck className="w-8 h-8 text-amber-400" />
              </div>
              <h4 className="text-xl font-bold mb-3">{t("operations.supply.c1Title")}</h4>
              <p className="text-emerald-100/80 text-sm leading-relaxed">
                {t("operations.supply.c1Desc")}
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-emerald-800 rounded-full flex items-center justify-center mb-6 border-4 border-emerald-700">
                <Settings className="w-8 h-8 text-amber-400" />
              </div>
              <h4 className="text-xl font-bold mb-3">{t("operations.supply.c2Title")}</h4>
              <p className="text-emerald-100/80 text-sm leading-relaxed">
                {t("operations.supply.c2Desc")}
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-emerald-800 rounded-full flex items-center justify-center mb-6 border-4 border-emerald-700">
                <Globe className="w-8 h-8 text-amber-400" />
              </div>
              <h4 className="text-xl font-bold mb-3">{t("operations.supply.c3Title")}</h4>
              <p className="text-emerald-100/80 text-sm leading-relaxed">
                {t("operations.supply.c3Desc")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
