"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Menu, X, Cookie } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { cn } from '../lib/utils';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cookieAccepted, setCookieAccepted] = useState(true);
  const pathname = usePathname();
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    // Update indicator position
    const updateIndicator = () => {
      if (!navRef.current) return;
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
    };

    updateIndicator();
    window.addEventListener('resize', updateIndicator);
    return () => window.removeEventListener('resize', updateIndicator);
  }, [pathname]);

  const navLinks = [
    { name: 'Kurumsal', path: '/' },
    { name: 'Uzmanlık Alanları', path: '/uzmanlik' },
    { name: 'Ekibimiz', path: '/ekip' },
    { name: 'İletişim', path: '/iletisim' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-surface-lowest text-gray-900 selection:bg-secondary-gold/30 antialiased">
      <nav
        className={cn(
          'fixed w-full z-50 transition-all duration-1000 ease-in-out',
          isScrolled ? 'top-0 py-2' : 'top-4 py-4 px-8'
        )}
      >
        <div 
          className={cn(
            "max-w-[1440px] mx-auto transition-all duration-1000 ease-in-out px-10 relative overflow-hidden",
            isScrolled 
              ? "bg-white/80 backdrop-blur-3xl border-b border-gray-100 py-2 shadow-[0_10px_40px_rgba(0,0,0,0.04)]" 
              : "bg-transparent rounded-2xl"
          )}
        >
          <div className="flex justify-between items-center h-24 transition-all duration-700">
            <Link href="/" className="flex-shrink-0 flex items-center group relative z-10">
              <img
                src="/logo.png"
                alt="Gul Partners Logo"
                style={{ mixBlendMode: 'multiply' }}
                className={cn(
                  "w-auto object-contain transition-all duration-1000 ease-in-out scale-100 group-hover:scale-105",
                  isScrolled ? "h-20" : "h-32"
                )}
              />
            </Link>

            <div className="hidden md:flex items-center space-x-12 relative" ref={navRef}>
              {/* Sliding Indicator */}
              <div 
                className="absolute -bottom-1 h-[2px] bg-secondary-gold transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)]"
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
                      'relative text-[10px] font-bold tracking-[0.4em] uppercase transition-all duration-500 py-2',
                      isActive
                        ? 'text-primary-navy'
                        : 'text-gray-400 hover:text-primary-navy'
                    )}
                  >
                    {link.name}
                  </Link>
                );
              })}
              
              <Link
                href="/iletisim"
                className="relative group/cta bg-primary-navy text-white px-10 py-5 rounded-sm text-[9px] font-bold tracking-[0.4em] uppercase transition-all duration-500 hover:bg-secondary-gold hover:text-primary-navy shadow-lg hover:shadow-secondary-gold/20"
              >
                <span className="relative z-10 flex items-center gap-3">
                  İletişim <ArrowUpRight className="w-4 h-4" />
                </span>
              </Link>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-primary-navy hover:text-secondary-gold transition-all duration-300"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={cn(
          "md:hidden fixed inset-0 bg-white z-40 transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] p-12 flex flex-col justify-center",
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        )}>
           <div className="space-y-10">
              {navLinks.map((link, idx) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={cn(
                    "block text-4xl font-serif font-bold text-primary-navy hover:text-secondary-gold transition-all duration-500 delay-[idx*50ms]",
                    mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-12">
                 <Link href="/iletisim" className="bg-primary-navy text-white w-full py-8 flex items-center justify-center font-bold tracking-[0.4em] uppercase text-xs">
                   DANIŞMANLIK ALIN
                 </Link>
              </div>
           </div>
           <button 
             onClick={() => setMobileMenuOpen(false)}
             className="absolute top-10 right-10 text-primary-navy p-4"
           >
             <X className="w-10 h-10" />
           </button>
        </div>
      </nav>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-primary-navy text-white pt-40 pb-20 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary-gold/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-[120px]"></div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-24 mb-32">
            <div className="md:col-span-5">
              <div className="flex items-center mb-12">
                <img
                  src="/logo.png"
                  alt="Bulut & Partners Logo"
                  style={{ mixBlendMode: 'lighten', filter: 'brightness(0) invert(1)' }}
                  className="h-32 w-auto object-contain opacity-80"
                />
              </div>
              <p className="text-gray-400 text-xl leading-relaxed italic font-light max-w-md">
                Karmaşık hukuki süreçleri stratejik birer avantaja dönüştüren, vizyoner ve sonuç odaklı hukuk mimarları.
              </p>
            </div>

            <div className="md:col-span-3">
              <h4 className="font-serif text-2xl font-bold mb-12 text-white tracking-tight">Navigasyon</h4>
              <ul className="space-y-6">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link href={link.path} className="text-gray-400 hover:text-secondary-gold transition-colors text-xs uppercase tracking-[0.3em] font-bold">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-4">
              <h4 className="font-serif text-2xl font-bold mb-12 text-white tracking-tight">Merkez Ofis</h4>
              <div className="space-y-10">
                <div className="text-gray-400 text-sm leading-relaxed">
                  <span className="block text-secondary-gold font-bold mb-4 uppercase tracking-[0.2em] text-[10px]">İstanbul</span>
                  Esentepe, Kore Şehitleri Cd. No:30/10, <br/> 34394 Şişli/İstanbul
                </div>
                <div className="text-gray-400 text-sm leading-relaxed">
                  <span className="block text-secondary-gold font-bold mb-4 uppercase tracking-[0.2em] text-[10px]">İletişim Hattı</span>
                  <a href="tel:+902122113345" className="text-3xl font-serif text-white hover:text-secondary-gold transition-colors block mb-2">+90 (212) 211 3345</a>
                  <a href="mailto:info@bulutpartners.com" className="hover:text-white transition-colors block italic">info@bulutpartners.com</a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 pt-16 flex flex-col md:flex-row justify-between items-center gap-10">
            <p className="text-gray-500 text-[10px] uppercase font-bold tracking-[0.3em]">
              &copy; {new Date().getFullYear()} Bulut & Partners. All Rights Reserved.
            </p>
            <div className="flex gap-12">
               <Link href="#" className="text-gray-500 hover:text-white text-[10px] uppercase font-bold tracking-[0.3em] transition-colors">Privacy</Link>
               <Link href="#" className="text-gray-500 hover:text-white text-[10px] uppercase font-bold tracking-[0.3em] transition-colors">Legal</Link>
            </div>
          </div>
        </div>
      </footer>

      {!cookieAccepted && (
        <div className="fixed bottom-10 right-10 left-10 md:left-auto md:w-[450px] bg-white p-10 shadow-[0_50px_100px_rgba(0,0,0,0.1)] z-50 rounded-sm border border-gray-100">
           <div className="flex items-start gap-8 mb-10">
              <Cookie className="w-10 h-10 text-secondary-gold shrink-0" />
              <p className="text-sm text-gray-500 leading-relaxed italic">
                Platform deneyiminizi optimize etmek için seçkin çerezler kullanıyoruz. <Link href="#" className="text-primary-navy font-bold underline decoration-secondary-gold">Detaylar</Link>
              </p>
           </div>
           <div className="flex gap-4">
              <button onClick={() => setCookieAccepted(true)} className="flex-1 bg-primary-navy text-white py-5 text-xs font-bold uppercase tracking-[0.3em] hover:bg-secondary-gold hover:text-primary-navy transition-all duration-500">Kabul Et</button>
           </div>
        </div>
      )}
    </div>
  );
}
