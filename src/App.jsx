import React, { useState, useEffect, useRef } from 'react';

export default function App() {
  // --- STATES ---
  const [loading, setLoading] = useState(true);
  const [loadStage, setLoadStage] = useState(0);
  const [foundKeys, setFoundKeys] = useState([]);
  const [toast, setToast] = useState('');
  
  // Audio
  const [voicePlaying, setVoicePlaying] = useState(false);
  const [bgMusicPlaying, setBgMusicPlaying] = useState(false);
  const audioRef = useRef(null);
  
  // Live Timer State
  const [timeTogether, setTimeTogether] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Interactions
  const [giftOpen, setGiftOpen] = useState(false);
  const [envelopeOpen, setEnvelopeOpen] = useState(false);
  const [cinematicActive, setCinematicActive] = useState(false);
  
  // Typewriter State
  const [typedLetter, setTypedLetter] = useState('');
  const [typewriterDone, setTypewriterDone] = useState(false);

  // Quiz State
  const [currentQ, setCurrentQ] = useState(0);
  const [quizWon, setQuizWon] = useState(false);
  const [shake, setShake] = useState(false);
  
  // Memory Game State
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [solved, setSolved] = useState([]);
  const [clickCount, setClickCount] = useState(0);

  // Catch The Heart Game State
  const [heartScore, setHeartScore] = useState(0);
  const [heartPos, setHeartPos] = useState({ top: '40%', left: '45%' });

  // Flirty Notes State
  const [flippedNotes, setFlippedNotes] = useState([]);
  
  // Coupons & Bubbles State
  const [redeemedCoupons, setRedeemedCoupons] = useState([]);
  const [poppedBubbles, setPoppedBubbles] = useState([]);
  const [meterValue, setMeterValue] = useState(100);

  // NEW GAME 1: Slot Machine State
  const [reels, setReels] = useState(['🌹', '💍', '🥂']);
  const [spinning, setSpinning] = useState(false);
  const [slotsWon, setSlotsWon] = useState(false);

  // NEW GAME 2: Cipher State
  const [cipherInput, setCipherInput] = useState('');
  const [cipherWon, setCipherWon] = useState(false);

  // NEW GAME 3: The Shell Game (Find the Ring)
  const [shellCups, setShellCups] = useState([false, true, false]);
  const [shellWon, setShellWon] = useState(false);
  const [shellMsg, setShellMsg] = useState("Find the ring...");

  // NEW GAME 4: The 'Do Not Press' Button
  const [btnPresses, setBtnPresses] = useState(0);

  // --- DATA LISTS ---
  const flirtyNotesData = [
    { id: 1, front: "Unlock me 🔒", back: "You have the most intoxicating smile I've ever seen. 😍" },
    { id: 2, front: "Tap here ✨", back: "Is it burning up in here, or is it just my Hayati? 🔥" },
    { id: 3, front: "Secret 💌", back: "I still get crazy butterflies every single time you look at me. 🦋" },
    { id: 4, front: "Open up 💋", back: "You're the absolute best decision I ever made, Jaanam. ❤️" },
    { id: 5, front: "Investment 📈", back: "You're the best investment I've ever made. Way better than any crypto. 💎" },
    { id: 6, front: "Elevate ☕", back: "You elevate my entire existence just by being in it. ✨" }
  ];

  const couponsData = [
    { id: 'c1', title: "Midnight Snack Delivery", desc: "Redeemable for one 2 AM food run, no questions asked." },
    { id: 'c2', title: "Win One Argument", desc: "Use this to instantly win an argument, even if I'm right." },
    { id: 'c3', title: "Unlimited Cuddles", desc: "Valid forever. Mandatory spooning included." },
    { id: 'c4', title: "Hayati's Choice", desc: "You pick the movie, the food, and the plans for the whole day." }
  ];

  const bubblesData = [
    { id: 'b1', text: "Your gorgeous eyes" },
    { id: 'b2', text: "The way you say my name" },
    { id: 'b3', text: "Your intoxicating scent" },
    { id: 'b4', text: "How safe I feel with you" },
    { id: 'b5', text: "That cute little laugh" }
  ];

  // --- THE SECRET LETTER ---
  const fullLetterText = `My sweetest Jaanam,\n\nIf you are reading this, it means you've collected every scattered piece of my heart—just like you do every single day in real life.\n\nFrom the exact second our timeline truly began on November 14th, my entire world shifted on its axis. You aren't just my partner, Alida; you are my absolute dream come true. You are the most breathtaking, radiant, and undeniably sexy woman I have ever laid eyes on. Honestly, is it even legal to look as good as you do?\n\nEvery laugh we share, every lingering touch, every late-night conversation just makes me fall deeper and deeper into you. You are my safe place, my greatest adventure, and my ultimate Hayati. My life, my love, my everything.\n\nI want to spend every single tomorrow making sure you feel as adored, desired, and cherished as you make me feel today. You have me, completely, helplessly, and unconditionally.\n\nForever yours.`;

  // --- INITIALIZATION & TIMER ---
  useEffect(() => {
    setTimeout(() => setLoadStage(1), 1500); 
    setTimeout(() => setLoadStage(2), 3500); 
    setTimeout(() => setLoading(false), 5500); 
    
    const initialCards = ['🌹', '🌹', '💌', '💌', '🥂', '🥂', '💍', '💍'].sort(() => Math.random() - 0.5);
    setCards(initialCards);

    const startDate = new Date('2025-11-14T00:00:00').getTime();
    const timerInterval = setInterval(() => {
      const now = new Date().getTime();
      const distance = now - startDate;
      
      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setTimeTogether({ days, hours, minutes, seconds });
      } else {
        setTimeTogether({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  // --- TYPEWRITER EFFECT ---
  useEffect(() => {
    if (envelopeOpen) {
      let i = 0;
      setTypewriterDone(false);
      setTypedLetter('');
      
      const typingInterval = setInterval(() => {
        setTypedLetter(fullLetterText.slice(0, i));
        i++;
        if (i > fullLetterText.length) {
          clearInterval(typingInterval);
          setTypewriterDone(true);
        }
      }, 35); 
      
      return () => clearInterval(typingInterval);
    }
  }, [envelopeOpen, fullLetterText]);

  // --- LOGIC: EASTER EGGS ---
  const totalKeys = 15;
  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(''), 3500);
  };

  const handleFindKey = (id, message) => {
    if (!foundKeys.includes(id)) {
      setFoundKeys([...foundKeys, id]);
      showToast(`🔑 Key Recovered: ${message}`);
    }
  };

  // --- LOGIC: GAMES & INTERACTIONS ---
  const handleRedeemCoupon = (id) => {
    if (!redeemedCoupons.includes(id)) {
      setRedeemedCoupons([...redeemedCoupons, id]);
      if (id === 'c4') handleFindKey('coupon', 'Hayati gets what Hayati wants!');
    }
  };

  const handlePopBubble = (id) => {
    if (!poppedBubbles.includes(id)) {
      const newPopped = [...poppedBubbles, id];
      setPoppedBubbles(newPopped);
      if (newPopped.length === bubblesData.length) handleFindKey('bubbles', 'Popped all my reasons!');
    }
  };

  const handleMeterChange = (e) => {
    setMeterValue(e.target.value);
    setTimeout(() => setMeterValue(100), 300);
  };

  const handleNoteFlip = (id) => {
    if (!flippedNotes.includes(id)) {
      const newFlipped = [...flippedNotes, id];
      setFlippedNotes(newFlipped);
      if (newFlipped.length === flirtyNotesData.length) handleFindKey('notes', 'Unlocked all my flirty secrets!');
    }
  };

  const moveHeart = () => {
    if (heartScore < 5) {
      setHeartPos({ top: `${Math.random() * 60 + 10}%`, left: `${Math.random() * 60 + 10}%` });
    }
  };

  const catchHeart = (e) => {
    e.stopPropagation();
    if (heartScore < 5) {
      const newScore = heartScore + 1;
      setHeartScore(newScore);
      if (newScore === 5) {
        handleFindKey('catch', 'You caught my racing heart!');
        setHeartPos({ top: '40%', left: '45%' }); 
      } else {
        moveHeart();
      }
    }
  };

  const toggleBackgroundMusic = () => {
    if (audioRef.current) {
      if (bgMusicPlaying) {
        audioRef.current.pause();
        setBgMusicPlaying(false);
      } else {
        audioRef.current.play().catch(() => {});
        setBgMusicPlaying(true);
      }
    }
  };

  const handleVoiceMessageToggle = () => {
    setVoicePlaying(!voicePlaying);
    if (!voicePlaying && bgMusicPlaying) {
      audioRef.current.pause();
      setBgMusicPlaying(false);
    }
  };

  const handleCardClick = (index) => {
    if (flipped.length === 2 || flipped.includes(index) || solved.includes(index)) return;
    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);
    
    if (newFlipped.length === 2) {
      const [first, second] = newFlipped;
      if (cards[first] === cards[second]) {
        const newSolved = [...solved, first, second];
        setSolved(newSolved);
        if (newSolved.length === cards.length) handleFindKey('memory', 'Memory Master!');
      }
      setTimeout(() => setFlipped([]), 1000);
    }
  };

  const questions = [
    { q: "Who is officially the cutest person in the universe?", options: ["Me", "Ryan Gosling", "My Hayati"], a: "My Hayati" },
    { q: "What's the most luxurious thing in my entire life?", options: ["My Yamaha Ray ZR", "A fancy mansion", "You, in my arms"], a: "You, in my arms" },
    { q: "Where does my heart truly belong?", options: ["In my chest", "With Alida", "In a jar"], a: "With Alida" },
    { q: "What is my absolute favorite time of day?", options: ["Morning", "Night", "Anytime I'm looking at you"], a: "Anytime I'm looking at you" }
  ];

  const handleAnswer = (opt) => {
    if (opt === questions[currentQ].a) {
      if (currentQ < questions.length - 1) {
        setCurrentQ(prev => prev + 1);
      } else {
        setQuizWon(true);
        handleFindKey('quiz', 'Perfect Score, Jaanam!');
      }
    } else {
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  const spinSlots = () => {
    if (spinning || slotsWon) return;
    setSpinning(true);
    const symbols = ['🌹', '💍', '🥂', '💌', '💖'];
    
    let spins = 0;
    const spinInterval = setInterval(() => {
      setReels([
        symbols[Math.floor(Math.random() * symbols.length)],
        symbols[Math.floor(Math.random() * symbols.length)],
        symbols[Math.floor(Math.random() * symbols.length)]
      ]);
      spins++;
      
      if (spins > 15) {
        clearInterval(spinInterval);
        setSpinning(false);
        const finalSymbols = Math.random() > 0.4 ? ['💖', '💖', '💖'] : [
          symbols[Math.floor(Math.random() * symbols.length)],
          symbols[Math.floor(Math.random() * symbols.length)],
          symbols[Math.floor(Math.random() * symbols.length)]
        ];
        setReels(finalSymbols);
        
        if (finalSymbols[0] === finalSymbols[1] && finalSymbols[1] === finalSymbols[2]) {
          setSlotsWon(true);
          handleFindKey('slots', 'Jackpot! You won my heart!');
        }
      }
    }, 100);
  };

  const checkCipher = (e) => {
    const val = e.target.value.toUpperCase();
    setCipherInput(val);
    if (val === 'ALIDA' && !cipherWon) {
      setCipherWon(true);
      handleFindKey('cipher', 'My favorite word in the world.');
    }
  };

  const handleShellClick = (idx) => {
    if (shellWon) return;
    if (shellCups[idx]) {
      setShellWon(true);
      setShellMsg("You found it! 💍");
      handleFindKey('shell', 'Master of finding things!');
    } else {
      setShellMsg("Not that one, Hayati. Try again!");
      setShake(true);
      setTimeout(() => setShake(false), 500);
      const newCups = [false, false, false];
      newCups[Math.floor(Math.random() * 3)] = true;
      setShellCups(newCups);
    }
  };

  const handleDoNotPress = () => {
    const next = btnPresses + 1;
    setBtnPresses(next);
    if (next === 1) showToast("Hey, the button says DO NOT PRESS.");
    else if (next === 2) showToast("Jaanam, seriously?");
    else if (next === 3) showToast("You are so stubbornly cute.");
    else if (next === 4) showToast("Okay, fine. One more time.");
    else if (next === 5) {
      showToast("You win. Here is your key! 🔑");
      handleFindKey('stubborn', 'Stubborn but cute.');
    } else {
      showToast("I love you more than anything. ❤️");
    }
  };

  // --- COMPONENT RENDER ---
  if (loading) {
    return (
      <div className="royal-loader-viewport">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700&display=swap');
          .royal-loader-viewport { background: #050002; width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center; flex-direction: column; color: #d4af37; font-family: 'Cinzel', serif; overflow: hidden; }
          .a-drop { font-size: 90px; opacity: 0; transform: scale(3); transition: all 1.5s cubic-bezier(0.175, 0.885, 0.32, 1.275); text-shadow: 0 0 40px rgba(255, 42, 95, 0.6); }
          .a-drop.show { opacity: 1; transform: scale(1); }
          .name-reveal { font-size: 28px; color: #fff; letter-spacing: 16px; margin-top: 20px; opacity: 0; transition: opacity 2s ease; background: linear-gradient(135deg, #ffffff, #ffb1c1); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
          .name-reveal.show { opacity: 1; }
          .cute-loader-msg { position: absolute; bottom: 40px; font-size: 12px; color: #666; letter-spacing: 2px; text-transform: uppercase; font-family: 'Montserrat', sans-serif; opacity: 0; animation: fadeIn 3s 1s forwards; }
          @keyframes fadeIn { to { opacity: 1; } }
        `}</style>
        <div className={`a-drop ${loadStage >= 1 ? 'show' : ''}`}>A</div>
        <div className={`name-reveal ${loadStage >= 2 ? 'show' : ''}`}>ALIDA</div>
        <div className="cute-loader-msg">Loading my entire universe...</div>
      </div>
    );
  }

  return (
    <div className="premium-experience-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&family=Playfair+Display:ital,wght@0,500;0,700;1,500&family=Cinzel:wght@400;600&display=swap');
        
        * { box-sizing: border-box; }
        body { margin: 0; padding: 0; background-color: #030001; color: #F5F5F7; font-family: 'Montserrat', sans-serif; overflow-x: hidden; scroll-behavior: smooth; }
        
        .premium-experience-root { min-height: 100vh; width: 100vw; background: radial-gradient(circle at top right, #1a0008, #030001 70%); position: relative; padding-bottom: 140px; overflow: hidden; }
        .ambient-glow-1, .ambient-glow-2, .ambient-glow-3 { position: absolute; border-radius: 50%; filter: blur(150px); z-index: 0; animation: breathe 14s infinite alternate ease-in-out; pointer-events: none; }
        .ambient-glow-1 { width: 70vw; height: 70vw; background: rgba(229, 9, 20, 0.05); top: -20%; left: -10%; }
        .ambient-glow-2 { width: 60vw; height: 60vw; background: rgba(212, 175, 55, 0.04); bottom: 10%; right: -20%; animation-delay: -5s; }
        .ambient-glow-3 { width: 40vw; height: 40vw; background: rgba(255, 42, 95, 0.03); top: 30%; left: 30%; animation-delay: -9s; }

        .experience-scroll-container { max-width: 760px; margin: 0 auto; padding: 60px 24px; display: flex; flex-direction: column; gap: 70px; position: relative; z-index: 10; }
        
        .glass-card-pro { background: rgba(15, 3, 6, 0.55); backdrop-filter: blur(30px) saturate(200%); -webkit-backdrop-filter: blur(30px) saturate(200%); border: 1px solid rgba(255, 177, 193, 0.1); border-radius: 28px; padding: 45px; box-shadow: 0 25px 60px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.08); text-align: center; transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1); position: relative; overflow: hidden; }
        .glass-card-pro::before { content: ''; position: absolute; top: 0; left: -100%; width: 50%; height: 100%; background: linear-gradient(to right, transparent, rgba(255, 215, 55, 0.03), transparent); transform: skewX(-25deg); transition: 0.7s; }
        .glass-card-pro:hover::before { left: 150%; }
        .glass-card-pro:hover { transform: translateY(-5px); border-color: rgba(255, 177, 193, 0.25); box-shadow: 0 35px 70px rgba(0,0,0,0.9), 0 0 40px rgba(255,42,95,0.08); }
        
        h1, h2, h3 { font-family: 'Playfair Display', serif; }
        .text-gradient-hero { font-size: 68px; font-weight: 700; margin: 0 0 16px 0; background: linear-gradient(135deg, #ffffff 10%, #ffb1c1 90%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; letter-spacing: -1px; cursor: pointer; transition: text-shadow 0.3s; }
        .text-gradient-hero:hover { text-shadow: 0 0 20px rgba(255,177,193,0.4); }
        .section-main-heading { font-size: 34px; color: #ffffff; margin: 0 0 16px 0; letter-spacing: 0.5px; }
        .section-sub-caption { font-size: 16px; color: #a1a1a6; margin: 0 0 35px 0; line-height: 1.7; font-weight: 300; }
        
        .secret-trigger { cursor: pointer; transition: all 0.3s; position: relative; text-decoration: underline dotted rgba(255,177,193,0.4); text-underline-offset: 4px; }
        .secret-trigger:hover { color: #ffb1c1; text-shadow: 0 0 15px rgba(255,177,193,0.6); }

        .live-counter-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; margin-top: 25px; }
        .metric-box { background: linear-gradient(145deg, rgba(255,255,255,0.02), rgba(255,42,95,0.01)); border: 1px solid rgba(255,177,193,0.08); padding: 30px 20px; border-radius: 20px; transition: all 0.4s ease; box-shadow: inset 0 0 20px rgba(0,0,0,0.5), 0 10px 30px rgba(0,0,0,0.5); }
        .metric-box:hover { background: rgba(255,42,95,0.04); border-color: rgba(255,177,193,0.3); transform: translateY(-3px); }
        .counter-number-display { font-size: 46px; font-weight: 600; font-family: 'Cinzel', serif; display: block; margin-bottom: 10px; background: linear-gradient(to bottom right, #ffffff, #e6b8c2); -webkit-background-clip: text; -webkit-text-fill-color: transparent; text-shadow: 0 4px 25px rgba(255, 42, 95, 0.2); }
        .counter-unit-label { font-size: 12px; font-weight: 600; color: #86868b; text-transform: uppercase; letter-spacing: 0.3em; }
        
        .constellation-wrapper { display: flex; align-items: center; justify-content: center; gap: 20px; margin: 40px 0; }
        .constellation-node { background: rgba(255,255,255,0.02); padding: 18px 36px; border-radius: 40px; border: 1px solid rgba(255,255,255,0.08); letter-spacing: 2px; font-size: 14px; text-transform: uppercase; font-family: 'Cinzel'; }
        .constellation-node.center-heart { background: transparent; border: none; font-size: 36px; padding: 0; text-shadow: 0 0 35px rgba(255,42,95,0.9); animation: float 3s infinite ease-in-out; cursor: pointer; user-select: none; }
        .constellation-line { height: 1px; flex: 1; max-width: 90px; background: linear-gradient(90deg, transparent, rgba(255,177,193,0.5), transparent); }

        .coupon-grid { display: flex; flex-direction: column; gap: 16px; }
        .coupon-card { border: 1px solid rgba(255,255,255,0.08); border-radius: 18px; padding: 26px; background: linear-gradient(to right, rgba(255,255,255,0.01), rgba(255,42,95,0.04)); cursor: pointer; transition: all 0.4s; position: relative; overflow: hidden; text-align: left; box-shadow: 0 10px 20px rgba(0,0,0,0.3); }
        .coupon-card:hover { background: rgba(255,42,95,0.08); border-color: rgba(255,177,193,0.3); transform: scale(1.02); box-shadow: 0 15px 30px rgba(0,0,0,0.5); }
        .coupon-card.redeemed { opacity: 0.4; filter: grayscale(100%); cursor: not-allowed; transform: none; box-shadow: none; }
        .coupon-title { font-size: 19px; font-weight: 600; color: #ffb1c1; margin: 0 0 10px 0; font-family: 'Playfair Display'; letter-spacing: 1px; }
        .coupon-desc { font-size: 14px; color: #b0b0b5; margin: 0; line-height: 1.6; }
        .redeemed-stamp { position: absolute; right: 20px; top: 50%; transform: translateY(-50%) rotate(-15deg); color: #fff; border: 2px solid #fff; padding: 6px 16px; font-weight: bold; border-radius: 8px; font-size: 13px; opacity: 0.9; letter-spacing: 3px; background: rgba(0,0,0,0.6); backdrop-filter: blur(5px); }

        .bubbles-container { display: flex; flex-wrap: wrap; justify-content: center; gap: 16px; margin-top: 25px; }
        .reason-bubble { background: linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,42,95,0.08)); border: 1px solid rgba(255,255,255,0.08); padding: 16px 26px; border-radius: 40px; cursor: pointer; font-size: 15px; transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); animation: float 4s infinite ease-in-out; box-shadow: inset 0 1px 0 rgba(255,255,255,0.1); }
        .reason-bubble:nth-child(even) { animation-delay: 1.5s; animation-duration: 5s; }
        .reason-bubble:hover { transform: scale(1.1); background: rgba(255,42,95,0.25); border-color: rgba(255,177,193,0.5); box-shadow: 0 10px 25px rgba(255,42,95,0.2); }
        .reason-bubble.popped { transform: scale(0); opacity: 0; pointer-events: none; }

        .styled-slider { -webkit-appearance: none; width: 100%; height: 6px; border-radius: 10px; background: rgba(255,255,255,0.05); outline: none; margin-top: 20px; }
        .styled-slider::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 30px; height: 30px; border-radius: 50%; background: linear-gradient(135deg, #ffb1c1, #FF2A5F); cursor: pointer; box-shadow: 0 0 20px rgba(255,42,95,0.6); border: 2px solid #fff; transition: transform 0.1s; }
        
        .flirty-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; perspective: 1000px; }
        .flip-card { background: transparent; height: 150px; perspective: 1000px; cursor: pointer; }
        .flip-card-inner { position: relative; width: 100%; height: 100%; text-align: center; transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1); transform-style: preserve-3d; }
        .flip-card.flipped .flip-card-inner { transform: rotateY(180deg); }
        .flip-card-front, .flip-card-back { position: absolute; width: 100%; height: 100%; -webkit-backface-visibility: hidden; backface-visibility: hidden; border-radius: 20px; display: flex; align-items: center; justify-content: center; padding: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
        .flip-card-front { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); font-weight: 600; color: #ffb1c1; font-size: 16px; letter-spacing: 1.5px; text-transform: uppercase; }
        .flip-card-back { background: linear-gradient(135deg, rgba(255,42,95,0.15), rgba(15,3,6,0.95)); border: 1px solid rgba(255,177,193,0.3); color: #fff; transform: rotateY(180deg); font-size: 14px; line-height: 1.7; }

        .catch-game-area { position: relative; width: 100%; height: 240px; background: rgba(0,0,0,0.4); border-radius: 20px; border: 1px dashed rgba(255,255,255,0.1); overflow: hidden; margin-top: 25px; box-shadow: inset 0 10px 30px rgba(0,0,0,0.5); }
        .jumping-heart { position: absolute; font-size: 42px; cursor: pointer; user-select: none; transition: top 0.2s ease-out, left 0.2s ease-out; text-shadow: 0 0 25px rgba(255,42,95,0.9); transform: translate(-50%, -50%); }

        .memory-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-top: 25px; }
        .memory-card { aspect-ratio: 1; background: rgba(255,255,255,0.02); border-radius: 18px; display: flex; justify-content: center; align-items: center; font-size: 38px; cursor: pointer; transition: all 0.4s; border: 1px solid rgba(255,255,255,0.06); user-select: none; box-shadow: 0 8px 20px rgba(0,0,0,0.4); }
        .memory-card:hover:not(.solved):not(.flipped) { background: rgba(255,255,255,0.06); border-color: rgba(255,255,255,0.15); }
        .memory-card.flipped { background: rgba(255,42,95,0.08); border-color: rgba(255,177,193,0.4); transform: rotateY(180deg); box-shadow: 0 0 25px rgba(255,42,95,0.2); }
        .memory-card.solved { background: rgba(0,0,0,0.6); border-color: rgba(255,255,255,0.02); opacity: 0.2; cursor: default; }

        .slot-machine { display: flex; justify-content: center; gap: 24px; margin: 35px 0; }
        .slot-reel { width: 90px; height: 110px; background: rgba(0,0,0,0.7); border: 2px solid rgba(255,177,193,0.2); border-radius: 18px; display: flex; justify-content: center; align-items: center; font-size: 52px; box-shadow: inset 0 15px 30px rgba(0,0,0,0.9), 0 10px 20px rgba(0,0,0,0.5); }
        
        .shell-game-row { display: flex; justify-content: center; gap: 30px; margin-top: 25px; }
        .shell-cup { font-size: 60px; cursor: pointer; transition: all 0.3s; filter: drop-shadow(0 10px 10px rgba(0,0,0,0.5)); }
        .shell-cup:hover { transform: translateY(-10px) scale(1.1); filter: drop-shadow(0 20px 20px rgba(255,42,95,0.4)); }

        .btn-luxury { background: linear-gradient(135deg, #FF2A5F, #8a1035); color: white; border: none; padding: 18px 45px; font-size: 15px; border-radius: 40px; cursor: pointer; font-family: 'Montserrat'; font-weight: 600; text-transform: uppercase; letter-spacing: 2.5px; transition: all 0.4s; box-shadow: 0 10px 30px rgba(229,9,20,0.3); border: 1px solid rgba(255,177,193,0.3); }
        .btn-luxury:hover:not(:disabled) { transform: translateY(-4px); box-shadow: 0 15px 40px rgba(255,42,95,0.5); border-color: #ffb1c1; }
        .btn-luxury:disabled { opacity: 0.5; cursor: not-allowed; }

        .btn-danger { background: linear-gradient(180deg, #ff1a1a, #800000); border: 2px solid #ff4d4d; color: white; padding: 20px 50px; font-size: 18px; border-radius: 50px; cursor: pointer; font-family: 'Montserrat', sans-serif; font-weight: bold; letter-spacing: 2px; box-shadow: 0 10px 20px rgba(255, 0, 0, 0.4), inset 0 5px 10px rgba(255,255,255,0.4); transition: transform 0.1s, box-shadow 0.1s; margin-top: 20px; }
        .btn-danger:active { transform: scale(0.95); box-shadow: 0 5px 10px rgba(255, 0, 0, 0.4), inset 0 10px 15px rgba(0,0,0,0.5); }

        .cipher-input { background: rgba(0,0,0,0.6); border: 2px solid rgba(255,255,255,0.08); border-radius: 14px; color: #fff; font-size: 28px; font-family: 'Cinzel', monospace; text-align: center; padding: 18px; width: 220px; letter-spacing: 10px; outline: none; transition: all 0.4s; text-transform: uppercase; box-shadow: inset 0 5px 15px rgba(0,0,0,0.5); }
        .cipher-input:focus { border-color: #ffb1c1; box-shadow: 0 0 20px rgba(255,177,193,0.3), inset 0 5px 15px rgba(0,0,0,0.5); }

        .quiz-option { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); padding: 20px; margin-bottom: 18px; border-radius: 16px; cursor: pointer; transition: all 0.3s; font-size: 16px; text-align: left; box-shadow: 0 5px 15px rgba(0,0,0,0.2); }
        .quiz-option:hover { background: rgba(255,42,95,0.06); border-color: rgba(255,177,193,0.4); transform: translateX(8px); }
        
        .shake-animation { animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both; }

        .vault-container { padding: 55px 45px; background: linear-gradient(180deg, rgba(15,3,6,0.9), #000); border: 1px solid rgba(255,177,193,0.15); border-radius: 32px; position: relative; margin-top: 50px; box-shadow: 0 30px 60px rgba(0,0,0,0.9); }
        .keys-progress { display: flex; justify-content: center; gap: 10px; margin: 35px 0; flex-wrap: wrap; max-width: 100%; }
        .key-slot { width: 35px; height: 35px; border-radius: 50%; background: rgba(0,0,0,0.6); border: 1px dashed rgba(255,255,255,0.15); display: flex; align-items: center; justify-content: center; font-size: 16px; transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
        .key-slot.filled { background: rgba(255,42,95,0.15); border: 1px solid #ffb1c1; color: #ffb1c1; box-shadow: 0 0 15px rgba(255,42,95,0.5); transform: scale(1.15); }
        
        .typewriter-text { line-height: 2.2; font-size: 17px; color: #e5e5ea; margin: 0; white-space: pre-wrap; font-family: 'Playfair Display', serif; font-style: italic; text-align: left; }
        .cursor-blink { display: inline-block; width: 2px; height: 22px; background-color: #ffb1c1; margin-left: 6px; animation: blink 1s step-end infinite; vertical-align: middle; }

        /* --- NEW CINEMATIC BLACKOUT STYLES --- */
        .cinematic-blackout { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: #000000; z-index: 999999; display: flex; justify-content: center; align-items: center; flex-direction: column; padding: 40px; overflow: hidden; }
        
        .neon-glow {
          color: #fff;
          font-family: 'Playfair Display', serif;
          text-align: center;
          text-shadow:
            0 0 10px #fff,
            0 0 20px #ff2a5f,
            0 0 40px #ff2a5f,
            0 0 80px #e60039,
            0 0 120px #e60039;
          animation: neonPulse 1.5s infinite alternate ease-in-out;
        }

        .neon-sub {
          color: #ffb1c1;
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          text-transform: uppercase;
          letter-spacing: 8px;
          text-shadow: 0 0 10px #ff2a5f, 0 0 20px #ff2a5f;
        }

        .fade-in-step-1 { opacity: 0; animation: fadeIn 2s 1s forwards; }
        .fade-in-step-2 { opacity: 0; animation: fadeIn 2s 3.5s forwards; }
        .fade-in-step-3 { opacity: 0; animation: fadeIn 2s 6s forwards; }

        .toast-notification { position: fixed; top: 40px; left: 50%; transform: translateX(-50%); background: rgba(15,3,6,0.95); color: #ffb1c1; padding: 18px 36px; border-radius: 40px; font-size: 15px; font-weight: 600; z-index: 100000; box-shadow: 0 15px 40px rgba(0,0,0,0.9), 0 0 25px rgba(255,42,95,0.25); border: 1px solid rgba(255,177,193,0.15); letter-spacing: 1px; animation: dropDown 0.5s cubic-bezier(0.2,0.8,0.2,1) forwards; backdrop-filter: blur(15px); }

        .audio-widget { position: fixed; bottom: 30px; right: 30px; background: rgba(15, 3, 6, 0.85); backdrop-filter: blur(20px); border: 1px solid rgba(255,177,193,0.15); padding: 12px; border-radius: 40px; display: flex; align-items: center; gap: 15px; z-index: 50000; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
        .audio-btn { background: #fff; color: #000; border: none; width: 44px; height: 44px; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 16px; transition: transform 0.3s; }
        .audio-btn:hover { transform: scale(1.1); }

        @keyframes breathe { 0% { transform: scale(1); opacity: 0.8; } 100% { transform: scale(1.2); opacity: 0.5; } }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
        @keyframes shake { 10%, 90% { transform: translate3d(-2px, 0, 0); } 20%, 80% { transform: translate3d(4px, 0, 0); } 30%, 50%, 70% { transform: translate3d(-6px, 0, 0); } 40%, 60% { transform: translate3d(6px, 0, 0); } }
        @keyframes dropDown { from { transform: translate(-50%, -30px); opacity: 0; } to { transform: translate(-50%, 0); opacity: 1; } }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        @keyframes fadeIn { to { opacity: 1; } }
        
        @keyframes neonPulse { 
          0% { text-shadow: 0 0 10px #fff, 0 0 20px #ff2a5f, 0 0 40px #ff2a5f, 0 0 80px #e60039; } 
          100% { text-shadow: 0 0 5px #fff, 0 0 10px #ff2a5f, 0 0 20px #ff2a5f, 0 0 40px #e60039; } 
        }
      `}</style>

      {toast && <div className="toast-notification">{toast}</div>}

      <div className="ambient-glow-1"></div>
      <div className="ambient-glow-2"></div>
      <div className="ambient-glow-3"></div>
      
      <audio ref={audioRef} src="https://assets.mixkit.co/music/preview/mixkit-romantic-piano-and-strings-108.mp3" loop />

      {!cinematicActive ? (
        <div className="experience-scroll-container">
          
          <div className="glass-card-pro" style={{ padding: '90px 40px' }}>
            <h1 className="text-gradient-hero" onClick={() => showToast("Forever and always. ♾️")}>For Alida.</h1>
            <p className="section-sub-caption" style={{ fontSize: '18px', color: '#ccc' }}>
              Happy Anniversary to my entire{' '}
              <span className="secret-trigger" onClick={() => handleFindKey('hero', 'Hidden in the stars')}>universe</span>.
            </p>
          </div>

          <div className="glass-card-pro">
            <h2 className="section-main-heading secret-trigger" style={{display: 'inline-block'}} onClick={() => handleFindKey('date', 'The day my life started.')}>Since November 14th</h2>
            <p className="section-sub-caption">Our live timeline. Every ticking second is another moment I'm absolutely obsessed with you.</p>
            <div className="live-counter-grid">
              <div className="metric-box"><span className="counter-number-display">{timeTogether.days}</span><span className="counter-unit-label">Days</span></div>
              <div className="metric-box"><span className="counter-number-display">{timeTogether.hours}</span><span className="counter-unit-label">Hours</span></div>
              <div className="metric-box"><span className="counter-number-display">{timeTogether.minutes}</span><span className="counter-unit-label">Minutes</span></div>
              <div className="metric-box" onClick={() => handleFindKey('timer', 'Time stops for you.')}><span className="counter-number-display secret-trigger" style={{textDecoration: 'none'}}>{timeTogether.seconds}</span><span className="counter-unit-label">Seconds</span></div>
            </div>
          </div>

          <div className="glass-card-pro">
            <h2 className="section-main-heading">Cosmic Alignment</h2>
            <p className="section-sub-caption">Our paths crossing wasn't accidental. It was perfectly engineered by fate.</p>
            <div className="constellation-wrapper">
              <div className="constellation-node">Me</div>
              <div className="constellation-line"></div>
              <div className="constellation-node center-heart" onClick={() => { setClickCount(prev => prev + 1); if (clickCount === 2) handleFindKey('heart', 'Heart of the Galaxy'); }}>✦</div>
              <div className="constellation-line"></div>
              <div className="constellation-node">Alida</div>
            </div>
          </div>

          <div className="glass-card-pro">
            <h2 className="section-main-heading">The Jaanam Coupon Book</h2>
            <p className="section-sub-caption">Tap to redeem. Use them wisely (or completely recklessly).</p>
            <div className="coupon-grid">
              {couponsData.map(coupon => {
                const isRedeemed = redeemedCoupons.includes(coupon.id);
                return (
                  <div key={coupon.id} className={`coupon-card ${isRedeemed ? 'redeemed' : ''}`} onClick={() => handleRedeemCoupon(coupon.id)}>
                    <h3 className="coupon-title">{coupon.title}</h3>
                    <p className="coupon-desc">{coupon.desc}</p>
                    {isRedeemed && <div className="redeemed-stamp">REDEEMED</div>}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="glass-card-pro">
            <h2 className="section-main-heading" onClick={() => showToast("I'm the real winner because I have you.")} style={{cursor: 'pointer'}}>Lovers' Jackpot</h2>
            <p className="section-sub-caption">Spin the reels. Match 3 to win my heart (again).</p>
            <div className="slot-machine">
              <div className="slot-reel">{reels[0]}</div>
              <div className="slot-reel">{reels[1]}</div>
              <div className="slot-reel">{reels[2]}</div>
            </div>
            <button className="btn-luxury" onClick={spinSlots} disabled={spinning || slotsWon}>
              {slotsWon ? 'JACKPOT WON 💖' : 'Spin the Reels'}
            </button>
          </div>

          <div className="glass-card-pro">
            <h2 className="section-main-heading">Why I'm Obsessed</h2>
            <p className="section-sub-caption">Pop every bubble to see exactly what drives me crazy about you.</p>
            <div className="bubbles-container">
              {bubblesData.map(bubble => (
                <div key={bubble.id} className={`reason-bubble ${poppedBubbles.includes(bubble.id) ? 'popped' : ''}`} onClick={() => handlePopBubble(bubble.id)}>
                  {bubble.text}
                </div>
              ))}
              {poppedBubbles.length === bubblesData.length && (
                <div style={{ color: '#ffb1c1', fontWeight: '600', width: '100%', marginTop: '15px', animation: 'fadeIn 1.5s', fontStyle: 'italic' }}>
                  (And literally everything else about you...)
                </div>
              )}
            </div>
          </div>

          <div className={`glass-card-pro ${shake ? 'shake-animation' : ''}`}>
            <h2 className="section-main-heading">Where is my heart?</h2>
            <p className="section-sub-caption">{shellMsg}</p>
            <div className="shell-game-row">
              <div className="shell-cup" onClick={() => handleShellClick(0)}>📦</div>
              <div className="shell-cup" onClick={() => handleShellClick(1)}>📦</div>
              <div className="shell-cup" onClick={() => handleShellClick(2)}>📦</div>
            </div>
          </div>

          <div className="glass-card-pro">
            <h2 className="section-main-heading">The Secret Cipher</h2>
            <p className="section-sub-caption">Enter my favorite 5-letter word in the universe.</p>
            <input 
              type="text" 
              maxLength={5}
              value={cipherInput}
              onChange={checkCipher}
              disabled={cipherWon}
              className="cipher-input"
              placeholder="•••••"
            />
            {cipherWon && <div style={{ color: '#ffb1c1', marginTop: '20px', fontWeight: 'bold', letterSpacing: '2px' }}>ACCESS GRANTED 🔓</div>}
          </div>

          <div className="glass-card-pro">
            <h2 className="section-main-heading" onClick={() => showToast("You passed the vibe check perfectly.")} style={{cursor: 'pointer'}}>Vibe Check</h2>
            <p className="section-sub-caption">Try to drag my love for you down. I dare you.</p>
            <div className="love-meter-container">
              <input type="range" min="0" max="100" value={meterValue} onChange={handleMeterChange} className="styled-slider" />
              <div style={{ marginTop: '25px', color: '#ffb1c1', fontSize: '32px', fontWeight: 'bold', fontFamily: 'Cinzel' }}>{meterValue}%</div>
              <p style={{ fontSize: '13px', color: '#86868b', marginTop: '12px' }}>Spoiler: It's impossible.</p>
            </div>
          </div>

          <div className="glass-card-pro">
            <h2 className="section-main-heading">Secrets for Jaanam</h2>
            <p className="section-sub-caption">Tap to unlock exactly what goes through my mind when I look at you.</p>
            <div className="flirty-grid">
              {flirtyNotesData.map((note) => (
                <div key={note.id} className={`flip-card ${flippedNotes.includes(note.id) ? 'flipped' : ''}`} onClick={() => handleNoteFlip(note.id)}>
                  <div className="flip-card-inner">
                    <div className="flip-card-front">{note.front}</div>
                    <div className="flip-card-back">{note.back}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card-pro">
            <h2 className="section-main-heading">Catch My Heart</h2>
            <p className="section-sub-caption">Let's see if you can catch it 5 times to unlock a key. ({heartScore}/5)</p>
            <div className="catch-game-area" onMouseEnter={moveHeart}>
              {heartScore < 5 ? (
                <div className="jumping-heart" style={{ top: heartPos.top, left: heartPos.left }} onClick={catchHeart} onMouseEnter={moveHeart}>❤️</div>
              ) : (
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#ffb1c1', fontSize: '24px', fontWeight: '600', fontStyle: 'italic', fontFamily: 'Playfair Display' }}>It's always been yours.</div>
              )}
            </div>
          </div>

          <div className="glass-card-pro">
            <h2 className="section-main-heading">Match the Moments</h2>
            <p className="section-sub-caption">Find the matching pairs to unlock a memory key.</p>
            <div className="memory-grid">
              {cards.map((icon, idx) => {
                const isFlipped = flipped.includes(idx);
                const isSolved = solved.includes(idx);
                return (
                  <div key={idx} className={`memory-card ${(isFlipped || isSolved) ? 'flipped' : ''} ${isSolved ? 'solved' : ''}`} onClick={() => handleCardClick(idx)}>
                    {(isFlipped || isSolved) ? icon : '✧'}
                  </div>
                );
              })}
            </div>
          </div>

          <div className={`glass-card-pro ${shake ? 'shake-animation' : ''}`}>
            <h2 className="section-main-heading">The Hayati Quiz</h2>
            <p className="section-sub-caption">Answer correctly to recover a vault key.</p>
            {!quizWon ? (
              <div style={{ textAlign: 'left', marginTop: '25px' }}>
                <h3 style={{ fontSize: '19px', color: '#fff', marginBottom: '25px', fontFamily: 'Montserrat', fontWeight: '600', lineHeight: '1.5' }}>{questions[currentQ].q}</h3>
                {questions[currentQ].options.map((opt, i) => (
                  <div key={i} className="quiz-option" onClick={() => handleAnswer(opt)}>{opt}</div>
                ))}
              </div>
            ) : (
              <div style={{ color: '#ffb1c1', padding: '25px 0' }}>
                <span style={{ fontSize: '48px', display: 'block', marginBottom: '15px' }}>✦</span>
                <span style={{ fontSize: '22px', fontWeight: '600', fontFamily: 'Playfair Display' }}>You know us perfectly.</span>
              </div>
            )}
          </div>

          <div className="glass-card-pro">
            <h2 className="section-main-heading">A Simple Test</h2>
            <p className="section-sub-caption">Just whatever you do, please follow the instructions on the button.</p>
            <button className="btn-danger" onClick={handleDoNotPress}>
              DO NOT PRESS
            </button>
          </div>

          <div className="vault-container">
            <h2 className="section-main-heading" style={{ color: '#ffb1c1' }}>The Final Vault</h2>
            <p className="section-sub-caption">Find all {totalKeys} hidden keys throughout this page to decrypt your final anniversary letter.</p>
            
            <div className="keys-progress">
              {Array.from({ length: totalKeys }).map((_, i) => (
                <div key={i} className={`key-slot ${i < foundKeys.length ? 'filled' : ''}`}>
                  {i < foundKeys.length ? '🔑' : '?'}
                </div>
              ))}
            </div>

            {foundKeys.length >= totalKeys ? (
              <div style={{ marginTop: '40px' }}>
                {!envelopeOpen ? (
                  <button className="btn-luxury" onClick={() => setEnvelopeOpen(true)}>Decrypt Letter</button>
                ) : (
                  <div style={{ background: 'rgba(0,0,0,0.4)', padding: '40px', borderRadius: '20px', textAlign: 'left', border: '1px solid rgba(255,177,193,0.2)', boxShadow: 'inset 0 10px 30px rgba(0,0,0,0.5)' }}>
                    <div className="typewriter-text">
                      {typedLetter}
                      {!typewriterDone && <span className="cursor-blink"></span>}
                    </div>
                    {typewriterDone && (
                      <button className="btn-luxury" style={{ width: '100%', marginTop: '40px', animation: 'fadeIn 2s' }} onClick={() => setCinematicActive(true)}>
                        Play Final Scene
                      </button>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <p style={{ color: '#86868b', fontSize: '14px', margin: '25px 0 0 0', lineHeight: '1.6' }}>
                <span style={{ color: '#ffb1c1', fontWeight: '600' }}>{foundKeys.length} / {totalKeys} Keys Recovered</span><br/><br/>
                <span style={{ fontSize: '12px', opacity: 0.8 }}>Hint: Check headers, click the stars, play the games, push boundaries, use the coupons, flip cards, pop bubbles.</span>
              </p>
            )}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            <div className="glass-card-pro" style={{ padding: '35px 20px' }}>
              <h3 style={{ margin: '0 0 15px 0', fontSize: '18px' }}>Audio Note</h3>
              <button onClick={handleVoiceMessageToggle} style={{ background: voicePlaying ? 'linear-gradient(135deg, #FF2A5F, #8a1035)' : 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', width: '55px', height: '55px', borderRadius: '50%', cursor: 'pointer', fontSize: '18px', transition: 'all 0.3s', boxShadow: voicePlaying ? '0 0 20px rgba(255,42,95,0.5)' : 'none' }}>{voicePlaying ? '■' : '▶'}</button>
              <p style={{ fontSize: '13px', color: '#b0b0b5', marginTop: '15px', cursor: 'pointer', transition: 'color 0.3s' }} onClick={() => handleFindKey('audio', 'Listening closely')}>{voicePlaying ? "Playing..." : "Tap to listen"}</p>
            </div>
            <div className="glass-card-pro" style={{ padding: '35px 20px' }}>
              <h3 style={{ margin: '0 0 15px 0', fontSize: '18px' }}>A Small Box</h3>
              <div onClick={() => setGiftOpen(!giftOpen)} style={{ fontSize: '46px', cursor: 'pointer', transform: giftOpen ? 'scale(1.15)' : 'scale(1)', transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)' }}>{giftOpen ? '💍' : '📦'}</div>
              <p style={{ fontSize: '13px', color: '#b0b0b5', marginTop: '15px' }}>{giftOpen ? "Just a hint of the future." : "Don't peek."}</p>
            </div>
          </div>

        </div>
      ) : (
        /* --- BRAND NEW CINEMATIC FINAL SCENE --- */
        <div className="cinematic-blackout">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', maxWidth: '800px' }}>
            
            <h1 className="neon-glow fade-in-step-1" style={{ fontSize: '56px', margin: '0 0 30px 0', lineHeight: '1.3' }}>
              Jaanam, I love you.
            </h1>
            
            <h2 className="neon-glow fade-in-step-2" style={{ fontSize: '32px', margin: '0 0 60px 0', lineHeight: '1.5', fontWeight: '500' }}>
              Forever yours.<br/>I belong to you, my love. ♾️
            </h2>

            <div className="fade-in-step-3" style={{ textAlign: 'center' }}>
              <p className="neon-sub" style={{ fontSize: '14px' }}>Happy Anniversary, Alida</p>
              <div style={{ marginTop: '20px', width: '2px', height: '60px', background: 'linear-gradient(to bottom, #ff2a5f, transparent)', margin: '20px auto 0' }}></div>
            </div>
            
          </div>
        </div>
      )}

      <div className="audio-widget">
        <span style={{ fontSize: '13px', color: '#fff', paddingLeft: '12px', fontWeight: '600', letterSpacing: '1px' }}>Our Song</span>
        <button className="audio-btn" onClick={toggleBackgroundMusic}>{bgMusicPlaying ? '■' : '▶'}</button>
      </div>

    </div>
  );
}