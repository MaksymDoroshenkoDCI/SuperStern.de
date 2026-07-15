import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import SchemaMarkup from "@/components/SchemaMarkup";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.superstern.de"),
  title: "Super Stern | Professioneller Reinigungsservice in Berlin",
  description: "Super Stern Reinigungsservice Berlin - Ihre zuverlässige Reinigungsfirma für Büroreinigung, Unterhaltsreinigung, Baureinigung, Fensterreinigung und Umzugsreinigung in Berlin Charlottenburg und Umgebung.",
  keywords: ["Reinigungsservice Berlin", "Reinigungsfirma Berlin", "Büroreinigung Berlin", "Unterhaltsreinigung", "Fensterreinigung Berlin", "Baureinigung Berlin", "Super Stern Berlin", "Wielandstraße Berlin"],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Super Stern | Professioneller Reinigungsservice in Berlin",
    description: "Ihre zuverlässige Reinigungsfirma für Büroreinigung, Unterhaltsreinigung, Baureinigung, Fensterreinigung und Umzugsreinigung in Berlin.",
    locale: "de_DE",
    type: "website",
    images: [{ url: "/logo.png", width: 1024, height: 1024, alt: "Super Stern Logo" }],
    url: "https://www.superstern.de",
  },
  twitter: {
    card: "summary_large_image",
    title: "Super Stern | Reinigungsservice Berlin",
    description: "Professionelle Reinigung in Berlin - Büro, Wohnung, Bau, Fenster",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="h-full scroll-smooth">
      <head>
        <SchemaMarkup />
      </head>
      <body className={`${outfit.variable} font-sans min-h-full flex flex-col bg-slate-50 text-slate-900`}>
        {children}
      </body>
    </html>
  );
}
