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
    <div className="bg-surface selection:bg-secondary/20 min-h-screen overflow-x-hidden">
      {/* Hero Section: Full Cinematic */}
      <section className="relative w-full h-[80vh] min-h-[600px] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2600&auto=format&fit=crop"
            alt="Gül Partners İletişim"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 to-transparent mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-surface/10"></div>
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-12 pb-20">
          <span className="text-secondary text-[10px] font-bold tracking-[0.5em] uppercase mb-8 block font-sans">İLETİŞİM KURUN</span>
          <h1 className="font-serif text-6xl md:text-[5.5rem] text-primary tracking-tighter leading-[1.05] mb-10">
            Bir Adım <span className="italic text-secondary">Bizimle</span><br/>
            <span className="text-primary/40 not-italic">Başlasın.</span>
          </h1>
          <p className="text-xl text-primary/70 max-w-2xl leading-relaxed font-light border-l border-secondary/40 pl-8">
            Gül Partners hukuk profesyonelleri, taleplerinizi 24 saat içinde stratejik bir ön incelemeye tabi tutar.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-surface to-transparent"></div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 md:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Contact Info Cards */}
            <div className="lg:col-span-4 space-y-8 h-full">
              <div className="p-10 bg-surface-low border border-outline-variant/10 shadow-sm transition-all duration-500 group">
                <div className="w-12 h-12 bg-primary text-on-primary flex items-center justify-center mb-8 group-hover:bg-secondary transition-colors">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-primary mb-4">Merkez Ofis</h3>
                <p className="text-primary/60 leading-relaxed font-light mb-6">
                  Esentepe, Kore Şehitleri Cd. No:30/10, 34394 Şişli/İstanbul
                </p>
                <a 
                  href="https://goo.gl/maps/shisli-istanbul" 
                  target="_blank" 
                  className="text-xs font-bold tracking-widest text-primary/40 hover:text-secondary transition-colors uppercase"
                >
                  Haritada Görüntüle &rarr;
                </a>
              </div>

              <div className="p-10 bg-surface-low border border-outline-variant/10 shadow-sm transition-all duration-500 group">
                <div className="w-12 h-12 bg-primary text-on-primary flex items-center justify-center mb-8 group-hover:bg-secondary transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-primary mb-4">Telefon & Destek</h3>
                <div className="space-y-4">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-primary/40 font-bold uppercase tracking-wider mb-1">Sabit Hat</span>
                    <a href="tel:+902122113345" className="text-lg text-primary hover:text-secondary transition-colors">+90 (212) 211 3345</a>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-primary/40 font-bold uppercase tracking-wider mb-1">GSM / WhatsApp</span>
                    <a href="tel:+905330940792" className="text-lg text-primary hover:text-secondary transition-colors">+90 533 094 0792</a>
                  </div>
                </div>
              </div>

              <div className="p-10 bg-surface-low border border-outline-variant/10 shadow-sm transition-all duration-500 group">
                <div className="w-12 h-12 bg-primary text-on-primary flex items-center justify-center mb-8 group-hover:bg-secondary transition-colors">
                  <Linkedin className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-primary mb-4">Dijital Varlık</h3>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 bg-surface text-primary flex items-center justify-center hover:bg-secondary hover:text-on-primary transition-all shadow-sm border border-outline-variant/10" aria-label="LinkedIn Profilesi">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-surface text-primary flex items-center justify-center hover:bg-secondary hover:text-on-primary transition-all shadow-sm border border-outline-variant/10" aria-label="Instagram Profilesi">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-surface text-primary flex items-center justify-center hover:bg-secondary hover:text-on-primary transition-all shadow-sm border border-outline-variant/10" aria-label="Twitter Profilesi">
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-8 bg-surface-low p-6 md:p-20 border border-outline-variant/10 shadow-sm relative overflow-hidden">
              <h2 className="font-serif text-3xl font-bold text-primary mb-12">Detaylı Bilgi Formu</h2>
              <form className="space-y-10" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="relative group">
                    <label className="text-[10px] font-bold text-primary/40 uppercase tracking-widest mb-2 block transition-colors group-focus-within:text-secondary">Ad Soyad</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-outline-variant py-4 focus:outline-none focus:border-secondary transition-colors font-serif text-lg placeholder:text-primary/10"
                      placeholder="Örn: Ferdi Gül"
                    />
                  </div>
                  <div className="relative group">
                    <label className="text-[10px] font-bold text-primary/40 uppercase tracking-widest mb-2 block transition-colors group-focus-within:text-secondary">E-Posta Adresi</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-outline-variant py-4 focus:outline-none focus:border-secondary transition-colors font-serif text-lg placeholder:text-primary/10"
                      placeholder="av.ferdigul@gmail.com"
                    />
                  </div>
                </div>
                <div className="relative group">
                  <label className="text-[10px] font-bold text-primary/40 uppercase tracking-widest mb-2 block transition-colors group-focus-within:text-secondary">Konu / Uzmanlık Alanı</label>
                  <select 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-outline-variant py-4 focus:outline-none focus:border-secondary transition-colors font-serif text-lg appearance-none cursor-pointer"
                  >
                    <option value="Kira ve Gayrimenkul Hukuku">Kira ve Gayrimenkul Hukuku</option>
                    <option value="İş ve Sosyal Güvenlik Hukuku">İş ve Sosyal Güvenlik Hukuku</option>
                    <option value="Ticaret ve Şirketler Hukuku">Ticaret ve Şirketler Hukuku</option>
                    <option value="Diğer">Diğer</option>
                  </select>
                </div>
                <div className="relative group">
                  <label className="text-[10px] font-bold text-primary/40 uppercase tracking-widest mb-2 block transition-colors group-focus-within:text-secondary">Mesajınız</label>
                  <textarea 
                    name="message"
                    required
                    rows={4} 
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-outline-variant py-4 focus:outline-none focus:border-secondary transition-colors font-serif text-lg resize-none placeholder:text-primary/10"
                    placeholder="Hukuki durumunuzu kısaca özetleyin..."
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full md:w-auto px-16 py-6 bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold hover:from-secondary hover:to-primary transition-all duration-700 flex items-center justify-center gap-4 group uppercase text-[10px] tracking-[0.4em] shadow-xl hover:-translate-y-1 hover:shadow-2xl border border-outline-variant/30"
                >
                  GÖNDER <Send className="w-5 h-5 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[600px] w-full bg-surface-low flex items-center justify-center relative group overflow-hidden">
        <div className="absolute inset-0 opacity-80 group-hover:opacity-100 transition-all duration-1000">
           <iframe 
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.232334812376!2d29.006859776510304!3d41.06385221664426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab652f75845c1%3A0xc66519183617349b!2sEsentepe%2C%20Kore%20Şehitleri%20Cd.%20No%3A30%2C%2034394%20Şişli%2Fİstanbul!5e0!3m2!1str!2str!4v1711550000000!5m2!1str!2str" 
             width="100%" 
             height="100%" 
             style={{ border: 0 }} 
             allowFullScreen 
             loading="lazy"
           ></iframe>
        </div>
        <div className="relative z-10 bg-surface/60 backdrop-blur-md px-12 py-8 border border-outline-variant/10 pointer-events-none group-hover:opacity-0 transition-opacity">
            <span className="text-primary font-bold tracking-[0.5em] text-[10px] uppercase">LOKASYON REHBERİ</span>
        </div>
      </section>
    </div>
  );
}
