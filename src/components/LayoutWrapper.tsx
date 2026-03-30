"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Menu, X, Cookie, Linkedin, Instagram, Twitter } from 'lucide-react';
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
    <div className="min-h-screen flex flex-col font-sans bg-surface-lowest text-gray-900 selection:bg-secondary-gold/30 antialiased overflow-x-hidden">
      <nav
        className={cn(
          'fixed w-full z-[100] transition-all duration-700 ease-in-out',
          isScrolled ? 'top-0 py-0' : 'top-6 py-0 px-8'
        )}
      >
        {/* Top-down gradient for header contrast on dark hero backgrounds */}
        {!isScrolled && (
          <div className="fixed top-0 left-0 w-full h-80 bg-gradient-to-b from-primary-navy/70 via-primary-navy/10 to-transparent pointer-events-none z-[-1]"></div>
        )}
        
        <div 
          className={cn(
            "max-w-[1500px] mx-auto transition-all duration-700 ease-in-out relative overflow-hidden",
            isScrolled 
              ? "bg-white/98 backdrop-blur-3xl border-b border-gray-100 py-3 px-12 shadow-[0_15px_40px_rgba(0,0,0,0.08)]" 
              : "bg-primary-navy/20 backdrop-blur-lg rounded-2xl border border-white/10 shadow-[0_30px_70px_rgba(0,0,0,0.2)] px-12"
          )}
        >
          {/* Subtle gradient highlights */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-gold/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-navy/10 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl pointer-events-none"></div>

          <div className="flex justify-between items-center h-28 transition-all duration-700">
            <Link href="/" className="flex-shrink-0 flex items-center group relative z-10 py-4">
              <img
                src="/logo-gul.png"
                alt="Gül Partners Logo"
                className={cn(
                  "w-auto object-contain transition-all duration-700 ease-out",
                  isScrolled ? "h-24 brightness-95" : "h-36 brightness-0 invert"
                )}
              />
              {!isScrolled && (
                <div className="absolute inset-x-[-10px] inset-y-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity border border-white/5 rounded-xl duration-500"></div>
              )}
            </Link>

            <div className="hidden md:flex items-center space-x-14 relative" ref={navRef}>
              {/* Sliding Indicator */}
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
                   "relative group/cta px-12 py-5 rounded-sm text-[10px] font-bold tracking-[0.45em] uppercase transition-all duration-700 shadow-xl overflow-hidden",
                   isScrolled ? "bg-primary-navy text-white hover:bg-secondary-gold hover:text-primary-navy" : "bg-white text-primary-navy hover:bg-secondary-gold hover:text-white"
                )}
              >
                <div className="absolute inset-0 bg-secondary-gold translate-y-full group-hover/cta:translate-y-0 transition-transform duration-500 z-0"></div>
                <span className="relative z-10 flex items-center gap-3">
                  İLETİŞİM <ArrowUpRight className="w-4 h-4" />
                </span>
              </Link>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={cn("transition-all duration-300 hover:text-secondary-gold", isScrolled ? "text-primary-navy" : "text-white")}
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-9 h-9" /> : <Menu className="w-9 h-9" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={cn(
          "md:hidden fixed inset-0 bg-white z-[110] transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] p-10 flex flex-col",
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        )}>
           <div className="flex justify-between items-center mb-20">
              <img src="/logo-gul.png" alt="Logo" className="h-20 w-auto object-contain" />
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="text-primary-navy p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-10 h-10" />
              </button>
           </div>
           
           <div className="flex-grow flex flex-col justify-center space-y-8">
              {navLinks.map((link, idx) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "block text-5xl font-serif font-bold text-primary-navy hover:text-secondary-gold transition-all duration-500",
                    mobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                  )}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  {link.name}
                </Link>
              ))}
           </div>

           <div className="pt-12 border-t border-gray-100 mt-auto">
              <Link 
                href="/iletisim" 
                onClick={() => setMobileMenuOpen(false)}
                className="bg-primary-navy text-white w-full py-8 flex items-center justify-center font-bold tracking-[0.4em] uppercase text-xs mb-8 hover:bg-secondary-gold transition-all duration-500"
              >
                DANIŞMANLIK ALIN
              </Link>
              <div className="flex justify-center gap-8">
                 <a href="#" className="p-4 bg-gray-50 rounded-full text-primary-navy hover:bg-secondary-gold hover:text-white transition-all"><Linkedin className="w-6 h-6" /></a>
                 <a href="#" className="p-4 bg-gray-50 rounded-full text-primary-navy hover:bg-secondary-gold hover:text-white transition-all"><Instagram className="w-6 h-6" /></a>
                 <a href="#" className="p-4 bg-gray-50 rounded-full text-primary-navy hover:bg-secondary-gold hover:text-white transition-all"><Twitter className="w-6 h-6" /></a>
              </div>
           </div>
        </div>
      </nav>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-primary-navy text-white pt-56 pb-12 overflow-hidden relative border-t border-white/5">
        {/* Monumental Watermark */}
        <div className="absolute top-10 left-0 w-full flex justify-center pointer-events-none select-none overflow-hidden h-96 opacity-[0.03]">
          <span className="text-[25vw] font-serif font-bold text-white leading-none whitespace-nowrap tracking-tighter">
            GÜL PARTNERS
          </span>
        </div>

        <div className="max-w-[1500px] mx-auto px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-24 mb-32">
            <div className="lg:col-span-5 flex flex-col items-start">
              <div className="mb-14 group">
                <img
                  src="/logo-gul.png"
                  alt="Gül Partners Logo"
                  className="h-44 w-auto object-contain brightness-0 invert transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <p className="text-gray-400 text-xl leading-relaxed italic font-light max-w-md mb-12 border-l-2 border-secondary-gold/30 pl-10">
                Hukuku sadece bir kural bütünü değil, adaletin estetik ve stratejik bir mimarisi olarak görüyoruz. Karmaşık süreçleri kusursuz disiplinle yönetiyoruz.
              </p>
              <div className="flex gap-6 items-center pt-10 border-t border-white/10 w-full mb-12">
                 <a href="#" className="p-4 bg-white/5 rounded-full text-white hover:bg-secondary-gold hover:text-primary-navy transition-all duration-500"><Linkedin className="w-5 h-5" /></a>
                 <a href="#" className="p-4 bg-white/5 rounded-full text-white hover:bg-secondary-gold hover:text-primary-navy transition-all duration-500"><Instagram className="w-5 h-5" /></a>
                 <a href="#" className="p-4 bg-white/5 rounded-full text-white hover:bg-secondary-gold hover:text-primary-navy transition-all duration-500"><Twitter className="w-5 h-5" /></a>
              </div>
              <div className="flex gap-8 items-center">
                 <Link href="/iletisim" className="text-secondary-gold text-[10px] font-bold tracking-[0.6em] uppercase hover:text-white transition-all transform hover:translate-x-2">YOL TARİFİ ALIN</Link>
                 <div className="w-12 h-px bg-white/10"></div>
                 <Link href="/uzmanlik" className="text-gray-500 text-[10px] font-bold tracking-[0.6em] uppercase hover:text-white transition-all transform hover:translate-x-2">KEŞFEDİN</Link>
              </div>
            </div>

            <div className="lg:col-span-2">
              <h4 className="font-serif text-xs font-bold mb-12 text-white/30 uppercase tracking-[0.5em] py-2 border-b border-white/5 inline-block">HIZLI MENÜ</h4>
              <ul className="space-y-6">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link href={link.path} className="text-gray-500 hover:text-secondary-gold transition-all text-xs uppercase tracking-[0.4em] font-medium block hover:pl-3">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h4 className="font-serif text-xs font-bold mb-12 text-white/30 uppercase tracking-[0.5em] py-2 border-b border-white/5 inline-block">DİSİPLİNLER</h4>
              <ul className="space-y-6">
                <li><Link href="/uzmanlik#gayrimenkul" className="text-gray-500 hover:text-white transition-all text-[11px] uppercase tracking-[0.3em] font-medium block hover:pl-3">Gayrimenkul</Link></li>
                <li><Link href="/uzmanlik#ticaret-hukuku" className="text-gray-500 hover:text-white transition-all text-[11px] uppercase tracking-[0.3em] font-medium block hover:pl-3">Ticaret & Şirketler</Link></li>
                <li><Link href="/uzmanlik#ceza-hukuku" className="text-gray-500 hover:text-white transition-all text-[11px] uppercase tracking-[0.3em] font-medium block hover:pl-3">Ceza Eliti</Link></li>
                <li><Link href="/uzmanlik#fikri-mulkiyet" className="text-gray-500 hover:text-white transition-all text-[11px] uppercase tracking-[0.3em] font-medium block hover:pl-3">Fikri Mülkiyet</Link></li>
              </ul>
            </div>

            <div className="lg:col-span-3">
              <h4 className="font-serif text-xs font-bold mb-12 text-white/30 uppercase tracking-[0.5em] py-2 border-b border-white/5 inline-block">STRATEJİ MERKEZİ</h4>
              <div className="space-y-12">
                <div className="text-gray-400 group">
                  <span className="block text-secondary-gold/40 font-bold mb-4 uppercase tracking-[0.5em] text-[10px]">İLETİŞİM HATTI</span>
                  <a href="tel:+902122113345" className="text-3xl font-serif text-white group-hover:text-secondary-gold transition-colors block mb-2 tracking-tight">+90 (212) 211 33 45</a>
                </div>
                <div className="text-gray-400">
                  <span className="block text-secondary-gold/40 font-bold mb-4 uppercase tracking-[0.5em] text-[10px]">MERKEZ ADRES</span>
                  <p className="text-sm leading-relaxed max-w-[240px]">Esentepe, Kore Şehitleri Cd. No:30/10 <br/> 34394 Şişli/İstanbul</p>
                </div>
                <div className="text-gray-400 pt-4">
                  <span className="block text-secondary-gold/40 font-bold mb-4 uppercase tracking-[0.5em] text-[10px]">DİJİTAL İLETİŞİM</span>
                  <a href="mailto:av.ferdigul@gmail.com" className="text-white hover:text-secondary-gold transition-colors block italic font-serif text-lg">av.ferdigul@gmail.com</a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 pt-16 flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex items-center gap-6">
               <div className="w-16 h-px bg-secondary-gold/30"></div>
               <p className="text-gray-600 text-[10px] uppercase font-bold tracking-[0.7em]">
                 &copy; {new Date().getFullYear()} GÜL PARTNERS. ADALETİN MİMARLARI.
               </p>
            </div>
            <div className="flex flex-wrap justify-center gap-10 md:gap-16">
               <Link href="#" className="text-gray-700 hover:text-white text-[9px] uppercase font-bold tracking-[0.5em] transition-colors">GİZLİLİK POLİTİKASI</Link>
               <Link href="#" className="text-gray-700 hover:text-white text-[9px] uppercase font-bold tracking-[0.5em] transition-colors">KULLANIM KOŞULLARI</Link>
               <Link href="#" className="text-gray-700 hover:text-white text-[9px] uppercase font-bold tracking-[0.5em] transition-colors">KVKK AYDINLATMA METNİ</Link>
            </div>
            {/* Scroll to Top */}
            <button 
               onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
               className="bg-white/5 w-20 h-20 rounded-full flex items-center justify-center hover:bg-secondary-gold hover:text-primary-navy transition-all duration-700 border border-white/5 hover:border-secondary-gold shadow-2xl group"
               aria-label="Scroll to Top"
            >
               <ArrowUpRight className="-rotate-45 w-7 h-7 group-hover:scale-125 transition-transform" />
            </button>
          </div>
        </div>
      </footer>

      {!cookieAccepted && (
        <div className="fixed bottom-10 right-10 left-10 md:left-auto md:w-[450px] bg-white p-10 shadow-[0_50px_100px_rgba(0,0,0,0.1)] z-50 rounded-sm border border-gray-100">
           <div className="items-start gap-8 flex mb-10">
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
