import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

export default function Impressum() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Content Container */}
      <section className="py-32 bg-white flex-grow">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <h1 className="text-3xl font-extrabold text-slate-900 border-b border-slate-100 pb-4">Impressum</h1>
          
          <div className="space-y-4 text-slate-650 text-sm leading-relaxed">
            <div>
              <h3 className="font-bold text-slate-800 text-base mb-1">Angaben gemäß § 5 TMG</h3>
              <p className="font-semibold text-slate-800">Super Stern Reinigungsservice</p>
              <p>Wielandstraße 11a</p>
              <p>10629 Berlin</p>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-base mb-1">Vertreten durch</h3>
              <p>Neshat Muharemi (Geschäftsführung)</p>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-base mb-1">Kontakt</h3>
              <p>Telefon: +49 (0) 176 45365056</p>
              <p>E-Mail: extra.stern@yahoo.com</p>
            </div>

            <div>
              <h3 className="font-bold text-slate-800 text-base mb-1">Steuernummer</h3>
              <p>Steuernummer gemäß § 27 a Umsatzsteuergesetz: 113/450/02804</p>
            </div>

            <hr className="border-slate-100 my-6" />

            <div className="space-y-4">
              <h3 className="font-bold text-slate-800 text-base">Haftungsausschluss (Disclaimer)</h3>
              
              <div className="space-y-2">
                <h4 className="font-bold text-slate-700 text-xs">Haftung für Inhalte</h4>
                <p className="text-xs">
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-slate-700 text-xs">Haftung für Links</h4>
                <p className="text-xs">
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-slate-700 text-xs">Urheberrecht</h4>
                <p className="text-xs">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <CookieBanner />
    </div>
  );
}
