
import React from 'react';

const SolutionPillars: React.FC = () => {
  const pillars = [
    {
      title: "THE FORTRESS",
      subtitle: "Infrastructure",
      points: [
        "Private Titan Node VPS Isolation.",
        "10 Dedicated IPs + 10 Shield Domains.",
        "BIMI Authentication (Verified Logo)."
      ],
      icon: "🛡️",
      iconColor: "text-terminal"
    },
    {
      title: "THE FUEL",
      subtitle: "Data Injection",
      points: [
        "10,000 Triple-Verified Leads/Mo.",
        "On-demand scale from 250M+ Records.",
        "Triple-ping forensic list scrubbing."
      ],
      icon: "⚡",
      iconColor: "text-cyber"
    },
    {
      title: "THE LABOR",
      subtitle: "Omnichannel Agents",
      points: [
        "5 Neural Agents (Email, SMS, Social, Web, Voice).",
        "Proprietary 'Force-Booking' Logic.",
        "24/7 Human-realistic conversation."
      ],
      icon: "🤖",
      iconColor: "text-terminal"
    },
    {
      title: "THE VISION",
      subtitle: "Mission Control",
      points: [
        "C-Suite Metrics Dashboard.",
        "Live Call Recordings & Analytics.",
        "DMARC Security Watchtower."
      ],
      icon: "🖥️",
      iconColor: "text-cyber"
    }
  ];

  return (
    <section id="protocol" className="py-24 px-6 bg-void/50 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tighter mb-4 uppercase">
            THE <span className="text-terminal">SOLUTION:</span> THE 4 PILLARS
          </h2>
          <p className="text-white/40 font-mono text-[11px] tracking-[0.4em] uppercase font-bold">Military Grade Offensive Marketing Stack</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="glass p-10 border border-white/5 hover:border-terminal/30 transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-white/5 opacity-40">PROTOCOL_MOD_0{idx+1}</div>
              <div className={`mb-8 text-4xl ${pillar.iconColor}`}>
                <div className="w-16 h-16 bg-white/5 flex items-center justify-center rounded-none border border-white/10 group-hover:border-current transition-colors">
                  {pillar.icon}
                </div>
              </div>
              <h3 className="font-heading font-black text-2xl mb-1 tracking-tight uppercase group-hover:text-terminal transition-colors">{pillar.title}</h3>
              <p className="font-mono text-[10px] text-white/40 mb-8 uppercase tracking-widest font-bold italic">{pillar.subtitle}</p>
              <ul className="space-y-4">
                {pillar.points.map((pt, i) => (
                  <li key={i} className="text-sm text-white/60 leading-relaxed flex gap-3">
                    <span className="text-terminal shrink-0 font-bold">::</span> {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionPillars;
