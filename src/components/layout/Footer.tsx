import React from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import { Terminal, Shield, ArrowUpRight, Github } from 'lucide-react';
import primaryLockupImg from '../../assets/brand/trimindslabs-primary-lockup.png';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  return (
    <footer className="w-full bg-[#07111F] border-t border-[#263449] pt-14 pb-10 text-xs text-[#8190A3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Col 1: Identity with Official Primary Lockup */}
          <div className="md:col-span-2 space-y-4">
            <div className="inline-block p-2 bg-[#010C1B] border border-[#263449] rounded-xl shadow-lg">
              <img
                src={primaryLockupImg}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/trimindslabs-primary-lockup.png';
                }}
                alt="TRIMINDSLABS — Engineering Intelligent Systems"
                className="h-10 sm:h-12 w-auto object-contain rounded-md"
              />
            </div>
            <p className="text-xs text-[#AAB7C7] max-w-md leading-relaxed">
              {t(
                'footer.tagline',
                'Engineering Intelligent Systems with deterministic software contracts, verifiable document provenance, and independent operational auditing.'
              )}
            </p>
            <div className="pt-1 text-[11px] font-mono text-[#8190A3] space-y-1">
              <div>{t('footer.governanceNotice', 'Release Governance · WCAG 2.2 AA · Balanced Dark-First Architecture')}</div>
              <div className="text-[#38BDF8]">{t('footer.ecosystemAuditRef', 'Ecosystem Audit Service: europe-west1 (Cloud Run)')}</div>
            </div>
          </div>

          {/* Col 2: Navigation Mirror */}
          <div className="space-y-3">
            <div className="font-mono text-xs text-[#F4F7FA] uppercase tracking-wider">
              Platform Architecture
            </div>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('overview')}
                  className="hover:text-[#F4F7FA] transition-colors cursor-pointer"
                >
                  Overview & Principles
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-[#F4F7FA] transition-colors cursor-pointer"
                >
                  Product Catalog
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('technical')}
                  className="hover:text-[#F4F7FA] transition-colors cursor-pointer"
                >
                  Technical Knowledge & ADRs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('intelligence')}
                  className="hover:text-[#F4F7FA] transition-colors cursor-pointer"
                >
                  Operational Intelligence
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('explorer')}
                  className="text-[#FF6A00] hover:text-[#FF8A24] font-medium transition-colors cursor-pointer flex items-center gap-1"
                >
                  <span>Engineering State Explorer</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Official Repositories & Contact */}
          <div className="space-y-3">
            <div className="font-mono text-xs text-[#F4F7FA] uppercase tracking-wider">
              Governance & Channels
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://github.com/RodrigoDiasDeOliveira"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#F4F7FA] flex items-center gap-1.5 transition-colors"
                >
                  <Github className="w-3.5 h-3.5 text-[#FF8A24]" />
                  <span>GitHub Organization</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/RodrigoDiasDeOliveira/trimindslabs-corporate-website-v3"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#F4F7FA] flex items-center gap-1.5 transition-colors"
                >
                  <Shield className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>V3 Historical Reference</span>
                </a>
              </li>
              <li className="pt-2">
                <span className="block text-[11px] text-[#8190A3]">Corporate Inquiries:</span>
                <span className="font-mono text-[#F4F7FA]">contact@trimindslabs.com</span>
              </li>
              <li>
                <span className="block text-[11px] text-[#8190A3]">Security Disclosure:</span>
                <span className="font-mono text-[#F4F7FA]">security@trimindslabs.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[#263449]/70 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <div>{t('footer.copyright', '© 2026 TRIMINDSLABS. All rights reserved.')}</div>
          <div className="text-[#8190A3] font-mono">
            {t('footer.v3ArchiveNote', 'Legacy reference V3 website preserved independently for historical and rollback verification.')}
          </div>
        </div>
      </div>
    </footer>
  );
};
