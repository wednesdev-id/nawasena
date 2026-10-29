import React, { useState } from 'react';
import { MapPin, Phone, Mail, Globe, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { WhatsAppIcon } from './WhatsAppIcon';
import { companyData } from '../data/content';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    service: 'Reklamasi Lahan',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Halo Tim Konsultan Nawasena,

Saya ingin mendiskusikan kebutuhan konsultasi proyek:
• Nama: ${formData.name}
• Perusahaan: ${formData.company || '-'}
• No. WhatsApp: ${formData.phone}
• Bidang Layanan: ${formData.service}
• Pesan / Lokasi: ${formData.message}

Mohon informasi waktu untuk diskusi teknis lebih lanjut. Terima kasih.`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${companyData.contact.phoneClean}?text=${encoded}`, '_blank');
  };

  return (
    <section id="kontak" className="py-14 sm:py-20 lg:py-28 bg-[#0c321e] text-white relative overflow-hidden">

      {/* Background aerial forest and river photo: Exact Photo from Page 12 */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <img
          src="/images/contact-forest.jpg"
          alt="Lanskap Hutan Nawasena"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#0c321e]/85" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10 sm:space-y-14">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl space-y-2 sm:space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-emerald-300 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
            Hubungi Kami
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-snug sm:leading-tight">
            <span className="sm:hidden">Diskusikan Kebutuhan Proyek Anda</span><span className="hidden sm:inline">Mari Berkolaborasi untuk Masa Depan yang Berkelanjutan</span>
          </h2>

          <p className="text-xs sm:text-base text-emerald-100/90 leading-relaxed font-normal">
            <span className="sm:hidden">Konsultasikan kebutuhan reklamasi, kehutanan, atau geospasial.</span><span className="hidden sm:inline">Kami siap menjadi mitra strategis Anda dalam pengelolaan lingkungan, reklamasi, dan kehutanan. Hubungi kami untuk diskusi kebutuhan konsultasi.</span>
          </p>
        </motion.div>

        {/* Contact Details & Inquiry Form Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-start">

          {/* Left: Official Contact Details (Barcode & quick button removed per request) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6 sm:space-y-8"
          >

            <div className="space-y-5 sm:space-y-6">

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-emerald-400/40 flex items-center justify-center text-[#86efac] shrink-0 bg-white/5 backdrop-blur-sm">
                  <MapPin className="w-5 h-5 stroke-[1.8]" />
                </div>
                <div>
                  <div className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-emerald-300/80">Alamat Kantor</div>
                  <div className="text-white text-sm sm:text-base font-medium mt-0.5">
                    Jl. Contoh Raya No. 123, Yogyakarta
                  </div>
                </div>
              </div>

              {/* Phone / WA */}
              <a
                href={`https://wa.me/${companyData.contact.phoneClean}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-emerald-400/40 flex items-center justify-center text-[#86efac] shrink-0 bg-white/5 backdrop-blur-sm group-hover:bg-[#86efac] group-hover:text-black transition-colors">
                  <WhatsAppIcon className="w-5 h-5" fill="currentColor" />
                </div>
                <div>
                  <div className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-emerald-300/80">Telepon / WhatsApp</div>
                  <div className="text-white text-sm sm:text-base font-medium mt-0.5 group-hover:text-[#86efac] font-mono">
                    +62 812 3456 7890
                  </div>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:halo@nawasena.id"
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-emerald-400/40 flex items-center justify-center text-[#86efac] shrink-0 bg-white/5 backdrop-blur-sm group-hover:bg-[#86efac] group-hover:text-black transition-colors">
                  <Mail className="w-5 h-5 stroke-[1.8]" />
                </div>
                <div>
                  <div className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-emerald-300/80">Email Resmi</div>
                  <div className="text-white text-sm sm:text-base font-medium mt-0.5 group-hover:text-[#86efac]">
                    halo@nawasena.id
                  </div>
                </div>
              </a>

              {/* Website */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-emerald-400/40 flex items-center justify-center text-[#86efac] shrink-0 bg-white/5 backdrop-blur-sm">
                  <Globe className="w-5 h-5 stroke-[1.8]" />
                </div>
                <div>
                  <div className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-emerald-300/80">Website Resmi</div>
                  <div className="text-white text-sm sm:text-base font-medium mt-0.5 font-mono">
                    www.indonawasena.id
                  </div>
                </div>
              </div>

            </div>

          </motion.div>

          {/* Right: Clean White Consultation Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="rounded-2xl sm:rounded-3xl bg-white text-slate-800 p-5 sm:p-8 lg:p-10 shadow-xl border border-slate-100 space-y-4 sm:space-y-5">

              <div className="space-y-1">
                <h3 className="text-lg sm:text-2xl font-bold text-[#0c331e]">
                  Formulir Diskusi Proyek
                </h3>
                <p className="text-xs text-slate-500">
                  Sampaikan rencana kebutuhan konsultasi perusahaan Anda untuk kami tindak lanjuti.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3.5">

                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Nama Lengkap"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[#1a683d]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                      Perusahaan / Instansi
                    </label>
                    <input
                      type="text"
                      placeholder="Nama Perusahaan"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[#1a683d]"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                      Nomor WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="0812-XXXX-XXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[#1a683d]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                      Layanan yang Dibutuhkan
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[#1a683d] bg-white"
                    >
                      <option value="Reklamasi Lahan">Reklamasi Lahan</option>
                      <option value="Pengelolaan Kehutanan">Pengelolaan Kehutanan</option>
                      <option value="Data Geospasial & GIS">Data Geospasial & GIS</option>
                      <option value="Konsultasi Lingkungan / AMDAL">Konsultasi Lingkungan / AMDAL</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                    Catatan atau Lokasi Proyek
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Sampaikan gambaran singkat wilayah konsesi atau target kebutuhan audit..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[#1a683d]"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-3.5 px-5 rounded-xl bg-[#0c321e] hover:bg-[#155432] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366]" fill="#25D366" />
                  <span>Kirim Pesan via WhatsApp</span>
                </motion.button>

                <div className="flex items-center justify-center gap-1.5 text-[10px] sm:text-[11px] text-slate-400 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#1a683d]" />
                  <span>Kerahasiaan data teknis dan identitas perusahaan terjamin.</span>
                </div>

              </form>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
