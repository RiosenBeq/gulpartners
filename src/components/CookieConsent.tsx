'use client';

import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
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
      }, 2000);
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
      "fixed bottom-28 md:bottom-10 right-4 md:right-10 z-[200] w-[calc(100%-2rem)] max-w-[340px]",
      "animate-in fade-in slide-in-from-right-10 duration-1000 ease-out"
    )}>
      <div className="bg-primary-navy/80 backdrop-blur-3xl border border-white/5 p-6 rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.4)] relative group">
        <div className="flex flex-col gap-5">
          <div className="flex justify-between items-start">
             <div className="text-secondary-gold text-[10px] font-bold tracking-[0.3em] uppercase">Çerez Bildirimi</div>
             <button 
                onClick={() => setIsVisible(false)}
                className="text-gray-500 hover:text-white transition-colors p-1"
                aria-label="Kapat"
              >
                <X className="w-4 h-4" />
              </button>
          </div>
          
          <p className="text-gray-300 text-[11px] font-light leading-relaxed">
            Hizmet kalitemizi artırmak adına çerezleri kullanmaktayız. <button onClick={onOpenPrivacy} className="text-white underline hover:text-secondary-gold transition-colors">Politikamız için tıklayın.</button>
          </p>

          <button 
            onClick={handleAccept}
            className="w-full bg-secondary-gold text-primary-navy py-3 rounded-lg text-[9px] font-bold tracking-[0.4em] uppercase hover:bg-white transition-all duration-700 shadow-lg"
          >
            KABUL EDİYORUM
          </button>
        </div>
      </div>
    </div>
  );
}
