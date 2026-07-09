import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Super Stern | Professioneller Reinigungsservice in Berlin",
  description: "Super Stern Reinigungsservice Berlin - Ihre zuverlässige Reinigungsfirma für Büroreinigung, Unterhaltsreinigung, Baureinigung, Fensterreinigung und Umzugsreinigung in Berlin Charlottenburg und Umgebung.",
  keywords: ["Reinigungsservice Berlin", "Reinigungsfirma Berlin", "Büroreinigung Berlin", "Unterhaltsreinigung", "Fensterreinigung Berlin", "Baureinigung Berlin", "Super Stern Berlin", "Wielandstraße Berlin"],
  openGraph: {
    title: "Super Stern | Professioneller Reinigungsservice in Berlin",
    description: "Ihre zuverlässige Reinigungsfirma für Büroreinigung, Unterhaltsreinigung, Baureinigung, Fensterreinigung und Umzugsreinigung in Berlin.",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="h-full scroll-smooth">
      <body className={`${outfit.variable} font-sans min-h-full flex flex-col bg-slate-50 text-slate-900`}>
        {children}
      </body>
    </html>
  );
}
