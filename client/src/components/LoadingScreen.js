import React, { useState, useEffect } from 'react';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  const colors = [
  '#00FF99',  // bright green
  '#00F2A2',
  '#00E6AC',
  '#00D9B7',
  '#00CCC1',
  '#00BFCC',
  '#00B3D6',
  '#00A6E0',
  '#0099EB',
  '#008CE6'   // teal-blue
];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 10) {
          clearInterval(interval);
          setTimeout(() => onLoadingComplete(), 500);
          return 10;
        }
        return prev + 1;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black font-mono">
      <div className="mb-4 text-sm tracking-widest">LOADING ...</div>
      <div className="flex border border-black p-0.5">
        {Array.from({ length: 10 }).map((_, i) => {
          const filled = progress > i;
          return (
            <div
              key={i}
              className="w-3 h-5 mx-0.5 rounded"
              style={{
                backgroundColor: filled ? colors[i % colors.length] : '#D1D5DB' // Tailwind gray-300 equivalent
              }}
            ></div>
            
          );
        })}
      </div>

       {/* Globe background */}
      <img 
        src="/earth.png" 
        alt="Globe background"
        className="absolute top-1/2 left-1/2 w-80 h-80 object-cover z-0 transition-opacity duration-500"
        style={{
          opacity: progress / 10,
          transform: 'translate(-50%, -50%)'// fades in as progress increases
        }}
      />

           {/* Left vertical line moving left off-screen */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-black"
        style={{
          left: `calc(50% - 80px - ${progress * 70}px)`,
          transition: 'left 100ms linear'
        }}
      ></div>

      {/* Right vertical line moving right off-screen */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-black"
        style={{
          left: `calc(50% + 80px + ${progress * 70}px)`,
          transition: 'left 100ms linear'
        }}
      ></div>
    </div>

  );
};

export default LoadingScreen;