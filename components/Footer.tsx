
import React from 'react';
import Logo from './Logo.tsx';

interface FooterProps {
  setView: (view: 'home' | 'privacy' | 'terms' | 'sla') => void;
}

const Footer: React.FC<FooterProps> = ({ setView }) => {
  return (
    <footer className="py-24 px-6 border-t border-white/5 bg-void">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
        <div className="space-y-8">
          <div 
            className="flex items-center gap-5 cursor-pointer group"
            onClick={() => {
              setView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <Logo className="w-12 h-12" />
            <span className="font-heading font-black text-3xl tracking-[0.25em] text-white transition-colors group-hover:text-terminal">INBOXR PRO</span>
          </div>
          <div className="space-y-4">
            <p className="font-mono text-[11px] text-white/40 uppercase tracking-[0.4em] font-bold">
              Inboxr Pro © 2026. All Rights Reserved.
            </p>
            <p className="font-mono text-[10px] text-terminal/30 uppercase tracking-[0.3em] font-bold">
              Division 7 Operations // Tactical Marketing Infrastructure
            </p>
          </div>
          <div className="p-6 glass border border-white/5 inline-block">
            <p className="text-[11px] text-white/40 font-mono tracking-[0.2em] uppercase leading-relaxed">
              1209 MOUNTAIN ROAD PL NE STE. 10474 <br/> ALBUQUERQUE, NM 87110
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start md:items-end gap-10">
          <div className="flex flex-wrap justify-start md:justify-end gap-10 text-[11px] font-mono uppercase tracking-[0.4em] text-white/30 font-bold">
            <button onClick={() => setView('privacy')} className="hover:text-terminal transition-colors underline decoration-terminal/20 underline-offset-8">[ Privacy ]</button>
            <button onClick={() => setView('terms')} className="hover:text-terminal transition-colors underline decoration-terminal/20 underline-offset-8">[ Terms ]</button>
            <button onClick={() => setView('sla')} className="hover:text-terminal transition-colors underline decoration-terminal/20 underline-offset-8">[ SLA Governance ]</button>
          </div>
          
          <div className="text-[10px] font-mono text-white/10 uppercase tracking-[0.6em] font-black border-r-2 border-terminal pr-4">
            Authorized Access Only // IP Logged
          </div>
          
          <div className="flex gap-4">
             <div className="w-12 h-1 bg-white/5"></div>
             <div className="w-12 h-1 bg-terminal/20"></div>
             <div className="w-12 h-1 bg-terminal"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
