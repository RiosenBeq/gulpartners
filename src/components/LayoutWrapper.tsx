'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight, Linkedin, Instagram, Twitter, Phone, Mail, MapPin, Home, Gavel, Users, Send } from 'lucide-react';
import { cn } from "@/src/lib/utils";
import LegalModal from './LegalModals';
import CookieConsent from './CookieConsent';

const Logo = ({ className, color = "currentColor", size = "h-12" }: { className?: string, color?: string, size?: string }) => (
  <div className={cn("flex items-center gap-3", className)}>
    <svg viewBox="0 0 100 100" className={cn(size, "w-auto")} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 5L93.3 30V70L50 95L6.7 70V30L50 5Z" stroke={color} strokeWidth="2" />
      <text x="50" y="58" textAnchor="middle" fill={color} className="font-serif font-bold text-[32px]">G&P</text>
    </svg>
  </div>
);

type ModalType = 'privacy' | 'kvkk' | 'terms' | null;

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [legalModal, setLegalModal] = useState<{ isOpen: boolean, type: ModalType }>({ isOpen: false, type: null });
  
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        }
      });
    }, { 
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    const observeElements = () => {
      const elements = document.querySelectorAll('.reveal-up:not(.reveal-visible)');
      elements.forEach(el => revealObserver.observe(el));
    };

    window.addEventListener('scroll', handleScroll);
    observeElements();
    
    const mutationObserver = new MutationObserver(observeElements);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      revealObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, [pathname]);

  const navLinks = [
    { name: 'ANA SAYFA', path: '/', icon: Home },
    { name: 'UZMANLIK', path: '/uzmanlik', icon: Gavel },
    { name: 'EKİBİMİZ', path: '/ekip', icon: Users },
    { name: 'İLETİŞİM', path: '/iletisim', icon: Send },
  ];

  useEffect(() => {
    if (navRef.current) {
      const activeLink = navRef.current.querySelector(`a[href="${pathname}"]`) as HTMLElement;
      if (activeLink) {
        setIndicatorStyle({
          left: activeLink.offsetLeft,
          width: activeLink.offsetWidth,
          opacity: 1
        });
      } else {
        setIndicatorStyle(prev => ({ ...prev, opacity: 0 }));
      }
    }
  }, [pathname, isScrolled]);

  const openModal = (type: ModalType) => {
    setLegalModal({ isOpen: true, type });
  };

  return (
    <div className="flex flex-col min-h-screen relative">
      <nav className="fixed top-0 left-0 w-full z-[100] p-4 lg:p-10 transition-all duration-700">
        <div 
          className={cn(
            "max-w-[1700px] mx-auto transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]",
            isScrolled 
              ? "bg-white/98 backdrop-blur-3xl border-b border-gray-100 py-3 px-6 lg:px-12 shadow-[0_15px_40px_rgba(0,0,0,0.08)]" 
              : "bg-primary-navy/20 backdrop-blur-lg rounded-2xl border border-white/10 shadow-[0_30px_70px_rgba(0,0,0,0.2)] px-6 lg:px-12"
          )}
        >
          <div className="flex justify-between items-center h-20 lg:h-28 transition-all duration-700">
            <Link href="/" className="flex-shrink-0 flex items-center group relative z-10 py-4">
              <Logo color={isScrolled ? "#000D24" : "#C5A022"} size={isScrolled ? "h-14 lg:h-20" : "h-16 lg:h-28"} className="transition-all duration-700" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-14 relative" ref={navRef}>
              <div 
                className="absolute bottom-0 h-[2px] bg-secondary-gold transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)]"
                style={{ 
                  left: `${indicatorStyle.left}px`, 
                  width: `${indicatorStyle.width}px`,
                  opacity: indicatorStyle.opacity 
                }}
              />

              {navLinks.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    href={link.path}
                    className={cn(
                      'relative text-[11px] font-bold tracking-[0.45em] uppercase transition-all duration-500 py-3',
                      isActive
                        ? (isScrolled ? 'text-primary-navy' : 'text-white')
                        : (isScrolled ? 'text-gray-400 hover:text-primary-navy' : 'text-gray-300 hover:text-white')
                    )}
                  >
                    {link.name}
                  </Link>
                );
              })}
              
              <Link
                href="/iletisim"
                className={cn(
                   "relative group/cta px-8 lg:px-12 py-4 lg:py-5 rounded-sm text-[10px] font-bold tracking-[0.45em] uppercase transition-all duration-700 shadow-xl overflow-hidden",
                   isScrolled ? "bg-primary-navy text-white hover:bg-secondary-gold hover:text-primary-navy" : "bg-white text-primary-navy hover:bg-secondary-gold hover:text-white"
                )}
              >
                İLETİŞİM <ArrowUpRight className="w-4 h-4 ml-2 inline-block" />
              </Link>
            </div>
          </div>
        </div>

        {/* Traditional Hamburger Menu is now replaced by Bottom Nav for better mobile UX */}
      </nav>

      {/* Main Content Area */}
      <main className={cn("flex-grow transition-all duration-500", "pb-24 md:pb-0")}>
        {children}
      </main>

      {/* FIXED BOTTOM NAVIGATION (MOBILE ONLY) */}
      <div className="md:hidden fixed bottom-0 left-0 w-full z-[150] px-4 pb-6 animate-fade-in">
          <div className="bg-primary-navy/95 backdrop-blur-2xl border border-white/10 shadow-[0_-20px_50px_rgba(0,0,0,0.3)] rounded-3xl flex justify-around items-center p-4">
              {navLinks.map((link) => {
                  const isActive = pathname === link.path;
                  return (
                      <Link 
                        key={link.path} 
                        href={link.path}
                        className={cn(
                            "flex flex-col items-center gap-2 transition-all duration-300 px-4 py-2 rounded-2xl",
                            isActive ? "text-secondary-gold bg-white/5" : "text-gray-400 hover:text-white"
                        )}
                      >
                          <link.icon className={cn("w-6 h-6", isActive ? "stroke-[2.5px]" : "stroke-[1.5px]")} />
                          <span className="text-[10px] font-bold tracking-widest uppercase">{link.name.split(' ')[0]}</span>
                      </Link>
                  );
              })}
          </div>
      </div>

      <footer className="bg-primary-navy text-white pt-56 pb-12 overflow-hidden relative border-t border-white/5 md:pb-12 pb-32">
        <div className="absolute top-10 left-0 w-full flex justify-center pointer-events-none select-none overflow-hidden h-96 opacity-[0.03]">
          <span className="text-[25vw] font-serif font-bold text-white leading-none whitespace-nowrap tracking-tighter">
            GÜL PARTNERS
          </span>
        </div>

        <div className="max-w-[1500px] mx-auto px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-24 mb-32">
            <div className="lg:col-span-5 flex flex-col items-start text-center md:text-left items-center md:items-start">
              <div className="mb-14">
                <Logo color="#C5A022" size="h-44" />
              </div>
              <p className="text-gray-400 text-xl leading-relaxed italic font-light max-w-md mb-12 border-l-0 md:border-l-2 border-secondary-gold/30 md:pl-10">
                Hukuku sadece bir kural bütünü değil, adaletin estetik ve stratejik bir mimarisi olarak görüyoruz. Karmaşık süreçleri kusursuz disiplinle yönetiyoruz.
              </p>
              <div className="flex gap-6 items-center pt-10 border-t border-white/10 w-full mb-12 justify-center md:justify-start">
                 <a href="#" aria-label="LinkedIn profilimiz" className="p-4 bg-white/5 rounded-full text-white hover:bg-secondary-gold transition-all duration-500"><Linkedin className="w-5 h-5" /></a>
                 <a href="#" aria-label="Instagram profilimiz" className="p-4 bg-white/5 rounded-full text-white hover:bg-secondary-gold transition-all duration-500"><Instagram className="w-5 h-5" /></a>
                 <a href="#" aria-label="Twitter profilimiz" className="p-4 bg-white/5 rounded-full text-white hover:bg-secondary-gold transition-all duration-500"><Twitter className="w-5 h-5" /></a>
              </div>
            </div>

            <div className="hidden md:block lg:col-span-2">
              <h4 className="font-serif text-xs font-bold mb-12 text-white/30 uppercase tracking-[0.5em] py-2 border-b border-white/5 inline-block">HIZLI MENÜ</h4>
              <ul className="space-y-6">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link href={link.path} aria-label={`${link.name} sayfasına git`} className="text-gray-500 hover:text-secondary-gold transition-all text-xs uppercase tracking-[0.4em] font-medium block hover:pl-3">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h4 className="font-serif text-xs font-bold mb-12 text-white/30 uppercase tracking-[0.5em] py-2 border-b border-white/5 inline-block">DİSİPLİNLER</h4>
              <ul className="space-y-6">
                <li><Link href="/uzmanlik#ceza-hukuku" className="text-gray-500 hover:text-white transition-all text-xs uppercase tracking-[0.3em] font-medium block hover:pl-3">CEZA HUKUKU</Link></li>
                <li><Link href="/uzmanlik#fikri-mulkiyet" className="text-gray-500 hover:text-white transition-all text-xs uppercase tracking-[0.3em] font-medium block hover:pl-3">FİKRİ MÜLKİYET</Link></li>
              </ul>
            </div>

            <div className="lg:col-span-3 text-center md:text-left">
               <h4 className="font-serif text-xs font-bold mb-12 text-white/30 uppercase tracking-[0.5em] py-2 border-b border-white/5 inline-block">İLETİŞİM</h4>
               <div className="space-y-10">
                  <div className="flex gap-6 justify-center md:justify-start">
                     <MapPin className="w-6 h-6 text-secondary-gold flex-shrink-0" />
                     <p className="text-gray-400 text-sm leading-relaxed font-light italic">Esentepe, Kore Şehitleri Cd. No:30/10, 34394 Şişli/İstanbul</p>
                  </div>
                  <div className="flex gap-6 justify-center md:justify-start">
                     <Phone className="w-6 h-6 text-secondary-gold flex-shrink-0" />
                     <a href="tel:+902122113345" className="text-gray-400 text-sm hover:text-white transition-colors">+90 (212) 211 3345</a>
                  </div>
                  <div className="flex gap-6 justify-center md:justify-start">
                     <Mail className="w-6 h-6 text-secondary-gold flex-shrink-0" />
                     <a href="mailto:av.ferdigul@gmail.com" className="text-gray-400 text-sm hover:text-white transition-colors italic">av.ferdigul@gmail.com</a>
                  </div>
               </div>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-center pb-20 md:pb-0">
            <div className="text-[10px] text-gray-500 font-bold tracking-[0.3em] uppercase">
              © 2026 GÜL PARTNERS. ADALETİN MİMARLARI.
            </div>
            
            {/* Nextgen Medya Credit */}
            <a 
              href="https://nextgenmedya.com.tr" 
              target="_blank" 
              className="flex items-center gap-3 opacity-30 hover:opacity-100 transition-opacity group"
            >
              <div className="text-[9px] text-gray-500 font-bold tracking-[0.2em] uppercase">MADE BY</div>
              <svg viewBox="0 0 100 100" className="h-6 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M25 75V25C25 25 25 15 35 15H65M75 25V75C75 75 75 85 65 85H35" stroke="currentColor" strokeWidth="12" strokeLinecap="square" />
                 <path d="M45 40H60V60H45V40Z" fill="currentColor" />
              </svg>
              <div className="text-[10px] text-gray-400 font-bold tracking-widest uppercase group-hover:text-secondary-gold transition-colors">NEXTGEN MEDYA</div>
            </a>

            <div className="flex gap-10">
               <button onClick={() => openModal('privacy')} aria-label="Gizlilik Politikasını Görüntüle" className="text-[10px] text-gray-600 hover:text-white transition-colors uppercase tracking-widest font-bold focus:outline-none">GİZLİLİK</button>
               <button onClick={() => openModal('kvkk')} aria-label="KVKK Aydınlatma Metnini Görüntüle" className="text-[10px] text-gray-600 hover:text-white transition-colors uppercase tracking-widest font-bold focus:outline-none">KVKK</button>
               <button onClick={() => openModal('terms')} aria-label="Kullanım Şartlarını Görüntüle" className="text-[10px] text-gray-600 hover:text-white transition-colors uppercase tracking-widest font-bold focus:outline-none">KULLANIM ŞARTLARI</button>
            </div>
          </div>
        </div>
      </footer>

      <LegalModal 
        isOpen={legalModal.isOpen} 
        type={legalModal.type} 
        onClose={() => setLegalModal({ isOpen: false, type: null })} 
      />
      <CookieConsent onOpenPrivacy={() => openModal('privacy')} />
    </div>
  );
}
