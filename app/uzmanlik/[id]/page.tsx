'use client';

import React, { useState, use } from 'react';
import { Shield, Scale, Landmark, Gavel, Briefcase, Building2, Heart, Award, HelpingHand, Map, ArrowLeft, Send } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const allServices = [
  {
    title: "Kira ve Gayrimenkul Hukuku",
    slug: "gayrimenkul-ve-kira-hukuku",
    icon: <Landmark className="w-16 h-16" />,
    longDesc: "Gül Partners, gayrimenkul sektörünün karmaşık doğasını ve kira uyuşmazlıklarının hassasiyetini derinlemesine anlayan bir hukuk bürosudur. Taşınmaz mülkiyetinden doğan her türlü ihtilafta, kentsel dönüşüm davalarında ve kira sözleşmelerinin yönetiminde müvekkillerimize stratejik rehberlik sunuyoruz.",
    features: [
      "Tahliye davaları ve kira bedeli tespit süreçleri",
      "Kentsel dönüşüm uyuşmazlıkları ve sözleşme yönetimi",
      "Tapu iptal ve tescil davaları",
      "Gayrimenkul satış ve devir işlemleri danışmanlığı",
      "İmar planı değişikliklerine itiraz ve hukuki takip"
    ]
  },
  {
    title: "İş ve Sosyal Güvenlik Hukuku",
    slug: "is-ve-sosyal-guvenlik-hukuku",
    icon: <Briefcase className="w-16 h-16" />,
    longDesc: "İnsan kaynağının yönetimi, bir şirketin en kritik süreçlerinden biridir. Biz, işçi ve işveren arasındaki ilişkileri yasal mevzuat çerçevesinde en sağlıklı şekilde düzenlemek, riskleri minimize etmek ve çalışma barışını korumak için proaktif çözümler üretiyoruz.",
    features: [
      "İşe alım ve iş akdi fesih süreçlerinin hukuki yönetimi",
      "İş kazalarından doğan tazminat davaları",
      "Toplu iş sözleşmeleri ve sendikal süreçler",
      "İş sağlığı ve güvenliği mevzuatına uyum danışmanlığı",
      "Sosyal güvenlik uyuşmazlıklarının çözümü"
    ]
  },
  {
    title: "Ticaret ve Şirketler Hukuku",
    slug: "ticaret-ve-sirketler-hukuku",
    icon: <Building2 className="w-16 h-16" />,
    longDesc: "Kurumsal dünyanın dinamiklerine hakim bir bakış açısıyla, şirketlerin kuruluşundan globalleşme süreçlerine kadar her aşamada yanlarındayız. Ticari başarının ancak sağlam bir hukuki altyapı ile sürdürülebilir olduğuna inanıyoruz.",
    features: [
      "Şirket kuruluş, birleşme ve devralma (M&A) işlemleri",
      "Hisse devir sözleşmeleri ve kurumsal yönetim",
      "Ticari sözleşmelerin hazırlanması ve müzakere yönetimi",
      "Şirketler arası uyuşmazlıkların çözümü",
      "Haksız rekabet ve ortaklar arası ihtilaflar"
    ]
  },
  {
    title: "İcra ve İflas Hukuku",
    slug: "icra-ve-iflas-hukuku",
    icon: <Scale className="w-16 h-16" />,
    longDesc: "Finansal istikrarın korunması, alacakların zamanında ve eksiksiz tahsil edilmesiyle mümkündür. İcra ve İflas hukuku alanında, modern tahsilat yöntemleri ve yasal koruma mekanizmalarıyla müvekkillerimizin mali çıkarlarını en üst düzeyde savunuyoruz.",
    features: [
      "İlamsız ve ilamlı icra takipleri",
      "Alacak tahsilatı ve varlık araştırması",
      "Konkordato ve finansal yeniden yapılandırma danışmanlığı",
      "İflas ve tasfiye süreçlerinin yönetimi",
      "İstihkak ve menfi tespit davaları"
    ]
  }
];

export default function ServiceDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const service = allServices.find((s) => s.slug === resolvedParams.id);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    note: ''
  });

  if (!service) {
    return notFound();
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappNumber = "905330940792";
    const text = `*Gül Partners - Hizmet Talebi*\n\n🛡️ *Hizmet:* ${service.title}\n👤 *İsim:* ${formData.name}\n📞 *Telefon:* ${formData.phone}\n📝 *Not:* ${formData.note}`;
    
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-surface">
      {/* Dynamic Header */}
      <section className="relative pt-48 pb-32 bg-primary-navy overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-40 -left-40 w-[800px] h-[800px] bg-secondary-gold/20 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <Link 
            href="/uzmanlik" 
            className="inline-flex items-center gap-2 text-secondary-gold text-xs font-bold tracking-widest uppercase mb-12 hover:gap-4 transition-all"
          >
            <ArrowLeft className="w-4 h-4" /> Tüm Uzmanlık Alanları
          </Link>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12 text-center md:text-left">
            <div className="w-32 h-32 flex-shrink-0 bg-white/5 border border-white/10 flex items-center justify-center text-secondary-gold rounded-sm backdrop-blur-md">
              {service.icon}
            </div>
            <div>
              <h1 className="font-serif text-5xl md:text-6xl text-white font-bold tracking-tight mb-6">{service.title}</h1>
              <p className="text-gray-400 text-xl font-light max-w-2xl leading-relaxed">
                {service.longDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detail Content */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-8">
              <h2 className="font-serif text-3xl font-bold text-primary-navy mb-12 border-b border-gray-100 pb-8">Çözüm Odaklı Yaklaşımımız</h2>
              <div className="prose prose-lg max-w-none text-gray-600 font-light space-y-8 leading-relaxed">
                <p>
                  Gül Partners olarak, <span className="text-primary-navy font-medium italic">{service.title}</span> alanında sadece dava takibi yapmıyor, uyuşmazlıkların temel nedenlerini analiz ederek geleceğe yönelik koruyucu stratejiler geliştiriyoruz.
                </p>
                <p>
                  Müvekkillerimize sunduğumuz hizmetlerde şeffaflık ve dürüstlük ilkesinden asla ödün vermiyoruz. Sürecin her aşamasında anlık bilgilendirmeler ve periyodik raporlamalarla müvekkillerimizin hukuki durumlarını tam denetim altında tutmalarını sağlıyoruz.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10">
                  {service.features.map((f, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="w-2 h-2 rounded-full bg-secondary-gold mt-2 flex-shrink-0"></div>
                      <span className="text-primary-navy font-medium">{f}</span>
                    </div>
                  ))}
                </div>
                <p>
                  Tecrübeli avukat kadromuz ve akademik danışmanlarımızla, konunun hem pratik hem de teorik boyutlarını dikkate alarak en doğru hukuki yolu çiziyoruz.
                </p>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-10">
              <div className="bg-surface-low p-10 rounded-sm border border-gray-100 sticky top-32">
                <h3 className="font-serif text-xl font-bold text-primary-navy mb-8">Danışmanlık Talebi</h3>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 block">İsim</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-200 p-4 focus:outline-none focus:border-secondary-gold" 
                      placeholder="Adınız" 
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 block">Telefon</label>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-200 p-4 focus:outline-none focus:border-secondary-gold" 
                      placeholder="+90" 
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 block">Notunuz</label>
                    <textarea 
                      name="note"
                      required
                      value={formData.note}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-200 p-4 focus:outline-none focus:border-secondary-gold resize-none" 
                      rows={3} 
                      placeholder="Kısaca belirtin..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-primary-navy text-white py-5 font-bold hover:bg-secondary-gold hover:text-primary-navy transition-all duration-500 uppercase tracking-widest text-xs flex items-center justify-center gap-3"
                  >
                    Bize Gönderin <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary-navy">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl text-white font-bold mb-8">Hukuki Güvenliğinizi Şansa Bırakmayın</h2>
          <Link 
            href="/iletisim" 
            className="inline-block border-2 border-secondary-gold text-secondary-gold px-12 py-5 font-bold hover:bg-secondary-gold hover:text-primary-navy transition-all duration-500"
          >
            RANDEVU ALIN
          </Link>
        </div>
      </section>
    </div>
  );
}
