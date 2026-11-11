# Internationalization Architecture (i18n)

## 1. Supported Languages

- **English (`en`)**: Primary default language for international engineering presentation.
- **Portuguese (`pt`)**: Official corporate language for Brazilian and Lusophone stakeholders.
- **Spanish (`es`)**: European Spanish for Spanish and Latin American enterprise markets.

---

## 2. Technical Vocabulary Preservation

Standard software engineering terminology is intentionally preserved across all languages without awkward translations:
- `FastAPI`, `Spring Boot`, `Pydantic V2`, `Qdrant`, `BM25`, `Docker`, `Cloud Run`
- `Character-Offset Bounding`, `SHA-256`, `Reciprocal Rank Fusion (RRF)`
- `NOT_MEASURED`, `DEPLOYED_NOT_PROBED`, `HISTORICAL_EVIDENCE`

---

## 3. Architecture & Persistence

- Configured through `LanguageProvider` (`src/i18n/LanguageContext.tsx`).
- User preference persisted in `localStorage` under key `trimindslabs_lang_pref`.
- Synchronizes `document.documentElement.lang` on language switch for assistive devices.
