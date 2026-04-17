import { motion, AnimatePresence } from "motion/react";
import SectionHeading from "@/components/SectionHeading";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Calendar, ArrowRight, Newspaper, X } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  categoryId: string;
  image: string;
}

export default function News() {
  const { t } = useLanguage();
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const categories = [
    { id: "all", name: t("news.categories.all") },
    { id: "company", name: t("news.categories.company") },
    { id: "industry", name: t("news.categories.industry") },
    { id: "press", name: t("news.categories.press") },
  ];

  const articles: Article[] = [
    {
      id: 1,
      title: t("news.articles.a1.title"),
      excerpt: t("news.articles.a1.excerpt"),
      content: t("news.articles.a1.content"),
      date: t("news.articles.a1.date"),
      category: t("news.articles.a1.category"),
      categoryId: "company",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 2,
      title: t("news.articles.a2.title"),
      excerpt: t("news.articles.a2.excerpt"),
      content: t("news.articles.a2.content"),
      date: t("news.articles.a2.date"),
      category: t("news.articles.a2.category"),
      categoryId: "press",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 3,
      title: t("news.articles.a3.title"),
      excerpt: t("news.articles.a3.excerpt"),
      content: t("news.articles.a3.content"),
      date: t("news.articles.a3.date"),
      category: t("news.articles.a3.category"),
      categoryId: "industry",
      image: "https://images.unsplash.com/photo-1622484211148-7182928d11ce?q=80&w=800&auto=format&fit=crop"
    }
  ];

  // Simulate data fetching
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [activeCategory]);

  // Handle auto-opening article from navigation state
  useEffect(() => {
    if (location.state && typeof location.state === 'object' && 'articleId' in location.state) {
      const articleId = (location.state as { articleId: number }).articleId;
      const article = articles.find(a => a.id === articleId);
      if (article) {
        setSelectedArticle(article);
        // Clear state so it doesn't reopen on refresh
        window.history.replaceState({}, document.title);
      }
    }
  }, [location.state, articles]);

  const modalCloseRef = useRef<HTMLButtonElement>(null);

  // Lock body scroll when modal is open and handle focus/escape
  useEffect(() => {
    if (selectedArticle) {
      document.body.style.overflow = 'hidden';
      // Small delay to ensure modal is rendered
      setTimeout(() => {
        modalCloseRef.current?.focus();
      }, 100);

      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setSelectedArticle(null);
        }
      };
      window.addEventListener('keydown', handleEscape);
      return () => {
        window.removeEventListener('keydown', handleEscape);
        document.body.style.overflow = 'unset';
      };
    }
  }, [selectedArticle]);

  const filteredArticles = activeCategory === "all" 
    ? articles 
    : articles.filter(article => article.categoryId === activeCategory);

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-emerald-950 py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1200&auto=format&fit=crop" 
            alt="News and Updates" 
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
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">{t("news.heroTitle")}</h1>
            <p className="text-xl text-emerald-100/80 leading-relaxed">
              {t("news.heroDesc")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* News Content */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          
          {/* Category Filter */}
          <div className="flex flex-wrap gap-4 mb-12 justify-center md:justify-start" role="tablist" aria-label="News Categories">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                role="tab"
                disabled={isLoading}
                aria-selected={activeCategory === category.id}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  activeCategory === category.id
                    ? "bg-emerald-700 text-white shadow-md"
                    : "bg-white text-slate-600 hover:bg-emerald-50 hover:text-emerald-700 border border-slate-200",
                  isLoading && "opacity-50 cursor-not-allowed"
                )}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading ? (
              // Skeleton screens
              Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 flex flex-col h-full animate-pulse">
                  <div className="h-48 bg-slate-200" />
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="w-24 h-4 bg-slate-200 rounded mb-4" />
                    <div className="w-full h-6 bg-slate-200 rounded mb-3" />
                    <div className="w-3/4 h-6 bg-slate-200 rounded mb-6" />
                    <div className="w-full h-4 bg-slate-200 rounded mb-2" />
                    <div className="w-full h-4 bg-slate-200 rounded mb-2" />
                    <div className="w-1/2 h-4 bg-slate-200 rounded mt-auto" />
                  </div>
                </div>
              ))
            ) : (
              filteredArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl hover:border-emerald-100 transition-all duration-300 group flex flex-col h-full cursor-pointer"
                  onClick={() => setSelectedArticle(article)}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedArticle(article);
                    }
                  }}
                  aria-label={`Read article: ${article.title}`}
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
                    <div className="flex items-center text-slate-600 text-xs mb-4 font-medium">
                      <Calendar className="w-4 h-4 mr-2 text-emerald-600" />
                      {article.date}
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                      {article.excerpt}
                    </p>
                    
                    <button 
                      className="flex items-center text-emerald-700 font-semibold text-sm hover:text-emerald-800 transition-colors mt-auto group/btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedArticle(article);
                      }}
                      aria-label={`Read more about ${article.title}`}
                      tabIndex={-1}
                    >
                      {t("news.readMore")}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.article>
              ))
            )}
          </div>

          {!isLoading && filteredArticles.length === 0 && (
            <div className="text-center py-20">
              <Newspaper className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-slate-600">No articles found in this category.</h3>
            </div>
          )}

        </div>
      </section>

      {/* Article Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-slate-900/80 backdrop-blur-sm"
            onClick={() => setSelectedArticle(null)}
            role="presentation"
          >
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-article-title"
            >
              {/* Modal Header Image */}
              <div className="relative h-64 md:h-80 shrink-0">
                <img 
                  src={selectedArticle.image} 
                  alt={selectedArticle.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                <button 
                  ref={modalCloseRef}
                  onClick={() => setSelectedArticle(null)}
                  className="absolute top-4 right-4 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full backdrop-blur-sm transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-10 md:right-10">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                      {selectedArticle.category}
                    </span>
                    <span className="flex items-center text-white/90 text-sm font-medium">
                      <Calendar className="w-4 h-4 mr-2" />
                      {selectedArticle.date}
                    </span>
                  </div>
                  <h2 id="modal-article-title" className="text-2xl md:text-4xl font-bold text-white leading-tight">
                    {selectedArticle.title}
                  </h2>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 md:p-10 overflow-y-auto">
                <div className="prose prose-emerald max-w-none">
                  {selectedArticle.content.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="text-slate-700 text-lg leading-relaxed mb-6">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
