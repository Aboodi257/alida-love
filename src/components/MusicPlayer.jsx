import React from 'react';

// 🌸 The magical "export default" that receives the music states from App.jsx!
export default function MusicPlayer({ isPlaying, setIsPlaying, volume, setVolume }) {
  return (
    <div className="music-player-floating-widget" style={{
      position: 'fixed',
      bottom: '20px',
      left: '20px',
      backgroundColor: 'rgba(255, 240, 243, 0.95)',
      border: '2px solid #ffb3c1',
      borderRadius: '50px',
      padding: '10px 20px',
      boxShadow: '0 8px 32px rgba(255, 117, 143, 0.15)',
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      zIndex: 9999
    }}>
      <button 
        onClick={() => setIsPlaying(!isPlaying)}
        style={{
          background: '#ff758f',
          border: 'none',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          color: 'white',
          fontSize: '18px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'transform 0.2s'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        {isPlaying ? '⏸️' : '▶️'}
      </button>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
        <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#ff758f', whiteSpace: 'nowrap' }}>
          {isPlaying ? "🎵 Playing Our Song" : "🔇 Music Paused"}
        </span>
        <input 
          type="range" 
          min="0" 
          max="1" 
          step="0.05" 
          value={volume} 
          onChange={(e) => setVolume(parseFloat(e.target.value))}
          style={{
            accentColor: '#ff758f',
            width: '80px',
            height: '4px',
            cursor: 'pointer'
          }}
        />
      </div>
    </div>
  );
}