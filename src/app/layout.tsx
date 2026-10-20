import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TCC — Train. Compete. Connect.",
  description:
    "La comunidad de deportistas competitivos. Todo sobre triatlón, CrossFit, Hyrox y más: guías, eventos y comunidad en un solo lugar.",
  keywords: ["triatlón", "crossfit", "hyrox", "running", "deporte competitivo", "entrenamiento"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
