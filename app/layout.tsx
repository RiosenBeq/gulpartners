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
  title: "GÜL Partners | Hukuk ve Danışmanlık",
  description: "Karmaşık hukuki süreçlerde stratejik ve sonuç odaklı çözümler sunan yeni nesil hukuk bürosu.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${inter.variable} ${notoSerif.variable} antialiased`}>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
