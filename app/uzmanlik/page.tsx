import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';

export default function Expertise() {
  const allServices = [
    {
      id: 'gayrimenkul',
      title: 'Kira ve Gayrimenkul Hukuku',
      subtitle: 'Kentsel Dönüşüm Danışmanlığı',
      description: 'Tapu iptali ve tescili, kat karşılığı inşaat sözleşmeleri ve kentsel dönüşüm süreçlerinde uçtan uca hukuki destek sağlıyoruz.',
      image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2000&auto=format&fit=crop',
      features: ['Kentsel Dönüşüm', 'Tapu Tescil', 'Kira Kontratları', 'İmar Uygulamaları']
    },
    {
      id: 'is-hukuku',
      title: 'İş ve Sosyal Güvenlik Hukuku',
      subtitle: 'Kurumsal Uyum',
      description: 'İşçi-işveren ilişkilerinin düzenlenmesi, kıdem-ihbar tazminatları ve sendikal süreçlerin yönetiminde uzman kadromuzla yanınızdayız.',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2959210?q=80&w=2000&auto=format&fit=crop',
      features: ['İşe İade Davaları', 'Kıdem Tazminatı', 'Hizmet Tespiti', 'İş Kazaları']
    },
    {
      id: 'icra-iflas',
      title: 'İcra ve İflas Hukuku',
      description: 'Alacak tahsil süreçleri, konkordato ilanları ve şirketlerin finansal yapılandırma süreçlerini profesyonel bir titizlikle yönetiyoruz.',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2000&auto=format&fit=crop',
      features: ['Alacak Tahsili', 'Konkordato', 'İflas Erteleme', 'Rehin Hukuku']
    },
    {
      id: 'ticaret-hukuku',
      title: 'Sözleşmeler ve Ticaret Hukuku',
      description: 'Yerli ve yabancı ortaklı şirketlerin kuruluş, birleşme, devralma ve günlük ticari operasyonlarının hukuki zeminini oluşturuyoruz.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop',
      features: ['Şirket Kuruluşu', 'M&A Süreçleri', 'Haksız Rekabet', 'Genel Kurul Yönetimi']
    },
    {
      id: 'ceza-hukuku',
      title: 'Ceza ve İnfaz Hukuku',
      description: 'Ekonomik ve bilişim suçları başta olmak üzere, soruşturma ve kovuşturma evrelerinde stratejik savunma çözümleri sunuyoruz.',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2000&auto=format&fit=crop',
      features: ['Ağır Ceza', 'Bilişim Suçları', 'Ekonomik Suçlar', 'İnfaz Hukuku']
    },
    {
       id: 'fikri-mulkiyet',
       title: 'Marka ve Fikri Mülkiyet Hukuku',
       description: 'Marka, patent ve endüstriyel tasarım tescilleri ile bu hakların ihlali durumunda koruma süreçlerini yönetiyoruz.',
       image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2000&auto=format&fit=crop',
       features: ['Marka Tescili', 'Patent Hakları', 'Telif Hakları', 'Tescil İptali']
    },
    {
      id: 'tazminat',
      title: 'Tazminat ve Değer Kaybı',
      description: 'Trafik kazaları, sigorta hukuku ve iş kazaları sonrası oluşan maddi-manevi zararların ve araç değer kaybı süreçlerinin takibi.',
      image: 'https://images.unsplash.com/photo-1453948588355-75e888c99a5d?q=80&w=2000&auto=format&fit=crop',
      features: ['Maddi Tazminat', 'Değer Kaybı', 'Destekten Yoksunluk', 'Maluliyet']
    },
    {
      id: 'aile-hukuku',
      title: 'Boşanma ve Miras Hukuku',
      description: 'Anlaşmalı ve çekişmeli boşanma, mal rejimi tasfiyesi, velayet ve miras paylaşımı konularında hassas bir süreç yönetimi.',
      image: 'https://images.unsplash.com/photo-1533227268408-a774695d9ae9?q=80&w=2000&auto=format&fit=crop',
      features: ['Boşanma', 'Mal Paylaşımı', 'Vasiyetname', 'İzale-i Şuyu']
    },
    {
      id: 'arabuluculuk',
      title: 'Alternatif Uyuşmazlık Çözümleri',
      description: 'Arabuluculuk süreçlerinde profesyonel danışmanlık ve uyuşmazlıkların mahkemeye gitmeden hızlıca çözümlenmesi.',
      image: 'https://images.unsplash.com/photo-1544650039-2287232258aa?q=80&w=2000&auto=format&fit=crop',
      features: ['Arabuluculuk', 'Uzlaştırma', 'Protokol Hazırlama', 'Tahkim']
    },
    {
      id: 'idare-vergi',
      title: 'İmar, İdare ve Vergi Hukuku',
      description: 'İdari işlemlerin iptali, tam yargı davaları ve vergi cezalarına karşı hukuki koruma ve itiraz süreçleri.',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2000&auto=format&fit=crop',
      features: ['İptal Davaları', 'Vergi İtirazları', 'İmar Davaları', 'Kamulaştırma']
    }
  ];

  return (
    <div className="bg-white antialiased">
      {/* Hero Section */}
      <header className="pt-48 pb-24 px-8 max-w-7xl mx-auto border-b border-gray-50">
        <div className="max-w-4xl">
          <span className="text-secondary-gold font-sans uppercase tracking-[0.4em] text-[10px] font-bold mb-6 block animate-fade-in">UZMANLIK ALANLARIMIZ</span>
          <h1 className="font-serif text-5xl md:text-8xl font-bold leading-[1.0] text-primary-navy tracking-tighter mb-10">
            Hukuki Süreçlerde <br/><span className="text-gray-300 italic font-light">Disiplinli Çözümler.</span>
          </h1>
          <p className="text-gray-500 text-xl leading-relaxed max-w-2xl font-light italic">
            Bulut & Partners, on farklı ana disiplinde yüksek profilli danışmanlık hizmeti sunarak müvekkillerinin hukuki güvenliğini mimari bir hassasiyetle inşa eder.
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-8 pb-32 pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          {/* Expertise Content */}
          <div className="lg:col-span-8 space-y-32">
            {allServices.map((service, index) => (
              <section key={service.id} id={service.id} className="group">
                <div className="mb-12 overflow-hidden aspect-[21/9] bg-surface-low rounded-sm relative shadow-2xl shadow-primary-navy/5">
                  <img 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0" 
                    src={service.image} 
                    alt={service.title}
                  />
                  <div className="absolute inset-0 bg-primary-navy/10 group-hover:bg-transparent transition-colors duration-700"></div>
                </div>
                <div className="flex flex-col md:flex-row gap-10 md:gap-20">
                  <div className="md:w-1/3">
                    <span className="text-secondary-gold text-[10px] font-sans tracking-[0.3em] uppercase font-bold mb-4 block">
                      {service.subtitle || 'Uzmanlık Alanı'}
                    </span>
                    <h2 className="font-serif text-3xl font-bold text-primary-navy mb-6 leading-tight group-hover:text-secondary-gold transition-colors">{service.title}</h2>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-600 mb-10 leading-relaxed font-light text-lg">{service.description}</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 border-t border-gray-100 pt-8">
                      {service.features.map(feature => (
                        <li key={feature} className="flex items-center gap-3 text-sm font-bold text-primary-navy uppercase tracking-tighter opacity-80">
                          <div className="w-1.5 h-1.5 bg-secondary-gold rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 sticky top-32 space-y-12">
            <div className="bg-surface-low p-10 border border-gray-100 rounded-sm">
              <h3 className="font-serif text-2xl font-bold text-primary-navy mb-6 tracking-tight">Hızlı Danışmanlık</h3>
              <p className="text-gray-500 mb-12 leading-relaxed font-light italic">Kritik durumlarda uzman görüşü almak için bizimle iletişime geçin.</p>
              
              <div className="space-y-6">
                <a className="flex items-center gap-5 p-6 bg-white rounded-sm border border-gray-50 group hover:bg-primary-navy hover:text-white transition-all duration-300" href="tel:+902122113345">
                   <Phone className="text-secondary-gold group-hover:text-white transition-colors" />
                   <div>
                     <span className="block text-[9px] uppercase tracking-widest font-bold opacity-60">Santral</span>
                     <span className="font-bold text-sm tracking-tight">+90 212 211 3345</span>
                   </div>
                </a>
                <a className="flex items-center gap-5 p-6 bg-white rounded-sm border border-gray-50 group hover:bg-primary-navy hover:text-white transition-all duration-300" href="mailto:info@bulutpartners.com">
                   <Mail className="text-secondary-gold group-hover:text-white transition-colors" />
                   <div>
                     <span className="block text-[9px] uppercase tracking-widest font-bold opacity-60">E-Posta</span>
                     <span className="font-bold text-sm tracking-tight">info@bulutpartners.com</span>
                   </div>
                </a>
              </div>
              
              <button className="w-full mt-10 bg-secondary-gold text-primary-navy py-6 font-bold text-xs uppercase tracking-[0.2em] hover:bg-primary-navy hover:text-white transition-all duration-500 shadow-xl shadow-secondary-gold/20">
                RANDEVU OLUŞTURUN
              </button>
            </div>

            <div className="p-10 bg-primary-navy text-white rounded-sm">
              <span className="text-secondary-gold font-sans tracking-[0.3em] uppercase text-[10px] font-bold mb-6 block">Vizyonumuz</span>
              <p className="text-xl font-serif italic font-light leading-relaxed mb-6">"Hukuk, sadece dosyaları değil; hayatları ve geleceği inşa etmektir."</p>
              <div className="w-12 h-px bg-white/30"></div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
