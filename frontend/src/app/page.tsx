"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingCalculator from "@/components/BookingCalculator";
import CookieBanner from "@/components/CookieBanner";
import { Sparkles, Shield, Clock, Award, CheckCircle2, ChevronDown, Star, MessageSquare, ArrowRight } from "lucide-react";

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const features = [
    {
      icon: <Shield className="h-6 w-6 text-amber-500" />,
      title: "Haftpflichtversichert",
      desc: "Voller Schutz für Ihre Räume. Sollte etwas schiefgehen, sind alle Schäden durch unsere Haftpflichtversicherung abgesichert.",
    },
    {
      icon: <Award className="h-6 w-6 text-amber-500" />,
      title: "Geschultes Personal",
      desc: "Unser Team besteht aus festangestellten, gründlich geschulten und zuverlässigen Reinigungskräften.",
    },
    {
      icon: <Clock className="h-6 w-6 text-amber-500" />,
      title: "Flexible Termine",
      desc: "Egal ob wöchentlich, zweiwöchentlich oder einmalig. Wir richten uns ganz nach Ihrem Terminplan.",
    },
    {
      icon: <Sparkles className="h-6 w-6 text-amber-500" />,
      title: "Umweltfreundlich",
      desc: "Wir verwenden auf Wunsch biologisch abbaubare Reinigungsmittel zum Schutz Ihrer Gesundheit und der Umwelt.",
    },
  ];

  const services = [
    {
      title: "Unterhaltsreinigung",
      price: "ab 2.50 € / m²",
      desc: "Regelmäßige Pflege für Ihr Zuhause. Abgestimmt auf Ihre Bedürfnisse.",
    },
    {
      title: "Büroreinigung",
      price: "ab 3.00 € / m²",
      desc: "Sorgen Sie für ein hygienisches Arbeitsumfeld und motivierte Mitarbeiter.",
    },
    {
      title: "Baureinigung",
      price: "ab 5.00 € / m²",
      desc: "Beseitigung von Bauschutt und Feinstaub nach Renovierungen.",
    },
    {
      title: "Glas- und Fensterreinigung",
      price: "ab 4.50 € / m²",
      desc: "Streifenfreie Durchsicht für Fenster, Schaufenster und Glasdächer.",
    },
  ];

  const testimonials = [
    {
      name: "Sabine K.",
      role: "Privatkundin aus Charlottenburg",
      stars: 5,
      comment: "Sehr gründlich und absolut pünktlich! Super Stern reinigt meine Wohnung alle zwei Wochen und ich bin extrem zufrieden.",
    },
    {
      name: "Marcus G.",
      role: "Geschäftsführer, IT-Agentur",
      stars: 5,
      comment: "Büroreinigung läuft absolut reibungslos. Sehr diskret, verlässlich und sauber. Großes Lob an Neshat und sein Team!",
    },
  ];

  const faqs = [
    {
      q: "Wie berechnet sich der Endpreis?",
      a: "Der Endpreis richtet sich nach der Quadratmeterzahl und den gewählten Zusatzleistungen (z. B. Backofenreinigung). Sie können den Preis direkt auf unserer Website berechnen.",
    },
    {
      q: "Muss ich während der Reinigung anwesend sein?",
      a: "Nein, Sie müssen nicht vor Ort sein. Viele Kunden übergeben uns vorab den Schlüssel. Wir garantieren absolute Diskretion und Zuverlässigkeit.",
    },
    {
      q: "Sind die Reinigungsmittel im Preis enthalten?",
      a: "Ja, alle standardmäßigen Reinigungsmittel und professionellen Geräte werden von uns kostenfrei gestellt.",
    },
    {
      q: "Bieten Sie Ihre Leistungen in ganz Berlin an?",
      a: "Ja, wir decken das gesamte Berliner Stadtgebiet ab. Bitte geben Sie bei der Buchung Ihre Postleitzahl zur Überprüfung an.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-36 bg-slate-900 text-white overflow-hidden">
        {/* Background Decorative Gradient Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero text */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/30 px-3 py-1.5 rounded-full text-amber-400 text-sm font-semibold">
                <Sparkles className="h-4 w-4" />
                <span>Professioneller Reinigungsservice Berlin</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                Strahlende Sauberkeit für <span className="text-amber-500">Zuhause & Büro</span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Super Stern ist Ihre Reinigungsfirma in Berlin Charlottenburg und Umgebung. Gründlich, versichert, flexibel und transparent kalkuliert. Buchen Sie Ihren Wunschtermin online in unter 2 Minuten!
              </p>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <a
                  href="#calculator"
                  className="gold-button text-white font-bold text-center py-3.5 px-8 rounded-full text-base"
                >
                  Jetzt Preis berechnen
                </a>
                <Link
                  href="/leistungen"
                  className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold py-3.5 px-8 rounded-full text-center text-base transition-colors"
                >
                  Unsere Leistungen
                </Link>
              </div>

              {/* Stats badges */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800 text-center lg:text-left">
                <div>
                  <span className="block text-2xl sm:text-3xl font-extrabold text-amber-500">100%</span>
                  <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Zufriedenheit</span>
                </div>
                <div>
                  <span className="block text-2xl sm:text-3xl font-extrabold text-amber-500">500+</span>
                  <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Kunden</span>
                </div>
                <div>
                  <span className="block text-2xl sm:text-3xl font-extrabold text-amber-500">Berlin</span>
                  <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Region</span>
                </div>
              </div>
            </div>

            {/* Hero badge / visual placeholder */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="bg-slate-800/80 border border-slate-700 p-8 rounded-3xl shadow-2xl relative w-full max-w-sm">
                <div className="absolute -top-4 -right-4 bg-amber-500 text-white font-bold px-4 py-2 rounded-2xl shadow-lg rotate-12 text-sm flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-white" />
                  <span>Premium</span>
                </div>
                <h3 className="font-bold text-lg text-white mb-4">Unser Qualitätsversprechen</h3>
                <ul className="space-y-3.5">
                  {[
                    "Keine versteckten Anfahrtskosten",
                    "Streng kontrollierte & geschulte Reiniger",
                    "Kostenlose Stornierung bis 24h vorher",
                    "Umsatzsteuerlich absetzbar (haushaltsnah)",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-slate-300 text-sm">
                      <CheckCircle2 className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-slate-900/50 p-4 rounded-2xl mt-6 text-xs text-center border border-slate-700/50 text-slate-400">
                  Neshat Muharemi, Geschäftsführung
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-xs font-bold text-amber-600 uppercase tracking-widest">Ihre Vorteile</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white">
              Warum Kunden Super Stern vertrauen
            </p>
            <p className="text-slate-500 dark:text-slate-400">
              Wir legen höchsten Wert auf Gründlichkeit, Pünktlichkeit und absolute Diskretion bei jedem Einsatz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {features.map((feat, idx) => (
              <div
                key={idx}
                className="bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 rounded-2xl space-y-4 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="bg-amber-100 dark:bg-amber-950/30 p-3 rounded-xl inline-block">
                  {feat.icon}
                </div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">{feat.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Services Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="space-y-3 text-center md:text-left max-w-2xl">
              <h2 className="text-xs font-bold text-amber-600 uppercase tracking-widest">Unsere Leistungen</h2>
              <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
                Professionelle Lösungen für jeden Bedarf
              </p>
            </div>
            <Link
              href="/leistungen"
              className="mt-4 md:mt-0 text-amber-600 hover:text-amber-500 font-bold text-sm flex items-center space-x-1"
            >
              <span>Alle Leistungen anzeigen</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {services.map((srv, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-850 p-6 rounded-2xl flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300 shadow-sm"
              >
                <div className="space-y-3">
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white">{srv.title}</h3>
                  <p className="text-xs font-bold text-amber-600 uppercase">{srv.price}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{srv.desc}</p>
                </div>
                <div className="pt-6">
                  <Link
                    href="/leistungen"
                    className="text-xs text-slate-800 dark:text-slate-300 font-bold hover:underline"
                  >
                    Details &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Booking Section */}
      <section id="calculator" className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <h2 className="text-xs font-bold text-amber-600 uppercase tracking-widest">Kalkulation & Buchen</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white">
              Preis ermitteln & Wunschtermin sichern
            </p>
            <p className="text-slate-500 dark:text-slate-400">
              Passen Sie die Einstellungen auf Ihre Bedürfnisse an. Der berechnete Preis ist unverbindlich und transparent.
            </p>
          </div>

          <BookingCalculator />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-xs font-bold text-amber-600 uppercase tracking-widest">Kundenmeinungen</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              Das sagen unsere Kunden über uns
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((test, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 p-8 rounded-2xl space-y-4 relative shadow-sm"
              >
                <div className="flex space-x-1">
                  {[...Array(test.stars)].map((_, i) => (
                    <Star key={i} className="h-4.5 w-4.5 text-amber-500 fill-amber-500" />
                  ))}
                </div>
                <p className="text-slate-600 dark:text-slate-400 italic text-sm leading-relaxed">
                  &quot;{test.comment}&quot;
                </p>
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center text-xs">
                  <div>
                    <span className="font-bold text-slate-800 dark:text-white block">{test.name}</span>
                    <span className="text-slate-400 mt-0.5 block">{test.role}</span>
                  </div>
                  <MessageSquare className="h-5 w-5 text-amber-500/30" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-xs font-bold text-amber-600 uppercase tracking-widest">Häufige Fragen</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              FAQ - Fragen & Antworten
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full py-4.5 px-6 bg-slate-50 dark:bg-slate-900 flex justify-between items-center text-left hover:bg-slate-100/50 dark:hover:bg-slate-800/50 transition-colors"
                  >
                    <span className="font-bold text-slate-850 dark:text-white text-sm">{faq.q}</span>
                    <ChevronDown
                      className={`h-4 w-4 text-slate-550 transition-transform duration-300 ${
                        isOpen ? "rotate-185 text-amber-500" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="p-6 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
      <CookieBanner />
    </div>
  );
}
