import React, { useState, useEffect } from 'react';

const TARGET_EPOCH = new Date("2025-11-14T00:00:00").getTime();

export default function LoveCounter() {
  const [metrics, setMetrics] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculatedTicker = () => {
      const distance = Date.now() - TARGET_EPOCH;
      setMetrics({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    };

    calculatedTicker();
    const runtimeInterval = setInterval(calculatedTicker, 1000);
    return () => clearInterval(runtimeInterval);
  }, []);

  return (
    <section className="counter-display-block">
      <h2 className="section-label-heading">Our Timeline Metric</h2>
      <div className="glass-metric-matrix-row">
        <div className="matrix-cell-card"><p>{metrics.days}</p><span>Days</span></div>
        <div className="matrix-cell-card"><p>{metrics.hours}</p><span>Hours</span></div>
        <div className="matrix-cell-card"><p>{metrics.minutes}</p><span>Minutes</span></div>
        <div className="matrix-cell-card"><p>{metrics.seconds}</p><span>Seconds</span></div>
      </div>
      <p className="counter-anchor-motto">"Every second with you is my favorite second."</p>
    </section>
  );
}