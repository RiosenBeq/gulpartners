import { ArrowRight, ArrowUpRight, Building2, ChevronsDown, Handshake, Microscope, Scale, ShieldCheck, Landmark, Gavel, Users, Briefcase } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const services = [
    {
      title: "Gayrimenkul ve Kira Hukuku",
      slug: "gayrimenkul-ve-kira-hukuku",
      desc: "Taşınmaz mülkiyetinden doğan tüm ihtilaflarda, kentsel dönüşüm süreçlerinde ve karmaşık kira uyuşmazlıklarında stratejik ve koruyucu çözümler sunuyoruz.",
      icon: <Landmark className="w-8 h-8" />
    },
    {
      title: "İş ve Sosyal Güvenlik Hukuku",
      slug: "is-ve-sosyal-guvenlik-hukuku",
      desc: "İşçi-işveren ilişkilerini modern düzeltecek düzenlemelerden, sendikal süreçlere ve sosyal güvenlik mevzuatına kadar geniş bir yelpazede danışmanlık veriyoruz.",
      icon: <Briefcase className="w-8 h-8" />
    },
    {
      title: "İcra ve İflas Hukuku",
      slug: "icra-ve-iflas-hukuku",
      desc: "Alacak tahsil süreçleri, konkordato ilanları ve iflas erteleme gibi hassas finansal yönetim gerektiren hukuki süreçleri titizlikle yönetiyoruz.",
      icon: <Scale className="w-8 h-8" />
    },
    {
      title: "Ticaret ve Şirketler Hukuku",
      slug: "ticaret-ve-sirketler-hukuku",
      desc: "Şirket kuruluşlarından birleşme ve devralmalara, kurumsal yönetimden hisse devirlerine kadar global standartlarda hukuki altyapı inşa ediyoruz.",
      icon: <Building2 className="w-8 h-8" />
    }
  ];

  return (
    <div className="bg-surface selection:bg-secondary-gold/30">
      {/* Experimental Aesthetic Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020817]">
        {/* Advanced Ambient Background */}
        <div className="absolute inset-0 z-0">
          {/* Moving Mesh Gradients */}
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-secondary-gold/10 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[150px] animate-spin-slow"></div>
          
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] mix-blend-overlay"></div>
          
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop"
            alt="Elite Law Atmosphere"
            className="w-full h-full object-cover opacity-[0.12] mix-blend-luminosity scale-105"
          />
          
          {/* Sophisticated Vignette */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#020817] via-transparent to-[#020817]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#020817] via-transparent to-[#020817]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-20">
          <div className="flex flex-col items-center text-center">
            {/* Premium Glass Badge */}
            <div className="inline-flex items-center gap-3 py-2 px-6 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-xl mb-12 transform -translate-y-4 opacity-0 animate-fade-in-up shadow-2xl" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-gold opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary-gold"></span>
              </span>
              <span className="text-secondary-gold text-[10px] font-bold tracking-[0.4em] uppercase">Mükemmeliyet & Sadakat</span>
            </div>
            
            <h1 className="font-serif text-6xl md:text-8xl lg:text-[120px] text-white font-bold tracking-tight leading-[0.95] mb-14 max-w-6xl mx-auto">
              Hukuku Bir <br />
              <span className="relative inline-block mt-6">
                <span className="relative z-10 italic font-light text-transparent bg-clip-text bg-gradient-to-br from-[#E2B93B] via-[#F3E2B1] to-[#C5A022] drop-shadow-sm">
                  Sanata Dönüştürmek
                </span>
                {/* Elegant Underline Accent */}
                <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-[2px] bg-gradient-to-r from-transparent via-secondary-gold/50 to-transparent"></span>
              </span>
            </h1>
            
            <p className="font-sans text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-20 leading-relaxed font-extralight transform -translate-y-2 opacity-0 animate-fade-in-up" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
              Gül Partners, karmaşık hukuki engelleri <span className="text-white/90 font-medium">entelektüel bir derinlik</span> ve <span className="text-white/90 font-medium">stratejik öngörü</span> ile aşan yeni nesil bir hukuk mimarıdır.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-10 transform -translate-y-1 opacity-0 animate-fade-in-up" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
              <Link
                href="/uzmanlik"
                className="group relative px-12 py-6 bg-secondary-gold text-primary-navy font-bold rounded-sm overflow-hidden transition-all duration-500 hover:shadow-[0_0_60px_rgba(197,160,34,0.3)] hover:-translate-y-1"
              >
                <div className="absolute inset-0 w-full h-full bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 origin-left"></div>
                <span className="relative flex items-center gap-4 text-sm tracking-widest uppercase">
                  Uzmanlık Alanlarımız <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" />
                </span>
              </Link>
              
              <Link
                href="/ekip"
                className="group flex items-center gap-6 text-white/80 font-medium tracking-widest text-xs uppercase hover:text-white transition-all duration-300"
              >
                <span className="relative">
                  Ekibimizi Keşfedin
                  <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-secondary-gold transition-all duration-500 group-hover:w-full"></span>
                </span>
                <div className="flex items-center justify-center w-12 h-12 rounded-full border border-white/10 group-hover:border-secondary-gold group-hover:bg-secondary-gold/5 transition-all duration-500">
                   <Users className="w-4 h-4 group-hover:text-secondary-gold transition-colors" />
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Minimalist Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-6 opacity-30 hover:opacity-100 transition-opacity duration-1000">
          <div className="w-[1px] h-20 bg-gradient-to-b from-secondary-gold via-secondary-gold/20 to-transparent"></div>
        </div>
      </section>

      {/* Expertise Concept - Enhanced Descriptions */}
      <section className="py-40 bg-surface-lowest">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 sticky top-32">
              <span className="text-secondary-gold text-sm font-bold tracking-[0.3em] uppercase mb-8 block">
                Disiplinli Yaklaşım
              </span>
              <h2 className="font-serif text-5xl md:text-6xl text-primary-navy font-bold tracking-tight leading-tight mb-10">
                Süreci Yöneten <br />
                <span className="italic font-light text-gray-400">Üstün Strateji</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-12 max-w-md">
                Gül Partners olarak hukuku sadece bir kurallar bütünü olarak değil, müvekkillerimizin iş dünyasındaki başarısını teminat altına alan bir kaldıraç olarak görüyoruz.
              </p>
              <Link
                href="/uzmanlik"
                className="inline-flex items-center gap-4 text-primary-navy font-bold group border-b-2 border-primary-navy/10 pb-2 hover:border-secondary-gold transition-all"
              >
                Tüm Detayları İncele <ArrowUpRight className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 lg:pt-0">
              {services.map((s, i) => (
                <div key={i} className="p-8 bg-white border border-gray-100 rounded-sm hover:shadow-[0_20px_50px_rgba(0,13,36,0.05)] transition-all duration-500 group">
                  <div className="w-16 h-16 bg-surface-low flex items-center justify-center mb-8 group-hover:bg-primary-navy group-hover:text-white transition-colors duration-500">
                    {s.icon}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-primary-navy mb-4">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-8">{s.desc}</p>
                  <Link href={`/uzmanlik/${s.slug}`} className="text-[10px] font-bold tracking-widest text-primary-navy/40 uppercase group-hover:text-secondary-gold transition-colors">Yolu İncele &rarr;</Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision Statement - Ballandırarak Anlat */}
      <section className="py-40 bg-primary-navy text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary-gold/5 rounded-full -mr-96 -mt-96"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-sm">
                <img
                  src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1200&auto=format&fit=crop"
                  alt="Modern Legal Excellence"
                  className="w-full h-full object-cover grayscale brightness-50"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-secondary-gold p-12 hidden md:block">
                <div className="font-serif text-6xl font-bold text-primary-navy mb-2">25+</div>
                <div className="text-[10px] text-primary-navy/70 tracking-[0.2em] font-bold uppercase">Yıllık Güven Odaklı Deneyim</div>
              </div>
            </div>
            
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight mb-8">
                Hukuku Yeniden Tanımlayan <br />
                <span className="text-secondary-gold">Vizyoner Bir Ortaklık</span>
              </h2>
              <div className="space-y-8 text-gray-400 leading-relaxed text-lg font-light">
                <p>
                  Bulut & Partners köklerinden ilham alarak şekillendirdiğimiz "önleyici hukuk" anlayışımız, müvekkillerimizi sadece kriz anlarında değil, her türlü risk oluşmadan önce koruma altına almamızı sağlar. 
                </p>
                <p>
                  Bizim için her dosya, titizlikle işlenmesi gereken bir sanat eseri niteliğindedir. Şeffaflık, süreklilik ve yüksek etik değerler rehberliğinde, karmaşık ticari dinamikleri proaktif bir şekilde yönetiyoruz.
                </p>
                <p>
                  Amacımız sadece hukuki zaferler kazanmak değil, müvekkillerimizin sürdürülebilir büyüme yolculuklarında en güvenilir yol arkadaşı olmaktır.
                </p>
              </div>
              
              <div className="mt-16 grid grid-cols-2 gap-12 border-t border-white/10 pt-16">
                <div>
                  <div className="font-serif text-4xl font-bold text-white mb-2">40+</div>
                  <div className="text-[10px] text-secondary-gold tracking-[0.2em] font-bold uppercase italic">Uzman Avukat Kadrosu</div>
                </div>
                <div>
                  <div className="font-serif text-4xl font-bold text-white mb-2">100%</div>
                  <div className="text-[10px] text-secondary-gold tracking-[0.2em] font-bold uppercase italic">Sonuç Odaklı Çözümler</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-white flex justify-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="bg-surface-low p-12 md:p-24 rounded-sm flex flex-col md:flex-row justify-between items-center gap-12 group overflow-hidden relative">
            <div className="absolute top-0 left-0 w-1 bg-secondary-gold h-0 group-hover:h-full transition-all duration-700"></div>
            <div>
              <h2 className="font-serif text-4xl font-bold text-primary-navy mb-4">Danışmanlığa mı İhtiyacınız Var?</h2>
              <p className="text-gray-500 text-lg">Uzman ekibimizle şimdi iletişime geçin ve stratejik planlamanızı yapalım.</p>
            </div>
            <Link
              href="/iletisim"
              className="bg-primary-navy text-white px-12 py-5 font-bold hover:bg-secondary-gold hover:text-primary-navy transition-all duration-500 whitespace-nowrap"
            >
              Hemen İletişime Geçin
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
