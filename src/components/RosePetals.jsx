import React, { useMemo } from 'react';

export default function RosePetals() {
  const petalsArray = useMemo(() => {
    return Array.from({ length: 16 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 8}s`,
      duration: `${10 + Math.random() * 12}s`,
      scale: 0.6 + Math.random() * 0.8
    }));
  }, []);

  return (
    <div className="ambient-rose-petal-emitter-mask">
      {petalsArray.map((petal) => (
        <div
          key={petal.id}
          className="drifting-rose-petal-element"
          style={{
            left: petal.left,
            animationDelay: petal.delay,
            animationDuration: petal.duration,
            transform: `scale(${petal.scale})`
          }}
        />
      ))}
    </div>
  );
}