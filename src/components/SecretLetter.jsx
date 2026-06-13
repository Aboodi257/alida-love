import React, { useState } from 'react';

// 🌸 The crucial "export default" that hooks directly into your cinematic trigger!
export default function SecretLetter({ onTriggerCinematic }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="secret-letter-envelope-wrapper" style={{ padding: '60px 20px', textAlign: 'center' }}>
      <div className="letter-glass-container" style={{
        maxWidth: '600px',
        margin: '0 auto',
        background: '#fff0f3',
        border: '2px dashed #ffb3c1',
        borderRadius: '24px',
        padding: '40px 20px',
        boxShadow: '0 20px 40px rgba(255, 117, 143, 0.1)'
      }}>
        <h2 className="section-label-heading">💌 A Secret Letter Just For You 💌</h2>
        <p style={{ color: '#666', fontSize: '14px', marginBottom: '30px' }}>
          You found all the hearts! Now you can open the final piece of my heart.
        </p>

        {!isOpen ? (
          <button 
            onClick={() => setIsOpen(true)}
            style={{
              background: 'linear-gradient(135deg, #ff758f 0%, #ff758f 100%)',
              color: 'white',
              border: 'none',
              padding: '15px 40px',
              fontSize: '16px',
              fontWeight: 'bold',
              borderRadius: '50px',
              cursor: 'pointer',
              boxShadow: '0 10px 20px rgba(255, 117, 143, 0.3)',
              transition: 'transform 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            Open Envelope ✉️
          </button>
        ) : (
          <div className="letter-opened-content" style={{ animation: 'fadeIn 0.5s ease' }}>
            <p style={{ fontStyle: 'italic', color: '#555', lineHeight: '1.8', fontSize: '16px', textAlign: 'left', padding: '0 20px' }}>
              Dearest Alida,<br/><br/>
              Thank you for being the most incredible person in my world. Every memory we make together is my favorite, and I cherish every second by your side. Here's to us, our love, and all the adventures still waiting for us in our future.<br/><br/>
              Forever and always yours. ❤️
            </p>
            
            <button 
              onClick={onTriggerCinematic}
              style={{
                background: '#ff4d6d',
                color: 'white',
                border: 'none',
                padding: '12px 30px',
                fontSize: '14px',
                fontWeight: 'bold',
                borderRadius: '50px',
                cursor: 'pointer',
                marginTop: '40px',
                transition: 'all 0.3s ease'
              }}
            >
              See Our Star Alignment ✨
            </button>
          </div>
        )}
      </div>
    </section>
  );
}