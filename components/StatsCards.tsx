
import React from 'react';
import { FileText, DollarSign, Briefcase } from 'lucide-react';

interface StatsCardsProps {
  invoices: number;
  totalPayment: string;
  claims: number;
}

const StatsCards: React.FC<StatsCardsProps> = ({ invoices, totalPayment, claims }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white p-8 rounded-lg border border-slate-100 shadow-sm flex items-center justify-between">
        <div className="space-y-4">
          <p className="text-slate-500 text-[15px] font-semibold">Invoices</p>
          <h3 className="text-3xl font-extrabold text-slate-800">{invoices}</h3>
        </div>
        <div className="w-14 h-14 bg-[#00B5E2] rounded-full flex items-center justify-center text-white shadow-lg shadow-cyan-100">
          <FileText size={24} />
        </div>
      </div>

      <div className="bg-white p-8 rounded-lg border border-slate-100 shadow-sm flex items-center justify-between">
        <div className="space-y-4">
          <p className="text-slate-500 text-[15px] font-semibold">Total Payment</p>
          <h3 className="text-[22px] font-extrabold text-slate-800">{totalPayment}</h3>
        </div>
        <div className="w-14 h-14 bg-[#00B5E2] rounded-full flex items-center justify-center text-white shadow-lg shadow-cyan-100">
          <DollarSign size={24} />
        </div>
      </div>

      <div className="bg-white p-8 rounded-lg border border-slate-100 shadow-sm flex items-center justify-between">
        <div className="space-y-4">
          <p className="text-slate-500 text-[15px] font-semibold">Claims</p>
          <h3 className="text-3xl font-extrabold text-slate-800">{claims}</h3>
        </div>
        <div className="w-14 h-14 bg-[#00B5E2] rounded-full flex items-center justify-center text-white shadow-lg shadow-cyan-100">
          <Briefcase size={24} />
        </div>
      </div>
    </div>
  );
};

export default StatsCards;
