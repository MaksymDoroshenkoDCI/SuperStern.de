"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";

export default function Kontakt() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    
    // Process form (mock submission in UI)
    setSubmitted(true);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Header Banner */}
      <section className="bg-slate-900 text-white pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-3">
          <h1 className="text-4xl font-extrabold tracking-tight">Kontakt</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm">
            Sie haben Fragen zu unseren Services oder wünschen ein individuelles Angebot? Wir helfen Ihnen gerne weiter.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Info Cards */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Direkter Kontakt</h2>

              <div className="space-y-4">
                {/* Phone */}
                <div className="bg-slate-50 border border-slate-100 p-5 rounded-2xl flex items-start space-x-4">
                  <div className="bg-amber-100 p-2.5 rounded-xl text-amber-600">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">Telefon (Mobil)</h4>
                    <a href="tel:+4917645365056" className="text-slate-500 hover:text-amber-500 text-xs mt-1 block">
                      +49 (0) 176 45365056
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-slate-50 border border-slate-100 p-5 rounded-2xl flex items-start space-x-4">
                  <div className="bg-amber-100 p-2.5 rounded-xl text-amber-600">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">E-Mail Adresse</h4>
                    <a href="mailto:extra.stern@yahoo.com" className="text-slate-500 hover:text-amber-500 text-xs mt-1 block">
                      extra.stern@yahoo.com
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="bg-slate-50 border border-slate-100 p-5 rounded-2xl flex items-start space-x-4">
                  <div className="bg-amber-100 p-2.5 rounded-xl text-amber-600">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">Standort</h4>
                    <span className="text-slate-500 text-xs mt-1 block">
                      Wielandstraße 11a, 10629 Berlin
                    </span>
                  </div>
                </div>

                {/* Hours */}
                <div className="bg-slate-50 border border-slate-100 p-5 rounded-2xl flex items-start space-x-4">
                  <div className="bg-amber-100 p-2.5 rounded-xl text-amber-600">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">Bürozeiten</h4>
                    <span className="text-slate-500 text-xs mt-1 block">
                      Montag – Samstag: 08:00 – 18:00 Uhr
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7 bg-slate-50 border border-slate-150 p-8 rounded-3xl">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Nachricht senden</h2>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-100 text-emerald-700 p-6 rounded-2xl space-y-3 text-center">
                  <CheckCircle2 className="h-10 w-10 text-emerald-600 mx-auto" />
                  <h4 className="font-bold">Nachricht empfangen!</h4>
                  <p className="text-xs">
                    Vielen Dank für Ihre Anfrage. Wir setzen uns schnellstmöglich mit Ihnen in Verbindung.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-amber-600 underline font-semibold mt-2 hover:text-amber-500"
                  >
                    Weitere Nachricht senden
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 block">Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Neshat Muharemi"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-white px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 block">E-Mail</label>
                    <input
                      type="email"
                      required
                      placeholder="name@beispiel.de"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 block">Ihre Nachricht</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Guten Tag, ich interessiere mich für eine Büroreinigung..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-white px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-amber-500 resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="gold-button w-full text-white font-bold py-3.5 px-6 rounded-full flex items-center justify-center space-x-2 text-sm shadow-md"
                  >
                    <span>Nachricht absenden</span>
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Interactive Google Map iframe */}
          <div className="mt-16 border border-slate-200 rounded-3xl overflow-hidden shadow-sm h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.8183187216666!2d13.307908377196024!3d52.500518972057995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a850da22aa98bf%3A0xe54d9b23267b2d56!2sWielandstra%C3%9Fe%2011a%2C%2010629%20Berlin!5e0!3m2!1sde!2sde!4v1719245100000!5m2!1sde!2sde"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
      <CookieBanner />
    </div>
  );
}
