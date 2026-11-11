import React from 'react';
import symbol from '../../assets/brand/trimindslabs-symbol.png';
import wordmark from '../../assets/brand/trimindslabs-wordmark.png';
import lockup from '../../assets/brand/trimindslabs-primary-lockup.png';

type BrandVariant = 'symbol' | 'wordmark' | 'horizontal';
interface BrandIdentityProps {
  variant?: BrandVariant;
  className?: string;
  priority?: boolean;
}
const sources = { symbol, wordmark, horizontal: lockup };
const alt = {
  symbol: 'TRIMINDSLABS geometric symbol',
  wordmark: 'TRIMINDSLABS — Engineering Intelligent Systems',
  horizontal: 'TRIMINDSLABS — Engineering Intelligent Systems',
};

export const BrandIdentity: React.FC<BrandIdentityProps> = ({
  variant = 'horizontal',
  className = '',
  priority = false,
}) => (
  <img
    src={sources[variant]}
    alt={alt[variant]}
    className={`block object-contain ${className}`}
    loading={priority ? 'eager' : 'lazy'}
    decoding="async"
  />
);
