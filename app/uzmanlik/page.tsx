import Link from 'next/link';
import { Linkedin, Mail } from 'lucide-react';

export default function Expertise() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <header className="pt-48 pb-24 px-8 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <span className="text-secondary-gold font-sans uppercase tracking-[0.3em] text-xs font-semibold mb-6 block">Küratörlüğünde Hukuki Mükemmellik</span>
          <h1 className="font-serif text-5xl md:text-7xl font-bold leading-[1.1] text-primary-navy tracking-tight mb-8">
            Karmaşık Hukuk Süreçlerinde Mimari Hassasiyet.
          </h1>
          <p className="text-gray-500 text-xl leading-relaxed max-w-2xl font-light">
            Her vaka bir yapı, her strateji bir temeldir. Gul Partners, hukuki zorlukları birer mimari disiplinle ele alarak kalıcı ve güvenli çözümler inşa eder.
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-8 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Expertise Content */}
          <div className="lg:col-span-8 space-y-32">
            
            {/* Şirketler Hukuku */}
            <section className="group">
              <div className="mb-12 overflow-hidden aspect-[21/9] bg-surface-low rounded-sm">
                <img 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000" 
                  alt="Modern architectural boardroom"
                />
              </div>
              <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                <div className="md:w-1/3">
                  <h2 className="font-serif text-3xl font-bold text-primary-navy mb-4">Şirketler Hukuku</h2>
                  <span className="text-secondary-gold text-sm font-sans tracking-widest uppercase font-bold">Kurumsal Çözümler</span>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-600 mb-8 leading-relaxed font-light">Küresel pazarda stratejik hamleler yaparken, kurumsal yapınızın hukuki güvenliğini en üst düzeyde sağlıyoruz. Birleşme ve devralmalardan genel kurul yönetimine kadar her aşamada titizlikle yanınızdayız.</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <li className="flex items-center gap-3 text-sm font-medium text-primary-navy">
                      <span className="material-symbols-outlined text-secondary-gold text-xl">check_circle</span>
                      Birleşme ve Devralmalar (M&A)
                    </li>
                    <li className="flex items-center gap-3 text-sm font-medium text-primary-navy">
                      <span className="material-symbols-outlined text-secondary-gold text-xl">check_circle</span>
                      Kurumsal Yönetişim
                    </li>
                    <li className="flex items-center gap-3 text-sm font-medium text-primary-navy">
                      <span className="material-symbols-outlined text-secondary-gold text-xl">check_circle</span>
                      Stratejik Ortaklıklar
                    </li>
                    <li className="flex items-center gap-3 text-sm font-medium text-primary-navy">
                      <span className="material-symbols-outlined text-secondary-gold text-xl">check_circle</span>
                      Uyum ve Regülasyon
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Dava ve Uyuşmazlık Çözümü */}
            <section className="group">
              <div className="mb-12 overflow-hidden aspect-[21/9] bg-surface-low rounded-sm">
                <img 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2000" 
                  alt="Scales of justice artistic representation"
                />
              </div>
              <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                <div className="md:w-1/3">
                  <h2 className="font-serif text-3xl font-bold text-primary-navy mb-4">Dava ve Uyuşmazlık Çözümü</h2>
                  <span className="text-secondary-gold text-sm font-sans tracking-widest uppercase font-bold">Savunma ve Tahkim</span>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-600 mb-6 leading-relaxed font-light">Karmaşık uyuşmazlıkların çözümünde sadece savunma yapmıyor, davanın her aşamasını bir satranç ustası hassasiyetiyle planlıyoruz. Ulusal ve uluslararası tahkim süreçlerinde sarsılmaz bir temsil sağlıyoruz.</p>
                  <Link href="/iletisim" className="inline-flex items-center gap-2 text-primary-navy font-bold border-b-2 border-secondary-gold pb-1 hover:text-secondary-gold transition-colors text-sm uppercase tracking-wider">
                    Detaylı Süreç Analizi <span className="material-symbols-outlined text-lg">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </section>

            {/* Gayrimenkul Hukuku */}
            <section className="group">
              <div className="mb-12 overflow-hidden aspect-[21/9] bg-surface-low rounded-sm">
                <img 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  src="https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2000" 
                  alt="Modern skyscrapers glass facade"
                />
              </div>
              <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                <div className="md:w-1/3">
                  <h2 className="font-serif text-3xl font-bold text-primary-navy mb-4">Gayrimenkul Hukuku</h2>
                  <span className="text-secondary-gold text-sm font-sans tracking-widest uppercase font-bold">Mülkiyet ve Geliştirme</span>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-600 mb-6 leading-relaxed font-light">Büyük ölçekli gayrimenkul projelerinin hukuki altyapısını kuruyor, imar süreçlerinden tapu iptal davalarına kadar geniş bir yelpazede mülkiyetinizi güvence altına alıyoruz.</p>
                  <div className="grid grid-cols-2 gap-8 py-8 border-t border-gray-100">
                    <div>
                      <span className="block text-3xl font-serif font-bold text-primary-navy">500+</span>
                      <span className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-bold">Başarılı Proje Teslimi</span>
                    </div>
                    <div>
                      <span className="block text-3xl font-serif font-bold text-primary-navy">15+</span>
                      <span className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-bold">Yıllık Derin Tecrübe</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Fikri Mülkiyet */}
            <section className="bg-primary-navy p-12 text-white rounded-sm overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-gold opacity-5 blur-[100px] -mr-32 -mt-32"></div>
              <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
                <div className="flex-1">
                  <span className="material-symbols-outlined text-secondary-gold text-5xl mb-6">lightbulb</span>
                  <h2 className="font-serif text-3xl font-bold mb-6">Fikri Mülkiyet</h2>
                  <p className="text-gray-400 leading-relaxed mb-8 font-light italic">İnovasyonunuzun ve markanızın değeri, onu ne kadar iyi koruduğunuzla ölçülür. Patent, marka ve telif hakları yönetiminde yaratıcı zekayı hukukla zırhlıyoruz.</p>
                  <button className="border border-secondary-gold text-secondary-gold px-8 py-3 font-bold text-xs uppercase tracking-widest hover:bg-secondary-gold hover:text-primary-navy transition-all duration-500">
                    Marka Tescil Danışmanlığı
                  </button>
                </div>
                <div className="flex-1 w-full aspect-square bg-white/5 overflow-hidden rounded-sm">
                  <img 
                    className="w-full h-full object-cover opacity-60 mix-blend-luminosity grayscale" 
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2000" 
                    alt="Creative concepts sketching"
                  />
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 sticky top-32 space-y-8">
            <div className="bg-surface-low p-10 border border-gray-100 rounded-sm shadow-2xl shadow-primary-navy/5">
              <h3 className="font-serif text-xl font-bold text-primary-navy mb-4">Acil hukuki destek mi gerekiyor?</h3>
              <p className="text-sm text-gray-500 mb-10 leading-relaxed font-light">Kritik durumlarda zaman en büyük varlıktır. Uzman ekibimizle anında iletişime geçin.</p>
              <div className="space-y-4">
                <a className="flex items-center gap-4 bg-white p-5 group transition-all hover:bg-primary-navy hover:text-white border border-gray-50" href="tel:+902120000000">
                  <div className="w-12 h-12 rounded-full bg-secondary-gold/10 flex items-center justify-center text-secondary-gold group-hover:bg-white/10 group-hover:text-white transition-colors duration-500">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest font-bold opacity-60">7/24 Telefon</span>
                    <span className="font-bold text-sm">+90 (212) 000 00 00</span>
                  </div>
                </a>
                <a className="flex items-center gap-4 bg-white p-5 group transition-all hover:bg-primary-navy hover:text-white border border-gray-50" href="mailto:info@gulpartners.com">
                  <div className="w-12 h-12 rounded-full bg-secondary-gold/10 flex items-center justify-center text-secondary-gold group-hover:bg-white/10 group-hover:text-white transition-colors duration-500">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest font-bold opacity-60">E-Posta Hattı</span>
                    <span className="font-bold text-sm">info@gulpartners.com</span>
                  </div>
                </a>
              </div>
              <button className="w-full mt-10 bg-secondary-gold text-primary-navy py-5 font-bold text-xs uppercase tracking-widest hover:bg-primary-navy hover:text-white transition-all duration-500 rounded-sm shadow-lg shadow-secondary-gold/20">
                Hızlı Randevu Alın
              </button>
            </div>

            <div className="p-10 bg-surface-low/50 rounded-sm border border-gray-50">
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-secondary-gold mb-6">Yayınlarımız</h4>
              <div className="space-y-8">
                <a className="block group" href="#">
                  <h5 className="font-serif text-lg font-bold text-primary-navy group-hover:text-secondary-gold transition-colors leading-tight mb-2">2024 Yılı Vergi Mevzuatı Değişiklikleri Rehberi</h5>
                  <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">5 Dakika Okuma • Hukuk Bülteni</span>
                </a>
                <a className="block group" href="#">
                  <h5 className="font-serif text-lg font-bold text-primary-navy group-hover:text-secondary-gold transition-colors leading-tight mb-2">Yapay Zeka ve Fikri Mülkiyet Hakları</h5>
                  <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">8 Dakika Okuma • Makale</span>
                </a>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
