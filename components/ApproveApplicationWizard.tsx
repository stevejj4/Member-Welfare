import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, ChevronDown, Calendar, Search, ChevronUp, X, Check, Eye, Trash2, Plus, ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight } from 'lucide-react';

interface ApproveApplicationWizardProps {
  application: any;
  onBack: () => void;
  isEdit?: boolean;
}

const ApproveApplicationWizard: React.FC<ApproveApplicationWizardProps> = ({ application, onBack, isEdit = false }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  
  // Step 1 State
  const [membership, setMembership] = useState('');
  const [joiningType, setJoiningType] = useState('');
  const [idType, setIdType] = useState('');
  const [sex, setSex] = useState('');

  // Step 2 State (Next of Kin)
  const [nokGender, setNokGender] = useState('');
  const [nokIdType, setNokIdType] = useState('');
  const [nokRelationship, setNokRelationship] = useState('');

  // Step 3 State (Dependants)
  const [depSex, setDepSex] = useState('');
  const [depRelationship, setDepRelationship] = useState('');
  const [dependants, setDependants] = useState<any[]>([
    // Example row if needed or keep empty
  ]);

  // Date Picker State
  const [activeDatePicker, setActiveDatePicker] = useState<string | null>(null); // 'member', 'nok', 'dep'
  const [memberDob, setMemberDob] = useState<Date | null>(null);
  const [nokDob, setNokDob] = useState<Date | null>(null);
  const [depDob, setDepDob] = useState<Date | null>(null);
  const [viewDate, setViewDate] = useState(new Date(2008, 0, 19));
  const datePickerRef = useRef<HTMLDivElement>(null);

  const steps = [
    { id: 1, label: 'Member Details' },
    { id: 2, label: 'Next Of Kin Details' },
    { id: 3, label: 'Dependant Details' },
    { id: 4, label: 'Confirm' },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (datePickerRef.current && !datePickerRef.current.contains(event.target as Node)) {
        setActiveDatePicker(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const formatDate = (date: Date | null) => {
    if (!date) return '';
    const d = date.getDate().toString().padStart(2, '0');
    const m = (date.getMonth() + 1).toString().padStart(2, '0');
    const y = date.getFullYear();
    return `${d}/${m}/${y}`;
  };

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const renderCalendar = (target: string) => {
    const month = viewDate.getMonth();
    const year = viewDate.getFullYear();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();
    const prevMonthDays = new Date(year, month, 0).getDate();
    
    const days = [];
    for (let i = firstDay - 1; i >= 0; i--) {
      days.push(<div key={`prev-${i}`} className="p-2 text-center text-slate-300 text-sm">{prevMonthDays - i}</div>);
    }
    
    for (let i = 1; i <= daysInMonth; i++) {
      let targetDate = target === 'member' ? memberDob : target === 'nok' ? nokDob : depDob;
      const isSelected = targetDate?.getDate() === i && targetDate?.getMonth() === month && targetDate?.getFullYear() === year;
      
      days.push(
        <button
          key={i}
          onClick={() => {
            const newDate = new Date(year, month, i);
            if (target === 'member') setMemberDob(newDate);
            else if (target === 'nok') setNokDob(newDate);
            else if (target === 'dep') setDepDob(newDate);
            setActiveDatePicker(null);
          }}
          className={`p-2 text-center text-sm rounded-md transition-colors ${
            isSelected ? 'bg-[#00B5E2] text-white font-bold' : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          {i}
        </button>
      );
    }
    return days;
  };

  const handleAddDependant = () => {
    // Basic logic to add to list
    const newDep = {
      id: dependants.length + 1,
      fullName: 'New Dependant',
      relationship: depRelationship || 'Child',
      gender: depSex || 'Female',
      age: '0',
      birthCertNo: '0',
      status: 'New',
      phone: '-'
    };
    setDependants([...dependants, newDep]);
  };

  const DatePickerPopover = ({ target }: { target: string }) => (
    <div className="absolute left-0 top-full mt-2 w-72 bg-white border border-slate-200 rounded-lg shadow-xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
      <div className="p-4 bg-white">
        <div className="flex items-center justify-between mb-4 px-1">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-800 text-[15px]">{months[viewDate.getMonth()]} {viewDate.getFullYear()}</span>
            <ChevronDown size={14} className="text-slate-400" />
          </div>
          <div className="flex gap-2">
            <button onClick={() => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1))} className="p-1 hover:bg-slate-100 rounded">
              <ChevronUp size={16} className="text-slate-400 -rotate-90" />
            </button>
            <button onClick={() => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1))} className="p-1 hover:bg-slate-100 rounded">
              <ChevronUp size={16} className="text-slate-400 rotate-90" />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-7 mb-2 text-center text-[11px] font-bold text-slate-400">
          {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => <div key={day}>{day}</div>)}
        </div>
        <div className="grid grid-cols-7 gap-1">{renderCalendar(target)}</div>
        <div className="mt-4 pt-4 border-t border-slate-50 flex items-center justify-between">
          <button onClick={() => { if (target === 'member') setMemberDob(null); else if (target === 'nok') setNokDob(null); else setDepDob(null); setActiveDatePicker(null); }} className="text-[#00B5E2] text-[13px] font-bold">Clear</button>
          <button onClick={() => { const today = new Date(); if (target === 'member') setMemberDob(today); else if (target === 'nok') setNokDob(today); else setDepDob(today); setActiveDatePicker(null); }} className="text-slate-400 text-[13px] font-medium hover:text-[#00B5E2]">Today</button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-8 max-w-[1600px] mx-auto animate-in fade-in duration-500">
      <div className="mb-6">
        <h1 className="text-[18px] font-bold text-slate-700 uppercase tracking-tight mb-2">
          {isEdit ? 'EDIT MEMBER' : application ? 'APPROVE APPLICATION' : 'NEW MEMBER'}
        </h1>
        <div className="flex items-center gap-2 text-[14px] text-slate-400">
          <span>Application</span>
          <span className="text-slate-300">/</span>
          <span className="font-medium text-slate-500">{isEdit ? 'Edit Member' : application ? 'Approve Application' : 'New Member'}</span>
        </div>
      </div>

      <div className="mb-8">
        <button onClick={onBack} className="flex items-center gap-2 bg-[#00B5E2] hover:bg-cyan-600 text-white px-5 py-2.5 rounded-md transition-colors shadow-sm text-sm font-bold uppercase">
          <ArrowLeft size={18} strokeWidth={3} />
          Back
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-10">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-[18px] font-bold text-slate-800">
              {isEdit ? 'Edit Member Details' : application ? 'Approve Member Application' : 'Add New Member'}
            </h2>
            {currentStep < 4 && (
              <button onClick={onBack} className="flex items-center gap-2 bg-[#00B5E2] hover:bg-cyan-600 text-white px-5 py-2 rounded-md text-sm font-bold">
                <ArrowLeft size={16} strokeWidth={3} />
                Back
              </button>
            )}
          </div>

          <div className="flex bg-[#E0F2FE]/30 rounded-lg mb-12 overflow-hidden border border-[#E0F2FE]">
            {steps.map((step) => (
              <div key={step.id} className={`flex-1 flex items-center gap-4 py-6 px-8 transition-all ${currentStep === step.id ? 'bg-[#E0F2FE] text-slate-700' : 'text-slate-400'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg border-2 ${currentStep === step.id ? 'bg-[#00B5E2] text-white border-[#00B5E2]' : 'border-cyan-400/30 text-cyan-500'}`}>
                  {step.id}
                </div>
                <span className="font-semibold text-[15px] whitespace-nowrap">{step.label}</span>
              </div>
            ))}
          </div>

          {/* Step 1: Principal Member Details */}
          {currentStep === 1 && (
            <div className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {['Region', 'County', 'Constituency', 'Ward'].map(f => (
                  <div key={f} className="space-y-2">
                    <label className="text-[14px] font-bold text-slate-700">Select {f}</label>
                    <div className="relative">
                      <select className="w-full bg-white border border-slate-200 rounded-md px-4 py-3 text-slate-400 text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-cyan-500">
                        <option value="">Select {f}...</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[14px] font-bold text-slate-700">Membership</label>
                  <div className="relative">
                    <select value={membership} onChange={(e) => setMembership(e.target.value)} className="w-full bg-white border border-slate-200 rounded-md px-4 py-3 text-slate-400 text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-cyan-500">
                      <option value="">Select Membership...</option>
                      <option value="New">New</option>
                      <option value="Old member">Old member</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[14px] font-bold text-slate-700">Joining Type</label>
                  <div className="relative">
                    <select value={joiningType} onChange={(e) => setJoiningType(e.target.value)} className="w-full bg-white border border-slate-200 rounded-md px-4 py-3 text-slate-400 text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-cyan-500">
                      <option value="">Select Joining Type...</option>
                      <option value="Individual">Individual</option>
                      <option value="Group">Group</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[14px] font-bold text-slate-700">First Name</label>
                  <input type="text" defaultValue={isEdit ? application?.fullName?.split(' ')[0] : ''} placeholder="Enter First Name" className="w-full bg-white border border-slate-200 rounded-md px-4 py-3 text-slate-600 text-sm focus:ring-1 focus:ring-cyan-500 outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-[14px] font-bold text-slate-700">Last Name</label>
                  <input type="text" defaultValue={isEdit ? application?.fullName?.split(' ').slice(1).join(' ') : ''} placeholder="Enter Last Name" className="w-full bg-white border border-slate-200 rounded-md px-4 py-3 text-slate-600 text-sm focus:ring-1 focus:ring-cyan-500 outline-none" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[14px] font-bold text-slate-700">Identification Type</label>
                  <div className="relative">
                    <select value={idType} onChange={(e) => setIdType(e.target.value)} className="w-full bg-white border border-slate-200 rounded-md px-4 py-3 text-slate-400 text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-cyan-500">
                      <option value="">Select ID Type...</option>
                      <option value="National ID Card">National ID Card</option>
                      <option value="Passport">Passport</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[14px] font-bold text-slate-700">Identification Number</label>
                  <input type="text" defaultValue={isEdit ? application?.nationalId : ''} placeholder="Enter Your Identification Number" className="w-full border border-slate-200 rounded-md px-4 py-3 text-slate-600 text-sm focus:ring-1 focus:ring-cyan-500 outline-none" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 relative" ref={activeDatePicker === 'member' ? datePickerRef : null}>
                  <label className="text-[14px] font-bold text-slate-700">Date Of birth</label>
                  <div onClick={() => setActiveDatePicker('member')} className="relative cursor-pointer">
                    <input type="text" readOnly value={formatDate(memberDob)} placeholder="dd/mm/yyyy" className="w-full bg-white border border-slate-200 rounded-md px-4 py-3 text-slate-600 text-sm focus:ring-1 focus:ring-cyan-500 outline-none cursor-pointer" />
                    <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  </div>
                  {activeDatePicker === 'member' && <DatePickerPopover target="member" />}
                </div>
                <div className="space-y-2">
                  <label className="text-[14px] font-bold text-slate-700">Sex</label>
                  <div className="relative">
                    <select value={sex} onChange={(e) => setSex(e.target.value)} className="w-full bg-white border border-slate-200 rounded-md px-4 py-3 text-slate-400 text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-cyan-500">
                      <option value="">Select Sex...</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[14px] font-bold text-slate-700">Phone Number</label>
                  <input type="text" defaultValue={isEdit ? application?.mobile : ''} placeholder="Enter Mobile Number" className="w-full border border-slate-200 rounded-md px-4 py-3 text-slate-600 text-sm focus:ring-1 focus:ring-cyan-500 outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-[14px] font-bold text-slate-700">Alternate Phone Number</label>
                  <input type="text" placeholder="Enter Alternate Mobile Number" className="w-full border border-slate-200 rounded-md px-4 py-3 text-slate-600 text-sm focus:ring-1 focus:ring-cyan-500 outline-none" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[14px] font-bold text-slate-700">Enter Email Address</label>
                  <input type="text" defaultValue={isEdit ? application?.email : ''} placeholder="Enter Email Address" className="w-full border border-slate-200 rounded-md px-4 py-3 text-slate-600 text-sm focus:ring-1 focus:ring-cyan-500 outline-none" />
                </div>
                {(joiningType === 'Group' || isEdit) && (
                  <div className="space-y-2 animate-in slide-in-from-top-2">
                    <label className="text-[14px] font-bold text-slate-700">Select Group</label>
                    <div className="relative">
                      <input type="text" defaultValue={isEdit ? application?.group : ''} placeholder="Search Group ...." className="w-full border border-slate-200 rounded-md px-4 py-3 text-slate-600 text-sm focus:ring-1 focus:ring-cyan-500 outline-none" />
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    </div>
                  </div>
                )}
              </div>
              <div className="pt-10 flex flex-col md:flex-row gap-6">
                <div className="md:w-1/2">
                  <button className="w-full bg-[#00B5E2] hover:bg-cyan-600 text-white font-bold py-4 rounded-md uppercase tracking-wider text-sm shadow-md">SAVE DRAFT</button>
                </div>
                <div className="md:w-1/2 flex justify-end gap-3">
                  <button disabled className="px-10 py-3 bg-[#67E8F9] text-white font-bold rounded-md opacity-50 cursor-not-allowed">Previous</button>
                  <button onClick={() => setCurrentStep(2)} className="px-10 py-3 bg-[#00B5E2] hover:bg-cyan-600 text-white font-bold rounded-md text-sm shadow-sm">Next</button>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Next of Kin Details */}
          {currentStep === 2 && (
            <div className="space-y-8 animate-in fade-in duration-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[14px] font-bold text-slate-700">First Name</label>
                  <input type="text" placeholder="Enter First Name" className="w-full bg-white border border-slate-200 rounded-md px-4 py-3 text-slate-600 text-sm focus:ring-1 focus:ring-cyan-500 outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-[14px] font-bold text-slate-700">Last Name</label>
                  <input type="text" placeholder="Enter Last Name" className="w-full bg-white border border-slate-200 rounded-md px-4 py-3 text-slate-600 text-sm focus:ring-1 focus:ring-cyan-500 outline-none" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[14px] font-bold text-slate-700">Gender</label>
                  <div className="relative">
                    <select value={nokGender} onChange={(e) => setNokGender(e.target.value)} className="w-full bg-white border border-slate-200 rounded-md px-4 py-3 text-slate-400 text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-cyan-500">
                      <option value="">Select Gender...</option>
                      <option value="Female">Female</option>
                      <option value="Male">Male</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[14px] font-bold text-slate-700">Enter Email Address</label>
                  <input type="text" placeholder="Enter Email Address" className="w-full bg-white border border-slate-200 rounded-md px-4 py-3 text-slate-600 text-sm focus:ring-1 focus:ring-cyan-500 outline-none" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[14px] font-bold text-slate-700">Identification Type</label>
                  <div className="relative">
                    <select value={nokIdType} onChange={(e) => setNokIdType(e.target.value)} className="w-full bg-white border border-slate-200 rounded-md px-4 py-3 text-slate-400 text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-cyan-500">
                      <option value="">Select ID Type...</option>
                      <option value="National ID Card">National ID Card</option>
                      <option value="Passport">Passport</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[14px] font-bold text-slate-700">Identification Number</label>
                  <input type="text" placeholder="Enter Identification Number" className="w-full bg-white border border-slate-200 rounded-md px-4 py-3 text-slate-600 text-sm focus:ring-1 focus:ring-cyan-500 outline-none" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[14px] font-bold text-slate-700">Phone Number</label>
                  <input type="text" placeholder="Enter Phone Number" className="w-full bg-white border border-slate-200 rounded-md px-4 py-3 text-slate-600 text-sm focus:ring-1 focus:ring-cyan-500 outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-[14px] font-bold text-slate-700">Relationship</label>
                  <div className="relative">
                    <select value={nokRelationship} onChange={(e) => setNokRelationship(e.target.value)} className="w-full bg-white border border-slate-200 rounded-md px-4 py-3 text-slate-400 text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-cyan-500">
                      <option value="">Select Relationship...</option>
                      <option value="Son">Son</option>
                      <option value="Daughter">Daughter</option>
                      <option value="Wife">Wife</option>
                      <option value="Husband">Husband</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 relative" ref={activeDatePicker === 'nok' ? datePickerRef : null}>
                  <label className="text-[14px] font-bold text-slate-700">Date Of birth</label>
                  <div onClick={() => setActiveDatePicker('nok')} className="relative cursor-pointer">
                    <input type="text" readOnly value={formatDate(nokDob)} placeholder="dd/mm/yyyy" className="w-full bg-white border border-slate-200 rounded-md px-4 py-3 text-slate-600 text-sm focus:ring-1 focus:ring-cyan-500 outline-none cursor-pointer" />
                    <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  </div>
                  {activeDatePicker === 'nok' && <DatePickerPopover target="nok" />}
                </div>
                <div className="space-y-2">
                  <label className="text-[14px] font-bold text-slate-700">Upload Next of KIN Identification Document</label>
                  <div className="flex border border-slate-200 rounded-md overflow-hidden bg-white">
                    <button className="bg-slate-100 px-4 py-3 text-xs font-bold text-slate-600 border-r border-slate-200 hover:bg-slate-200 transition-colors">Choose File</button>
                    <span className="px-4 py-3 text-xs text-slate-400 italic">No file chosen</span>
                  </div>
                </div>
              </div>
              <div className="pt-10 flex justify-end gap-3">
                <button onClick={() => setCurrentStep(1)} className="px-10 py-3 bg-[#67E8F9] hover:bg-cyan-400 text-white font-bold rounded-md text-sm shadow-sm transition-colors">Previous</button>
                <button onClick={() => setCurrentStep(3)} className="px-10 py-3 bg-[#00B5E2] hover:bg-cyan-600 text-white font-bold rounded-md text-sm shadow-sm transition-colors uppercase">Next</button>
              </div>
            </div>
          )}

          {/* Step 3: Dependant Details */}
          {currentStep === 3 && (
            <div className="space-y-8 animate-in fade-in duration-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[14px] font-bold text-slate-700">First Name</label>
                  <input type="text" placeholder="Enter First Name" className="w-full bg-white border border-slate-200 rounded-md px-4 py-3 text-slate-600 text-sm focus:ring-1 focus:ring-cyan-500 outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-[14px] font-bold text-slate-700">Last Name</label>
                  <input type="text" placeholder="Enter Last Name" className="w-full bg-white border border-slate-200 rounded-md px-4 py-3 text-slate-600 text-sm focus:ring-1 focus:ring-cyan-500 outline-none" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[14px] font-bold text-slate-700">Sex</label>
                  <div className="relative">
                    <select value={depSex} onChange={(e) => setDepSex(e.target.value)} className="w-full bg-white border border-slate-200 rounded-md px-4 py-3 text-slate-400 text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-cyan-500">
                      <option value="">Select Gender...</option>
                      <option value="Female">Female</option>
                      <option value="Male">Male</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  </div>
                </div>
                <div className="space-y-2 relative" ref={activeDatePicker === 'dep' ? datePickerRef : null}>
                  <label className="text-[14px] font-bold text-slate-700">Date Of birth</label>
                  <div onClick={() => setActiveDatePicker('dep')} className="relative cursor-pointer">
                    <input type="text" readOnly value={formatDate(depDob)} placeholder="dd/mm/yyyy" className="w-full bg-white border border-slate-200 rounded-md px-4 py-3 text-slate-600 text-sm focus:ring-1 focus:ring-cyan-500 outline-none cursor-pointer" />
                    <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  </div>
                  {activeDatePicker === 'dep' && <DatePickerPopover target="dep" />}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[14px] font-bold text-slate-700">Phone Number</label>
                  <input type="text" placeholder="Enter Phone Number" className="w-full bg-white border border-slate-200 rounded-md px-4 py-3 text-slate-600 text-sm focus:ring-1 focus:ring-cyan-500 outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-[14px] font-bold text-slate-700">Relationship</label>
                  <div className="relative">
                    <select value={depRelationship} onChange={(e) => setDepRelationship(e.target.value)} className="w-full bg-white border border-slate-200 rounded-md px-4 py-3 text-slate-400 text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-cyan-500">
                      <option value="">Select Relationship...</option>
                      <option value="Daughter">Daughter</option>
                      <option value="Son">Son</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[14px] font-bold text-slate-700">Enter Email Address</label>
                  <input type="text" placeholder="Enter Email Address" className="w-full bg-white border border-slate-200 rounded-md px-4 py-3 text-slate-600 text-sm focus:ring-1 focus:ring-cyan-500 outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-[14px] font-bold text-slate-700">Upload Dependent Birth Certificate</label>
                  <div className="flex border border-slate-200 rounded-md overflow-hidden bg-white">
                    <button className="bg-slate-100 px-4 py-3 text-xs font-bold text-slate-600 border-r border-slate-200 hover:bg-slate-200 transition-colors">Choose File</button>
                    <span className="px-4 py-3 text-xs text-slate-400 italic">No file chosen</span>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button onClick={handleAddDependant} className="w-full bg-[#00B5E2] hover:bg-cyan-600 text-white font-bold py-4 rounded-md uppercase tracking-wider text-sm shadow-md transition-all">SAVE AND ADD NEW</button>
              </div>

              <div className="pt-10">
                <h3 className="text-[17px] font-bold text-slate-800 mb-6">Dependants Information</h3>
                <div className="overflow-x-auto border border-slate-50 rounded-lg">
                  <table className="w-full text-left whitespace-nowrap">
                    <thead>
                      <tr className="text-[11px] font-black text-slate-500 uppercase tracking-wider bg-white">
                        <th className="py-6 px-6">#</th>
                        <th className="py-6 px-6">FULL NAMES</th>
                        <th className="py-6 px-6">Relationship</th>
                        <th className="py-6 px-6">Gender</th>
                        <th className="py-6 px-6">Age(Yrs)</th>
                        <th className="py-6 px-6">Birth Certificate No</th>
                        <th className="py-6 px-6">Status</th>
                        <th className="py-6 px-6">Phone Number</th>
                        <th className="py-6 px-6">ACTIONS</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                      {dependants.length === 0 ? (
                        <tr>
                          <td colSpan={9} className="py-10 text-center text-slate-400 italic bg-white">No dependants added yet.</td>
                        </tr>
                      ) : (
                        dependants.map((dep, idx) => (
                          <tr key={idx} className="text-[13px] text-slate-600 hover:bg-slate-50/80 transition-colors">
                            <td className="py-4 px-6 font-bold">{idx + 1}</td>
                            <td className="py-4 px-6 font-medium text-slate-800">{dep.fullName}</td>
                            <td className="py-4 px-6">{dep.relationship}</td>
                            <td className="py-4 px-6">{dep.gender}</td>
                            <td className="py-4 px-6">{dep.age}</td>
                            <td className="py-4 px-6">{dep.birthCertNo}</td>
                            <td className="py-4 px-6"><span className="px-2.5 py-1 bg-yellow-50 text-yellow-600 rounded font-bold text-[11px]">{dep.status}</span></td>
                            <td className="py-4 px-6">{dep.phone}</td>
                            <td className="py-4 px-6 flex gap-3"><button className="text-[#00B5E2]"><Eye size={18} /></button><button className="text-red-400"><Trash2 size={18} /></button></td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>

                <div className="mt-8 flex gap-1">
                  {['«', '‹', '›', '»'].map(p => <button key={p} className="w-10 h-10 flex items-center justify-center border border-slate-100 rounded text-slate-300 hover:bg-slate-50">{p}</button>)}
                </div>
              </div>

              <div className="pt-10 flex justify-end gap-3">
                <button onClick={() => setCurrentStep(2)} className="px-10 py-3 bg-[#67E8F9] hover:bg-cyan-400 text-white font-bold rounded-md text-sm shadow-sm transition-colors">Previous</button>
                <button onClick={() => setCurrentStep(4)} className="px-10 py-3 bg-[#00B5E2] hover:bg-cyan-600 text-white font-bold rounded-md text-sm shadow-sm transition-colors uppercase">NEXT</button>
              </div>
            </div>
          )}

          {/* Step 4: Confirm Details */}
          {currentStep === 4 && (
            <div className="py-16 text-center space-y-8 animate-in zoom-in-95 duration-500">
              <div className="w-24 h-24 bg-[#E6F9F0] rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-white shadow-sm">
                <Check className="text-[#00B58D]" size={48} strokeWidth={3} />
              </div>
              <div className="space-y-4">
                <h3 className="text-[20px] font-bold text-slate-800 tracking-tight">Confirm Submission</h3>
                <p className="text-slate-500 font-medium">Please review all information before finalizing.</p>
              </div>
              <div className="pt-10 flex justify-end gap-3 max-w-sm mx-auto">
                <button onClick={() => setCurrentStep(3)} className="px-10 py-3 bg-[#00B5E2] hover:bg-cyan-600 text-white font-bold rounded-md text-sm shadow-sm transition-colors uppercase">Previous</button>
                <button onClick={() => setIsSuccessModalOpen(true)} className="px-10 py-3 bg-[#67E8F9] hover:bg-cyan-400 text-white font-bold rounded-md text-sm shadow-sm transition-colors uppercase">SUBMIT</button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Success Modal - Matching Group Creation Design */}
      {isSuccessModalOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/20 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-[550px] overflow-hidden animate-in zoom-in-95 duration-200 p-12 text-center flex flex-col items-center">
            <div className="w-24 h-24 bg-[#E6F9F0] border-[1px] border-[#D1FAE5] rounded-full flex items-center justify-center mb-10">
              <div className="w-16 h-16 border-2 border-[#10B981] rounded-full flex items-center justify-center">
                <Check className="text-[#10B981]" size={32} strokeWidth={4} />
              </div>
            </div>
            <h3 className="text-[22px] font-semibold text-slate-700 mb-10">
              {isEdit ? 'Member details saved successfully' : 'New member has been successfully added'}
            </h3>
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

export default ApproveApplicationWizard;