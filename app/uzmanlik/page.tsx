import { Shield, Scale, Landmark, Gavel, Briefcase, Building2, Heart, Award, HelpingHand, Map, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Expertise() {
  const allServices = [
    {
      title: "Kira ve Gayrimenkul Hukuku",
      slug: "gayrimenkul-ve-kira-hukuku",
      icon: <Landmark className="w-10 h-10" />,
      short: "Taşınmaz uyuşmazlıkları ve kentsel dönüşüm süreçlerinde stratejik yönetim.",
      description: "Taşınmaz mülkiyetinden doğan her türlü davanın takibi, kira sözleşmelerinin hazırlanması, tahliye süreçleri ve kentsel dönüşüm alanında derinlemesine danışmanlık sağlıyoruz. Mülkiyet haklarınızın korunması ve uyuşmazlıkların en hızlı şekilde çözüme kavuşturulması temel önceliğimizdir."
    },
    {
      title: "İş ve Sosyal Güvenlik Hukuku",
      slug: "is-ve-sosyal-guvenlik-hukuku",
      icon: <Briefcase className="w-10 h-10" />,
      short: "İşçi-işveren ilişkilerinde proaktif ve koruyucu çözümler.",
      description: "İşe alım süreçlerinden iş akdi feshine, toplu iş sözleşmelerinden sendikal haklara kadar geniş bir yelpazede hizmet veriyoruz. İş hukuku risklerinin minimize edilmesi ve çalışma hayatının yasal mevzuata tam uyumlu hale getirilmesi için uzman ekibimizle yanınızdayız."
    },
    {
      title: "İcra ve İflas Hukuku",
      slug: "icra-ve-iflas-hukuku",
      icon: <Scale className="w-10 h-10" />,
      short: "Alacak tahsilatı ve finansal yeniden yapılandırma süreçlerinde titiz yönetim.",
      description: "Alacakların tahsili, icra takipleri, konkordato süreçleri ve iflas erteleme gibi hassas konularda müvekkillerimizin haklarını savunuyoruz. Finansal darboğazlarda stratejik çıkış yolları ve varlık yönetimi konularında profesyonel destek sunuyoruz."
    },
    {
      title: "Ticaret ve Şirketler Hukuku",
      slug: "ticaret-ve-sirketler-hukuku",
      icon: <Building2 className="w-10 h-10" />,
      short: "Kurumsal başarının hukuki temelini inşa ediyoruz.",
      description: "Şirket kuruluşları, birleşme ve devralmalar (M&A), ana sözleşme revizyonları ve kurumsal yönetim danışmanlığı alanlarında küresel standartlarda hizmet veriyoruz. Ticari riskleri proaktif bir yaklaşımla yöneterek projelerinizin hukuki güvenliğini sağlıyoruz."
    },
    {
      title: "Ceza ve İnfaz Hukuku",
      slug: "ceza-ve-infaz-hukuku",
      icon: <Gavel className="w-10 h-10" />,
      short: "Ceza yargılamasının her aşamasında etkili savunma stratejileri.",
      description: "Soruşturma aşamasından infaz sürecine kadar, temel hak ve özgürlüklerin korunması bilinciyle hareket ediyoruz. Ekonomik suçlar, bilişim suçları ve diğer ceza hukuku alanlarında müvekkillerimizi titizlikle temsil ediyor, adil bir yargılama süreci için çalışıyoruz."
    },
    {
      title: "Marka ve Fikri Mülkiyet Hukuku",
      slug: "marka-ve-fikri-mulkiyet-hukuku",
      icon: <Award className="w-10 h-10" />,
      short: "Yaratıcı değerlerinizin hukuki zırhı oluyoruz.",
      description: "Marka, patent, faydalı model ve endüstriyel tasarım tescilleri ile bu hakların korunması uyuşmazlıklarında uzmanız. Telif hakları ve lisanslama süreçlerinde inovasyonun hukuki güvenliğini sağlayarak marka değerinizi koruyoruz."
    },
    {
      title: "Tazminat Hukuku",
      slug: "tazminat-hukuku",
      icon: <Shield className="w-10 h-10" />,
      short: "Maddi ve manevi zararların tazmini süreçlerinde adalet odaklı rehberlik.",
      description: "Trafik kazaları, iş kazaları, malpraktis (doktor hatası) ve değer kaybı süreçleri başta olmak üzere, uğranılan her türlü zararın tazmini için hukuki mücadele veriyoruz. Hak kayıplarının önlenmesi ve gerçek zararın karşılanması için süreçleri uçtan uca takip ediyoruz."
    },
    {
      title: "Boşanma ve Miras Hukuku",
      slug: "bosanma-ve-miras-hukuku",
      icon: <Heart className="w-10 h-10" />,
      short: "Aile uyuşmazlıklarında hassas ve çözüm odaklı yaklaşım.",
      description: "Anlaşmalı ve çekişmeli boşanma, velayet, nafaka ve mal rejimi tasfiyesi uyuşmazlıklarında insani ve hukuki boyutları dengeleyen bir hizmet sunuyoruz. Miras paylaşımı, vasiyetname hazırlama ve tereke yönetimi konularında geleceğinizi güvence altına alıyoruz."
    },
    {
      title: "Alternatif Uyuşmazlık Çözümleri",
      slug: "alternatif-uyusmazlik-cozumleri",
      icon: <HelpingHand className="w-10 h-10" />,
      short: "Arabuluculuk ile hızlı, gizli ve etkili çözümler.",
      description: "Dava yoluna gitmeden uyuşmazlıkların çözümünde uzman arabulucularımızla hizmet veriyoruz. Zaman ve maliyet avantajı sağlayan, gizlilik esasına dayalı bu yöntemlerle, tarafların ortak menfaatlerini gözeterek sürdürülebilir anlaşmalar inşa ediyoruz."
    },
    {
      title: "İmar, İdare ve Vergi Hukuku",
      slug: "imar-idare-ve-vergi-hukuku",
      icon: <Map className="w-10 h-10" />,
      short: "Kamu ile olan hukuki süreçlerde tam denetim ve savunma.",
      description: "İdari işlemlerin iptali, tam yargı davaları, imar planı değişikliklerine itiraz ve vergi uyuşmazlıkları alanlarında kamu otoriteleri karşısında müvekkil haklarını savunuyoruz. Bürokrasi ve mevzuat karmaşasında güvenilir bir rehberlik sunuyoruz."
    }
  ];

  return (
    <div className="bg-surface">
      {/* Hero Section */}
      <section className="relative pt-48 pb-32 bg-primary-navy overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 w-[1200px] h-[1200px] bg-secondary-gold/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-[100px]"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2000')] bg-cover opacity-10"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <span className="text-secondary-gold text-sm font-bold tracking-[0.4em] uppercase mb-10 block">Hukuki Portföyümüz</span>
            <h1 className="font-serif text-5xl md:text-7xl text-white font-bold tracking-tight mb-12">
              Bütünsel <span className="italic font-light text-secondary-gold">Uzmanlık</span>
            </h1>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto font-light leading-relaxed">
              Disiplinlerarası bir yaklaşımla, hukukun her alanında derinlemesine tecrübe ve stratejik vizyon sunuyoruz.
            </p>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24">
            {allServices.map((service, i) => (
              <div key={i} className="group relative">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-20 h-20 flex-shrink-0 bg-surface flex items-center justify-center text-primary-navy group-hover:bg-primary-navy group-hover:text-white transition-all duration-500 rounded-sm">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h2 className="font-serif text-3xl font-bold text-primary-navy mb-4 group-hover:text-secondary-gold transition-colors">{service.title}</h2>
                    <p className="text-gray-400 font-bold text-[10px] uppercase tracking-widest mb-6">{service.short}</p>
                    <p className="text-gray-600 leading-relaxed mb-8 font-light italic">
                      {service.description}
                    </p>
                    <Link 
                      href={`/uzmanlik/${service.slug}`} 
                      className="inline-flex items-center gap-2 text-xs font-bold text-primary-navy group-hover:gap-4 transition-all"
                    >
                      DETAYLI BİLGİ <ArrowRight className="w-4 h-4 text-secondary-gold" />
                    </Link>
                  </div>
                </div>
                {/* Visual Accent */}
                <div className="absolute -left-8 top-0 w-1 h-0 bg-secondary-gold group-hover:h-full transition-all duration-700 hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-40 bg-surface-low border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <QuoteIcon className="w-16 h-16 text-secondary-gold/20 mx-auto mb-12" />
          <h2 className="font-serif text-3xl md:text-4xl text-primary-navy font-bold italic leading-relaxed mb-12">
            "Hukuk sadece bir kurallar bütünü değil, toplumsal güvenin ve bireysel özgürlüklerin en güçlü kalesidir."
          </h2>
          <div className="w-20 h-1 bg-secondary-gold mx-auto"></div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h3 className="font-serif text-4xl text-primary-navy font-bold mb-8">Henüz Cevabınızı Bulamadınız mı?</h3>
          <p className="text-gray-500 text-lg mb-12 max-w-xl mx-auto">Uzman ekibimiz, özel hukuki durumlarınızı dinlemek ve size en uygun stratejiyi çizmek için hazır.</p>
          <Link
            href="/iletisim"
            className="bg-primary-navy text-white px-16 py-6 font-bold hover:bg-secondary-gold hover:text-primary-navy transition-all duration-500"
          >
            Soru Sorun & Randevu Alın
          </Link>
        </div>
      </section>
    </div>
  );
}

function QuoteIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H11.017V21H14.017ZM5.017 21L5.017 18C5.017 16.8954 5.91243 16 7.017 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H6.017C5.46472 8 5.017 8.44772 5.017 9V12C5.017 12.5523 4.56928 13 4.017 13H2.017V21H5.017Z" />
    </svg>
  );
}
