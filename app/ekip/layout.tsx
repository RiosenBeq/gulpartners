import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hukuk Ekibimiz | Gül Partners Hukuk',
  description: 'Gül Partners, her biri alanında uzmanlaşmış, stratejik analitik kabiliyete sahip hukuk profesyonellerinden oluşur. Kurucu ortaklarımız Av. Ferdi Gül ve Av. Batuhan Bulut liderliğindeki ekibimizle tanışın.',
  keywords: ['Ferdi Gül', 'Batuhan Bulut', 'Gül Partners Ekibi', 'İstanbul Avukat Listesi', 'Uzman Hukuk Kadrosu'],
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
