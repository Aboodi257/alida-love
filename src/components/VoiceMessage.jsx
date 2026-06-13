import React, { useState } from 'react';

// 🌸 The critical "export default" that hooks right into your App.jsx audio states!
export default function VoiceMessage({ isPlaying, setIsPlaying }) {
  const [isVoicePlaying, setIsVoicePlaying] = useState(false);

  const handlePlayVoice = () => {
    setIsVoicePlaying(!isVoicePlaying);
    // If the voice note starts playing, we pause the background music to hear it clearly!
    if (!isVoicePlaying && isPlaying) {
      setIsPlaying(false);
    }
  };

  return (
    <div className="voice-message-interactive-card" style={{
      padding: '20px',
      background: '#fff0f3',
      border: '2px solid #ffb3c1',
      borderRadius: '24px',
      textAlign: 'center',
      minWidth: '280px',
      boxShadow: '0 10px 30px rgba(255, 117, 143, 0.05)'
    }}>
      <h3 className="section-label-heading" style={{ fontSize: '16px', color: '#ff758f', marginBottom: '10px', marginTop: 0 }}>
        🔊 A Message For You
      </h3>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '15px',
        backgroundColor: 'white',
        padding: '10px 15px',
        borderRadius: '50px',
        margin: '15px 0'
      }}>
        <button 
          onClick={handlePlayVoice}
          style={{
            background: '#ff758f',
            border: 'none',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            color: 'white',
            fontSize: '14px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'transform 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          {isVoicePlaying ? '⏸️' : '▶️'}
        </button>

        {/* Simulated pink audio waveform */}
        <div style={{ display: 'flex', gap: '3px', alignItems: 'center', height: '24px' }}>
          {[8, 16, 24, 14, 20, 10, 18, 12, 22, 6].map((height, i) => (
            <div 
              key={i} 
              style={{
                width: '3px',
                height: isVoicePlaying ? `${height}px` : '6px',
                backgroundColor: '#ffb3c1',
                borderRadius: '3px',
                transition: 'height 0.15s ease'
              }}
            />
          ))}
        </div>
      </div>

      <p style={{ fontSize: '12px', color: '#888', fontStyle: 'italic', margin: 0 }}>
        {isVoicePlaying ? "✨ Listening to my heart... ✨" : "Click to play the audio note..."}
      </p>
    </div>
  );
}