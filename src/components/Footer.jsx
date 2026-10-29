import React from 'react';
import { ArrowUp } from 'lucide-react';
import { companyData } from '../data/content';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-slate-200 text-slate-600 text-xs sm:text-sm py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          
          {/* Official Nawasena Logo */}
          <div className="space-y-3">
            <img 
              src="/images/nawasena-logo.jpg" 
              alt="NAWASENA - Environmental, Forestry & Geospatial Advisory" 
              className="h-11 sm:h-12 w-auto object-contain"
            />
            <p className="text-xs text-slate-500 max-w-sm leading-relaxed">
              Konsultan lingkungan, reklamasi lahan, dan kehutanan dengan dukungan pemetaan geospasial presisi.
            </p>
          </div>

          {/* Quick Nav */}
          <div className="flex flex-wrap items-center gap-5 text-xs font-semibold text-slate-600">
            <a href="#tentang" className="hover:text-[#0c331e] transition-colors">Tentang Kami</a>
            <a href="#layanan" className="hover:text-[#0c331e] transition-colors">Layanan</a>
            <a href="#pendekatan" className="hover:text-[#0c331e] transition-colors">Pendekatan Kerja</a>
            <a href="#studi-kasus" className="hover:text-[#0c331e] transition-colors">Studi Kasus</a>
            <a href="#mengapa-kami" className="hover:text-[#0c331e] transition-colors">Mengapa Kami</a>
            <a href="#kontak" className="hover:text-[#0c331e] transition-colors">Kontak</a>
          </div>

          {/* Sponsor Badge in Footer */}
          <div className="flex items-center gap-3 bg-[#f8faf8] border border-slate-200 p-2.5 rounded-xl">
            <img 
              src="/images/brin-logo.png" 
              alt="BRIN Sponsor Riset" 
              className="h-8 w-auto object-contain"
            />
            <div className="text-left">
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Didukung Oleh:</div>
              <div className="text-xs font-bold text-slate-800">BRIN RI</div>
            </div>
          </div>

        </div>

        {/* Bottom divider & copyright */}
        <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} <strong className="text-slate-700">NAWASENA</strong> — Beyond Compliance. Enabling Sustainability.
          </div>
          
          <div className="flex items-center gap-6">
            <span>Yogyakarta, Indonesia</span>
            <span>halo@nawasena.id</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 text-slate-600 hover:text-[#0c331e] hover:border-[#0c331e] transition-all text-xs font-semibold"
            >
              <span>Ke Atas</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
