import Link from 'next/link';
import { ArrowRight, Shield, Scale, Gavel, Building2, Briefcase, ChevronRight, ArrowUpRight } from 'lucide-react';

export default function Home() {
  const services = [
    { 
      title: 'Gayrimenkul & Kira', 
      desc: 'Kentsel dönüşümden kira uyuşmazlıklarına, mülkiyetin her alanında stratejik çözüm ortaklığı.',
      icon: Building2,
      id: 'gayrimenkul'
    },
    { 
      title: 'Ticaret & Şirketler', 
      desc: 'Global pazarda şirketler hukuku, birleşme ve devralmalar ile ticari risk yönetimi.',
      icon: Briefcase,
      id: 'ticaret-hukuku'
    },
    { 
      title: 'Ceza ve İnfaz', 
      desc: 'Karmaşık ceza davalarında disiplinli savunma ve hak temelli infaz hukuku danışmanlığı.',
      icon: Gavel,
      id: 'ceza-hukuku'
    },
    { 
      title: 'Fikri Mülkiyet', 
      desc: 'Marka, patent ve telif haklarının uluslararası standartlarda korunması ve yönetimi.',
      icon: Shield,
      id: 'fikri-mulkiyet'
    }
  ];

  return (
    <div className="bg-white selection:bg-secondary-gold/20 overflow-x-hidden">
      
      {/* Editorial Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-80 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Header Contrast Gradient */}
          <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-primary-navy/90 to-transparent z-20 pointer-events-none"></div>
          
          <div className="absolute inset-0 bg-primary-navy/40 z-10 backdrop-blur-[1px]"></div>
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2600&auto=format&fit=crop" 
            className="w-full h-full object-cover grayscale brightness-75 scale-105"
            alt="Gül Partners Ofisi"
          />
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white to-transparent z-10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-12 relative z-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-end">
            <div className="lg:col-span-8">
              <span className="inline-block text-secondary-gold font-sans tracking-[0.6em] text-[10px] font-bold mb-12 uppercase">Geleceğin Hukuk Mimarları</span>
              <h1 className="font-serif text-5xl md:text-[9rem] font-bold text-white leading-[0.85] tracking-[-0.04em] mb-12 md:mb-16 italic">
                Gül <br />
                <span className="text-gray-100 not-italic">Partners.</span>
              </h1>
              <div className="flex flex-col sm:flex-row gap-6 md:gap-8 items-start sm:items-center">
                <Link href="/uzmanlik" className="w-full sm:w-auto bg-white text-primary-navy px-10 md:px-14 py-5 md:py-7 font-bold text-[10px] tracking-[0.4em] uppercase hover:bg-secondary-gold hover:text-white transition-all duration-700 shadow-2xl text-center">
                  KURUMSAL ÇÖZÜMLER
                </Link>
                <Link href="/iletisim" className="w-full sm:w-auto bg-secondary-gold text-white px-10 md:px-14 py-5 md:py-7 font-bold text-[10px] tracking-[0.4em] uppercase hover:bg-white hover:text-primary-navy transition-all duration-700 shadow-xl border border-secondary-gold text-center">
                  İLETİŞİME GEÇİN
                </Link>
              </div>
            </div>
            <div className="lg:col-span-4 lg:text-right">
               <p className="text-white/60 text-2xl font-light italic leading-relaxed max-w-sm ml-auto">
                 "Hukuk sadece bir kurallar bütünü değil, toplumu bir arada tutan bir mimaridir."
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section: Split Layout */}
      <section className="py-24 md:pt-48 md:pb-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div className="relative group">
            <div className="aspect-[4/5] overflow-hidden grayscale brightness-75 hover:grayscale-0 transition-all duration-[2s] shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2000&auto=format&fit=crop" 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[3s]"
                alt="Justice architecture"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-primary-navy text-white p-16 hidden lg:block shadow-[-20px_20px_50px_rgba(0,0,0,0.1)]">
               <span className="text-secondary-gold text-[10px] font-bold tracking-[0.4em] uppercase block mb-6">MİSYON</span>
               <p className="font-serif text-3xl font-light leading-tight italic">Emsalsiz <br/> Disiplin.</p>
            </div>
          </div>
          <div className="space-y-16">
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-primary-navy leading-[1.1] tracking-tight">
              Değerlerinizi <br/>
              <span className="italic font-light text-gray-400">Koruma Altına Alıyoruz.</span>
            </h2>
            <p className="text-2xl text-gray-500 font-light leading-relaxed">
              Gül Partners, sadece müvekkillerine hizmet vermekle kalmaz; her uyuşmazlığı stratejik bir kazanım olarak yeniden tasarlar. Küresel vizyonumuz, yerel derinlikteki uzmanlığımızla birleşir.
            </p>
            <div className="pt-8 flex gap-12">
               <div>
                  <span className="block text-4xl font-serif font-bold text-secondary-gold leading-none mb-2">15+</span>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Yıl Deneyim</span>
               </div>
               <div className="h-12 w-px bg-gray-200"></div>
               <div>
                  <span className="block text-4xl font-serif font-bold text-secondary-gold leading-none mb-2">500+</span>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Başarılı Proje</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leading Minds: Founding Partners Sync */}
      <section className="pt-24 pb-48 bg-white overflow-hidden border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-32">
             <div className="group reveal-up">
                <div className="aspect-[3/4] overflow-hidden relative shadow-2xl mb-12">
                   <img 
                      src="https://www.bulutpartners.com/wp-content/uploads/2026/01/9b8f5f8b-9db0-4245-a1ee-09cd07e6c17a.jpeg" 
                      alt="Av. LL.M. Batuhan Bulut"
                      className="w-full h-full object-cover grayscale transition-all duration-[1.5s] group-hover:grayscale-0 group-hover:scale-105"
                   />
                </div>
                <h3 className="font-serif text-5xl font-bold text-primary-navy group-hover:text-secondary-gold transition-colors">Av. LL.M. Batuhan Bulut</h3>
             </div>
             <div className="group reveal-up delay-200">
                <div className="aspect-[3/4] overflow-hidden relative shadow-2xl mb-12">
                   <img 
                      src="https://www.bulutpartners.com/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-03-at-17.11.080-2.jpeg" 
                      alt="Av. Ferdi Gül"
                      className="w-full h-full object-cover grayscale transition-all duration-[1.5s] group-hover:grayscale-0 group-hover:scale-105"
                   />
                </div>
                <h3 className="font-serif text-5xl font-bold text-primary-navy group-hover:text-secondary-gold transition-colors">Av. Ferdi Gül</h3>
             </div>
          </div>
        </div>
      </section>

      {/* Services Grid: Bento Layout */}
      <section className="py-48 bg-surface-low border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-12">
          <div className="mb-32 flex flex-col md:flex-row md:items-end justify-between gap-12">
            <div className="max-w-2xl">
              <span className="text-secondary-gold text-[10px] font-bold tracking-[0.5em] uppercase mb-8 block">UZMANLIK ALANLARI</span>
              <h2 className="font-serif text-6xl md:text-7xl font-bold text-primary-navy leading-tight tracking-tight italic">Disiplinlerarası <br/><span className="not-italic text-gray-400">Mükemmellik.</span></h2>
            </div>
            <Link href="/uzmanlik" className="group inline-flex items-center gap-4 text-xs font-bold tracking-[0.3em] uppercase pb-2 border-b-2 border-secondary-gold">
              TÜMÜNÜ İNCELE <ArrowRight className="w-5 h-5 group-hover:translate-x-3 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 border border-gray-200 overflow-hidden shadow-2xl">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/uzmanlik#${service.id}`}
                className="group bg-white p-16 hover:bg-primary-navy transition-all duration-700"
              >
                <div className="mb-12 text-secondary-gold">
                  <service.icon className="w-12 h-12 stroke-[1px]" />
                </div>
                <h3 className="font-serif text-3xl font-bold text-primary-navy mb-8 group-hover:text-white transition-colors tracking-tight">{service.title}</h3>
                <p className="text-gray-500 group-hover:text-gray-400 font-light leading-relaxed mb-12">
                  {service.desc}
                </p>
                <div className="w-12 h-px bg-secondary-gold group-hover:w-full transition-all duration-700"></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Floating CTA */}
      <section className="relative h-[800px] flex items-center overflow-hidden">
         <div className="absolute inset-0 z-0">
           <img 
            className="w-full h-full object-cover grayscale opacity-30"
            src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2600&auto=format&fit=crop"
            alt="Law scales"
           />
           <div className="absolute inset-0 bg-primary-navy backdrop-blur-sm opacity-90"></div>
         </div>
         <div className="max-w-7xl mx-auto px-12 relative z-10 w-full text-center">
            <h2 className="font-serif text-7xl md:text-9xl font-bold text-white mb-20 tracking-tighter italic">
               Stratejinizi <br/> <span className="not-italic text-gray-500">Belirleyin.</span>
            </h2>
            <Link 
              href="/iletisim" 
              className="bg-secondary-gold text-primary-navy px-20 py-10 text-xs font-bold tracking-[0.5em] uppercase hover:bg-white transition-all duration-700 shadow-[0_30px_60px_rgba(0,0,0,0.3)] inline-block"
            >
              ŞİMDİ DANIŞIN
            </Link>
         </div>
      </section>
    </div>
  );
}
