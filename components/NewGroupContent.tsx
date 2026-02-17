
import React, { useState } from 'react';
import { ArrowLeft, ChevronDown, Check } from 'lucide-react';

interface NewGroupContentProps {
  onBack: () => void;
}

const NewGroupContent: React.FC<NewGroupContentProps> = ({ onBack }) => {
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccessModalOpen(true);
  };

  return (
    <div className="p-8 max-w-[1200px] mx-auto animate-in fade-in duration-500 relative">
      {/* Breadcrumbs */}
      <div className="mb-8">
        <h1 className="text-[18px] font-bold text-slate-700 uppercase tracking-tight mb-2">NEW GROUP</h1>
        <div className="flex items-center gap-2 text-[14px] text-slate-400">
          <span>Groups</span>
          <span className="text-slate-300">/</span>
          <span className="font-medium text-slate-500">New Group</span>
        </div>
      </div>

      {/* Back Button */}
      <div className="mb-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 bg-[#00B5E2] hover:bg-cyan-600 text-white px-5 py-2.5 rounded-md transition-all shadow-sm text-sm font-bold"
        >
          <ArrowLeft size={18} strokeWidth={3} />
          Back
        </button>
      </div>

      {/* Main Form Card */}
      <div className="bg-white rounded-lg shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-10">
          <h2 className="text-[18px] font-bold text-slate-800 mb-10">Create New SUN Group</h2>

          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[14px] font-bold text-slate-700">Group Name</label>
                <input 
                  type="text" 
                  placeholder="Enter Group Name" 
                  className="w-full border border-slate-200 rounded-md px-4 py-3 text-slate-600 text-sm focus:ring-1 focus:ring-cyan-500 outline-none transition-all" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[14px] font-bold text-slate-700">Group Number</label>
                <input 
                  type="text" 
                  placeholder="Enter Group Number" 
                  className="w-full border border-slate-200 rounded-md px-4 py-3 text-slate-600 text-sm focus:ring-1 focus:ring-cyan-500 outline-none transition-all" 
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[14px] font-bold text-slate-700">Village</label>
                <input 
                  type="text" 
                  placeholder="Enter Village Name" 
                  className="w-full border border-slate-200 rounded-md px-4 py-3 text-slate-600 text-sm focus:ring-1 focus:ring-cyan-500 outline-none transition-all" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-[14px] font-bold text-slate-700">Description</label>
                <input 
                  type="text" 
                  placeholder="Enter Description" 
                  className="w-full border border-slate-200 rounded-md px-4 py-3 text-slate-600 text-sm focus:ring-1 focus:ring-cyan-500 outline-none transition-all" 
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[14px] font-bold text-slate-700">Select Region</label>
                <div className="relative">
                  <select className="w-full border border-slate-200 rounded-md px-4 py-3 text-slate-400 text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-cyan-500 bg-white">
                    <option>Select Region</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[14px] font-bold text-slate-700">Select County</label>
                <div className="relative">
                  <select className="w-full border border-slate-200 rounded-md px-4 py-3 text-slate-400 text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-cyan-500 bg-white">
                    <option>Select County</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[14px] font-bold text-slate-700">Select SubCounty</label>
                <div className="relative">
                  <select className="w-full border border-slate-200 rounded-md px-4 py-3 text-slate-400 text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-cyan-500 bg-white">
                    <option>Select Sub-County</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[14px] font-bold text-slate-700">Select Ward</label>
                <div className="relative">
                  <select className="w-full border border-slate-200 rounded-md px-4 py-3 text-slate-400 text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-cyan-500 bg-white">
                    <option>Select Ward</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button 
                type="submit" 
                className="w-full bg-[#00B5E2] hover:bg-cyan-600 text-white font-bold py-4 rounded-md uppercase tracking-wider text-[15px] shadow-md transition-all active:scale-[0.99]"
              >
                SUBMIT GROUP
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Success Modal */}
      {isSuccessModalOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/20 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-[550px] overflow-hidden animate-in zoom-in-95 duration-200 p-12 text-center flex flex-col items-center">
            <div className="w-24 h-24 bg-[#E6F9F0] border-[1px] border-[#D1FAE5] rounded-full flex items-center justify-center mb-10">
              <div className="w-16 h-16 border-2 border-[#10B981] rounded-full flex items-center justify-center">
                <Check className="text-[#10B981]" size={32} strokeWidth={4} />
              </div>
            </div>
            <h3 className="text-[22px] font-semibold text-slate-700 mb-10">Group saved successfully</h3>
            <button 
              onClick={() => {
                setIsSuccessModalOpen(false);
                onBack();
              }}
              className="px-8 py-2.5 bg-[#7C6AF7] hover:bg-[#6351E6] text-white rounded-md font-bold text-[14px] transition-all shadow-md min-w-[100px]"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewGroupContent;
