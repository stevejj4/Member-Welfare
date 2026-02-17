import React from 'react';

const UserProfileContent: React.FC = () => {
  return (
    <div className="p-8 max-w-[1600px] mx-auto animate-in fade-in duration-500">
      {/* Header & Breadcrumbs */}
      <div className="mb-8">
        <h1 className="text-[18px] font-bold text-slate-700 uppercase tracking-tight mb-2">PROFILE</h1>
        <div className="flex items-center gap-2 text-[14px] text-slate-400">
          <span>User</span>
          <span className="text-slate-300">/</span>
          <span className="font-medium text-slate-500">Profile</span>
        </div>
      </div>

      {/* Profile Card */}
      <div className="bg-white rounded-lg shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-12 pb-20">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            {/* Avatar Section */}
            <div className="shrink-0">
              <div className="w-24 h-24 bg-white border border-slate-100 rounded-full shadow-sm flex items-center justify-center p-2 group hover:shadow-md transition-all">
                <div className="w-full h-full bg-slate-50 rounded-full flex items-center justify-center relative overflow-hidden">
                  {/* SHOFCO Sun Logo Placeholder */}
                  <svg viewBox="0 0 100 100" className="w-16 h-16 fill-slate-800">
                    <circle cx="50" cy="50" r="25" />
                    <path d="M50 5 L50 20 M50 80 L50 95 M5 50 L20 50 M80 50 L95 50 M18 18 L29 29 M71 71 L82 82 M18 82 L29 71 M71 29 L82 18" stroke="currentColor" strokeWidth="4" />
                    <path d="M30 10 L35 22 M65 10 L60 22 M90 30 L78 35 M90 65 L78 60 M70 90 L65 78 M30 90 L35 78 M10 70 L22 65 M10 30 L22 35" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Information Grid */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-12 pt-4">
              {/* Left Side: Personal Info */}
              <div className="space-y-6">
                <h3 className="text-[22px] font-bold text-slate-700 mb-6">Stephen Juma</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="text-[12px] font-bold text-slate-400 uppercase tracking-wider">EMAIL:</span>
                    <span className="text-[14px] font-bold text-slate-600">sjuma1@shininghopeforcommunities.org</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-[12px] font-bold text-slate-400 uppercase tracking-wider">ROLE:</span>
                    <span className="text-[14px] font-bold text-slate-600">Data</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-[12px] font-bold text-slate-400 uppercase tracking-wider">MOBILE:</span>
                    <span className="text-[14px] font-bold text-slate-600">0793658882</span>
                  </div>
                </div>

                <div className="pt-8">
                  <button className="bg-[#00B5E2] hover:bg-cyan-600 text-white px-6 py-3 rounded-md text-[14px] font-bold transition-all shadow-sm active:scale-95">
                    Change Password
                  </button>
                </div>
              </div>

              {/* Right Side: Address Info */}
              <div className="space-y-8">
                <h4 className="text-[18px] font-bold text-slate-700">Address</h4>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-2">
                    <span className="text-[14px] text-slate-400">County:</span>
                    <span className="text-[14px] font-bold text-slate-600">Nairobi City</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-[14px] text-slate-400">Constituency:</span>
                    <span className="text-[14px] font-bold text-slate-600">Kibra</span>
                  </div>
                  
                  <div className="flex flex-col gap-1">
                    <span className="text-[14px] text-slate-400">WARDS:</span>
                    <span className="text-[14px] font-bold text-slate-600">Sarang'ombe</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileContent;