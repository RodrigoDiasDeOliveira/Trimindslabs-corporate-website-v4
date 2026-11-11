import React from 'react';

export interface DataMetricProps {
  label: string;
  value: string | number;
  unit?: string;
  subtext?: string;
  provenance?: string;
  icon?: React.ReactNode;
  accent?: boolean;
}

export const DataMetric: React.FC<DataMetricProps> = ({
  label,
  value,
  unit,
  subtext,
  provenance,
  icon,
  accent = false,
}) => {
  return (
    <div className="p-4 sm:p-5 bg-[#111C2B] border border-[#263449] rounded-xl hover:border-[#374B67] transition-colors shadow-sm flex flex-col justify-between">
      <div className="flex items-center justify-between gap-2 mb-2">
        <span className="text-xs font-mono text-[#8190A3] uppercase tracking-wider">
          {label}
        </span>
        {icon && <span className="text-[#AAB7C7]">{icon}</span>}
      </div>

      <div className="flex items-baseline gap-1.5 my-1">
        <span
          className={`font-mono text-2xl sm:text-3xl font-bold tabular-nums tracking-tight ${
            accent ? 'text-[#FF6A00]' : 'text-[#F4F7FA]'
          }`}
        >
          {value}
        </span>
        {unit && <span className="text-xs text-[#AAB7C7] font-medium">{unit}</span>}
      </div>

      <div className="mt-2 pt-2 border-t border-[#263449]/50 flex items-center justify-between text-[11px] text-[#8190A3]">
        {subtext && <span>{subtext}</span>}
        {provenance && (
          <span className="font-mono text-[10px] text-[#AAB7C7] ml-auto">
            {provenance}
          </span>
        )}
      </div>
    </div>
  );
};
