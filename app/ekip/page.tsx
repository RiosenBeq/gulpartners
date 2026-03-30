import { Mail, Linkedin, ArrowRight } from 'lucide-react';
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

  // Founding partners to highlight
  const foundingPartners = teamMembers.filter(m => [1, 2].includes(m.id));
  const otherTeam = teamMembers.filter(m => ![1, 2].includes(m.id));

  return (
    <div className="bg-white selection:bg-secondary-gold/30 antialiased overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-end gap-16">
            <div className="w-full md:w-2/3">
              <span className="inline-block text-secondary-gold font-sans tracking-[0.4em] uppercase text-[10px] font-bold mb-8 animate-fade-in">Yetkin Kadro</span>
              <h1 className="font-serif text-5xl md:text-8xl text-primary-navy font-bold leading-[1.05] tracking-tighter mb-10">
                Hukuki Mükemmelliğin <br />
                <span className="italic font-light text-gray-400">Mimarları.</span>
              </h1>
              <p className="text-xl text-gray-500 font-light max-w-2xl leading-relaxed mb-12 italic">
                Gul Partners, küresel vizyonu ve yerel uzmanlığıyla karmaşık hukuki süreçleri stratejik birer avantaja dönüştürür. Ekibimiz, disiplin ve tutkuyla şekillenmiş bir tecrübe mirasını temsil eder.
              </p>
            </div>
            <div className="w-full md:w-1/3 flex justify-end">
               <div className="p-8 border border-slate-100 bg-surface-low rounded-sm shadow-sm">
                  <p className="text-primary-navy font-serif text-5xl font-bold mb-2">25+</p>
                  <p className="text-gray-400 font-sans uppercase tracking-[0.2em] text-[10px] font-bold">Yıllık Güven Odaklı Deneyim</p>
               </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-surface-low -z-10 translate-x-1/2 rounded-full blur-[120px] opacity-50"></div>
      </section>

      {/* Highlights: Founding Partners */}
      <section className="py-24 bg-surface-low relative overflow-hidden">
        <div className="absolute inset-0 z-0">
           <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary-gold/5 rounded-full -mr-96 -mt-96 animate-pulse"></div>
        </div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="mb-20 flex items-center justify-between">
            <h2 className="font-serif text-4xl font-bold text-primary-navy tracking-tight">Kurucu Ortaklarımız</h2>
            <div className="h-px flex-grow mx-12 bg-gray-200 hidden md:block"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
            {foundingPartners.map((partner) => (
              <div key={partner.id} className="group flex flex-col md:flex-row gap-10 items-start">
                <div className="w-full md:w-1/2 aspect-[3/4] overflow-hidden relative shadow-2xl shadow-primary-navy/10 transform transition-transform duration-700 group-hover:scale-[1.02]">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="w-full h-full object-cover grayscale transition-all duration-[1.5s] group-hover:grayscale-0 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary-navy/5 group-hover:bg-transparent transition-colors duration-700"></div>
                  <div className="absolute bottom-6 left-6 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-500">
                    <a href="#" className="w-10 h-10 bg-white/90 backdrop-blur text-primary-navy rounded-full flex items-center justify-center hover:bg-secondary-gold hover:text-white transition-all shadow-lg">
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                <div className="w-full md:w-1/2 pt-4">
                  <h3 className="font-serif text-4xl font-bold text-primary-navy mb-3 leading-tight">{partner.name}</h3>
                  <p className="text-secondary-gold font-sans uppercase tracking-[0.3em] text-[10px] font-bold mb-6">{partner.role}</p>
                  <p className="text-gray-500 text-lg leading-relaxed font-light italic mb-8 border-l-2 border-secondary-gold/20 pl-6">
                    {partner.expertise}
                  </p>
                  <a href="#" className="group/link inline-flex items-center gap-3 text-primary-navy font-bold text-xs tracking-widest uppercase pb-1 border-b border-secondary-gold hover:gap-6 transition-all duration-500">
                    PROFİLİ İNCELE <ArrowRight className="w-4 h-4 text-secondary-gold" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team: Grid Layout */}
      <section className="py-24 max-w-7xl mx-auto px-8">
        <div className="mb-20">
          <h2 className="font-serif text-4xl font-bold text-primary-navy mb-4 tracking-tight">Uzman Kadromuz</h2>
          <p className="text-gray-400 text-xs uppercase tracking-[0.4em] font-bold">Geleceğin Hukuk Liderleri</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {otherTeam.map((member) => (
            <div key={member.id} className="group cursor-pointer">
              <div className="aspect-square overflow-hidden bg-surface-low mb-8 relative shadow-lg shadow-primary-navy/5 group-hover:shadow-2xl transition-shadow duration-500">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary-navy/10 group-hover:bg-transparent transition-colors duration-700"></div>
              </div>
              <h4 className="font-serif text-xl font-bold text-primary-navy mb-1 group-hover:text-secondary-gold transition-colors">{member.name}</h4>
              <p className="text-gray-400 font-sans uppercase tracking-widest text-[9px] font-bold">{member.role}</p>
              <div className="mt-6 flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <a href="#" className="text-gray-400 hover:text-secondary-gold transition-colors"><Linkedin className="w-4 h-4" /></a>
                <a href="mailto:info@gulpartners.com" className="text-gray-400 hover:text-secondary-gold transition-colors"><Mail className="w-4 h-4" /></a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Immersive CTA Area */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 scale-105">
           <img 
            className="w-full h-full object-cover grayscale brightness-50" 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop" 
            alt="Elite boardroom"
          />
          <div className="absolute inset-0 bg-primary-navy/80 backdrop-blur-[2px]"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
          <h2 className="font-serif text-5xl md:text-7xl text-white font-bold mb-10 leading-tight">Hukuki Gücünüzü <br/><span className="text-secondary-gold italic font-light">Bizimle Şekillendirin.</span></h2>
          <p className="text-slate-300 text-xl font-light mb-16 max-w-2xl mx-auto">Uzman kadromuzla prestijli bir hukuki desteğin farkını yaşayın.</p>
          <Link href="/iletisim" className="bg-secondary-gold text-primary-navy px-14 py-6 font-bold text-sm tracking-[0.3em] uppercase hover:bg-white transition-all duration-500 shadow-2xl shadow-secondary-gold/20 inline-block">
            UZMANLARIMIZLA İLETİŞİME GEÇİN
          </Link>
        </div>
      </section>
    </div>
  );
}
