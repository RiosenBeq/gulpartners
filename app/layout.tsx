import type { Metadata } from "next";
import { Inter, Noto_Serif } from "next/font/google";
import "@/src/index.css";
import LayoutWrapper from "@/src/components/LayoutWrapper";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: 'Gül Partners | Hukuki Mükemmellik için Mimari Hassasiyet',
  description: 'Karmaşık hukuki süreçlerde mimari hassasiyetle inşa edilmiş, stratejik ve sonuç odaklı çözümler sunan yeni nesil hukuk bürosu.',
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
