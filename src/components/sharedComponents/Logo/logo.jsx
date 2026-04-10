import React from 'react';
import Link from 'next/link';

export default function Logo({ size = 32, className = "", color = "#111827" }) {
  return (
    <Link href="/" className={`inline-flex items-center justify-center ${className}`}>
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main Circle - Adjusted for 24x24 grid */}
        <circle 
          cx="11" 
          cy="13" 
          r="7" 
          stroke={color} 
          strokeWidth="2.5" 
        />
        <circle 
          cx="19" 
          cy="5" 
          r="2.5" 
          fill={color} 
        />
      </svg>
    </Link>
  );
}