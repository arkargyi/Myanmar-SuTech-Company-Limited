import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { Info, X } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

import { cn } from "@/lib/utils";

interface Hotspot {
  id: string;
  x: number; // percentage
  y: number; // percentage
  titleKey: string;
  descKey: string;
}

const hotspots: Hotspot[] = [
  {
    id: "mill",
    x: 25,
    y: 65,
    titleKey: "operations.tour.hotspot1.title",
    descKey: "operations.tour.hotspot1.desc",
  },
  {
    id: "clarification",
    x: 55,
    y: 45,
    titleKey: "operations.tour.hotspot2.title",
    descKey: "operations.tour.hotspot2.desc",
  },
  {
    id: "evaporator",
    x: 80,
    y: 55,
    titleKey: "operations.tour.hotspot3.title",
    descKey: "operations.tour.hotspot3.desc",
  },
];

export default function VirtualTour() {
  const { t } = useLanguage();
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });
  const imageRef = useRef<HTMLImageElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Calculate drag constraints based on image width vs container width
  useEffect(() => {
    const calcConstraints = () => {
      if (containerRef.current && imageRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const imageWidth = imageRef.current.offsetWidth;
        setConstraints({
          left: containerWidth - imageWidth,
          right: 0,
        });
      }
    };

    calcConstraints();
    window.addEventListener("resize", calcConstraints);
    // Also recalculate after image loads
    if (imageRef.current?.complete) {
      calcConstraints();
    }
    return () => window.removeEventListener("resize", calcConstraints);
  }, [isLoading]);

  const modalCloseRef = useRef<HTMLButtonElement>(null);

  // Manage focus when info panel opens
  useEffect(() => {
    if (activeHotspot) {
      // Small delay to ensure panel is rendered
      setTimeout(() => {
        modalCloseRef.current?.focus();
      }, 100);

      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setActiveHotspot(null);
        }
      };
      window.addEventListener('keydown', handleEscape);
      return () => window.removeEventListener('keydown', handleEscape);
    }
  }, [activeHotspot]);

  return (
    <div className="w-full bg-slate-900 rounded-2xl overflow-hidden relative shadow-2xl border border-slate-800" role="region" aria-label="360 Virtual Tour">
      {/* Tour Header */}
      <div className="absolute top-0 left-0 w-full p-6 bg-gradient-to-b from-black/80 to-transparent z-10 pointer-events-none flex justify-between items-start">
        <div>
          <h3 className="text-2xl font-bold text-white mb-1">{t("operations.tour.title")}</h3>
          <p className="text-emerald-400 font-medium text-sm">{t("operations.tour.subtitle")}</p>
        </div>
        {!isLoading && (
          <div className="bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-white/80 text-sm flex items-center">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse mr-2"></span>
            Drag to explore
          </div>
        )}
      </div>

      {/* Interactive Area */}
      <div 
        ref={containerRef}
        className="relative w-full h-[500px] md:h-[600px] cursor-grab active:cursor-grabbing overflow-hidden"
      >
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-900 z-20">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin mb-4" />
              <p className="text-slate-400 text-sm animate-pulse">Loading 360° View...</p>
            </div>
          </div>
        )}
        <motion.div
          drag="x"
          dragConstraints={constraints}
          dragElastic={0.1}
          className={cn(
            "absolute top-0 left-0 h-full min-w-max transition-opacity duration-700",
            isLoading ? "opacity-0" : "opacity-100"
          )}
        >
          {/* Main Panorama Image */}
          <img 
            ref={imageRef}
            src="https://i.imgur.com/pzznhYp.png" 
            alt="Factory Interior Panorama" 
            className="h-full w-auto max-w-none pointer-events-none select-none object-cover"
            onLoad={() => {
              setIsLoading(false);
              setTimeout(() => {
                if (containerRef.current && imageRef.current) {
                  const containerWidth = containerRef.current.offsetWidth;
                  const imageWidth = imageRef.current.offsetWidth;
                  setConstraints({
                    left: containerWidth - imageWidth,
                    right: 0,
                  });
                }
              }, 100);
            }}
          />

          {/* Hotspots */}
          {hotspots.map((hotspot) => (
            <div
              key={hotspot.id}
              className="absolute z-20 transform -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
            >
              {/* Pulsing ring */}
              <div className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-75"></div>
              
              {/* Hotspot Button */}
              <button
                onClick={() => setActiveHotspot(hotspot)}
                className={`relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg border-2 ${
                  activeHotspot?.id === hotspot.id 
                    ? "bg-emerald-600 border-white scale-110" 
                    : "bg-white/90 border-emerald-500 hover:bg-white hover:scale-110"
                }`}
                aria-label={`View info for ${t(hotspot.titleKey)}`}
              >
                <Info className={`w-5 h-5 ${activeHotspot?.id === hotspot.id ? "text-white" : "text-emerald-700"}`} />
              </button>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Info Panel Overlay */}
      {activeHotspot && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-96 bg-white/95 backdrop-blur-xl p-6 rounded-2xl shadow-2xl border border-white/20 z-30"
          role="dialog"
          aria-labelledby="hotspot-title"
        >
          <button 
            ref={modalCloseRef}
            onClick={() => setActiveHotspot(null)}
            className="absolute top-4 right-4 text-slate-500 hover:text-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-full p-1"
            aria-label="Close info panel"
          >
            <X className="w-5 h-5" />
          </button>
          <h4 id="hotspot-title" className="text-xl font-bold text-slate-900 mb-2 pr-8">
            {t(activeHotspot.titleKey)}
          </h4>
          <p className="text-slate-600 leading-relaxed text-sm">
            {t(activeHotspot.descKey)}
          </p>
        </motion.div>
      )}
    </div>
  );
}
