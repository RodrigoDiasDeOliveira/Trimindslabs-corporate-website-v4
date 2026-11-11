# ADR-002: Deterministic Character-Offset Verification in Document Intelligence

- **Status:** ACCEPTED
- **Date:** 2026-10-18
- **Scope:** Compliance & Legal Extraction Engines

## Context

Legal and regulatory applications operating under the European AI Act require absolute citation accuracy.
Generative models relying solely on cosine similarity frequently produce plausible-sounding but non-existent legal references.
In high-assurance regulatory compliance, hallucinated legal citations create catastrophic corporate liability.

## Decision

1. All compliance extraction systems must bind extracted claims to character-offset bounding boxes in the primary legal text.
2. Cross-encoder neural reranking (BGE-Reranker-Large) evaluates context relevance prior to synthesis.
3. Outputs failing exact character-level string matching are rejected prior to UI rendering.
4. Replace conversational chat with structured compliance tables and diff metrics.

## Consequences

- Zero ungrounded legal citations are surfaced to enterprise compliance counsel.
- Layout-preserving PDF deconstruction pipelines are required.
- Modest processing latency increase of ~120ms per document for character boundary verification.
