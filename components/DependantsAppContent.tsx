
import React from 'react';
import { User, PauseCircle, Users, CheckCircle, ChevronDown, Calendar, Eye, Search } from 'lucide-react';

interface DependantsAppContentProps {
  onViewApplication?: (application: any) => void;
  data?: any[];
}

const DependantsAppContent: React.FC<DependantsAppContentProps> = ({ onViewApplication, data }) => {
  const summaryCards = [
    { label: 'Total Dependents', value: '1,144,448', icon: <User size={20} />, color: 'bg-[#00B5E2]' },
    { label: 'New Dependents', value: '0', icon: <PauseCircle size={20} />, color: 'bg-[#00B5E2]' },
    { label: 'Approved', value: '0', icon: <Users size={20} />, color: 'bg-[#00B5E2]' },
    { label: 'Rejected', value: '0', icon: <CheckCircle size={20} />, color: 'bg-[#00B5E2]' },
  ];

  // No fallback/mock data. Data must be provided via props.

  return (
    <div className="p-8 max-w-[1600px] mx-auto">
      {/* Breadcrumbs */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <span>Home</span>
          <span className="text-slate-300">/</span>
          <span className="font-medium text-slate-400">Dependents Applications</span>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {summaryCards.map((card, i) => (
          <div key={i} className="bg-white p-6 rounded-lg border border-slate-100 shadow-sm flex items-center justify-between">
            <div className="space-y-2">
              <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">{card.label}</p>
              <h3 className="text-2xl font-bold text-slate-700">{card.value}</h3>
            </div>
            <div className={`w-12 h-12 ${card.color} rounded-full flex items-center justify-center text-white shadow-md`}>
              {card.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Main Filter Section */}
      <div className="bg-white rounded-lg shadow-sm border border-slate-100 p-8 mb-6">
        <div className="flex justify-end gap-3 mb-8">
          <button className="px-6 py-2 bg-slate-100 text-slate-600 rounded-md text-sm font-semibold hover:bg-slate-200 transition-colors">Reset</button>
          <button className="px-6 py-2 bg-[#00B5E2] text-white rounded-md text-sm font-semibold hover:bg-cyan-600 transition-colors shadow-sm">Search</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
          <div className="space-y-2">
            <label className="text-[13px] font-bold text-slate-600">Select Region</label>
            <div className="relative">
              <select className="w-full bg-white border border-slate-200 rounded-md px-3 py-2.5 text-slate-400 text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-cyan-500">
                <option>Select Region...</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[13px] font-bold text-slate-600">Select County</label>
            <div className="relative">
              <select className="w-full bg-white border border-slate-200 rounded-md px-3 py-2.5 text-slate-400 text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-cyan-500">
                <option>Select County...</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[13px] font-bold text-slate-600">Select Constituency</label>
            <div className="relative">
              <select className="w-full bg-white border border-slate-200 rounded-md px-3 py-2.5 text-slate-400 text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-cyan-500">
                <option>Select Constituenc</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[13px] font-bold text-slate-600">Select Ward</label>
            <div className="relative">
              <select className="w-full bg-white border border-slate-200 rounded-md px-3 py-2.5 text-slate-400 text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-cyan-500">
                <option>Select Ward...</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[13px] font-bold text-slate-600">Start Date</label>
            <div className="relative">
              <input type="text" defaultValue="16/10/2025" className="w-full bg-white border border-slate-200 rounded-md px-3 py-2.5 text-slate-600 text-sm focus:outline-none focus:ring-1 focus:ring-cyan-500" />
              <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[13px] font-bold text-slate-600">End Date</label>
            <div className="relative">
              <input type="text" defaultValue="14/01/2026" className="w-full bg-white border border-slate-200 rounded-md px-3 py-2.5 text-slate-600 text-sm focus:outline-none focus:ring-1 focus:ring-cyan-500" />
              <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Table Filter & List */}
      <div className="bg-white rounded-lg shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-6 flex flex-wrap gap-4 items-center border-b border-slate-50">
          <div className="relative w-32">
            <select className="w-full bg-white border border-slate-200 rounded-md px-3 py-2 text-slate-600 text-sm appearance-none focus:outline-none">
              <option>Show 10</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
          </div>
          <div className="relative w-48">
            <select className="w-full bg-white border border-slate-200 rounded-md px-3 py-2 text-slate-600 text-sm appearance-none focus:outline-none">
              <option>Select Search Field</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
          </div>
          <div className="relative w-64">
            <input type="text" placeholder="Search" className="w-full bg-white border border-slate-200 rounded-md px-3 py-2 text-slate-600 text-sm focus:outline-none" />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left whitespace-nowrap">
            <thead className="bg-[#E9F1F6] border-b border-slate-100">
              <tr className="text-[11px] font-extrabold text-[#475569] uppercase tracking-wider">
                <th className="py-5 px-6">#</th>
                <th className="py-5 px-6">FULL NAMES</th>
                <th className="py-5 px-6">Relationship</th>
                <th className="py-5 px-6">Gender</th>
                <th className="py-5 px-6">Age(Yrs)</th>
                <th className="py-5 px-6">Birth Certificate No</th>
                <th className="py-5 px-6">Status</th>
                <th className="py-5 px-6">Phone Number</th>
                <th className="py-5 px-6">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {(!data || data.length === 0) ? (
                <tr>
                  <td colSpan={9} className="text-center text-slate-500 py-10">No data available</td>
                </tr>
              ) : (
                data.map((row) => (
                  <tr key={row.id} className="text-[13px] text-slate-600 hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6">
                      <input type="checkbox" className="w-4 h-4 rounded border-slate-300" />
                    </td>
                    <td className="py-4 px-6 font-medium text-slate-800">{row.fullName}</td>
                    <td className="py-4 px-6">{row.relationship}</td>
                    <td className="py-4 px-6">{row.gender}</td>
                    <td className="py-4 px-6">{row.age}</td>
                    <td className="py-4 px-6">{row.birthCertNo}</td>
                    <td className="py-4 px-6">
                      <span className={`px-2.5 py-0.5 rounded-md text-[11px] font-bold ${
                        row.status === 'Approved' ? 'bg-[#D1FAE5] text-[#059669]' : 
                        row.status === 'New' ? 'bg-[#FEF3C7] text-[#D97706]' : 
                        'bg-[#FEE2E2] text-[#DC2626]'
                      }`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="py-4 px-6">{row.phoneNumber}</td>
                    <td className="py-4 px-6">
                      <button 
                        onClick={() => onViewApplication && onViewApplication(row)}
                        className="text-[#00B5E2] hover:text-cyan-600 transition-colors"
                      >
                        <Eye size={18} />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DependantsAppContent;
