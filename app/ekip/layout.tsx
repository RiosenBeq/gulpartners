import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hukuk Ekibimiz | Gül Partners Hukuk',
  description: 'Gül Partners, her biri alanında uzmanlaşmış, stratejik analitik kabiliyete sahip hukuk mimarlarından oluşur. Kurucu ortaklarımız Av. Batuhan Bulut ve Av. Ferdi Gül liderliğindeki ekibimizle tanışın.',
  keywords: ['Batuhan Bulut', 'Ferdi Gül', 'Gül Partners Ekibi', 'İstanbul Avukat Listesi', 'Uzman Hukuk Kadrosu'],
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
