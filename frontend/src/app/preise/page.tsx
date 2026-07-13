import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingCalculator from "@/components/BookingCalculator";
import CookieBanner from "@/components/CookieBanner";
import { Check, Percent } from "lucide-react";

export default function Preise() {
  const priceGrid = [
    {
      title: "Unterhaltsreinigung",
      rate: "ab 2.50 € / m²",
      min: "Mindestauftrag 50 €",
      details: ["Boden wischen & saugen", "Sanitärreinigung", "Staubwischen", "Müllentsorgung"],
    },
    {
      title: "Büroreinigung",
      rate: "ab 3.00 € / m²",
      min: "Mindestauftrag 80 €",
      details: ["Arbeitsplätze abwischen", "Sanitär- & Teeküche", "Papierkörbe leeren", "Bodenflächen reinigen"],
    },
    {
      title: "Glas- & Fensterreinigung",
      rate: "ab 4.50 € / m²",
      min: "Mindestauftrag 60 €",
      details: ["Fenster & Rahmen", "Schaufensterreinigung", "Glasinnentüren", "Streifenfreie Politur"],
    },
    {
      title: "Baureinigung",
      rate: "ab 5.00 € / m²",
      min: "Mindestauftrag 150 €",
      details: ["Bauschuttbeseitigung", "Zementschleierentfernung", "Feinstaubabsaugung", "Fugenreinigung"],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />

      {/* Header Banner */}
      <section className="bg-gradient-to-r from-emerald-50 via-white to-amber-50/60 text-slate-955 pt-32 pb-16 relative border-b border-slate-100">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-3">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 animate-fade-in">Preise & Kalkulator</h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm animate-fade-in">
            Faire Tarife und transparente Abrechnung. Berechnen Sie Ihren Preis direkt online oder nutzen Sie unsere Preisübersicht.
          </p>
        </div>
      </section>

      {/* Price Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-slate-900">Unsere Tarife im Überblick</h2>
            <p className="text-slate-500 text-sm mt-2">Alle Preise richten sich nach der Flächengröße und sind Richtwerte.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16 animate-fade-in">
            {priceGrid.map((item, idx) => (
              <div
                key={idx}
                className="border border-slate-200 rounded-3xl p-6 flex flex-col justify-between hover:border-emerald-450 hover:shadow-md hover:scale-[1.01] transition-all duration-300 bg-slate-50/30"
              >
                <div>
                  <h3 className="font-bold text-slate-800 text-lg mb-2">{item.title}</h3>
                  <div className="mb-4">
                    <span className="text-2xl font-black text-emerald-600">{item.rate}</span>
                    <span className="text-xs text-slate-500 block mt-0.5">{item.min}</span>
                  </div>
                  <ul className="space-y-2 border-t border-slate-200/60 pt-4">
                    {item.details.map((detail, index) => (
                      <li key={index} className="flex items-center space-x-2 text-xs text-slate-650">
                        <Check className="h-4 w-4 text-emerald-600 shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Steuern Sparen Promo */}
          <div className="max-w-3xl mx-auto bg-emerald-50/65 border border-emerald-100 p-6 rounded-3xl mb-20 flex flex-col sm:flex-row items-center gap-6 animate-fade-in">
            <div className="bg-emerald-600 p-3.5 rounded-2xl text-white shadow-2xs">
              <Percent className="h-8 w-8" />
            </div>
            <div>
              <h4 className="font-bold text-emerald-900 text-lg">Steuerlich absetzbar!</h4>
              <p className="text-emerald-800 text-xs leading-relaxed mt-1">
                Wussten Sie schon? Private Reinigungskosten können Sie als &quot;haushaltsnahe Dienstleistungen&quot; in Ihrer Steuererklärung angeben und bis zu 20% (max. 4.000 € pro Jahr) zurückerhalten. Wir stellen Ihnen eine ordentliche Rechnung aus.
              </p>
            </div>
          </div>

          {/* Calculator Wrapper */}
          <div className="pt-8 border-t border-slate-150">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-slate-900">Jetzt Buchung kalkulieren</h2>
              <p className="text-slate-500 text-sm mt-1">Wählen Sie Ihre Optionen im Rechner aus, um direkt online anzufragen.</p>
            </div>
            <BookingCalculator />
          </div>
        </div>
      </section>

      <Footer />
      <CookieBanner />
    </div>
  );
}
