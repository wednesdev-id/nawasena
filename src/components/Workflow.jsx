import React, { useState } from 'react';
import { 
  Search, 
  Layers, 
  FileCheck2, 
  ShieldCheck, 
  ChevronRight, 
  ArrowDown, 
  CheckCircle2,
  Sparkles,
  Clock
} from 'lucide-react';
import { motion } from 'framer-motion';
import { WhatsAppIcon } from './WhatsAppIcon';
import { companyData } from '../data/content';

export const Workflow = () => {
  const [activeHover, setActiveHover] = useState(null);

  const openWhatsAppWorkflow = (phaseTitle) => {
    const text = encodeURIComponent(`Halo Tim Nawasena, saya ingin berdiskusi mengenai tahapan proyek: ${phaseTitle}.`);
    window.open(`https://wa.me/${companyData.contact.phoneClean}?text=${text}`, '_blank');
  };

  const steps = [
    {
      step: "01",
      phase: "Fase 01",
      category: "Inisiasi & Audit Baseline",
      title: "Identifikasi Kebutuhan",
      desc: "Menelaah profil tapak, sasaran bisnis klien, serta kewajiban regulasi AMDAL/UKL-UPL dan izin kehutanan yang harus dipenuhi secara presisi.",
      mobileDesc: "Telaah tapak, sasaran proyek, dan pemetaan kepatuhan regulasi lingkungan hidup.",
      output: "Matriks Kepatuhan & Rencana Kerja Awal",
      icon: <Search className="w-5 h-5" />,
      accent: "from-emerald-500/20 to-teal-500/20"
    },
    {
      step: "02",
      phase: "Fase 02",
      category: "Survei & Inteligensi Data",
      title: "Analisis dan Kajian",
      desc: "Akuisisi citra drone ortofoto sub-meter, survei vegetasi terestrial, analisis kimia-fisika tanah laboratorium, dan pemodelan spasial GIS terpadu.",
      mobileDesc: "Pemetaan drone presisi, survei vegetasi, uji lab tanah, dan pemodelan spasial GIS.",
      output: "Peta Tematik Spasial & Laporan Analisis Lab",
      icon: <Layers className="w-5 h-5" />,
      accent: "from-teal-500/20 to-emerald-500/20"
    },
    {
      step: "03",
      phase: "Fase 03",
      category: "Formulasi Rencana Teknis",
      title: "Rekomendasi & Solusi",
      desc: "Merumuskan cetak biru teknis reklamasi (rencana tahunan & 5 tahunan), pemilihan jenis tanaman revegetasi lokal, dan strategi mitigasi dampak lingkungan.",
      mobileDesc: "Penyusunan dokumen rencana teknis reklamasi, revegetasi & mitigasi dampak.",
      output: "Dokumen Rencana Teknis Siap Pengesahan",
      icon: <FileCheck2 className="w-5 h-5" />,
      accent: "from-emerald-500/20 to-green-500/20"
    },
    {
      step: "04",
      phase: "Fase 04",
      category: "Eksekusi & Sertifikasi",
      title: "Implementasi & Monitoring",
      desc: "Pendampingan langsung di lapangan, monitoring tingkat pertumbuhan tanaman dan kestabilan lereng berkala, hingga siap lolos inspeksi audit ESDM & KLHK.",
      mobileDesc: "Pendampingan aplikasi lapangan, evaluasi berkala, dan penjaminan lolos audit inspektur.",
      output: "Laporan Evaluasi Keberhasilan & Kepatuhan Tuntas",
      icon: <ShieldCheck className="w-5 h-5" />,
      accent: "from-green-500/20 to-emerald-500/20"
    }
  ];

  return (
    <section id="metodologi" className="py-14 sm:py-20 lg:py-28 bg-[#fbfdfb] relative border-t border-slate-100 overflow-hidden">
      
      {/* Subtle Background Architectural Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden opacity-40">
        <div className="absolute -top-32 right-10 w-96 h-96 rounded-full bg-emerald-100/60 blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-teal-100/50 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14 relative z-10">
        
        {/* Section Header: Alur Kerja Komprehensif */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#eaf5ee] text-[#1a683d] text-xs font-bold uppercase tracking-wider border border-[#1a683d]/20 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#1a683d]" />
            <span>Alur Kerja & Metodologi Proyek</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0c331e] tracking-tight leading-snug sm:leading-tight">
            Dari Baseline Data Menuju Dampak Nyata
          </h2>

          <p className="text-xs sm:text-base text-slate-600 leading-relaxed font-normal">
            Setiap proyek dikawal melalui alur 4 fase terstruktur yang menjamin kepatuhan audit regulasi, akurasi spasial tinggi, dan pemulihan ekosistem jangka panjang.
          </p>
        </motion.div>

        {/* ========================================================================= */}
        {/* DESKTOP VIEW: Horizontal Connected Workflow Pipeline (lg:block) */}
        {/* ========================================================================= */}
        <div className="hidden lg:block">
          
          {/* Continuous Connecting Track Bar */}
          <div className="relative mb-8">
            {/* Background connecting rail */}
            <div className="absolute top-1/2 left-12 right-12 h-1 -translate-y-1/2 bg-slate-200 z-0 rounded-full" />
            
            {/* Active gradient flow line */}
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute top-1/2 left-12 right-12 h-1 -translate-y-1/2 bg-gradient-to-r from-[#0c321e] via-[#1a683d] to-[#25D366] z-0 origin-left rounded-full"
            />

            {/* Stepper Nodes on Track */}
            <div className="grid grid-cols-4 relative z-10">
              {steps.map((item, idx) => (
                <div key={item.step} className="flex flex-col items-center">
                  
                  {/* Step Milestone Node */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.15 }}
                    onMouseEnter={() => setActiveHover(idx)}
                    onMouseLeave={() => setActiveHover(null)}
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center font-mono font-black text-base shadow-lg transition-all duration-300 cursor-pointer ${
                      activeHover === idx
                        ? 'bg-[#25D366] text-[#062413] scale-110 ring-4 ring-emerald-300'
                        : 'bg-[#0c321e] text-[#86efac] ring-4 ring-white'
                    }`}
                  >
                    {item.step}
                  </motion.div>

                  {/* Flow Direction Indicator between nodes */}
                  {idx < 3 && (
                    <div className="absolute left-[calc(25%*'+(idx+1)+'-12px)] top-1/2 -translate-y-1/2 text-white bg-[#1a683d] w-6 h-6 rounded-full flex items-center justify-center shadow-sm pointer-events-none hidden" />
                  )}

                  {/* Phase Marker Label */}
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#1a683d] mt-2 font-mono">
                    {item.phase}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Connected Phase Cards Grid */}
          <div className="grid grid-cols-4 gap-5">
            {steps.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                onMouseEnter={() => setActiveHover(idx)}
                onMouseLeave={() => setActiveHover(null)}
                className={`relative rounded-2xl bg-white border p-6 flex flex-col justify-between transition-all duration-300 ${
                  activeHover === idx
                    ? 'border-[#1a683d] shadow-xl -translate-y-1.5'
                    : 'border-slate-200/90 shadow-sm hover:border-slate-300'
                }`}
              >
                {/* Flow Connector Arrow pointing to next phase */}
                {idx < 3 && (
                  <div className="absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full bg-[#eef7f1] border border-[#1a683d]/40 flex items-center justify-center text-[#1a683d] shadow-xs">
                    <ChevronRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                )}

                <div className="space-y-3">
                  {/* Category Pill & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                      {item.category}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-[#eef7f1] text-[#1a683d] flex items-center justify-center">
                      {item.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-black text-slate-900 tracking-tight leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                {/* Deliverable Output Tag */}
                <div className="mt-5 pt-3.5 border-t border-slate-100 space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block">
                    Target Output:
                  </span>
                  <div className="flex items-start gap-1.5 text-xs font-semibold text-[#0c321e]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#1a683d] shrink-0 mt-0.5" />
                    <span className="leading-tight">{item.output}</span>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>

        </div>

        {/* ========================================================================= */}
        {/* MOBILE & TABLET VIEW: Vertical Stepper Pipeline (lg:hidden) */}
        {/* ========================================================================= */}
        <div className="lg:hidden relative">
          
          {/* Vertical Connecting Track Line */}
          <div className="absolute top-4 bottom-8 left-6 w-0.5 bg-gradient-to-b from-[#0c321e] via-[#1a683d] to-[#25D366] z-0" />

          {/* Stepper Steps List */}
          <div className="space-y-6 relative z-10">
            {steps.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className="flex items-start gap-4"
              >
                
                {/* Step Milestone Circle */}
                <div className="w-12 h-12 rounded-2xl bg-[#0c321e] text-[#86efac] flex items-center justify-center font-mono font-black text-sm shrink-0 shadow-md ring-4 ring-[#fbfdfb] z-10">
                  {item.step}
                </div>

                {/* Step Content Card */}
                <div className="flex-1 rounded-2xl bg-white border border-slate-200/90 p-4 sm:p-5 shadow-xs space-y-2.5">
                  
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#1a683d] bg-[#eef7f1] px-2 py-0.5 rounded">
                      {item.phase} • {item.category}
                    </span>
                    <div className="text-[#1a683d]">
                      {item.icon}
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {item.mobileDesc}
                  </p>

                  {/* Output deliverable */}
                  <div className="pt-2 border-t border-slate-100 flex items-start gap-1.5 text-xs font-semibold text-[#0c321e]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#1a683d] shrink-0 mt-0.5" />
                    <span>{item.output}</span>
                  </div>

                  {/* Step Connector Indicator to next step */}
                  {idx < 3 && (
                    <div className="pt-1 flex items-center gap-1 text-[11px] font-bold text-slate-400">
                      <ArrowDown className="w-3 h-3 text-[#1a683d]" />
                      <span>Melanjutkan ke Fase {steps[idx + 1].step}</span>
                    </div>
                  )}

                </div>

              </motion.div>
            ))}
          </div>

        </div>

        {/* ========================================================================= */}
        {/* Bottom Guarantee & Commitment Band */}
        {/* ========================================================================= */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#0c321e] via-[#092918] to-[#051a0f] text-white p-5 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-4 shadow-lg border border-emerald-900/40"
        >
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <Clock className="w-4 h-4" />
              <span>Jaminan Kualitas & Kepatuhan Proyek</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-200 font-medium">
              Transparansi pelaporan di setiap fase kerja untuk menjamin kepatuhan regulasi lingkungan hidup dan pemulihan ekosistem optimal.
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => openWhatsAppWorkflow("Konsultasi Alur Kerja Proyek")}
            className="w-full md:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-[#062413] font-bold text-xs sm:text-sm shadow-md transition-all shrink-0 active:scale-95"
          >
            <WhatsAppIcon className="w-4 h-4 text-[#062413]" fill="#062413" />
            <span>Diskusikan Kebutuhan Fase Proyek Anda</span>
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};
