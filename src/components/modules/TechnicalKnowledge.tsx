import React, { useState } from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import {
  adrDocuments,
  productionGates,
  architectureDocuments,
  vocabularyTerms
} from '../../domain/canonicalData';
import { StatusBadge } from '../ui/StatusBadge';
import {
  FileText,
  ShieldCheck,
  Cpu,
  BookOpen,
  CheckCircle2,
  Clock,
  ArrowRight,
  Palette
} from 'lucide-react';
import symbolImg from '../../assets/brand/trimindslabs-symbol.png';
import wordmarkImg from '../../assets/brand/trimindslabs-wordmark.png';
import primaryLockupImg from '../../assets/brand/trimindslabs-primary-lockup.png';

export const TechnicalKnowledge: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'adrs' | 'gates' | 'pillars' | 'vocab' | 'brand'>('adrs');
  const [selectedAdrId, setSelectedAdrId] = useState<string>('ADR-001');

  const selectedAdr = adrDocuments.find((a) => a.id === selectedAdrId) || adrDocuments[0];

  return (
    <section id="technical" className="py-16 md:py-24 border-b border-[#263449] bg-[#07111F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-mono text-[#FF8A24] uppercase tracking-wider">
            {t('knowledge.kicker', 'Engineering Depth & Governance')}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#F4F7FA]">
            {t('knowledge.title', 'Architecture Decision Records, Gates, and System Topologies.')}
          </h2>
          <p className="text-sm sm:text-base text-[#AAB7C7] leading-relaxed">
            {t(
              'knowledge.subtitle',
              'Transparent technical documentation detailing how systems are designed, benchmarked, and released.'
            )}
          </p>
        </div>

        {/* Knowledge Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-[#263449]">
          <button
            onClick={() => setActiveTab('adrs')}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-mono font-medium rounded-lg transition-all cursor-pointer ${
              activeTab === 'adrs'
                ? 'bg-[#111C2B] text-[#FF6A00] border border-[#FF6A00]'
                : 'text-[#AAB7C7] hover:text-[#F4F7FA]'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>{t('knowledge.tabAdr', 'Architecture Decision Records (ADRs)')}</span>
          </button>

          <button
            onClick={() => setActiveTab('gates')}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-mono font-medium rounded-lg transition-all cursor-pointer ${
              activeTab === 'gates'
                ? 'bg-[#111C2B] text-[#FF6A00] border border-[#FF6A00]'
                : 'text-[#AAB7C7] hover:text-[#F4F7FA]'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{t('knowledge.tabGates', '11 Production Release Gates')}</span>
          </button>

          <button
            onClick={() => setActiveTab('pillars')}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-mono font-medium rounded-lg transition-all cursor-pointer ${
              activeTab === 'pillars'
                ? 'bg-[#111C2B] text-[#FF6A00] border border-[#FF6A00]'
                : 'text-[#AAB7C7] hover:text-[#F4F7FA]'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>{t('knowledge.tabPillars', 'Reference Topologies')}</span>
          </button>

          <button
            onClick={() => setActiveTab('vocab')}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-mono font-medium rounded-lg transition-all cursor-pointer ${
              activeTab === 'vocab'
                ? 'bg-[#111C2B] text-[#FF6A00] border border-[#FF6A00]'
                : 'text-[#AAB7C7] hover:text-[#F4F7FA]'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>{t('knowledge.tabVocab', 'Technical Vocabulary')}</span>
          </button>

          <button
            onClick={() => setActiveTab('brand')}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-mono font-medium rounded-lg transition-all cursor-pointer ${
              activeTab === 'brand'
                ? 'bg-[#111C2B] text-[#FF6A00] border border-[#FF6A00]'
                : 'text-[#AAB7C7] hover:text-[#F4F7FA]'
            }`}
          >
            <Palette className="w-3.5 h-3.5 text-[#FF8A24]" />
            <span>{t('knowledge.tabBrand', 'Brand Assets & Identity (Option A)')}</span>
          </button>
        </div>

        {/* TAB 1: ADRs Viewer */}
        {activeTab === 'adrs' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* ADR Selector List */}
            <div className="lg:col-span-4 space-y-3">
              <div className="text-xs font-mono text-[#8190A3] uppercase mb-2">
                Documented Decision Register:
              </div>
              {adrDocuments.map((adr) => {
                const isSelected = selectedAdrId === adr.id;
                return (
                  <button
                    key={adr.id}
                    onClick={() => setSelectedAdrId(adr.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#111C2B] border-[#FF6A00] shadow-md'
                        : 'bg-[#111C2B]/50 border-[#263449] hover:border-[#374B67]'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-mono mb-1">
                      <span className={isSelected ? 'text-[#FF6A00] font-bold' : 'text-[#38BDF8]'}>
                        {adr.id}
                      </span>
                      <span className="text-[10px] text-[#22C55E] bg-[#22C55E]/10 px-1.5 py-0.5 rounded border border-[#22C55E]/20">
                        {adr.status}
                      </span>
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-[#F4F7FA] line-clamp-2">
                      {adr.title}
                    </div>
                    <div className="text-[11px] font-mono text-[#8190A3] mt-2">
                      {adr.date} · {adr.scope}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* ADR Content View */}
            <div className="lg:col-span-8 p-6 sm:p-8 bg-[#111C2B] border border-[#263449] rounded-2xl space-y-6">
              <div className="border-b border-[#263449] pb-4 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <div className="text-xs font-mono text-[#38BDF8] uppercase mb-1">
                    {selectedAdr.id} · Scope: {selectedAdr.scope}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#F4F7FA]">
                    {selectedAdr.title}
                  </h3>
                </div>
                <div className="text-xs font-mono text-[#AAB7C7]">
                  Accepted: <span className="text-[#F4F7FA]">{selectedAdr.date}</span>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm leading-relaxed text-[#AAB7C7]">
                <div>
                  <h4 className="font-mono text-xs text-[#FF8A24] uppercase font-bold mb-1.5">
                    1. Context & Motivation
                  </h4>
                  <p className="text-[#F4F7FA]">{selectedAdr.context}</p>
                </div>

                <div>
                  <h4 className="font-mono text-xs text-[#FF8A24] uppercase font-bold mb-1.5">
                    2. Decision Directive
                  </h4>
                  <p className="p-4 bg-[#07111F] border border-[#263449] rounded-xl text-[#F4F7FA]">
                    {selectedAdr.decision}
                  </p>
                </div>

                <div>
                  <h4 className="font-mono text-xs text-[#FF8A24] uppercase font-bold mb-2">
                    3. Architectural Consequences
                  </h4>
                  <ul className="space-y-2">
                    {selectedAdr.consequences.map((c, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#22C55E] font-mono">✓</span>
                        <span className="text-[#F4F7FA]">{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: 11 Production Release Gates Matrix */}
        {activeTab === 'gates' && (
          <div className="space-y-6">
            <div className="p-4 bg-[#111C2B] border border-[#263449] rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="text-xs font-mono text-[#8190A3] uppercase">
                  Formal Audit Release Framework: TRIMINDSLABS-GATES-2026
                </div>
                <div className="text-base font-bold text-[#F4F7FA]">
                  Strict Separation Between Implementation, Validation, and Runtime Evidence
                </div>
              </div>
              <div className="text-xs font-mono text-[#22C55E]">
                8 Verified · 2 In-Progress · 1 Pending
              </div>
            </div>

            <div className="bg-[#111C2B] border border-[#263449] rounded-xl overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-[#172438] text-[#8190A3] border-b border-[#263449]">
                    <tr>
                      <th className="py-3 px-5">Gate Identifier</th>
                      <th className="py-3 px-5">Lifecycle Phase</th>
                      <th className="py-3 px-5">Formal Verification Evidence</th>
                      <th className="py-3 px-5">Release Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#263449]/60">
                    {productionGates.map((gate) => (
                      <tr key={gate.id} className="hover:bg-[#172438]/50 transition-colors">
                        <td className="py-3.5 px-5 font-semibold text-[#F4F7FA] whitespace-nowrap">
                          {gate.name}
                        </td>
                        <td className="py-3.5 px-5 text-[#AAB7C7] whitespace-nowrap">
                          {gate.phase}
                        </td>
                        <td className="py-3.5 px-5 text-[#8190A3] max-w-md">
                          {gate.evidence}
                        </td>
                        <td className="py-3.5 px-5 whitespace-nowrap">
                          <StatusBadge status={gate.status} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: Reference Topologies & Architecture Diagrams */}
        {activeTab === 'pillars' && (
          <div className="space-y-8">
            {architectureDocuments.map((doc) => (
              <div
                key={doc.id}
                className="p-6 bg-[#111C2B] border border-[#263449] rounded-2xl space-y-4"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#263449] pb-3">
                  <div>
                    <span className="text-xs font-mono text-[#38BDF8] uppercase tracking-wider">
                      {doc.category} · v{doc.version}
                    </span>
                    <h3 className="text-lg font-bold text-[#F4F7FA] mt-0.5">
                      {doc.title}
                    </h3>
                  </div>
                  <div className="text-xs font-mono text-[#8190A3]">
                    Related: <span className="text-[#FF8A24]">{doc.relatedProduct}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#AAB7C7] leading-relaxed">
                  {doc.summary}
                </p>

                {/* ASCII Diagram Viewer */}
                <div className="p-4 bg-[#07111F] border border-[#263449] rounded-xl overflow-x-auto">
                  <pre className="font-mono text-[11px] sm:text-xs text-[#38BDF8] leading-tight select-all">
                    {doc.diagram}
                  </pre>
                </div>

                {/* Core Pillars */}
                <div className="flex flex-wrap items-center gap-2 pt-2">
                  <span className="text-xs font-mono text-[#8190A3]">Key Pillars:</span>
                  {doc.pillars.map((pillar) => (
                    <span
                      key={pillar}
                      className="px-2.5 py-1 text-xs font-mono bg-[#172438] text-[#F4F7FA] border border-[#263449] rounded-md"
                    >
                      {pillar}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 4: Technical Vocabulary */}
        {activeTab === 'vocab' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {vocabularyTerms.map((term, idx) => (
              <div
                key={idx}
                className="p-6 bg-[#111C2B] border border-[#263449] rounded-xl space-y-3"
              >
                <div className="text-xs font-mono text-[#FF8A24] font-semibold">
                  0{idx + 1}. Formal Term Definition
                </div>
                <h4 className="text-lg font-bold text-[#F4F7FA]">{term.term}</h4>
                <p className="text-xs sm:text-sm text-[#AAB7C7] leading-relaxed">
                  {term.definition}
                </p>
                {term.contrastingAntiPattern && (
                  <div className="p-3 bg-[#07111F] border border-[#263449] rounded-lg text-xs">
                    <span className="font-mono text-[#EF4444] font-semibold block mb-0.5">
                      Contrasting Anti-Pattern:
                    </span>
                    <span className="text-[#8190A3]">{term.contrastingAntiPattern}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* TAB 5: Brand Assets (Option A) */}
        {activeTab === 'brand' && (
          <div className="space-y-8">
            <div className="p-6 bg-[#111C2B] border border-[#263449] rounded-2xl space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="text-xs font-mono text-[#FF8A24] uppercase font-semibold">
                  TRIMINDSLABS Official Brand Assets — Option A
                </div>
                <span className="text-[11px] font-mono text-[#22C55E] bg-[#22C55E]/10 px-2 py-0.5 rounded border border-[#22C55E]/20 self-start sm:self-auto">
                  Active Brand Standard
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#AAB7C7] leading-relaxed">
                The official visual identity of TRIMINDSLABS is partitioned into three canonical assets:
                the geometric symbol, the institutional wordmark, and the primary combined lockup.
                Engineered in compliance with the Orange Engineering design system.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Asset 1: Símbolo Geométrico */}
              <div className="p-6 bg-[#111C2B] border border-[#263449] rounded-xl flex flex-col justify-between space-y-4 group hover:border-[#FF8A24]/60 transition-colors">
                <div className="space-y-2">
                  <div className="text-xs font-mono text-[#FF6A00] font-semibold">
                    1. trimindslabs-symbol.png
                  </div>
                  <h4 className="text-sm font-bold text-[#F4F7FA]">
                    Símbolo Geométrico
                  </h4>
                  <p className="text-xs text-[#AAB7C7] leading-relaxed">
                    Somente o símbolo geométrico. Ícone triangular facetado combinando Electric Orange (#FF6A00) e Midnight Navy. Utilizado em favicons, avatares e marcas compactas de navegação.
                  </p>
                </div>

                <div className="p-6 bg-[#010C1B] border border-[#263449] rounded-lg flex items-center justify-center min-h-[160px] shadow-inner">
                  <img
                    src={symbolImg}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/trimindslabs-symbol.png';
                    }}
                    alt="trimindslabs-symbol.png"
                    className="max-h-24 w-auto object-contain group-hover:scale-105 transition-transform"
                  />
                </div>

                <div className="pt-3 border-t border-[#263449]/70 flex items-center justify-between text-xs font-mono text-[#8190A3]">
                  <span>384 × 312 px</span>
                  <a
                    href="/trimindslabs-symbol.png"
                    download="trimindslabs-symbol.png"
                    className="text-[#FF6A00] hover:text-[#FF8A24] font-semibold flex items-center gap-1 cursor-pointer"
                  >
                    <span>Download</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Asset 2: Nome e Assinatura Institucional */}
              <div className="p-6 bg-[#111C2B] border border-[#263449] rounded-xl flex flex-col justify-between space-y-4 group hover:border-[#38BDF8]/60 transition-colors">
                <div className="space-y-2">
                  <div className="text-xs font-mono text-[#38BDF8] font-semibold">
                    2. trimindslabs-wordmark.png
                  </div>
                  <h4 className="text-sm font-bold text-[#F4F7FA]">
                    Nome e Assinatura Institucional
                  </h4>
                  <p className="text-xs text-[#AAB7C7] leading-relaxed">
                    Somente o nome e a assinatura institucional. Tipografia em Cloud White e Electric Orange (#FF6A00) com o lema oficial "Engineering Intelligent Systems".
                  </p>
                </div>

                <div className="p-6 bg-[#010C1B] border border-[#263449] rounded-lg flex items-center justify-center min-h-[160px] shadow-inner">
                  <img
                    src={wordmarkImg}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/trimindslabs-wordmark.png';
                    }}
                    alt="trimindslabs-wordmark.png"
                    className="max-h-14 w-auto object-contain group-hover:scale-105 transition-transform"
                  />
                </div>

                <div className="pt-3 border-t border-[#263449]/70 flex items-center justify-between text-xs font-mono text-[#8190A3]">
                  <span>1100 × 216 px</span>
                  <a
                    href="/trimindslabs-wordmark.png"
                    download="trimindslabs-wordmark.png"
                    className="text-[#38BDF8] hover:text-[#F4F7FA] font-semibold flex items-center gap-1 cursor-pointer"
                  >
                    <span>Download</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Asset 3: Símbolo e Lettering Combinados */}
              <div className="p-6 bg-[#111C2B] border border-[#263449] rounded-xl flex flex-col justify-between space-y-4 group hover:border-[#22C55E]/60 transition-colors">
                <div className="space-y-2">
                  <div className="text-xs font-mono text-[#22C55E] font-semibold">
                    3. trimindslabs-primary-lockup.png
                  </div>
                  <h4 className="text-sm font-bold text-[#F4F7FA]">
                    Símbolo e Lettering Combinados
                  </h4>
                  <p className="text-xs text-[#AAB7C7] leading-relaxed">
                    Lockup primário completo. Símbolo e lettering combinados em proporção equilibrada. Versão oficial para cabeçalhos corporativos, documentos oficiais e OpenGraph share cards.
                  </p>
                </div>

                <div className="p-6 bg-[#010C1B] border border-[#263449] rounded-lg flex items-center justify-center min-h-[160px] shadow-inner">
                  <img
                    src={primaryLockupImg}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/trimindslabs-primary-lockup.png';
                    }}
                    alt="trimindslabs-primary-lockup.png"
                    className="max-h-12 w-auto object-contain group-hover:scale-105 transition-transform"
                  />
                </div>

                <div className="pt-3 border-t border-[#263449]/70 flex items-center justify-between text-xs font-mono text-[#8190A3]">
                  <span>1556 × 320 px</span>
                  <a
                    href="/trimindslabs-primary-lockup.png"
                    download="trimindslabs-primary-lockup.png"
                    className="text-[#22C55E] hover:text-[#F4F7FA] font-semibold flex items-center gap-1 cursor-pointer"
                  >
                    <span>Download</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
