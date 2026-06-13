import React from 'react';

// 🌸 The magical "export default" that fixes your error!
export default function Constellation() {
  return (
    <div className="constellation-canvas-viewport">
      <h2 className="section-label-heading">🌸 Our Star Alignment 🌸</h2>
      
      <div className="constellation-star-vector-wrapper">
        <div className="node-star">You</div>
        <div className="vector-connecting-line"></div>
        <div className="node-star star-heart">✨ 💖 ✨</div>
        <div className="vector-connecting-line"></div>
        <div className="node-star">Me</div>
      </div>
      
      <p className="constellation-caption-label">
        Our paths were completely written in the stars.
      </p>
    </div>
  );
}