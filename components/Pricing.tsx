
import React from 'react';

interface PricingProps {
  onCtaClick: () => void;
}

const Pricing: React.FC<PricingProps> = ({ onCtaClick }) => {
  const plans = [
    {
      name: "THE SOVEREIGN NODE",
      tagline: "Target: Growth Companies ($1M - $10M).",
      price: "$5,000",
      period: "/ Month",
      setup: "$1,500 One-Time Setup",
      features: [
        "1 Private Server Node (Isolated)",
        "10 Dedicated IPs + 10 Shield Domains",
        "10,000 Verified Leads / Month",
        "Omnichannel Agents (All 5 Channels)",
        "Voice AI Agents (Verbal Booking)",
        "BIMI Setup + Verified Logo Status",
        "Sending Capacity: UNCAPPED"
      ],
      cta: "BOOK MIGRATION CALL",
      highlight: true
    },
    {
      name: "THE EMPIRE CLUSTER",
      tagline: "Target: Enterprise Scale.",
      price: "$9,000",
      period: "/ Month",
      setup: "$2,500 One-Time Setup",
      features: [
        "2 Private Server Nodes (Clustered)",
        "20 Dedicated IPs + 20 Shield Domains",
        "25,000 Verified Leads / Month",
        "Omnichannel Agents (All 5 Channels)",
        "Priority DMARC Surveillance",
        "24/7 Priority Support Handler",
        "Sending Capacity: UNCAPPED (Double Velocity)"
      ],
      cta: "CONTACT ENTERPRISE SALES",
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="py-32 px-6 relative bg-charcoal scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-7xl font-heading font-black tracking-tighter mb-4 uppercase leading-none">THE NODE MODEL</h2>
          <p className="text-white/30 font-mono text-[11px] tracking-[0.5em] uppercase font-bold italic">Sovereign Sales Infrastructure. Zero Intermediaries.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <div key={i} className={`relative glass p-12 border transition-all duration-500 hover:scale-[1.02] ${plan.highlight ? 'border-terminal bg-terminal/[0.02] shadow-[0_0_50px_rgba(0,255,65,0.1)]' : 'border-white/10 bg-void/[0.4]'}`}>
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-terminal text-black px-6 py-1.5 text-[11px] font-black tracking-[0.2em] uppercase">
                  MOST_POPULAR_DEPLOYMENT
                </div>
              )}
              
              <div className="mb-10 pb-10 border-b border-white/5">
                <h3 className="text-3xl font-heading font-black mb-2 uppercase tracking-tight">{plan.name}</h3>
                <p className="text-[11px] text-white/40 font-mono uppercase tracking-widest italic">{plan.tagline}</p>
              </div>
              
              <div className="mb-4">
                <span className="text-6xl font-heading font-black text-terminal">{plan.price}</span>
                <span className="text-lg opacity-40 ml-2 font-mono">{plan.period}</span>
              </div>
              <p className="text-[10px] font-mono text-white/30 mb-12 tracking-widest font-bold uppercase">{plan.setup}</p>

              <ul className="space-y-5 mb-14">
                {plan.features.map((feat, j) => (
                  <li key={j} className="flex items-start gap-4 text-[13px] group/item">
                    <span className="text-terminal font-black shrink-0 transition-transform group-hover/item:scale-125">[x]</span>
                    <span className="text-white/70 font-medium group-hover/item:text-white transition-colors">{feat}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={onCtaClick}
                className={`w-full py-6 font-heading font-black text-sm tracking-widest transition-all shadow-xl rounded-none ${plan.highlight ? 'bg-terminal text-black hover:bg-white glow-terminal' : 'bg-white text-black hover:bg-terminal'}`}
              >
                [ {plan.cta} ]
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
