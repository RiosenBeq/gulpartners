import { Mail, Share2, Linkedin, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Team() {
  const teamMembers = [
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
      image: 'https://www.bulutpartners.com/wp-content/uploads/2026/01/Adsiz-tasarim-3.png',
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

      {/* Unified Team Grid */}
      <section className="py-40 bg-surface-lowest">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-24 flex items-end justify-between border-b border-gray-100 pb-12">
            <div>
              <span className="text-secondary-gold text-sm font-bold tracking-[0.2em] uppercase mb-4 block">Yetkin Kadro</span>
              <h2 className="font-serif text-4xl md:text-5xl text-primary-navy font-bold tracking-tight">Ekibimiz</h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 xl:gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="group flex flex-col items-center text-center">
                <div className="aspect-[3/4] w-full overflow-hidden rounded-sm mb-8 relative bg-surface-low shadow-lg shadow-primary-navy/5">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center">
                    <div className="flex gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <a href="#" className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-secondary-gold hover:text-primary-navy transition-all">
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a href="#" className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-secondary-gold hover:text-primary-navy transition-all">
                        <Mail className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
                <h3 className="font-serif text-xl font-bold text-primary-navy mb-2 group-hover:text-secondary-gold transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-secondary-gold text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
                  {member.role}
                </p>
                {"expertise" in member && (
                  <p className="text-gray-500 text-xs leading-relaxed font-light line-clamp-2 px-4 italic">
                    {member.expertise}
                  </p>
                )}
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
