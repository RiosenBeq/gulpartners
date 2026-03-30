import { ArrowUpRight, ArrowRight, Shield, Scale, Gavel, Briefcase, Building2, Globe2, FileText, Landmark, Users2, ScrollText } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const services = [
    { id: 'gayrimenkul', title: 'Gayrimenkul ve Kira', icon: <Building2 className="w-5 h-5" />, desc: 'Mülkiyetin ve kentsel dönüşümün hukuki mimarisi.' },
    { id: 'is-hukuku', title: 'İş ve Sosyal Güvenlik', icon: <Users2 className="w-5 h-5" />, desc: 'İşçi-işveren ilişkilerinde stratejik uyum.' },
    { id: 'icra-iflas', title: 'İcra ve İflas', icon: <Scale className="w-5 h-5" />, desc: 'Finansal yapılandırma ve alacak tahsili.' },
    { id: 'ticaret-hukuku', title: 'Ticaret ve Şirketler', icon: <Briefcase className="w-5 h-5" />, desc: 'Kurumsal yapıların hukuki temelleri.' },
    { id: 'ceza-hukuku', title: 'Ceza ve İnfaz', icon: <Gavel className="w-5 h-5" />, desc: 'Hassas süreçlerde kararlı savunma.' },
    { id: 'fikri-mulkiyet', title: 'Fikri Mülkiyet', icon: <Shield className="w-5 h-5" />, desc: 'Fikirlerin ve markaların mutlak korunması.' },
    { id: 'tazminat', title: 'Tazminat Hukuku', icon: <FileText className="w-5 h-5" />, desc: 'Zararların adil ve hızlı tazmini.' },
    { id: 'aile-hukuku', title: 'Aile ve Miras', icon: <ScrollText className="w-5 h-5" />, desc: 'Nesiller boyu süren hukuki miras.' },
    { id: 'arabuluculuk', title: 'Arabuluculuk', icon: <Globe2 className="w-5 h-5" />, desc: 'Mahkeme dışı etkin çözüm yöntemleri.' },
    { id: 'idare-vergi', title: 'İdare ve Vergi', icon: <Landmark className="w-5 h-5" />, desc: 'Kamu ile olan ilişkilerde hukuki denge.' },
  ];

  return (
    <div className="bg-white selection:bg-secondary-gold/20 overflow-x-hidden">
      
      {/* Editorial Hero Section */}
      <section className="relative min-h-[100vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Header Contrast Gradient */}
          <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-primary-navy/80 to-transparent z-20 pointer-events-none"></div>
          
          <div className="absolute inset-0 bg-primary-navy/40 z-10 backdrop-blur-[1px]"></div>
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2600&auto=format&fit=crop" 
            className="w-full h-full object-cover grayscale brightness-75 scale-105 animate-fade-in"
            alt="Gul Partners Office"
          />
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white to-transparent z-10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-8 w-full relative z-20">
          <div className="flex flex-col items-start translate-y-[-10%] md:translate-y-[-5%]">
            <div className="overflow-hidden mb-8">
              <span className="inline-block text-secondary-gold font-sans tracking-[0.6em] uppercase text-[11px] font-bold animate-fade-in">
                Geleceğin Hukuk Mimarları
              </span>
            </div>
            
            <h1 className="font-serif text-[clamp(3.5rem,10vw,8rem)] font-bold text-white leading-[0.9] tracking-[-0.04em] mb-12 mix-blend-difference">
              Gül & <br/>
              <span className="italic font-light opacity-80">Partners.</span> 
            </h1>

            <div className="max-w-xl reveal-up opacity-100 translate-y-0">
              <p className="text-xl md:text-2xl text-slate-100 font-light leading-relaxed italic mb-12 border-l-2 border-secondary-gold/40 pl-8">
                Karmaşık hukuki süreçleri stratejik birer avantaja dönüştüren, vizyoner ve disiplin odaklı hukuk pratikleri.
              </p>
              <div className="flex flex-wrap gap-8 items-center">
                 <Link href="/uzmanlik" className="bg-secondary-gold text-primary-navy px-12 py-5 font-bold text-[11px] tracking-[0.3em] uppercase hover:bg-white transition-all duration-500 shadow-2xl">
                    Kurumsal Çözümler
                 </Link>
                 <Link href="/iletisim" className="text-white hover:text-secondary-gold transition-colors font-bold text-[11px] tracking-[0.3em] uppercase flex items-center gap-3 decoration-secondary-gold/30 underline-offset-8 underline">
                    İletişime Geçin <ArrowUpRight className="w-4 h-4" />
                 </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4 opacity-50">
           <span className="text-[9px] uppercase tracking-[0.4em] text-primary-navy font-bold rotate-90 translate-y-8">Scroll</span>
           <div className="w-px h-24 bg-gradient-to-b from-primary-navy to-transparent"></div>
        </div>
      </section>

      {/* Services Section: Bento Editorial */}
      <section className="relative py-40 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24 items-end">
            <div className="lg:col-span-2">
              <span className="text-secondary-gold font-sans tracking-[0.4em] uppercase text-[10px] font-bold mb-6 block">Uzmanlık & Disiplin</span>
              <h2 className="font-serif text-5xl md:text-7xl font-bold text-primary-navy leading-tight tracking-tighter">
                Yüksek Profilli <br/> <span className="italic font-light text-gray-400">Danışmanlık.</span>
              </h2>
            </div>
            <div className="lg:col-span-2">
              <p className="text-gray-400 text-lg leading-relaxed font-light italic max-w-md border-l border-gray-100 pl-8">
                Her dosya bir mimari proje hassasiyetiyle ele alınır. Stratejik derinlik ve hukuki kesinlik önceliğimizdir.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-gray-100 border border-gray-100 overflow-hidden shadow-2xl">
            {services.map((service, index) => (
              <Link 
                key={service.id} 
                href={`/uzmanlik#${service.id}`}
                className="group relative bg-white p-10 h-80 flex flex-col justify-between transition-all duration-700 hover:bg-primary-navy"
              >
                <div className="text-secondary-gold transition-transform duration-500 group-hover:scale-110 group-hover:text-white">
                  {service.icon}
                </div>
                <div>
                   <h3 className="font-serif text-xl font-bold text-primary-navy mb-4 group-hover:text-white transition-colors">{service.title}</h3>
                   <p className="text-gray-400 text-[11px] leading-relaxed font-light group-hover:text-gray-300 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                     {service.desc}
                   </p>
                </div>
                <div className="absolute bottom-8 right-8 overflow-hidden">
                   <ArrowUpRight className="w-5 h-5 text-gray-200 group-hover:text-secondary-gold transition-all duration-700 translate-x-full group-hover:translate-x-0" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Leading Minds: Dramatic Split */}
      <section className="bg-surface-low py-40 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[600px] h-full bg-white -z-0 translate-x-1/2 skew-x-[-15deg]"></div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
            
            <div className="lg:col-span-5 order-2 lg:order-1">
               <span className="text-secondary-gold font-sans tracking-[0.4em] uppercase text-[10px] font-bold mb-8 block">Kurucu Vizyon</span>
               <h2 className="font-serif text-6xl md:text-8xl font-bold text-primary-navy leading-[0.9] tracking-tighter mb-12">
                 Öncü <br/> <span className="italic font-light text-gray-400">Zihinler.</span>
               </h2>
               <div className="space-y-12 mb-16">
                  <div className="group cursor-pointer">
                     <h3 className="font-serif text-3xl font-bold text-primary-navy group-hover:text-secondary-gold transition-colors mb-2">Av. LL.M. Batuhan Bulut</h3>
                     <div className="w-0 group-hover:w-16 h-px bg-secondary-gold transition-all duration-700"></div>
                  </div>
                  <div className="group cursor-pointer">
                     <h3 className="font-serif text-3xl font-bold text-primary-navy group-hover:text-secondary-gold transition-colors mb-2">Av. Ferdi Gül</h3>
                     <div className="w-0 group-hover:w-16 h-px bg-secondary-gold transition-all duration-700"></div>
                  </div>
               </div>
               <Link href="/ekip" className="group inline-flex items-center gap-6 text-primary-navy font-bold text-[11px] tracking-[0.3em] uppercase">
                 Tüm Ekibimiz <div className="w-12 h-px bg-secondary-gold group-hover:w-20 transition-all duration-700"></div>
               </Link>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2">
               <div className="relative grid grid-cols-2 gap-8 translate-y-12 lg:translate-y-0">
                  <div className="aspect-[3/5] overflow-hidden shadow-2xl relative mt-20 reveal-up opacity-100 translate-y-0">
                     <img 
                      src="https://www.bulutpartners.com/wp-content/uploads/2026/03/752a61fc-360e-486f-81b1-7a2ea41f1c90.jpg" 
                      className="w-full h-full object-cover" 
                      alt="Batuhan Bulut"
                    />
                  </div>
                  <div className="aspect-[3/5] overflow-hidden shadow-2xl relative reveal-up opacity-100 translate-y-0">
                     <img 
                      src="https://www.bulutpartners.com/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-03-at-17.11.08-3.jpeg" 
                      className="w-full h-full object-cover" 
                      alt="Ferdi Gül"
                    />
                  </div>
                  <div className="absolute -top-10 -right-10 w-40 h-40 border border-gray-200"></div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Visionary Boardroom: Final CTA */}
      <section className="relative min-h-[80vh] flex items-center justify-center p-8">
        <div className="absolute inset-0 z-0">
           <img 
            className="w-full h-full object-cover grayscale opacity-30 group-hover:opacity-100 transition-all duration-1000" 
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2600&auto=format&fit=crop" 
            alt="Gul Partners Strategy Room"
          />
           <div className="absolute inset-0 bg-primary-navy/90 radial-gradient(circle, transparent 20%, #000D24 100%)"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl">
           <span className="text-secondary-gold font-sans tracking-[0.6em] uppercase text-[11px] font-bold mb-12 block">Sizinle Tanışalım</span>
           <h2 className="font-serif text-5xl md:text-8xl text-white font-bold mb-16 leading-[0.95] tracking-tighter">
             Hukuki Mirasınızı <br/> <span className="italic font-light text-gray-400">Mimarlı Sizinle İnşa Edelim.</span>
           </h2>
           <Link href="/iletisim" className="relative group overflow-hidden bg-secondary-gold text-primary-navy px-16 py-7 font-bold text-xs tracking-[0.4em] uppercase inline-block hover:bg-white transition-all duration-700">
             İLETİŞİME GEÇİN
           </Link>
        </div>
      </section>

    </div>
  );
}
