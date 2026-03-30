import { Mail, Linkedin, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Team() {
  const teamMembers = [
    {
      id: 1,
      name: 'Av. LL.M. Batuhan Bulut',
      image: 'https://www.bulutpartners.com/wp-content/uploads/2026/03/752a61fc-360e-486f-81b1-7a2ea41f1c90.jpg',
    },
    {
      id: 2,
      name: 'Av. Ferdi Gül',
      image: 'https://www.bulutpartners.com/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-03-at-17.11.08-3.jpeg',
    },
    {
      id: 3,
      name: 'Av. Ceren Akgün',
      image: 'https://www.bulutpartners.com/wp-content/uploads/2026/01/Adsiz-tasarim-2.png',
    },
    {
      id: 4,
      name: 'Av. Türkan Topçu',
      image: 'https://www.bulutpartners.com/wp-content/uploads/2026/01/Adsiz-tasarim-3.png',
    },
    {
      id: 5,
      name: 'Av. Sümeyye Avcı',
      image: 'https://www.bulutpartners.com/wp-content/uploads/2026/01/9b8f5f8b-9db0-4245-a1ee-09cd07e6c17a.jpeg',
    },
    {
      id: 6,
      name: 'Av. Anıl Pederlioğlu',
      image: 'https://www.bulutpartners.com/wp-content/uploads/2026/01/Adsiz-tasarim-1.png',
    },
    {
      id: 7,
      name: 'Menekşe Çelik',
      image: 'https://www.bulutpartners.com/wp-content/uploads/2026/01/Adsiz-tasarim-3.png',
    },
  ];

  // Founding partners to highlight
  const foundingPartners = teamMembers.filter(m => [1, 2].includes(m.id));
  const otherTeam = teamMembers.filter(m => ![1, 2].includes(m.id));

  return (
    <div className="bg-white selection:bg-secondary-gold/30 antialiased overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-48 pb-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-end gap-16">
            <div className="w-full md:w-2/3">
              <span className="inline-block text-secondary-gold font-sans tracking-[0.4em] text-[10px] font-bold mb-8 uppercase animate-fade-in">Yetkin Kadro</span>
              <h1 className="font-serif text-5xl md:text-8xl text-primary-navy font-bold leading-[1.05] tracking-tighter mb-10">
                Hukuki Mükemmelliğin <br />
                <span className="italic font-light text-gray-400">Mimarları.</span>
              </h1>
              <p className="text-xl text-gray-500 font-light max-w-2xl leading-relaxed italic">
                Bulut & Partners, küresel vizyonu ve yerel uzmanlığıyla karmaşık hukuki süreçleri stratejik birer avantaja dönüştürür. Ekibimiz, disiplin ve tutkuyla şekillenmiş bir tecrübe mirasını temsil eder.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/4 h-full bg-surface-low -z-10 translate-x-1/2 rounded-full blur-[120px] opacity-40"></div>
      </section>

      {/* Highlights: Founding Partners */}
      <section className="py-24 bg-surface-low relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
            {foundingPartners.map((partner) => (
              <div key={partner.id} className="group">
                <div className="aspect-[3/4] overflow-hidden relative shadow-2xl shadow-primary-navy/5 transform transition-transform duration-700 group-hover:scale-[1.02] mb-10">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="w-full h-full object-cover grayscale transition-all duration-[1.5s] group-hover:grayscale-0 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary-navy/5 group-hover:bg-transparent transition-colors duration-700"></div>
                </div>
                <div className="text-center">
                  <h3 className="font-serif text-4xl font-bold text-primary-navy mb-8 leading-tight group-hover:text-secondary-gold transition-colors">{partner.name}</h3>
                  <Link href="/iletisim" className="group/link inline-flex items-center gap-3 text-primary-navy font-bold text-xs tracking-widest uppercase pb-1 border-b border-secondary-gold hover:gap-6 transition-all duration-500">
                    İLETİŞİME GEÇİN <ArrowRight className="w-4 h-4 text-secondary-gold" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team: Grid Layout */}
      <section className="py-32 max-w-7xl mx-auto px-8">
        <div className="mb-24 text-center">
          <h2 className="font-serif text-5xl font-bold text-primary-navy mb-4 tracking-tight">Uzman Kadromuz</h2>
          <div className="h-1 w-20 bg-secondary-gold mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
          {otherTeam.map((member) => (
            <div key={member.id} className="group text-center">
              <div className="aspect-square overflow-hidden bg-surface-low mb-8 relative shadow-lg shadow-primary-navy/5 group-hover:shadow-2xl transition-shadow duration-500">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                />
              </div>
              <h4 className="font-serif text-2xl font-bold text-primary-navy group-hover:text-secondary-gold transition-colors">{member.name}</h4>
              <div className="mt-8 flex justify-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <a href="#" className="text-gray-400 hover:text-secondary-gold transition-colors"><Linkedin className="w-5 h-5" /></a>
                <a href="mailto:info@bulutpartners.com" className="text-gray-400 hover:text-secondary-gold transition-colors"><Mail className="w-5 h-5" /></a>
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
        <div className="relative z-10 max-w-4xl mx-auto px-8 text-center text-white">
          <h2 className="font-serif text-6xl font-bold mb-10 tracking-tight">Hukuki Gücünüzü <br/><span className="text-secondary-gold italic font-light">Bizimle Şekillendirin.</span></h2>
          <Link href="/iletisim" className="bg-secondary-gold text-primary-navy px-16 py-6 font-bold text-sm tracking-[0.3em] uppercase hover:bg-white transition-all duration-500 shadow-2xl inline-block mt-8 font-sans">
            RANDEVU ALIN
          </Link>
        </div>
      </section>
    </div>
  );
}
