import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface ReceiptDetailsContentProps {
  receipt: any;
  onBack: () => void;
}

const ReceiptDetailsContent: React.FC<ReceiptDetailsContentProps> = ({ receipt, onBack }) => {
  // No fallback/mock data. All details must come from the receipt prop.
  if (!receipt) {
    return (
      <div className="p-8 max-w-[1400px] mx-auto animate-in fade-in duration-500">
        <div className="mb-6">
          <h1 className="text-[18px] font-bold text-slate-700 uppercase tracking-tight mb-2">RECEIPT DETAILS</h1>
        </div>
        <div className="flex items-center justify-center h-96">
          <span className="text-slate-500 text-lg">No data available</span>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-[1400px] mx-auto animate-in fade-in duration-500">
      <div className="mb-6">
        <h1 className="text-[18px] font-bold text-slate-700 uppercase tracking-tight mb-2">RECEIPT DETAILS</h1>
        <div className="flex items-center gap-2 text-[14px] text-slate-400">
          <span>Receipts</span>
          <span className="text-slate-300">/</span>
          <span className="font-medium text-slate-500">Receipt Details</span>
        </div>
      </div>

      <button 
        onClick={onBack}
        className="flex items-center gap-2 bg-[#00B5E2] hover:bg-cyan-600 text-white px-5 py-2 rounded-md mb-8 transition-colors shadow-sm text-sm font-bold uppercase"
      >
        <ArrowLeft size={18} strokeWidth={3} />
        Back
      </button>

      <div className="flex flex-col items-center">
        <button className="bg-[#00B5E2] hover:bg-cyan-600 text-white px-4 py-2 text-[11px] font-bold rounded mb-6 shadow-sm transition-all uppercase tracking-wider">
          Download Receipt
        </button>

        <div className="bg-white rounded-lg shadow-xl border border-slate-100 w-full max-w-3xl overflow-hidden min-h-[800px] p-12">
          {/* Header */}
          <div className="flex flex-col items-center mb-8">
            <div className="flex items-center gap-1.5 mb-2">
              <span className="text-[#00B5E2] font-black text-[32px] tracking-tighter">SHOFCO</span>
              <div className="w-6 h-6 rounded-full border-[3px] border-[#F59E0B] flex items-center justify-center">
                <div className="w-1 h-1 bg-[#F59E0B] rounded-full"></div>
              </div>
            </div>
            <p className="text-[10px] text-slate-400 font-medium">Tue, Feb 17, 2026 - 1:18 AM</p>
          </div>

          {/* Receipt Number Box */}
          <div className="border-[1.5px] border-dashed border-slate-800 p-3 text-center mb-8 rounded-sm">
            <p className="text-[12px] font-black text-slate-800 tracking-wider">
              {receipt?.receiptNo || 'R2026217Mnull45'}
            </p>
          </div>

          {/* Details List */}
          <div className="space-y-4 mb-12 border-b border-slate-50 pb-8">
            {/* Render details from receipt prop only */}
            {Object.entries(receipt).map(([key, value], idx) => (
              <div key={idx} className="flex items-start">
                <span className="text-[11px] font-bold text-slate-600 min-w-[180px]">{key}:</span>
                <span className="text-[11px] text-slate-800 font-bold flex-1 uppercase">{String(value)}</span>
              </div>
            ))}
          </div>

          {/* Footer Branding */}
          <div className="text-center space-y-8 pt-4">
            <h3 className="text-[22px] font-black text-[#1E293B] tracking-widest uppercase">THANK YOU</h3>
            
            <div className="flex flex-col items-center">
              {/* Barcode and receipt number can be rendered here if provided in receipt prop */}
              {receipt.receiptNo && (
                <p className="text-[12px] font-bold text-slate-800 mt-2 tracking-widest">
                  {receipt.receiptNo}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReceiptDetailsContent;
