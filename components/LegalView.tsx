
import React, { useEffect } from 'react';

interface LegalViewProps {
  type: 'privacy' | 'terms' | 'sla';
  onBack: () => void;
}

const LegalView: React.FC<LegalViewProps> = ({ type, onBack }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [type]);

  const renderContent = () => {
    switch (type) {
      case 'privacy':
        return (
          <div className="space-y-12">
            <h1 className="text-4xl md:text-6xl font-heading font-black text-terminal uppercase tracking-tighter">Privacy Policy</h1>
            <p className="font-mono text-xs text-white/40 tracking-widest uppercase">Last Updated: January 15, 2026</p>
            
            <section className="space-y-6">
              <h2 className="text-2xl font-heading font-black uppercase text-white/80">1. Introduction</h2>
              <p className="text-white/60 leading-relaxed font-mono text-sm">
                Inboxr Pro ("Company", "We", "Us", or "Our"), a subsidiary of Bossmaker LLC, respects your privacy and is committed to protecting it through compliance with this policy. This policy describes the types of information we may collect from you or that you may provide when you visit the website inboxrpro.com (our "Website") or use our Sovereign Infrastructure Services (the "Services").
              </p>
              <p className="text-white/40 font-mono text-xs italic">
                Corporate Address: Inboxr Pro / Bossmaker LLC 1209 MOUNTAIN ROAD PL NE STE. 10474 ALBUQUERQUE, NM 87110
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-heading font-black uppercase text-white/80">2. Information We Collect</h2>
              <ul className="space-y-4 text-white/60 font-mono text-sm">
                <li><span className="text-terminal font-bold">:: Personal Identification Information:</span> Name, postal address, email address, telephone number, and payment information.</li>
                <li><span className="text-terminal font-bold">:: Infrastructure Data:</span> Server logs, IP reputation metrics, DMARC reports, and campaign performance data associated with your Titan Node.</li>
                <li><span className="text-terminal font-bold">:: AI Interaction Data:</span> Transcripts and recordings of interactions with our AI Neural Agents (Voice, SMS, Email) for quality assurance and model training purposes.</li>
              </ul>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-heading font-black uppercase text-white/80">3. Use of Data & AI Processing</h2>
              <p className="text-white/60 leading-relaxed font-mono text-sm">
                We use information that we collect about you or that you provide to us, including any personal information:
                To provision your Private Titan Node and Dedicated IPs.
                To inject "Verified Leads" (Business Contact Information) into your account as part of the Service.
                To train and optimize our Neural AI Agents (Voice and Text) to better handle objections and schedule appointments.
                To enforce our Algorithmic Governance standards (monitoring for bounce rates and spam complaints).
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-heading font-black uppercase text-white/80">4. Data Injection & Proprietary Lists</h2>
              <p className="text-white/60 leading-relaxed font-mono text-sm">
                Inboxr Pro provides "Triple-Verified Leads" as part of the subscription. While you have the right to use this data for your business outreach, the source architecture and aggregation methods remain the intellectual property of Bossmaker LLC. We do not sell your personal campaign data to third parties.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-heading font-black uppercase text-white/80">5. Security</h2>
              <p className="text-white/60 leading-relaxed font-mono text-sm">
                We implement enterprise-grade security measures, including physical server isolation (Sovereign Nodes), encryption, and limited access protocols. However, no transmission of data over the internet is 100% secure.
              </p>
            </section>
          </div>
        );
      case 'terms':
        return (
          <div className="space-y-12">
            <h1 className="text-4xl md:text-6xl font-heading font-black text-terminal uppercase tracking-tighter">Terms of Service</h1>
            <p className="font-mono text-xs text-white/40 tracking-widest uppercase">Last Updated: January 15, 2026</p>
            
            <section className="space-y-6">
              <h2 className="text-2xl font-heading font-black uppercase text-white/80">1. Acceptance of the Terms</h2>
              <p className="text-white/60 leading-relaxed font-mono text-sm">
                These terms of use are entered into by and between You and Inboxr Pro, a subsidiary of Bossmaker LLC ("Company," "we," or "us"). By using the Website or purchasing a "Sovereign Node" deployment, you accept and agree to be bound and abide by these Terms of Service.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-heading font-black uppercase text-white/80">2. Sovereign Infrastructure</h2>
              <p className="text-white/60 leading-relaxed font-mono text-sm">
                Inboxr Pro provides "Infrastructure as a Service" (IaaS). <br/>
                <span className="text-terminal font-bold">Ownership:</span> You retain ownership of your data, campaign content, and the reputation of your domain. <br/>
                <span className="text-terminal font-bold">Hardware:</span> The physical servers (Nodes) and IP addresses remain the property of Bossmaker LLC. You are leasing exclusive access. Upon cancellation, hardware access is revoked immediately.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-heading font-black uppercase text-white/80">3. Payment & Refund Policy</h2>
              <p className="text-white/60 leading-relaxed font-mono text-sm">
                <span className="text-terminal font-bold">Setup Fees:</span> All One-Time Provisioning Fees ($1,500 - $2,500) are NON-REFUNDABLE. <br/>
                <span className="text-terminal font-bold">Retainer:</span> Subscription fees are paid in advance. No partial refunds. <br/>
                <span className="text-terminal font-bold">Commitment:</span> Clients agree to a 3-Month Minimum Term for calibration and warm-up.
              </p>
            </section>

            <section className="space-y-6 text-signal/80 bg-signal/5 p-8 border border-signal/20">
              <h2 className="text-2xl font-heading font-black uppercase">4. Prohibited Use</h2>
              <p className="font-mono text-sm">
                Spam Complaint Rates exceeding 0.1% or usage for illegal financial schemes result in immediate termination without refund via our "Kill Switch" protocol.
              </p>
            </section>
          </div>
        );
      case 'sla':
        return (
          <div className="space-y-12">
            <h1 className="text-4xl md:text-6xl font-heading font-black text-terminal uppercase tracking-tighter">SLA Governance</h1>
            <p className="font-mono text-xs text-white/40 tracking-widest uppercase">Version: 1.0 (Titan Protocol)</p>
            
            <section className="space-y-6">
              <h2 className="text-2xl font-heading font-black uppercase text-white/80">1. Hardware Guarantee</h2>
              <p className="text-white/60 leading-relaxed font-mono text-sm">
                99.9% Uptime on all Titan Nodes. Catastrophic failures result in node migration to new clusters within 4 hours at no cost to the client.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-heading font-black uppercase text-white/80">2. Velocity Governance</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 glass border border-terminal/30">
                  <h3 className="text-terminal font-black mb-4 uppercase text-xs tracking-widest">"Green Light" Scaling</h3>
                  <p className="text-white/60 text-xs font-mono">Volume +20% Compound Daily if Bounce &lt; 4% and Complaint &lt; 0.1%.</p>
                </div>
                <div className="p-6 glass border border-signal/30">
                  <h3 className="text-signal font-black mb-4 uppercase text-xs tracking-widest">"Red Light" Safe Mode</h3>
                  <p className="text-white/60 text-xs font-mono">Algorithm throttles node to 150 emails/day if reputation metrics are violated.</p>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-heading font-black uppercase text-white/80">3. Blacklist Remediations</h2>
              <p className="text-white/60 leading-relaxed font-mono text-sm">
                Immediate removal from rotation upon blacklisting. 7-Day Cool-Down period (Warm-up only) required before resuming live traffic after delisting.
              </p>
            </section>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="min-h-screen pt-48 pb-32 px-6">
      <div className="max-w-4xl mx-auto glass p-12 md:p-20 border border-white/10 relative overflow-hidden">
        <button 
          onClick={onBack}
          className="absolute top-8 left-8 text-terminal font-mono text-xs tracking-widest uppercase flex items-center gap-2 group"
        >
          <span className="transition-transform group-hover:-translate-x-2">←</span> Return to Terminal
        </button>
        {renderContent()}
      </div>
    </section>
  );
};

export default LegalView;
