import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

export default function Datenschutz() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Content Container */}
      <section className="py-32 bg-white flex-grow">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <h1 className="text-3xl font-extrabold text-slate-900 border-b border-slate-100 pb-4">Datenschutzerklärung</h1>
          
          <div className="space-y-6 text-slate-650 text-sm leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-slate-800 mb-2">1. Datenschutz auf einen Blick</h2>
              <h3 className="font-semibold text-slate-700 mt-2 mb-1">Allgemeine Hinweise</h3>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-800 mb-2">2. Verantwortliche Stelle</h2>
              <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 mt-2 text-xs">
                <p className="font-bold">Super Stern Reinigungsservice</p>
                <p>Neshat Muharemi</p>
                <p>Wielandstraße 11a, 10629 Berlin</p>
                <p>Telefon: +49 (0) 176 45365056</p>
                <p>E-Mail: extra.stern@yahoo.com</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-800 mb-2">3. Datenerfassung auf unserer Website</h2>
              <h3 className="font-semibold text-slate-700 mt-2 mb-1">Buchungsformular und Kontaktformular</h3>
              <p>
                Wenn Sie uns per Kontaktformular oder Buchungsformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
              <p className="mt-2">
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) falls diese abgefragt wurde.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-800 mb-2">4. Welche Rechte haben Sie bezüglich Ihrer Daten?</h2>
              <p>
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-800 mb-2">5. Cookies</h2>
              <p>
                Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind kleine Datenpakete und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies werden nach Ende Ihres Besuchs automatisch gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese selbst löschen oder eine automatische Löschung durch Ihren Webbrowser erfolgt.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <CookieBanner />
    </div>
  );
}
