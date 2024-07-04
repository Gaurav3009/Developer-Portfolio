import React, { createContext, useState, useEffect } from 'react';

export const MouseContext = createContext();

export const MouseProvider = ({ children }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <MouseContext.Provider value={position}>
      {children}
    </MouseContext.Provider>
  );
};
