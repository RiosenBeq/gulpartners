import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'İletişim | Hızlı Hukuki Destek Hattı',
  description: 'Acil hukuki destek veya randevu talepleriniz için Şişli/İstanbul merkezli ofisimizle iletişime geçin. Gül Partners, 7/24 stratejik analitik destek sunar.',
  keywords: ['Şişli Hukuk Bürosu İletişim', 'Gül Partners Telefon', 'İstanbul Avukat Adres', 'Online Hukuki Danışmanlık', 'Hukuk Randevu'],
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
