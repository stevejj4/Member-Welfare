import React from 'react';
import { ArrowLeft, Check, X } from 'lucide-react';

interface PrincipalAppDetailsProps {
  application: any;
  onBack: () => void;
  onApprove?: () => void;
}

const PrincipalAppDetails: React.FC<PrincipalAppDetailsProps> = ({ application, onBack, onApprove }) => {
  if (!application) {
    return (
      <div className="p-8 max-w-[1200px] mx-auto animate-in fade-in duration-500">
        <div className="mb-6">
          <h1 className="text-[18px] font-bold text-slate-700 uppercase tracking-tight mb-2">APPLICATION DETAILS</h1>
          <div className="flex items-center gap-2 text-[14px] text-slate-400">
            <span>Application</span>
            <span className="text-slate-300">/</span>
            <span className="font-medium text-slate-500">Application Details</span>
          </div>
        </div>
        <button 
          onClick={onBack}
          className="flex items-center gap-2 bg-[#00B5E2] hover:bg-cyan-600 text-white px-5 py-2.5 rounded-md mb-8 transition-colors shadow-sm text-sm font-bold"
        >
          <ArrowLeft size={18} />
          Back
        </button>
        <div className="bg-white rounded-lg shadow-sm border border-slate-100 overflow-hidden min-h-[200px] flex items-center justify-center">
          <span className="text-slate-500 text-lg">No data available</span>
        </div>
      </div>
    );
  }

  const data = application;
  const isApproved = data.status === 'Approved';

  return (
    <div className="p-8 max-w-[1200px] mx-auto animate-in fade-in duration-500">
      {/* Header / Breadcrumbs */}
      <div className="mb-6">
        <h1 className="text-[18px] font-bold text-slate-700 uppercase tracking-tight mb-2">APPLICATION DETAILS</h1>
        <div className="flex items-center gap-2 text-[14px] text-slate-400">
          <span>Application</span>
          <span className="text-slate-300">/</span>
          <span className="font-medium text-slate-500">Application Details</span>
        </div>
      </div>
      <button 
        onClick={onBack}
        className="flex items-center gap-2 bg-[#00B5E2] hover:bg-cyan-600 text-white px-5 py-2.5 rounded-md mb-8 transition-colors shadow-sm text-sm font-bold"
      >
        <ArrowLeft size={18} />
        Back
      </button>
      {/* Main Card */}
      <div className="bg-white rounded-lg shadow-sm border border-slate-100 overflow-hidden min-h-[700px]">
        <div className="p-12">
          <h2 className="text-[18px] font-bold text-slate-800 mb-10">Application Details</h2>
          {/* Action Buttons - Only show if status is NOT Approved */}
          {!isApproved && (
            <div className="flex justify-end gap-3 mb-12">
              <button 
                onClick={onApprove}
                className="flex items-center gap-2 bg-[#00B5E2] hover:bg-cyan-500 text-white px-7 py-3 rounded-md text-sm font-bold transition-all shadow-sm"
              >
                <Check size={18} strokeWidth={3} />
                Approve
              </button>
              <button className="flex items-center gap-2 bg-[#00B5E2] hover:bg-cyan-500 text-white px-7 py-3 rounded-md text-sm font-bold transition-all shadow-sm">
                <X size={18} strokeWidth={3} />
                Reject
              </button>
            </div>
          )}
          {/* Branding & Status Header */}
          <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-8">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-1.5">
                <span className="text-[#00B5E2] font-black text-[42px] tracking-tighter">SHOFCO</span>
                <div className="relative w-10 h-10 flex items-center justify-center">
                  <div className={`absolute inset-0 border-[3px] ${isApproved ? 'border-[#00B5E2]' : 'border-[#F59E0B]'} rounded-full`}></div>
                  <div className={`w-1.5 h-1.5 ${isApproved ? 'bg-[#00B5E2]' : 'bg-[#F59E0B]'} rounded-full`}></div>
                  <div className="absolute -top-1 -right-1">
                    <div className="flex gap-0.5">
                      <div className={`w-1 h-1 ${isApproved ? 'bg-[#00B5E2]' : 'bg-[#F59E0B]'} rounded-full`}></div>
                      <div className={`w-1 h-1 ${isApproved ? 'bg-[#00B5E2]' : 'bg-[#F59E0B]'} rounded-full`}></div>
                    </div>
                  </div>
                </div>
              </div>
              <span className={`text-[42px] font-medium ml-8 ${isApproved ? 'text-[#00B5E2]' : 'text-[#F59E0B]'}`}>
                {data.status}
              </span>
            </div>
            <div className="text-right">
              <p className="text-[15px] font-bold text-slate-700 mb-1.5">Application Date</p>
              <p className="text-[15px] text-slate-500 font-medium">{data.date}</p>
            </div>
          </div>
          {/* Details Sections */}
          <div className="space-y-20">
            {/* Top Row Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10">
              <div className="space-y-1">
                <p className="text-[15px] font-bold text-slate-800">Application Number:</p>
                <p className="text-[15px] text-slate-500 font-medium">{data.appNo}</p>
              </div>
              <div className="space-y-1">
                <p className="text-[15px] font-bold text-slate-800">Status:</p>
                <p className="text-[15px] text-slate-500 font-medium">{data.status}</p>
              </div>
              <div className="space-y-1">
                <p className="text-[15px] font-bold text-slate-800">Application Date:</p>
                <p className="text-[15px] text-slate-500 font-medium truncate max-w-xs">{data.appDateRaw}</p>
              </div>
            </div>
            {/* Member Information Section */}
            <div className="border-t border-slate-50 pt-16">
              <h3 className="text-[15px] font-bold text-slate-400 mb-10 tracking-wide uppercase">Member Information</h3>
              <div className="space-y-8">
                <div className="flex flex-col md:flex-row md:items-center">
                  <span className="text-[15px] font-bold text-slate-800 min-w-[280px]">Group Name:</span>
                  <span className="text-[15px] text-slate-500 font-medium">{data.groupName}</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-center">
                  <span className="text-[15px] font-bold text-slate-800 min-w-[280px]">Identification Number:</span>
                  <span className="text-[15px] text-slate-500 font-medium">{data.idNo}</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-center">
                  <span className="text-[15px] font-bold text-slate-800 min-w-[280px]">Name:</span>
                  <span className="text-[15px] text-slate-500 font-medium">{data.fullName}</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-center">
                  <span className="text-[15px] font-bold text-slate-800 min-w-[280px]">Mobile Numbers:</span>
                  <span className="text-[15px] text-slate-500 font-medium">{data.mobile}</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-center">
                  <span className="text-[15px] font-bold text-slate-800 min-w-[280px]">Email:</span>
                  <span className="text-[15px] text-slate-500 font-medium">{data.email}</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-center">
                  <span className="text-[15px] font-bold text-slate-800 min-w-[280px]">Location:</span>
                  <span className="text-[15px] text-slate-500 font-medium">{data.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrincipalAppDetails;