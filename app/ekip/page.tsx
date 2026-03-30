import { Mail, Linkedin, ArrowUpRight, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Team() {
  const teamMembers = [
    {
      id: 1,
      name: 'Av. Ferdi Gül',
      image: 'https://www.bulutpartners.com/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-03-at-17.11.080-2.jpeg',
    },
    {
      id: 2,
      name: 'Av. LL.M. Batuhan Bulut',
      image: 'https://www.bulutpartners.com/wp-content/uploads/2026/01/9b8f5f8b-9db0-4245-a1ee-09cd07e6c17a.jpeg',
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
    <div className="bg-surface selection:bg-secondary/20 antialiased overflow-x-hidden">
      {/* Editorial Header Section */}
      <section className="relative pt-48 pb-32 bg-surface overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/5 translate-x-1/3 -translate-y-1/3 blur-[120px]"></div>
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2600&auto=format&fit=crop" 
            alt="Background" 
            className="w-full h-full object-cover mix-blend-multiply opacity-20"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <span className="text-secondary font-sans uppercase tracking-[0.5em] text-xs font-bold mb-10 block animate-fade-in opacity-80">GÜL PARTNERS EKİBİMİZ</span>
            <h1 className="font-serif display-lg mb-14 italic reveal-up text-primary">
              Nitelikli <br/> <span className="not-italic text-primary/40">Hukuki Güç.</span>
            </h1>
            <p className="text-2xl text-primary/60 font-light max-w-2xl leading-relaxed italic border-l border-secondary/30 pl-10 reveal-up">
              Prestijli bir hukuk kütüphanesinin sessiz otoritesini ve modern hukukun dinamizmini harmanlayan hukuk profesyonellerinden oluşan ekibimizle tanışın.
            </p>
          </div>
        </div>
      </section>

      {/* Leading Minds Split Layout */}
      <section className="py-48 bg-surface relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 md:gap-40 items-center">
            {foundingPartners.map((member) => (
              <div key={member.id} className="group reveal-up">
                <div className="relative aspect-[3/4] overflow-hidden bg-surface-low mb-10 transition-all duration-700 shadow-lg group-hover:shadow-2xl">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="space-y-4">
                  <div>
                     <h3 className="font-serif text-4xl font-bold text-primary group-hover:text-secondary transition-colors">{member.name}</h3>
                  </div>
                  <div className="flex gap-4 pt-6">
                     <a href="#" className="p-3 bg-surface border border-outline-variant/10 text-primary hover:bg-secondary hover:text-on-primary transition-all">
                        <Linkedin className="w-4 h-4" />
                     </a>
                     <a href="#" className="p-3 bg-surface border border-outline-variant/10 text-primary hover:bg-secondary hover:text-on-primary transition-all">
                        <Mail className="w-4 h-4" />
                     </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Separator: Law Library / Legal Heritage */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1568667236549-aba560c2c548?q=80&w=2600&auto=format&fit=crop"
          alt="Legal Heritage"
          className="absolute inset-0 w-full h-full object-cover object-center scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface/90 via-surface/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-surface/60 via-transparent to-transparent"></div>
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
            <span className="text-secondary text-[10px] font-bold uppercase tracking-[0.5em] mb-6 block">Ortak Değerlerimiz</span>
            <h2 className="font-serif text-5xl md:text-6xl text-primary leading-tight max-w-2xl">
              Hukukun <span className="italic text-secondary">Ruhu,</span><br/>Etiğin Temeli.
            </h2>
          </div>
        </div>
      </section>

      {/* Grid: Architectural Excellence */}
      <section className="py-48 bg-surface-low border-y border-outline-variant/20">
        <div className="max-w-7xl mx-auto px-12">
          <div className="mb-32 text-left max-w-2xl">
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-primary leading-tight tracking-tight">Kusursuz Bir <br/><span className="italic font-light text-primary/40">Takvim Yönetimi.</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-outline-variant/10 border border-outline-variant/10 overflow-hidden shadow-2xl">
            {otherTeam.map((member) => (
              <div key={member.id} className="group bg-surface p-2 text-center transition-all duration-700 hover:bg-surface-highest hover:shadow-xl border-t-2 border-transparent hover:border-secondary">
                <div className="aspect-square overflow-hidden mb-8 relative bg-surface-low">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-all duration-1000 transform group-hover:scale-110"
                  />
                </div>
                <div className="px-6 pb-12 h-24 flex flex-col justify-center">
                   <h4 className="font-serif text-xl font-bold text-primary group-hover:text-secondary transition-colors leading-tight">{member.name}</h4>
                   <div className="mt-4 flex justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0">
                     <a href="#" className="text-secondary hover:text-primary transition-colors"><Linkedin className="w-4 h-4" /></a>
                     <a href="mailto:av.ferdigul@gmail.com" className="text-secondary hover:text-primary transition-colors"><Mail className="w-4 h-4" /></a>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Separator: Values & Culture */}
      <section className="relative h-[60vh] min-h-[420px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2600&auto=format&fit=crop"
          alt="Legal Work Culture"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-surface/95 via-surface/60 to-transparent"></div>
        <div className="relative z-10 h-full flex items-center justify-end">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full text-right">
            <span className="text-secondary text-[10px] font-bold uppercase tracking-[0.5em] mb-6 block">Çalışma Kültürümüz</span>
            <h2 className="font-serif text-5xl md:text-6xl text-primary leading-tight max-w-2xl ml-auto">
              Mükemmelliği  <br/><span className="italic text-secondary">Birlikte</span> İnşa Ediyoruz.
            </h2>
          </div>
        </div>
      </section>

      {/* Contact Banner: Minimalist Architectural */}
      <section className="py-48 bg-surface border-t border-outline-variant/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 translate-x-1/2 -translate-y-1/2 blur-[100px]"></div>
        <div className="max-w-7xl mx-auto px-12 text-center group">
          <h2 className="font-serif text-5xl md:text-7xl font-bold text-primary mb-16 tracking-tight leading-[1]">Hukuki Geleceğinizi <br/><span className="italic font-light text-primary/40">Bize Emanet Edin.</span></h2>
          <Link href="/iletisim" className="relative bg-gradient-to-r from-primary to-primary-container text-on-primary border border-outline-variant/30 px-20 py-8 font-bold text-[10px] tracking-[0.4em] uppercase inline-flex items-center gap-3 hover:from-secondary hover:to-primary transition-all duration-700 shadow-xl hover:-translate-y-1 hover:shadow-2xl hover:border-secondary/50 group/btn">
            DANIŞMANLIK TALEP EDİN <ArrowUpRight className="w-5 h-5 transition-transform duration-500 group-hover/btn:translate-x-2 group-hover/btn:-translate-y-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
