import React from 'react';
import { Product } from '../../domain/types';
import { useLanguage } from '../../i18n/LanguageContext';
import { StatusBadge } from '../ui/StatusBadge';
import { ArrowRight, Terminal, Cpu } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect }) => {
  const { language, t } = useLanguage();

  const subtitle = product.subtitle[language] || product.subtitle.en;
  const honestScope = product.honestScope[language] || product.honestScope.en;
  const sector = product.sector[language] || product.sector.en;

  return (
    <div className="p-6 bg-[#111C2B] border border-[#263449] rounded-xl hover:border-[#FF8A24]/60 transition-all flex flex-col justify-between group shadow-sm">
      <div className="space-y-4">
        {/* Top unboxed metadata: Domain · TruthStatus · OperationalStage */}
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#8190A3]">
            <span className="text-[#38BDF8] uppercase tracking-wider">{product.tag}</span>
            <span aria-hidden="true">·</span>
            <span>{sector}</span>
          </div>

          <StatusBadge status={product.operationalStage} />
        </div>

        {/* Product Title */}
        <div>
          <h3 className="text-xl font-bold text-[#F4F7FA] group-hover:text-[#FF8A24] transition-colors tracking-tight">
            {product.name}
          </h3>
          <p className="text-xs text-[#AAB7C7] mt-1 font-mono">
            {product.canonicalName}
          </p>
        </div>

        {/* Subtitle / Value Proposition */}
        <p className="text-xs sm:text-sm text-[#F4F7FA] font-medium leading-relaxed">
          {subtitle}
        </p>

        {/* Honest Scope & Boundaries */}
        <div className="p-3 bg-[#07111F] border border-[#263449]/70 rounded-lg text-xs text-[#AAB7C7] leading-relaxed">
          <span className="font-mono text-[10px] text-[#FFB15C] uppercase block mb-1">
            Honest Scope & Negative Boundaries:
          </span>
          <p className="line-clamp-3">{honestScope}</p>
        </div>

        {/* Real Technologies unboxed list */}
        <div className="text-[11px] font-mono text-[#8190A3] flex flex-wrap items-center gap-1.5 pt-1">
          <Cpu className="w-3.5 h-3.5 text-[#38BDF8]" />
          {product.realTechnologies.languages?.map((lang, idx) => (
            <span key={lang}>
              <span className="text-[#AAB7C7]">{lang}</span>
              {idx < (product.realTechnologies.languages?.length || 0) - 1 && <span>,</span>}
            </span>
          ))}
          {product.realTechnologies.frameworks?.slice(0, 2).map((fw) => (
            <span key={fw} className="text-[#8190A3]">
              · {fw}
            </span>
          ))}
          {product.realTechnologies.cloud?.slice(0, 1).map((c) => (
            <span key={c} className="text-[#38BDF8]">
              · {c}
            </span>
          ))}
        </div>
      </div>

      {/* Card Action */}
      <div className="mt-6 pt-4 border-t border-[#263449]/70 flex items-center justify-between">
        <span className="text-[11px] font-mono text-[#22C55E]">
          {product.realArchitectureVerification.coherenceScore}
        </span>
        <button
          onClick={() => onSelect(product)}
          className="text-xs font-semibold text-[#FF6A00] group-hover:text-[#FF8A24] flex items-center gap-1.5 transition-colors cursor-pointer"
        >
          <span>{t('catalog.viewDetails', 'Inspect Architecture & Evidence')}</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
};
