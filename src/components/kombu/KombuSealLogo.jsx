import React from 'react';

export default function KombuSealLogo({ className = "w-10 h-10", light = false }) {
  const strokeColor = light ? "#E6D7C8" : "#843A14";
  const textColor = light ? "#E6D7C8" : "#5A3018";
  const leafColor = light ? "#86EFAC" : "#4A7C59";

  return (
    <svg 
      viewBox="0 0 100 100" 
      className={`shrink-0 select-none ${className}`}
      aria-label="Artisanal Kombucha Seal"
    >
      {/* Outer dotted/beaded ring */}
      <circle 
        cx="50" 
        cy="50" 
        r="47" 
        fill="none" 
        stroke={strokeColor} 
        strokeWidth="1.2" 
        strokeDasharray="2 3"
        opacity="0.8"
      />
      {/* Outer solid border */}
      <circle 
        cx="50" 
        cy="50" 
        r="44" 
        fill="none" 
        stroke={strokeColor} 
        strokeWidth="1.5" 
      />
      {/* Inner thin border */}
      <circle 
        cx="50" 
        cy="50" 
        r="32" 
        fill="none" 
        stroke={strokeColor} 
        strokeWidth="0.8" 
        strokeDasharray="1 2"
      />
      
      {/* Circular Text Path */}
      <defs>
        <path
          id="sealTopPath"
          d="M 17,50 A 33,33 0 1,1 83,50"
          fill="none"
        />
        <path
          id="sealBottomPath"
          d="M 83,50 A 33,33 0 0,1 17,50"
          fill="none"
        />
      </defs>

      <text 
        fontSize="7.2" 
        fontWeight="700" 
        letterSpacing="2.8" 
        fill={textColor}
      >
        <textPath href="#sealTopPath" startOffset="50%" textAnchor="middle">
          ARTISANAL KOMBUCHA
        </textPath>
      </text>

      <text 
        fontSize="6.2" 
        fontWeight="600" 
        letterSpacing="2" 
        fill={textColor}
      >
        <textPath href="#sealBottomPath" startOffset="50%" textAnchor="middle">
          • EST. 2014 •
        </textPath>
      </text>

      {/* Center Botanical / SCOBY Leaf icon */}
      <g transform="translate(50, 50) scale(0.65)">
        <path
          d="M0,-24 C14,-10 16,10 0,22 C-16,10 -14,-10 0,-24 Z"
          fill={leafColor}
          opacity="0.9"
        />
        {/* Leaf vein */}
        <path
          d="M0,-20 L0,20"
          stroke="#FAF7F2"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M0,-8 L6,-3 M0,0 L7,5 M0,8 L5,12"
          stroke="#FAF7F2"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path
          d="M0,-12 L-5,-7 M0,-4 L-6,1 M0,4 L-5,8"
          stroke="#FAF7F2"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}
