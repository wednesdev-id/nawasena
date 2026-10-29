import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { WhatsAppIcon } from './WhatsAppIcon';
import { companyData } from '../data/content';

export const Hero = () => {
  const openWhatsApp = () => {
    const text = encodeURIComponent("Halo Tim Nawasena, saya ingin konsultasi mengenai layanan konsultasi lingkungan, reklamasi, atau kehutanan perusahaan kami.");
    window.open(`https://wa.me/${companyData.contact.phoneClean}?text=${text}`, '_blank');
  };

  const scrollToServices = () => {
    const el = document.querySelector('#layanan');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-20 pb-10 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        
        {/* Mobile Hero: photo remains unobstructed, content follows as a separate panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="sm:hidden overflow-hidden rounded-2xl bg-[#0c321e] shadow-xl"
        >
          <div className="relative h-60 overflow-hidden">
            <img
              src="/images/hero-landscape.jpg"
              alt="Lanskap Berkelanjutan Nawasena"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0c321e] to-transparent" />
          </div>

          <div className="-mt-10 relative z-10 space-y-4 px-5 pb-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-bold tracking-wide text-emerald-200 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#4ade80]" />
              ENVIRONMENTAL ADVISORY
            </div>
            <div className="space-y-2">
              <p className="text-[11px] font-bold uppercase tracking-wider text-[#86efac]">
                Lingkungan, Reklamasi & Kehutanan
              </p>
              <h1 className="text-3xl font-extrabold leading-[1.05] tracking-tight text-white">
                Lanskap yang <span className="text-[#86efac]">Berkelanjutan</span>
              </h1>
              <p className="text-sm leading-relaxed text-emerald-50/90">
                Kepatuhan lingkungan dan pemulihan lahan berbasis data ilmiah.
              </p>
            </div>
            <motion.button
              whileTap={{ scale: 0.98 }}
              onClick={openWhatsApp}
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#86efac] px-5 py-3.5 text-sm font-extrabold text-[#062413] shadow-lg shadow-black/20"
            >
              <WhatsAppIcon className="h-5 w-5 text-[#062413]" fill="#062413" />
              <span>Konsultasi via WhatsApp</span>
              <ArrowRight className="h-4 w-4" />
            </motion.button>
            <button
              onClick={scrollToServices}
              className="w-full py-1 text-xs font-bold text-emerald-200 underline decoration-emerald-400/60 underline-offset-4"
            >
              Lihat layanan kami
            </button>
          </div>
        </motion.div>

        {/* Desktop Hero Card */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative hidden sm:flex rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl min-h-[430px] sm:min-h-[580px] lg:min-h-[640px] flex-col justify-between p-5 sm:p-10 lg:p-14"
        >
          
          {/* Background Photography: Exact Page 1 Hero Landscape from Company Profile */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <motion.img 
              initial={{ scale: 1.12 }}
              animate={{ scale: 1.03 }}
              transition={{ duration: 1.8, ease: "easeOut" }}
              src="/images/hero-landscape.jpg" 
              alt="Lanskap Berkelanjutan Nawasena" 
              className="w-full h-full object-cover object-center"
            />
            {/* Deep rich forest gradient overlay for high contrast editorial readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#062413]/85 via-[#09331b]/45 to-[#041a0e]/20 sm:from-[#062413] sm:via-[#09331b]/75 sm:to-[#041a0e]/45" />
            <div className="absolute inset-0 hidden bg-black/20 sm:block" />
          </div>

          {/* Top Tag: Focus & Scope */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative z-10 hidden flex-wrap items-center justify-between gap-3 sm:flex"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white text-[11px] sm:text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#4ade80] animate-pulse"></span>
              <span>ENVIRONMENTAL, FORESTRY & GEOSPATIAL</span>
            </div>

            <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-emerald-200 text-xs font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-[#86efac]" />
              <span>Beyond Compliance. Enabling Sustainability.</span>
            </div>
          </motion.div>

          {/* Center Content: Headline & Executive Value Proposition */}
          <div className="relative z-10 max-w-3xl space-y-3 sm:space-y-6 my-auto sm:pt-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="space-y-2 sm:space-y-3"
            >
              <span className="hidden text-[#86efac] text-xs sm:text-sm font-bold tracking-wider uppercase sm:block">
                Konsultan Lingkungan, Reklamasi dan Kehutanan
              </span>
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.18] sm:leading-[1.12] tracking-tight drop-shadow-md">
                <span className="sm:hidden">Lanskap yang <span className="text-[#86efac]">Berkelanjutan</span></span>
                <span className="hidden sm:inline">Bersama Mewujudkan <br />
                  <span className="text-[#86efac]">Lanskap yang Berkelanjutan</span>
                </span>
              </h1>
            </motion.div>

            {/* Concise Mobile Copy vs Detailed Desktop Copy */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="hidden sm:block text-sm sm:text-base lg:text-lg text-slate-100/95 max-w-2xl leading-relaxed font-normal drop-shadow"
            >
              <span className="sm:hidden">
                Kepatuhan lingkungan dan pemulihan lahan berbasis data ilmiah.
              </span>
              <span className="hidden sm:inline">
                Kami membantu klien mengelola risiko, memanfaatkan potensi sumber daya, dan mengurangi dampak lingkungan secara bertanggung jawab melalui pendekatan ilmiah, data yang akurat, serta pemahaman terhadap keberlanjutan.
              </span>
            </motion.p>

            {/* CTAs with Official WhatsApp Logo */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="pt-1 sm:pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={openWhatsApp}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl text-sm sm:text-base font-extrabold text-[#062413] bg-[#86efac] hover:bg-[#4ade80] shadow-lg shadow-black/30 transition-all group"
              >
                <WhatsAppIcon className="w-5 h-5 text-[#062413]" fill="#062413" />
                <span className="sm:hidden">Konsultasi WhatsApp</span><span className="hidden sm:inline">Konsultasi Cepat via WhatsApp</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToServices}
                className="hidden sm:inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/20 transition-all"
              >
                <span>Pelajari Solusi Teknis</span>
                <ChevronDown className="w-4 h-4" />
              </motion.button>
            </motion.div>
          </div>

          {/* Bottom Bar: 4 Pillars at a glance */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="relative z-10 hidden pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-white/15 sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 text-white"
          >
            <div className="flex items-center gap-2 sm:gap-3 bg-black/20 sm:bg-transparent p-2 sm:p-0 rounded-lg">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center text-[#86efac] shrink-0">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-[11px] sm:text-xs font-bold leading-tight truncate">Konsultasi Lingkungan</div>
                <div className="text-[9px] sm:text-[10px] text-slate-300 hidden sm:block">Pengelolaan Risiko & Dampak</div>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 bg-black/20 sm:bg-transparent p-2 sm:p-0 rounded-lg">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center text-[#86efac] shrink-0">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-[11px] sm:text-xs font-bold leading-tight truncate">Reklamasi Lahan</div>
                <div className="text-[9px] sm:text-[10px] text-slate-300 hidden sm:block">Pemulihan Fungsi Ekologis</div>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 bg-black/20 sm:bg-transparent p-2 sm:p-0 rounded-lg">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center text-[#86efac] shrink-0">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-[11px] sm:text-xs font-bold leading-tight truncate">Kehutanan</div>
                <div className="text-[9px] sm:text-[10px] text-slate-300 hidden sm:block">Pengelolaan Lestari</div>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 bg-black/20 sm:bg-transparent p-2 sm:p-0 rounded-lg">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center text-[#86efac] shrink-0">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-[11px] sm:text-xs font-bold leading-tight truncate">Geospasial</div>
                <div className="text-[9px] sm:text-[10px] text-slate-300 hidden sm:block">Data Spasial Presisi</div>
              </div>
            </div>
          </motion.div>

        </motion.div>

        {/* Sponsor Banner: Institutional Accreditation & BRIN Sponsorship */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="rounded-xl sm:rounded-2xl bg-[#f8faf8] border border-slate-200/90 p-4 sm:p-6 shadow-xs"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            
            <div className="space-y-1 text-center sm:text-left">
              <div className="inline-flex items-center gap-2">
                <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-widest text-[#1a683d] bg-[#eaf5ee] px-2 py-0.5 rounded border border-[#1a683d]/20">
                  Dukungan & Kemitraan Program Riset
                </span>
              </div>
              <p className="text-xs text-slate-600 max-w-xl leading-relaxed">
                Pengembangan metodologi saintifik dan teknologi pemantauan spasial Nawasena didukung melalui program pembinaan dan fasilitasi riset inovasi nasional.
              </p>
            </div>

            <div className="flex items-center gap-3 bg-white px-4 py-2 sm:py-2.5 rounded-xl border border-slate-200 shadow-xs shrink-0">
              <img 
                src="/images/brin-logo.png" 
                alt="BRIN - Badan Riset dan Inovasi Nasional" 
                className="h-8 sm:h-10 w-auto object-contain"
              />
              <div className="text-left border-l border-slate-200 pl-2.5">
                <div className="text-[11px] sm:text-xs font-black text-slate-900 leading-tight">Sponsor Riset & Inovasi</div>
                <div className="text-[9px] sm:text-[10px] text-slate-500 font-medium">Badan Riset & Inovasi Nasional</div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
