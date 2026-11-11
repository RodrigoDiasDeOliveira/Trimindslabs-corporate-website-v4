import React from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import { operationalSources } from '../../domain/canonicalData';
import { StatusBadge } from '../ui/StatusBadge';
import { Button } from '../ui/Button';
import { Server, Database, Github, ShieldAlert, ArrowRight, Terminal } from 'lucide-react';

interface OperationalIntelligenceProps {
  onOpenExplorer: () => void;
}

export const OperationalIntelligence: React.FC<OperationalIntelligenceProps> = ({ onOpenExplorer }) => {
  const { t } = useLanguage();

  return (
    <section id="intelligence" className="py-16 md:py-24 border-b border-[#263449] bg-[#111C2B]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-mono text-[#FF8A24] uppercase tracking-wider">
              {t('explorer.kicker', 'Operational Intelligence & Transparency')}
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#F4F7FA]">
              Independent operational evidence across cloud enclaves.
            </h2>
            <p className="text-sm sm:text-base text-[#AAB7C7] leading-relaxed">
              We separate editorial portfolio claims from runtime operational observations.
              Telemetry is recorded by independent cloud probers and GitHub webhooks.
            </p>
          </div>

          <Button
            variant="primary"
            size="md"
            icon={<Terminal className="w-4 h-4" />}
            onClick={onOpenExplorer}
            className="self-start md:self-auto"
          >
            Launch State Explorer
          </Button>
        </div>

        {/* 3 Operational Sources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {operationalSources.map((source) => (
            <div
              key={source.id}
              className="p-6 bg-[#111C2B] border border-[#263449] rounded-xl flex flex-col justify-between space-y-4 shadow-sm"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <StatusBadge status={source.status} />
                  <span className="text-xs font-mono text-[#8190A3]">
                    Scope: {source.observationScopeCount}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#F4F7FA]">
                  {source.name}
                </h3>

                <div className="p-3 bg-[#07111F] rounded-lg border border-[#263449] font-mono text-xs text-[#38BDF8] break-all">
                  {source.endpoint}
                </div>
              </div>

              <div className="pt-3 border-t border-[#263449]/70 text-[11px] font-mono text-[#8190A3] flex items-center justify-between">
                <span>Last Observation:</span>
                <span className="text-[#F4F7FA]">{new Date(source.lastObservation).toLocaleDateString()}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Mandatory Principle Disclaimer from ADR-001 */}
        <div className="p-5 bg-[#07111F] border border-[#263449] rounded-xl flex items-start gap-3 text-xs text-[#AAB7C7]">
          <ShieldAlert className="w-5 h-5 text-[#FFB15C] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-mono text-[#FFB15C] font-semibold block uppercase">
              Operational Scope Governance (ADR-001)
            </span>
            <p className="leading-relaxed">
              The Ecosystem Audit API is the sole source of operational truth. An observation count
              (32 repositories) is distinct from an account-wide GitHub repository inventory.
              The corporate platform does not manufacture pipeline pass rates, security compliance,
              or runtime availability. Unmeasured parameters remain strictly displayed as NOT_MEASURED.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
