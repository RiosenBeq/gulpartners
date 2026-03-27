import { ArrowRight, Mail, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Team() {
  const partners = [
    {
      id: 1,
      name: 'Elif Yılmaz',
      role: 'Kıdemli Ortak',
      expertise: 'Şirketler Hukuku & Birleşmeler alanında 15 yılı aşkın deneyim.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 2,
      name: 'Caner Demir',
      role: 'Ortak',
      expertise: 'Uluslararası Tahkim ve Ticari Uyuşmazlıklar konusunda uzman.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 3,
      name: 'Zeynep Kaya',
      role: 'Ortak',
      expertise: 'Fikri Mülkiyet ve Teknoloji Hukuku alanında öncü.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop',
    },
  ];

  const associates = [
    {
      id: 4,
      name: 'Burak Şahin',
      role: 'Kıdemli Avukat',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 5,
      name: 'Ayşe Çelik',
      role: 'Avukat',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 6,
      name: 'Emre Yıldız',
      role: 'Avukat',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 7,
      name: 'Selin Arslan',
      role: 'Stajyer Avukat',
      image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800&auto=format&fit=crop',
    },
  ];

  return (
    <div className="bg-surface">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 bg-primary-navy overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-luminosity"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="max-w-2xl flex-1">
              <span className="text-secondary-gold text-sm font-bold tracking-[0.2em] uppercase mb-6 block">
                Ekibimiz
              </span>
              <h1 className="font-serif text-5xl md:text-6xl text-white font-bold tracking-tight leading-[1.1] mb-8">
                Hukuki Mükemmelliğin <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-gold to-yellow-200">Mimarları</span>
              </h1>
              <p className="font-sans text-lg text-gray-300 leading-relaxed">
                Her biri kendi alanında derin uzmanlığa sahip, stratejik düşünen ve sonuç odaklı çalışan hukuk profesyonellerinden oluşan ekibimizle tanışın.
              </p>
            </div>
            {/* Managing Partner Highlight */}
            <div className="flex-1 relative w-full max-w-md mx-auto md:mx-0">
              <div className="aspect-[3/4] rounded-sm overflow-hidden relative group">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop"
                  alt="Alistair Gul"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-navy via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h3 className="font-serif text-3xl font-bold text-white mb-2">Alistair Gul</h3>
                  <p className="text-secondary-gold text-sm font-bold tracking-widest uppercase mb-4">
                    Kurucu Ortak
                  </p>
                  <Link
                    to="#"
                    className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-secondary-gold transition-colors"
                  >
                    Profili İncele <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16 border-b border-gray-200 pb-8">
            <h2 className="font-serif text-3xl md:text-4xl text-primary-navy font-bold tracking-tight">
              Ortaklarımız
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {partners.map((partner) => (
              <div key={partner.id} className="group cursor-pointer">
                <div className="aspect-[4/5] overflow-hidden rounded-sm mb-6 relative">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary-navy/10 group-hover:bg-transparent transition-colors duration-700"></div>
                </div>
                <h3 className="font-serif text-2xl font-bold text-primary-navy mb-2 group-hover:text-secondary-gold transition-colors">
                  {partner.name}
                </h3>
                <p className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-3">
                  {partner.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {partner.expertise}
                </p>
                <div className="flex items-center gap-4">
                  <a href="#" className="text-gray-400 hover:text-primary-navy transition-colors">
                    <Mail className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary-navy transition-colors">
                    <Share2 className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Associates Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16 border-b border-gray-200 pb-8">
            <h2 className="font-serif text-3xl md:text-4xl text-primary-navy font-bold tracking-tight">
              Uzman Kadromuz
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {associates.map((associate) => (
              <div key={associate.id} className="group cursor-pointer">
                <div className="aspect-square overflow-hidden rounded-sm mb-4 relative">
                  <img
                    src={associate.image}
                    alt={associate.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary-navy/10 group-hover:bg-transparent transition-colors duration-700"></div>
                </div>
                <h3 className="font-serif text-xl font-bold text-primary-navy mb-1 group-hover:text-secondary-gold transition-colors">
                  {associate.name}
                </h3>
                <p className="text-gray-500 text-xs font-medium uppercase tracking-wider">
                  {associate.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
