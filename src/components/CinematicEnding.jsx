import React from 'react';

// 🌸 Notice "export default function" right here! This fixes the error.
export default function CinematicEnding() {
  return (
    <div className="cinematic-blackout-viewport">
      <div className="interstellar-particle-canvas-layer"></div>
      
      <div className="cinematic-text-composer-stack">
        <p className="cinematic-rendered-line">From the moment our stars aligned...</p>
        <p className="cinematic-rendered-line">Every single day has been a beautiful dream.</p>
        
        <div className="absolute-grand-reveal-box zoom-glow-reveal">
          <span className="heart-pulse-node">🌸</span>
          <h1 className="gilded-name-plate">ALIDA</h1>
          <span className="heart-pulse-node">🌸</span>
        </div>

        <p className="cinematic-rendered-line">Happy Anniversary, My Forever Love.</p>
      </div>
    </div>
  );
}