import React from 'react';
import { motion } from 'framer-motion';

export default function Hero({ onAdvance }) {
  return (
    <section className="fullscreen-hero-viewport">
      <div className="hero-gradient-overlay" />
      <div className="hero-content-cluster">
        <motion.h1 
          className="hero-title-gilded"
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          For Alida ❤️
        </motion.h1>
        
        <motion.p 
          className="hero-subtitle-poetic"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          A journey made from memories, love, and a thousand heartbeats.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <button className="premium-action-trigger-btn" onClick={onAdvance}>
            Begin Our Story
          </button>
        </motion.div>
      </div>
    </section>
  );
}