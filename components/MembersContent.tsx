import React from 'react';
import { 
  User, 
  Users, 
  CheckCircle, 
  PauseCircle, 
  AlertCircle, 
  ChevronDown, 
  Calendar, 
  Pencil, 
  Eye, 
  Search as SearchIcon,
  Plus
} from 'lucide-react';

interface MembersContentProps {
  onViewMember?: (member: any) => void;
  onAddNewMember?: () => void;
  onEditMember?: (member: any) => void;
  data?: any[];
}

const MembersContent: React.FC<MembersContentProps> = ({ onViewMember, onAddNewMember, onEditMember, data }) => {
  const summaryCards = [
    { label: 'Total Members', value: '388,764', icon: <User size={20} />, color: 'bg-[#00B5E2]' },
    { label: 'Dependants', value: '1,144,448', icon: <Users size={20} />, color: 'bg-[#00B5E2]' },
    { label: 'Active Members', value: '141,366', icon: <CheckCircle size={20} />, color: 'bg-[#10B981]' },
    { label: 'Pending', value: '24,285', icon: <CheckCircle size={20} />, color: 'bg-[#00B5E2]' },
    { label: 'Dormant Members', value: '59,960', icon: <PauseCircle size={20} />, color: 'bg-[#00B5E2]' },
    { label: 'Default Members', value: '163,153', icon: <AlertCircle size={20} />, color: 'bg-[#F87171]' },
  ];

  // No fallback/mock data. Data must be provided via props.

  return (
    <div className="p-8 max-w-[1600px] mx-auto animate-in fade-in duration-500">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-xl font-bold text-slate-700 uppercase tracking-tight mb-2">Members</h1>
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <span>Home</span>
          <span className="text-slate-300">/</span>
          <span className="font-medium text-slate-400">Members</span>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-10">
        {summaryCards.map((card, i) => (
          <div key={i} className="bg-white p-5 rounded-lg border border-slate-100 shadow-sm flex items-center justify-between">
            <div className="space-y-2">
              <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">{card.label}</p>
              <h3 className="text-2xl font-bold text-slate-700">{card.value}</h3>
            </div>
            <div className={`w-10 h-10 ${card.color} rounded-full flex items-center justify-center text-white shadow-md`}>
              {card.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Filter Section */}
      <div className="bg-white rounded-lg shadow-sm border border-slate-100 p-8 mb-6">
        <div className="flex justify-end gap-3 mb-8">
          <button className="px-6 py-2 bg-slate-100 text-slate-600 rounded-md text-sm font-semibold hover:bg-slate-200 transition-colors">Reset</button>
          <button className="px-6 py-2 bg-[#00B5E2] text-white rounded-md text-sm font-semibold hover:bg-cyan-600 transition-colors shadow-sm">Search</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
          <div className="space-y-2">
            <label className="text-[13px] font-bold text-slate-600">Select Region</label>
            <div className="relative">
              <select className="w-full bg-white border border-slate-200 rounded-md px-3 py-2.5 text-slate-400 text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all">
                <option>Select Region...</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[13px] font-bold text-slate-600">Select County</label>
            <div className="relative">
              <select className="w-full bg-white border border-slate-200 rounded-md px-3 py-2.5 text-slate-400 text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all">
                <option>Select County...</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[13px] font-bold text-slate-600">Select Constituency</label>
            <div className="relative">
              <select className="w-full bg-white border border-slate-200 rounded-md px-3 py-2.5 text-slate-400 text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all">
                <option>Select Constituency...</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[13px] font-bold text-slate-600">Select Ward</label>
            <div className="relative">
              <select className="w-full bg-white border border-slate-200 rounded-md px-3 py-2.5 text-slate-400 text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all">
                <option>Select Ward...</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[13px] font-bold text-slate-600">Start Date</label>
            <div className="relative">
              <input type="text" defaultValue="16/10/2025" className="w-full bg-white border border-slate-200 rounded-md px-3 py-2.5 text-slate-600 text-sm focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all" />
              <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[13px] font-bold text-slate-600">End Date</label>
            <div className="relative">
              <input type="text" defaultValue="14/01/2026" className="w-full bg-white border border-slate-200 rounded-md px-3 py-2.5 text-slate-600 text-sm focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all" />
              <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            </div>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-lg shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-6 flex flex-wrap gap-4 items-center justify-between border-b border-slate-50">
          <div className="flex gap-4 items-center flex-1">
             <div className="relative w-32">
               <select className="w-full bg-white border border-slate-200 rounded-md px-3 py-2 text-slate-600 text-sm appearance-none focus:outline-none">
                 <option>Show 10</option>
               </select>
               <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
             </div>
             <div className="relative w-64">
               <select className="w-full bg-white border border-[#AED9E0] rounded-md px-3 py-2 text-slate-600 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-cyan-100">
                 <option>Select Search Field</option>
                 <option>Search by: SID</option>
                 <option>Search by: Email</option>
                 <option>Search by: ID Number</option>
                 <option>Search by: First Name</option>
                 <option>Search by: Last Name</option>
                 <option>Search by: Mobile Number</option>
               </select>
               <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
             </div>
             <div className="relative w-48">
               <input type="text" placeholder="Search" className="w-full bg-white border border-slate-200 rounded-md px-3 py-2 text-slate-600 text-sm focus:outline-none focus:ring-1 focus:ring-cyan-500" />
             </div>
             <div className="relative w-40">
               <select className="w-full bg-white border border-slate-200 rounded-md px-3 py-2 text-slate-600 text-sm appearance-none focus:outline-none">
                 <option>Select Status...</option>
               </select>
               <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
             </div>
          </div>
          
          <button 
            onClick={onAddNewMember}
            className="bg-[#10B981] hover:bg-emerald-600 text-white px-6 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 transition-all shadow-md active:scale-95"
          >
            <Plus size={18} strokeWidth={3} />
            Add New Member
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left whitespace-nowrap">
            <thead className="bg-[#E9F1F6] border-b border-slate-100">
              <tr className="text-[11px] font-extrabold text-[#475569] uppercase tracking-wider">
                <th className="py-4 px-6">ID</th>
                <th className="py-4 px-6">FULL NAME</th>
                <th className="py-4 px-6">REGISTRATION DATE</th>
                <th className="py-4 px-6">SHOFCO ID</th>
                <th className="py-4 px-6">NATIONAL ID</th>
                <th className="py-4 px-6">MOBILE</th>
                <th className="py-4 px-6">COUNTY</th>
                <th className="py-4 px-6">SUB COUNTY</th>
                <th className="py-4 px-6">WARD NAME</th>
                <th className="py-4 px-6">GROUP NAME</th>
                <th className="py-4 px-6">MEMBER STATUS</th>
                <th className="py-4 px-6">POLICY STATUS</th>
                <th className="py-4 px-6">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {(!data || data.length === 0) ? (
                <tr>
                  <td colSpan={13} className="text-center text-slate-500 py-10">No data available</td>
                </tr>
              ) : (
                data.map((row) => (
                  <tr key={row.id} className="text-[13px] text-slate-600 hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 font-bold text-slate-800">{row.id}</td>
                    <td className="py-4 px-6 font-bold text-slate-800">{row.fullName}</td>
                    <td className="py-4 px-6">{row.regDate}</td>
                    <td className="py-4 px-6">{row.shofcoId}</td>
                    <td className="py-4 px-6">{row.nationalId}</td>
                    <td className="py-4 px-6 font-bold">{row.mobile}</td>
                    <td className="py-4 px-6">{row.county}</td>
                    <td className="py-4 px-6">{row.subCounty}</td>
                    <td className="py-4 px-6">{row.ward}</td>
                    <td className="py-4 px-6">{row.group}</td>
                    <td className="py-4 px-6">
                      <span className={`px-2.5 py-0.5 rounded-md text-[11px] font-bold ${
                        row.status === 'Active' ? 'bg-[#D1FAE5] text-[#059669]' : 'bg-[#FEF3C7] text-[#D97706]'
                      }`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="px-2.5 py-0.5 bg-[#FEE2E2] text-[#DC2626] rounded-md text-[11px] font-bold">
                        {row.policy}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex gap-4">
                        <button 
                          onClick={() => onEditMember && onEditMember(row)}
                          className="text-emerald-500 hover:text-emerald-600 transition-colors"
                        >
                          <Pencil size={18} />
                        </button>
                        <button 
                          onClick={() => onViewMember && onViewMember(row)}
                          className="text-[#00B5E2] hover:text-cyan-600 transition-colors"
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
      </div>
    </div>
  );
};

export default MembersContent;