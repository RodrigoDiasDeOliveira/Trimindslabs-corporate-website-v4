/**
 * TRIMINDSLABS Language Context & Hook
 * Provides accessible, persistent language switching across EN, PT, and ES.
 */

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { SupportedLanguage } from '../domain/types';
import { translations, TranslationKeys } from './translations';

interface LanguageContextType {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  t: (keyPath: string, fallback?: string) => string;
  dictionary: TranslationKeys;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'trimindslabs_lang_pref';

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Default to English as requested in prompt:
  // "O inglês deverá ser considerado uma língua prioritária para apresentação internacional da TRIMINDSLABS."
  const [language, setLanguageState] = useState<SupportedLanguage>('en');

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as SupportedLanguage | null;
      if (saved && (saved === 'en' || saved === 'pt' || saved === 'es')) {
        setLanguageState(saved);
      }
    } catch {
      // Ignore local storage error in sandboxes
    }
  }, []);

  const setLanguage = (lang: SupportedLanguage) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Ignore local storage error
    }
    // Update HTML lang attribute for screen readers & SEO
    document.documentElement.lang = lang;
  };

  /**
   * Helper to retrieve nested keys like 'nav.cta' or 'hero.title'
   */
  const t = (keyPath: string, fallback?: string): string => {
    const keys = keyPath.split('.');
    let current: unknown = translations[language];
    for (const key of keys) {
      if (current && typeof current === 'object' && key in current) {
        current = (current as Record<string, unknown>)[key];
      } else {
        return fallback || keyPath;
      }
    }
    return typeof current === 'string' ? current : (fallback || keyPath);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
        dictionary: translations[language] as unknown as TranslationKeys,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
