
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-10 h-10" }) => {
  return (
    <div className={className}>
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00A3FF" />
            <stop offset="100%" stopColor="#00FF41" />
          </linearGradient>
        </defs>
        
        {/* Envelope Body */}
        <path 
          d="M10 30C10 24.4772 14.4772 20 20 20H80C85.5228 20 90 24.4772 90 30V60C90 65.5228 85.5228 70 80 70H20C14.4772 70 10 65.5228 10 60V30Z" 
          stroke="url(#logoGradient)" 
          strokeWidth="6" 
          strokeLinejoin="round"
        />
        
        {/* Envelope Flap */}
        <path 
          d="M10 30L50 55L90 30" 
          stroke="url(#logoGradient)" 
          strokeWidth="6" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />

        {/* Signal Icon in bottom right */}
        <circle cx="90" cy="80" r="8" fill="url(#logoGradient)" />
        <path 
          d="M75 80C75 72.5 81.5 66 89 66" 
          stroke="url(#logoGradient)" 
          strokeWidth="5" 
          strokeLinecap="round"
        />
        <path 
          d="M62 80C62 65 74 53 89 53" 
          stroke="url(#logoGradient)" 
          strokeWidth="5" 
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default Logo;
