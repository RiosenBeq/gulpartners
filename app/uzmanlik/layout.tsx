import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Uzmanlık Alanlarımız | Hukuki Mükemmellik için Mimari Hassasiyet',
  description: 'Gayrimenkul, Ticaret, Ceza ve Fikri Mülkiyet başta olmak üzere 10 ana hukuk disiplininde stratejik ve disiplinli çözüm ortaklığı sunuyoruz. İstanbul merkezli uzman avukat kadromuzla yanınızdayız.',
  keywords: ['Gayrimenkul Hukuku İstanbul', 'Şirketler Hukuku', 'Ceza Avukatı İstanbul', 'Fikri Mülkiyet Hakları', 'Arabuluculuk Hizmetleri'],
};

export default function ExpertiseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
