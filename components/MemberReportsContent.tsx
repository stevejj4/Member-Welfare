import React from 'react';
import { User, Users, UserPlus, ChevronDown, Calendar, TrendingUp, TrendingDown } from 'lucide-react';

const MemberReportsContent: React.FC = () => {
  const cards = [
    { label: 'Members', value: '398,294', subLabel: 'Total Members', trend: 'up', color: 'text-cyan-500', icon: <User size={18} className="text-cyan-500" />, sparkColor: '#00B5E2' },
    { label: 'Dependants', value: '1,164,448', subLabel: 'Total Dependants', trend: 'down', color: 'text-cyan-500', icon: <Users size={18} className="text-cyan-500" />, sparkColor: '#00B5E2' },
    { label: 'New Members', value: '5,115', subLabel: 'New Members', trend: 'up', color: 'text-cyan-500', icon: <UserPlus size={18} className="text-cyan-500" />, sparkColor: '#00B5E2' },
    { label: 'Individual Members', value: '7,063', subLabel: 'Individual Members', trend: 'up', color: 'text-cyan-500', icon: <UserPlus size={18} className="text-cyan-500" />, sparkColor: '#00B5E2' },
  ];

  return (
    <div className="p-8 max-w-[1600px] mx-auto animate-in fade-in duration-500">
      <div className="mb-8">
        <h1 className="text-[18px] font-bold text-slate-700 uppercase tracking-tight mb-2">MEMBER REPORTS</h1>
        <div className="flex items-center gap-2 text-[14px] text-slate-400">
          <span>Reports</span>
          <span className="text-slate-300">/</span>
          <span className="font-medium text-slate-500">Member Reports</span>
        </div>
      </div>

      {/* Filters */}
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
                <select className="w-full bg-white border border-slate-200 rounded-md px-4 py-2.5 text-slate-400 text-[13px] appearance-none focus:outline-none focus:ring-1 focus:ring-cyan-500">
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

      {/* Summary Cards with Sparklines */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {cards.slice(0, 3).map((card, i) => (
          <div key={i} className="bg-white p-6 rounded-lg border border-slate-100 shadow-sm flex flex-col gap-4">
            <div className="flex items-center gap-3">
              {card.icon}
              <span className="text-[13px] font-bold text-slate-400 uppercase tracking-tight">{card.label}</span>
            </div>
            <div className="flex items-end justify-between gap-4">
              <div className="space-y-1">
                <h3 className="text-2xl font-bold text-slate-800">{card.value}</h3>
                <div className="flex items-center gap-1">
                  <span className="text-[12px] text-slate-400 font-medium">{card.subLabel}</span>
                  {card.trend === 'up' ? <TrendingUp size={12} className="text-emerald-500" /> : <TrendingDown size={12} className="text-red-500" />}
                </div>
              </div>
              <div className="flex-1 h-12">
                <svg viewBox="0 0 100 30" className="w-full h-full preserve-3d">
                  <path d="M0,25 Q15,5 30,20 T60,10 T100,15" fill="none" stroke={i === 0 ? '#F59E0B' : '#00B5E2'} strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg border border-slate-100 shadow-sm flex flex-col gap-4">
          <div className="flex items-center gap-3">
            {cards[3].icon}
            <span className="text-[13px] font-bold text-slate-400 uppercase tracking-tight">{cards[3].label}</span>
          </div>
          <div className="flex items-end justify-between gap-4">
            <div className="space-y-1">
              <h3 className="text-2xl font-bold text-slate-800">{cards[3].value}</h3>
              <div className="flex items-center gap-1">
                <span className="text-[12px] text-slate-400 font-medium">{cards[3].subLabel}</span>
                <TrendingUp size={12} className="text-emerald-500" />
              </div>
            </div>
            <div className="flex-1 h-12">
              <svg viewBox="0 0 100 30" className="w-full h-full">
                <path d="M0,20 Q20,5 40,25 T70,10 T100,20" fill="none" stroke="#00B5E2" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Main Chart */}
      <div className="bg-white rounded-lg shadow-sm border border-slate-100 p-8">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-[16px] font-bold text-slate-700">Members Summary</h2>
          <div className="flex bg-slate-100 rounded p-1">
            <button className="px-4 py-1 bg-slate-500 text-white rounded text-xs font-bold">Month</button>
            <button className="px-4 py-1 text-slate-500 rounded text-xs font-bold">Year</button>
          </div>
        </div>

        <div className="relative h-[400px] w-full border-b border-slate-100">
           {/* Grid Lines */}
           {[1200000, 1000000, 800000, 600000, 400000, 200000, 0].map(val => (
             <div key={val} className="flex items-center gap-4 w-full h-[14.28%] border-t border-slate-50 relative">
               <span className="absolute -left-16 text-[10px] text-slate-400 w-12 text-right">{val}</span>
             </div>
           ))}
           <span className="absolute -left-20 top-1/2 -rotate-90 text-[10px] text-slate-400">(thousand)</span>

           {/* Bar Groups */}
           <div className="absolute inset-0 flex justify-around items-end px-20">
              {/* Jan */}
              <div className="flex flex-col items-center gap-2 flex-1 max-w-[300px]">
                <div className="flex items-end gap-[1px] w-full h-full">
                   <div className="flex-1 bg-[#00B5E2] rounded-t-sm" style={{height: '33%'}}></div>
                   <div className="flex-1 bg-[#10B981] rounded-t-sm" style={{height: '96%'}}></div>
                   <div className="flex-1 bg-[#00B5E2] rounded-t-sm" style={{height: '1%'}}></div>
                </div>
                <span className="text-xs text-slate-500 font-medium">Jan</span>
              </div>
              {/* Feb */}
              <div className="flex flex-col items-center gap-2 flex-1 max-w-[300px]">
                <div className="flex items-end gap-[1px] w-full h-full">
                   <div className="flex-1 bg-[#00B5E2] rounded-t-sm" style={{height: '33%'}}></div>
                   <div className="flex-1 bg-[#10B981] rounded-t-sm" style={{height: '96%'}}></div>
                   <div className="flex-1 bg-[#00B5E2] rounded-t-sm" style={{height: '1%'}}></div>
                </div>
                <span className="text-xs text-slate-500 font-medium">Feb</span>
              </div>
           </div>
        </div>

        {/* Legend */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#00B5E2]"></div>
            <span className="text-[11px] text-slate-500 font-bold uppercase tracking-tight">Total Members</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#10B981]"></div>
            <span className="text-[11px] text-slate-500 font-bold uppercase tracking-tight">Dependants</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#00B5E2]"></div>
            <span className="text-[11px] text-slate-500 font-bold uppercase tracking-tight">New Members</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberReportsContent;
