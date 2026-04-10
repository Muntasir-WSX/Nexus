import React from 'react';
import Link from 'next/link';

export default function Logo({ size = 40, className = "", color = "currentColor" }) {
  return (
    <Link href="/" className={`flex items-center justify-center ${className}`}>
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 40 40" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main Circle */}
        <circle 
          cx="20" 
          cy="22" 
          r="10" 
          stroke={color} 
          strokeWidth="3.5" 
          fill="none"
        />
        {/* Top Right Dot */}
        <circle 
          cx="32" 
          cy="10" 
          r="3" 
          fill={color} 
        />
      </svg>
    </Link>
  );
}