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
      
      <section className="relative w-full h-[100vh] min-h-[800px] flex items-center overflow-hidden bg-[#0A0A0A]">
        <div className="absolute inset-0 z-0 opacity-50">
          <img 
            alt="Gul Partners Background" 
            className="w-full h-full object-cover mix-blend-luminosity brightness-110" 
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2600&auto=format&fit=crop"
          />
        </div>
        <div className="absolute inset-0 z-1 bg-gradient-to-tr from-secondary/40 to-transparent mix-blend-overlay"></div>
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-surface via-surface/95 to-transparent"></div>
        <div className="relative z-20 max-w-[1700px] mx-auto px-6 lg:px-12 w-full pt-20">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary text-[10px] font-bold uppercase tracking-[0.3em] mb-10 font-sans backdrop-blur-md">
              Prestij • Güven • Miras
            </span>
            <h1 className="font-serif text-6xl md:text-[5.5rem] text-primary tracking-tighter leading-[1.05] mb-10">
              Hukukun <br/><span className="text-secondary italic">Stratejik Partnerleri.</span>
            </h1>
            <p className="font-sans text-xl text-primary/70 max-w-2xl leading-relaxed mb-16 font-light border-l border-secondary/30 pl-8">
              Karmaşık hukuki süreçlerde disiplinle inşa edilmiş, stratejik ve sonuç odaklı çözümler sunan yeni nesil hukuk kütüphanesi otoritesi.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 items-center">
              <Link href="/uzmanlik" className="w-full sm:w-auto text-center bg-gradient-to-r from-primary to-primary-container text-on-primary border border-outline-variant/30 px-14 py-5 font-bold tracking-[0.3em] uppercase text-[10px] hover:from-primary-container hover:to-primary transition-all duration-700 shadow-xl hover:-translate-y-1 hover:shadow-2xl hover:border-secondary/50">
                UZMANLIK ALANLARI
              </Link>
              <Link href="/iletisim" className="w-full sm:w-auto text-center text-primary px-6 py-5 font-bold tracking-[0.3em] uppercase text-[10px] hover:text-secondary transition-all relative group/link">
                DANIŞMANLIK ALIN <ArrowUpRight className="w-4 h-4 inline-block ml-2 group-hover/link:translate-x-2 group-hover/link:-translate-y-2 transition-transform duration-500" />
                <div className="absolute bottom-3 left-6 right-8 h-[1px] bg-primary/20 group-hover/link:bg-secondary transition-colors"></div>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1 opacity-30 bg-gradient-to-r from-surface-low via-primary/20 to-surface-low"></div>
      </section>

      <section className="bg-surface-low spacing-editorial border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="reveal-up">
              <span className="text-secondary text-[10px] font-sans tracking-[0.5em] uppercase font-bold mb-8 block">VİZYONUMUZ</span>
              <h2 className="font-serif text-5xl font-bold text-primary mb-10 leading-tight">
                Hukuki Süreçlerin <br />
                <span className="italic font-light text-primary/40">Zihinsel Mimarisi.</span>
              </h2>
              <p className="text-primary/60 text-lg leading-relaxed italic border-l-2 border-secondary/20 pl-8 mb-12">
                Hukuk sadece kurallar bütünü değildir; her detayında sarsılmaz bir güvenin inşa edildiği bir temel taştır. Gül Partners olarak biz, her vakayı bir stratejik derinlik testi olarak görüyoruz.
              </p>
              <div className="flex gap-16 pt-10 border-t border-outline-variant/10">
                <div>
                  <span className="block text-4xl font-serif font-bold text-primary">500+</span>
                  <span className="text-[10px] text-primary/40 uppercase tracking-widest font-bold">Başarılı Dava</span>
                </div>
                <div>
                  <span className="block text-4xl font-serif font-bold text-primary">15+</span>
                  <span className="text-[10px] text-primary/40 uppercase tracking-widest font-bold">Yıllık Tecrübe</span>
                </div>
              </div>
            </div>
            <div className="relative aspect-square reveal-up group">
              <div className="absolute inset-0 bg-secondary/10 translate-x-6 translate-y-6 transition-transform duration-700 group-hover:translate-x-3 group-hover:translate-y-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2600&auto=format&fit=crop" 
                alt="Justice Statue" 
                className="relative z-10 w-full h-full object-cover shadow-2xl transition-all duration-700 group-hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="pt-24 pb-48 bg-surface overflow-hidden border-t border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-32">
             <div className="group reveal-up">
                <div className="aspect-[3/4] overflow-hidden relative shadow-sm mb-12">
                   <img 
                      src="https://www.bulutpartners.com/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-03-at-17.11.080-2.jpeg" 
                      alt="Av. Ferdi Gül"
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                   />
                </div>
                <h3 className="font-serif text-5xl font-bold text-primary group-hover:text-secondary transition-colors">Av. Ferdi Gül</h3>
             </div>
             <div className="group reveal-up delay-200">
                <div className="aspect-[3/4] overflow-hidden relative shadow-md mb-12">
                   <img 
                      src="https://www.bulutpartners.com/wp-content/uploads/2026/01/9b8f5f8b-9db0-4245-a1ee-09cd07e6c17a.jpeg" 
                      alt="Av. LL.M. Batuhan Bulut"
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                   />
                </div>
                <h3 className="font-serif text-5xl font-bold text-primary group-hover:text-secondary transition-colors">Av. LL.M. Batuhan Bulut</h3>
             </div>
          </div>
        </div>
      </section>

      <section className="py-48 bg-surface-low border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-12">
          <div className="mb-32 flex flex-col md:flex-row md:items-end justify-between gap-12">
            <div className="max-w-2xl">
              <span className="text-secondary text-[10px] font-bold tracking-[0.5em] uppercase mb-8 block">UZMANLIK ALANLARI</span>
              <h2 className="font-serif text-6xl md:text-7xl font-bold text-primary leading-tight tracking-tight italic">Disiplinlerarası <br/><span className="not-italic text-primary/40">Mükemmellik.</span></h2>
            </div>
            <Link href="/uzmanlik" className="group inline-flex items-center gap-4 text-xs font-bold tracking-[0.3em] uppercase pb-2 border-b-2 border-secondary">
              TÜMÜNÜ İNCELE <ArrowRight className="w-5 h-5 group-hover:translate-x-3 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-outline-variant/10 border border-outline-variant/10 overflow-hidden shadow-sm">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/uzmanlik#${service.id}`}
                className="group bg-surface p-16 hover:bg-primary transition-all duration-700"
              >
                <div className="mb-12 text-secondary">
                  <service.icon className="w-12 h-12 stroke-[1px]" />
                </div>
                <h3 className="font-serif text-3xl font-bold text-primary mb-8 group-hover:text-on-primary transition-colors tracking-tight">{service.title}</h3>
                <p className="text-primary/60 group-hover:text-on-primary/70 font-light leading-relaxed mb-12">
                  {service.desc}
                </p>
                <div className="w-12 h-px bg-secondary group-hover:w-full transition-all duration-700"></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-48 bg-surface border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-12 text-center group">
          <h2 className="font-serif text-5xl md:text-7xl font-bold text-primary mb-16 tracking-tight leading-[1]">Hukuki Geleceğinizi <br/><span className="italic font-light text-primary/40">Bize Emanet Edin.</span></h2>
          <Link href="/iletisim" className="relative bg-gradient-to-r from-primary to-primary-container text-on-primary border border-outline-variant/30 px-20 py-8 font-bold text-[10px] tracking-[0.4em] uppercase inline-flex items-center gap-3 hover:from-primary-container hover:to-primary transition-all duration-700 shadow-xl hover:-translate-y-1 hover:shadow-2xl hover:border-secondary/50 group/btn">
            DANIŞMANLIK TALEP EDİN <ArrowUpRight className="w-5 h-5 transition-transform duration-500 group-hover/btn:translate-x-2 group-hover/btn:-translate-y-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
