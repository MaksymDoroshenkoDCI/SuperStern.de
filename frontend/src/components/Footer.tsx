import Link from "next/link";
import { Star, Phone, Mail, MapPin, ShieldCheck } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t-4 border-amber-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Brief */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-amber-500 p-2 rounded-full">
                <Star className="h-5 w-5 text-white fill-white" />
              </div>
              <span className="font-extrabold text-xl tracking-wider text-white">
                SUPER<span className="text-amber-500">STERN</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Ihr erstklassiger Reinigungsservice in Berlin. Zuverlässig, gründlich und umweltschonend für Wohn- und Geschäftsräume.
            </p>
            <div className="flex items-center space-x-2 text-sm text-slate-400">
              <ShieldCheck className="h-4 w-4 text-emerald-500" />
              <span>DSGVO-konform & Haftpflichtversichert</span>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="font-bold text-white text-lg mb-4">Kontakt</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                <span>Wielandstraße 11a, 10629 Berlin</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-500 shrink-0" />
                <a href="tel:+4917645365056" className="hover:text-amber-400 transition-colors">
                  +49 (0) 176 45365056
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-500 shrink-0" />
                <a href="mailto:extra.stern@yahoo.com" className="hover:text-amber-400 transition-colors">
                  extra.stern@yahoo.com
                </a>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-bold text-white text-lg mb-4">Leistungen</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/leistungen" className="hover:text-amber-400 transition-colors">
                  Unterhaltsreinigung
                </Link>
              </li>
              <li>
                <Link href="/leistungen" className="hover:text-amber-400 transition-colors">
                  Büroreinigung
                </Link>
              </li>
              <li>
                <Link href="/leistungen" className="hover:text-amber-400 transition-colors">
                  Baureinigung
                </Link>
              </li>
              <li>
                <Link href="/leistungen" className="hover:text-amber-400 transition-colors">
                  Glas- und Fensterreinigung
                </Link>
              </li>
              <li>
                <Link href="/leistungen" className="hover:text-amber-400 transition-colors">
                  Umzugsreinigung
                </Link>
              </li>
            </ul>
          </div>

          {/* Business Info */}
          <div>
            <h3 className="font-bold text-white text-lg mb-4">Unternehmen</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/ueber-uns" className="hover:text-amber-400 transition-colors">
                  Über Uns
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="hover:text-amber-400 transition-colors">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link href="/impressum" className="hover:text-amber-400 transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="hover:text-amber-400 transition-colors">
                  Datenschutzerklärung
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {currentYear} Super Stern Reinigungsservice Berlin. Alle Rechte vorbehalten.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/impressum" className="hover:underline">Impressum</Link>
            <Link href="/datenschutz" className="hover:underline">Datenschutz</Link>
            <Link href="/admin" className="hover:underline">Admin Login</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
