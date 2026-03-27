import { ArrowRight, Building2, Gavel, Handshake, Microscope, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Expertise() {
  const services = [
    {
      id: 'sirketler-hukuku',
      title: 'Şirketler Hukuku & Birleşmeler',
      description: 'Kurumsal yönetim, pay sahipliği sözleşmeleri, şirket birleşme ve devralmaları (M&A), bölünme ve tür değiştirmeler dahil olmak üzere şirketler hukukunun tüm alanlarında stratejik danışmanlık sunuyoruz. Ulusal ve uluslararası yatırımcılara, karmaşık işlemlerde riskleri minimize eden ve değeri maksimize eden çözümler üretiyoruz.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop',
      icon: <Building2 className="w-8 h-8 text-primary-navy" />,
      bullets: [
        'Birleşme ve Devralmalar (M&A)',
        'Kurumsal Yönetim ve Uyum',
        'Ortaklık Sözleşmeleri (JV)',
      ],
    },
    {
      id: 'uluslararasi-tahkim',
      title: 'Uluslararası Tahkim',
      description: 'Sınır ötesi ticari uyuşmazlıklarda, ICSID, ICC, LCIA ve diğer önde gelen tahkim merkezleri kuralları uyarınca müvekkillerimizi temsil ediyoruz. Çok uluslu şirketler ve devlet kurumları arasındaki karmaşık ihtilaflarda derin bir deneyime sahibiz.',
      image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2000&auto=format&fit=crop',
      icon: <Gavel className="w-8 h-8 text-primary-navy" />,
      bullets: [
        'Ticari Tahkim',
        'Yatırım Tahkimi',
        'Tahkim Kararlarının Tenfizi',
      ],
    },
    {
      id: 'fikri-mulkiyet',
      title: 'Fikri Mülkiyet',
      description: 'Marka, patent, telif hakları ve ticari sırların korunması, tescili ve ihlallerin önlenmesi konularında kapsamlı hizmet veriyoruz. İnovasyon odaklı şirketlerin en değerli varlıklarını global ölçekte güvence altına alıyoruz.',
      image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2000&auto=format&fit=crop',
      icon: <Microscope className="w-8 h-8 text-primary-navy" />,
      bullets: [
        'Marka ve Patent Tescili',
        'Telif Hakları İhlalleri',
        'Teknoloji Transferi Sözleşmeleri',
      ],
    },
  ];

  return (
    <div className="bg-surface">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 bg-surface overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-surface-low rounded-bl-[100px] -mr-20 -mt-20 z-0"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-secondary-gold text-sm font-bold tracking-[0.2em] uppercase mb-6 block">
              Uzmanlık Alanlarımız
            </span>
            <h1 className="font-serif text-5xl md:text-6xl text-primary-navy font-bold tracking-tight leading-[1.1] mb-8">
              Karmaşık Hukuk Süreçlerinde <span className="italic font-light text-gray-500">Mimari Hassasiyet</span>
            </h1>
            <p className="font-sans text-lg text-gray-600 leading-relaxed max-w-2xl">
              Her hukuki mesele, kendine özgü bir mimari gerektirir. Sektörel derinliğimiz ve multidisipliner yaklaşımımızla, en karmaşık sorunları bile net ve uygulanabilir stratejilere dönüştürüyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Services List & Sidebar */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Main Content (Services) */}
            <div className="lg:col-span-8 space-y-24">
              {services.map((service) => (
                <div key={service.id} id={service.id} className="group">
                  <div className="relative h-[400px] mb-8 overflow-hidden rounded-sm">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary-navy/10 group-hover:bg-transparent transition-colors duration-700"></div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="hidden md:flex flex-shrink-0 w-16 h-16 bg-surface-low items-center justify-center rounded-sm">
                      {service.icon}
                    </div>
                    <div>
                      <h2 className="font-serif text-3xl font-bold text-primary-navy mb-4 group-hover:text-secondary-gold transition-colors">
                        {service.title}
                      </h2>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <ul className="space-y-3 mb-8">
                        {service.bullets.map((bullet, idx) => (
                          <li key={idx} className="flex items-center gap-3 text-sm text-gray-700">
                            <span className="w-1.5 h-1.5 bg-secondary-gold rounded-full"></span> {bullet}
                          </li>
                        ))}
                      </ul>
                      <Link
                        to="/ekip"
                        className="inline-flex items-center gap-2 text-sm font-bold text-primary-navy hover:text-secondary-gold transition-colors uppercase tracking-wider"
                      >
                        İlgili Ekibi Gör <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Sticky Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-8">
                {/* Quick Navigation */}
                <div className="bg-surface p-8 rounded-sm editorial-shadow">
                  <h3 className="font-serif text-xl font-bold text-primary-navy mb-6">
                    Hızlı Erişim
                  </h3>
                  <ul className="space-y-4">
                    {services.map((service) => (
                      <li key={service.id}>
                        <a
                          href={`#${service.id}`}
                          className="text-gray-600 hover:text-secondary-gold text-sm font-medium transition-colors flex items-center gap-2"
                        >
                          <span className="w-1 h-1 bg-gray-300 rounded-full"></span> {service.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact CTA */}
                <div className="bg-primary-navy p-8 rounded-sm editorial-shadow text-white">
                  <h3 className="font-serif text-xl font-bold mb-4">
                    Hukuki Danışmanlık
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    Uzmanlık alanlarımızla ilgili detaylı bilgi almak veya hukuki sürecinizi başlatmak için bizimle iletişime geçin.
                  </p>
                  <Link
                    to="/iletisim"
                    className="w-full bg-secondary-gold text-primary-navy px-6 py-3 rounded-sm text-sm font-bold hover:bg-white transition-colors flex items-center justify-center gap-2 mb-4"
                  >
                    Bize Ulaşın <ArrowRight className="w-4 h-4" />
                  </Link>
                  <div className="flex items-center gap-3 text-sm text-gray-400 justify-center">
                    <Phone className="w-4 h-4" />
                    <span>+90 (212) 555 0123</span>
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
