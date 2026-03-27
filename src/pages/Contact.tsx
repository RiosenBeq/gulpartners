import { Clock, Globe, Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-surface">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 bg-surface overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-surface-low rounded-bl-[100px] -mr-20 -mt-20 z-0"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-secondary-gold text-sm font-bold tracking-[0.2em] uppercase mb-6 block">
              İletişim
            </span>
            <h1 className="font-serif text-5xl md:text-6xl text-primary-navy font-bold tracking-tight leading-[1.1] mb-8">
              Hukuki Çözümler İçin <span className="italic font-light text-gray-500">Bizimle Bağlantı Kurun</span>
            </h1>
            <p className="font-sans text-lg text-gray-600 leading-relaxed max-w-2xl">
              Uzman ekibimizle görüşmek, hukuki süreçleriniz hakkında bilgi almak veya danışmanlık talebinde bulunmak için aşağıdaki formu doldurabilir veya doğrudan ofislerimizle iletişime geçebilirsiniz.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-primary-navy mb-8">
                Merkez Ofis
              </h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-surface-low flex items-center justify-center rounded-sm flex-shrink-0">
                    <MapPin className="w-6 h-6 text-secondary-gold" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-primary-navy mb-2">Adres</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Levent, Büyükdere Cd. No:195<br />
                      34394 Şişli/İstanbul, Türkiye
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-surface-low flex items-center justify-center rounded-sm flex-shrink-0">
                    <Phone className="w-6 h-6 text-secondary-gold" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-primary-navy mb-2">Telefon</h3>
                    <p className="text-gray-600 leading-relaxed">
                      <a href="tel:+902125550123" className="hover:text-secondary-gold transition-colors">
                        +90 (212) 555 0123
                      </a>
                      <br />
                      <a href="tel:+902125550124" className="hover:text-secondary-gold transition-colors">
                        +90 (212) 555 0124
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-surface-low flex items-center justify-center rounded-sm flex-shrink-0">
                    <Mail className="w-6 h-6 text-secondary-gold" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-primary-navy mb-2">E-posta</h3>
                    <p className="text-gray-600 leading-relaxed">
                      <a href="mailto:info@gulpartners.com" className="hover:text-secondary-gold transition-colors">
                        info@gulpartners.com
                      </a>
                      <br />
                      <a href="mailto:careers@gulpartners.com" className="hover:text-secondary-gold transition-colors">
                        careers@gulpartners.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-surface-low flex items-center justify-center rounded-sm flex-shrink-0">
                    <Clock className="w-6 h-6 text-secondary-gold" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-primary-navy mb-2">Çalışma Saatleri</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Pazartesi - Cuma: 09:00 - 18:00<br />
                      Hafta sonu: Kapalı
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-surface p-10 rounded-sm editorial-shadow">
              <h2 className="font-serif text-2xl font-bold text-primary-navy mb-8">
                Mesaj Gönderin
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      Adınız
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-sm focus:outline-none focus:border-secondary-gold focus:ring-1 focus:ring-secondary-gold transition-colors"
                      placeholder="Adınız"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Soyadınız
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-sm focus:outline-none focus:border-secondary-gold focus:ring-1 focus:ring-secondary-gold transition-colors"
                      placeholder="Soyadınız"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-posta Adresiniz
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-sm focus:outline-none focus:border-secondary-gold focus:ring-1 focus:ring-secondary-gold transition-colors"
                    placeholder="ornek@sirket.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Konu
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-sm focus:outline-none focus:border-secondary-gold focus:ring-1 focus:ring-secondary-gold transition-colors"
                  >
                    <option value="">Lütfen bir konu seçin</option>
                    <option value="corporate">Şirketler Hukuku</option>
                    <option value="arbitration">Uluslararası Tahkim</option>
                    <option value="ip">Fikri Mülkiyet</option>
                    <option value="other">Diğer</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mesajınız
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-sm focus:outline-none focus:border-secondary-gold focus:ring-1 focus:ring-secondary-gold transition-colors resize-none"
                    placeholder="Size nasıl yardımcı olabiliriz?"
                  ></textarea>
                </div>
                <button
                  type="button"
                  className="w-full bg-primary-navy text-white px-8 py-4 rounded-sm text-sm font-bold hover:bg-opacity-90 transition-all duration-300"
                >
                  Mesajı Gönder
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="py-24 bg-surface-low">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="text-secondary-gold text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
              Global Ağımız
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-primary-navy font-bold tracking-tight">
              Uluslararası Ofislerimiz
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Office 1 */}
            <div className="bg-white rounded-sm editorial-shadow overflow-hidden group">
              <div className="h-48 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800&auto=format&fit=crop"
                  alt="London"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary-navy/20"></div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <Globe className="w-5 h-5 text-secondary-gold" />
                  <h3 className="font-serif text-xl font-bold text-primary-navy">Londra</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  100 Bishopsgate<br />
                  London EC2N 4AG, UK
                </p>
                <a href="#" className="text-sm font-medium text-primary-navy hover:text-secondary-gold transition-colors">
                  Yol Tarifi Al &rarr;
                </a>
              </div>
            </div>

            {/* Office 2 */}
            <div className="bg-white rounded-sm editorial-shadow overflow-hidden group">
              <div className="h-48 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=800&auto=format&fit=crop"
                  alt="New York"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary-navy/20"></div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <Globe className="w-5 h-5 text-secondary-gold" />
                  <h3 className="font-serif text-xl font-bold text-primary-navy">New York</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  One World Trade Center<br />
                  New York, NY 10007, USA
                </p>
                <a href="#" className="text-sm font-medium text-primary-navy hover:text-secondary-gold transition-colors">
                  Yol Tarifi Al &rarr;
                </a>
              </div>
            </div>

            {/* Office 3 */}
            <div className="bg-white rounded-sm editorial-shadow overflow-hidden group">
              <div className="h-48 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop"
                  alt="Dubai"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary-navy/20"></div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <Globe className="w-5 h-5 text-secondary-gold" />
                  <h3 className="font-serif text-xl font-bold text-primary-navy">Dubai</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  DIFC, Gate Village 4<br />
                  Dubai, UAE
                </p>
                <a href="#" className="text-sm font-medium text-primary-navy hover:text-secondary-gold transition-colors">
                  Yol Tarifi Al &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Image (Placeholder for actual map) */}
      <section className="h-96 w-full relative">
        <img
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000&auto=format&fit=crop"
          alt="Map"
          className="w-full h-full object-cover grayscale opacity-80"
        />
        <div className="absolute inset-0 bg-primary-navy/10"></div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-white p-4 rounded-full shadow-2xl animate-pulse">
            <MapPin className="w-8 h-8 text-secondary-gold" />
          </div>
        </div>
      </section>
    </div>
  );
}
