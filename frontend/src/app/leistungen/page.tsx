import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import Link from "next/link";
import { Sparkles, Home, Building, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";

export default function Leistungen() {
  const listItems = [
    {
      title: "Unterhaltsreinigung",
      subtitle: "Regelmäßige Grundpflege für Privat- & Geschäftsräume",
      icon: <Home className="h-8 w-8 text-emerald-600" />,
      desc: "Unsere Unterhaltsreinigung sorgt für dauerhafte Sauberkeit und Hygiene. Wir stimmen Intervalle und Leistungsumfang individuell auf Ihre Bedürfnisse ab.",
      tasks: [
        "Saugen und Wischen aller Bodenflächen",
        "Abstauben von Oberflächen, Möbeln und Regalen",
        "Gründliche Bad- und WC-Sanierung",
        "Reinigung der Küche (Arbeitsplatte, Spüle, Fronten)",
        "Müllentsorgung und Trennung",
      ],
    },
    {
      title: "Büroreinigung",
      subtitle: "Saubere Arbeitsplätze für ein produktives Team",
      icon: <Building className="h-8 w-8 text-emerald-600" />,
      desc: "Ein sauberes Büro hinterlässt Eindruck bei Kunden und steigert das Wohlbefinden Ihrer Mitarbeiter. Wir reinigen diskret außerhalb Ihrer Kernarbeitszeiten.",
      tasks: [
        "Reinigung und Desinfektion von Schreibtischen und Tastaturen",
        "Säuberung von Gemeinschaftsräumen, Teeküchen und Kaffeebereichen",
        "Entleerung aller Papierkörbe und Mülleimer",
        "Reinigung von Sanitäranlagen und Nachfüllen von Verbrauchsmaterial",
        "Bodenpflege (Saugen, Kehren, Feuchtwischen)",
      ],
    },
    {
      title: "Glas- und Fensterreinigung",
      subtitle: "Streifenfreie Sicht für Fenster und Schaufenster",
      icon: <Sparkles className="h-8 w-8 text-emerald-600" />,
      desc: "Ob Schaufenster, Wintergarten, Bürofenster oder private Glasfronten – unser Team sorgt für glasklare Sicht und streifenfreie Ergebnisse inkl. Rahmenreinigung.",
      tasks: [
        "Reinigung von Glasflächen jeder Größe",
        "Säuberung von Fensterrahmen und Fensterbänken",
        "Schaufensterreinigung für Ladengeschäfte",
        "Entfernung hartnäckiger Flecken (Vogelkot, Klebereste)",
        "Reinigung von Glasinnentüren und Trennwänden",
      ],
    },
    {
      title: "Baureinigung",
      subtitle: "Fachgerechte Reinigung nach Neubau oder Renovierung",
      icon: <ShieldCheck className="h-8 w-8 text-emerald-600" />,
      desc: "Nach dem Bau oder Umbau bleibt viel Schmutz zurück. Wir entfernen Bauschutt, Zementschleier und feinen Baustaub, damit Ihr Objekt bezugsfertig wird.",
      tasks: [
        "Beseitigung von Zementschleier, Farb- und Lackspritzern",
        "Tiefenreinigung von Böden, Wänden und Sanitärobjekten",
        "Feinstaubentfernung aus allen Nischen und Fugen",
        "Reinigung aller Fenster und Glasflächen nach dem Einbau",
        "Entsorgung von Restmaterialien und Verpackungen",
      ],
    },
    {
      title: "Umzugsreinigung",
      subtitle: "Sorgenfreie Übergabe für Mieter und Vermieter",
      icon: <Sparkles className="h-8 w-8 text-emerald-600" />,
      desc: "Bei einem Umzug hat man viel zu tun. Überlassen Sie uns die Endreinigung Ihrer alten Wohnung. Wir reinigen nach strengen Standards für eine reibungslose Übergabe.",
      tasks: [
        "Komplette Grundreinigung aller Zimmer",
        "Tiefenreinigung von Küche und Einbaugeräten (Backofen, Kühlschrank)",
        "Entkalkung und Politur von Sanitäranlagen",
        "Reinigung aller Fenster inklusive Rahmen und Rollläden",
        "Entfernung von Spinnweben und Staub auf Leisten/Steckdosen",
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />

      {/* Header Banner */}
      <section className="bg-gradient-to-r from-emerald-50 via-white to-amber-50/60 text-slate-950 pt-32 pb-16 relative border-b border-slate-100">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-3">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 animate-fade-in">Unsere Leistungen</h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm animate-fade-in">
            Erstklassige Reinigungsdienstleistungen in Berlin. Für Privathaushalte und Gewerbebetriebe maßgeschneidert.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 animate-fade-in">
          {listItems.map((item, idx) => (
            <div
              key={idx}
              className="border border-slate-100 bg-slate-50/20 rounded-3xl p-8 shadow-xs hover:shadow-sm transition-shadow grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
            >
              {/* Service Intro */}
              <div className="md:col-span-6 space-y-4">
                <div className="bg-emerald-100 p-3.5 rounded-2xl inline-block">
                  {item.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">{item.title}</h2>
                  <p className="text-sm font-semibold text-emerald-600 mt-1">{item.subtitle}</p>
                </div>
                <p className="text-slate-550 text-sm leading-relaxed">{item.desc}</p>
                <div className="pt-2">
                  <Link
                    href="/preise"
                    className="green-button text-white font-bold py-2.5 px-6 rounded-full text-xs inline-flex items-center space-x-2"
                  >
                    <span>Preis kalkulieren</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

              {/* Checklist */}
              <div className="md:col-span-6 bg-white rounded-2xl p-6 border border-slate-150 shadow-2xs">
                <h3 className="font-bold text-slate-800 text-sm mb-4">Was ist im Service enthalten?</h3>
                <ul className="space-y-3">
                  {item.tasks.map((task, index) => (
                    <li key={index} className="flex items-start space-x-2.5 text-xs text-slate-650">
                      <CheckCircle2 className="h-4.5 w-4.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
      <CookieBanner />
    </div>
  );
}
