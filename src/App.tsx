import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './i18n/LanguageContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/modules/HeroSection';
import { PrinciplesSection } from './components/modules/PrinciplesSection';
import { CompetenciesSection } from './components/modules/CompetenciesSection';
import { ProductCatalog } from './components/modules/ProductCatalog';
import { TechnicalKnowledge } from './components/modules/TechnicalKnowledge';
import { OperationalIntelligence } from './components/modules/OperationalIntelligence';
import { EngineeringStateExplorer } from './components/modules/EngineeringStateExplorer';
import { ContactSection } from './components/modules/ContactSection';
import { fetchAuditSummary } from './services/auditService';

export default function App() {
  const [activeSection, setActiveSection] = useState('overview');
  const [selectedProductFamily, setSelectedProductFamily] = useState<string>('all');
  const [liveAuditStatus, setLiveAuditStatus] = useState('OPTIMAL');
  const [totalRepositories, setTotalRepositories] = useState(32);

  useEffect(() => {
    // Quick baseline query
    fetchAuditSummary(false).then((result) => {
      if (result.data) {
        setLiveAuditStatus(result.data.system_status || 'OPTIMAL');
        setTotalRepositories(result.data.summary_cards?.total_repositories || 32);
      }
    });
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectFamily = (familyId: string) => {
    setSelectedProductFamily(familyId);
    handleNavigate('products');
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#07111F] text-[#F4F7FA] flex flex-col font-sans selection:bg-[#FF6A00] selection:text-[#07111F]">
        {/* Accessible Skip Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#FF6A00] text-[#07111F] font-bold rounded-md"
        >
          Skip to main content
        </a>

        {/* Top Bar Navigation (3-Zone Contract) */}
        <Navbar
          activeSection={activeSection}
          onNavigate={handleNavigate}
        />

        {/* Main Content Areas */}
        <main id="main-content" className="flex-1">
          {/* Module A: Overview & Corporate Identity */}
          <div id="overview">
            <HeroSection
              onExploreState={() => handleNavigate('explorer')}
              onExploreCatalog={() => handleNavigate('products')}
              liveAuditStatus={liveAuditStatus}
              totalRepositories={totalRepositories}
            />
            <PrinciplesSection />
            <CompetenciesSection onSelectFamily={handleSelectFamily} />
          </div>

          {/* Module B: Product Catalog */}
          <div id="products">
            <ProductCatalog initialFamilyId={selectedProductFamily} />
          </div>

          {/* Module C: Technical Knowledge & ADRs */}
          <div id="technical">
            <TechnicalKnowledge />
          </div>

          {/* Module D: Operational Intelligence */}
          <div id="intelligence">
            <OperationalIntelligence
              onOpenExplorer={() => handleNavigate('explorer')}
            />
          </div>

          {/* Mandatory Engineering State Explorer */}
          <div id="explorer">
            <EngineeringStateExplorer />
          </div>

          {/* Corporate Contact Section */}
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer onNavigate={handleNavigate} />
      </div>
    </LanguageProvider>
  );
}
