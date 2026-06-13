import React from 'react';

// 🌸 The magical "export default" that hooks right into your App.jsx game logic!
export default function HeartHuntGame({ foundHearts, onFind }) {
  // 5 distinct hiding places for our hearts
  const heartLocations = [
    { id: 1, label: "Under the sofa 🛋️", hint: "Check near the bottom left!" },
    { id: 2, label: "In the coffee mug ☕", hint: "Peeking out from the top right!" },
    { id: 3, label: "Behind the flower vase 🌸", hint: "Hidden in the center alignment!" },
    { id: 4, label: "Inside the book 📖", hint: "Tucked away near the bottom right!" },
    { id: 5, label: "Floating in the clouds ☁️", hint: "Way up at the top center!" }
  ];

  return (
    <section className="heart-hunt-interactive-section" style={{ padding: '40px 20px', textAlign: 'center' }}>
      <h2 className="section-label-heading">💖 The Great Heart Hunt 💖</h2>
      <p className="heart-hunt-tracker-status" style={{ color: '#ff758f', fontWeight: 'bold' }}>
        Hearts Found: {foundHearts.length} / 5
      </p>
      
      {foundHearts.length === 5 ? (
        <div className="game-success-banner-node" style={{ color: '#2ec4b6', margin: '20px 0', fontSize: '18px' }}>
          🎉 You found them all! Scroll down to unlock your secret letter! 🎉
        </div>
      ) : (
        <p className="heart-hunt-instructions" style={{ fontSize: '14px', color: '#888' }}>
          Find and click all 5 hidden hearts across the page to unlock a secret message...
        </p>
      )}

      <div className="heart-hunt-grid-layout" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '15px', marginTop: '20px' }}>
        {heartLocations.map((heart) => {
          const isFound = foundHearts.includes(heart.id);
          return (
            <div 
              key={heart.id}
              className={`hunting-node-card ${isFound ? 'node-completed' : ''}`}
              onClick={() => onFind(heart.id)}
              style={{
                padding: '15px',
                border: '2px dashed #ffb3c1',
                borderRadius: '12px',
                cursor: isFound ? 'default' : 'pointer',
                backgroundColor: isFound ? '#ffe5ec' : '#fff',
                opacity: isFound ? 0.7 : 1,
                minWidth: '200px',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{ fontSize: '24px', marginBottom: '5px' }}>
                {isFound ? '💖' : '🤍'}
              </div>
              <span style={{ fontSize: '14px', color: '#555' }}>
                {isFound ? `Found: ${heart.label}` : heart.hint}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}