import { ArrowRight, ArrowUpRight, Building2, ChevronsDown, Handshake, Microscope } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-surface">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-24 overflow-hidden bg-primary-navy">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2000&auto=format&fit=crop"
            alt="Law Library"
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-navy via-primary-navy/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-secondary-gold/10 text-secondary-gold text-xs font-bold tracking-[0.2em] uppercase mb-8 border border-secondary-gold/20">
            Hukuki Mükemmellik
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-bold tracking-tight leading-[1.1] mb-8 max-w-5xl mx-auto">
            Geleceğin Hukuk <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-gold to-yellow-200">
              Mimarları
            </span>
          </h1>
          <p className="font-sans text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            Karmaşık hukuki süreçlerde mimari hassasiyetle inşa edilmiş, stratejik ve sonuç odaklı çözümler sunan yeni nesil hukuk bürosu.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/uzmanlik"
              className="w-full sm:w-auto bg-secondary-gold text-primary-navy px-8 py-4 rounded-sm text-sm font-bold hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Uzmanlık Alanlarımız{' '}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/ekip"
              className="w-full sm:w-auto bg-transparent border border-gray-500 text-white px-8 py-4 rounded-sm text-sm font-medium hover:border-white hover:bg-white/5 transition-all duration-300 text-center"
            >
              Ekibimizle Tanışın
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <ChevronsDown className="w-6 h-6 text-gray-400" />
        </div>
      </section>

      {/* Expertise Section (Bento Grid) */}
      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-secondary-gold text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
                Uzmanlık
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-primary-navy font-bold tracking-tight leading-tight">
                Kurumsal Çözümler
              </h2>
            </div>
            <Link
              to="/uzmanlik"
              className="text-primary-navy font-medium hover:text-secondary-gold transition-colors flex items-center gap-2 group pb-2 border-b border-primary-navy hover:border-secondary-gold"
            >
              Tüm Alanları İncele{' '}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Large Card */}
            <Link
              to="/uzmanlik"
              className="md:col-span-2 bg-white p-10 rounded-sm editorial-shadow group hover:-translate-y-1 transition-transform duration-500 relative overflow-hidden block"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-surface-low rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110 duration-500"></div>
              <Building2 className="w-10 h-10 text-secondary-gold mb-6 relative z-10" />
              <h3 className="font-serif text-2xl font-bold text-primary-navy mb-4 relative z-10">
                Şirketler Hukuku & Birleşmeler
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-md relative z-10">
                Ulusal ve uluslararası ölçekteki şirket birleşmeleri, devralmalar ve kurumsal yönetim süreçlerinde stratejik hukuki danışmanlık.
              </p>
              <div className="mt-8 flex items-center gap-2 text-sm font-medium text-primary-navy group-hover:text-secondary-gold transition-colors relative z-10">
                Detaylı Bilgi <ArrowUpRight className="w-4 h-4" />
              </div>
            </Link>

            {/* Small Card 1 */}
            <Link
              to="/uzmanlik"
              className="bg-white p-10 rounded-sm editorial-shadow group hover:-translate-y-1 transition-transform duration-500 relative overflow-hidden block"
            >
              <Handshake className="w-10 h-10 text-secondary-gold mb-6 relative z-10" />
              <h3 className="font-serif text-xl font-bold text-primary-navy mb-4 relative z-10">
                Uluslararası Tahkim
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed relative z-10">
                Sınır ötesi ticari uyuşmazlıklarda global standartlarda temsil.
              </p>
              <div className="mt-8 flex items-center gap-2 text-sm font-medium text-primary-navy group-hover:text-secondary-gold transition-colors relative z-10">
                Detaylı Bilgi <ArrowUpRight className="w-4 h-4" />
              </div>
            </Link>

            {/* Small Card 2 */}
            <Link
              to="/uzmanlik"
              className="bg-white p-10 rounded-sm editorial-shadow group hover:-translate-y-1 transition-transform duration-500 relative overflow-hidden block"
            >
              <Microscope className="w-10 h-10 text-secondary-gold mb-6 relative z-10" />
              <h3 className="font-serif text-xl font-bold text-primary-navy mb-4 relative z-10">
                Fikri Mülkiyet
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed relative z-10">
                İnovasyon ve marka değerinizin global ölçekte korunması.
              </p>
              <div className="mt-8 flex items-center gap-2 text-sm font-medium text-primary-navy group-hover:text-secondary-gold transition-colors relative z-10">
                Detaylı Bilgi <ArrowUpRight className="w-4 h-4" />
              </div>
            </Link>

            {/* Wide Card */}
            <div className="md:col-span-2 bg-primary-navy p-10 rounded-sm editorial-shadow relative overflow-hidden flex flex-col justify-center">
              <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"></div>
              <div className="relative z-10">
                <span className="text-secondary-gold text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
                  Sektörel Odak
                </span>
                <h3 className="font-serif text-2xl font-bold text-white mb-4">
                  Teknoloji & Finans Regülasyonları
                </h3>
                <p className="text-gray-300 leading-relaxed max-w-lg mb-8">
                  Hızla değişen dijital regülasyonlar ve fintech mevzuatında, yenilikçi şirketlere proaktif hukuki rehberlik sunuyoruz.
                </p>
                <Link
                  to="/iletisim"
                  className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-secondary-gold transition-colors"
                >
                  Danışmanlık Alın <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section (Split Layout) */}
      <section className="py-0 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image Side */}
          <div className="relative h-[50vh] lg:h-auto min-h-[600px]">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop"
              alt="Modern Office"
              className="absolute inset-0 w-full h-full object-cover grayscale"
            />
            <div className="absolute inset-0 bg-primary-navy/20 mix-blend-multiply"></div>
          </div>
          {/* Content Side */}
          <div className="flex items-center justify-center p-12 lg:p-24 bg-surface-low">
            <div className="max-w-xl">
              <span className="text-secondary-gold text-sm font-bold tracking-[0.2em] uppercase mb-6 block">
                Vizyonumuz
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-primary-navy font-bold tracking-tight leading-tight mb-8">
                Hukuku Yeniden Tanımlayan Bir Yaklaşım
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Gul Partners olarak, hukuku sadece kuralların uygulandığı statik bir alan olarak değil, müvekkillerimizin büyüme stratejilerini destekleyen dinamik bir araç olarak görüyoruz.
                </p>
                <p>
                  Geleneksel kalıpların ötesine geçerek, karmaşık ticari sorunlara yenilikçi, şeffaf ve sonuç odaklı çözümler üretiyoruz. Amacımız, sadece riskleri yönetmek değil, aynı zamanda yeni fırsatlar yaratmaktır.
                </p>
              </div>
              <div className="mt-12 grid grid-cols-2 gap-8 border-t border-gray-200 pt-12">
                <div>
                  <div className="font-serif text-4xl font-bold text-primary-navy mb-2">
                    25+
                  </div>
                  <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">
                    Yıllık Deneyim
                  </div>
                </div>
                <div>
                  <div className="font-serif text-4xl font-bold text-primary-navy mb-2">
                    40+
                  </div>
                  <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">
                    Uzman Avukat
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
