"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Menu, X, Cookie } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '../lib/utils';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cookieAccepted, setCookieAccepted] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Kurumsal', path: '/' },
    { name: 'Uzmanlık Alanları', path: '/uzmanlik' },
    { name: 'Ekibimiz', path: '/ekip' },
    { name: 'İletişim', path: '/iletisim' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-surface-lowest text-gray-900 selection:bg-secondary-gold/30">
      <nav
        className={cn(
          'fixed w-full z-50 transition-all duration-700 px-8 py-6',
          isScrolled ? 'top-0 py-3' : 'top-2'
        )}
      >
        <div 
          className={cn(
            "max-w-[1400px] mx-auto px-10 transition-all duration-700 rounded-2xl border border-transparent",
            isScrolled 
              ? "bg-white/10 backdrop-blur-3xl border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.1)]" 
              : "bg-transparent"
          )}
        >
          <div className="flex justify-between items-center h-28 transition-all duration-700">
            <Link href="/" className="flex-shrink-0 flex items-center group relative z-10">
              <img
                src="/logo.png"
                alt="Gul Partners Logo"
                style={{ mixBlendMode: 'multiply' }}
                className={cn(
                  "w-auto object-contain transition-all duration-700 scale-100 group-hover:scale-110",
                  isScrolled ? "h-24" : "h-36"
                )}
              />
            </Link>

            <div className="hidden md:flex items-center space-x-14">
              {navLinks.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    href={link.path}
                    className={cn(
                      'relative text-[11px] font-bold tracking-[0.3em] uppercase transition-all duration-500 group/nav',
                      isActive
                        ? 'text-primary-navy'
                        : isScrolled ? 'text-gray-600 hover:text-primary-navy' : 'text-primary-navy/70 hover:text-primary-navy'
                    )}
                  >
                    {link.name}
                    <span className={cn(
                      "absolute -bottom-2 left-0 h-[2px] bg-secondary-gold transition-all duration-500 ease-in-out shadow-sm",
                      isActive ? "w-full" : "w-0 group-hover/nav:w-full"
                    )}></span>
                  </Link>
                );
              })}
              
              <Link
                href="/iletisim"
                className="relative group/cta overflow-hidden bg-primary-navy text-white px-10 py-5 rounded-sm text-[10px] font-bold tracking-[0.3em] uppercase transition-all duration-500 hover:shadow-2xl hover:bg-secondary-gold hover:text-primary-navy"
              >
                <span className="relative z-10 flex items-center gap-3">
                  DANIŞMANLIK <ArrowUpRight className="w-4 h-4 transition-transform group-hover/cta:translate-x-1 group-hover/cta:-translate-y-1" />
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
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 top-0 bg-white z-40 pt-32 px-10 animate-fade-in">
             <div className="space-y-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    className="block text-3xl font-serif font-bold text-primary-navy hover:text-secondary-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-12">
                   <Link href="/iletisim" className="bg-primary-navy text-white w-full py-6 flex items-center justify-center font-bold tracking-[0.3em] uppercase text-xs">
                     DANIŞMANLIK ALIN
                   </Link>
                </div>
             </div>
          </div>
        )}
      </nav>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-primary-navy text-white pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-20 mb-24">
            <div className="md:col-span-5">
              <div className="flex items-center mb-10">
                <img
                  src="/logo.png"
                  alt="Bulut & Partners Logo"
                  style={{ mixBlendMode: 'lighten', filter: 'brightness(0) invert(1)' }}
                  className="h-32 w-auto object-contain opacity-90"
                />
              </div>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md font-light italic">
                Karmaşık hukuki süreçleri stratejik birer avantaja dönüştüren, disiplin mirası ile temellenmiş yeni nesil hukuk bürosu.
              </p>
            </div>

            <div className="md:col-span-3">
              <h4 className="font-serif text-xl font-bold mb-10 text-white tracking-tight">Kategoriler</h4>
              <ul className="space-y-6">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link href={link.path} className="text-gray-400 hover:text-secondary-gold transition-colors text-sm uppercase tracking-widest font-bold">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-4">
              <h4 className="font-serif text-xl font-bold mb-10 text-white tracking-tight">Merkez Ofis</h4>
              <ul className="space-y-8">
                <li className="text-gray-400 text-sm leading-relaxed font-light">
                  <span className="block text-white font-bold mb-2 uppercase tracking-widest text-[10px]">Adres</span>
                  Esentepe, Kore Şehitleri Cd. No:30/10, <br/> 34394 Şişli/İstanbul
                </li>
                <li className="text-gray-400 text-sm leading-relaxed font-light">
                  <span className="block text-white font-bold mb-2 uppercase tracking-widest text-[10px]">Bize Ulaşın</span>
                  <a href="mailto:info@bulutpartners.com" className="block hover:text-white transition-colors mb-2">info@bulutpartners.com</a>
                  <a href="tel:+902122113345" className="block text-2xl font-serif text-white hover:text-secondary-gold transition-colors">+90 (212) 211 3345</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-gray-500 text-[10px] uppercase font-bold tracking-[0.2em]">
              &copy; {new Date().getFullYear()} Bulut & Partners. Tüm hakları saklıdır.
            </p>
            <div className="flex gap-10 mt-4 md:mt-0">
               <Link href="#" className="text-gray-500 hover:text-white text-[10px] uppercase font-bold tracking-[0.2em] transition-colors">KVKK Aydınlatma</Link>
               <Link href="#" className="text-gray-500 hover:text-white text-[10px] uppercase font-bold tracking-[0.2em] transition-colors">Çerez Politikası</Link>
            </div>
          </div>
        </div>
      </footer>

      {!cookieAccepted && (
        <div className="fixed bottom-8 left-8 right-8 md:left-auto md:w-[400px] bg-white border border-slate-100 p-8 shadow-2xl z-50 animate-slide-up rounded-sm">
           <div className="flex items-start gap-6 mb-8">
              <Cookie className="w-8 h-8 text-secondary-gold shrink-0" />
              <p className="text-sm text-gray-600 leading-relaxed font-light">
                Deneyiminizi iyileştirmek için çerezleri kullanıyoruz. <Link href="#" className="text-primary-navy font-bold underline">Politika Detayları</Link>
              </p>
           </div>
           <div className="flex gap-4">
              <button onClick={() => setCookieAccepted(true)} className="flex-1 bg-primary-navy text-white py-4 text-xs font-bold uppercase tracking-widest hover:bg-secondary-gold hover:text-primary-navy transition-all duration-500">Kabul Et</button>
              <button onClick={() => setCookieAccepted(true)} className="flex-1 border border-slate-100 py-4 text-xs font-bold uppercase tracking-widest hover:bg-slate-50 transition-all duration-500">Reddet</button>
           </div>
        </div>
      )}
    </div>
  );
}
