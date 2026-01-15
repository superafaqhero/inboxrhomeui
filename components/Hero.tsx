
import React from 'react';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative pt-40 pb-20 px-6 overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Neural Hub Visualization */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyber/5 rounded-full blur-[140px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center relative z-10">
        <div className="lg:col-span-7 space-y-10">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-terminal/10 border border-terminal/30 text-terminal text-[10px] font-mono rounded-none uppercase tracking-widest">
            <span className="w-1.5 h-1.5 bg-terminal rounded-full animate-pulse shadow-[0_0_8px_#00FF41]"></span>
            System Status: Restricted Availability (5 Nodes Remaining)
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black leading-[0.9] tracking-tighter">
            DOMINATE EVERY <span className="text-terminal">CHANNEL.</span><br />
            FORCE THE <span className="text-cyber">APPOINTMENT.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/60 max-w-2xl font-light leading-relaxed">
            The world’s first <span className="text-white font-bold italic">Sovereign Sales Infrastructure.</span> We deploy Intelligent Neural Agents across Email, SMS, Social, Browser, and Voice.
          </p>
          
          <div className="p-8 glass border-l-4 border-terminal max-w-xl group">
            <p className="font-mono text-sm leading-relaxed mb-1 text-white/40 uppercase tracking-widest">The Titan Promise</p>
            <p className="font-heading font-bold text-xl md:text-2xl text-white leading-tight">
              10,000 Leads. 5 Attack Vectors. 1 Outcome: <span className="text-terminal">Booked Calls.</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6">
            <button 
              onClick={onCtaClick}
              className="px-12 py-6 bg-terminal text-black font-heading font-black text-lg tracking-tight hover:scale-105 transition-all shadow-[0_0_30px_rgba(0,255,65,0.4)] group"
            >
              [ APPLY FOR ACCESS ]
            </button>
          </div>
        </div>

        {/* Visual Satellites Component */}
        <div className="hidden lg:col-span-5 lg:flex justify-center relative">
          <div className="relative w-[450px] aspect-square flex items-center justify-center">
             {/* Central Brain */}
             <div className="w-40 h-40 rounded-full bg-void border border-cyber/50 flex items-center justify-center relative z-20 shadow-[0_0_60px_rgba(188,19,254,0.4)] transition-transform hover:scale-110 duration-700">
                <div className="absolute inset-0 bg-cyber/10 rounded-full breathing"></div>
                <div className="text-center relative z-10">
                  <span className="font-heading font-black text-3xl text-cyber animate-pulse block">NEURAL</span>
                  <span className="font-mono text-[10px] text-white/40 tracking-[0.3em] uppercase">Core_v4.0</span>
                </div>
             </div>

             {/* Orbital Path Rings */}
             <div className="absolute w-[320px] h-[320px] rounded-full border border-white/5 z-0"></div>
             <div className="absolute w-[420px] h-[420px] rounded-full border border-white/5 z-0"></div>

             {/* Orbiting Nodes */}
             {[
               { label: 'EMAIL', icon: '✉️', angle: 0 },
               { label: 'SMS', icon: '📱', angle: 72 },
               { label: 'SOCIAL', icon: '💬', angle: 144 },
               { label: 'WEB', icon: '🌐', angle: 216 },
               { label: 'VOICE', icon: '📞', angle: 288 }
             ].map((node, i) => (
               <div 
                 key={node.label}
                 className="absolute w-24 h-24 flex items-center justify-center animate-[orbit_25s_linear_infinite]"
                 style={{ 
                    animationDelay: `${i * -5}s`,
                 }}
               >
                 <div className="glass border border-white/10 rounded-lg p-3 text-center transition-all hover:border-terminal/50 hover:shadow-[0_0_20px_rgba(0,255,65,0.2)]">
                    <span className="text-xl mb-1 block">{node.icon}</span>
                    <span className="font-heading font-black text-[10px] tracking-widest">{node.label}</span>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(190px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(190px) rotate(-360deg); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
