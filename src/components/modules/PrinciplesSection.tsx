import React from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import { corporateProfile } from '../../domain/canonicalData';
import { CheckCircle2, Shield, Scale, Cpu } from 'lucide-react';

export const PrinciplesSection: React.FC = () => {
  const { t } = useLanguage();

  const icons = [
    <Scale className="w-5 h-5 text-[#FF6A00]" key="scale" />,
    <Shield className="w-5 h-5 text-[#38BDF8]" key="shield" />,
    <Cpu className="w-5 h-5 text-[#22C55E]" key="cpu" />,
    <CheckCircle2 className="w-5 h-5 text-[#FFB15C]" key="check" />,
  ];

  return (
    <section className="py-16 md:py-24 border-b border-[#263449] bg-[#07111F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-mono text-[#FF8A24] uppercase tracking-wider">
            {t('principles.kicker', 'Foundational Directives')}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#F4F7FA]">
            {t('principles.title', 'Engineering principles grounded in verifiable evidence.')}
          </h2>
          <p className="text-sm sm:text-base text-[#AAB7C7] leading-relaxed">
            {t(
              'principles.subtitle',
              'We reject ungrounded AI claims. Every platform is governed by formal software contracts and independent observation.'
            )}
          </p>
        </div>

        {/* 4 Architectural Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {corporateProfile.engineeringPrinciples.map((principle, index) => (
            <div
              key={principle.id}
              className="p-6 bg-[#111C2B] border border-[#263449] rounded-xl hover:border-[#374B67] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#172438] border border-[#263449] flex items-center justify-center">
                    {icons[index % icons.length]}
                  </div>
                  <span className="font-mono text-xs text-[#8190A3]">
                    0{index + 1}. Directive
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-[#F4F7FA] mb-2 group-hover:text-[#FF8A24] transition-colors">
                  {principle.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#AAB7C7] leading-relaxed">
                  {principle.description}
                </p>
              </div>

              {/* Claim-to-Proof Adjacency */}
              <div className="mt-6 pt-4 border-t border-[#263449]/70 text-xs">
                <span className="font-mono text-[11px] text-[#8190A3] uppercase block mb-1">
                  Verification Method:
                </span>
                <span className="font-mono text-xs text-[#38BDF8]">
                  {principle.evidenceMethod}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
