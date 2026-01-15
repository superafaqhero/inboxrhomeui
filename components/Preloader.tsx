
import React from 'react';
import Logo from './Logo';

const Preloader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[100] bg-void flex flex-col items-center justify-center">
      <div className="relative mb-12">
        <div className="relative z-10 flex flex-col items-center">
          <Logo className="w-24 h-24 mb-6 breathing" />
          <div className="font-heading font-black text-4xl md:text-5xl tracking-[0.3em] text-white">
            INBOXR <span className="text-terminal">PRO</span>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-terminal/10 blur-[80px] rounded-full animate-pulse"></div>
        <div className="absolute inset-x-0 -bottom-8 border-t border-terminal/20 w-full animate-[pulse_2s_infinite]"></div>
      </div>
      
      <div className="text-center font-mono space-y-4">
        <div className="flex items-center gap-3 justify-center">
          <span className="w-2 h-2 bg-terminal rounded-full animate-ping"></span>
          <p className="text-terminal text-sm tracking-[0.2em] animate-pulse uppercase">Booting Titan_Protocol_v4.0...</p>
        </div>
        
        <div className="w-72 h-[2px] bg-white/5 rounded-full overflow-hidden relative">
          <div className="absolute inset-0 bg-terminal/10"></div>
          <div className="h-full bg-gradient-to-r from-blue-500 to-terminal shadow-[0_0_15px_rgba(0,255,65,0.5)] animate-[loading_2.5s_ease-in-out_infinite]"></div>
        </div>
        
        <div className="grid grid-cols-1 opacity-30 text-[9px] uppercase tracking-[0.5em] mt-2">
          <p className="animate-[pulse_1s_infinite]">Establishing Secure Sovereignty Link</p>
        </div>
      </div>

      <style>{`
        @keyframes loading {
          0% { width: 0%; transform: translateX(-100%); }
          50% { width: 100%; transform: translateX(0); }
          100% { width: 0%; transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default Preloader;
