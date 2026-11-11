# TRIMINDSLABS Product Catalog & Taxonomy Model

## 1. Product Family Taxonomy

The platform organizes systems into formal engineering families:

1. **Document Intelligence & Compliance (`TAX-01-DOC-COMPLIANCE`)**
   - High-assurance regulatory extraction, legal deconstruction, and deterministic evidence binding.
2. **Geospatial Intelligence (`TAX-02-GEO-AI`)**
   - Earth observation platforms, Cloud Optimized GeoTIFF (COG) streaming, and multispectral band mathematics.
3. **Logistics & Industrial Traceability (`TAX-03-LOGISTICS`)**
   - Multimodal supply chain orchestration and edge computer vision object scanning.
4. **Cloud & AI Operations (`TAX-04-CLOUD-AI-OPS`)**
   - Model Context Protocol (FastMCP) servers enabling agentic multi-cloud infrastructure control.
5. **Developer Tools & Database Intelligence (`TAX-05-DEVTOOLS`)**
   - Local neural assistance for PostgreSQL pgvector query optimization.

---

## 2. Product Identity & Negative Boundaries

### Crucial Architectural Distinctions:
- **MiniRAG vs MiniRAGv2**:
  MiniRAG was an experimental research baseline using cosine similarity. MiniRAGv2 introduced deterministic rejection filters and character bounding offsets, laying the architectural foundation for Compliance Evidence Engine.
- **Compliance Evidence Engine v5**:
  A production-grade regulatory extraction system with strict character-offset verification under the EU AI Act, distinct from general legal assistants.
- **TLP Next-Gen vs Object Scanner V2**:
  TLP Next-Gen is an enterprise web application deployed on Google Cloud Run with React and Spring Boot. Object Scanner V2 is a separate native Android and Python tool, NOT an embedded Android component within TLP.
