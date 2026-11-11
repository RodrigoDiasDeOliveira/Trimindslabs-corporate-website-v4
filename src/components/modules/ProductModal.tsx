import React, { useState } from 'react';
import { Product } from '../../domain/types';
import { useLanguage } from '../../i18n/LanguageContext';
import { Modal } from '../ui/Modal';
import { StatusBadge } from '../ui/StatusBadge';
import {
  Layers,
  ShieldCheck,
  Cpu,
  FileText,
  Activity,
  Github,
  ExternalLink,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'arch' | 'verification' | 'tech' | 'decisions' | 'results'>('arch');

  if (!product) return null;

  const subtitle = product.subtitle[language] || product.subtitle.en;
  const problem = product.problem[language] || product.problem.en;
  const context = product.context[language] || product.context.en;
  const whatItProves = product.whatItProves[language] || product.whatItProves.en;
  const honestScope = product.honestScope[language] || product.honestScope.en;

  const tabs = [
    { id: 'arch', label: t('productModal.tabArchitecture', 'Architecture & Topology'), icon: <Layers className="w-3.5 h-3.5" /> },
    { id: 'verification', label: t('productModal.tabVerification', 'Coherence Verification'), icon: <ShieldCheck className="w-3.5 h-3.5" /> },
    { id: 'tech', label: t('productModal.tabTech', 'Technologies & Infrastructure'), icon: <Cpu className="w-3.5 h-3.5" /> },
    { id: 'decisions', label: t('productModal.tabDecisions', 'Engineering ADRs'), icon: <FileText className="w-3.5 h-3.5" /> },
    { id: 'results', label: t('productModal.tabChallenges', 'Metrics & Results'), icon: <Activity className="w-3.5 h-3.5" /> },
  ];

  return (
    <Modal
      isOpen={!!product}
      onClose={onClose}
      title={product.name}
      subtitle={`${product.canonicalName} · ${product.tag}`}
      maxWidth="5xl"
    >
      {/* Top Meta Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-4 bg-[#07111F] rounded-xl border border-[#263449]">
        <div className="flex flex-wrap items-center gap-3">
          <StatusBadge status={product.operationalStage} />
          <span className="text-xs font-mono text-[#8190A3]">Truth Status:</span>
          <span className="text-xs font-mono font-semibold text-[#22C55E] uppercase">
            {product.truthStatus}
          </span>
          <span className="text-xs font-mono text-[#8190A3]">·</span>
          <span className="text-xs font-mono text-[#38BDF8]">
            Coherence: {product.realArchitectureVerification.coherenceScore}
          </span>
        </div>

        <div className="flex items-center gap-3">
          {product.repository?.url && (
            <a
              href={product.repository.url}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-mono text-[#F4F7FA] hover:text-[#FF8A24] flex items-center gap-1.5 transition-colors"
            >
              <Github className="w-3.5 h-3.5 text-[#FF8A24]" />
              <span>{product.repository.name}</span>
            </a>
          )}
          {product.deployment?.url && (
            <a
              href={product.deployment.url}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-mono text-[#38BDF8] hover:text-[#FF8A24] flex items-center gap-1.5 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Service URL</span>
            </a>
          )}
        </div>
      </div>

      {/* Honest Scope Callout */}
      <div className="p-4 bg-[#172438] border border-[#263449] rounded-xl space-y-2 text-xs">
        <div className="font-mono text-[#FFB15C] uppercase font-semibold flex items-center gap-1.5">
          <AlertTriangle className="w-4 h-4 text-[#FFB15C]" />
          <span>{t('productModal.honestScopeLabel', 'Honest Scope & Negative Boundaries')}</span>
        </div>
        <p className="text-[#F4F7FA] leading-relaxed">{honestScope}</p>
        <div className="pt-1 text-[#8190A3]">
          <span className="text-[#AAB7C7] font-semibold">{t('productModal.whatItProvesLabel', 'What it proves:')}</span>{' '}
          {whatItProves}
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center gap-1 p-1 bg-[#07111F] rounded-lg border border-[#263449] overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as typeof activeTab)}
            className={`flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap shrink-0 cursor-pointer ${
              activeTab === tab.id
                ? 'bg-[#172438] text-[#FF6A00] font-semibold shadow-sm border border-[#263449]'
                : 'text-[#AAB7C7] hover:text-[#F4F7FA]'
            }`}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* TAB 1: Architecture & Topology */}
      {activeTab === 'arch' && (
        <div className="space-y-5">
          <div className="space-y-2">
            <h4 className="text-sm font-bold font-mono text-[#F4F7FA] uppercase">
              {t('productModal.architectureOverview', 'Architectural Topology')}
            </h4>
            <p className="text-xs sm:text-sm text-[#AAB7C7] leading-relaxed">
              {product.architecture.overview}
            </p>
          </div>

          {/* ASCII Architecture Diagram */}
          <div className="p-4 bg-[#07111F] border border-[#263449] rounded-xl overflow-x-auto">
            <div className="text-[10px] font-mono text-[#8190A3] uppercase mb-2">
              System Topology Flow Diagram
            </div>
            <pre className="font-mono text-xs text-[#38BDF8] leading-tight select-all">
              {product.architecture.diagramText}
            </pre>
          </div>

          {/* Core Components */}
          <div className="space-y-2">
            <div className="text-xs font-mono text-[#8190A3] uppercase">
              Architectural Sub-Components:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {product.architecture.components.map((comp, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-[#172438] border border-[#263449] rounded-lg text-xs text-[#F4F7FA] flex items-start gap-2"
                >
                  <span className="font-mono text-[#FF8A24] text-[11px] font-bold">0{idx + 1}.</span>
                  <span>{comp}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: Coherence Verification */}
      {activeTab === 'verification' && (
        <div className="space-y-4">
          <div className="p-4 bg-[#172438] border border-[#263449] rounded-xl flex items-center justify-between">
            <div>
              <div className="text-xs font-mono text-[#8190A3] uppercase">Triple-Layer Alignment Metric</div>
              <div className="text-lg font-bold text-[#F4F7FA]">Architecture Coherence Score</div>
            </div>
            <span className="px-3 py-1 font-mono text-sm font-bold text-[#22C55E] bg-[#22C55E]/10 rounded border border-[#22C55E]/30">
              {product.realArchitectureVerification.coherenceScore}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-[#07111F] border border-[#263449] rounded-xl space-y-2">
              <div className="text-xs font-mono text-[#8190A3] uppercase flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span>1. Documented Architecture</span>
              </div>
              <p className="text-xs text-[#F4F7FA] leading-relaxed">
                {product.realArchitectureVerification.documented}
              </p>
            </div>

            <div className="p-4 bg-[#07111F] border border-[#263449] rounded-xl space-y-2">
              <div className="text-xs font-mono text-[#8190A3] uppercase flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-[#22C55E]" />
                <span>2. Implemented Codebase</span>
              </div>
              <p className="text-xs text-[#F4F7FA] leading-relaxed">
                {product.realArchitectureVerification.implemented}
              </p>
            </div>

            <div className="p-4 bg-[#07111F] border border-[#263449] rounded-xl space-y-2">
              <div className="text-xs font-mono text-[#8190A3] uppercase flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#FF8A24]" />
                <span>3. Presented on Platform</span>
              </div>
              <p className="text-xs text-[#F4F7FA] leading-relaxed">
                {product.realArchitectureVerification.presentedOnSite}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: Technologies Matrix */}
      {activeTab === 'tech' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(product.realTechnologies).map(([category, items]) => {
              if (!items || !items.length) return null;
              return (
                <div key={category} className="p-4 bg-[#07111F] border border-[#263449] rounded-xl space-y-2">
                  <div className="text-xs font-mono text-[#FF8A24] uppercase tracking-wider">
                    {category}
                  </div>
                  <div className="space-y-1">
                    {items.map((item: string) => (
                      <div key={item} className="text-xs font-mono text-[#F4F7FA] flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 4: Engineering ADRs & Decisions */}
      {activeTab === 'decisions' && (
        <div className="space-y-4">
          {product.decisions.map((dec, idx) => (
            <div key={idx} className="p-4 bg-[#07111F] border border-[#263449] rounded-xl space-y-2">
              <div className="text-xs font-mono text-[#FF8A24] font-semibold">
                Decision 0{idx + 1}: {dec.decision}
              </div>
              <div className="text-xs text-[#AAB7C7] leading-relaxed">
                <span className="font-mono text-[#8190A3] block mb-0.5">Rationale:</span>
                {dec.rationale}
              </div>
            </div>
          ))}

          {product.repository?.adrReferences && (
            <div className="p-3 bg-[#172438] border border-[#263449] rounded-lg text-xs font-mono text-[#38BDF8] flex items-center gap-2">
              <span>Related ADRs:</span>
              {product.repository.adrReferences.map((ref) => (
                <span key={ref} className="px-2 py-0.5 bg-[#07111F] rounded border border-[#263449] text-[#F4F7FA]">
                  {ref}
                </span>
              ))}
            </div>
          )}
        </div>
      )}

      {/* TAB 5: Results & Benchmarks */}
      {activeTab === 'results' && (
        <div className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {product.results.map((res, idx) => (
              <div key={idx} className="p-4 bg-[#07111F] border border-[#263449] rounded-xl space-y-1">
                <div className="text-xs font-mono text-[#8190A3] uppercase">{res.metric}</div>
                <div className="text-xl font-mono font-bold text-[#FF6A00]">{res.value}</div>
                <div className="text-xs text-[#AAB7C7] pt-1">{res.description}</div>
              </div>
            ))}
          </div>

          <div className="p-4 bg-[#172438] border border-[#263449] rounded-xl space-y-2">
            <div className="text-xs font-mono text-[#FFB15C] uppercase font-semibold">
              Engineering Challenges Encountered:
            </div>
            <ul className="space-y-1.5 text-xs text-[#F4F7FA]">
              {(product.challenges[language] || product.challenges.en).map((chal, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#FF8A24] font-mono">·</span>
                  <span>{chal}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </Modal>
  );
};
