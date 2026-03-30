'use client';

import React, { useState, useEffect } from 'react';
import { ShieldCheck, X } from 'lucide-react';
import { cn } from "@/src/lib/utils";

interface CookieConsentProps {
  onOpenPrivacy: () => void;
}

export default function CookieConsent({ onOpenPrivacy }: CookieConsentProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('gulpartners-cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500); // Slight delay for premium feel
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('gulpartners-cookie-consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className={cn(
      "fixed bottom-24 md:bottom-12 left-1/2 -translate-x-1/2 z-[200] w-[95%] max-w-2xl",
      "animate-in fade-in slide-in-from-bottom-10 duration-1000 ease-out"
    )}>
      <div className="bg-primary-navy/90 backdrop-blur-2xl border border-white/10 p-6 md:p-8 rounded-3xl shadow-[0_50px_100px_rgba(0,0,0,0.5)] flex flex-col md:flex-row items-center gap-6 md:gap-10">
        <div className="flex-shrink-0 w-16 h-16 bg-white/5 rounded-full flex items-center justify-center text-secondary-gold border border-white/5">
          <ShieldCheck className="w-8 h-8" />
        </div>
        
        <div className="flex-grow text-center md:text-left">
          <h4 className="text-white font-serif text-lg font-bold mb-2 tracking-tight">Gizliliğiniz Bizim İçin Önemli</h4>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            Deneyiminizi iyileştirmek için çerezleri kullanıyoruz. Web sitemizi kullanarak çerez politikamızı kabul etmiş olursunuz.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0 w-full md:w-auto">
          <button 
            onClick={onOpenPrivacy}
            className="text-[10px] text-gray-500 hover:text-white uppercase tracking-[0.2em] font-bold transition-colors py-2"
          >
            Detaylı Bilgi
          </button>
          <button 
            onClick={handleAccept}
            className="bg-secondary-gold text-primary-navy px-10 py-4 rounded-xl text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-white transition-all duration-500 shadow-xl"
          >
            Kabul Et
          </button>
        </div>
        
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-gray-600 hover:text-white p-2 transition-colors"
          aria-label="Kapat"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
