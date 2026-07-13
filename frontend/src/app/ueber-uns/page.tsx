import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { CheckCircle2, ShieldCheck, Heart, Sparkles } from "lucide-react";

export default function UeberUns() {
  const values = [
    {
      icon: <ShieldCheck className="h-6 w-6 text-emerald-600" />,
      title: "Zuverlässigkeit",
      desc: "Termine sind bei uns verbindlich. Unser Team kommt pünktlich und arbeitet zügig und gewissenhaft.",
    },
    {
      icon: <Sparkles className="h-6 w-6 text-emerald-600" />,
      title: "Perfektionismus",
      desc: "Erst wenn es glänzt, sind wir zufrieden. Unsere Mitarbeiter reinigen nach strengen Qualitäts-Checklisten.",
    },
    {
      icon: <Heart className="h-6 w-6 text-emerald-600" />,
      title: "Kundenfokus",
      desc: "Ihre Zufriedenheit steht an erster Stelle. Individuelle Reinigungswünsche setzen wir flexibel für Sie um.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />

      {/* Header Banner */}
      <section className="bg-gradient-to-r from-emerald-50 via-white to-amber-50/60 text-slate-950 pt-32 pb-16 relative border-b border-slate-100">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-3">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 animate-fade-in">Über Uns</h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm animate-fade-in">
            Lernen Sie Super Stern und unsere Philosophie kennen. Wir sorgen für glänzende Aussichten in Berlin.
          </p>
        </div>
      </section>

      {/* Story & Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900">Wer wir sind</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Super Stern ist ein etablierter Reinigungsservice mit Sitz in Berlin Charlottenburg (Wielandstraße 11a). Unter der Leitung von Neshat Muharemi betreuen wir Privat- und Geschäftskunden im gesamten Berliner Stadtgebiet.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Unser Ziel ist es, Ihnen durch professionelle Reinigungsdienstleistungen mehr Freizeit und eine gesündere Umgebung zu schenken.
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200/60 p-6 rounded-3xl space-y-4 text-center">
              <div className="h-20 w-20 bg-emerald-600 rounded-full mx-auto flex items-center justify-center text-white font-black text-2xl shadow-md">
                NM
              </div>
              <div>
                <h4 className="font-bold text-slate-800">Neshat Muharemi</h4>
                <p className="text-xs text-emerald-600 font-semibold mt-0.5">Geschäftsführung</p>
              </div>
              <p className="text-xs text-slate-500 italic max-w-xs mx-auto">
                &quot;Bei uns steht Qualität und Fairness an erster Stelle. Sowohl für unsere Kunden, als auch für unsere Mitarbeiter.&quot;
              </p>
            </div>
          </div>

          <hr className="border-slate-100" />

          {/* Our Values */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-slate-900">Unsere Werte</h2>
              <p className="text-slate-500 text-sm mt-1">Das Fundament unserer täglichen Arbeit.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {values.map((v, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-200/60 p-6 rounded-2xl space-y-3 shadow-2xs hover:shadow-xs transition-shadow">
                  <div className="bg-emerald-100 p-2.5 rounded-xl inline-block">{v.icon}</div>
                  <h3 className="font-bold text-slate-800 text-base">{v.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <hr className="border-slate-100" />

          {/* Why choose us detailed check list */}
          <div className="bg-emerald-50/60 border border-emerald-100 text-slate-900 rounded-3xl p-8 space-y-6">
            <h3 className="font-bold text-lg text-center text-slate-850">Warum Sie sich für uns entscheiden sollten</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "100% DSGVO-konforme Datenabwicklung",
                "Ausgebildetes & haftpflichtversichertes Personal",
                "Faire Entlohnung nach Gebäudereinigungs-Tarif",
                "Individuelle Anpassung aller Reinigungspläne",
                "Flexible Online-Buchung mit Festpreisgarantie",
                "Zuverlässiger Ansprechpartner bei Fragen",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-2 text-slate-700 text-xs">
                  <CheckCircle2 className="h-4.5 w-4.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <CookieBanner />
    </div>
  );
}
