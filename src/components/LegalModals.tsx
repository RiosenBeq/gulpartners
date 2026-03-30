'use client';

import React, { useEffect } from 'react';
import { X, Shield, Lock, FileText, Printer } from 'lucide-react';
import { cn } from "@/src/lib/utils";

type ModalType = 'privacy' | 'kvkk' | 'terms' | null;

interface LegalModalProps {
  isOpen: boolean;
  type: ModalType;
  onClose: () => void;
}

const CONTENT = {
  privacy: {
    title: "GİZLİLİK POLİTİKASI",
    icon: <Lock className="w-8 h-8 text-secondary-gold" />,
    text: `
      Gül Partners Hukuk Bürosu ("Gül Partners"), web sitemizi ziyaret eden kullanıcıların gizliliğini korumayı taahhüt eder. Bu politika, hangi verileri topladığımızı ve bunları nasıl kullandığımızı açıklar.

      1. TOPLANAN VERİLER
      Web sitemiz üzerinden paylaştığınız ad, soyad, e-posta adresi ve telefon numarası gibi iletişim verileri, yalnızca taleplerinize yanıt vermek amacıyla toplanır.

      2. ÇEREZLER (COOKIES)
      Sitemizde, kullanıcı deneyimini iyileştirmek ve site trafiğini analiz etmek amacıyla teknik çerezler kullanılmaktadır. Bu çerezler kişisel kimlik tespiti yapmaz.

      3. VERİ GÜVENLİĞİ
      Toplanan tüm veriler, yetkisiz erişimi engellemek amacıyla endüstriyel standartlarda güvenlik önlemleri ile korunmaktadır.

      4. ÜÇÜNCÜ TARAFLARLA PAYLAŞIM
      Kişisel verileriniz, yasal zorunluluklar haricinde hiçbir üçüncü taraf veya kurumla ticari amaçlarla paylaşılmaz.
    `
  },
  kvkk: {
    title: "KVKK AYDINLATMA METNİ",
    icon: <Shield className="w-8 h-8 text-secondary-gold" />,
    text: `
      6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, Gül Partners ("Veri Sorumlusu") olarak kişisel verilerinizi aşağıdaki kapsamda işlemekteyiz.

      1. VERİ İŞLEME AMACI
      Kişisel verileriniz; avukatlık hizmetlerinin ifası, müvekkil ilişkilerinin yönetimi ve yasal yükümlülüklerin yerine getirilmesi amacıyla KVKK'nın 5. ve 6. maddelerine uygun olarak işlenir.

      2. İLGİLİ KİŞİ HAKLARI (MADDE 11)
      Herkes, veri sorumlusuna başvurarak kendisiyle ilgili;
      - Kişisel verisinin işlenip işlenmediğini öğrenme,
      - İşlenmişse bilgi talep etme,
      - İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme,
      - Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme,
      - Eksik veya yanlış işlenmişse düzeltilmesini isteme,
      - Kanun uyarınca silinmesini veya yok edilmesini isteme rights.

      3. BAŞVURU YÖNTEMİ
      Haklarınız kapsamındaki taleplerinizi "av.ferdigul@gmail.com" adresine güvenli elektronik imza ile iletebilirsiniz.
    `
  },
  terms: {
    title: "KULLANIM KOŞULLARI",
    icon: <FileText className="w-8 h-8 text-secondary-gold" />,
    text: `
      Bu web sitesini kullanarak aşağıdaki kullanım koşullarını kabul etmiş sayılırsınız.

      1. FİKRİ MÜLKİYET
      Sitede yer alan tüm metinler, görseller, "Hukukun Partnerleri" konsepti ve tasarım öğeleri Gül Partners'a aittir. Yazılı izin olmaksızın kopyalanamaz veya çoğaltılamaz.

      2. BİLGİLENDİRME AMAÇLI KULLANIM
      Bu sitedeki içerikler yalnızca genel bilgilendirme amaçlıdır ve hukuki tavsiye niteliği taşımaz. Site üzerinden kurulan iletişim, avukat-müvekkil ilişkisi tesis etmez.

      3. SORUMLULUK REDDİ
      Gül Partners, site içeriğindeki bilgilerin güncelliği veya eksiksizliği konusunda garanti vermez. Bu bilgilerin kullanımından doğabilecek zararlardan büromuz sorumlu tutulamaz.

      4. YETKİLİ MAHKEME
      Bu koşullardan doğacak uyuşmazlıklarda İstanbul (Çağlayan) Mahkemeleri ve İcra Daireleri yetkilidir.
    `
  }
};

export default function LegalModal({ isOpen, type, onClose }: LegalModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  if (!isOpen || !type) return null;

  const content = CONTENT[type];

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 md:p-12">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-primary/80 backdrop-blur-xl animate-fade-in" 
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[85vh] bg-surface shadow-[0_50px_100px_rgba(0,0,0,0.1)] flex flex-col animate-fade-in scale-up">
        {/* Header */}
        <div className="p-8 md:p-12 border-b border-outline-variant/10 flex justify-between items-start bg-surface-low">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-0.5 bg-secondary"></div>
              <span className="text-secondary font-sans tracking-[0.3em] text-[10px] font-bold uppercase">HUKUKİ BİLGİLENDİRME</span>
            </div>
            <h2 className="font-serif text-4xl font-bold text-primary">{content.title}</h2>
          </div>
          <button 
            onClick={onClose}
            className="text-primary/40 hover:text-primary transition-all p-2 hover:bg-primary/5"
          >
            <X className="w-8 h-8" />
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-grow overflow-y-auto p-8 md:p-12 text-primary/80">
          <div className="prose prose-slate max-w-none prose-p:text-primary/70 prose-headings:text-primary">
            {content.text.split('\n').map((line, i) => (
              <p key={i} className="text-primary/70 text-lg leading-relaxed mb-6 font-light">
                {line.trim()}
              </p>
            ))}
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-8 border-t border-gray-100 flex justify-between items-center bg-gray-50/50">
           <button 
             onClick={() => window.print()}
             className="flex items-center gap-3 text-xs font-bold text-gray-400 hover:text-primary-navy tracking-widest uppercase transition-colors"
           >
             <Printer className="w-5 h-5" /> Yazdır
           </button>
           <button 
             onClick={onClose}
             className="px-12 py-5 bg-primary-navy text-white font-bold text-[10px] tracking-[0.4em] uppercase hover:bg-secondary-gold hover:text-primary-navy transition-all duration-500"
           >
             ANLADIM, KAPAT
           </button>
        </div>
      </div>
    </div>
  );
}
