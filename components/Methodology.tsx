
import React from 'react';

const Methodology: React.FC = () => {
  return (
    <section id="math" className="py-32 px-6 relative overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-flex items-center gap-3 px-4 py-1.5 mb-8 bg-terminal/10 border border-terminal/30 text-terminal text-[10px] font-mono tracking-widest uppercase">
              Algorithmic Governance Protocol
            </div>
            <h2 className="text-5xl md:text-7xl font-heading font-black mb-10 tracking-tighter leading-none">
              NO <span className="text-terminal">SPEED LIMITS.</span><br/>ONLY MATH.
            </h2>
            <div className="space-y-8 text-xl text-white/60 leading-relaxed max-w-xl">
              <p>
                Standard platforms cap you at 500 emails. <span className="text-white font-bold italic">We don't.</span> Your Titan Node is governed by Math, not artificial limits.
              </p>
              
              <div className="grid gap-4 font-mono text-sm">
                <div className="p-5 glass border border-white/5 border-l-4 border-terminal bg-white/[0.02]">
                   <span className="text-terminal font-black mb-2 block tracking-widest uppercase text-xs">The Velocity Clause</span>
                   Scaling is conditional on your IP Reputation. If you stay green, you scale infinitely.
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
             <div className="absolute -inset-10 bg-terminal/5 blur-[100px] pointer-events-none"></div>
             <div className="glass p-12 border border-terminal/20 relative shadow-[0_20px_80px_rgba(0,0,0,0.8)]">
                <div className="flex justify-between items-center mb-10">
                  <h3 className="text-2xl font-heading font-black text-terminal uppercase tracking-tight">The Sovereignty Timeline</h3>
                  <span className="font-mono text-[10px] text-white/20 animate-pulse">Uptime: 99.9% // Titan_v4</span>
                </div>
                
                <div className="space-y-12">
                   {/* Visual Curve */}
                   <div className="relative h-48 border-l border-b border-white/10">
                      <svg className="absolute bottom-0 left-0 w-full h-full text-terminal overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path 
                          d="M0,100 L15,100 C25,100 35,95 45,75 C60,45 80,10 100,0" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="3" 
                          className="shadow-[0_0_15px_#00FF41]"
                        />
                      </svg>
                      <div className="absolute top-0 right-0 text-[10px] font-mono text-terminal animate-pulse font-bold tracking-widest">UNCAPPED_SCALING</div>
                   </div>
                   
                   {/* Phases */}
                   <div className="grid grid-cols-3 gap-4">
                     <div className="space-y-3">
                        <p className="font-mono text-[10px] text-white/30 uppercase tracking-widest">Phase 01</p>
                        <div className="h-1 bg-white/10 w-full"></div>
                        <p className="font-heading font-black text-xs uppercase leading-tight">Day 1-14:<br/><span className="text-white/40 font-mono text-[9px] font-normal">Hardening</span></p>
                     </div>
                     <div className="space-y-3">
                        <p className="font-mono text-[10px] text-terminal/30 uppercase tracking-widest">Phase 02</p>
                        <div className="h-1 bg-terminal/40 w-full"></div>
                        <p className="font-heading font-black text-xs uppercase leading-tight">Day 15-30:<br/><span className="text-terminal font-mono text-[9px] font-normal">20% Growth</span></p>
                     </div>
                     <div className="space-y-3">
                        <p className="font-mono text-[10px] text-terminal/60 uppercase tracking-widest">Phase 03</p>
                        <div className="h-1 bg-terminal w-full glow-terminal"></div>
                        <p className="font-heading font-black text-xs uppercase leading-tight text-terminal">Day 31+:<br/><span className="text-terminal/80 font-mono text-[9px] font-normal italic">Velocity Unleashed</span></p>
                     </div>
                   </div>

                   <div className="p-6 bg-white/[0.03] border-l border-white/10 font-mono text-[11px] leading-relaxed text-white/50">
                      SYSTEM_NOTICE: Scale to 300,000+ messages per day by following the Algorithmic Reputation Logic. Hardware is physical; you own the bandwidth.
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
