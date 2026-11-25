import React, { useEffect, useState } from 'react';
import { useLanguage } from '../../i18n/LanguageContext';

const KEY = 'trimindslabs_analytics_consent_v1';
const ID = 'GTM-K43K67NC';
type Choice = 'accepted' | 'rejected';
const copy = {
  en: { title: 'Privacy & cookies', info: 'We use optional Google Analytics cookies to measure website usage. Google receives usage data when analytics is enabled. Your preference is stored locally. You can change it at any time in the footer.', accept: 'Accept analytics', reject: 'Reject analytics', settings: 'Cookie preferences', more: 'Google privacy policy', contact: 'Privacy questions' },
  es: { title: 'Privacidad y cookies', info: 'Utilizamos cookies opcionales de Google Analytics para medir el uso del sitio. Google recibe datos de uso cuando se activa la analítica. Tu preferencia se guarda localmente. Puedes cambiarla en cualquier momento desde el pie de página.', accept: 'Aceptar analítica', reject: 'Rechazar analítica', settings: 'Preferencias de cookies', more: 'Política de privacidad de Google', contact: 'Consultas de privacidad' },
  pt: { title: 'Privacidade e cookies', info: 'Usamos cookies opcionais do Google Analytics para medir o uso do site. O Google recebe dados de uso quando a análise está ativa. Sua preferência é armazenada localmente. Você pode alterá-la a qualquer momento no rodapé.', accept: 'Aceitar análise', reject: 'Rejeitar análise', settings: 'Preferências de cookies', more: 'Política de privacidade do Google', contact: 'Dúvidas sobre privacidade' }
};
function readChoice(): Choice | null {
  try {
    const value = localStorage.getItem(KEY);
    return value === 'accepted' || value === 'rejected' ? value : null;
  } catch { return null; }
}
function loadAnalytics() {
  if (document.getElementById('trimindslabs-gtm')) return;
  const w = window as Window & { dataLayer?: unknown[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });
  const script = document.createElement('script');
  script.id = 'trimindslabs-gtm';
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtm.js?id=' + ID;
  document.head.appendChild(script);
}
function clearAnalyticsCookies() {
  for (const entry of document.cookie.split(';')) {
    const name = entry.split('=')[0].trim();
    if (!/^(_ga($|_)|_gid$|_gat($|_))/.test(name)) continue;
    const expiry = name + '=; Max-Age=0; Path=/';
    document.cookie = expiry;
    const parts = location.hostname.split('.');
    for (let i = 0; i < parts.length - 1; i++) {
      document.cookie = expiry + '; Domain=' + parts.slice(i).join('.');
    }
  }
}
export function CookieConsent() {
  const { language } = useLanguage();
  const c = copy[language];
  const [choice, setChoice] = useState<Choice | null>(readChoice);
  const [open, setOpen] = useState(() => readChoice() === null);
  useEffect(() => { if (choice === 'accepted') loadAnalytics(); }, [choice]);
  function choose(next: Choice) {
    const wasActive = !!document.getElementById('trimindslabs-gtm');
    try { localStorage.setItem(KEY, next); } catch {
      // If persistence fails, reload on withdrawal still defaults to no consent.
    }
    if (next === 'rejected') {
      clearAnalyticsCookies();
      if (wasActive) {
        // Reload to stop already executing third-party scripts.
        location.reload();
        return;
      }
    }
    setChoice(next);
    setOpen(false);
  }
  const buttonClass = 'px-4 py-2 rounded-md border border-[#8190A3] text-[#F4F7FA] hover:bg-[#263449] focus-visible:outline-2 focus-visible:outline-[#FF8A24]';
  return <>
    <button type="button" className="underline text-[#AAB7C7] hover:text-white" onClick={() => setOpen(true)} aria-expanded={open} aria-controls="cookie-consent">{c.settings}</button>
    {open && <section id="cookie-consent" aria-label={c.title} className="fixed bottom-0 inset-x-0 z-[100] bg-[#07111F] border-t border-[#263449] shadow-xl text-[#F4F7FA] p-4 sm:p-5 max-h-[65vh] overflow-y-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center gap-4">
        <div className="flex-1 space-y-2">
          <h2 className="font-semibold text-sm">{c.title}</h2>
          <p className="text-sm text-[#AAB7C7]">{c.info}</p>
          <div className="flex flex-wrap gap-4 text-xs">
            <a className="underline" href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">{c.more}</a>
            <a className="underline" href="mailto:contact@trimindslabs.com">{c.contact}</a>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 text-sm">
          <button type="button" className={buttonClass} onClick={() => choose('rejected')}>{c.reject}</button>
          <button type="button" className={buttonClass} onClick={() => choose('accepted')}>{c.accept}</button>
        </div>
      </div>
    </section>}
  </>;
}
