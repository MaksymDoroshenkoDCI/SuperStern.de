"use client";

import { useState } from "react";
import axios from "axios";
import { Calculator, Calendar, User, Phone, Mail, MapPin, Sparkles, CheckCircle2, AlertTriangle, ArrowRight, ArrowLeft } from "lucide-react";

type ServiceType = "Unterhaltsreinigung" | "Büroreinigung" | "Baureinigung" | "Glas- und Fensterreinigung" | "Umzugsreinigung";

interface Addon {
  id: string;
  name: string;
  price: number;
}

const SERVICES: Record<ServiceType, { label: string; rate: number; minPrice: number; desc: string }> = {
  Unterhaltsreinigung: {
    label: "Unterhaltsreinigung (Regelmäßig)",
    rate: 2.50,
    minPrice: 50.00,
    desc: "Boden wischen, Staub saugen/wischen, Bad- und Küchenreinigung.",
  },
  Büroreinigung: {
    label: "Büroreinigung",
    rate: 3.00,
    minPrice: 80.00,
    desc: "Reinigung von Arbeitsplätzen, Konferenzräumen und Sozialflächen.",
  },
  Baureinigung: {
    label: "Baureinigung (Nach Renovierung)",
    rate: 5.00,
    minPrice: 150.00,
    desc: "Beseitigung von Baustaub, Farbresten und Zementschleier.",
  },
  "Glas- und Fensterreinigung": {
    label: "Glas- und Fensterreinigung",
    rate: 4.50,
    minPrice: 60.00,
    desc: "Streifenfreies Putzen aller Glasflächen inklusive Rahmen.",
  },
  Umzugsreinigung: {
    label: "Umzugsreinigung (Ein-/Auszug)",
    rate: 4.00,
    minPrice: 120.00,
    desc: "Besenreine und tiefgehende Übergabereinigung für Vermieter.",
  },
};

const ADDONS: Addon[] = [
  { id: "oven", name: "Backofenreinigung", price: 40.00 },
  { id: "fridge", name: "Kühlschrankreinigung", price: 30.00 },
  { id: "balcony", name: "Balkonreinigung", price: 35.00 },
  { id: "ironing", name: "Bügelservice (1 Std.)", price: 30.00 },
];

export default function BookingCalculator() {
  const [step, setStep] = useState(1);
  const [service, setService] = useState<ServiceType>("Unterhaltsreinigung");
  const [spaceSize, setSpaceSize] = useState<number>(60);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  
  // Contact and appointment state
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [address, setAddress] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [bookingTime, setBookingTime] = useState("09:00");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<boolean | null>(null);
  const [errorMsg, setErrorMsg] = useState("");

  // Live Price Calculation
  const getBasePrice = () => {
    const s = SERVICES[service];
    const calc = spaceSize * s.rate;
    return Math.max(calc, s.minPrice);
  };

  const getAddonsPrice = () => {
    return ADDONS.filter(a => selectedAddons.includes(a.id)).reduce((acc, curr) => acc + curr.price, 0);
  };

  const getTotalPrice = () => {
    return getBasePrice() + getAddonsPrice();
  };

  const handleAddonToggle = (id: string) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter(item => item !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  const validateBerlinPlz = (addr: string): boolean => {
    const plzRegex = /\b\d{5}\b/g;
    const matches = addr.match(plzRegex);
    if (!matches) return false;
    return matches.some(plz => {
      const code = parseInt(plz, 10);
      return code >= 10000 && code <= 14199;
    });
  };

  const handleNextStep = () => {
    if (step === 1) {
      setStep(2);
    }
  };

  const handlePrevStep = () => {
    if (step === 2) {
      setStep(1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!clientName || !clientEmail || !clientPhone || !address || !bookingDate || !bookingTime) {
      setErrorMsg("Bitte füllen Sie alle Felder aus.");
      return;
    }

    if (!validateBerlinPlz(address)) {
      setErrorMsg("Wir bieten unseren Service aktuell nur in Berlin an (PLZ 10000 - 14199). Bitte geben Sie eine Adresse in Berlin an.");
      return;
    }

    setLoading(true);

    try {
      const dateTime = `${bookingDate}T${bookingTime}:00`;
      
      const payload = {
        clientName,
        clientEmail,
        clientPhone,
        address,
        serviceType: service,
        spaceSize,
        totalPrice: getTotalPrice(),
        bookingDate: dateTime,
      };

      const backendUrl = "/api";
      await axios.post(`${backendUrl}/orders`, payload);
      setSuccess(true);
      setStep(3);
    } catch (err: any) {
      console.error(err);
      const msg = err.response?.data?.message || "Fehler beim Absenden der Buchung. Versuchen Sie es später erneut.";
      setErrorMsg(msg);
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setStep(1);
    setSelectedAddons([]);
    setClientName("");
    setClientEmail("");
    setClientPhone("");
    setAddress("");
    setBookingDate("");
    setBookingTime("09:00");
    setSuccess(null);
    setErrorMsg("");
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-150 overflow-hidden">
      {/* Header bar */}
      <div className="bg-emerald-600 py-6 px-8 text-white flex justify-between items-center border-b border-emerald-700/20">
        <div className="flex items-center space-x-3">
          <Calculator className="h-6 w-6 text-white" />
          <h3 className="font-extrabold text-xl tracking-wide text-white">Express-Rechner & Buchung</h3>
        </div>
        <div className="flex space-x-2 text-xs">
          <span className={`h-2.5 w-8 rounded-full ${step >= 1 ? "bg-white" : "bg-white/30"}`}></span>
          <span className={`h-2.5 w-8 rounded-full ${step >= 2 ? "bg-white" : "bg-white/30"}`}></span>
          <span className={`h-2.5 w-8 rounded-full ${step === 3 ? "bg-white" : "bg-white/30"}`}></span>
        </div>
      </div>

      <div className="p-8">
        {step === 1 && (
          <div className="space-y-6 animate-fade-in">
            {/* Step 1 Content: Specifications */}
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-3">
                1. Art der Reinigung wählen:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {Object.keys(SERVICES).map((key) => {
                  const sType = key as ServiceType;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setService(sType)}
                      className={`p-4 rounded-2xl border-2 text-left transition-all duration-200 ${
                        service === sType
                          ? "border-emerald-600 bg-emerald-50/40 text-emerald-800 shadow-2xs"
                          : "border-slate-200 text-slate-700 hover:border-emerald-200 hover:bg-slate-50/30"
                      }`}
                    >
                      <span className="font-bold block text-sm">
                        {SERVICES[sType].label}
                      </span>
                      <span className="text-xs text-slate-500 mt-1 block">
                        {SERVICES[sType].desc}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Square Meters Input */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-150">
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-bold text-slate-750">
                  2. Fläche der Räumlichkeiten:
                </label>
                <span className="bg-emerald-600 text-white font-extrabold text-lg px-4 py-1.5 rounded-full">
                  {spaceSize} m²
                </span>
              </div>
              <input
                type="range"
                min="20"
                max="500"
                step="5"
                value={spaceSize}
                onChange={(e) => setSpaceSize(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-650"
              />
              <div className="flex justify-between text-xs text-slate-400 mt-2">
                <span>20 m²</span>
                <span>250 m²</span>
                <span>500 m²</span>
              </div>
            </div>

            {/* Add-ons Selection */}
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-3">
                3. Zusatzleistungen (Optional):
              </label>
              <div className="grid grid-cols-2 gap-3">
                {ADDONS.map((addon) => {
                  const isSelected = selectedAddons.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      type="button"
                      onClick={() => handleAddonToggle(addon.id)}
                      className={`p-3.5 rounded-xl border text-left flex justify-between items-center transition-all ${
                        isSelected
                          ? "border-emerald-500 bg-emerald-50/40 text-emerald-700"
                          : "border-slate-200 text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      <span className="text-sm font-semibold">{addon.name}</span>
                      <span className="text-xs font-bold text-emerald-650">
                        + €{addon.price}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Live Pricing Footer */}
            <div className="border-t border-slate-150 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-center sm:text-left">
                <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold block">Geschätzter Gesamtpreis</span>
                <span className="text-3xl font-black text-slate-850">
                  €{getTotalPrice().toFixed(2)}
                </span>
                <span className="text-xs text-slate-400 block mt-0.5">Inkl. MwSt., Anfahrt in Berlin</span>
              </div>
              <button
                type="button"
                onClick={handleNextStep}
                className="green-button w-full sm:w-auto text-white font-bold py-3 px-8 rounded-full flex items-center justify-center space-x-2 shadow-sm"
              >
                <span>Buchungsdetails eingeben</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <form onSubmit={handleSubmit} className="space-y-5 animate-fade-in">
            {/* Step 2 Content: Booking Info */}
            <h4 className="font-bold text-slate-800 text-base mb-4 flex items-center">
              <Sparkles className="h-5 w-5 text-emerald-600 mr-2" />
              Kontakt- und Termindetails angeben
            </h4>

            {errorMsg && (
              <div className="bg-rose-50 text-rose-600 border border-rose-100 p-4 rounded-xl flex items-center space-x-3 text-sm animate-fade-in">
                <AlertTriangle className="h-5 w-5 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-600 block">Name, Vorname</label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-slate-405" />
                  <input
                    type="text"
                    required
                    placeholder="Neshat Muharemi"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-transparent text-sm focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-600 block">E-Mail Adresse</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-405" />
                  <input
                    type="email"
                    required
                    placeholder="name@beispiel.de"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-transparent text-sm focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-600 block">Telefonnummer</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-4 w-4 text-slate-405" />
                  <input
                    type="tel"
                    required
                    placeholder="+49 176 45365056"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-transparent text-sm focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-600 block">Adresse & PLZ in Berlin</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-slate-405" />
                  <input
                    type="text"
                    required
                    placeholder="Wielandstraße 11a, 10629 Berlin"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-transparent text-sm focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-600 block">Wunschtermin Datum</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-4 w-4 text-slate-405" />
                  <input
                    type="date"
                    required
                    value={bookingDate}
                    onChange={(e) => setBookingDate(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-transparent text-sm focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-600 block">Uhrzeit</label>
                <input
                  type="time"
                  required
                  value={bookingTime}
                  onChange={(e) => setBookingTime(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-transparent text-sm focus:outline-none focus:border-emerald-500"
                />
              </div>
            </div>

            {/* Selected Booking Summary */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-150 flex justify-between items-center text-xs mt-4">
              <div>
                <span className="font-semibold text-slate-500 block">Zusammenfassung:</span>
                <span className="font-bold text-slate-800">
                  {SERVICES[service].label} | {spaceSize} m² {selectedAddons.length > 0 && `(+ ${selectedAddons.length} Extralautungen)`}
                </span>
              </div>
              <div className="text-right">
                <span className="font-semibold text-slate-500 block">Gesamt:</span>
                <span className="font-black text-emerald-650 text-base">
                  €{getTotalPrice().toFixed(2)}
                </span>
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="flex space-x-3 pt-4 border-t border-slate-150">
              <button
                type="button"
                onClick={handlePrevStep}
                disabled={loading}
                className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 px-6 rounded-full flex items-center justify-center space-x-2"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Zurück</span>
              </button>

              <button
                type="submit"
                disabled={loading}
                className="flex-[2] green-button text-white font-bold py-3 px-6 rounded-full flex items-center justify-center space-x-2 disabled:opacity-50 shadow-sm"
              >
                {loading ? (
                  <span>Wird übermittelt...</span>
                ) : (
                  <>
                    <span>Kostenpflichtig Buchen</span>
                    <CheckCircle2 className="h-4 w-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}

        {step === 3 && (
          <div className="text-center py-10 space-y-6 animate-fade-in">
            {success ? (
              <>
                <div className="mx-auto bg-emerald-100 p-4 rounded-full w-20 h-20 flex items-center justify-center">
                  <CheckCircle2 className="h-12 w-12 text-emerald-600" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-extrabold text-2xl text-slate-850">Vielen Dank für Ihre Buchung!</h4>
                  <p className="text-sm text-slate-500 max-w-md mx-auto">
                    Wir haben Ihre Buchungsanfrage erfolgreich erhalten. Eine Bestätigungs-E-Mail wurde an <strong>{clientEmail}</strong> und an das Team von <strong>Super Stern</strong> gesendet.
                  </p>
                </div>
                <button
                  onClick={resetForm}
                  className="green-button text-white font-bold py-3 px-8 rounded-full"
                >
                  Neue Buchung starten
                </button>
              </>
            ) : (
              <>
                <div className="mx-auto bg-rose-100 p-4 rounded-full w-20 h-20 flex items-center justify-center">
                  <AlertTriangle className="h-12 w-12 text-rose-600" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-extrabold text-2xl text-slate-850">Hoppla! Etwas lief schief.</h4>
                  <p className="text-sm text-slate-500 max-w-md mx-auto">
                    {errorMsg || "Wir konnten Ihre Buchung nicht absenden. Bitte prüfen Sie Ihre Angaben oder versuchen Sie es später noch einmal."}
                  </p>
                </div>
                <div className="flex space-x-3 justify-center">
                  <button
                    onClick={() => setStep(2)}
                    className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 px-6 rounded-full"
                  >
                    Angaben bearbeiten
                  </button>
                  <button
                    onClick={resetForm}
                    className="green-button text-white font-bold py-3 px-6 rounded-full"
                  >
                    Zurück zum Rechner
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
