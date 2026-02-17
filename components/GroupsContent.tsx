
import React, { useState } from 'react';
import { 
  Users, 
  Trophy, 
  ThumbsDown, 
  ChevronDown, 
  Calendar, 
  Eye, 
  Pencil,
  Trash2,
  Plus,
  Search,
  ChevronsLeft,
  ChevronLeft,
  ChevronRight,
  ChevronsRight,
  X
} from 'lucide-react';

interface GroupsContentProps {
  onAddNewGroup: () => void;
  onViewGroup?: (group: any) => void;
  onEditGroup?: (group: any) => void;
  data?: any[];
}

const GroupsContent: React.FC<GroupsContentProps> = ({ onAddNewGroup, onViewGroup, onEditGroup, data }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [groupToDelete, setGroupToDelete] = useState<any>(null);

  const stats = [
    { label: 'Total Groups', value: '34,897', icon: <Users size={24} />, color: 'bg-[#00B5E2]' },
    { label: 'Active Groups', value: '34,897', icon: <Trophy size={24} />, color: 'bg-[#00B5E2]' },
    { label: 'Inactive Groups', value: '0', icon: <ThumbsDown size={24} />, color: 'bg-[#00B5E2]' },
  ];

  // No fallback/mock data. Data must be provided via props.

  const handleDeleteClick = (group: any) => {
    setGroupToDelete(group);
    setIsDeleteModalOpen(true);
  };

  return (
    <div className="p-8 max-w-[1600px] mx-auto animate-in fade-in duration-500 relative">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-[18px] font-bold text-slate-700 uppercase tracking-tight mb-2">GROUPS</h1>
        <div className="flex items-center gap-2 text-[14px] text-slate-400">
          <span>Home</span>
          <span className="text-slate-300">/</span>
          <span className="font-medium text-slate-500">Groups</span>
        </div>
      </div>

      {/* Summary Cards */}
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

      {/* Filters Section */}
      <div className="bg-white rounded-lg shadow-sm border border-slate-100 p-8 mb-6">
        <div className="flex justify-end gap-3 mb-8">
          <button className="px-7 py-2.5 bg-[#F1F5F9] text-slate-600 rounded-md text-[14px] font-semibold hover:bg-slate-200 transition-colors">Reset</button>
          <button className="px-7 py-2.5 bg-[#00B5E2] text-white rounded-md text-[14px] font-semibold hover:bg-cyan-600 transition-colors shadow-sm">Search</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6">
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

      {/* Main Table Container */}
      <div className="bg-white rounded-lg shadow-sm border border-slate-100 overflow-hidden">
        {/* Search & Actions Header */}
        <div className="p-8 flex flex-wrap gap-4 items-center justify-between border-b border-slate-50">
          <div className="flex flex-wrap gap-4 flex-1">
            <div className="relative w-44">
              <select className="w-full bg-white border border-slate-200 rounded-full pl-5 pr-10 py-3 text-slate-600 text-[14px] appearance-none focus:outline-none hover:bg-slate-50 transition-colors cursor-pointer">
                <option>Show 100</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            </div>
            <div className="relative w-72">
              <select className="w-full bg-white border border-slate-200 rounded-full pl-5 pr-10 py-3 text-slate-600 text-[14px] appearance-none focus:outline-none hover:bg-slate-50 transition-colors cursor-pointer">
                <option>Select Search Field</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            </div>
            <div className="relative flex-1 max-w-md">
              <input type="text" placeholder="Search" className="w-full bg-white border border-slate-200 rounded-full px-6 py-3 text-slate-600 text-[14px] focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all" />
            </div>
          </div>
          
          <button 
            onClick={onAddNewGroup}
            className="bg-[#10B981] hover:bg-emerald-600 text-white px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2 transition-all shadow-md active:scale-95"
          >
            <Plus size={18} strokeWidth={3} />
            Add New Group
          </button>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left whitespace-nowrap">
            <thead className="bg-[#F1F5F9] border-b border-slate-200">
              <tr className="text-[11px] font-black text-[#475569] uppercase tracking-widest">
                <th className="py-5 px-6 w-10">
                  <input type="checkbox" className="w-4 h-4 rounded border-slate-300" />
                </th>
                <th className="py-5 px-6">ID</th>
                <th className="py-5 px-6">GROUP NAME</th>
                <th className="py-5 px-6">GROUP NUMBER</th>
                <th className="py-5 px-6">DATE CREATED</th>
                <th className="py-5 px-6">CONSTITUENCY</th>
                <th className="py-5 px-6">WARD</th>
                <th className="py-5 px-6 text-center">MEMBER COUNT</th>
                <th className="py-5 px-6 text-center">STATUS</th>
                <th className="py-5 px-6 text-center">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {(!data || data.length === 0) ? (
                <tr>
                  <td colSpan={10} className="text-center text-slate-500 py-10">No data available</td>
                </tr>
              ) : (
                data.map((group) => (
                  <tr key={group.id} className="text-[13px] text-slate-600 hover:bg-slate-50 transition-colors group">
                    <td className="py-5 px-6">
                      <input type="checkbox" className="w-4 h-4 rounded border-slate-300" />
                    </td>
                    <td className="py-5 px-6 font-bold">{group.id}</td>
                    <td className="py-5 px-6 font-medium text-slate-800">{group.name}</td>
                    <td className="py-5 px-6 text-slate-500">{group.number}</td>
                    <td className="py-5 px-6 text-slate-500">{group.date}</td>
                    <td className="py-5 px-6">{group.constituency}</td>
                    <td className="py-5 px-6">{group.ward}</td>
                    <td className="py-5 px-6 text-center">{group.memberCount}</td>
                    <td className="py-5 px-6 text-center">
                      <span className="px-3 py-1 bg-[#E6F9F0] text-[#00B58D] text-[11px] font-bold rounded-md">
                        {group.status}
                      </span>
                    </td>
                    <td className="py-5 px-6">
                      <div className="flex justify-center items-center gap-3">
                        <button 
                          onClick={() => onEditGroup && onEditGroup(group)}
                          className="text-emerald-500 hover:scale-110 transition-transform"
                        >
                          <Pencil size={18} />
                        </button>
                        <button 
                          onClick={() => onViewGroup && onViewGroup(group)}
                          className="text-[#00B5E2] hover:scale-110 transition-transform"
                        >
                          <Eye size={18} />
                        </button>
                        <button 
                          onClick={() => handleDeleteClick(group)}
                          className="text-red-400 hover:scale-110 transition-transform"
                        >
                          <Trash2 size={18} />
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
        <div className="p-8 flex items-center justify-start gap-1">
          <button className="w-10 h-10 flex items-center justify-center text-slate-300 border border-slate-100 rounded hover:bg-slate-50"><ChevronsLeft size={16} /></button>
          <button className="w-10 h-10 flex items-center justify-center text-slate-300 border border-slate-100 rounded hover:bg-slate-50"><ChevronLeft size={16} /></button>
          <button className="w-10 h-10 flex items-center justify-center bg-[#00B5E2] text-white rounded font-bold text-sm shadow-sm">1</button>
          <button className="w-10 h-10 flex items-center justify-center text-slate-300 border border-slate-100 rounded hover:bg-slate-50"><ChevronRight size={16} /></button>
          <button className="w-10 h-10 flex items-center justify-center text-slate-300 border border-slate-100 rounded hover:bg-slate-50"><ChevronsRight size={16} /></button>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/30 backdrop-blur-sm animate-in fade-in duration-200 p-4">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-[500px] overflow-hidden relative animate-in zoom-in-95 duration-200">
            <button 
              onClick={() => setIsDeleteModalOpen(false)}
              className="absolute right-4 top-4 text-slate-400 hover:text-slate-600"
            >
              <X size={24} />
            </button>
            <div className="p-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#E0F2FE] rounded-lg flex items-center justify-center mb-8">
                <Trash2 className="text-[#00B5E2]" size={32} />
              </div>
              <p className="text-[18px] text-slate-600 font-medium mb-10 leading-relaxed px-4">
                Are you sure you want to permanently delete item <span className="font-bold">{groupToDelete?.id || '36139'}</span>.
              </p>
              <div className="flex gap-4 w-full justify-center">
                <button 
                  onClick={() => setIsDeleteModalOpen(false)}
                  className="px-8 py-3 bg-[#F87171] hover:bg-red-500 text-white rounded-md font-bold text-[14px] transition-colors shadow-sm"
                >
                  Delete Now
                </button>
                <button 
                  onClick={() => setIsDeleteModalOpen(false)}
                  className="px-8 py-3 bg-[#64748B] hover:bg-slate-600 text-white rounded-md font-bold text-[14px] transition-colors shadow-sm"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GroupsContent;
