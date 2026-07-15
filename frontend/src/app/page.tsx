"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingCalculator from "@/components/BookingCalculator";
import CookieBanner from "@/components/CookieBanner";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import { Sparkles, Shield, Clock, Award, CheckCircle2, ChevronDown, Star, ArrowRight } from "lucide-react";

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const features = [
    {
      icon: <Shield className="h-6 w-6 text-emerald-600" />,
      bg: "bg-emerald-100/70",
      title: "Haftpflichtversichert",
      desc: "Voller Schutz für Ihre Räume. Sollte etwas schiefgehen, sind alle Schäden durch unsere Haftpflichtversicherung abgesichert.",
    },
    {
      icon: <Award className="h-6 w-6 text-emerald-600" />,
      bg: "bg-emerald-100/70",
      title: "Geschultes Personal",
      desc: "Unser Team besteht aus festangestellten, gründlich geschulten und zuverlässigen Reinigungskräften.",
    },
    {
      icon: <Clock className="h-6 w-6 text-emerald-600" />,
      bg: "bg-emerald-100/70",
      title: "Flexible Termine",
      desc: "Egal ob wöchentlich, zweiwöchentlich oder einmalig. Wir richten uns ganz nach Ihrem Terminplan.",
    },
    {
      icon: <Sparkles className="h-6 w-6 text-emerald-600" />,
      bg: "bg-emerald-100/70",
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
    {
      name: "Anna L.",
      role: "Privatkundin aus Charlottenburg",
      stars: 5,
      comment: "Top-Qualität! Die Fensterreinigung war brillant. Alle Fenster streifenfrei und sauber. Sehr empfehlenswert und faire Preise.",
    },
    {
      name: "Thomas R.",
      role: "Geschäftsführer, Zahnarztpraxis",
      stars: 5,
      comment: "Die Praxis sieht immer impeccabel aus. Das Team ist zuverlässig, diskret und arbeitet effizient. Wir sind sehr glücklich mit dem Service.",
    },
    {
      name: "Petra M.",
      role: "Privatkundin aus Spandau",
      stars: 5,
      comment: "Nach der Renovierung war das Haus völlig verdreckt. Super Stern hat alles perfekt gereinigt. Außerdem sind die Kosten transparent.",
    },
    {
      name: "Klaus W.",
      role: "Geschäftsführer, Bürogebäude",
      stars: 5,
      comment: "Zuverlässig seit über 2 Jahren! Die wöchentliche Reinigung läuft immer pünktlich. Unsere Mitarbeiter fühlen sich wohl im sauberen Büro.",
    },
    {
      name: "Julia S.",
      role: "Privatkundin aus Wilmersdorf",
      stars: 5,
      comment: "Ich bin berufstätig und froh, dass ich Super Stern vertraue. Sie kümmern sich um alles - Wohnung, Fenster, alles perfekt!",
    },
    {
      name: "Frank D.",
      role: "Projektleiter, Bauunternehmen",
      stars: 5,
      comment: "Baureinigung war absolut professionell. Alle Räume besenrein hergegeben. Das ganze Team arbeitet schnell und gewissenhaft.",
    },
    {
      name: "Elena K.",
      role: "Privatkundin aus Tempelhof",
      stars: 5,
      comment: "Beim Umzug war Super Stern mein Retter! Schnell, gründlich und die Wohnung blitzsauber zurückgelassen. Danke!",
    },
    {
      name: "Stefan B.",
      role: "Schullleiter, Gymnasium",
      stars: 5,
      comment: "Die Schulreinigung ist impeccabel. Die Klassenzimmer glänzen täglich. Ein großes Vertrauen in Super Stern!",
    },
    {
      name: "Heidi O.",
      role: "Privatkundin aus Charlottenburg",
      stars: 5,
      comment: "Endlich Zeit für wichtigere Dinge! Super Stern erledigt alles zuverlässig. Sehr empfehlenswert!",
    },
    {
      name: "Robert G.",
      role: "Inhaber, Einzelhandelskette",
      stars: 5,
      comment: "Unsere Geschäftsräume sind immer tadellos. Das schafft einen professionellen Eindruck. Top Service, faire Preise!",
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
  <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900">
    <Navbar />

    {/* Hero Section */}
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-36 bg-gradient-to-br from-emerald-50/80 via-white to-amber-50/70 text-slate-950 overflow-hidden border-b border-slate-100">
      {/* Background Decorative Gradient Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero text (Left Side) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-emerald-100 border border-emerald-200 px-3 py-1.5 rounded-full text-emerald-700 text-xs font-bold shadow-2xs">
              <Sparkles className="h-4 w-4" />
              <span>Professioneller Reinigungsservice Berlin</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-slate-900">
              Strahlende Sauberkeit für <span className="text-emerald-600">Zuhause</span> &amp; <span className="text-amber-500">Büro</span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Super Stern ist Ihre Reinigungsfirma in Berlin Charlottenburg und Umgebung. Gründlich, versichert, flexibel und transparent kalkuliert. Buchen Sie Ihren Wunschtermin online in unter 2 Minuten!
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a
                href="#calculator"
                className="green-button text-white font-bold text-center py-3.5 px-8 rounded-full text-base shadow-sm transition-transform hover:scale-[1.02]"
              >
                Jetzt Preis berechnen
              </a>
              <Link
                href="/leistungen"
                className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-bold py-3.5 px-8 rounded-full text-center text-base transition-all hover:scale-[1.02]"
              >
                Unsere Leistungen
              </Link>
            </div>

            {/* Stats badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200 text-center lg:text-left">
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-emerald-600">100%</span>
                <span className="text-xs text-slate-550 font-semibold uppercase tracking-wider">Zufriedenheit</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-emerald-600">500+</span>
                <span className="text-xs text-slate-550 font-semibold uppercase tracking-wider">Kunden</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-amber-500">Berlin</span>
                <span className="text-xs text-slate-550 font-semibold uppercase tracking-wider">Region</span>
              </div>
            </div>
          </div>

          {/* Video & Info Card (Right Side) */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div className="bg-white border border-slate-200 rounded-3xl shadow-xl overflow-hidden relative w-full max-w-md transition-all hover:shadow-2xl">
              
              {/* Premium Badge */}
              <div className="absolute top-4 right-4 z-20 bg-emerald-500 text-white font-bold px-4 py-2 rounded-2xl shadow-lg rotate-6 text-sm flex items-center space-x-1">
                <Star className="h-4 w-4 fill-white" />
                <span>Premium</span>
              </div>

              {/* Video Container */}
              <div className="relative aspect-video w-full bg-slate-900 overflow-hidden group">
                <video
                  className="w-full h-full object-cover"
                  src="https://res.cloudinary.com/dh3eueciv/video/upload/v1784071675/supersternvideo_wydx3j.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent pointer-events-none"></div>
              </div>

              {/* Quality Guarantee Content */}
              <div className="p-6 sm:p-8">
                <h3 className="font-bold text-lg text-slate-900 mb-4">Unser Qualitätsversprechen</h3>
                
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2.5 text-slate-600 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Keine versteckten Anfahrtskosten</span>
                  </li>
                  <li className="flex items-start space-x-2.5 text-slate-600 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Streng kontrollierte &amp; geschulte Reiniger</span>
                  </li>
                  <li className="flex items-start space-x-2.5 text-slate-600 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Kostenlose Stornierung bis 24h vorher</span>
                  </li>
                  <li className="flex items-start space-x-2.5 text-slate-600 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Umsatzsteuerlich absetzbar (haushaltsnah)</span>
                  </li>
                </ul>

                <div className="bg-emerald-50/50 p-3.5 rounded-2xl mt-6 text-xs text-center border border-emerald-100/80 text-emerald-800 font-medium">
                  Neshat Muharemi, Geschäftsführung
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Ihre Vorteile</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-slate-950">
              Warum Kunden Super Stern vertrauen
            </p>
            <p className="text-slate-550 leading-relaxed text-sm">
              Wir legen höchsten Wert auf Gründlichkeit, Pünktlichkeit und absolute Diskretion bei jedem Einsatz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {features.map((feat, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200/60 p-6 rounded-2xl space-y-4 hover:shadow-md transition-shadow duration-300"
              >
                <div className={`${feat.bg} p-3 rounded-xl inline-block`}>
                  {feat.icon}
                </div>
                <h3 className="font-bold text-lg text-slate-900">{feat.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Services Section */}
      <section className="py-20 bg-emerald-50/30 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="space-y-3 text-center md:text-left max-w-2xl">
              <h2 className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Unsere Leistungen</h2>
              <p className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                Professionelle Lösungen für jeden Bedarf
              </p>
            </div>
            <Link
              href="/leistungen"
              className="mt-4 md:mt-0 text-emerald-600 hover:text-emerald-500 font-bold text-sm flex items-center space-x-1"
            >
              <span>Alle Leistungen anzeigen</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {services.map((srv, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 p-6 rounded-2xl flex flex-col justify-between hover:border-emerald-400 hover:shadow-md hover:scale-[1.02] transition-all duration-300 shadow-sm"
              >
                <div className="space-y-3">
                  <h3 className="font-bold text-lg text-slate-900">{srv.title}</h3>
                  <p className="text-xs font-bold text-emerald-600 uppercase">{srv.price}</p>
                  <p className="text-xs text-slate-500 leading-relaxed">{srv.desc}</p>
                </div>
                <div className="pt-6">
                  <Link
                    href="/leistungen"
                    className="text-xs text-slate-700 hover:text-emerald-600 font-bold hover:underline"
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
      <section id="calculator" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <h2 className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Kalkulation & Buchen</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-slate-950">
              Preis ermitteln & Wunschtermin sichern
            </p>
            <p className="text-slate-500">
              Passen Sie die Einstellungen auf Ihre Bedürfnisse an. Der berechnete Preis ist unverbindlich und transparent.
            </p>
          </div>

          <BookingCalculator />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Kundenmeinungen</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Das sagen unsere Kunden über uns
            </p>
          </div>

          <TestimonialsCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Häufige Fragen</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              FAQ - Fragen & Antworten
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="border border-slate-200 rounded-2xl overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full py-4.5 px-6 bg-slate-50 flex justify-between items-center text-left hover:bg-slate-100/50 transition-colors"
                  >
                    <span className="font-bold text-slate-800 text-sm">{faq.q}</span>
                    <ChevronDown
                      className={`h-4 w-4 text-slate-500 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-emerald-600" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="p-6 bg-white border-t border-slate-100 text-slate-600 text-sm leading-relaxed">
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
