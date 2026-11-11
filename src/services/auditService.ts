/**
 * TRIMINDSLABS Ecosystem Audit & Engineering State Client
 * Consumes the live Ecosystem Audit REST API and GitHub telemetry.
 */

import {
  AuditSummary,
  RepositoryObservation,
  DeploymentTelemetry,
} from '../domain/types';
import { isAuditSummary } from '../domain/schemas';

export const AUDIT_API_BASE = 'https://triminds-ecosystem-audit-72mbkllrqa-ew.a.run.app';
export const GITHUB_API_URL = 'https://api.github.com/users/RodrigoDiasDeOliveira/repos?per_page=100';

export interface AuditFetchResult<T> {
  data: T | null;
  source: 'LIVE_AUDIT_API' | 'SESSION_OBSERVATION' | 'UNAVAILABLE';
  timestamp: string;
  error?: string | null;
}

// In-memory cache
let cachedSummary: AuditSummary | null = null;
let cachedObservations: RepositoryObservation[] | null = null;
let cachedDeployments: Record<string, DeploymentTelemetry> = {};

/**
 * Fetch live Audit Summary from Cloud Run endpoint
 */
export async function fetchAuditSummary(forceRefresh = false): Promise<AuditFetchResult<AuditSummary>> {
  try {

    const endpoint = `${AUDIT_API_BASE}/api/v1/audit/summary?force_refresh=${forceRefresh}&_ts=${Date.now()}`;
    const response = await fetch(endpoint, {
      headers: { Accept: 'application/json' },
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`Audit API responded with HTTP status ${response.status}`);
    }

    const data = await response.json();
    if (!isAuditSummary(data)) {
      throw new Error('Ecosystem Audit API payload failed schema validation');
    }

    cachedSummary = data;
    return {
      data,
      source: 'LIVE_AUDIT_API',
      timestamp: data.last_audit_timestamp,
    };
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'Network error';
    return {
      data: cachedSummary,
      source: cachedSummary ? 'SESSION_OBSERVATION' : 'UNAVAILABLE',
      timestamp: cachedSummary?.last_audit_timestamp || '',
      error: `Live audit summary unavailable (${msg}). ${cachedSummary ? 'Displaying previously received live data.' : 'No verified data available.'}`,
    };
  }
}

/**
 * Fetch live repository observations from Ecosystem Audit
 */
export async function fetchEcosystemObservations(forceRefresh = false): Promise<AuditFetchResult<RepositoryObservation[]>> {
  try {

    const endpoint = `${AUDIT_API_BASE}/api/v1/audit/ecosystem/observations?force_refresh=${forceRefresh}&_ts=${Date.now()}`;
    const response = await fetch(endpoint, {
      headers: { Accept: 'application/json' },
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`Observations API responded with HTTP ${response.status}`);
    }

    const data = await response.json();
    if (data && Array.isArray(data.repositories)) {
      cachedObservations = data.repositories as RepositoryObservation[];
      return {
        data: cachedObservations,
        source: 'LIVE_AUDIT_API',
        timestamp: data.observed_at || new Date().toISOString(),
      };
    }
    throw new Error('Observations endpoint returned malformed repository list');
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'Network error';
    return {
      data: cachedObservations || [],
      source: cachedObservations ? 'SESSION_OBSERVATION' : 'UNAVAILABLE',
      timestamp: '',
      error: `Live audit observations unavailable (${msg}). ${cachedObservations ? 'Displaying previously received live data.' : 'No verified data available.'}`,
    };
  }
}

/**
 * Fetch specific deployment telemetry for Cloud Run services
 */
export async function fetchDeploymentTelemetry(deploymentId: string): Promise<DeploymentTelemetry | null> {
  if (cachedDeployments[deploymentId]) {
    return cachedDeployments[deploymentId];
  }

  try {
    const response = await fetch(`${AUDIT_API_BASE}/api/v1/deployments/${deploymentId}`);
    if (response.ok) {
      const data = await response.json() as DeploymentTelemetry;
      cachedDeployments[deploymentId] = data;
      return data;
    }
  } catch {
    // Return null on failure
  }
  return null;
}


/** Last verified observations remain in memory only for the current page session. */
export function getSessionAuditData() {
  return { summary: cachedSummary, observations: cachedObservations };
}
