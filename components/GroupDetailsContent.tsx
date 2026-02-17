import React from 'react';
import { ArrowLeft, Eye, FileText, ChevronDown } from 'lucide-react';

interface GroupDetailsContentProps {
  group: any;
  onBack: () => void;
  onViewMember?: (member: any) => void;
}

const GroupDetailsContent: React.FC<GroupDetailsContentProps> = ({ group, onBack, onViewMember }) => {
  const groupInfo = [
    { label: 'Name', value: group?.name || 'Mutuguri gicugu' },
    { label: 'Group Number', value: group?.number || 'Group-202611736138' },
    { label: 'Status', value: group?.status || 'Active' },
    { label: 'Location', value: group?.ward + ', ' + group?.constituency || 'Muminji, Mbeere North' },
  ];

  const stats = [
    { label: 'Members', value: '6', color: 'text-slate-700' },
    { label: 'Active', value: '0', color: 'text-slate-700' },
    { label: 'Pending', value: '6', color: 'text-slate-700' },
    { label: 'Dormant', value: '0', color: 'text-slate-700' },
    { label: 'Default', value: '0', color: 'text-slate-700' },
  ];

  const members = [
    { id: 1, name: 'Lawrence Mutwiri', idNo: '28903655', mobile: '254104378443', gender: 'Male', status: 'Draft', policy: 'Not Matured' },
    { id: 2, name: 'Lydia Karimi', idNo: '25226953', mobile: '254712443167', gender: 'Female', status: 'Pending', policy: 'Not Matured' },
    { id: 3, name: 'Francisca Kavata', idNo: '28790328', mobile: '254719888439', gender: 'Female', status: 'Pending', policy: 'Not Matured' },
    { id: 4, name: 'Nancy Marigu', idNo: '8601609', mobile: '254758623276', gender: 'Female', status: 'Pending', policy: 'Not Matured' },
    { id: 5, name: 'Pamela Karimi', idNo: '27817838', mobile: '254716042601', gender: 'Female', status: 'Pending', policy: 'Not Matured' },
    { id: 6, name: 'Rachael Njura', idNo: '0478975', mobile: '254705069543', gender: 'Female', status: 'Pending', policy: 'Not Matured' },
  ];

  return (
    <div className="p-8 max-w-[1600px] mx-auto animate-in fade-in duration-500">
      {/* Breadcrumbs */}
      <div className="mb-6">
        <div className="flex items-center gap-2 text-[14px] text-slate-400">
          <span>Groups</span>
          <span className="text-slate-300">/</span>
          <span className="font-medium text-slate-500">Group Details</span>
        </div>
      </div>

      {/* Back Button */}
      <button 
        onClick={onBack}
        className="flex items-center gap-2 bg-[#00B5E2] hover:bg-cyan-600 text-white px-5 py-2 rounded-md mb-8 transition-colors shadow-sm text-sm font-bold"
      >
        <ArrowLeft size={18} strokeWidth={3} />
        Back
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Profile and Info */}
        <div className="lg:col-span-4 space-y-8">
          {/* Profile Card */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-slate-100">
            <div className="bg-[#E0F2FE] p-8 pb-10 relative overflow-hidden">
              <div className="relative z-10 space-y-1">
                <h2 className="text-[#00B5E2] font-extrabold text-2xl uppercase tracking-wider">SUN WELFARE</h2>
                <p className="text-[#00B5E2] text-sm font-semibold opacity-80">Group Details</p>
              </div>
              <div className="absolute right-0 bottom-0 h-24 w-40 z-0">
                <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <circle cx="150" cy="40" r="15" fill="#FBBF24" />
                  <circle cx="160" cy="100" r="30" fill="#1E293B" opacity="0.8" />
                  <circle cx="130" cy="110" r="25" fill="#334155" opacity="0.8" />
                  <circle cx="180" cy="110" r="25" fill="#475569" opacity="0.8" />
                </svg>
              </div>
            </div>
            <div className="p-8 pt-10 flex flex-col items-start gap-4">
              <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center border-4 border-white shadow-md -mt-16 relative z-20">
                <div className="p-1.5 bg-white rounded-full">
                  <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 border-2 border-dashed border-white/50 rounded-full"></div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-700">{group?.name || 'Mutuguri gicu...'}</h3>
                <p className="text-sm text-slate-400 font-medium">Members: {group?.memberCount || '7'}</p>
              </div>
            </div>
          </div>

          {/* Group Information Card */}
          <div className="bg-white rounded-lg shadow-sm border border-slate-100 p-8 space-y-8">
            <div>
               <h4 className="text-[17px] font-bold text-slate-700 mb-2">Group Information</h4>
               <p className="text-[13px] text-slate-400 font-medium">Group Details</p>
            </div>
            
            <div className="space-y-6">
              {groupInfo.map((item, idx) => (
                <div key={idx} className="flex items-start border-b border-slate-50 pb-4 last:border-0 last:pb-0">
                  <span className="text-[14px] font-bold text-slate-800 min-w-[140px]">{item.label} :</span>
                  <span className="text-[14px] text-slate-500 font-medium">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Stats and Table */}
        <div className="lg:col-span-8 space-y-6">
          {/* Stats Row 1 */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white p-6 rounded-lg border border-slate-100 shadow-sm flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-[13px] font-bold mb-3">{stat.label}</p>
                  <h3 className="text-2xl font-bold text-slate-700">{stat.value}</h3>
                </div>
                <div className="w-10 h-10 bg-[#00B5E2] rounded-lg flex items-center justify-center text-white shadow-sm">
                  <FileText size={20} />
                </div>
              </div>
            ))}
          </div>

          {/* Payments Card */}
          <div className="bg-white p-6 rounded-lg border border-slate-100 shadow-sm flex items-center justify-between h-32">
            <div>
              <p className="text-slate-400 text-[13px] font-bold mb-3">Payments</p>
              <h3 className="text-2xl font-bold text-slate-700">0</h3>
            </div>
            <div className="w-10 h-10 bg-[#00B5E2] rounded-lg flex items-center justify-center text-white shadow-sm">
              <FileText size={20} />
            </div>
          </div>

          {/* Group Members Table */}
          <div className="bg-white rounded-lg shadow-sm border border-slate-100 overflow-hidden">
            <div className="p-8 border-b border-slate-50">
              <h4 className="text-[17px] font-bold text-slate-700">Group Members</h4>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left whitespace-nowrap">
                <thead className="bg-white">
                  <tr className="text-[12px] font-bold text-slate-600 border-b border-slate-100">
                    <th className="py-6 px-6">#</th>
                    <th className="py-6 px-6">Full Names</th>
                    <th className="py-6 px-6">Identification Number</th>
                    <th className="py-6 px-6">Mobile No</th>
                    <th className="py-6 px-6">Gender</th>
                    <th className="py-6 px-6">Status</th>
                    <th className="py-6 px-6">Policy Status</th>
                    <th className="py-6 px-6 text-center">ACTIONS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {members.map((member) => (
                    <tr key={member.id} className="text-[13px] text-slate-600 hover:bg-slate-50 transition-colors">
                      <td className="py-6 px-6">
                        <input type="checkbox" className="w-4 h-4 rounded border-slate-300" />
                      </td>
                      <td className="py-6 px-6 font-bold text-slate-800">{member.name}</td>
                      <td className="py-6 px-6 font-medium text-slate-500">{member.idNo}</td>
                      <td className="py-6 px-6 font-bold text-red-300/80">{member.mobile}</td>
                      <td className="py-6 px-6 font-medium">{member.gender}</td>
                      <td className="py-6 px-6 font-medium">{member.status}</td>
                      <td className="py-6 px-6 font-medium">{member.policy}</td>
                      <td className="py-6 px-6 text-center">
                        <button 
                          onClick={() => onViewMember && onViewMember(member)}
                          className="text-[#00B5E2] hover:text-cyan-600 transition-colors"
                        >
                          <Eye size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupDetailsContent;