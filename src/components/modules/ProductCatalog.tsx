import React, { useState } from 'react';
import { Product } from '../../domain/types';
import { productFamilies, canonicalProducts } from '../../domain/canonicalData';
import { useLanguage } from '../../i18n/LanguageContext';
import { ProductCard } from './ProductCard';
import { ProductModal } from './ProductModal';
import { Search, Filter, Layers } from 'lucide-react';

interface ProductCatalogProps {
  initialFamilyId?: string;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({ initialFamilyId }) => {
  const { language, t } = useLanguage();
  const [selectedFamily, setSelectedFamily] = useState<string>(initialFamilyId || 'all');
  const [stageFilter, setStageFilter] = useState<'all' | 'deployed'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = canonicalProducts.filter((product) => {
    // Family Filter
    if (selectedFamily !== 'all' && product.familyId !== selectedFamily) {
      return false;
    }
    // Stage Filter
    if (stageFilter === 'deployed' && product.operationalStage !== 'deployed') {
      return false;
    }
    // Search Filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = product.name.toLowerCase().includes(q);
      const matchCanonical = product.canonicalName.toLowerCase().includes(q);
      const matchTag = product.tag.toLowerCase().includes(q);
      const matchTech = (product.realTechnologies.languages || []).some(l => l.toLowerCase().includes(q)) ||
        (product.realTechnologies.frameworks || []).some(f => f.toLowerCase().includes(q));
      return matchName || matchCanonical || matchTag || matchTech;
    }
    return true;
  });

  return (
    <section id="products" className="py-16 md:py-24 border-b border-[#263449] bg-[#07111F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-mono text-[#FF8A24] uppercase tracking-wider">
              {t('catalog.kicker', 'Corporate Product Catalog')}
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#F4F7FA]">
              {t('catalog.title', 'Engineered systems and architectural platforms.')}
            </h2>
            <p className="text-sm sm:text-base text-[#AAB7C7] leading-relaxed">
              {t(
                'catalog.subtitle',
                'Structured into formal product families with documented boundaries, verified technologies, and open audit trails.'
              )}
            </p>
          </div>

          {/* Quick Stage Filter */}
          <div className="flex items-center gap-1 p-1 bg-[#111C2B] border border-[#263449] rounded-lg self-start md:self-auto shrink-0">
            <button
              onClick={() => setStageFilter('all')}
              className={`px-3 py-1.5 text-xs font-mono font-medium rounded-md transition-colors cursor-pointer ${
                stageFilter === 'all'
                  ? 'bg-[#172438] text-[#FF6A00] font-semibold border border-[#263449]'
                  : 'text-[#AAB7C7] hover:text-[#F4F7FA]'
              }`}
            >
              {t('catalog.filterAll', 'All Stages')}
            </button>
            <button
              onClick={() => setStageFilter('deployed')}
              className={`px-3 py-1.5 text-xs font-mono font-medium rounded-md transition-colors cursor-pointer ${
                stageFilter === 'deployed'
                  ? 'bg-[#172438] text-[#FF6A00] font-semibold border border-[#263449]'
                  : 'text-[#AAB7C7] hover:text-[#F4F7FA]'
              }`}
            >
              {t('catalog.filterDeployed', 'Deployed Only')}
            </button>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="space-y-4">
          {/* Family Tabs (Segmented Controls) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <button
              onClick={() => setSelectedFamily('all')}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 border cursor-pointer ${
                selectedFamily === 'all'
                  ? 'bg-[#FF6A00] text-[#07111F] font-bold border-[#FF6A00] shadow-sm'
                  : 'bg-[#111C2B] text-[#AAB7C7] border-[#263449] hover:border-[#374B67] hover:text-[#F4F7FA]'
              }`}
            >
              {t('catalog.allFamilies', 'All Disciplines')} ({canonicalProducts.length})
            </button>
            {productFamilies.map((family) => {
              const isActive = selectedFamily === family.id;
              const count = canonicalProducts.filter(p => p.familyId === family.id).length;
              return (
                <button
                  key={family.id}
                  onClick={() => setSelectedFamily(family.id)}
                  className={`px-4 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 border cursor-pointer ${
                    isActive
                      ? 'bg-[#FF6A00] text-[#07111F] font-bold border-[#FF6A00] shadow-sm'
                      : 'bg-[#111C2B] text-[#AAB7C7] border-[#263449] hover:border-[#374B67] hover:text-[#F4F7FA]'
                  }`}
                >
                  <span>{family.name[language] || family.name.en}</span>
                  <span className={`ml-1.5 text-[10px] font-mono ${isActive ? 'text-[#07111F]' : 'text-[#8190A3]'}`}>
                    ({count})
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input Bar */}
          <div className="relative">
            <Search className="w-4 h-4 text-[#8190A3] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('catalog.searchPlaceholder', 'Search products by name, domain, or technology...')}
              className="w-full pl-10 pr-4 py-2.5 bg-[#111C2B] border border-[#263449] rounded-xl text-xs sm:text-sm text-[#F4F7FA] placeholder-[#8190A3] focus:border-[#FF6A00] focus:outline-none transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-[#8190A3] hover:text-[#F4F7FA] cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="p-12 text-center bg-[#111C2B] border border-[#263449] rounded-2xl space-y-3">
            <Layers className="w-8 h-8 text-[#8190A3] mx-auto" />
            <p className="text-sm text-[#AAB7C7]">
              {t('catalog.noResults', 'No products matched the specified filter criteria.')}
            </p>
            <button
              onClick={() => { setSelectedFamily('all'); setSearchQuery(''); setStageFilter('all'); }}
              className="text-xs font-semibold text-[#FF6A00] hover:text-[#FF8A24] cursor-pointer underline underline-offset-2"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={(p) => setSelectedProduct(p)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Product Detail Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
};
