import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MemberProfile from './components/MemberProfile';
import StatsCards from './components/StatsCards';
import ContentTabs from './components/ContentTabs';
import LoginPage from './components/LoginPage';
import DashboardContent from './components/DashboardContent';
import MembersContent from './components/MembersContent';
import PrincipalMembersAppContent from './components/PrincipalMembersAppContent';
import PrincipalAppDetails from './components/PrincipalAppDetails';
import ApproveApplicationWizard from './components/ApproveApplicationWizard';
import DependantsAppContent from './components/DependantsAppContent';
import DependantAppDetails from './components/DependantAppDetails';
import MemberTransfersContent from './components/MemberTransfersContent';
import GroupTransfersContent from './components/GroupTransfersContent';
import GroupsContent from './components/GroupsContent';
import NewGroupContent from './components/NewGroupContent';
import GroupDetailsContent from './components/GroupDetailsContent';
import PaymentsContent from './components/PaymentsContent';
import InvoicesContent from './components/InvoicesContent';
import ReceiptsContent from './components/ReceiptsContent';
import InvoiceDetailsContent from './components/InvoiceDetailsContent';
import ReceiptDetailsContent from './components/ReceiptDetailsContent';
import MemberReportsContent from './components/MemberReportsContent';
import GroupReportsContent from './components/GroupReportsContent';
import PaymentReportsContent from './components/PaymentReportsContent';
import SupportContent from './components/SupportContent';
import UserProfileContent from './components/UserProfileContent';
import { Member } from './types';

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentView, setCurrentView] = useState('dashboard');
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [selectedDepApp, setSelectedDepApp] = useState<any>(null);
  const [selectedPrincipalApp, setSelectedPrincipalApp] = useState<any>(null);
  const [selectedGroup, setSelectedGroup] = useState<any>(null);
  const [selectedInvoice, setSelectedInvoice] = useState<any>(null);
  const [selectedReceipt, setSelectedReceipt] = useState<any>(null);
  const [isEditingMode, setIsEditingMode] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleViewMember = (member: any) => {
    setSelectedMember(member);
    setCurrentView('member-details');
  };

  const handleEditMember = (member: any) => {
    setSelectedPrincipalApp(member);
    setIsEditingMode(true);
    setCurrentView('new-member');
  };

  const handleViewDepApp = (app: any) => {
    setSelectedDepApp(app);
    setCurrentView('dependant-app-details');
  };

  const handleViewPrincipalApp = (app: any) => {
    setSelectedPrincipalApp(app);
    setCurrentView('principal-app-details');
  };

  const handleStartApproval = (app: any) => {
    setSelectedPrincipalApp(app);
    setIsEditingMode(false);
    setCurrentView('approve-wizard');
  };

  const handleViewGroup = (group: any) => {
    setSelectedGroup(group);
    setCurrentView('group-details');
  };

  const handleEditGroup = (group: any) => {
    setSelectedGroup(group);
    setCurrentView('new-group'); // Reusing NewGroup as registration form for group
  };

  const handleViewInvoice = (invoice: any) => {
    setSelectedInvoice(invoice);
    setCurrentView('invoice-details');
  };

  const handleViewReceipt = (receipt: any) => {
    setSelectedReceipt(receipt);
    setCurrentView('receipt-details');
  };

  const renderContent = () => {
    switch (currentView) {
      case 'dashboard':
        return <DashboardContent />;
      case 'principal-members':
        return <MembersContent 
          onViewMember={handleViewMember} 
          onAddNewMember={() => {
            setIsEditingMode(false);
            setSelectedPrincipalApp(null);
            setCurrentView('new-member');
          }}
          onEditMember={handleEditMember}
        />;
      case 'new-member':
        return <ApproveApplicationWizard 
          application={selectedPrincipalApp}
          isEdit={isEditingMode}
          onBack={() => setCurrentView('principal-members')}
        />;
      case 'member-transfers':
        return <MemberTransfersContent />;
      case 'group-transfers':
        return <GroupTransfersContent />;
      case 'all-groups':
        return <GroupsContent 
          onAddNewGroup={() => {
            setSelectedGroup(null);
            setCurrentView('new-group');
          }} 
          onViewGroup={handleViewGroup}
          onEditGroup={handleEditGroup}
        />;
      case 'group-details':
        return <GroupDetailsContent 
          group={selectedGroup} 
          onBack={() => setCurrentView('all-groups')} 
          onViewMember={handleViewMember}
        />;
      case 'new-group':
        return <NewGroupContent onBack={() => setCurrentView('all-groups')} />;
      case 'principal-members-app':
        return <PrincipalMembersAppContent onViewApplication={handleViewPrincipalApp} />;
      case 'principal-app-details':
        return <PrincipalAppDetails 
          application={selectedPrincipalApp} 
          onBack={() => setCurrentView('principal-members-app')} 
          onApprove={() => handleStartApproval(selectedPrincipalApp)}
        />;
      case 'approve-wizard':
        return <ApproveApplicationWizard 
          application={selectedPrincipalApp}
          isEdit={false}
          onBack={() => setCurrentView('principal-app-details')}
        />;
      case 'dependants-app':
        return <DependantsAppContent onViewApplication={handleViewDepApp} />;
      case 'dependant-app-details':
        return <DependantAppDetails 
          application={selectedDepApp} 
          onBack={() => setCurrentView('dependants-app')} 
        />;
      case 'payments':
        return <PaymentsContent />;
      case 'invoices':
        return <InvoicesContent onViewInvoice={handleViewInvoice} />;
      case 'invoice-details':
        return <InvoiceDetailsContent invoice={selectedInvoice} onBack={() => setCurrentView('invoices')} />;
      case 'receipts':
        return <ReceiptsContent onViewReceipt={handleViewReceipt} />;
      case 'receipt-details':
        return <ReceiptDetailsContent receipt={selectedReceipt} onBack={() => setCurrentView('receipts')} />;
      case 'member-reports':
        return <MemberReportsContent />;
      case 'group-reports':
        return <GroupReportsContent />;
      case 'payment-reports':
        return <PaymentReportsContent />;
      case 'support':
        return <SupportContent />;
      case 'user-profile':
        return <UserProfileContent />;
      case 'member-details':
        return (
          <div className="p-8 max-w-[1600px] mx-auto">
            <button 
              onClick={() => {
                // Return to previous contextual view
                if (selectedGroup && currentView === 'member-details') {
                   setCurrentView('group-details');
                } else {
                   setCurrentView('principal-members');
                }
              }}
              className="flex items-center gap-2 bg-[#00B5E2] hover:bg-cyan-600 text-white px-5 py-2.5 rounded-md mb-8 transition-colors shadow-sm text-sm font-bold uppercase tracking-wide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
              Back
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Panel: Profile */}
              <div className="lg:col-span-4">
                <MemberProfile member={selectedMember || {
                  id: '596491',
                  fullName: 'ERNOLD MAINA. NECHESA',
                  shofcoId: 'SH-EM-23857-118',
                  idNumber: '23857627',
                  mobile: '254729488402',
                  email: '',
                  status: 'Active' as const,
                  groupName: 'NEVER GIVE UP',
                  location: 'Bofu, FB Likoni, Mombasa'
                }} />
              </div>

              {/* Right Panel: Stats and Tabs */}
              <div className="lg:col-span-8 space-y-8">
                <StatsCards 
                  invoices={1}
                  totalPayment="KES. 300.00"
                  claims={0}
                />
                
                <ContentTabs />
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="p-8 flex items-center justify-center h-full">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-slate-400 uppercase">Coming Soon</h2>
              <p className="text-slate-400 mt-2">The {currentView} view is under construction.</p>
            </div>
          </div>
        );
    }
  };

  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <div className="flex h-screen overflow-hidden bg-[#f0f4f8]">
      <Sidebar 
        isOpen={isSidebarOpen} 
        onNavigate={setCurrentView} 
        activeView={currentView}
      />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header 
          toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} 
          userName="Belinda" 
          onLogout={handleLogout}
          onNavigate={setCurrentView}
        />

        <main className="flex-1 overflow-y-auto bg-[#F4F7FA]">
          {renderContent()}
          
          <footer className="p-6 text-slate-400 text-sm">
            2026 © SUN – Welfare Administration System.
          </footer>
        </main>
      </div>
    </div>
  );
};

export default App;