/**
 * TRIMINDSLABS Corporate Platform — Next Generation
 * Core Domain Model & Typed Entity Definitions
 */

export type SupportedLanguage = 'en' | 'pt' | 'es';

export type TruthStatus = 'implemented' | 'partial' | 'planned';
export type OperationalStage = 'deployed' | 'validation' | 'specification';
export type PublicationStatus = 'published' | 'draft' | 'archived';

export interface CorporateProfile {
  name: string;
  tagline: string;
  positioning: string;
  engineeringPrinciples: {
    id: string;
    title: string;
    description: string;
    evidenceMethod: string;
  }[];
  focalAreas: {
    id: string;
    name: string;
    description: string;
    techStack: string[];
  }[];
  contactAliases: {
    inquiries: string;
    engineering: string;
    security: string;
  };
}

export interface ProductFamily {
  id: string;
  name: Record<SupportedLanguage, string>;
  description: Record<SupportedLanguage, string>;
  icon: string;
  taxonomyCode: string;
  productCount?: number;
}

export interface ProjectDecision {
  decision: string;
  rationale: string;
}

export interface ProjectResult {
  metric: string;
  value: string;
  description: string;
}

export interface ProjectArchitecture {
  overview: string;
  components: string[];
  diagramText: string;
}

export interface RealArchitectureVerification {
  documented: string;
  implemented: string;
  presentedOnSite: string;
  coherenceScore: string;
}

export interface RealTechnologies {
  languages?: string[];
  frameworks?: string[];
  libraries?: string[];
  databases?: string[];
  cloud?: string[];
  iac?: string[];
  apis?: string[];
  testing?: string[];
  ciCd?: string[];
  observability?: string[];
}

export interface ProjectRepository {
  name: string;
  isPrivate: boolean;
  visibilityBadge: string;
  url?: string;
  testSuiteStatus?: string;
  ciCdPipeline?: string;
  adrReferences?: string[];
}

export interface Product {
  id: string;
  familyId: string;
  name: string;
  canonicalName: string;
  subtitle: Record<SupportedLanguage, string>;
  domain: 'compliance' | 'geospatial' | 'logistics' | 'platform' | 'developer_tools' | 'cloud_ops';
  tag: string;
  sector: Record<SupportedLanguage, string>;
  truthStatus: TruthStatus;
  operationalStage: OperationalStage;
  publicationStatus: PublicationStatus;
  honestScope: Record<SupportedLanguage, string>;
  whatItProves: Record<SupportedLanguage, string>;
  problem: Record<SupportedLanguage, string>;
  context: Record<SupportedLanguage, string>;
  architecture: ProjectArchitecture;
  realArchitectureVerification: RealArchitectureVerification;
  realTechnologies: RealTechnologies;
  repository?: ProjectRepository;
  engineering: Record<SupportedLanguage, string[]>;
  evolution?: Record<SupportedLanguage, string>;
  challenges: Record<SupportedLanguage, string[]>;
  decisions: ProjectDecision[];
  results: ProjectResult[];
  evidence: Record<SupportedLanguage, string>;
  deployment?: {
    url?: string | null;
    status?: string | null;
    region?: string | null;
    evidence_status?: string | null;
  } | null;
}

export interface ProductionGate {
  id: string;
  name: string;
  phase: string;
  evidence: string;
  status: 'verified' | 'in-progress' | 'pending';
}

export interface VocabularyTerm {
  term: string;
  definition: string;
  shortDefinition?: string;
  contrastingAntiPattern?: string;
}

export interface ArchitectureDocument {
  id: string;
  title: string;
  version: string;
  category: 'core' | 'retrieval' | 'multi_cloud' | 'governance';
  date: string;
  relatedProduct: string;
  summary: string;
  diagram: string;
  pillars: string[];
}

export interface ADRDocument {
  id: string;
  title: string;
  status: 'ACCEPTED' | 'PROPOSED' | 'DEPRECATED';
  date: string;
  scope: string;
  context: string;
  decision: string;
  consequences: string[];
}

export interface AuditLogItem {
  repository: string;
  event: string;
  commit_sha: string;
  status: string;
  timestamp: string;
}

export interface AuditSummary {
  system_status: string;
  last_audit_timestamp: string;
  summary_cards: {
    total_repositories: number;
    pipeline_success_rate: string;
    security_compliance: string;
    active_deployments?: number | null;
  };
  audit_logs: AuditLogItem[];
}

export interface RepositoryObservation {
  schema_version?: string;
  observation_id: string;
  observed_at: string;
  observation_status?: string;
  source: {
    provider: string;
    owner: string;
    name: string;
    full_name: string;
    html_url: string;
    default_branch: string;
    private: boolean;
    description: string | null;
    primary_language: string | null;
    topics?: string[];
    archived?: boolean;
    created_at?: string;
    updated_at?: string;
  };
  commit: {
    sha: string;
    message: string;
    committed_at: string;
    author: string;
    verified: boolean;
    verification_reason?: string;
    html_url?: string;
  };
  ci?: {
    status: string;
    workflow_name?: string | null;
    completed_at?: string | null;
  };
  validation?: {
    status: string;
    static_audit?: string;
    tests?: string;
    runtime?: string;
    deployment?: string;
    notes?: string[];
  };
  evidence?: {
    type: string;
    reference: string;
    description: string;
  }[];
}

export interface DeploymentTelemetry {
  repository: string;
  status: string;
  operational_status: string;
  deployment: string;
  region?: string;
  production_url?: string;
  verified_at?: string;
  verification_note?: string;
  architecture?: string;
  database?: string;
  evidence?: string;
  capabilities?: string[];
}

export interface OperationalSource {
  id: string;
  name: string;
  type: 'audit_api' | 'portfolio_system' | 'github_api';
  status: 'CONNECTED' | 'NOT_VERIFIED' | 'OFFLINE';
  endpoint: string;
  lastObservation: string;
  observationScopeCount: number;
}
