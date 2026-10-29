import React from 'react';
import { Sprout, Trees, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { WhatsAppIcon } from './WhatsAppIcon';
import { companyData } from '../data/content';

export const CaseStudy = () => {
  const openWhatsApp = () => {
    const text = encodeURIComponent("Halo Tim Nawasena, saya ingin konsultasi mengenai implementasi studi kasus Reklamasi Lahan Bekas Tambang untuk lokasi proyek kami.");
    window.open(`https://wa.me/${companyData.contact.phoneClean}?text=${text}`, '_blank');
  };

  return (
    <section id="studi-kasus" className="py-14 sm:py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl space-y-2 sm:space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#eaf5ee] text-[#1a683d] text-xs font-bold uppercase tracking-wider">
            Studi Kasus Unggulan
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0c331e] tracking-tight leading-snug sm:leading-tight">
            <span className="sm:hidden">Reklamasi Pascatambang</span>
            <span className="hidden sm:inline">Reklamasi Lahan Bekas Tambang</span>
          </h2>

          <p className="text-xs sm:text-base text-slate-600 leading-relaxed font-normal">
            <span className="sm:hidden">Contoh pemulihan lahan berbasis data dan pemantauan.</span><span className="hidden sm:inline">Pemulihan ekosistem melalui pendekatan ilmiah dan data spasial untuk mendukung pemenuhan standar inspeksi ESDM dan KLHK.</span>
          </p>
        </motion.div>

        {/* Feature Box with Motion */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl sm:rounded-3xl bg-[#f8faf8] border border-slate-200/90 overflow-hidden shadow-sm p-4 sm:p-8 lg:p-12"
        >
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-center">
            
            {/* Left: Exact Photo from Page 9 of Company Profile */}
            <div className="lg:col-span-6">
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-md border border-slate-200">
                <img 
                  src="/images/casestudy-reklamasi.jpg" 
                  alt="Studi Kasus Reklamasi Lahan Bekas Tambang Nawasena"
                  className="w-full h-48 sm:h-72 lg:h-[420px] object-cover" 
                />
                <div className="absolute top-3 left-3 bg-[#0c321e]/85 backdrop-blur-md px-3 py-1 rounded-full text-white text-[10px] sm:text-xs font-semibold">
                  Restorasi Ekologi & Revegetasi Terverifikasi
                </div>
              </div>
            </div>

            {/* Right: Ruang Lingkup & Hasil */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-6">
              
              <div className="space-y-3">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 border-b border-slate-200 pb-2">
                  Ruang Lingkup Lapangan:
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1a683d] mt-2 shrink-0"></span>
                    <span>Penyusunan rencana reklamasi</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1a683d] mt-2 shrink-0"></span>
                    <span>Pemilihan jenis tanaman dan penyiapan media tanam</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1a683d] mt-2 shrink-0"></span>
                    <span>Monitoring dan evaluasi pertumbuhan vegetasi</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1a683d] mt-2 shrink-0"></span>
                    <span>Pelaporan dan dokumentasi berkala</span>
                  </li>
                </ul>
              </div>

              {/* 3 Hasil Terverifikasi */}
              <div className="space-y-2.5 pt-1">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 border-b border-slate-200 pb-2">
                  Hasil yang Dicapai:
                </h3>

                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  
                  <div className="p-2.5 sm:p-3.5 rounded-xl bg-white border border-slate-200/90 text-center flex flex-col items-center shadow-2xs">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#eef7f1] text-[#1a683d] flex items-center justify-center mb-1.5 sm:mb-2">
                      <Sprout className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.6]" />
                    </div>
                    <span className="text-[10px] sm:text-xs font-bold text-slate-900 leading-snug">
                      Vegetasi tumbuh stabil
                    </span>
                  </div>

                  <div className="p-2.5 sm:p-3.5 rounded-xl bg-white border border-slate-200/90 text-center flex flex-col items-center shadow-2xs">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#eef7f1] text-[#1a683d] flex items-center justify-center mb-1.5 sm:mb-2">
                      <Trees className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.6]" />
                    </div>
                    <span className="text-[10px] sm:text-xs font-bold text-slate-900 leading-snug">
                      Biodiversitas meningkat
                    </span>
                  </div>

                  <div className="p-2.5 sm:p-3.5 rounded-xl bg-white border border-slate-200/90 text-center flex flex-col items-center shadow-2xs">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#eef7f1] text-[#1a683d] flex items-center justify-center mb-1.5 sm:mb-2">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.6]" />
                    </div>
                    <span className="text-[10px] sm:text-xs font-bold text-slate-900 leading-snug">
                      Fungsi ekologis pulih
                    </span>
                  </div>

                </div>
              </div>

              {/* CTA with Real WhatsApp Icon */}
              <div className="pt-2">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={openWhatsApp}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#0c321e] hover:bg-[#155432] text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366]" fill="#25D366" />
                  <span className="sm:hidden">Konsultasi Proyek Serupa</span><span className="hidden sm:inline">Konsultasikan Proyek Serupa via WhatsApp</span>
                </motion.button>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
