import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { WhatsAppIcon } from './WhatsAppIcon';
import { companyData } from '../data/content';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Tentang', href: '#tentang' },
    { name: 'Layanan', href: '#layanan' },
    { name: 'Metodologi', href: '#metodologi' },
    { name: 'Studi Kasus', href: '#studi-kasus' },
    { name: 'Keunggulan', href: '#keunggulan' },
    { name: 'Kontak', href: '#kontak' },
  ];

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent("Halo Tim Nawasena, saya ingin konsultasi mengenai kebutuhan proyek lingkungan, reklamasi, atau kehutanan.");
    window.open(`https://wa.me/${companyData.contact.phoneClean}?text=${text}`, '_blank');
  };

  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm py-2.5 sm:py-3' 
          : 'bg-white/90 backdrop-blur-sm border-b border-slate-100 py-3 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <motion.a 
            href="#" 
            className="flex items-center"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <img 
              src="/images/nawasena-logo.jpg" 
              alt="NAWASENA — Beyond Compliance. Enabling Sustainability" 
              className="h-8 sm:h-10 md:h-11 w-auto object-contain"
            />
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="px-3 py-1.5 text-sm font-semibold text-slate-700 hover:text-[#0c321e] hover:bg-slate-50 rounded-lg transition-colors"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Desktop CTA Action with Real WhatsApp Logo */}
          <div className="hidden lg:flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={openWhatsApp}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-[#0c321e] hover:bg-[#144f30] shadow-sm hover:shadow transition-all"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366]" fill="#25D366" />
              <span>Konsultasi WhatsApp</span>
            </motion.button>
          </div>

          {/* Mobile Hamburger Toggle Only (WhatsApp already available via Floating Button) */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Animated Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-5 space-y-2 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col space-y-0.5">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left px-3 py-2 text-sm font-semibold text-slate-800 hover:text-[#0c321e] hover:bg-slate-50 rounded-lg active:bg-slate-100"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
