import React from 'react';
import { 
  Users2, 
  Database, 
  Handshake, 
  Award, 
  ShieldCheck, 
  Sparkles, 
  Lightbulb, 
  CheckCircle2,
  TrendingUp,
  Layers
} from 'lucide-react';
import { motion } from 'framer-motion';

export const WhyUs = () => {
  const differentiators = [
    {
      num: "01",
      tag: "Sinergi 1 Pintu",
      title: "Keahlian Multidisiplin Terpadu",
      desc: "Memadukan tim ahli lingkungan, silvikultur kehutanan, ilmu tanah, dan analis geospasial bersertifikasi dalam satu naungan kerja yang selaras.",
      clientBenefit: "Efisiensi koordinasi proyek tanpa hambatan multi-vendor terpisah.",
      icon: <Users2 className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8]" />
    },
    {
      num: "02",
      tag: "Didukung Riset BRIN",
      title: "Pendekatan Saintifik & Presisi Data",
      desc: "Setiap telaah teknis dan rencana reklamasi didasarkan pada citra drone ortofoto presisi tinggi, uji laboratorium tanah, dan validasi riset ilmiah.",
      clientBenefit: "Rekomendasi akurat 100% berbasis fakta tapak, minim risiko sanksi regulasi.",
      icon: <Database className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8]" />
    },
    {
      num: "03",
      tag: "End-to-End Advisory",
      title: "Kemitraan Strategis Jangka Panjang",
      desc: "Kami tidak sekadar menyusun dokumen formalitas, melainkan mengawal implementasi tapak hingga persetujuan regulator tercapai dan ekosistem pulih.",
      clientBenefit: "Pendampingan konsisten dari studi kelayakan hingga tuntas audit inspektur.",
      icon: <Handshake className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8]" />
    }
  ];

  const commitments = [
    {
      title: "Standar Mutu Terukur",
      desc: "Dokumentasi dan analisis mengacu pada SOP baku sertifikasi.",
      icon: <Award className="w-4 h-4 sm:w-5 sm:h-5 text-[#1a683d]" />
    },
    {
      title: "Mitigasi Risiko Regulasi",
      desc: "Mencegah keterlambatan perizinan & potensi sanksi hukum.",
      icon: <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#1a683d]" />
    },
    {
      title: "Keberlanjutan Nyata",
      desc: "Mengharmonisasikan pemulihan alam dengan target bisnis.",
      icon: <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#1a683d]" />
    },
    {
      title: "Inovasi Geospasial",
      desc: "Pemanfaatan Web GIS & drone untuk audit transparan real-time.",
      icon: <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 text-[#1a683d]" />
    }
  ];

  return (
    <section id="keunggulan" className="py-14 sm:py-20 lg:py-28 bg-[#f8faf8] relative border-t border-slate-100 overflow-hidden">
      
      {/* Background Decorative Accent */}
      <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full bg-emerald-100/40 blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-teal-100/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl space-y-2 sm:space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#eaf5ee] text-[#1a683d] text-xs font-bold uppercase tracking-wider border border-[#1a683d]/20">
            Nilai Tambah & Keunggulan
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0c331e] tracking-tight leading-snug sm:leading-tight">
            Lebih dari Konsultan, Kami Mitra Strategis Anda
          </h2>

          <p className="text-xs sm:text-base text-slate-600 leading-relaxed font-normal">
            Kami tidak hanya merumuskan rekomendasi teknis di atas kertas, tetapi mengawal setiap tahap siklus proyek Anda untuk mencapai kepatuhan hukum penuh dan fungsi ekologis yang lestari.
          </p>
        </motion.div>

        {/* 3 Core Value Cards with Impact Proof Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {differentiators.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              whileHover={{ y: -5, transition: { duration: 0.25 } }}
              className="relative rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 p-5 sm:p-7 shadow-xs hover:border-[#1a683d]/50 hover:shadow-xl transition-all flex flex-col justify-between group overflow-hidden"
            >
              
              {/* Subtle Background Number Watermark */}
              <span className="absolute top-4 right-5 font-mono font-black text-4xl sm:text-5xl text-slate-100 group-hover:text-emerald-50 transition-colors pointer-events-none select-none">
                {item.num}
              </span>

              <div className="space-y-3 relative z-10">
                
                {/* Top Badge & Icon */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#eef7f1] text-[#1a683d] border border-[#1a683d]/20">
                    {item.tag}
                  </span>
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#0c321e] text-[#86efac] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                </div>

                {/* Card Title */}
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-slate-900 leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {item.desc}
                </p>

              </div>

              {/* Concrete Benefit for Client (Replacing the generic 'Nilai Pembeda' label) */}
              <div className="mt-5 pt-3.5 border-t border-slate-100 relative z-10 space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block">
                  Dampak bagi Klien:
                </span>
                <div className="flex items-start gap-1.5 text-xs font-semibold text-[#0c321e] leading-snug">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1a683d] shrink-0 mt-0.5" />
                  <span>{item.clientBenefit}</span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* 4 Komitmen Kami (Credibility & ESG Framework Strip) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 p-5 sm:p-8 lg:p-10 shadow-xs space-y-6"
        >
          <div className="max-w-2xl space-y-1">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#1a683d]">
              Prinsip Kerja & Tata Kelola
            </span>
            <h3 className="text-lg sm:text-2xl font-bold text-slate-900 tracking-tight">
              Komitmen Kualitas, Keberlanjutan & Inovasi
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Menjaga integritas layanan dengan standar kerja terukur bagi kepatuhan hukum dan pemulihan lanskap jangka panjang.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
            {commitments.map((com, idx) => (
              <div 
                key={idx} 
                className="p-4 rounded-xl sm:rounded-2xl bg-[#f8faf8] border border-slate-200/70 hover:border-[#1a683d]/40 transition-colors space-y-2"
              >
                <div className="w-9 h-9 rounded-xl bg-white text-[#1a683d] flex items-center justify-center border border-slate-200/70 shadow-2xs">
                  {com.icon}
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                  {com.title}
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed font-normal">
                  {com.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
