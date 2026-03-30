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
      <path d="M50 5L93.3 30V70L50 95L6.7 70V30L50 5Z" stroke={color} strokeWidth="1.5" />
      <text x="50" y="58" textAnchor="middle" fill={color} className="font-serif font-bold text-[32px] tracking-tight">G&P</text>
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
            "max-w-[1700px] mx-auto transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] rounded-b-xl lg:rounded-b-3xl border-b border-outline-variant/30",
            isScrolled 
              ? "bg-surface/80 backdrop-blur-[20px] py-3 px-6 lg:px-12 editorial-shadow" 
              : "bg-surface/40 backdrop-blur-[20px] py-5 px-6 lg:px-12"
          )}
        >
          <div className="flex justify-between items-center h-20 lg:h-28 transition-all duration-700">
            <Link href="/" className="flex-shrink-0 flex items-center group relative z-10 py-4">
              <Logo color={isScrolled ? "#5F5E5E" : "#735D00"} size={isScrolled ? "h-14 lg:h-20" : "h-16 lg:h-28"} className="transition-all duration-700" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-14 relative" ref={navRef}>
              <div 
                className="absolute bottom-0 h-[2px] bg-secondary transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)]"
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
                      isActive ? 'text-secondary' : 'text-primary/60 hover:text-primary'
                    )}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <Link
                href="/iletisim"
                 className={cn(
                   "relative group/cta px-8 lg:px-12 py-4 lg:py-5 text-[10px] font-bold tracking-[0.45em] uppercase transition-all duration-700 shadow-sm overflow-hidden",
                   "bg-gradient-to-r from-primary to-primary-container text-on-primary hover:from-secondary hover:to-primary border border-outline-variant/30 hover:border-secondary/50 hover:shadow-xl hover:-translate-y-0.5"
                )}
              >
                İLETİŞİM <ArrowUpRight className="w-4 h-4 ml-2 inline-block transition-transform group-hover/cta:translate-x-1 group-hover/cta:-translate-y-1" />
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
          <div className="bg-surface/95 backdrop-blur-2xl border border-outline-variant/10 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] flex justify-around items-center p-4">
              {navLinks.map((link) => {
                  const isActive = pathname === link.path;
                  return (
                      <Link 
                        key={link.path} 
                        href={link.path}
                        className={cn(
                            "flex flex-col items-center gap-2 transition-all duration-300 px-4 py-2",
                            isActive ? "text-secondary" : "text-primary/40 hover:text-primary"
                        )}
                      >
                          <link.icon className={cn("w-6 h-6", isActive ? "stroke-[2.5px]" : "stroke-[1.5px]")} />
                          <span className="text-[10px] font-bold tracking-widest uppercase">{link.name.split(' ')[0]}</span>
                      </Link>
                  );
              })}
          </div>
      </div>

      <footer className="relative bg-[#1a1c1c] text-on-primary overflow-hidden">
        {/* Background image layer */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2600&auto=format&fit=crop"
            alt="Footer background"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1c1c] via-[#1a1c1c]/90 to-[#1a1c1c]/70"></div>
        </div>

        {/* Brass top line */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-secondary to-transparent opacity-60 z-10"></div>

        {/* Large watermark */}
        <div className="absolute top-0 left-0 w-full flex justify-center pointer-events-none select-none overflow-hidden h-80 opacity-[0.03] z-0">
          <span className="text-[22vw] font-serif font-bold text-on-primary leading-none whitespace-nowrap tracking-tighter translate-y-8">
            GÜL & PARTNERS
          </span>
        </div>

        <div className="relative z-10 max-w-[1500px] mx-auto px-6 lg:px-12">

          {/* Top CTA band */}
          <div className="py-20 border-b border-on-primary/10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-on-primary/40 text-[10px] font-bold tracking-[0.5em] uppercase mb-3">Gül & Partners Hukuk Bürosu</p>
              <h2 className="font-serif text-4xl md:text-5xl text-on-primary leading-tight">Hukuki Gücünüzü<br/><span className="italic text-secondary">Aktive Edin.</span></h2>
            </div>
            <Link
              href="/iletisim"
              className="flex-shrink-0 inline-flex items-center gap-3 px-12 py-5 bg-secondary/10 text-secondary border border-secondary/30 font-bold text-[10px] tracking-[0.4em] uppercase hover:bg-secondary hover:text-[#1a1c1c] transition-all duration-500 shadow-lg hover:shadow-2xl hover:-translate-y-1 group"
            >
              DANIŞMANLIK AL <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>

          {/* Main grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-20 py-20 mb-4">

            {/* Brand column */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="mb-10">
                <Logo color="#C5A022" size="h-36" />
              </div>
              <p className="text-on-primary/50 text-base leading-relaxed font-light max-w-sm mb-10 border-l-2 border-secondary/30 pl-6 italic">
                Hukuku sadece bir kural bütünü değil, adaletin estetik ve stratejik bir gücü olarak görüyoruz. Karmaşık süreçleri kusursuz disiplinle yönetiyoruz.
              </p>
              <div className="flex gap-4 pt-8 border-t border-on-primary/10">
                <a href="#" aria-label="LinkedIn" className="w-11 h-11 flex items-center justify-center border border-on-primary/20 text-on-primary/40 hover:border-secondary hover:text-secondary transition-all duration-400">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" aria-label="Instagram" className="w-11 h-11 flex items-center justify-center border border-on-primary/20 text-on-primary/40 hover:border-secondary hover:text-secondary transition-all duration-400">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" aria-label="Twitter" className="w-11 h-11 flex items-center justify-center border border-on-primary/20 text-on-primary/40 hover:border-secondary hover:text-secondary transition-all duration-400">
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div className="lg:col-span-2">
              <h4 className="text-[9px] font-bold text-secondary tracking-[0.6em] uppercase mb-8 pb-4 border-b border-on-primary/10">MENÜ</h4>
              <ul className="space-y-5">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      href={link.path}
                      className="text-on-primary/50 hover:text-secondary transition-colors text-[10px] uppercase tracking-[0.4em] font-bold flex items-center gap-2 group"
                    >
                      <span className="w-4 h-px bg-on-primary/20 group-hover:w-8 group-hover:bg-secondary transition-all duration-500"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Disciplines */}
            <div className="lg:col-span-2">
              <h4 className="text-[9px] font-bold text-secondary tracking-[0.6em] uppercase mb-8 pb-4 border-b border-on-primary/10">DİSİPLİNLER</h4>
              <ul className="space-y-5">
                <li><Link href="/uzmanlik#sirketler" className="text-on-primary/50 hover:text-secondary transition-colors text-[10px] uppercase tracking-[0.3em] font-bold flex items-center gap-2 group"><span className="w-4 h-px bg-on-primary/20 group-hover:w-8 group-hover:bg-secondary transition-all duration-500"></span>Şirketler Hukuku</Link></li>
                <li><Link href="/uzmanlik#gayrimenkul" className="text-on-primary/50 hover:text-secondary transition-colors text-[10px] uppercase tracking-[0.3em] font-bold flex items-center gap-2 group"><span className="w-4 h-px bg-on-primary/20 group-hover:w-8 group-hover:bg-secondary transition-all duration-500"></span>Gayrimenkul</Link></li>
                <li><Link href="/uzmanlik#ceza-hukuku" className="text-on-primary/50 hover:text-secondary transition-colors text-[10px] uppercase tracking-[0.3em] font-bold flex items-center gap-2 group"><span className="w-4 h-px bg-on-primary/20 group-hover:w-8 group-hover:bg-secondary transition-all duration-500"></span>Ceza Hukuku</Link></li>
                <li><Link href="/uzmanlik#fikri-mulkiyet" className="text-on-primary/50 hover:text-secondary transition-colors text-[10px] uppercase tracking-[0.3em] font-bold flex items-center gap-2 group"><span className="w-4 h-px bg-on-primary/20 group-hover:w-8 group-hover:bg-secondary transition-all duration-500"></span>Fikri Mülkiyet</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="lg:col-span-3">
              <h4 className="text-[9px] font-bold text-secondary tracking-[0.6em] uppercase mb-8 pb-4 border-b border-on-primary/10">İLETİŞİM</h4>
              <div className="space-y-6">
                <a href="https://maps.google.com" target="_blank" className="flex gap-4 group">
                  <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <p className="text-on-primary/50 text-sm leading-relaxed group-hover:text-on-primary/80 transition-colors">Esentepe, Kore Şehitleri Cd. No:30/10,<br/>34394 Şişli / İstanbul</p>
                </a>
                <a href="tel:+902122113345" className="flex gap-4 items-center group">
                  <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-on-primary/50 text-sm group-hover:text-secondary transition-colors">+90 (212) 211 33 45</span>
                </a>
                <a href="mailto:av.ferdigul@gmail.com" className="flex gap-4 items-center group">
                  <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-on-primary/50 text-sm group-hover:text-secondary transition-colors italic">av.ferdigul@gmail.com</span>
                </a>
              </div>
            </div>

          </div>

          {/* Bottom bar */}
          <div className="py-8 border-t border-on-primary/10 flex flex-col md:flex-row justify-between items-center gap-6 text-center pb-28 md:pb-8">
            <div className="text-[9px] text-on-primary/30 font-bold tracking-[0.3em] uppercase">
              © 2026 Gül Partners. Tüm Hakları Saklıdır.
            </div>

            <a
              href="https://nextgenmedya.com.tr"
              target="_blank"
              className="flex items-center gap-3 opacity-30 hover:opacity-100 transition-opacity group"
            >
              <div className="text-[9px] text-on-primary/50 font-bold tracking-[0.2em] uppercase">MADE BY</div>
              <svg viewBox="0 0 100 100" className="h-5 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25 75V25C25 25 25 15 35 15H65M75 25V75C75 75 75 85 65 85H35" stroke="currentColor" strokeWidth="12" strokeLinecap="square" />
                <path d="M45 40H60V60H45V40Z" fill="currentColor" />
              </svg>
              <div className="text-[10px] text-on-primary/40 font-bold tracking-widest uppercase group-hover:text-secondary transition-colors">NEXTGEN MEDYA</div>
            </a>

            <div className="flex gap-8">
              <button onClick={() => openModal('privacy')} aria-label="Gizlilik" className="text-[9px] text-on-primary/30 hover:text-secondary transition-colors uppercase tracking-widest font-bold focus:outline-none">GİZLİLİK</button>
              <button onClick={() => openModal('kvkk')} aria-label="KVKK" className="text-[9px] text-on-primary/30 hover:text-secondary transition-colors uppercase tracking-widest font-bold focus:outline-none">KVKK</button>
              <button onClick={() => openModal('terms')} aria-label="Kullanım" className="text-[9px] text-on-primary/30 hover:text-secondary transition-colors uppercase tracking-widest font-bold focus:outline-none">KULLANIM</button>
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
