
import React from 'react';
import { Check, X, ArrowLeft } from 'lucide-react';

interface DependantAppDetailsProps {
  application: any;
  onBack: () => void;
}

const DependantAppDetails: React.FC<DependantAppDetailsProps> = ({ application, onBack }) => {
  if (!application) {
    return (
      <div className="p-8 max-w-[1000px] mx-auto">
        <div className="mb-6">
          <div className="flex items-center gap-2 text-[14px] text-slate-500">
            <span>Application</span>
            <span className="text-slate-300">/</span>
            <span className="text-slate-600 font-medium">Application Details</span>
          </div>
        </div>
        <button 
          onClick={onBack}
          className="flex items-center gap-2 bg-[#00B5E2] hover:bg-cyan-600 text-white px-5 py-2 rounded-md mb-8 transition-colors shadow-sm text-sm font-bold"
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
    <div className="p-8 max-w-[1000px] mx-auto">
      {/* Breadcrumbs */}
      <div className="mb-6">
        <div className="flex items-center gap-2 text-[14px] text-slate-500">
          <span>Application</span>
          <span className="text-slate-300">/</span>
          <span className="text-slate-600 font-medium">Application Details</span>
        </div>
      </div>
      <button 
        onClick={onBack}
        className="flex items-center gap-2 bg-[#00B5E2] hover:bg-cyan-600 text-white px-5 py-2 rounded-md mb-8 transition-colors shadow-sm text-sm font-bold"
      >
        <ArrowLeft size={18} />
        Back
      </button>
      {/* Main Card */}
      <div className="bg-white rounded-lg shadow-sm border border-slate-100 overflow-hidden min-h-[600px]">
        <div className="p-10">
          <h2 className="text-[17px] font-bold text-slate-800 mb-10">Dependent Application Details</h2>
          {/* Action Buttons - Hidden if Approved */}
          {!isApproved && (
            <div className="flex justify-end gap-3 mb-12">
              <button className="flex items-center gap-2 bg-[#00B5E2] hover:bg-cyan-600 text-white px-6 py-2.5 rounded-md text-sm font-bold transition-all shadow-sm">
                <Check size={18} />
                Approve
              </button>
              <button className="flex items-center gap-2 bg-[#00B5E2] hover:bg-cyan-600 text-white px-6 py-2.5 rounded-md text-sm font-bold transition-all shadow-sm">
                <X size={18} />
                Reject
              </button>
            </div>
          )}
          {/* Branding & Status Header */}
          <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <span className="text-[#00B5E2] font-black text-[38px] tracking-tighter">SHOFCO</span>
                <div className="w-8 h-8 rounded-full border-4 border-[#F59E0B] flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-[#F59E0B] rounded-full"></div>
                </div>
              </div>
              <span className={`text-[38px] font-medium ml-4 ${isApproved ? 'text-[#00B5E2]' : 'text-[#FBBF24]'}`}>
                {data.status}
              </span>
            </div>
            <div className="text-right">
              <p className="text-[14px] font-bold text-slate-700 mb-1">Application Date</p>
              <p className="text-[14px] text-slate-500 font-medium">{data.date}</p>
            </div>
          </div>
          {/* Details Sections */}
          <div className="space-y-16">
            {/* Application Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6">
              <div className="flex items-center">
                <span className="text-[15px] font-bold text-slate-700 min-w-[200px]">Application Number:</span>
                <span className="text-[15px] text-slate-500 font-medium">{data.appNo}</span>
              </div>
              <div className="flex items-center">
                <span className="text-[15px] font-bold text-slate-700 min-w-[200px]">Status:</span>
                <span className="text-[15px] text-slate-500 font-medium">{data.status}</span>
              </div>
              <div className="flex items-center">
                <span className="text-[15px] font-bold text-slate-700 min-w-[200px]">Application Date:</span>
                <span className="text-[15px] text-slate-500 font-medium">{data.date}</span>
              </div>
            </div>
            {/* Dependant Information Section */}
            <div>
              <h3 className="text-[15px] font-bold text-slate-400 mb-6">Dependent Information</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <span className="text-[15px] font-bold text-slate-700 min-w-[200px]">Name:</span>
                  <span className="text-[15px] text-slate-500 font-medium">{data.fullName}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-[15px] font-bold text-slate-700 min-w-[200px]">Relationship:</span>
                  <span className="text-[15px] text-slate-500 font-medium">{data.relationship}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-[15px] font-bold text-slate-700 min-w-[200px]">DOB :</span>
                  <span className="text-[15px] text-slate-500 font-medium">{data.dob}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-[15px] font-bold text-slate-700 min-w-[200px]">Gender:</span>
                  <span className="text-[15px] text-slate-500 font-medium">{data.gender}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-[15px] font-bold text-slate-700 min-w-[200px]">Birth Cert No:</span>
                  <span className="text-[15px] text-slate-500 font-medium">{data.birthCertNo || ''}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DependantAppDetails;
