/**
 * TRIMINDSLABS Schema Validation & Type Assertion Utility
 * Validates domain objects, API payloads, and states without relying on brittle assumptions.
 */

import {
  Product,
  ProductFamily,
  AuditSummary,
  RepositoryObservation,
  DeploymentTelemetry,
  ProductionGate,
  ADRDocument
} from './types';

export function isAuditSummary(obj: unknown): obj is AuditSummary {
  if (!obj || typeof obj !== 'object') return false;
  const o = obj as Record<string, unknown>;
  return (
    typeof o.system_status === 'string' &&
    typeof o.last_audit_timestamp === 'string' &&
    typeof o.summary_cards === 'object' &&
    o.summary_cards !== null &&
    Array.isArray(o.audit_logs)
  );
}

export function isRepositoryObservation(obj: unknown): obj is RepositoryObservation {
  if (!obj || typeof obj !== 'object') return false;
  const o = obj as Record<string, unknown>;
  return (
    typeof o.observation_id === 'string' &&
    typeof o.observed_at === 'string' &&
    typeof o.source === 'object' &&
    o.source !== null &&
    typeof o.commit === 'object' &&
    o.commit !== null
  );
}

export function isDeploymentTelemetry(obj: unknown): obj is DeploymentTelemetry {
  if (!obj || typeof obj !== 'object') return false;
  const o = obj as Record<string, unknown>;
  return (
    typeof o.repository === 'string' &&
    typeof o.status === 'string' &&
    typeof o.deployment === 'string'
  );
}

export function validateProduct(product: unknown): Product {
  if (!product || typeof product !== 'object') {
    throw new Error('Product payload is not a valid object');
  }
  const p = product as Partial<Product>;
  if (!p.id || !p.canonicalName || !p.truthStatus) {
    throw new Error(`Product missing required fields: ${p.id || 'unknown'}`);
  }
  return p as Product;
}

export function validateProductFamily(family: unknown): ProductFamily {
  if (!family || typeof family !== 'object') {
    throw new Error('Product family is not an object');
  }
  const f = family as Partial<ProductFamily>;
  if (!f.id || !f.name || !f.taxonomyCode) {
    throw new Error(`Product family missing required taxonomy: ${f.id || 'unknown'}`);
  }
  return f as ProductFamily;
}

export function validateADR(adr: unknown): ADRDocument {
  if (!adr || typeof adr !== 'object') {
    throw new Error('ADR is not a valid object');
  }
  const a = adr as Partial<ADRDocument>;
  if (!a.id || !a.title || !a.status || !a.decision) {
    throw new Error(`ADR schema violation on ID: ${a.id || 'unknown'}`);
  }
  return a as ADRDocument;
}

export function validateProductionGate(gate: unknown): ProductionGate {
  if (!gate || typeof gate !== 'object') {
    throw new Error('Gate is not a valid object');
  }
  const g = gate as Partial<ProductionGate>;
  if (!g.id || !g.name || !g.phase || !g.evidence) {
    throw new Error(`Production gate schema error on ID: ${g.id || 'unknown'}`);
  }
  return g as ProductionGate;
}
