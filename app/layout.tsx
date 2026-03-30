import type { Metadata, Viewport } from "next";
import { Inter, Noto_Serif } from "next/font/google";
import "@/src/index.css";
import { cn } from "@/src/lib/utils";
import LayoutWrapper from "@/src/components/LayoutWrapper";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const viewport: Viewport = {
  themeColor: "#000D24",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://gulpartners.com'),
  title: {
    default: 'Gül Partners | Hukuki Mükemmellik için Hukuki Titizlik',
    template: '%s | Gül Partners Hukuk'
  },
  description: 'Gül Partners, karmaşık hukuki süreçlerde sarsılmaz bir disiplinle inşa edilmiş, stratejik ve sonuç odaklı çözümler sunan yeni nesil bir hukuk bürosudur. İstanbul merkezli uzman avukat kadrosu ile gayrimenkul, ticaret ve ceza hukuku alanlarında hizmet vermektedir.',
  keywords: ['Gül Partners', 'Hukuk Bürosu', 'İstanbul Avukat', 'Gayrimenkul Hukuku', 'Ticaret Hukuku', 'Şirketler Hukuku', 'Ceza Hukuku', 'KVKK Danışmanlığı', 'İş Hukuku', 'Arabuluculuk', 'Adaletin Temsilcileri'],
  authors: [{ name: 'Gül Partners' }],
  creator: 'Gül Partners',
  publisher: 'Gül Partners',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Gül Partners | Hukuki Mükemmellik için Hukuki Titizlik',
    description: 'Stratejik ve sonuç odaklı hukuk çözümleri. İstanbul merkezli uzman hukuk hizmetleri.',
    url: 'https://gulpartners.com',
    siteName: 'Gül Partners',
    locale: 'tr_TR',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg', // Ensure this exists or use a representative image
        width: 1200,
        height: 630,
        alt: 'Gül Partners Hukuk Bürosu',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gül Partners | Stratejik Hukuk',
    description: 'Karmaşık hukuki süreçlerde hukuki titizlik ve stratejik derinlik.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Structured Data (JSON-LD) for Search Engines
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Gül Partners Hukuk Bürosu",
    "image": "https://gulpartners.com/logo.png",
    "@id": "https://gulpartners.com",
    "url": "https://gulpartners.com",
    "telephone": "+902122113345",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Esentepe, Kore Şehitleri Cd. No:30/10",
      "addressLocality": "Şişli",
      "addressRegion": "İstanbul",
      "postalCode": "34394",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.0664,
      "longitude": 29.0062
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.linkedin.com/company/gulpartners",
      "https://www.instagram.com/gulpartners"
    ]
  };

  return (
    <html lang="tr" className={cn("scroll-smooth", inter.variable, notoSerif.variable)}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-surface text-primary selection:bg-secondary/20 selection:text-secondary">
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
