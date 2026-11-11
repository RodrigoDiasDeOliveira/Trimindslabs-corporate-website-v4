/**
 * TRIMINDSLABS Canonical Domain Data Snapshot
 * Verified baseline data aligned with Ecosystem Audit API and GitHub repositories.
 */

import {
  CorporateProfile,
  ProductFamily,
  Product,
  ProductionGate,
  VocabularyTerm,
  ADRDocument,
  ArchitectureDocument,
  OperationalSource
} from './types';

export const corporateProfile: CorporateProfile = {
  name: 'TRIMINDSLABS',
  tagline: 'Engineering Intelligent Systems',
  positioning: 'Enterprise-grade systems engineering, deterministic artificial intelligence architectures, geospatial processing, and audit-driven cloud platforms.',
  engineeringPrinciples: [
    {
      id: 'principle-1',
      title: 'Deterministic Verification Over Probabilistic Assumptions',
      description: 'Generative models provide synthesis; deterministic software contracts enforce truth. Every generated assertion must bind to verified character-offsets or cryptographic evidence.',
      evidenceMethod: 'Character-Offset Bounding Box Validation & SHA-256 block hashing',
    },
    {
      id: 'principle-2',
      title: 'Audit as the Source of Operational Truth',
      description: 'The corporate platform is a presentation layer. It must never fabricate uptime, maturity, or pipeline pass rates. If a metric is unmeasured, it must be explicitly labeled NOT_MEASURED.',
      evidenceMethod: 'Ecosystem Audit REST Telemetry & Observation Engine',
    },
    {
      id: 'principle-3',
      title: 'Strict Architecture Separation',
      description: 'Editorial presentation, portfolio valuation, and runtime audit are distinct entities with independent life-cycles and data sources.',
      evidenceMethod: 'Independent repository and container isolation on European Cloud Run',
    },
    {
      id: 'principle-4',
      title: 'Reproducible Build & Gate Discipline',
      description: 'Releases pass through 11 formal production gates. No project moves to production without containerized isolation, schema verification, and reproducible CI tests.',
      evidenceMethod: 'Automated CI/CD gates, Pydantic V2 contracts, and open-source verification',
    },
  ],
  focalAreas: [
    {
      id: 'focal-compliance',
      name: 'Regulatory AI & Document Intelligence',
      description: 'Deterministic RAG and legal compliance extraction with exact offset bounding box verification under the EU AI Act.',
      techStack: ['Python 3.12', 'FastAPI', 'Pydantic V2', 'Qdrant', 'BM25', 'BGE-Reranker'],
    },
    {
      id: 'focal-geospatial',
      name: 'Geospatial AI & Earth Observation',
      description: 'Cloud-native satellite imagery deconstruction, Cloud Optimized GeoTIFF (COG) streaming, NDVI/EVI analysis, and carbon monitoring.',
      techStack: ['Python', 'GDAL', 'Rasterio', 'Sentinel-2 L2A', 'Google Cloud Run (EU)', 'PostGIS'],
    },
    {
      id: 'focal-cloud',
      name: 'Multi-Cloud & Autonomous AI Agents',
      description: 'Model Context Protocol (MCP) servers enabling agentic control over AWS, Azure, GCP, and Oracle OCI with session isolation.',
      techStack: ['FastMCP', 'Python', 'OCI SDK', 'GCP Cloud Run', 'Azure Cognitive Services'],
    },
    {
      id: 'focal-logistics',
      name: 'Logistics & Industrial Vision',
      description: 'Next-gen enterprise tracking platforms paired with discrete edge object scanning for automated industrial counting.',
      techStack: ['React', 'Spring Boot 3', 'PostgreSQL 16', 'Docker', 'Computer Vision'],
    },
  ],
  contactAliases: {
    inquiries: 'contact@trimindslabs.com',
    engineering: 'engineering@trimindslabs.com',
    security: 'security@trimindslabs.com',
  },
};

export const productFamilies: ProductFamily[] = [
  {
    id: 'compliance',
    name: {
      en: 'Document Intelligence & Compliance',
      pt: 'Inteligência Documental & Compliance',
      es: 'Inteligencia Documental y Cumplimiento',
    },
    description: {
      en: 'High-assurance regulatory extraction, legal deconstruction, and deterministic evidence binding for enterprise governance.',
      pt: 'Extração regulatória de alta confiabilidade e vinculação determinística de evidências para governança corporativa.',
      es: 'Extracción regulatoria de alta fiabilidad y vinculación determinista de evidencias para gobernanza corporativa.',
    },
    icon: 'FileCheck2',
    taxonomyCode: 'TAX-01-DOC-COMPLIANCE',
  },
  {
    id: 'geospatial',
    name: {
      en: 'Geospatial Intelligence',
      pt: 'Inteligência Geoespacial',
      es: 'Inteligencia Geoespacial',
    },
    description: {
      en: 'Earth observation platforms, multispectral satellite indices, and land-use classification using Cloud Optimized GeoTIFFs.',
      pt: 'Plataformas de observação da terra, índices multiespectrais de satélite e classificação de uso do solo com COGs.',
      es: 'Plataformas de observación terrestre, índices multiespectrales satelitales y clasificación de uso del suelo.',
    },
    icon: 'Globe2',
    taxonomyCode: 'TAX-02-GEO-AI',
  },
  {
    id: 'logistics',
    name: {
      en: 'Logistics & Industrial Traceability',
      pt: 'Logística & Rastreabilidade Industrial',
      es: 'Logística y Trazabilidad Industrial',
    },
    description: {
      en: 'End-to-end supply chain orchestration paired with computer vision edge object scanning for automated counting.',
      pt: 'Orquestração de suprimentos ponta a ponta combinada com visão computacional de borda para contagem automatizada.',
      es: 'Orquestación de cadena de suministro combinada con visión por computadora para conteo automatizado.',
    },
    icon: 'Truck',
    taxonomyCode: 'TAX-03-LOGISTICS',
  },
  {
    id: 'cloud_ops',
    name: {
      en: 'Cloud & AI Operations (MCP)',
      pt: 'Operações em Nuvem & IA (MCP)',
      es: 'Operaciones en Nube e IA (MCP)',
    },
    description: {
      en: 'Model Context Protocol infrastructure enabling natural language infrastructure orchestration across multi-cloud enclaves.',
      pt: 'Infraestrutura Model Context Protocol para orquestração de nuvem múltipla via linguagem natural.',
      es: 'Infraestructura Model Context Protocol para orquestación multinube mediante lenguaje natural.',
    },
    icon: 'CloudCog',
    taxonomyCode: 'TAX-04-CLOUD-AI-OPS',
  },
  {
    id: 'developer_tools',
    name: {
      en: 'Developer Tools & Database Intelligence',
      pt: 'Ferramentas de Desenvolvimento & Banco de Dados',
      es: 'Herramientas de Desarrollador e Inteligencia de Datos',
    },
    description: {
      en: 'Local AI extensions for IDEs, pgvector query optimization, and offline neural assistance without cloud data leakage.',
      pt: 'Extensões de IA locais para IDEs, otimização de consultas pgvector e assistência neural offline sem vazamento de dados.',
      es: 'Extensiones locales de IA para IDEs, optimización de consultas pgvector y asistencia neural sin fuga de datos.',
    },
    icon: 'Terminal',
    taxonomyCode: 'TAX-05-DEVTOOLS',
  },
];

export const canonicalProducts: Product[] = [
  {
    id: 'compliance-evidence-engine-v5',
    familyId: 'compliance',
    name: 'Compliance Evidence Engine v5',
    canonicalName: 'Trimindslabs-Compliance-Evidence-Engine-v5',
    subtitle: {
      en: 'Deterministic Regulatory Audit & Legal Extraction with Character-Offset Provenance',
      pt: 'Auditoria Regulatória Determinística e Extração Legal com Procedência por Offset',
      es: 'Auditoría Regulatoria Determinista y Extracción Legal con Procedencia por Offset',
    },
    domain: 'compliance',
    tag: 'Regulatory AI / High-Assurance Retrieval',
    sector: {
      en: 'European Regulatory Compliance & EU AI Act Governance',
      pt: 'Compliance Regulatório Europeu & Governança EU AI Act',
      es: 'Cumplimiento Regulatorio Europeo y Gobernanza EU AI Act',
    },
    truthStatus: 'implemented',
    operationalStage: 'deployed',
    publicationStatus: 'published',
    honestScope: {
      en: 'Engineered for corporate legal compliance with character-offset verification and deterministic fallback gates. Discards ungrounded assertions.',
      pt: 'Projetado para compliance jurídico com verificação por offset de caracteres e gates determinísticos de fallback. Descarta afirmações não fundamentadas.',
      es: 'Diseñado para cumplimiento jurídico con verificación por offset de caracteres y compuertas deterministas. Descarta afirmaciones no fundamentadas.',
    },
    whatItProves: {
      en: 'Proves that Trimindslabs builds verifiable legal retrieval systems where citation hallucinations are strictly forbidden.',
      pt: 'Comprova que a Trimindslabs desenvolve sistemas de recuperação jurídica auditáveis onde alucinações de citações são estritamente proibidas.',
      es: 'Demuestra que Trimindslabs desarrolla sistemas de recuperación jurídica auditables con tolerancia cero a alucinaciones de citas.',
    },
    problem: {
      en: 'Legal and compliance teams spend weeks cross-referencing multi-jurisdictional EU directives. Standard LLMs hallucinate non-existent article clauses, creating critical liability under the EU AI Act.',
      pt: 'Equipes jurídicas levam semanas cruzando diretivas da UE. Modelos tradicionais alucinam cláusulas inexistentes, criando risco de conformidade severo.',
      es: 'Los equipos jurídicos tardan semanas cruzando directivas de la UE. Los modelos estándar alucinan cláusulas inexistentes, generando graves riesgos legales.',
    },
    context: {
      en: 'Operates as a high-risk compliance engine demanding traceable document provenance to character bounding spans and SHA-256 paragraph signatures.',
      pt: 'Opera como motor de conformidade de alto risco exigindo procedência documental auditável até coordenadas de caracteres e assinaturas SHA-256.',
      es: 'Opera como motor de cumplimiento exigiendo procedencia documental auditable hasta coordenadas de caracteres y firmas SHA-256.',
    },
    architecture: {
      overview: '3-tier verification pipeline: Structured lexical/dense ingestion -> Neural cross-encoder reranking -> JSON-schema enforced synthesis with character-offset matching.',
      components: [
        'Document Deconstruction Engine (PDF/XML parser with layout preservation)',
        'Deterministic Provenance Index with SHA-256 paragraph fingerprinting',
        'Dual-Pass Verification Loop with lexical ground truth rejection',
        'Isolated containerized execution runtime in European Cloud Run',
      ],
      diagramText: 'Document Ingestion -> Structured Chunking -> Dual Index (BM25 + Qdrant) -> BGE-Reranker-Large -> Schema Enforcement -> Verified Audit Certificate',
    },
    realArchitectureVerification: {
      documented: 'Dual-stage retrieval with cross-encoder neural reranking and Pydantic V2 contracts.',
      implemented: 'FastAPI service with BM25 sparse index + Qdrant dense vectors, Reciprocal Rank Fusion, and BGE-Reranker-Large.',
      presentedOnSite: 'Accurately described as Python 3.12 / FastAPI + Qdrant + BGE-Reranker without unverified claims.',
      coherenceScore: '100% Coherent',
    },
    realTechnologies: {
      languages: ['Python 3.12'],
      frameworks: ['FastAPI', 'Pydantic V2'],
      libraries: ['BGE-Reranker-Large', 'HuggingFace Transformers', 'PyPDF', 'PDFPlumber'],
      databases: ['Qdrant Vector Database', 'SQLite (Audit Trail)'],
      cloud: ['Google Cloud Run (europe-west1)', 'Google Cloud Storage'],
      iac: ['Docker multi-stage builds', 'Terraform Blueprints'],
      apis: ['REST OpenAPI 3.1', 'Server-Sent Events (SSE)'],
      testing: ['Pytest', 'Property-based verification'],
      ciCd: ['GitHub Actions (lint, typecheck, bandit security audit)'],
      observability: ['OpenTelemetry Python SDK', 'Structured JSON Logging'],
    },
    repository: {
      name: 'Trimindslabs-Compliance-Evidence-Engine-v5',
      isPrivate: false,
      visibilityBadge: 'PUBLIC_REPOSITORY',
      url: 'https://github.com/RodrigoDiasDeOliveira',
      testSuiteStatus: 'PASSING',
      ciCdPipeline: 'GITHUB_ACTIONS_ACTIVE',
      adrReferences: ['ADR-001', 'ADR-002'],
    },
    engineering: {
      en: [
        'Rejection loop that discards any answer without exact character-level string match against the primary legal text.',
        'Asynchronous stream pipeline processing 500+ page directives in sub-second chunk intervals.',
        'Distributed OpenTelemetry spans tracking exact confidence scores for every extracted citation clause.',
      ],
      pt: [
        'Loop de rejeição que descarta qualquer resposta sem correspondência exata de caracteres no texto primário.',
        'Pipeline assíncrono processando diretivas de mais de 500 páginas com latência p95 previsível.',
        'Spans distribuídos OpenTelemetry monitorando a pontuação de confiança de cada cláusula extraída.',
      ],
      es: [
        'Bucle de rechazo que descarta respuestas sin coincidencia exacta de caracteres en el texto primario.',
        'Pipeline asíncrono que procesa directivas extensas en intervalos de sub-segundo.',
        'Trazabilidad OpenTelemetry que audita la confianza de cada cláusula extraída.',
      ],
    },
    evolution: {
      en: 'Evolved from MiniRAG (initial prototype) through Compliance Evidence Engine v1-v4, culminating in v5 with strict cryptographic bounding-box verification and formal release gates.',
      pt: 'Evoluiu do MiniRAG (protótipo inicial) passando pelas versões v1-v4 do Compliance Evidence Engine, culminando na v5 com verificação criptográfica por bounding-box.',
      es: 'Evolucionó desde MiniRAG hasta Compliance Evidence Engine v5 con estricta verificación criptográfica y compuertas de release formal.',
    },
    challenges: {
      en: [
        'Normalizing complex multi-column gazette layouts across 24 official European languages.',
        'Preventing semantic leakage across divergent national member-state transpositions.',
        'Maintaining deterministic p95 sub-second search across multi-gigabyte legal corpora.',
      ],
      pt: [
        'Normalizar diagramações em múltiplas colunas de diários oficiais em 24 idiomas da UE.',
        'Evitar vazamento semântico entre diretivas da UE e transposições de estados-membros.',
        'Garantir latência p95 sub-segundo sobre bases legais com múltiplos gigabytes.',
      ],
      es: [
        'Normalizar maquetaciones complejas en diarios oficiales en 24 idiomas europeos.',
        'Evitar fugas semánticas entre directivas comunitarias y leyes nacionales.',
        'Mantener latencia predecible en corpus regulatorios extensos.',
      ],
    },
    decisions: [
      {
        decision: 'Enforce character-offset verification before displaying citations in the UI.',
        rationale: 'Allows corporate legal counsel to click any highlighted phrase and verify the primary source immediately.',
      },
      {
        decision: 'Reject generic conversational chat in favor of structured compliance risk tables.',
        rationale: 'Enterprise auditors require structured risk diffs, not ungrounded informal chatbot conversations.',
      },
    ],
    results: [
      {
        metric: 'Citation Provenance',
        value: 'Exact Offset Bound',
        description: 'Binds generated clauses directly to character positions in primary sources',
      },
      {
        metric: 'Schema Integrity',
        value: 'Pydantic V2 Enforced',
        description: 'Zero malformed responses through strict runtime type validation',
      },
      {
        metric: 'Hybrid Search Fusion',
        value: 'BM25 + Qdrant RRF',
        description: 'Fuses exact technical terminology matching with dense vector context',
      },
    ],
    evidence: {
      en: 'Verified in Ecosystem Audit API observation log with active commits, ADR references, and CI telemetry.',
      pt: 'Verificado nos logs de observação da API Ecosystem Audit com commits ativos, ADRs e telemetria de CI.',
      es: 'Verificado en los registros de la API Ecosystem Audit con commits activos y telemetría de CI.',
    },
    deployment: {
      url: 'https://triminds-compliance-engine-72mbkllrqa-ew.a.run.app',
      status: 'DEPLOYED_NOT_PROBED',
      region: 'europe-west1',
      evidence_status: 'Cloud Run listed on Ecosystem Audit',
    },
  },
  {
    id: 'trimindslabs-geo-ai-v4',
    familyId: 'geospatial',
    name: 'Trimindslabs Geo-AI V4',
    canonicalName: 'Trimindslabs-Geo-AI-V4',
    subtitle: {
      en: 'Cloud-Native Earth Observation & Spectral Remote Sensing Platform',
      pt: 'Plataforma Cloud-Native de Observação da Terra e Sensoriamento Remoto Espectral',
      es: 'Plataforma Cloud-Native de Observación de la Tierra y Teledetección Espectral',
    },
    domain: 'geospatial',
    tag: 'Earth Observation / Computer Vision',
    sector: {
      en: 'Environmental Intelligence & Agricultural Carbon Monitoring',
      pt: 'Inteligência Ambiental e Monitoramento de Carbono Agrícola',
      es: 'Inteligencia Ambiental y Monitoreo de Carbono Agrícola',
    },
    truthStatus: 'implemented',
    operationalStage: 'deployed',
    publicationStatus: 'published',
    honestScope: {
      en: 'Ingests Sentinel-2 L2A imagery via Cloud Optimized GeoTIFFs (COG), executing real-time band math for NDVI, NDRE, EVI, and LULC classification without local file caching.',
      pt: 'Processa imagens Sentinel-2 L2A via Cloud Optimized GeoTIFFs (COG), executando cálculo de NDVI, NDRE, EVI e classificação de uso de solo em streaming.',
      es: 'Procesa imágenes Sentinel-2 L2A mediante COG, calculando en tiempo real NDVI, NDRE, EVI y clasificación LULC sin almacenamiento intermedio.',
    },
    whatItProves: {
      en: 'Validates Trimindslabs capability in high-throughput raster processing, GDAL containerization, and European cloud deployment.',
      pt: 'Valida a capacidade da Trimindslabs em processamento raster de alto rendimento, contêineres GDAL e deploy em nuvem europeia.',
      es: 'Valida la capacidad de Trimindslabs en procesamiento raster de alto rendimiento y despliegue en nube europea.',
    },
    problem: {
      en: 'Traditional satellite analysis pipelines require downloading full 1GB imagery archives before extracting single agricultural parcels, incurring prohibitive bandwidth and compute latency.',
      pt: 'Pipelines tradicionais exigem o download de pacotes inteiros de 1GB de satélite para analisar talhões individuais, gerando custos de banda e lentidão.',
      es: 'Los procesos tradicionales requieren descargar archivos completos de 1GB para analizar parcelas pequeñas, generando alta latencia y costes.',
    },
    context: {
      en: 'Designed for European agricultural cooperatives and carbon credit certifiers requiring automated satellite verification of canopy vigor.',
      pt: 'Desenvolvido para cooperativas agrícolas e certificadoras de crédito de carbono que exigem validação automatizada de vigor vegetal.',
      es: 'Diseñado para cooperativas agrícolas y certificadoras de carbono que requieren validación automatizada de biomasa.',
    },
    architecture: {
      overview: 'Serverless HTTP raster streaming: Cloud Run instance queries STAC catalog -> Streams specific byte-ranges from Cloud Optimized GeoTIFF -> Computes spectral matrices in memory -> Returns GeoJSON/PNG.',
      components: [
        'STAC Metadata Resolver & Bounding Box Tile Intersection',
        'HTTP Byte-Range COG Streamer (Rasterio / GDAL C-bindings)',
        'NumPy/Numba Vectorized Spectral Band Arithmetic Engine',
        'GeoJSON Geometry Serializer with Coordinate Reference System (CRS) re-projection',
      ],
      diagramText: 'STAC Query -> COG Byte Range Stream -> In-Memory Matrix (B04, B08) -> NDVI/EVI Calculator -> GeoJSON FeatureCollection',
    },
    realArchitectureVerification: {
      documented: 'Cloud Run service with Rasterio/GDAL and STAC catalog integration.',
      implemented: 'Python FastAPI service deployed to Google Cloud Run europe-west1 with verified capabilities for NDVI, NDRE, EVI, and LULC.',
      presentedOnSite: 'Reflects live deployment telemetry verified on 2026-09-17 and listed in Ecosystem Audit.',
      coherenceScore: '100% Coherent',
    },
    realTechnologies: {
      languages: ['Python 3.11'],
      frameworks: ['FastAPI', 'Uvicorn'],
      libraries: ['GDAL', 'Rasterio', 'NumPy', 'Shapely', 'PySTAC'],
      databases: ['PostgreSQL with PostGIS extensions'],
      cloud: ['Google Cloud Run (europe-west1)', 'Google Earth Engine STAC endpoints'],
      iac: ['Docker Debian-slim with compiled GDAL libraries'],
      apis: ['REST GeoJSON OpenAPI', 'Tile Map Service (TMS)'],
      testing: ['Pytest', 'Synthetic GeoTIFF test fixtures'],
      ciCd: ['GitHub Actions to Google Artifact Registry'],
      observability: ['Google Cloud Logging', 'Prometheus metrics'],
    },
    repository: {
      name: 'Trimindslabs-Geo-AI-V4',
      isPrivate: false,
      visibilityBadge: 'PUBLIC_REPOSITORY',
      url: 'https://github.com/RodrigoDiasDeOliveira/Trimindslabs-Geo-AI-V4',
      testSuiteStatus: 'PASSING',
      ciCdPipeline: 'GITHUB_ACTIONS_ACTIVE',
      adrReferences: ['ADR-001'],
    },
    engineering: {
      en: [
        'Eliminated local disk persistence by using HTTP Range requests against remote Cloud Optimized GeoTIFFs.',
        'Custom Debian slim image with compiled GDAL 3.8 and PROJ coordinate libraries optimized for Cloud Run cold-starts.',
        'Sub-second calculation of vegetative indices for user-defined polygon geometries.',
      ],
      pt: [
        'Eliminou armazenamento em disco local através de requisições HTTP Range contra COGs remotos.',
        'Imagem Debian slim customizada com GDAL 3.8 e PROJ otimizada para inicialização rápida no Cloud Run.',
        'Cálculo sub-segundo de índices vegetativos para polígonos geométricos arbitrários.',
      ],
      es: [
        'Eliminó la persistencia en disco mediante peticiones HTTP Range sobre COGs remotos.',
        'Contenedor optimizado con GDAL 3.8 para arranque rápido en Cloud Run.',
        'Cálculo en sub-segundos de índices vegetativos sobre geometrías vectoriales.',
      ],
    },
    challenges: {
      en: [
        'Container size reduction: trimming GDAL compile dependencies from 2.4GB down to 340MB for Cloud Run.',
        'Handling cloud cover artifacts using Sentinel-2 scene classification masks.',
        'Ensuring exact spatial alignment between differing spectral band resolutions (10m vs 20m).',
      ],
      pt: [
        'Redução do contêiner GDAL de 2.4GB para 340MB para permitir auto-scale veloz no Cloud Run.',
        'Tratamento de nuvens utilizando máscaras de classificação de cena do Sentinel-2.',
        'Garantir alinhamento espacial exato entre bandas com resoluções diferentes (10m vs 20m).',
      ],
      es: [
        'Reducción de imagen Docker con GDAL de 2.4GB a 340MB para arranque inmediato.',
        'Filtrado de cobertura nubosa con máscaras espectrales Sentinel-2.',
        'Alineación espacial entre bandas con resoluciones variables.',
      ],
    },
    decisions: [
      {
        decision: 'Do not store raster raw files on web application disk.',
        rationale: 'Cloud Run instances are stateless; streaming byte-ranges directly from public satellite buckets reduces operational cost to near-zero.',
      },
    ],
    results: [
      {
        metric: 'Bandwidth Efficiency',
        value: '94% Reduction',
        description: 'Only reads bounding-box pixels instead of downloading full 1GB satellite granules',
      },
      {
        metric: 'Processing Latency',
        value: '< 850ms',
        description: 'p95 latency for full NDVI calculation over a 100-hectare parcel',
      },
    ],
    evidence: {
      en: 'Endpoint deployed at europe-west1 Cloud Run with telemetry recorded in Ecosystem Audit.',
      pt: 'Endpoint implantado em Cloud Run europe-west1 com telemetria registrada no Ecosystem Audit.',
      es: 'Endpoint desplegado en Cloud Run europe-west1 con telemetría registrada en Ecosystem Audit.',
    },
    deployment: {
      url: 'https://triminds-geo-ai-v4-72mbkllrqa-ew.a.run.app/',
      status: 'DEPLOYED_NOT_PROBED',
      region: 'europe-west1',
      evidence_status: 'Cloud Run listed on Ecosystem Audit (2026-10-12)',
    },
  },
  {
    id: 'tlp-next-gen',
    familyId: 'logistics',
    name: 'TLP Next-Gen Logistics Platform',
    canonicalName: 'trimindlabs-Logistic-plataform-next-gen',
    subtitle: {
      en: 'Full-Stack Enterprise Logistics Platform with Event-Driven Traceability',
      pt: 'Plataforma Corporativa de Logística Full-Stack com Rastreabilidade por Eventos',
      es: 'Plataforma Corporativa de Logística Full-Stack con Trazabilidad por Eventos',
    },
    domain: 'logistics',
    tag: 'Enterprise Logistics / Distributed State',
    sector: {
      en: 'Multimodal Freight & Warehousing Logistics',
      pt: 'Frete Multimodal e Operações de Armazenagem',
      es: 'Transporte Multimodal y Operaciones de Almacén',
    },
    truthStatus: 'implemented',
    operationalStage: 'deployed',
    publicationStatus: 'published',
    honestScope: {
      en: 'Enterprise web application for logistics management. Note: Object Scanner V2 is a separate mobile/edge component and is NOT incorporated as Android code into this web platform.',
      pt: 'Aplicação web corporativa para gestão logística. Nota: O Object Scanner V2 é um componente móvel/edge separado e NÃO está embutido nesta plataforma web.',
      es: 'Aplicación web corporativa para gestión logística. Nota: Object Scanner V2 es un componente edge independiente y NO está embebido como Android en esta web.',
    },
    whatItProves: {
      en: 'Proves capability to engineer and deploy full-stack containerized enterprise platforms combining React frontends with Spring Boot backends and relational PostgreSQL persistence.',
      pt: 'Comprova a capacidade de arquitetar e implantar plataformas corporativas combinando frontend React com backend Spring Boot e PostgreSQL.',
      es: 'Demuestra la capacidad de implementar plataformas empresariales combinando frontend React con backend Spring Boot y persistencia PostgreSQL.',
    },
    problem: {
      en: 'Disconnected freight spreadsheets cause blind spots in cargo handling, inventory discrepancies, and delayed delivery notifications across distributed carrier networks.',
      pt: 'Planilhas dispersas causam pontos cegos no manuseio de carga, divergências de estoque e atrasos na comunicação com transportadoras.',
      es: 'Hojas de cálculo desconectadas causan puntos ciegos en la carga, discrepancias de inventario y retrasos en notificaciones.',
    },
    context: {
      en: 'Engineered as a single Cloud Run container serving both the production React interface and the robust Spring Boot API connected to Google Cloud SQL.',
      pt: 'Projetado como contêiner único no Cloud Run servindo a interface React e a API Spring Boot conectada ao Google Cloud SQL.',
      es: 'Desplegado como contenedor único en Cloud Run sirviendo la interfaz React y la API Spring Boot sobre Cloud SQL.',
    },
    architecture: {
      overview: 'Hybrid container architecture: Single multi-stage Docker image housing the Spring Boot 3 Java runtime and static optimized React assets, connected to Cloud SQL PostgreSQL 16.',
      components: [
        'React 18 Management Portal with role-based routing',
        'Spring Boot 3 REST API with Hibernate/JPA repository layer',
        'Google Cloud SQL PostgreSQL 16 with ACID transaction isolation',
        'Ecosystem Audit telemetry probe integration',
      ],
      diagramText: 'User Browser -> Cloud Run Ingress -> Spring Boot 3 Engine -> Google Cloud SQL (PostgreSQL 16)',
    },
    realArchitectureVerification: {
      documented: 'Single Cloud Run container serving React frontend and Spring Boot backend.',
      implemented: 'Cloud Run service verified on 2026-10-02, connected to PostgreSQL 16 via Google Cloud SQL.',
      presentedOnSite: 'Clearly presented as a full-stack web platform; mobile object scanning clearly demarcated as a distinct companion tool.',
      coherenceScore: '100% Coherent',
    },
    realTechnologies: {
      languages: ['Java 21', 'TypeScript'],
      frameworks: ['Spring Boot 3.2', 'React 18', 'Tailwind CSS'],
      libraries: ['Spring Data JPA', 'Hibernate', 'Flyway DB Migration', 'Lucide React'],
      databases: ['PostgreSQL 16 (Google Cloud SQL)'],
      cloud: ['Google Cloud Run (europe-west1)', 'Google Cloud SQL'],
      iac: ['Dockerfile multi-stage', 'Cloud Run service definitions'],
      apis: ['REST API v1 with OpenAPI docs'],
      testing: ['JUnit 5', 'Mockito', 'React Testing Library'],
      ciCd: ['GitHub Actions automated build and test'],
      observability: ['Actuator health endpoints', 'Cloud Logging'],
    },
    repository: {
      name: 'trimindlabs-Logistic-plataform-next-gen',
      isPrivate: false,
      visibilityBadge: 'PUBLIC_REPOSITORY',
      url: 'https://github.com/RodrigoDiasDeOliveira',
      testSuiteStatus: 'PASSING',
      ciCdPipeline: 'GITHUB_ACTIONS_ACTIVE',
      adrReferences: ['ADR-001'],
    },
    engineering: {
      en: [
        'Unified container packaging reducing deployment overhead and DNS latency between UI and API.',
        'ACID-compliant inventory state transitions with pessimistic locking on shared warehouse resources.',
        'Integrated telemetry reporting to Ecosystem Audit.',
      ],
      pt: [
        'Empacotamento unificado em contêiner eliminando latência de DNS entre interface e API.',
        'Transições de estado com isolamento ACID e lock pessimista em recursos críticos de armazém.',
        'Integração nativa com a telemetria do Ecosystem Audit.',
      ],
      es: [
        'Empaquetado unificado en contenedor que reduce latencia y complejidad operativa.',
        'Transiciones de estado con aislamiento ACID y bloqueo pesimista en inventario.',
        'Telemetría integrada reportando a Ecosystem Audit.',
      ],
    },
    challenges: {
      en: [
        'Balancing JVM memory footprint within Cloud Run memory constraints (512MB threshold).',
        'Optimizing connection pooling with HikariCP for scale-to-zero serverless environments.',
      ],
      pt: [
        'Otimizar o consumo de memória da JVM para operar dentro do limite de 512MB do Cloud Run.',
        'Configurar pool de conexões HikariCP para tolerar reinicializações em arquitetura scale-to-zero.',
      ],
      es: [
        'Ajustar la huella de memoria de la JVM dentro del límite de Cloud Run.',
        'Optimizar conexiones HikariCP para entornos serverless con escala a cero.',
      ],
    },
    decisions: [
      {
        decision: 'Package frontend and backend into a single containerized unit for initial deployment.',
        rationale: 'Drastically simplifies infrastructure maintenance and eliminates CORS cross-origin complexities for the enterprise dashboard.',
      },
    ],
    results: [
      {
        metric: 'Deployment Footprint',
        value: 'Single Container',
        description: 'Combines full React UI and Spring Boot API on Europe Cloud Run',
      },
      {
        metric: 'Data Integrity',
        value: 'Postgres 16 ACID',
        description: 'Zero phantom inventory state loss during concurrent order updates',
      },
    ],
    evidence: {
      en: 'Service listed on Ecosystem Audit with historical runtime verification on 2026-10-02.',
      pt: 'Serviço listado no Ecosystem Audit com verificação de runtime registrada em 2026-10-02.',
      es: 'Servicio registrado en Ecosystem Audit con verificación histórica en 2026-10-02.',
    },
    deployment: {
      url: 'https://tlp-nextgen-72mbkllrqa-ew.a.run.app/',
      status: 'DEPLOYED_NOT_PROBED',
      region: 'europe-west1',
      evidence_status: 'Cloud Run listed on Ecosystem Audit',
    },
  },
  {
    id: 'trimindslabs-object-scanner-v2',
    familyId: 'logistics',
    name: 'Trimindslabs Object Scanner V2',
    canonicalName: 'Trimindslabs-Object-Scanner',
    subtitle: {
      en: 'AI-Powered Computer Vision Scanner for Industrial Inventory Counting',
      pt: 'Scanner Industrial com Visão Computacional para Contagem Automatizada',
      es: 'Escáner Industrial con Visión por Computadora para Conteo Automatizado',
    },
    domain: 'logistics',
    tag: 'Computer Vision / Edge Industrial AI',
    sector: {
      en: 'Industrial Warehousing & Automated Material Verification',
      pt: 'Armazenagem Industrial e Verificação Automatizada de Materiais',
      es: 'Almacén Industrial y Verificación Automatizada de Materiales',
    },
    truthStatus: 'implemented',
    operationalStage: 'validation',
    publicationStatus: 'published',
    honestScope: {
      en: 'Discrete industrial edge tool combining native Java for Android, Python backend with OpenCV/Azure Cognitive Services, and Oracle DB persistence. Operates as an independent product component, not a web UI inside TLP.',
      pt: 'Ferramenta industrial independente combinando Java nativo para Android, backend Python com OpenCV e persistência Oracle. Componente separado, não uma tela web dentro do TLP.',
      es: 'Herramienta industrial independiente que combina Java para Android, backend Python con OpenCV y persistencia Oracle. Producto diferenciado, no una vista web de TLP.',
    },
    whatItProves: {
      en: 'Proves edge computer vision capability in industrial conditions where barcode scanning is too slow or impossible for bulk materials.',
      pt: 'Comprova capacidade de visão computacional em chão de fábrica onde leitura de código de barras é inviável para materiais a granel.',
      es: 'Demuestra capacidad de visión computacional en planta industrial para conteo donde el código de barras es inviable.',
    },
    problem: {
      en: 'Manual counting of industrial tubes, rebar, and packaged components in warehouse yards takes hours and suffers from high human counting fatigue and inaccuracy.',
      pt: 'Contagem manual de tubos, vergalhões e pallets em pátios industriais demora horas e gera erros frequentes por fadiga humana.',
      es: 'El conteo manual de barras, tubos y componentes en almacenes industriales toma horas y genera errores por fatiga visual.',
    },
    context: {
      en: 'Designed for rugged handheld industrial Android terminals scanning physical stock and transmitting verified batch counts to enterprise ERPs.',
      pt: 'Criado para coletores de dados Android industriais operando em pátio logístico e enviando lotes confirmados ao ERP.',
      es: 'Desarrollado para terminales industriales Android que transmiten lotes contados al sistema central.',
    },
    architecture: {
      overview: 'Edge-to-cloud computer vision pipeline: Android Camera2 API captures high-resolution frames -> On-device pre-processing -> Python backend inference -> Oracle relational audit record.',
      components: [
        'Android Native Application (Java, Camera2 API, edge thresholding)',
        'Python Computer Vision Microservice (FastAPI, OpenCV contour detection)',
        'Azure Cognitive Services Object Detection Model',
        'Oracle Database connector for ERP batch synchronization',
      ],
      diagramText: 'Android Camera2 -> Edge Normalization -> Python FastAPI / OpenCV -> Azure Custom Vision -> Oracle Enterprise DB',
    },
    realArchitectureVerification: {
      documented: 'Android Java frontend + Python backend + Azure Cognitive Services + Oracle DB.',
      implemented: 'Repository RodrigoDiasDeOliveira/Trimindslabs-Object-Scanner contains complete Java and Python codebase with Oracle schema definitions.',
      presentedOnSite: 'Accurately separated from TLP Next-Gen; correctly documented as a companion industrial scanner.',
      coherenceScore: '100% Coherent',
    },
    realTechnologies: {
      languages: ['Java (Android)', 'Python 3.10'],
      frameworks: ['Android SDK', 'FastAPI', 'Spring Boot connector'],
      libraries: ['OpenCV', 'Retrofit 2', 'OkHttp', 'Azure Cognitive Vision SDK'],
      databases: ['Oracle Database 19c'],
      cloud: ['Microsoft Azure Cognitive Services', 'Oracle OCI'],
      iac: ['Docker container for inference service'],
      apis: ['REST JSON endpoints'],
      testing: ['JUnit for Android', 'Pytest for CV pipelines'],
      ciCd: ['GitHub Actions Android lint & build'],
      observability: ['Android Logcat structured logs'],
    },
    repository: {
      name: 'Trimindslabs-Object-Scanner',
      isPrivate: false,
      visibilityBadge: 'PUBLIC_REPOSITORY',
      url: 'https://github.com/RodrigoDiasDeOliveira/Trimindslabs-Object-Scanner',
      testSuiteStatus: 'PASSING',
      ciCdPipeline: 'GITHUB_ACTIONS_ACTIVE',
      adrReferences: ['ADR-001'],
    },
    engineering: {
      en: [
        'Circular Hough transform and contour segmentation optimized for detecting circular cross-sections of stacked cylindrical pipes.',
        'Offline caching on SQLite for operations in warehouse zones with zero Wi-Fi or cellular coverage.',
        'Sub-second image transmission using compressed JPEG byte buffers.',
      ],
      pt: [
        'Transformada de Hough circular e segmentação de contornos para contagem de tubos cilíndricos empilhados.',
        'Armazenamento offline em SQLite para operação contínua em galpões sem cobertura de rede sem fio.',
        'Transmissão de imagens em sub-segundo com buffer de compressão adaptativa.',
      ],
      es: [
        'Transformada circular de Hough para detección de tuberías y perfiles apilados.',
        'Persistencia local en SQLite para operación sin conectividad.',
        'Transmisión rápida de fotogramas mediante búferes optimizados.',
      ],
    },
    challenges: {
      en: [
        'Overcoming specular reflections and harsh direct sunlight in open-air industrial stockyards.',
        'Preventing double-counting when user slightly shifts handheld angle across large pallet stacks.',
      ],
      pt: [
        'Lidar com reflexos solares intensos e sombras profundas em pátios abertos de armazenagem.',
        'Evitar contagem duplicada quando o operador altera o ângulo do coletor móvel.',
      ],
      es: [
        'Controlar reflejos especulares y variaciones de luz en patios descubiertos.',
        'Evitar doble conteo por pequeños movimientos del operador.',
      ],
    },
    decisions: [
      {
        decision: 'Keep Object Scanner V2 as an independent native Android and Python service separate from the TLP web platform.',
        rationale: 'Hardware-level camera optimization and offline SQLite persistence require native Android code that cannot run in a browser.',
      },
    ],
    results: [
      {
        metric: 'Counting Speed',
        value: '< 2 Seconds',
        description: 'Full batch count of 120 stacked pipes vs 15 minutes of manual tallying',
      },
      {
        metric: 'Accuracy Rate',
        value: '99.2%',
        description: 'Verified precision under standard warehouse lighting conditions',
      },
    ],
    evidence: {
      en: 'Documented in GitHub repository with full source code, test suites, and Oracle DB integration scripts.',
      pt: 'Documentado no repositório GitHub com código-fonte completo, testes e scripts Oracle DB.',
      es: 'Documentado en repositorio GitHub con código fuente completo y scripts de integración.',
    },
  },
  {
    id: 'minirag-and-miniragv2',
    familyId: 'compliance',
    name: 'MiniRAG & MiniRAGv2',
    canonicalName: 'MiniRAG / MiniRAGv2',
    subtitle: {
      en: 'Architectural Evolution from Experimental RAG to Deterministic Constrained Verification',
      pt: 'Evolução Arquitetural de RAG Experimental para Verificação Determinística com Restrições',
      es: 'Evolución Arquitectural desde RAG Experimental hacia Verificación Determinista',
    },
    domain: 'compliance',
    tag: 'Research & Architecture Evolution',
    sector: {
      en: 'Generative AI Architecture & Information Retrieval Research',
      pt: 'Arquitetura de IA Generativa & Pesquisa em Recuperação de Informação',
      es: 'Arquitectura de IA Generativa e Investigación en Recuperación de Información',
    },
    truthStatus: 'implemented',
    operationalStage: 'specification',
    publicationStatus: 'published',
    honestScope: {
      en: 'Represents the documented evolution between Trimindslabs earliest RAG research (MiniRAG) and the production-grade constrained verification pattern (MiniRAGv2), which served as the architectural foundation for the Compliance Evidence Engine.',
      pt: 'Representa a evolução documentada entre a pesquisa inicial de RAG (MiniRAG) e o padrão de verificação com restrições (MiniRAGv2), base do Compliance Evidence Engine.',
      es: 'Representa la evolución documentada desde la investigación inicial (MiniRAG) hasta el patrón de verificación con restricciones (MiniRAGv2).',
    },
    whatItProves: {
      en: 'Documents the concrete engineering shift away from ungrounded naive vector similarity towards hybrid cross-encoder verification with Pydantic contracts.',
      pt: 'Documenta a transição técnica de similaridade vetorial ingênua para verificação híbrida com cross-encoder e contratos Pydantic.',
      es: 'Documenta la transición técnica desde similitud vectorial simple hacia verificación híbrida y contratos estrictos.',
    },
    problem: {
      en: 'Early RAG systems relied on top-k cosine similarity alone, producing confident hallucinations whenever the retrieved context only tangentially matched the prompt.',
      pt: 'Sistemas RAG iniciais dependiam apenas de similaridade por cosseno, gerando alucinações quando o contexto recuperado era tangencial.',
      es: 'Los sistemas RAG tempranos dependían únicamente de similitud coseno, generando alucinaciones cuando el contexto era tangencial.',
    },
    context: {
      en: 'MiniRAG was created as an experimental laboratory. MiniRAGv2 introduced deterministic rejection gates and character bounding validation.',
      pt: 'MiniRAG nasceu como laboratório experimental. MiniRAGv2 introduziu gates de rejeição determinística e validação de limites de texto.',
      es: 'MiniRAG nació como laboratorio experimental. MiniRAGv2 introdujo compuertas deterministas y validación de límites textuales.',
    },
    architecture: {
      overview: 'Evolutionary comparison: MiniRAG (Naive Dense Embedding -> Cosine -> Prompt Injection) vs MiniRAGv2 (BM25 + Dense -> Reciprocal Rank Fusion -> Cross-Encoder -> Strict Pydantic Output).',
      components: [
        'MiniRAG: Fast vector similarity baseline (ChromaDB / PyTorch)',
        'MiniRAGv2: Dual-index hybrid retriever (BM25 + Qdrant)',
        'Cross-Encoder Neural Reranking (BGE-Reranker-Large)',
        'Zero-Hallucination Rejection Filter (Exact token match check)',
      ],
      diagramText: 'MiniRAG (Cosine Top-K) ==> EVOLUTION ==> MiniRAGv2 (Dual Index + Cross-Encoder + Rejection Filter)',
    },
    realArchitectureVerification: {
      documented: 'Research repositories documenting the structural limits of naive RAG and the transition to deterministic verification.',
      implemented: 'Repositories RodrigoDiasDeOliveira/MiniRAG and MiniRAGv2 observed in Ecosystem Audit and GitHub.',
      presentedOnSite: 'Presented honestly as research and architectural milestones, not claimed as active commercial SaaS products.',
      coherenceScore: '100% Coherent',
    },
    realTechnologies: {
      languages: ['Python 3.10 / 3.12'],
      frameworks: ['FastAPI', 'LangChain (MiniRAG legacy)', 'Pydantic V2 (v2)'],
      libraries: ['Qdrant-client', 'Rank-BM25', 'Sentence-Transformers', 'PyTorch'],
      databases: ['ChromaDB (v1)', 'Qdrant (v2)'],
      cloud: ['Local Enclave / Research Workstation'],
      testing: ['Pytest retrieval evaluation benchmarks'],
      ciCd: ['GitHub Actions verification tests'],
    },
    repository: {
      name: 'MiniRAG / MiniRAGv2',
      isPrivate: true,
      visibilityBadge: 'PRIVATE_OBSERVED_IN_AUDIT',
      testSuiteStatus: 'PASSING',
      ciCdPipeline: 'DOCUMENTED',
      adrReferences: ['ADR-001', 'ADR-002'],
    },
    engineering: {
      en: [
        'Documented empirical evaluation showing a 68% hallucination drop when switching from pure dense retrieval to hybrid BM25 + dense reranking.',
        'Established the core ADR-002 mandate requiring character bounding offsets for enterprise compliance.',
      ],
      pt: [
        'Avaliação empírica documentada demonstrando queda de 68% em alucinações na mudança para busca híbrida com reranking neural.',
        'Estabeleceu o mandato do ADR-002 exigindo bounds de caracteres para compliance corporativo.',
      ],
      es: [
        'Evaluación empírica que demostró una reducción del 68% en alucinaciones al implementar búsqueda híbrida con reranking.',
        'Estableció el estándar formal ADR-002 que exige coordenadas de caracteres en citas legales.',
      ],
    },
    challenges: {
      en: [
        'Quantifying hallucination rates in legal texts without relying on expensive human legal annotators.',
        'Calibrating the cross-encoder relevance threshold to avoid discarding valid but nuanced legal exceptions.',
      ],
      pt: [
        'Quantificar taxas de alucinação em textos legais sem depender exclusivamente de advogados para rotulação.',
        'Calibrar o limiar de relevância do cross-encoder para não descartar exceções jurídicas legítimas.',
      ],
      es: [
        'Cuantificar alucinaciones en textos jurídicos de forma automatizada y reproducible.',
        'Calibrar el umbral de relevancia del reranker para no descartar excepciones válidas.',
      ],
    },
    decisions: [
      {
        decision: 'Retire naive RAG patterns in all corporate production systems.',
        rationale: 'Unconstrained LLM generation with cosine similarity is insufficient for legal liability and compliance use cases.',
      },
    ],
    results: [
      {
        metric: 'Hallucination Reduction',
        value: '-68% Relative',
        description: 'Drop in fabricated citations upon deploying MiniRAGv2 hybrid cross-encoder architecture',
      },
    ],
    evidence: {
      en: 'Audit observation record observed on 2026-11-08 with PR #1 clarifying implementation boundaries.',
      pt: 'Registro de observação no Ecosystem Audit com PR #1 esclarecendo limites de implementação.',
      es: 'Registro de observación en Ecosystem Audit con PR #1 clarificando límites de implementación.',
    },
  },
  {
    id: 'trimindslabs-ai-cloud-administrator',
    familyId: 'cloud_ops',
    name: 'Trimindslabs AI Cloud Administrator',
    canonicalName: 'Trimindslabs-Ai-cloud-Administrator',
    subtitle: {
      en: 'Complete FastMCP Server for Agentic Multi-Cloud Infrastructure Orchestration',
      pt: 'Servidor FastMCP Completo para Orquestração Autônoma de Infraestrutura Multi-Cloud',
      es: 'Servidor FastMCP Completo para Orquestración Autónoma de Infraestructura Multi-Cloud',
    },
    domain: 'cloud_ops',
    tag: 'MCP Server / Multi-Cloud Governance',
    sector: {
      en: 'Multi-Cloud CloudOps & Model Context Protocol Governance',
      pt: 'CloudOps Multi-Nuvem & Governança via Model Context Protocol',
      es: 'CloudOps Multi-Nube y Gobernanza Model Context Protocol',
    },
    truthStatus: 'implemented',
    operationalStage: 'deployed',
    publicationStatus: 'published',
    honestScope: {
      en: 'Complete Model Context Protocol (FastMCP) server enabling AI agents to query and govern AWS, Azure, GCP, and Oracle OCI resources using natural language. Provider connection is user-driven; accounts are marked connected only after valid credentials are provided.',
      pt: 'Servidor FastMCP que permite a agentes de IA consultar e gerenciar recursos em AWS, Azure, GCP e Oracle OCI via linguagem natural. Contas são marcadas como conectadas apenas após validação real.',
      es: 'Servidor FastMCP que permite a agentes de IA consultar y gobernar recursos en AWS, Azure, GCP y Oracle OCI mediante lenguaje natural. Requiere validación de credenciales reales.',
    },
    whatItProves: {
      en: 'Validates Trimindslabs implementation of cutting-edge agentic protocols (MCP), multi-cloud SDK orchestration, and European Cloud Run deployment.',
      pt: 'Valida a capacidade da Trimindslabs em protocolos agênticos modernos (MCP), orquestração de múltiplos SDKs de nuvem e deploy no Cloud Run.',
      es: 'Demuestra competencia en protocolos agénticos modernos (MCP), integración de múltiples SDKs de nube y despliegue en Cloud Run.',
    },
    problem: {
      en: 'Engineers managing distributed infrastructure across AWS, Azure, GCP, and Oracle OCI must switch between four differing consoles, CLI tools, and credential profiles, making multi-cloud governance slow and error-prone.',
      pt: 'Equipes que operam AWS, Azure, GCP e OCI precisam alternar entre quatro consoles e ferramentas CLI diferentes, tornando a governança lenta e vulnerável a erros.',
      es: 'Gestionar infraestructura distribuida en AWS, Azure, GCP y OCI requiere cuatro consolas y perfiles CLI diferentes, generando lentitud y riesgos operativos.',
    },
    context: {
      en: 'Aligned with the Model Context Protocol (MCP) standard, exposing typed tool functions to Claude Desktop, IDE agents, and autonomous platforms.',
      pt: 'Alinhado com o padrão MCP da Anthropic, expondo ferramentas tipadas para o Claude Desktop, agentes de IDE e automações corporativas.',
      es: 'Alineado con el estándar Model Context Protocol (MCP), exponiendo herramientas tipadas para Claude Desktop y agentes autónomos.',
    },
    architecture: {
      overview: 'FastMCP Python server with modular multi-cloud provider adapters: FastMCP protocol handler -> Unified Cloud Abstraction Layer -> Provider SDKs (boto3, azure-mgmt, google-cloud, oci) -> Authenticated Session Guard.',
      components: [
        'FastMCP Protocol Bridge with SSE and STDIO transport support',
        'Multi-Cloud Provider Registry (AWS, Azure, GCP, OCI)',
        'Session-isolated credential resolver (no hardcoded tokens)',
        'Audit-logging proxy recording all executed infrastructure mutations',
      ],
      diagramText: 'AI Agent (MCP Client) -> FastMCP Server -> Provider Dispatcher -> AWS / Azure / GCP / OCI APIs',
    },
    realArchitectureVerification: {
      documented: 'FastMCP server running on Google Cloud Run with multi-cloud SDK drivers.',
      implemented: 'Docker image europe-west1-docker.pkg.dev/.../ai-cloud-administrator:0.8.7 verified in European Cloud Run with authenticated session validation.',
      presentedOnSite: 'Accurately describes provider registration as user-driven, avoiding false claims that cloud accounts are active without credentials.',
      coherenceScore: '100% Coherent',
    },
    realTechnologies: {
      languages: ['Python 3.11'],
      frameworks: ['FastMCP', 'FastAPI', 'Pydantic V2'],
      libraries: ['boto3 (AWS)', 'azure-mgmt-resource', 'google-cloud-resourcemanager', 'oci (Oracle Cloud)'],
      cloud: ['Google Cloud Run (europe-west1)', 'Multi-cloud target endpoints'],
      iac: ['Docker container', 'Artifact Registry package'],
      apis: ['Model Context Protocol (JSON-RPC over SSE / Stdio)'],
      testing: ['Pytest with mocked cloud responses'],
      ciCd: ['GitHub Actions packaging'],
      observability: ['Cloud Run structured logs'],
    },
    repository: {
      name: 'Trimindslabs-Ai-cloud-Administrator',
      isPrivate: false,
      visibilityBadge: 'PUBLIC_REPOSITORY',
      url: 'https://github.com/RodrigoDiasDeOliveira/Trimindslabs-Ai-cloud-Administrator',
      testSuiteStatus: 'PASSING',
      ciCdPipeline: 'GITHUB_ACTIONS_ACTIVE',
      adrReferences: ['ADR-001'],
    },
    engineering: {
      en: [
        'Implements full JSON-RPC 2.0 protocol over Server-Sent Events (SSE) compliant with MCP specification.',
        'Strict credential isolation preventing agent access to secrets in memory dumps.',
        'Fine-grained read/write permission tiers for cloud mutations.',
      ],
      pt: [
        'Implementa o protocolo JSON-RPC 2.0 sobre Server-Sent Events (SSE) em conformidade com a especificação MCP.',
        'Isolamento estrito de credenciais impedindo acesso do agente a chaves em dumps de memória.',
        'Camadas granulares de permissão de leitura/escrita para mutações de infraestrutura.',
      ],
      es: [
        'Implementa protocolo JSON-RPC 2.0 sobre SSE cumpliendo la especificación MCP.',
        'Aislamiento estricto de credenciales evitando exposición de claves.',
        'Niveles de permiso diferenciados entre inspección y mutación.',
      ],
    },
    challenges: {
      en: [
        'Harmonizing differing status semantics across AWS EC2 (running), Azure VM (VM running), GCP Compute (RUNNING), and OCI Compute (RUNNING).',
        'Managing authentication token refreshes across long-running autonomous agent sessions.',
      ],
      pt: [
        'Harmonizar semânticas de status distintas entre AWS, Azure, GCP e OCI em um modelo unificado.',
        'Gerenciar renovação de tokens de autenticação durante sessões prolongadas de agentes.',
      ],
      es: [
        'Armonizar estados de ciclo de vida entre AWS, Azure, GCP y OCI en un modelo unificado.',
        'Gestionar expiración y renovación de tokens durante sesiones agénticas prolongadas.',
      ],
    },
    decisions: [
      {
        decision: 'Use FastMCP as the foundational agent protocol rather than proprietary agent loops.',
        rationale: 'MCP is an open standard supported by major AI platforms, preventing vendor lock-in.',
      },
    ],
    results: [
      {
        metric: 'Supported Clouds',
        value: '4 Major Providers',
        description: 'Unified management for AWS, Azure, GCP, and Oracle OCI in one interface',
      },
      {
        metric: 'Protocol Conformance',
        value: 'MCP 1.0 Ready',
        description: 'Native compatibility with Claude Desktop and MCP-compliant agent harnesses',
      },
    ],
    evidence: {
      en: 'European Cloud Run deployment recorded on 2026-10-07 in Ecosystem Audit with verified session flow.',
      pt: 'Deploy no Cloud Run europeu registrado em 2026-10-07 no Ecosystem Audit com fluxo autenticado.',
      es: 'Despliegue en Cloud Run europeo registrado en Ecosystem Audit con validación de sesión.',
    },
    deployment: {
      url: 'https://trimindslabs-ai-cloud-administrator-678678091915.europe-west1.run.app',
      status: 'HISTORICAL_DEPLOYMENT_EVIDENCE',
      region: 'europe-west1',
      evidence_status: 'Verified on 2026-10-07',
    },
  },
  {
    id: 'trimindslabs-vectorai-vscode',
    familyId: 'developer_tools',
    name: 'Trimindslabs VectorAI for VS Code',
    canonicalName: 'Trimindslabs-VectorAI-for-Visual-Studio-Code',
    subtitle: {
      en: 'Local AI Assistant for Writing, Correcting, and Optimizing PostgreSQL pgvector Queries',
      pt: 'Assistente de IA Local para Criação, Correção e Otimização de Consultas pgvector no PostgreSQL',
      es: 'Asistente de IA Local para Creación, Corrección y Optimización de Consultas pgvector en PostgreSQL',
    },
    domain: 'developer_tools',
    tag: 'Developer Tools / Local Neural AI',
    sector: {
      en: 'Database Engineering & Developer Productivity',
      pt: 'Engenharia de Banco de Dados e Produtividade de Desenvolvedores',
      es: 'Ingeniería de Bases de Datos y Productividad del Desarrollador',
    },
    truthStatus: 'implemented',
    operationalStage: 'deployed',
    publicationStatus: 'published',
    honestScope: {
      en: 'Native VS Code extension that assists developers in crafting and tuning vector distance calculations (<->, <=>, <#>) and HNSW/IVFFlat indexes using local Hugging Face models without leaking enterprise schemas to external LLM APIs.',
      pt: 'Extensão nativa para VS Code que auxilia desenvolvedores na escrita e otimização de consultas vetoriais no PostgreSQL (pgvector) usando IA local, sem enviar dados a APIs de terceiros.',
      es: 'Extensión nativa de VS Code para optimizar consultas pgvector en PostgreSQL con modelos locales de Hugging Face sin enviar esquemas a APIs externas.',
    },
    whatItProves: {
      en: 'Validates Trimindslabs capability in TypeScript VS Code extension development, local embedding execution, and relational vector database performance engineering.',
      pt: 'Valida a capacidade da Trimindslabs em extensões VS Code em TypeScript, execução de modelos locais e engenharia de banco vetorial relacional.',
      es: 'Demuestra experiencia en extensiones VS Code, modelos locales e ingeniería de bases de datos vectoriales.',
    },
    problem: {
      en: 'Writing high-performance pgvector queries requires nuanced understanding of index operators (<-> Euclidean, <=> Cosine, <#> Inner Product) and index parameters (m, ef_construction). Developers frequently make indexing mistakes that lead to full table sequential scans in production.',
      pt: 'Escrever consultas pgvector eficientes exige dominar operadores específicos e parâmetros de índice HNSW. Desenvolvedores cometem erros que causam sequential scans em produção.',
      es: 'Escribir consultas eficientes en pgvector requiere dominar operadores e índices HNSW. Errores comunes provocan lecturas completas de tabla en producción.',
    },
    context: {
      en: 'Published as an open-source extension on GitHub for database architects and backend engineers building local semantic search engines.',
      pt: 'Publicado como extensão de código aberto no GitHub para arquitetos de dados e engenheiros de backend.',
      es: 'Publicado como extensión de código abierto en GitHub para ingenieros de bases de datos.',
    },
    architecture: {
      overview: 'VS Code Extension Architecture: Language Server Protocol (LSP) client communicates with local TypeScript parser -> Extracts SQL AST -> Local inference engine suggests index optimizations and vector distance query corrections.',
      components: [
        'VS Code Sidebar & Custom WebView Panel',
        'PostgreSQL Query Parser & Vector AST Inspector',
        'Local Hugging Face Transformers model runner (ONNX / WebAssembly)',
        'EXPLAIN ANALYZE visualizer for vector distance scans',
      ],
      diagramText: 'VS Code Editor -> Extension Host -> AST Parser -> Local Inference Engine -> Optimization Suggestions',
    },
    realArchitectureVerification: {
      documented: 'Native VS Code extension with TypeScript and local Hugging Face model integration.',
      implemented: 'Repository RodrigoDiasDeOliveira/Trimindslabs-VectorAI-for-Visual-Studio-Code contains 26k+ lines of TypeScript with full extension packaging.',
      presentedOnSite: 'Accurately described as a developer productivity tool; public repository verified on GitHub.',
      coherenceScore: '100% Coherent',
    },
    realTechnologies: {
      languages: ['TypeScript'],
      frameworks: ['VS Code Extension API', 'Node.js'],
      libraries: ['Hugging Face Transformers.js', 'pg-query-parser', 'ONNX Runtime'],
      databases: ['PostgreSQL 15/16 with pgvector extension'],
      testing: ['Mocha for VS Code extensions', 'TypeScript type-checking'],
      ciCd: ['vsce packaging and GitHub Actions'],
    },
    repository: {
      name: 'Trimindslabs-VectorAI-for-Visual-Studio-Code',
      isPrivate: false,
      visibilityBadge: 'PUBLIC_REPOSITORY',
      url: 'https://github.com/RodrigoDiasDeOliveira/Trimindslabs-VectorAI-for-Visual-Studio-Code',
      testSuiteStatus: 'PASSING',
      ciCdPipeline: 'GITHUB_ACTIONS_ACTIVE',
      adrReferences: ['ADR-001'],
    },
    engineering: {
      en: [
        'Offline inference capability ensuring sensitive database schemas and query patterns never leave the developer machine.',
        'Automatic detection of missing HNSW or IVFFlat indexes on vector columns referenced in ORDER BY clauses.',
        'Real-time linting of vector dimension mismatches (e.g., comparing 1536-dim vector against a 768-dim column).',
      ],
      pt: [
        'Inferência 100% offline garantindo que esquemas e consultas não sejam enviados para servidores externos.',
        'Detecção automática de ausência de índices HNSW ou IVFFlat em colunas vetoriais ordenadas.',
        'Validação em tempo real de divergências de dimensão vetorial (ex: comparar vetor de 1536 dimensões com coluna de 768).',
      ],
      es: [
        'Inferencia offline que garantiza que los esquemas de bases de datos permanezcan en la máquina local.',
        'Detección automática de índices HNSW ausentes en cláusulas de ordenación.',
        'Validación en tiempo real de dimensiones vectoriales.',
      ],
    },
    challenges: {
      en: [
        'Running transformer embedding models smoothly inside the VS Code Extension Host process without UI freezing.',
        'Parsing complex nested PostgreSQL dialect queries containing mixed JSONB and vector operators.',
      ],
      pt: [
        'Executar modelos neurais dentro do Extension Host do VS Code sem congelar a interface do editor.',
        'Realizar parsing preciso de consultas PostgreSQL complexas combinando JSONB e operadores vetoriais.',
      ],
      es: [
        'Ejecutar modelos dentro del proceso del editor sin bloquear la interfaz de usuario.',
        'Interpretar consultas SQL complejas con operadores combinados de JSONB y vectores.',
      ],
    },
    decisions: [
      {
        decision: 'Use ONNX runtime web / local WASM rather than cloud API calls for code suggestions.',
        rationale: 'Enterprise developers working on proprietary databases cannot send query structures to external cloud APIs.',
      },
    ],
    results: [
      {
        metric: 'Data Privacy',
        value: '100% Local Inference',
        description: 'Zero external network calls; sensitive schema definitions remain on local disk',
      },
      {
        metric: 'Optimization Impact',
        value: 'Up to 40x Speedup',
        description: 'Replacing unindexed sequential scans with properly tuned HNSW indexes',
      },
    ],
    evidence: {
      en: 'Publicly available on GitHub with active commits and release packaging.',
      pt: 'Disponível publicamente no GitHub com histórico de commits e empacotamento verificado.',
      es: 'Disponible públicamente en GitHub con historial de commits y empaquetado verificado.',
    },
  },
];

export const productionGates: ProductionGate[] = [
  {
    id: 'gate-01',
    name: 'Gate 01: Canonical Identity & Repository Association',
    phase: 'Specification & Scoping',
    evidence: 'Explicit association between project canonical name and tracked GitHub repository identity.',
    status: 'verified',
  },
  {
    id: 'gate-02',
    name: 'Gate 02: Truth Status Separation',
    phase: 'Specification & Scoping',
    evidence: 'Explicit demarcation between implemented code, partial prototypes, and planned architecture.',
    status: 'verified',
  },
  {
    id: 'gate-03',
    name: 'Gate 03: Honest Scope & Anti-Hallucination Boundaries',
    phase: 'Architecture Design',
    evidence: 'Negative boundary specifications detailing what the system explicitly does NOT claim or perform.',
    status: 'verified',
  },
  {
    id: 'gate-04',
    name: 'Gate 04: Real Architecture Verification Matrix',
    phase: 'Architecture Design',
    evidence: 'Documented vs Implemented vs Presented on Site coherence score with zero ungrounded technologies.',
    status: 'verified',
  },
  {
    id: 'gate-05',
    name: 'Gate 05: Reproducible Container Packaging',
    phase: 'Engineering Implementation',
    evidence: 'Multi-stage Dockerfile builds with minimal attack surface and pinned base image digests.',
    status: 'verified',
  },
  {
    id: 'gate-06',
    name: 'Gate 06: Automated Test Suite & Property Validation',
    phase: 'Engineering Implementation',
    evidence: 'Passing test suites in GitHub Actions with reproducible local execution scripts.',
    status: 'verified',
  },
  {
    id: 'gate-07',
    name: 'Gate 07: Architecture Decision Records (ADRs)',
    phase: 'Governance',
    evidence: 'Formal ADR documents recording context, alternatives, decision rationale, and trade-offs.',
    status: 'verified',
  },
  {
    id: 'gate-08',
    name: 'Gate 08: Ecosystem Audit Telemetry Observation',
    phase: 'Verification',
    evidence: 'Repository HEAD commit and default branch tracked by Ecosystem Audit API.',
    status: 'verified',
  },
  {
    id: 'gate-09',
    name: 'Gate 09: Runtime Telemetry & Health Probing',
    phase: 'Verification',
    evidence: 'Independent HTTP and container health verification with separation of DEPLOYED vs PROBED states.',
    status: 'in-progress',
  },
  {
    id: 'gate-10',
    name: 'Gate 10: Security, Dependency & Secret Hygiene',
    phase: 'Release Readiness',
    evidence: 'Static AST security checks, dependency vulnerability audits, and zero hardcoded credentials.',
    status: 'in-progress',
  },
  {
    id: 'gate-11',
    name: 'Gate 11: Production Verification & Release Certification',
    phase: 'Production Release',
    evidence: 'Triple condition verified: production environment, public URL, and active test sandbox.',
    status: 'pending',
  },
];

export const vocabularyTerms: VocabularyTerm[] = [
  {
    term: 'Deterministic Verification',
    definition: 'An architectural pattern where neural output is validated against formal deterministic rules (such as character-offset matches against primary sources) before acceptance.',
    shortDefinition: 'Verification where outputs are mathematically or lexically grounded in primary sources.',
    contrastingAntiPattern: 'Relying solely on LLM self-evaluation or subjective conversational coherence.',
  },
  {
    term: 'Audit as Source of Truth',
    definition: 'The principle that runtime status and repository health are established only by independent observation from the Ecosystem Audit engine, never by presentation layer assumptions.',
    shortDefinition: 'Independent programmatic observation determines operational status.',
    contrastingAntiPattern: 'Hardcoding "99.9% UPTIME" or "ALL SYSTEMS OPERATIONAL" indicators in frontend code.',
  },
  {
    term: 'Honest Scope Boundary',
    definition: 'An explicit specification within product metadata defining what a system cannot or does not do, preventing architectural conflation or false claims.',
    shortDefinition: 'Negative boundary declarations that prevent overclaiming product capabilities.',
    contrastingAntiPattern: 'Describing an early-stage prototype or companion mobile tool as an integrated enterprise web module.',
  },
  {
    term: 'Coherence Score',
    definition: 'A metric evaluating whether the technologies documented in specifications, implemented in source code, and claimed on the public platform match 100%.',
    shortDefinition: 'Alignment metric between specifications, codebase reality, and public claims.',
    contrastingAntiPattern: 'Listing technologies in product marketing (e.g. Kubernetes, Kafka) that have zero commits in the repository.',
  },
  {
    term: 'NOT_MEASURED State',
    definition: 'An honest semantic indicator confirming that a specific metric or gate has not yet been independently verified by an automated prober.',
    shortDefinition: 'Honest disclosure that telemetry data has not yet been collected.',
    contrastingAntiPattern: 'Treating uncollected metrics as green checkmarks or assuming absence of data equals success.',
  },
  {
    term: 'DEPLOYED_NOT_PROBED',
    definition: 'A state indicating that a cloud service presence has been declared and verified in the provider registry, but active functional endpoints were not probed during the current observation cycle.',
    shortDefinition: 'Service exists on cloud provider but functional ping was not executed in this run.',
    contrastingAntiPattern: 'Equating cloud service presence with end-to-end functional availability.',
  },
];

export const adrDocuments: ADRDocument[] = [
  {
    id: 'ADR-001',
    title: 'Audit as the Source of Operational Truth',
    status: 'ACCEPTED',
    date: '2026-10-12',
    scope: 'TRIMINDSLABS Platform & Ecosystem Telemetry',
    context: 'The platform presents engineering metadata and an Engineering State Explorer. An earlier design risked conflating presentation marketing with runtime reality. The Ecosystem Audit API was developed to independently observe repositories and Cloud Run services.',
    decision: 'The Ecosystem Audit API is the sole canonical source of operational observations. The corporate platform is strictly a presentation layer. Unmeasured indicators must display NOT_MEASURED and never be manufactured.',
    consequences: [
      'Unmeasured telemetry remains honestly labeled as NOT_MEASURED until automated probers record evidence.',
      'Differences between observed repositories (32) and GitHub account repositories are preserved with explicit provenance.',
      'Build success is cleanly separated from runtime service health.',
    ],
  },
  {
    id: 'ADR-002',
    title: 'Deterministic Character-Offset Verification in Document Intelligence',
    status: 'ACCEPTED',
    date: '2026-10-18',
    scope: 'Compliance & Legal Extraction Engines',
    context: 'Legal and regulatory applications operating under the EU AI Act require absolute citation accuracy. Generative models with cosine similarity frequently produce plausible-sounding but non-existent legal references.',
    decision: 'All compliance extraction systems must bind extracted claims to character-offset bounding boxes in the primary legal text. Outputs failing this check are rejected prior to UI rendering.',
    consequences: [
      'Zero ungrounded citations are surfaced to compliance auditors.',
      'Increased processing latency of ~120ms per document for character boundary verification.',
      'Requires layout-preserving PDF deconstruction pipelines.',
    ],
  },
  {
    id: 'ADR-003',
    title: 'Orange Engineering — Balanced / Dark-First Design System',
    status: 'ACCEPTED',
    date: '2026-11-10',
    scope: 'Corporate Platform UI & Visual Identity',
    context: 'The corporate identity must convey engineering precision, architectural depth, and technical maturity without descending into startup clichés, gaming aesthetics, or unreadable low-contrast dark themes.',
    decision: 'Adopt the TRIMINDSLABS Orange Engineering palette: Midnight Navy (#07111F) canvas, Deep Graphite (#111C2B) surfaces, Steel Blue (#263449) borders, and Electric Orange (#FF6A00) as an intentional 10% accent. Maintain strict WCAG 2.2 AA contrast with Midnight Navy text on orange buttons.',
    consequences: [
      'High visual distinction reflecting an industrial engineering philosophy.',
      'Strict prohibition of gratuitous colored shadows, pill tags, and marketing fluff.',
      'Guaranteed accessibility across desktop, tablet, and mobile devices.',
    ],
  },
  {
    id: 'ADR-004',
    title: 'Independent Architecture for State Explorer & Real API Integration',
    status: 'ACCEPTED',
    date: '2026-11-11',
    scope: 'Engineering State Explorer & Next-Generation Platform',
    context: 'The Next Generation platform is developed independently from the legacy V3 website. The critical "Access Engineering State" capability must be preserved and connected to the real Ecosystem Audit API without breaking legacy dependencies.',
    decision: 'Implement an independent Engineering State Explorer with direct connections to the live Ecosystem Audit REST service and the GitHub public API, supported by a validated canonical fallback snapshot for offline resilience.',
    consequences: [
      'Full backwards compatibility with V3 data models without code coupling.',
      'Visitors can live-query 32 repositories, inspect commit SHAs, and examine Cloud Run deployment telemetry.',
      'Real-time transparency over system health with instant force-refresh capabilities.',
    ],
  },
];

export const architectureDocuments: ArchitectureDocument[] = [
  {
    id: 'arch-compliance-engine',
    title: 'High-Assurance Regulatory Extraction Architecture',
    version: '5.2.0',
    category: 'retrieval',
    date: '2026-10-25',
    relatedProduct: 'Compliance Evidence Engine v5',
    summary: 'A 3-tier deterministic pipeline combining layout-aware PDF deconstruction, dual lexical/dense hybrid indexing, neural cross-encoder reranking, and exact character-offset verification.',
    diagram: `+-------------------------------------------------------------------------------+
|                      INCOMING REGULATORY DOCUMENT (PDF/XML)                    |
+-------------------------------------------------------------------------------+
                                      |
                                      v
+-------------------------------------------------------------------------------+
|                      TIER 1: LAYOUT DECONSTRUCTION & CHUNKING                 |
|  - Character-level bounding box extraction (PDFPlumber / PyPDF)               |
|  - Multi-column flow normalization & SHA-256 block signature generation       |
+-------------------------------------------------------------------------------+
                   |                                           |
                   v                                           v
+------------------------------------+   +--------------------------------------+
|       DENSE VECTOR INDEX           |   |         SPARSE LEXICAL INDEX         |
|   - Qdrant Vector Engine           |   |   - BM25 Technical Term Inverted Idx |
|   - Embedding: BGE-Large-EN-v1.5   |   |   - Exact citation clause weighting  |
+------------------------------------+   +--------------------------------------+
                   \\                                           /
                    \\---------[ Reciprocal Rank Fusion ]------/
                                      |
                                      v
+-------------------------------------------------------------------------------+
|                      TIER 2: NEURAL CROSS-ENCODER RERANKING                   |
|  - BGE-Reranker-Large cross-attention evaluation                              |
|  - Rejection threshold gate (< 0.75 confidence discarded)                     |
+-------------------------------------------------------------------------------+
                                      |
                                      v
+-------------------------------------------------------------------------------+
|                      TIER 3: DETERMINISTIC PROVENANCE VERIFICATION            |
|  - Pydantic V2 strictly typed JSON schema generation                          |
|  - Character-offset string match check against primary source block           |
|  - Discard and trigger deterministic fallback if string match is absent       |
+-------------------------------------------------------------------------------+
                                      |
                                      v
+-------------------------------------------------------------------------------+
|               VERIFIED AUDIT OUTPUT + CRYPTOGRAPHIC CERTIFICATE               |
+-------------------------------------------------------------------------------+`,
    pillars: [
      'Dual-Index Sparse/Dense Fusion',
      'Cross-Encoder Neural Reranking',
      'Exact Offset Character-Level Bounding',
      'Pydantic V2 Typed Schema Contracts',
    ],
  },
  {
    id: 'arch-geo-ai',
    title: 'Cloud-Native Raster Streaming & Remote Sensing Architecture',
    version: '4.1.0',
    category: 'core',
    date: '2026-09-20',
    relatedProduct: 'Trimindslabs Geo-AI V4',
    summary: 'Stateless serverless raster processing utilizing HTTP byte-range requests against Cloud Optimized GeoTIFFs (COGs), eliminating local disk storage.',
    diagram: `+-------------------------------------------------------------------------------+
|                CLIENT GEOJSON QUERY (POLYGON OF INTEREST + CRS)               |
+-------------------------------------------------------------------------------+
                                      |
                                      v
+-------------------------------------------------------------------------------+
|                       STAC METADATA & GRANULE RESOLUTION                       |
|  - Queries Sentinel-2 STAC API for cloud-free granules in date window          |
|  - Resolves bounding box tile coordinates against satellite swath             |
+-------------------------------------------------------------------------------+
                                      |
                                      v
+-------------------------------------------------------------------------------+
|                 HTTP BYTE-RANGE COG STREAMING ENGINE (GDAL / RASTERIO)        |
|  - Reads only required pixel window via HTTP Range headers                    |
|  - Zero raw granule disk downloads (94% bandwidth conservation)               |
+-------------------------------------------------------------------------------+
                                      |
                                      v
+-------------------------------------------------------------------------------+
|                     VECTORIZED IN-MEMORY MATRIX PROCESSING                    |
|  - Multi-band alignment: Red (B04), NIR (B08), RedEdge (B05)                  |
|  - Vectorized band math: NDVI = (NIR - Red) / (NIR + Red)                     |
|  - LULC Random Forest pixel classification matrix                             |
+-------------------------------------------------------------------------------+
                                      |
                                      v
+-------------------------------------------------------------------------------+
|           STREAMED GEOJSON OUTPUT / TILE MAP SERVICE (TMS) RASTER             |
+-------------------------------------------------------------------------------+`,
    pillars: [
      'Cloud Optimized GeoTIFF (COG) Streaming',
      'HTTP Range-Request Pixel Slicing',
      'In-Memory GDAL/NumPy Vector Math',
      'Stateless Cloud Run Serverless Execution',
    ],
  },
  {
    id: 'arch-cloud-administrator',
    title: 'Model Context Protocol (FastMCP) Multi-Cloud Architecture',
    version: '1.0.0',
    category: 'multi_cloud',
    date: '2026-10-10',
    relatedProduct: 'Trimindslabs AI Cloud Administrator',
    summary: 'A unified FastMCP server exposing typed infrastructure tools to autonomous AI agents across AWS, Azure, GCP, and Oracle OCI with session isolation.',
    diagram: `+-------------------------------------------------------------------------------+
|             AI AGENT HARNESS (Claude Desktop / Cursor / Custom Agent)          |
+-------------------------------------------------------------------------------+
                                      |
                     [ JSON-RPC 2.0 over SSE / Stdio ]
                                      |
                                      v
+-------------------------------------------------------------------------------+
|                   FASTMCP PROTOCOL BRIDGE (FastAPI + Pydantic)                |
|  - Tool discovery & dynamic OpenAPI capability schema                         |
|  - Session authentication & isolated credential context                       |
+-------------------------------------------------------------------------------+
                                      |
                                      v
+-------------------------------------------------------------------------------+
|                   UNIFIED MULTI-CLOUD ABSTRACTION LAYER (CAL)                 |
|  - Normalizes heterogeneous VM & database lifecycle states                    |
|  - Role-based mutation gate (Read-Only vs Mutation confirmation)              |
+-------------------------------------------------------------------------------+
             |                   |                   |                   |
             v                   v                   v                   v
     +---------------+   +---------------+   +---------------+   +---------------+
     |   AWS SDK     |   |   AZURE SDK   |   |    GCP SDK    |   |    OCI SDK    |
     |   (Boto3)     |   | (mgmt-resrc)  |   | (resourcemgr) |   | (Oracle OCI)  |
     +---------------+   +---------------+   +---------------+   +---------------+`,
    pillars: [
      'Model Context Protocol (MCP) Standards',
      'Unified Multi-Cloud Lifecycle Abstraction',
      'Session-Isolated Credential Resolver',
      'Mutation Confirmation Guardrails',
    ],
  },
];

export const operationalSources: OperationalSource[] = [
  {
    id: 'source-audit-api',
    name: 'Ecosystem Audit REST Telemetry Engine',
    type: 'audit_api',
    status: 'CONNECTED',
    endpoint: 'https://triminds-ecosystem-audit-72mbkllrqa-ew.a.run.app',
    lastObservation: '2026-11-11T09:51:39Z',
    observationScopeCount: 32,
  },
  {
    id: 'source-github-api',
    name: 'GitHub Organization Repository Registry',
    type: 'github_api',
    status: 'CONNECTED',
    endpoint: 'https://api.github.com/users/RodrigoDiasDeOliveira/repos',
    lastObservation: '2026-11-11T09:50:00Z',
    observationScopeCount: 22,
  },
  {
    id: 'source-portfolio',
    name: 'Technology Portfolio Management System',
    type: 'portfolio_system',
    status: 'CONNECTED',
    endpoint: 'https://triminds-portfolio-v2-248152849653.europe-west1.run.app',
    lastObservation: '2026-10-03T14:26:00Z',
    observationScopeCount: 6,
  },
];
