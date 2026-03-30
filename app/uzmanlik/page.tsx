'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function Expertise() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const allServices = [
    {
      id: 'ticaret-hukuku',
      title: 'Şirketler Hukuku',
      subtitle: 'Kurumsal Çözümler',
      description: 'Küresel pazarda stratejik hamleler yaparken, kurumsal yapınızın hukuki güvenliğini en üst düzeyde sağlıyoruz. Birleşme ve devralmalardan genel kurul yönetimine kadar her aşamada titizlikle yanınızdayız.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop',
      features: ['Birleşme ve Devralmalar (M&A)', 'Kurumsal Yönetişim', 'Stratejik Ortaklıklar', 'Uyum ve Regülasyon']
    },
    {
      id: 'ceza-hukuku',
      title: 'Dava ve Uyuşmazlık Çözümü',
      subtitle: 'Savunma ve Tahkim',
      description: 'Karmaşık uyuşmazlıkların çözümünde sadece savunma yapmıyor, davanın her aşamasını bir satranç ustası hassasiyetiyle planlıyoruz. Ulusal ve uluslararası tahkim süreçlerinde sarsılmaz bir temsil sağlıyoruz.',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2000&auto=format&fit=crop',
      features: ['Ağır Ceza', 'Bilişim Suçları', 'Tahkim', 'İnfaz Hukuku']
    },
    {
      id: 'gayrimenkul',
      title: 'Gayrimenkul Hukuku',
      subtitle: 'Mülkiyet ve Geliştirme',
      description: 'Büyük ölçekli gayrimenkul davalarının ve uyuşmazlıklarının hukuki altyapısını kuruyor, imar süreçlerinden tapu iptal davalarına kadar geniş bir yelpazede mülkiyetinizi güvence altına alıyoruz.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2000&auto=format&fit=crop',
      features: ['Kentsel Dönüşüm', 'Tapu Tescil', 'Kira Kontratları', 'İmar Uygulamaları']
    },
    {
      id: 'is-hukuku',
      title: 'İş ve Sosyal Güvenlik Hukuku',
      subtitle: 'Kurumsal Uyum Stratejileri',
      description: 'İşçi-işveren ilişkilerinin düzenlenmesi, kıdem-ihbar tazminatları ve sendikal süreçlerin yönetiminde uzman kadromuzla yanınızdayız.',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2959210?q=80&w=2000&auto=format&fit=crop',
      features: ['İşe İade Davaları', 'Kıdem Tazminatı', 'Hizmet Tespiti', 'İş Kazaları']
    },
    {
      id: 'icra-iflas',
      title: 'İcra ve İflas Hukuku',
      subtitle: 'Alacak & Risk Yönetimi',
      description: 'Alacak tahsil süreçleri, konkordato ilanları ve şirketlerin finansal yapılandırma süreçlerini profesyonel bir titizlikle yönetiyoruz.',
      image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2000&auto=format&fit=crop',
      features: ['Alacak Tahsili', 'Konkordato', 'İflas Erteleme', 'Rehin Hukuku']
    },
    {
       id: 'fikri-mulkiyet',
       title: 'Fikri Mülkiyet',
       subtitle: 'İnovasyonun Mutlak Korunması',
       special: true,
       description: 'İnovasyonunuzun ve markanızın değeri, onu ne kadar iyi koruduğunuzla ölçülür. Patent, marka ve telif hakları yönetiminde yaratıcı zekayı hukukla zırhlıyoruz.',
       image: 'https://images.unsplash.com/photo-1589254065878-43c98864d06a?q=80&w=2000&auto=format&fit=crop',
       features: ['Marka Tescili', 'Patent Hakları', 'Telif Hakları', 'Tescil İptali']
    },
    {
      id: 'tazminat',
      title: 'Tazminat ve Değer Kaybı',
      subtitle: 'Adil Hak Kazanımı',
      description: 'Trafik kazaları, sigorta hukuku ve iş kazaları sonrası oluşan maddi-manevi zararların ve araç değer kaybı süreçlerinin takibi.',
      image: 'https://images.unsplash.com/photo-1591189863430-ab87e120f312?q=80&w=2000&auto=format&fit=crop',
      features: ['Maddi Tazminat', 'Değer Kaybı', 'Destekten Yoksunluk', 'Maluliyet']
    },
    {
      id: 'aile-hukuku',
      title: 'Boşanma ve Miras Hukuku',
      subtitle: 'Hassas Süreç Yönetimi',
      description: 'Anlaşmalı ve çekişmeli boşanma, mal rejimi tasfiyesi, velayet ve miras paylaşımı konularında hassas bir süreç yönetimi.',
      image: 'https://images.unsplash.com/photo-1593115057322-e94b77572f20?q=80&w=2000&auto=format&fit=crop',
      features: ['Boşanma', 'Mal Paylaşımı', 'Vasiyetname', 'İzale-i Şuyu']
    },
    {
      id: 'arabuluculuk',
      title: 'Alternatif Uyuşmazlık Çözümleri',
      subtitle: 'Moderne Çözüm Metotları',
      description: 'Arabuluculuk süreçlerinde profesyonel danışmanlık ve uyuşmazlıkların mahkemeye gitmeden hızlıca çözümlenmesi.',
      image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=2000&auto=format&fit=crop',
      features: ['Arabuluculuk', 'Uzlaştırma', 'Protokol Hazırlama', 'Tahkim']
    },
    {
      id: 'idare-vergi',
      title: 'İmar, İdare ve Vergi Hukuku',
      subtitle: 'Kamu İlişkilerinde Denge',
      description: 'İdari işlemlerin iptali, tam yargı davaları ve vergi cezalarına karşı hukuki koruma ve itiraz süreçleri.',
      image: 'https://images.unsplash.com/photo-1447069387593-a5de0862481e?q=80&w=2000&auto=format&fit=crop',
      features: ['İptal Davaları', 'Vergi İtirazları', 'İmar Davaları', 'Kamulaştırma']
    }
  ];

  return (
    <div className="bg-white antialiased selection:bg-secondary-gold/20 scroll-smooth">
      {/* Hero Section: Architectural Header */}
      <section className="relative pt-48 pb-32 bg-surface overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/5 rounded-full translate-x-1/3 -translate-y-1/3 blur-[120px]"></div>
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2600&auto=format&fit=crop" 
            alt="Background" 
            className="w-full h-full object-cover grayscale mix-blend-multiply opacity-10"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <span className="text-secondary font-sans uppercase tracking-[0.5em] text-xs font-bold mb-10 block animate-fade-in opacity-80">LİDERLİĞİNDE HUKUKİ MÜKEMMELLİK</span>
            <h1 className="font-serif display-lg mb-14 italic reveal-up text-primary">
              Karmaşık <br/> <span className="not-italic text-primary/40">Hukuki Hassasiyet.</span>
            </h1>
            <p className="text-2xl text-primary/60 font-light max-w-2xl leading-relaxed italic border-l border-secondary/30 pl-10 reveal-up">
              Her vaka bir strateji, her çözüm bir temeldir. Gül Partners, hukuki zorlukları profesyonel bir disiplinle ele alarak kalıcı ve güvenli sonuçlar tesis eder.
            </p>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 md:px-8 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Main List */}
          <div className="lg:col-span-8 space-y-32">
            {allServices.map((service, index) => (
              service.special ? (
                /* Special Highlighted Section ( Intellectual Property ) */
                <section key={service.id} id={service.id} className="bg-surface-low p-6 md:p-12 text-primary reveal-up scroll-mt-32 border border-outline-variant/10">
                  <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
                    <div className="flex-1">
                      <span className="material-symbols-outlined text-secondary text-5xl mb-6">lightbulb</span>
                      <h2 className="font-serif text-3xl font-bold mb-6">{service.title}</h2>
                      <p className="text-primary/60 leading-relaxed mb-8 italic">{service.description}</p>
                      <button className="border border-secondary text-secondary px-8 py-3 font-semibold hover:bg-secondary hover:text-on-primary transition-all uppercase text-[10px] tracking-widest font-sans">
                        Marka Tescil Danışmanlığı
                      </button>
                    </div>
                    <div className="flex-1 w-full aspect-square bg-surface overflow-hidden">
                      <img 
                        className="w-full h-full object-cover opacity-60 mix-blend-multiply grayscale transition-all duration-[2s] hover:grayscale-0 hover:opacity-100" 
                        src={service.image} 
                        alt={service.title}
                      />
                    </div>
                  </div>
                </section>
              ) : (
                /* Regular Modern Section */
                <section key={service.id} id={service.id} className="group reveal-up scroll-mt-32">
                  <div className="mb-12 overflow-hidden aspect-[21/9] bg-surface-low relative transition-all duration-700">
                    <img 
                      className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105 grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100" 
                      src={service.image} 
                      alt={service.title}
                    />
                  </div>
                  <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                    <div className="md:w-1/3">
                      <h2 className="font-serif text-3xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors">{service.title}</h2>
                      <span className="text-secondary text-[10px] font-sans tracking-widest uppercase font-bold">{service.subtitle}</span>
                    </div>
                    <div className="md:w-2/3">
                      <p className="text-gray-500 mb-8 leading-relaxed italic font-light">{service.description}</p>
                      {service.id === 'gayrimenkul' ? (
                        <div className="grid grid-cols-2 gap-8 py-8 border-t border-outline-variant/10">
                          <div>
                            <span className="block text-3xl font-serif font-bold text-primary">500+</span>
                            <span className="text-[10px] text-primary/40 uppercase tracking-widest font-bold">Başarılı Dava Sonucu</span>
                          </div>
                          <div>
                            <span className="block text-3xl font-serif font-bold text-primary">15+</span>
                            <span className="text-[10px] text-primary/40 uppercase tracking-widest font-bold">Yıllık Derin Tecrübe</span>
                          </div>
                        </div>
                      ) : (
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {service.features.map(feature => (
                          <li key={feature} className="flex items-center gap-3 text-[11px] font-bold text-primary uppercase tracking-wider opacity-60">
                             <CheckCircle2 className="w-5 h-5 text-secondary" />
                             {feature}
                          </li>
                        ))}
                      </ul>
                      )}
                      {(service.id === 'ceza-hukuku') && (
                        <Link href="/iletisim" className="inline-flex items-center gap-3 text-primary font-bold border-b-2 border-secondary pb-1 hover:text-secondary transition-colors mt-8 text-xs tracking-widest uppercase">
                          Detaylı Süreç Analizi <ArrowUpRight className="w-4 h-4" />
                        </Link>
                      )}
                    </div>
                  </div>
                </section>
              )
            ))}
          </div>

          {/* Luxury Redesigned Sidebar */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-40 space-y-12 h-fit pb-12">
            <div className="bg-surface-low p-12 border border-outline-variant/10 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
              
              <h3 className="font-serif text-xl font-bold mb-6 text-primary">Acil hukuki destek mi gerekiyor?</h3>
              <p className="text-sm text-primary/60 mb-10 leading-relaxed font-light italic">Kritik durumlarda zaman en büyük varlıktır. Uzman ekibimizle anında iletişime geçin.</p>
              
              <div className="space-y-6">
                <a className="flex items-center gap-6 bg-surface p-6 border border-outline-variant/10 group transition-all hover:bg-primary hover:text-on-primary" href="tel:+902122113345">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-on-primary/10 group-hover:text-on-primary">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest font-bold opacity-60">7/24 Telefon</span>
                    <span className="font-bold font-serif text-base">+90 (212) 211 3345</span>
                  </div>
                </a>
                <a className="flex items-center gap-6 bg-surface p-6 border border-outline-variant/10 group transition-all hover:bg-primary hover:text-on-primary" href="mailto:av.ferdigul@gmail.com">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-on-primary/10 group-hover:text-on-primary">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest font-bold opacity-60">E-Posta Hattı</span>
                    <span className="font-bold font-serif text-base italic">av.ferdigul@gmail.com</span>
                  </div>
                </a>
              </div>
              <a 
                href="https://wa.me/905330940792?text=Merhaba,%20hızlı%20bir%20hukuki%20danışmanlık%20randevusu%20almak%20istiyorum."
                target="_blank"
                className="w-full mt-10 bg-primary text-on-primary py-6 font-bold tracking-[0.4em] uppercase text-[10px] hover:bg-secondary transition-all duration-700 inline-block text-center shadow-sm"
              >
                Hızlı Randevu Alın
              </a>
            </div>

            <div className="p-12 bg-primary text-on-primary relative overflow-hidden group">
              <div className="absolute right-0 bottom-0 opacity-10 blur-3xl w-48 h-48 bg-secondary rounded-full"></div>
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-secondary mb-10 pb-4 border-b border-on-primary/5">Yayınlarımız</h4>
              <div className="space-y-10">
                <a className="block group/item" href="#">
                  <h5 className="font-serif text-lg font-bold group-hover/item:text-secondary transition-colors leading-tight mb-3">2024 Yılı Vergi Mevzuatı Değişiklikleri Rehberi</h5>
                  <span className="text-[10px] text-on-primary/40 uppercase font-bold tracking-widest block">5 Dakika Okuma • Hukuk Bülteni</span>
                </a>
                <a className="block group/item" href="#">
                  <h5 className="font-serif text-lg font-bold group-hover/item:text-secondary transition-colors leading-tight mb-3">Yapay Zeka ve Fikri Mülkiyet Hakları</h5>
                  <span className="text-[10px] text-on-primary/40 uppercase font-bold tracking-widest block">8 Dakika Okuma • Makale</span>
                </a>
              </div>
            </div>
            
            <div className="p-12 border-l-2 border-secondary/30 italic">
               <p className="text-primary/40 text-sm font-light leading-relaxed">
                  "Hukuk sadece bir kurallar bütünü değil; her detayında sarsılmaz bir güvenin inşa edildiği bir temel taştır."
               </p>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
