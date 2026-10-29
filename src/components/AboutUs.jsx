import React from 'react';
import { Shield, Sprout, Trees, MapPin, Eye, Target, Compass, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export const AboutUs = () => {
  const pillars = [
    {
      title: "Konsultasi Lingkungan",
      desc: "Membantu klien mengelola risiko, memanfaatkan potensi sumber daya, dan mengurangi dampak lingkungan secara bertanggung jawab.",
      mobileDesc: "Pengelolaan risiko dan mitigasi dampak lingkungan secara bertanggung jawab.",
      icon: <Shield className="w-5 h-5 stroke-[1.8]" />
    },
    {
      title: "Reklamasi Lahan",
      desc: "Perencanaan, pelaksanaan, dan pemantauan reklamasi lahan agar kembali berfungsi secara ekologis, sosial, dan ekonomi.",
      mobileDesc: "Perencanaan, pelaksanaan, dan pemantauan reklamasi lahan terpadu.",
      icon: <Sprout className="w-5 h-5 stroke-[1.8]" />
    },
    {
      title: "Kehutanan",
      desc: "Mendukung pengelolaan hutan secara lestari melalui inventarisasi, analisis kesesuaian lahan, dan restorasi ekosistem.",
      mobileDesc: "Inventarisasi hutan, analisis kesesuaian lahan, dan restorasi ekosistem.",
      icon: <Trees className="w-5 h-5 stroke-[1.8]" />
    },
    {
      title: "Geospasial",
      desc: "Layanan pemetaan dan analisis spasial akurat untuk mendukung perencanaan, pemantauan, dan pengambilan keputusan berbasis data.",
      mobileDesc: "Pemetaan akurat dan analisis data spasial untuk pengambilan keputusan.",
      icon: <MapPin className="w-5 h-5 stroke-[1.8]" />
    }
  ];

  return (
    <section id="tentang" className="py-14 sm:py-20 lg:py-28 bg-[#fbfdfb] relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Narrative Intro: Problem & Philosophy */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-4 sm:space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#eaf5ee] text-[#1a683d] text-xs font-bold uppercase tracking-wider">
              Tentang Nawasena
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0c331e] tracking-tight leading-snug sm:leading-tight">
              <span className="sm:hidden">Kepatuhan yang Menghasilkan Dampak Nyata</span>
              <span className="hidden sm:inline">Menjembatani Kepatuhan Regulasi dengan Keberlanjutan Nyata</span>
            </h2>

            {/* Mobile scannable text vs desktop full text */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-700 leading-relaxed font-normal">
              <strong className="font-bold text-slate-900">NAWASENA</strong> adalah konsultan lingkungan, reklamasi, dan kehutanan terintegrasi dengan dukungan inteligensi geospasial presisi.
            </p>

            <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">
              <span className="sm:hidden">Solusi terukur untuk risiko lingkungan, kepatuhan, dan pemulihan lahan.</span>
              <span className="hidden sm:inline">Kami membantu klien mengelola risiko, memanfaatkan potensi sumber daya alam, dan mengurangi dampak lingkungan secara bertanggung jawab melalui pendekatan ilmiah, data yang akurat, serta pemahaman mendalam terhadap keberlanjutan lanskap.</span>
            </p>

            {/* 4 Pillars Grid with Staggered Motion */}
            <div className="pt-2 grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-4">
              {pillars.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-[#1a683d]/50 hover:shadow-md transition-all group"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#eef7f1] text-[#1a683d] flex items-center justify-center mb-2.5 group-hover:bg-[#1a683d] group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="hidden text-xs text-slate-600 leading-relaxed sm:block">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>

          </motion.div>

          {/* Right Column: Exact Page 2 Road Photography from Company Profile */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-slate-200">
              <img 
                src="/images/about-road.jpg" 
                alt="Bentang Alam Nawasena"
                className="w-full h-64 sm:h-80 lg:h-[480px] object-cover object-center" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-white space-y-1">
                <span className="text-[10px] sm:text-[11px] font-mono text-[#86efac] uppercase tracking-wider font-bold">
                  Sains • Data Spasial • Solusi Lapangan
                </span>
                <p className="text-xs sm:text-sm font-semibold text-slate-100">
                  Pemulihan fungsi ekologis, sosial, dan ekonomi pada setiap hektar lahan terdegradasi.
                </p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Visi, Misi & 5 Nilai Inti: Unified Architectural Feature */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="relative rounded-2xl sm:rounded-3xl bg-[#0c321e] text-white p-6 sm:p-10 lg:p-14 shadow-xl overflow-hidden"
        >
          
          {/* Subtle Topographic Vector Background */}
          <div className="absolute inset-0 pointer-events-none sm:hidden">
            <svg className="h-full w-full opacity-20" viewBox="0 0 400 760" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M -30,70 C 55,18 145,115 235,62 S 355,80 430,40" fill="none" stroke="#86efac" strokeWidth="1.4" />
              <path d="M -35,125 C 55,70 145,174 250,112 S 345,135 435,86" fill="none" stroke="#86efac" strokeWidth="1.4" />
              <path d="M -25,238 C 65,178 145,292 245,218 S 350,240 425,188" fill="none" stroke="#86efac" strokeWidth="1.4" />
              <path d="M -40,315 C 42,262 152,355 240,295 S 350,320 440,266" fill="none" stroke="#86efac" strokeWidth="1.4" />
              <path d="M -30,450 C 72,377 150,502 252,432 S 345,455 430,405" fill="none" stroke="#86efac" strokeWidth="1.4" />
              <path d="M -42,535 C 48,470 150,580 245,510 S 355,535 440,478" fill="none" stroke="#86efac" strokeWidth="1.4" />
              <path d="M -25,675 C 65,610 150,720 255,645 S 355,678 430,620" fill="none" stroke="#86efac" strokeWidth="1.4" />
            </svg>
          </div>
          <div className="absolute inset-0 hidden opacity-15 pointer-events-none sm:block">
            <svg className="w-full h-full object-cover" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
              <path d="M 0,80 C 180,20 320,140 500,70 S 700,100 800,80" fill="none" stroke="#86efac" strokeWidth="1.2" />
              <path d="M 0,180 C 190,110 380,240 580,150 S 740,190 800,180" fill="none" stroke="#86efac" strokeWidth="1.2" />
            </svg>
          </div>

          <div className="relative z-10 space-y-6 sm:space-y-8">
            
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-300">
                Landasan Setiap Langkah Kami
              </span>
              <h3 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight mt-0.5">
                Visi, Misi & Nilai Budaya Nawasena
              </h3>
            </div>

            {/* Visi & Misi Side-by-Side */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8">
              
              <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full border border-emerald-400/50 flex items-center justify-center text-[#86efac] bg-emerald-950/40">
                    <Eye className="w-4 h-4 stroke-[1.8]" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-white">Visi</h4>
                </div>
                <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed font-normal">
                  "Menjadi mitra terpercaya dalam pengelolaan lingkungan, reklamasi, dan kehutanan untuk masa depan yang berkelanjutan."
                </p>
              </div>

              <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm space-y-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full border border-emerald-400/50 flex items-center justify-center text-[#86efac] bg-emerald-950/40">
                    <Target className="w-4 h-4 stroke-[1.8]" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-white">Misi</h4>
                </div>
                <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed font-normal">
                  "Memberikan layanan konsultasi yang profesional, berbasis ilmu pengetahuan dan teknologi, serta berorientasi pada solusi nyata bagi klien dan lingkungan."
                </p>
              </div>

            </div>

            {/* 5 Core Values Pill Strip */}
            <div className="pt-4 border-t border-emerald-800/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-white">
                <Compass className="w-4 h-4 text-[#86efac]" />
                <span>5 Nilai Budaya Kami:</span>
              </div>

              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-semibold text-emerald-100">
                <span className="px-2.5 py-1 rounded-md bg-emerald-950/80 border border-emerald-700/50">Integritas</span>
                <span className="px-2.5 py-1 rounded-md bg-emerald-950/80 border border-emerald-700/50">Profesionalisme</span>
                <span className="px-2.5 py-1 rounded-md bg-emerald-950/80 border border-emerald-700/50">Kolaborasi</span>
                <span className="px-2.5 py-1 rounded-md bg-emerald-950/80 border border-emerald-700/50">Keberlanjutan</span>
                <span className="px-2.5 py-1 rounded-md bg-emerald-950/80 border border-emerald-700/50">Inovasi</span>
              </div>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};
