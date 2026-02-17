import React from 'react';
import { 
  FileText, 
  CheckCircle, 
  XCircle, 
  ChevronDown, 
  Calendar, 
  Eye,
  Search
} from 'lucide-react';

interface InvoicesContentProps {
  onViewInvoice?: (invoice: any) => void;
  data?: any[];
}

const InvoicesContent: React.FC<InvoicesContentProps> = ({ onViewInvoice, data }) => {
  const stats = [
    { label: 'Total Invoices', value: '85,288', icon: <FileText size={20} />, color: 'bg-[#00B5E2]' },
    { label: 'Successful Invoices', value: '76,880', icon: <CheckCircle size={20} />, color: 'bg-[#00B5E2]' },
    { label: 'Unsuccessful Invoices', value: '8,408', icon: <XCircle size={20} />, color: 'bg-[#00B5E2]' },
  ];

  // No fallback/mock data. Data must be provided via props.

  return (
    <div className="p-8 max-w-[1600px] mx-auto animate-in fade-in duration-500">
      <div className="mb-8">
        <h1 className="text-[18px] font-bold text-slate-700 uppercase tracking-tight mb-2">INVOICES</h1>
        <div className="flex items-center gap-2 text-[14px] text-slate-400">
          <span>Home</span>
          <span className="text-slate-300">/</span>
          <span className="font-medium text-slate-500">Invoices</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {stats.map((card, i) => (
          <div key={i} className="bg-white p-6 rounded-lg border border-slate-100 shadow-sm flex items-center justify-between">
            <div className="space-y-3">
              <p className="text-slate-500 text-[13px] font-semibold">{card.label}</p>
              <h3 className="text-2xl font-extrabold text-slate-800">{card.value}</h3>
            </div>
            <div className={`w-12 h-12 ${card.color} rounded-full flex items-center justify-center text-white shadow-lg shadow-cyan-50`}>
              {card.icon}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-slate-100 p-8 mb-6">
        <div className="flex justify-end gap-3 mb-8">
          <button className="px-7 py-2 bg-[#F1F5F9] text-slate-600 rounded-md text-[14px] font-semibold hover:bg-slate-200 transition-colors">Reset</button>
          <button className="px-7 py-2 bg-[#00B5E2] text-white rounded-md text-[14px] font-semibold hover:bg-cyan-600 transition-colors shadow-sm">Search</button>
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
              <input type="text" defaultValue="19/11/2025" className="w-full bg-white border border-slate-200 rounded-md px-4 py-2.5 text-slate-600 text-[13px] focus:outline-none focus:ring-1 focus:ring-cyan-500" />
              <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[13px] font-bold text-slate-700">End Date</label>
            <div className="relative">
              <input type="text" defaultValue="17/02/2026" className="w-full bg-white border border-slate-200 rounded-md px-4 py-2.5 text-slate-600 text-[13px] focus:outline-none focus:ring-1 focus:ring-cyan-500" />
              <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-6 flex flex-wrap gap-4 items-center border-b border-slate-50">
          <div className="relative w-40">
            <select className="w-full bg-white border border-slate-200 rounded-md pl-4 pr-10 py-2 text-slate-600 text-[13px] appearance-none focus:outline-none">
              <option>Show 10</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
          </div>
          <div className="relative w-72">
            <select className="w-full bg-white border border-slate-200 rounded-md pl-4 pr-10 py-2 text-slate-600 text-[13px] appearance-none focus:outline-none">
              <option>Select Search Field</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
          </div>
          <div className="relative flex-1 max-w-sm">
            <input type="text" placeholder="Search" className="w-full border border-slate-200 rounded-md px-4 py-2 text-[13px] focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all" />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left whitespace-nowrap">
            <thead className="bg-[#F1F5F9] border-b border-slate-200">
              <tr className="text-[11px] font-black text-[#475569] uppercase tracking-wider">
                <th className="py-4 px-6 w-10"><input type="checkbox" className="w-4 h-4 rounded border-slate-300" /></th>
                <th className="py-4 px-6">ID</th>
                <th className="py-4 px-6">INVOICE NUMBER</th>
                <th className="py-4 px-6">POLICY NUMBER</th>
                <th className="py-4 px-6">Created DATE</th>
                <th className="py-4 px-6">Due DATE</th>
                <th className="py-4 px-6">MEMBER NAME</th>
                <th className="py-4 px-6">TOTAL AMOUNT</th>
                <th className="py-4 px-6">PAID AMOUNT</th>
                <th className="py-4 px-6 text-center">STATUS</th>
                <th className="py-4 px-6 text-center">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {(!data || data.length === 0) ? (
                <tr>
                  <td colSpan={11} className="text-center text-slate-500 py-10">No data available</td>
                </tr>
              ) : (
                data.map((row) => (
                  <tr key={row.id} className="text-[13px] text-slate-600 hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6"><input type="checkbox" className="w-4 h-4 rounded border-slate-300" /></td>
                    <td className="py-4 px-6">{row.id}</td>
                    <td className="py-4 px-6 font-bold text-slate-800">{row.invNo}</td>
                    <td className="py-4 px-6 text-slate-500">{row.policy}</td>
                    <td className="py-4 px-6 text-slate-400">{row.created}</td>
                    <td className="py-4 px-6 text-slate-400">{row.due}</td>
                    <td className="py-4 px-6 font-medium text-slate-700">{row.member}</td>
                    <td className="py-4 px-6">{row.amount}</td>
                    <td className="py-4 px-6">{row.paid}</td>
                    <td className="py-4 px-6 text-center">
                      <span className={`px-2.5 py-0.5 rounded-md text-[11px] font-bold ${
                        row.status === 'Fully_Paid' ? 'bg-[#E6F9F0] text-[#00B58D]' : 'bg-[#FEE2E2] text-[#DC2626]'
                      }`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <button 
                        onClick={() => onViewInvoice && onViewInvoice(row)}
                        className="text-[#00B5E2] hover:bg-cyan-50 p-1.5 rounded-full transition-colors"
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

export default InvoicesContent;
