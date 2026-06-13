import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const loadingPhrases = [
  "Preparing a journey through our memories...",
  "Loading our laughter...",
  "Loading our smiles...",
  "Loading our love...",
  "Ready ❤️"
];

export default function LoadingScreen({ onComplete }) {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (currentStep < loadingPhrases.length - 1) {
      const delay = currentStep === 0 ? 2200 : 1800;
      const timeout = setTimeout(() => setCurrentStep((prev) => prev + 1), delay);
      return () => clearTimeout(timeout);
    } else {
      const endTimeout = setTimeout(() => onComplete(), 1500);
      return () => clearTimeout(endTimeout);
    }
  }, [currentStep, onComplete]);

  return (
    <motion.div 
      className="fullscreen-loader-viewport"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, filter: "blur(15px)" }}
      transition={{ duration: 1 }}
    >
      <div className="loader-central-stack">
        <motion.p 
          key={currentStep}
          className={`loader-narrative-text ${currentStep === loadingPhrases.length - 1 ? 'accent-ready' : ''}`}
          initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
          transition={{ duration: 0.5 }}
        >
          {loadingPhrases[currentStep]}
        </motion.p>
        <div className="loader-progress-track">
          <motion.div 
            className="loader-progress-fill"
            initial={{ width: "0%" }}
            animate={{ width: `${((currentStep + 1) / loadingPhrases.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
    </motion.div>
  );
}