import { motion } from "motion/react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useLanguage } from "@/lib/i18n";

export default function PrivacyPolicy() {
  const { t } = useLanguage();

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-emerald-950 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-400 via-transparent to-transparent" />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <Breadcrumbs />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">{t("legal.privacy.title")}</h1>
            <p className="text-emerald-400 font-medium">
              {t("legal.privacy.lastUpdated")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="prose prose-emerald max-w-none prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:leading-relaxed"
          >
            <p className="text-lg mb-8">{t("legal.privacy.intro")}</p>

            <h2 className="text-2xl font-bold mt-12 mb-4">{t("legal.privacy.s1Title")}</h2>
            <p>{t("legal.privacy.s1Desc")}</p>

            <h2 className="text-2xl font-bold mt-12 mb-4">{t("legal.privacy.s2Title")}</h2>
            <p>{t("legal.privacy.s2Desc")}</p>

            <h2 className="text-2xl font-bold mt-12 mb-4">{t("legal.privacy.s3Title")}</h2>
            <p>{t("legal.privacy.s3Desc")}</p>

            <h2 className="text-2xl font-bold mt-12 mb-4">{t("legal.privacy.s4Title")}</h2>
            <p>{t("legal.privacy.s4Desc")}</p>

            <h2 className="text-2xl font-bold mt-12 mb-4">{t("legal.privacy.s5Title")}</h2>
            <p>{t("legal.privacy.s5Desc")}</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
