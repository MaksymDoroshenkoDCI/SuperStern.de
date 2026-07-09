"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Shield, X } from "lucide-react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("super_stern_cookie_consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("super_stern_cookie_consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("super_stern_cookie_consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:max-w-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl rounded-2xl p-5 animate-slide-up">
      <div className="flex items-start space-x-3">
        <div className="bg-amber-100 p-2.5 rounded-xl shrink-0">
          <Shield className="h-6 w-6 text-amber-600" />
        </div>
        <div className="flex-1 space-y-2">
          <div className="flex justify-between items-center">
            <h4 className="font-bold text-slate-800 dark:text-white text-base">Cookie-Einwilligung</h4>
            <button
              onClick={handleDecline}
              className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Wir verwenden Cookies, um Ihre Erfahrung auf unserer Website zu verbessern und Statistiken zu erheben. Durch Klicken auf &quot;Akzeptieren&quot; stimmen Sie der Verwendung zu. Mehr Infos in unserer{" "}
            <Link href="/datenschutz" className="text-amber-600 underline font-semibold">
              Datenschutzerklärung
            </Link>
            .
          </p>
          <div className="flex space-x-3 pt-2">
            <button
              onClick={handleAccept}
              className="flex-1 bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs py-2.5 px-4 rounded-xl transition-all shadow-sm"
            >
              Akzeptieren
            </button>
            <button
              onClick={handleDecline}
              className="flex-1 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs py-2.5 px-4 rounded-xl transition-all"
            >
              Ablehnen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
