import React from 'react';
import type { EngineeringMetrics } from '../../domain/types';
import { BrandIdentity } from '../ui/BrandIdentity';
import { useLanguage } from '../../i18n/LanguageContext';
import { Button } from '../ui/Button';
import { Terminal, ShieldCheck, ArrowRight, Server, Database, FileCheck } from 'lucide-react';

interface HeroSectionProps {
  onExploreState: () => void;
  onExploreCatalog: () => void;
  liveAuditStatus: string;
  totalRepositories: number | null;
  securityCompliance: string;
  pipelineRate: string;
  engineeringMetrics?: EngineeringMetrics | null;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreState,
  onExploreCatalog,
  liveAuditStatus,
  totalRepositories,
  securityCompliance,
  pipelineRate,
  engineeringMetrics,
}) => {
  const { t, language } = useLanguage();
  const labels = {
    en: ['Test files', 'ADRs', 'Executed tests', 'Test success rate', 'Repository coverage', 'Engineering evidence'],
    pt: ['Arquivos de testes', 'ADRs', 'Testes executados', 'Taxa de aprovação', 'Cobertura de repositórios', 'Evidências de engenharia'],
    es: ['Archivos de pruebas', 'ADRs', 'Pruebas ejecutadas', 'Tasa de aprobación', 'Cobertura de repositorios', 'Evidencias de ingeniería'],
  }[language];
  const valid = (v: unknown): v is number => typeof v === 'number' && Number.isSafeInteger(v) && v >= 0;
  const m = engineeringMetrics;
  const rows: [string, string][] = [];
  if (m && (m.collection_status === 'COMPLETE' || m.collection_status === 'PARTIAL') && typeof m.observed_at === 'string' && Number.isFinite(Date.parse(m.observed_at))) {
    const age = Date.now() - Date.parse(m.observed_at);
    if (age >= 0 && age <= 86400000) {
      [m.test_files_count, m.adr_count, m.tests_executed].forEach((v, i) => {
        if (valid(v)) rows.push([labels[i], v.toLocaleString(language)]);
      });
      if (valid(m.tests_executed) && m.tests_executed > 0 && valid(m.tests_passed) && valid(m.tests_failed) && m.tests_passed + m.tests_failed === m.tests_executed)
        rows.push([labels[3], (m.tests_passed / m.tests_executed).toLocaleString(language, {style: 'percent', maximumFractionDigits: 1})]);
      if (valid(m.repositories_assessed) && valid(m.repositories_in_scope) && m.repositories_assessed <= m.repositories_in_scope)
        rows.push([labels[4], m.repositories_assessed + '/' + m.repositories_in_scope]);
    }
  }

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 border-b border-[#263449] bg-gradient-to-b from-[#07111F] via-[#07111F] to-[#111C2B]/60">
      {/* Background technical grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#FF6A00 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline and Positioning */}
          <div className="lg:col-span-7 space-y-6">
            {/* Prominent Official Brand Identity Showcase (Option A) */}
            <div className="p-3.5 sm:p-4 bg-[#010C1B] border border-[#263449] rounded-2xl shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 max-w-xl">
              <div className="flex items-center gap-3.5">
                <div className="p-1.5 bg-[#07111F] border border-[#263449] rounded-xl shadow-[0_0_20px_rgba(255,106,0,0.25)] shrink-0">
                  <BrandIdentity variant="symbol" priority className="h-10 sm:h-12 w-auto" />
                </div>
                <div>
                  <div className="flex items-center tracking-tight leading-none">
                    <span className="text-xl sm:text-2xl font-black text-[#F4F7FA]">TRIMINDS</span>
                    <span className="text-xl sm:text-2xl font-black text-[#FF6A00]">LABS</span>
                  </div>
                  <div className="text-xs font-mono text-[#8190A3] mt-1 tracking-wider uppercase">
                    Engineering Intelligent Systems
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 self-start sm:self-auto">
                <span className="px-2.5 py-1 text-[10px] font-mono bg-[#22C55E]/10 text-[#22C55E] border border-[#22C55E]/30 rounded-md">
                  Active Standard
                </span>
              </div>
            </div>

            {/* Editorial Kicker */}
            <div className="flex items-center gap-2.5 text-xs font-mono text-[#AAB7C7] tracking-wider uppercase">
              <span className="text-[#F4F7FA] font-semibold">{t('hero.kicker', 'Engineering Intelligent Systems')}</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#38BDF8]">GCP Cloud Run (EU)</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F4F7FA] [text-wrap:balance] leading-[1.15]">
              {t('hero.title', 'Architectures for high-assurance systems, regulatory AI, and multi-cloud operations.')}
            </h1>

            {/* Body Description */}
            <p className="text-base sm:text-lg text-[#AAB7C7] leading-relaxed max-w-2xl font-normal">
              {t(
                'hero.subtitle',
                'TRIMINDSLABS builds deterministic intelligence platforms where every assertion is mathematically grounded, verifiable through character-offset bounds, and governed by independent audit telemetry.'
              )}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                variant="primary"
                size="lg"
                icon={<Terminal className="w-4 h-4" />}
                onClick={onExploreState}
              >
                {t('hero.primaryCta', 'Explore Engineering State')}
              </Button>
              <Button
                variant="secondary"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
                onClick={onExploreCatalog}
              >
                {t('hero.secondaryCta', 'Inspect Product Catalog')}
              </Button>
            </div>

            {/* Live Operational Provenance Indicator */}
            <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-[#8190A3] border-t border-[#263449]/70">
              <div className="flex items-center gap-2 text-[#22C55E]">
                <ShieldCheck className="w-4 h-4" />
                <span>Audit Status: {liveAuditStatus}</span>
              </div>
              <span aria-hidden="true">·</span>
              <div className="text-[#F4F7FA]">
                <span className="text-[#FF8A24] font-semibold">{totalRepositories ?? '—'}</span> Repositories in Scope
              </div>
              <span aria-hidden="true">·</span>
              <div className="text-[#AAB7C7]">{pipelineRate} CI Pipeline Success</div>
              <span aria-hidden="true">·</span>
              <div className="text-[#8190A3]">Security: {securityCompliance === 'NOT_MEASURED' ? 'Assessment in Progress' : securityCompliance}</div>
            </div>
            {rows.length > 0 && (
              <div className="border-t border-[#263449]/70 pt-4 space-y-2">
                <h2 className="text-xs font-mono text-[#AAB7C7] uppercase">{labels[5]}</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {rows.map(([label, value]) => (
                    <div key={label} className="p-3 border border-[#263449] rounded-lg">
                      <div className="text-lg font-semibold text-[#FF8A24]">{value}</div>
                      <div className="text-xs text-[#AAB7C7]">{label}</div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-[#8190A3]">Ecosystem Audit · {m?.collection_status} · {new Date(m!.observed_at!).toLocaleString(language)}</p>
              </div>
            )}
          </div>

          {/* Right Column: Architectural Terminal / Interactive Preview */}
          <div className="lg:col-span-5">
            <div className="bg-[#111C2B] border border-[#263449] rounded-xl overflow-hidden shadow-2xl">
              {/* Window Bar */}
              <div className="px-4 py-3 bg-[#172438] border-b border-[#263449] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#EF4444]/60" />
                  <span className="w-3 h-3 rounded-full bg-[#FBBF24]/60" />
                  <span className="w-3 h-3 rounded-full bg-[#22C55E]/60" />
                  <span className="ml-2 font-mono text-xs text-[#AAB7C7]">
                    triminds-ecosystem-audit.internal
                  </span>
                </div>
                <span className="font-mono text-[10px] text-[#38BDF8] bg-[#38BDF8]/10 px-2 py-0.5 rounded border border-[#38BDF8]/20">
                  HTTP 200 OK
                </span>
              </div>

              {/* Terminal Code Content */}
              <div className="p-5 font-mono text-xs text-[#AAB7C7] space-y-3 leading-relaxed overflow-x-auto">
                <div className="text-[#8190A3]">
                  # Real-Time Operational Telemetry Query
                </div>
                <div className="text-[#F4F7FA]">
                  <span className="text-[#FF6A00]">$</span> curl -s /api/v1/audit/summary
                </div>
                <div className="p-3 bg-[#07111F] rounded-lg border border-[#263449]/70 text-[11px] space-y-1">
                  <div><span className="text-[#38BDF8]">"system_status"</span>: <span className="text-[#22C55E]">"{liveAuditStatus}"</span>,</div>
                  <div><span className="text-[#38BDF8]">"total_repositories"</span>: <span className="text-[#FFB15C]">{totalRepositories ?? '—'}</span>,</div>
                  <div><span className="text-[#38BDF8]">"pipeline_success_rate"</span>: <span className="text-[#22C55E]">"{pipelineRate}"</span>,</div>
                  <div><span className="text-[#38BDF8]">"security_compliance"</span>: <span className="text-[#8190A3]">"{securityCompliance === 'NOT_MEASURED' ? 'Assessment in Progress' : securityCompliance}"</span>,</div>
                  <div><span className="text-[#38BDF8]">"cloud_run_region"</span>: <span className="text-[#F4F7FA]">"europe-west1"</span></div>
                </div>

                <div className="pt-2 flex items-center justify-between text-[11px]">
                  <span className="text-[#8190A3]">Enclave Status: Active</span>
                  <button
                    onClick={onExploreState}
                    className="text-[#FF6A00] hover:text-[#FF8A24] font-semibold underline underline-offset-2 flex items-center gap-1 cursor-pointer"
                  >
                    <span>Inspect Raw Stream</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
