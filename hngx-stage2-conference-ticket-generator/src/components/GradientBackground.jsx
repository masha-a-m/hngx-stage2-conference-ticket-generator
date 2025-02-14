// src/Background.jsx
import React from 'react';

const Background = ({ children }) => {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: 'linear-gradient(180deg, #02191D 100%, #031F24 50%, #073037 100%)', // Set the background color to light blue
      }}
    >
      {children}
    </div>
  );
};

export default Background;