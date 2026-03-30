import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-white selection:bg-secondary-gold/30 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0 scale-105">
          <img 
            className="w-full h-full object-cover grayscale-[0.3] brightness-[0.4]" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuALZkTtvcOaPzGc309mB5IMZvS29xJrtplDTj4gDaa29Lb6IANeZvC335_f2j6pCtKoZ2tBODMJBUjSCFiL1b-6j1g1Qdy6fY0PcK7oCuxm2vaj1Qd0lsQfCbYOb_tX4VREfr2rvPQt8YPArtOMT5nAIOtqucdgBxOHw1hm_v6BUU7WRWUSoRFeSRfk4_ehljLBM0QIGbx3_9D2draTs69qSpYLsGM7qmlHwQr2a6RQNeaew434pDdwhk2MSJn9CvPA7BN0gExfdyQ" 
            alt="Dramatic interior of a modern library"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full text-center md:text-left">
          <div className="max-w-4xl">
            <span className="inline-block text-secondary-gold font-sans tracking-[0.3em] uppercase text-xs mb-6 animate-fade-in font-bold">Gul Partners | Aurelian Juris</span>
            <h1 className="font-serif text-5xl md:text-8xl text-white font-bold leading-[1.1] mb-8 tracking-tight">
              Geleceğin Hukuk <br/><span className="italic font-light">Mimarları.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-light mb-12 max-w-2xl leading-relaxed">
              Modern hukukta mükemmellik, stratejik derinlik ve sarsılmaz bir etik anlayışı ile şekillenir.
            </p>
            <div className="flex flex-col md:flex-row gap-6">
              <Link href="/iletisim" className="px-10 py-5 bg-secondary-gold text-primary-navy font-bold text-sm tracking-widest uppercase hover:bg-white transition-all duration-500 inline-block text-center shadow-2xl shadow-secondary-gold/20">
                DOSYANIZI DANIŞIN
              </Link>
              <Link href="/uzmanlik" className="px-10 py-5 border border-white/30 text-white font-medium text-sm tracking-widest uppercase hover:bg-white/10 backdrop-blur-sm transition-all duration-500 inline-block text-center">
                UZMANLIKLARIMIZ
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
          <span className="material-symbols-outlined text-4xl">keyboard_double_arrow_down</span>
        </div>
      </section>

      {/* Services: Bento Grid Style */}
      <section className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="font-serif text-4xl md:text-6xl text-primary-navy font-bold mb-6 tracking-tight">Kurumsal Çözümler ve Stratejik Hukuk</h2>
              <p className="text-gray-500 text-xl leading-relaxed font-light">Karmaşık hukuki süreçleri, vizyoner bir perspektifle yönetiyoruz. Global standartlarda yerel derinlik.</p>
            </div>
            <Link href="/uzmanlik" className="text-secondary-gold font-bold text-lg flex items-center gap-2 group border-b-2 border-secondary-gold/10 pb-1 hover:border-secondary-gold transition-all">
              Tüm Hizmetler 
              <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_right_alt</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* M&A */}
            <div className="md:col-span-8 group relative overflow-hidden bg-white p-12 border border-slate-100 min-h-[440px] flex flex-col justify-between shadow-sm transition-all hover:shadow-2xl hover:shadow-primary-navy/5">
              <div>
                <span className="material-symbols-outlined text-secondary-gold text-6xl mb-10 transition-transform group-hover:scale-110 duration-500 block">handshake</span>
                <h3 className="font-serif text-3xl font-bold text-primary-navy mb-4">Birleşme ve Devralmalar (M&A)</h3>
                <p className="text-gray-500 max-w-md leading-relaxed font-light">Sınır ötesi operasyonlarda ve karmaşık ticari yapılandırmalarda stratejik rehberlik sağlıyoruz.</p>
              </div>
              <img 
                className="absolute -right-20 bottom-0 opacity-10 group-hover:opacity-20 transition-opacity w-1/2 pointer-events-none grayscale" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqvKatVBzSnxWpqVUzMRtyztFc_D0UQFaqVCLiKqYrt0Z2Bq2VHdTtFo3n7T2BM8MxdQOVmK4-iif_qf6p5f7xlzNIjGwTB1TTiJq-tlj_GQhi6Njf1X4xZBMluFWmj0gAPXcvyHOUngeD-P8h4XDzzTVzBcXsiEo0JaW7Eb-GqMSlRlGsh39UbARbLEhP6AM6sEhTlMMF4XtLH_neytduULi7PBOXoOVzOU_tV-vEi2F6I6zSzYSCAmY8bzCk-z1NzGwj-LwCZy8" 
                alt="Minimal office"
              />
            </div>

            {/* Dava */}
            <div className="md:col-span-4 group bg-primary-navy p-12 flex flex-col justify-between hover:bg-primary-navy/95 transition-all duration-500 rounded-sm">
              <span className="material-symbols-outlined text-secondary-gold text-5xl mb-6">gavel</span>
              <div>
                <h3 className="font-serif text-2xl font-bold text-white mb-4 italic">Uyuşmazlık Çözümü</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-light">Tahkim ve dava süreçlerinde sarsılmaz bir savunma ve sonuç odaklı temsil.</p>
              </div>
            </div>

            {/* Gayrimenkul */}
            <div className="md:col-span-4 group bg-surface-low p-12 flex flex-col justify-between hover:bg-surface-high transition-all duration-500 rounded-sm border border-gray-50">
              <span className="material-symbols-outlined text-primary-navy text-5xl mb-6">domain</span>
              <div>
                <h3 className="font-serif text-2xl font-bold text-primary-navy mb-4">Gayrimenkul Hukuku</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light">Büyük ölçekli projeler ve varlık yönetimi için hukuki altyapı tasarımı.</p>
              </div>
            </div>

            {/* Tech */}
            <div className="md:col-span-8 group relative overflow-hidden bg-secondary-gold p-12 flex flex-col justify-between rounded-sm shadow-xl shadow-secondary-gold/10">
              <div className="relative z-10">
                <span className="material-symbols-outlined text-primary-navy text-6xl mb-10 transition-transform group-hover:rotate-12 block">biotech</span>
                <h3 className="font-serif text-3xl font-bold text-primary-navy mb-4">Geleceğin Teknolojileri</h3>
                <p className="text-primary-navy/80 max-w-md leading-relaxed font-semibold">AI, Web3 ve veri güvenliği alanlarında hukuki inovasyon ve uyumluluk danışmanlığı.</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About/Vision */}
      <section className="py-40 relative bg-white border-y border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div className="relative group">
            <div className="aspect-[4/5] overflow-hidden group-hover:shadow-3xl transition-shadow duration-700">
              <img 
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9lwY_GEGSuEP-TedP_QPPicgtY-UIjJ1Z7pD3Q7rpz_xn4YaoQsGq_zFo9TMZUnFG1o3jg2ukyBiusnunkGuzNed1bPQ3B12gH91ZRyUMMX_rFgTqXrHFeOHkOtka--6gG64ahH2B8Gu5Zg7Yx_zVSKcJcJOJ6-wzP1962UizWlpZevoe64YuKCqVGE92axlJUmBF3JSto6w0z1K1rZH_51wBruuiEPtjVeUOtSm6ZYfxd9374O8Ni7eR2gN4xDGqp09eXVM6ik4" 
                alt="Modern skyscraper reflecion"
              />
            </div>
            <div className="absolute -bottom-16 -right-16 bg-primary-navy p-16 hidden md:block shadow-2xl shadow-primary-navy/30 translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
              <p className="text-secondary-gold font-serif text-7xl font-bold mb-2">25+</p>
              <p className="text-white font-sans uppercase tracking-[0.4em] text-[10px] font-bold">Yıllık Bilge Tecrübe</p>
            </div>
          </div>
          <div>
            <span className="text-secondary-gold font-sans tracking-[0.4em] uppercase text-[10px] font-bold mb-8 block">Vizyoner Yaklaşım</span>
            <h2 className="font-serif text-5xl md:text-6xl text-primary-navy font-bold mb-12 leading-tight tracking-tight">Zamana Karşı <br/><span className="italic font-light text-gray-400">Sarsılmaz Bilgelik.</span></h2>
            <div className="space-y-8 text-gray-500 text-lg leading-relaxed font-light italic">
              <p>Gul Partners olarak biz, hukuku sadece bir kurallar bütünü olarak değil, toplumun ve iş dünyasının temel taşı olarak görüyoruz. Vizyonumuz, müvekkillerimizin en karmaşık sorunlarını basit, etkili ve sürdürülebilir çözümlerle aşmalarını sağlamaktır.</p>
              <p>Adalet arayışını modern teknoloji ve derin hukuki birikimle birleştirerek, Türkiye'nin ve bölgenin en saygın butik hukuk platformlarından biri olma yolunda ilerliyoruz.</p>
            </div>
            <Link href="/hakkimizda" className="mt-16 group flex items-center gap-4 text-primary-navy font-bold text-sm tracking-[0.2em] uppercase border-b-2 border-secondary-gold pb-3 hover:gap-8 transition-all duration-500">
              HİKAYEMİZİ KEŞFEDİN
              <span className="material-symbols-outlined text-secondary-gold text-lg">north_east</span>
            </Link>
          </div>
        </div>
      </section>

      {/* featured Team */}
      <section className="py-40 bg-surface-low">
        <div className="max-w-7xl mx-auto px-8 text-center mb-32">
          <h2 className="font-serif text-5xl md:text-7xl text-primary-navy font-bold mb-8 tracking-tight">Öncü Zihinlerimiz</h2>
          <p className="text-gray-400 text-xl font-light uppercase tracking-widest">Hukukun sınırlarını zorlayan disiplinler arası bir kadro.</p>
        </div>
        <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-24">
          {/* Partner 1 */}
          <div className="group cursor-pointer">
            <div className="aspect-[3/4] overflow-hidden mb-10 relative">
              <img 
                className="w-full h-full object-cover grayscale transition-all duration-[1.5s] group-hover:grayscale-0 group-hover:scale-105" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZ5nOmxAgkcYBmRKyFYHdI2fJs-GrcT9XkNwYrQGzgkv9j8KYqiKVQXInhvqnPEEkFOQY4K8DatdeYy3ETMwf8nu3gd4ho2FnBExPR3U_tPWSo0wbwVV6TYPCINnIzZQ7QL4yKY8CFBT4Y7DOE5rVMkdN2PiJrVb2p6UQgw8pvHV9H92vmv8ur1u9Ayw4aUw28CL6louzOYgEqI2bduWG0WNBHkwU9BFAmUa9gE3dYlU1OQuRVPSUIj6LAYuR1CAg3IWsbnYKrUAc" 
                alt="Portrait of Dr. Elias Gul"
              />
              <div className="absolute inset-0 bg-primary-navy/10 group-hover:bg-transparent transition-colors duration-700"></div>
            </div>
            <h3 className="font-serif text-4xl font-bold text-primary-navy mb-3">Dr. Elias Gul</h3>
            <p className="text-secondary-gold font-sans uppercase tracking-[0.3em] text-[10px] font-bold mb-6">KURUCU ORTAK / M&A BAŞKANI</p>
            <p className="text-gray-500 leading-relaxed font-light">Uluslararası tahkim ve stratejik birleşmeler alanında 20 yılı aşkın tecrübe ile hukuki danışmanlık lideri.</p>
          </div>
          {/* Partner 2 */}
          <div className="group cursor-pointer md:mt-32">
            <div className="aspect-[3/4] overflow-hidden mb-10 relative">
              <img 
                className="w-full h-full object-cover grayscale transition-all duration-[1.5s] group-hover:grayscale-0 group-hover:scale-105" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBK_GBK-xU9QPPH-NcUVMqw_0A_stQpdeYazjhK7RM-zJRB0NOGeZjhwd44QlKjoKwMn30kKxmGAlDcqEWZMcF6dPjfZkItTbCvMal8Vc6_U-jdBq3X9cgdahTqKVzDo3Jm9wz2rfjk_Z4xjBM4J-B9yyGymfFEUYuTeQ6zYjgf7gTcvViBXJn_l5lZfO5m4-noVjDpclvwbgI82ixosWcgf5dvfpK084Wz40Sr-gT1tcuXxVUHQ7nGXhcCyOj5eF_Kko_dQ9sbdOM" 
                alt="Portrait of Elena Thorne"
              />
              <div className="absolute inset-0 bg-primary-navy/10 group-hover:bg-transparent transition-colors duration-700"></div>
            </div>
            <h3 className="font-serif text-4xl font-bold text-primary-navy mb-3">Elena Thorne</h3>
            <p className="text-secondary-gold font-sans uppercase tracking-[0.3em] text-[10px] font-bold mb-6">YÖNETİCİ ORTAK / TEKNOLOJİ HUKUKU</p>
            <p className="text-gray-500 leading-relaxed font-light">Dijital dönüşüm ve veri koruma stratejilerinde global ölçekte tanınan uzmanlık.</p>
          </div>
        </div>
      </section>

      {/* Immersive CTA Area */}
      <section className="relative h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 scale-110">
          <img 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCl6qQ6R1YF8a1U8r6WB_rSpIeR2nfVAENy3P3CDj1kHc-yLTntOZ9K-LrGCmZ1_Ltwk_acIyM5G8HLWSfkWZhDohlJTPEhWRrLmEvqpxzB5d0xAgVndy2nslls6kLRtvbctNKg4hh2eolRaiARPf17d64YJtKKsLY6PqCrfpbZd9lI9jOwCJUZps1nU1yxb9xOzoUWLbS0aCGE9pkLGj9M1z30fbnlPYR-2G2ONNaKheYflP76TmvaWPZmP-rz3pW_-3JBjhNBxJk" 
            alt="Corporate boardroom"
          />
          <div className="absolute inset-0 bg-primary-navy/85 backdrop-blur-[4px]"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-8 text-center group">
          <h2 className="font-serif text-5xl md:text-8xl text-white font-bold mb-12 leading-tight tracking-tight">Dosyanızı Uzmanına <br/><span className="text-secondary-gold italic">Danışın.</span></h2>
          <p className="text-slate-300 text-xl font-light mb-16 max-w-2xl mx-auto italic">Hukuki süreçlerinizde netlik ve güven için bizimle iletişime geçin.</p>
          <Link href="/iletisim" className="bg-secondary-gold text-primary-navy px-16 py-8 font-bold text-sm tracking-[0.4em] uppercase hover:bg-white hover:text-primary-navy transition-all duration-700 shadow-3xl shadow-secondary-gold/20 inline-block group-hover:scale-105 transform">
            HUKUKİ DANIŞMANLIK ALIN
          </Link>
        </div>
      </section>
    </div>
  );
}
