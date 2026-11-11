import React from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import { corporateProfile } from '../../domain/canonicalData';
import { Layers, Globe, Cloud, Truck, ArrowRight } from 'lucide-react';

interface CompetenciesSectionProps {
  onSelectFamily: (familyId: string) => void;
}

export const CompetenciesSection: React.FC<CompetenciesSectionProps> = ({ onSelectFamily }) => {
  const { t } = useLanguage();

  const areaIcons = [
    <Layers className="w-5 h-5 text-[#FF6A00]" key="comp" />,
    <Globe className="w-5 h-5 text-[#38BDF8]" key="geo" />,
    <Cloud className="w-5 h-5 text-[#22C55E]" key="cloud" />,
    <Truck className="w-5 h-5 text-[#FFB15C]" key="log" />,
  ];

  const familyMapping = ['compliance', 'geospatial', 'cloud_ops', 'logistics'];

  return (
    <section className="py-16 md:py-24 border-b border-[#263449] bg-[#111C2B]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-mono text-[#FF8A24] uppercase tracking-wider">
            {t('competencies.kicker', 'Core Specializations')}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#F4F7FA]">
            {t('competencies.title', 'High-assurance disciplines and production competencies.')}
          </h2>
          <p className="text-sm sm:text-base text-[#AAB7C7] leading-relaxed">
            {t(
              'competencies.subtitle',
              'From sub-second satellite band mathematics to character-offset legal bounding and FastMCP multi-cloud enclaves.'
            )}
          </p>
        </div>

        {/* 4 Core Competencies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {corporateProfile.focalAreas.map((area, index) => (
            <div
              key={area.id}
              className="p-6 bg-[#111C2B] border border-[#263449] rounded-xl hover:border-[#FF8A24]/60 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#172438] border border-[#263449] flex items-center justify-center mb-4">
                  {areaIcons[index % areaIcons.length]}
                </div>

                <h3 className="text-base font-bold text-[#F4F7FA] mb-2 group-hover:text-[#FF8A24] transition-colors">
                  {area.name}
                </h3>

                <p className="text-xs text-[#AAB7C7] leading-relaxed mb-4">
                  {area.description}
                </p>
              </div>

              <div>
                {/* Clean unboxed tech tags with dot separators */}
                <div className="text-[11px] font-mono text-[#8190A3] mb-4 line-clamp-2">
                  {area.techStack.map((tech, idx) => (
                    <span key={tech}>
                      <span className="text-[#AAB7C7]">{tech}</span>
                      {idx < area.techStack.length - 1 && <span className="mx-1 text-[#263449]">·</span>}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => onSelectFamily(familyMapping[index] || 'compliance')}
                  className="text-xs font-medium text-[#FF6A00] hover:text-[#FF8A24] flex items-center gap-1 cursor-pointer pt-2 border-t border-[#263449]/70"
                >
                  <span>Filter Products</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
