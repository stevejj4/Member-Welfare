
import React, { useState, useEffect, useRef } from 'react';
import { 
  Headphones, 
  MessageSquare, 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  Mic, 
  MicOff,
  Clock,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

const SupportContent: React.FC = () => {
  const [isAiActive, setIsAiActive] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', text: string }[]>([
    { role: 'ai', text: "Hello! I'm your SUN Welfare AI Assistant. How can I help you manage your groups or members today?" }
  ]);
  const [inputText, setInputText] = useState('');
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userMsg = inputText;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInputText('');

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: "You are a friendly and professional support agent for the SUN Welfare Administration System. You help administrators manage members, groups, transactions, and reports. Keep answers concise and helpful."
        }
      });
      
      setMessages(prev => [...prev, { role: 'ai', text: response.text || "I'm sorry, I couldn't process that request." }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'ai', text: "Service is temporarily unavailable. Please try our direct support lines below." }]);
    }
  };

  return (
    <div className="p-8 max-w-[1600px] mx-auto animate-in fade-in duration-500">
      <div className="mb-8">
        <h1 className="text-[18px] font-bold text-slate-700 uppercase tracking-tight mb-2">SUPPORT DESK</h1>
        <div className="flex items-center gap-2 text-[14px] text-slate-400">
          <span>Home</span>
          <span className="text-slate-300">/</span>
          <span className="font-medium text-slate-500">Support</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: AI Assistant */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-white rounded-lg shadow-sm border border-slate-100 overflow-hidden flex flex-col h-[700px]">
            {/* Chat Header */}
            <div className="p-6 bg-[#00B5E2] text-white flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Headphones size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[16px]">AI Support Assistant</h3>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                    <span className="text-[12px] font-medium opacity-90">Online & ready to help</span>
                  </div>
                </div>
              </div>
              <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                <ExternalLink size={18} />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-8 space-y-6 bg-slate-50/50">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] rounded-2xl p-4 text-[14px] leading-relaxed shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-[#00B5E2] text-white rounded-tr-none' 
                      : 'bg-white text-slate-700 border border-slate-100 rounded-tl-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>

            {/* Chat Input */}
            <div className="p-6 bg-white border-t border-slate-100">
              <form onSubmit={handleSendMessage} className="flex gap-4">
                <div className="relative flex-1">
                  <input 
                    type="text" 
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Type your question here..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-full px-6 py-4 text-[14px] focus:outline-none focus:ring-2 focus:ring-cyan-100 transition-all pr-12"
                  />
                  <button 
                    type="button"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#00B5E2] transition-colors"
                  >
                    <Mic size={20} />
                  </button>
                </div>
                <button 
                  type="submit"
                  disabled={!inputText.trim()}
                  className="w-14 h-14 bg-[#00B5E2] text-white rounded-full flex items-center justify-center shadow-lg shadow-cyan-100 hover:bg-cyan-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 shrink-0"
                >
                  <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Details */}
        <div className="lg:col-span-4 space-y-6">
          {/* Quick Contact Card */}
          <div className="bg-white rounded-lg shadow-sm border border-slate-100 p-8">
            <h4 className="text-[17px] font-bold text-slate-700 mb-6">Customer Support Desk</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-emerald-50 text-emerald-500 rounded-lg flex items-center justify-center shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Direct Line</p>
                  <p className="text-[15px] font-bold text-slate-700">+254 700 000 000</p>
                  <p className="text-[12px] text-slate-500 font-medium mt-1">Available 8:00 AM - 5:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-cyan-50 text-[#00B5E2] rounded-lg flex items-center justify-center shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Email Address</p>
                  <p className="text-[15px] font-bold text-slate-700">support@shofcowelfare.org</p>
                  <p className="text-[12px] text-slate-500 font-medium mt-1">Response within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-amber-50 text-amber-500 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Head Office</p>
                  <p className="text-[15px] font-bold text-slate-700">Kibera, Nairobi</p>
                  <p className="text-[12px] text-slate-500 font-medium mt-1">Gatwekera Village, HQ</p>
                </div>
              </div>
            </div>

            <button className="w-full bg-slate-800 text-white font-bold py-4 rounded-md mt-10 hover:bg-slate-900 transition-all flex items-center justify-center gap-2 text-[14px]">
              Raise a Support Ticket
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Service Status */}
          <div className="bg-white rounded-lg shadow-sm border border-slate-100 p-6">
            <div className="flex items-center justify-between mb-4">
              <h5 className="font-bold text-slate-700 text-[14px]">System Status</h5>
              <span className="px-2.5 py-0.5 bg-emerald-100 text-emerald-600 text-[10px] font-bold rounded-full uppercase tracking-tighter">Healthy</span>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-[13px]">
                <span className="text-slate-500">Database API</span>
                <span className="font-bold text-emerald-500">Operational</span>
              </div>
              <div className="flex items-center justify-between text-[13px]">
                <span className="text-slate-500">Payment Gateway</span>
                <span className="font-bold text-emerald-500">Operational</span>
              </div>
              <div className="flex items-center justify-between text-[13px]">
                <span className="text-slate-500">Messaging Service</span>
                <span className="font-bold text-amber-500">Slight Lag</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportContent;
