import React, { useState, useRef, useEffect } from 'react';
import { Menu, ChevronDown, User, Settings, LogOut } from 'lucide-react';

interface HeaderProps {
  toggleSidebar: () => void;
  userName: string;
  onLogout?: () => void;
  onNavigate?: (view: string) => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar, userName, onLogout, onNavigate }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleProfileClick = () => {
    setIsDropdownOpen(false);
    if (onNavigate) {
      onNavigate('user-profile');
    }
  };

  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0 z-20">
      <button 
        onClick={toggleSidebar}
        className="text-slate-500 hover:bg-slate-100 p-2 rounded-lg transition-colors"
      >
        <Menu size={24} />
      </button>

      <div className="flex items-center gap-6 relative" ref={dropdownRef}>
        <div 
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className={`flex items-center gap-3 cursor-pointer p-2 rounded-lg transition-all ${isDropdownOpen ? 'bg-slate-50' : 'hover:bg-slate-50'}`}
        >
          <div className="relative">
            <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-white overflow-hidden">
               <div className="p-1 bg-white rounded-full">
                  <div className="w-7 h-7 bg-slate-800 rounded-full flex items-center justify-center">
                    <Settings size={16} className="text-white" />
                  </div>
               </div>
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></div>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <span className="font-semibold text-slate-700">{userName}</span>
            <ChevronDown size={16} className={`text-slate-400 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
          </div>
        </div>

        {/* Profile Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200 z-50">
            <div className="py-1">
              <button 
                onClick={handleProfileClick}
                className="w-full flex items-center gap-3 px-6 py-4 text-slate-600 hover:bg-slate-50 transition-colors group text-left"
              >
                <User size={20} className="text-slate-400 group-hover:text-slate-600" />
                <span className="text-[15px] font-medium">Profile</span>
              </button>
              
              <div className="h-px bg-slate-100 mx-0"></div>
              
              <button 
                onClick={onLogout}
                className="w-full flex items-center gap-3 px-6 py-4 text-slate-600 hover:bg-slate-50 transition-colors group text-left"
              >
                <LogOut size={20} className="text-red-400 group-hover:text-red-500" />
                <span className="text-[15px] font-medium">Logout</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;