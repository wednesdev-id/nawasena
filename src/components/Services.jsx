import React, { useState } from 'react';
import { Sprout, Trees, MapPin, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { WhatsAppIcon } from './WhatsAppIcon';
import { companyData } from '../data/content';

export const Services = () => {
  const [activeTab, setActiveTab] = useState(0);

  const openWhatsAppService = (serviceTitle) => {
    const text = encodeURIComponent(`Halo Tim Nawasena, saya ingin konsultasi mengenai layanan: ${serviceTitle}.`);
    window.open(`https://wa.me/${companyData.contact.phoneClean}?text=${text}`, '_blank');
  };

  const services = [
    {
      id: "reklamasi",
      shortTitle: "Reklamasi Lahan",
      title: "Reklamasi Lahan Pascatambang",
      tagline: "Reklamasi Lahan untuk Ekosistem yang Pulih",
      description: "Kami membantu klien dalam perencanaan, pelaksanaan, dan pemantauan reklamasi lahan pada area tambang dan lahan terdegradasi, agar kembali berfungsi secara ekologis, sosial, dan ekonomi.",
      mobileDescription: "Rencana reklamasi dan pemulihan lahan tambang yang terukur.",
      // Exact photo from Page 5 of Company Profile (Surveyors on mine reclamation slope)
      image: "/images/reklamasi-field.jpg",
      scope: [
        "Penyusunan rencana reklamasi",
        "Pemilihan jenis tanaman dan media tanam",
        "Monitoring dan evaluasi pertumbuhan vegetasi",
        "Pelaporan dan dokumentasi"
      ],
      icon: <Sprout className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.6]" />
    },
    {
      id: "kehutanan",
      shortTitle: "Kehutanan",
      title: "Pengelolaan Kehutanan",
      tagline: "Pengelolaan Hutan yang Bertanggung Jawab",
      description: "Kami mendukung pengelolaan hutan secara lestari melalui pendekatan ilmiah dan teknologi terkini, untuk menjaga keanekaragaman hayati dan keberlanjutan sumber daya hutan.",
      mobileDescription: "Pengelolaan hutan lestari berbasis ilmiah dan teknologi.",
      // Exact photo from Page 6 of Company Profile (Misty rainforest canopy)
      image: "/images/kehutanan-forest.jpg",
      scope: [
        "Inventarisasi dan pemetaan kawasan hutan",
        "Analisis kesesuaian lahan",
        "Pengelolaan hutan dan perhutanan sosial",
        "Rehabilitasi dan restorasi ekosistem"
      ],
      icon: <Trees className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.6]" />
    },
    {
      id: "geospasial",
      shortTitle: "Geospasial",
      title: "Solusi Geospasial",
      tagline: "Data Spasial untuk Keputusan yang Lebih Baik",
      description: "Kami menyediakan layanan pemetaan dan analisis geospasial yang akurat dan terintegrasi untuk mendukung perencanaan, pemantauan, dan pengambilan keputusan berbasis data.",
      mobileDescription: "Pemetaan dan analisis akurat untuk keputusan berbasis data.",
      // Exact photo from Page 7 of Company Profile (Orthophoto river topography map)
      image: "/images/geospasial-map.jpg",
      scope: [
        "Pemetaan topografi dan tutupan lahan",
        "Analisis perubahan lahan (time series)",
        "Sistem informasi geografis (GIS)",
        "Penyajian peta dan dashboard spasial"
      ],
      icon: <MapPin className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.6]" />
    }
  ];

  return (
    <section id="layanan" className="py-14 sm:py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl space-y-2 sm:space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#eaf5ee] text-[#1a683d] text-xs font-bold uppercase tracking-wider">
            Layanan Terintegrasi
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0c331e] tracking-tight leading-snug sm:leading-tight">
            <span className="sm:hidden">Satu Mitra untuk Tiga Kebutuhan</span><span className="hidden sm:inline">Solusi Terpadu Reklamasi, Kehutanan & Geospasial</span>
          </h2>
          <p className="text-xs sm:text-base text-slate-600 leading-relaxed font-normal">
            <span className="sm:hidden">Pilih layanan yang paling sesuai dengan proyek Anda.</span><span className="hidden sm:inline">Layanan konsultasi multidisiplin untuk mendukung pengelolaan sumber daya alam yang patuh hukum, presisi secara spasial, dan lestari.</span>
          </p>
        </motion.div>

        {/* Interactive Tabs for Mobile & Desktop Navigation */}
        <div className="flex items-center gap-2 border-b border-slate-200 pb-2 overflow-x-auto no-scrollbar">
          {services.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap flex items-center gap-2 ${
                activeTab === idx
                  ? 'bg-[#0c321e] text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900'
              }`}
            >
              <span className={activeTab === idx ? 'text-[#86efac]' : 'text-slate-400'}>
                {idx === 0 && <Sprout className="w-4 h-4 inline" />}
                {idx === 1 && <Trees className="w-4 h-4 inline" />}
                {idx === 2 && <MapPin className="w-4 h-4 inline" />}
              </span>
              <span>{item.shortTitle}</span>
            </button>
          ))}
        </div>

        {/* Animated Active Service Showcase */}
        <AnimatePresence mode="wait">
          {services.map((service, index) => {
            if (index !== activeTab) return null;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="rounded-2xl sm:rounded-3xl bg-[#f8faf8] border border-slate-200/90 overflow-hidden shadow-sm p-5 sm:p-8 lg:p-12"
              >
                <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-center">
                  
                  {/* Text Details */}
                  <div className="lg:col-span-7 space-y-4 sm:space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#0c321e] text-[#86efac] flex items-center justify-center shrink-0 shadow-sm">
                        {service.icon}
                      </div>
                      <div>
                        <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#1a683d] block">
                          {service.title}
                        </span>
                        <h3 className="text-xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                          {service.tagline}
                        </h3>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed">
                      <span className="sm:hidden">{service.mobileDescription}</span>
                      <span className="hidden sm:inline">{service.description}</span>
                    </p>

                    {/* Scope Checklist: Clean & Compact for Mobile */}
                    <div className="space-y-2 pt-1">
                      <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-700">
                        Ruang Lingkup Teknis:
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700">
                        {service.scope.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2 p-2 rounded-lg bg-white border border-slate-200/80">
                            <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#1a683d] shrink-0 mt-0.5" />
                            <span className="leading-snug">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Button with Real WhatsApp Icon */}
                    <div className="pt-2">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => openWhatsAppService(service.title)}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#0c321e] hover:bg-[#155432] text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95"
                      >
                        <WhatsAppIcon className="w-4 h-4 text-[#25D366]" fill="#25D366" />
                        <span className="sm:hidden">Konsultasi via WhatsApp</span><span className="hidden sm:inline">Konsultasikan {service.shortTitle} via WhatsApp</span>
                      </motion.button>
                    </div>

                  </div>

                  {/* Photography: Authentic High-Res Photos from the PDF */}
                  <div className="lg:col-span-5">
                    <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-md border border-slate-200">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-52 sm:h-72 lg:h-96 object-cover object-center" 
                      />
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>

      </div>
    </section>
  );
};
