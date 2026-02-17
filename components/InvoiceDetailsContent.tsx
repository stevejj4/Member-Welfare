import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface InvoiceDetailsContentProps {
  invoice: any;
  onBack: () => void;
}

const InvoiceDetailsContent: React.FC<InvoiceDetailsContentProps> = ({ invoice, onBack }) => {
  return (
    <div className="p-8 max-w-[1200px] mx-auto animate-in fade-in duration-500">
      <div className="mb-6">
        <h1 className="text-[18px] font-bold text-slate-700 uppercase tracking-tight mb-2">DETAILS</h1>
        <div className="flex items-center gap-2 text-[14px] text-slate-400">
          <span>Invoice</span>
          <span className="text-slate-300">/</span>
          <span className="font-medium text-slate-500">Details</span>
        </div>
      </div>

      <button 
        onClick={onBack}
        className="flex items-center gap-2 bg-[#00B5E2] hover:bg-cyan-600 text-white px-5 py-2 rounded-md mb-8 transition-colors shadow-sm text-sm font-bold uppercase"
      >
        <ArrowLeft size={18} strokeWidth={3} />
        Back
      </button>

      <div className="bg-white rounded-lg shadow-sm border border-slate-100 overflow-hidden max-w-4xl mx-auto min-h-[700px]">
        <div className="p-12">
          <h2 className="text-[17px] font-bold text-slate-800 mb-10">Invoice</h2>

          <div className="flex items-center gap-2.5 mb-12">
            <span className="text-[#00B5E2] font-black text-[38px] tracking-tighter">SHOFCO</span>
            <div className="w-8 h-8 rounded-full border-4 border-[#F59E0B] flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-[#F59E0B] rounded-full"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <div>
                <p className="text-[14px] font-bold text-slate-800 mb-1 uppercase tracking-tight">Invoice To:</p>
                <p className="text-[14px] text-slate-500 font-medium">{invoice?.member || 'undefined undefined'}</p>
              </div>
              <div>
                <p className="text-[14px] font-bold text-slate-800 mb-1 uppercase tracking-tight">Invoice No:</p>
                <p className="text-[14px] text-slate-500 font-medium">{invoice?.invNo || '-'}</p>
              </div>
              <div>
                <p className="text-[14px] font-bold text-slate-800 mb-1 uppercase tracking-tight">Policy No:</p>
                <p className="text-[14px] text-slate-500 font-medium">{invoice?.policy || '-'}</p>
              </div>
              <div>
                <p className="text-[14px] font-bold text-slate-800 mb-1 uppercase tracking-tight">Phone:</p>
                <p className="text-[14px] text-slate-500 font-medium">-</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-[14px] font-bold text-slate-800 mb-1 uppercase tracking-tight">Invoice From:</p>
                <p className="text-[14px] text-slate-500 font-medium">SUN WELFARE</p>
              </div>
              <p className="text-[14px] text-slate-500 font-medium">Kibera</p>
              <p className="text-[14px] text-slate-500 font-medium">Gatwekera Village</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 border-t border-slate-50 pt-10">
            <div>
              <p className="text-[14px] font-bold text-slate-800 mb-1 uppercase tracking-tight">Due Date:</p>
              <p className="text-[14px] text-slate-500 font-medium">2026 Feb 17 4:10 PM</p>
            </div>
            <div>
              <p className="text-[14px] font-bold text-slate-800 mb-1 uppercase tracking-tight">Payment Method:</p>
              <p className="text-[14px] text-slate-500 font-medium">MPESA</p>
            </div>
          </div>

          <div className="mb-10">
            <h3 className="text-[14px] font-bold text-slate-800 mb-6 uppercase tracking-tight">Invoiced Items:</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="border-b border-slate-100">
                  <tr className="text-[13px] font-bold text-slate-700">
                    <th className="py-4 px-4">Item</th>
                    <th className="py-4 px-4">Cost Per Unit</th>
                    <th className="py-4 px-4 text-right">Total Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-[13px] text-slate-500">
                    <td className="py-8 px-4" colSpan={3}></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex flex-col items-end gap-2 border-t border-slate-50 pt-8">
            <div className="flex items-center gap-12">
              <span className="text-[14px] font-bold text-slate-800">Subtotal:</span>
              <span className="text-[14px] text-slate-500 font-medium">Ksh0.00</span>
            </div>
            <div className="flex items-center gap-12">
              <span className="text-[14px] font-bold text-slate-800">Total Amount:</span>
              <span className="text-[14px] text-slate-500 font-medium">KshNaN</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceDetailsContent;
