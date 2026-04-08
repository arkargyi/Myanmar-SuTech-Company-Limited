import { Outlet, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, Factory, ChevronRight, Mail, MapPin, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "@/lib/i18n";
import CookieBanner from "./CookieBanner";

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t, language, setLanguage } = useLanguage();

  const navLinks = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.about"), path: "/about" },
    { name: t("nav.operations"), path: "/operations" },
    { name: t("nav.products"), path: "/products" },
    { name: t("nav.sustainability"), path: "/sustainability" },
    { name: t("nav.news"), path: "/news" },
    { name: t("nav.contact"), path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 bg-slate-50">
      {/* Top Bar */}
      <div className="bg-emerald-900 text-white/80 py-2 px-4 md:px-8 text-xs md:text-sm hidden md:flex justify-between items-center z-50 relative">
        <div className="flex items-center space-x-6">
          <span className="flex items-center"><MapPin className="w-4 h-4 mr-2 text-amber-500" /> {t("topbar.locations")}</span>
          <span className="flex items-center"><Phone className="w-4 h-4 mr-2 text-amber-500" /> +95 1 650 585</span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="flex items-center"><Mail className="w-4 h-4 mr-2 text-amber-500" /> info@myanmarsutech.com</span>
          <div className="flex space-x-2 border-l border-white/20 pl-4">
            <button 
              onClick={() => setLanguage('en')}
              className={cn("transition-colors font-medium", language === 'en' ? "text-amber-400" : "hover:text-white")}
            >
              EN
            </button>
            <span className="text-white/40">|</span>
            <button 
              onClick={() => setLanguage('mm')}
              className={cn("transition-colors font-medium", language === 'mm' ? "text-amber-400" : "hover:text-white")}
            >
              MM
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300 border-b",
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-slate-200 py-3" : "bg-white border-transparent py-5"
        )}
      >
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative flex items-center justify-center w-10 h-10 bg-emerald-800 rounded-lg group-hover:bg-emerald-700 transition-colors overflow-hidden">
              <img 
                src="/logo.png" 
                alt="Myanmar Sutech Logo" 
                className="w-full h-full object-contain z-10"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <Factory className="w-6 h-6 text-amber-400 absolute z-0" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl leading-none text-emerald-900 tracking-tight">Myanmar Sutech</span>
              <span className="text-[10px] uppercase tracking-widest text-slate-500 font-medium mt-1">Co., Ltd.</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-emerald-700 relative py-2",
                  location.pathname === link.path ? "text-emerald-800" : "text-slate-600"
                )}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-emerald-800 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-md text-sm font-medium transition-colors shadow-sm shadow-emerald-900/20"
            >
              {t("nav.partner")}
            </Link>
          </nav>

          {/* Mobile Menu Toggle & Lang Switcher */}
          <div className="flex items-center space-x-4 lg:hidden">
            <div className="flex space-x-2 border-r border-slate-200 pr-4 text-sm">
              <button 
                onClick={() => setLanguage('en')}
                className={cn("transition-colors font-medium", language === 'en' ? "text-emerald-700" : "text-slate-400 hover:text-slate-600")}
              >
                EN
              </button>
              <span className="text-slate-300">|</span>
              <button 
                onClick={() => setLanguage('mm')}
                className={cn("transition-colors font-medium", language === 'mm' ? "text-emerald-700" : "text-slate-400 hover:text-slate-600")}
              >
                MM
              </button>
            </div>
            <button
              className="p-2 text-slate-600 hover:text-emerald-800"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-slate-200 overflow-hidden"
          >
            <nav className="flex flex-col px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "px-4 py-3 rounded-md text-sm font-medium transition-colors",
                    location.pathname === link.path
                      ? "bg-emerald-50 text-emerald-800"
                      : "text-slate-600 hover:bg-slate-50"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow flex flex-col">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-emerald-950 text-slate-300 pt-16 pb-8 border-t-4 border-amber-500">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="relative flex items-center justify-center w-10 h-10 bg-emerald-800 rounded-lg overflow-hidden">
                  <img loading="lazy" decoding="async" 
                    src="/logo.png" 
                    alt="Myanmar Sutech Logo" 
                    className="w-full h-full object-contain z-10"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <Factory className="w-6 h-6 text-amber-400 absolute z-0" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-xl leading-none text-white tracking-tight">Myanmar Sutech</span>
                  <span className="text-[10px] uppercase tracking-widest text-emerald-400 font-medium mt-1">Co., Ltd.</span>
                </div>
              </div>
              <p className="text-sm text-emerald-200/80 leading-relaxed mb-6">
                {t("footer.desc")}
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">{t("footer.quickLinks")}</h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-sm hover:text-amber-400 transition-colors flex items-center group">
                      <ChevronRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-amber-500" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">{t("footer.ourBusiness")}</h4>
              <ul className="space-y-3">
                <li><Link to="/products" className="text-sm hover:text-amber-400 transition-colors">{t("footer.refinedSugar")}</Link></li>
                <li><Link to="/products" className="text-sm hover:text-amber-400 transition-colors">{t("footer.byProducts")}</Link></li>
                <li><Link to="/operations" className="text-sm hover:text-amber-400 transition-colors">{t("footer.prodProcess")}</Link></li>
                <li><Link to="/products" className="text-sm hover:text-amber-400 transition-colors">{t("footer.qualityAssurance")}</Link></li>
                <li><Link to="/sustainability" className="text-sm hover:text-amber-400 transition-colors">{t("footer.sustainability")}</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">{t("footer.contactUs")}</h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 text-amber-500 shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">
                    <strong className="text-white block mb-1">{t("footer.headOffice")}</strong>
                    Room 207-208, Yadana Residance,<br />
                    9 Mile, Pyay Rd, Yangon, Myanmar.
                  </span>
                </li>
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 text-amber-500 shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">
                    <strong className="text-white block mb-1">{t("footer.factory")}</strong>
                    Mya Ywar, Pyay Township,<br />
                    West Bago Division.
                  </span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-amber-500 shrink-0" />
                  <a href="mailto:info@myanmarsutech.com" className="text-sm hover:text-amber-400 transition-colors">info@myanmarsutech.com</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-emerald-800/50 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-emerald-400/60 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} {t("footer.rights")}
            </p>
            <div className="flex space-x-6 text-xs text-emerald-400/60">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">{t("footer.privacy")}</Link>
              <Link to="/terms-of-service" className="hover:text-white transition-colors">{t("footer.terms")}</Link>
            </div>
          </div>
        </div>
      </footer>
      <CookieBanner />
    </div>
  );
}
