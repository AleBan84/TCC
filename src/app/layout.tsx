import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-barlow",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

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
    <html lang="es" className={`${barlowCondensed.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
