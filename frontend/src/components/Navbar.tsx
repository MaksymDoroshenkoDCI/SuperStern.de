"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Star } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
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
          ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="bg-amber-500 p-2 rounded-full shadow-md group-hover:scale-110 transition-transform duration-300">
              <Star className="h-5 w-5 text-white fill-white" />
            </div>
            <span className="font-extrabold text-2xl tracking-wider text-slate-800 dark:text-white group-hover:text-amber-500 transition-colors">
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
                      ? "text-amber-600 border-b-2 border-amber-500 pb-1"
                      : "text-slate-600 dark:text-slate-300 hover:text-amber-500"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              href="/preise"
              className="gold-button text-white font-bold text-sm px-5 py-2.5 rounded-full hover:scale-105 transition-transform"
            >
              Jetzt Buchen
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 dark:text-white p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 shadow-xl animate-fade-in">
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
                      ? "bg-amber-50 text-amber-600 dark:bg-slate-800 dark:text-amber-500"
                      : "text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-amber-500"
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
                className="block text-center gold-button text-white font-bold py-3 rounded-full shadow-lg"
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
