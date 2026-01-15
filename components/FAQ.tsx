
import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqItems = [
    {
      q: "What do you mean by \"Voice Agents\"?",
      a: "Hyper-realistic AI that holds real conversations, handles objections, and books appointments verbally. It breathes, pauses, and understands interruptions just like a human SDR—working 24/7 without burnout."
    },
    {
      q: "What is \"Forcing Appointments\"?",
      a: "Standard agents are passive support tools. Our Neural Agents are Sales Weapons. They don't ask \"How can I help?\" They control the frame and drive the Decision Point: \"I have a slot at 2pm or 4pm, which one works for you?\""
    },
    {
      q: "Is there really no sending limit?",
      a: "Correct. Hardware is uncapped because you own it. We enforce Algorithmic Governance based on reputation. If your health metrics stay green, you can scale to 300,000 messages per day by Day 54."
    },
    {
      q: "Is there a contract?",
      a: "Yes. We require a 3-Month Minimum Commitment because we build physical, sovereign infrastructure for you. Month 1 is calibration, Month 2 is ramping, and Month 3 is where the ROI stabilizes."
    }
  ];

  return (
    <section id="faq" className="py-32 px-6 bg-void relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-terminal/20 to-transparent"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-7xl font-heading font-black tracking-tighter mb-4 uppercase leading-none">
            TITAN <span className="text-terminal">FAQ</span>
          </h2>
          <p className="text-white/40 font-mono text-[11px] uppercase tracking-[0.5em] font-bold italic">Proprietary Training Data & System Logic</p>
        </div>

        <div className="space-y-6">
          {faqItems.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className={`glass border transition-all duration-500 ${isOpen ? 'border-terminal/40 bg-terminal/[0.03] shadow-[0_0_40px_rgba(0,255,65,0.05)]' : 'border-white/5 hover:border-white/20'}`}>
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full p-8 text-left flex justify-between items-center group"
                >
                  <span className={`font-heading font-bold text-lg md:text-xl tracking-tight transition-colors duration-300 ${isOpen ? 'text-terminal' : 'text-white'}`}>
                    {faq.q}
                  </span>
                  <span className={`transition-all duration-700 ${isOpen ? 'rotate-[225deg] text-terminal' : 'text-white/20'}`}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="p-10 pt-0 font-mono text-sm leading-relaxed text-white/60 border-t border-white/5 bg-void/40">
                    <div className="flex gap-6">
                      <div className="hidden sm:flex flex-col items-center gap-1 opacity-20">
                         <div className="w-px h-full bg-terminal"></div>
                         <span className="text-[10px] text-terminal font-black">AI_OUT</span>
                      </div>
                      <p className="text-lg text-white/80">{faq.a}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
