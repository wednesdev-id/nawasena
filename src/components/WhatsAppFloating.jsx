import React from 'react';
import { motion } from 'framer-motion';
import { WhatsAppBadge } from './WhatsAppIcon';
import { companyData } from '../data/content';

export const WhatsAppFloating = () => {
  const openWhatsApp = () => {
    const text = encodeURIComponent("Halo Tim Nawasena, saya ingin konsultasi mengenai layanan konsultasi lingkungan, reklamasi, atau kehutanan.");
    window.open(`https://wa.me/${companyData.contact.phoneClean}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50">
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5, type: "spring" }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        onClick={openWhatsApp}
        className="group flex items-center gap-2.5 px-3.5 py-3 sm:px-4 sm:py-3.5 rounded-full bg-[#0c321e] hover:bg-[#155432] text-white font-bold shadow-2xl transition-all border border-emerald-500/40"
        aria-label="Konsultasi WhatsApp Nawasena"
      >
        <span className="relative flex items-center justify-center">
          <WhatsAppBadge className="w-5 h-5 sm:w-6 sm:h-6" />
          <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ade80] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#22c55e]"></span>
          </span>
        </span>
        <span className="text-xs font-bold tracking-wide hidden sm:inline">
          Konsultasi WhatsApp
        </span>
      </motion.button>
    </div>
  );
};
