import React from 'react';
import { User, CheckCircle, UserPlus, ChevronDown, Calendar, TrendingUp } from 'lucide-react';

const PaymentReportsContent: React.FC = () => {
  const cards = [
    { label: 'Total Premiums', value: '33,411,265', trend: 'up', icon: <User size={18} className="text-cyan-500" />, sparkColor: '#F59E0B' },
    { label: 'Successful Transactions', value: '33,411,265', trend: 'up', icon: <CheckCircle size={18} className="text-emerald-500" />, sparkColor: '#F59E0B' },
    { label: 'Allocated', value: '212,195', trend: 'up', icon: <UserPlus size={18} className="text-amber-500" />, sparkColor: '#00B5E2' },
  ];

  return (
    <div className="p-8 max-w-[1600px] mx-auto animate-in fade-in duration-500">
      <div className="mb-8">
        <h1 className="text-[18px] font-bold text-slate-700 uppercase tracking-tight mb-2">PAYMENT REPORTS</h1>
        <div className="flex items-center gap-2 text-[14px] text-slate-400">
          <span>Reports</span>
          <span className="text-slate-300">/</span>
          <span className="font-medium text-slate-500">Payment Reports</span>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-slate-100 p-8 mb-8">
        <div className="flex justify-end gap-3 mb-8">
          <button className="px-7 py-2 bg-[#F1F5F9] text-slate-600 rounded-md text-[14px] font-semibold hover:bg-slate-200">Reset</button>
          <button className="px-7 py-2 bg-[#00B5E2] text-white rounded-md text-[14px] font-semibold hover:bg-cyan-600 shadow-sm">Search</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {['Region', 'County', 'Constituency', 'Ward'].map((label) => (
            <div key={label} className="space-y-2">
              <label className="text-[13px] font-bold text-slate-700">Select {label}</label>
              <div className="relative">
                <select className="w-full bg-white border border-slate-200 rounded-md px-4 py-2.5 text-slate-400 text-[13px] appearance-none focus:outline-none">
                  <option>Select {label}...</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              </div>
            </div>
          ))}
          <div className="space-y-2">
            <label className="text-[13px] font-bold text-slate-700">Start Date</label>
            <div className="relative">
              <input type="text" defaultValue="19/11/2025" className="w-full bg-white border border-slate-200 rounded-md px-4 py-2.5 text-slate-600 text-[13px] focus:outline-none" />
              <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[13px] font-bold text-slate-700">End Date</label>
            <div className="relative">
              <input type="text" defaultValue="17/02/2026" className="w-full bg-white border border-slate-200 rounded-md px-4 py-2.5 text-slate-600 text-[13px] focus:outline-none" />
              <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {cards.map((card, i) => (
          <div key={i} className="bg-white p-6 rounded-lg border border-slate-100 shadow-sm flex flex-col gap-4">
            <div className="flex items-center gap-3">
              {card.icon}
              <span className="text-[13px] font-bold text-slate-400 uppercase tracking-tight">{card.label}</span>
            </div>
            <div className="flex items-end justify-between gap-4">
              <div className="space-y-1">
                <h3 className="text-2xl font-bold text-slate-800">{card.value}</h3>
                <div className="flex items-center gap-1">
                  <span className="text-[12px] text-slate-400 font-medium">{card.label}</span>
                  <TrendingUp size={12} className="text-emerald-500" />
                </div>
              </div>
              <div className="flex-1 h-12">
                <svg viewBox="0 0 100 30" className="w-full h-full">
                  <path d="M0,25 Q15,5 30,20 T60,10 T100,15" fill="none" stroke={card.sparkColor} strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Payment Summary */}
        <div className="lg:col-span-8 bg-white rounded-lg shadow-sm border border-slate-100 p-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-[16px] font-bold text-slate-700">Payment Summary</h2>
            <div className="flex bg-slate-100 rounded p-1">
              <button className="px-4 py-1 bg-[#00B5E2] text-white rounded text-xs font-bold">Year</button>
              <button className="px-4 py-1 text-slate-500 rounded text-xs font-bold">Month</button>
            </div>
          </div>

          <div className="relative h-[400px] w-full border-b border-slate-100">
             {[25000000, 20000000, 15000000, 10000000, 5000000, 0].map(val => (
               <div key={val} className="flex items-center gap-4 w-full h-[20%] border-t border-slate-50 relative">
                 <span className="absolute -left-16 text-[10px] text-slate-400 w-12 text-right">{val}</span>
               </div>
             ))}
             <span className="absolute -left-20 top-1/2 -rotate-90 text-[10px] text-slate-400">(thousand)</span>

             <div className="absolute inset-0 flex justify-around items-end px-20">
                <div className="flex flex-col items-center gap-2 flex-1 max-w-[300px]">
                  <div className="flex items-end gap-[1px] w-full h-full">
                     <div className="flex-1 bg-[#00B5E2] rounded-t-sm" style={{height: '80%'}}></div>
                     <div className="flex-1 bg-[#10B981] rounded-t-sm" style={{height: '80%'}}></div>
                     <div className="flex-1 bg-[#F59E0B] rounded-t-sm" style={{height: '1%'}}></div>
                  </div>
                  <span className="text-xs text-slate-500 font-medium">Jan</span>
                </div>
                <div className="flex flex-col items-center gap-2 flex-1 max-w-[300px]">
                  <div className="flex items-end gap-[1px] w-full h-full">
                     <div className="flex-1 bg-[#00B5E2] rounded-t-sm" style={{height: '50%'}}></div>
                     <div className="flex-1 bg-[#10B981] rounded-t-sm" style={{height: '50%'}}></div>
                     <div className="flex-1 bg-[#F59E0B] rounded-t-sm" style={{height: '1%'}}></div>
                  </div>
                  <span className="text-xs text-slate-500 font-medium">Feb</span>
                </div>
             </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#00B5E2]"></div>
              <span className="text-[11px] text-slate-500 font-bold uppercase tracking-tight">Total Premiums</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#10B981]"></div>
              <span className="text-[11px] text-slate-500 font-bold uppercase tracking-tight">Successful Transactions</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#F59E0B]"></div>
              <span className="text-[11px] text-slate-500 font-bold uppercase tracking-tight">Allocated</span>
            </div>
          </div>
        </div>

        {/* Right Column: New Members Line Chart */}
        <div className="lg:col-span-4 bg-white rounded-lg shadow-sm border border-slate-100 p-8 flex flex-col">
          <h2 className="text-[16px] font-bold text-slate-700 mb-2">New Members</h2>
          <p className="text-[13px] text-slate-400 font-medium mb-12">Final Quater</p>

          <div className="relative flex-1 min-h-[300px] border-b border-slate-100 border-l border-slate-100">
             <div className="absolute left-0 top-0 h-full flex flex-col justify-between items-start -translate-x-full pr-2">
                {[40, 35, 30, 25, 20, 15, 10, 5].map(v => <span key={v} className="text-[10px] text-slate-400">{v}</span>)}
             </div>
             <span className="absolute -left-12 top-1/2 -rotate-90 text-[10px] text-slate-400 uppercase tracking-widest font-bold">Count</span>

             <div className="absolute inset-0 p-4">
                {/* Line 1: High-2023 (Cyan) */}
                <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full overflow-visible">
                   <path d="M10,40 L40,45 L70,30 L100,20" fill="none" stroke="#00B5E2" strokeWidth="2" />
                   <circle cx="10" cy="40" r="3" fill="#00B5E2" />
                   <circle cx="40" cy="45" r="3" fill="#00B5E2" />
                   <circle cx="70" cy="30" r="3" fill="#00B5E2" />
                   <circle cx="100" cy="20" r="3" fill="#00B5E2" />
                   
                   {/* Line 2: Low-2023 (Emerald) */}
                   <path d="M10,70 L40,78 L70,65 L100,75" fill="none" stroke="#10B981" strokeWidth="2" />
                   <circle cx="10" cy="70" r="3" fill="#10B981" />
                   <circle cx="40" cy="78" r="3" fill="#10B981" />
                   <circle cx="70" cy="65" r="3" fill="#10B981" />
                   <circle cx="100" cy="75" r="3" fill="#10B981" />
                </svg>
             </div>
             
             <div className="absolute -bottom-10 inset-x-0 flex justify-between px-2 text-[10px] text-slate-500 font-bold uppercase">
                <span>Sep</span>
                <span>Oct</span>
                <span>Nov</span>
                <span>Dec</span>
             </div>
             <p className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-[11px] font-bold text-slate-800 uppercase tracking-widest">Month</p>
          </div>

          <div className="mt-20 flex justify-end gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#00B5E2]"></div>
              <span className="text-[10px] text-slate-500 font-bold">High – 2023</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#10B981]"></div>
              <span className="text-[10px] text-slate-500 font-bold">Low – 2023</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentReportsContent;
