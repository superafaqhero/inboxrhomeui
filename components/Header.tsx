
import React, { useState } from 'react';
import Logo from './Logo.tsx';

interface HeaderProps {
  onCtaClick: () => void;
  setView: (view: 'home' | 'privacy' | 'terms' | 'sla') => void;
}

const Header: React.FC<HeaderProps> = ({ onCtaClick, setView }) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setView('home');
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', `#${id}`);
      }
    }, 100);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-void/90 backdrop-blur-xl border-b border-white/5 py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Left */}
        <div 
          className="flex items-center gap-4 group cursor-pointer" 
          onClick={() => {
            setView('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <span className="font-heading font-black text-2xl tracking-[0.25em] leading-none text-white uppercase transition-colors hover:text-terminal">
            INBOXR PRO
          </span>
        </div>
        
        {/* Center Links */}
        <div className="hidden md:flex items-center space-x-10 text-[11px] font-mono tracking-[0.2em]">
          <a 
            href="#protocol" 
            onClick={(e) => scrollToSection(e, 'protocol')}
            className="text-white/60 hover:text-terminal transition-all uppercase"
          >
            The Protocol
          </a>
          <a 
            href="#math" 
            onClick={(e) => scrollToSection(e, 'math')}
            className="text-white/60 hover:text-terminal transition-all uppercase"
          >
            The Math
          </a>
          <a 
            href="#pricing" 
            onClick={(e) => scrollToSection(e, 'pricing')}
            className="text-white/60 hover:text-terminal transition-all uppercase"
          >
            Pricing
          </a>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-6">
          <div 
            className="relative"
            onMouseEnter={() => setIsLoginOpen(true)}
            onMouseLeave={() => setIsLoginOpen(false)}
          >
            <button className="hidden sm:flex items-center gap-2 text-[10px] font-mono text-white/50 hover:text-terminal transition-colors tracking-widest uppercase py-2">
              [ SYSTEM LOGIN ▾ ]
            </button>
            
            {isLoginOpen && (
              <div className="absolute top-full right-0 w-56 mt-0 glass border border-terminal/20 py-2 shadow-[0_10px_40px_rgba(0,0,0,0.9)] animate-in fade-in slide-in-from-top-2">
                <a 
                  href="https://inboxrpro.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-5 py-4 text-[10px] font-mono text-white/70 hover:text-terminal hover:bg-terminal/10 transition-all border-b border-white/5 group/link active:scale-[0.98]"
                >
                  <span className="text-lg group-hover/link:scale-110 transition-transform">🚀</span> 
                  <span className="tracking-widest uppercase">MISSION CONTROL</span>
                </a>
                <a 
                  href="https://dmarc.inboxrpro.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3 px-5 py-4 text-[10px] font-mono text-white/70 hover:text-terminal hover:bg-terminal/10 transition-all group/link active:scale-[0.98]"
                >
                  <span className="text-lg group-hover/link:scale-110 transition-transform">🛡️</span> 
                  <span className="tracking-widest uppercase">DMARC WATCHTOWER</span>
                </a>
              </div>
            )}
          </div>

          <button 
            onClick={onCtaClick}
            className="bg-terminal text-black font-heading font-black px-7 py-3 text-[10px] tracking-widest uppercase rounded-none hover:bg-white transition-all shadow-[0_0_20px_rgba(0,255,65,0.3)] transform active:scale-95"
          >
            [ BOOK BRIEFING ]
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
