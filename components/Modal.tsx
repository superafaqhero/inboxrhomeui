
import React from 'react';

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8">
      <div 
        className="absolute inset-0 bg-void/90 backdrop-blur-sm" 
        onClick={onClose}
      ></div>
      <div className="relative glass border border-terminal/30 w-full max-w-4xl max-h-screen overflow-y-auto rounded-none">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white/50 hover:text-terminal transition-colors z-[70] p-2 bg-void/50 rounded"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        <div className="p-1">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
