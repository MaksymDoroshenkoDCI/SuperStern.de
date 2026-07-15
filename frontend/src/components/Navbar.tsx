"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Startseite", path: "/" },
    { name: "Leistungen", path: "/leistungen" },
    { name: "Preise", path: "/preise" },
    { name: "Über Uns", path: "/ueber-uns" },
    { name: "Kontakt", path: "/kontakt" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-100 py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2.5 group">
            <div className="relative w-10 h-10 group-hover:scale-110 transition-transform duration-300">
              <Image
                src="/logo.png"
                alt="Super Stern Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="font-extrabold text-lg sm:text-xl tracking-wider text-slate-800 group-hover:text-emerald-600 transition-colors">
              SUPER<span className="text-amber-500">STERN</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`font-semibold text-sm transition-colors duration-200 ${
                    isActive
                      ? "text-emerald-600 border-b-2 border-emerald-500 pb-1"
                      : "text-slate-600 hover:text-emerald-600"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              href="/preise"
              className="green-button text-white font-bold text-sm px-5 py-2.5 rounded-full hover:scale-105 transition-transform shadow-sm"
            >
              Jetzt Buchen
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 p-2 rounded-md hover:bg-slate-100 focus:outline-none"
              aria-label="Navigation öffnen"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-xl animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2.5 rounded-md text-base font-semibold ${
                    isActive
                      ? "bg-emerald-50 text-emerald-600"
                      : "text-slate-650 hover:bg-slate-50 hover:text-emerald-600"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="px-3 pt-4 pb-2">
              <Link
                href="/preise"
                onClick={() => setIsOpen(false)}
                className="block text-center green-button text-white font-bold py-3 rounded-full shadow-lg"
              >
                Jetzt Buchen
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
