import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preise & Kalkulator | Super Stern Reinigungsservice Berlin",
  description: "Transparente Preise für Reinigungsservices in Berlin. Berechnen Sie direkt Ihren Preis: Unterhaltsreinigung ab 2,50€/m², Büroreinigung ab 3€/m², Baureinigung ab 5€/m².",
  openGraph: {
    title: "Preise & Kalkulator | Super Stern",
    description: "Faire Tarife für professionelle Reinigungsservices in Berlin",
  },
};

export default function PreisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
