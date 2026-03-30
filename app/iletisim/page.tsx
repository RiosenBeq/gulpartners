'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Linkedin, Instagram, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Kira ve Gayrimenkul Hukuku',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappNumber = "905330940792";
    const text = `*Gül Partners - Bilgi Formu*\n\n👤 *Ad Soyad:* ${formData.name}\n📧 *E-Posta:* ${formData.email}\n📂 *Konu:* ${formData.subject}\n💬 *Mesaj:* ${formData.message}`;
    
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-surface selection:bg-secondary-gold/30">
      {/* Hero Section */}
      <section className="relative pt-48 pb-32 bg-primary-navy overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-secondary-gold/10 rounded-full translate-x-1/3 translate-y-1/3 blur-[120px]"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center md:text-left">
          <div className="max-w-3xl">
            <span className="text-secondary-gold text-sm font-bold tracking-[0.4em] uppercase mb-8 block font-sans">İletişim</span>
            <h1 className="font-serif text-5xl md:text-[9rem] font-bold leading-[0.85] text-white tracking-[-0.04em] mb-12 italic">
              Zihinsel <br/> <span className="not-italic text-4xl md:text-[9rem] text-gray-400">İletişim.</span>
            </h1>
            <p className="text-2xl text-slate-300 font-light max-w-2xl leading-relaxed italic border-l border-white/10 pl-10">
              Gül Partners hukuk profesyonelleri, taleplerinizi 24 saat içinde stratejik bir ön incelemeye tabi tutar.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Contact Info Cards */}
            <div className="lg:col-span-4 space-y-8 h-full">
              <div className="p-10 bg-surface-low border border-gray-100 rounded-sm hover:shadow-xl transition-all duration-500 group">
                <div className="w-12 h-12 bg-primary-navy text-white flex items-center justify-center mb-8 rounded-sm group-hover:bg-secondary-gold transition-colors">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-primary-navy mb-4">Merkez Ofis</h3>
                <p className="text-gray-500 leading-relaxed font-light mb-6">
                  Esentepe, Kore Şehitleri Cd. No:30/10, 34394 Şişli/İstanbul
                </p>
                <a 
                  href="https://goo.gl/maps/shisli-istanbul" 
                  target="_blank" 
                  className="text-xs font-bold tracking-widest text-primary-navy/40 hover:text-secondary-gold transition-colors uppercase"
                >
                  Haritada Görüntüle &rarr;
                </a>
              </div>

              <div className="p-10 bg-surface-low border border-gray-100 rounded-sm hover:shadow-xl transition-all duration-500 group">
                <div className="w-12 h-12 bg-primary-navy text-white flex items-center justify-center mb-8 rounded-sm group-hover:bg-secondary-gold transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-primary-navy mb-4">Telefon & Destek</h3>
                <div className="space-y-4">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">Sabit Hat</span>
                    <a href="tel:+902122113345" className="text-lg text-primary-navy hover:text-secondary-gold transition-colors">+90 (212) 211 3345</a>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">GSM / WhatsApp</span>
                    <a href="tel:+905330940792" className="text-lg text-primary-navy hover:text-secondary-gold transition-colors">+90 533 094 0792</a>
                  </div>
                </div>
              </div>

              <div className="p-10 bg-surface-low border border-gray-100 rounded-sm hover:shadow-xl transition-all duration-500 group">
                <div className="w-12 h-12 bg-primary-navy text-white flex items-center justify-center mb-8 rounded-sm group-hover:bg-secondary-gold transition-colors">
                  <Linkedin className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-primary-navy mb-4">Dijital Varlık</h3>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary-navy hover:bg-secondary-gold hover:text-white transition-all shadow-sm" aria-label="LinkedIn Profilesi">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary-navy hover:bg-secondary-gold hover:text-white transition-all shadow-sm" aria-label="Instagram Profilesi">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary-navy hover:bg-secondary-gold hover:text-white transition-all shadow-sm" aria-label="Twitter Profilesi">
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-8 bg-surface-low p-6 md:p-20 border border-gray-100 rounded-sm">
              <h2 className="font-serif text-3xl font-bold text-primary-navy mb-12">Detaylı Bilgi Formu</h2>
              <form className="space-y-10" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="relative group">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 block transition-colors group-focus-within:text-secondary-gold">Ad Soyad</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b-2 border-gray-200 py-4 focus:outline-none focus:border-secondary-gold transition-colors font-serif text-lg"
                      placeholder="Örn: Ferdi Gül"
                    />
                  </div>
                  <div className="relative group">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 block transition-colors group-focus-within:text-secondary-gold">E-Posta Adresi</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b-2 border-gray-200 py-4 focus:outline-none focus:border-secondary-gold transition-colors font-serif text-lg"
                      placeholder="av.ferdigul@gmail.com"
                    />
                  </div>
                </div>
                <div className="relative group">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 block transition-colors group-focus-within:text-secondary-gold">Konu / Uzmanlık Alanı</label>
                  <select 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b-2 border-gray-200 py-4 focus:outline-none focus:border-secondary-gold transition-colors font-serif text-lg appearance-none cursor-pointer"
                  >
                    <option value="Kira ve Gayrimenkul Hukuku">Kira ve Gayrimenkul Hukuku</option>
                    <option value="İş ve Sosyal Güvenlik Hukuku">İş ve Sosyal Güvenlik Hukuku</option>
                    <option value="Ticaret ve Şirketler Hukuku">Ticaret ve Şirketler Hukuku</option>
                    <option value="Diğer">Diğer</option>
                  </select>
                </div>
                <div className="relative group">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 block transition-colors group-focus-within:text-secondary-gold">Mesajınız</label>
                  <textarea 
                    name="message"
                    required
                    rows={4} 
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b-2 border-gray-200 py-4 focus:outline-none focus:border-secondary-gold transition-colors font-serif text-lg resize-none"
                    placeholder="Hukuki durumunuzu kısaca özetleyin..."
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full md:w-auto px-16 py-6 bg-primary-navy text-white font-bold rounded-sm hover:bg-secondary-gold hover:text-primary-navy transition-all duration-500 flex items-center justify-center gap-4 group"
                >
                  Gönder <Send className="w-5 h-5 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[600px] w-full bg-gray-100 flex items-center justify-center relative group">
        <div className="absolute inset-0 grayscale contrast-125 opacity-70 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000">
           <iframe 
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.232334812376!2d29.006859776510304!3d41.06385221664426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab652f75845c1%3A0xc66519183617349b!2sEsentepe%2C%20Kore%20Şehitleri%20Cd.%20No%3A30%2C%2034394%20Şişli%2Fİstanbul!5e0!3m2!1str!2str!4v1711550000000!5m2!1str!2str" 
             width="100%" 
             height="100%" 
             style={{ border: 0 }} 
             allowFullScreen 
             loading="lazy"
           ></iframe>
        </div>
        <div className="relative z-10 bg-white/50 backdrop-blur-md px-10 py-6 border border-white/20 pointer-events-none group-hover:opacity-0 transition-opacity">
            <span className="text-primary-navy font-bold tracking-widest text-xs uppercase">Konum Bilgisini Keşfedin</span>
        </div>
      </section>
    </div>
  );
}
