import React from 'react';
import { 
  Calendar, 
  ChevronDown, 
  Eye,
  FileText,
  CheckCircle,
  ThumbsDown,
  Ban,
  ChevronsLeft,
  ChevronLeft,
  ChevronRight,
  ChevronsRight
} from 'lucide-react';

interface PrincipalMembersAppContentProps {
  onViewApplication?: (application: any) => void;
  data?: any[];
}

const PrincipalMembersAppContent: React.FC<PrincipalMembersAppContentProps> = ({ onViewApplication, data }) => {
  const summaryCards = [
    { label: 'Total Applications', value: '23', icon: <FileText size={20} />, color: 'bg-[#00B5E2]' },
    { label: 'Approved', value: '22', icon: <CheckCircle size={20} />, color: 'bg-[#00B5E2]' },
    { label: 'Rejected', value: '0', icon: <ThumbsDown size={20} />, color: 'bg-[#00B5E2]' },
    { label: 'Pending', value: '0', icon: <Ban size={20} />, color: 'bg-[#00B5E2]' },
  ];

  // No fallback/mock data. Data must be provided via props.

  return (
    <div className="p-8 max-w-[1600px] mx-auto min-h-screen">
      {/* Header & Breadcrumbs */}
      <div className="mb-8">
        <h1 className="text-[18px] font-bold text-slate-700 uppercase tracking-tight mb-2">APPLICATIONS</h1>
        <div className="flex items-center gap-2 text-[14px] text-slate-400">
          <span>Home</span>
          <span className="text-slate-300">/</span>
          <span className="font-medium text-slate-500">Applications</span>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {summaryCards.map((card, i) => (
          <div key={i} className="bg-white p-6 rounded-lg border border-slate-100 shadow-sm flex items-center justify-between">
            <div className="space-y-3">
              <p className="text-[13px] text-slate-500 font-semibold">{card.label}</p>
              <h3 className="text-3xl font-bold text-slate-800">{card.value}</h3>
            </div>
            <div className={`w-12 h-12 ${card.color} rounded-full flex items-center justify-center text-white shadow-lg shadow-cyan-50`}>
              {card.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Search & Reset Buttons */}
      <div className="flex justify-end gap-3 mb-6">
        <button className="px-7 py-2.5 bg-[#F1F5F9] text-slate-600 rounded-md text-[14px] font-semibold hover:bg-slate-200 transition-colors">Reset</button>
        <button className="px-7 py-2.5 bg-[#00B5E2] text-white rounded-md text-[14px] font-semibold hover:bg-cyan-600 transition-colors shadow-sm">Search</button>
      </div>

      {/* Date Filters Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="space-y-2">
          <label className="text-[14px] font-bold text-slate-700">Start Date</label>
          <div className="relative group">
            <input 
              type="text" 
              defaultValue="21/10/2025" 
              className="w-full bg-white border border-slate-200 rounded-md px-4 py-3 text-slate-600 text-[14px] focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all" 
            />
            <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-[14px] font-bold text-slate-700">End Date</label>
          <div className="relative group">
            <input 
              type="text" 
              defaultValue="19/01/2026" 
              className="w-full bg-white border border-slate-200 rounded-md px-4 py-3 text-slate-600 text-[14px] focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all" 
            />
            <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          </div>
        </div>
      </div>

      {/* Main Content Card */}
      <div className="bg-white rounded-lg shadow-sm border border-slate-100">
        {/* Table Controls (Search/Show) */}
        <div className="p-8 flex flex-wrap gap-4 items-center">
          <div className="relative w-44">
            <select className="w-full bg-white border border-slate-200 rounded-full pl-5 pr-10 py-3 text-slate-600 text-[14px] appearance-none focus:outline-none hover:bg-slate-50 transition-colors cursor-pointer">
              <option>Show 10</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
          </div>
          <div className="relative w-72">
            <select className="w-full bg-white border border-slate-200 rounded-full pl-5 pr-10 py-3 text-slate-600 text-[14px] appearance-none focus:outline-none hover:bg-slate-50 transition-colors cursor-pointer focus:ring-2 focus:ring-cyan-200 border-[#AED9E0]">
              <option>Select Search Field</option>
              <option>Search by: SID</option>
              <option>Search by: Email</option>
              <option>Search by: ID Number</option>
              <option>Search by: First Name</option>
              <option>Search by: Last Name</option>
              <option>Search by: Mobile Number</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
          </div>
          <div className="relative flex-1 min-w-[300px]">
            <input 
              type="text" 
              placeholder="Search" 
              className="w-full bg-white border border-slate-200 rounded-full px-6 py-3 text-slate-600 text-[14px] focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all" 
            />
          </div>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left whitespace-nowrap">
            <thead className="bg-[#F1F5F9] border-b border-slate-200">
              <tr className="text-[11px] font-black text-[#475569] uppercase tracking-widest">
                <th className="py-5 px-6 w-10">
                  <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-cyan-600 focus:ring-cyan-500" />
                </th>
                <th className="py-5 px-6">ID</th>
                <th className="py-5 px-6">APPLICATION NO</th>
                <th className="py-5 px-6">FULL NAME</th>
                <th className="py-5 px-6">MOBILE</th>
                <th className="py-5 px-6">APPLICATION DATE</th>
                <th className="py-5 px-6">SOURCE</th>
                <th className="py-5 px-6 text-center">STATUS</th>
                <th className="py-5 px-6">WARD</th>
                <th className="py-5 px-6 text-center">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {(!data || data.length === 0) ? (
                <tr>
                  <td colSpan={10} className="text-center text-slate-500 py-10">No data available</td>
                </tr>
              ) : (
                data.map((row) => (
                  <tr key={row.id} className="text-[13px] text-slate-600 hover:bg-slate-50/80 transition-all group">
                    <td className="py-5 px-6">
                      <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-cyan-600 focus:ring-cyan-500" />
                    </td>
                    <td className="py-5 px-6 font-medium text-slate-500">{row.id}</td>
                    <td className="py-5 px-6 font-medium text-slate-800">{row.appNo}</td>
                    <td className="py-5 px-6 font-medium text-slate-700">{row.fullName}</td>
                    <td className="py-5 px-6 font-medium text-slate-500">{row.mobile}</td>
                    <td className="py-5 px-6 text-slate-500">{row.date}</td>
                    <td className="py-5 px-6 text-slate-500">{row.source}</td>
                    <td className="py-5 px-6 text-center">
                      <span className={`px-3 py-1 rounded-md text-[11px] font-bold ${
                        row.status === 'Approved' 
                          ? 'bg-[#E6F9F0] text-[#00B58D]' 
                          : 'bg-[#FFF9E6] text-[#D99A29]'
                      }`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="py-5 px-6 text-slate-500">{row.ward}</td>
                    <td className="py-5 px-6">
                      <div className="flex justify-center">
                        <button 
                          onClick={() => onViewApplication && onViewApplication(row)}
                          className="w-8 h-8 flex items-center justify-center text-[#00B5E2] hover:bg-cyan-50 rounded-full transition-all"
                        >
                          <Eye size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-8 flex items-center justify-start">
          <div className="flex items-center gap-1">
            <button className="w-10 h-10 flex items-center justify-center text-slate-300 border border-slate-100 rounded hover:bg-slate-50 transition-colors">
              <ChevronsLeft size={16} />
            </button>
            <button className="w-10 h-10 flex items-center justify-center text-slate-300 border border-slate-100 rounded hover:bg-slate-50 transition-colors">
              <ChevronLeft size={16} />
            </button>
            <button className="w-10 h-10 flex items-center justify-center text-slate-300 border border-slate-100 rounded hover:bg-slate-50 transition-colors">
              <ChevronRight size={16} />
            </button>
            <button className="w-10 h-10 flex items-center justify-center text-slate-300 border border-slate-100 rounded hover:bg-slate-50 transition-colors">
              <ChevronsRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrincipalMembersAppContent;
