
import React, { useState, useEffect } from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import ProblemSection from './components/ProblemSection.tsx';
import SolutionPillars from './components/SolutionPillars.tsx';
import Methodology from './components/Methodology.tsx';
import Pricing from './components/Pricing.tsx';
import ROIComparison from './components/ROIComparison.tsx';
import FAQ from './components/FAQ.tsx';
import Footer from './components/Footer.tsx';
import Preloader from './components/Preloader.tsx';
import Modal from './components/Modal.tsx';
import LegalView from './components/LegalView.tsx';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'privacy' | 'terms' | 'sla'>('home');

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const openForm = () => setIsModalOpen(true);

  if (isLoading) return <Preloader />;

  return (
    <div className="relative min-h-screen bg-void hex-bg overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none scanlines z-50"></div>
      
      <Header onCtaClick={openForm} setView={setCurrentView} />
      
      <main className="transition-all duration-500">
        {currentView === 'home' ? (
          <>
            <Hero onCtaClick={openForm} />
            <ProblemSection />
            <SolutionPillars />
            <Methodology />
            <Pricing onCtaClick={openForm} />
            <ROIComparison />
            
            {/* Testimonials Section */}
            <section className="py-24 px-6 border-t border-white/5">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-heading font-black text-center mb-16 tracking-tighter">
                  BATTLE-TESTED <span className="text-terminal">VALIDATION</span>
                </h2>
                <div className="flex justify-center">
                  <div className="w-full max-w-[800px] overflow-hidden rounded-xl glass p-4 border border-terminal/20">
                    <iframe 
                      id="socialjuice-testimonial-10066-vmr2imefg" 
                      src="https://embed.socialjuice.io/testimonial/10066?t=vmr2imefg" 
                      allowTransparency={true} 
                      frameBorder="0" 
                      scrolling="no" 
                      width="100%" 
                      height="450"
                      title="SocialJuice Testimonials"
                    ></iframe>
                  </div>
                </div>
              </div>
            </section>

            <FAQ />
          </>
        ) : (
          <LegalView type={currentView} onBack={() => setCurrentView('home')} />
        )}
      </main>

      <Footer setView={setCurrentView} />

      {/* Deployment Modal */}
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <div className="w-full h-[600px] md:h-[800px]">
             <iframe
                src="https://link.superpowerpro.net/widget/form/DDqFhObr4XGi9TF69AIP"
                style={{ width: '100%', height: '100%', border: 'none', borderRadius: '8px' }}
                id="inline-DDqFhObr4XGi9TF69AIP"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivated"
                data-deactivation-value=""
                data-form-name="Titan Node Deployment"
                data-height="800"
                data-layout-iframe-id="inline-DDqFhObr4XGi9TF69AIP"
                data-form-id="DDqFhObr4XGi9TF69AIP"
                title="Titan Node Deployment Form"
             ></iframe>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default App;
