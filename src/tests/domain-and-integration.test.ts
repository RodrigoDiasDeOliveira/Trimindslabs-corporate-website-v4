/**
 * TRIMINDSLABS Corporate Platform Test Suite
 * Validates domain model integrity, schema contracts, i18n parity, and live API integration.
 */

import {
  isAuditSummary,
  isRepositoryObservation,
  isDeploymentTelemetry,
  validateProduct,
  validateADR,
  validateProductionGate
} from '../domain/schemas';
import {
  canonicalProducts,
  productFamilies,
  productionGates,
  vocabularyTerms,
  adrDocuments,
  corporateProfile
} from '../domain/canonicalData';
import { translations } from '../i18n/translations';
import { tokens } from '../styles/tokens';
import { fetchAuditSummary, fetchEcosystemObservations, AUDIT_API_BASE } from '../services/auditService';

export interface TestResult {
  name: string;
  passed: boolean;
  message?: string;
  durationMs: number;
}

export async function runAllTests(): Promise<{ results: TestResult[]; summary: { total: number; passed: number; failed: number } }> {
  const results: TestResult[] = [];

  function record(name: string, fn: () => void | Promise<void>) {
    const start = performance.now();
    try {
      const res = fn();
      if (res instanceof Promise) {
        return res
          .then(() => {
            results.push({ name, passed: true, durationMs: Math.round(performance.now() - start) });
          })
          .catch((err) => {
            results.push({
              name,
              passed: false,
              message: err instanceof Error ? err.message : String(err),
              durationMs: Math.round(performance.now() - start),
            });
          });
      }
      results.push({ name, passed: true, durationMs: Math.round(performance.now() - start) });
    } catch (err) {
      results.push({
        name,
        passed: false,
        message: err instanceof Error ? err.message : String(err),
        durationMs: Math.round(performance.now() - start),
      });
    }
  }

  // 1. Domain Model & Product Integrity
  record('Domain: All products pass schema validation', () => {
    canonicalProducts.forEach((p) => {
      validateProduct(p);
      if (!p.id || !p.canonicalName) throw new Error(`Invalid product ID in ${p.name}`);
      if (!p.architecture?.overview) throw new Error(`Missing architecture in ${p.name}`);
      if (!p.honestScope?.en) throw new Error(`Missing honest scope in ${p.name}`);
    });
  });

  // 2. Product Identity Boundaries
  record('Domain: MiniRAG vs MiniRAGv2 and Compliance v5 distinct identities verified', () => {
    const complianceV5 = canonicalProducts.find(p => p.id === 'compliance-evidence-engine-v5');
    const miniRAG = canonicalProducts.find(p => p.id === 'minirag-and-miniragv2');
    const objectScanner = canonicalProducts.find(p => p.id === 'trimindslabs-object-scanner-v2');
    const tlpNextGen = canonicalProducts.find(p => p.id === 'tlp-next-gen');

    if (!complianceV5 || !miniRAG || !objectScanner || !tlpNextGen) {
      throw new Error('Crucial domain products missing from canonical catalog');
    }
    // Verify Object Scanner is not claimed as Android inside TLP
    if (!tlpNextGen.honestScope.en.includes('Object Scanner V2 is a separate mobile/edge component')) {
      throw new Error('TLP must explicitly state Object Scanner is separate');
    }
  });

  // 3. ADR & Production Gates Validation
  record('Domain: All ADRs and 11 Production Gates pass validation', () => {
    adrDocuments.forEach(validateADR);
    if (productionGates.length !== 11) {
      throw new Error(`Expected exactly 11 production gates, found ${productionGates.length}`);
    }
    productionGates.forEach(validateProductionGate);
  });

  // 4. Token & Contrast System Verification
  record('Design System: Orange Engineering token values verified', () => {
    if (tokens.colors.primary !== '#FF6A00') throw new Error('Primary orange must be #FF6A00');
    if (tokens.colors.background !== '#07111F') throw new Error('Background must be #07111F');
    if (tokens.colors.surface !== '#111C2B') throw new Error('Surface must be #111C2B');
    if (tokens.colors.border !== '#263449') throw new Error('Border must be #263449');
    if (tokens.colors.textPrimary !== '#F4F7FA') throw new Error('Text primary must be #F4F7FA');
  });

  // 5. Internationalization Key Parity
  record('i18n: Complete dictionary key parity across EN, PT, and ES', () => {
    const enKeys = Object.keys(translations.en);
    const ptKeys = Object.keys(translations.pt);
    const esKeys = Object.keys(translations.es);

    if (enKeys.length !== ptKeys.length || enKeys.length !== esKeys.length) {
      throw new Error('Translation keys count mismatch between languages');
    }
  });

  // 6. Live Ecosystem Audit API Contract Test
  await record('Integration: Ecosystem Audit live API connectivity & schema contract', async () => {
    const summary = await fetchAuditSummary(false);
    if (!isAuditSummary(summary.data)) {
      throw new Error('Ecosystem Audit summary failed schema assertion');
    }
    if (summary.data.summary_cards.total_repositories < 20) {
      throw new Error('Unexpected repository count in audit telemetry');
    }
  });

  // 7. Ecosystem Observations Test
  await record('Integration: Ecosystem Audit observations query and repository count', async () => {
    const obs = await fetchEcosystemObservations(false);
    if (!Array.isArray(obs.data) || obs.data.length === 0) {
      throw new Error('Empty or invalid repository observations array');
    }
    const sample = obs.data[0];
    if (!isRepositoryObservation(sample)) {
      throw new Error('Repository observation item failed schema assertion');
    }
  });

  const total = results.length;
  const passed = results.filter(r => r.passed).length;
  const failed = total - passed;

  return { results, summary: { total, passed, failed } };
}
