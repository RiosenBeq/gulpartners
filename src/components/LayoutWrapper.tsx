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
      setIsScrolled(window.scrollY > 20);
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
    <div className="min-h-screen flex flex-col font-sans bg-surface-lowest text-gray-900">
      <nav
        className={cn(
          'fixed w-full z-50 transition-all duration-500 px-6 py-4',
          isScrolled ? 'top-2' : 'top-0'
        )}
      >
        <div 
          className={cn(
            "max-w-7xl mx-auto px-6 lg:px-10 transition-all duration-500 rounded-full",
            isScrolled 
              ? "bg-white/70 backdrop-blur-2xl border border-white/20 shadow-[0_8px_32px_rgba(0,13,36,0.08)] py-1" 
              : "bg-transparent py-4"
          )}
        >
          <div className="flex justify-between items-center h-24">
            <Link href="/" className="flex-shrink-0 flex items-center group">
              <img
                src="/logo.png"
                alt="Gul Partners Logo"
                className="h-20 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </Link>

            <div className="hidden md:flex items-center space-x-12">
              {navLinks.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    href={link.path}
                    className={cn(
                      'relative text-[13px] font-semibold tracking-widest uppercase transition-all duration-300 group/nav',
                      isActive
                        ? 'text-primary-navy'
                        : 'text-gray-500 hover:text-primary-navy'
                    )}
                  >
                    {link.name}
                    <span className={cn(
                      "absolute -bottom-1 left-1/2 -translate-x-1/2 h-[1.5px] bg-secondary-gold transition-all duration-300",
                      isActive ? "w-full" : "w-0 group-hover/nav:w-full"
                    )}></span>
                  </Link>
                );
              })}
              
              <Link
                href="/iletisim"
                className="relative group/cta overflow-hidden bg-primary-navy text-white px-8 py-3 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-500 hover:shadow-[0_10px_25px_rgba(0,13,36,0.2)] hover:-translate-y-0.5"
              >
                <div className="absolute inset-0 bg-secondary-gold translate-y-full group-hover/cta:translate-y-0 transition-transform duration-500"></div>
                <span className="relative flex items-center gap-2 group-hover/cta:text-primary-navy transition-colors duration-500">
                  Danışmanlık Alın <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-primary-navy hover:text-secondary-gold transition-colors"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-100 absolute w-full">
            <div className="px-4 pt-2 pb-6 space-y-1 shadow-lg">
              {navLinks.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    href={link.path}
                    className={cn(
                      'block px-3 py-3 rounded-md text-base font-medium',
                      isActive
                        ? 'text-primary-navy bg-gray-50'
                        : 'text-gray-600 hover:text-primary-navy hover:bg-gray-50'
                    )}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <Link
                href="/iletisim"
                className="mt-4 w-full bg-primary-navy text-white px-6 py-3 rounded-sm text-base font-medium hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Danışmanlık Alın <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </nav>

      <main className="flex-grow pt-24">
        {children}
      </main>

      <footer className="bg-primary-navy text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
            <div className="col-span-1 lg:col-span-1">
              <div className="flex items-center mb-6">
                <img
                  src="/logo.png"
                  alt="Gul Partners Logo"
                  className="h-24 w-auto object-contain brightness-0 invert"
                />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Karmaşık hukuki süreçlerde mimari hassasiyetle inşa edilmiş,
                stratejik ve sonuç odaklı çözümler sunan yeni nesil hukuk bürosu.
              </p>
            </div>

            <div>
              <h4 className="font-serif text-lg font-medium mb-6 text-white">
                Hızlı Bağlantılar
              </h4>
              <ul className="space-y-4">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-secondary-gold text-sm transition-colors">
                    Kurumsal
                  </Link>
                </li>
                <li>
                  <Link href="/uzmanlik" className="text-gray-400 hover:text-secondary-gold text-sm transition-colors">
                    Uzmanlık Alanları
                  </Link>
                </li>
                <li>
                  <Link href="/ekip" className="text-gray-400 hover:text-secondary-gold text-sm transition-colors">
                    Ekibimiz
                  </Link>
                </li>
                <li>
                  <Link href="/iletisim" className="text-gray-400 hover:text-secondary-gold text-sm transition-colors">
                    İletişim
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-lg font-medium mb-6 text-white">
                Uzmanlık
              </h4>
              <ul className="space-y-4">
                <li>
                  <Link href="/uzmanlik" className="text-gray-400 hover:text-secondary-gold text-sm transition-colors">
                    Gayrimenkul Hukuku
                  </Link>
                </li>
                <li>
                  <Link href="/uzmanlik" className="text-gray-400 hover:text-secondary-gold text-sm transition-colors">
                    İş ve Sosyal Güvenlik
                  </Link>
                </li>
                <li>
                  <Link href="/uzmanlik" className="text-gray-400 hover:text-secondary-gold text-sm transition-colors">
                    İcra ve İflas Hukuku
                  </Link>
                </li>
                <li>
                  <Link href="/uzmanlik" className="text-gray-400 hover:text-secondary-gold text-sm transition-colors">
                    Ticaret & Şirketler
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-lg font-medium mb-6 text-white">
                İletişim
              </h4>
              <ul className="space-y-4">
                <li className="text-gray-400 text-sm flex items-start gap-3">
                  <span className="mt-0.5 whitespace-pre-line">Esentepe, Kore Şehitleri Cd. No:30/10, 34394 Şişli/İstanbul</span>
                </li>
                <li className="text-gray-400 text-sm">
                  <a href="mailto:info@bulutpartners.com" className="hover:text-secondary-gold transition-colors">
                    info@bulutpartners.com
                  </a>
                </li>
                <li className="text-gray-400 text-sm">
                  <a href="tel:+902122113345" className="hover:text-secondary-gold transition-colors">
                    +90 (212) 211 3345
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-xs">
              &copy; {new Date().getFullYear()} Bulut & Partners. Tüm hakları saklıdır.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-gray-500 hover:text-white text-xs transition-colors">
                Gizlilik Politikası
              </Link>
              <Link href="#" className="text-gray-500 hover:text-white text-xs transition-colors">
                Kullanım Şartları
              </Link>
              <Link href="#" className="text-gray-500 hover:text-white text-xs transition-colors">
                Çerez Politikası
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {!cookieAccepted && (
        <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-4 shadow-2xl z-50 transform transition-transform duration-500 translate-y-0">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-surface-low p-2 rounded-full">
                <Cookie className="w-5 h-5 text-secondary-gold" />
              </div>
              <p className="text-sm text-gray-600">
                Size daha iyi bir deneyim sunabilmek için çerezleri kullanıyoruz.
                Detaylı bilgi için <Link href="#" className="text-primary-navy underline hover:text-secondary-gold">Çerez Politikamızı</Link> inceleyebilirsiniz.
              </p>
            </div>
            <div className="flex gap-3 w-full sm:w-auto">
              <button
                onClick={() => setCookieAccepted(true)}
                className="flex-1 sm:flex-none px-4 py-2 text-sm font-medium text-gray-600 hover:text-primary-navy transition-colors"
                aria-label="Reddet"
              >
                Reddet
              </button>
              <button
                onClick={() => setCookieAccepted(true)}
                className="flex-1 sm:flex-none bg-primary-navy text-white px-6 py-2 rounded-sm text-sm font-medium hover:bg-opacity-90 transition-colors"
                aria-label="Kabul Et"
              >
                Kabul Et
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
