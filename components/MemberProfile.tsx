
import React from 'react';
import { Pencil } from 'lucide-react';
import { Member } from '../types';

interface MemberProfileProps {
  member: Member;
}

const MemberProfile: React.FC<MemberProfileProps> = ({ member }) => {
  const fields = [
    { label: 'Full Name', value: member.fullName, editable: true },
    { label: 'SHOFCO ID', value: member.shofcoId },
    { label: 'ID Number', value: member.idNumber, editable: true },
    { label: 'Mobile', value: member.mobile, editable: true },
    { label: 'E-mail', value: member.email, editable: true },
    { label: 'Status', value: member.status, isStatus: false },
    { label: 'Group Name', value: member.groupName },
    { label: 'Location', value: member.location },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-slate-100 h-full">
      {/* Banner */}
      <div className="bg-[#E0F2FE] p-8 pb-10 relative overflow-hidden">
        <div className="relative z-10 space-y-1">
          <h2 className="text-[#00B5E2] font-extrabold text-2xl uppercase tracking-wider">SUN WELFARE</h2>
          <p className="text-[#00B5E2] text-sm font-semibold opacity-80">Member Details</p>
        </div>
        
        {/* Specific illustration from screenshot */}
        <div className="absolute right-0 bottom-0 h-24 w-40 z-0">
           <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <circle cx="150" cy="40" r="15" fill="#FBBF24" /> {/* Sun */}
              {/* Group of people silhouettes */}
              <circle cx="160" cy="100" r="30" fill="#1E293B" opacity="0.8" />
              <circle cx="130" cy="110" r="25" fill="#334155" opacity="0.8" />
              <circle cx="180" cy="110" r="25" fill="#475569" opacity="0.8" />
              <circle cx="110" cy="120" r="20" fill="#64748B" opacity="0.8" />
           </svg>
        </div>
      </div>

      {/* Info List */}
      <div className="p-8 pt-10 space-y-6">
        {fields.map((field, idx) => (
          <div key={idx} className="flex items-center justify-between border-b border-slate-100 pb-4 last:border-0 last:pb-0">
            <div className="flex flex-col flex-1">
              <div className="flex items-baseline gap-4">
                <span className="text-[14px] font-bold text-slate-800 uppercase tracking-tight whitespace-nowrap min-w-[120px]">{field.label} :</span>
                <span className="text-[14px] text-slate-500 font-medium truncate">
                  {field.value || ' '}
                </span>
              </div>
            </div>
            {field.editable && (
              <button className="text-emerald-500 hover:text-emerald-600 p-1 transition-all">
                <Pencil size={18} />
              </button>
            )}
          </div>
        ))}

        <div className="pt-6">
          <button className="w-full bg-[#00B5E2] hover:bg-cyan-600 text-white font-bold py-4 rounded-md transition-all shadow-md uppercase tracking-widest text-[15px]">
            SAVE
          </button>
        </div>
      </div>
    </div>
  );
};

export default MemberProfile;
