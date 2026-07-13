"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { Star, ShieldAlert, Key, LogOut, Loader2, RefreshCw, Check, Clock, CheckCircle2, XCircle, Search, Mail, Phone, MapPin } from "lucide-react";

interface Order {
  id: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  address: string;
  serviceType: string;
  spaceSize: number;
  totalPrice: number;
  bookingDate: string;
  status: "PENDING" | "CONFIRMED" | "COMPLETED" | "CANCELLED";
  createdAt: string;
}

export default function AdminPage() {
  const [token, setToken] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  // Dashboard states
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(false);
  const [authError, setAuthError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [setupMode, setSetupMode] = useState(false);
  const [setupSuccess, setSetupSuccess] = useState("");

  const backendUrl = "/api";

  useEffect(() => {
    const savedToken = localStorage.getItem("super_stern_admin_token");
    if (savedToken) {
      setToken(savedToken);
    }
  }, []);

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  const fetchOrders = async () => {
    setLoading(true);
    setAuthError("");
    try {
      const res = await axios.get(`${backendUrl}/orders`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setOrders(res.data);
    } catch (err: any) {
      console.error(err);
      if (err.response?.status === 401) {
        handleLogout();
        setAuthError("Sitzung abgelaufen. Bitte erneut anmelden.");
      } else {
        setAuthError("Fehler beim Abrufen der Bestellungen.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError("");
    setLoading(true);
    try {
      const res = await axios.post(`${backendUrl}/auth/login`, { email, password });
      const accessToken = res.data.access_token;
      localStorage.setItem("super_stern_admin_token", accessToken);
      setToken(accessToken);
    } catch (err: any) {
      console.error(err);
      setAuthError(err.response?.data?.message || "Anmeldung fehlgeschlagen. Überprüfen Sie Ihre Daten.");
    } finally {
      setLoading(false);
    }
  };

  const handleSetupAdmin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError("");
    setSetupSuccess("");
    setLoading(true);
    try {
      await axios.post(`${backendUrl}/auth/setup-admin`, { email, password });
      setSetupSuccess("Admin-Account erfolgreich erstellt! Sie können sich jetzt anmelden.");
      setSetupMode(false);
    } catch (err: any) {
      console.error(err);
      setAuthError(err.response?.data?.message || "Erstellung fehlgeschlagen. Gibt es bereits einen Admin?");
    } finally {
      setLoading(false);
    }
  };

  const handleStatusUpdate = async (id: string, newStatus: string) => {
    try {
      await axios.patch(
        `${backendUrl}/orders/${id}/status`,
        { status: newStatus },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setOrders(
        orders.map((o) => (o.id === id ? { ...o, status: newStatus as any } : o))
      );
    } catch (err) {
      console.error(err);
      alert("Fehler beim Aktualisieren des Status.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("super_stern_admin_token");
    setToken(null);
    setOrders([]);
  };

  // Filter & Search
  const filteredOrders = orders.filter((o) => {
    const matchesSearch =
      o.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      o.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      o.serviceType.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === "ALL" || o.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "PENDING":
        return <span className="bg-amber-100 text-amber-800 text-xs px-2.5 py-1 rounded-full font-bold inline-flex items-center"><Clock className="h-3 w-3 mr-1" /> Ausstehend</span>;
      case "CONFIRMED":
        return <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-1 rounded-full font-bold inline-flex items-center"><Check className="h-3 w-3 mr-1" /> Bestätigt</span>;
      case "COMPLETED":
        return <span className="bg-emerald-100 text-emerald-800 text-xs px-2.5 py-1 rounded-full font-bold inline-flex items-center"><CheckCircle2 className="h-3 w-3 mr-1" /> Abgeschlossen</span>;
      case "CANCELLED":
        return <span className="bg-rose-100 text-rose-800 text-xs px-2.5 py-1 rounded-full font-bold inline-flex items-center"><XCircle className="h-3 w-3 mr-1" /> Storniert</span>;
      default:
        return null;
    }
  };

  if (!token) {
    // LOGIN PANEL
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col justify-center items-center px-4 relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="w-full max-w-md bg-white border border-slate-200 rounded-3xl p-8 shadow-xl space-y-6 animate-fade-in">
          <div className="text-center space-y-3">
            <div className="relative w-12 h-12 mx-auto">
              <Image
                src="/logo.png"
                alt="Super Stern Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <h2 className="text-2xl font-black tracking-wider text-slate-800">
              SUPER<span className="text-amber-500">STERN</span> <span className="text-xs text-slate-400 font-mono tracking-widest block mt-0.5">ADMIN</span>
            </h2>
            <p className="text-xs text-slate-500">Verwaltungsportal für Reinigungsservice</p>
          </div>

          {authError && (
            <div className="bg-rose-50 text-rose-600 border border-rose-100 p-4 rounded-xl text-xs flex items-center space-x-2 animate-fade-in">
              <ShieldAlert className="h-5 w-5 shrink-0" />
              <span>{authError}</span>
            </div>
          )}

          {setupSuccess && (
            <div className="bg-emerald-50 text-emerald-700 border border-emerald-100 p-4 rounded-xl text-xs flex items-center space-x-2 animate-fade-in">
              <CheckCircle2 className="h-5 w-5 shrink-0" />
              <span>{setupSuccess}</span>
            </div>
          )}

          <form onSubmit={setupMode ? handleSetupAdmin : handleLogin} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 block">E-Mail</label>
              <input
                type="email"
                required
                placeholder="admin@superstern.de"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 block">Passwort</label>
              <div className="relative">
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-emerald-500"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="green-button w-full text-white font-bold py-3.5 rounded-full flex items-center justify-center space-x-2 text-sm shadow-md disabled:opacity-50"
            >
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <>
                  <span>{setupMode ? "Registrieren" : "Anmelden"}</span>
                  <Key className="h-4 w-4" />
                </>
              )}
            </button>
          </form>

          <div className="text-center pt-2">
            <button
              onClick={() => {
                setSetupMode(!setupMode);
                setAuthError("");
                setSetupSuccess("");
              }}
              className="text-xs text-slate-500 hover:text-emerald-600 underline font-medium"
            >
              {setupMode ? "Zurück zum Login" : "Admin-Erstkonto einrichten?"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ADMIN DASHBOARD
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      {/* Top Header */}
      <header className="bg-white border-b border-slate-200 py-3.5 px-6 flex justify-between items-center shadow-xs">
        <div className="flex items-center space-x-2.5">
          <div className="relative w-8 h-8">
            <Image src="/logo.png" alt="Super Stern Logo" fill className="object-contain" />
          </div>
          <span className="font-extrabold text-lg tracking-wider text-slate-800">
            SUPER<span className="text-amber-500">STERN</span>
          </span>
          <span className="bg-emerald-50 text-emerald-700 text-2xs px-2 py-0.5 rounded-md font-mono font-bold uppercase tracking-widest ml-2">Admin</span>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={fetchOrders}
            disabled={loading}
            className="p-2 hover:bg-slate-100 rounded-full text-slate-500 transition-colors"
            title="Aktualisieren"
          >
            <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin text-emerald-600" : ""}`} />
          </button>
          <button
            onClick={handleLogout}
            className="flex items-center space-x-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs px-3.5 py-2 rounded-xl transition-all font-bold"
          >
            <span>Abmelden</span>
            <LogOut className="h-3.5 w-3.5" />
          </button>
        </div>
      </header>

      {/* Main Panel Content */}
      <main className="flex-1 p-6 md:p-8 max-w-7xl mx-auto w-full space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-2xl font-black text-slate-900">Eingegangene Buchungen</h1>
            <p className="text-xs text-slate-500 mt-1">Verwalten und bestätigen Sie die Buchungsanfragen Ihrer Kunden.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            {/* Search */}
            <div className="relative flex-1 sm:flex-initial">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Suche..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full sm:w-60 bg-white border border-slate-200 pl-9 pr-4 py-2 rounded-xl text-xs focus:outline-none focus:border-emerald-500"
              />
            </div>

            {/* Status Filter */}
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="bg-white border border-slate-200 px-3 py-2 rounded-xl text-xs focus:outline-none"
            >
              <option value="ALL">Alle Status</option>
              <option value="PENDING">Ausstehend</option>
              <option value="CONFIRMED">Bestätigt</option>
              <option value="COMPLETED">Abgeschlossen</option>
              <option value="CANCELLED">Storniert</option>
            </select>
          </div>
        </div>

        {authError && (
          <div className="bg-rose-50 text-rose-700 border border-rose-100 p-4 rounded-xl text-xs flex items-center space-x-2">
            <ShieldAlert className="h-5 w-5" />
            <span>{authError}</span>
          </div>
        )}

        {/* Orders Table */}
        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
          {loading && orders.length === 0 ? (
            <div className="p-12 text-center text-slate-400 space-y-2">
              <Loader2 className="h-8 w-8 animate-spin mx-auto text-emerald-600" />
              <p className="text-xs">Lade Buchungen...</p>
            </div>
          ) : filteredOrders.length === 0 ? (
            <div className="p-12 text-center text-slate-400 space-y-1">
              <p className="font-bold text-sm text-slate-600">Keine Buchungen gefunden</p>
              <p className="text-xs">Es liegen aktuell keine Anfragen vor.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100 text-slate-500 uppercase tracking-wider font-bold">
                    <th className="p-4">Kunde</th>
                    <th className="p-4">Dienstleistung</th>
                    <th className="p-4">Fläche & Preis</th>
                    <th className="p-4">Terminwunsch</th>
                    <th className="p-4">Status</th>
                    <th className="p-4 text-right">Aktionen</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredOrders.map((order) => (
                    <tr key={order.id} className="hover:bg-slate-50/50">
                      {/* Customer Info */}
                      <td className="p-4 space-y-1.5">
                        <span className="font-bold text-slate-800 block text-sm">{order.clientName}</span>
                        <div className="space-y-0.5 text-2xs text-slate-500">
                          <a href={`mailto:${order.clientEmail}`} className="flex items-center hover:text-emerald-600 font-medium">
                            <Mail className="h-3 w-3 mr-1 shrink-0" /> {order.clientEmail}
                          </a>
                          <a href={`tel:${order.clientPhone}`} className="flex items-center hover:text-emerald-600 font-medium">
                            <Phone className="h-3 w-3 mr-1 shrink-0" /> {order.clientPhone}
                          </a>
                          <span className="flex items-start">
                            <MapPin className="h-3 w-3 mr-1 shrink-0 mt-0.5" /> <span className="max-w-[200px] truncate">{order.address}</span>
                          </span>
                        </div>
                      </td>

                      {/* Service Type */}
                      <td className="p-4">
                        <span className="font-semibold text-slate-700 block text-sm">{order.serviceType}</span>
                        <span className="text-2xs text-slate-450 mt-0.5 block">Bestellt am: {new Date(order.createdAt).toLocaleDateString("de-DE")}</span>
                      </td>

                      {/* Size & Price */}
                      <td className="p-4 space-y-0.5">
                        <span className="font-bold text-slate-800 block">{order.spaceSize} m²</span>
                        <span className="font-black text-emerald-650 text-sm block">€{order.totalPrice.toFixed(2)}</span>
                      </td>

                      {/* Booking Date */}
                      <td className="p-4">
                        <span className="font-bold text-slate-850 block">{new Date(order.bookingDate).toLocaleDateString("de-DE")}</span>
                        <span className="text-2xs text-slate-500 block mt-0.5">Uhrzeit: {new Date(order.bookingDate).toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" })}</span>
                      </td>

                      {/* Status */}
                      <td className="p-4">{getStatusBadge(order.status)}</td>

                      {/* Actions */}
                      <td className="p-4 text-right space-y-1 sm:space-y-0 sm:space-x-1">
                        <select
                          value={order.status}
                          onChange={(e) => handleStatusUpdate(order.id, e.target.value)}
                          className="bg-slate-50 border border-slate-200 px-2 py-1 rounded text-2xs focus:outline-none"
                        >
                          <option value="PENDING">Ausstehend</option>
                          <option value="CONFIRMED">Bestätigt</option>
                          <option value="COMPLETED">Abgeschlossen</option>
                          <option value="CANCELLED">Storniert</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
