import React, { useState } from 'react';
import { 
  Pencil, 
  Plus, 
  Eye, 
  ChevronLeft, 
  ChevronRight, 
  ChevronsLeft, 
  ChevronsRight,
  X,
  Calendar,
  ChevronDown
} from 'lucide-react';
import { Dependant } from '../types';

const ContentTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState(2); // Default to Dependants (2) for this demo
  const [dependantView, setDependantView] = useState<'list' | 'tree'>('list');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const steps = [
    { id: 1, label: 'Next of Kin' },
    { id: 2, label: 'Dependants' },
    { id: 3, label: 'Payments' },
  ];

  const nokFields = [
    { label: 'Full Name', value: 'IAN. MA INA' },
    { label: 'Mobile', value: '0746695494' },
    { label: 'Id Number', value: '246765371' },
    { label: 'E-mail', value: '' },
    { label: 'Relationship', value: 'Son' },
    { label: 'Status', value: 'Active' },
  ];

  const dependants: any[] = [
    {
      id: '1338514',
      fullName: 'Melvin Achieng',
      relationship: 'Daughter',
      gender: 'Female',
      dob: '01-01-2010',
      age: '16',
      birthCertNo: '0',
      insertDate: '2026-02-17 13:18:23.0',
      status: 'Inactive',
      phoneNumber: ''
    },
    {
      id: '1338512',
      fullName: 'Gabriel Odhiambo',
      relationship: 'Husband',
      gender: 'Male',
      dob: '01-02-1964',
      age: '62',
      birthCertNo: '0',
      insertDate: '2026-02-17 13:17:41.0',
      status: 'Inactive',
      phoneNumber: ''
    }
  ];

  const transactions = [
    {
      id: '1661060',
      transactionId: 'UAEEK3R5CT',
      amount: '300',
      date: '14-01-2026',
      status: 'Success',
      reallocated: 'NO',
      method: 'MPESA_STANDARD'
    }
  ];

  return (
    <div className="bg-white rounded-lg border border-slate-100 shadow-sm overflow-hidden relative">
      {/* Stepper Header */}
      <div className="flex bg-[#F1F5F9] p-2">
        {steps.map((step) => (
          <button
            key={step.id}
            onClick={() => setActiveTab(step.id)}
            className={`flex-1 flex items-center gap-4 py-6 px-8 rounded-lg transition-all ${
              activeTab === step.id 
                ? 'bg-[#E0F2FE] text-slate-700 shadow-sm' 
                : 'text-slate-400 hover:bg-slate-50'
            }`}
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg border-2 ${
              activeTab === step.id ? 'bg-[#00B5E2] text-white border-[#00B5E2]' : 'border-cyan-400 text-cyan-500'
            }`}>
              {step.id}
            </div>
            <span className="font-semibold text-[15px] whitespace-nowrap">{step.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-10 min-h-[500px]">
        {activeTab === 1 && (
          <div className="space-y-10 animate-in fade-in duration-300">
            <h2 className="text-lg font-bold text-slate-800 tracking-tight">Next Of Kin Information</h2>
            <div className="space-y-8">
              {nokFields.map((field, idx) => (
                <div key={idx} className="flex items-center border-b border-slate-50 pb-5 last:border-0">
                  <span className="text-[14px] font-bold text-slate-800 uppercase tracking-tight min-w-[200px]">{field.label} :</span>
                  <span className="text-[14px] text-slate-500 font-medium">{field.value || ' '}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 2 && (
          <div className="animate-in fade-in duration-300">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
              <h2 className="text-[17px] font-bold text-slate-700 tracking-tight">Dependants Information</h2>
              <div className="flex gap-3 flex-wrap">
                <button 
                  onClick={() => setDependantView('list')}
                  className={`${dependantView === 'list' ? 'bg-[#00B5E2]' : 'bg-[#00B5E2] opacity-80'} hover:bg-cyan-600 text-white px-5 py-2.5 rounded-md text-sm font-semibold transition-all shadow-sm`}
                >
                  Show List
                </button>
                <button 
                  onClick={() => setDependantView('tree')}
                  className={`${dependantView === 'tree' ? 'bg-[#00B5E2]' : 'bg-[#00B5E2] opacity-80'} hover:bg-cyan-600 text-white px-5 py-2.5 rounded-md text-sm font-semibold transition-all shadow-sm`}
                >
                  Show Family Tree
                </button>
                <button 
                  onClick={() => setIsAddModalOpen(true)}
                  className="bg-[#10B981] hover:bg-emerald-600 text-white px-5 py-2.5 rounded-md text-sm font-semibold flex items-center gap-2 transition-all shadow-sm"
                >
                  <Plus size={18} />
                  Add Dependant
                </button>
              </div>
            </div>

            {dependantView === 'list' ? (
              <div className="space-y-6">
                <div className="overflow-x-auto relative pb-4">
                  <table className="w-full text-left whitespace-nowrap">
                    <thead>
                      <tr className="text-[11px] font-bold text-slate-800 uppercase tracking-wider border-b border-slate-100 bg-white">
                        <th className="py-6 px-4">#</th>
                        <th className="py-6 px-4">ID</th>
                        <th className="py-6 px-4">FULL NAMES</th>
                        <th className="py-6 px-4">Relationship</th>
                        <th className="py-6 px-4">Gender</th>
                        <th className="py-6 px-4">Date of Birth</th>
                        <th className="py-6 px-4">Age(Yrs)</th>
                        <th className="py-6 px-4">Birth Certificate No</th>
                        <th className="py-6 px-4">Insert Date</th>
                        <th className="py-6 px-4">Status</th>
                        <th className="py-6 px-4">Phone Number</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                      {dependants.map((dep, idx) => (
                        <tr key={dep.id} className="text-[14px] text-slate-600 hover:bg-slate-50 transition-colors">
                          <td className="py-6 px-4">
                            <input type="checkbox" className="w-4 h-4 rounded border-slate-300" />
                          </td>
                          <td className="py-6 px-4">{dep.id}</td>
                          <td className="py-6 px-4 font-medium text-slate-800">{dep.fullName}</td>
                          <td className="py-6 px-4">{dep.relationship}</td>
                          <td className="py-6 px-4">{dep.gender}</td>
                          <td className="py-6 px-4">{dep.dob}</td>
                          <td className="py-6 px-4">{dep.age}</td>
                          <td className="py-6 px-4">{dep.birthCertNo}</td>
                          <td className="py-6 px-4 text-slate-500">{dep.insertDate}</td>
                          <td className="py-6 px-4">
                            <span className="px-3 py-1 bg-[#FEE2E2] text-[#DC2626] text-[11px] font-bold rounded-md uppercase">
                              {dep.status}
                            </span>
                          </td>
                          <td className="py-6 px-4 text-slate-400">{dep.phoneNumber}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {/* Decorative Scrollbar Handle mimicking screenshot */}
                  <div className="mt-4 flex items-center justify-between">
                    <button className="text-slate-400 hover:text-slate-600"><ChevronLeft size={20} className="fill-current" /></button>
                    <div className="flex-1 mx-4 h-3 bg-slate-400 rounded-full relative">
                      <div className="absolute left-0 top-0 h-full w-4/5 bg-slate-500 rounded-full"></div>
                    </div>
                    <button className="text-slate-400 hover:text-slate-600 rotate-180"><ChevronLeft size={20} className="fill-current" /></button>
                  </div>
                </div>

                {/* Pagination */}
                <div className="flex justify-start gap-1 mt-6">
                  <button className="w-10 h-10 flex items-center justify-center border border-slate-100 rounded text-slate-300 hover:bg-slate-50">«</button>
                  <button className="w-10 h-10 flex items-center justify-center border border-slate-100 rounded text-slate-300 hover:bg-slate-50">‹</button>
                  <button className="w-10 h-10 flex items-center justify-center bg-[#00B5E2] text-white rounded font-bold text-sm shadow-sm">1</button>
                  <button className="w-10 h-10 flex items-center justify-center border border-slate-100 rounded text-slate-500 hover:bg-slate-50 text-sm">2</button>
                  <button className="w-10 h-10 flex items-center justify-center border border-slate-100 rounded text-slate-300 hover:bg-slate-50">›</button>
                  <button className="w-10 h-10 flex items-center justify-center border border-slate-100 rounded text-slate-300 hover:bg-slate-50">»</button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center py-10 space-y-8 animate-in zoom-in-95 duration-500">
                <h3 className="text-2xl font-medium text-slate-600">Family Tree</h3>
                
                <div className="relative flex flex-col items-center space-y-0">
                  {/* Tree Item: Principal */}
                  <div className="w-64 bg-white border border-slate-200 rounded-md p-5 text-center shadow-sm relative z-10">
                    <p className="text-[15px] font-medium text-slate-700">Beatrice Atieno juma (Principal)</p>
                    <p className="text-[13px] font-bold text-red-500 mt-1">Pending</p>
                  </div>
                  
                  {/* Connector Line */}
                  <div className="w-[1px] h-10 bg-slate-300"></div>
                  
                  {/* Tree Item: Husband */}
                  <div className="w-64 bg-white border border-slate-200 rounded-md p-5 text-center shadow-sm relative z-10">
                    <p className="text-[15px] font-medium text-slate-700">Gabriel Odhiambo (Husband)</p>
                    <p className="text-[13px] font-bold text-red-500 mt-1">Inactive</p>
                  </div>
                  
                  {/* Connector Line */}
                  <div className="w-[1px] h-10 bg-slate-300"></div>
                  
                  {/* Tree Item: Daughter */}
                  <div className="w-64 bg-white border border-slate-200 rounded-md p-5 text-center shadow-sm relative z-10">
                    <p className="text-[15px] font-medium text-slate-700">Melvin Achieng (Daughter)</p>
                    <p className="text-[13px] font-bold text-red-500 mt-1">Inactive</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 3 && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <h2 className="text-lg font-bold text-slate-800 tracking-tight">Latest Transaction</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left whitespace-nowrap">
                <thead>
                  <tr className="text-[12px] font-bold text-slate-700 uppercase tracking-wider">
                    <th className="py-6 px-4">#</th>
                    <th className="py-6 px-4">ID</th>
                    <th className="py-6 px-4">Transaction ID</th>
                    <th className="py-6 px-4 text-right">Amount</th>
                    <th className="py-6 px-4">Date</th>
                    <th className="py-6 px-4">Payment Status</th>
                    <th className="py-6 px-4">Reallocated Payment</th>
                    <th className="py-6 px-4">Payment Method</th>
                    <th className="py-6 px-4">ACTIONS</th>
                  </tr>
                </thead>
                <tbody className="border-t border-slate-50 divide-y divide-slate-50">
                  {transactions.map((tx) => (
                    <tr key={tx.id} className="text-[13px] text-slate-600 hover:bg-slate-50/50 transition-colors">
                      <td className="py-6 px-4">
                        <input type="checkbox" className="w-4 h-4 rounded border-slate-300" />
                      </td>
                      <td className="py-6 px-4 font-bold text-slate-800">{tx.id}</td>
                      <td className="py-6 px-4 font-bold text-slate-800">{tx.transactionId}</td>
                      <td className="py-6 px-4 text-right">{tx.amount}</td>
                      <td className="py-6 px-4 text-slate-500">{tx.date}</td>
                      <td className="py-6 px-4">
                        <span className="px-2.5 py-1 bg-[#D1FAE5] text-[#059669] text-[11px] font-bold rounded-md">
                          {tx.status}
                        </span>
                      </td>
                      <td className="py-6 px-4 text-slate-500">{tx.reallocated}</td>
                      <td className="py-6 px-4 text-slate-500">{tx.method}</td>
                      <td className="py-6 px-4">
                        <button className="text-[#00B5E2] hover:text-cyan-600">
                          <Eye size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Add New Dependant Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-[700px] rounded-lg shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-8 py-5 border-b border-slate-100">
              <h2 className="text-[17px] font-bold text-slate-700">Add New Dependent</h2>
              <button 
                onClick={() => setIsAddModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Body */}
            <form className="p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-slate-600">First Name</label>
                  <input type="text" placeholder="Enter First Name" className="w-full border border-slate-200 rounded-md px-4 py-3 text-sm focus:ring-1 focus:ring-cyan-500 outline-none" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-slate-600">Last Name</label>
                  <input type="text" placeholder="Enter Last Name" className="w-full border border-slate-200 rounded-md px-4 py-3 text-sm focus:ring-1 focus:ring-cyan-500 outline-none" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-slate-600">Sex</label>
                  <div className="relative">
                    <select className="w-full border border-slate-200 rounded-md px-4 py-3 text-sm text-slate-400 appearance-none focus:ring-1 focus:ring-cyan-500 outline-none">
                      <option>Select Gender...</option>
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-slate-600">Date Of birth</label>
                  <div className="relative">
                    <input type="text" placeholder="dd/mm/yyyy" className="w-full border border-slate-200 rounded-md px-4 py-3 text-sm text-slate-400 focus:ring-1 focus:ring-cyan-500 outline-none" />
                    <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-slate-600">Phone Number</label>
                  <input type="text" placeholder="Enter Phone Number" className="w-full border border-slate-200 rounded-md px-4 py-3 text-sm focus:ring-1 focus:ring-cyan-500 outline-none" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-slate-600">Relationship</label>
                  <div className="relative">
                    <select className="w-full border border-slate-200 rounded-md px-4 py-3 text-sm text-slate-400 appearance-none focus:ring-1 focus:ring-cyan-500 outline-none">
                      <option>Select Relationship...</option>
                      <option>Spouse</option>
                      <option>Daughter</option>
                      <option>Son</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-slate-600">Enter Email Address</label>
                  <input type="text" placeholder="Enter Email Address" className="w-full border border-slate-200 rounded-md px-4 py-3 text-sm focus:ring-1 focus:ring-cyan-500 outline-none" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[13px] font-bold text-slate-600">Upload Dependent Birth Certificate</label>
                  <div className="flex border border-slate-200 rounded-md overflow-hidden bg-white group hover:border-slate-300 transition-colors">
                    <button type="button" className="bg-slate-100 px-4 py-3 text-xs font-bold text-slate-600 border-r border-slate-200 hover:bg-slate-200 transition-colors">Choose File</button>
                    <span className="px-4 py-3 text-xs text-slate-400 italic flex-1">No file chosen</span>
                  </div>
                </div>
              </div>

              <button 
                type="button"
                className="w-full bg-[#00B5E2] hover:bg-cyan-600 text-white font-bold py-4 rounded-md uppercase tracking-wider text-[14px] shadow-md transition-all mt-4"
              >
                SAVE DEPENDANT
              </button>

              <div className="flex justify-end pt-2">
                <button 
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-6 py-3 bg-[#64748B] hover:bg-[#475569] text-white font-bold rounded-md text-sm transition-all"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentTabs;