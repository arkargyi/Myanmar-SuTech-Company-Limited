import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export default function Breadcrumbs() {
  const location = useLocation();
  const { t } = useLanguage();
  
  const pathnames = location.pathname.split("/").filter((x) => x);
  
  if (pathnames.length === 0) return null;

  const getRouteName = (path: string) => {
    switch (path) {
      case "about": return t("nav.about");
      case "operations": return t("nav.operations");
      case "products": return t("nav.products");
      case "sustainability": return t("nav.sustainability");
      case "contact": return t("nav.contact");
      default: return path.charAt(0).toUpperCase() + path.slice(1);
    }
  };

  return (
    <nav className="flex items-center text-sm font-medium text-emerald-100/80 mb-6" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        <li>
          <Link to="/" className="hover:text-white transition-colors flex items-center">
            <Home className="w-4 h-4 mr-1" />
            {t("nav.home")}
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;

          return (
            <li key={to} className="flex items-center">
              <ChevronRight className="w-4 h-4 mx-1" />
              {last ? (
                <span className="text-white ml-1" aria-current="page">
                  {getRouteName(value)}
                </span>
              ) : (
                <Link to={to} className="hover:text-white transition-colors ml-1">
                  {getRouteName(value)}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
