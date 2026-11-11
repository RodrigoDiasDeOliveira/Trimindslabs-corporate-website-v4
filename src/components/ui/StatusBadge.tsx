import React from 'react';
import {
  CheckCircle2,
  Clock,
  HelpCircle,
  AlertTriangle,
  Server,
  Activity,
  ShieldCheck,
  Radio
} from 'lucide-react';

export interface StatusBadgeProps {
  status: string;
  label?: string;
  className?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, label, className = '' }) => {
  const norm = status.toUpperCase().replace(/\s+/g, '_');

  let icon = <Activity className="w-3.5 h-3.5" />;
  let colorClass = 'text-[#AAB7C7] border-[#263449] bg-[#111C2B]';
  let displayLabel = label || status;

  if (norm === 'OPTIMAL' || norm === 'HEALTHY' || norm === 'VERIFIED' || norm === 'PASSING' || norm === 'SUCCESS' || norm === 'DEPLOYED') {
    icon = <CheckCircle2 className="w-3.5 h-3.5 text-[#22C55E]" />;
    colorClass = 'text-[#22C55E] border-[#22C55E]/30 bg-[#22C55E]/10';
  } else if (norm === 'NOT_MEASURED') {
    icon = <HelpCircle className="w-3.5 h-3.5 text-[#8190A3]" />;
    colorClass = 'text-[#8190A3] border-[#263449] bg-[#111C2B]';
    displayLabel = label || 'NOT_MEASURED';
  } else if (norm === 'DEPLOYED_NOT_PROBED') {
    icon = <Server className="w-3.5 h-3.5 text-[#38BDF8]" />;
    colorClass = 'text-[#38BDF8] border-[#38BDF8]/30 bg-[#38BDF8]/10';
    displayLabel = label || 'DEPLOYED_NOT_PROBED';
  } else if (norm === 'HISTORICAL_DEPLOYMENT_EVIDENCE' || norm === 'HISTORICAL_EVIDENCE') {
    icon = <Clock className="w-3.5 h-3.5 text-[#FFB15C]" />;
    colorClass = 'text-[#FFB15C] border-[#FFB15C]/30 bg-[#FFB15C]/10';
    displayLabel = label || 'HISTORICAL_EVIDENCE';
  } else if (norm === 'IN_PROGRESS' || norm === 'VALIDATION') {
    icon = <Clock className="w-3.5 h-3.5 text-[#FBBF24]" />;
    colorClass = 'text-[#FBBF24] border-[#FBBF24]/30 bg-[#FBBF24]/10';
  } else if (norm === 'PENDING' || norm === 'UNAVAILABLE' || norm === 'NOT_EVALUATED') {
    icon = <AlertTriangle className="w-3.5 h-3.5 text-[#8190A3]" />;
    colorClass = 'text-[#8190A3] border-[#263449] bg-[#111C2B]';
  } else if (norm === 'OFFLINE' || norm === 'ERROR' || norm === 'FAILED') {
    icon = <Radio className="w-3.5 h-3.5 text-[#EF4444]" />;
    colorClass = 'text-[#EF4444] border-[#EF4444]/30 bg-[#EF4444]/10';
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-medium rounded-md border ${colorClass} ${className} whitespace-nowrap`}
      title={`State: ${status}`}
    >
      {icon}
      <span>{displayLabel}</span>
    </span>
  );
};
