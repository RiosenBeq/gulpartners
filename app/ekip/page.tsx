import { Mail, Share2, Linkedin, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Team() {
  const partners = [
    {
      id: 1,
      name: 'Av. LL.M. Batuhan Bulut',
      role: 'Kurucu Ortak',
      expertise: 'Uluslararası Tahkim, Ticaret Hukuku ve Stratejik Danışmanlık alanlarında derin uzmanlık.',
      image: 'https://www.bulutpartners.com/wp-content/uploads/2026/03/752a61fc-360e-486f-81b1-7a2ea41f1c90.jpg',
    },
    {
      id: 2,
      name: 'Av. Ferdi Gül',
      role: 'Yönetici Ortak',
      expertise: 'Gayrimenkul Hukuku ve Şirketler Hukuku süreçlerinde sonuç odaklı yaklaşımlar.',
      image: 'https://www.bulutpartners.com/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-03-at-17.11.08-3.jpeg',
    },
    {
      id: 3,
      name: 'Av. Ceren Akgün',
      role: 'Ortak',
      expertise: 'İş Hukuku ve Sosyal Güvenlik mevzuatında kapsamlı hukuki destek.',
      image: 'https://www.bulutpartners.com/wp-content/uploads/2026/01/Adsiz-tasarim-2.png',
    },
  ];

  const associates = [
    {
      id: 4,
      name: 'Av. Türkan Topçu',
      role: 'Kıdemli Avukat',
      image: 'https://www.bulutpartners.com/wp-content/uploads/2026/01/Adsiz-tasarim-3.png',
    },
    {
      id: 5,
      name: 'Av. Sümeyye Avcı',
      role: 'Avukat',
      image: 'https://www.bulutpartners.com/wp-content/uploads/2026/01/9b8f5f8b-9db0-4245-a1ee-09cd07e6c17a.jpeg',
    },
    {
      id: 6,
      name: 'Av. Anıl Pederlioğlu',
      role: 'Avukat',
      image: 'https://www.bulutpartners.com/wp-content/uploads/2026/01/Adsiz-tasarim-1.png',
    },
    {
      id: 7,
      name: 'Menekşe Çelik',
      role: 'Ofis Müdürü / Yönetici Asistanı',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
    },
  ];

  return (
    <div className="bg-surface selection:bg-secondary-gold/30">
      {/* Hero Section - Team */}
      <section className="relative pt-48 pb-32 bg-primary-navy overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-secondary-gold/5 rounded-full -mr-500 -mt-500 animate-spin-slow"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 py-2 px-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-10">
              <span className="text-secondary-gold text-[10px] font-bold tracking-[0.3em] uppercase">Yetkin Kadro</span>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl text-white font-bold tracking-tight leading-[1.1] mb-10">
              Hukuki Güvenin <br />
              <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-secondary-gold to-yellow-100">Somut Yüzleri</span>
            </h1>
            <p className="font-sans text-xl text-gray-400 leading-relaxed max-w-2xl font-light">
              Her biri kendi alanında akademik derinliğe ve sektörel tecrübeye sahip profesyonellerimizle, müvekkillerimizin en karmaşık sorunlarına disiplinlerarası çözümler üretiyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Partners Grid - Premium Styling */}
      <section className="py-40 bg-surface-lowest">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-24 flex items-end justify-between border-b border-gray-100 pb-12">
            <div>
              <span className="text-secondary-gold text-sm font-bold tracking-[0.2em] uppercase mb-4 block">Liderlik</span>
              <h2 className="font-serif text-4xl md:text-5xl text-primary-navy font-bold tracking-tight">Ortaklarımız</h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {partners.map((partner) => (
              <div key={partner.id} className="group flex flex-col">
                <div className="aspect-[3/4] overflow-hidden rounded-sm mb-10 relative bg-surface-low border border-gray-100 shadow-xl shadow-primary-navy/5">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-end p-8">
                    <div className="flex gap-4">
                      <a href="#" className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-secondary-gold hover:text-primary-navy transition-all duration-300">
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a href="#" className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-secondary-gold hover:text-primary-navy transition-all duration-300">
                        <Mail className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
                <h3 className="font-serif text-2xl font-bold text-primary-navy mb-2 group-hover:text-secondary-gold transition-colors duration-300">
                  {partner.name}
                </h3>
                <p className="text-secondary-gold text-xs font-bold uppercase tracking-[0.2em] mb-4">
                  {partner.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 font-light">
                  {partner.expertise}
                </p>
                <Link href="#" className="mt-auto inline-flex items-center gap-2 text-[10px] font-bold text-primary-navy uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                  Tam Profili İncele &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Associates Grid - Modern Card List */}
      <section className="py-40 bg-surface-low">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-24 text-center">
            <span className="text-secondary-gold text-sm font-bold tracking-[0.2em] uppercase mb-4 block">Uzman Kadro</span>
            <h2 className="font-serif text-4xl md:text-5xl text-primary-navy font-bold tracking-tight">Avukatlarımız & Ekibimiz</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {associates.map((associate) => (
              <div key={associate.id} className="bg-white p-6 rounded-sm border border-gray-100 hover:shadow-2xl hover:shadow-primary-navy/10 transition-all duration-500 group">
                <div className="aspect-square overflow-hidden rounded-sm mb-8 relative">
                  <img
                    src={associate.image}
                    alt={associate.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-primary-navy/5 group-hover:bg-transparent transition-colors"></div>
                </div>
                <h3 className="font-serif text-lg font-bold text-primary-navy mb-1 group-hover:text-secondary-gold transition-colors duration-300">
                  {associate.name}
                </h3>
                <p className="text-gray-500 text-[10px] font-bold uppercase tracking-wider mb-6">
                  {associate.role}
                </p>
                <div className="hidden group-hover:flex items-center gap-3 animate-fade-in">
                   <a href="#" className="text-gray-400 hover:text-secondary-gold transition-colors"><Linkedin className="w-4 h-4" /></a>
                   <a href="#" className="text-gray-400 hover:text-secondary-gold transition-colors"><Mail className="w-4 h-4" /></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Team CTA */}
      <section className="py-32 bg-primary-navy overflow-hidden relative">
        <div className="absolute top-1/2 left-0 w-full h-px bg-white/5"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-4xl font-bold text-white mb-8">Ekibimizin Bir Parçası Olun</h2>
            <p className="text-gray-400 text-lg mb-12 font-light">Vizyoner yaklaşımımızla fark yaratmak isteyen yetenekli hukukçuları arıyoruz.</p>
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-3 bg-secondary-gold text-primary-navy px-12 py-5 font-bold hover:bg-white transition-all duration-500"
            >
              Kariyer Olanakları <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
