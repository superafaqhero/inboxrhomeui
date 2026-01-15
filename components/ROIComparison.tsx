
import React from 'react';

const ROIComparison: React.FC = () => {
  const comparison = [
    { label: "2 SDRs + Call Center", old: "~$15,000 / mo", titan: "INCLUDED (Neural Agents)" },
    { label: "Tech Stack (Twilio/Intercom/Data)", old: "~$3,000 / mo", titan: "INCLUDED (Infrastructure)" },
    { label: "Management Headache", old: "CRITICAL", titan: "ZERO (Managed Node)" },
  ];

  return (
    <section className="py-32 px-6 border-t border-white/5 bg-void">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-7xl font-heading font-black text-center mb-24 tracking-tighter leading-tight uppercase">
          REPLACE YOUR ENTIRE <br/><span className="text-terminal">SALES FLOOR.</span>
        </h2>

        <div className="glass overflow-hidden border border-white/10 shadow-[0_30px_90px_rgba(0,0,0,0.8)]">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 font-mono text-[11px] uppercase tracking-[0.4em] bg-white/[0.03]">
                <th className="p-10 font-black">Cost Component</th>
                <th className="p-10 text-signal font-black text-center bg-signal/5">Old Way (Rental)</th>
                <th className="p-10 text-terminal font-black text-center bg-terminal/5">Titan Protocol</th>
              </tr>
            </thead>
            <tbody className="font-mono text-sm tracking-tight">
              {comparison.map((item, i) => (
                <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors group">
                  <td className="p-10 text-white/80 font-bold group-hover:text-white">{item.label}</td>
                  <td className="p-10 text-signal/70 text-center italic">{item.old}</td>
                  <td className="p-10 text-terminal font-black text-center">{item.titan}</td>
                </tr>
              ))}
              <tr className="bg-terminal/5">
                <td className="p-12 font-heading font-black text-2xl uppercase">Total Monthly Cost</td>
                <td className="p-12 font-heading font-black text-2xl text-signal text-center bg-signal/10">~$18,000/mo</td>
                <td className="p-12 font-heading font-black text-3xl text-terminal text-center shadow-[inset_0_0_20px_rgba(0,255,65,0.1)]">$5,000/mo (Flat)</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="mt-12 text-center text-white/30 font-mono text-[10px] uppercase tracking-[0.3em] font-bold italic italic">
          *Calculated based on average US SDR salaries and enterprise platform subscriptions.
        </div>
      </div>
    </section>
  );
};

export default ROIComparison;
