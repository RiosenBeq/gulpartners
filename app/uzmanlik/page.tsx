import Link from 'next/link';

export default function Expertise() {
  return (
    <main className="pt-24 bg-surface text-primary font-sans antialiased">
      {/* Hero Section: The Case Header */}
      <section className="relative w-full h-[100vh] min-h-[800px] flex items-center overflow-hidden bg-surface-low">
        <div className="absolute inset-0 z-0 opacity-40 grayscale mix-blend-multiply">
          <img 
            alt="Legal Authority" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-n3dRpffSUqY-DLaPznAZQwQnhE-ZWExJnMsvfcyv4lXDIVcB7Yz64-FceD5yBKZEx7Eu6ayHefI2YTMkkPfUJgB6V-R7dwXoL3lmS5pnhGxsUucvARuIBGUEzHk05PYqnx4sEYXYxohd4n4c2t-z77z8w9HiNJbJpBtoSsbVqymX7hVX5WOgmZWtVh4K013xJDqK7bNGbzctaFYtNXean0hXumC08HhYFpc2mHm8DYmkm_IFdGYgvn0g64D0A20BrgDrCreuS3M"
          />
        </div>
        <div className="absolute inset-0 z-1 bg-secondary opacity-5 mix-blend-color"></div>
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-surface via-surface/90 to-transparent"></div>
        <div className="relative z-20 max-w-[1700px] mx-auto px-6 lg:px-12 w-full pt-20">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary text-[10px] font-bold uppercase tracking-[0.3em] mb-10 font-sans backdrop-blur-md">
              Expertise & Practice
            </span>
            <h1 className="font-serif text-6xl md:text-[5.5rem] text-primary tracking-tighter leading-[1.05] mb-10">
              Stratejik Hukuki <br/><span className="text-secondary italic">Mükemmeliyet.</span>
            </h1>
            <p className="font-sans text-xl text-primary/70 max-w-2xl leading-relaxed mb-16 font-light border-l border-secondary/30 pl-8">
              Gül & Partners, karmaşık hukuki süreçlerde disiplinlerarası bir yaklaşımla, müvekkillerine kurumsal ve bireysel düzeyde elit danışmanlık hizmeti sunar.
            </p>
          </div>
        </div>
        {/* Brushed Metal Detail */}
        <div className="absolute bottom-0 right-0 w-1/3 h-1 opacity-30 bg-gradient-to-r from-surface-low via-primary/20 to-surface-low"></div>
      </section>

      {/* Expertise Bento Grid */}
      <section className="py-24 px-8 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Section Intro */}
          <div className="md:col-span-12 mb-12 border-l-2 border-secondary pl-8">
            <h2 className="font-serif text-3xl text-primary mb-4">Uzmanlık Alanlarımız</h2>
            <p className="text-primary/70 font-sans max-w-2xl">Yılların getirdiği tecrübeyi modern hukuk dinamikleriyle harmanlayarak, yerel ve uluslararası arenada çözüm odaklı hizmet sağlıyoruz.</p>
          </div>

          {/* Bento Item 1: Şirketler Hukuku (Large Focus) */}
          <div className="md:col-span-8 group relative overflow-hidden bg-surface-low p-10 border-l-[6px] border-secondary transition-all duration-700 hover:bg-surface hover:shadow-2xl">
            <div className="flex flex-col md:flex-row gap-10">
              <div className="flex-1">
                <span className="material-symbols-outlined text-4xl text-secondary mb-6">account_balance</span>
                <h3 className="font-serif text-2xl mb-4 text-primary">Şirketler Hukuku & M&A</h3>
                <p className="text-primary/70 leading-relaxed mb-6 font-light">Şirket kuruluşları, birleşme ve devralmalar, kurumsal yönetişim ve ticari sözleşmelerin hazırlanması süreçlerinde stratejik rehberlik sağlıyoruz.</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-sm text-primary font-medium">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span> Sınır Ötesi İşlemler
                  </li>
                  <li className="flex items-center gap-3 text-sm text-primary font-medium">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span> Risk Yönetimi ve Uyumluluk
                  </li>
                  <li className="flex items-center gap-3 text-sm text-primary font-medium">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span> Hissedarlık Sözleşmeleri
                  </li>
                </ul>
                <Link className="inline-flex items-center gap-2 text-secondary font-bold text-xs uppercase tracking-widest group-hover:gap-4 transition-all" href="#">
                  Detayları İncele <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
              <div className="w-full md:w-1/3 h-64 md:h-auto overflow-hidden grayscale transition-all duration-[1.5s] group-hover:grayscale-0 group-hover:scale-105">
                <img className="w-full h-full object-cover mix-blend-multiply" alt="Corporate Law" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAatluvpt5lkAhRQH0mTxIY4CeT9cKAewvNUjOSlp6sTeyGej1w-DG4gsSf7fjgsK9D1JC8mDSZl2p5NmC3U20RU37QZACkrFgD3bteLC_1VDd2cnxEDvM_pDzC-bIUgoGS97AyILGPcNhdDgek8nyPcdsLRAJ3oeov1suXoW4Uh2DCR0rLI2uNWvTFduV8Kn-Xmqwwe0xxCYcJH0_H4FkCjMRu_2tep4gKoIpOKBxep8XMYdCJNhWUAPreRj7OZn0lZ8BkuRmC6zo"/>
              </div>
            </div>
          </div>

          {/* Bento Item 2: Dava ve Uyuşmazlık */}
          <div className="md:col-span-4 bg-surface p-10 border border-outline-variant/20 group hover:shadow-xl transition-all relative">
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <span className="material-symbols-outlined text-8xl">gavel</span>
            </div>
            <span className="material-symbols-outlined text-4xl text-secondary mb-6">balance</span>
            <h3 className="font-serif text-2xl mb-4 text-primary">Dava ve Uyuşmazlık Çözümü</h3>
            <p className="text-primary/70 text-sm leading-relaxed mb-8 font-light">Karmaşık ticari uyuşmazlıklardan tahkim süreçlerine kadar her aşamada müvekkillerimizin haklarını titizlikle savunuyoruz.</p>
            <Link className="inline-flex items-center gap-2 text-secondary font-bold text-xs uppercase tracking-widest group-hover:gap-4 transition-all" href="#">
              İncele <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>

          {/* Bento Item 3: Gayrimenkul (Visual card) */}
          <div className="md:col-span-4 relative group h-[400px] overflow-hidden bg-primary border border-outline-variant/10">
            <img className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale transition-all duration-[1.5s] group-hover:scale-110 group-hover:grayscale-0 mix-blend-luminosity" alt="Real Estate Law" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpxXTz6OWl2FeQkkLEDScCFuckIF3y715UzavucQslwIGQEfVClZ0u6e8Q_ybOVIu41RhGCSOvg2_92Bv7OS6a6uwvmKDwTpW-lcfQOCvioKPB-rKjRtkZJgdm_KmBFCWM274VgfZktHnd4owqwI9-d4u_z0drciJ97vZ6sNCgkbmaxokFAkG7jlxXAKcjKpgqpQbaYBpYjMgr5FTeVSb2XPysruCWbCtP7hFCVX172lW0RfPsQrY8OFKhVRPAzyknjGsl5u2jnrY"/>
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1c1c] via-[#1a1c1c]/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8">
              <h3 className="font-serif text-2xl text-white mb-2">Gayrimenkul Hukuku</h3>
              <p className="text-zinc-300 text-sm mb-4">Proje geliştirme ve mülkiyet yönetimi.</p>
              <Link className="text-secondary font-bold text-xs uppercase tracking-widest" href="#">Keşfet</Link>
            </div>
          </div>

          {/* Bento Item 4: Fikri Mülkiyet */}
          <div className="md:col-span-4 bg-surface-low p-10 border border-outline-variant/10 hover:bg-surface transition-colors flex flex-col justify-between">
            <div>
              <span className="material-symbols-outlined text-4xl text-secondary mb-6">verified_user</span>
              <h3 className="font-serif text-2xl mb-4 text-primary">Fikri Mülkiyet</h3>
              <p className="text-primary/70 text-sm leading-relaxed mb-8 font-light">Marka, patent ve telif haklarının korunması ile inovasyon süreçlerinin hukuki güvenliğini sağlıyoruz.</p>
            </div>
            <div>
              <div className="h-px w-12 bg-secondary/30 mb-8"></div>
              <Link className="text-secondary font-bold text-xs uppercase tracking-widest" href="#">Detaylar</Link>
            </div>
          </div>

          {/* Bento Item 5: İş Hukuku */}
          <div className="md:col-span-4 bg-surface p-10 flex flex-col justify-between border border-outline-variant/10 hover:bg-surface-low transition-colors">
            <div>
              <h3 className="font-serif text-2xl mb-4 text-primary">İş Hukuku</h3>
              <p className="text-primary/70 text-sm leading-relaxed font-light">İşveren ve işçi ilişkilerinin düzenlenmesi, toplu sözleşmeler ve uyumluluk denetimleri.</p>
            </div>
            <div className="mt-8 flex justify-end">
              <span className="material-symbols-outlined text-secondary opacity-30 text-5xl">groups</span>
            </div>
          </div>

        </div>
      </section>

      {/* Information Architecture / Process Section */}
      <section className="bg-surface-low py-24 px-8 overflow-hidden border-t border-outline-variant/10">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="relative overflow-hidden group">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
            <img className="relative z-10 w-full shadow-2xl grayscale brightness-90 transition-all duration-[1.5s] group-hover:grayscale-0 group-hover:scale-[1.03] mix-blend-multiply" alt="Legal Process" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCInfF3asGOk9aDWgSlEyEX5KTBxDB2gWlg7MTmZj9MFYZTEU8OM2Mxkx1ma9XafFcISXyfETuMhfUvZpOn6v1pHfZETy3652ngPx5Zw6C9lQE3gN77F7UJxCv2I4c8eAbzgLk2UpyCRqUFGEny2Pjy9zHJDPKbPQ8nkZ8CVt7N0fo7gtjkBf80pMUgcMoJg_-L7TyooN8cz5tDbTiRxU8XjXnSyC6XvY25mYGNa3w7kOjODYwxSN7I7iVIaG5p8gzjeSsOUdUCdio"/>
          </div>
          <div>
            <h2 className="font-serif text-4xl mb-8 leading-tight text-primary">Nasıl <span className="text-secondary italic">Çalışıyoruz?</span></h2>
            <div className="space-y-12">
              <div className="flex gap-6">
                <span className="font-serif text-4xl text-secondary/40">01</span>
                <div>
                  <h4 className="font-sans font-bold text-lg mb-2 text-primary">Analiz & Teşhis</h4>
                  <p className="text-primary/70 text-sm leading-relaxed font-light">Her vakayı kendi özel dinamikleri içerisinde değerlendiriyor, olası riskleri ve fırsatları en ince ayrıntısına kadar haritalandırıyoruz.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <span className="font-serif text-4xl text-secondary/40">02</span>
                <div>
                  <h4 className="font-sans font-bold text-lg mb-2 text-primary">Strateji Geliştirme</h4>
                  <p className="text-primary/70 text-sm leading-relaxed font-light">Müvekkillerimizin ticari hedefleriyle uyumlu, hukuki zemini sağlam ve proaktif çözüm stratejileri kurguluyoruz.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <span className="font-serif text-4xl text-secondary/40">03</span>
                <div>
                  <h4 className="font-sans font-bold text-lg mb-2 text-primary">Uygulama & Sonuç</h4>
                  <p className="text-primary/70 text-sm leading-relaxed font-light">Belirlenen stratejiyi yüksek disiplin ve şeffaf iletişim ile hayata geçirerek sürdürülebilir başarı sağlıyoruz.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-8">
        <div className="max-w-screen-xl mx-auto bg-primary text-on-primary p-12 md:p-24 relative overflow-hidden text-center group">
          <div className="absolute inset-0 bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuCIGzRVmh4dFePWBousCq8ryZH6WQOi1Yne1vxFBgJqssmMnZd3yrYd_CFJfN-aLNlBeH7KmbGvzMXveqSvOwOzd5kvNXdIjrcAY0ui1BRQfSeQepWMVpEdyvJTIPZKISmViGvAvq-6RKjUVYF0L83nkLpYZfVjv86NxRPdJn-45RUlyR_FB-oGwTUk4xHYBfkSLspQEz-NjotAU2qpbiD0Bp-gp4zPmlQWUem0i11vZOGGTgQoD-BQ3krF9btwVRLb4BhNddWGyms')] opacity-5 mix-blend-overlay bg-cover bg-center grayscale transition-all duration-[2s] group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-20"></div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-tight">Hukuki Güvenliğinizi Profesyonellere Emanet Edin.</h2>
            <p className="text-on-primary/70 mb-14 text-lg font-light">Özel durumunuzu görüşmek ve uzman kadromuzdan danışmanlık almak için bizimle iletişime geçin.</p>
            <Link href="/iletisim">
              <button className="bg-gradient-to-r from-primary to-primary-container text-on-primary border border-outline-variant/30 px-14 py-5 font-bold uppercase tracking-[0.4em] text-[10px] transition-all duration-700 shadow-xl hover:-translate-y-1 hover:shadow-2xl hover:border-secondary/50 inline-flex items-center gap-3 w-full sm:w-auto justify-center">
                RANDEVU ALIN <span className="material-symbols-outlined text-sm transition-transform duration-500 group-hover:translate-x-1">north_east</span>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
