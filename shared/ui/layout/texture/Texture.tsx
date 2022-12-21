import React from 'react';

interface TextureProps {
  id: string;
  scale: string | number;
}

export const Texture = ({ id, scale }: TextureProps) => (
  <svg width="0" height="0">
    <filter id={id}>
      <feTurbulence
        x="0"
        y="0"
        baseFrequency="0.02"
        numOctaves="5"
        seed="1"
      ></feTurbulence>
      <feDisplacementMap in="SourceGraphic" scale={scale} />
    </filter>
  </svg>
);
