import React, { useState } from 'react';

// 🌸 The critical "export default" that fixes your Vite error!
export default function GiftBox() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="gift-box-interactive-card" style={{ textAlign: 'center', padding: '20px' }}>
      <h3 className="section-label-heading">🎁 A Tiny Surprise 🎁</h3>
      
      <div 
        className={`gift-box-visual-container ${isOpen ? 'box-is-open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        style={{ 
          cursor: 'pointer', 
          fontSize: '64px', 
          margin: '20px 0',
          transition: 'transform 0.3s ease'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        {isOpen ? '💝' : '🎁'}
      </div>
      
      <p className="gift-box-caption-text" style={{ fontStyle: 'italic', color: '#ff758f' }}>
        {isOpen 
          ? "You are the absolute greatest gift my life has ever received! 🌸" 
          : "Click the box to open your surprise..."}
      </p>
    </div>
  );
}