import { ArrowRight, Building2, Gavel, Scale, Briefcase, ShieldAlert, Heart, Landmark, PenTool, TrendingUp, LibraryBig } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const services = [
    {
      title: 'Kira ve Gayrimenkul Hukuku',
      description: 'Kentsel Dönüşüm Danışmanlığı, tapu iptali ve tescili, kiralama süreçleri.',
      icon: <Building2 className="w-8 h-8" />,
    },
    {
      title: 'İş ve Sosyal Güvenlik Hukuku',
      description: 'İşçi-işveren uyuşmazlıkları, sendikal süreçler ve kurumsal uyum danışmanlığı.',
      icon: <Briefcase className="w-8 h-8" />,
    },
    {
      title: 'İcra ve İflas Hukuku',
      description: 'Alacak tahsil süreçleri, konkordato ve finansal yapılandırma stratejileri.',
      icon: <TrendingUp className="w-8 h-8" />,
    },
    {
      title: 'Sözleşmeler ve Ticaret Hukuku',
      description: 'Uluslararası ticaret, şirketler hukuku ve karmaşık sözleşme yönetimi.',
      icon: <Scale className="w-8 h-8" />,
    },
    {
      title: 'Ceza ve İnfaz Hukuku',
      description: 'Ekonomik suçlar ve karmaşık ceza yargısı süreçlerinde savunma stratejileri.',
      icon: <ShieldAlert className="w-8 h-8" />,
    },
    {
      title: 'Marka ve Fikri Mülkiyet',
      description: 'Patent, marka tescili ve dijital varlıkların hukuki korunması.',
      icon: <PenTool className="w-8 h-8" />,
    },
    {
      title: 'Tazminat ve Değer Kaybı',
      description: 'Maddi-manevi tazminat süreçleri ve sigorta rücu uyuşmazlıkları.',
      icon: <Gavel className="w-8 h-8" />,
    },
    {
      title: 'Boşanma ve Miras Hukuku',
      description: 'Aile hukuku, mal paylaşımı ve stratejik miras yönetimi.',
      icon: <Heart className="w-8 h-8" />,
    },
    {
      title: 'Arabuluculuk Çözümleri',
      description: 'Alternatif uyuşmazlık çözümleri ile hızlı ve etkin sonuçlar.',
      icon: <Scale className="w-8 h-8" />,
    },
    {
      title: 'İmar, İdare ve Vergi Hukuku',
      description: 'İdari işlemler, vergi uyuşmazlıkları ve imar hukuku süreçleri.',
      icon: <Landmark className="w-8 h-8" />,
    },
  ];

  return (
    <div className="bg-white selection:bg-secondary-gold/30">
      {/* Hero Section - The Library Concept */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 scale-105 animate-slow-zoom">
          <img 
            className="w-full h-full object-cover grayscale brightness-[0.4]" 
            src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2000&auto=format&fit=crop" 
            alt="Law library"
          />
          <div className="absolute inset-0 bg-primary-navy/40 mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 text-center">
          <span className="inline-block text-secondary-gold font-sans tracking-[0.5em] uppercase text-[10px] font-bold mb-8 animate-fade-in">BULUT & PARTNERS</span>
          <h1 className="font-serif text-6xl md:text-9xl text-white font-bold leading-[0.95] tracking-tighter mb-10 overflow-hidden">
             <span className="block">Geleceğin Hukuk</span>
             <span className="block italic font-light text-secondary-gold">Mimarları.</span>
          </h1>
          <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto mb-16 leading-relaxed">
            Hukuki mükemmelliği disiplin ve stratejik derinlikle şekillendiriyoruz. Karmaşık süreçleri butik bir yaklaşımla avantajlı sonuçlara dönüştürüyoruz.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link href="/uzmanlik" className="bg-secondary-gold text-primary-navy px-12 py-5 font-bold text-sm tracking-[0.2em] uppercase hover:bg-white transition-all duration-500 shadow-2xl">
              UZMANLIKLARIMIZ
            </Link>
            <Link href="/ekip" className="border border-white/30 text-white px-12 py-5 font-bold text-sm tracking-[0.2em] uppercase hover:bg-white hover:text-primary-navy transition-all duration-500 backdrop-blur-sm">
              EKİBİMİZLE TANIŞIN
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section - Architectural Bento Grid */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
            <div className="md:w-1/2">
              <h2 className="font-serif text-5xl md:text-7xl text-primary-navy font-bold tracking-tight mb-8">Odaklandığımız <br/> <span className="italic font-light text-gray-400">Alanlar.</span></h2>
              <div className="h-1 w-24 bg-secondary-gold"></div>
            </div>
            <div className="md:w-1/3 text-right">
               <p className="text-gray-400 font-sans tracking-widest text-[10px] font-bold uppercase mb-4">Uzmanlık & Tecrübe</p>
               <p className="text-lg text-gray-500 font-light leading-relaxed">
                  On farklı disiplinde yüksek profilli uyuşmazlık çözümü ve stratejik danışmanlık sunuyoruz.
               </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`group relative overflow-hidden bg-surface-low p-10 flex flex-col justify-between border border-transparent hover:border-secondary-gold/20 transition-all duration-500 ${
                  index % 7 === 0 ? 'md:col-span-8 md:row-span-1 min-h-[400px]' : 
                  index % 4 === 0 ? 'md:col-span-4 md:row-span-2 min-h-[400px]' : 'md:col-span-4 min-h-[300px]'
                }`}
              >
                <div className="relative z-10">
                  <div className="text-secondary-gold mb-8 transform group-hover:scale-110 transition-transform duration-500">{service.icon}</div>
                  <h3 className="font-serif text-2xl font-bold text-primary-navy mb-4 leading-tight">{service.title}</h3>
                  <p className="text-gray-500 font-light leading-relaxed opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">{service.description}</p>
                </div>
                <div className="relative z-10 flex justify-end transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                  <ArrowRight className="text-secondary-gold w-6 h-6" />
                </div>
                <div className="absolute bottom-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-5 translate-x-8 translate-y-8 transition-all duration-700">
                  <LibraryBig className="w-full h-full text-primary-navy" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Team - Leading Minds (Real Partners) */}
      <section className="py-40 bg-surface-low selection:bg-primary-navy/10">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-32">
            <h2 className="font-serif text-5xl md:text-7xl text-primary-navy font-bold tracking-tight mb-8">Öncü <span className="italic font-light text-gray-400">Zihinlerimiz.</span></h2>
            <div className="h-1 w-24 bg-secondary-gold mx-auto mb-10"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
            <div className="group text-center">
              <div className="aspect-[3/4] overflow-hidden mb-12 relative shadow-2xl bg-white transform transition-transform duration-700 group-hover:scale-[1.02]">
                <img 
                  className="w-full h-full object-cover grayscale transition-all duration-[1.5s] group-hover:grayscale-0 group-hover:scale-105" 
                  src="https://www.bulutpartners.com/wp-content/uploads/2026/03/752a61fc-360e-486f-81b1-7a2ea41f1c90.jpg" 
                  alt="Av. LL.M. Batuhan Bulut" 
                />
              </div>
              <h3 className="font-serif text-3xl font-bold text-primary-navy mb-2 group-hover:text-secondary-gold transition-colors">Av. LL.M. Batuhan Bulut</h3>
              <p className="text-secondary-gold font-sans uppercase tracking-[0.4em] text-[10px] font-bold">Kurucu Ortak</p>
            </div>

            <div className="group text-center mt-24 md:mt-48">
              <div className="aspect-[3/4] overflow-hidden mb-12 relative shadow-2xl bg-white transform transition-transform duration-700 group-hover:scale-[1.02]">
                <img 
                  className="w-full h-full object-cover grayscale transition-all duration-[1.5s] group-hover:grayscale-0 group-hover:scale-105" 
                  src="https://www.bulutpartners.com/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-03-at-17.11.08-3.jpeg" 
                  alt="Av. Ferdi Gül" 
                />
              </div>
              <h3 className="font-serif text-3xl font-bold text-primary-navy mb-2 group-hover:text-secondary-gold transition-colors">Av. Ferdi Gül</h3>
              <p className="text-secondary-gold font-sans uppercase tracking-[0.4em] text-[10px] font-bold">Yönetici Ortak</p>
            </div>
          </div>
          
          <div className="mt-32 text-center">
            <Link href="/ekip" className="inline-flex items-center gap-4 text-primary-navy font-bold text-sm tracking-[0.3em] uppercase group">
                TÜM EKİBİMİZLE TANIŞIN <ArrowRight className="w-5 h-5 text-secondary-gold group-hover:translate-x-3 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Immersive Local Presence / Contact Area */}
      <section className="relative h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 scale-105">
           <img 
            className="w-full h-full object-cover grayscale brightness-50" 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop" 
            alt="Elite boardroom"
          />
          <div className="absolute inset-0 bg-primary-navy/80 backdrop-blur-[2px]"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-8 text-center text-white">
          <h2 className="font-serif text-5xl md:text-8xl font-bold mb-10 leading-[0.9] tracking-tighter">Hukuki Güvenin <br /><span className="text-secondary-gold italic font-light">Merkezi.</span></h2>
          <p className="text-slate-300 text-xl font-light mb-16 max-w-2xl mx-auto">
            Esentepe, Kore Şehitleri Cd. No:30/10, 34394 Şişli/İstanbul adresindeki ofisimizde sizi ağırlamaktan onur duyarız.
          </p>
          <div className="flex flex-col md:flex-row gap-8 justify-center">
             <div className="p-10 border border-white/10 backdrop-blur-md rounded-sm min-w-[280px]">
                <p className="text-secondary-gold text-[10px] uppercase tracking-widest font-bold mb-4">Santral</p>
                <p className="text-2xl font-serif">+90 212 211 3345</p>
             </div>
             <div className="p-10 border border-white/10 backdrop-blur-md rounded-sm min-w-[280px]">
                <p className="text-secondary-gold text-[10px] uppercase tracking-widest font-bold mb-4">WhatsApp Danışma</p>
                <p className="text-2xl font-serif">+90 533 094 0792</p>
             </div>
          </div>
          <div className="mt-20">
             <Link href="/iletisim" className="bg-secondary-gold text-primary-navy px-16 py-6 font-bold text-sm tracking-[0.3em] uppercase hover:bg-white transition-all duration-500 shadow-2xl inline-block">
                RANDEVU OLUŞTURUN
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
