
import React from 'react';

const ProblemSection: React.FC = () => {
  return (
    <section id="problem" className="py-24 border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-heading font-black text-center mb-16 tracking-tighter uppercase leading-tight">
          YOU ARE A <span className="text-signal underline decoration-wavy decoration-signal/50">TENANT</span> IN THEIR DIGITAL PRISON.
        </h2>

        <div className="grid md:grid-cols-2 gap-px bg-white/5 rounded-none overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
          {/* Rental Model - Left Side */}
          <div className="bg-void p-12 relative overflow-hidden group border-r border-white/5">
            <div className="absolute inset-0 bg-signal/5 opacity-40 pointer-events-none"></div>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 rounded-none bg-signal/20 border border-signal/40 flex items-center justify-center text-signal shadow-[0_0_15px_rgba(255,0,51,0.2)]">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
              </div>
              <h3 className="text-3xl font-heading font-black text-signal tracking-tight uppercase">THE RENTAL MODEL</h3>
            </div>
            
            <p className="text-white/40 mb-10 font-mono text-xs uppercase tracking-[0.3em] font-bold italic">Status: "Fragile, Dependent, Throttled"</p>
            
            <ul className="space-y-6 font-mono text-sm leading-relaxed">
              <li className="flex items-start gap-4 p-4 glass border border-signal/10 rounded-sm">
                <span className="text-signal font-black shrink-0">[AGITATED]</span>
                <span className="text-white/70">You rent your inbox from Google. You rent your phone from Twilio. One spam complaint, and they evict you.</span>
              </li>
              <li className="flex items-start gap-4 p-4 glass border border-signal/10 rounded-sm">
                <span className="text-signal font-black shrink-0">[RESTRICTED]</span>
                <span className="text-white/70">One bad hire, and your phone sales tank. You are capped, throttled, and watched.</span>
              </li>
            </ul>
          </div>

          {/* Sovereign Model - Right Side */}
          <div className="bg-charcoal p-12 relative overflow-hidden group">
             <div className="absolute inset-0 bg-terminal/5 opacity-100 pointer-events-none"></div>
             <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 rounded-none bg-terminal/20 border border-terminal/40 flex items-center justify-center text-terminal shadow-[0_0_15px_rgba(0,255,65,0.2)]">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-3xl font-heading font-black text-terminal tracking-tight uppercase">THE SOVEREIGN MODEL</h3>
            </div>

            <p className="text-white/40 mb-10 font-mono text-xs uppercase tracking-[0.3em] font-bold italic">Status: "Unstoppable, Private, Scalable"</p>
            
            <div className="space-y-8">
              <p className="text-xl font-bold leading-snug">
                Inboxr Pro builds <span className="text-terminal">Sovereign Infrastructure.</span> You own the server. You own the IPs. You own the data.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-[11px] uppercase tracking-wider">
                <li className="flex items-center gap-3 p-3 glass border border-terminal/20">
                  <span className="text-terminal font-black">::</span> YOU OWN THE SERVER
                </li>
                <li className="flex items-center gap-3 p-3 glass border border-terminal/20">
                  <span className="text-terminal font-black">::</span> YOU OWN THE DATA
                </li>
                <li className="flex items-center gap-3 p-3 glass border border-terminal/20">
                  <span className="text-terminal font-black">::</span> ZERO CAP LIMITS
                </li>
                <li className="flex items-center gap-3 p-3 glass border border-terminal/20 text-terminal shadow-[0_0_10px_rgba(0,255,65,0.1)]">
                  <span className="text-terminal font-black">::</span> WE MANAGE THE WAR
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
