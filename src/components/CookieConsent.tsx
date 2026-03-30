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
      "fixed bottom-36 md:bottom-10 right-4 md:right-10 z-[200] w-[calc(100%-2rem)] max-w-[340px]",
      "animate-in fade-in slide-in-from-right-10 duration-1000 ease-out"
    )}>
      <div className="bg-surface/90 backdrop-blur-3xl border border-outline-variant/10 p-6 shadow-sm relative group">
        <div className="flex flex-col gap-5">
          <div className="flex justify-between items-start">
             <div className="text-secondary text-[10px] font-bold tracking-[0.3em] uppercase">Çerez Bildirimi</div>
             <button 
                onClick={() => setIsVisible(false)}
                className="text-primary/40 hover:text-primary transition-colors p-1"
                aria-label="Kapat"
              >
                <X className="w-4 h-4" />
              </button>
          </div>
          
          <p className="text-primary/70 text-[11px] font-light leading-relaxed">
            Hizmet kalitemizi artırmak adına çerezleri kullanmaktayız. <button onClick={onOpenPrivacy} className="text-primary font-bold underline hover:text-secondary transition-colors">Politikamız için tıklayın.</button>
          </p>

          <button 
            onClick={handleAccept}
            className="w-full bg-primary text-on-primary py-3 text-[9px] font-bold tracking-[0.4em] uppercase hover:bg-secondary transition-all duration-700"
          >
            KABUL EDİYORUM
          </button>
        </div>
      </div>
    </div>
  );
}
