import React, { useState, useEffect, useCallback } from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import {
  AuditSummary,
  RepositoryObservation,
  DeploymentTelemetry
} from '../../domain/types';
import {
  fetchAuditSummary,
  fetchEcosystemObservations,
  fetchDeploymentTelemetry,
  getSessionAuditData
} from '../../services/auditService';
import { StatusBadge } from '../ui/StatusBadge';
import { DataMetric } from '../ui/DataMetric';
import { Button } from '../ui/Button';
import { Modal } from '../ui/Modal';
import {
  Terminal,
  RefreshCw,
  Search,
  Server,
  ShieldCheck,
  HelpCircle,
  Clock,
  ExternalLink,
  Code2,
  AlertCircle,
  Database,
  Cloud,
  CheckCircle2
} from 'lucide-react';

export const EngineeringStateExplorer: React.FC = () => {
  const { language, t } = useLanguage();

  const [summary, setSummary] = useState<AuditSummary | null>(() => getSessionAuditData().summary);
  const [observations, setObservations] = useState<RepositoryObservation[]>(() => getSessionAuditData().observations || []);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [sourceProvenance, setSourceProvenance] = useState<'LIVE_AUDIT_API' | 'SESSION_OBSERVATION' | 'AWAITING_AUDIT'>(getSessionAuditData().observations ? 'SESSION_OBSERVATION' : 'AWAITING_AUDIT');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Search and Filters
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'ALL' | 'OBSERVED' | 'DEPLOYMENTS'>('ALL');

  // Modal Inspectors
  const [selectedObservation, setSelectedObservation] = useState<RepositoryObservation | null>(null);
  const [selectedDeployment, setSelectedDeployment] = useState<DeploymentTelemetry | null>(null);
  const [inspectingRawSummary, setInspectingRawSummary] = useState(false);

  // Load telemetry
  const loadData = useCallback(async (force = false) => {
    if (force) setRefreshing(true);
    else setLoading(true);
    setErrorMessage(null);

    try {
      const [sumResult, obsResult] = await Promise.all([
        fetchAuditSummary(force),
        fetchEcosystemObservations(force),
      ]);

      if (sumResult.data) setSummary(sumResult.data);
      if (obsResult.data?.length) setObservations(obsResult.data);
      setSourceProvenance(obsResult.source === 'LIVE_AUDIT_API' ? 'LIVE_AUDIT_API' : obsResult.data?.length ? 'SESSION_OBSERVATION' : 'AWAITING_AUDIT');

      if (sumResult.error || obsResult.error) {
        setErrorMessage(sumResult.error || obsResult.error || null);
      }
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : 'Unknown telemetry error');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);


  // Inspect deployment service
  const handleInspectDeployment = async (depId: string) => {
    const data = await fetchDeploymentTelemetry(depId);
    if (data) {
      setSelectedDeployment(data);
    }
  };

  // Filter repositories
  const filteredObservations = observations.filter((item) => {
    if (statusFilter === 'DEPLOYMENTS') {
      const name = item.source.name.toLowerCase();
      const isDeployment = name.includes('geo-ai') || name.includes('administrator') || name.includes('logistic') || name.includes('portfolio') || name.includes('compliance');
      if (!isDeployment) return false;
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = item.source.name.toLowerCase().includes(q);
      const matchBranch = item.source.default_branch.toLowerCase().includes(q);
      const matchCommit = item.commit.message.toLowerCase().includes(q) || item.commit.sha.toLowerCase().includes(q);
      const matchAuthor = item.commit.author.toLowerCase().includes(q);
      const matchLang = (item.source.primary_language || '').toLowerCase().includes(q);
      return matchName || matchBranch || matchCommit || matchAuthor || matchLang;
    }
    return true;
  });

  return (
    <section id="explorer" className="py-16 md:py-24 border-b border-[#263449] bg-[#07111F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Top Header & Refresh Control */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-[#FF8A24] uppercase tracking-wider">
              <Terminal className="w-3.5 h-3.5" />
              <span>{t('explorer.kicker', 'Operational Intelligence & Transparency')}</span>
              <span aria-hidden="true">·</span>
              <span className={`px-2 py-0.5 rounded font-mono text-[10px] ${
                sourceProvenance === 'LIVE_AUDIT_API'
                  ? 'bg-[#22C55E]/10 text-[#22C55E] border border-[#22C55E]/30'
                  : 'bg-[#FFB15C]/10 text-[#FFB15C] border border-[#FFB15C]/30'
              }`}>
                {sourceProvenance === 'LIVE_AUDIT_API' ? t('explorer.liveBadge', 'LIVE AUDIT API CONNECTED') : sourceProvenance === 'SESSION_OBSERVATION' ? 'SESSION OBSERVATION' : 'AWAITING FIRST AUDIT'}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#F4F7FA]">
              {t('explorer.title', 'Engineering State Explorer')}
            </h2>
            <p className="text-sm sm:text-base text-[#AAB7C7] leading-relaxed">
              {t(
                'explorer.subtitle',
                'Query the real-time operational state of repositories and services monitored by TRIMINDSLABS. Connected directly to the live Ecosystem Audit REST API and GitHub telemetry.'
              )}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 self-start md:self-auto shrink-0">
            <Button
              variant="outline"
              size="sm"
              icon={<Code2 className="w-3.5 h-3.5" />}
              onClick={() => setInspectingRawSummary(true)}
            >
              Raw Payload
            </Button>
            <Button
              variant="primary"
              size="sm"
              icon={<RefreshCw className={`w-3.5 h-3.5 ${refreshing ? 'animate-spin' : ''}`} />}
              disabled={refreshing || loading}
              onClick={() => void loadData(true)}
            >
              {refreshing || loading ? 'COLLECTING FROM AUDIT…' : 'Atualizar auditoria'}
            </Button>
          </div>
        </div>

        {/* Notice banner if fallback is active */}
        {errorMessage && (
          <div className="p-4 bg-[#FFB15C]/10 border border-[#FFB15C]/30 rounded-xl text-xs text-[#FFB15C] flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
            <button
              onClick={() => void loadData(true)}
              className="underline font-mono text-xs whitespace-nowrap cursor-pointer hover:text-[#F4F7FA]"
            >
              Retry Live Probe
            </button>
          </div>
        )}

        {/* 4 Telemetry Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <DataMetric
            label={t('explorer.cardStatus', 'Audit Engine Status')}
            value={summary?.system_status || (refreshing ? 'COLLECTING' : observations.length ? 'OBSERVED' : 'AWAITING FIRST AUDIT')}
            subtext="Ecosystem Audit REST API"
            provenance="europe-west1 Cloud Run"
            accent
            icon={<ShieldCheck className="w-4 h-4 text-[#22C55E]" />}
          />
          <DataMetric
            label={t('explorer.cardObservedRepos', 'Observed Repositories')}
            value={observations.length || '—'}
            subtext="Repositories in audit scope"
            provenance="Observed via GitHub API"
            icon={<Server className="w-4 h-4 text-[#38BDF8]" />}
          />
          <DataMetric
            label={t('explorer.cardPipelinePass', 'CI Pipeline Success')}
            value={summary?.summary_cards.pipeline_success_rate || '—'}
            subtext="Tracked GitHub Actions"
            provenance="Verified Workflows"
            icon={<CheckCircle2 className="w-4 h-4 text-[#22C55E]" />}
          />
          <DataMetric
            label={t('explorer.cardSecurityCompliance', 'Security Compliance')}
            value={summary?.summary_cards.security_compliance || '—'}
            subtext="Honest state per ADR-001"
            provenance="Automated Prober Required"
            icon={<HelpCircle className="w-4 h-4 text-[#8190A3]" />}
          />
        </div>

        {/* Cloud Run Verified Deployments Strip */}
        <div className="p-5 bg-[#111C2B] border border-[#263449] rounded-2xl space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-mono text-[#F4F7FA] uppercase font-semibold">
              <Cloud className="w-4 h-4 text-[#38BDF8]" />
              <span>Verified European Cloud Run Enclaves</span>
            </div>
            <span className="text-[11px] font-mono text-[#8190A3]">
              Independent Telemetry Endpoints
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div
              onClick={() => handleInspectDeployment('geo-ai-v4')}
              className="p-3.5 bg-[#07111F] border border-[#263449] rounded-xl hover:border-[#38BDF8] transition-colors cursor-pointer group"
            >
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="font-bold text-[#F4F7FA] group-hover:text-[#38BDF8]">Geo-AI V4</span>
                <StatusBadge status="DEPLOYED_NOT_PROBED" />
              </div>
              <div className="text-[11px] font-mono text-[#8190A3] truncate">
                europe-west1 Cloud Run
              </div>
            </div>

            <div
              onClick={() => handleInspectDeployment('ai-cloud-administrator')}
              className="p-3.5 bg-[#07111F] border border-[#263449] rounded-xl hover:border-[#FFB15C] transition-colors cursor-pointer group"
            >
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="font-bold text-[#F4F7FA] group-hover:text-[#FFB15C]">AI Cloud Admin</span>
                <StatusBadge status="HISTORICAL_EVIDENCE" />
              </div>
              <div className="text-[11px] font-mono text-[#8190A3] truncate">
                europe-west1 FastMCP
              </div>
            </div>

            <div
              onClick={() => handleInspectDeployment('tlp-nextgen')}
              className="p-3.5 bg-[#07111F] border border-[#263449] rounded-xl hover:border-[#38BDF8] transition-colors cursor-pointer group"
            >
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="font-bold text-[#F4F7FA] group-hover:text-[#38BDF8]">TLP Next-Gen</span>
                <StatusBadge status="DEPLOYED_NOT_PROBED" />
              </div>
              <div className="text-[11px] font-mono text-[#8190A3] truncate">
                React + Spring Boot 3
              </div>
            </div>

            <div
              onClick={() => handleInspectDeployment('portfolio-v2')}
              className="p-3.5 bg-[#07111F] border border-[#263449] rounded-xl hover:border-[#FFB15C] transition-colors cursor-pointer group"
            >
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="font-bold text-[#F4F7FA] group-hover:text-[#FFB15C]">Portfolio System</span>
                <StatusBadge status="HISTORICAL_EVIDENCE" />
              </div>
              <div className="text-[11px] font-mono text-[#8190A3] truncate">
                europe-west1 Cloud Run
              </div>
            </div>
          </div>
        </div>

        {/* Search & Filter Controls */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          {/* Search bar */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-[#8190A3] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('explorer.searchPlaceholder', 'Filter by repository name, language, or branch...')}
              className="w-full pl-10 pr-4 py-2 bg-[#111C2B] border border-[#263449] rounded-xl text-xs sm:text-sm text-[#F4F7FA] placeholder-[#8190A3] focus:border-[#FF6A00] focus:outline-none"
            />
          </div>

          {/* Segmented Filter */}
          <div className="flex items-center gap-1 p-1 bg-[#111C2B] border border-[#263449] rounded-lg shrink-0">
            <button
              onClick={() => setStatusFilter('ALL')}
              className={`px-3 py-1.5 text-xs font-mono font-medium rounded-md transition-colors cursor-pointer ${
                statusFilter === 'ALL'
                  ? 'bg-[#172438] text-[#FF6A00] font-semibold border border-[#263449]'
                  : 'text-[#AAB7C7] hover:text-[#F4F7FA]'
              }`}
            >
              {t('explorer.filterAll', 'All Repositories')} ({observations.length})
            </button>
            <button
              onClick={() => setStatusFilter('DEPLOYMENTS')}
              className={`px-3 py-1.5 text-xs font-mono font-medium rounded-md transition-colors cursor-pointer ${
                statusFilter === 'DEPLOYMENTS'
                  ? 'bg-[#172438] text-[#FF6A00] font-semibold border border-[#263449]'
                  : 'text-[#AAB7C7] hover:text-[#F4F7FA]'
              }`}
            >
              {t('explorer.filterDeployments', 'Deployments')}
            </button>
          </div>
        </div>

        {/* Repositories Observation Table */}
        <div className="bg-[#111C2B] border border-[#263449] rounded-2xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-[#172438] text-[#8190A3] border-b border-[#263449]">
                <tr>
                  <th className="py-3 px-5">{t('explorer.thRepository', 'Repository')}</th>
                  <th className="py-3 px-5">{t('explorer.thBranch', 'Branch')}</th>
                  <th className="py-3 px-5">{t('explorer.thLatestCommit', 'Latest Commit & Message')}</th>
                  <th className="py-3 px-5">{t('explorer.thStatus', 'Audit State')}</th>
                  <th className="py-3 px-5">{t('explorer.thAuthor', 'Author / Time')}</th>
                  <th className="py-3 px-5 text-right">{t('explorer.thActions', 'Inspector')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#263449]/60">
                {filteredObservations.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="py-12 text-center text-xs text-[#8190A3]">
                      {refreshing ? 'Collecting real observations from Ecosystem Audit…' : observations.length === 0 ? 'No observations in this session. Click Atualizar auditoria to collect from GitHub.' : t('explorer.noReposFound', 'No repositories found matching your query.')}
                    </td>
                  </tr>
                ) : (
                  filteredObservations.map((obs) => (
                    <tr
                      key={obs.observation_id}
                      className="hover:bg-[#172438]/50 transition-colors group"
                    >
                      {/* Repo Name & Lang */}
                      <td className="py-3.5 px-5 whitespace-nowrap">
                        <div className="font-bold text-[#F4F7FA] group-hover:text-[#FF8A24] transition-colors flex items-center gap-1.5">
                          <span>{obs.source.name}</span>
                          {obs.source.private && (
                            <span className="text-[10px] text-[#8190A3] bg-[#07111F] px-1 py-0.2 rounded border border-[#263449]">
                              private
                            </span>
                          )}
                        </div>
                        <div className="text-[11px] text-[#8190A3]">
                          {obs.source.primary_language || 'Source'}
                        </div>
                      </td>

                      {/* Branch */}
                      <td className="py-3.5 px-5 text-[#38BDF8] whitespace-nowrap">
                        {obs.source.default_branch}
                      </td>

                      {/* Latest Commit */}
                      <td className="py-3.5 px-5 max-w-xs sm:max-w-md">
                        <div className="flex items-center gap-1.5 text-[11px] text-[#F4F7FA]">
                          <span className="text-[#FF8A24] font-bold">{obs.commit.sha}</span>
                          {obs.commit.verified && (
                            <span className="text-[10px] text-[#22C55E]">✓ verified</span>
                          )}
                        </div>
                        <div className="text-[11px] text-[#AAB7C7] truncate" title={obs.commit.message}>
                          {obs.commit.message}
                        </div>
                      </td>

                      {/* Audit State */}
                      <td className="py-3.5 px-5 whitespace-nowrap">
                        <StatusBadge
                          status={obs.ci?.status || 'OBSERVED'}
                          label={obs.observation_status || 'OBSERVED'}
                        />
                      </td>

                      {/* Author / Time */}
                      <td className="py-3.5 px-5 whitespace-nowrap text-[11px] text-[#8190A3]">
                        <div>{obs.commit.author}</div>
                        <div>{new Date(obs.commit.committed_at).toLocaleDateString()}</div>
                      </td>

                      {/* Actions */}
                      <td className="py-3.5 px-5 text-right whitespace-nowrap">
                        <button
                          onClick={() => setSelectedObservation(obs)}
                          className="px-2.5 py-1 text-xs font-mono text-[#FF6A00] hover:text-[#07111F] hover:bg-[#FF6A00] rounded transition-colors cursor-pointer border border-[#FF6A00]/40"
                        >
                          Payload
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Audit vs GitHub Inventory Provenance Card */}
        <div className="p-6 bg-[#111C2B] border border-[#263449] rounded-2xl space-y-3">
          <div className="font-mono text-xs text-[#F4F7FA] uppercase font-bold flex items-center gap-2">
            <Server className="w-4 h-4 text-[#38BDF8]" />
            <span>{t('explorer.sourceBreakdown', 'Provenance & Scope Distinction')}</span>
          </div>
          <p className="text-xs text-[#AAB7C7] leading-relaxed">
            {t(
              'explorer.provenanceNote',
              'According to ADR-001, Ecosystem Audit is the sole source of operational truth. Unmeasured attributes remain explicitly designated as NOT_MEASURED.'
            )}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs font-mono text-[#8190A3]">
            <div className="p-3 bg-[#07111F] rounded-lg border border-[#263449]">
              <span className="text-[#38BDF8] block font-semibold mb-1">Ecosystem Audit Engine:</span>
              <span>{t('explorer.sourceAuditDesc', 'Ecosystem Audit repository count is obtained from live observations.')}</span>
            </div>
            <div className="p-3 bg-[#07111F] rounded-lg border border-[#263449]">
              <span className="text-[#22C55E] block font-semibold mb-1">GitHub Organization:</span>
              <span>{t('explorer.sourceGithubDesc', 'GitHub organization accounts contain public and research repositories.')}</span>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL 1: Individual Observation Payload Inspector */}
      {selectedObservation && (
        <Modal
          isOpen={!!selectedObservation}
          onClose={() => setSelectedObservation(null)}
          title={`Observation: ${selectedObservation.source.name}`}
          subtitle={`ID: ${selectedObservation.observation_id}`}
          maxWidth="4xl"
        >
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 p-3 bg-[#07111F] rounded-xl border border-[#263449] text-xs font-mono">
              <div>
                <span className="text-[#8190A3]">Observed At: </span>
                <span className="text-[#F4F7FA]">{selectedObservation.observed_at}</span>
              </div>
              <div>
                <span className="text-[#8190A3]">Commit SHA: </span>
                <span className="text-[#FF8A24] font-bold">{selectedObservation.commit.sha}</span>
              </div>
            </div>

            <div className="p-4 bg-[#07111F] border border-[#263449] rounded-xl overflow-x-auto max-h-[50vh]">
              <pre className="font-mono text-xs text-[#38BDF8] leading-relaxed select-all">
                {JSON.stringify(selectedObservation, null, 2)}
              </pre>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSelectedObservation(null)}
              >
                Close Inspector
              </Button>
            </div>
          </div>
        </Modal>
      )}

      {/* MODAL 2: Deployment Telemetry Inspector */}
      {selectedDeployment && (
        <Modal
          isOpen={!!selectedDeployment}
          onClose={() => setSelectedDeployment(null)}
          title={`Deployment Telemetry: ${selectedDeployment.repository}`}
          subtitle={`Provider: ${selectedDeployment.deployment} · Region: ${selectedDeployment.region || 'europe-west1'}`}
          maxWidth="4xl"
        >
          <div className="space-y-4 text-xs font-mono">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-3 bg-[#07111F] border border-[#263449] rounded-lg">
                <span className="text-[#8190A3] block">Operational Status:</span>
                <span className="text-sm font-bold text-[#38BDF8]">{selectedDeployment.operational_status}</span>
              </div>
              <div className="p-3 bg-[#07111F] border border-[#263449] rounded-lg">
                <span className="text-[#8190A3] block">Verified Timestamp:</span>
                <span className="text-sm font-bold text-[#F4F7FA]">{selectedDeployment.verified_at}</span>
              </div>
            </div>

            {selectedDeployment.production_url && (
              <div className="p-3 bg-[#07111F] border border-[#263449] rounded-lg">
                <span className="text-[#8190A3] block mb-1">Production URL:</span>
                <a
                  href={selectedDeployment.production_url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#FF6A00] hover:text-[#FF8A24] flex items-center gap-1.5"
                >
                  <span>{selectedDeployment.production_url}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}

            {selectedDeployment.verification_note && (
              <div className="p-4 bg-[#172438] border border-[#263449] rounded-xl text-xs text-[#AAB7C7] leading-relaxed">
                <span className="text-[#FFB15C] font-bold block mb-1">Verification Note:</span>
                <p>{selectedDeployment.verification_note}</p>
              </div>
            )}

            {selectedDeployment.capabilities && (
              <div className="p-4 bg-[#07111F] border border-[#263449] rounded-xl space-y-2">
                <span className="text-[#8190A3] uppercase block">Declared & Verified Capabilities:</span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedDeployment.capabilities.map((cap) => (
                    <span
                      key={cap}
                      className="px-2 py-0.5 bg-[#172438] border border-[#263449] rounded text-[11px] text-[#F4F7FA]"
                    >
                      {cap}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="flex justify-end pt-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSelectedDeployment(null)}
              >
                Close Deployment Telemetry
              </Button>
            </div>
          </div>
        </Modal>
      )}

      {/* MODAL 3: Raw Audit Summary Payload */}
      {inspectingRawSummary && (
        <Modal
          isOpen={inspectingRawSummary}
          onClose={() => setInspectingRawSummary(false)}
          title={t('explorer.rawModalTitle', 'Raw Observation Payload & Provenance')}
          subtitle={t('explorer.rawModalSubtitle', 'Direct JSON response from Ecosystem Audit REST API')}
          maxWidth="4xl"
        >
          <div className="space-y-4">
            <div className="p-4 bg-[#07111F] border border-[#263449] rounded-xl overflow-x-auto max-h-[60vh]">
              <pre className="font-mono text-xs text-[#22C55E] leading-relaxed select-all">
                {JSON.stringify(summary, null, 2)}
              </pre>
            </div>

            <div className="flex justify-end pt-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setInspectingRawSummary(false)}
              >
                Close Payload Inspector
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};
