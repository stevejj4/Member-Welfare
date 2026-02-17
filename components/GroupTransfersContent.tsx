
import React from 'react';
import { 
  Users, 
  Trophy, 
  ThumbsDown, 
  ChevronDown, 
  Calendar, 
  Eye, 
  Search,
  ChevronsLeft,
  ChevronLeft,
  ChevronRight,
  ChevronsRight
} from 'lucide-react';

const GroupTransfersContent: React.FC = () => {
  const stats = [
    { label: 'New Transfer Requests', value: '0', icon: <Users size={24} />, color: 'bg-[#00B5E2]' },
    { label: 'Approved Requests', value: '0', icon: <Trophy size={24} />, color: 'bg-[#00B5E2]' },
    { label: 'Rejected Requests', value: '0', icon: <ThumbsDown size={24} />, color: 'bg-[#00B5E2]' },
  ];

  return (
    <div className="p-8 max-w-[1600px] mx-auto animate-in fade-in duration-500">
      <div className="mb-8">
        <h1 className="text-[18px] font-bold text-slate-700 uppercase tracking-tight mb-2">GROUP TRANSFERS</h1>
        <div className="flex items-center gap-2 text-[14px] text-slate-400">
          <span>Home</span>
          <span className="text-slate-300">/</span>
          <span className="font-medium text-slate-500">Group Transfers</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {stats.map((card, i) => (
          <div key={i} className="bg-white p-8 rounded-lg border border-slate-100 shadow-sm flex items-center justify-between">
            <div className="space-y-4">
              <p className="text-slate-500 text-[15px] font-semibold">{card.label}</p>
              <h3 className="text-4xl font-extrabold text-slate-800">{card.value}</h3>
            </div>
            <div className={`w-14 h-14 ${card.color} rounded-full flex items-center justify-center text-white shadow-lg shadow-cyan-100`}>
              {card.icon}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-slate-100 p-8 mb-6">
        <div className="flex justify-end gap-3 mb-8">
          <button className="px-7 py-2.5 bg-[#F1F5F9] text-slate-600 rounded-md text-[14px] font-semibold hover:bg-slate-200 transition-colors">Reset</button>
          <button className="px-7 py-2.5 bg-[#00B5E2] text-white rounded-md text-[14px] font-semibold hover:bg-cyan-600 transition-colors shadow-sm">Search</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {['Region', 'County', 'Constituency', 'Ward'].map((label) => (
            <div key={label} className="space-y-2">
              <label className="text-[14px] font-bold text-slate-700">Select {label}</label>
              <div className="relative">
                <select className="w-full bg-white border border-slate-200 rounded-md px-4 py-3 text-slate-400 text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all">
                  <option>Select {label}...</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              </div>
            </div>
          ))}
          <div className="space-y-2">
            <label className="text-[14px] font-bold text-slate-700">Start Date</label>
            <div className="relative">
              <input type="text" defaultValue="19/11/2025" className="w-full bg-white border border-slate-200 rounded-md px-4 py-3 text-slate-600 text-sm focus:outline-none focus:ring-1 focus:ring-cyan-500" />
              <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[14px] font-bold text-slate-700">End Date</label>
            <div className="relative">
              <input type="text" defaultValue="17/02/2026" className="w-full bg-white border border-slate-200 rounded-md px-4 py-3 text-slate-600 text-sm focus:outline-none focus:ring-1 focus:ring-cyan-500" />
              <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-8 flex flex-wrap gap-4 items-center border-b border-slate-50">
          <div className="relative w-44">
            <select className="w-full bg-white border border-slate-200 rounded-full pl-5 pr-10 py-3 text-slate-600 text-[14px] appearance-none focus:outline-none hover:bg-slate-50 transition-colors cursor-pointer">
              <option>Show 10</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
          </div>
          <div className="relative w-72">
            <select className="w-full bg-white border border-slate-200 rounded-full pl-5 pr-10 py-3 text-slate-600 text-[14px] appearance-none focus:outline-none hover:bg-slate-50 transition-colors cursor-pointer">
              <option>Select Search Field</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
          </div>
          <div className="relative flex-1 min-w-[300px]">
            <input type="text" placeholder="Search" className="w-full bg-white border border-slate-200 rounded-full px-6 py-3 text-slate-600 text-[14px] focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all" />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left whitespace-nowrap">
            <thead className="bg-[#F1F5F9] border-b border-slate-200">
              <tr className="text-[11px] font-black text-[#475569] uppercase tracking-widest">
                <th className="py-5 px-6 w-10">
                  <input type="checkbox" className="w-4 h-4 rounded border-slate-300" />
                </th>
                <th className="py-5 px-6">ID</th>
                <th className="py-5 px-6">DATE</th>
                <th className="py-5 px-6">TRANSFER FROM</th>
                <th className="py-5 px-6">TRANSFER TO</th>
                <th className="py-5 px-6">GROUP NAME</th>
                <th className="py-5 px-6 text-center">STATUS</th>
                <th className="py-5 px-6">COMMENTS</th>
                <th className="py-5 px-6 text-center">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td colSpan={9} className="py-10 text-center text-slate-400 italic">No data available in table</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-8 flex items-center justify-start gap-1">
          <button className="w-10 h-10 flex items-center justify-center text-slate-300 border border-slate-100 rounded hover:bg-slate-50"><ChevronsLeft size={16} /></button>
          <button className="w-10 h-10 flex items-center justify-center text-slate-300 border border-slate-100 rounded hover:bg-slate-50"><ChevronLeft size={16} /></button>
          <button className="w-10 h-10 flex items-center justify-center text-slate-300 border border-slate-100 rounded hover:bg-slate-50"><ChevronRight size={16} /></button>
          <button className="w-10 h-10 flex items-center justify-center text-slate-300 border border-slate-100 rounded hover:bg-slate-50"><ChevronsRight size={16} /></button>
        </div>
      </div>
    </div>
  );
};

export default GroupTransfersContent;
