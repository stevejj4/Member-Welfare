
import React, { useState, useRef, useEffect } from 'react';
import { X, AlertTriangle } from 'lucide-react';

interface LoginPageProps {
  onLogin: () => void;
}

type AuthStep = 'login' | 'otp' | 'security-check';

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [authStep, setAuthStep] = useState<AuthStep>('login');
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [email, setEmail] = useState('sjuma1@shininghopeforcommunities.org');
  const [password, setPassword] = useState('............');
  
  // OTP State
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthStep('otp');
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) value = value[0];
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value !== '' && index < 5) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  const handleVerifyOtp = () => {
    // Proceed to security check modal as per design
    setAuthStep('security-check');
  };

  const handleSecurityContinue = () => {
    onLogin();
  };

  const handleSecurityCancel = () => {
    // Reset OTP and go back
    setOtp(['', '', '', '', '', '']);
    setAuthStep('otp');
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#f0f4f8] p-4 font-sans relative">
      {/* Login Step */}
      {authStep === 'login' && (
        <div className="w-full max-w-[520px] bg-white rounded-lg shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-300">
          <div className="bg-[#DDE1E6] p-10 flex justify-between items-start relative overflow-hidden h-[180px]">
            <div className="relative z-10 space-y-1">
              <h1 className="text-[20px] font-bold text-slate-700 tracking-tight">Admin Portal</h1>
              <p className="text-[16px] text-slate-500 font-medium">Welfare Administration System</p>
            </div>
            
            <div className="absolute right-0 bottom-0 w-[240px] h-[160px] z-0 translate-y-2 translate-x-2">
              <svg viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
                <circle cx="170" cy="50" r="32" fill="#F97316" fillOpacity="0.8" />
                <path d="M170 10V22M170 78V90M130 50H142M198 50H210M141.7 21.7L150.2 30.2M189.8 69.8L198.3 78.3M141.7 78.3L150.2 69.8M189.8 30.2L198.3 21.7" stroke="#F97316" strokeWidth="3" strokeLinecap="round" />
                <circle cx="100" cy="140" r="35" fill="#E15C48" />
                <circle cx="150" cy="145" r="40" fill="#3D5082" />
                <circle cx="200" cy="150" r="38" fill="#F19E86" />
                <circle cx="125" cy="115" r="32" fill="#4B3B31" />
                <circle cx="175" cy="110" r="35" fill="#C58A5B" />
                <circle cx="150" cy="85" r="28" fill="#7C4735" />
              </svg>
            </div>
          </div>

          <form onSubmit={handleLoginSubmit} className="p-12 space-y-8">
            <div className="space-y-2">
              <label className="text-[16px] font-medium text-slate-600 block">Email</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#E8F0FE] border border-slate-200/50 rounded-md px-4 py-3.5 text-slate-700 text-[15px] focus:ring-2 focus:ring-cyan-400 focus:bg-white outline-none transition-all"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-[16px] font-medium text-slate-600 block">Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#E8F0FE] border border-slate-200/50 rounded-md px-4 py-3.5 text-slate-700 text-[15px] focus:ring-2 focus:ring-cyan-400 focus:bg-white outline-none transition-all"
                required
              />
            </div>

            <div className="flex items-center gap-3">
              <input type="checkbox" id="remember" className="w-5 h-5 rounded border-slate-300 text-[#00B5E2] focus:ring-[#00B5E2] cursor-pointer" />
              <label htmlFor="remember" className="text-[16px] text-slate-500 cursor-pointer font-medium select-none">Remember me</label>
            </div>

            <div className="pt-2 space-y-6">
              <button type="submit" className="w-full bg-[#00B5E2] hover:bg-cyan-600 text-white font-bold py-4 rounded-md transition-all shadow-md active:scale-[0.98] uppercase tracking-wider text-[15px]">
                LOGIN
              </button>
              <div className="text-center">
                <button type="button" onClick={() => setShowForgotPassword(true)} className="text-[#00B5E2] hover:text-cyan-600 text-[16px] font-semibold transition-colors underline-offset-4 hover:underline">
                  Forgot Password?
                </button>
              </div>
            </div>
          </form>
        </div>
      )}

      {/* OTP Verification Step */}
      {authStep === 'otp' && (
        <div className="w-full max-w-[420px] bg-white rounded-lg shadow-xl p-10 animate-in fade-in slide-in-from-bottom-4 duration-300 text-center">
          <h2 className="text-[20px] font-bold text-slate-700 mb-2">Verify OTP</h2>
          <p className="text-[14px] text-slate-500 mb-8">Enter the 6-digit code sent to you</p>
          
          <div className="flex items-center justify-center gap-2 mb-8">
            {[0, 1, 2].map((i) => (
              <input
                key={i}
                // Fix: ref callback must return void to be valid in TSX. Using curly braces ensures void return.
                ref={(el) => { otpRefs.current[i] = el; }}
                type="text"
                maxLength={1}
                value={otp[i]}
                onChange={(e) => handleOtpChange(i, e.target.value)}
                onKeyDown={(e) => handleKeyDown(i, e)}
                className="w-12 h-14 border border-slate-200 rounded-md text-center text-xl font-bold focus:border-[#00B5E2] focus:ring-1 focus:ring-[#00B5E2] outline-none transition-all"
              />
            ))}
            <span className="text-slate-400 font-bold mx-1">-</span>
            {[3, 4, 5].map((i) => (
              <input
                key={i}
                // Fix: ref callback must return void to be valid in TSX. Using curly braces ensures void return.
                ref={(el) => { otpRefs.current[i] = el; }}
                type="text"
                maxLength={1}
                value={otp[i]}
                onChange={(e) => handleOtpChange(i, e.target.value)}
                onKeyDown={(e) => handleKeyDown(i, e)}
                className="w-12 h-14 border border-slate-200 rounded-md text-center text-xl font-bold focus:border-[#00B5E2] focus:ring-1 focus:ring-[#00B5E2] outline-none transition-all"
              />
            ))}
          </div>

          <button 
            onClick={handleVerifyOtp}
            className="w-full bg-[#00B5E2] hover:bg-cyan-600 text-white font-bold py-3.5 rounded-md uppercase tracking-wider text-[14px] shadow-sm transition-all"
          >
            Verify OTP
          </button>
        </div>
      )}

      {/* Security Check Modal ("Already Logged In") */}
      {authStep === 'security-check' && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/40 backdrop-blur-[2px] animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-[700px] rounded-lg shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between px-8 py-6 border-b border-slate-50">
              <div className="flex items-center gap-2">
                <AlertTriangle className="text-amber-500" size={24} />
                <h2 className="text-[18px] font-bold text-slate-700">Already Logged In</h2>
              </div>
              <button onClick={() => setAuthStep('otp')} className="text-slate-400 hover:text-slate-600 transition-colors">
                <X size={24} />
              </button>
            </div>

            <div className="p-8 space-y-6">
              <div className="bg-[#FEF3C7] border border-amber-100 rounded-lg p-6">
                <p className="text-[#92400E] font-medium text-[15px] leading-relaxed mb-2">
                  You're already logged in on another browser from unknown device (Last active: 3 hours ago). Logging in here will log you out from the other session. Continue?
                </p>
                <p className="text-[#92400E] text-[14px] opacity-80 font-medium">
                  Logging in here will log you out from your other active sessions.
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-[14px] font-bold text-slate-700">Active Sessions:</p>
                <div className="border border-slate-100 rounded-lg p-5 flex items-center justify-between">
                  <div>
                    <p className="text-[14px] font-bold text-slate-800 mb-1">Web Browser</p>
                    <p className="text-[12px] text-slate-400">IP: 127.0.0.1</p>
                  </div>
                  <span className="text-[13px] text-slate-400 font-medium">3 hours ago</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-[13px] text-slate-500">
                <div className="w-4 h-4 rounded-full bg-slate-400 flex items-center justify-center text-white text-[10px] font-bold italic">i</div>
                <p>This is a security feature to prevent multiple simultaneous logins.</p>
              </div>

              <div className="flex justify-end gap-3 pt-6">
                <button 
                  onClick={handleSecurityCancel}
                  className="px-8 py-3 bg-[#64748B] hover:bg-slate-600 text-white rounded-md font-bold text-[14px] transition-all"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleSecurityContinue}
                  className="px-8 py-3 bg-[#00B5E2] hover:bg-cyan-600 text-white rounded-md font-bold text-[14px] transition-all"
                >
                  Continue & Logout Others
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Forgot Password Modal */}
      {showForgotPassword && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-[2px] animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-[550px] rounded-lg shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between px-8 py-6">
              <h2 className="text-[20px] font-bold text-slate-700">Forgot Password</h2>
              <button onClick={() => setShowForgotPassword(false)} className="text-slate-400 hover:text-slate-600 transition-colors p-1">
                <X size={28} />
              </button>
            </div>
            <div className="px-8 pb-10 space-y-8">
              <div className="space-y-2">
                <label className="text-[16px] font-medium text-slate-600 block">Email</label>
                <input type="email" placeholder="Enter your email" className="w-full border border-slate-200 rounded-md px-4 py-3.5 text-[15px] focus:ring-2 focus:ring-[#00B5E2] outline-none transition-all" />
              </div>
              <button type="button" className="w-full bg-[#00B5E2] hover:bg-cyan-600 text-white font-bold py-4 rounded-md uppercase tracking-wider text-[15px] shadow-md transition-all">
                Send OTP
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
