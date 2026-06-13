import React, { useEffect, useState } from 'react';

export default function HeartCursor() {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    const handlePointerMove = (e) => {
      setCoordinates({ x: e.clientX, y: e.clientY });
      setIsMoving(true);
    };

    window.addEventListener('pointermove', handlePointerMove);
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  if (!isMoving) return null;

  return (
    <div 
      className="hardware-accelerated-cursor-node"
      style={{
        transform: `translate3d(${coordinates.x - 10}px, ${coordinates.y - 10}px, 0px)`
      }}
    />
  );
}