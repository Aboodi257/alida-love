import React, { useMemo } from 'react';

export default function ShootingStars() {
  const starsArray = useMemo(() => {
    return Array.from({ length: 6 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 40}%`,
      left: `${Math.random() * 60}%`,
      delay: `${Math.random() * 14}s`,
      duration: `${4 + Math.random() * 5}s`
    }));
  }, []);

  return (
    <div className="ambient-shooting-star-viewport-mask">
      {starsArray.map((star) => (
        <div
          key={star.id}
          className="cosmic-shooting-star-streak"
          style={{
            top: star.top,
            left: star.left,
            animationDelay: star.delay,
            animationDuration: star.duration
          }}
        />
      ))}
    </div>
  );
}