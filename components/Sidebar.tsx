
import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  ShoppingBasket, 
  Repeat, 
  ShieldCheck, 
  FileText, 
  Headphones,
  ChevronDown,
  ChevronRight,
  Settings
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onNavigate?: (view: string) => void;
  activeView?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onNavigate, activeView = 'dashboard' }) => {
  const [expandedMenus, setExpandedMenus] = useState<string[]>(['member-manager', 'members', 'transactions', 'reports']);

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { 
      id: 'member-manager', 
      label: 'Member Manager', 
      icon: <Users size={20} />, 
      hasSubmenu: true,
      subItems: [
        { 
          id: 'applications', 
          label: 'Applications', 
          hasSubmenu: true,
          childItems: [
            { id: 'principal-members-app', label: 'Principal Members' },
            { id: 'dependants-app', label: 'Dependants' }
          ]
        },
        { 
          id: 'members', 
          label: 'Members', 
          hasSubmenu: true,
          childItems: [
            { id: 'principal-members', label: 'Principal Members' },
            { id: 'member-transfers', label: 'Member Transfers' }
          ]
        },
        { 
          id: 'groups', 
          label: 'Groups', 
          hasSubmenu: true,
          childItems: [
            { id: 'all-groups', label: 'All Groups' },
            { id: 'group-transfers', label: 'Group Transfers' }
          ]
        }
      ]
    },
    { id: 'welfare-products', label: 'Welfare Products', icon: <ShoppingBasket size={20} />, hasSubmenu: true },
    { 
      id: 'transactions', 
      label: 'Transactions', 
      icon: <Repeat size={20} />, 
      hasSubmenu: true,
      subItems: [
        { id: 'payments', label: 'Payments' },
        { id: 'invoices', label: 'Invoices' },
        { id: 'receipts', label: 'Receipts' }
      ]
    },
    { id: 'claims', label: 'Claims', icon: <ShieldCheck size={20} />, hasSubmenu: true },
    { 
      id: 'reports', 
      label: 'Reports', 
      icon: <FileText size={20} />, 
      hasSubmenu: true,
      subItems: [
        { id: 'member-reports', label: 'Member Reports' },
        { id: 'group-reports', label: 'Group Reports' },
        { id: 'payment-reports', label: 'Payment Reports' }
      ]
    },
    { id: 'support', label: 'Support', icon: <Headphones size={20} /> },
  ];

  const toggleMenu = (id: string) => {
    setExpandedMenus(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <div className={`${isOpen ? 'w-64' : 'w-20'} h-full bg-white border-r border-slate-200 transition-all duration-300 flex flex-col shrink-0 overflow-hidden`}>
      <div className="p-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-extrabold text-2xl tracking-tighter text-slate-900">SHOFCO</span>
          <Settings size={18} className="text-slate-400" />
        </div>
      </div>

      <nav className="flex-1 mt-4 px-3 space-y-1 overflow-y-auto custom-scrollbar select-none">
        {navItems.map((item) => {
          const isExpanded = expandedMenus.includes(item.id);
          const isActive = activeView === item.id || (item.subItems?.some(s => s.id === activeView || (s.childItems && s.childItems.some(c => c.id === activeView))));

          return (
            <div key={item.id} className="mb-1">
              <button
                onClick={() => {
                  if (item.hasSubmenu) toggleMenu(item.id);
                  if (!item.hasSubmenu && onNavigate) onNavigate(item.id);
                }}
                className={`w-full flex items-center justify-between px-3 py-3 rounded-lg transition-all ${
                  isActive && isOpen
                    ? 'bg-slate-50 text-[#00B5E2]' 
                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`${isActive && isOpen ? 'text-[#00B5E2]' : 'text-slate-400'}`}>
                    {item.icon}
                  </span>
                  {isOpen && <span className="font-medium text-[14px]">{item.label}</span>}
                </div>
                {isOpen && item.hasSubmenu && (
                  isExpanded ? <ChevronDown size={14} className="text-[#00B5E2]" /> : <ChevronDown size={14} className="rotate-[-90deg]" />
                )}
              </button>
              
              {isOpen && isExpanded && item.subItems && (
                <div className="ml-6 mt-1 space-y-1">
                  {item.subItems.map((sub) => {
                    const isSubExpanded = expandedMenus.includes(sub.id);
                    const isSubActive = activeView === sub.id || (sub.childItems && sub.childItems.some(c => c.id === activeView));
                    
                    return (
                      <div key={sub.id}>
                        <button
                          onClick={() => {
                            if (sub.hasSubmenu) toggleMenu(sub.id);
                            if (!sub.hasSubmenu && onNavigate) onNavigate(sub.id);
                          }}
                          className={`w-full text-left px-3 py-2 text-[14px] rounded-md transition-all flex items-center justify-between ${
                            isSubActive 
                              ? 'text-[#00B5E2] font-semibold' 
                              : 'text-slate-500 hover:text-[#00B5E2] hover:bg-slate-50'
                          }`}
                        >
                          <span>{sub.label}</span>
                          {sub.hasSubmenu && (
                            isSubExpanded ? <ChevronDown size={14} className="text-[#00B5E2]" /> : <ChevronDown size={14} className="rotate-[-90deg]" />
                          )}
                        </button>
                        
                        {isSubExpanded && sub.childItems && (
                          <div className="ml-4 mt-1 space-y-1">
                            {sub.childItems.map(child => (
                              <button
                                key={child.id}
                                onClick={() => onNavigate && onNavigate(child.id)}
                                className={`w-full text-left px-3 py-2 text-[13px] rounded-md transition-all ${
                                  activeView === child.id 
                                    ? 'text-[#00B5E2] font-semibold' 
                                    : 'text-slate-400 hover:text-slate-600'
                                }`}
                              >
                                {child.label}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>
      
      <div className="p-4 border-t border-slate-100 mt-auto">
        <div className="text-[10px] text-slate-400 font-medium">
          {isOpen ? "https://admin.shofcowelfare.org" : "..."}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
