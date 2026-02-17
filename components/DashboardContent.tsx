
import React from 'react';

const DashboardContent: React.FC = () => {
  return (
    <div className="p-8 max-w-[1400px] mx-auto">
      <div className="mb-8">
        <h1 className="text-xl font-bold text-slate-700 uppercase tracking-tight mb-2">Dashboards</h1>
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <span>Home</span>
          <span className="text-slate-300">/</span>
          <span className="font-medium text-slate-400">Dashboards</span>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-8">
          <h2 className="text-slate-700 font-semibold mb-12">Custom Snapshot Reports</h2>
          
          <div className="relative h-[450px] w-full mt-8">
            {/* Grid lines */}
            <div className="absolute inset-0 flex flex-col justify-between">
              {[12, 10, 8, 6, 4, 2, 0].map((val) => (
                <div key={val} className="flex items-center gap-4 w-full">
                  <span className="text-[11px] text-slate-400 w-20 text-right">{val.toLocaleString()},000,000</span>
                  <div className="flex-1 h-[1px] bg-slate-100"></div>
                </div>
              ))}
            </div>

            {/* Bars/Data */}
            <div className="absolute inset-x-0 bottom-0 left-24 flex justify-between px-20 h-full items-end pb-0">
               <div className="flex flex-col items-center flex-1">
                 <div className="h-0 w-[2px] bg-cyan-400"></div>
               </div>
               <div className="flex flex-col items-center flex-1">
                 <div className="h-0 w-[2px] bg-cyan-400"></div>
               </div>
               <div className="flex flex-col items-center flex-1 relative h-full">
                 {/* The specific blue bar at Feb 01 */}
                 <div className="absolute bottom-0 w-1 bg-[#00B5E2] rounded-t-sm" style={{ height: '78%' }}>
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#00B5E2] rounded-full"></div>
                 </div>
               </div>
               <div className="flex flex-col items-center flex-1">
                 <div className="h-0 w-[2px] bg-cyan-400"></div>
               </div>
            </div>
            
            {/* X-Axis Labels */}
            <div className="absolute -bottom-10 left-24 inset-x-0 flex justify-between px-16 text-[12px] text-slate-500 font-medium">
              <span>30 Jan</span>
              <span>31 Jan</span>
              <span className="text-slate-800 font-bold">01 Feb</span>
              <span>02 Feb</span>
            </div>
          </div>

          {/* Legend */}
          <div className="mt-16 flex items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-[#00B5E2]"></div>
              <span className="text-sm text-slate-500 font-medium">Premium Paid</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-[#F59E0B]"></div>
              <span className="text-sm text-slate-500 font-medium">Claims Reported</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-[#10B981]"></div>
              <span className="text-sm text-slate-500 font-medium">New Members</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
