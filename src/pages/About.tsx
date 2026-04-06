import { motion } from "motion/react";
import SectionHeading from "@/components/SectionHeading";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Target, Eye, TrendingUp, Award, Users } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-emerald-950 py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=75&w=1200&auto=format,compress&fit=crop" 
            alt="Corporate building" 
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
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">{t("about.heroTitle")}</h1>
            <p className="text-xl text-emerald-100/80 leading-relaxed">
              {t("about.heroDesc")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* History & Evolution */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading subtitle={t("about.history.subtitle")} title={t("about.history.title")} />
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
                
                {/* Timeline Item 1 */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-emerald-100 text-emerald-700 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <span className="font-bold text-xs">1997</span>
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl border border-slate-100 bg-slate-50 shadow-sm">
                    <h3 className="font-bold text-slate-900 text-lg mb-2">{t("about.history.y1997Title")}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{t("about.history.p1")}</p>
                  </div>
                </div>

                {/* Timeline Item 2 */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-amber-100 text-amber-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <span className="font-bold text-xs">2019</span>
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl border border-amber-200 bg-amber-50 shadow-md">
                    <h3 className="font-bold text-slate-900 text-lg mb-2">{t("about.history.y2019Title")}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{t("about.history.p2")}</p>
                  </div>
                </div>

                {/* Timeline Item 3 */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-emerald-700 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <span className="font-bold text-xs">Now</span>
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl border border-emerald-200 bg-emerald-50 shadow-md">
                    <h3 className="font-bold text-slate-900 text-lg mb-2">{t("about.history.nowTitle")}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{t("about.history.p3")}</p>
                  </div>
                </div>

              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1565514020179-026b92b84bb6?q=75&w=1200&auto=format,compress&fit=crop" alt="Factory exterior" className="rounded-xl h-64 w-full object-cover shadow-lg" referrerPolicy="no-referrer" />
              <img loading="lazy" decoding="async" src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=75&w=1200&auto=format,compress&fit=crop" alt="Factory interior" className="rounded-xl h-64 w-full object-cover shadow-lg mt-8" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100"
            >
              <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-emerald-700" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{t("about.vision.title")}</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                {t("about.vision.desc")}
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-emerald-900 p-10 rounded-2xl shadow-xl border border-emerald-800 text-white"
            >
              <div className="w-14 h-14 bg-emerald-800 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-amber-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{t("about.mission.title")}</h3>
              <ul className="space-y-4 text-emerald-100/90">
                <li className="flex items-start">
                  <span className="text-amber-400 mr-3 font-bold">•</span>
                  {t("about.mission.m1")}
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-3 font-bold">•</span>
                  {t("about.mission.m2")}
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-3 font-bold">•</span>
                  {t("about.mission.m3")}
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-emerald-950 text-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <SectionHeading subtitle={t("about.values.subtitle")} title={t("about.values.title")} light centered />
          <p className="text-emerald-100/80 max-w-3xl mx-auto mb-16 text-lg">
            {t("about.history.milestoneDesc")}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-8 border border-emerald-800 rounded-2xl bg-emerald-900/50">
              <Award className="w-12 h-12 text-amber-400 mx-auto mb-4" />
              <h4 className="font-bold text-white text-xl mb-2">{t("about.values.v1Title")}</h4>
              <p className="text-emerald-100/80 text-sm">{t("about.values.v1Desc")}</p>
            </div>
            <div className="p-8 border border-emerald-800 rounded-2xl bg-emerald-900/50">
              <TrendingUp className="w-12 h-12 text-amber-400 mx-auto mb-4" />
              <h4 className="font-bold text-white text-xl mb-2">{t("about.values.v2Title")}</h4>
              <p className="text-emerald-100/80 text-sm">{t("about.values.v2Desc")}</p>
            </div>
            <div className="p-8 border border-emerald-800 rounded-2xl bg-emerald-900/50">
              <Users className="w-12 h-12 text-amber-400 mx-auto mb-4" />
              <h4 className="font-bold text-white text-xl mb-2">{t("about.values.v4Title")}</h4>
              <p className="text-emerald-100/80 text-sm">{t("about.values.v4Desc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership / Corporate Structure */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <SectionHeading subtitle={t("about.corp.subtitle")} title={t("about.corp.title")} centered />
          <p className="text-slate-600 max-w-3xl mx-auto mb-16 text-lg">
            {t("about.corp.desc")}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-8 border border-slate-100 rounded-2xl bg-slate-50">
              <Award className="w-12 h-12 text-amber-500 mx-auto mb-4" />
              <h4 className="font-bold text-slate-900 text-xl mb-2">{t("about.corp.qaTitle")}</h4>
              <p className="text-slate-600 text-sm">{t("about.corp.qaDesc")}</p>
            </div>
            <div className="p-8 border border-slate-100 rounded-2xl bg-slate-50">
              <TrendingUp className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h4 className="font-bold text-slate-900 text-xl mb-2">{t("about.corp.invTitle")}</h4>
              <p className="text-slate-600 text-sm">{t("about.corp.invDesc")}</p>
            </div>
            <div className="p-8 border border-slate-100 rounded-2xl bg-slate-50">
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="font-bold text-slate-900 text-xl mb-2">{t("about.corp.workTitle")}</h4>
              <p className="text-slate-600 text-sm">{t("about.corp.workDesc")}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
