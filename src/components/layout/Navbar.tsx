import React, { useState } from 'react';
import { BrandIdentity } from '../ui/BrandIdentity';
import { useLanguage } from '../../i18n/LanguageContext';
import { SupportedLanguage } from '../../domain/types';
import { Button } from '../ui/Button';
import { Terminal, Globe, Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const navLinks = [
    { id: 'overview', label: t('nav.home', 'Overview') },
    { id: 'products', label: t('nav.products', 'Products') },
    { id: 'technical', label: t('nav.technical', 'Technical Knowledge') },
    { id: 'intelligence', label: t('nav.intelligence', 'Operational Intelligence') },
    { id: 'explorer', label: t('nav.explorer', 'Engineering State') },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  const handleLanguageChange = (lang: SupportedLanguage) => {
    setLanguage(lang);
    setLangDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#07111F]/90 backdrop-blur-md border-b border-[#263449]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16">
          {/* Zone 1: Prominent Brand Identity with Official Option A Symbol & Typography */}
          <button
            onClick={() => handleLinkClick('overview')}
            className="flex items-center gap-3 text-left group cursor-pointer shrink-0"
            aria-label="TRIMINDSLABS Corporate Home"
          >
            {/* High-visibility symbol badge with orange ambient glow */}
            <div className="relative p-1 bg-[#010C1B] border border-[#263449] rounded-lg shadow-[0_0_14px_rgba(255,106,0,0.22)] group-hover:border-[#FF6A00]/70 group-hover:shadow-[0_0_20px_rgba(255,106,0,0.4)] transition-all flex items-center justify-center shrink-0">
              <BrandIdentity variant="symbol" priority className="h-8 w-auto max-w-10 group-hover:scale-105 transition-transform" />
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center tracking-tight leading-none">
                <span className="text-base sm:text-lg font-black text-[#F4F7FA]">TRIMINDS</span>
                <span className="text-base sm:text-lg font-black text-[#FF6A00]">LABS</span>
              </div>
              <span className="text-[9px] font-mono tracking-wider uppercase text-[#8190A3] hidden sm:block mt-1">
                Engineering Intelligent Systems
              </span>
            </div>
          </button>

          {/* Zone 2: 4–5 clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs sm:text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 cursor-pointer ${
                    isActive
                      ? 'text-[#FF6A00] border-[#FF6A00]'
                      : 'text-[#AAB7C7] border-transparent hover:text-[#F4F7FA] hover:border-[#263449]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Language Selector + 1 Primary Action Button */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono text-[#AAB7C7] bg-[#111C2B] border border-[#263449] hover:border-[#374B67] hover:text-[#F4F7FA] rounded-md transition-colors cursor-pointer"
                aria-label="Switch Language"
              >
                <Globe className="w-3.5 h-3.5 text-[#FF8A24]" />
                <span className="uppercase">{language}</span>
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-1.5 w-32 bg-[#172438] border border-[#263449] rounded-lg shadow-xl py-1 text-xs font-medium z-50">
                  <button
                    onClick={() => handleLanguageChange('en')}
                    className={`w-full text-left px-3 py-1.5 flex items-center justify-between hover:bg-[#111C2B] cursor-pointer ${
                      language === 'en' ? 'text-[#FF6A00] font-semibold' : 'text-[#F4F7FA]'
                    }`}
                  >
                    <span>English</span>
                    <span className="text-[10px] text-[#8190A3] font-mono">EN</span>
                  </button>
                  <button
                    onClick={() => handleLanguageChange('pt')}
                    className={`w-full text-left px-3 py-1.5 flex items-center justify-between hover:bg-[#111C2B] cursor-pointer ${
                      language === 'pt' ? 'text-[#FF6A00] font-semibold' : 'text-[#F4F7FA]'
                    }`}
                  >
                    <span>Português</span>
                    <span className="text-[10px] text-[#8190A3] font-mono">PT</span>
                  </button>
                  <button
                    onClick={() => handleLanguageChange('es')}
                    className={`w-full text-left px-3 py-1.5 flex items-center justify-between hover:bg-[#111C2B] cursor-pointer ${
                      language === 'es' ? 'text-[#FF6A00] font-semibold' : 'text-[#F4F7FA]'
                    }`}
                  >
                    <span>Español</span>
                    <span className="text-[10px] text-[#8190A3] font-mono">ES</span>
                  </button>
                </div>
              )}
            </div>

            {/* Primary Action Button (Access Engineering State) */}
            <Button
              variant="primary"
              size="sm"
              icon={<Terminal className="w-3.5 h-3.5" />}
              onClick={() => handleLinkClick('explorer')}
              className="hidden sm:inline-flex"
            >
              {t('nav.cta', 'Access Engineering State')}
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#AAB7C7] hover:text-[#F4F7FA] hover:bg-[#111C2B] rounded-lg border border-[#263449] cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-[#263449] space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`block w-full text-left px-3 py-2 text-sm rounded-md transition-colors cursor-pointer ${
                  activeSection === link.id
                    ? 'bg-[#111C2B] text-[#FF6A00] font-semibold border-l-2 border-[#FF6A00]'
                    : 'text-[#AAB7C7] hover:bg-[#111C2B] hover:text-[#F4F7FA]'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2">
              <Button
                variant="primary"
                size="sm"
                icon={<Terminal className="w-3.5 h-3.5" />}
                onClick={() => handleLinkClick('explorer')}
                className="w-full justify-center"
              >
                {t('nav.cta', 'Access Engineering State')}
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
