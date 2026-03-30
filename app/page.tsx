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
      
      <section className="relative pt-48 pb-32 bg-surface overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/5 rounded-full translate-x-1/3 -translate-y-1/3 blur-[120px]"></div>
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2600&auto=format&fit=crop" 
            alt="Gul Partners Background" 
            className="w-full h-full object-cover grayscale opacity-10 mix-blend-multiply"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl text-left">
            <span className="text-secondary font-sans uppercase tracking-[0.5em] text-xs font-bold mb-10 block animate-fade-in opacity-80">PRESTİJ • GÜVEN • MİRAS</span>
            <h1 className="font-serif animate-fade-in mb-14 italic display-lg text-primary">
              Hukukun <br/> <span className="not-italic text-primary/40">Stratejik Partnerleri.</span>
            </h1>
            <p className="text-2xl text-primary/60 font-light max-w-2xl leading-relaxed italic border-l border-secondary/30 pl-10 animate-fade-in">
              Karmaşık hukuki süreçlerde disiplinle inşa edilmiş, stratejik ve sonuç odaklı çözümler sunan yeni nesil bir hukuk kütüphanesi otoritesi.
            </p>
            
            <div className="flex flex-wrap gap-8 mt-20 animate-fade-in">
              <Link href="/uzmanlik" className="bg-primary text-on-primary px-12 py-5 font-bold tracking-[0.4em] uppercase text-[10px] hover:bg-secondary transition-all duration-700 shadow-sm">
                UZMANLIK ALANLARI
              </Link>
              <Link href="/iletisim" className="border-b border-primary text-primary px-2 py-5 font-bold tracking-[0.4em] uppercase text-[10px] hover:text-secondary hover:border-secondary transition-all">
                DANIŞMANLIK ALIN
              </Link>
            </div>
          </div>
        </div>
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
            <div className="relative aspect-square reveal-up">
              <div className="absolute inset-0 bg-primary/5 translate-x-12 translate-y-12"></div>
              <img 
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2600&auto=format&fit=crop" 
                alt="Justice Statue" 
                className="relative z-10 w-full h-full object-cover grayscale"
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
                      className="w-full h-full object-cover grayscale transition-all duration-[1.5s] group-hover:grayscale-0 group-hover:scale-105"
                   />
                </div>
                <h3 className="font-serif text-5xl font-bold text-primary group-hover:text-secondary transition-colors">Av. Ferdi Gül</h3>
             </div>
             <div className="group reveal-up delay-200">
                <div className="aspect-[3/4] overflow-hidden relative shadow-sm mb-12">
                   <img 
                      src="https://www.bulutpartners.com/wp-content/uploads/2026/01/9b8f5f8b-9db0-4245-a1ee-09cd07e6c17a.jpeg" 
                      alt="Av. LL.M. Batuhan Bulut"
                      className="w-full h-full object-cover grayscale transition-all duration-[1.5s] group-hover:grayscale-0 group-hover:scale-105"
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

      <section className="spacing-editorial bg-surface">
        <div className="max-w-7xl mx-auto px-12 text-center group">
          <h2 className="font-serif text-7xl font-bold text-primary mb-16 tracking-tight leading-[0.9]">Hukuki Geleceğinizi <br/><span className="italic font-light text-primary/40">Bize Emanet Edin.</span></h2>
          <Link href="/iletisim" className="relative bg-primary text-on-primary px-20 py-8 font-bold text-xs tracking-[0.4em] uppercase inline-block hover:bg-secondary transition-all duration-700 shadow-sm">
            DANIŞMANLIK TALEP EDİN
          </Link>
        </div>
      </section>
    </div>
  );
}
