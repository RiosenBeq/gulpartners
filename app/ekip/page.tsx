import { Mail, Linkedin, ArrowUpRight, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Team() {
  const teamMembers = [
    {
      id: 1,
      name: 'Av. LL.M. Batuhan Bulut',
      image: 'https://www.bulutpartners.com/wp-content/uploads/2026/01/9b8f5f8b-9db0-4245-a1ee-09cd07e6c17a.jpeg',
    },
    {
      id: 2,
      name: 'Av. Ferdi Gül',
      image: 'https://www.bulutpartners.com/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-03-at-17.11.080-2.jpeg',
    },
    {
      id: 3,
      name: 'Av. Ceren Akgün',
      image: 'https://www.bulutpartners.com/wp-content/uploads/2026/03/752a61fc-360e-486f-81b1-7a2ea41f1c90.jpg',
    },
    {
      id: 4,
      name: 'Av. Türkan Topçu',
      image: 'https://www.bulutpartners.com/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-03-at-17.11.08-3.jpeg',
    },
    {
      id: 5,
      name: 'Av. Sümeyye Avcı',
      image: 'https://www.bulutpartners.com/wp-content/uploads/2026/01/Adsiz-tasarim-2.png',
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

  const foundingPartners = teamMembers.filter(m => [1, 2].includes(m.id));
  const otherTeam = teamMembers.filter(m => ![1, 2].includes(m.id));

  return (
    <div className="bg-white selection:bg-secondary-gold/20 antialiased overflow-x-hidden">
      {/* Editorial Header Section */}
      <section className="relative pt-64 pb-32 bg-primary-navy overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 filter grayscale">
           <img 
            className="w-full h-full object-cover" 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2600&auto=format&fit=crop" 
            alt="Law Library Background" 
          />
        </div>
        <div className="max-w-7xl mx-auto px-12 relative z-10">
          <div className="max-w-4xl">
            <span className="inline-block text-secondary-gold font-sans tracking-[0.5em] text-[10px] font-bold mb-10 uppercase animate-fade-in">Disiplin & Vizyon</span>
            <h1 className="font-serif text-6xl md:text-[9rem] font-bold text-white leading-[0.85] tracking-[-0.04em] mb-12 italic">
              Zihnin <br />
              <span className="text-gray-400 not-italic">Hukuki Gücü.</span>
            </h1>
            <p className="text-2xl text-slate-300 font-light max-w-2xl leading-relaxed italic border-l border-white/10 pl-10">
              Gül & Partners ekibi, her biri alanında derinleşmiş, stratejik analitik kabiliyete sahip hukuk mimarlarından oluşur.
            </p>
          </div>
        </div>
      </section>

      {/* Leading Minds Split Layout */}
      <section className="py-48 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-40 items-center">
            {foundingPartners.map((partner) => (
              <div key={partner.id} className="group reveal-up opacity-100 translate-y-0">
                <div className="aspect-[3/4] overflow-hidden relative shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] mb-16">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary-navy/5 group-hover:bg-transparent transition-colors duration-1000"></div>
                </div>
                <div className="flex justify-between items-end gap-12 border-b border-gray-100 pb-12 transition-all group-hover:border-secondary-gold">
                  <h3 className="font-serif text-5xl font-bold text-primary-navy group-hover:text-secondary-gold transition-colors">{partner.name}</h3>
                  <Link href="/iletisim" className="text-primary-navy group/link flex items-center gap-4 text-xs font-bold tracking-widest uppercase mb-4">
                    STRATEJİ <ArrowUpRight className="w-5 h-5 text-secondary-gold transition-all group-hover/link:translate-x-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grid: Architectural Excellence */}
      <section className="py-48 bg-surface-low border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-12">
          <div className="mb-32 text-left max-w-2xl">
            <span className="text-secondary-gold text-[10px] font-sans tracking-[0.4em] uppercase font-bold mb-6 block">Kolektif Uzmanlık</span>
            <h2 className="font-serif text-6xl font-bold text-primary-navy leading-tight tracking-tight">Kusursuz Bir <br/><span className="italic font-light text-gray-400">Takvim Yönetimi.</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-gray-200 border border-gray-200 overflow-hidden shadow-2xl">
            {otherTeam.map((member) => (
              <div key={member.id} className="group bg-white p-2 text-center transition-all duration-700 hover:bg-primary-navy">
                <div className="aspect-square overflow-hidden mb-8 relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                  />
                </div>
                <div className="px-6 pb-12 h-24 flex flex-col justify-center">
                   <h4 className="font-serif text-xl font-bold text-primary-navy transition-colors group-hover:text-white leading-tight">{member.name}</h4>
                   <div className="mt-4 flex justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0">
                     <a href="#" className="text-secondary-gold hover:text-white transition-colors"><Linkedin className="w-4 h-4" /></a>
                     <a href="mailto:av.ferdigul@gmail.com" className="text-secondary-gold hover:text-white transition-colors"><Mail className="w-4 h-4" /></a>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Banner: Minimalist Architectural */}
      <section className="py-48 bg-white border-t border-gray-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-gold/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-12 text-center group">
          <h2 className="font-serif text-7xl font-bold text-primary-navy mb-16 tracking-tight leading-[0.9]">Hukuki Geleceğinizi <br/><span className="italic font-light text-gray-400">Bize Emanet Edin.</span></h2>
          <Link href="/iletisim" className="relative bg-primary-navy text-white px-20 py-8 font-bold text-xs tracking-[0.4em] uppercase inline-block hover:bg-secondary-gold hover:text-primary-navy transition-all duration-700 shadow-2xl">
            DANIŞMANLIK TALEP EDİN
          </Link>
        </div>
      </section>
    </div>
  );
}
