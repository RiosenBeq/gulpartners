import Link from 'next/link';
import { Mail, Phone, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function Expertise() {
  const allServices = [
    {
      id: 'gayrimenkul',
      title: 'Gayrimenkul ve Kira Hukuku',
      subtitle: 'Mülkiyet & Kentsel Dönüşüm',
      description: 'Tapu iptali ve tescili, kat karşılığı inşaat sözleşmeleri ve kentsel dönüşüm süreçlerinde uçtan uca hukuki destek sağlıyoruz.',
      image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2000&auto=format&fit=crop',
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
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2000&auto=format&fit=crop',
      features: ['Alacak Tahsili', 'Konkordato', 'İflas Erteleme', 'Rehin Hukuku']
    },
    {
      id: 'ticaret-hukuku',
      title: 'Sözleşmeler ve Ticaret Hukuku',
      subtitle: 'Global Ticaret Hukuku',
      description: 'Yerli ve yabancı ortaklı şirketlerin kuruluş, birleşme, devralma ve günlük ticari operasyonlarının hukuki zeminini oluşturuyoruz.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop',
      features: ['Şirket Kuruluşu', 'M&A Süreçleri', 'Haksız Rekabet', 'Genel Kurul Yönetimi']
    },
    {
      id: 'ceza-hukuku',
      title: 'Ceza ve İnfaz Hukuku',
      subtitle: 'Kararlı & Stratejik Savunma',
      description: 'Ekonomik ve bilişim suçları başta olmak üzere, soruşturma ve kovuşturma evrelerinde stratejik savunma çözümleri sunuyoruz.',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2000&auto=format&fit=crop',
      features: ['Ağır Ceza', 'Bilişim Suçları', 'Ekonomik Suçlar', 'İnfaz Hukuku']
    },
    {
       id: 'fikri-mulkiyet',
       title: 'Marka ve Fikri Mülkiyet Hukuku',
       subtitle: 'İnovasyonun Mutlak Korunması',
       description: 'Marka, patent ve endüstriyel tasarım tescilleri ile bu hakların ihlali durumunda koruma süreçlerini yönetiyoruz.',
       image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2000&auto=format&fit=crop',
       features: ['Marka Tescili', 'Patent Hakları', 'Telif Hakları', 'Tescil İptali']
    },
    {
      id: 'tazminat',
      title: 'Tazminat ve Değer Kaybı',
      subtitle: 'Adil Hak Kazanımı',
      description: 'Trafik kazaları, sigorta hukuku ve iş kazaları sonrası oluşan maddi-manevi zararların ve araç değer kaybı süreçlerinin takibi.',
      image: 'https://images.unsplash.com/photo-1453948588355-75e888c99a5d?q=80&w=2000&auto=format&fit=crop',
      features: ['Maddi Tazminat', 'Değer Kaybı', 'Destekten Yoksunluk', 'Maluliyet']
    },
    {
      id: 'aile-hukuku',
      title: 'Boşanma ve Miras Hukuku',
      subtitle: 'Hassas Süreç Yönetimi',
      description: 'Anlaşmalı ve çekişmeli boşanma, mal rejimi tasfiyesi, velayet ve miras paylaşımı konularında hassas bir süreç yönetimi.',
      image: 'https://images.unsplash.com/photo-1533227268408-a774695d9ae9?q=80&w=2000&auto=format&fit=crop',
      features: ['Boşanma', 'Mal Paylaşımı', 'Vasiyetname', 'İzale-i Şuyu']
    },
    {
      id: 'arabuluculuk',
      title: 'Alternatif Uyuşmazlık Çözümleri',
      subtitle: 'Moderne Çözüm Metotları',
      description: 'Arabuluculuk süreçlerinde profesyonel danışmanlık ve uyuşmazlıkların mahkemeye gitmeden hızlıca çözümlenmesi.',
      image: 'https://images.unsplash.com/photo-1544650039-2287232258aa?q=80&w=2000&auto=format&fit=crop',
      features: ['Arabuluculuk', 'Uzlaştırma', 'Protokol Hazırlama', 'Tahkim']
    },
    {
      id: 'idare-vergi',
      title: 'İmar, İdare ve Vergi Hukuku',
      subtitle: 'Kamu İlişkilerinde Denge',
      description: 'İdari işlemlerin iptali, tam yargı davaları ve vergi cezalarına karşı hukuki koruma ve itiraz süreçleri.',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2000&auto=format&fit=crop',
      features: ['İptal Davaları', 'Vergi İtirazları', 'İmar Davaları', 'Kamulaştırma']
    }
  ];

  return (
    <div className="bg-white antialiased selection:bg-secondary-gold/20">
      {/* Hero Section: Editorial Header */}
      <header className="relative pt-64 pb-32 overflow-hidden bg-primary-navy">
        <div className="absolute inset-0 opacity-20 grayscale">
           <img 
            className="w-full h-full object-cover" 
            src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2600&auto=format&fit=crop" 
            alt="Law Library" 
          />
        </div>
        <div className="max-w-7xl mx-auto px-12 relative z-10">
          <div className="max-w-5xl">
            <span className="text-secondary-gold font-sans uppercase tracking-[0.6em] text-[11px] font-bold mb-10 block animate-fade-in">UZMANLIK ALANLARIMIZ</span>
            <h1 className="font-serif text-6xl md:text-[9rem] font-bold leading-[0.85] text-white tracking-[-0.04em] mb-16 italic">
              Disiplinle <br/> <span className="text-gray-400 not-italic">Şekillenen Adalet.</span>
            </h1>
            <p className="text-gray-400 text-2xl leading-relaxed max-w-3xl font-light italic border-l border-white/10 pl-10">
              Gül & Partners, her hukuki süreci bir mimari proje hassasiyetiyle ele alır. Karmaşıklığı stratejik bir avantaja dönüştüren 10 ana disiplinde hizmetinizdeyiz.
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-[1440px] mx-auto px-12 pb-48 pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-32 items-start">
          
          {/* Main List */}
          <div className="lg:col-span-8 space-y-48">
            {allServices.map((service, index) => (
              <section key={service.id} id={service.id} className="group reveal-up opacity-100 translate-y-0">
                <div className="mb-16 overflow-hidden aspect-[21/10] bg-surface-low relative shadow-[0_40px_100px_rgba(0,0,0,0.08)]">
                  <img 
                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105 grayscale group-hover:grayscale-0" 
                    src={service.image} 
                    alt={service.title}
                  />
                  <div className="absolute inset-0 bg-primary-navy/5 group-hover:bg-transparent transition-colors duration-1000"></div>
                </div>
                <div className="flex flex-col md:flex-row gap-16 md:gap-24">
                  <div className="md:w-2/5">
                    <span className="text-secondary-gold text-[10px] font-sans tracking-[0.4em] uppercase font-bold mb-6 block">
                      {service.subtitle}
                    </span>
                    <h2 className="font-serif text-4xl font-bold text-primary-navy mb-8 leading-[1.1] transition-colors group-hover:text-secondary-gold">
                      {service.title}
                    </h2>
                  </div>
                  <div className="md:w-3/5">
                    <p className="text-gray-500 mb-12 leading-relaxed font-light text-xl italic">{service.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12 pt-12 border-t border-gray-100">
                      {service.features.map(feature => (
                        <div key={feature} className="flex items-center gap-4 text-[10px] font-bold text-primary-navy uppercase tracking-[0.2em] opacity-70">
                          <CheckCircle2 className="w-4 h-4 text-secondary-gold" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            ))}
          </div>

          {/* Luxury Sidebar */}
          <aside className="lg:col-span-4 sticky top-40">
            <div className="bg-primary-navy p-16 text-white shadow-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-gold/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
              
              <h3 className="font-serif text-3xl font-bold mb-8 tracking-tight">Hızlı Danışmanlık</h3>
              <p className="text-gray-400 mb-16 leading-relaxed font-light italic text-lg">Acil ve kritik hukuki ihtiyaçlarınız için bir kahve eşliğinde strateji geliştirelim.</p>
              
              <div className="space-y-12">
                <a className="group block" href="tel:+902122113345">
                   <span className="block text-[10px] uppercase tracking-[0.3em] font-bold text-secondary-gold mb-4 opacity-100">01. Telefon</span>
                   <span className="text-2xl font-serif font-bold text-white group-hover:text-secondary-gold transition-colors">+90 212 211 3345</span>
                </a>
                <a className="group block" href="mailto:av.ferdigul@gmail.com">
                   <span className="block text-[10px] uppercase tracking-[0.3em] font-bold text-secondary-gold mb-4 opacity-100">02. E-Posta</span>
                   <span className="text-lg font-serif italic text-white group-hover:text-secondary-gold transition-all">av.ferdigul@gmail.com</span>
                </a>
              </div>
              
              <button className="w-full mt-20 bg-secondary-gold text-primary-navy py-6 font-bold text-[11px] tracking-[0.3em] uppercase hover:bg-white transition-all duration-700 shadow-2xl">
                RANDEVU OLUŞTURUN
              </button>
            </div>

            <div className="mt-16 p-12 bg-surface-low border border-gray-100 relative overflow-hidden group hover:bg-white transition-all duration-700">
               <div className="flex items-center gap-6 mb-8 text-primary-navy font-bold text-[10px] tracking-[0.4em] uppercase">
                 <Link href="/iletisim" className="hover:text-secondary-gold transition-colors">Ofis Konumu</Link>
                 <ArrowUpRight className="w-4 h-4 text-secondary-gold" />
               </div>
               <p className="text-gray-400 text-sm italic font-light leading-relaxed">Esentepe, Kore Şehitleri Cd. No:30/10, 34394 Şişli/İstanbul</p>
            </div>
          </aside>

        </div>
      </main>
    </div>
  );
}
